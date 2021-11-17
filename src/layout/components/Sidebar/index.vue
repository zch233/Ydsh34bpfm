<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
            :default-active="activeMenu"
            :collapse="isCollapse"
            :background-color="variables.menuBg"
            :text-color="variables.menuText"
            :unique-opened="false"
            :active-text-color="variables.menuActiveText"
            :collapse-transition="false"
            mode="vertical"
        >
            <div class="menu-group" v-for="item in menuList" :key="item.group_title">
                <div class="label">{{ item.group_title }}</div>
                <sidebar-item v-for="route in item.child" :key="route.path" :item="route" :base-path="route.path" />
            </div>
        </el-menu>
    </el-scrollbar>
</template>

<script>
import { Menu, Scrollbar } from 'element-ui'
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/assets/styles/elTheme/variables.less'

export default {
    name: 'side-bar',
    components: { SidebarItem, ElMenu: Menu, ElScrollbar: Scrollbar },
    computed: {
        ...mapGetters(['sidebar', 'menuList']),
        activeMenu() {
            const route = this.$route
            const { meta, path } = route
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu
            }
            return path
        },
        variables() {
            return variables
        },
        isCollapse() {
            return !this.sidebar.opened
        },
    },
}
</script>
