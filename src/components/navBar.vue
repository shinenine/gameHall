<template>
  <div class="navBar">
    <van-nav-bar title="导航栏" left-text="返回" :fixed=ifFixed />
  </div>
</template>

<script>
  export default {
    name: 'navBar',
    data() {
      return {
        ifFixed: true
      }
    }
  }
</script>

<style scoped>
  .navbar
  {
    height: 1rem;
  }
</style>