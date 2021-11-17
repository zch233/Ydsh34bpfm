import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/elTheme/index.less'
//svg-icon 组件
import installSvgIcon from '@/components/SvgIcon/index.js'
installSvgIcon(Vue)
//el-empty 组件
import empty from './plugins/ElEmpty.vue'
Vue.component('el-empty', empty)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
