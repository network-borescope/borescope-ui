import { CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip } from 'chart.js';

export class LineChart {

  private chart: any;
  private canvas: HTMLCanvasElement;
  private data: any;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.init();
  }

  //Configuração do grafico
  init() {
    if (this.canvas === undefined) {
      return;
    }

    const self = this;

    //Registra os elementos utilizados pelo grafico
    Chart.register(PointElement, LineElement, LineController, CategoryScale, LinearScale, Legend, Tooltip);
    Chart.defaults.animation = false;

    this.chart = new Chart(this.canvas, {
      type: 'line',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: "top",
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
        responsive: true,
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          x: {
            ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                  return self.data[value].x.slice(0, -7);
              }
            }
          },
          y: {
            display: true,
            title: {
              display: false,
              text: 'Y'
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


  updateDataset(dataId: string, color: string, data: any, name: any = undefined) {
    this.data = data;
    const datasets = this.chart.config.data.datasets;
    let label = "";
    if(name) {
      label = dataId + " (" + name + ")" 
    } else {
      label = dataId
    };
    const id = datasets.findIndex((d: any) => d.backgroundColor == color)
    if (id >= 0) {
      datasets[id].data = data;
    }
    else {
      const newData = {
        label: label,
        backgroundColor: color,
        borderColor: color,
        data: data,
        fill: false
      };

      datasets.push(newData);
    }
    this.chart.update();
  }

  removeDataset(dataId: string, color: string) {
    const datasets = this.chart.config.data.datasets;

    const id = datasets.findIndex((d: any) => d.backgroundColor == color)
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
