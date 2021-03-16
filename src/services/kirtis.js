import axios from 'axios';
import map from 'lodash/map';
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
