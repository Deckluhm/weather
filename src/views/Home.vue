<template lang="pug">
#content
  #today
    #temperature
      | {{ temperature }}
      span °C
    #description {{ description }}
  #forecast
    forecast-day(v-for='({ weather, min, max }, index) in forecast' :day='index' :weather='weather' :min='min' :max='max')
</template>

<script lang="ts">
import Vue from "vue";
import ForecastDay from "@/components/ForecastDay.vue";

export default Vue.extend({
  components: {
    ForecastDay
  },

  data: () => ({
    temperature: 25,
    description: "Clear",
    forecast: [
      {
        weather: "thunder",
        min: 15,
        max: 29
      },
      {
        weather: "cloud",
        min: 12,
        max: 27
      },
      {
        weather: "sun",
        min: 13,
        max: 28
      },
      {
        weather: "sun",
        min: 16,
        max: 33
      },
      {
        weather: "rain",
        min: 12,
        max: 25
      }
    ]
  })
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
    padding: 1rem;
    border-radius: $border-radius;
    background-color: rgba(white, 0.1);
    color: white;
  }
}
</style>
