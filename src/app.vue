<template>
    <!-- 创建组件跟元素 -->
    <div class="appContainer">
        <!-- 头部 header  -->
        <mt-header fixed title="军哥练手项目"></mt-header>

        <!-- 组件内容 -->
		<h1>我是帅哥</h1>
        <!-- 底部 tabbar -->
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>  
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<!-- 修改购物车图标 需要把图标样式也导入  把字体样式也导入-->
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">个人中心</span>
			</a>
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
	}
</style>>


