import Vue from 'vue';
import notification from './notification';
function noti(options) {
    // 是否强制使用native 通知
    if (options.native) {
        notification(options);
    }
    // 如果页面可见，则使用vue-notification
    else if (document.visibilityState === 'visible') {
        Vue.notify(options);
    }
    // 如果页面不可见，则使用原生通知
    else {
        notification(options);
    }
}
var VueNoti = /** @class */ (function () {
    function VueNoti() {
    }
    VueNoti.install = function (Vue) {
        // @ts-ignore
        Vue.prototype.$noti = noti;
        // @ts-ignore
        Vue.noti = noti;
    };
    return VueNoti;
}());
export default VueNoti;
//# sourceMappingURL=index.js.map