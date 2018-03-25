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

article section h3 {
  text-decoration: underline;
}

article h1 {
  font-size: 2.2rem;
  border-bottom: 1px solid black;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 320px);
  padding: 95px 25px 20px 25px;
}

</style>
