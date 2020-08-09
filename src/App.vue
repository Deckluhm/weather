<template lang="pug">
#app
  the-header
  router-view
</template>

<script lang="ts">
import Vue from "vue";
import TheHeader from "@/layout/TheHeader.vue";

export default Vue.extend({
  components: {
    TheHeader
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

html,
body {
  padding: 0;
}

body {
  margin: 0;
  background-color: #5a9cfe;
  --font-color: pink;
  font-family: Inter;
}
</style>
