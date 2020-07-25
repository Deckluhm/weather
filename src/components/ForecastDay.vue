<template lang="pug">
.day
  div
    icon.fa-fw(:icon='icon' )
    span.weekday {{ humanDay }}
  .temperatures {{ min }}° / {{ max }}°
</template>

<script lang="ts">
import Vue from "vue";
import Moment from "moment";

export default Vue.extend({
  props: {
    day: {
      type: String,
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
      sun: "sun",
      cloud: "cloud",
      rain: "tint",
      thunder: "bolt",
      snow: "snowflake"
    }
  }),

  computed: {
    icon() {
      return this.weathers[this.weather];
    },

    humanDay() {
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
  svg {
    margin-right: 1rem;
  }
}
</style>
