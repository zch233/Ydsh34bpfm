export const constantRoutes = [
    {
        path: '/standard',
        name: 'Standard',
        component: () => import('@/views/Standard/index.vue'),
        meta: { title: '代码规范' },
    },
    {
        path: '/list',
        name: 'List',
        component: () => import('@/views/List'),
        meta: { title: 'List' },
    },
]
export const asyncRoutes = {}
