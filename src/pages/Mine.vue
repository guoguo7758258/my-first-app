<template>
    <div class="wrap">
      <div class="header">
        <mt-header title="个人中心">
          <div @click="$router.back()" slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
        </mt-header>
      </div>
      <div class="main">
        <div class="top">
          <div class="user-img">
            <!-- <img :src="user.user_img" alt=""> -->
          </div>
          <!-- <div class="user-name" v-if="user.isLogin">
            <span></span>
          </div> -->
          <!-- <div class="user-name" @click="toLogin" v-else>登录</div> -->
        </div>
        <div class="center">
          <div class="my-dingdan">我的订单
            <span>
              查看全部订单
              <i class="iconfont">&#xe66f;</i>
            </span>
          </div>
          <div class="products-service">
            <div class="service-wrap">
              <i class="iconfont">&#xe785;</i>
              <span>待付款</span>
            </div>
            <div class="service-wrap">
              <i class="iconfont">&#xe6db;</i>
              <span>待发货</span>
            </div>
            <div class="service-wrap">
              <i class="iconfont">&#xe638;</i>
              <span>待收货</span>
            </div>
            <div class="service-wrap">
              <i class="iconfont">&#xe61f;</i>
              <span>评价</span>
            </div>
            <div class="service-wrap">
              <i class="iconfont">&#xe624;</i>
              <span>退换货</span>
            </div>
          </div>
          <div class="other-service">
            <mine-list/>
          </div>
          <!-- <div @click="logout" class="logout" v-if="user.isLogin">注销</div> -->
        </div>
      </div>
    </div>
</template>

<script>
import MineList from 'components/MineList'
import { mapState } from 'vuex'
export default {
  name: 'Mine',
  components: {
    MineList
  },
  computed: {
    ...mapState(['user'])
  },
  // watch: {
  //   user (val) {
  //     if (val.isLogin === true) {
  //       const { redirect = '/home' } = this.$route.params
  //       this.$router.push(redirect)
  //     }
  //   }
  // },
  methods: {
    toLogin () {
      this.$router.push({
        name: 'login',
        params: {
          redirect: '/login'
        }
      })
    },
    logout () {
      localStorage.removeItem('my_user')
      location.reload()
    }
  }
}
</script>

<style lang="scss">
@import './../scss/header.scss';
@import './../scss/mine.scss';
</style>
