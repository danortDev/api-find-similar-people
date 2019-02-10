const buildStregths = (strengths) => {
  return strengths.map(({ name, recommendations }) => ({
    name,
    recommendations
  }));
};


const buildConnection = ({ person }) => {
  const { name, professionalHeadline, publicId } = person;
  return {
    name,
    username: publicId,
    title: professionalHeadline
  };
};


const buildTopConnections = (professionalHeadline, connections) => {
  return connections.reduce((result, connection) => {
    const { person, degress } = connection;

    const isSimilar = person.professionalHeadline
      .toLowerCase()
      .includes(professionalHeadline.toLowerCase());

    const isClose = degress <= 2;

    return (isSimilar || isClose)
      ? [ ...result, buildConnection(connection)]
      : result;
  }, []);
};


export const buildCandidate = (bios, connections) => {
  const {
    person: {
      id,
      name,
      publicId,
      email,
      picture,
      professionalHeadline,
    },
    strengths
  } = bios;
  return {
    id,
    name,
    username: publicId,
    title: professionalHeadline,
    email,
    picture,
    ocupation: professionalHeadline,
    strengths: buildStregths(strengths),
    topConnections: buildTopConnections(professionalHeadline, connections)
  };
};


export const buildPeople = (people) => {
  return people.map((person) => ({
    name: person.name,
    username: person.publicId
  }));
};
