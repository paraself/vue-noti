import Vue from 'vue'
import App from './App.vue'
import MyPlugin from '../dist/notify'
Vue.use(MyPlugin)
new Vue({
  el: '#app',
  render: h => h(App)
})
