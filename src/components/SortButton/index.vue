<template>
    <div class="sort-parent">
        <div
            :class="{ active: type === 'group' ? data.type === sortBy : data.type === singleSortBy, 'sort-button': true }"
            @click="handelSort"
        >
            <Icon class="iconfont first" :icon="data.icon" />
            <div class="center-text">{{ data.text }}</div>
            <Icon icon="arrowhead" :class="{ 'active-icon': sort === 'asc', arrowhead: true }" />
        </div>
    </div>
</template>

<script>
/**  @description:排序按钮  **/
import Icon from '@/components/Icon'

export default {
    name: 'SortButton',
    components: {
        Icon,
    },
    props: {
        data: {
            type: Object,
            default: () => ({}),
        },
        //用于判断多个排序按钮高亮哪一个
        sortBy: {
            type: String,
            default: '',
        },

        type: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            sort: '',
            singleSortBy: '',
        }
    },
    methods: {
        handelSort() {
            if (this.type === 'group') {
                if (this.sortBy === this.data.type) {
                    this.sort = this.sort === 'desc' ? 'asc' : 'desc'
                } else {
                    this.sort = 'desc'
                }
            } else {
                this.singleSortBy = this.data.type
                this.sort = this.sort === 'desc' ? 'asc' : 'desc'
            }
            this.$emit('handelSort', {
                sortBy: this.data.type,
                sort: this.sort,
            })
        },
    },
}
</script>
<style lang="less" scoped>
.sort-parent {
    display: inline-block;

    // 引用两个，下一个加间距
    & + & {
        margin-left: 15px;
    }

    .sort-button {
        display: flex;
        padding: 10px 15px;
        // margin-left: 20px;
        color: #909399;
        cursor: pointer;
        background-color: #f4f5f8; /* 浏览器不支持时显示 */
        background-image: linear-gradient(#f4f5f8, #fff);
        border: 1px solid #fff;
        border-radius: 4px;
        box-shadow: 0 4px 10px rgba(81, 81, 81, 0.1);
        user-select: none;
        align-items: center;

        .center-text {
            min-width: 56px;
            margin: 0 8px;
            font-size: 14px;
            color: #000;
        }

        .arrowhead {
            font-size: 12px;
            transition: all 0.3s ease;
        }

        .iconfont.first,
        .center-text {
            transition: all 0.2s ease;
        }

        &.active {
            .center-text,
            .iconfont.first {
                color: #409eff;
            }

            .arrowhead.active-icon {
                transform: rotate(180deg);
            }
        }
    }
}
</style>
