import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Weather",
    cities: ["Lyon"] as Array<string>
  },

  mutations: {
    setTitle(state, title: string) {
      state.title = title;
    },

    addCity(state, city: string) {
      state.cities.push(city);
    },

    removeCity(state, city: string) {
      state.cities = state.cities.filter(city_ => city_ !== city);
    }
  }
});
