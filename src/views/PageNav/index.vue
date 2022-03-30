<template>
    <section class="mobileDemo">
        <CodeBar :code="code" />
        <div class="iframeWrapper">
            <iframe frameborder="0" src="/mobile.html/#/page-nav"></iframe>
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
<PageNav center title="个人中心" />
`,
        }
    },
}
</script>
