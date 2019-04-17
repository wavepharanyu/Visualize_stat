Highcharts.chart('JAM_rev', {

  chart: {
    type: 'item'
  },

  title: {
    text: 'Jamaica\'s revenue'
  },

  subtitle: {
    text: ''
  },

  legend: {
    labelFormat: '{name} <span style="opacity: 0.6">{y} % of Revenue)</span>'
  },

  series: [{
    name: '',
    keys: ['name', 'y', 'color', 'label'],
    data: [
      ['Tax revenue', 74, '#c39bd3', 'Tax revenue'],
      ['Social contributions', 0, '#f1948a', 'Social contributions'],
      ['Grants and other revenue', 0, '#52be80', ' Grants and other revenue'],
      ['Other taxes', 0, '#76d7c4', 'Other taxes'],
      ['Customs and other import duties', 26, '#d1f2eb', 'Customs and other import duties'],
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