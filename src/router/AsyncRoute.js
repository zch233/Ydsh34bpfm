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
        meta: { title: '列表组件（List）' },
    },
]
export const asyncRoutes = {}
