import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import animated from 'animate.css'
import '@/assets/icons'
import '@/common/scss/index.scss'
import Vconsole from 'vconsole'
import FastClick from 'fastclick'
import echarts from 'echarts'
console.log('main echarts',echarts);
// Vue.prototype.$echarts = echarts
import {
  Toast,
  Loading
} from "vant";
Vue.use(animated)
Vue.use(Toast)
Vue.use(Loading)
const vConsole = new Vconsole();
Vue.use(vConsole);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
FastClick.attach(document.body);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')