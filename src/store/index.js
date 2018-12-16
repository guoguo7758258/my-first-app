import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'

// 同步数据
const syncStorageCart = store => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem('my_cart', JSON.stringify(state.cart))
  })
}

// const syncUser = store => {
//   store.subscribe((mutation, state) => {
//     window.localStorage.setItem('my_user', JSON.stringify(state.user))
//   })
// }
Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  state,
  getters,
  plugins: [syncStorageCart],
  mutations// 唯一一个更改state的地方，里面的方法最多两个参数，第一个就是state，第二个用于传递参数如果要传递多个参数，请使用对象
})
