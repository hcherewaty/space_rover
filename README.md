# space_rover

Visit us here: http://www.spacerover.tech/

## Crew: Heather Cherewaty, Becca Lee, Siobhan Niess, and Michael Jahns.

## Project Info & Problem Domain

Space Rover is a mobile-first, educational website about space. As a user of Space Rover, you’ll be able to select a planet or other celestial body and a date, and see how far it is from earth or another celestial body at that specific moment in time. We'll also tell you how long it would take you to get there. Don’t want to see the distance in miles? That’s ok! You can also view the distance in kilometers or other units of measures (some of them cuter than others). Along with distance and travel time, the user will get to see an assortment of facts about the planet they’ve selected.

## Version 1.0.0

## Technology Used:
- JavaScript
- Node.js
- HTML
- CSS
- SQL
- Express
- Postgres
- CORS
- Superagent
- Method-override
- Heroku

## APIs Used:
- Ephemeris API was used for planet coordinates to help us calculate distance
- NASA Image of the Day API was used for our hero image on the homepage

## Other Sources:
- Celestial body facts courtesy of NASA, with some edits
- Planet photos courtesty of NASA
- Error page message photo courtesy of Gravity (the movie)
- Google fonts
- Font awesome

## Astro-phys.com Ephemeris API - Endpoint: http://www.astro-phys.com/api

{
  "date": 2086326.5,
  "unit": "km",
  "results": {
    "mars": [
      [
        -168045229.22750974, // X Position
        164411532.9003423,   // Y Position
        80245103.26520184    // Z Position
      ],
      [
        -1449448.751232047,  // X Velocity
        -1150179.7595137728, // Y Velocity
        -484397.75425069826  // Z Velocity
      ]
    ]
  }
}

## NASA APOD API - Endpoint: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

{"date":"2018-12-11","explanation":"Why does this galaxy have such a long tail?   In this stunning vista, based on image data from the Hubble Legacy Archive, distant galaxies form a dramatic backdrop for disrupted spiral galaxy Arp 188, the Tadpole Galaxy. The cosmic tadpole is a mere 420 million light-years distant toward the northern constellation of the Dragon (Draco). Its eye-catching tail is about 280 thousand light-years long and features massive, bright blue star clusters. One story goes that a more compact intruder galaxy crossed in front of Arp 188 - from right to left in this view - and was slung around behind the Tadpole by their gravitational attraction. During the close encounter, tidal forces drew out the spiral galaxy's stars, gas, and dust forming the spectacular tail. The intruder galaxy itself, estimated to lie about 300 thousand light-years behind the Tadpole, can be seen through foreground spiral arms at the upper right. Following its terrestrial namesake, the Tadpole Galaxy will likely lose its tail as it grows older, the tail's star clusters forming smaller satellites of the large spiral galaxy.   New: Instagram page features cool images recently submitted to APOD","hdurl":"https://apod.nasa.gov/apod/image/1812/Arp188Tadpole_HubbleMarquez_1150.jpg","media_type":"image","service_version":"v1","title":"Arp 188 and the Tadpole's Tail","url":"https://apod.nasa.gov/apod/image/1812/Arp188Tadpole_HubbleMarquez_960.jpg"}

## Database Schemas

## devSchema:
CREATE TABLE devs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(500),
    image_url VARCHAR(500),
    bio VARCHAR(1500),
    email VARCHAR(500),
    github VARCHAR(500),
    twitter VARCHAR(500),
    linkedin VARCHAR(500)
);

## planetSchema:
CREATE TABLE planet (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  image VARCHAR(255),
  general_environment VARCHAR(15000),
  day_length VARCHAR(255),
  random1 VARCHAR(1500),
  random2 VARCHAR(1500)
);

## User Stories
As a ____, I want ____ so that ____.

### User
- As a User, I want to have fun so that I'll be more likely to return.
- As a User, I want an intuitive interface so that I can easier naivgate the page.
- As a User, I want to have travel time returned to me so that I can gain perspective on the cosmic sclae. 
- As a User, I want to be able to select the units of measurement so that I can select the units that suit my needs.
- As a User, I want to be able to select from an array of celestial bodies so that I can learn about the solar system. 
### Student
- As a Student, I want to pull from multiple API's so that I can practice interacting with multiple sources.
- As a Student, I want to store user data in a SQL database so that I can practice caching frequently used searches.
- As a Student, I want to have an About Me page so that potential employers impressed by the project have the means to contact me.
### Developer
- As a Developer, I want an educational service so that my users have an active and engaging experience.
- As a Developer, I want a dynamic visual display so that my users will have a unique experience whenever they come.
- As a Developer, I want my users to be engaged while I learn so that I will retain more of the educational experience. 

