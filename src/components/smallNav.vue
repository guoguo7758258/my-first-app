<template>
  <div class="small-nav">
    <router-link
          v-for="item of links"
          :key="item.path"
          :to="item.path"
          tag="div"
          class="small-nav-wrap"
        >
        <i class="iconfont small-font" v-html="item.icon"></i>
        <span class="small-nav-text">{{item.text}}</span>
    </router-link>
      </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'smallNav',
  data () {
    return {
      links: routes.filter(router => router.issmallNav === true)
    }
  }
}
</script>

<style scoped>
@import "//at.alicdn.com/t/font_929870_6wwdu1hzloo.css";
    @font-face {
  font-family: 'iconfont';  /* project id 929870 */
  src: url('//at.alicdn.com/t/font_929870_6wwdu1hzloo.eot');
  src: url('//at.alicdn.com/t/font_929870_6wwdu1hzloo.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_929870_6wwdu1hzloo.woff') format('woff'),
  url('//at.alicdn.com/t/font_929870_6wwdu1hzloo.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_929870_6wwdu1hzloo.svg#iconfont') format('svg');
}
.small-nav-wrap{
  text-align: center;
}
.small-nav{
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
}
.small-font{
  font-size: 20px !important;
  text-align: center;
  color: #fdd102;
}
.small-nav-text{
  text-align: center;
  display: block;
  font-size: 11px;
  margin-top: 5px;
}
</style>
