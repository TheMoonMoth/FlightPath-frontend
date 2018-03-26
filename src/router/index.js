import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Featured from "@/components/Features";
import Submit from "@/components/Submit";
import Manager from "@/components/Manager";
import Formerator from "@/components/TestForm";
import Poetry from "@/components/Poetry";
import Fiction from "@/components/Fiction";
import Art from "@/components/Visualart";
import EdMain from "@/components/Editor/Main";
import AllSubmissions from "@/components/Editor/AllSubmissions"

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
      path: "/editor-main/:category",
      name: "Editor Main",
      component: EdMain,
      children: [
        {
          path: "all",
          name: "AllSubmissions",
          component: AllSubmissions
        },
        {
          path: "fiction",
          name: "Fiction",
          component: Fiction
        },
        {
          path: "poetry",
          name: "Poetry",
          component: Poetry
        }
        // {
        //   path: "accepted",
        //   name: "Accepted",
        //   component: Accepted
        // },
        // {
        //   path: "rejected",
        //   name: "Rejected",
        //   component: Rejected
        // }
      ]
    },
    {
      path: "/poetry",
      name: "Poetry",
      component: Poetry
    },
    {
      path: "/fiction",
      name: "Fiction",
      component: Fiction
    },
    {
      path: "/visualart",
      name: "Art",
      component: Art
    }
  ]
});
