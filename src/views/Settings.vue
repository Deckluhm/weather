<template lang="pug">
#content(v-if='unit')
  h5 Unit
  button#unit(@click='changeUnit()')
    #name {{ capitalizedUnit }}
    #symbol {{ symbol }}
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";
import _ from "lodash";
import getUnit from "@/helpers/get-unit.ts";

export default Vue.extend({
  data: () => ({
    unit: ""
  }),

  computed: {
    capitalizedUnit() {
      return _(this.unit).capitalize();
    },

    symbol() {
      return `°${this.unit[0].toUpperCase()}`;
    }
  },

  created() {
    this.setTitle("Settings");
  },

  mounted() {
    this.unit = getUnit();
  },

  methods: {
    ...mapMutations(["setTitle"]),

    changeUnit() {
      this.unit = this.unit === "celsius" ? "fahrenheit" : "celsius";
      localStorage.setItem("unit", this.unit);
    }
  }
});
</script>

<style lang="scss" scoped>
#content {
  padding: 1.5rem;

  h5 {
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  #unit {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1.5rem;
    border-radius: $border-radius-lg;
    border: 0;
    background-color: rgba(var(--text-color-rgb), 0.1);
    color: var(--background-color);
    #name {
      font-weight: bold;
      color: var(--text-color);
    }
    #symbol {
      color: rgba(var(--text-color-rgb), 0.75);
    }
  }
}
</style>
