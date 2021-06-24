<template>

  <div class="gameItem">
    <div class="imgBox">
      <img :src="post.url" class="gameAvator" />
    </div>
    <div class="words">
      <div class="title">{{ post.name }}</div>
      <button class="button" @click="linkGame"><b>开始</b></button>
    </div>

    <!-- 重构单文件组件，使其单独接受一个post参数 -->
  </div>
</template>

<script>
  export default {
    name: "game",
    props: ["post"],
    data() {
      return {}
    },
    methods: {
      linkGame() {
        console.log(this.post.gameUrl);
        if (this.post.gameUrl == "#") {
          this.toToast("本游戏正在开发中");
        } else window.location.href = this.post.gameUrl;
      },
      toToast(text) {
        this.$toast({
          message: text
        });
      },
    }
  }

</script>

<style scoped>
  .gameItem {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    display: flex;
  }

  .words {
    float: right;
    width: 70%;
    text-align: left;
  }

  .words div {
    margin-left: 1rem;
  }

  .title {
    font-size: 2rem;
    padding-top: 2rem;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
  }

  .button {
    width: 5rem;
    height: 2rem;
    margin-left: 1rem;
    border: 0.1px;
    border-radius: 20px;
    background-color: transparent;
    line-height: 2px;
    text-transform: uppercase;
    font-size: 16px;
    padding: 10px 20px;
    color: #0EA7FB;
    background-color: #E4E5E5;
    margin-bottom: 2rem;
  }


  .imgBox {
    position: relative;
    float: right;
    width: 40%;
    height: 10%;
    margin-right: 20px;
    margin-top: 30px;
  }

  .gameAvator {
    width: 160px;
    height: 100px;
  }

</style>
