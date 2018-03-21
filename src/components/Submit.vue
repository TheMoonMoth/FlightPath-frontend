<template>
  <form action="post">
      
      <label for="creator">Creators name: 
          <input type="text" name="creator" id="creator">
      </label>

      <label for="email">Email:
          <input type="email" name="mail" id="email">
      </label>
      
      <div>
      <p>Select submission type:</p>  
        <input type="radio" name="fiction" id="fiction">
          <label for="fiction">Fiction
          </label>

        <input type="radio" name="poetry" id="poetry" value="poetry">
          <label for="poetry">Poetry
          </label>

        <input type="radio" name="photo" id="photo">
          <label for="photo">Photography 
          </label>

        <input type="radio" name="painting" id="painting">
          <label for="painting">Painting
          </label>

        <input type="radio" name="video" id="video">
          <label for="video">Video 
          </label>

        <input type="text" name="other" id="other">
          <label for="other">Other...
          </label>
      </div>

      <label for="uplaoder">Select file to upload: 
          <input type="file" name="uploader" id="uploader">
      </label>
  </form>
</template>

<script>
export default {
  name: "Submit",
  data(){
      return {
          categorySelected: 0
      }
  }
};
</script>

<style>

form {
    width: 550px;
    height: auto;
    margin: auto;

    display: flex;
    flex-direction: column;
}

</style>
