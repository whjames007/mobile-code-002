import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Show from '@/components/Show'
import ShowHome from '@/components/ShowHome'
import ShowFind from '@/components/ShowFind'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Login', component: Login},
    {path: '/HelloWorld', name: 'HelloWorld', component: HelloWorld},
    {path: '/Show',
      name: 'Show',
      component: Show,
      redirect: '/Show/ShowHome',
      children: [
        {path: 'ShowHome', name: 'ShowHome', component: ShowHome},
        {path: 'ShowFind', name: 'ShowFind', component: ShowFind}]
    }
  ]
})
