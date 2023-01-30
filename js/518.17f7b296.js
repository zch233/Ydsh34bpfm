"use strict";(self["webpackChunkvue2_cli5"]=self["webpackChunkvue2_cli5"]||[]).push([[518],{47825:function(e,r,t){e.exports=t.p+"img/img1.3c8aa56d.png"},36774:function(e,r,t){e.exports=t.p+"img/img2.c89502d2.png"},13518:function(e,r,t){t.r(r),t.d(r,{default:function(){return a}});var n=function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},p=[function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("section",[n("html",[n("head"),n("body",[n("h2",[e._v("Github")]),n("ul",[n("li",[e._v("https://github.com/dtjohnson/xlsx-populate")])]),n("h2",[e._v("目录")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("├── src/utils/exportExcel\n├── template // 文件模板\n│   ├── Demo.js // 模板文件\n│   └── index.js // 模板导出\n├── tools // 通用工具方法\n│   ├── columnMap.js // 表格列标注映射\n│   ├── mergeRange.js // 合并单元格\n│   ├── saveAs.js // 下载文件流\n└── index.js\n")])]),n("h2",[e._v("基本使用")]),n("p",[e._v("1、装包")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("npm install xlsx-populate or yarn add xlsx-populate\n")])]),n("p",[e._v("2、导入方法 ​")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("import exportExcel from '@/utils/exportExcel'\n")])]),n("p",[e._v("3、执行方法")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("/**\n* @param {Object} data 表格数据\n* @param {String} type 导出模板名称\n* @param {String} name 导出文件名称\n*/\nexportExcel(res.list, 'Demo', 'demo')\n")])]),n("h2",[e._v("合并单元格")]),n("p",[e._v("目前方法中内置的是合并横向单元格，也可以自由进行定义，核心是使用下面的这个方法")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("sheet.range('A1:B1').merged(true) // 'A1:B1' 指定合并单元格区域\n")])]),n("h2",[e._v("模板文件说明")]),n("p",[e._v("调用导出方法时，需要先提供当前需要导出表格对应的模板文件")]),n("ul",[n("li",[e._v("创建表格，会返回一个 Promise"),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("const workbook = await XlsxPopulate.fromBlankAsync()\n")])])]),n("li",[e._v("获取工作表，设置工作表中的内容"),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("var sheet = workbook.sheet(0)\n")])])]),n("li",[e._v("设置工作表的绘制区域，并设置值"),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("sheet.range('A1:F10').value(data)\n")])])]),n("li",[e._v("设置表格样式 "),n("a",{attrs:{href:"https://github.com/dtjohnson/xlsx-populate#styles-1"}},[e._v("API 文档")]),n("ul",[n("li",[e._v("设置行高度"),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("sheet.row(i).height(30)\n")])])]),n("li",[e._v("设置列宽度"),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("sheet.column(1).width(15)\n")])])]),n("li",[e._v("设置单元格样式"),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("sheet.cell('A1').style({\n    bold: true, // 设置边框\n    border: 'thin', // 边框样式\n    fill: 'f0f0f0', // 填充颜色\n    horizontalAlignment: 'center', // 水平居中\n})\n")])])])])]),n("li",[e._v("导出设置完成的表格"),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("return workbook.outputAsync({ type: 'blob' })\n")])])])]),n("h2",[e._v("Tips")]),n("p",[e._v("在 vue-cli 4.x 中装包后即可正常使用，而在 vue-cli 5.x 中会出现一些问题，以下是解决方案")]),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://blog.csdn.net/FantasyWeirdo/article/details/123552064"}},[e._v("webpack < 5 used to include polyfills for node.js core modules by default")]),e._v(" "),n("img",{attrs:{src:t(47825),alt:""}})]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("yarn add node-polyfill-webpack-plugin\n\nvue.config.js:\n\nconst NodePolyfillPlugin = require('node-polyfill-webpack-plugin')\n...\n    configureWebpack: {\n        plugins: {\n            new NodePolyfillPlugin()\n        }\n    }\n...\n")])])]),n("li",[n("p",[n("a",{attrs:{href:"https://github.com/dtjohnson/xlsx-populate/issues/42"}},[e._v("Can't resolve 'fs' in ... 'node_modules\\xlsx-populate\\lib'")]),e._v(" "),n("img",{attrs:{src:t(36774),alt:""}})]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("vue.config.js:\n\n...\n    externals: {\n        fs: require('fs'),\n    },\n...\n")])]),n("p",[e._v("​")])])])])])])}],l=t(1001),s={},o=(0,l.Z)(s,n,p,!1,null,null,null),a=o.exports}}]);