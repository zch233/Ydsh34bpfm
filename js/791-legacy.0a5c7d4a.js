"use strict";(self["webpackChunkvue2_cli5"]=self["webpackChunkvue2_cli5"]||[]).push([[791],{50370:function(e,t,n){n.d(t,{Z:function(){return u}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"codeWrapper"},[n("pre",[e._v("    "),e.title?n("span",{staticClass:"title"},[e._v(e._s(e.title))]):e._e(),e._v("\n    "),n("code",[e._v(e._s(e.code))]),e._v("\n  ")])])},i=[],o=(n(41539),n(54747),n(85550)),c={name:"CodeBar",props:{code:String,title:String},directives:{highlight:{inserted:function(e){var t=e.querySelectorAll("pre code");t.forEach((function(e){o.Z.highlightBlock(e)}))}}}},l=c,a=n(1001),s=(0,a.Z)(l,r,i,!1,null,"63ee0e8e",null),u=s.exports},30791:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"mobileDemo"},[n("CodeBar",{attrs:{code:e.code}}),n("div",{staticClass:"iframeWrapper"},[n("iframe",{attrs:{frameborder:"0",src:e.publicURL+"mobile.html#/page-footer"}})])],1)},i=[],o=n(50370),c=n(25508),l={name:"DemoList",components:{CodeBar:o.Z},data:function(){return{publicURL:c.vF,code:'\n<PageFooter>\n    <Button block round>上一步</Button>\n    <Button block type="primary" round>下一步</Button>\n</PageFooter>\n'}}},a=l,s=n(1001),u=(0,s.Z)(a,r,i,!1,null,null,null),d=u.exports}}]);