<template>
    <svg class="my-svg" aria-hidden="true" :style="{ fontSize: size + 'px' }" v-on="$listeners">
        <use :xlink:href="iconName" />
    </svg>
</template>
<script>
export default {
    name: 'MySvg',
    props: {
        name: {
            type: String,
            default: '',
        },
        size: {
            type: Number,
            default: 14,
        },
    },
    computed: {
        iconName() {
            return `#${this.name}`
        },
    },
}
</script>
<style lang="less" scoped>
.my-svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
}
</style>
