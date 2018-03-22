import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Featured from "@/components/Features";
import Submit from "@/components/Submit";
import Manager from "@/components/Manager";
import Formerator from "@/components/TestForm"

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
    },
    {
      path: "/submit",
      name: "Submit",
      component: Submit
    },
    {
      path: "/manager",
      name: "Manager",
      component: Manager
    },
    {
      path: "/formerator",
      name: "Formerator",
      component: Formerator
    }
  ]
});
