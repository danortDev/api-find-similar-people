import axios from 'axios';
import ENDPOINTS from './constants';

const getPeople = async () => {
  return axios.get(`${ENDPOINTS.TORRE_PEOPLE}${username}`);
};

export default getPeople;
