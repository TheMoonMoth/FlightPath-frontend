<template>
  <footer>
     <img src="@/assets/MoonMothRetro.png" alt="Moon Moth Logo">
     <small>&copy; 2018 Kyle Weintraub</small>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>

footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100;
    bottom: 0;
}

footer img {
    height: 50px;
    width: auto;
}
</style>
