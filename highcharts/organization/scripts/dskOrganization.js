Highcharts.chart('container', {
  chart: {
    height: 600,
    inverted: true
  },

  title: {
    text: 'LG Chem.'
  },

  accessibility: {
    point: {
      descriptionFormatter: function (point) {
        var nodeName = point.toNode.name,
          nodeId = point.toNode.id,
          nodeDesc = nodeName === nodeId ? nodeName : nodeName + ', ' + nodeId,
          parentDesc = point.fromNode.id;
        return point.index + '. ' + nodeDesc + ', reports to ' + parentDesc + '.';
      }
    }
  },

  series: [{
    type: 'organization',
    name: 'LG Chem.',
    keys: ['from', 'to'],
    data: [
      ['LG Chem.', 'CFT_1'],
	  ['LG Chem.', 'CFT_2'],
      ['CFT_1', 'jbkwak'],
      ['CFT_1', 'hslee'],
      ['CFT_2', 'hrjung'],
      ['CFT_2', 'ktkim']
    ],
    levels: [{
      level: 0,
      color: '#a50034',
      dataLabels: {
        color: 'white'
      },
      height: 25
    }, {
      level: 1,
      color: 'silver',
      dataLabels: {
        color: 'black'
      },
      height: 25
    }, {
      level: 2,
      color: '#359154'
    }],
    nodes: [{
      id: 'LG Chem.'
    }, {
      id: 'CFT_1',
	  title: 'Team',
	  name: 'CFT #1'
    }, {
      id: 'CFT_2',
	  title: 'Team',
	  name: 'CFT #2'
    }, {
      id: 'CEO',
      title: 'CEO',
      name: 'Grethe Hjetland',
      image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg'
    }, {
      id: 'jbkwak',
      title: 'Designer',
      name: 'KWAK Junbeom',
      column: 2,
      image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12140620/Christer.jpg'
    }, {
      id: 'hslee',
      title: 'Engineer',
      name: 'LEE Hyunsoo',
      column: 2,
      image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12131849/Torstein1.jpg'
    }, {
      id: 'hrjung',
      title: 'Producer',
      name: 'JUNG Horim',
      column: 2,
      image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/12132317/Grethe.jpg',
      layout: 'hanging'
    }, {
      id: 'ktkim',
      title: 'Researcher',
      name: 'KIM Kitae',
      column: 2,
      image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2018/11/13105551/Vidar.jpg',
      layout: 'hanging'
    }, {
      id: 'Product',
      name: 'Product developers'
    }, {
      id: 'Web',
      name: 'Web devs, sys admin'
    }, {
      id: 'Sales',
      name: 'Sales team'
    }, {
      id: 'Market',
      name: 'Marketing team'
    }],
    colorByPoint: false,
    color: '#007ad0',
    dataLabels: {
      color: 'white'
    },
    borderColor: 'white',
    nodeWidth: 65
  }],
  tooltip: {
    outside: true
  },
  exporting: {
    allowHTML: true,
    sourceWidth: 800,
    sourceHeight: 600
  }

});