<template>
    <main>
        <div>
            <h2>Home</h2>
            <p>{{ $store.state.marquee }}</p>
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
