# vue-notify-global

> A Vue.js project

## Install

``` bash
# install dependencies
npm install --save vue-notify-global

```
## How to

In main.js:

``` bash
# install dependencies
import Vue from 'vue'
import NotifyGlobal from 'vue-notify-global'

Vue.use(NotifyGlobal)
```
In App.vue

``` bash
# install dependencies
<Notify/>
```
In any of your vue files:

``` bash
this.$globalnotify({
  title: 'Important message',
  text: 'Hello user! This is a notification!'
})
```
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
