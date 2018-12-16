<template>
    <div>
      <div class="serch">
        <mt-search
        cancel-text="取消"
        placeholder="搜索商品，发现更多优选">
          <div @click="$router.back()" slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
        </mt-search>
      </div>
      <div class="hot-serch">
        <div class="serch-title">热门搜索</div>
        <div class="serch-wrap">
          <div class="serch-tips">毛衣 女</div>
        </div>
      </div>
      <div class="serch-history">
        <div class="serch-title">搜索历史</div>
        <div class="serch-wrap">
        <div class="serch-tips">女装</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Serch'
}
</script>

<style>

</style>
