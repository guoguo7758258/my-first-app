<template>
    <div class="wrap">
      <div class="header">
        <mt-header title="登录">
          <div @click="$router.back()" slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
        </mt-header>
      </div>
      <div class="wrap-main">
        <div class="username"><input type="text" placeholder="用户名" v-model="username"></div>
        <div class="password"><input type="password" placeholder="密码" v-model="password"></div>
        <div class="login">
          <mt-button type="default"
            class="login-button"
            @click="login"
          >登录
          </mt-button>
        </div>
      </div>
    </div>
</template>

<script>
import * as Apis from '@/requests/apis.js'
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created () {
    if (this.user.isLogin === true) {
      console.log('1111')
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {
    user (val) {
      if (val.isLogin === true) {
        // console.log(this.$route.params)
        this.$router.push('/mine')
        // if (this.$route.params === '/login') {
        //   this.$router.push('/home')
        // }
        // const { redirect = '/home' } = this.$route.params
        // console.log(this.$route.params)
      }
    }
  },
  methods: {
    ...mapMutations(['loginSuccess']),
    login () {
      const {username, password} = this
      if (username !== '' && password !== '') {
      // console.log(username, password)
        this.$http.post(Apis.Login, {username, password})
          .then((resp) => {
            //  console.log(resp)
            if (resp.data.code === 200 && resp.data.errMsg === 'SUCCESS') {
              this.loginSuccess(resp.data.data)
            }
          })
          .catch(err => {
            alert(err + '账号或密码错误')
          })
      } else {
        alert('用户名或密码不能为空')
      }
    }
  }
}
</script>

<style lang="scss">
@import './../scss/header.scss';
@import './../scss/login.scss';
</style>
