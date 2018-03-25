<template>
  <main>
      <article>
        <h1>Featured Content&nbsp;</h1>
        <section v-for="f in $store.state.features" :key="f.id">
          <h2>{{f.category}}</h2>
          <h3>{{f.title}}</h3>
          <h4>{{f.author}}</h4>

          <div v-if="f.category === 'Art'">
            <img :src="f.body[0]" :alt="f.title">
          </div>

          <div v-else>
            <p v-for="(para, index) in f.body" :key="index">{{para}}</p>
          </div>

          <h5>Donate</h5>

        </section>
      </article>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Features"
};
</script>

<style scoped>
article {
  font-family: "Quicksand";
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

section:nth-of-type(2) {
  background-color: hsl(0,0%,30%);
}

article section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 500px);
  padding: 40px 150px;
}

article h1 {
  font-size: 2.2rem;
  color: rgb(210, 230, 255);
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 320px);
  padding: 95px 25px 20px 25px;
  background-image: url(../assets/sats.jpg);
  background-size: 170vmin;
  background-position: 0% 0%;
}

section h2 {
  font-weight: 100;
  margin-bottom: 20px;
}

section h3 {
  font-weight: 100;
  font-size: 2rem;
  text-decoration: none;
  border-bottom: 1px solid black;
}

section h4 {
  font-weight: 100;
  font-size: 1.2rem;
  margin-bottom: 25px;
}

section div p {
  font-family: "Lora"
}

section div img {
  height: 70vh;
  width: auto;
}

section h5 {
  font-weight: 100;
  font-size: 1.2rem;
  margin-top: 25px;
}

</style>
