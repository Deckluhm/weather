import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TheApp from "@/layout/TheApp.vue";
import Onboarding from "@/views/Onboarding.vue";
import Home from "@/views/Home.vue";
import Settings from "@/views/Settings.vue";
import Cities from "@/views/Cities.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/onboarding",
    name: "Onboarding",
    component: Onboarding
  },
  {
    path: "/",
    component: TheApp,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings
      },
      {
        path: "/cities",
        name: "Cities",
        component: Cities
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
