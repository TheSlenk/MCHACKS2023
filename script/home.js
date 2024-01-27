const refreshFrequency = 1000; // 1 second
const demoTextBox = document.getElementById("demo");
let longitude;
let latitude;
const radius = 100;

function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    console.log("ran");
    
    nearby((error, results) => {
        if (error) {
          console.error(error);
        } else {
          // Process the results here
          console.log(results);
        }
    });


    setTimeout(getLocation, refreshFrequency);
}
function showPosition(position) {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    demoTextBox.innerHTML = "Latitude: " + latitude +"<br>Longitude: " + longitude;
}

function init() {
    getLocation();
}

function nearby(callback) {
    const placesService = new google.maps.places.PlacesService(document.createElement('div'));
    let location = new google.maps.LatLng(latitude, longitude);
    
    const request = {
      location: location,
      radius: radius
    };

    placesService.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        callback(null, results);
      } else {
        callback(`Nearby search failed: ${status}`, null);
      }
    });
}