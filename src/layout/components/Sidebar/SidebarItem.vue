<template>
    <div v-if="!item.hidden">
        <template v-if="!hasChild">
            <app-link v-if="item.path" :to="resolvePath(item.path)">
                <el-menu-item :index="resolvePath(item.path)" :class="{ 'submenu-title-noDropdown': !isNest }">
                    <item :icon="item.meta.icon || ''" :title="item.meta.title" />
                </el-menu-item>
            </app-link>
        </template>

        <el-submenu v-else ref="subMenu" :index="item.meta.title" popper-append-to-body>
            <template slot="title">
                <item :icon="item.meta.icon" :title="item.meta.title" />
            </template>
            <sidebar-item
                v-for="child in item.child"
                :key="child.path"
                :is-nest="true"
                :item="child"
                :base-path="resolvePath(child.path)"
                class="nest-menu"
            />
        </el-submenu>
    </div>
</template>

<script>
import { Submenu, MenuItem } from 'element-ui'
import path from 'path'
import { isExternal } from '@/utils/validate'
import Item from './Item'
import AppLink from './Link'
import { get } from 'lodash'

export default {
    name: 'SidebarItem',
    components: { Item, AppLink, ElSubmenu: Submenu, ElMenuItem: MenuItem },
    props: {
        // route object
        item: {
            type: Object,
            required: true,
        },
        isNest: {
            type: Boolean,
            default: false,
        },
        basePath: {
            type: String,
            default: '',
        },
    },

    data() {
        // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
        // TODO: refactor with render function
        this.onlyOneChild = null
        return {}
    },
    computed: {
        hasChild() {
            return get(this.item, 'child', []).length > 0
        },
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter((item) => {
                if (item.hidden) {
                    return false
                } else {
                    // Temp set(will be used if only has one showing child)
                    this.onlyOneChild = item
                    return true
                }
            })

            // When there is only one child router, the child router is displayed by default
            if (showingChildren.length === 1) {
                return true
            }

            // Show parent if there are no child router to display
            if (showingChildren.length === 0) {
                this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
                return true
            }

            return false
        },
        resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        },
    },
}
</script>
