<template>
  <div id='ShowFind'>
    <van-button type='info'>发现页面正在建设中，敬请期待。。。</van-button>
  </div>
</template>

<script>
const log = '【ShowFind发现子页面】'
export default {
  data () {
    return {
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
