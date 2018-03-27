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
    <form id="submissionForm">
      <div id="namers">
        <label for="creator">Your Name: 
          <input type="text" name="creator" id="creator" v-validate="{required: true}">
        </label>

        <label for="email">Your Email:
          <input type="email" name="mail" id="email">
          <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
        </label>
      </div>

      <div id="typer">
        <p>Select submission type:</p>  
        <label for="fiction">
          <input type="radio" name="upload" id="fiction">
          Fiction
        </label>

        <label for="poetry">
          <input type="radio" name="upload" id="poetry" value="poetry">
          Poetry
        </label>

        <label for="photo"> 
          <input type="radio" name="upload" id="photo">
          Photography
        </label>

        <label for="painting">
          <input type="radio" name="upload" id="painting">
          Painting
        </label>

        <label for="video">
          <input type="radio" name="upload" id="video">
          Video 
        </label>

        <label for="other">
          <input type="radio" name="upload" id="other">
          Other
        </label>
      </div>


      <!-- this needs to be unnested -->
      

      <label for="cv">Please leave a short cover letter:
        <textarea name="cv" id="cv" cols="140" rows="10"></textarea>
      </label>

      <input type="submit" name="submitAll" id="submitAll" value="Submit">
    </form>

    <form id="uploadForm" @submit.prevent="postDoc">
        <h5>Upload File Here:</h5>
        <label for="image">Only accepting PDF, PNG, and JPG at this time
          <input type="file" name="image" id="image">
        </label>
        <div v-if="uploading">
          <img v-if="uploaded" src="../../static/check.png" alt="Image Done" id="loaded">
          <img v-else src="../../static/small-loader.gif" alt="Image Coming" id="loading">
        </div>
        <input type="submit" name="submitDoc" id="submitDoc" value="Upload">
      </form>
  </main>
</template>

<script>
export default {
  name: "Submit",
  methods: {
    postDoc: e => {
      this.uploading = 1;
      console.log("HERE WE GO!", e);
      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: new FormData(e.target),
        "Content-type": "multipart/form-data"
      })
        .then(res => res.json())
        .then(json => {
          this.subUrl = json.imageurl
          console.log(json.imageurl)
          this.uploding = 1
          this.uploaded = 1
          return json.imageurl
        })
        .catch(()=>{
          this.fileError = 1
          console.log("It's all effed")
        })
    }
  },
  data() {
    return {
      categorySelected: 0,
      subUrl: "",
      uploading: 0,
      uploaded: 0,
      fileError: 0
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
  font-family: "Lora"
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

#submissionForm #uploadForm{
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

#submissionForm #cv:parent {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
}

</style>
