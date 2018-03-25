<template>
    <article>
        <h1>Visual Arts</h1>
        <section v-for="art in $store.state.art" :key="art.id">
            <h3>{{art.title}}</h3>
            <h4>{{art.artist}}</h4>
            <img :src="art.url" :alt="art.title">
        </section>
    </article>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Art",
  mounted() {
    this.$store.dispatch("fetchArt");
  },
  methods: mapActions(["fetchArt"])
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

article section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 500px);
  padding: 40px 150px;
}

article section:nth-of-type(2),
article section:nth-of-type(2) p {
  align-items: flex-end;
  text-align: right;
}

article section img {
    height: 68vh;
    width: auto;
}

article h1 {
  font-size: 2.2rem;
  color: #04cfe6;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 320px);
  padding: 95px 25px 20px 25px;
  background-image: url(../assets/darkclouds.jpg);
  background-size: 170vmin;
  background-position: 0% 50%;
}

section h3 {
  font-weight: 100;
  font-size: 2rem;
  text-decoration: none;
  border-bottom: 1px solid black;
}

section h4 {
  font-weight: 100;
  font-size: 1.2rem;
  margin-bottom: 25px;
}

section p {
  font-family: "Lora"
}

</style>
