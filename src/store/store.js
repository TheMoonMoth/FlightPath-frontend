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
  art: {},
  submissions: {},
  submitter: {
    uploading: 0,
    uploadDone: 0,
    uploadError: 0,
    title: "",
    author: "",
    category: "",
    email: "",
    cv: ""
  },
  url: ""
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
  },
  stateSubmissions(state, json) {
    state.submissions = json;
  },
  stateUrl(state, link){
    state.url = link
  },
  clearUrlState(state){
    state.url = ""
  },
  stateUploading(state){
    state.submitter.uploading = 1
  },
  stateUploadDone(state){
    state.submitter.uploadDone = 1
  },
  stateUploadError(state){
    state.submitter.error = 1
  },
  stateTitle(state, str){
    state.submitter.title = str
  },
  stateAuthor(state, str){
    state.submitter.author = str
  },
  stateCategory(state, str){
    state.submitter.category = str
  },
  stateEmail(state, str){
    state.submitter.email = str
  },
  stateCv(state, str){
    state.submitter.cv = str
  }
};

const apiUrlDev = "http://localhost:5000";
const apiUrlProd = "https://spacelanedb.herokuapp.com";

const actions = {
  fetchFeatures: ({ commit }) => {
    fetch(apiUrlProd + "/featured")
      .then(res => res.json())
      .then(json => {
        commit("stateFeatures", json);
      })
      .catch(error => {
        console.log(error.statusText);
      });
  },
  fetchFiction: ({ commit }) => {
    fetch(apiUrlProd + "/fiction")
      .then(res => res.json())
      .then(json => {
        commit("stateFiction", json);
      })
      .catch(error => {
        console.log(error.statusText);
      });
  },
  fetchPoetry: ({ commit }) => {
    fetch(apiUrlProd + "/poetry")
      .then(res => res.json())
      .then(json => {
        commit("statePoetry", json);
      })
      .catch(error => {
        console.log(error.statusText);
      });
  },
  fetchArt: ({ commit }) => {
    fetch(apiUrlProd + "/visualart")
      .then(res => res.json())
      .then(json => {
        commit("stateArt", json);
      })
      .catch(error => {
        console.log(error.statusText);
      });
  },
  fetchSubmissions: ({ commit }) => {
    fetch(apiUrlProd + "/all-submissions")
      .then(res => res.json())
      .then(json => {
        commit("stateSubmissions", json);
      })
  },
  postDoc: ({ commit }, e) => {
    console.log("Posting from Vuex", e)
    commit("stateUploading")
    fetch(apiUrlProd + "/upload", {
      method: "POST",
      body: new FormData(e.target),
      "Content-Type": "multipart/form-data"
    })
    .then(res => res.json())
    .then(json => commit("stateUrl", json.imageurl))
    .then(thing => commit("stateUploadDone"))
    .catch(err => commit("stateUploadError"))
  },
  handleFullForm: ({ commit }, e) => {
    console.log("Handling the full form now", e)
  },
  clearUrl: ({ commit }) => {
    commit("clearUrlState")
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
