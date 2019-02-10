import axios from 'axios';
import { buildPeople } from './utils';
import ENDPOINTS from './constants';

const getPeople = async (name) => {
  const path = `${ENDPOINTS.TORRE_PEOPLE}?q=${encodeURI(name)}&limit=10`;
  const { data: people } = await axios.get(path);
  return buildPeople(people);
};

export default getPeople;
