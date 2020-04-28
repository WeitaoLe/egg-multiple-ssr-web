<template>
  <div>
    <LayoutHeader></LayoutHeader>
    <LayoutContent>
      <div slot="content">
        <slot name="main"></slot>
      </div>
    </LayoutContent>
    <LayoutFooter></LayoutFooter>
  </div>
</template>
<style lang="scss">
 @import '../../../sass/index';
</style>
<script type="text/babel">
  import LayoutHeader from './header/header';
  import LayoutFooter from './footer/footer';
  import LayoutContent from './content/content';
  export default{
    components: {
      LayoutHeader,
      LayoutFooter,
      LayoutContent
    }
  }
</script>
