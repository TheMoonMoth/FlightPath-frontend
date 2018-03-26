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

    <ul>
        <router-link tag="li" to="/featured">Home</router-link>
        <router-link tag="li" to="/fiction">Fiction</router-link>
        <router-link tag="li" to="/poetry">Poetry</router-link>
        <router-link tag="li" to="/visualart">Visual Art</router-link>
        <router-link tag="li" to="/submit">Submit Work</router-link>
        <router-link tag="li" to="/about">About</router-link>
        <router-link tag="li" to="/contact">Contact</router-link>
        <router-link tag="li" to="/editor-main/subs-all">Editor Tools</router-link>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>

aside {
  padding-bottom: 10px;
  border-bottom: 1px solid white;
}

aside p {
  padding-top: 5px;
  color: #00e7ff;
  font-family: "Quicksand";
  font-weight: 100;
  font-size: .8rem;
  letter-spacing: .4rem;
  text-align: center;
}

aside h4 {
  color: #00e7ff;
  letter-spacing: .2rem;
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

ul {
  width: 100%;
  font-family: "Quicksand";
  font-size: 1.4rem;
  font-weight: 100;
  letter-spacing: .3rem;
  width: 100%;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  padding: 5px 0;
}

ul li {
  cursor: pointer;
  color: #00e7ff;
  text-decoration: none;
}

</style>
