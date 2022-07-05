<!--首页类型组件-->
<template>
  <div id="type">
    <ul class="type-list">
      <li v-for="(item,index) in typeList" :key="index">
        <a :href="item.link">
          <img class="type-img" :src="item.url"/>
          <span class="type-name">{{item.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Type.vue",
  data() {
    return {
      // 模拟数据，暂时将超链接都设为#
      typeList: [
        {"name": "女装", "url": require("../assets/img/type-img/clothes.png"), "link": "#"},
        {"name": "短裤", "url": require("../assets/img/type-img/shorts.png"), "link": "#"},
        {"name": "裙子", "url": require("../assets/img/type-img/skirt.png"), "link": "#"},
        {"name": "西装", "url": require("../assets/img/type-img/suit.png"), "link": "#"},
        {"name": "T恤", "url": require("../assets/img/type-img/tshirt.png"), "link": "#"},
        {"name": "眼镜", "url": require("../assets/img/type-img/glasses.png"), "link": "#"},
        {"name": "袜子", "url": require("../assets/img/type-img/socks.png"), "link": "#"},
        {"name": "鞋子", "url": require("../assets/img/type-img/shoes.png"), "link": "#"},
        {"name": "内衣", "url": require("../assets/img/type-img/underwear.png"), "link": "#"},
        {"name": "全部", "url": require("../assets/img/type-img/shopping.png"), "link": "#"}
      ]
    }
  }
}
</script>

<style scoped>
#type {
  height: 145px;
  background-color: #f3f3f3;
  margin-top: 2px;
}

.type-list li {
  float: left;
  padding: 6px 0;
  width: 20%;
  text-align: center;
  list-style-type: none;
}

.type-list li a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}

.type-img {
  display: inline-block;
  width: 40px;
  height: 40px;
}

.type-name {
  font-size: 12px;
  color: #555;
}
</style>