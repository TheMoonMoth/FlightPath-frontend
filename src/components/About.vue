<template>
  <article>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Space Lane Is About Imagination And Emotion</h1>
      <section>
        <div>
            <h3>Inspiration</h3>
            <p>Blurb about space lane and all the cool things we like. Mundane Sci Fi is a way of thinking about it. 
                This image from Simon Stålenhag inspired this endevour.
            </p>
            <br>
            <p>Blurb about space lane and all the cool things we like. Mundane Sci Fi is a way of thinking about it. 
                This image from Simon Stålenhag inspired this endevour.
            </p>
            <br>
            <p>Blurb about space lane and all the cool things we like. Mundane Sci Fi is a way of thinking about it. 
                This image from Simon Stålenhag inspired this endevour.
            </p>
            <br>
            <p>Blurb about space lane and all the cool things we like. Mundane Sci Fi is a way of thinking about it. 
                This image from Simon Stålenhag inspired this endevour.
            </p>
            <br>
            <p>Blurb about space lane and all the cool things we like. Mundane Sci Fi is a way of thinking about it. 
                This image from Simon Stålenhag inspired this endevour.
            </p>
            <br>
            <p>Blurb about space lane and all the cool things we like. Mundane Sci Fi is a way of thinking about it. 
                This image from Simon Stålenhag inspired this endevour.
            </p>
            <br><p>Blurb about space lane and all the cool things we like. Mundane Sci Fi is a way of thinking about it. 
                This image from Simon Stålenhag inspired this endevour.
            </p>
            <br>
        </div>
        <img src="@/assets/core.jpg" alt="Simon Stålenhag - Farm Radar">
      </section>

      <section>
        <div>
            <h3>The Developer</h3>
            <p>Stuff about Kyle, the developer. He loves Vue but is trying to work with all the frameworks. Libraries are great. They are so helpful. Stackoverflow helps get the job done. My favorite thing is writing JavaScript functions. Diving into an object with dot notations is oddly satisfying.</p>
            <br>
            <p>I started my journey in Web Development six months ago by enrolling at Galvanize. Their expert faculty mentored me and challenged me to learn everything I could about JavaScript and the process of Web Development. Especially the Agile Workflow. By iterating on projects and ideas, my classmates and I were able to achieve great breakthroughs and solve complex problems with creative playfulness. It really is the best way to create something you can be proud of.</p>
            <br>
            <p>More than anything, Galvanize has taught me to be a ravenous learner. The world is brimming with things I simply don't understand. But if I put myself to it, I could learn it. In the words of Kim Schlesinger (sp) "Clear the workspace. Play! Reflect." This simple loop can make any task achievable. And that is remarkable.</p>
            
        </div>
        <img src="@/assets/core.jpg" alt="Simon Stålenhag - Farm Radar">
      </section>

      <section>
        <div>
            <h3>The Editor</h3>
            <p>Stuff about Kyle, the AUTHOR. He loves Vue but is trying to work with all the frameworks. Libraries are great. They are so helpful. Stackoverflow helps get the job done. My favorite thing is writing JavaScript functions. Diving into an object with dot notations is oddly satisfying.</p>
            <br>
            <p>I started my journey in Web Development six months ago by enrolling at Galvanize. Their expert faculty mentored me and challenged me to learn everything I could about JavaScript and the process of Web Development. Especially the Agile Workflow. By iterating on projects and ideas, my classmates and I were able to achieve great breakthroughs and solve complex problems with creative playfulness. It really is the best way to create something you can be proud of.</p>
            <br>
            <p>More than anything, Galvanize has taught me to be a ravenous learner. The world is brimming with things I simply don't understand. But if I put myself to it, I could learn it. In the words of Kim Schlesinger (sp) "Clear the workspace. Play! Reflect." This simple loop can make any task achievable. And that is remarkable.</p>
            
        </div>
        <img src="@/assets/core.jpg" alt="Simon Stålenhag - Farm Radar">
      </section>
  </article>
</template>

<script>
export default {
    name: 'About'
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

