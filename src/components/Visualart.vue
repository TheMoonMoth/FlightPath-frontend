<template>
    <article>
        <h2>A Feast for you Eye holes.</h2>
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

article{
  width: calc(100% - 290px);
  display: flex;
  flex-direction: column;
  border: 5px solid red;
}

article section {
  display: flex;
  flex-direction: column;
  padding: 40px 25px;
}

article section h3 {
    text-decoration: underline;
}

article section img {
    width: 400px;
    height: auto;
}

</style>
