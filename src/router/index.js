import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Featured from "@/components/Features";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "Main",
      component: Main
    },
    {
      path: "/featured",
      name: "Featured",
      component: Featured
    }
  ]
});
