<template>
    <div>{{ title }}</div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {},
    methods: {},
    computed: {
        title() {
            return this.$route.name
        },
    },
}
</script>

<style></style>
