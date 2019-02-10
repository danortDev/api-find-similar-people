import People from '../models/people';
import getPeople from '../client/getPeople';

const PeopleController = {
  get: async (req, res) => {
    const { query: { name } } = req;

    if (!name) return res.status(404).send({
      message: 'Not Found'
    });

    try {
      const people = await getPeople(name);
      return res.json(people);
    } catch (error) {
      console.error(error);
      const { data, status } = error.response;
      res.status(status).send(data);
    }
  }
};

export default PeopleController;
