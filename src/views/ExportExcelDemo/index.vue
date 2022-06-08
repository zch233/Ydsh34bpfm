<template>
    <div>
        <div style="margin-bottom: 15px; text-align: right">
            <Button type="primary" @click="handleExport">导出表格</Button>
        </div>
        <Table :data="tableData" border stripe>
            <TableColumn prop="date" label="日期" />
            <TableColumn prop="name" label="姓名" />
            <TableColumn prop="address" label="地址" />
        </Table>
    </div>
</template>

<script>
import { Button, Table, TableColumn } from 'element-ui'
import exportExcel from '@/utils/exportExcel'

export default {
    components: {
        Button,
        Table,
        TableColumn,
    },
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄',
                },
            ],
        }
    },
    methods: {
        handleExport() {
            exportExcel(this.tableData, 'Demo', '示例')
        },
    },
}
</script>
