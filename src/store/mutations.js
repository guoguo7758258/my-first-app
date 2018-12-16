export default {
  // 将商品添加到购物车
  addToCart (state, data) {
    const {id} = data
    const isInCart = state.cart.some((cartItem) => {
      return cartItem.id === id
    })
    if (isInCart) {
      this.commit('addCartItem', id)
    } else {
      state.cart.push({
        ...data,
        count: 1,
        isChecked: false
      })
    }
  },
  // 购物车商品的增加
  addCartItem (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.count++
      }
      return item
    })
  },
  // 购物车商品的减少
  reduceCartItem (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        if (item.count > 1) {
          item.count--
        } else {
          item.count = 1
        }
      }
      return item
    })
  },
  // 购物车商品的删除
  deletCartItem (state, id) {
    const newCart = state.cart.filter(item => item.id !== id)
    state.cart = newCart
  },
  // 单选
  siggleChecked (state, obj) {
    state.cart = state.cart.map(item => {
      if (item.id === obj.id) {
        item.isChecked = !item.isChecked
      }
      return item
    })
  },
  // 全选
  toggleCheckAll (state, e) {
    const { checked } = e.target
    state.cart = state.cart.map(item => {
      item.isChecked = checked
      return item
    })
  }
  // 登录验证
  // loginSuccess (state, user) {
  //   state.user = {
  //     ...user,
  //     isLogin: true
  //   }
  // }
}
