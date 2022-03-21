<template>
    <div class="sort-button-demo">
        <div class="title">单个排序按钮</div>
        <SortButton :data="singleSortButtonData" @change="handelSort" />
        <div class="mul-title">单个排序按钮（selected：选中，defaultSort: 默认排序方式）</div>
        <SortButton :data="singleSortButtonData" @change="handelSort" selected defaultSort="ascend" />
        <div class="mul-title">多个排序按钮</div>
        <SortButtonGroup :groupData="sortButtonData" @change="handelSortGroup" />
        <div class="mul-title">多个排序按钮（defaultSelected：默认选中某个，defaultSort：默认选中的排序方式）</div>
        <SortButtonGroup
            :groupData="sortButtonData"
            @change="handelSortGroup"
            defaultSelected="update_time"
            defaultSort="ascend"
        />
        <CodeBar :code="code" />
    </div>
</template>

<script>
/**  @description:排序按钮案例  **/
import SortButton from '@/../packages/SortButton'
import SortButtonGroup from '@/../packages/SortButton/Group.vue'
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
                label: '访问量', // 按钮名称
                type: 'view_time', // 排序类型
            },
            // 排序按钮组
            sortButtonData: [
                {
                    icon: 'visits', // svg名称
                    label: '访问量', // 按钮名称
                    type: 'view_time', // 排序类型
                },
                {
                    icon: 'updateTime',
                    label: '更新时间',
                    type: 'update_time',
                },
            ],

            code: ` 
        <div class="title">单个排序按钮</div>
        <SortButton :data="singleSortButtonData" @change="handelSort" />

        <div class="mul-title">单个排序按钮（selected：选中，defaultSort: 默认排序方式）</div>
        <SortButton :data="singleSortButtonData" @change="handelSort" selected defaultSort="ascend" />

        <div class="mul-title">多个排序按钮</div>
        <SortButtonGroup :groupData="sortButtonData" @change="handelSortGroup" />

        <div class="mul-title">多个排序按钮（defaultSelected：默认选中某个，defaultSort：默认选中的排序方式）</div>
        <SortButtonGroup :groupData="sortButtonData" @change="handelSortGroup" defaultSelected="update_time" defaultSort="ascend" />
        
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
                        label: '访问量', // 按钮名称
                        type: 'view_time', // 排序类型
                    },
                    // 排序按钮组
                    sortButtonData: [
                        {
                            icon: 'visits', // svg名称
                            label: '访问量', // 按钮名称
                            type: 'view_time', // 排序类型
                        },
                        {
                            icon: 'updateTime',
                            label: '更新时间',
                            type: 'update_time',
                        },
                    ],
                }
            },
            methods: {
                handelSort({ sortBy, sort }) {
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
        handelSort({ sortBy, sort }) {
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
