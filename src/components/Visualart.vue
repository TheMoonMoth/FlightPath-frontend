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

<style>

</style>
