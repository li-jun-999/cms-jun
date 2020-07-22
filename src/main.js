//入口文件

//导入vue文件
import Vue from 'vue'

//导入自己编写的组件
import app from './app.vue'

//按需导入muti组件
import {Header} from 'mint-ui'
//将组件注册到vue身上
Vue.component(Header.name,Header)

//导入mui样式 用法和bootstrap一样
import './lib/mui/css/mui.min.css'
//导入购物车图标样式
import './lib/mui/css/icons-extra.css'

//导入路由对象
import VueRouter from 'vue-router'
//将路由对象注册到Vue身上
Vue.use(VueRouter)
//将暴露出的路由对象导入
import vr from './router.js'

//创建vue实例
var vm = new Vue({
    el:'#app',
    render: c =>c(app),
    router:vr//将路由对象挂载到vm实例上
})