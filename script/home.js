const refreshFrequency = 1000; // 1 second
const demoTextBox = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    console.log("ran");
    setTimeout(getLocation, refreshFrequency);
}
function showPosition(position) {
    demoTextBox.innerHTML = "Latitude: " + position.coords.latitude +"<br>Longitude: " + position.coords.longitude;
}

function init() {
    getLocation();
}