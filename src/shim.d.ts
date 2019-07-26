import { NotificationOptions } from 'vue-notification';

declare module 'vue/types/vue' {
  interface Vue {
      $noti: (options: NotificationOptions) => void;
  }
  interface VueConstructor {
      noti: (options: NotificationOptions) => void;
  }
  interface Vue {
    $notify: (options: NotificationOptions | string) => void;
  }
  interface VueConstructor {
      notify: (options: NotificationOptions | string) => void;
  }
}
