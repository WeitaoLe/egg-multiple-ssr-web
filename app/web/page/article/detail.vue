<template>
  <Layout>
    <div class="container detail-wraper">
      <div class="detail-left col-md-9">
        <div class="left-details-head">
          <h1>{{detailData.maintitle}}</h1>
          <div class="head-other">标签：{{detailData.field}} 时间：{{detailData.publishdate}}</div>
        </div>

        <div class="summary">{{detailData.summary}}</div>

        <div class="imgages" v-if="!detailData.content && detailData.columnid === 8">
          <img v-for="img in detailData.images" :key="img.id" v-lazy="imgDir(img)" alt srcset />
        </div>

        <div class="content" v-else v-html="detailData.content"></div>
      </div>
      <div class="col-md-3">
        <relatedNews></relatedNews>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss">
.detail-wraper {
  margin: 20px auto 0;
  .left-details-head {
    background: #fff;
    padding: 30px 30px 16px;
    h1 {
      color: #333333;
      font-size: 24px;
      font-weight: normal;
      display: inline-block;
    }
    .head-other {
      padding-top: 8px;
      font-size: 14px;
      color: #bbbbbb;
    }
  }
  .summary {
    padding: 28px 30px;
    line-height: 30px;
    color: #666666;
    background: #f8f8f8;
    font-size: 16px;
  }
  .imgages {
    img {
      width: 100% !important;
    }
  }
  .content {
    background: #fff;
    line-height: 32px !important;
    font-size: 16px;
    color: #666;
    padding: 10px 20px;
  }
}
</style>
<script type="text/babel">
import { formatDate, baseConfig } from "framework/utils/utils.js";
import relatedNews from "component/layout/standard/right/relatedNews";

export default {
  name: "detail",
  components: { relatedNews },
  data() {
    return {};
  },
  computed: {
    detailData() {
      return JSON.parse(unescape(this.article));
    },
    title() {
      return this.detailData.maintitle + baseConfig.baseSuffix;
    }
  },
  methods: {
    imgDir(img) {
      return `https://www.analysys.cn${img.path}`;
    }
  },
  mounted() {}
};
</script>
