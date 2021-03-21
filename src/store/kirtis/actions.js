import keyBy from 'lodash/keyBy';
import * as kirtis from '@/services/kirtis';
import * as m from './mutations';

export const LOAD_SHORTENINGS = 'loadShortenings';

export default {

  async [LOAD_SHORTENINGS]({ commit }) {
    const data = await kirtis.shortenings();
    commit(m.SET_SHORTENINGS, keyBy(data, 'id'));
  },

};
