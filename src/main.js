import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 引入Mint全部组件: 基于Vue.js的移动端组件库
   官网：http://mint-ui.github.io/#!/zh-cn，
   使用：http://mint-ui.github.io/docs/#/
   示例：http://elemefe.github.io/mint-ui/#/
*/
import Mint from 'mint-ui'
//引入Mint样式
import 'mint-ui/lib/style.css'
//一次引入全部图标
import 'vue-awesome/icons'
//导入vue-awesome组件
import Icon from 'vue-awesome/components/Icon'
// 安装Mint
Vue.use(Mint);
// 全局注册Icon
Vue.component('icon', Icon)

Vue.config.productionTip = false

new Vue({
  // 注入路由到vue实例中
  router,
  // 注入store到vue实例中
  store,
  render: h => h(App)
}).$mount('#app')
