import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  marquee: "Welcome, please have a seat while we build the page.",
  features: []
};

const mutations = {
  stateFeatures(state, json) {
    state.features = json;
  }
};

const apiUrlDev = "http://localhost:5000"

const actions = {
  fetchFeatures: ({ commit }) => {
    fetch(apiUrlDev + "/tester")
      .then(res => res.json())
      .then(json => {       
        commit("stateFeatures", json);
      })
      .catch(error => {
        console.log(error.statusText);
      });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
