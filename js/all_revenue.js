var colors = ['#C7DFC5', '#F0E68C', '#EEE8AA', '#A1EFDD', '#C9E988'];
$( '#all_rev' ).highcharts({
    tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} (% of GDP)</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  title: {
    text: 'Revenue (% of GDP)'
  },
  subtitle: {
    text: 'Source: https://databank.worldbank.org'
  },
  xAxis: {
    categories: [
      'Brazil',
      'Canada',
      'United States',
      'Jamaica',
      'Argentina'],
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
        }
    },
    colors:colors,
    series: [{
        type: 'column',
        name: 'Tax revenue (% of GDP)',
        data: [12.78922692, 12.17584227, 11.02484129, 26.02650689, 12.15550537] 
    },{
        type: 'column',
        name: 'Taxes on exports (% of GDP)',
        data: [0.002225019, 0, 0, 0, 0.858320382] 
    },{
        type: 'column',
        name: 'Taxes on goods and services (% of GDP)',
        data: [5.503584891, 0, 0.530930402, 7.078357282, 5.848392859] 
    },{
        type: 'column',
        name: 'Taxes on income, profits and capital gains (% of GDP)',
        data: [6.422633764, 9.463003302, 10.18458137, 9.068184445, 2.657785766] 
    },{
        type: 'column',
        name: 'Taxes on international trade (% of GDP)',
        data: [0.510652229, 0.267697565, 0.201659376, 9.879965165, 1.526959772] 
    }]
  });

