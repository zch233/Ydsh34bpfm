<template>
    <div class="sort-button-group">
        <SortButton
            v-for="item in groupData"
            :key="item.type"
            :sortBy="sortBy"
            :data="item"
            @change="handelSortGroup"
            type="group"
        />
    </div>
</template>

<script>
/**  @description:排序按钮组合  **/
import SortButton from '@/components/SortButton'
export default {
    components: {
        SortButton,
    },
    props: {
        groupData: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            sortBy: '',
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
