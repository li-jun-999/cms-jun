<template>
    <div>
        <!-- 轮播图区域 -->
        <mt-swipe :auto="4000">
        <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    
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
        }
    }

</style>