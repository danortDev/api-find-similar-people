import 'babel-polyfill';
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import path from 'path';
import initDB from './db/index.js';
import candidateRoutes from './routes/candidate';

dotenv.config();
initDB();

const app = express();

app.use('/candidate', candidateRoutes);

app.listen(3030);
console.log('Server started! API listening to port 3030');
