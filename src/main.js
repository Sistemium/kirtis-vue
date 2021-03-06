import Vue from 'vue';
// import VueCompositionAPI from '@vue/composition-api';
// import { sync } from 'vuex-router-sync';

import './lib/element-ui';
import './lib/debug';
import './lib/sistemium';

import './index.scss';
import 'sistemium-vue/styles/responsive.scss';
import './registerServiceWorker';

import router from './router';
import store from './store';
import App from './App.vue';

// sync(store, router);
Vue.config.productionTip = false;
// Vue.use(VueCompositionAPI);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.dispatch('loadShortenings')
      .catch(e => this.$error(e));
  },
}).$mount('#app');
