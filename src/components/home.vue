<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
        <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
            <mt-swipe-item v-for="lunbotu in lunbotus" :key="lunbotu.url">
                <img :src="lunbotu.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
//按需导入
import {Toast} from 'mint-ui'

export default {
    data() {
        return {
            lunbotus:[]
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

</style>