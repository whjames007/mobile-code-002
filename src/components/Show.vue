<template>
  <div id='show'>
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" width="100%"/>
  </van-swipe-item>
</van-swipe>
     <router-view />
    <van-tabbar v-model='active'>
      <van-tabbar-item icon='home-o'>首页</van-tabbar-item>
      <van-tabbar-item icon='search'>发现</van-tabbar-item>
      <van-tabbar-item icon='friends-o'>订单</van-tabbar-item>
      <van-tabbar-item icon='setting-o'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload, Swipe, SwipeItem } from 'vant'
Vue.use(Lazyload)
Vue.use(Swipe).use(SwipeItem)

const log = '【展示页面】'
export default {
  data () {
    return {
      images: [
        '/static/image/banner001.png',
        '/static/image/banner002.png',
        '/static/image/banner003.png',
        '/static/image/banner004.png',
        '/static/image/banner005.png',
        '/static/image/banner006.png'
      ],
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
