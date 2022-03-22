<template>
    <div
        class="page-navWrapper"
        :style="{ height }"
        :class="[fixed && 'fixed', center && 'center', transparent && 'transparent', border && 'border']"
    >
        <div ref="content" class="page-nav" @click="handleNavClick">
            <Icon icon="left" />
            <span>{{ title || ($route.meta && $route.meta.title) || '返回' }}</span>
        </div>
    </div>
</template>

<script>
import Icon from '../Icon'

export default {
    name: 'PageNav',
    components: { Icon },
    props: {
        backRoute: [String, Object],
        title: {
            type: String,
            default: '',
        },
        border: {
            type: Boolean,
            default: true,
        },
        fixed: {
            type: Boolean,
            default: true,
        },
        center: Boolean,
        transparent: Boolean,
    },
    data() {
        return {
            height: 0,
        }
    },
    mounted() {
        this.height = this.$refs.content.offsetHeight + 'px'
    },
    methods: {
        handleNavClick() {
            if (this.$listeners.click) {
                this.$emit('click')
            } else {
                this.backRoute ? this.$router.push(this.backRoute) : this.$router.back()
            }
        },
    },
}
</script>

<style scoped lang="less">
.page-navWrapper {
    &.center .page-nav {
        text-align: center;

        > svg {
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
        }
    }

    &.fixed .page-nav {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
        width: 100%;
    }

    &.transparent .page-nav {
        color: #fff;
        background-color: transparent;

        svg {
            color: inherit;
        }
    }

    &.transparent.border .page-nav {
        border-bottom: 0.3px solid rgba(0, 0, 0, 0.102);
    }

    &.border .page-nav {
        border-bottom: 0.3px solid #f2f4f5;
    }
}

.page-nav {
    padding: 14px 20px;
    font-size: 17px;
    color: #333;
    background-color: #fff;

    > span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        flex: 1;
    }

    svg {
        margin-right: 10px;
        font-size: 14px;
        fill: #666;
    }
}
</style>
