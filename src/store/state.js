// 初始化用户
// const initUser = {
//   isLogin: false,
//   username: '',
//   user_img: '',
//   quanxian: ''
// }
export default {
  cart: JSON.parse(window.localStorage.getItem('my_cart')) || []
  // user: JSON.parse(window.localStorage.getItem('my_user')) || initUser
}
