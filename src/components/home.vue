<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
        <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
            <mt-swipe-item v-for="lunbotu in lunbotus" :key="lunbotu.url">
                <img :src="lunbotu.url" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <!-- 设置图片九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="menu1">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="menu2">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="menu3">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="menu4">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="menu5">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img :src="menu6">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
    </div>
</template>

<script>
//按需导入
import {Toast} from 'mint-ui'
//导入图片
import menu1 from '../images/menu1.png'
import menu2 from '../images/menu2.png'
import menu3 from '../images/menu3.png'
import menu4 from '../images/menu4.png'
import menu5 from '../images/menu5.png'
import menu6 from '../images/menu6.png'

export default {
    data() {
        return {
            lunbotus:[], //存放轮播图的数组
            menu1:menu1,//解决src引入图片不显示的问题
            menu2:menu2,
            menu3:menu4,
            menu4:menu4,
            menu5:menu5,
            menu6:menu6,
        }
    },
    //生命周期内获取数据
    created() {
        this.getlunbo()
    },
    //获取轮播图数据
    methods: {
        getlunbo() {
            this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
                if(result.body.status === 0) {
                    //获取轮播图成功
                    this.lunbotus = result.body.message
                }else {
                    //获取轮播图失败
                    Toast({
                        message:'获取轮播图失败',
                        position:'middle',
                        duration:4000,
                    })
                }
            })
        }
    }
    
}
</script>

<style scoped lang="scss">
    .mint-swipe {
        height: 200px;
        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red;
            }
             &:nth-child(2) {
                background-color:green;
            }
            &:nth-child(2) {
                background-color:hotpink;
            }
            //设置轮播图自适应
            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .mui-grid-view.mui-grid-9 {
        background-color: white;
        img {
            width: 60px;
            height: 60px;
        }
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border-right: 0ch;
        border-bottom: none;
    }
</style>