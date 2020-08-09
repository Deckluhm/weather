<template lang="pug">
nav
  router-link(v-if='isHomePage' :to='{ name: "Cities" }')
    icon(icon='bars')
  router-link(v-else :to='{ name: "Home" }')
    icon(icon='arrow-left')
  #title {{ title }}
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

  computed: {
    ...mapState(["title"])
  },

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
  background-color: rgba(white, 0.1);
  color: white;
  a {
    color: white;
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
