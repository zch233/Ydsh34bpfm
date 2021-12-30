import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { clearPending } from '@/utils/http/index.js'
Vue.use(VueRouter)

const routes = [
    {
        path: '/list',
        name: 'List',
        component: () => import('@/views/Demo/List'),
        meta: { title: 'List' },
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
})
router.beforeEach(async (to, from, next) => {
    clearPending()
    NProgress.start()
    next()
})
router.afterEach(() => {
    NProgress.done()
})
export default router
