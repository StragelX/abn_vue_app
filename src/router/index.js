import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Watch from "@/views/Watch.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/watch/show=:show",
    name: "Watch",
    component: Watch,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
