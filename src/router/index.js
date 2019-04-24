import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    }, {
      path: '/city',
      name: '城市列表',
      component: City
    }, {
      path: '/detail/:id',
      name: '城市详情',
      component: resolve => require(['@/pages/detail/Detail.vue'], resolve)
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
