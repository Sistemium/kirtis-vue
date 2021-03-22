import keyBy from 'lodash/keyBy';
import * as kirtis from '@/services/kirtis';
import * as m from './mutations';

export const LOAD_SHORTENINGS = 'loadShortenings';
export const ACCENTUATE_WORD = 'accentuateWord';
export const CLEAR_RESULTS = 'clearResults';

export default {

  async [LOAD_SHORTENINGS]({ commit }) {
    const data = await kirtis.shortenings();
    commit(m.SET_SHORTENINGS, keyBy(data, 'id'));
  },

  async [ACCENTUATE_WORD]({ commit }, word) {

    commit(m.SET_ACCENTUATION_ERROR, null);

    const results = await kirtis.accent(word)
      .catch(() => {
        const message = `Žodis <strong>${word}</strong> nerastas`;
        commit(m.SET_ACCENTUATION_ERROR, message);
        return null;
      });

    commit(m.SET_ACCENTUATION_RESULTS, results);

  },

  [CLEAR_RESULTS]({ commit }) {
    commit(m.SET_ACCENTUATION_RESULTS, null);
    commit(m.SET_ACCENTUATION_ERROR, null);
  },

};
