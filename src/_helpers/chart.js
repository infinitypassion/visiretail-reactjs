export function drawRegionsMap() {
  google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap1);

  function drawRegionsMap1() {
    var data = google.visualization.arrayToDataTable([
      ['Destination', 'Popularity'],
      ['FR-A', 0],
      ['FR-B', 105],
      ['FR-C', 110],
      ['FR-P', 115],
      ['FR-D', 120],
      ['FR-E', 125],
      ['FR-F', 130],
      ['FR-G', 140],
      ['FR-H', 0],
      ['FR-I', 160],
      ['FR-Q', 175],
      ['FR-J', 700],
      ['FR-K', 215],
      ['FR-L', 235],
      ['FR-M', 255],
      ['FR-N', 100],
      ['FR-O', 305],
      ['FR-R', 335],
      ['FR-S', 365],
      ['FR-T', 400],
      ['FR-U', 440],
      ['FR-V', 100],
    ]);
    var options = {
      region: 'FR',
      displayMode: 'regions',
      colorAxis: {
        colors: ['#A8BFDA', '#3973B4']
      },
      backgroundColor: '#ffffff',
      datalessRegionColor: '#F6F5F6',
      defaultColor: '#f5f5f5',
      resolution: 'provinces',
    };
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  }
}