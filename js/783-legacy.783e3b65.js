"use strict";(self["webpackChunkvue2_cli5"]=self["webpackChunkvue2_cli5"]||[]).push([[783],{50370:function(n,e,i){i.d(e,{Z:function(){return u}});var t=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"codeWrapper"},[i("pre",[n._v("    "),n.title?i("span",{staticClass:"title"},[n._v(n._s(n.title))]):n._e(),n._v("\n    "),i("code",[n._v(n._s(n.code))]),n._v("\n  ")])])},l=[],c=(i(41539),i(54747),i(85550)),o={name:"CodeBar",props:{code:String,title:String},directives:{highlight:{inserted:function(n){var e=n.querySelectorAll("pre code");e.forEach((function(n){c.Z.highlightBlock(n)}))}}}},a=o,r=i(1001),s=(0,r.Z)(a,t,l,!1,null,"63ee0e8e",null),u=s.exports},86783:function(n,e,i){i.r(e),i.d(e,{default:function(){return m}});var t=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("section",{staticClass:"mobileDemo"},[i("CodeBar",{attrs:{code:n.code}}),i("div",{staticClass:"iframeWrapper"},[i("iframe",{attrs:{frameborder:"0",src:n.publicURL+"mobile.html#/menu"}})])],1)},l=[],c=i(50370),o=i(25508),a={name:"DemoMenu",components:{CodeBar:c.Z},data:function(){return{publicURL:o.vF,code:"\n<p>正常</p>\n<Menu :menus=\"[\n    {icon: 'setting', label: '设置'},\n    {icon: 'fire', label: '着火'},\n    {icon: 'coupon', label: '优惠券'},\n]\" />\n\n<p>可滑动</p>\n<Menu :menus=\"[\n    {icon: 'setting', label: '设置'},\n    {icon: 'fire', label: '着火'},\n    {icon: 'coupon', label: '优惠券'},\n    {icon: 'cart', label: '购物车'},\n    {icon: 'gem', label: '钻石'},\n    {icon: 'friends', label: '通讯录'},\n    {icon: 'bag', label: '袋子'},\n    {icon: 'comment', label: '消息'},\n    {icon: 'service', label: '客服'},\n]\" />\n\n<p>自定义数量</p>\n<Menu col=\"5\" row=\"1\" :menus=\"[\n    {icon: 'setting', label: '设置'},\n    {icon: 'fire', label: '着火'},\n    {icon: 'coupon', label: '优惠券'},\n    {icon: 'cart', label: '购物车'},\n    {icon: require('@/assets/logo.png'), label: '钻石'},\n    {icon: 'friends', label: '通讯录'},\n    {icon: 'bag', label: '袋子'},\n    {icon: 'comment', label: '消息'},\n    {icon: 'service', label: '客服'},\n]\" />\n\n<p>自定义渲染</p>\n<Menu :menus=\"[\n    {icon: 'setting', customTitle: '设置'},\n    {icon: 'fire', customTitle: '着火'},\n    {icon: 'coupon', customTitle: '优惠券'},\n    {icon: 'cart', customTitle: '购物车'},\n    {icon: 'gem', customTitle: '钻石'},\n    {icon: 'friends', customTitle: '通讯录'},\n    {icon: 'bag', customTitle: '袋子'},\n    {icon: 'comment', customTitle: '消息'},\n    {icon: 'service', customTitle: '客服'},\n]\">\n    <template #default=\"{ item }\">\n        <h2>{{ item.customTitle }}</h2>\n    </template>\n</Menu>\n\n"}}},r=a,s=i(1001),u=(0,s.Z)(r,t,l,!1,null,"e83fbb56",null),m=u.exports}}]);