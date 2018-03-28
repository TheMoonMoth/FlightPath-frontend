<template>
  <article>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact The Developer/Editor</h1>
      <section>
        <div>
            <h3>By Email</h3>
            <p>Please don't hesitate to reach out about anything related to this project. You can get in touch by emailing Spacelane.Kyle@gmail.com
            </p>
            <br>
            <p>I am a full stack developer based in Denver and would love to work with you on your next project. Again, please reach out if you would like to work together or have questions about the project. </p>
            <br>
            <p>Also check out my portfolio site to see some other work I've done</p>
            <br>
            <a href="https://KyleWeintraub.com">KyleWeintraub.com</a>
        </div>
      </section>

      <section>
        <div>
            <h3>GitHub</h3>
            <p>This is a totally open source project. Please feel free to check it out on github. If you're a developer, the Readme there will guide you through getting your clone of the project up and running. </p>
            <br>
            <p>I started my journey in Web Development six months ago by enrolling at Galvanize. Their expert faculty mentored me and challenged me to learn everything I could about JavaScript and the process of Web Development. Especially the Agile Workflow. By iterating on projects and ideas, my classmates and I were able to achieve great breakthroughs and solve complex problems with creative playfulness. It really is the best way to create something you can be proud of.</p>
            <br>

            <a href="https://github.com/themoonmoth/flightpath-frontend">Link to Frontend Repository |</a>
            <a href="https://github.com/themoonmoth/flightpath-backend">| Link to Backend Repository</a>
            
        </div>
      </section>

      <section>
        <div>
            <h3>Linked In</h3>
            <p>As a web development professional you can see my other work and experience on LinkedIn</p>
            <a href="https://linkedin.com/in/kyleweintraub">LinkedIn Profile</a>
            <br>
            <p>I started my journey in Web Development six months ago by enrolling at Galvanize. Their expert faculty mentored me and challenged me to learn everything I could about JavaScript and the process of Web Development. Especially the Agile Workflow. By iterating on projects and ideas, my classmates and I were able to achieve great breakthroughs and solve complex problems with creative playfulness. It really is the best way to create something you can be proud of.</p>
            <br>
            <p>More than anything, Galvanize has taught me to be a ravenous learner. The world is brimming with things I simply don't understand. But if I put myself to it, I could learn it. In the words of Kim Schlesinger (sp) "Clear the workspace. Play! Reflect." This simple loop can make any task achievable. And that is remarkable.</p>
            
        </div>
      </section>
  </article>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
article {
  font-family: "Quicksand";
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

article section {
  display: flex;
  align-items: flex-start;
  width: calc(100% - 500px);
  padding: 40px 150px;
}

article section:nth-of-type(2),
article section:nth-of-type(2) p {
    flex-direction: row-reverse;
  align-items: flex-end;
  text-align: right;
}

article h1 {
  font-size: 2rem;
  color: #92e6ff;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 320px);
  padding: 95px 0px 20px 100px;
  background-image: url(../assets/aboutbanner.jpg);
  background-size: 170vmin;
  background-position: 0% 50%;
}

section h3 {
  font-weight: 100;
  font-size: 2rem;
  text-decoration: none;
  border-bottom: 1px solid black;
}

section h4 {
  font-weight: 100;
  font-size: 1.2rem;
  margin-bottom: 25px;
}

section img {
    height: 70vh;
    width: auto;
}

section p {
  font-family: "Lora"
}
</style>

