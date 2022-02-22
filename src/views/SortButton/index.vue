<template>
    <div class="sort-button-demo">
        <div class="title">单个排序按钮</div>
        <SortButton :data="singleSortButtonData" @handelSort="singleHandelSort" />
        <div class="mul-title">多个排序按钮</div>
        <SortButtonGroup :groupData="sortButtonData" @handelSortGroup="handelSortGroup" />
        <CodeBar :code="code" />
    </div>
</template>

<script>
/**  @description:排序按钮案例  **/
import SortButton from '@/components/SortButton'
import SortButtonGroup from '@/components/SortButton/Group.vue'
import CodeBar from '@/components/CodeBar'

export default {
    components: {
        SortButton,
        SortButtonGroup,
        CodeBar,
    },
    data() {
        return {
            // 单个排序按钮
            singleSortButtonData: {
                icon: 'visits', // svg名称
                text: '访问量', // 按钮名称
                type: 'view_time', // 排序类型
            },
            // 排序按钮组
            sortButtonData: [
                {
                    icon: 'visits', // svg名称
                    text: '访问量', // 按钮名称
                    type: 'view_time', // 排序类型
                },
                {
                    icon: 'updateTime',
                    text: '更新时间',
                    type: 'update_time',
                },
            ],

            code: ` 
        <!-- 单个排序按钮 -->
        <SortButton :cont="singleSortButtonData" @handelSort="singleHandelSort" />
        <!-- 多个排序按钮 -->
        <SortButtonGroup :groupData="sortButtonData" @handelSortGroup="handelSortGroup" />
        
        export default {
            components: {
                SortButton,
                SortButtonGroup,
            },
            data() {
                return {
                    // 单个排序按钮
                    singleSortButtonData: {
                        icon: 'visits', // svg名称
                        text: '访问量', // 按钮名称
                        type: 'view_time', // 排序类型
                    },
                    // 排序按钮组
                    sortButtonData: [
                        {
                            icon: 'visits', // svg名称
                            text: '访问量', // 按钮名称
                            type: 'view_time', // 排序类型
                        },
                        {
                            icon: 'updateTime',
                            text: '更新时间',
                            type: 'update_time',
                        },
                    ],
                }
            },
            methods: {
                singleHandelSort({ sortBy, sort }) {
                    console.log(sortBy, sort)
                },
                handelSortGroup({ sortBy, sort }) {
                    console.log(sortBy, sort)
                },
            },
        }
        `,
        }
    },
    methods: {
        singleHandelSort({ sortBy, sort }) {
            console.log(sortBy, sort)
        },
        handelSortGroup({ sortBy, sort }) {
            console.log(sortBy, sort)
        },
    },
}
</script>
<style lang="less" scoped>
.sort-button-demo {
    padding: 20px;

    .title {
        margin-bottom: 10px;
    }

    .mul-title {
        margin: 30px 0 10px;
    }
}
</style>
