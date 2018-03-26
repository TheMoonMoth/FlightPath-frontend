<template>
  <main>
    <article>
      <section v-for="sub in $store.state.submissions" :key="sub.id">
        <aside>
          <div>
            <small>{{sub.category}}</small>
            <h2>{{sub.title}}</h2>
            <h3>{{sub.author}}</h3>
          </div>

          <div>
            <Tools></Tools>
            <p v-for="(tag, i) in sub.tags" :key="i" v-if="tag === 10">Successful Submission</p>
            <p v-for="(tag, i) in sub.tags" :key="i" v-if="tag === 9">Under Review</p>
            <p v-for="(tag, i) in sub.tags" :key="i" v-if="tag === 8">Status Pending</p>
            <p v-for="(tag, i) in sub.tags" :key="i" v-if="tag === 7">Reviewed</p>
            <p v-for="(tag, i) in sub.tags" :key="i" v-if="tag === 6">Rejected</p>
            <p v-for="(tag, i) in sub.tags" :key="i" v-if="tag === 5">Accepted</p>
          </div>
        </aside>

        <div>
          <collapse :selected="false" v-if="sub.category !== 'Art'">
              <div slot="collapse-header">
                View Submission
              </div>
              <div slot="collapse-body" style="padding-left:10%">
                <nav>
                  <p>{{currentPage}} / {{pageCount}}</p>
                  <button @click='lastPage()'>Last Page</button>
                  <button @click='nextPage()'>Next Page</button>
                </nav>
                <pdf 
                  style="width: 33rem"
                  :src='url'
                  :page='currentPage' 
                  @num-pages="pageCount = $event"
                  @page-loaded="currentPage = $event"
                > 
                  Show Something!
                </pdf>
                <button @click='lastPage()'>Last Page</button>
                <button @click='nextPage()'>Next Page</button>
              </div>
          </collapse>

          <collapse v-else>
            <div slot="collapse-header">
                View Submission
            </div>

            <div slot="collapse-body">
              <img :src="sub.url" alt="Art Submission">
            </div>
          </collapse>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
import Collapse from 'vue-collapse';
import pdf from 'vue-pdf';

import Tools from "./EdTools"

export default {
    name: 'AllSubmissions',
    components: {
      Collapse,
      pdf,
      Tools
    },
    methods: {
      nextPage() {
        this.currentPage += 1;
      },
      lastPage() {
        this.currentPage -= 1;
      }
    },
    data(){
      return {
        url:
        'https://learnings3withcoberly.s3.amazonaws.com/1522091650551_introducingjavascriptgamedevelopment+%281%29.pdf',
        currentPage: 1,
			  pageCount: 0,
      }
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

main article aside {
  display: flex;
  justify-content: space-between;
}

main article section {
  margin: 10px 10px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 15px 20px;
}

main article section h2,
main article section h3 {
  font-weight: 100;
}

</style>
