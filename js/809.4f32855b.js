"use strict";(self["webpackChunkvue2_cli5"]=self["webpackChunkvue2_cli5"]||[]).push([[809],{50370:function(e,t,n){n.d(t,{Z:function(){return u}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"codeWrapper"},[n("pre",[e._v("    "),e.title?n("span",{staticClass:"title"},[e._v(e._s(e.title))]):e._e(),e._v("\n    "),n("code",[e._v(e._s(e.code))]),e._v("\n  ")])])},r=[],s=n(85550),a={name:"CodeBar",props:{code:String,title:String},directives:{highlight:{inserted:function(e){let t=e.querySelectorAll("pre code");t.forEach((e=>{s.Z.highlightBlock(e)}))}}}},l=a,c=n(1001),o=(0,c.Z)(l,i,r,!1,null,"63ee0e8e",null),u=o.exports},20809:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mobileDemo"},[n("CodeBar",{attrs:{code:e.code}}),n("div",{staticClass:"iframeWrapper"},[n("iframe",{attrs:{frameborder:"0",src:e.publicURL+"mobile.html#/list"}})])],1)},r=[],s=n(50370),a=n(25508),l={name:"DemoList",components:{CodeBar:s.Z},data(){return{publicURL:a.vF,code:'\n<List :list-api="gitList">\n    <template #default="{item}">\n        <p>{{item}}</p>\n    </template>\n</List>\n\nexport default {\n    name: \'DemoList\',\n    components: {List},\n    methods: {\n        gitList() {\n            return new Promise((s) => {\n                setTimeout(() => {\n                    s({data: [...Array(20).keys()],meta: {current_page: 1, last_page: 3}})\n                }, 2000)\n            })\n        }\n    }\n}\n\n'}}},c=l,o=n(1001),u=(0,o.Z)(c,i,r,!1,null,null,null),m=u.exports}}]);