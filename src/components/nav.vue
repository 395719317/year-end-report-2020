<template>
  <div class="head-nav ps-f ps-t-0 zi-9999 ta-c wp-100 pt-10">
    <div class="w-50 ps-a ps-l-0 ps-t-10 ta-l back pr-10 pl-5 lh-23" @click="handleClose">
      <svg-icon icon-class="share" class="tf-ry-180" />
      <span>离开</span>
    </div>
    <img class="w-60 ps-a ps-t-30 ps-l-0 ps-r-0 m-a" src="../assets/newLand.png" />
    <div class="w-50 ps-a ps-r-0 share ps-t-10 ta-r pl-10 pr-5 lh-23" @click="handleShare">
      <span>分享</span>
      <svg-icon icon-class="share" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},

  computed: {},

  methods: {
    handleClose() {
      console.log('handleClose');
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
      console.log('handleShare');
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
  .svg-icon {
    font-size: 18px;
  }
}
</style>