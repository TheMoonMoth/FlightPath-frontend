<template>
    <article>
        <h1>Editor Tools</h1>
        <b-tabs>
            <b-tab title="All-Submissions" active>
                <br>I'm the first fading tab
            </b-tab>
            <b-tab title="Fiction" >
                <br>I'm the second tab content
            </b-tab>
            <b-tab title="Poetry" >
                <br>I'm the poetry tab content
            </b-tab>
            <b-tab title="Art" >
                <br>I'm the Art tab content
            </b-tab>
            <b-tab title="Accepted" >
                <br>I have all the accepted work! 
            </b-tab>
            <b-tab title="Rejected" >
                <br>Great work but not for us. 
            </b-tab>
            <b-tab title="disabled" disabled>
                <br>Disabled tab!
            </b-tab>
        </b-tabs>
    </article> 
</template>

<script>
export default {
  name: "EdMain"
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

</style>
