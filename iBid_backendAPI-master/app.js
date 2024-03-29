const express = require('express');
const app = express();

const bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('./DB/mongoose');

const profileRoute = require('./Routes/profile');


app.use('/profiles', profileRoute);

module.exports = app;