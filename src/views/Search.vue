<!--搜索框组件-->
<template>
  <div id="search">
    <!-- 顶部导航栏 -fixed 固定-->
    <mt-header fixed title="搜索">
      <mt-button slot="left" icon="back" @click="goback">返回</mt-button>
    </mt-header>
    <!-- 搜索框 -->
    <mt-search v-model="value" autofocus placeholder=" 请输入您想找的商品..." @keyup.enter.native="search" >
      <!-- 这里显示搜索结果-后期会引入商品列表 -->
    </mt-search>
  </div>
</template>

<!--<script>-->
<!--export default {-->
<!--  name: "Search.vue"-->
<!--}-->
<!--</script>-->

<script>
//导入MessageBox提示组件
import {MessageBox} from 'mint-ui'

export default {
  name: "Search.vue",
  data() {
    return {
      value: ''
    }
  },
  methods: {
    // 返回
    goback() {
      this.$router.go(-1);
    },
    // 这里调用搜索方法-这里目前先简化为弹窗
    search() {
      MessageBox("提示", "搜索内容为：" + this.value);
    }
  }
}
</script>

<style scoped>
#search {
  position: fixed;
  width: 100%;
}

.mint-search {
  margin-top: 40px;
}

/* /deep/可以改变深层组件样式但不会影响组件本身 */
/deep/ .mint-searchbar-inner {
  border-radius: 18px;
}

/deep/ .mint-searchbar {
  background-color: #eee;
}
</style>