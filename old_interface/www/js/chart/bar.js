/**
 * Cria uma classe com a estrutura de gráfico de barras.
 * @param {*} id 
 */
function Bar(id) {
  let ctx = document.getElementById(id).getContext('2d');
  this.chart = new Chart(ctx, {
    type: 'bar',    
    data: {
      labels: [],
      datasets: []
    },
    options: {
      legend: {
        display: true
      },
      responsive: false,
      title: {
        display: false
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'TTL'
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Relative Frequency'
          }
        }]
      }
    }
  });
}

/**
 * Atribui funcionalidades a classe do gráfico de barras.
 */
Bar.prototype = {
  setTitle: function(title) {
    this.chart.options.title.text = title;
    this.chart.options.title.display = true;
  },
  setLabels: function(labels) {
    this.chart.config.data.labels = labels;
  },  
  addLabel: function(label) {
    let labels = this.chart.config.data.labels;
    labels.push(label);
  },
  getLabels: function() {
    return this.chart.config.data.labels;
  },
  countLabels: function() {
    return this.chart.config.data.labels.length;
  },
  addData: function(data, backgroundColor, borderColor) {
    let datasets = this.chart.config.data.datasets;
    for (let i=0; i<datasets.length; i++) {
      datasets[i].data.push(data[i]);
      datasets[i].backgroundColor.push(backgroundColor[i]);
      datasets[i].borderColor.push(borderColor[i]);
    }
    this.chart.update();
  },
  addDataset: function(label, data, backgroundColor, borderColor) {
    let dataset = {
      label: label,
      data: data,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1
    };  
    let datasets = this.chart.config.data.datasets;
    datasets.push(dataset);
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
  }
};