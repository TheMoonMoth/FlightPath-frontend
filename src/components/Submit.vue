<template>
  <main>
    <h1>Submit Your Work</h1>
    <section>
      <h2>Rules</h2>
      <p>1. Deadline is April 30th, 2018. This is just the first issue though! And once it's out, submissions will reopen.</p>
      <br>
      <p>2. Fiction should not be longer than 10,000 words. However, it can be as short as 6. Hemingway set that record, and I'm not sure anything shorter should be eligable. </p>
      <br>
      <p>3. Work accepted will be contracted with Space Lane for one year, with opportunity for renewal.</p>
      <br>
      <p>4. Can't think of any other rules right now. If you're truly here to submit your hard work, then just go for it! I'm excited to see what you've made.</p>
      <br>
      <br>
      <h2>Regulations</h2>
      <p>Uploading copyright material will not be permitted. Any art that draws on existing intellectual properties will be assessed on merit, but will not be eligable for donations. We don't want to step on any toes here.</p> 
      
      <br>
      
      <p>Insert explanation of other possible regulations here. Honestly, if you are genuinely submitting work then please proceed! Really excited to have you here. </p>
      <br>
    </section>
    <form id="submissionForm" @submit.prevent="handleFullForm">
      <div id="namers">
        <label for="creator">Your Name: * 
          <input v-model='author' type="text" name="creator" id="creator" v-validate:creator="{required: true}">
        </label>

        <label for="email">Your Email: *
          <input v-model='email' type="email" name="mail" id="email" v-validate:mail="{required: true}">
          <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
        </label>

        <label for="title">Work Title: *
          <input v-model='title' type="text" name="title" id="title" v-validate:title="{required: true}">
        </label>
      </div>

      <div id="typer">
        <p>Select submission type: *</p>  
        
        <input type="radio" name="upload" value="Fiction" v-model="category">
          Fiction


        <input type="radio" name="upload" value="Poetry" v-model="category">
          Poetry


        <input type="radio" name="upload" value="Art" v-model="category">
          Digital Art

        <input type="radio" name="upload" value="Art" v-model="category">
          Painting

        <input type="radio" name="upload" value="Art" v-model="category" :disabled="true">
          Video -- Coming Soon

        <input type="radio" name="upload" value="Art" v-model="category">
          Other
      </div>


      <!-- this needs to be unnested -->
      <form id="uploadForm" @submit.prevent="postDoc">
        <h5>Upload File Here: *</h5>
        <label for="image">Only accepting PDF, PNG, and JPG at this time
          <input v-if="!$store.state.submitter.uploadDone" type="file" name="image" id="image">
          <p v-else>You've already uploaded a file.</p>
        </label>
        <div v-if="$store.state.submitter.uploading">
          <img v-if="$store.state.submitter.uploadDone" src="../../static/check.png" alt="Image Done" id="loaded">
          <img v-else src="../../static/small-loader.gif" alt="Image Coming" id="loading">
        </div>
        <input type="submit" name="submitDoc" id="submitDoc" value="Upload">
        <h5 v-if="$store.state.submitter.uploadError">Something Went Wrong. Probably Tried The Wrong File Type</h5>
      </form>

      <label for="cv">Please leave a short cover letter:
        <textarea v-model="cv" name="cv" id="cv" cols="140" rows="10"></textarea>
      </label>

      <input v-if="$store.state.submitter.uploadDone" type="submit" name="submitAll" id="submitAll" value="Submit">
    </form>

    
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Submit",
  methods: {
    ...mapActions(["postDoc", "clearUrl"]),
    handleFullForm(e) {
      console.log("you clicked submit")
      let submitter = {
        email: this.email,
        category: this.category,
        title: this.title,
        author: this.author,
        url: this.$store.state.url,
        tags: [10, 9],
        cv: this.cv
      };
      console.log("Sending this object", submitter)
      fetch("https://spacelanedb.herokuapp.com/submission", {
        method: "POST",
        body: JSON.stringify(submitter),
        headers: new Headers({
          "Content-type": "application/json"
        })
      })
      .then(res => res.json())
      .then(json => console.log(json))
      .then(thing => $store.dispatch(clearUrl))
      .catch(new Error({message: "Ya messed up somewhere"}))
    }
  },
  beforeDestroy(){
    this.$store.dispatch("clearUrl")
  },
  data() {
    return {
      author: "",
      email: "",
      title: "",
      category: "",
      cv: ""
    };
  }
};
</script>

<style scoped>
main {
  font-family: "Quicksand";
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 270px;
}

main section {
  padding: 25px 40px;
  width: 75%;
}

h1 {
  color: rgb(147, 253, 255);
  width: 96%;
  padding: 95px 25px 20px 25px;
  font-size: 2.2rem;
  font-weight: 100;
  background-image: url(../assets/divein.jpg);
  background-size: 170vmin;
  background-position: 0% 45%;
}

h2 {
  font-weight: 100;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
}

h3 {
  font-weight: 100;
  font-size: 2rem;
  text-decoration: none;
  border-bottom: 1px solid black;
}

h4 {
  font-weight: 100;
  font-size: 1.2rem;
  margin-bottom: 25px;
}

section p {
  font-family: "Lora";
}

h5 {
  font-weight: 100;
  font-size: 1.2rem;
  border-bottom: 1px solid black;
}

#submissionForm {
  border: 1px solid black;
  border-radius: 5px;
  width: 75%;
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
}

#submissionForm #namers {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px 0;
}

#submissionForm #typer {
  display: flex;
  flex-direction: column;
}

#submissionForm #uploadForm {
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px 5px;
}

#submissionForm #uploadForm #image {
  display: flex;
  flex-direction: column;
}

#uploadForm div img {
  height: 50px;
  width: auto;
}

#submissionForm #cv {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
}
</style>
