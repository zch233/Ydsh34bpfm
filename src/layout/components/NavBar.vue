<template>
    <div class="nav-bar">
        <div class="left-wrapper">
            <el-image :src="logoSrc" class="logo" fit="contain" />
            <span class="logo-tag">萧山</span>
            <div class="logo-title"> 后台管理系统 </div>
        </div>
        <div class="right-menu">
            <div class="right-menu-container">
                <NavMenu />
            </div>
            <screenfull class="right-menu-item hover-effect" />
            <el-tooltip content="布局大小" effect="dark" placement="bottom">
                <size-select class="right-menu-item hover-effect" />
            </el-tooltip>
            <NotifyBadge class="right-menu-item hover-effect" :list="list" />
            <el-dropdown class="header-avatar" @command="dropItemHanlder">
                <el-avatar size="medium" :src="avatarSrc" />
                <!-- <div class="account-box">
                    <i class="el-icon-s-custom"></i>
                    <span class="text">{{ userInfo.account }}</span>
                </div> -->
                <template #dropdown>
                    <el-dropdown-menu v-if="userInfo">
                        <div class="header-drop-name-info">
                            <el-avatar size="medium" :src="avatarSrc" />
                            <div class="info">
                                <p>{{ userInfo.account }}</p>
                                <p>{{ userInfo.name }} {{ userInfo.phone }}</p>
                            </div>
                        </div>
                        <el-dropdown-item command="chang_info">修改信息</el-dropdown-item>
                        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                        <div class="hedaer-drop-last-login">
                            最后登录时间：<span>{{ userInfo.last_active_time }}</span>
                        </div>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NotifyBadge from '@/components/NotifyBadge'
import { get } from 'lodash'
import { Image, Tooltip, Dropdown, DropdownMenu, DropdownItem, Avatar } from 'element-ui'
import SizeSelect from '@/components/SizeSelect'
import Screenfull from '@/components/Screenfull'
import NavMenu from './NavMenu/index.vue'
export default {
    name: 'NavBar',
    components: {
        NotifyBadge,
        ElImage: Image,
        ElTooltip: Tooltip,
        SizeSelect,
        Screenfull,
        NavMenu,
        ElDropdown: Dropdown,
        ElDropdownMenu: DropdownMenu,
        ElDropdownItem: DropdownItem,
        ElAvatar: Avatar,
    },
    data() {
        return {
            list: ['xxx1', 'xxx2', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx3'],
            logoSrc: require('@/assets/images/logo.png'),
        }
    },
    computed: {
        ...mapGetters(['sidebar']),
        userInfo() {
            return (
                get(this.$store, 'state.user.userInfo') || {
                    account: '昵称',
                    name: '真实姓名',
                    phone: '18888888888',
                    last_active_time: '2020-01-01 11:11',
                }
            )
        },
        avatarSrc() {
            return get(this.userInfo, 'avatar', 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
        },
    },
    methods: {
        dropItemHanlder(command) {
            console.log(command)
            switch (command) {
                case 'logout':
                    this.logout()
                    break

                default:
                    break
            }
        },
        // async logout() {
        //     await this.$store.dispatch('user/logout')
        //     this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        // },
    },
}
</script>

<style lang="less" scoped>
.nav-bar {
    position: relative;
    z-index: 11;
    display: flex;
    height: @navBarHeight;
    overflow: hidden;
    color: @navBarColor;
    background: @navBarBg;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;

    .left-wrapper {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 140px;
        height: 100%;
        padding: 10px;
    }

    .logo-tag {
        padding: 2px 8px;
        margin: 0 14px;
        font-size: 13px;
        color: #fff;
        background-color: @menuActiveText;
        border-radius: 2px;
    }

    .logo-title {
        height: 100%;
        padding: 0 15px;
        font-size: 14px;
        border-left: 1px solid #d5d9de;
    }

    .hamburger-container {
        height: 100%;
        line-height: 50px;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }

    .breadcrumb-container {
        margin-left: 20px;
    }

    .right-menu {
        display: flex;
        height: 100%;
        padding: 0 15px;
        align-items: center;

        &:focus {
            outline: none;
        }

        .account-box {
            display: flex;
            height: 100%;
            color: @navBarColor;
            align-items: center;

            i {
                font-size: 18px;
            }

            .text {
                margin-left: 10px;
                font-size: 12px;
            }
        }
    }

    .right-menu-item {
        display: inline-flex;
        height: 100%;
        padding: 0 15px;
        font-size: 18px;
        color: @menuActiveText;
        align-items: center;
        flex: 0 0 auto;

        &.hover-effect {
            cursor: pointer;
            transition: background 0.3s;

            &:hover {
                background: rgba(0, 0, 0, 0.025);
            }
        }
    }

    .header-avatar {
        margin-left: 10px;
        flex: 0 0 auto;
    }
}

.header-drop-name-info {
    display: flex;
    padding: 5px 15px 15px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    align-items: center;

    .el-avatar {
        margin-right: 10px;
        flex: 0 0 auto;
    }

    .info {
        p {
            margin-top: 8px;

            &:first-child {
                margin-top: 0;
            }
        }
    }
}

.hedaer-drop-last-login {
    padding: 15px 15px 5px;
    margin-top: 10px;
    color: #909399;
    text-align: center;
    border-top: 1px solid #ccc;

    span {
        color: #606266;
    }
}
</style>
