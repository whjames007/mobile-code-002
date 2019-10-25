<template>
  <div id='home'>
    <van-button type='info'>信息home按钮</van-button>
  </div>
</template>

<script>
const log = '【home页面】'
export default {
  data () {
    return {
      home: 'sdf水电费'
    }
  },
  mounted () {
    let name = '【打印mounted函数】'
    console.info(log, name)
  },
  methods: {
    ccc () {
      console.info(this.home)
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
