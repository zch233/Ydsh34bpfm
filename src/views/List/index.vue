<template>
    <section class="mobileDemo">
        <CodeBar :code="code" />
        <div class="iframeWrapper">
            <iframe frameborder="0" :src="publicURL + 'mobile.html#/list'"></iframe>
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
<List :list-api="gitList">
    <template #default="{item}">
        <p>{{item}}</p>
    </template>
</List>

export default {
    name: 'DemoList',
    components: {List},
    methods: {
        gitList() {
            return new Promise((s) => {
                setTimeout(() => {
                    s({data: [...Array(20).keys()],meta: {current_page: 1, last_page: 3}})
                }, 2000)
            })
        }
    }
}

`,
        }
    },
}
</script>
