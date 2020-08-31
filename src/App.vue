<template lang="pug">
#app
  router-view
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  computed: mapState(["currentCondition"]),

  watch: {
    currentCondition() {
      document.body.className = this.currentCondition;
    }
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
@import "bootstrap";

@mixin background-color($primary-color, $secondary-color) {
  --background-color: #{$primary-color};
  --background-color-secondary: #{$secondary-color};
}

@mixin text-color($hex-color) {
  --text-color: #{$hex-color};
  --text-color-rgb: #{red($hex-color)}, #{green($hex-color)},
    #{blue($hex-color)};
}

body {
  @include background-color($blue-500, $blue-700);
  font-family: Inter;
  @include text-color($white);

  &.clear {
    @include background-color($blue-500, $blue-700);
    @include text-color($white);
  }
  &.clouds {
    @include background-color($gray-200, $gray-400);
    @include text-color($gray-700);
    #app {
      border-color: $gray-500;
    }
  }
  &.drizzle {
    @include background-color($blue-600, $blue-800);
    @include text-color($white);
  }
  &.rain {
    @include background-color($blue-600, $blue-800);
    @include text-color($white);
  }
  &.snow {
    @include background-color($white, $gray-200);
    @include text-color($gray-700);
    #app {
      border-color: $gray-500;
    }
  }
  &.thunderstorm {
    @include background-color($blue-700, $blue-900);
    @include text-color($white);
  }
  &.atmosphere {
    @include background-color($blue-700, $blue-900);
    @include text-color($white);
  }

  #app {
    transition: background-color 0.5s;
    width: 100%;
    height: 100vh;
    background: linear-gradient(
      180deg,
      var(--background-color) 0%,
      var(--background-color-secondary) 100%
    );
    @include media-breakpoint-up(sm) {
      position: relative;
      max-width: 450px;
      height: 800px;
      margin: 3rem auto;
      border-radius: 1rem;
      border: $white 1px solid;
    }
  }
}
</style>
