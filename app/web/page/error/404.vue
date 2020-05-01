<template>
  <Layout :title="title">
    <h1>
      您访问的页面不存在了，请返回
      <a href="/">首页</a>
    </h1>
  </Layout>
</template>
<style lang="scss">
</style>
<script>
export default {
  name: "404",
  data() {
    return {
      title: 404
    };
  }
};
</script>