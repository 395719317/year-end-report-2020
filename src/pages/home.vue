<template>
  <div class="page">
    <head-nav></head-nav>
    <div class="home ps-r">
      <div class="tf-r--3 paper">
        <div class="ps-r h-30">
          <span v-if="activeIdx>=0"  :class="{'text-animation':activeIdx===0}">HI,丁鹏</span>
        </div>
        <div class="ps-r h-30 lh-30">
          <span v-if="activeIdx>=1"  :class="{'text-animation':activeIdx===1}">一年不见，别来无恙？</span>
        </div>
        <div class="fz-0">
          <img src="../assets/line.png" />
        </div>
        <div class="ps-r h-30 lh-30">
          <span v-if="activeIdx>=2" :class="{'text-animation':activeIdx===2}">时光荏苒，犹如白驹过隙。</span>
        </div>
        <div class="fz-0">
          <img src="../assets/line.png" />
        </div>
        <div class="ps-r h-30 lh-30">
          <span v-if="activeIdx>=3" :class="{'text-animation':activeIdx===3}">又至岁末，即将辞旧迎新。</span>
        </div>
        <div class="fz-0">
          <img src="../assets/line.png" />
        </div>
        <div class="ps-r h-30 lh-30">
          <span v-if="activeIdx>=4" :class="{'text-animation':activeIdx===4}">回首刚刚过去的2020，</span>
        </div>
        <div class="fz-0">
          <img src="../assets/line.png" />
        </div>
        <div class="ps-r h-30 lh-30">
          <span  v-if="activeIdx>=5" :class="{'text-animation':activeIdx===5}">这一年，我们历经风雨也见到彩虹</span>
        </div>
        <div class="fz-0">
          <img src="../assets/line.png" />
        </div>
        <div class="ps-r h-30 lh-30">
          <span v-if="activeIdx>=6" :class="{'text-animation':activeIdx===6}">这一年，我们见证历史也传递希望</span>
        </div>
        <div class="fz-0">
          <img src="../assets/line.png" />
        </div>
        <div class="ps-r h-30 lh-30">
          <span v-if="activeIdx>=7" :class="{'text-animation':activeIdx===7}">这一年，百感交集，回味悠长......</span>
        </div>
        <div class="fz-0">
          <img src="../assets/line.png" />
        </div>
      </div>

      <div class="receive-btn ps-a ps-b-100 ps-l-0 ps-r-0 m-a" @click.prevent="handleReceive"></div>
    </div>
  </div>
</template>

<script>
import headNav from "../components/nav";
import { getToken } from "@/api/login";
import { getReport } from "@/api/index";
export default {
  components: {
    headNav
  },
  data() {
    return {
      activeIdx: -1,
      idxArr:{}
    };
  },
  computed: {},

  methods: {
    handleReceive() {
      this.$router.push({ path: "step" });
    },
    goTest() {
      this.$router.push({ path: "test" });
    },
    // 用ticket换取token
     getTokenVal() {
      const that = this;
      return new Promise(async resolve => {
        if (!sessionStorage.getItem("token") && that.$route.query.ticket) {
          if (that.$route.query.ticket) {
            const { token, code } = await getToken({
              ticket: that.$route.query.ticket
            });
             console.log('code',code)
            if (code === 200) {
              sessionStorage.setItem("token", token);
              // that.$store.dispatch("user/doSetToken", token);
               console.log('res2222222')
                console.log('res2222222tone',sessionStorage.getItem("token"))
              that.getReport();
            }
            resolve();
          } else {
            that.$toast("链接缺少ticket");
          }
        } else {
          resolve();
        }
      });
    },
    async getReport() {
      console.log('getReport');
      const { data, code } = await getReport();
      let timer=setInterval(this.handleActiveIdx,2000)
      if(this.activeIdx>10){
        clearInterval(timer);
      }
    
    },
    init() {
      console.log('ress1')
      this.getTokenVal();
    },
    handleActiveIdx(){
      let that = this;
        console.log('that.activeIdx',that.activeIdx);
        if(that.activeIdx===-1){
          that.activeIdx=0;
        }else{
          that.activeIdx=that.activeIdx+1;
        }
      }
  },
  mounted() {
    let that = this;
      
    this.init();
  }
};
</script>
<style lang='scss' scoped>
.home {
  width: 100%;
  height: 100vh;
  background: url(../assets/1.png) no-repeat;
  background-size: 100% 100%;
  position: relative;
  .name {
    position: absolute;
    top: 33.8%;
    color: black;
    left: 24%;
    font-size: 15px;
  }
  .receive-btn {
    width: 120px;
    height: 50px;
    color: black;
  }

  .paper {
    width: 283px;
    position: absolute;
    top: 28.6%;
    left: 10.2%;
    padding: 30px;
    box-sizing: border-box;
    div {
      width: 100%;
    }
    img {
      width: 100%;
    }
    span {
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .text-animation {
    position: absolute;
    animation: textAnimation 2s linear;
  }
  @keyframes textAnimation {
    0% {
      // left: 0%;
      width: 0%;
      opacity: 0;
    }
    50% {
      // left: 25%;
      width: 50%;
      opacity: 0.5;
    }
    100% {
      // left: 60%;
      width: 100%;
      opacity: 1;
    }
  }
}
</style>