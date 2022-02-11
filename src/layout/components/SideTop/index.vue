<template>
    <el-tooltip :disabled="opened" :content="title" placement="right">
        <div class="side-top">
            <div class="icon-box">
                <i v-if="currentIcon.includes('el-icon')" :class="[currentIcon, 'sub-el-icon']"></i>
                <svg-icon :icon-class="currentIcon" v-else />
            </div>
            <div class="label-info" v-show="opened">
                <div class="label-title" slot="title">{{ title }}</div>
            </div>
        </div>
    </el-tooltip>
</template>

<script>
import { find } from 'lodash'
import { Tooltip } from 'element-ui'

export default {
    name: 'SideTop',
    components: { ElTooltip: Tooltip },
    props: {
        value: {
            required: true,
        },
        opened: {
            type: Boolean,
            default: true,
        },
        list: {
            type: Array,
            default() {
                return []
            },
        },
        icon: {
            type: String,
            default: 'el-icon-s-home',
        },
        valueKey: {
            type: String,
            default: 'value',
        },
        labelKey: {
            type: String,
            default: 'name',
        },
    },
    computed: {
        currentItem() {
            return find(this.list, [this.valueKey, this.value])
        },
        currentIcon() {
            return this.currentItem.icon || this.icon
        },
        title() {
            return this.currentItem[this.labelKey]
        },
    },
    methods: {
        handleCommand(command) {
            console.log(command)
            this.$emit('input', command[this.valueKey])
            this.$emit('onChange', command)
        },
    },
}
</script>

<style lang="less" scoped>
.side-top {
    position: relative;
    display: flex;
    padding: 16px 20px 13px;
    align-items: baseline;

    &::before {
        position: absolute;
        right: 20px;
        bottom: 0;
        left: 20px;
        height: 1px;
        background-color: #ebeef5;
        content: '';
    }

    .icon-box {
        font-size: 18px;
        flex: 0 0 auto;
    }

    .label-info {
        flex: 1 1;
        overflow: hidden;
    }

    .label-title {
        overflow: hidden;
        font-size: 16px;
        font-weight: bold;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .el-dropdown-link {
        display: inline-block;
        margin-top: 4px;
        font-size: 12px;
        color: @menuActiveText;
    }
}

.org-item {
    padding-top: 8px;
    padding-bottom: 8px;
}
</style>
