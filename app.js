const express = require('express');

const app = express();
const loginCheck = require('./routes/login');
app.use(express.json());
app.use('/login', loginCheck);

module.exports = app;