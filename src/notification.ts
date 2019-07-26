// 封装原生的通知 api

interface IOptions {
  title: string;
  text?: string;
  group?: string;
  onClick?: () => void
  onClose?: () => void
}

let n: Notification

function notify(options: IOptions) {
  // @ts-ignore
  if (!window.Notification) {
    // eslint-disable-next-line
    console.error('Browser does not support notification api')
    return
  }
  // eslint-disable-next-line
  Promise.resolve(Notification.permission === "granted")
    .then(perm => {
      if (!perm) {
        return new Promise((resolve, reject) => {
          Notification.requestPermission(function (status) {
            if (status === 'granted') {
              resolve()
            } else {
              reject('User does not grant permission!')
            }
          })
        })
      } else {
        return Promise.resolve()
      }
    })
    // 拿到权限
    .then(() => {
      n = new Notification(options.title, {
        body: options.text,
        // tag: options.group || String(Date.now()),
      })
      if (options.onClick) {
        n.onclick = options.onClick
      }
      if (options.onClose) {
        n.onclose = options.onClose
      }
      n.onerror = function (err) {
        // eslint-disable-next-line
        console.error(options);
        // eslint-disable-next-line
        console.error(err)
      }
    })
    .catch(err => {
      // eslint-disable-next-line
      console.error(err)
    })
}

export default notify
