import Vue from 'vue'
import App from './App.vue'
import router from './router/mobile'
import '@vant/touch-emulator'

Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#mobile')
