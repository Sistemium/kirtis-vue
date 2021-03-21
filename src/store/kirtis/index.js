import mutations from './mutations';
import getters, * as states from './getters';
import actions from './actions';

export default {

  // namespaced: true,

  state: {
    [states.SHORTENINGS]: {},
  },

  mutations,
  actions,
  getters,

};
