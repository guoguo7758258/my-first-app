<template>
    <div class="wrap">
       <div class="header">
        <mt-header :title="big_title">
          <div @click="$router.back()" slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
        </mt-header>
      </div>
      <div class="main-products-wrap">
            <router-link v-for="item of products" :key="item.id" :to="'/detail/' + item.id" class="a-products">
              <div class="wrap-products">
                <dl>
                  <dt class="img">
                    <img :src="item.image">
                  </dt>
                  <dd class="text">{{item.title}}</dd>
                  <dd class="service">
                    <span>淘宝</span>
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
</template>

<script>
export default {
  name: 'allMall',
  data () {
    return {
      products: [],
      isLoading: false,
      big_title: '',
      pageNum: 0
    }
  },
  created () {
    this.getID()
    const id = this.id
    this.$http.get(`/tab/${id}?start=${this.pageNum}`)
      .then(resp => {
        this.big_title = resp.data.data.categoriesTitle
        this.products = resp.data.data.items.list.filter(item => item.title)
      })
  },
  mounted () {
    window.addEventListener('scroll', this.productList, true)
  },
  methods: {
    getID: function () {
      this.id = this.$route.params.id
    },
    // 请求第二页以后的数据
    extendGetProductList () {
      this.getID()
      const id = this.id
      var _this = this
      _this.pageNum += 30
      this.$http.get(`/tab/${id}/feeds?start=${this.pageNum}`)
        .then(resp => {
          _this.products = _this.products.concat(resp.data.data.list)
          _this.isLoading = true
        })
        .catch(err => {
          console.log(err)
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
@import './../../scss/header.scss';
@import './../../scss/home.scss';
@import './../../components/scss/Products.scss';
@import './../../scss/mall.scss';
</style>
