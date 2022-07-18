import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.addRoute({
  path: "/about",
  name: "About",
  component: About,
});

export default router;
