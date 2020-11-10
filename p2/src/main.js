import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/pages/HomePage.vue";
import PostsPage from "./components/pages/PostsPage.vue";
import Post from "./components/pages/Post.vue";
import WriteNewPost from "@/components/pages/WriteNewPost.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/posts", component: PostsPage },
    { path: "/posts/new", component: WriteNewPost },
    { path: "/posts/:id", component: Post, props: true },
  ],
});
new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
