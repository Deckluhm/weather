import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faArrowLeft,
  faCog,
  faSun,
  faCloud,
  faTint,
  faBolt,
  faCrosshairs
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faBars,
  faArrowLeft,
  faCog,
  faSun,
  faCloud,
  faTint,
  faBolt,
  faCrosshairs
);

Vue.component("icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
