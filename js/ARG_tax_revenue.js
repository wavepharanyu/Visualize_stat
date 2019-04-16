Highcharts.chart('ARG_tax_rev', {

    chart: {
      type: 'item'
    },
  
    title: {
      text: 'Argentina\'s tax revenue'
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
        ['Taxes on goods and services', 6, '#5dade2', 'Taxes on goods and services'],
        ['Taxes on income, profits and capital gains', 3, '#aed6f1', 'Taxes on income, profits and capital gains'],
        ['Taxes on international trade', 2, '#f39c12', 'Taxes on international trade'],
        ['Taxes on exports', 1, '#f8c471', 'Taxes on exports'],
        ['Other taxes', 3, '#f9e79f', 'Other taxes'],
      ],
      dataLabels: { 
        enabled: true,
        format: '{point.label}'
      },
  
      // Circular options
      center: ['50%', '88%'],
      size: '170%',
      startAngle: -85,
      endAngle: 85
    }]
  });