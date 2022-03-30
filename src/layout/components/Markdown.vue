<template>
    <div class="my-markdown">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Markdown',
}
</script>

<style lang="less">
// https://theme.typora.io/
@import '../../assets/styles/themes/enhanced/notion-light-enhanced.less';

.my-markdown {
    max-width: 1200px;
    margin: 0 auto;

    img {
        display: block;
        max-width: 1000px;
        margin: 10px 0;
    }
}
</style>
