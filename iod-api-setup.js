// URL: https://api.nasa.gov/planetary/apod?api_key=NASA_IOD_API_KEY
//GET request: GET https://api.nasa.gov/planetary/apod

//API Route
app.get('/', getImageOfTheDay);

function getImageOfTheDay(request, response) {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_IOD_API_KEY}`
  
  console.log(request.body);
  
  superagent.get(url)
    .then(apiResponse => apiResponse.body.map(iodResult => new IodImage (iodResult)))
    .then(results => response.render('/', {imageResult: results}))
}

//Model

function IodImage(image){
  this.image_url = image.url //Should probably add an alt here in case the API breaks
}