import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import animated from 'animate.css'
import '@/assets/icons'
import '@/common/scss/index.scss'

Vue.use(animated)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
