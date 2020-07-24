//导入路由对象
import VueRouter from 'vue-router'

//导入要展示的组件
import home from './components/home.vue'
import information from './components/information.vue'
import shopcar from './components/shopcar.vue'
import personcenter from './components/personcenter.vue'

//导入新闻列表组件
import NewList from './components/news/NewsList.vue'

var vr = new VueRouter({
    //匹配规则
    //在组件中添加子路由
    routes:[
        //为页面默认加载首页
        {path: '/',redirect:'/home'},
        {path: '/home',component:home},
        {path: '/information',component:information},
        {path: '/shopcar',component:shopcar},
        {path: '/personcenter',component:personcenter},

        {path: '/home/newlists',component:NewList}
    ],
    //修改路由对象内部类，以便点击每个图标高亮显示  默认的类叫做 router-link-active
    linkActiveClass: 'mui-active',
})

//将抽离出的路由对象暴露出去，以便调用
export default vr