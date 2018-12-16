<template>
    <div>
      <div class="wrap">
        <div class="header">
          <mt-header title="商品详情">
          <div @click="$router.back()" slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
        </mt-header>
        </div>
        <div class="detail-nav">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">商品</mt-tab-item>
            <mt-tab-item id="2">详情</mt-tab-item>
            <!-- <mt-tab-item id="3">评价</mt-tab-item> -->
          </mt-navbar>
        </div>
        <div class="detail-content">
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <div class="detail">
                <div class="detail-banner">
                  <mt-swipe :auto="4000">
                    <mt-swipe-item
                     v-for="item of img"
                     :key="item.id"
                     >
                     <img :src="item.url" style="height: 375px; width: 375px;">
                     </mt-swipe-item>
                  </mt-swipe>
                </div>
                <div class="detail-tips">
                  <div class="detail-tips-title">
                    <img data-v-7540cfa6="" src="//img6.lukou.com/js/img/baoyou.20f74bf.png">
                    {{data.title}}
                  </div>
                  <div class="detail-price">
                    <span class="new-price"><i>￥</i>{{data.price}}</span>
                    <span class="old-price">￥{{data.originPrice}}</span>
                    <span class="buy-num">{{data.saleNum}}&nbsp;人已买</span>
                  </div>
                </div>
                <div class="detail-service">
                  <div class="detail-youfei">
                    <div>邮费&nbsp;&nbsp;包邮</div>
                  </div>
                  <div class="shouqian">
                    <i class="iconfont icon-gou"></i>&nbsp;正版授权&nbsp;&nbsp;
                    <i class="iconfont icon-gou"></i>&nbsp;权威认证&nbsp;&nbsp;
                    <i class="iconfont icon-gou"></i>&nbsp;30天退还&nbsp;&nbsp;
                    <i class="iconfont icon-gou"></i>&nbsp;批量抽检&nbsp;&nbsp;
                  </div>
                </div>
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <div class="detail-detail">
                <div class="detail-detail-img" v-for="item of detail_img" :key="item.image.id">
                  <img :src="item.image.url">
                </div>
              </div>
            </mt-tab-container-item>
            <!-- <mt-tab-container-item id="3" class="pingjia-wrap">
              <div class="pingjia" v-for="item of pingjia" :key="item.id">
              <div class="pingjia-title">{{item.title}}</div>
              <div class="pingjia-neirong">{{item.article}}</div>
              </div>
            </mt-tab-container-item> -->
          </mt-tab-container>
        </div>
      </div>
      <div class="detail-foot">
        <div class="foot-service">
          <span>
            <label class="shoucang-wrap">
              <input type="checkbox">
              <i class="iconfont shou">&#xe60c;</i>
              <input type="checkbox">
              <span class="shoucang"></span>
            </label>
          </span>
          <span><i class="iconfont">&#xe600;</i><span>客服</span></span>
          <router-link to="/cart" class="addcart-wrap">
          <span class="to-cart"><i class="iconfont">&#xe61c;</i>购物车</span>
          <b class="totalCount" v-if="totalCount != ''">
            {{totalCount}}
          </b>
          </router-link>
        </div>
        <div class="addcart" @click="addToCart(data)">加入购物车</div>
        <div class="buyit">立即购买</div>
      </div>
      <div class="success hidden">您已将宝贝收藏成功啦</div>
    </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  name: 'Detail',
  data () {
    return {
      selected: '1',
      img: [],
      data: [],
      detail_img: []
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['totalCount'])
  },
  created () {
    this.getParams()
    console.log(this.detailId)
    const id = this.detailId
    this.$http.get(`/detail?id=${id}&normal=1&sa=`)
      .then(resp => {
        if (resp.data.code === 200) {
          this.img = resp.data.data.detail.photo
          this.data = resp.data.data.detail
          this.detail_img = resp.data.data.detail.descContentList.filter(item => item.image)
          console.log(this.detail_img)
        } else {
          console.log('找不到资源')
        }
        // console.log(this.data)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    ...mapMutations(['addToCart']),
    getParams: function () {
      this.detailId = this.$route.params.id
    }
  }
}
</script>

<style scoped lang="scss">
@import './../scss/header.scss';
@import './../scss/iconfont.scss';
@import './../scss/detail.scss';
</style>
