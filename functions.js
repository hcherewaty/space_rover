
// http://www.astro-phys.com/api/de406/states?date=${inputed-date}&bodies=${inputed-destination}
// http://www.astro-phys.com/api/de406/states?date=${inputed-date}&bodies=earth

function Triangulate(location){
    this.Xposition = location;
    this.Yposition = location;
    this.Zposition = location;
  }
  function getStartPoint(request, response){
    let url = `http://www.astro-phys.com/api/de406/states?date=1000-1-1&bodies=earth`
  
    return superagent.get(url)
      .then(location => {
        const startPoint = new Triangulate(location);
        console.log(startPoint)
      });
    // .catch(error => handleError(error));
  
  }
  function calculateDistance(destination, startPoint, unit){
    const totalDistance = 0;
    if(unit === 'km'){
      totalDistance = SQRT(((destination.X - startPoint.X)^2 + (destination.Y - startPoint.Y)^2 + (destination.Y - startPoint.Z)^2))
    }
  }
  