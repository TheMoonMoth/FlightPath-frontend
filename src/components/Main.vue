<template>
    <main>
        <h2>VS Code is pretty nice</h2>
        <p>asdfasdfasdfasdfasdfasdfasdgasljglkjalsjkdfasdsfakjsdgkjaskhjdgkhjkhjwekhjrkhjw</p>
        <div>
            <p>{{ $store.state.count }}</p>
            <button @click="increment">Add 1</button>
        </div>
    </main>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Main",
  methods: mapActions([
      'increment'
  ])
};
</script>

<style>

</style>
