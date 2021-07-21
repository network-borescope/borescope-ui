import { CategoryScale, Chart, LinearScale, BarController, BarElement, PointElement, Legend, Tooltip } from 'chart.js';
export class BarChart {

  private chart: any;
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.init();
  }

  //Configuração do grafico
  init() {
    if (this.canvas === undefined) {
      return;
    }

    // Registra os elementos utilizados pelo grafico
    Chart.register(PointElement, BarController, BarElement, CategoryScale, LinearScale, Legend, Tooltip);
    Chart.defaults.animation = false;

    // Configuração do gráfico
    this.chart = new Chart(this.canvas, {
      type: 'bar',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "top"
          },
          title: {
            display: false
          }
        },
        responsive: false,
        scales: {
          x: {
            stacked: true,
            title: {
              display: true,
              text: 'TTL'
            }
          },
          y: {
            beginAtZero: true,
            stacked: true,
            title: {
              display: true,
              text: 'Relative Frequency'
            }
          }
        }
      }
    });
  }

  // Modifica as configurações globais para os títulos
  setTitle(title: string) {
    this.chart.options.plugins.title.text = title;
    this.chart.options.plugins.title.display = true;
  }

  // Modifica as configurações dos ticks
  setTicksX(ticks: any) {
    this.chart.options.scales.x[0].ticks = ticks;
  }

  // Modifica as configurações dos ticks
  setTicksY(ticks: any) {
    this.chart.options.scales.y[0].ticks = ticks;
  }

  // Modifica o tipo do eixo
  setTypeX(type: string) {
    this.chart.options.scales.x[0].type = type;
  }

  // Modifica o tipo do eixo
  setTypeY(type: string) {
    this.chart.options.scales.y[0].type = type;
  }

  // Modifica as configurações dos labels
  setLabelX(label: string) {
    this.chart.options.scales.x[0].title.text = label;
    this.chart.options.scales.x[0].title.display = true;
  }

  // Modifica as configurações dos labels
  setLabelY(label: string) {
    this.chart.options.scales.y[0].title.text = label;
    this.chart.options.scales.y[0].title.display = true;
  }

  // Modifica as configurações dos labels
  setLabels(labels: any) {
    this.chart.config.data.labels = labels;
  }

  addDataset(label: any, data: any, color: string) {
    let dataset = {
      label: label,
      backgroundColor: color,
      borderColor: color,
      data: data,
      fill: false,
      stack: label
    };
    let datasets = this.chart.config.data.datasets;
    datasets.push(dataset);
    this.chart.update();
  }

  updateDataset(color: string, data: any) {
    const datasets = this.chart.config.data.datasets;
    for(let i = 0; i < datasets.length; i++){
      if(datasets[i].backgroundColor == color) {
        datasets[i].data = data;
        this.chart.update();
      }
    };    
  }

  removeDataset(color: string) {
    const datasets = this.chart.config.data.datasets;
    for(let i = 0; i < datasets.length; i++){
      if(datasets[i].backgroundColor == color) {
        datasets[i].data = [];
        this.chart.update();
      }
    }; 
  }

  removeLabel(label: any, color: string) {
    let datasets = this.chart.config.data.datasets;
    for (let i = 0; i < datasets.length; i++) {
      let dataset = datasets[i];
      if (dataset.label == label && dataset.backgroundColor == color) {
        datasets.splice(i, 1);
        break;
      }
    }
    this.chart.update();
  }

  clear() {
    this.chart.data.labels = [];
    this.chart.data.datasets = [];
    this.chart.update();
  }
}
