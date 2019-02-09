import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import path from 'path';
import initDB from './db/index.js';

dotenv.config();
initDB();

const app = express();


app.get('/', (req, res) => {
  res.send('Hello world!!');
});

app.get('/user', (req, res) => {
  axios.get('https://torre.bio/api/bios/daniortizlira')
  .then(function (response) {
    // handle success
    console.log('************************', response.data);
    res.send(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
});

app.listen(3030);
