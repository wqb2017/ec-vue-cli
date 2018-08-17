// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/index.css';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import components from './components';
import * as directives from './directives';
import * as filters from './filters';
import * as mixins from './mixins';
// 全局组件
Object.keys(components).forEach(key => {
  Vue.component(key, components[key]);
});
// 引入全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
// 引入全局指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});
// 引入全局mixins
Object.keys(mixins).forEach(key => {
  Vue.mixin(mixins[key]);
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
