Highcharts.chart('USA_tax_rev', {

    chart: {
      type: 'item'
    },
  
    title: {
      text: 'United States\'s tax revenue'
    },
  
    subtitle: {
      text: ''
    },
  
    legend: {
      labelFormat: '{name} <span style="opacity: 0.6">{y} (% of Tax revenue)</span>'
    },
  
    series: [{
      name: '',
      keys: ['name', 'y', 'color', 'label'],
      data: [
        ['Taxes on goods and services', 5, '#5dade2', 'Taxes on goods and services'],
        ['Taxes on income, profits and capital gains', 92, '#aed6f1', 'Taxes on income, profits and capital gains'],
        ['Taxes on international trade', 2, '#f39c12', 'Taxes on international trade'],
        ['Taxes on exports', 0, '#f8c471', 'Taxes on exports'],
        ['Other taxes', 1, '#f9e79f', 'Other taxes'],
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
