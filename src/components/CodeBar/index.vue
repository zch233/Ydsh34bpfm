<template>
    <div v-highlight class="codeWrapper">
        <pre>
        <span v-if="title" class="title">{{ title }}</span>
        <code>{{ code }}</code>
      </pre>
    </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
    name: 'CodeBar',
    props: {
        code: String,
        title: String,
    },
    directives: {
        highlight: {
            inserted: function (el) {
                let blocks = el.querySelectorAll('pre code')
                blocks.forEach((block) => {
                    hljs.highlightBlock(block)
                })
            },
        },
    },
}
</script>

<style lang="less" scoped>
.codeWrapper {
    > pre {
        padding-top: 0;
        padding-bottom: 0;
        margin: 0;
        overflow: hidden;
        border-radius: 0;
        opacity: 1;
        box-sizing: border-box;
    }
}

.title {
    display: block;
    padding: 10px 12px;
    margin: 0;
    font-size: 12px;
    color: #ebebeb;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    box-sizing: border-box;
}

.codeExpand {
    display: flex;
    height: 3em;
    text-align: center;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    > svg,
    > b {
        color: #d3dce6;
        transition: all 0.2s;

        &.expand {
            transform: rotate(180deg);
        }
    }

    span {
        display: inline-block;
        width: 0;
        margin-left: 1em;
        overflow: hidden;
        white-space: nowrap;
        opacity: 0;
        transition: all 0.3s;
    }

    &:hover {
        svg {
            fill: #409eff;
        }

        span {
            width: 4em;
            color: #409eff;
            opacity: 1;
        }
    }
}
</style>
