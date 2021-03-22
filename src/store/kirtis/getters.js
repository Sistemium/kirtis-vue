export const SHORTENINGS = 'shortenings';
export const SHORTENING_VALUE = 'shorteningValue';
export const ACCENTUATION_RESULTS = 'ACCENTUATION_RESULTS';
export const ACCENTUATION_ERROR = 'ACCENTUATION_ERROR';

export default {

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

};
