export const constantRoutes = [
    {
        path: '/utilsMethods',
        name: 'UtilsMethods',
        component: () => import('@/views/UtilsMethods/README.md'),
        meta: { title: '通用方法', markdown: true },
    },
    {
        path: '/standard',
        name: 'Standard',
        component: () => import('@/views/Standard/README.md'),
        meta: { title: '代码规范', markdown: true },
    },
    {
        path: '/codeReview',
        name: 'CodeReview',
        component: () => import('@/views/CodeReview/README.md'),
        meta: { title: 'Code Review 规范', markdown: true },
    },
    {
        path: '/vue3Learn',
        name: 'Vue3Learn',
        component: () => import('@/views/Vue3Learn/README.md'),
        meta: { title: 'Vue3 踩坑记录', markdown: true },
    },
    {
        path: '/vue3Skill',
        name: 'Vue3Skill',
        component: () => import('@/views/Vue3Skill/README.md'),
        meta: { title: 'Vue3 小技巧', markdown: true },
    },
    {
        path: '/piniaLearn',
        name: 'PiniaLearn',
        component: () => import('@/views/PiniaLearn/README.md'),
        meta: { title: '两分钟上手 pinia', markdown: true },
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
        path: '/page-footer',
        name: 'PageFooter',
        component: () => import('@/views/PageFooter'),
        meta: { title: '页脚（PageFooter）' },
    },
    {
        path: '/signature-pad',
        name: 'SignaturePad',
        component: () => import('@/views/SignaturePad'),
        meta: { title: '签名版（SignaturePad）' },
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
