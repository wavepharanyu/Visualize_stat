var colors = ['#27ae60'];
$( '#BRA_bar' ).highcharts({
    tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} (% of GDP)</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  title: {
    text: 'Brazil\'s tax revenue'
  },
  subtitle: {
    text: 'Source: https://databank.worldbank.org'
  },
  xAxis: {
    categories: [
      'Taxes on goods and services',
      'Taxes on income, profits and capital gains',
      'Taxes on international trade',
      'Taxes on exports',
      'Other taxes'],
    crosshair: true
  },
  yAxis: {
    min: 0,
    //max: 15,
    title: {
      text: '(% of GDP)'
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
        name: '% of GDP',
        data: [5.503584891, 6.422633764, 0.510652229, 0.002225019, 0.352356033] 
    }]
  });



