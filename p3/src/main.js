import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import Post from "./components/pages/Post.vue";
import WriteNewPost from "@/components/pages/WriteNewPost.vue";
import LoginRegister from "@/components/pages/LoginRegister.vue";
import store from '@/common/store.js';
Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/login", component: LoginRegister },
    { path: "/posts/new", component: WriteNewPost, meta: {
      requiresAuth: true
  } },
    { path: "/posts/:id", component: Post, props: true },
  ],
});

router.beforeEach(async (to, from, next) => {

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  const decide = () => {
      if (requiresAuth && !store.state.user) {
          next('/denied');
      }
      else {
          next();
      }
  }
  
  // If we don't have the user yet, dispatch our Vuex authUser action
  if (store.state.user === null) {
      store.dispatch('authUser').then(() => {
          decide();
      });
  } else {
      decide();
  }

});

new Vue({
  router: router,
  store,
  render: (h) => h(App),
}).$mount("#app");
