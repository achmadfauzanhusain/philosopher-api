const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const testRouter = require('./app/test/router');
const philospherRouter = require('./app/popular/router');
const nicheRouter = require('./app/niche/router');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', testRouter);
app.use('/philosopher/popular', philospherRouter);
app.use('/philosopher/niche', nicheRouter);

module.exports = app;
