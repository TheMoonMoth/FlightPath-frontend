<template>
  <header>
    <div>
      <img src="@/assets/SpaceLane2-lightblue.png" alt="Space Lane">
      <h2>Your Science Fiction Destination</h2>
    </div>
    
    <aside>
      <img id="issue_mock" src="../assets/SpaceLane_issue1_mock.png" alt="Issue 1 Mockup">
      <p>Vol. {{ $store.state.vol}} | {{ $store.state.issue.toUpperCase() }}</p>
      <h4>{{ $store.state.theme }}</h4>
    </aside>

    <nav>
        <router-link tag="p" to="featured">Home</router-link>
        <router-link tag="p" to="fiction">Fiction</router-link>
        <router-link tag="p" to="poetry">Poetry</router-link>
        <router-link tag="p" to="visualart">Visual Art</router-link>
        <router-link tag="p" to="submit">Submit Work</router-link>
        <router-link tag="p" to="about">About</router-link>
        <router-link tag="p" to="contact">Contact</router-link>
        <router-link tag="p" to="manager">Manager</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>

aside p {
  color: #00e7ff;
  font-family: "Quicksand";
  font-weight: 100;
  text-align: center;
}

aside h4 {
  color: #00e7ff;
  font-family: "Quicksand";
  font-weight: 100;
  text-align: center;
  font-size: 1rem;
}

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
  text-align: left;
  color: #00e7ff;
  font-family: "Quicksand";
  font-weight: 100;
  font-size: 1rem;
}

/* Artist credit:  JonHrubesch at DeviantArt.com */

#issue_mock {
  height: 320px;
  width: auto;
  margin-top: 25px;
}

nav {
  width: 50%;
  font-family: "Quicksand";
  font-weight: 100;
  width: 100%;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
}

nav p {
  cursor: pointer;
  color: #00e7ff;
  text-decoration: none;
}

</style>
