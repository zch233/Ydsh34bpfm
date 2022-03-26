<template>
    <section class="demo">
        <CodeBar :code="code" />
        <div class="iframeWrapper">
            <iframe frameborder="0" :src="publicURL + 'mobile.html#/page-footer'"></iframe>
        </div>
    </section>
</template>

<script>
import CodeBar from '@/components/CodeBar'
import { publicURL } from '@/utils/validate';

export default {
    name: 'DemoList',
    components: { CodeBar },
    data() {
        return {
            publicURL,
            code: `
<PageFooter>
    <Button block round>上一步</Button>
    <Button block type="primary" round>下一步</Button>
</PageFooter>
`,
        }
    },
}
</script>

<style lang="less" scoped></style>
