import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  marquee: "Welcome, please have a seat while we build the page.",
  vol: 1,
  issue: "May, 2018",
  theme: "Exploring The Unknown",
  features: [],
  fiction: {},
  poetry: {},
  art: {}
};

const mutations = {
  stateFeatures(state, json) {
    state.features = json;
  },
  stateFiction(state, json) {
    state.fiction = json;
  },
  statePoetry(state, json) {
    state.poetry = json;
  },
  stateArt(state, json) {
    state.art = json;
  }
};

const apiUrlDev = "http://localhost:5000";
const apiUrlProd = "https://spacelanedb.herokuapp.com";

const actions = {
  fetchFeatures: ({ commit }) => {
    fetch(apiUrlDev + "/featured")
      .then(res => res.json())
      .then(json => {
        commit("stateFeatures", json);
      })
      .catch(error => {
        console.log(error.statusText);
      });
  },
  fetchFiction: ({ commit }) => {
    fetch(apiUrlDev + "/fiction")
      .then(res => res.json())
      .then(json => {
        commit("stateFiction", json);
      })
      .catch(error => {
        console.log(error.statusText);
      });
  },
  fetchPoetry: ({ commit }) => {
    fetch(apiUrlDev + "/poetry")
      .then(res => res.json())
      .then(json => {
        commit("statePoetry", json);
      })
      .catch(error => {
        console.log(error.statusText);
      });
  },
  fetchArt: ({ commit }) => {
    fetch(apiUrlDev + "/visualart")
      .then(res => res.json())
      .then(json => {
        commit("stateArt", json);
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
