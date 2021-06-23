<template>
  <div class="card">
    <img class="cardImg" :src="cardPost.url" />
    <h4>{{ cardPost.name }}</h4>
    <div class="content-wrapper">
      <div class="content">
        <p class="author">{{ cardPost.author }}</p>
        <p class="type">{{ cardPost.gameType }}</p>
        <p class="description">{{ cardPost.gameDescription }}</p>
        <van-button round type="info" @click="linkGame">开始游戏</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "card",
  props: ["cardPost"],
  data() {
    return {};
  },
  mounted() {
    this.showCard();
  },
  methods: {
    // 点击多少次就会绑定多少次click事件，on是绑定多少次就触发多少次的。所以需要先off再on
    linkGame() {
      console.log(this.cardPost.gameUrl);
      if (this.cardPost.gameUrl == "#") {
        this.toToast("本游戏正在开发中");
      } else window.location.href = this.cardPost.gameUrl;
    },
    toToast(text) {
      this.$toast({
        message: text
      });
    },
    showCard() {
      $(".card")
        .off("click")
        .on("click", function(e) {
          console.log("123");
          let card = $(e.currentTarget);
          let card_offset_scrolltop =
            $(card).offset().top - $(window).scrollTop();

          $(card).css("--data-offset-top", card_offset_scrolltop * -1 + "px");

          $(card).toggleClass("active");

          let ratio = 480 / 420;
          let height = $(window).height();
          height -=
            $(card)
              .find("img")
              .outerHeight() * ratio;
          height -=
            $(card)
              .find("h4")
              .outerHeight() * ratio;
          height /= ratio;

          $(card)
            .find(".content")
            .css("height", height);

          if ($(card).hasClass("active")) {
            $("body").addClass("noscroll");
          } else {
            $("body").removeClass("noscroll");
          }
        });
    }
  }
};
</script>

<style>
.card {
  width: var(--card-width);
  height: var(--card-height);
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  transition: 0.3s all cubic-bezier(0, 1, 0.95, 1.05);
  font-family: "Microsoft Yahei";
}

.card img {
  display: block;
  width: 100%;
  height: var(--img-height);
  object-fit: cover;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}

.card h4 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.8rem 1.2rem;
  background-color: #fff;
  line-height: 2rem;
  letter-spacing: -0.5px;
  padding-bottom: 0;
}

.card .content-wrapper {
  height: 0;
  overflow: hidden;
  transition: 0.3s all ease-out;
  opacity: 0.8;
}

.card .content-wrapper .content {
  padding: 0 1.2rem;
  background-color: #fff;
  overflow: auto;
}

/* active classes below */

.card.active {
  /* transform: translateY(var(--data-offset-top)) scale(calc(480 / 420)); */
  transform-origin: 50% 0;
  border-radius: 0;
}

.card.active h4 {
  padding-bottom: 0.8rem;
}

.card.active img {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  height: var(--img-height-expanded);
}

.card.active .content-wrapper {
  height: 350px;
  transition: 0.3s all ease-in;
  opacity: 1;
}

.author {
  font-size: 26px;
}
</style>
