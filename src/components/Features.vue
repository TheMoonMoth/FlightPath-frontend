<template>
  <main>
      <h2>Featured Content:</h2>
      <article v-for="f in $store.state.features" :key="f.id">
          <section>
            <h2>Story {{f.id}}</h2>
            <h3>{{f.title}}</h3>
            <h4>Written by: {{f.author}}</h4>
            <p v-for="(para, index) in f.body" :key="index">{{para}}</p>
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

<style>
main article {
  margin: 10px 25px;
  width: 60%;
  height: auto;
}

main article section h3 {
    text-decoration: underline;
}
</style>
