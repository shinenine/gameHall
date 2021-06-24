<template>
  <div class="body">
    <nav-bar />
    <!-- 解析标签时 会把大写的字母B解析为-b -->
    <div class="header">
      <h4 class="headTitle">大家都在玩：</h4>
      <van-swipe :auto="4000" class="swipe">
        <van-swipe-item v-for="item in pictures" :key="item.id">
          <img :src="item.url" class="swipeImg" />
        </van-swipe-item>
      </van-swipe>

      <van-tabs type="card" color="skyblue" swipeable>
        <van-tab title="最热" class="tab">
          <div class="tab1Content">
            <!-- <div
              class="hottest"
              v-for="(item, i) in hottest"
              @touchstart="linkGame(item)"
            > -->
            <div class="hottest" v-for="(item, i) in hottest">
              <card :key="item.id" :cardPost="item" />
            </div>
          </div>
        </van-tab>
        <van-tab title="最新" class="tab">
          <div class="tab1Content">
            <div class="newest" v-for="(item, i) in newest">
              <card :key="item.id" :cardPost="item" />
            </div>
          </div>
        </van-tab>
        <van-tab title="评分最高" class="tab">
          <div class="tab1Content">
            <div class="highest" v-for="(item, i) in highest">
              <card :key="item.id" :cardPost="item" />
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="bottomTabs" swipeable>
      <van-tabbar>
        <van-tabbar-item replace to="/home" name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to="/games" name="setting" icon="setting-o">游戏</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script src="../js/vueTouch.js"></script>
<script>
  import card from "@/components/card.vue";
  import navBar from "@/components/navBar.vue";
  export default {
    name: "home",
    components: {
      navBar,
      card
    },
    data() {
      return {
        value: "",
        pictures: [
          // 本地路径需要用require包裹
          {
            id: 1,
            gameUrl: "",
            url: require("../assets/swipe1.png")
          },
          {
            id: 2,
            url: require("../assets/swipe2.png")
          },
          {
            id: 3,
            url: require("../assets/swipe3.png")
          },
          {
            id: 4,
            url: require("../assets/swipe4.png")
          }
        ],
        hottest: [{
            id: 1,
            url: require("../assets/angryBird.jpg"),
            name: "3D愤怒的小鸟",
            gameType: "最受欢迎的经典益智弹弓小鸟游戏回来了！",
            author: "Ultrasty",
            gameUrl: "/static/angrybirds/index.html",
            gameDescription: "愤怒小鸟的老玩家？愤怒小鸟经典游戏，你热爱的一切，都还在！而且增添了3D元素。选择要弹出的小鸟，与好友一同玩乐、抢攻多阶段关卡、与全球玩家竞赛合作。"
          },
          {
            id: 2,
            url: require("../assets/watermelon.jpg"),
            name: "合成大西瓜Plus",
            gameType: "船新版本！",
            author: "Shinenine",
            gameUrl: "/static/watermelon/index.html",
            gameDescription: "2021年最火的休闲小游戏带着它的镜像小游戏一起回来啦！全新地图，全新界面！"
          },
          {
            id: 3,
            url: require("../assets/chazhen.jpg"),
            name: "新版见缝插针",
            gameType: "relax",
            author: "mooneater0",
            gameUrl: "/static/needle/index.html",
            gameDescription: "考验反应力的休闲小游戏--见缝插针回来啦！可爱的皮肤，丰富的玩法，快来挑战你的手速吧！"
          }
        ],
        highest: [{
            id: 1,
            url: require("../assets/highest1.png"),
            name: "原神",
            gameType: "adventure",
            author: "Mihayo",
            gameDescription: "2021最火的RPG游戏"
          },
          {
            id: 2,
            url: require("../assets/game2.jpg"),
            name: "王者荣耀",
            gameType: "action",
            author: "tencent",
            gameDescription: "近几年最火的移动端moba类游戏"
          }
        ],
        newest: [{
            id: 1,
            url: require("../assets/new1.png"),
            name: "New",
            gameType: "action",
            author: "Shinenine",
            gameDescription: "什么游戏描述呢"
          },
          {
            id: 2,
            url: require("../assets/new2.png"),
            name: "second highest game",
            gameType: "relax",
            author: "Shinenine",
            gameDescription: "描述"
          }
        ]
      };
    },
    methods: {
      imgLinkGame(item) {
        window.location.href = item.gameUrl;
      },
      linkGame(item) {
        console.log(item.gameUrl);
        if (item.gameUrl == "#") {
          Toast("本游戏正在开发中");
        } else window.location.href = item.gameUrl;
      }
    }
  };

</script>

<style>
  .headTitle {
    float: left;
    margin-left: 2rem;
  }

  .swipe {
    border-radius: 2rem;
    border-color: bisque;
    margin-top: 2rem;
    height: 13rem;
    width: 100%;
    margin-bottom: 2rem;
  }

  .swipeImg {
    width: 100%;
  }

  .tab1 {
    margin-top: 3rem;
  }

  .bottomTabs {
    margin-top: 5rem;
  }

</style>
