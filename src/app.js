const express = require('express');

const cookieParser = require('cookie-parser');

const router = require('./controllers');


const app = express();

const port = 5000 || process.env.PORT;
app.set('port', port);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
module.exports = app;
