Highcharts.chart('ARG', {

    chart: {
      type: 'item'
    },
  
    title: {
      text: 'Argentina'
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
        ['Tax revenue', 12, '#BE3075', 'Tax revenue'],
        ['Taxes on exports', 0, '#EB001F', 'Taxes on exports'],
        ['Taxes on goods and services',5, '#64A12D', 'Taxes on goods and services'],
        ['Taxes on income, profits and capital gains',2, '#FFED00', 'Taxes on income, profits and capital gains'],
        ['Taxes on international trade', 1, '#009EE0', 'Taxes on international trade'],
      ],
      dataLabels: {
        enabled: true,
        format: '{point.label}'
      },
  
      // Circular options
      center: ['50%', '88%'],
      size: '140%',
      startAngle: -100,
      endAngle: 100
    }]
  });