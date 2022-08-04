const express = require('express');
const path = require('path');

var homeRouter = require('./routes/home');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);


module.exports = app;
