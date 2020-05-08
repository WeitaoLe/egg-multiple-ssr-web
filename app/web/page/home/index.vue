<template>
  <Layout :title="title">
    <div class="home-container clearfix">
      <div class="banner-wraper">
        <div class="banner container">
          <h2>致力于数据能力平民化</h2>
          <div class="banner-content">以海量数字用户资产及算法模型为核心的大数据产品、平台及解决方案，帮助企业管理数字资产及精细化运营</div>
        </div>
      </div>

      <div class="product-warp">
        <h2>产品</h2>
        <p>数据智能产品和平台提供商，丰富的产品和服务矩阵满足不同阶段的数字化建设需求</p>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss">
.home-container {
  height: auto;
  padding: 0px 0 100px;

  .banner-wraper {
    background-image: linear-gradient(90deg, #34b6f6, #6f5af8);
    color: #fff;
    height: 300px;
    .banner {
      text-align: left;
      padding: 50px 0;
      h2 {
        font-size: 30px;
      }
      .banner-content {
        line-height: 26px;
        width: 400px;
        padding-top: 40px;
        font-size: 16px;
      }
    }
  }

  .product-warp {
    text-align: center;
    height: 300px;
    padding-top: 40px;
    h2 {
      font-size: 26px;
      padding-bottom: 15px;
    }
  }
}
</style>
<script type="text/babel">
import { formatDate, baseConfig } from "framework/utils/utils.js";
export default {
  components: {},
  data() {
    return {
      title: "易观-数据驱动精益成长",
      isFinish: false,
      isLoading: false,
      pageIndex: 1,
      pageSize: 10
    };
  },
  computed: {
    lists() {
      return this.list;
    }
  },
  methods: {
    fetch() {
      this.$http
        .get(
          `${location.origin}/pager?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
        )
        .then(res => {
          console.log("res", res);
          if (res.data.list && res.data.list.length) {
            this.total = res.data.total;
            this.list = this.list.concat(res.data.list);
          } else {
            this.isFinish = true;
          }
          this.isLoading = false;
        });
    },
    loadPage() {
      if (!this.isFinish && !this.isLoading) {
        this.isLoading = true;
        this.pageIndex++;
        setTimeout(() => {
          this.fetch();
        }, 1500);
      }
    }
  },
  mounted() {}
};
</script>