<template>
    <div>
        <!-- 通过mui组件 引入样式列表  media-list -->
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="list in lists" :key="list.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="list.img_url">
						<div class="mui-media-body">
							{{ list.title }}
							<p class='mui-ellipsis'>
                                <span>发表时间：{{ list.add_time | dateFormat }}</span>
                                <span>点击{{ list.click }}次</span>
                            </p>
						</div>
					</a>
				</li>

			</ul>
    </div>
</template>

<script>
//按需导入
import {Toast} from 'mint-ui'

import timg from '../../images/timg.jpg'
import timg1 from '../../images/timg (1).jpg'

export default {

    data() {
        return {
           lists:[
               {id:1,title:'美国撤销中国驻休斯顿总领馆',img_url:timg,add_time: new Date(),click:2},
               {id:2,title:'湖北高考状元750分满分',img_url:timg1,add_time: new Date(),click:100},
           ] 
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        //获取新闻列表咨询
        getNewsList() {
            this.$http.get('api/getnewslist').then(result => {
                if(result.body.status === 0) {
                    //获取新闻咨询列表成功
                    this.lists = result.body.message
                }else {
                    //获取失败
                    Toast({
                        message:'获取新闻咨询失败',
                        position:'middle',
                        duration:4000,
                    })
                }
            })
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            .mui-ellipsis {
                font-size: 12px;
                color: #226aff;
                // 让span元素同一行左右展示
                display: flex;
                justify-content: space-between;
            }
        }
    }

</style>