<template lang="pug">
nav(:class='{ "not-homepage": !isHomePage }')
  icon(icon='bars' v-if='isHomePage')
  router-link(v-else :to='{ name: "Home" }')
    icon(icon='arrow-left')
  #title {{ title }}
  router-link(v-if='isHomePage' :to='{ name: "Settings" }')
    icon(icon='cog')
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { Route } from "vue-router";

export default Vue.extend({
  data() {
    return {
      isHomePage: this.$route.name === "Home"
    };
  },

  computed: mapState(["title"]),

  watch: {
    $route(to: Route) {
      this.isHomePage = to.name === "Home";
    }
  }
});
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: rgba($white, 0.1);
  color: $white;
  &.not-homepage {
    justify-content: flex-start;
    #title {
      margin-left: 1.5rem;
    }
  }
  a {
    display: flex;
    color: $white;
  }
  svg {
    cursor: pointer;
    font-size: x-large;
  }
  #title {
    font-weight: bold;
  }
}
</style>
