<template>
    <div class="label-selector">
        <Popover
            v-model="visible"
            :trigger="trigger"
            :placement="placement"
            popper-class="label-selector__popover"
            v-bind="$attrs"
            v-on="$listeners"
        >
            <!-- reference -->
            <div class="label-selector__slot" slot="reference" ref="reference">
                <slot></slot>
            </div>
            <!-- dropdown -->
            <transition name="el-zoom-in-top">
                <div class="label-selector__dropdown" v-show="visible" ref="dropdown">
                    <div class="dropdown-title">
                        <span>{{ title }}</span>
                        <i class="el-icon-close" @click="visible = !visible"></i>
                    </div>
                    <Input prefix-icon="el-icon-search" v-model="searchValue" :placeholder="'请输入名称搜索或添加'" />
                    <ul class="dropdown-list">
                        <li
                            :class="['dropdown-list-item', /_$/.test(item) ? 'active' : '']"
                            v-for="(item, index) in optionsList"
                            :key="index"
                            @click="handleAdd(item.replace(/_$/, ''))"
                        >
                            <span>{{ item.replace(/_$/, '') }}</span>
                            <i class="el-icon-check"></i>
                        </li>
                    </ul>
                    <div class="dropdown-selected">
                        <div class="title">已选择：</div>
                        <Tag type="info" closable v-for="(item, index) in selectedList" :key="index" @close="handleClose(item)">{{
                            item
                        }}</Tag>
                    </div>
                    <div class="dropdown-underline"></div>
                    <div class="dropdown-operation">
                        <Button size="small" @click="handleClear">清除</Button>
                        <Button size="small" type="primary" @click="handleConfirm">确认</Button>
                    </div>
                </div>
            </transition>
        </Popover>
    </div>
</template>

<script>
/**
 * @param data      [Array<string>] 已选择标签
 * @param options   [Array<string>] 选项数据源
 * @param title     [String]        标题
 * @param trigger   [String]        触发下拉的行为 hover, click
 * @param placement [String]        菜单弹出位置   (top|bottom|left|right)(-start|-end)
 */
import { Input, Tag, Button, Popover } from 'element-ui'

export default {
    name: 'LabelSelector',
    model: {
        prop: 'data',
        event: 'dataChange',
    },
    props: {
        data: {
            type: Array,
            default() {
                return []
            },
        },
        options: {
            type: Array,
            default() {
                return []
            },
        },
        title: {
            type: String,
            default: '添加标签',
        },
        trigger: {
            type: String,
            default: 'click',
        },
        placement: {
            type: String,
            default: 'bottom-start',
        },
    },
    components: {
        Input,
        Tag,
        Button,
        Popover,
    },
    data: () => ({
        visible: false,
        searchValue: '',
        selectedList: [],
        newOptions: [],
    }),
    watch: {
        data: {
            handler(value) {
                this.selectedList = value
            },
            deep: true,
            immediate: true,
        },
        options: {
            handler(val) {
                this.newOptions = val
            },
            immediate: true,
            deep: true,
        },
    },
    computed: {
        optionsList() {
            let results = this.searchValue ? this.newOptions.filter(this.searchFilter(this.searchValue)) : this.newOptions
            let _results = results.map((item) => {
                if (this.data.includes(item)) {
                    item += '_'
                }
                return item
            })
            return _results.length ? _results : this.searchValue ? [this.searchValue] : []
        },
    },
    methods: {
        searchFilter(value) {
            return (state) => {
                return state.toLowerCase().indexOf(value.toLowerCase()) !== -1
            }
        },
        handleAdd(item) {
            this.searchValue = ''
            if (!this.selectedList.includes(item)) {
                this.selectedList.push(item)
            } else {
                this.selectedList.splice(this.selectedList.indexOf(item), 1)
            }
            if (!this.newOptions.includes(item)) {
                this.newOptions.push(item)
            }
        },
        handleClose(item) {
            this.selectedList.splice(this.selectedList.indexOf(item), 1)
        },
        handleClear() {
            // 直接清空会导致 computed 不触发
            this.selectedList.splice(0, this.selectedList.length)
        },
        handleConfirm() {
            this.$emit('dataChange', this.selectedList)
            this.visible = false
        },
    },
}
</script>

<style lang="less" scoped>
.label-selector {
    .label-selector__slot {
        display: inline-block;
    }
}

.label-selector__dropdown {
    z-index: 3001 !important;
    width: 380px;
    padding: 20px 20px 16px;
    background-color: #fff;
    border: 1px solid rgba(228, 230, 242, 1);
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(148, 161, 196, 0.4);

    .dropdown-title {
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;
        align-items: center;

        i {
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
        }
    }

    /deep/ .el-input .el-input__inner {
        border-color: #dcdfe6 !important;
    }

    .dropdown-list {
        width: 100%;
        height: 170px;
        padding: 8px 0;
        margin-top: 8px;
        margin-bottom: 20px;
        overflow: auto;
        overflow-x: hidden;
        border: 1px solid #dcdfe6;
        border-radius: 2px;

        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(144, 147, 153, 0.3);
            border-radius: 4px;
        }

        &::-webkit-scrollbar-track {
            display: none;
        }

        /deep/ .el-scrollbar__wrap {
            overflow-x: hidden;
        }

        .dropdown-list-item {
            display: flex;
            padding: 8px 16px;
            color: #5a5e66;
            cursor: pointer;
            justify-content: space-between;

            i {
                display: none;
                font-weight: bold;
            }

            &:hover {
                background-color: #f5f7fa;
            }

            &.active {
                color: #409eff;

                i {
                    display: block;
                }
            }
        }
    }

    .dropdown-selected {
        margin-bottom: 20px;

        .el-tag {
            margin: 12px 8px 0 0;
        }
    }

    .dropdown-operation {
        padding-top: 12px;
        text-align: right;
    }

    .dropdown-underline {
        position: absolute;
        bottom: 60px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #dcdfe6;
    }
}
</style>

<style lang="less">
.el-popover.label-selector__popover {
    min-width: auto;
    padding: 0;
    font-size: 15px;
    line-height: 1;
    color: #333;
    background: none;
    border: none;
    border-radius: 0;
    box-shadow: none;
}
</style>
