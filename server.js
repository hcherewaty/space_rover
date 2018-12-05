'use strict';

const pg = require('pg');
const cors = require('cors');
const express = require('express');
const superagent = require('superagent');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cors());

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.post('/results', searchQuery);

app.get('/about', function (request, response) {
  response.render('pages/about');
});




function Triangulate(location){
  this.Xposition = location[0];
  this.Yposition = location[1];
  this.Zposition = location[2];
}
function searchQuery(request, response){
  getStartPoint(request, response)
  getEndPoint(request, response)
}
function getStartPoint(request, response){
  let url = `http://www.astro-phys.com/api/de406/states?${request.body.Date}&bodies=earth`

  return superagent.get(url)
    .then(result => {
      const startPoint = new Triangulate(result.body.results.earth[0])
      console.log('Earth')
      console.log(startPoint);
    })
    .catch(error => handleError(error));
}
function getEndPoint(request, response){
  let temp = request.body.celestialBody.toLowerCase()
  let url = `http://www.astro-phys.com/api/de406/states?date=${request.body.Date}&bodies=${request.body.celestialBody}`

  return superagent.get(url)
    .then(result => {
      const endPoint = new Triangulate(result.body.results[temp][0])
      console.log(temp)
      console.log(endPoint)
    })
    .catch(error => handleError(error));
}
function calculateDistance(destination, startPoint, unit){
  const totalDistance = 0;
  if(unit === 'km'){
    totalDistance = SQRT(((destination.X - startPoint.X)^2 + (destination.Y - startPoint.Y)^2 + (destination.Y - startPoint.Z)^2))
  }
}
function handleError (error, response) {
  console.error(error)
  app.get('/error')
  response.render('pages/error', {error: error});
}