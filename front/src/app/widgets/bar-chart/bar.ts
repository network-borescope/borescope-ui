import { CategoryScale, Chart, LinearScale, BarController, BarElement, PointElement, Legend, Tooltip } from 'chart.js';

export class BarChart {

  private chart: any;
  private canvas: HTMLCanvasElement;
  private capitals: any;
  private idOrder: any;

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
    const setTooltipTitle = (tooltipItems:any) => {
      console.log(tooltipItems)
      const id = parseInt(tooltipItems[0].label) - 1;
      return self.getId(self.idOrder[id]);
    };
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
          tooltip: {
            callbacks: {
              title: setTooltipTitle,
            }
          },
          legend: {
            display: true,
            position: "top"
          },
          title: {
            display: false
          }
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            ticks: {
              autoSkip: false,
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                console.log(value, index, ticks)
                return self.getId(self.idOrder[value]);
              }
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
    this.chart.options.scales.x.title.text = label;
    this.chart.options.scales.x.title.display = true;
  }

  // Modifica as configurações dos labels
  setLabelY(label: string) {
    this.chart.options.scales.y.title.text = label;
    this.chart.options.scales.y.title.display = true;
  }

  // Modifica as configurações dos labels
  setLabels(labels: any) {
    this.chart.config.data.labels = labels;
  }

  updateDataset(dataId:string, color: string, data: any, name: any = undefined, idOrder: any = undefined, from: string) {
    console.log(idOrder)
    console.log(data)
    if(idOrder !== undefined) this.idOrder = idOrder;
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
        fill: false,
        stack: dataId
      };
      datasets.push(newData);
    }

    this.chart.update();
  }

  removeDataset(dataId:string, color: string) {
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

  setCapitals(capitals: any) {
    this.capitals = capitals;
  }

  getId(id: number) {
    return this.capitals.filter((c: any) => c.cod === id)[0].id.toUpperCase();
  }
}
