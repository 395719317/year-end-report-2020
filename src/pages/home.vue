<template>
  <div class="page">
    <head-nav ></head-nav>
    <div class="home ps-r">
      <div class="name tf-r-8">丁鹏</div>
      <div class="receive-btn ps-a ps-b-100 ps-l-0 ps-r-0 m-a" @click="handleReceive"></div>
    </div>
  </div>
</template>

<script>
import headNav from "../components/nav";
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
      this.$router.push({ path: "index" });
    }
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