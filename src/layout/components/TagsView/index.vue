<template>
    <div id="tags-view-container" class="tags-view-container">
        <scroll-pane ref="scrollPane" class="tags-view-wrapper" @scroll="handleScroll">
            <router-link
                v-for="tag in visitedViews"
                ref="tag"
                :key="tag.path"
                :class="isActive(tag) ? 'active' : ''"
                :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
                class="tags-view-item"
                @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''"
                @contextmenu.prevent.native="openMenu(tag, $event)"
            >
                {{ tag.title }}
                <span v-if="!isAffix(tag)" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
            </router-link>
        </scroll-pane>
        <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
            <li @click="refreshSelectedTag(selectedTag)">刷新</li>
            <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">关闭</li>
            <li @click="closeOthersTags">关闭其他</li>
            <li @click="closeAllTags(selectedTag)">关闭全部</li>
        </ul>
    </div>
</template>

<script>
import ScrollPane from './ScrollPane'
import path from 'path'
import { cloneDeep } from 'lodash'
export default {
    name: 'TagsView',
    components: { ScrollPane },
    data() {
        return {
            visible: false,
            top: 0,
            left: 0,
            selectedTag: {},
            affixTags: [],
        }
    },
    computed: {
        visitedViews() {
            return this.$store.state.tagsView.visitedViews
        },

        routeObj() {
            return Object.assign({}, { ...this.$route, matched: null })
        },
    },
    watch: {
        $route() {
            this.addTags()
            this.moveToCurrentTag()
        },
        visible(value) {
            if (value) {
                document.body.addEventListener('click', this.closeMenu)
            } else {
                document.body.removeEventListener('click', this.closeMenu)
            }
        },
    },
    mounted() {
        // this.initTags()
        this.addTags()
    },
    methods: {
        isActive(route) {
            return route.path === this.$route.path
        },
        isAffix(tag) {
            return (tag.meta && tag.meta.affix) || this.visitedViews.length === 1
        },
        filterAffixTags(routes, basePath = '/') {
            let tags = []
            routes.forEach((route) => {
                if (route.meta && route.meta.affix) {
                    const tagPath = path.resolve(basePath, route.path)
                    tags.push({
                        fullPath: tagPath,
                        path: tagPath,
                        name: route.name,
                        meta: { ...route.meta },
                    })
                }
                if (route.children) {
                    const tempTags = this.filterAffixTags(route.children, route.path)
                    if (tempTags.length >= 1) {
                        tags = [...tags, ...tempTags]
                    }
                }
            })
            return tags
        },
        initTags() {
            const affixTags = (this.affixTags = this.filterAffixTags(this.routes))
            for (const tag of affixTags) {
                // Must have tag name
                if (tag.name) {
                    this.$store.dispatch('tagsView/addVisitedView', tag)
                }
            }
        },
        addTags() {
            console.log(cloneDeep({ name: this.routeObj }))
            const { name } = this.$route
            if (name) {
                this.$store.dispatch('tagsView/addView', this.routeObj)
            }
            return false
        },
        moveToCurrentTag() {
            const tags = this.$refs.tag
            this.$nextTick(() => {
                for (const tag of tags) {
                    if (tag.to.path === this.$route.path) {
                        this.$refs.scrollPane.moveToTarget(tag)
                        // when query is different then update
                        if (tag.to.fullPath !== this.$route.fullPath) {
                            this.$store.dispatch('tagsView/updateVisitedView', this.$route)
                        }
                        break
                    }
                }
            })
        },
        refreshSelectedTag(view) {
            this.$store.dispatch('tagsView/delCachedView', view).then(() => {
                const { fullPath } = view
                this.$nextTick(() => {
                    this.$router.replace({
                        path: '/redirect' + fullPath,
                    })
                })
            })
        },
        closeSelectedTag(view) {
            this.$store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
                if (this.isActive(view)) {
                    this.toLastView(visitedViews, view)
                }
            })
        },
        closeOthersTags() {
            if (this.visitedViews.length < 2) {
                return
            }
            if (this.selectedTag.name !== this.$route.name) {
                this.$router.push(this.selectedTag)
            }
            this.$store.dispatch('tagsView/delOthersViews', this.selectedTag).then(() => {
                this.moveToCurrentTag()
            })
        },
        closeAllTags(view) {
            if (this.visitedViews.length < 2) {
                return
            }
            this.$store.dispatch('tagsView/delAllViews').then(({ visitedViews }) => {
                if (this.affixTags.some((tag) => tag.path === view.path)) {
                    return
                }
                this.toLastView(visitedViews, view)
            })
        },
        toLastView(visitedViews, view) {
            const latestView = visitedViews.slice(-1)[0]
            if (latestView) {
                this.$router.push(latestView.fullPath)
            } else {
                // now the default is to redirect to the home page if there is no tags-view,
                // you can adjust it according to your needs.
                if (view.name === 'Dashboard') {
                    // to reload home page
                    this.$router.replace({ path: '/redirect' + view.fullPath })
                } else {
                    this.$router.push('/')
                }
            }
        },
        openMenu(tag, e) {
            const menuMinWidth = 105
            const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            const offsetWidth = this.$el.offsetWidth // container width
            const maxLeft = offsetWidth - menuMinWidth // left boundary
            const left = e.clientX - offsetLeft + 15 // 15: margin right
            console.log(offsetLeft, offsetWidth, maxLeft, left, e)
            if (left > maxLeft) {
                this.left = maxLeft
            } else {
                this.left = left
            }

            this.top = e.offsetY
            this.visible = true
            this.selectedTag = tag
        },
        closeMenu() {
            this.visible = false
        },
        handleScroll() {
            this.closeMenu()
        },
    },
}
</script>

<style lang="less" scoped>
.tags-view-container {
    position: relative;
    width: 100%;
    margin-top: 10px;

    .tags-view-wrapper {
        .tags-view-item {
            position: relative;
            display: inline-block;
            height: 28px;
            padding: 0 10px;
            margin-top: 4px;
            font-size: 14px;
            line-height: 28px;
            color: #666;
            cursor: pointer;
            border-radius: 8px 8px 0 0;

            &.active {
                color: #333;
                background-color: #fff;

                &::before {
                    position: relative;
                    // border: 1px solid @menuActiveText;
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    margin-right: 2px;
                    background: @menuActiveText;
                    border-radius: 50%;
                    content: '';
                }
            }
        }
    }

    .contextmenu {
        position: absolute;
        z-index: 3000;
        padding: 5px 0;
        margin: 0;
        font-size: 12px;
        font-weight: 400;
        color: #333;
        list-style-type: none;
        background: #fff;
        border-radius: 4px;
        box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

        li {
            padding: 7px 16px;
            margin: 0;
            cursor: pointer;

            &:hover {
                background: #eee;
            }
        }
    }
}
</style>

<style lang="less">
//reset element css of el-icon-close
.tags-view-wrapper {
    .tags-view-item {
        .el-icon-close {
            width: 16px;
            height: 16px;
            text-align: center;
            vertical-align: 2px;
            border-radius: 50%;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            transform-origin: 100% 50%;

            &::before {
                display: inline-block;
                vertical-align: -3px;
                transform: scale(0.6);
            }

            &:hover {
                color: #fff;
                background-color: #b4bccc;
            }
        }
    }
}
</style>
