// 注册全局组件的js模块
// 这个模块需要导出一个对象或者函数 ： 如果插件是一个对象，必须提供install方法，如果导出的是一个函数，则把这个函数视作install方法
// install 方法在调用时，会将Vue作为参数传入
import PageTools from './PageTools'
import UploadExcel from './UploadExcel'
import UploadImage from './UploadImage'

export default {
  install(Vue) {
    Vue.component(PageTools.name, PageTools)
    Vue.component(UploadExcel.name, UploadExcel)
    Vue.component(UploadImage.name, UploadImage)
  }
}
// export default function() {}
