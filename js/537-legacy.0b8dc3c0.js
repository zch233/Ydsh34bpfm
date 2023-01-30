"use strict";(self["webpackChunkvue2_cli5"]=self["webpackChunkvue2_cli5"]||[]).push([[537],{22843:function(e,n,t){e.exports=t.p+"img/img1.d7e0c403.png"},57291:function(e,n,t){e.exports=t.p+"img/img2.9af5d92a.png"},87876:function(e,n,t){e.exports=t.p+"img/img3.9e2f41e6.png"},98537:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("section",[o("html",[o("head"),o("body",[o("h2",[e._v("覆盖一个 reactive 对象")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[e._v('<script lang="ts">\nimport { defineComponent, reactive, onMounted } from "vue";\n\nexport default defineComponent({\n  name: "HelloWorld",\n  setup() {\n    let myReactiveObject = reactive({\n      name: "Nicky",\n      age: "37",\n      country: "DK",\n    });\n    let newObject = {\n      name: "Nicky Christensen",\n      age: "36",\n      country: "DA-DK",\n    };\n\n    let myReactiveArray = reactive([1,2,3])\n    let newArray = [1,2,3]\n\n    onMounted(() => {\n      setTimeout(() => {\n        //myReactiveObject = newObject // Wont work\n        Object.assign(myReactiveObject, newObject) // Will work\n\n        //myReactiveArray = newArray // Wont work\n        myReactiveArray.splice(0, myReactiveArray.length, ...newArray) // Will work\n      }, 2000)\n    })\n\n    return {\n      myReactiveObject,\n    };\n  },\n});\n<\/script>\n')])]),o("h2",[e._v("CSS Features")]),o("h4",[e._v("将 CSS 直接绑定到你的变量")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[e._v("// ........\nconst color = ref('#f000');\n<style>\n.text {\n  color: v-bind(color);\n}\n</style>\n")])]),o("h4",[e._v("使用 v-global(缩写:global) 应用全局样式")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[e._v("<style scoped>\n// v-global\n:global(.red) {\n  color: red;\n}\n</style>\n")])]),o("h4",[e._v("使用 v-deep(缩写:deep)")]),o("p",[o("code",{pre:!0},[e._v(">>>")]),e._v(" 和 "),o("code",{pre:!0},[e._v("/deep/")]),e._v(" 已弃用， "),o("code",{pre:!0},[e._v("::v-deep")]),e._v(" 已更变为（"),o("code",{pre:!0},[e._v("::v-deep(.bar) {}")]),e._v(")")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[e._v("<style scoped>\n// .a v-deep(.b) {\n.a :deep(.b) {\n  /* ... */\n}\n</style>\n")])]),o("h3",[e._v("使用 v-slotted(缩写:slotted)")]),o("p",[e._v("默认情况下，从父级传入的槽内容不再受子范围样式的影响。相反，子级现在需要使用新的 ::v-slotted（） 伪元素来专门针对插槽内容：")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[e._v("<style scoped>\n// v-slotted(.b) {\n:slotted(.b) {\n  /* ... */\n}\n</style>\n")])]),o("h2",[e._v("全局注册组件")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[e._v("import MyGlobalSection from '@/components/MyGlobalSection.vue';\n\n// vue2\n// import Vue from 'vue'\n// Vue.component(MyGlobalSection.name, MyGlobalSection);\n\n// vue3\nimport App from \"./App.vue\";\nconst app = createApp(App);\napp.component(MyGlobalSection.name, MyGlobalSection);\napp.mount(\"#app\");\n")])]),o("h2",[e._v("使用 v-once or v-memo 提升性能")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[e._v('// v-once\n<template>\n  \x3c!-- single --\x3e\n  <p v-once>{{ someProperty }}</p>\n  \x3c!-- with children --\x3e\n  <div v-once>\n    <p>{{ someProperty}}</p>\n  </div>\n  \x3c!-- components --\x3e\n  <my-component v-once />\n  \x3c!-- v-for directives --\x3e\n  <li v-for="”item" in items” v-once>{{item}}</li>\n</template>\n')])]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[e._v('// v-memo\n<div v-memo="[valueA, valueB]">\n  ...\n</div>\n')])]),o("blockquote",[o("p",[e._v("只有 valueA or valueB 变更的时候才会更新，值得注意的是，"),o("strong",[e._v("v-memo 不能在 v-for 使用")])])]),o("h2",[e._v("组件的异步加载")]),o("pre",{pre:!0},[o("code",{pre:!0,attrs:{"v-pre":""}},[e._v('import { defineAsyncComponent } from "vue";\n\n// Lazy Load\nconst myComponent = defineAsyncComponent(() =>\n  import("./components/myComponent.vue")\n);\n\n// 完整的配置\nconst myComponent = defineAsyncComponent({\n  loader: () => import("./myComponent.vue"),\n  loadingComponent: myLoadingComponent,\n  errorComponent: myErrorComponent,\n  delay: 1000 /* 延迟时间，在 loading component 之前*/,\n  timeout: 3000 /* 超时时间 */,\n});\n')])]),o("h2",[e._v("浏览器设置，打印结果更加清晰")]),o("img",{attrs:{src:t(22843)}}),e._v(" 修改设置前 "),o("img",{attrs:{src:t(87876)}}),e._v(" 修改设置后，打印结果更加清晰 "),o("img",{attrs:{src:t(57291)}})])])])}],p=t(1001),c={},v=(0,p.Z)(c,o,r,!1,null,null,null),a=v.exports}}]);