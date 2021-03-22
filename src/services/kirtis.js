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

function shortMapper(label) {
  return (name, id) => (isObject(name) ? map(name, shortMapper(id)) : { id, name, label });
}

export async function shortenings() {
  const { data } = await axios.get('api/strp');
  const res = map(data, shortMapper());
  return flattenDeep(res);
}
