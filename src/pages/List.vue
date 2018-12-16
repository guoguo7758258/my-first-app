<template>
    <div class="wrap">
      <div class="header">
        <mt-header fixed title="分类">
          <div @click="$router.back()" slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
        </mt-header>
      </div>
      <div class="main">
        <div class="serch">
          <mt-search
            cancel-text="取消"
            placeholder="搜索商品">
          </mt-search>
        </div>
        <div class="nav">
          <div class="sidebar">
            <mt-navbar v-model="selected">
              <mt-tab-item
              :id="item.id"
              v-for="item of bigNav"
              :key="item.id"
              v-on:click.native="getList(item.id)"
              >{{item.name}}</mt-tab-item>
            </mt-navbar>
          </div>
          <!-- tab-container -->
          <div class="right-bar">
            <mt-tab-container v-model="selected">
              <mt-tab-container-item style="display:flex;">
                <router-link
                 v-for="curr of listinfo"
                :id="curr.id"
                :key="curr.id"
                :to="'/mall/'+curr.url.slice(-4)"
                v-on:click.native="goMall(curr.url.slice(-4))"
                class="list">
                  <div class="list-img">
                    <img :src="curr.imageUrl" alt="">
                  </div>
                  <div class="list-title">{{curr.title}}</div>
                </router-link>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import * as Apis from '@/requests/apis.js'
export default {
  name: 'List',
  data () {
    return {
      selected: 2,
      bigNav: [],
      listinfo: [],
      arr: [],
      listinfoId: []
    }
  },
  created () {
    this.$http.get(Apis.List)
      .then(resp => {
        this.bigNav = resp.data.data.list.slice(1, 16)
        for (let i = 0; i < this.bigNav.length; i++) {
          this.arr.push(this.bigNav[i])
        }
        this.getList(resp.data.data.list[1].id)
      })
  },
  methods: {
    getList: function (event) {
      this.$http.get(`/tab/${event}?start=0`)
        .then(resp => {
          this.listinfo = resp.data.data.categories
        })
    },
    goMall: function (id) {
      this.$router.push({
        path: '/mall/' + id,
        query: {
          id
        }
      })
    }
  }
}
</script>

<style scoped>
@import './../scss/header.scss';
@import './../scss/list.scss';
</style>
