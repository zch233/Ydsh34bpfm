"use strict";(self["webpackChunkvue2_cli5"]=self["webpackChunkvue2_cli5"]||[]).push([[757],{948:function(n,e,t){t.d(e,{Z:function(){return u}});var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"codeWrapper"},[t("pre",[n._v("    "),n.title?t("span",{staticClass:"title"},[n._v(n._s(n.title))]):n._e(),n._v("\n    "),t("code",[n._v(n._s(n.code))]),n._v("\n  ")])])},l=[],c=t(5550),o={name:"CodeBar",props:{code:String,title:String},directives:{highlight:{inserted:function(n){let e=n.querySelectorAll("pre code");e.forEach((n=>{c.Z.highlightBlock(n)}))}}}},a=o,r=t(1001),s=(0,r.Z)(a,i,l,!1,null,"53a18800",null),u=s.exports},3757:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"demo"},[t("CodeBar",{attrs:{code:n.code}}),n._m(0)],1)},l=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"iframeWrapper"},[t("iframe",{attrs:{frameborder:"0",src:"/mobile.html/#/menu"}})])}],c=t(948),o={name:"DemoMenu",components:{CodeBar:c.Z},data(){return{code:"\n<p>正常</p>\n<Menu :menus=\"[\n    {icon: 'setting', label: '设置'},\n    {icon: 'fire', label: '着火'},\n    {icon: 'coupon', label: '优惠券'},\n]\" />\n\n<p>可滑动</p>\n<Menu :menus=\"[\n    {icon: 'setting', label: '设置'},\n    {icon: 'fire', label: '着火'},\n    {icon: 'coupon', label: '优惠券'},\n    {icon: 'cart', label: '购物车'},\n    {icon: 'gem', label: '钻石'},\n    {icon: 'friends', label: '通讯录'},\n    {icon: 'bag', label: '袋子'},\n    {icon: 'comment', label: '消息'},\n    {icon: 'service', label: '客服'},\n]\" />\n\n<p>自定义数量</p>\n<Menu col=\"5\" row=\"1\" :menus=\"[\n    {icon: 'setting', label: '设置'},\n    {icon: 'fire', label: '着火'},\n    {icon: 'coupon', label: '优惠券'},\n    {icon: 'cart', label: '购物车'},\n    {icon: require('@/assets/logo.png'), label: '钻石'},\n    {icon: 'friends', label: '通讯录'},\n    {icon: 'bag', label: '袋子'},\n    {icon: 'comment', label: '消息'},\n    {icon: 'service', label: '客服'},\n]\" />\n\n<p>自定义渲染</p>\n<Menu :menus=\"[\n    {icon: 'setting', customTitle: '设置'},\n    {icon: 'fire', customTitle: '着火'},\n    {icon: 'coupon', customTitle: '优惠券'},\n    {icon: 'cart', customTitle: '购物车'},\n    {icon: 'gem', customTitle: '钻石'},\n    {icon: 'friends', customTitle: '通讯录'},\n    {icon: 'bag', customTitle: '袋子'},\n    {icon: 'comment', customTitle: '消息'},\n    {icon: 'service', customTitle: '客服'},\n]\">\n    <template #default=\"{ item }\">\n        <h2>{{ item.customTitle }}</h2>\n    </template>\n</Menu>\n\n"}}},a=o,r=t(1001),s=(0,r.Z)(a,i,l,!1,null,"91b9aafa",null),u=s.exports}}]);