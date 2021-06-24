<template>
  <div class="body">
    <nav-bar />
    <div class="search">
      <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" background="#0EA7FB" @search="onSearch"
        @clear="reset" />
    </div>
    <div class="gameList">
      <game v-for="(item, i) in gameList" :key="item.id" :post="item" />
    </div>
    <div class="bottomTabs" swipable fixed="true">
      <van-tabbar>
        <van-tabbar-item replace to="/home" name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/games" name="setting" icon="setting-o">游戏</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
  import game from "@/components/game.vue";
  import navBar from "@/components/navBar.vue";
  export default {
    name: "mine",
    components: {
      game,
      navBar
    },
    data() {
      return {
        value: "",
        gameList: [{
            id: 1,
            url: require("../assets/angryBird.jpg"),
            name: "愤怒的小鸟",
            gameType: "relax",
            gameUrl: "#",
          },
          {
            id: 2,
            url: require("../assets/watermelon.jpg"),
            name: "合成西瓜",
            gameType: "relax",
            gameUrl: "/static/watermelon/index.html",
          },
          {
            id: 3,
            url: require("../assets/chazhen.jpg"),
            name: "见缝插针",
            gameType: "relax",
            gameUrl: "/static/needle/index.html",
          },
          {
            id: 4,
            url: require("../assets/game1.jpg"),
            name: "原神",
            gameType: "role playing",
            gameUrl: "#",
          },
          {
            id: 5,
            url: require("../assets/game2.jpg"),
            name: "王者荣耀",
            gameType: "moba",
            gameUrl: "#",
          },
          {
            id: 6,
            url: require("../assets/game3.jpg"),
            name: "魂斗罗",
            gameType: "action",
            gameUrl: "#",
          },
        ],

        normal: [{
            id: 1,
            url: require("../assets/game1.png"),
            name: "game1",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 2,
            url: require("../assets/game1.png"),
            name: "game2",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 3,
            url: require("../assets/game1.png"),
            name: "game3",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 4,
            url: require("../assets/game1.png"),
            name: "game4",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          },
          {
            id: 5,
            url: require("../assets/game1.png"),
            name: "game5",
            gameType: "action",
            gameDescription: "funny funny funny funny funny funny funny funny "
          }
        ]
      };
    },
    methods: {
      onSearch() {
        var list = [];
        for (var i = 0; i < this.gameList.length; i++) {
          console.log(this.gameList[i].name);
          if (this.gameList[i].name.search(this.value) != -1)
            list.push(this.gameList[i]);
        }
        this.gameList = list;
      },
      reset() {
        this.gameList = this.normal;
        this.value = "";
      }
    }
  };

</script>
<style>
  .bottomTabs {
    margin-top: 5rem;
  }

  .gameList {
    margin-top: 2rem;
  }

</style>
