<template>
  <div class="list">
    <router-link
    v-for="item of links"
    :key="item.path"
    :to="item.path"
    tag="div"
    class="list-wrap"
    >
      <i class="iconfont" v-html="item.icon"></i>
      <span>{{item.text}}</span>
      <i class="iconfont right" >&#xe66f;</i>
      <span class="right" v-if="item.path==='/online'|| item.path==='/phone'">
        服务时间：9:00-23:00
      </span>
    </router-link>
  </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  name: 'MineList',
  data () {
    return {
      links: routes.filter(router => router.islist === true)
    }
  }
}
</script>

<style>
.list-wrap{
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #efefef;
}
.list-wrap i{
  font-family: 'iconfont';
}
</style>
