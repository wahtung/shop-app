import Vue from 'vue' //导入vue
import VueRouter from 'vue-router' //导入vue-router
//import Home from '../views/Home.vue'

Vue.use(VueRouter) //安装路由

//路由配置
const routes = [
  {
    name:"Home",//首页
    path:"/",
    component:()=>import('@/views/Home.vue')
  },
  {
    name:"Category",//分类
    path:"/category",
    component:()=>import('@/views/Category.vue')
  },
  {
    name:"Shopcar",//购物车
    path:"/shopcar",
    component:()=>import('@/views/Shopcar.vue')
  },
  {
    name:"My",//我的
    path:"/my",
    component:()=>import('@/views/My.vue')
  },
  {
    name:"Search",//搜索组件
    path:"/search",
    component:()=>import('@/views/Search.vue')
  },
  {
    name:"GoodsDetail",//商品详情组件
    path:"/goodsdetail",
    component:()=>import('@/views/GoodsDetail.vue')
  }

  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

//创建VueRouter实例-路由对象
const router = new VueRouter({
  mode: 'history', //配置路由模式
  base: process.env.BASE_URL,
  //配置路由对象数组
  routes
})

//导出路由对象
export default router
