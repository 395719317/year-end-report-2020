<template>
  <div class="page">
    <head-nav></head-nav>
    <div class="home ps-r">
      <div class="name tf-r-8">丁鹏</div>
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
    return {};
  },
  computed: {},

  methods: {
    handleReceive() {
      this.$router.push({ path: "step" });
    },
    // 用ticket换取token
    async getToken() {
      const that = this;
      await new Promise(async resolve => {
        if (!sessionStorage.getItem("token") && that.$route.query.ticket) {
          if (that.$route.query.ticket) {
            const { token, code } = await getToken({
              ticket: that.$route.query.ticket
            });
            if (code === 200) {
              sessionStorage.setItem("token", token);
              that.$store.dispatch("user/doSetToken", token);
              resolve();
            }
          } else {
            that.$toast("链接缺少ticket");
          }
        } else {
          resolve();
        }
      });
    },
    async getReport() {
      const { data, code } = await getReport();
    },
    init() {
      this.getToken().then(res => {
        this.getReport();
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang='scss' scoped>
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
</style>