'use strict';

const pg = require('pg');
const cors = require('cors');
const express = require('express');
const superagent = require('superagent');
const methodOverride = require('method-override');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cors());

app.use(methodOverride((request, response) => {
  if (request.body && typeof request.body === 'object' && '_method' in request.body) {
    // look in urlencoded POST bodies and delete it
    let method = request.body._method;
    console.log('OVERRIDE THE METHOD as a ' +method)
    delete request.body._method;
    return method;
  }
 })
 )

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.set('view engine', 'ejs');

app.get('/', getImageOfTheDay);

app.post('/results', getPlanet);

app.get('/about', getDevs);

app.put('/results', updateResults);

function getImageOfTheDay(request, response) {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_IOD_API_KEY}`

  superagent.get(url)
    .then(result => response.render('pages/', {heroImage: result.body.url}));
}

function Triangulate(location){
  this.X = location[0];
  this.Y = location[1];
  this.Z = location[2];
}

function searchQuery(request, response){
  calculateDistance(request, response)
  .then(results => {
    const measurement = new Conversion(results)
    return measurement
  })
    .then(measurement => response.render('pages/results', {resultsView: measurement}))
}

function getStartPoint(request, response){
  let url = `http://www.astro-phys.com/api/de406/states?${request.body.date}&bodies=earth`

  return superagent.get(url)
    .then(result => {
      const startPoint = new Triangulate(result.body.results.earth[0])
      return startPoint
    })
    .catch(error => handleError(error));
}
function getEndPoint(request, response){
  let url = `http://www.astro-phys.com/api/de406/states?date=${request.body.date}&bodies=${request.body.celestialBody}`

  return superagent.get(url)
    .then(result => {
      const endPoint = new Triangulate(result.body.results[request.body.celestialBody.toLowerCase()][0])
      return endPoint
    })
    .catch(error => handleError(error));
}
async function calculateDistance(request, response){
  const startPoint = await getStartPoint(request, response);
  const endPoint = await getEndPoint(request, response);
  let deltaX = (endPoint.X - startPoint.X)
  let deltaY = (endPoint.Y - startPoint.X)
  let deltaZ = (endPoint.Z - startPoint.Z)
  let temp = Math.pow(deltaX,2) + Math.pow(deltaY,2) + Math.pow(deltaZ,2)
  let totalDistance = Math.floor(Math.sqrt(temp))
  return totalDistance;
}

function updateResults(request, response) {
  console.log(request.body);
  if (request.body.units === 'mi') {
    Conversion.active = Conversion.mi;
    console.log(Conversion.active);
  }
}

const Conversion = function(measurement) {
  this.km = measurement;
  this.m = measurement * 1000;
  this.mi = measurement * 0.621371;
  this.au = measurement * 0.0000000000001057;
  this.atlas = (measurement * 39370.1) / 60;
}
function getDevs(request, response){
  let SQL = 'SELECT * FROM devs;'

  return client.query(SQL)
    .then(result => response.render('pages/about', {resultAbout: result.rows}))
    .catch(handleError);
}

function handleError (error, response) {
  app.get('/error')
  response.render('pages/error', {error: error});
}

////////////////////////////////////////////////////////////////////////////

function getPlanet(request, response){
  let SQL = `SELECT * FROM planet WHERE name='${request.body.celestialBody.toUpperCase()}';`;

  return client.query(SQL)
    .then(result => response.render('pages/results', {planet: result.rows[0]}))
    .catch(handleError);
}
