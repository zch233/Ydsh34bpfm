<template>
    <section class="mobileDemo">
        <CodeBar :code="code" />
        <div class="iframeWrapper">
            <iframe frameborder="0" :src="publicURL + '/mobile.html/#/signature-pad'"></iframe>
        </div>
    </section>
</template>

<script>
import CodeBar from '@/components/CodeBar'
import { publicURL } from '@/utils/validate'

export default {
    name: 'DemoSignaturePad',
    components: { CodeBar },
    data() {
        return {
            publicURL,
            code: `
<div>
    <SignaturePad />
    <button @click="overwrite">重写</button>
    <button @click="download">下载</button>
</div>
export default {
    name: 'DemoSignaturePad',
    components: {SignaturePad },
    methods: {
        overwrite() {
            console.log(this.$refs.signaturePad);
            this.$refs.signaturePad.overwrite()
        },
        async download() {
            const canvas = await this.$refs.signaturePad.generate()
            const a = document.createElement("a");
            a.href = canvas.toDataURL();
            a.download = name;
            a.click();
        }
    },
}
`,
        }
    },
}
</script>
