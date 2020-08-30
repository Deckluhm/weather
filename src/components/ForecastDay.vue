<template lang="pug">
.day
  div
    ion-icon(:name='`${icon}-outline`')
    span.weekday {{ humanDay }}
  .temperatures {{ min }}° / {{ max }}°
</template>

<script lang="ts">
import Vue from "vue";
import Moment from "moment";

export default Vue.extend({
  props: {
    day: {
      type: Number,
      required: true
    },
    weather: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    }
  },

  data: () => ({
    weathers: {
      clear: "sunny",
      clouds: "cloudy",
      rain: "rainy",
      thunderstorm: "flash",
      snow: "snow",
      drizzle: "rainy"
    } as Record<string, string>
  }),

  computed: {
    icon(): string {
      return this.weathers[this.weather];
    },

    humanDay(): string {
      return Moment()
        .add(this.day, "days")
        .format("dddd");
    }
  }
});
</script>

<style lang="scss" scoped>
.day {
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + .day {
    margin-top: 1.5rem;
  }
  div:first-child {
    display: flex;
    align-items: center;
  }
  ion-icon {
    margin-right: 1rem;
    font-size: x-large;
  }
}
</style>
