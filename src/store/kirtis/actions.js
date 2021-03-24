import keyBy from 'lodash/keyBy';
import uniq from 'lodash/uniq';
import * as kirtis from '@/services/kirtis';
import * as m from './mutations';
import * as g from './getters';

export const LOAD_SHORTENINGS = 'loadShortenings';
export const ACCENTUATE_WORD = 'accentuateWord';
export const CLEAR_RESULTS = 'clearResults';
export const SAVE_WORD = 'saveWord';

export const SHOW_HISTORY = 'showHistory';
export const HIDE_HISTORY = 'hideHistory';

export default {

  [SHOW_HISTORY]({ commit }) {
    commit(m.SET_HISTORY_DRAWER, true);
  },

  [HIDE_HISTORY]({ commit }) {
    commit(m.SET_HISTORY_DRAWER, false);
  },

  async [LOAD_SHORTENINGS]({ commit }) {
    const data = await kirtis.shortenings();
    commit(m.SET_SHORTENINGS, keyBy(data, 'id'));
  },

  async [ACCENTUATE_WORD]({ commit, dispatch }, word) {

    commit(m.SET_ACCENTUATION_ERROR, null);

    const results = await kirtis.accent(word)
      .then(r => {
        dispatch(SAVE_WORD, word);
        return r;
      })
      .catch(e => {
        console.error(e);
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

  [SAVE_WORD]({ commit, getters }, word) {

    const words = getters[g.SAVED_WORDS];
    const history = uniq([word, ...words]);

    kirtis.saveHistory(history);

    commit(m.SET_SAVED_WORDS, history);

  },

};
