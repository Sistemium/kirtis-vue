import Vue from 'vue';

import './lib/element-ui';
import './lib/debug';
import './lib/sistemium';

import './index.scss';
import 'sistemium-vue/styles/responsive.scss';
import './registerServiceWorker';

import router from './router';
import store from './store';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
