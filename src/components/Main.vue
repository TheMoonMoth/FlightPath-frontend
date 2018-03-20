<template>
    <main>
        <h2>VS Code is pretty nice</h2>
        <p>asdfasdfasdfasdfasdfasdfasdgasljglkjalsjkdfasdsfakjsdgkjaskhjdgkhjkhjwekhjrkhjw</p>
        <div>
            <p>{{ $store.state.count }}</p>
            <button @click="increment">Add 1</button>
        </div>
        <h2>File Test</h2>
        <TestForm></TestForm>
    </main>
</template>

<script>
import { mapActions } from "vuex";
import TestForm from "./TestForm"

export default {
  name: "Main",
  components: {
      TestForm
  },
  methods: mapActions([
      'increment'
  ])
};
</script>

<style>

</style>
