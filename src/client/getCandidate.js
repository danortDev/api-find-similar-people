import getBios from './getBios';
import getConnections from './getConnections';

const getCandidate = async (username) => {
  const { data: bios } = await getBios(username);
  const { data: connections } = await getConnections(username);
  return { ...bios, ...connections };
};

export default getCandidate;
