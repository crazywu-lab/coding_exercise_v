const express = require('express');
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, isProduction ?'dist': 'public')));

app.use(cors());
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/test/products', productsRouter);

module.exports = app;