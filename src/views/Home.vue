<template>
<!--  <div class="home">-->
<!--&lt;!&ndash;    <img alt="Vue logo" src="../assets/logo.png">&ndash;&gt;-->
<!--&lt;!&ndash;    <HelloWorld msg="首页 Welcome to Your Vue.js App"/>&ndash;&gt;-->
<!--    <h1>首页</h1>-->
<!--  </div>-->

  <div id="home">
    <!-- 顶部导航栏-fixed 固定 -->
    <mt-header fixed title="首页">
      <mt-button icon="search" slot="right" @click="search"></mt-button>
    </mt-header>

    <!-- 由于顶部导航栏固定，所以轮播图要上边距占据其高度 -->
    <div style="height: 40px;"></div>
    <!-- 轮播图 -->
    <Banner></Banner>
    <!-- 类型列表 -->
    <Type></Type>
    <!-- 商品列表 -->
    <Goods></Goods>

  </div>
</template>

<!--<script>-->
<!--export default {-->
<!--  name: "Home.vue"-->
<!--}-->
<!--</script>-->

<script>
//导入首页轮播图组件
import Banner from './Banner.vue'
//导入首页类型组件
import Type from './Type.vue'
//导入商品列表组件
import Goods from './Goods.vue'

export default {
  name: "Home.vue",
  methods: {
    // 点击搜索按钮，跳转到搜索组件
    search() {
      this.$router.push({name: "Search"});
    }
  },
  // 注册组件
  components: {
    Banner,
    Type,
    Goods
  }
}
</script>

<style scoped>

</style>

<!--<script>-->
<!--// @ is an alias to /src-->
<!--import HelloWorld from '@/components/HelloWorld.vue'-->

<!--export default {-->
<!--  name: 'c',-->
<!--  components: {-->
<!--    HelloWorld-->
<!--  }-->
<!--}-->
<!--</script>-->
