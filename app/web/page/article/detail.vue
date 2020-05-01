<template>
  <Layout :title="detailData.maintitle">
    <div class="container">
      <div class="detail-wraper col-md-9">
        <h1>{{detailData.maintitle}}</h1>
        <div>标签：{{detailData.field}} 时间：{{detailData.publishdate}}</div>
        <div class="summary">{{detailData.summary}}</div>
        <div class="imgages" v-if="!detailData.content && detailData.columnid === 8">
          <img v-for="img in detailData.images" :key="img.id" v-lazy="imgDir(img)" alt srcset />
        </div>
        <div class="content" v-else v-html="detailData.content"></div>
      </div>
      <div class="col-md-3">
        <h2>相关文章</h2>
      </div>
    </div>
  </Layout>
</template>
<style lang="scss">
.imgages {
  img {
    width: 100% !important;
  }
}
</style>
<script type="text/babel">
import { formatDate } from "framework/utils/utils.js";
export default {
  name: "detail",
  data() {
    return {
      title: "文章内页"
    };
  },
  computed: {
    detailData() {
      return this.article;
    }
  },
  methods: {
    imgDir(img) {
      return `https://www.analysys.cn${img.path}`;
    }
  },
  components: {},
  mounted() {
    console.log("vue===========", this);
  }
};
</script>
