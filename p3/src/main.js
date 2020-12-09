import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import Post from "./components/pages/Post.vue";
import WriteNewPost from "@/components/pages/WriteNewPost.vue";
import store from '@/common/store.js';
Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/posts/new", component: WriteNewPost },
    { path: "/posts/:id", component: Post, props: true },
  ],
});
new Vue({
  router: router,
  store,
  render: (h) => h(App),
}).$mount("#app");
