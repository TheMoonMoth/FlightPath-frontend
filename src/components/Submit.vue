<template>
  <form @submit.prevent="submit()">
      
      <label for="creator">Your Name: 
          <input type="text" name="creator" id="creator" v-validate="{required: true}">
          <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </label>

      <label for="email">Your Email:
          <input type="email" name="mail" id="email">
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
  </form>
</template>

<script>
var AWS = require("aws-sdk");
var s3 = new AWS.S3();


export default {
  name: "Submit",
  methods: {
    submit: (e)=>{
      //verify document
      //post just the document to aws
      //wait until response comes back with url
      //post full form to heroku
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
