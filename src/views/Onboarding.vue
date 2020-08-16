<template lang="pug">
#setup
  h1 Welcome
  button.btn.btn-light.btn-lg(@click='getCurrentLocation()')
    icon(icon='crosshairs')
    | Use current location
</template>

<script lang="ts">
import Vue from "vue";
import Geolocation from "@/services/geolocation";

export default Vue.extend({
  data: () => ({
    isGeolocationEnabled: false,
    city: ""
  }),

  created() {
    this.setGeolocationStatus();
  },

  watch: {
    isGeolocationEnabled() {
      if (this.isGeolocationEnabled) this.goToHome();
    }
  },

  methods: {
    goToHome() {
      this.$router.replace({ name: "Home" });
    },

    async setGeolocationStatus() {
      this.isGeolocationEnabled = await Geolocation.isEnabled();
    },

    getCurrentLocation() {
      Geolocation.get(
        () => {
          this.isGeolocationEnabled = true;
        },
        err => {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }
      );
    }
  }
});
</script>

<style lang="scss" scoped>
#setup {
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: $white;
  h1 {
    margin-bottom: 2rem;
    & + button {
      color: $primary;
      svg {
        margin-right: 0.5em;
      }
    }
  }
}
</style>
