<template>
    <article>
        <h1>Poems for days</h1>
        <section v-for="poem in $store.state.poetry" :key="poem.id">
            <h3>{{poem.title}}</h3>
            <h4>{{poem.author}}</h4>
            <div v-for="(para, i) in poem.body" :key="i">
              <p v-if="para === ''"><br></p>
              <p v-else>{{para}}</p>
            </div>
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

article section:nth-of-type(2),
article section:nth-of-type(2) p {
  align-items: flex-end;
  text-align: right;
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
  background-image: url(../assets/eye.png);
  background-size: 170vmin;
  background-position: 0% 40%;
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
