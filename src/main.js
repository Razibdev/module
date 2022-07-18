import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import cartModule from "./modules/cart";
import productsModule from "./modules/products";

import { registerModules } from "./register-modules";

registerModules({
  products: productsModule,
  cart: cartModule,
});

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueAxios, axios);

const requireComponent = require.context(
  "./components",
  false,
  /^\.\/.*$/,
//   /Base-[\w-]+\.vue$/,
//   "sync"
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, ""))
  );
  app.component(componentName, componentConfig.default || componentConfig);
});

app.mount("#app");