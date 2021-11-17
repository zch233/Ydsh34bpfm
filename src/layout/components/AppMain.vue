<template>
    <section class="app-main">
        <div class="breadcrumb-container">
            <span class="label">当前位置：</span>
            <breadcrumb />
        </div>
        <div class="tags-view-bar">
            <TagsView />
        </div>
        <div class="router-main">
            <transition name="fade-transform" mode="out-in">
                <router-view :key="routeKey" />
            </transition>
        </div>
    </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
import TagsView from './TagsView/index'
export default {
    name: 'AppMain',
    components: {
        Breadcrumb,
        TagsView,
    },
    computed: {
        routeKey() {
            return this.$route.path
        },
    },
}
</script>

<style lang="less" scoped>
.app-main {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    padding-left: 12px;
    overflow: hidden;
    background-color: #f7f8fa;
    flex-direction: column;

    .breadcrumb-container {
        display: flex;
        padding-left: 16px;
        background-color: #fff;
        flex: 0 0 auto;
        align-items: center;

        .label {
            font-size: 14px;
            color: #666;
        }
    }

    .tags-view-bar {
        flex: 0 0 auto;
    }

    .router-main {
        flex: 1 1;
        background-color: #fff;
    }
}
</style>
