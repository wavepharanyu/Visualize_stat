Highcharts.chart('USA_rev', {

    chart: {
      type: 'item'
    },
  
    title: {
      text: 'United States\'s revenue'
    },
  
    subtitle: {
      text: ''
    },
  
    legend: {
      labelFormat: '{name} <span style="opacity: 0.6">{y} (% of GDP)</span>'
    },
  
    series: [{
      name: '',
      keys: ['name', 'y', 'color', 'label'],
      data: [
        ['Tax revenue', 11, '#f5b7b1', 'Tax revenue'],
        ['Taxes on exports', 0, '#d7bde2', 'Taxes on exports'],
        ['Taxes on goods and services', 1, '#a9dfbf', 'Taxes on goods and services'],
        ['Taxes on income, profits and capital gains', 10, '#f9e79f', 'Taxes on income, profits and capital gains'],
        ['Taxes on international trade', 1, '#aed6f1', 'Taxes on international trade'],
      ],
      dataLabels: {
        enabled: true,
        format: '{point.label}'
      },
  
      // Circular options
      center: ['50%', '88%'],
      size: '170%',
      startAngle: -100,
      endAngle: 100
    }]
  });