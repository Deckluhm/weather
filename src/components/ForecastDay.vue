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
      clear: "sun",
      clouds: "cloud",
      rain: "tint",
      thunderstorm: "bolt",
      snow: "snowflake",
      drizzle: "tint"
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
  svg {
    margin-right: 1rem;
  }
}
</style>
