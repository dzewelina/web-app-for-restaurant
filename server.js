if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

console.log(process.env.NODE_ENV)

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookingRouter = require('./routes/bookingRouter');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.route('/')
  .get((req, res) => res.status(200).send('Hello World!'));

app.use('/booking', bookingRouter);

app.use((err, req, res, next) => res.status(500).send(err));

module.exports = app;