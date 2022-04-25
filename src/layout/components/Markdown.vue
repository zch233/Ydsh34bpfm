<template>
    <div class="my-markdown">
        <slot></slot>
    </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
    name: 'Markdown',
    mounted() {
        this.init()
    },
    updated() {
        this.init()
    },
    methods: {
        init() {
            this.$nextTick(() => {
                const blocks = document.querySelectorAll('pre code:not(.hljs)')
                Array.prototype.forEach.call(blocks, hljs.highlightBlock)
            })
        },
    },
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
