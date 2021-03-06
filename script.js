window.onload = function(e) {
  var map = L.map('map', { zoom: 0 }).setView([0, 0], 1);

  // add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // add a marker in the given location, attach some popup content to it and open the popup
  L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('location')
      .openPopup();
  map.zoomIn();
};
