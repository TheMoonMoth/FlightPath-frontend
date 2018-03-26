<template>
  <main>
  <article>
    <section v-for="sub in $store.state.submissions" :key="sub.id">
      <aside>
        <small>{{sub.category}}</small>
        <h2>{{sub.title}}</h2>
        <h3>{{sub.author}}</h3>
        <div>
          <collapse :selected="false">
              <div slot="collapse-header">
                View Submission
              </div>
              <div slot="collapse-body">
                {{sub.url}}
              </div>
          </collapse>
        </div>
      </aside>
    </section>
  </article>
  </main>
</template>

<script>
import Collapse from 'vue-collapse'

export default {
    name: 'AllSubmissions',
    components: {
      Collapse
    }
}
</script>

<style scoped>

main {
  color: rgb(0, 0, 0);
  font-weight: 100;
  width: calc(100% - 320px);
  padding: 25px 25px;
  display: flex;
  align-items: flex-start
}

main article {
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  height: auto;
}

main article section {
  margin: 10px 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 5px;
}

main article section h2,
main article section h3 {
  font-weight: 100;
}

div.collapse-header.toucable {
  border: 2px solid blue !important;
}

</style>
