<template lang="pug">
#content
  .city(v-for='city in cities' :key='city')
    icon(icon='map-marker-alt')
    .name {{ city }}
    icon(icon='times' @click='removeCity(city)')
  form#new(@submit.prevent='submit()')
    input(type='text' v-model='city' placeholder='Enter location')
    button(type='submit')
      icon(icon='plus-circle')
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";

export default Vue.extend({
  data: () => ({
    city: ""
  }),

  computed: mapState(["cities"]),

  created() {
    this.setTitle("Cities");
  },

  methods: {
    ...mapMutations(["setTitle", "addCity", "removeCity"]),

    submit() {
      this.addCity(this.city);
      this.city = "";
    }
  }
});
</script>

<style lang="scss" scoped>
#content {
  padding: 1.5rem;

  .city {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: $border-radius;
    background-color: rgba(white, 0.1);
    color: white;
    svg:first-child {
      margin-right: 1rem;
      font-size: x-large;
    }
    svg:last-child {
      cursor: pointer;
      width: 2rem;
      margin-left: auto;
      font-size: large;
    }
  }

  #new {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: $border-radius;
    background-color: rgba(white, 0.1);
    input {
      flex: 1;
      border-radius: $border-radius;
      border: 0;
      background-color: transparent;
      color: white;
    }
    button {
      padding: 0;
      border: 0;
      background: none;
      svg {
        cursor: pointer;
        width: 2rem;
        margin-left: 0.5rem;
        font-size: x-large;
        color: white;
      }
    }
  }
}
</style>
