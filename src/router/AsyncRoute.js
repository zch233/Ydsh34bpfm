const asyncRoutes = {
    test1: {
        path: '/test1',
        name: 'test1',
        component: () => import('@/views/testViews/TestOne.vue'),
    },
    test2: {
        path: '/test2',
        name: 'test2',
        component: () => import('@/views/testViews/TestTwo.vue'),
    },
    test3: {
        path: '/test3',
        name: 'test3',
        component: () => import('@/views/testViews/TestThree.vue'),
    },
    test4: {
        path: '/test4',
        name: 'test4',
        component: () => import('@/views/testViews/TestFour.vue'),
    },
    test5: {
        path: '/test5',
        name: 'test5',
        component: () => import('@/views/testViews/TestFive.vue'),
    },
}
export default asyncRoutes
