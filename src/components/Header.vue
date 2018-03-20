<template>
  <header>
    <div>
      <h1>Space Lane</h1>
      <h2>Your Science Fiction Destination</h2>
    </div>
    
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Fiction</a></li>
        <li><a href="#">Poetry</a></li>
        <li><a href="#">Visual Art</a></li>
        <li><a href="#">Submit</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
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

nav ul a {
  color: black;
  text-decoration: none;
}

</style>
