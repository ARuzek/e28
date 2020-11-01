import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import ProductsPage from "./components/pages/ProductsPage.vue";
import ShowCategories from "./components/pages/ShowCategories.vue";
import ProductPage from "./components/pages/ProductPage.vue";
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/products", component: ProductsPage },
    { path: "/categories", component: ShowCategories },
    { path: "/products/:id", component: ProductPage, props: true },
  ],
});
new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
