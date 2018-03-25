<template>
  <main>
      <article>
        <h1>Featured Content:</h1>
        <section v-for="f in $store.state.features" :key="f.id">
          <h2>Featured {{f.category}}</h2>
          <h3>{{f.title}}</h3>
          <h4>By: {{f.author}}</h4>

          <div v-if="f.category === 'Art'">
            <img :src="f.body[0]" :alt="f.title">
          </div>

          <div v-else>
            <p v-for="(para, index) in f.body" :key="index">{{para}}</p>
          </div>

        </section>
      </article>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Features"
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

section:nth-of-type(2) {
  background-color: hsl(0,0%,30%);
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
