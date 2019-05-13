<template>
  <notifications group="foo" :position="notifyloc" :width="width" :closeOnClick="closeOnClick"/>
</template>
<script>
import { event } from './event.js'
export default {
  name: 'Notify',
  data () {
    return {
      msg: 'hello',
      pageHidden: false,
      notifyloc: 'bottom left',
      width: '200px',
      closeOnClicked: true
    }
  },
  created() {
    let permission = Notification.permission
    if(permission === 'granted'){
      console.log('已经授权通知，可以进行你的通知啦！')
    }else{
      console.log('用户还未授权，请先授权！')
      Notification.requestPermission(permission => {
        console.log('用户是否允许通知： ',permission === 'granted' ? '允许' : '拒绝');
      })
    }
  },
  mounted() {
    event.$on('add', this.showNotify);
    // 判断页面的可见性
    let hidden = '';
    let visibilityChange = '';
    if (typeof document.hidden !== 'undefined') {
      hidden = 'hidden';
      visibilityChange = 'visibilitychange';
    } else if (typeof document.mozHidden !== 'undefined') {
      hidden = 'mozHidden';
      visibilityChange = 'mozvisibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
      hidden = 'msHidden';
      visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
      hidden = 'webkitHidden';
      visibilityChange = 'webkitvisibilitychange';
    }
    document.addEventListener(visibilityChange, () => {
      this.pageHidden = document[hidden];
    });
  },
  methods: {
    showNotify(params) {
      if (params.position) {
        this.notifyloc = params.position
      }
      if (params.width) {
        this.width = params.width
      }
      if (params.closeOnClicked) {
        this.closeOnClicked = params.closeOnClicked
      }
      if (this.pageHidden) {
        let _notify = new Notification(params.title, {
          body: params.text,
          timestamp: 1000,
          requireInteraction: params.closeOnClicked || true
        })
        setTimeout(() => {
          console.log('关闭拉')
          _notify.close()
        }, 2000)
      } else {
        this.$notify({
          group: 'foo',
          title: params.title || '',
          text: params.text || '',
          type: params.type || 'success',
          duration: params.duration || 3000,
          speed: params.speed || 300,
        })
      }
    }
  }
}
</script>
