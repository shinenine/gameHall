<template>
  <div class="gameItem">
    <div class="words">
      <div class="title">{{ post.name }}</div>
      <div class="type">{{ post.gameType }}</div>
      <button class="button" @click="linkGame">开始</button>
    </div>
    <div class="imgBox">
      <img :src="post.url" class="gameAvator" />
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
    border-bottom: 1px solid gray;
    display: flex;
  }

  .words {
    float: left;
    width: 70%;
    text-align: left;
  }

  .words div {
    margin-left: 1rem;
  }

  .description {
    margin-bottom: 1rem;
  }

  .title {
    font-size: 2rem;
    padding-top: 2rem;
    margin-bottom: 2rem;
  }

  .button {
    width: 5rem;
    height: 2rem;
    margin-left: 1rem;
    border: 1px solid;
    border-radius: 5px;
    background-color: transparent;
    line-height: 2px;
    text-transform: uppercase;
    font-size: 14px;
    padding: 10px 20px;
    font-weight: 300;
    background-color: #4cc9f0;
    margin-bottom: 2rem;
  }


  .imgBox {
    position: relative;
    float: left;
    width: 40%;
    height: 10%;
    margin-right: 20px;
    margin-top: 50px;
  }

  .gameAvator {
    width: 180px;
    height: 100px;
  }

</style>
