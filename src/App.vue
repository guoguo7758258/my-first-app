<template>
  <div class="app">
    <!-- <div class="app-header">
    </div> -->
    <div class="app-main" @scroll="goTopScroll($event)">
      <router-view></router-view>
    </div>
    <div class="app-nav">
      <router-view name="tabbar"></router-view>
    </div>
    <div id="go-top" @click="goTop(step)" v-show="isShow === 'Show'">
          <i class="iconfont">&#xe61b;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    step: {
      type: Number,
      default: 50
    }
  },
  data () {
    return {
      scroolTop: 0,
      isShow: 'unShow'
    }
  },
  methods: {
    goTopScroll: function (event) {
      this.scroolTop = event.srcElement.scrollTop
      if (this.scroolTop > 0) {
        this.isShow = 'Show'
      } else {
        this.isShow = 'unShow'
      }
    },
    goTop: function (i) {
      document.getElementsByClassName('app-main')[0].scrollTop -= 30
      if (document.getElementsByClassName('app-main')[0].scrollTop > 0) {
        var c = setTimeout(() => this.goTop(i), 10)
      } else {
        clearTimeout(c)
      }
    }
  }
}
</script>
<style lang="scss">
@import 'App.scss';
html,
body,
.app{
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  &-main{
    flex: 1;
    overflow-x: hidden;
  }
  &-nav{
    height: 52px;
    border-top:1px solid #dedede;
  }
  #go-top{
    position: absolute;
    width: 50px;
    height: 50px;
    bottom: 150px;
    right: 0px;
    text-align: center;
    line-height: 50px;
    i{
      font-family: 'iconfont';
      color: #fdd012;
      font-size: 45px !important;
    }
  }
}
</style>
