import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
// import { imgerr } from '@/directives'// 自定义指令按需导入
import * as directives from '@/directives' // 将directives中的所有按需导出的指令批量全部注册

import MyUI from '@/components/index'
import moment from 'moment'
import Print from 'vue-print-nb'

Vue.use(Print)

Vue.use(MyUI)
Vue.filter('formatDate', (val, payload) => {
    return moment(val).format(payload)
})

// Vue.directive('imgerr', imgerr)

for (const k in directives) {
    Vue.directive(k, directives[k])
}

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
