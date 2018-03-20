<template>
  <main>
      <h2>Featured Content:</h2>
      <section v-for="f in $store.state.features" :key="f.id">
          <h2>Story {{f.id}}</h2>
          <h3>{{f.title}}</h3>
          <h4>Written by: {{f.author}}</h4>
          <p v-for="para in f.body" :key="para">{{para}}</p>
      </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Features"
};
</script>

<style>
main section {
  margin: 10px 25px;
  width: 60%;
  height: auto;
}

main section h3 {
    text-decoration: underline;
}
</style>
