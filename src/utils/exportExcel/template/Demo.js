import XlsxPopulate from 'xlsx-populate'
import columnMap from '../tools/ColumnMap'
import mergeRange from '../tools/MergeRange'

export const Demo = async (data) => {
    // 创建表格
    const workbook = await XlsxPopulate.fromBlankAsync()

    var table = []
    data.map((item) => {
        table.push([item.date, item.name, item.address])
    })
    var sheetContent = [['日期', '姓名', '地址'], ...table]

    var sheet = workbook.sheet(0)
    sheet.range(`A1:${columnMap[sheetContent[0].length]}${sheetContent.length}`).value(sheetContent)

    // 设置表格样式
    for (let i = 1; i <= sheetContent.length; i++) {
        sheet.row(i).height(30)
        for (let j = 1; j <= sheetContent[0].length; j++) {
            sheet.cell(`${columnMap[j]}${i}`).style({
                wrapText: true,
                verticalAlignment: 'center',
            })
            if (i === 1) {
                sheet.column(columnMap[j]).width(30)
                sheet.cell(`${columnMap[j]}${i}`).style({
                    bold: true,
                    fill: 'f0f0f0',
                    border: 'thin',
                    horizontalAlignment: 'center',
                })
            } else {
                sheet.cell(`${columnMap[j]}${i}`).style({
                    border: 'thin',
                    horizontalAlignment: 'center',
                })
            }
        }
    }
    sheet.row(1).height(30)

    // 合并单元格
    mergeRange(sheet, sheetContent)

    // 导出
    return workbook.outputAsync({ type: 'blob' })
}
