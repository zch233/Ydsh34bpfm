"use strict";(self["webpackChunkvue2_cli5"]=self["webpackChunkvue2_cli5"]||[]).push([[862],{30948:function(e,t,r){r.d(t,{Z:function(){return u}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"codeWrapper"},[r("pre",[e._v("    "),e.title?r("span",{staticClass:"title"},[e._v(e._s(e.title))]):e._e(),e._v("\n    "),r("code",[e._v(e._s(e.code))]),e._v("\n  ")])])},i=[],a=(r(41539),r(54747),r(85550)),c={name:"CodeBar",props:{code:String,title:String},directives:{highlight:{inserted:function(e){var t=e.querySelectorAll("pre code");t.forEach((function(e){a.Z.highlightBlock(e)}))}}}},l=c,s=r(1001),o=(0,s.Z)(l,n,i,!1,null,"53a18800",null),u=o.exports},33862:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"demo"},[r("CodeBar",{attrs:{code:e.code}}),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"iframeWrapper"},[r("iframe",{attrs:{frameborder:"0",src:"/mobile.html/#/page-nav"}})])}],a=r(30948),c={name:"DemoList",components:{CodeBar:a.Z},data:function(){return{code:'\n<PageNav center title="个人中心" />\n'}}},l=c,s=r(1001),o=(0,s.Z)(l,n,i,!1,null,"493af15f",null),u=o.exports}}]);