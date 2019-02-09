import mongoose from 'mongoose';

const onError = (error) => {
  console.log('Something went wrong when connecting to the DB');
  console.error(error);
};

const onSuccess = () => {
  console.log('Connected to the DB!');
};

const initDB = () => {
  mongoose.connect(process.env.DATA_BASE_PATH, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', onError);
  db.once('open', onSuccess);
};

export default initDB
