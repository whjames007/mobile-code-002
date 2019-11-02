<template>
  <div id='login'>
    <div class="login-title-style">美雅小账本</div>
    <div class="login-image-style"><img src='../assets/logo.png' /></div>
    <div class="login-title-style">记录家庭小生活中收支的点点滴滴...</div>
    <div class="login-image-style">
      <van-cell-group>
        <van-field v-model='condition.username' required clearable label='用户名' placeholder='请输入用户名'/>
        <van-field v-model='condition.password' required type='password' label='密码' placeholder='请输入密码'/>
      </van-cell-group>
    </div>
    <div class="login-image-style"><van-button type='info' @click='methodLogin'>登录系统</van-button></div>
    <div class="login-image-style"><van-button type='info' @click='methodRegister'>新用户注册</van-button></div>
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
      condition: {
        username: null,
        password: null
      }
    }
  },
  mounted () {
    let name = '【打印mounted函数】'
    console.info(log, name)
  },
  methods: {
    methodLogin () {
      let name = `【登录方法】`
      console.info(log, name)
      this.$router.push({
        name: 'HelloWorld'
      })
    },
    methodRegister () {
      let name = `【注册方法】`
      console.info(log, name)
    }
  }
}
</script>

<style scoped>
.login-title-style {
  margin: 60px 0px 0px 0px;
  font-size: 24px;
  color: #1989FA;
}
.login-image-style {
  margin: 30px 0px 0px 0px;
}
/*background: #1989FA;*/
#login {
  height: 100vh;
  width: 100vw;
  text-align: center;
}
</style>
