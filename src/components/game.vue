<template>
  <div class="gameItem">
    <div class="words">
      <div class="title">{{ post.name }}</div>
      <div class="type">{{ post.gameType }}</div>
      <div class="description">{{ post.gameDescription }}</div>
    </div>
    <div class="imgBox">
      <img :src="post.url" class="gameAvator"/>
    </div>
    <!-- 重构单文件组件，使其单独接受一个post参数 -->
  </div>
</template>

<script>
  export default {
    name: "game",
    props: ["post"],
    data(){
      return{
      }
    }
  }
</script>

<style scoped>
.gameItem
{
  display: flex;
}

.words
{
  float: left;
  width: 70%;
  text-align: left;
}

.words div
{
  margin-left: 3%;
}

.title
{
  font-size: 2rem;
  padding-top: 3rem;
  margin-bottom: 3rem;
}

.imgBox
{
  float: left;
  width: 30%;
  align-items: baseline;
  transform: scale(0.5);
  margin-right: 5%;
}

</style>
