<template>
    <div>{{ title }} </div>
</template>

<script>
export default {
    computed: {
        title() {
            return this.$route.name
        },
    },
}
</script>

<style></style>
