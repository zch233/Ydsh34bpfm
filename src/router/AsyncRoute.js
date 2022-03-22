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
    {
        path: '/menu',
        name: 'Menu',
        component: () => import('@/views/Menu'),
        meta: { title: '菜单组件（Menu）' },
    },
    {
        path: '/page-nav',
        name: 'PageNav',
        component: () => import('@/views/PageNav'),
        meta: { title: '导航（PageNav）' },
    },
    {
        path: '/sortButton',
        name: 'SortButton',
        component: () => import('@/views/SortButton'),
        meta: { title: '排序按钮（SortButton）' },
    },
    {
        path: '/labelSelector',
        name: 'LabelSelector',
        component: () => import('@/views/LabelSelector/index.vue'),
        meta: { title: '标签选择器（LabelSelector）' },
    },
]
export const asyncRoutes = {}
