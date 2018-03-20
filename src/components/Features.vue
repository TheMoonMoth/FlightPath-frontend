<template>
  <main>
      <h2>Featured Content:</h2>
      <section v-for="f in $store.state.features" :key="f.id">
          <h2>A new story!!</h2>
          <h3>{{f.title}}</h3>
          <h4
          >{{f.author}}</h4>
          <p>{{f.body}}</p>
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

</style>
