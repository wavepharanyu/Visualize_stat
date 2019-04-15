Highcharts.chart('BRA', {

    chart: {
      type: 'item'
    },
  
    title: {
      text: 'Brazil'
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
        ['Tax revenue', 13, '#EB001F', 'Tax revenue'],
        ['Taxes on exports', 0, '#BE3075', 'Taxes on exports'],
        ['Taxes on goods and services', 6, '#64A12D', 'Taxes on goods and services'],
        ['Taxes on income, profits and capital gains', 7, '#FFED00', 'Taxes on income, profits and capital gains'],
        ['Taxes on international trade', 1, '#009EE0', 'Taxes on international trade'],
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