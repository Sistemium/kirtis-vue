import take from 'lodash/take';

import * as g from './getters';

export const SET_SHORTENINGS = 'setShortenings';
export const SET_ACCENTUATION_RESULTS = 'SET_ACCENTUATION_RESULTS';
export const SET_ACCENTUATION_ERROR = 'SET_ACCENTUATION_ERROR';
export const SET_SAVED_WORDS = 'SET_SAVED_WORDS';

export const SET_HISTORY_DRAWER = 'SET_HISTORY_DRAWER';

export default {

  [SET_HISTORY_DRAWER](state, value) {
    state[g.HISTORY_DRAWER] = value;
  },

  [SET_SHORTENINGS](state, value) {
    state[g.SHORTENINGS] = value;
  },

  [SET_ACCENTUATION_RESULTS](state, value) {
    state[g.ACCENTUATION_RESULTS] = value;
  },

  [SET_ACCENTUATION_ERROR](state, value) {
    state[g.ACCENTUATION_ERROR] = value;
  },

  [SET_SAVED_WORDS](state, value) {
    state[g.SAVED_WORDS] = take(value, 20);
  },

};
