<template>
    <div class="my-markdown">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Markdown'
}
</script>

<style lang="less">
// https://theme.typora.io/
@import "../../assets/styles/themes/enhanced/notion-light-enhanced.less";
</style>
