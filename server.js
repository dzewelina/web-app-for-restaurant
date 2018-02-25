const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.route('/')
  .get((req, res) => res.status(200).send('Hello World!'));

app.use((err, req, res, next) => res.status(500).send(err));

module.exports = app;