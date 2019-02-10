import axios from 'axios';
import ENDPOINTS from './constants';

const getConnections = async (username) => {
  if (!username) return null;
  return axios.get(`${ENDPOINTS.TORRE_PEOPLE}/${username}/connections`);
};

export default getConnections;
