import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import About from '@/components/About';
import Featured from "@/components/Features";
import Submit from "@/components/Submit";
import Manager from "@/components/Manager";
import Formerator from "@/components/TestForm";
import Poetry from "@/components/Poetry";
import Fiction from "@/components/Fiction";
import Art from "@/components/Visualart";
import EdMain from "@/components/Editor/Main";
import SubsAll from "@/components/Editor/AllSubmissions";
import SubsFiction from "@/components/Editor/Fiction";
import SubsPoetry from "@/components/Editor/Poetry";
import SubsArt from "@/components/Editor/Poetry";
import SubsAccepted from "@/components/Editor/Accepted";
import SubsRejected from "@/components/Editor/Rejected";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "Main",
      component: Main,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0);
        next();
      }
    },
    {
      path: "/featured",
      name: "Featured",
      component: Featured,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0);
        next();
      }
    },
    {
      path: "/submit",
      name: "Submit",
      component: Submit,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0);
        next();
      }
    },
    {
      path: "/editor-main/:category",
      name: "Editor Main",
      component: EdMain,
      children: [
        {
          path: "subs-all",
          name: "SubsAll",
          component: SubsAll
        },
        {
          path: "subs-fiction",
          name: "SubsFiction",
          component: SubsFiction
        },
        {
          path: "subs-poetry",
          name: "SubsPoetry",
          component: SubsPoetry
        },
        {
          path: "subs-art",
          name: "SubsArt",
          component: SubsArt
        }
        // {
        //   path: "subs-accepted",
        //   name: "Accepted",
        //   component: Accepted
        // },
        // {
        //   path: "subs-rejected",
        //   name: "Rejected",
        //   component: Rejected
        // }
      ],
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0);
        next();
      }
    },
    {
      path: "/poetry",
      name: "Poetry",
      component: Poetry,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0);
        next();
      }
    },
    {
      path: "/fiction",
      name: "Fiction",
      component: Fiction,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0);
        next();
      }
    },
    {
      path: "/visualart",
      name: "Art",
      component: Art,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0);
        next();
      }
    },
    {
      path: "/about",
      name: "About",
      component: About,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0);
        next();
      }
    }
  ]
});
