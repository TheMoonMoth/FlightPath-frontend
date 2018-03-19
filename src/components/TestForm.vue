<template>
  <!-- <form @submit.prevent="log">
      <label for="tester">Shabu?</label>
      <input type="text" name="" id="tester">
      <button type="submit">DO IT!</button>
  </form> -->
  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "TestForm",
  methods: mapActions([
      'increment'
  ])
};
</script>

<style>

</style>
