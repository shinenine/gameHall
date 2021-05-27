<template>
  <div>
    <van-nav-bar title="导航栏" left-text="< back" :fixed=ifFixed class="navBar"/>
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
  /* .navbar
  {
    background-color: wheat;
  } */
</style>