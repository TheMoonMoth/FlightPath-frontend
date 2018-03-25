<template>
    <article>
        <h1>All the Fiction</h1>
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

article h1 {
  font-size: 2.2rem;
  color:rgb(196, 255, 213);
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 320px);
  padding: 95px 25px 20px 25px;
  background-image: url(../assets/mars1.jpg);
  background-size: 170vmin;
  background-position: 0% 83%;
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
