<template>
  <div id="app">
    <Header></Header>
    <Stub></Stub>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stub from "./components/Stub";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Stub
  },
  created() {
    this.$store.dispatch("fetchFeatures")
  },
  methods: mapActions(["fetchFeatures"])
};
</script>

<style>
/* 

background dark blue: #0b061c 
text light blue: #00e7ff

*/

* {
  margin: 0;
}

body {
  margin: 0;
}

</style>
