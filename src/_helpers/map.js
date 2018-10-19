export function loadMap() {
  var locations = [
    ['<h4>Bondi Beach</h4>', 48.860266, 2.372026],
    ['<h4>Coogee Beach</h4>', 48.852502, 2.403193],
    ['<h4>Cronulla Beach</h4>', 48.853798, 2.333328]
  ];

  // Setup the different icons and shadows
  var iconURLPrefix = 'http://wepixel.in/visi/images/';

  var icons = [
    iconURLPrefix + 'ic-pins.svg',
  ]
  var iconsLength = icons.length;

  console.log('----', document.getElementById('map'))

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: new google.maps.LatLng(48.864716, 2.349014),
  });


  var markers = new Array();

  var iconCounter = 0;

  // Add the markers and infowindows to the map
  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
      icon: icons[iconCounter]
    });

    markers.push(marker);

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));

    iconCounter++;
    // We only have a limited number of possible icon colors, so we may have to restart the counter
    if (iconCounter >= iconsLength) {
      iconCounter = 0;
    }
  }

  //  Create a new viewpoint bound
  var bounds = new google.maps.LatLngBounds();
  //  Go through each...
  for (var i = 0; i < markers.length; i++) {
    bounds.extend(markers[i].position);
  }
  //  Fit these bounds to the map
  map.fitBounds(bounds);
}