<template>
  <div></div>
</template>
<script>
export default {
  name: 'mHeader',
  mounted () {
    console.log(this.$router)
    console.log(this.$router.app._route.name)
  }
}
</script>
<style>

</style>
