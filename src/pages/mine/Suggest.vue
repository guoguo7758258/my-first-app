<template>
    <div class="wrap">
       <div class="header">
        <mt-header title="反馈意见">
          <div @click="$router.back()" slot="left">
            <mt-button icon="back">返回</mt-button>
          </div>
        </mt-header>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Suggest'
}
</script>

<style>

</style>
