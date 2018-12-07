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

app.get('/', getImageOfTheDay);

app.post('/results', calculateDistance);

app.get('/about', getDevs);
  
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
// function searchQuery(request, response){
//   const first = getStartPoint(request, response)
//   const second = getEndPoint(request, response)
//   calculateDistance(first, second)
// }
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
  console.log('deltaX  ' +deltaX)
  let deltaY = (endPoint.Y - startPoint.X)
  console.log('deltaY  ' +deltaY)
  let deltaZ = (endPoint.Z - startPoint.Z)
  console.log('deltaZ  ' +deltaZ)
  let temp = Math.pow(deltaX,2) + Math.pow(deltaY,2) + Math.pow(deltaZ,2)
  console.log('All squared values  ' + temp)
  let totalDistance = Math.sqrt(temp)
  console.log(totalDistance)
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

