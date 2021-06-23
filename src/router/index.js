/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/view/home'
import mine from '@/view/mine'
// import unknown from '@/view/unknown'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      redirect: '/home',
      name: '主页'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    // {
    //   path: '/unknown',
    //   name: 'unknown',
    //   component: unknown
    // },
    {
      path: '/games',
      name: 'mine',
      component: mine
    }
  ]
})
