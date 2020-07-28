<template lang="pug">
nav
  icon(icon='bars')
  #city {{ city }}
  icon(icon='cog')
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    city: "Lyon"
  })
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
  svg {
    cursor: pointer;
    font-size: x-large;
  }
  #city {
    font-weight: bold;
  }
}
</style>
