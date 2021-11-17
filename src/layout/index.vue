<template>
    <div class="app-wrapper" :class="classObj">
        <NavBar />
        <div class="main-container-box">
            <div class="sidebar-container">
                <div class="sider-top">
                    <SideTop v-model="orgValue" :list="orgList" :opened="sidebar.opened" />
                </div>
                <SideBar />
                <div class="sider-bottom">
                    <Hamburger :is-active="sidebar.opened" @toggleClick="toggleSideBar" />
                </div>
            </div>
            <div class="main-container">
                <AppMain />
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar'
import SideBar from './components/Sidebar/index'
import AppMain from './components/AppMain'
import SideTop from './components/SideTop/index'
import Hamburger from '@/components/Hamburger/index'
import { mapGetters } from 'vuex'
export default {
    name: 'Layout',
    components: {
        NavBar,
        SideBar,
        AppMain,
        SideTop,
        Hamburger,
    },
    data() {
        return {
            orgList: [
                {
                    value: '1',
                    name: '杭州古珀医疗科技有限公司',
                },
                {
                    value: '2',
                    name: '杭州大古珀医疗科技有限公司',
                },
            ],
            orgValue: '1',
        }
    },
    computed: {
        ...mapGetters(['sidebar']),
        classObj() {
            return {
                hideSidebar: !this.sidebar.opened,
                openSidebar: this.sidebar.opened,
                // withoutAnimation: this.sidebar.withoutAnimation,
                // mobile: this.device === 'mobile',
            }
        },
    },
    methods: {
        toggleSideBar() {
            this.$store.dispatch('app/toggleSideBar')
        },
    },
}
</script>

<style lang="less" scoped>
.app-wrapper {
    .clearfix();

    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    // &.mobile.openSidebar {
    //     position: fixed;
    //     top: 0;
    // }
}

.drawer-bg {
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
}

// .fixed-header {
//     position: fixed;
//     top: 0;
//     right: 0;
//     z-index: 9;
//     width: calc(100% - @sideBarWidth);
//     transition: width 0.28s;
// }

// .hideSidebar .fixed-header {
//     width: calc(100% - 54px);
// }

// .mobile .fixed-header {
//     width: 100%;
// }
</style>
