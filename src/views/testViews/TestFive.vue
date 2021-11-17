<template>
    <div
        >{{ title }}
        <br />
        <a @click="goDetail">点击前往详情</a>
    </div>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$route.name
        },
    },
    methods: {
        goDetail() {
            this.$router.push({
                name: 'test5.detail',
                params: {
                    id: 1,
                },
            })
        },
    },
}
</script>

<style></style>
