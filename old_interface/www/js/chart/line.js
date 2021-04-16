/**
 * Cria uma classe com a estrutura de gráfico de linhas.
 * @param {*} id 
 */
function Line(id) {
  let ctx = document.getElementById(id).getContext('2d');
  this.chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [],
      datasets: []
    },
    options: {
      legend: {
        display: true
      },
      elements: {
        point: {
          radius: 0
        }
      },
      responsive: false,
      title: {
        display: false,
        text: 'Title'
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          type: 'time',
          time: {
            parser: 'MM/DD/YYYY HH:mm:ss',
            tooltipFormat: 'll HH:mm:ss'
          },
          scaleLabel: {
            display: false,
            labelString: 'X'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: false,
            labelString: 'Y'
          }
        }]
      }
    }
  });  
}

/**
 * Atribui funcionalidades a classe do gráfico de barras.
 */
Line.prototype = {
  setTitle: function(title) {
    this.chart.options.title.text = title;
    this.chart.options.title.display = true;
  },
  setTicksX: function(ticks) {
    this.chart.options.scales.xAxes[0].ticks = ticks;
  },  
  setTicksY: function(ticks) {
    this.chart.options.scales.yAxes[0].ticks = ticks;
  },  
  setTypeX: function(type) {
    this.chart.options.scales.xAxes[0].type = type;
  },  
  setTypeY: function(type) {
    this.chart.options.scales.yAxes[0].type = type;
  },  
  setLabelX: function(label) {
    this.chart.options.scales.xAxes[0].scaleLabel.labelString = label;
    this.chart.options.scales.xAxes[0].scaleLabel.display = true;
  },  
  setLabelY: function(label) {
    this.chart.options.scales.yAxes[0].scaleLabel.labelString = label;
    this.chart.options.scales.yAxes[0].scaleLabel.display = true;
  },
  setLabels: function(labels) {
    this.chart.config.data.labels = labels;
  },  
  addLabel: function(label) {
    let labels = this.chart.config.data.labels;
    let found = false;
    for (let i=0; i<labels.length; i++) {
      if (labels[i] == label) {
        found = true;
        break;
      }
    }
    if (!found) {
      labels.push(label);
    }
  },
  addData: function(data) {
    let datasets = this.chart.config.data.datasets;
    for (let i=0; i<datasets.length; i++) {
      datasets[i].data.push(data[i]);
    }
    this.chart.update();
  },
  addDataset: function(label, data, color) {
    let dataset = {
      label: label,
      backgroundColor: color,
      borderColor: color,
      data: data,
      fill: false
    };
    let datasets = this.chart.config.data.datasets;
    datasets.push(dataset);
    this.chart.update();
  },
  removePolyDataset: function(label, color) {
    let datasets = this.chart.config.data.datasets;
    for (let i=0; i<datasets.length; i++) {
      let dataset = datasets[i];
      if ((dataset.label == label) && 
          (dataset.backgroundColor == color) &&
          (dataset.borderColor == color)) {
        datasets.splice(i, 1);
        break;
      }
    }
    this.chart.update();
  },
  removeDataset: function(label) {
    let datasets = this.chart.config.data.datasets;
    for (let i=0; i<datasets.length; i++) {
      let dataset = datasets[i];
      if (dataset.label == label) {
        datasets.splice(i, 1);
        break;
      }
    }
    this.chart.update();
  },
  clear: function() {
    this.chart.data.labels = [];
    this.chart.data.datasets = [];
    this.chart.update();
  }
};