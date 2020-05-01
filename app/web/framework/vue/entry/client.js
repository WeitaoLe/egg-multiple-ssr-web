import Vue from 'vue';
import '../filter';
import '../directive';
import '../component';
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  // error: '..//error.png',
  loading: '/public/img/loading.gif'
});
export default function (options) {

  Vue.prototype.$http = require('axios');
  if (options.store) {
    options.store.replaceState(Object.assign({}, window.__INITIAL_STATE__, options.store.state));
  } else if (window.__INITIAL_STATE__) {
    options.data = Object.assign(window.__INITIAL_STATE__, options.data && options.data());
  }
  const app = new Vue(options);
  app.$mount('#app');
}