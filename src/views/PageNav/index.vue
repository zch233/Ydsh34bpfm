<template>
    <section class="mobileDemo">
        <CodeBar :code="code" />
        <div class="iframeWrapper">
            <iframe frameborder="0" :src="publicURL + 'mobile.html#/page-nav'"></iframe>
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
<PageNav center title="个人中心" />
`,
        }
    },
}
</script>
