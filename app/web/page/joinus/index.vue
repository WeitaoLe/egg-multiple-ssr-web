<template>
  <Layout :title="title" description="加入易观" keywords="加入易观">
    <div class="container smart-container">
      <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-9">
          
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
      title: '加入易观',
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