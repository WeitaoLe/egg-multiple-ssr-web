<template>
  <div class="hotnews-wraper">
    <h2>热门文章</h2>
    <ul>
      <li v-for="item in datas" :key="item.id">{{item.maintitle}}</li>
    </ul>
  </div>
</template>
<style lang="scss">
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
  methods: {},
  components: {},
  mounted() {
    console.log("数据列表==========", this.datas);
  }
};
</script>
