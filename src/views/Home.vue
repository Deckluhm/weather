<template lang="pug">
#content
  #today
    #temperature
      | {{ temperature }}
      span °C
    #condition {{ condition }}
  #forecast
    forecast-day(v-for='({ weather, min, max }, index) in forecast' :key='index' :day='index + 1' :weather='weather' :min='min' :max='max')
</template>

<script lang="ts">
import _ from "lodash";
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import ForecastDay from "@/components/ForecastDay.vue";
import OpenWeatherAPI from "@/services/open-weather-api.ts";
import getConditionName from "@/helpers/get-condition-name.ts";

export default Vue.extend({
  components: {
    ForecastDay
  },

  data: () => ({
    coordinates: [0, 0],
    temperature: 0,
    rawCondition: "",
    forecast: [] as {
      weather: string;
      min: number;
      max: number;
    }[]
  }),

  computed: {
    ...mapState(["cities"]),

    currentCity(): string {
      return this.cities[0];
    },

    condition(): string {
      return _(this.rawCondition).capitalize();
    }
  },

  async created() {
    this.setTitle(this.currentCity);
    await this.fetchCurrentWeather();
    this.fetchForecast5Days();
  },

  methods: {
    ...mapMutations(["setTitle"]),

    async fetchCurrentWeather() {
      const { data } = await OpenWeatherAPI.fetch("weather", {
        q: this.currentCity
      });

      this.coordinates = [data.coord.lat, data.coord.lon];
      this.temperature = Math.round(data.main.temp);
      this.rawCondition = getConditionName(data.weather[0].id);
    },

    async fetchForecast5Days() {
      const [lat, lon] = this.coordinates;
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
    }
  }
});
</script>

<style lang="scss" scoped>
#content {
  padding: 1.5rem;

  #today {
    box-sizing: border-box;
    width: 100%;
    background-color: #5a9cfe;
    color: white;
    #temperature {
      display: flex;
      align-items: flex-start;
      margin-bottom: 0.5rem;
      line-height: 1;
      font-size: 3.5rem;
      span {
        font-size: 2rem;
      }
    }
  }

  #forecast {
    box-sizing: border-box;
    width: calc(100% - 1.5rem * 2);
    position: absolute;
    bottom: 1.5rem;
    padding: 1.5rem;
    border-radius: $border-radius;
    background-color: rgba(white, 0.1);
    color: white;
  }
}
</style>
