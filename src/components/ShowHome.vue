<template>
  <div id='ShowHome'>
  <van-swipe :autoplay="1000">
    <van-swipe-item v-for="(image, index) in images" :key="index"><van-image :src="image" fit="contain"/></van-swipe-item>
  </van-swipe>
  <van-button type='info' @click='ccc'>ShowHome</van-button>
  <van-field label='用户sdf名' placeholder='请输入用户名'/>
  </div>
</template>

<script>
const log = '【首页ShowHome子页面】'
export default {
  data () {
    return {
      images: [
        'static/img/banner001.png',
        'static/img/banner002.png',
        'static/img/banner003.png',
        'static/img/banner004.png',
        'static/img/banner005.png',
        'static/img/banner006.png'
      ],
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
