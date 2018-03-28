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

        <label for="title">Submission Title: *
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
          <p v-else>Upload Successful!</p>
        </label>
        <div v-if="$store.state.submitter.uploading">
          <img v-if="$store.state.submitter.uploadDone" src="../../static/check.png" alt="Image Done" id="loaded">
          <img v-else src="../../static/small-loader.gif" alt="Image Coming" id="loading">
        </div>
        <input v-if="!$store.state.submitter.uploadDone" type="submit" name="submitDoc" id="submitDoc" value="Upload">
        <h5 v-if="$store.state.submitter.uploadError">Something Went Wrong. Probably Tried The Wrong File Type</h5>
      </form>

      <label for="cv">Please leave a short cover letter:
        <textarea v-model="cv" name="cv" id="cv" cols="120" rows="10"></textarea>
      </label>

      <p v-if="this.title && this.author && this.category && this.email && !$store.state.submitter.uploadDone">Make sure you have uploaded your file please.</p>
      <input v-if="$store.state.submitter.uploadDone" type="submit" name="submitAll" id="submitAll" value="Submit">
      <h4 v-if="$store.state.submitter.allDone">Submission Complete. Thank You!</h4>
    </form>

    
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Submit",
  methods: {
    ...mapActions(["postDoc", "clearUrl", "allDone"]),
    handleFullForm: function(e){
      let submitter = {
        email: this.email,
        category: this.category,
        title: this.title,
        author: this.author,
        url: this.$store.state.url,
        tags: [10, 9],
        cv: this.cv
      };
      fetch("https://spacelanedb.herokuapp.com/submission", {
        method: "POST",
        body: JSON.stringify(submitter),
        headers: new Headers({
          "Content-type": "application/json"
        })
      })
      .then(res => {
        this.donezo = 1
        return res.json()
      })
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
      cv: "",
      donezo: 0
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
  border: 1px solid #00e7ff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5px 5px;
  margin: 15px 0;
}

#submissionForm #uploadForm #image {
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 25px 0 0 0;
}

#submitDoc {
  color: #0b061c;
  background-color: #00e7ff;
  width: 80px;
  height: 30px;
  border-radius: 10px;
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

#submitAll {
  width: 750px;
}
</style>
