import * as g from './getters';

export const SET_SHORTENINGS = 'setShortenings';

export default {

  [SET_SHORTENINGS](state, value) {
    state[g.SHORTENINGS] = value;
  },

};
