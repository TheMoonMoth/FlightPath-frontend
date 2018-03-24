<template>
  <header>
    <div>
      <img src="@/assets/SpaceLane2-lightblue.png" alt="Space Lane">
      <h2>Your Science Fiction Destination</h2>
    </div>
    
    <nav>
      <ul>
        <router-link tag="li" to="home">Home</router-link>
        <router-link tag="li" to="fiction">Fiction</router-link>
        <router-link tag="li" to="poetry">Poetry</router-link>
        <router-link tag="li" to="visualart">Visual Art</router-link>
        <router-link tag="li" to="submit">Submit Work</router-link>
        <router-link tag="li" to="about">About</router-link>
        <router-link tag="li" to="contact">Contact</router-link>
        <router-link tag="li" to="manager">Manager</router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>

img {
  height: 90px;
  width: auto;
}

header {
  background-color: #0b061c;
  position: fixed;
  height: 100vh;
  width: 250px;
  padding: 20px 10px;
}

h2 {
  margin: 0;
  text-align: center;
  color: #00e7ff;
  font-family: "Quicksand";
  font-weight: 100;
  font-size: 1rem;
}

nav {
  width: 50%;
  font-family: "Quicksand";
  font-weight: 100;
}

nav ul {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
}

nav ul li {
  cursor: pointer;
  color: #00e7ff;
  text-decoration: none;
}

</style>
