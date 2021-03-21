export const SHORTENINGS = 'shortenings';
export const SHORTENING_VALUE = 'shorteningValue';

export default {

  [SHORTENINGS](state) {
    return state[SHORTENINGS];
  },

  [SHORTENING_VALUE](state, getters) {
    return id => {
      const item = getters[SHORTENINGS][id];
      return item && item.name;
    };
  },

};
