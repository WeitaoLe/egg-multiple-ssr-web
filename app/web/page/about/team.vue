<template>
  <Layout :title="title" description="vue server side render" keywords="egg, vue, webpack, server side render">
    <div class="container smart-container">
      <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-9">
          <ul class="smart-artiles" id="articleList">
            <li v-for="item in lists" :key="item.id">
              <div class="point">+{{ item.hits }}</div>
              <div class="card">
                <h2>
                  <a :href="item.url" target="_blank">{{ item.maintitle }}</a>
                </h2>
                <div>
                  <ul class="actions">
                    <li>
                      <time class="timeago">{{ item.moduleName }}</time>
                    </li>
                    <li class="tauthor">
                      <a href="#" target="_blank" class="get" v-html="item.author"></a>
                    </li>
                    <li><a>+收藏</a></li>
                    <li>
                      <span class="timeago">{{ item.summary }}</span>
                    </li>
                    <li>
                      <span class="timeago"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <div id="pagerBottom" class="smart-pager" v-if="isLoading">
            <img src="../../asset/images/loading.gif" />
          </div>
          <div class="page">
            <ul>
              <!-- <li v-for="(item,idx)in total" :key="item"><a href="?page=1">{{idx}}</a></li> -->
              <li><a href="?page=1"></a></li>
              <li><a href="?page=2"></a></li>
              <li><a href="?page=3">3</a></li>
              <li><a href="?page=4">4</a></li>
              <li><a href="?page=5">5</a></li>
              <li><a href="?page=6">6</a></li>
              <li><a href="?page=7">7</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss">
</style>
<script type="text/babel">
import { formatDate } from 'framework/utils/utils.js'
export default {
  components: {},
  data () {
    return {
      title: '易观博阅',
      isFinish: false,
      isLoading: false,
      pageIndex: 1,
      pageSize: 10,
    }
  },
  computed: {
    lists () {
      return this.list
    },
  },
  methods: {
    fetch () {
      this.$http
        .get(
          `${location.origin}/pager?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
        )
        .then((res) => {
          console.log('res', res)
          if (res.data.list && res.data.list.length) {
            this.total = res.data.total
            this.list = this.list.concat(res.data.list)
          } else {
            this.isFinish = true
          }
          this.isLoading = false
        })
    },
    loadPage () {
      if (!this.isFinish && !this.isLoading) {
        this.isLoading = true
        this.pageIndex++
        setTimeout(() => {
          this.fetch()
        }, 1500)
      }
    },
  },
  mounted () {
    console.log("total============",this.total)
  },
}
</script>