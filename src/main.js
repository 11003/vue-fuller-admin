import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import './plugins/axios'
import './plugins/element'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss'


import '@/icons' // icon
import '@/permission' // permission control

Vue.config.productionTip = false
Vue.prototype.$store = store;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
