<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    this.utilCommon.version()
  }
}
</script>

<style>
/*
    background: #07C160;*/
  #app {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }
</style>
