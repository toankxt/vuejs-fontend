import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import { makeServer } from "./server"


Vue.config.productionTip = false

if (process.env.NODE_ENV === "development") {
  makeServer()
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
