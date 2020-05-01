<template>
  <div class="page-wraper">
    <div class="page">
      <ul>
        <li v-for="i in data" :key="i">
          <a :href="pageLink(i)">{{i}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.page {
  li {
    float: left;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-right: 10px;
    border: 1px solid #333;
    a {
      font-size: 16px;
      color: blue;
      display: inline-block;
      width: 30px;
      height: 30px;
    }
  }
}
</style>
<script type="text/babel">
export default {
  name: "page",
  data() {
    return {};
  },
  props: {
    data: {
      type: Number,
      default: 0
    }
  },
  methods: {
    pageLink(i) {
      return `?page=${i}`;
    }
  },
  components: {},
  mounted() {}
};
</script>
