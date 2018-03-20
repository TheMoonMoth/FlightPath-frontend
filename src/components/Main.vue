<template>
    <main>
        <div>
            <h2>Features</h2>
            <p>{{ $store.state.features }}</p>
        </div>
    </main>
</template>

<script>
import TestForm from "./TestForm";

export default {
  name: "Main",
  components: {
    TestForm
  }
};
</script>

<style>

</style>
