<template>
  <div class="head-nav ps-f ps-t-0 zi-9999 ta-c wp-100 pt-10 ">
    <div class="w-50 ps-a ps-l-0 ps-t-10 ta-l back pr-10 pl-5 lh-23 c-w" @click="handleClose">
      <svg-icon icon-class="share" class="tf-ry-180 fz-18 c-w" />
      <span class="c-w">离开</span>
    </div>
    <img class="w-60 ps-a ps-t-30 ps-l-0 ps-r-0 m-a" src="../assets/newLand.png" />
    <div class="w-50 ps-a ps-r-0 share ps-t-10 ta-r pl-10 pr-5 lh-23" @click="handleShare">
      <span class="c-w">分享</span>
      <svg-icon icon-class="share" class="fz-18" />
    </div>
    <div class="ps-a music-icon f-c ps-r-5 ps-t-50" :class="playerStatus?'music':''" @click="handlePlay">
      <!-- <svg-icon icon-class="music" class="fz-18" /> -->
      <img src="../assets/music-icon.png">
      <div v-if="!playerStatus" class="line ps-a w-2 bg-w h-20 tf-r--35">
      </div>
    
    </div>
    <audio v-if="playerStatus" hidden="true" autoplay="autoplay" loop="true" controls="controls"  src="../assets/music/bgm.mp3">
      <!-- <source src="https://www.w3school.com.cn/i/horse.ogg" /> -->
    </audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerStatus:true
    };
  },
  components: {},

  computed: {},

  methods: {
    handleClose() {
      console.log("handleClose");
      window.cordova.exec(
        function(result) {
          // alert(JSON.stringify(result, null, 4));
        },
        function(error) {
          alert("调用失败");
        },
        "WorkPlus_WebView",
        "exit",
        []
      );
    },
    handleShare() {
      console.log("handleShare");
      window.cordova.exec(
        function(result) {
          layer.msg("微信分享成功");
        },
        function(error) {
          layer.msg("微信分享失败");
        },
        "WorkPlus_WebView",
        "wxShare",
        [
          {
            app_id: "wx8f644228f9061159",
            title: "我与新大陆这一年——我的新大陆2019",
            type: "webpage",
            description: "点击开启盘点",
            thumb: "${staticDomain! }/report/images/report-wx.png",
            scene: 0,
            data: {
              url: "${staticDomain! }/user-report/index.html"
            }
          }
        ]
      );
    },
    handlePlay(){
      this.playerStatus=this.playerStatus?false:true;
    }
  }
};
</script>
<style lang='scss' scoped>
.head-nav {
  color: white;
  .back {
    background: #a8c3e0;
    border-radius: 0 40px 40px 0;
    opacity: 0.8;
  }
  .share {
    background: #a8c3e0;
    border-radius: 40px 0 0 40px;
    opacity: 0.8;
  }
}
@keyframes rotating{
from{transform:rotate(0)}
to{transform:rotate(360deg)}
}
.music-icon{
  display:flex;
  width:25px;
  height:25px;
  border-radius: 25px;
  background:rgba(168, 195, 224,0.5);
  img{
    width:15px;
    height:16px;
  }
}
.music{
animation:rotating 3s linear infinite;
}

</style>