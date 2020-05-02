<template>
  <div>
    <LayoutHeader></LayoutHeader>
    <LayoutContent>
      <div slot="content">
        <slot name="main"></slot>
      </div>
    </LayoutContent>
    <!-- <ScrollTop /> -->
    <LayoutFooter></LayoutFooter>
  </div>
</template>
<style lang="scss">
@import "../../../sass/index";
</style>
<script type="text/babel">
import LayoutHeader from "./header/header";
import LayoutFooter from "./footer/footer";
import LayoutContent from "./content/content";
// import ScrollTop from "component/base/ScrollTop";

export default {
  components: {
    LayoutHeader,
    LayoutFooter,
    LayoutContent
    // ScrollTop
  }
};
</script>
