<template>
    <div>
        <SignaturePad ref="signaturePad" showTip />
        <button @click="overwrite">重写</button>
        <button @click="download">下载</button>
    </div>
</template>

<script>
import SignaturePad from '../../../../packages/SignaturePad'
export default {
    name: 'DemoSignaturePad',
    components: { SignaturePad },
    methods: {
        overwrite() {
            console.log(this.$refs.signaturePad)
            this.$refs.signaturePad.overwrite()
        },
        async download() {
            const canvas = await this.$refs.signaturePad.generate()
            const a = document.createElement('a')
            a.href = canvas.toDataURL()
            a.download = name
            a.click()
        },
    },
}
</script>
