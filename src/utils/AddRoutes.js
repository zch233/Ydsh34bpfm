import router from '@/router'
import Layout from '@/layout/index'
import asyncRoutes from '@/router/AsyncRoute.js'
import { get } from 'lodash'
import store from '@/store'
/**
 * @param {Array} menuList
 */
export function addRoutes(menuList) {
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
                routeItem.meta = {
                    ...item.meta,
                }
                routesChild.push(routeItem)
            }
        })
    }
    loop(menuList)
    if (routesChild.length > 0) {
        routes.redirect = routesChild[0].path
        //添加路由
        router.addRoute(routes)
        router.addRoute({
            path: '*',
            redirect: { path: '/404' },
        })
        console.log('getRoutes', router.getRoutes())
        store.commit('routes/SET_HAS_ROUTE', true)
    }
}
