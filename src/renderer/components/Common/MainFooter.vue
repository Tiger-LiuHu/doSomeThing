<template>
    <div class="footer-class">
        <span><i class="iconfont icon-previous-copy icon-style-left" @click="goBack" v-show="this.$route.path != '/'"></i></span>
        <span>Copyright © 2020 make by LiuHu</span>
        <i class="iconfont icon-shezhi2 icon-style" @click="setting"></i>
    </div>
</template>
<script>
export default {
  name: 'MainFooter',
  methods: {
    setting () {
      this.$store.dispatch('changeTransition', 'none')
      this.$Win.openWin({
        width: 760,
        height: 550,
        windowConfig: {
          router: '/setting',
          name: 'setting',
          maximizable: false,
          resizable: false
        }
      })
    },
    goBack () {
      this.$store.dispatch('changeTransition', 'slipRight')
      this.$router.push('/')
    }
  }
}
</script>
<style>
.footer-class{
  display: flex;
  font-size: 12px;
  height: 20px;
  justify-content: space-between;
  align-items: center;
}
.icon-style{
  font-size: 13px;
  margin-right: 10px;
}
.icon-style-left{
  font-size: 13px;
  margin-left: 10px;
}
</style>