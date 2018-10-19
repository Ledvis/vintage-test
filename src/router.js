import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/HomeView.vue";
import PostView from "./views/PostView.vue";
import NotFoundView from "./views/NotFoundView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView,
      props: true
    },
    {
      path: "*",
      name: "notFound",
      component: NotFoundView
    }
  ]
});
