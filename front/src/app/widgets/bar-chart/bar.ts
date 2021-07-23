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

  updateDataset(dataId:string, color: string, data: any) {
    const datasets = this.chart.config.data.datasets;

    const id = datasets.findIndex((d: any) => d.label === dataId && d.backgroundColor == color)
    if (id >= 0) {
      datasets[id].data = data;
    }
    else {
      const newData = {
        label: dataId,
        backgroundColor: color,
        borderColor: color,
        data: data,
        fill: false,
        stack: dataId
      };

      datasets.push(newData);
    }

    this.chart.update();
  }

  removeDataset(dataId:string, color: string) {
    const datasets = this.chart.config.data.datasets;

    const id = datasets.findIndex((d: any) => d.label === dataId && d.backgroundColor == color)
    if (id >= 0) {
      datasets.splice(id, 1)
      this.chart.update();
    }
  }

  clear() {
    this.chart.data.labels = [];
    this.chart.data.datasets = [];
    this.chart.update();
  }
}
