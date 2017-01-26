// I should be writing tests right now!

// This is the main page js file

// Set up map variables
const osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  minZoom: 1,
  maxZoom: 19,
}),
  myMap = L.map('mapid', {
  center: [0,0],
  zoom: 1,
  layers:osm,
  scrollWheelZoom: false
});

// Set up url to pull data from.
const earthquakes = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
// After all this stuff works a mongo database can be set up to pull data from


// Make XMLHttpRequest to get the data as JSON

const xhr = new XMLHttpRequest();
xhr.open('GET', earthquakes);
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const earthquakesJson = JSON.parse(xhr.responseText);
    return L.geoJson(earthquakesJson).addTo(myMap);
  } else {
    return console.log(xhr.statusText);
  }
};
xhr.onerror = () => console.log(xhr.statusText);
xhr.send();



