<template>
  <div class="page">
    <head-nav></head-nav>
    <div class="fixed-hint" v-if="showFixedHint" @click="saveImg('page01')">
      <i class="triangle-icon triangle-icon-small"></i>
      <!-- <i class="triangle-icon triangle-icon-big"></i> -->
      <span>向上滑，查看年度报告</span>
    </div>
    <div class="ps-f ps-b-0 zi-9999 p-20">
      <div>姚琦玥 摄于 中国 · 新大陆科技园 · 北门</div>
      <div>中国 · 福州 E116° 41' N26° 02’</div>
    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="page01" id="page01">
        <div class="detail-page" @click="saveImg('page01')">
          <!-- <div class="text-detail-box" :class="thisActiveIndex == 0 ? 'have-animation' : ''">
            <p class="font-title-color">时光总是偷偷流流逝</p>
            <p class="font-title-color">转眼间一年又过去了</p>
            <p class="font-title-color">打开新大陆APP</p>
            <p class="font-important-color font-bold margin-top-5px">这一年你走过的痕迹</p>
          </div> -->
          <div class="paper-box ps-f ps-t-90 tf-r-5 p-10">
            <div class="p-20 w-230 hp-100">
                <div class="hp-100">
                  <div class="pb-10">
                    <div>2018年08月24日</div>
                    <div>我的新大陆之旅从这一天开始,不知不觉间，我与新大陆已经一起奋斗了2年3个月26天了。</div>
                  </div>
                  <div  class="pb-10">
                    <div>2018年08月24日</div>
                    <div>我的新大陆之旅从这一天开始,不知不觉间，我与新大陆已经一起奋斗了2年3个月26天了。</div>
                  </div>
                  <div  class="pb-10">
                    <div>2018年08月24日</div>
                    <div>我的新大陆之旅从这一天开始,不知不觉间，我与新大陆已经一起奋斗了2年3个月26天了。</div>
                  </div>
                  <div  class="pb-10">
                    <div>2018年08月24日</div>
                    <div>我的新大陆之旅从这一天开始,不知不觉间，我与新大陆已经一起奋斗了2年3个月26天了。</div>
                  </div>
                </div>
            </div>
            
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="page02" id="page02">
        <div class="detail-page">
          <div
            class="text-detail-box text-detail-box-01"
            :class="thisActiveIndex == 1 ? 'animated flipInX' : ''"
          >
            <p class="font-important-color">2020年</p>
            <p class="font-title-color">你更爱新大陆了</p>
            <p class="font-title-color">这一年新大陆给你发了100w红包</p>
            <p class="font-title-color"></p>
          </div>
          <div
            class="text-detail-box text-detail-box-02"
            :class="thisActiveIndex == 1 ? 'animated flipInY' : ''"
          >
            <p class="font-title-color">在食堂加班餐省了99w</p>
            <p class="font-title-color">坐班车你省了1w</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="page03" id="page03">
        <div class="detail-page">
          <div
            class="text-detail-box text-detail-box-01"
            :class="thisActiveIndex == 2 ? 'animated bounceInLeft' : ''"
          >
            <p class="font-important-color">2020年</p>
            <p class="font-title-color">你已经来新大陆2000多年了</p>
            <p class="font-title-color">这么多年你保持了对新大陆的忠诚</p>
            <p class="font-title-color">真是长寿又忠诚</p>
          </div>
          <div
            class="text-detail-box text-detail-box-02"
            :class="thisActiveIndex == 2 ? 'animated bounceInUp' : ''"
          >
            <p class="font-title-color">你为新大陆定下一年帮它赚1个亿的目标</p>
            <p class="font-title-color">实际上你开年第一天就超额完成</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="page04" id="page04">
        <div class="detail-page"></div>
      </swiper-slide>
      <swiper-slide class="page05" id="page05">
        <div class="detail-page"></div>
      </swiper-slide>
      <swiper-slide class="page06" id="page06">
        <div class="detail-page"></div>
      </swiper-slide>
      <swiper-slide class="page07" id="page07">
        <div class="detail-page"></div>
        <china-map></china-map>
      </swiper-slide>
      <swiper-slide class="page08" id="page08">
        <div class="detail-page">
          <div
            class="text-detail-box text-detail-box-01"
            :class="thisActiveIndex == 7 ? 'animated bounce' : ''"
          >
            <p class="font-important-color">2020年过去了</p>
            <p class="font-title-color">
              不知不觉，我和xxx一起走过了
              <span class="font-col-blue">9999天</span>
            </p>
            <p class="font-title-color" @click="saveImg('page08')">在习以为常的生活里，总有些简单而美好的相遇</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getReport } from "@/api/index";
import headNav from "../components/nav";
import html2canvas from "html2canvas";
import chinaMap from "../components/Map/ChinaChart";
export default {
  components: {
    swiper,
    swiperSlide,
    headNav,
    chinaMap
  },
  data() {
    return {
      // 是否展示提示滑动文本
      showFixedHint: true,
      // 记录滑动前的slideIndex
      beforeSlideIndex: 0,
      // 记录当前swiper的activeIndex
      thisActiveIndex: 0,
      // swiper配置项
      swiperOption: {
        // effect: "fade", // 淡入
        direction: "vertical", // 垂直切换选项
        autoplay: false, // 是否自动播放
        height: window.innerHeight, // 高
        width: window.innerWidth, //宽
        speed: 700, // 切换速度
        on: {
          slideChange: () => {
            // debugger;
            let swiper = this.$refs.mySwiper.swiper;
            let slideIndex = swiper.activeIndex;
            this.thisActiveIndex = slideIndex;
            // console.log(slideIndex);
            if (slideIndex - this.beforeSlideIndex > 0) {
              // 向下滑动
              if (slideIndex == "1") {
                this.playVideo("video1");
              } else if (slideIndex == "2") {
                this.playVideo("video2");
              } else if (slideIndex == "3") {
                this.playVideo("video3");
              } else if (slideIndex == "4") {
                this.playVideo("video4");
              } else if (slideIndex == "5") {
                this.playVideo("video5");
              } else if (slideIndex == "6") {
                this.playVideo("video6");
              } else if (slideIndex == "7") {
                this.showFixedHint = false;
                this.playVideo("video7");
              }
            } else {
              // 向上回滑
              this.showFixedHint = true;
              if (slideIndex == "6") {
                this.playVideo("video8");
              } else if (slideIndex == "5") {
                this.playVideo("video9");
              } else if (slideIndex == "4") {
                this.playVideo("video10");
              } else if (slideIndex == "3") {
                this.playVideo("video11");
              } else if (slideIndex == "2") {
                this.playVideo("video12");
              } else if (slideIndex == "1") {
                this.playVideo("video13");
              } else if (slideIndex == "0") {
                this.playVideo("video14");
              }
            }
            this.beforeSlideIndex = slideIndex;
          }
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    getReport() {
      getReport();
    },
    playVideo(DOM) {
      // let ele = document.getElementById(DOM);
      // ele.style.display = "block";
      // ele.play();
      // // 监听视频播放是否结束，结束隐藏当前视频
      // ele.addEventListener("ended", function() {
      //   ele.style.display = "none";
      // });
    },
    saveImg(id) {
      this.htmToBase64(id).then(canvas => {
        var base64 = canvas.toDataURL("image/png");
        if (!base64) {
          this.$toast("获取图片失败");
          return;
        }
        var bs64 = base64.split("base64,")[1];
        window.cordova.exec(
          function(result) {
            this.$toast("图片已保存到本地相册，请将图片分享给好友吧~");
          },
          function(error) {
            this.$toast("调用失败");
          },
          "WorkPlus_Image",
          "actionForLongPressImage",
          [{ imageData: bs64 }]
        );
      });
    },
    async htmToBase64(id) {
      var shareContent = document.querySelector(".page");
      var width = shareContent.offsetWidth;
      var height = shareContent.offsetHeight;
      var scale = 2;
      var opts = {
        scale: scale,
        useCORS: true,
        logging: true,
        width: width,
        height: height
      };
      return await html2canvas(document.querySelector(".page"), opts);
    }
  },
  mounted() {
    this.getReport();
  }
};
</script>

<style lang="scss">
$browser-default-font-size: 37.5px !default;

@function pxTorem($px) {
  @return $px / $browser-default-font-size * 1rem;
}
.view {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}
* {
  padding: 0;
  margin: 0;
  color: #333333;
}

html,
body {
  margin: 0;
  padding: 0;
}

.font-bold {
  font-weight: 600;
}

.font-important-color {
  color: #212121 !important;
}

.font-title-color {
  color: #424242 !important;
}

.font-col-blue {
  color: #33a3ff;
}

.margin-top-5px {
  margin-top: 5px;
}
</style>

<style lang="scss" scoped>
.page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .home {
    width: 100%;
    height: 100vh;
    background: url(../assets/home.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
    .name {
      position: absolute;
      top: 43%;
      color: black;
      left: 23%;
      font-size: 15px;
    }
    .receive-btn {
      width: 120px;
      height: 50px;
      color: black;
    }
  }

  .fixed-hint {
    position: fixed;
    z-index: 10;
    padding-top: 60px;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: 600;
    animation: fixedHintAnimation 1s linear infinite;
    .triangle-icon {
      position: absolute;
      display: block;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      &.triangle-icon-small {
        top: 0;
        width: 30px;
        height: 30px;
        background: url(../assets/arrow_up.png) no-repeat;
        background-size: 30px 30px;
      }
      &.triangle-icon-big {
        top: 30px;
        border-bottom: 18px solid #fff;
        border-right: 12px solid transparent;
        border-left: 12px solid transparent;
      }
    }
  }
  @keyframes fixedHintAnimation {
    0% {
      bottom: 10%;
      opacity: 0.5;
    }
    100% {
      bottom: 14%;
      opacity: 1;
    }
  }
  .detail-page {
    position: relative;
    display: block;
    width: 100%;
    height: 100vh;
    .text-detail-box {
      position: absolute;
      display: inline-block;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 10px 14px;
      border-radius: 10px;
      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
  .page01 {
    background: url(../assets/2.jpg) no-repeat;
    background-size: 100% 100%;
    .detail-page {
      .text-detail-box {
        top: 20%;
        left: 10%;
        &.have-animation {
          animation: page01Animation 1s linear;
        }
      }
    }
  }
  @keyframes page01Animation {
    0% {
      left: 0%;
      opacity: 0.2;
    }
    50% {
      left: 25%;
      opacity: 0.7;
    }
    100% {
      left: 10%;
      opacity: 1;
    }
  }

  .page02 {
    background: url(../assets/3.jpg) no-repeat;
    background-size: 100% 100%;
    .detail-page {
      .text-detail-box-01 {
        top: 20%;
        left: 10%;
      }
      .text-detail-box-02 {
        top: 50%;
        right: 10%;
      }
    }
  }
  .page03 {
    background: url(../assets/4.jpg) no-repeat;
    background-size: 100% 100%;
    .detail-page {
      .text-detail-box-01 {
        top: 20%;
        left: 10%;
      }
      .text-detail-box-02 {
        top: 50%;
        right: 10%;
      }
    }
  }
  .page04 {
    background: url(../assets/5.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .page05 {
    background: url(../assets/6.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .page06 {
    background: url(../assets/7.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .page07 {
    background: url(../assets/8.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .page08 {
    background: url(../assets/9.jpg) no-repeat;
    background-size: 100% 100%;
    .text-detail-box-01 {
      top: 30%;
      right: 10%;
    }
  }
  .paper-box {
    color:black;
    padding:40px;
    background: url(../assets/paper.png) no-repeat;
    background-size: 350px 450px;
    width: 350px;
    height: 450px;
  }
}
</style>
