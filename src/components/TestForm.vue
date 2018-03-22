<template>
  <form enctype="multipart/form-data" @submit.prevent="(e)=>submitFile(e)">
      <label for="file">Shabu?</label>
      <input type="file" name="foo" id="file" ref="file" v-on:change="handleFileUpload()">
      <button type="submit">DO IT!</button>
  </form>  
</template>

<script>
import axios from "axios"

export default {
  name: "TestForm",
  methods: {
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    submitFile(e){
      let fd = new FormData()
      fd.append('file', this.file)      

      fetch('http://localhost:5000/tester', {
        method: "POST",
        body: fd
      })
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(console.error({message: "not quite right"}))
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
