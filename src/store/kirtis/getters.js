export const SHORTENINGS = 'SHORTENINGS';
export const SHORTENING_VALUE = 'SHORTENING_VALUE';
export const ACCENTUATION_RESULTS = 'ACCENTUATION_RESULTS';
export const ACCENTUATION_ERROR = 'ACCENTUATION_ERROR';
export const SAVED_WORDS = 'SAVED_WORDS';

export const HISTORY_DRAWER = 'HISTORY_DRAWER';

export default {

  [HISTORY_DRAWER](state) {
    return state[HISTORY_DRAWER];
  },

  [SHORTENINGS](state) {
    return state[SHORTENINGS];
  },

  [SHORTENING_VALUE](state, getters) {
    return id => {
      const item = getters[SHORTENINGS][id];
      return item && `${item.label}: ${item.name}`;
    };
  },

  [ACCENTUATION_RESULTS](state) {
    return state[ACCENTUATION_RESULTS];
  },

  [ACCENTUATION_ERROR](state) {
    return state[ACCENTUATION_ERROR];
  },

  [SAVED_WORDS](state) {
    return state[SAVED_WORDS];
  },

};
