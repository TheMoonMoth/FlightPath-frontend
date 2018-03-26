<template>
    <article>
        <h1>Editor Tools</h1>
        <ul>
            <router-link tag="li" to="all">ALL SUBMISSIONS</router-link>
            <router-link tag="li" to="fiction">FICTION</router-link>
            <router-link tag="li" to="poetry">POETRY</router-link>
            <router-link tag="li" to="art">ART</router-link>
            <router-link tag="li" to="accepted">ACCEPTED</router-link>
            <router-link tag="li" to="rejected">REJECTED</router-link>
        </ul>
        <div v-if="$route.params.category = 'all'">
            <AllSubmissions></AllSubmissions>
        </div>

        <div v-else-if="$route.params.category = 'editor-main'">
            <p>Wassup</p>
        </div>
    </article> 
</template>

<script>
import AllSubmissions from "@/components/Editor/AllSubmissions"

export default {
  name: "EdMain",
  components: {
      AllSubmissions
  }
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

article h1 {
  font-size: 2.2rem;
  color: rgb(196, 255, 213);
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 320px);
  padding: 95px 25px 20px 25px;
  background-image: url(../../assets/mars1.jpg);
  background-size: 170vmin;
  background-position: 0% 83%;
}

article ul {
  font-size: 1rem;
  color: rgb(0, 0, 0);
  font-weight: 100;
  display: flex;
  align-items: space-between;
  width: calc(100% - 320px);
  padding: 20px 25px;
}

article ul li {
    margin-right: 50px;
}
</style>
