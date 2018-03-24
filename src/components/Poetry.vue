<template>
    <article>
        <h2>Poems for days</h2>
        <section v-for="poem in $store.state.poetry" :key="poem.id">
            <h3>{{poem.title}}</h3>
            <h4>{{poem.author}}</h4>
            <p v-for="(para, i) in poem.body" :key="i">{{para}}</p>
        </section>
    </article>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Poetry",
  mounted() {
    this.$store.dispatch("fetchPoetry");
  },
  methods: mapActions(["fetchPoetry"])
};
</script>

<style>

</style>
