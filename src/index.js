import 'babel-polyfill';
import express from 'express';
import dotenv from 'dotenv';
import initDB from './db/index.js';
import candidateRoutes from './routes/candidate';
import peopleRoutes from './routes/people';

dotenv.config();
initDB();

const app = express();

app.use('/candidate', candidateRoutes);
app.use('/people', peopleRoutes);

app.listen(3030);
console.log('Server started! API listening to port 3030');
