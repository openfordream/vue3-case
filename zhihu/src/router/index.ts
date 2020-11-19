import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../views/index.vue'
import DETAIL from '../views/detail.vue'

// 在 Vue-router新版本中，需要使用createRouter来创建路由
export default createRouter({
  // 指定路由的模式,此处使用的是hash模式
  history: createWebHashHistory(),
  // 路由地址
  routes: [
    {
      path:'/',
      name:"首页",
      component: Home
    },{
      path:'/detail/:id',
      name:"详情",
      component:DETAIL
    }
  ]
})