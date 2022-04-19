<template>
    <div class="signaturePad">
        <div class="signaturePad-canvasBox" ref="canvasWrapper">
            <p class="signaturePad-canvasBox-title" v-if="showTip">{{ tipText || '请在框内手写您的姓名' }}</p>
            <canvas @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" ref="myCanvas"></canvas>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignaturePad',
    props: {
        showTip: Boolean,
        tipText: String,
    },
    data() {
        return {
            points: [],
            canvasTxt: null,
            startX: 0,
            startY: 0,
            moveY: 0,
            moveX: 0,
            endY: 0,
            endX: 0,
            w: null,
            h: null,
            isDown: false,
            color: '#000',
            lineWidth: 3,
            isDraw: false, //签名标记
        }
    },
    mounted() {
        let canvas = this.$refs.myCanvas
        canvas.height = this.$refs.canvasWrapper.offsetHeight - 10
        canvas.width = this.$refs.canvasWrapper.offsetWidth - 10
        this.canvasTxt = canvas.getContext('2d')
        this.canvasTxt.strokeStyle = this.color
        this.canvasTxt.lineWidth = this.lineWidth
    },
    methods: {
        //移动设备事件
        touchStart(ev) {
            ev.preventDefault()
            if (ev.touches.length === 1) {
                this.isDraw = true //签名标记
                let x = ev.targetTouches[0].clientX - ev.target.offsetLeft
                let y = ev.targetTouches[0].clientY - ev.target.offsetTop // 获取触摸点在画板（canvas）的坐标
                this.startX = x
                this.startY = y
                this.canvasTxt.beginPath()
                this.points.push(...[x, y])
            }
        },
        //移动设备事件
        touchMove(ev) {
            ev.preventDefault()
            if (ev.touches.length === 1) {
                let x = ev.targetTouches[0].clientX - ev.target.offsetLeft
                let y = ev.targetTouches[0].clientY - ev.target.offsetTop
                this.moveY = y
                this.moveX = x
                this.canvasTxt.moveTo(this.startX, this.startY) // 把路径移动到画布中的指定点，不创建线条(起始点)
                this.canvasTxt.lineTo(x, y) // 添加一个新点，然后创建从该点到画布中最后指定点的线条，不创建线条
                this.canvasTxt.stroke() // 绘制
                this.startY = y
                this.startX = x
                this.points.push(...[x, y]) // 重置点坐标为上一个坐标
            }
        },
        //移动设备事件
        touchEnd(ev) {
            ev.preventDefault()
            if (ev.touches.length === 1) {
                let x = ev.targetTouches[0].clientX - ev.target.offsetLeft
                let y = ev.targetTouches[0].clientY - ev.target.offsetTop
                this.canvasTxt.closePath()
                this.points.push(...[x, y])
                this.points.push({ x: -1, y: -1 })
            }
        },
        //重写
        overwrite() {
            this.canvasTxt.clearRect(0, 0, this.$refs.myCanvas.width, this.$refs.myCanvas.height)
            this.points = []
            this.isDraw = false //签名标记
        },
        //确认签名
        surewrite() {
            if (!this.isDraw) return alert({ message: '签名不能为空' })
            this.$emit('confirm', this.$refs.myCanvas)
        },
        async generate() {
            return this.$refs.myCanvas
        },
    },
}
</script>

<style lang="less" scoped>
.signaturePad {
    position: relative;
    overflow: hidden;
    text-align: center;
    background-color: #fff;

    &-canvasBox {
        display: flex;
        height: 400px;
        background-color: #f7f8fa;
        border: 1px solid #efefef;
        border-radius: 6px;
        align-items: center;
        justify-content: center;

        &-title {
            position: absolute;
            top: 1em;
            left: 50%;
            font-size: 14px;
            color: #999;
            transform: translateX(-50%);
        }
    }
}
</style>
