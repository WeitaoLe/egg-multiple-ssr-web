<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">
        <a href="/" class="router-link-active">易观</a>
      </h1>
      <ul class="nav">
        <li class="nav-item"><a href="/" :class="{'active' : selectedMenu === '/'}">首页</a></li>
        <li class="nav-item"><a href="/client" :class="{'active' : selectedMenu === '/client'}">产品</a></li>
        <li class="nav-item"><a href="/client" :class="{'active' : selectedMenu === '/client'}">资源中心</a></li>
        <li class="nav-item"><a href="/about/" :class="{'active' : selectedMenu === '/client'}">关于易观</a></li>
      </ul>
    </div>
  </header>
</template>
<style lang="scss">
.header{
  padding: 20px 0;
  background-image: linear-gradient(90deg,#34b6f6,#6f5af8);
  color: #fff;
  .logo{
    float: left;
    width: 120px;
    font-size: 16px;
  }
  .nav{
    width: calc(100%-120px);
    float: right;
    li{
      float: left;
      a{
        color: #fff;
      }
    }
  }
}

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