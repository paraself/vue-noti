import Notify from './Notify.vue'
import { event } from './event.js'
import Notifications from 'vue-notification'

const MyPlugin = {
  install (Vue, options){
    Vue.use(Notifications)
    Vue.component(Notify.name, Notify)
    Vue.prototype['$' + 'globalnotify'] = (params) => {
      event.$emit('add', params)
    }
  }
};
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(MyPlugin) 
}
export default MyPlugin