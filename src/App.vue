<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->

    <!-- 主体 -->
    <!-- 给路由跳转转场添加过渡动画效果: 路由跳转的时候无论是点击底部选项卡，还是点击商品详情和搜索，页面跳转都比较生硬，
    因此我们可以考虑使用vue提供的转场效果来优化用户体验。需要给router-view包裹transition，App.vue中修改如下：-->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <!-- 底部选项卡 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  data() {
    return {
      // 转场名称
      transitionName: 'slide-forward',
      // map集合存放route先后顺序
      map: new Map()
    }
  },
  // 侦听路由变化
  watch: {
    $route(to, from) {
      if (!this.map[to.path]) {
        // 过渡时间为0.5s
        this.map[to.path] = new Date().getTime() + 0.5;
      }
      if (!this.map[from.path]) {
        this.map[from.path] = new Date().getTime();
      }
      if (this.map[to.path] > this.map[from.path]) {
        this.transitionName = 'slide-forward';
      } else {
        this.transitionName = 'slide-back'
      }
    }
  },
  components: {
    Footer
  }
}
</script>

<style>
/* 清除浏览器对所有元素默认边距 */
* {
  padding: 0;
  margin: 0;
}

/* 路由转场样式 */
.slide-forward-enter {
  transform: translate(100%);
}

.slide-forward-enter-active {
  transition: all .5s ease-in-out;
}

.slide-forward-leave-active {
  transform: translate(-100%);
  transition: all .5s ease-in-out;
}

.slide-back-enter {
  transform: translate(-100%);
}

.slide-back-enter-active {
  transition: all .5s ease-in-out;
}

.slide-back-leave-active {
  transform: translate(100%);
  transition: all .5s ease-in-out;
}
</style>
