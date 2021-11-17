<template>
    <div @click="click">
        <svg-icon :name="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" :size="18" />
    </div>
</template>

<script>
import screenfull from 'screenfull'
import { Message } from 'element-ui'
export default {
    name: 'Screenfull',
    data() {
        return {
            isFullscreen: false,
        }
    },
    mounted() {
        this.init()
    },
    beforeDestroy() {
        this.destroy()
    },
    methods: {
        click() {
            if (!screenfull.isEnabled) {
                Message({
                    message: '您的浏览器不支持全屏',
                    type: 'warning',
                })
                return false
            }
            screenfull.toggle()
        },
        change() {
            this.isFullscreen = screenfull.isFullscreen
        },
        init() {
            if (screenfull.enabled) {
                screenfull.on('change', this.change)
            }
        },
        destroy() {
            if (screenfull.enabled) {
                screenfull.off('change', this.change)
            }
        },
    },
}
</script>

<style scoped>
.screenfull-svg {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: 10px;
    cursor: pointer;
    fill: #5a5e66;
}
</style>
