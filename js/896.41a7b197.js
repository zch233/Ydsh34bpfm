"use strict";(self["webpackChunkvue2_cli5"]=self["webpackChunkvue2_cli5"]||[]).push([[896],{28896:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("SignaturePad",{ref:"signaturePad",attrs:{showTip:""}}),s("button",{on:{click:t.overwrite}},[t._v("重写")]),s("button",{on:{click:t.download}},[t._v("下载")])],1)},i=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signaturePad"},[s("div",{ref:"canvasWrapper",staticClass:"signaturePad-canvasBox"},[t.showTip?s("p",{staticClass:"signaturePad-canvasBox-title"},[t._v(t._s(t.tipText||"请在框内手写您的姓名"))]):t._e(),s("canvas",{ref:"myCanvas",on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}})])])},r=[],o={name:"SignaturePad",props:{showTip:Boolean,tipText:String},data(){return{points:[],canvasTxt:null,startX:0,startY:0,moveY:0,moveX:0,endY:0,endX:0,w:null,h:null,isDown:!1,color:"#000",lineWidth:3,isDraw:!1}},mounted(){let t=this.$refs.myCanvas;t.height=this.$refs.canvasWrapper.offsetHeight-10,t.width=this.$refs.canvasWrapper.offsetWidth-10,this.canvasTxt=t.getContext("2d"),this.canvasTxt.strokeStyle=this.color,this.canvasTxt.lineWidth=this.lineWidth},methods:{touchStart(t){if(t.preventDefault(),1===t.touches.length){this.isDraw=!0;let e=t.targetTouches[0].clientX-t.target.offsetLeft,s=t.targetTouches[0].clientY-t.target.offsetTop;this.startX=e,this.startY=s,this.canvasTxt.beginPath(),this.points.push(e,s)}},touchMove(t){if(t.preventDefault(),1===t.touches.length){let e=t.targetTouches[0].clientX-t.target.offsetLeft,s=t.targetTouches[0].clientY-t.target.offsetTop;this.moveY=s,this.moveX=e,this.canvasTxt.moveTo(this.startX,this.startY),this.canvasTxt.lineTo(e,s),this.canvasTxt.stroke(),this.startY=s,this.startX=e,this.points.push(e,s)}},touchEnd(t){if(t.preventDefault(),1===t.touches.length){let e=t.targetTouches[0].clientX-t.target.offsetLeft,s=t.targetTouches[0].clientY-t.target.offsetTop;this.canvasTxt.closePath(),this.points.push(e,s),this.points.push({x:-1,y:-1})}},overwrite(){this.canvasTxt.clearRect(0,0,this.$refs.myCanvas.width,this.$refs.myCanvas.height),this.points=[],this.isDraw=!1},surewrite(){if(!this.isDraw)return alert({message:"签名不能为空"});this.$emit("confirm",this.$refs.myCanvas)},async generate(){return this.$refs.myCanvas}}},h=o,c=s(1001),u=(0,c.Z)(h,n,r,!1,null,"e170bcd2",null),l=u.exports,f=s(50476),v={name:"DemoSignaturePad",components:{SignaturePad:l},methods:{overwrite(){f.log(this.$refs.signaturePad),this.$refs.signaturePad.overwrite()},async download(){const t=await this.$refs.signaturePad.generate(),e=document.createElement("a");e.href=t.toDataURL(),e.download=name,e.click()}}},d=v,g=(0,c.Z)(d,a,i,!1,null,null,null),p=g.exports}}]);