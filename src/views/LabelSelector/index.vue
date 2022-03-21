<template>
    <div class="label-selector-demo">
        <!-- normal -->
        <div class="title">基础用法</div>
        <LabelSelector v-model="selected" :options="options">
            <div>已选择标签：{{ selected.join('、') }}</div>
        </LabelSelector>
        <!-- trigger -->
        <div class="title">使用 hover 激活</div>
        <LabelSelector v-model="triggerSelected" :options="options" trigger="hover">
            <div>已选择标签：{{ triggerSelected.join('、') }}</div>
        </LabelSelector>
        <!-- placement -->
        <div class="title">自定义菜单弹出位置</div>
        <LabelSelector v-model="placementSelected" :options="options" placement="bottom-end">
            <div>已选择标签：{{ placementSelected.join('、') }}</div>
        </LabelSelector>
        <CodeBar :code="code" />
        <!-- 参数列表 -->
        <Table :data="tableData">
            <TableColumn prop="param" label="参数" align="center" />
            <TableColumn prop="descript" label="说明" align="center" />
            <TableColumn prop="type" label="类型" align="center" />
            <TableColumn label="可选值" align="center">
                <template slot-scope="scoped">
                    {{ scoped.row.optional ? scoped.row.optional : '—' }}
                </template>
            </TableColumn>
            <TableColumn label="默认值" align="center">
                <template slot-scope="scoped">
                    {{ scoped.row.default ? scoped.row.default : '—' }}
                </template>
            </TableColumn>
        </Table>
    </div>
</template>

<script>
import { Table, TableColumn } from 'element-ui'
import CodeBar from '@/components/CodeBar'
import LabelSelector from '@/../packages/LabelSelector'

export default {
    components: {
        Table,
        TableColumn,
        CodeBar,
        LabelSelector,
    },
    data() {
        return {
            selected: ['Java'],
            triggerSelected: ['Java'],
            placementSelected: ['Java'],
            options: ['Java', 'JavaScript', 'PHP', 'Python', 'CPP', 'Go'],
            code: `
<!-- normal -->
<div class="title">基础用法</div>
<LabelSelector v-model="selected" :options="options">
    <div>已选择标签：{{ selected.join('、') }}</div>
</LabelSelector>

<!-- trigger -->
<div class="title">使用 hover 激活</div>
<LabelSelector v-model="triggerSelected" :options="options" trigger="hover">
    <div>已选择标签：{{ triggerSelected.join('、') }}</div>
</LabelSelector>

<!-- placement -->
<div class="title">自定义菜单弹出位置</div>
<LabelSelector v-model="placementSelected" :options="options" placement="bottom-end">
    <div>已选择标签：{{ placementSelected.join('、') }}</div>
</LabelSelector>
            `,
            tableData: [
                {
                    param: 'data',
                    descript: '已选择标签',
                    type: 'Array<string>',
                    optional: '',
                    default: '',
                },
                {
                    param: 'options',
                    descript: '选项数据源',
                    type: 'Array<string>',
                    optional: '',
                    default: '',
                },
                {
                    param: 'title',
                    descript: '标题',
                    type: 'String',
                    optional: '',
                    default: '添加标签',
                },
                {
                    param: 'trigger',
                    descript: '触发下拉的行为',
                    type: 'String',
                    optional: 'hover, click',
                    default: 'click',
                },
                {
                    param: 'placement',
                    descript: '菜单弹出位置',
                    type: 'String',
                    optional: '(top|bottom|left|right)(-start|-end)',
                    default: 'bottom-start',
                },
            ],
        }
    },
}
</script>

<style lang="less" scoped>
.label-selector-demo {
    padding: 20px;

    .title {
        margin: 25px 0 20px;
        font-size: 22px;
    }
}
</style>
