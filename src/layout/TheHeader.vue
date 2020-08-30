<template lang="pug">
nav(:class='{ "not-homepage": !isHomePage }')
  ion-icon(name='add-outline' v-if='isHomePage')
  router-link(v-else :to='{ name: "Home" }')
    ion-icon(name='arrow-back-outline')
  #title {{ title }}
  router-link(v-if='isHomePage' :to='{ name: "Settings" }')
    ion-icon(name='settings-outline')
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
  padding: 2rem;
  color: var(--text-color);
  &.not-homepage {
    justify-content: flex-start;
    #title {
      margin-left: 1.5rem;
    }
  }
  a {
    display: flex;
    color: var(--text-color);
  }
  ion-icon {
    cursor: pointer;
    font-size: x-large;
  }
  #title {
    font-weight: bold;
  }
}
</style>
