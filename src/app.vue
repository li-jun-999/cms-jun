<template>
    <!-- 创建组件跟元素 -->
    <div class="appContainer">
        <!-- 头部 header  -->
        <mt-header fixed title="军哥练手项目"></mt-header>

        <!-- 组件内容 -->
		<!-- 为页面增加动画 -->
	    <transition>
			<router-view></router-view>
		</transition>
        <!-- 底部 tabbar -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>  
			</router-link>
			<router-link class="mui-tab-item" to="/information">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<!-- 修改购物车图标 需要把图标样式也导入  把字体样式也导入-->
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/personcenter">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">个人中心</span>
			</router-link>
		</nav>

    </div>
  
</template>

<script>
export default {
   
}
</script>

<style scoped lang="scss">
	.appContainer {
		padding-top: 40px;
		overflow-x: hidden;
	}
	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}
	.v-leave-to {
		opacity: 0;
		transform: translateX(-100%);
		// 解决动画闪烁的问题
		position: absolute;
	}
	.v-enter-active ,.v-leave-active{
		transition: all 0.5s ease;
	}
</style>>


