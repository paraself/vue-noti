import Vue, { PluginFunction } from 'vue';
import './vue'
export interface Notification {
    title?: string; // 标题
    text?: string; // 文本
    type?: string; // 类型 
    group?: string;
    duration?: number;
    speed?: number;
    closeOnClicked?: boolean;
    width?: string; // 宽度
    position?: string; // 位置
}
declare module 'vue/types/vue' {
  interface Vue {
    $globalnotify: (options: Notification) => void;
  }
  interface VueConstructor {
    globalnotify: (options: Notification) => void;
  }
}
declare function install(vue: typeof Vue, options?: any): void

declare const _default: {
  install: typeof install
}

export default _default