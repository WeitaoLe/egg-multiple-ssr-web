<template>
  <Layout :title="title" description="OPT-OUT" keywords="OPT-OUT">
    <div class="container smart-container">
      <div class="row row-offcanvas row-offcanvas-right">
        <div class="col-xs-12 col-sm-9">
          <div class="document-div set_center">
            <p class="margin-t2">易观产品数据分析服务开发并运用一种新的技术，通过支持广告ID的可复位设备，收集关联到终端用户设备的非个人可识别信息，从而创造累积利益及行为定向模块，进行目标广告宣传，并为客户提供分析服务。
            </p>
            <h4>禁止选项</h4>
            <p>易观产品数据分析服务严格保护用户个人隐私，查看相关<a href="/introduction#privacy">隐私政策</a>。若您想禁止易观产品数据分析服务的非个人可识别信息收集模块，请根据您设备的操作系统，分别遵循以下说明。</p>
            <h4>iOS用户</h4>
            <p>iOS：直接打开设备中的“禁止广告跟踪”。打开设置—隐私—广告—禁止广告跟踪。谨记，该操作不仅会禁止易观产品数据分析服务，还包括所有其他广告跟踪。</p>
            <h4>安卓用户</h4>
            <p>安卓版本：通过以下方式禁止发送您感兴趣的广告：请将Android Device ID（即Android_ID）信息（可从应用商店下载《DeviceID》以及类似应用获取Android Device
              ID）复制到下方方框中，并点击“禁止”。请允许系统在7天内处理并部署您的请求。</p>
            <div class="margin-b2 ban-div container-fluid">
              <div class="row">
                <div class="col-xs-9"> <input class="v-input v-input-id " type="text" placeholder="请输入您的 ID" /></div>
                <div class="col-xs-3"> <a class="v-btn" style="max-width:60px;float:right;">禁止</a></div>
                <span class="sp" style="display:none">请输入正确的Android Device ID</span>
              </div>
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
      title: 'OPT-OUT',
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