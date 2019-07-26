import Vue from 'vue'
import { NotificationOptions } from 'vue-notification'
import notification from './notification'
/**
 * types from vue-notification
 */
export interface NotiOptions extends NotificationOptions {
  /**
   * 通知的主标题
   */
  title: string
  /**
   * 当页面不可见的时候，使用原生通知的时候，点击通知时候的回调
   */
  onClick: () => void
  /**
   * 当页面不可见的时候，使用原生通知的时候，点击通知时候的回调
   */
  onClose: () => void
  /**
   * 是否强制使用native通知
   */
  native?: boolean
}

function noti(options: NotiOptions) {
  // 是否强制使用native 通知
  if (options.native) {
    notification(options)
  }
  // 如果页面可见，则使用vue-notification
  else if (document.visibilityState === 'visible') {
    Vue.notify(options)
  }
  // 如果页面不可见，则使用原生通知
  else {
    notification(options)
  }
}

class VueNoti {
  static install(Vue: Vue) {
    // @ts-ignore
    Vue.prototype.$noti = noti
    // @ts-ignore
    Vue.noti = noti
  }
}

export default VueNoti