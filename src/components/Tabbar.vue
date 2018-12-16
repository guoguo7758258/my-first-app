<template>
    <div class="nav">
        <router-link
          v-for="item of links"
          :key="item.path"
          :to="item.path"
          tag="div"
          class="nav-wrap"
        >
        <b v-if="item.path === '/cart'">
         <span v-if="totalCount != ''" class="totalcount">
            {{totalCount}}
         </span>
        </b>
        <i class="iconfont" v-html="item.icon"></i>
        <span class="nav-text">{{item.text}}</span>
        </router-link>
      </div>
</template>

<script>
import routes from '@/router/routes'
import { mapGetters } from 'vuex'
export default {
  name: 'Tabbar',
  data () {
    return {
      links: routes.filter(router => router.isNav === true)
    }
  },
  computed: {
    ...mapGetters(['totalCount'])
  }
}
</script>

<style lang="scss" scoped>
@import './../scss/iconfont.scss';
.nav{
    width: 100%;
    align-items: center;
    height: 52px;
    display: flex;
    justify-content: space-around;
    color:#808080;
    background: #ffffff;
    position: relative;
  }
  .nav-wrap{
    text-align: center;
    cursor: pointer;
    position: relative;
  }
  .nav .totalcount{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #d20000;
    line-height: 20px;
    font-size: 12px;
    position: absolute;
    top: -7px;
    left: 20px;
    color: white;
  }
  .nav i{
    font-size: 20px !important;
    cursor: pointer;
    font-family: 'iconfont';
  }
  .router-link-exact-active{
    color: #fdd102;
  }
  .router-link-active{
    color: #fdd102;
  }
  .nav-text{
    font-size: 12px;
    margin-top: 3px;
    display: block;
  }
</style>
