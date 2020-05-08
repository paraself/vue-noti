<template>
  <div class="container">
    <notifications group="foo" />
    <button @click="noti(0)">Noti Now</button>
    <button @click="noti(3000)">Noti in 3s</button>
    <button @click="noti(0, true)">Force native noti</button>
  </div>
</template>
<script>
import Vue from 'vue'
import Notifications from 'vue-notification'
import VueNoti from '../dist/index'
Vue.use(Notifications)
Vue.use(VueNoti)
export default {
  methods: {
    noti(time = 0, native = false) {
      setTimeout(() => {
        Vue.noti({
          title: '测试通知',
          group: 'foo',
          native
        })
      }, time)
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}
button {
  width: 200px;
  height: 100px;
  margin: 10px;
}
</style>
