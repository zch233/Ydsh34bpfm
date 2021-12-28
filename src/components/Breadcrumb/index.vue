<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.key">
                <span
                    v-if="item.redirect === 'noRedirect' || index === levelList.length - 1 || !item.path"
                    class="no-redirect"
                    :class="{ 'last-item': index === levelList.length - 1 }"
                    >{{ item.group_title || item.meta.title }}</span
                >
                <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'
import { get } from 'lodash'
import { Breadcrumb, BreadcrumbItem } from 'element-ui'
export default {
    data() {
        return {
            levelList: null,
        }
    },
    components: {
        ElBreadcrumb: Breadcrumb,
        ElBreadcrumbItem: BreadcrumbItem,
    },
    watch: {
        $route(route) {
            // if you go to the redirect page, do not update the breadcrumbs
            if (route.path.startsWith('/redirect/')) {
                return
            }
            this.getBreadcrumb()
        },
    },
    computed: {
        ...mapGetters(['menuList']),
    },
    created() {
        this.getBreadcrumb()
    },
    methods: {
        getBreadcrumb() {
            const { meta, path } = this.$route
            const activeMenu = get(meta, 'activeMenu', '')
            if (activeMenu) {
                let list = this.loopMenu(this.menuList, activeMenu)
                console.log(list)
                this.levelList = (list || []).concat([{ meta, key: Math.random() }])
            } else {
                this.levelList = this.loopMenu(this.menuList, path)
            }
        },
        loopMenu(menuList, activeMenu) {
            for (let index = 0; index < menuList.length; index++) {
                const item = menuList[index]
                if (item.path === activeMenu) {
                    return [{ ...item, key: Math.random() }]
                } else {
                    if (item.child && item.child.length > 0) {
                        const result = this.loopMenu(item.child, activeMenu)
                        if (result && result.length > 0) {
                            return [
                                {
                                    ...item,
                                    child: [],
                                    key: Math.random(),
                                },
                            ].concat(result)
                        }
                    }
                }
            }
        },

        handleLink(item) {
            const { path } = item
            this.$router.push(path)
        },
    },
}
</script>

<style lang="less" scoped>
.app-breadcrumb.el-breadcrumb {
    display: inline-block;
    margin-left: 8px;
    font-size: 14px;
    line-height: 50px;

    .no-redirect {
        color: #666;
        cursor: text;
    }

    a {
        &:hover {
            color: @menuActiveText;
        }
    }

    .last-item {
        color: #000;
    }
}
</style>
