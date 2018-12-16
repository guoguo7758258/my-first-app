<template>
    <div class="wrap">
      <div class="header">
        <mt-header title="购物车">
          <div @click="$router.back()" slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
          <label slot="right" class="delet-button">
            <input type="checkbox" @click="handelDelate($event)" v-model="isdelet">编辑
          </label>
        </mt-header>
      </div>
      <div class="null-cart" v-if="cart.length===0">
        <div class="null-cart-img"><i class="iconfont icon-gouwuche2"></i></div>
        <span>购物车空空的，不如到处逛逛吧
          <router-link to="/home" class="null-cart-button">去选购</router-link>
        </span>
        <br>
      </div>
      <div class="cart-list" v-else>
        <div class="product-wrap" v-for="item in cart" :key="item.id">
          <div class="danxuan">
            <label class="danxuan-wrap">
              <input type="checkbox"
              :checked="item.isChecked"
              @click="siggleChecked({id:item.id,e:$event})"
              >
              <span class="danxuan-text"></span>
            </label>
          </div>
          <div class="product-img">
            <img :src="item.image" alt="">
          </div>
          <div class="product-min-wrap">
            <div class="product-title">{{item.title}}</div>
            <!-- <div class="product-kuanshi"><span>{{item.couponStatus}}</span></div> -->
            <div class="product-bottom">
              <span class="price">￥<b>{{item.price}}</b></span>
              <!-- <span class="product-tejia">{{item.title}}</span> -->
              <p>
                <span class="num-dec" @click="reduceCartItem(item.id)">-</span>
                <span class="num">{{item.count}}</span>
                <span class="num-add" @click="addCartItem(item.id)">+</span>
              </p>
              <span class="product-delet" v-show="isdelet" @click="deletCartItem(item.id)"><i class="iconfont">&#xe656;</i></span>
            </div>
          </div>
          <div class="total delet" v-show="isdelet">
            <div class="danxuan">
                <label class="danxuan-wrap">
                  <input type="checkbox"
                  @click="toggleCheckAll($event)"
                  :checked="isAllChecked"
                  >
                  <span class="danxuan-text">全选</span>
                </label>
            </div>
            <div class="right">
              <div class="go-buy active" v-if="checkedCount > 0" @click="deletAll">删除({{checkedCount}})</div>
              <div class="go-buy gray" v-else>删除({{checkedCount}})</div>
            </div>
          </div>
        </div>
        <div class="total" v-show="!isdelet">
          <div class="danxuan">
            <label class="danxuan-wrap">
              <input type="checkbox"
              @click="toggleCheckAll($event)"
              :checked="isAllChecked"
              >
              <span class="danxuan-text">全选</span>
            </label>
          </div>
          <div class="right">
            <div class="total-price"><b> 总计:<span>￥{{checkedPrice.toFixed(2)}}</span></b>不计邮费</div>
            <div class="go-buy active" v-if="checkedCount > 0">去结算({{checkedCount}})</div>
            <div class="go-buy gray" v-else>去结算({{checkedCount}})</div>
          </div>
        </div>
      </div>
      <div class="tuijian-products-wrap">
        <div class="tuijian-products-title">为你推荐</div>
        <div class="main-products-wrap">
            <router-link v-for="item of products"
            :key="item.id"
            :to="'/detail/' + item.id"
            class="a-products"
            >
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

<script scoped>
import Products from 'components/Products'
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  name: 'Cart',
  components: {
    Products
  },
  data () {
    return {
      products: [],
      isdelet: false,
      list: []
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['checkedCount', 'totalCount', 'isAllChecked', 'checkedPrice'])
  },
  created () {
    this.$http.get(`/sub_column/8/toplist?perpage=99`)
      .then(resp => {
        this.products = resp.data.data.list
      })
  },
  methods: {
    ...mapMutations([
      'addCartItem',
      'reduceCartItem',
      'siggleChecked',
      'toggleCheckAll',
      'deletCartItem'
    ]),
    // 点击编辑出现删除栏
    handelDelate: function (e) {
      this.isdelet = !this.isdelet
    },
    // 全部删除
    deletAll: function () {
      localStorage.removeItem('my_cart')
      location.reload()
    }
  }
}
</script>

<style scoped lang="scss">
@import './../scss/header.scss';
@import './../scss/iconfont.scss';
@import './../components/scss/Products.scss';
@import './../scss/cart.scss';
@import './../scss/mall.scss';
</style>
