export default {
  // 购物车选中数量
  checkedCount (state) {
    return state.cart.reduce((result, item) => {
      if (item.isChecked === true) {
        result += item.count
      }
      return result
    }, 0)
  },
  // 购物车总数量
  totalCount (state) {
    return state.cart.reduce((result, item) => {
      result += item.count
      return result
    }, 0)
  },
  // 购物车所有都被选中
  isAllChecked (state) {
    return state.cart.every(item => item.isChecked === true)
  },
  // 购物车选中价格
  checkedPrice (state) {
    // console.log(state)
    return state.cart.reduce((result, item) => {
      if (item.isChecked === true) {
        result += item.count * item.price
        // console.log(result)
      }
      return result
    }, 0)
  }
}
