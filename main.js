import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false
Vue.prototype.serverUrl="https://www.easy-mock.com/mock/5d23196bc82b64425ab76427/dance"
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
