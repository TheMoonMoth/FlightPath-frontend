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

var myBucket = "testbucketforflightpath";
var myKey = "spacelane";

s3.createBucket({ Bucket: myBucket }, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    params = { Bucket: myBucket, Key: myKey, Body: "A REAL UPLOAD!" };
    s3.putObject(params, function(err, data) {
      if (err) {
        console.log(err);        
      } else {
        console.log("Successfully uploaded data to myBucket/myKey");
      }
    });
  }
});

export default {
  name: "Submit",
  data() {
    return {
      categorySelected: 0
    };
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
