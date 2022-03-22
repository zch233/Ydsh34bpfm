<template>
    <div class="pageFooter" :style="{ height }">
        <div :class="['pageFooter-main']" ref="content"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'PageFooter',
    data() {
        return {
            height: 0,
        }
    },
    mounted() {
        this.height = this.$refs.content.offsetHeight + 'px'
    },
}
</script>

<style scoped lang="less">
.pageFooter {
    &-main {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px 14px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(146, 146, 146, 0.16);
    }
}
</style>
