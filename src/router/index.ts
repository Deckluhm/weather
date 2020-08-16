import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TheApp from "@/layout/TheApp.vue";
import Onboarding from "@/views/Onboarding.vue";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/onboarding",
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
