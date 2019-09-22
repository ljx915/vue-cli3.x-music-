import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

Vue.config.productionTip = false

fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
