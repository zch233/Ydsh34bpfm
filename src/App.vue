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
                    group_title: '主页',
                    child: [
                        {
                            name: 'test1',
                            meta: {
                                icon: 'el-icon-s-flag',
                                title: '控制面板',
                                // affix: true,
                            },
                        },
                        {
                            name: 'test2',
                            meta: {
                                icon: 'el-icon-s-help',
                                title: '集成引导',
                            },
                        },
                    ],
                },
                {
                    group_title: '数据接入',
                    child: [
                        {
                            name: 'test3',
                            meta: {
                                icon: 'el-icon-s-tools',
                                title: '数据源',
                            },
                        },
                        {
                            meta: {
                                icon: 'el-icon-menu',
                                title: '数据同步',
                            },
                            child: [
                                {
                                    name: 'test4',
                                    meta: {
                                        title: '任务',
                                    },
                                },
                                {
                                    name: 'test5',
                                    meta: {
                                        title: '执行历史',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ]
            // return [
            //     {
            //         child: [
            //             {
            //                 name: 'test1',
            //                 icon: 'el-icon-s-flag',
            //                 title: '控制面板',
            //             },
            //             {
            //                 name: 'test2',
            //                 icon: 'el-icon-s-help',
            //                 title: '集成引导',
            //             },
            //         ],
            //     },
            // ]
        },
    },
    created() {
        this.$store.dispatch('routes/init_routes', this.get_menu)
    },
}
</script>
