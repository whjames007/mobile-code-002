<template>
  <div id='login'>
    <div>
      <img src='../assets/logo.png' />
    </div>

    <div>
      <van-cell-group>
        <van-field
          v-model='username'
          required
          clearable
          label='用户名'
          right-icon='question-o'
          placeholder='请输入用户名'
        />

        <van-field v-model='password' type='password' label='密码' placeholder='请输入密码' required />
      </van-cell-group>
    </div>
    <div>
      <van-button type='primary' @click='ccc'>主要按钮</van-button>
    </div>
    <div>
      <van-button type='info'>信息按钮</van-button>
    </div>

    <div>
      <div>
        <img src alt />
      </div>
    </div>

    <van-button type='warning'>警告按钮</van-button>
    <van-button type='danger'>危险按钮</van-button>
    <!-- <router-view /> -->
    <!-- <van-tabbar v-model='active'>
      <van-tabbar-item icon='home-o'>标签</van-tabbar-item>
      <van-tabbar-item icon='search'>标签</van-tabbar-item>
      <van-tabbar-item icon='friends-o'>标签</van-tabbar-item>
      <van-tabbar-item icon='setting-o'>标签</van-tabbar-item>
    </van-tabbar>-->
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
