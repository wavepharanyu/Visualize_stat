var colors = ['#aed6f1', '#F0E68C', '#EEE8AA', '#A1EFDD', '#C9E988'];
$( '#all_rev' ).highcharts({
    tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} (Billions of US$)</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  title: {
    text: 'Revenue (Billions of US$)'
  },
  subtitle: {
    text: 'Source: https://databank.worldbank.org'
  },
  xAxis: {
    categories: [
      'Argentina',
      'Brazil',
      'Canada',
      'Jamaica',
      'United States'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    //max: 15,
    title: {
      text: '(Billions of US$)'
    }
  },
  
    plotOptions: {
        pie: {
            colors: colors
        },
        column: {
          pointPadding: 0.3,
          borderWidth: 0
      }
    },
    colors:colors,
    series: [{
        type: 'column',
        name: 'Revenue (Billions of US$)',
        data: [89.654246400, 944.500597670, 533.247000000, 8.605985943, 7069.903594100] 
    }]
  });

