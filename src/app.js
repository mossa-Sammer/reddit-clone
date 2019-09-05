// core modules
const { join } = require('path');

// 3'rd party modules
const express = require('express');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');

// local modules
const router = require('./controllers');

const app = express();

const port = 5000 || process.env.PORT;
app.set('port', port);

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs',
  exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: join(__dirname, 'views', 'layouts'),
    partialsDir: join(__dirname, 'views', 'partials'),
  }));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
