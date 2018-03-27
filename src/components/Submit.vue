<template>
  <!-- <form @submit.prevent="submit()">
      
      <label for="creator">Your Name: 
          <input type="text" name="creator" id="creator" v-validate="{required: true}">
      </label>

      <label for="email">Your Email:
          <input type="email" name="mail" id="email">
          <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </label>
      
      <div id="typer">
        <p>Select submission type:</p>  
        <input type="radio" name="upload" id="fiction">
          <label for="fiction">Fiction
          </label>

        <input type="radio" name="upload" id="poetry" value="poetry">
          <label for="poetry">Poetry
          </label>

        <input type="radio" name="upload" id="photo">
          <label for="photo">Photography 
          </label>

        <input type="radio" name="upload" id="painting">
          <label for="painting">Painting
          </label>

        <input type="radio" name="upload" id="video">
          <label for="video">Video 
          </label>

        <input type="radio" name="upload" id="other">
          <label for="other">Other
          </label>
      </div>

      <label for="uplaoder">Select file to upload: 
          <input type="file" name="uploader" id="uploader">
      </label>

      <label for="cv">Please leave a short cover letter:
        <textarea name="cv" id="cv" cols="30" rows="10"></textarea>
      </label>
  </form> -->

  <form v-on:submit="postDoc">
    <input type="file" name="image" id="image">
      <label for="image">Add image here:
    </label>

    <input type="submit" name="submit" id="submit" value="foo">
  </form>
</template>

<script>
export default {
  name: "Submit",
  methods: {
    postDoc: (e) => {
      e.preventDefault();
      console.log("HERE WE GO!", e)
      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: new FormData(e.target),
        "Content-type": "multipart/form-data"
      })
      .then(res => res.json())
      .then(json => {
        console.log(json)
      })
    }
  },
  data() {
    return {
      categorySelected: 0
    };
  }
};
</script>

<style scoped>
form {
  width: 550px;
  height: auto;
  margin: auto;

  display: flex;
  flex-direction: column;
}
</style>
