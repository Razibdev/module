const Module = () => import("./Module.vue");
const Home = () => import("./views/Home.vue");

const moduleRoute = {
  path: "/cart",
  component: Module,
  children: [
    {
      path: "/cart",
      component: Home,
    },
  ],
};

export default router => {
  router.addRoute(moduleRoute);
};
