import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import { ROUTER_PATH } from "@/constans";
import Completed from "@/pages/Completed.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTER_PATH.HOME,
      name: "home",
      component: Home,
    },
    {
      path: ROUTER_PATH.COMPLETED,
      name: "completed",
      component: Completed,
    },
  ],
});

export default router;
