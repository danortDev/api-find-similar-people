import getBios from './getBios';
import getConnections from './getConnections';
import { buildCandidate } from './utils';

const getCandidate = async (username) => {
  const { data: bios } = await getBios(username);
  const { data: connections } = await getConnections(username);
  return buildCandidate(bios, connections);
};

export default getCandidate;
