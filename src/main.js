// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import $http from './requests'
import store from './store'

Vue.prototype.$http = $http

Vue.use(Vuex)
Vue.use(MintUI)
// Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   if (to.meta.isAuthRequired && store.state.user.isLogin === false) {
//     console.log('1111')
//     next({
//       name: 'login',
//       params: {
//         redirect: to.path
//       }
//     })
//   } else {
//     next()
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
