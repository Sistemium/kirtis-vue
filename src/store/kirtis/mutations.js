import * as g from './getters';

export const SET_SHORTENINGS = 'setShortenings';
export const SET_ACCENTUATION_RESULTS = 'SET_ACCENTUATION_RESULTS';
export const SET_ACCENTUATION_ERROR = 'SET_ACCENTUATION_ERROR';

export default {

  [SET_SHORTENINGS](state, value) {
    state[g.SHORTENINGS] = value;
  },

  [SET_ACCENTUATION_RESULTS](state, value) {
    state[g.ACCENTUATION_RESULTS] = value;
  },

  [SET_ACCENTUATION_ERROR](state, value) {
    state[g.ACCENTUATION_ERROR] = value;
  },

};
