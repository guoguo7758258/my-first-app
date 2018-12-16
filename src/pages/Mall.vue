<template>
    <div>
      <div class="header">
        <mt-header :title="big_title">
          <div @click="$router.back()" slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
        </mt-header>
      </div>
      <div class="main">
        <div class="banner" v-if="banner_img != ''">
          <img :src="banner_img.cover" alt="">
        </div>
        <div class="main-products-title">
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <ul class="main-list">
                <li>综合</li>
                <li>新品</li>
                <li>销量</li>
                <li>价格</li>
              </ul>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
        <div class="main-products">
          <div class="main-products-wrap">
            <router-link v-for="item of products" :key="item.id" :to="'/detail/' + item.id" class="a-products">
              <div class="wrap-products">
                <dl>
                  <dt class="img">
                    <img :src="item.image">
                  </dt>
                  <dd class="text">{{item.title}}</dd>
                  <dd class="service">
                    <span>惠</span>
                    <span>包邮</span>
                  </dd>
                  <dd class="price">
                      <span class="new-price"><span>￥</span>{{item.price}}</span>
                      <span class="buy-num">{{item.saleNum}} 人已买</span>
                  </dd>
                </dl>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Products from 'components/Products'
// import * as Apis from '@/requests/apis.js'
export default {
  name: 'Mall',
  components: {
    Products
  },
  data () {
    return {
      selected: '1',
      products: [],
      banner_img: [],
      big_title: [],
      isLoading: false,
      pageNum: 0
    }
  },
  created () {
    this.getParams()
    const id = this.mallId
    if (id === '2792') {
      this.$http.get(`/column/${id}/items?start=${this.pageNum}`)
        .then(resp => {
          this.products = resp.data.data.list
          this.big_title = resp.data.data.categoryName
        })
      this.$http.get(`/column/${id}`)
        .then(resp => {
          this.banner_img = resp.data.data
        })
    } else if (id === '2802') {
      this.$http.get(`/column/${id}/items?start=${this.pageNum}`)
        .then(resp => {
          this.products = resp.data.data.list
        })
      this.$http.get(`/column/${id}`)
        .then(resp => {
          this.banner_img = resp.data.data
        })
    } else {
      this.$http.get(`/category/${id}/items?start=${this.pageNum}`)
        .then(resp => {
          this.products = resp.data.data.items.list
          this.big_title = resp.data.data.categoryName
        })
    }
  },
  mounted () {
    window.addEventListener('scroll', this.productList, true)
  },
  methods: {
    handleGuan: function (event) {
      const el = event.currentTarget
      el.innerText = '已关注'
      el.style.backgroundColor = '#d9d9d9'
    },
    getParams: function () {
      this.mallId = this.$route.params.id
    },
    // 请求第二页以后的数据
    extendGetProductList () {
      this.getParams()
      var _this = this
      _this.pageNum += 30
      const id = this.mallId
      this.$http.get(`/category/${id}/items?start=${_this.pageNum}`)
        .then(resp => {
          _this.products = _this.products.concat(resp.data.data.items.list)
          _this.isLoading = true
        })
    },
    productList () {
      var _this = this
      _this.scorllAppTop = parseInt(document.getElementsByClassName('app-main')[0].scrollTop)
      _this.scorllAppCline = document.getElementsByClassName('app-main')[0].clientHeight
      _this.scrollAppHeight = document.getElementsByClassName('app-main')[0].scrollHeight
      // console.log(_this.scorllAppTop, _this.scorllAppCline, _this.scrollAppHeight)
      if (_this.scorllAppTop + _this.scorllAppCline + 1 === _this.scrollAppHeight) {
        _this.isLoading = false
        _this.extendGetProductList()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import './../scss/header.scss';
@import './../components/scss/Products.scss';
@import './../scss/mall.scss';
</style>
