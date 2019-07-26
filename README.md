# vue-noti
A Vue Notification plugin which fallback to web notification api when page visibility is off.

**install**
Make sure you have both ``vue`` and ``vue-notification`` as peer dependencies.

Init both ``vue-notification`` and ``vue-noti``

``` javascript
  import Vue from 'vue'
  import Notifications from 'vue-notification'
  import VueNoti from 'vue-noti'
  Vue.use(Notifications)
  Vue.use(VueNoti)
```

In App.vue:

```
<notifications group="foo" />
```

Head to [vue-notification](https://www.npmjs.com/package/vue-notification) for a detailed documentation on how to config the notification component.

**Usage**

In any of you vue script file, 

```javascript
this.$noti({
  group: 'foo',
  title: 'Important message',
  text: 'Hello user! This is a notification!'
})
```

You can sue ```Vue.notify``` as well.

**Test**

To run the example, you have make sure  ```@vue/cli-service-global``` is installed globally. If you don't know how to do it, refer to [Vue Instant Prototyping](https://cli.vuejs.org/guide/prototyping.html) to see how to config the environment.

Then just run ```npm run test``` to make the example working.