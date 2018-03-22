<template>
  <header>
    <div>
      <h1>Space Lane</h1>
      <h2>Your Science Fiction Destination</h2>
    </div>
    
    <nav>
      <ul>
        <router-link tag="li" to="home">Home</router-link>
        <router-link tag="li" to="featured">Fiction</router-link>
        <router-link tag="li" to="featured">Poetry</router-link>
        <router-link tag="li" to="featured">Visual Art</router-link>
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

header {
  background-color: hsl(0,0%,30%);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 25px;
}

nav {
  width: 50%;
}

nav ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}

nav ul li {
  cursor: pointer;
  color: black;
  text-decoration: none;
}

</style>
