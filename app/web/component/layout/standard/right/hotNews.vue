<template>
  <div class="hotnews-wraper">
    <h2>热门文章</h2>
    <ul>
      <li v-for="item in datas" :key="item.id">
        <a :href="formatArticleHref(item)" target="_blank">{{item.maintitle}}</a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.hotnews-wraper {
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  li {
    line-height: 32px;
    a {
      color: #333;
      font-size: 14px;
    }
  }
}
</style>
<script type="text/babel">
export default {
  name: "hotNews",
  data() {
    return {
      total: 0
    };
  },
  props: {
    datas: {
      type: Array,
      default: []
    }
  },
  methods: {
    formatArticleHref(item) {
      return `/article/analysis/detail/${item.id}`;
    }
  },
  components: {},
  mounted() {
    console.log("数据列表==========", this.datas);
  }
};
</script>
