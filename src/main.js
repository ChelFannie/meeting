// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
import './init'
import store from './store'

import Navigation from 'vue-navigation'
Vue.use(Navigation, {
  router
})

Vue.config.productionTip = false
Es6Promise.polyfill() // 解决低版本安卓内核和ie浏览器显示空白页面

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
