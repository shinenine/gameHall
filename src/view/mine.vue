<template>
  <div class="body">
    <nav-bar/>
    <div class="search">
      <van-search 
        v-model="value" 
        placeholder="请输入搜索关键词" 
        shape="round"
        background="#0EA7FB"
        @search="onSearch"
        @clear="reset"
      />
    </div>
    <div class="gameList">
      <game v-for="(item, i) in gameList" :key="item.id" :post="item" />
    </div>
    <div class="bottomTabs">
      <van-tabbar>
        <van-tabbar-item replace to="/home" name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/mine" name="setting" icon="setting-o">游戏</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
  import game from '@/components/game.vue'
  import navBar from '@/components/navBar.vue'
  export default {
    name: "mine",
    components: { game, navBar },
    data() {
      return {
        value: "",
        gameList: [
          {
            id: 1,
            url: require('../assets/game1.png'),
            name: "game1",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 2,
            url: require('../assets/game1.png'),
            name: "game2",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 3,
            url: require('../assets/game1.png'),
            name: "game3",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 4,
            url: require('../assets/game1.png'),
            name: "game4",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 5,
            url: require('../assets/game1.png'),
            name: "game5",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
        ],
        normal: [
          {
            id: 1,
            url: require('../assets/game1.png'),
            name: "game1",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 2,
            url: require('../assets/game1.png'),
            name: "game2",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 3,
            url: require('../assets/game1.png'),
            name: "game3",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 4,
            url: require('../assets/game1.png'),
            name: "game4",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 5,
            url: require('../assets/game1.png'),
            name: "game5",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
        ]
      } 
    },
    methods: 
    {
      onSearch() {
        var list = [];
        for(var i = 0; i < this.gameList.length; i++) {
          console.log(this.gameList[i].name)
          if(this.gameList[i].name.search(this.value)!=-1)
            list.push(this.gameList[i])
        }
        this.gameList = list;
      },
      reset() {
        this.gameList = this.normal;
        this.value="";
      }
    }
  }
</script>