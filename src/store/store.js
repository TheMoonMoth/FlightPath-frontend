import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  features: []
};

const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
  stateFeatures(state, json) {
    state.features = json;
  }
};

const actions = {
  increment: ({ commit }) => commit("increment"),
  fetchFeatures: ({ commit }) => {
    fetch("http://localhost:5000/tester")
      .then(res => {
        // console.log(res.json());
        return res.json();
      })
      .then(json => {
        console.log("to be commited", json);
        
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
