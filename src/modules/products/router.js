const Module = () => import("./Module.vue");
const Home = () => import("./views/Home.vue");
const Product = () => import("./views/Product.vue");
const Test = () => import("./views/Test.vue");

const moduleRoute = {
  path: "/products",
  component: Module,
  children: [
    {
      path: "/products",
      component: Home,
    },

    {
      path: "test",
      component: Test,
    },

    {
      path: ":id",
      component: Product,
    },
  ],
};

export default router => {
  
  router.addRoute(moduleRoute);
};
