import axios from 'axios';
import map from 'lodash/map';
import isObject from 'lodash/isObject';
import flattenDeep from 'lodash/flattenDeep';
import { v4 } from 'uuid';

const API_URL = '/api/krc';

export async function accent(word) {

  if (!word) {
    return null;
  }

  const res = await axios.get(`${API_URL}/${word}`);
  // .catch(() => ({
  //   data: null,
  // }));

  return map(res.data, result => ({
    ...result,
    id: v4(),
  }));

}

export async function suggestion(word) {

  if (!word) {
    return [];
  }

  const res = await axios.get(`api/zodynas/${word}`);

  return map(res.data, value => ({ value }));

}

export async function shortenings() {
  const { data } = await axios.get('api/strp');
  const mapper = (name, id) => (isObject(name) ? map(name, mapper) : { id, name });
  const res = map(data, mapper);
  return flattenDeep(res);
}
