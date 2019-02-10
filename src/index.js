import 'babel-polyfill';
import express from 'express';
import dotenv from 'dotenv';
import initDB from './db/index.js';
import candidateRoutes from './routes/candidate';
import peopleRoutes from './routes/people';

dotenv.config();
initDB();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/candidate', candidateRoutes);
app.use('/people', peopleRoutes);

app.listen(3030);
console.log('Server started! API listening to port 3030');
