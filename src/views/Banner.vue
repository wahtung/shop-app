<!--首页轮播图组件-->
<template>
  <div id="banner">
<!--    轮播时间为4秒轮播一张图片-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in pics" :key="index">
        <img :src="item.url">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      pics: [
        {url: require('../assets/img/banner-img/pic1.jpg')},
        {url: require('../assets/img/banner-img/pic2.jpg')},
        {url: require('../assets/img/banner-img/pic3.jpg')}
      ]
    }
  }
}
</script>

<style scoped>
.mint-swipe {
  height: 180px;
}

.mint-swipe img {
  width: 100%;
  height: 180px;
}
</style>