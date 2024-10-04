import { createRouter, createWebHistory } from "vue-router";
import Main from "@/layouts/Main.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    redirect: { name: 'Home' },
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
