<template>
    <List :list-api="gitList" @refresh="current_page = 1">
        <template #default="{ item }">
            <p>{{ item }}</p>
        </template>
    </List>
</template>

<script>
import List from '@/../packages/List'
let last_page = 3
export default {
    name: 'DemoList',
    components: { List },
    data() {
        return {
            current_page: 1,
        }
    },
    methods: {
        gitList() {
            return new Promise((s) => {
                setTimeout(() => {
                    s({ data: [...Array(20).keys()], meta: { current_page: this.current_page++, last_page } })
                }, 2000)
            })
        },
    },
}
</script>

<style>
#app {
    height: auto;
}
</style>

<style scoped>
p {
    line-height: 2;
    text-align: center;
}
</style>
