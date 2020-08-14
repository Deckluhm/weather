<template lang="pug">
nav
  icon(icon='bars')
  #title {{ title }}
  icon(icon='cog')
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  computed: mapState(["title"])
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
  svg {
    cursor: pointer;
    font-size: x-large;
  }
  #title {
    font-weight: bold;
  }
}
</style>
