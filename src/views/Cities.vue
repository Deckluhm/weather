<template lang="pug">
#content
  #current-location.city
    ion-icon(name='locate-outline')
    .name Current location
    ion-icon(name='close-outline')
  .city(v-for='city in cities' :key='city')
    ion-icon(name='location-outline')
    .name {{ city }}
    ion-icon(name='close-outline' @click='removeCity(city)')
  form#new(@submit.prevent='submit($event)')
    input(type='text' v-model='city' required placeholder='Enter location')
    button(type='submit')
      ion-icon(name='add-outline')
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

    submit(event: { target: HTMLFormElement }) {
      this.addCity(this.city);
      event.target.reset();
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
    padding: 1rem 0.75rem 1rem 1rem;
    border-radius: $border-radius;
    border: transparent 1px solid;
    background-color: rgba(var(--text-color-rgb), 0.1);
    color: var(--text-color);
    &#current-location {
      border-color: var(--text-color);
    }
    ion-icon {
      font-size: x-large;
    }
    ion-icon:first-child {
      margin-right: 1rem;
    }
    ion-icon:last-child {
      cursor: pointer;
      margin-left: auto;
    }
  }

  #new {
    display: flex;
    position: relative;
    align-items: center;
    border-radius: $border-radius;
    background-color: rgba(var(--text-color-rgb), 0.1);
    input {
      flex: 1;
      padding: 1rem;
      border-radius: $border-radius;
      border: 0;
      background-color: transparent;
      color: var(--text-color);
    }
    button {
      display: flex;
      position: absolute;
      right: 0.75rem;
      padding: 0;
      border: 0;
      background: none;
      ion-icon {
        cursor: pointer;
        font-size: x-large;
        color: var(--text-color);
      }
      svg {
        cursor: pointer;
        width: 2rem;
        font-size: x-large;
        color: var(--text-color);
      }
    }
  }
}
</style>
