import router from '@/router'
/* Layout */
import Layout from '@/layout/index'
import asyncRoutes from '@/router/AsyncRoute.js'
import { get } from 'lodash'

const state = () => ({
    menuList: [],
    hasRoute: false,
})
const mutations = {
    SET_MENUS: (state, menus) => {
        state.menuList = menus
    },
    SET_HAS_ROUTE: (state, data) => {
        state.hasRoute = data
    },
}

const getMenus = async () => {
    return [
        {
            name: 'test1',
            meta: {
                // icon: 'el-icon-s-flag',
                title: 'fiterOptions 横向树形控件',
                // affix: true,
            },
        },
        {
            name: 'test2',
            meta: {
                // icon: 'el-icon-s-flag',
                title: '2',
                // affix: true,
            },
        },
    ]
}

const actions = {
    init_routes({ commit }) {
        return new Promise((resolve, reject) => {
            let routes = {
                path: '/',
                name: 'layout',
                component: Layout,
                redirect: '',
                children: [],
            }
            let routesChild = routes.children
            function loop(list) {
                list.forEach((item) => {
                    if (get(item, 'child', []).length > 0) {
                        loop(item.child)
                    } else {
                        let routeItem = asyncRoutes[item.name]
                        routeItem.meta = item.meta
                        routesChild.push(routeItem)
                        item.path = routeItem.path
                    }
                })
            }
            getMenus().then((menus) => {
                loop(menus)
                if (routesChild.length > 0) {
                    routes.redirect = routesChild[0].path
                    //添加路由
                    router.addRoute(routes)
                    router.addRoute({
                        path: '*',
                        redirect: { path: '/404' },
                    })
                    //设置页面展示菜单数组
                    commit('SET_MENUS', menus)
                    commit('SET_HAS_ROUTE', true)
                    //返回登录成功后前往的页面地址
                    resolve(routes.redirect)
                } else {
                    reject()
                }
            })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
