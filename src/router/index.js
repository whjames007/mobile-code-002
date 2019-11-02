import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/second/Home'
import Show from '@/components/Show'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/a',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/show',
    name: 'Show',
    component: Show
  }]
})
