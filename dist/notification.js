// 封装原生的通知 api
var n;
function notify(options) {
    // @ts-ignore
    if (!window.Notification) {
        // eslint-disable-next-line
        console.error('Browser does not support notification api');
        return;
    }
    // eslint-disable-next-line
    Promise.resolve(Notification.permission === "granted")
        .then(function (perm) {
        if (!perm) {
            return new Promise(function (resolve, reject) {
                Notification.requestPermission(function (status) {
                    if (status === 'granted') {
                        resolve();
                    }
                    else {
                        reject('User does not grant permission!');
                    }
                });
            });
        }
        else {
            return Promise.resolve();
        }
    })
        // 拿到权限
        .then(function () {
        n = new Notification(options.title, {
            body: options.text,
        });
        if (options.onClick) {
            n.onclick = options.onClick;
        }
        if (options.onClose) {
            n.onclose = options.onClose;
        }
        n.onerror = function (err) {
            // eslint-disable-next-line
            console.error(options);
            // eslint-disable-next-line
            console.error(err);
        };
    })
        .catch(function (err) {
        // eslint-disable-next-line
        console.error(err);
    });
}
export default notify;
//# sourceMappingURL=notification.js.map