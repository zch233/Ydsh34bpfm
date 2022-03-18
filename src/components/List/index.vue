<template>
    <GupoPullRefresh class="list" :class="[refreshing && 'refreshing']" v-model="refreshing" @refresh="onRefresh">
        <GupoEmpty v-if="empty" :description="emptyDescription || '暂无数据'" />
        <GupoList
            v-else
            v-model="loading"
            :finished="finished"
            :finished-text="meta.current_page === 1 && finished ? '' : '没有更多了'"
            @load="onLoad"
        >
            <div class="list-header">
                <slot name="header"></slot>
            </div>
            <div class="list-main">
                <div class="lis-main-item" v-for="(item, index) in list" :key="index">
                    <slot :item="item" :index="index" :list="list"></slot>
                </div>
            </div>
        </GupoList>
    </GupoPullRefresh>
</template>

<script>
import { Empty, List, PullRefresh } from 'vant'

const defaultMeta = {
    current_page: 1,
    last_page: 1,
    per_page: 15,
}
export default {
    name: 'List',
    props: {
        listApi: {
            type: Function,
            required: true,
        },
        extraParams: Object,
        pageNames: {
            type: Object,
            default: () => ({ page: 'page', size: 'size' }),
        },
        emptyDescription: String,
    },
    components: { GupoPullRefresh: PullRefresh, GupoList: List, GupoEmpty: Empty },
    data() {
        return {
            empty: false,
            refreshing: false,
            loading: false,
            finished: false,
            list: [],
            meta: { ...defaultMeta },
        }
    },
    methods: {
        async init() {
            this.meta = { ...defaultMeta }
            this.refreshing = true
            this.empty = false
            this.loading = true
            this.finished = false
            await this.onLoad()
        },
        onRefresh() {
            this.$emit('refresh')
            this.init().finally(() => (this.refreshing = false))
        },
        async onLoad() {
            this.loading = true
            await this.getList()
            this.loading = false
            if (this.meta.current_page >= this.meta.last_page) {
                this.finished = true
            } else {
                this.finished = false
                this.meta.current_page += 1
            }
            this.$emit('list', this.list)
        },
        async getList() {
            const { data, meta } = await this.listApi({
                [this.pageNames.page]: this.meta.current_page,
                [this.pageNames.size]: this.meta.per_page,
                ...this.extraParams,
            })
            this.empty = meta.current_page === 1 && data.length === 0 && !this.$scopedSlots.header
            this.list = [...(this.refreshing ? [] : this.list), ...data]
            this.meta = meta
        },
    },
}
</script>

<style lang="less">
.list.van-pull-refresh {
    display: flex;
    height: 100%;
    flex: 1;
    flex-direction: column;

    /deep/.van-pull-refresh__track {
        flex: 1;
    }
}

.list {
    &.refreshing {
        /deep/.van-list__loading,
        /deep/.van-list__finished-text {
            display: none;
        }
    }
}
</style>
