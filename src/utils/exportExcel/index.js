import t from './template'
import saveAs from './tools/SaveAs'

/**
 * @param {Object} data 表格数据
 * @param {String} type 导出模板名称
 * @param {String} name 导出文件名称
 */
function exportExcel(data, type, name) {
    const fileName = name ? `${name}.xlsx` : `${new Date().getTime()}.xlsx`
    t[type](data).then((fileBlob) => {
        saveAs(fileBlob, fileName)
    })
}

export default exportExcel
