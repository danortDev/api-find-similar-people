import Candidate from '../models/candidate';
import getCandidate from '../client/getCandidate';

const CandidateController = {
  get: async (req, res) => {
    const { params: { username } } = req;
    try {
      const candidate = await getCandidate(username);
      return res.json(candidate);
    } catch (error) {
      const { data, status } = error.response;
      res.status(status).send(data);
    }
  }
};

export default CandidateController;
