<template>
    <div class="notify-badge">
        <el-dropdown trigger="click">
            <el-badge :value="1" class="n-icon-item" type="warning">
                <!-- <svg-icon name="notice" :size="18" /> -->
                <Icon icon="notice" />
            </el-badge>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item, index) in list" :key="index">
                    <p class="d-text">{{ item }}</p>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import { Dropdown, Badge, DropdownMenu, DropdownItem } from 'element-ui'
import Icon from '@/components/Icon'

export default {
    name: 'NotifyBadge',
    props: {
        list: {
            type: Array,
            default() {
                return []
            },
        },
    },
    components: {
        ElDropdown: Dropdown,
        ElDropdownMenu: DropdownMenu,
        ElDropdownItem: DropdownItem,
        ElBadge: Badge,
        Icon,
    },
}
</script>

<style lang="less" scoped>
.notify-badge {
    .n-icon-item {
        color: @menuActiveText;

        .icon {
            font-size: 18px;
        }
    }
}

.d-text {
    max-width: 100px;
    .f-toe();
}
</style>
