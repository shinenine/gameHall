<template>
  <div class="body">
    <!-- 解析标签时 会把大写的字母B解析为-b -->
    <div class="header">
      <nav-bar/>
      <van-search 
        v-model="value" 
        placeholder="请输入搜索关键词" 
        shape="round"
        background="#0EA7FB"
      />
      <van-swipe :auto="4000" class="swipe">
        <van-swipe-item v-for="item in pictures" :key="item.id">
          <img :src="item.url" class="img"/>
        </van-swipe-item>
      </van-swipe>

      <van-tabs>
        <van-tab title="最热">
          <div class="tab1Content">
            <div class="hottest">
              <game v-for="(item, i) in hottest" :key="item.id" :post="item" />
            </div>
          </div>
        </van-tab>
        <van-tab title="最新">
          <div class="tab1Content">
            <div class="newest">
              <game v-for="(item, i) in newest" :key="item.id" :post="item" />
            </div>
          </div>
        </van-tab>
        <van-tab title="评分最高">
          <div class="tab1Content">
            <div class="highest">
              <game v-for="(item, i) in highest" :key="item.id" :post="item" />
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="bottomTabs">
      <van-tabbar>
        <van-tabbar-item replace to="/home" name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/mine" name="setting" icon="setting-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
  import navBar from '../components/navBar.vue'
  import game from '../components/game.vue'
  export default {
    name: 'home',
    components: {navBar, game },
    data() {
      return {
        value: "", 
        pictures: [
          // 本地路径需要用require包裹
          {
            id: 1,
            title: 'picture1',
            url: require('../assets/game1.png')
          },
          {
            id: 2,
            title: 'picture2',
            url: require('../assets/game2.png')
          },
        ],
        hottest: [
          {
            id: 1,
            url: require('../assets/game1.png'),
            name: "英雄联盟",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 2,
            url: require('../assets/game2.png'),
            name: "愤怒的小鸟宇少重制版",
            gameType: "relax",
            gameDescription: "牛逼就完事了"
          },
        ],
        newest: [
          {
            id: 1,
            url: require('../assets/game1.png'),
            name: "新版合成大西瓜",
            gameType: "action",
            gameDescription: "咱也不知道新在哪里 "
          },
          {
            id: 2,
            url: require('../assets/game2.png'),
            name: "新版见缝插针",
            gameType: "relax",
            gameDescription: "牛牛牛"
          },
        ],
        highest: [
          {
            id: 1,
            url: require('../assets/game1.png'),
            name: "哈哈还有啥游戏呢",
            gameType: "action",
            gameDescription: "什么游戏描述呢"
          },
          {
            id: 2,
            url: require('../assets/game1.png'),
            name: "不知道还有啥游戏",
            gameType: "relax",
            gameDescription: "easy"
          },
        ],
      }
    },
  }
</script>

<style>
.search{
  margin-top: 1rem;
}

.swipe{
  border-radius: 1rem;
  border-color: bisque;
  margin-top: 2rem;
  height: 20rem;
  width: 100%
}

.tab1
{
  margin-top: 3rem;
}

.bottomTabs
{
  margin-top: 5rem;
}
/* .buttonGroup{

}
.buttonGroup button{
  margin-right: 2rem;
} */
</style>