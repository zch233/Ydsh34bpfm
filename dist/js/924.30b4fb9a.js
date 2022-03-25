"use strict";(self["webpackChunkvue2_cli5"]=self["webpackChunkvue2_cli5"]||[]).push([[924],{948:function(t,e,o){o.d(e,{Z:function(){return u}});var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"codeWrapper"},[o("pre",[t._v("    "),t.title?o("span",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t._v("\n    "),o("code",[t._v(t._s(t.code))]),t._v("\n  ")])])},n=[],r=o(5550),s={name:"CodeBar",props:{code:String,title:String},directives:{highlight:{inserted:function(t){let e=t.querySelectorAll("pre code");e.forEach((t=>{r.Z.highlightBlock(t)}))}}}},l=s,i=o(1001),d=(0,i.Z)(l,a,n,!1,null,"53a18800",null),u=d.exports},7924:function(t,e,o){o.r(e),o.d(e,{default:function(){return G}});var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sort-button-demo"},[o("div",{staticClass:"title"},[t._v("单个排序按钮")]),o("SortButton",{attrs:{data:t.singleSortButtonData},on:{change:t.handelSort}}),o("div",{staticClass:"mul-title"},[t._v("单个排序按钮（selected：选中，defaultSort: 默认排序方式）")]),o("SortButton",{attrs:{data:t.singleSortButtonData,selected:"",defaultSort:"ascend"},on:{change:t.handelSort}}),o("div",{staticClass:"mul-title"},[t._v("多个排序按钮")]),o("SortButtonGroup",{attrs:{groupData:t.sortButtonData},on:{change:t.handelSortGroup}}),o("div",{staticClass:"mul-title"},[t._v("多个排序按钮（defaultSelected：默认选中某个，defaultSort：默认选中的排序方式）")]),o("SortButtonGroup",{attrs:{groupData:t.sortButtonData,defaultSelected:"update_time",defaultSort:"ascend"},on:{change:t.handelSortGroup}}),o("CodeBar",{attrs:{code:t.code}})],1)},n=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sort-parent"},[o("div",{class:{active:"group"===t.type?t.data.type===t.sortBy:t.data.type===t.singleSortBy,"sort-button":!0},on:{click:t.handelSort}},[o("Icon",{staticClass:"iconfont first",attrs:{icon:t.data.icon}}),o("div",{staticClass:"center-text"},[t._v(t._s(t.data.label))]),o("Icon",{class:{"active-icon":t.sort===t.ASCEND,arrowhead:!0},attrs:{icon:"arrowhead"}})],1)])},s=[],l=o(8766);const i="descend",d="ascend";var u={name:"SortButton",components:{Icon:l.Z},watch:{selected:{handler(t){!0===t&&("group"!==this.type&&(this.singleSortBy=this.data.type),this.sort=this.defaultSort)},immediate:!0}},props:{data:{type:Object,default:()=>({})},sortBy:{type:String,default:""},type:{type:String,default:""},selected:{type:Boolean,default:!1},defaultSort:{type:String,default:i}},data(){return{sort:"",singleSortBy:"",ASCEND:d}},methods:{handelSort(){"group"===this.type?this.sortBy===this.data.type?this.sort=this.sort===i?d:i:this.sort=i:(this.singleSortBy=this.data.type,this.sort=this.sort===i?d:i),this.$emit("change",{sortBy:this.data.type,sort:this.sort})}}},c=u,p=o(1001),h=(0,p.Z)(c,r,s,!1,null,"943d0c36",null),S=h.exports,g=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sort-button-group"},t._l(t.groupData,(function(e){return o("SortButton",{key:e.type,attrs:{sortBy:t.sortBy,data:e,type:"group",defaultSort:e.type===t.defaultSelected?t.defaultSort:t.DESCEND,selected:e.type===t.defaultSelected},on:{change:t.handelSortGroup}})})),1)},B=[],v={components:{SortButton:S},watch:{defaultSelected:{handler(t){this.sortBy=t},immediate:!0}},props:{groupData:{type:Array,default:()=>[]},defaultSelected:{type:String,default:""},defaultSort:{type:String,default:i}},data(){return{sortBy:"",DESCEND:i}},methods:{handelSortGroup({sortBy:t,sort:e}){this.sortBy=t,this.$emit("change",{sortBy:t,sort:e})}}},y=v,f=(0,p.Z)(y,g,B,!1,null,"8c4c52b6",null),m=f.exports,_=o(948),D={components:{SortButton:S,SortButtonGroup:m,CodeBar:_.Z},data(){return{singleSortButtonData:{icon:"visits",label:"访问量",type:"view_time"},sortButtonData:[{icon:"visits",label:"访问量",type:"view_time"},{icon:"updateTime",label:"更新时间",type:"update_time"}],code:' \n        <div class="title">单个排序按钮</div>\n        <SortButton :data="singleSortButtonData" @change="handelSort" />\n\n        <div class="mul-title">单个排序按钮（selected：选中，defaultSort: 默认排序方式）</div>\n        <SortButton :data="singleSortButtonData" @change="handelSort" selected defaultSort="ascend" />\n\n        <div class="mul-title">多个排序按钮</div>\n        <SortButtonGroup :groupData="sortButtonData" @change="handelSortGroup" />\n\n        <div class="mul-title">多个排序按钮（defaultSelected：默认选中某个，defaultSort：默认选中的排序方式）</div>\n        <SortButtonGroup :groupData="sortButtonData" @change="handelSortGroup" defaultSelected="update_time" defaultSort="ascend" />\n        \n        export default {\n            components: {\n                SortButton,\n                SortButtonGroup,\n            },\n            data() {\n                return {\n                    // 单个排序按钮\n                    singleSortButtonData: {\n                        icon: \'visits\', // svg名称\n                        label: \'访问量\', // 按钮名称\n                        type: \'view_time\', // 排序类型\n                    },\n                    // 排序按钮组\n                    sortButtonData: [\n                        {\n                            icon: \'visits\', // svg名称\n                            label: \'访问量\', // 按钮名称\n                            type: \'view_time\', // 排序类型\n                        },\n                        {\n                            icon: \'updateTime\',\n                            label: \'更新时间\',\n                            type: \'update_time\',\n                        },\n                    ],\n                }\n            },\n            methods: {\n                handelSort({ sortBy, sort }) {\n                    console.log(sortBy, sort)\n                },\n                handelSortGroup({ sortBy, sort }) {\n                    console.log(sortBy, sort)\n                },\n            },\n        }\n        '}},methods:{handelSort({sortBy:t,sort:e}){console.log(t,e)},handelSortGroup({sortBy:t,sort:e}){console.log(t,e)}}},C=D,b=(0,p.Z)(C,a,n,!1,null,"3ba34554",null),G=b.exports}}]);