<template>
  <header class="header">
    <div class="container">
      <h1>
        <a href="/" class="router-link-active">易观博阅</a></h1>
      <ul class="nav">
        <li class="nav-item"><a href="/" :class="{'active' : selectedMenu === '/'}">首页</a></li>
        <li class="nav-item"><a href="/client" :class="{'active' : selectedMenu === '/client'}">产品</a></li>
        <li class="nav-item"><a href="/client" :class="{'active' : selectedMenu === '/client'}">资源中心</a></li>
        <li class="nav-item"><a href="/about/" :class="{'active' : selectedMenu === '/client'}">关于易观</a></li>
      </ul>
    </div>
  </header>
</template>
<style>

</style>
<script type="text/babel">
  export default{
    data(){
      return {
        selectedMenu : '/'
      }
    },
    computed:{
    },
    mounted(){
      this.selectedMenu = window.location.pathname.toLowerCase();
    }
  }
</script>