<template lang="pug">
#setup
  ion-icon(name='partly-sunny-outline')
  h1 Weather Please
  button.btn.btn-outline-primary.btn-lg(@click='getCurrentLocation()')
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
  background-color: $white;
  color: $primary;
  ion-icon {
    font-size: 2.5rem;
    & + h1 {
      margin: 1.5rem 0 2.5rem;
    }
  }
  button {
    display: flex;
    align-items: center;
  }
}
</style>
