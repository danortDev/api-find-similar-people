import axios from 'axios';
import ENDPOINTS from './constants';

const getBios = async (username) => {
  if (!username) return null;
  return axios.get(`${ENDPOINTS.TORRE_BIOS}/${username}`);
};

export default getBios;
