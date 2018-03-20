import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/store.js";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
