<template>
  <Layout :title="title" description="联系我们" keywords="联系我们">
    <div class="container smart-container">
      <div class="row row-offcanvas">
        <div class="container">
        <div class="col-md-12">
          <div class="area-item">
            <h2>北京</h2>
            <p>北京市朝阳区酒仙桥路10号恒通国际商务园-B12C座三层</p>
            <p>3/F,Block C,B12,Universal Business Park,10 Jiuxianqiao Road,Chaoyang District,Beijing</p>
          </div>
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
      title: '联系我们',
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