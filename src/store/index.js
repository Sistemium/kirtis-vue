import Vue from 'vue';
import Vuex from 'vuex';
import sharedMutations from 'vuex-shared-mutations';

import kirtis from './kirtis';

Vue.use(Vuex);

export default new Vuex.Store({

  modules: [kirtis],
  plugins: [sharedMutations({ predicate: ['SET_SAVED_WORDS'] })],

});
