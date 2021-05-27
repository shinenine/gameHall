<template>
  <div class="body">
    <nav-bar />
    <!-- 解析标签时 会把大写的字母B解析为-b -->
    <div class="header">
      <h4 class="headTitle">大家都在玩：</h4>
      <van-swipe :auto="4000" class="swipe">
        <van-swipe-item v-for="item in pictures" :key="item.id" >
          <img :src="item.url" class="swipeImg"/>
        </van-swipe-item>
      </van-swipe>

      <van-tabs type="card" color="skyblue" swipeable>
        <van-tab title="最热" class="tab">
          <div class="tab1Content">
            <div class="hottest" v-for="(item, i) in hottest" @touchstart="linkGame(item)">
              <game :key="item.id" :post="item" />
            </div>
          </div>
        </van-tab>
        <van-tab title="最新" class="tab">
          <div class="tab1Content">
            <div class="newest">
              <game v-for="(item, i) in newest" :key="item.id" :post="item" />
            </div>
          </div>
        </van-tab>
        <van-tab title="评分最高" class="tab">
          <div class="tab1Content">
            <div class="highest">
              <game v-for="(item, i) in highest" :key="item.id" :post="item"/>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="bottomTabs" swipeable>
      <van-tabbar>
        <van-tabbar-item replace to="/home" name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/mine" name="setting" icon="setting-o">游戏</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>


<script src="../js/vueTouch.js"></script>
<script>
  import game from '../components/game.vue'
  import navBar from '@/components/navBar.vue'
  export default {
    name: 'home',
    components: {game, navBar },
    data() {
      return {
        value: "", 
        pictures: [
          // 本地路径需要用require包裹
          {
            id: 1,
            title: 'angryBird',
            gameUrl: "",
            url: require('../assets/angryBird.jpg')
          },
          {
            id: 2,
            title: 'watermelon',
            gameUrl: "static/watermelon/index.html",
            url: require('../assets/watermelon.jpg')
          },
        ],
        hottest: [
          {
            id: 1,
            url: require('../assets/watermelon.jpg'),
            name: "合成大西瓜",
            gameType: "休闲类",
            gameUrl:"/static/watermelon/index.html",
            gameDescription: "十分轻松休闲的一款小游戏"
          },
          {
            id: 2,
            url: require('../assets/angryBird.jpg'),
            name: "3D愤怒的小鸟",
            gameType: "relax",
            gameUrl: "#",
            gameDescription: "重出江湖"
          },
        ],
        newest: [
          {
            id: 1,
            url: require('../assets/game1.png'),
            name: "game1",
            gameType: "action",
            gameDescription: "这是一句描述 "
          },
          {
            id: 2,
            url: require('../assets/game2.png'),
            name: "game2",
            gameType: "relax",
            gameDescription: "这是另一句描述"
          },
        ],
        highest: [
          {
            id: 1,
            url: require('../assets/game1.png'),
            name: "game which ranked highest",
            gameType: "action",
            gameDescription: "什么游戏描述呢"
          },
          {
            id: 2,
            url: require('../assets/game2.png'),
            name: "second highest game",
            gameType: "relax",
            gameDescription: "描述"
          },
        ],
      }
    },
    methods: {
      imgLinkGame(item)
      {
        window.location.href = item.gameUrl
      },
      linkGame(item) {
        console.log(item.gameUrl)
        window.location.href= item.gameUrl
      }
    }
  }
</script>

<style>
.headTitle
{
  float: left;
  margin-left: 2rem;
}

.swipe
{
  border-radius: 2rem;
  border-color: bisque;
  margin-top: 2rem;
  height: 13rem;
  width: 100%;
  margin-bottom: 2rem;
}

.swipeImg
{
  
  width: 100%;

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
.buttonGroup retton{
  margin-right: 2rem;
} */
</style>