<template lang="pug">
#content
  #spinner(v-if='isLoading')
    .spinner-border(role='status')
      span.sr-only Loading...
    h5 Loading
  #today(v-else)
    #temperature
      #sign
        div(v-if='temperature < 0') -
      #number {{ absoluteTemperature }}
      #unit °{{ unitLetter }}
    #condition {{ condition }}
  #forecast(v-if='!isLoading')
    forecast-day(v-for='({ weather, min, max }, index) in forecast' :key='index' :day='index + 1' :weather='weather' :min='min' :max='max')
</template>

<script lang="ts">
import _ from "lodash";
import Vue from "vue";
import { mapMutations } from "vuex";
import ForecastDay from "@/components/ForecastDay.vue";
import Geolocation from "@/services/geolocation.ts";
import OpenWeatherAPI from "@/services/open-weather-api.ts";
import getUnit from "@/helpers/get-unit.ts";
import getConditionName from "@/helpers/get-condition-name.ts";

export default Vue.extend({
  components: {
    ForecastDay
  },

  data: () => ({
    isLoading: true,
    coordinates: {} as Coordinates,
    temperature: 0,
    unit: "",
    rawCondition: "",
    forecast: [] as {
      weather: string;
      min: number;
      max: number;
    }[]
  }),

  computed: {
    absoluteTemperature(): number {
      return Math.abs(this.temperature);
    },

    unitLetter() {
      return this.unit[0].toUpperCase();
    },

    condition(): string {
      return _(this.rawCondition).capitalize();
    }
  },

  mounted() {
    this.unit = getUnit();
    this.fetchWeatherData();
  },

  methods: {
    ...mapMutations(["setTitle"]),

    async fetchCurrentWeather() {
      const { latitude: lat, longitude: lon } = this.coordinates;
      const { data } = await OpenWeatherAPI.fetch("weather", {
        lat,
        lon
      });

      this.setTitle(data.name);
      this.temperature = Math.round(data.main.temp);
      this.rawCondition = getConditionName(data.weather[0].id);
    },

    async fetchForecast5Days() {
      const { latitude: lat, longitude: lon } = this.coordinates;
      const { data } = await OpenWeatherAPI.fetch("onecall", {
        lat,
        lon,
        exclude: "current,minutely,hourly"
      });

      this.forecast = _(data.daily)
        .drop()
        .take(5)
        .map(day => ({
          weather: getConditionName(day.weather[0].id),
          min: Math.round(day.temp.min),
          max: Math.round(day.temp.max)
        }))
        .value();
    },

    async fetchWeatherData() {
      const isGeolocationEnabled = await Geolocation.isEnabled();

      if (isGeolocationEnabled) {
        await Geolocation.get(
          async ({ coords }: { coords: Coordinates }) => {
            this.coordinates = coords;
            await Promise.all([
              this.fetchCurrentWeather(),
              this.fetchForecast5Days()
            ]);
            this.isLoading = false;
          },
          ({ code, message }: { code: number; message: string }) => {
            console.warn(`ERROR(${code}): ${message}`);
          }
        );
      }
    }
  }
});
</script>

<style lang="scss" scoped>
#content {
  padding: 1.5rem;

  #today,
  #spinner {
    margin-top: 5rem;
  }

  #spinner {
    text-align: center;
    color: $white;
    .spinner-border {
      --size: 3rem;
      display: flex;
      width: var(--size);
      height: var(--size);
      margin: auto;
    }
    h5 {
      margin-top: 1.5rem;
    }
  }

  #today {
    width: 100%;
    color: $white;
    #temperature {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1rem;
      line-height: 1;
      #sign,
      #number {
        font-size: 4.5rem;
      }
      #sign {
        flex: 1;
        text-align: right;
      }
      #unit {
        flex: 1;
        margin-top: 0.4rem;
        font-size: 1.75rem;
      }
    }
    #condition {
      text-align: center;
      font-size: 1.25rem;
    }
  }

  #forecast {
    width: calc(100% - 1.5rem * 2);
    position: absolute;
    bottom: 1.5rem;
    padding: 1.5rem;
    border-radius: $border-radius;
    background-color: rgba($white, 0.1);
    color: $white;
  }
}
</style>
