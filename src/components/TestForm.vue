<template>
  <form enctype="multipart/form-data" @submit.prevent="submitFile()">
      <label for="file">Shabu?</label>
      <input type="file" name="" id="file" ref="file" v-on:change="handleFileUpload()">
      <button type="submit">DO IT!</button>
  </form>  
</template>

<script>

export default {
  name: "TestForm",
  methods: {
    handleFileUpload(){
      // validate file type
      this.file = this.$refs.file.files[0];
    },
    submitFile(){
      let fd = new FormData()
      fd.append('file', this.file)

      fetch('http://localhost:5000/tester', {
        method: "POST",
        headers: {
          "Content-Type" : "multipart/form-data"
          },
        body: fd
      })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(function() { console.log("failure")})
    }
  },
  data(){
    return {
      file: ''
    }
  }
};
</script>

<style>

</style>
