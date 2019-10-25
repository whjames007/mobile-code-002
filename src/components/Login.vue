<template>
  <div id="login">

    <img src="../assets/logo.png">
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary" @click="ccc">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <!-- <router-view /> -->
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>

<script>
const log = '【登录页面】'
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
  #login {
    height: 100vh;
    width: 100vw;
    background: #1989FA;
    text-align: center;
  }
</style>
