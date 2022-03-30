<template>
    <section class="mobileDemo">
        <CodeBar :code="code" />
        <div class="iframeWrapper">
            <iframe frameborder="0" src="/mobile.html/#/page-footer"></iframe>
        </div>
    </section>
</template>

<script>
import CodeBar from '@/components/CodeBar'

export default {
    name: 'DemoList',
    components: { CodeBar },
    data() {
        return {
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
