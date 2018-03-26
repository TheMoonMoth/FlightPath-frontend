<template>
    <article>
        <h1>Editor Tools</h1>
        <ul>
            <router-link tag="li" to="subs-all">ALL SUBMISSIONS</router-link>
            <router-link tag="li" to="subs-fiction">FICTION</router-link>
            <router-link tag="li" to="subs-poetry">POETRY</router-link>
            <router-link tag="li" to="subs-art">ART</router-link>
            <router-link tag="li" to="subs-accepted">ACCEPTED</router-link>
            <router-link tag="li" to="subs-rejected">REJECTED</router-link>
        </ul>
        
        <AllSubmissions v-if="$route.params.category === 'subs-all'"></AllSubmissions>

        <Fiction v-if="$route.params.category === 'subs-fiction'"></Fiction>

        <Poetry v-if="$route.params.category === 'subs-poetry'"></Poetry>

        <Art v-if="$route.params.category === 'subs-art'"></Art>

        <Accepted v-if="$route.params.category === 'subs-accepted'"></Accepted>
        
        <Rejected v-if="$route.params.category === 'subs-rejected'"></Rejected>
    </article> 
</template>

<script>
import { mapActions } from "vuex";

import AllSubmissions from "@/components/Editor/AllSubmissions";
import Fiction from "./Fiction";
import Poetry from "./Poetry";
import Art from "./Art";
import Accepted from "./Accepted";
import Rejected from "./Rejected";

export default {
  name: "EdMain",
  components: {
    AllSubmissions,
    Fiction,
    Poetry,
    Art,
    Accepted,
    Rejected
  },
  mounted() {
    this.$store.dispatch("fetchSubmissions");
  },
  methods: mapActions(["fetchSubmissions"])
};
</script>

<style scoped>
article {
  font-family: "Quicksand";
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

article h1 {
  font-size: 2.2rem;
  color: rgb(196, 255, 213);
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 320px);
  padding: 95px 25px 20px 25px;
  background-image: url(../../assets/mars1.jpg);
  background-size: 170vmin;
  background-position: 0% 83%;
}

article ul {
  font-size: 1rem;
  color: rgb(0, 0, 0);
  font-weight: 100;
  display: flex;
  align-items: space-between;
  width: calc(100% - 320px);
  padding: 20px 25px;
  border-bottom: 1px solid black;
}

article ul li {
  margin-right: 50px;
  cursor: pointer;
}
</style>
