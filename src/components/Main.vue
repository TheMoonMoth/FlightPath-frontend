<template>
    <main>
        <div>
            <h2>Features</h2>
            <p>{{ $store.state.features }}</p>
        </div>
    </main>
</template>

<script>
import { mapActions } from "vuex";
import TestForm from "./TestForm";

export default {
  name: "Main",
  components: {
    TestForm
  },
  created() {
    console.log("starting to create Main component");    
    this.$store.dispatch("fetchFeatures").then(() => {
      console.log("This would be printed after dispatch!!");
    });
  },
  methods: mapActions(["fetchFeatures"])
};
</script>

<style>

</style>
