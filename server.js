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

app.post('/results', searchQuery);

app.get('/about', getDevs);

function getImageOfTheDay(request, response) {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_IOD_API_KEY}`

  superagent.get(url)
    .then(result => response.render('pages/', {heroImage: result.body.url}));
}

function Triangulate(location, name){
  this.X = location[0];
  this.Y = location[1];
  this.Z = location[2];
  this.name = name
}

let test;
async function searchQuery(request, response){
  await getPlanet(request, response)
  const one = await calculateDistance(request, response);
  const measurement = new Conversion(one, test.rows[0], request.body.startCelestialBody)
    response.render('pages/results', {resultsView: measurement})
}


function getStartPoint(request, response){
  let url = `http://www.astro-phys.com/api/de406/states?date=${request.body.date}&bodies=${request.body.startCelestialBody}`
  return superagent.get(url)
    .then(result => {
      const startPoint = new Triangulate(result.body.results[request.body.startCelestialBody.toLowerCase()][0], request.body.startCelestialBody)
      return startPoint
    })
    .catch(error => handleError(error));
}
function getEndPoint(request, response){
  let url = `http://www.astro-phys.com/api/de406/states?date=${request.body.date}&bodies=${request.body.endCelestialBody}`

  return superagent.get(url)
    .then(result => {
      const endPoint = new Triangulate(result.body.results[request.body.endCelestialBody.toLowerCase()][0], request.body.endCelestialBody)
      return endPoint
    })
    .catch(error => handleError(error));
}
async function calculateDistance(request, response){
  const startPoint = await getStartPoint(request, response);
  const endPoint = await getEndPoint(request, response);
  let deltaX = (endPoint.X - startPoint.X)
  let deltaY = (endPoint.Y - startPoint.Y)
  let deltaZ = (endPoint.Z - startPoint.Z)
  let temp = Math.pow(deltaX,2) + Math.pow(deltaY,2) + Math.pow(deltaZ,2)
  let totalDistance = Math.floor(Math.sqrt(temp))
  return totalDistance;
}

function Conversion(measurement, arr, launch) {
  this.km = measurement;
  this.m = measurement * 1000;
  this.mi = measurement * 0.621371;
  this.au = measurement * 0.0000000000001057;
  this.atlas = (measurement * 39370.1) / 60;
  this.launch = launch.toUpperCase();
  this.destination = arr.name;
  this.image = arr.image;
  this.general_environment = arr.general_environment;
  this.day_length = arr.day_length;
  this.random1 = arr.random1;
  this.random2 = arr.random2;
  this.timeRocket = (measurement / 57936.384) / 24;
  this.timeIonRocket = (measurement / 321868.8) / 24;
  this.timeWalking = (measurement / 4.02336) / 24;
  this.timeDogWalking = (measurement / 3.21869) / 24;
  this.timeDriving = (measurement / 96.5606) / 24;
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

function getPlanet(request, response){
  let SQL = `SELECT * FROM planet WHERE name='${request.body.endCelestialBody.toUpperCase()}';`;

  client.query(SQL)
  .then(result => {
    test = result 
  })
}