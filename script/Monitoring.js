const refreshFrequency = 1000; // 1 second
const positionTextBox = document.getElementById('pos');
const rotationTextBox = document.getElementById('rot');
const currentUserInfo = {'pos': {'lat': undefined, 'lon': undefined}, 'rot': {'z': undefined}};

function handleOrientation(event) {
    const absolute = event.absolute;
    const alpha = event.alpha;// In degree Z
    const beta = event.beta; // In degree in the range [-180,180)
    const gamma = event.gamma; // // In degree in the range [-90,90)

    currentUserInfo.rot.z = alpha;
    rotationTextBox.innerHTML = `z: ${parseFloat(alpha).toFixed(2)}`;
}

function showPosition(position) {
    currentUserInfo.pos.lat = position.coords.latitude;
    currentUserInfo.pos.lon = position.coords.longitude;
    positionTextBox.innerHTML = "Latitude: " + parseFloat(position.coords.latitude) +"<br>Longitude: " + parseFloat(position.coords.longitude) + "<br>Accuracy: " + parseFloat(position.coords.accuracy);
}

function getLocation() {
    if (navigator.geolocation) {
        //navigator.geolocation.getCurrentPosition((pos) => {pos.coords.accuracy});
        navigator.geolocation.watchPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    console.log("ran");
    setTimeout(getLocation, refreshFrequency);
}


function init() {
    getLocation();
}

window.addEventListener('deviceorientation', handleOrientation, true); 