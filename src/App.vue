<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'App',
    computed: {
        get_menu() {
            return [
                {
                    name: 'test1',
                    meta: {
                        // icon: 'el-icon-s-flag',
                        title: 'fiterOptions 横向树形控件',
                        // affix: true,
                    },
                },
                {
                    name: 'test2',
                    meta: {
                        // icon: 'el-icon-s-flag',
                        title: '2',
                        // affix: true,
                    },
                },
            ]
        },
    },
    created() {
        this.$store.dispatch('routes/init_routes', this.get_menu)
    },
}
</script>
