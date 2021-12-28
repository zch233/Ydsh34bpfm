import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { clearPending } from '@/utils/http/index.js'
import store from '@/store'
import { includes } from 'lodash'
import Layout from '@/layout/index'
Vue.use(VueRouter)

const routes = [
    {
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/redirect/:path(.*)',
                component: () => import('@/views/redirect/index'),
            },
        ],
    },
    {
        path: '/404',
        component: () => import(/* webpackChunkName: "404" */ '@/views/404'),
        hidden: true,
    },
    {
        path: '/more',
        component: Layout,
        children: [
            //不在侧边菜单显示且需要layout布局的路由

            {
                path: '/test5/detail',
                name: 'test5.detail',
                component: () => import('@/views/testViews/TestFive.vue'),
                meta: {
                    activeMenu: '/test5',
                    title: '详情',
                },
            },
        ],
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
})
const excludePath = ['/login', '/404'] //排除的路径
router.beforeEach(async (to, from, next) => {
    clearPending()
    NProgress.start()
    const { hasRoute } = store.getters
    //页面刷新重新addroute
    if (!hasRoute && !includes(excludePath, to.fullPath)) {
        await store.dispatch('routes/init_routes')
        next({ ...to, replace: true })
        return
    }
    next()
})
router.afterEach(() => {
    NProgress.done()
})
export default router
