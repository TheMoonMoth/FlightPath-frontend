<template>
  <footer>
     <img src="@/assets/MoonMothRetro.png" alt="Moon Moth Logo">
     <small>&copy; 2018 Kyle Weintraub</small>
     <a href="https://github.com/themoonmoth/FlightPath-frontend">Source Code</a>
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
    margin-left: 270px;
}

footer img {
    height: 50px;
    width: auto;
}

footer a {
  font-size: .8rem;
  color: black;
}
</style>
