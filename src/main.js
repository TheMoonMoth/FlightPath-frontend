import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/store.js";
import VeeValidate from "vee-validate";
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
