"use strict";(self["webpackChunkvue2_cli5"]=self["webpackChunkvue2_cli5"]||[]).push([[16],{48016:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("List",{attrs:{"list-api":t.gitList},on:{refresh:function(e){t.current_page=1}},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return[n("p",[t._v(t._s(i))])]}}])})},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GupoPullRefresh",{staticClass:"list",class:[t.refreshing&&"refreshing"],on:{refresh:t.onRefresh},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[t.empty?n("GupoEmpty",{attrs:{description:t.emptyDescription||"暂无数据"}}):n("GupoList",{attrs:{finished:t.finished,"finished-text":1===t.meta.current_page&&t.finished?"":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"list-header"},[t._t("header")],2),n("div",{staticClass:"list-main"},t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"lis-main-item"},[t._t("default",null,{item:e,index:i,list:t.list})],2)})),0)])],1)},a=[],o=(n(66434),n(76548)),c=n(81526),u="van-empty-network-",l={render:function(){var t=arguments[0],e=function(e,n,i){return t("stop",{attrs:{"stop-color":e,offset:n+"%","stop-opacity":i}})};return t("svg",{attrs:{viewBox:"0 0 160 160",xmlns:"http://www.w3.org/2000/svg"}},[t("defs",[t("linearGradient",{attrs:{id:u+"1",x1:"64.022%",y1:"100%",x2:"64.022%",y2:"0%"}},[e("#FFF",0,.5),e("#F2F3F5",100)]),t("linearGradient",{attrs:{id:u+"2",x1:"50%",y1:"0%",x2:"50%",y2:"84.459%"}},[e("#EBEDF0",0),e("#DCDEE0",100,0)]),t("linearGradient",{attrs:{id:u+"3",x1:"100%",y1:"0%",x2:"100%",y2:"100%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:u+"4",x1:"100%",y1:"100%",x2:"100%",y2:"0%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:u+"5",x1:"0%",y1:"43.982%",x2:"100%",y2:"54.703%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("linearGradient",{attrs:{id:u+"6",x1:"94.535%",y1:"43.837%",x2:"5.465%",y2:"54.948%"}},[e("#EAEDF0",0),e("#DCDEE0",100)]),t("radialGradient",{attrs:{id:u+"7",cx:"50%",cy:"0%",fx:"50%",fy:"0%",r:"100%",gradientTransform:"matrix(0 1 -.54835 0 .5 -.5)"}},[e("#EBEDF0",0),e("#FFF",100,0)])]),t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{opacity:".8"}},[t("path",{attrs:{d:"M0 124V46h20v20h14v58H0z",fill:"url(#"+u+"1)",transform:"matrix(-1 0 0 1 36 7)"}}),t("path",{attrs:{d:"M121 8h22.231v14H152v77.37h-31V8z",fill:"url(#"+u+"1)",transform:"translate(2 7)"}})]),t("path",{attrs:{fill:"url(#"+u+"7)",d:"M0 139h160v21H0z"}}),t("path",{attrs:{d:"M37 18a7 7 0 013 13.326v26.742c0 1.23-.997 2.227-2.227 2.227h-1.546A2.227 2.227 0 0134 58.068V31.326A7 7 0 0137 18z",fill:"url(#"+u+"2)","fill-rule":"nonzero",transform:"translate(43 36)"}}),t("g",{attrs:{opacity:".6","stroke-linecap":"round","stroke-width":"7"}},[t("path",{attrs:{d:"M20.875 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#"+u+"3)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M9.849 0C3.756 6.225 0 14.747 0 24.146c0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#"+u+"3)",transform:"translate(43 36)"}}),t("path",{attrs:{d:"M57.625 11.136a18.868 18.868 0 00-5.284 13.121c0 5.094 2.012 9.718 5.284 13.12",stroke:"url(#"+u+"4)",transform:"rotate(-180 76.483 42.257)"}}),t("path",{attrs:{d:"M73.216 0c-6.093 6.225-9.849 14.747-9.849 24.146 0 9.398 3.756 17.92 9.849 24.145",stroke:"url(#"+u+"4)",transform:"rotate(-180 89.791 42.146)"}})]),t("g",{attrs:{transform:"translate(31 105)","fill-rule":"nonzero"}},[t("rect",{attrs:{fill:"url(#"+u+"5)",width:"98",height:"34",rx:"2"}}),t("rect",{attrs:{fill:"#FFF",x:"9",y:"8",width:"80",height:"18",rx:"1.114"}}),t("rect",{attrs:{fill:"url(#"+u+"6)",x:"15",y:"12",width:"18",height:"6",rx:"1.114"}})])])])}},h=(0,o.d)("empty"),d=h[0],f=h[1],p=["error","search","default"],g=d({props:{imageSize:[Number,String],description:String,image:{type:String,default:"default"}},methods:{genImageContent:function(){var t=this.$createElement,e=this.slots("image");if(e)return e;if("network"===this.image)return t(l);var n=this.image;return-1!==p.indexOf(n)&&(n="https://img01.yzcdn.cn/vant/empty-image-"+n+".png"),t("img",{attrs:{src:n}})},genImage:function(){var t=this.$createElement,e={width:(0,c.N)(this.imageSize),height:(0,c.N)(this.imageSize)};return t("div",{class:f("image"),style:e},[this.genImageContent()])},genDescription:function(){var t=this.$createElement,e=this.slots("description")||this.description;if(e)return t("p",{class:f("description")},[e])},genBottom:function(){var t=this.$createElement,e=this.slots();if(e)return t("div",{class:f("bottom")},[e])}},render:function(){var t=arguments[0];return t("div",{class:f()},[this.genImage(),this.genDescription(),this.genBottom()])}}),v=(n(95802),n(26288));var m=/scroll|auto/i;function y(t,e){void 0===e&&(e=window);var n=t;while(n&&"HTML"!==n.tagName&&"BODY"!==n.tagName&&1===n.nodeType&&n!==e){var i=window.getComputedStyle(n),r=i.overflowY;if(m.test(r))return n;n=n.parentNode}return e}function x(t){var e="scrollTop"in t?t.scrollTop:t.pageYOffset;return Math.max(e,0)}var S=n(11899),E=n(9085),b=(0,o.d)("list"),k=b[0],w=b[1],T=b[2],D=k({mixins:[(0,S.X)((function(t){this.scroller||(this.scroller=y(this.$el)),t(this.scroller,"scroll",this.check)}))],model:{prop:"loading"},props:{error:Boolean,loading:Boolean,finished:Boolean,errorText:String,loadingText:String,finishedText:String,immediateCheck:{type:Boolean,default:!0},offset:{type:[Number,String],default:300},direction:{type:String,default:"down"}},data:function(){return{innerLoading:this.loading}},updated:function(){this.innerLoading=this.loading},mounted:function(){this.immediateCheck&&this.check()},watch:{loading:"check",finished:"check"},methods:{check:function(){var t=this;this.$nextTick((function(){if(!(t.innerLoading||t.finished||t.error)){var e,n=t.$el,i=t.scroller,r=t.offset,s=t.direction;e=i.getBoundingClientRect?i.getBoundingClientRect():{top:0,bottom:i.innerHeight};var a=e.bottom-e.top;if(!a||(0,v.x)(n))return!1;var o=!1,c=t.$refs.placeholder.getBoundingClientRect();o="up"===s?e.top-c.top<=r:c.bottom-e.bottom<=r,o&&(t.innerLoading=!0,t.$emit("input",!0),t.$emit("load"))}}))},clickErrorText:function(){this.$emit("update:error",!1),this.check()},genLoading:function(){var t=this.$createElement;if(this.innerLoading&&!this.finished)return t("div",{key:"loading",class:w("loading")},[this.slots("loading")||t(E.Z,{attrs:{size:"16"}},[this.loadingText||T("loading")])])},genFinishedText:function(){var t=this.$createElement;if(this.finished){var e=this.slots("finished")||this.finishedText;if(e)return t("div",{class:w("finished-text")},[e])}},genErrorText:function(){var t=this.$createElement;if(this.error){var e=this.slots("error")||this.errorText;if(e)return t("div",{on:{click:this.clickErrorText},class:w("error-text")},[e])}}},render:function(){var t=arguments[0],e=t("div",{ref:"placeholder",key:"placeholder",class:w("placeholder")});return t("div",{class:w(),attrs:{role:"feed","aria-busy":this.innerLoading}},["down"===this.direction?this.slots():e,this.genLoading(),this.genFinishedText(),this.genErrorText(),"up"===this.direction?this.slots():e])}}),C=n(11210),$=n(78147),L=(0,o.d)("pull-refresh"),_=L[0],O=L[1],F=L[2],z=50,A=["pulling","loosing","success"],P=_({mixins:[$.D],props:{disabled:Boolean,successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:[Number,String],value:{type:Boolean,required:!0},successDuration:{type:[Number,String],default:500},animationDuration:{type:[Number,String],default:300},headHeight:{type:[Number,String],default:z}},data:function(){return{status:"normal",distance:0,duration:0}},computed:{touchable:function(){return"loading"!==this.status&&"success"!==this.status&&!this.disabled},headStyle:function(){if(this.headHeight!==z)return{height:this.headHeight+"px"}}},watch:{value:function(t){this.duration=this.animationDuration,t?this.setStatus(+this.headHeight,!0):this.slots("success")||this.successText?this.showSuccessTip():this.setStatus(0,!1)}},mounted:function(){this.bindTouchEvent(this.$refs.track),this.scrollEl=y(this.$el)},methods:{checkPullStart:function(t){this.ceiling=0===x(this.scrollEl),this.ceiling&&(this.duration=0,this.touchStart(t))},onTouchStart:function(t){this.touchable&&this.checkPullStart(t)},onTouchMove:function(t){this.touchable&&(this.ceiling||this.checkPullStart(t),this.touchMove(t),this.ceiling&&this.deltaY>=0&&"vertical"===this.direction&&((0,C.PF)(t),this.setStatus(this.ease(this.deltaY))))},onTouchEnd:function(){var t=this;this.touchable&&this.ceiling&&this.deltaY&&(this.duration=this.animationDuration,"loosing"===this.status?(this.setStatus(+this.headHeight,!0),this.$emit("input",!0),this.$nextTick((function(){t.$emit("refresh")}))):this.setStatus(0))},ease:function(t){var e=+(this.pullDistance||this.headHeight);return t>e&&(t=t<2*e?e+(t-e)/2:1.5*e+(t-2*e)/4),Math.round(t)},setStatus:function(t,e){var n;n=e?"loading":0===t?"normal":t<(this.pullDistance||this.headHeight)?"pulling":"loosing",this.distance=t,n!==this.status&&(this.status=n)},genStatus:function(){var t=this.$createElement,e=this.status,n=this.distance,i=this.slots(e,{distance:n});if(i)return i;var r=[],s=this[e+"Text"]||F(e);return-1!==A.indexOf(e)&&r.push(t("div",{class:O("text")},[s])),"loading"===e&&r.push(t(E.Z,{attrs:{size:"16"}},[s])),r},showSuccessTip:function(){var t=this;this.status="success",setTimeout((function(){t.setStatus(0)}),this.successDuration)}},render:function(){var t=arguments[0],e={transitionDuration:this.duration+"ms",transform:this.distance?"translate3d(0,"+this.distance+"px, 0)":""};return t("div",{class:O()},[t("div",{ref:"track",class:O("track"),style:e},[t("div",{class:O("head"),style:this.headStyle},[this.genStatus()]),this.slots()])])}});const N={current_page:1,last_page:1,per_page:15};var M={name:"List",props:{listApi:{type:Function,required:!0},extraParams:Object,pageNames:{type:Object,default:()=>({page:"page",size:"size"})},emptyDescription:String},components:{GupoPullRefresh:P,GupoList:D,GupoEmpty:g},data(){return{empty:!1,refreshing:!1,loading:!1,finished:!1,list:[],meta:{...N}}},methods:{async init(){this.meta={...N},this.refreshing=!0,this.empty=!1,this.loading=!0,this.finished=!1,await this.onLoad()},onRefresh(){this.$emit("refresh"),this.init().finally((()=>this.refreshing=!1))},async onLoad(){this.loading=!0,await this.getList(),this.loading=!1,this.meta.current_page>=this.meta.last_page?this.finished=!0:(this.finished=!1,this.meta.current_page+=1),this.$emit("list",this.list)},async getList(){const{data:t,meta:e}=await this.listApi({[this.pageNames.page]:this.meta.current_page,[this.pageNames.size]:this.meta.per_page,...this.extraParams});this.empty=1===e.current_page&&0===t.length&&!this.$scopedSlots.header,this.list=[...this.refreshing?[]:this.list,...t],this.meta=e}}},B=M,X=n(1001),Y=(0,X.Z)(B,s,a,!1,null,null,null),j=Y.exports;let G=3;var H={name:"DemoList",components:{List:j},data(){return{current_page:1}},methods:{gitList(){return new Promise((t=>{setTimeout((()=>{t({data:[...Array(20).keys()],meta:{current_page:this.current_page++,last_page:G}})}),2e3)}))}}},R=H,I=(0,X.Z)(R,i,r,!1,null,"7b7f6739",null),Z=I.exports},95802:function(){},66434:function(){},162:function(t){function e(){return e=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},e.apply(this,arguments)}var n=["attrs","props","domProps"],i=["class","style","directives"],r=["on","nativeOn"],s=function(t){return t.reduce((function(t,s){for(var o in s)if(t[o])if(-1!==n.indexOf(o))t[o]=e({},t[o],s[o]);else if(-1!==i.indexOf(o)){var c=t[o]instanceof Array?t[o]:[t[o]],u=s[o]instanceof Array?s[o]:[s[o]];t[o]=c.concat(u)}else if(-1!==r.indexOf(o))for(var l in s[o])if(t[o][l]){var h=t[o][l]instanceof Array?t[o][l]:[t[o][l]],d=s[o][l]instanceof Array?s[o][l]:[s[o][l]];t[o][l]=h.concat(d)}else t[o][l]=s[o][l];else if("hook"==o)for(var f in s[o])t[o][f]=t[o][f]?a(t[o][f],s[o][f]):s[o][f];else t[o]=s[o];else t[o]=s[o];return t}),{})},a=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=s},9085:function(t,e,n){var i=n(162),r=n.n(i),s=n(76548),a=n(81526),o=n(92223),c=(0,s.d)("loading"),u=c[0],l=c[1];function h(t,e){if("spinner"===e.type){for(var n=[],i=0;i<12;i++)n.push(t("i"));return n}return t("svg",{class:l("circular"),attrs:{viewBox:"25 25 50 50"}},[t("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])}function d(t,e,n){if(n.default){var i,r={fontSize:(0,a.N)(e.textSize),color:null!=(i=e.textColor)?i:e.color};return t("span",{class:l("text"),style:r},[n.default()])}}function f(t,e,n,i){var s=e.color,c=e.size,u=e.type,f={color:s};if(c){var p=(0,a.N)(c);f.width=p,f.height=p}return t("div",r()([{class:l([u,{vertical:e.vertical}])},(0,o.ED)(i,!0)]),[t("span",{class:l("spinner",u),style:f},[h(t,e)]),d(t,e,n)])}f.props={color:String,size:[Number,String],vertical:Boolean,textSize:[Number,String],textColor:String,type:{type:String,default:"circular"}},e["Z"]=u(f)},11899:function(t,e,n){n.d(e,{X:function(){return s}});var i=n(11210),r=0;function s(t){var e="binded_"+r++;function n(){this[e]||(t.call(this,i.on,!0),this[e]=!0)}function s(){this[e]&&(t.call(this,i.S1,!1),this[e]=!1)}return{mounted:n,activated:n,deactivated:s,beforeDestroy:s}}},78147:function(t,e,n){n.d(e,{D:function(){return s}});var i=n(11210);function r(t,e){return t>e?"horizontal":e>t?"vertical":""}var s={data:function(){return{direction:""}},methods:{touchStart:function(t){this.resetTouchStatus(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY},touchMove:function(t){var e=t.touches[0];this.deltaX=e.clientX<0?0:e.clientX-this.startX,this.deltaY=e.clientY-this.startY,this.offsetX=Math.abs(this.deltaX),this.offsetY=Math.abs(this.deltaY);var n=10;(!this.direction||this.offsetX<n&&this.offsetY<n)&&(this.direction=r(this.offsetX,this.offsetY))},resetTouchStatus:function(){this.direction="",this.deltaX=0,this.deltaY=0,this.offsetX=0,this.offsetY=0},bindTouchEvent:function(t){var e=this.onTouchStart,n=this.onTouchMove,r=this.onTouchEnd;(0,i.on)(t,"touchstart",e),(0,i.on)(t,"touchmove",n),r&&((0,i.on)(t,"touchend",r),(0,i.on)(t,"touchcancel",r))}}}},76548:function(t,e,n){function i(t,e){return e?"string"===typeof e?" "+t+"--"+e:Array.isArray(e)?e.reduce((function(e,n){return e+i(t,n)}),""):Object.keys(e).reduce((function(n,r){return n+(e[r]?i(t,r):"")}),""):""}function r(t){return function(e,n){return e&&"string"!==typeof e&&(n=e,e=""),e=e?t+"__"+e:t,""+e+i(e,n)}}n.d(e,{d:function(){return b}});var s=n(99402),a=/-(\w)/g;function o(t){return t.replace(a,(function(t,e){return e.toUpperCase()}))}var c={methods:{slots:function(t,e){void 0===t&&(t="default");var n=this.$slots,i=this.$scopedSlots,r=i[t];return r?r(e):n[t]}}};function u(t){var e=this.name;t.component(e,this),t.component(o("-"+e),this)}function l(t){var e=t.scopedSlots||t.data.scopedSlots||{},n=t.slots();return Object.keys(n).forEach((function(t){e[t]||(e[t]=function(){return n[t]})})),e}function h(t){return{functional:!0,props:t.props,model:t.model,render:function(e,n){return t(e,n.props,l(n),n)}}}function d(t){return function(e){return(0,s.mf)(e)&&(e=h(e)),e.functional||(e.mixins=e.mixins||[],e.mixins.push(c)),e.name=t,e.install=u,e}}var f=n(28935),p=Object.prototype.hasOwnProperty;function g(t,e,n){var i=e[n];(0,s.Xq)(i)&&(p.call(t,n)&&(0,s.Kn)(i)?t[n]=v(Object(t[n]),e[n]):t[n]=i)}function v(t,e){return Object.keys(e).forEach((function(n){g(t,e,n)})),t}var m={name:"姓名",tel:"电话",save:"保存",confirm:"确认",cancel:"取消",delete:"删除",complete:"完成",loading:"加载中...",telEmpty:"请填写电话",nameEmpty:"请填写姓名",nameInvalid:"请输入正确的姓名",confirmDelete:"确定要删除吗",telInvalid:"请输入正确的手机号",vanCalendar:{end:"结束",start:"开始",title:"日期选择",confirm:"确定",startEnd:"开始/结束",weekdays:["日","一","二","三","四","五","六"],monthTitle:function(t,e){return t+"年"+e+"月"},rangePrompt:function(t){return"选择天数不能超过 "+t+" 天"}},vanCascader:{select:"请选择"},vanContactCard:{addText:"添加联系人"},vanContactList:{addText:"新建联系人"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计："},vanCoupon:{unlimited:"无使用门槛",discount:function(t){return t+"折"},condition:function(t){return"满"+t+"元可用"}},vanCouponCell:{title:"优惠券",tips:"暂无可用",count:function(t){return t+"张可用"}},vanCouponList:{empty:"暂无优惠券",exchange:"兑换",close:"不使用优惠券",enable:"可用",disabled:"不可用",placeholder:"请输入优惠码"},vanAddressEdit:{area:"地区",postal:"邮政编码",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",postalEmpty:"邮政编码格式不正确",defaultAddress:"设为默认收货地址",telPlaceholder:"收货人手机号",namePlaceholder:"收货人姓名",areaPlaceholder:"选择省 / 市 / 区"},vanAddressEditDetail:{label:"详细地址",placeholder:"街道门牌、楼层房间号等信息"},vanAddressList:{add:"新增地址"}},y=f["default"].prototype,x=f["default"].util.defineReactive;x(y,"$vantLang","zh-CN"),x(y,"$vantMessages",{"zh-CN":m});var S={messages:function(){return y.$vantMessages[y.$vantLang]},use:function(t,e){var n;y.$vantLang=t,this.add((n={},n[t]=e,n))},add:function(t){void 0===t&&(t={}),v(y.$vantMessages,t)}};function E(t){var e=o(t)+".";return function(t){for(var n=S.messages(),i=(0,s.U2)(n,e+t)||(0,s.U2)(n,t),r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];return(0,s.mf)(i)?i.apply(void 0,a):i}}function b(t){return t="van-"+t,[d(t),r(t),E(t)]}},11210:function(t,e,n){n.d(e,{PF:function(){return u},S1:function(){return o},on:function(){return a}});var i=n(99402),r=!1;if(!i.sk)try{var s={};Object.defineProperty(s,"passive",{get:function(){r=!0}}),window.addEventListener("test-passive",null,s)}catch(l){}function a(t,e,n,s){void 0===s&&(s=!1),i.sk||t.addEventListener(e,n,!!r&&{capture:!1,passive:s})}function o(t,e,n){i.sk||t.removeEventListener(e,n)}function c(t){t.stopPropagation()}function u(t,e){("boolean"!==typeof t.cancelable||t.cancelable)&&t.preventDefault(),e&&c(t)}},26288:function(t,e,n){function i(t){var e=window.getComputedStyle(t),n="none"===e.display,i=null===t.offsetParent&&"fixed"!==e.position;return n||i}n.d(e,{x:function(){return i}})},81526:function(t,e,n){n.d(e,{N:function(){return s}});var i=n(99402);function r(t){return/^\d+(\.\d+)?$/.test(t)}function s(t){if((0,i.Xq)(t))return t=String(t),r(t)?t+"px":t}},92223:function(t,e,n){n.d(e,{ED:function(){return a},j8:function(){return o}});var i=n(6885),r=["ref","key","style","class","attrs","refInFor","nativeOn","directives","staticClass","staticStyle"],s={nativeOn:"on"};function a(t,e){var n=r.reduce((function(e,n){return t.data[n]&&(e[s[n]||n]=t.data[n]),e}),{});return e&&(n.on=n.on||{},(0,i.Z)(n.on,t.data.on)),n}function o(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var s=t.listeners[e];s&&(Array.isArray(s)?s.forEach((function(t){t.apply(void 0,i)})):s.apply(void 0,i))}},99402:function(t,e,n){n.d(e,{Kn:function(){return o},U2:function(){return c},Xq:function(){return s},mf:function(){return a},sk:function(){return r}});var i=n(28935),r=i["default"].prototype.$isServer;function s(t){return void 0!==t&&null!==t}function a(t){return"function"===typeof t}function o(t){return null!==t&&"object"===typeof t}function c(t,e){var n=e.split("."),i=t;return n.forEach((function(t){var e;i=null!=(e=i[t])?e:""})),i}},6885:function(t,e,n){function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},i.apply(this,arguments)}n.d(e,{Z:function(){return i}})}}]);