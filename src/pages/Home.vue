<template>
    <div class="wrap">
      <div class="header">
        <div class="serch" v-on:click="goSerch()">
          <p>搜索商品，发现更多优选</p>
        </div>
        <!-- <mt-search autofocus v-model="value"></mt-search> -->
        <!-- <mt-search autofocus v-model="value" :result="filterResult"></mt-search> -->
      </div>
      <!-- banner部分 -->
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item of banner" :key="item.id">
            <div>
              <img :src="item.imageUrl" alt="" style="height:100%; width:100%;" >
            </div>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 小导航部分 -->
      <!-- <small-nav/> -->
      <!-- 秒杀 -->
      <div class="miaosha">
        <div class="left" v-for="item of miaosha" :key="item.id">
          <div class="miaosha-wrap">
            <div class="miaosha-title">{{item.title}}</div>
            <div class="miaosha-text">{{item.text}}</div>
          </div>
          <img :src="item.imageUrl" alt="" class="img">
        </div>
        <!-- <div class="right">
          <div class="right-top">
            <div class="miaosha-wrap">
              <div class="miaosha-title">{{miaosha[2].title}}</div>
              <div class="miaosha-text">{{miaosha[2].text}}</div>
            </div>
            <img :src="miaosha[2].imageUrl" alt="" class="img right-img">
          </div>
          <div class="right-bottom">
            <div class="miaosha-wrap">
              <div class="miaosha-title">{{miaosha[3].title}}</div>
              <div class="miaosha-text">{{miaosha[3].text}}</div>
            </div>
            <img :src="miaosha[3].imageUrl" alt="" class="img right-img">
          </div>
        </div> -->
      </div>
      <!-- 热门分类部分 -->
      <div class="hot-list">
        <div class="hot-title j-title">热门分类</div>
        <div class="hot-wrap">
          <router-link class="list-wrap"
          v-for="item of list"
          :key="item.id" :to="'/allMall/'+item.id"
          v-on:click.native="goMall(item.id)"
          >
            <div class="list-img"><img :src="item.imageUrl" alt=""></div>
            <div class="title">{{item.name}}</div>
          </router-link>
          <router-link to="/list" class="list-wrap" >
            <div class="list-more"><span>查看更多</span><span>MORE</span></div>
          </router-link>
        </div>
      </div>
      <!-- 随心看看 -->
      <div class="suixinkan j-products">
        <div class="j-title">随心好物</div>
        <div class="j-mintitle">更多款式将与你邂逅</div>
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
</template>

<script>
// import mHeader from 'components/mHeader'
import smallNav from 'components/smallNav'
import Products from 'components/Products'
export default {
  name: 'Home',
  components: {
    smallNav,
    Products
  },
  data () {
    return {
      banner: [],
      products: [],
      list: [],
      miaosha: [],
      value: '',
      pageNum: 0,
      isLoading: false
    }
  },
  created () {
    this.$http.get(`/tab/1?start=${this.pageNum}`)
      .then(resp => {
        this.products = resp.data.data.items.list.filter(item => item.title)
        this.banner = resp.data.data.banners
        this.miaosha = resp.data.data.grids
      })
      .catch(err => {
        console.log(err + '网络请求超时，请重试')
      })
    this.$http.get(`/tabs?sa=`)
      .then(resp => {
        this.list = resp.data.data.list
      })
    // console.log(this)
  },
  mounted () {
    window.addEventListener('scroll', this.productList, true)
  },
  methods: {
    goMall: function (id) {
      this.$router.push({
        path: '/allMall/' + id,
        query: {
          id
        }
      })
    },
    goSerch: function () {
      this.$router.push({
        path: '/serch'
      })
    },
    // 下拉加载更多数据
    loadMoreList () {
      var _this = this
      _this.pageNum += 30
      this.$http.get(`/tab/1/feeds?start=${this.pageNum}`)
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
      var _scorllAppTop = parseInt(document.getElementsByClassName('app-main')[0].scrollTop)
      var _clientAppHeight = document.getElementsByClassName('app-main')[0].clientHeight
      var _scorllAppHeight = document.getElementsByClassName('app-main')[0].scrollHeight
      // console.log(_scorllAppTop, _clientAppHeight, _scorllAppHeight)
      if (_scorllAppTop + _clientAppHeight + 1 === _scorllAppHeight) {
        _this.isLoading = false
        _this.loadMoreList()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import './../scss/header.scss';
@import './../scss/home.scss';
@import './../components/scss/Products.scss';
@import './../scss/mall.scss';
</style>
