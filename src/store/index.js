import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 商品详情
        goodsDetail: {},
        // 购物车
        shopCart: []
    },
    getters:{
        // 是否全选
        isSelectAll(state){
            for(var i=0;i<state.shopCart.length;i++){
                if(!state.shopCart[i].selected){
                    return false;
                }
            }
            return true;
        },
        // 选中商品总价
        totalPrice(state){
            var sum = 0;
            for(var i=0;i<state.shopCart.length;i++){
                if(state.shopCart[i].selected){
                    sum += state.shopCart[i].price * state.shopCart[i].num;
                }
            }
            return sum;
        }
    },
    mutations: {
        // 设置商品详情
        setGoodsDetail(state, goods) {
            this.state.goodsDetail = goods;
        },

        // 添加单个商品至购物车
        addToCart(state, goods) {
            var shopCart = state.shopCart;
            var flag = true;
            // 判断购物车中是否已经存在该商品
            for (var i = 0; i < shopCart.length; i++) {
                if (shopCart[i].id == goods.id) {
                    // 存在则数量加1
                    shopCart[i].num++;
                    flag = false;
                    break;
                }
            }
            // 购物车中不存在该商品-首次添加
            if (flag) {
                // goods新增选中状态默认未选中,数量默认1
                Vue.set(goods, 'num', 1);
                Vue.set(goods, 'selected', false);
                shopCart.push(goods);
            }
        },

        // 改变商品选中状态
        changeSelected(state, index) {
            state.shopCart[index].selected = !state.shopCart[index].selected;
        },
        // 删除商品
        removeFromCart(state, index) {
            state.shopCart.splice(index, 1);
        },
        // 改变购物车商品数量
        changeCartNum(state, playload) {
            var index = playload.index;
            var changeNum = playload.changeNum;
            state.shopCart[index].num += changeNum;
        },
        // 全选或全不选
        changeSelectedAll(state) {
            // 获取是否为全选状态
            var flag = this.getters.isSelectAll;
            // 如果全选,则全不选,没全选则全选
            for (var i = 0; i < state.shopCart.length; i++) {
                state.shopCart[i].selected = !flag;
            }
        }
    },
    actions: {},
    modules: {}
})
