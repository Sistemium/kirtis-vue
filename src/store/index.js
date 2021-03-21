import Vue from 'vue';
import Vuex from 'vuex';

import kirtis from './kirtis';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: [kirtis],

});
