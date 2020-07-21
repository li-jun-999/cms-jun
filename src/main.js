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

//创建vue实例
var vm = new Vue({
    el:'#app',
    render: c =>c(app)
})