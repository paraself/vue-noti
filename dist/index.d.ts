import Vue from 'vue';
import { NotificationOptions } from 'vue-notification';
/**
 * types from vue-notification
 */
export interface NotiOptions extends NotificationOptions {
    /**
     * 通知的主标题
     */
    title: string;
    /**
     * 当页面不可见的时候，使用原生通知的时候，点击通知时候的回调
     */
    onClick: () => void;
    /**
     * 当页面不可见的时候，使用原生通知的时候，点击通知时候的回调
     */
    onClose: () => void;
    /**
     * 是否强制使用native通知
     */
    native?: boolean;
}
declare class VueNoti {
    static install(Vue: Vue): void;
}
export default VueNoti;
