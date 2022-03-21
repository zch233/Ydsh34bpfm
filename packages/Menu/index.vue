<template>
    <GupoSwipe indicator-color="white" :loop="false">
        <GupoSwipeItem v-for="(item, index) in pageCount" :key="item">
            <div class="menu">
                <div
                    class="menu-item"
                    :style="{ width: `${100 / col}%` }"
                    v-for="item in menus.slice(index * pageSize, (index + 1) * pageSize)"
                    :key="item[itemKey]"
                    @click="$emit('click', item)"
                >
                    <slot :item="item" :index="index" :menus="menus">
                        <div class="menu-item-image">
                            <GupoIcon class="menuIcon" :name="item.icon" />
                        </div>
                        <div class="menu-item-des">{{ item.label }}</div>
                    </slot>
                </div>
            </div>
        </GupoSwipeItem>
    </GupoSwipe>
</template>

<script>
import { Icon, Swipe, SwipeItem } from 'vant'

export default {
    name: 'Menu',
    components: { GupoSwipe: Swipe, GupoSwipeItem: SwipeItem, GupoIcon: Icon },
    props: {
        itemKey: {
            type: String,
            default: 'icon',
        },
        menus: {
            type: Array,
            default: () => [],
        },
        col: {
            type: [Number, String],
            default: 4,
        },
        row: {
            type: [Number, String],
            default: 2,
        },
    },
    computed: {
        pageSize() {
            return this.col * this.row
        },
        pageCount() {
            return parseInt((this.menus.length - 1) / this.pageSize + '') + 1
        },
    },
}
</script>

<style scoped lang="less">
.van-swipe {
    padding: 12px 0;
}

.menu {
    display: flex;
    flex-wrap: wrap;

    &-item {
        padding-bottom: 12px;
        font-size: calc(14px - 1px);
        line-height: 1.4;
        text-align: center;

        /deep/&-image {
            display: flex;
            width: 70%;
            aspect-ratio: 1;
            margin: 0 auto 12px;
            background-color: #fff;
            border-radius: 4px;
            align-items: center;
            justify-content: center;

            > .menuIcon {
                font-size: 28px;
                color: #999;
            }
        }
    }
}
</style>
