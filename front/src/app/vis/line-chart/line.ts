import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, Title } from 'chart.js';

export class LineChart {

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

    //Registra os elementos utilizados pelo grafico
    Chart.register(PointElement, LineElement, LineController, CategoryScale, LinearScale, Title);

    this.chart = new Chart(this.canvas, {
      type: 'line',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        plugins: {
          legend: {
            display: true
          },
          title: {
            display: false,
            text: 'Title'
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        elements: {
          point: {
            radius: 0
          }
        },
        responsive: false,
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          x: {
            display: true,
            time: {
              parser: 'MM/DD/YYYY HH:mm:ss',
              tooltipFormat: 'll HH:mm:ss'
            },
            title: {
              display: false,
              text: 'x'
            }
          },
          y: {
            display: true,
            title: {
              display: false,
              text: 'y'
            }
          }
        }
      }
    });
  }


  //Modifica as configurações globais para os títulos
  setTitle(title: string) {
    this.chart.options.plugins.title.text = title;
    this.chart.options.plugins.title.display = true;
  }

  //Modifica as configurações globais dos ticks comuns para eixos
  setTicksX(ticks: any) {
    this.chart.options.scales.x[0].ticks = ticks;
  }

  setTicksY(ticks: any) {
    this.chart.options.scales.y[0].ticks = ticks;
  }

  //Modifica as configurações globais dos dos tipos
  setTypeX(type: string) {
    this.chart.options.scales.x[0].type = type;
  }
  setTypeY(type: string) {
    this.chart.options.scales.y[0].type = type;
  }

  //Modifica as configurações globais dos labels
  setLabelX(label: string) {
    this.chart.options.scales.x.title.text = label;
    this.chart.options.scales.x.title.display = true;
  }
  setLabelY(label: string) {
    this.chart.options.scales.y.title.text = label;
    this.chart.options.scales.y.title.display = true;
  }
  setLabels(labels: any) {
    this.chart.config.data.labels = labels;
  }
  addLabel(label: any) {
    let labels = this.chart.config.data.labels;
    let found = false;
    for (let i = 0; i < labels.length; i++) {
      if (labels[i] == label) {
        found = true;
        break;
      }
    }
    if (!found) {
      labels.push(label);
    }
  }
  addData(data: any) {
    let datasets = this.chart.config.data.datasets;
    for (let i = 0; i < datasets.length; i++) {
      datasets[i].data.push(data[i]);
    }
    this.chart.update();
  }
  addDataset(label: any, data: any, color: string) {
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
  }

  removePolyDataset(label: any, color: string) {
    let datasets = this.chart.config.data.datasets;
    for (let i = 0; i < datasets.length; i++) {
      let dataset = datasets[i];
      if ((dataset.label == label) &&
        (dataset.backgroundColor == color) &&
        (dataset.borderColor == color)) {
        datasets.splice(i, 1);
        break;
      }
    }
    this.chart.update();
  }

  removeDataset(label: any) {
    let datasets = this.chart.config.data.datasets;
    for (let i = 0; i < datasets.length; i++) {
      let dataset = datasets[i];
      if (dataset.label == label) {
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
