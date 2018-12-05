'use strict';

const app = express();
const pg = require('pg');
const cors = require('cors');
const express = require('express');
const PORT = process.env.PORT || 3000;
const superagent = require('superagent');

require('dotenv').config();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cors());

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/results', function (request, response) {
  response.render('pages/results');
});

app.get('/about', function (request, response) {
  response.render('pages/about');
});