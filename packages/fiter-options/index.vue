<template>
    <div
        class="filter-options"
        ref="filterBox"
        :style="{ 'background-color': bgColors[cLevel % bgColors.length], top: top + 'px' }"
    >
        <i class="el-icon-loading" v-if="loading"></i>

        <div class="text" @click="hanldeSelect(tree[0])" :class="{ select: tree[0].badgeNum > 0 }" v-if="tree.length > 0">
            {{ tree[0].name }}
        </div>
        <div class="options-item-box">
            <div
                class="options-item"
                v-for="(item, index) in tree"
                :key="item.code"
                :style="{ height: item.unfold ? unfoldItemHeight + 'px' : 'auto' }"
            >
                <template v-if="index > 0">
                    <template v-if="hasChild(item)">
                        <div
                            class="text has-child"
                            :class="{ unfold: item.unfold }"
                            :style="{ 'background-color': item.unfold ? bgColors[(cLevel + 1) % bgColors.length] : '' }"
                            @click.stop="handleUnfold($event, item, index)"
                        >
                            {{ item.name }}
                            <span class="badge" v-if="item.badgeNum > 0">{{ item.badgeNum }}</span>
                            <i :class="item.unfold ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
                        </div>
                    </template>
                    <div class="text" v-else @click="hanldeSelect(item)" :class="{ select: item.badgeNum > 0 }">
                        {{ item.name }}
                    </div>
                    <filter-options
                        :tree="item.items"
                        v-if="item.unfold"
                        :level="cLevel"
                        :from-name="fromName"
                        :loading="item.loading"
                        :load-data="loadData"
                        :top="unfoldItemTop"
                        :top-code="cTopCode(item)"
                        :default-value="defaultValue"
                        @setItemHeight="setItemHeight"
                        @changeBadge="changeBadge"
                        @selectItem="selectItem"
                    />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { has, groupBy, get, uniq } from 'lodash'
import { mapGetters } from 'vuex'
export default {
    name: 'filter-options',
    props: {
        tree: {
            type: Array,
            default: () => {
                return []
            },
        },

        level: {
            type: Number,
            default: -1,
        },
        unfoldColor: {
            type: String,
            default: '#fff',
        },
        fromName: {
            type: String,
            default: '',
        },
        loading: {
            type: Boolean,
            default: false,
        },
        loadData: {
            type: Function,
            default: () => {
                return new Promise((resolve) => {
                    resolve('')
                })
            },
        },
        top: {
            type: Number,
            default: 49,
        },
        topCode: {
            type: String,
            default: '',
        },
        isRadio: {
            type: Boolean,
            default: false,
        },
        defaultValue: {
            type: Array,
            default() {
                return []
            },
        },
    },
    data() {
        return {
            unfoldItemHeight: 34,
            unfoldItemTop: 49,
            bgColors: ['#fff', '#f9f9f9', '#fcfcfc'],
        }
    },
    mounted() {
        this.$nextTick(() => {
            console.log('mounted', this.$refs.filterBox.offsetHeight + 34)
            this.$emit('setItemHeight', this.$refs.filterBox.offsetHeight + 34)
        })
    },
    computed: {
        cLevel() {
            return this.level + 1
        },
        ...mapGetters({ vxCheckList: 'checkList' }),
        defaultCheckObj() {
            return groupBy(this.defaultValue, (o) => {
                return o.from
            })
        },
    },
    watch: {
        unfoldItemHeight(val) {
            this.$nextTick(() => {
                this.$emit('setItemHeight', this.$refs.filterBox.offsetHeight + 34)
            })
        },
        loading(val) {
            if (!val) {
                this.$nextTick(() => {
                    this.$emit('setItemHeight', this.$refs.filterBox.offsetHeight + 34)
                })
            }
        },
    },

    methods: {
        setItemHeight(val) {
            console.log(val, this.cLevel)
            this.unfoldItemHeight = val
        },
        handleUnfold(e, item, index) {
            console.log(e.currentTarget)

            this.tree.forEach(async (val, i) => {
                if (i === index) {
                    this.$set(val, 'unfold', !val.unfold)

                    if (val.is_need_fetch) {
                        if (!val.loading && val.items.length <= 0) {
                            this.$set(val, 'loading', true)
                            // this.$emit('loadData',item)
                            this.$set(item, 'top_code', this.topCode)
                            try {
                                let res = await this.loadData(item)
                                console.log(res)
                                let path_code_bx = [].concat(val.pathCode, [val.code])
                                // let path_obj_arr_bx = [].concat(val.pathObjArr, [
                                //     {
                                //         key: val.key,
                                //         from: val.from,
                                //         code: val.code,
                                //     },
                                // ])
                                val.items.push({
                                    code: val.code,
                                    key: val.key,
                                    name: '不限',
                                    badgeNum: this.isDefultSelect(val.from, val.code, val.level + 1),
                                    alias: val.name,
                                    path: val.path,
                                    from: val.from,
                                    pathCode: path_code_bx,
                                    level: val.level + 1,
                                    pathObjArr: val.pathObjArr,
                                })
                                res.forEach((resItem) => {
                                    if (resItem.is_need_fetch) {
                                        resItem.loading = false
                                    }
                                    let path_code_item = [].concat(val.pathCode, [resItem.code])
                                    let path_obj_arr_item = [].concat(val.pathObjArr, [
                                        {
                                            key: resItem.key,
                                            from: val.from,
                                            code: resItem.code,
                                        },
                                    ])
                                    val.items.push({
                                        ...resItem,
                                        badgeNum: this.isDefultSelect(val.from, resItem.code, val.level + 1),
                                        path: val.path + resItem.name,
                                        from: val.from,
                                        pathCode: path_code_item,
                                        level: val.level + 1,
                                        pathObjArr: path_obj_arr_item,
                                    })
                                })
                                console.log(1111)
                                this.$set(val, 'loading', false)
                                this.$nextTick(() => {
                                    console.log('请求后', this.$refs.filterBox.offsetHeight + 34)
                                    this.unfoldItemHeight = this.$refs.filterBox.offsetHeight + 34
                                })
                            } catch (error) {
                                console.log(error)
                            }
                        }
                    }
                } else {
                    this.$set(val, 'unfold', false)
                }
            })
            this.$nextTick(() => {
                this.unfoldItemTop = e.currentTarget.offsetHeight + e.currentTarget.offsetTop - 1
                this.unfoldItemHeight = this.$refs.filterBox.offsetHeight + 34
            })
            console.log('请求前', this.$refs.filterBox, this.$refs.filterBox.offsetHeight + 34)
        },
        hanldeSelect(item) {
            // item.isSelect = 1
            if (item.name === '不限') {
                this.tree.forEach((i) => {
                    if (i.name === '不限') {
                        i.badgeNum = i.badgeNum > 0 ? 0 : 1
                    } else {
                        i.badgeNum = 0
                        this.loopSelect(i.items)
                    }
                })
            } else {
                if (this.isRadio) {
                    this.tree.forEach((val) => {
                        val.badgeNum = 0
                    })
                }
                item.badgeNum = item.badgeNum > 0 ? 0 : 1
                // this.tree[0].badgeNum = 0
            }
            this.$set(item, 'time', new Date())
            // this.$set(item, 'from', this.fromName)
            this.$emit('changeBadge')
            this.$emit('selectItem', item, this.tree)
        },
        loopSelect(items) {
            items.forEach((item) => {
                item.badgeNum = 0
                if (item.items && item.items.length > 0) {
                    this.loopSelect(item.items)
                }
            })
        },
        changeBadge() {
            this.tree.forEach((item) => {
                if (item.badgeNum) {
                    item.badgeNum = item.is_need_fetch && item.items.length <= 0 ? item.badgeNum : 0
                }
                item.items &&
                    item.items.forEach((i) => {
                        if (i.badgeNum > 0) {
                            item.badgeNum += 1
                        }
                    })
            })
            this.$emit('changeBadge')
        },
        selectItem(item, tree) {
            this.$emit('selectItem', item, tree)
        },
        hasChild(item) {
            return (item.items && item.items.length > 0) || has(item, 'loading')
        },
        cTopCode(item) {
            return this.cLevel === 0 ? item.code : this.topCode
        },
        isDefultSelect(key, code, level) {
            let defaultCheck = get(this.defaultCheckObj, key, [])
            let df = []
            defaultCheck.forEach((o) => {
                let oCode = o.pathCode
                if (oCode.length >= level) {
                    if (oCode[level - 1] === code) {
                        df.push(oCode[level])
                    }
                }
            })
            return uniq(df).length
        },
    },
}
</script>

<style lang="less" scoped>
.filter-options {
    display: inline-flex;
    padding: 15px 20px;
    // flex-wrap: wrap;
    align-items: stretch;

    /deep/ .filter-options {
        position: absolute;
        top: 49px;
        right: 20px;
        left: 78px;
        border: 1px solid @border-color-base;
    }

    & > .text {
        margin-right: 10px;
        white-space: nowrap;
        flex: 0 0 auto;
    }

    .options-item-box {
        display: inline-flex;
        flex-wrap: wrap;

        .options-item:first-child {
            margin-right: 0;
        }
    }

    .options-item {
        // position: relative;
        margin-right: 10px;
        // transition: height 0.3s;
    }

    .text {
        position: relative;
        z-index: 10;
        padding: 10px;
        font-size: 14px;
        line-height: 14px;
        color: @text-color-secondary;
        cursor: pointer;

        .icon {
            margin-left: 4px;
            font-size: 12px;
            color: #ccc;
        }

        .badge {
            display: inline-block;
            // position: absolute;
            // top: 6px;
            // right: 20px;
            width: 14px;
            height: 14px;
            line-height: 14px;
            color: #fff;
            text-align: center;
            background-color: @primary-color;
            border-radius: 14px;
        }

        &.unfold {
            font-weight: bold;
            color: @text-color;
            border: 1px solid @border-color-base;
            border-bottom: none;
            border-radius: 4px 4px 0 0;

            .badge,
            .icon {
                font-weight: normal;
            }
        }

        &:hover {
            font-weight: bold;
            color: @text-color;
        }

        &.select {
            color: @primary-color;
        }
    }

    .loading-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 18px;
        color: @primary-color;
        transform: translate(-50%, -50%);
    }
}
</style>
