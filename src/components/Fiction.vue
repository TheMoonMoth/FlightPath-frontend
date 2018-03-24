<template>
    <article>
        <h2>All the Fiction</h2>
        <section v-for="fic in $store.state.fiction" :key="fic.id">
            <h3>{{fic.title}}</h3>
            <h4>{{fic.author}}</h4>
            <p v-for="(para, i) in fic.body" :key="i">{{para}}</p>
        </section>
    </article>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Fiction",
  mounted() {
    this.$store.dispatch("fetchFiction");
  },
  methods: mapActions(["fetchFiction"])
};
</script>

<style>

</style>
