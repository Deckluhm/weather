<template lang="pug">
#weather
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
