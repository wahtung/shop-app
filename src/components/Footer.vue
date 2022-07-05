<!--底部选项卡组件-->
<template>
  <div id="footer">
    <!-- 固定在底部的选项卡 哪个菜单被选中则selected就和菜单id值相同 -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="../assets/img/footer-img/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="category">
        <img slot="icon" src="../assets/img/footer-img/category.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="shopcar">
        <img slot="icon" src="../assets/img/footer-img/shopcar.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="../assets/img/footer-img/my.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
// export default {
//   name: "Footer.vue"
// }export default {

export default {
  data() {
    return {
      selected: 'home'
    }
  },
  watch: {
    // 监听selected属性，实现编程式导航页面跳转
    selected() {
      if (this.selected == 'home') {
        this.$router.push({name: "Home"});
      } else if (this.selected == 'category') {
        this.$router.push({name: "Category"});
      } else if (this.selected == 'shopcar') {
        this.$router.push({name: "Shopcar"});
      } else if (this.selected == 'my') {
        this.$router.push({name: "My"});
      }
    }
  }
}
</script>

<style scoped>

</style>