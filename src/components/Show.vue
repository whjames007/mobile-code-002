<template>
  <div id='show'>
  <div class="show-title-style">美雅小账本</div>
  <keep-alive><router-view /></keep-alive>
  <van-tabbar v-model='active'>
    <van-tabbar-item icon='home-o' to="/Show/ShowHome">首页</van-tabbar-item>
    <van-tabbar-item icon='search' to="/Show/ShowFind">发现</van-tabbar-item>
    <van-tabbar-item icon='friends-o' to="/home">订单</van-tabbar-item>
    <van-tabbar-item icon='setting-o' to="/home">我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
const log = '【展示页面】'
export default {
  data () {
    return {
      active: 0,
      aaa: 'sdf水电费'
    }
  },
  mounted () {
    let name = '【打印mounted函数】'
    console.info(log, name)
  },
  methods: {
    ccc () {
      console.info(this.aaa)
      this.$router.push({
        name: 'HelloWorld'
      })
    }
  }
}
</script>

<style scoped>
.show-title-style {
  padding: 10px 0px 10px 0px;
  color: #FFFFFF;
  background: #1989FA;
}
</style>
