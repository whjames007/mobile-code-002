<template>
  <div id='aaa'>
    <van-button type='info'>信息按钮</van-button>
  </div>
</template>

<script>
const log = '【aaa页面】'
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
