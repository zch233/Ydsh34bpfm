<template>
    <div class="sort-button-group">
        <SortButton
            v-for="item in groupData"
            :key="item.type"
            :sortBy="sortBy"
            :data="item"
            @change="handelSortGroup"
            type="group"
            :defaultSort="item.type === defaultSelected ? defaultSort : DESCEND"
            :selected="item.type === defaultSelected"
        />
    </div>
</template>

<script>
/**  @description:排序按钮组合  **/
import SortButton, { DESCEND } from './index'
// const DESCEND = 'descend'
export default {
    components: {
        SortButton,
    },
    watch: {
        defaultSelected: {
            handler(val) {
                this.sortBy = val
            },
            immediate: true,
        },
    },
    props: {
        groupData: {
            type: Array,
            default: () => [],
        },
        // 默认选中哪一个
        defaultSelected: {
            type: String,
            default: '',
        },
        // 默认排序值 asc 升序，desc：降序
        defaultSort: {
            type: String,
            default: DESCEND,
        },
    },
    data() {
        return {
            sortBy: '',
            DESCEND,
        }
    },
    methods: {
        handelSortGroup({ sortBy, sort }) {
            this.sortBy = sortBy
            this.$emit('change', {
                sortBy,
                sort,
            })
        },
    },
}
</script>
<style lang="less" scoped></style>
