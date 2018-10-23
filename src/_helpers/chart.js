export function drawChart() {
  google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart1);

  function drawChart1() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Cumulative');
    data.addColumn('number', 'clicks');
    data.addRows([
      ['Hommes : 63.45%', 63],
      ['Femmes : 25.12%', 25],
      ['Inconnu : 12.06%', 12],
    ]);

    var options = {
      pieStartAngle: 130,
      pieSliceText: 'none',
      tooltip: {
        trigger: 'none'
      },
      sliceVisibilityThreshold: 0,
      slices: {
        0: {
          color: '#3B5998'
        },
        1: {
          color: '#AFBDD4'
        },
        2: {
          color: '#D1D1D1'
        },
      },
      legendShape: 'square',
      legend: {
        textStyle: {
          color: '#6E6E6E',
          fontName: 'Barlow',
          fontSize: 14
        }
      },
      chartArea: {
        left: 0,
        top: 0,
        width: '60%',
        height: '45%'
      },

    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
}

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