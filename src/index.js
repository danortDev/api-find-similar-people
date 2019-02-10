import 'babel-polyfill';
import express from 'express';
import dotenv from 'dotenv';
import candidateRoutes from './routes/candidate';
import peopleRoutes from './routes/people';

dotenv.config();
/* TODO: fix database connection on Heroku and init DB */

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/candidate', candidateRoutes);
app.use('/people', peopleRoutes);

app.listen(process.env.PORT || 8080);
console.log(`Server started! API listening to port ${process.env.PORT || 8080}`);
