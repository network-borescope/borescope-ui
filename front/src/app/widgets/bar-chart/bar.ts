import { CategoryScale, Chart, LinearScale, BarController, BarElement, PointElement, Legend, Tooltip } from 'chart.js';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

export class BarChart {

  private chart: any;
  private canvas: HTMLCanvasElement;
  private capitals: any;
  private idOrder: any;
  public colorList: any = [];
  public coloredCods: any = [];
  public usedColors: any = [];
  public zoom: any = undefined;
  public viaipeLabels: any = [];
  public from: any = undefined;
  public data: any;
  public lowerIndex: number = 0;
  public higherIndex: number = 9;
  public selectedColumns: any = [];
  public nextX: number = 0;
  public labelList: any = [];
  public geometries: any = [];

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
      if(self.zoom > 12 && self.from == 'viaipe') {
        //@ts-ignore
        const id = parseInt(tooltipItems[0].parsed.x) + self.lowerIndex;
        return self.viaipeLabels[self.idOrder[id]];
      } else {
        const id = parseInt(tooltipItems[0].parsed.x);
        return self.getId(self.idOrder[id]);
      }
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
            display: false
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
              font: {
                size: 15
              },
              autoSkip: false,
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                if(self.zoom > 12 && self.from == 'viaipe') {
                  //@ts-ignore
                  const id = value + self.lowerIndex;
                  return self.viaipeLabels[self.idOrder[id]];
                } else {
                  return self.getId(self.idOrder[value]);
                }
              }
            }
          },
          y: {
            stacked: true,
            title: {
              display: true,
              text: 'Relative Frequency',
              font: {
                size: 15
              }
            },
            ticks: {
              font: {
                size: 15
              }
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
    console.log(labels)
    this.chart.config.data.labels = labels;
  }

  updateDataset(dataId:string, color: string, data: any, name: any = undefined, idOrder: any = undefined) {
    if(idOrder !== undefined) this.idOrder = idOrder;
    this.colorList = Array(this.idOrder.length).fill("#AAAAAA");
    if(this.zoom > 12) {
      for(let i = 0; i < this.coloredCods.length; i++) {
        if(this.idOrder.includes(this.coloredCods[i])) {
          const id = this.idOrder.indexOf(this.coloredCods[i]);
          const colorId = this.coloredCods.indexOf(this.idOrder[id]);
          const color = this.usedColors[colorId]
          this.colorList[id] = color;
        }
      }
    }

    this.data = data;

    for(let i = 0; i < this.geometries.length; i++) {
      this.data.unshift({x: this.lowerIndex - (i+1), y: this.geometries[i].value})
      this.idOrder.unshift('geometry')
      this.colorList.unshift(this.geometries[i].color)
      this.labelList.unshift(this.lowerIndex - (i+1))
    }    

    const datasets = this.chart.config.data.datasets;
    let label = "";
    if(name) {
      label = dataId + " (" + name + ")" 
    } else {
      label = dataId
    };
    const id = datasets.findIndex((d: any) => d.backgroundColor == color)
    if (id >= 0) {
      if(this.zoom > 12) {
        datasets[id].data = data.slice(this.lowerIndex, this.higherIndex);
      } else {
        datasets[id].data = data;
      }
    }
    else {
      const newData = {
        label: 'map',
        backgroundColor: (this.zoom > 12) ? this.colorList.slice(this.lowerIndex, this.higherIndex) : this.colorList,
        borderColor: (this.zoom > 12) ? this.colorList.slice(this.lowerIndex, this.higherIndex) : this.colorList,
        data: (this.zoom > 12) ? data.slice(this.lowerIndex, this.higherIndex) : data,
        fill: false,
        stack: dataId
      };
      datasets.push(newData);
    }
    this.setLabels(this.labelList);
    this.nextX = data[data.length - 1].x + 1;
    this.chart.update();
  }

  addGeometry(value: number, color: string, labels: any) {
    this.geometries.push({color: color, value: value});
    this.clear();
    this.labelList = labels['viaipe'];
    const datasets = this.chart.config.data.datasets;
    this.idOrder.unshift('geometry');
    this.colorList.unshift(color);
    this.data.unshift({x: this.lowerIndex, y: value});
    //build old data;
    const data = {
      label: 'map',
      backgroundColor: (this.zoom > 12) ? this.colorList.slice(this.lowerIndex, this.higherIndex) : this.colorList,
      borderColor: (this.zoom > 12) ? this.colorList.slice(this.lowerIndex, this.higherIndex) : this.colorList,
      data: (this.zoom > 12) ? this.data.slice(this.lowerIndex, this.higherIndex) : this.data,
      fill: false,
      stack: 'map'
    };
    //redraw labels
    this.setLabels(this.labelList);
    //add old data to chart config
    datasets.push(data);
    console.log(data)
    this.chart.update();
  }

  changeData(data: any) {
    const datasets = this.chart.config.data.datasets;
    datasets[0].data = data;
    this.chart.update();
  }

  changeBarColor(color: string, cod: number = -1) {
    const datasets = this.chart.config.data.datasets;
    if(cod > -1) {
      const id = this.idOrder.indexOf(cod);
      this.colorList[id] = color;
      if(color !== "#AAAAAA") {
        this.coloredCods.push(this.idOrder[id]);
        this.usedColors.push(color);
      }
    }
    console.log(this.colorList)
    const newColors = this.colorList.slice(this.lowerIndex, this.higherIndex);
    console.log(newColors)
    datasets[0].backgroundColor = newColors;
    datasets[0].borderColor = newColors;
    this.chart.update();
  }

  addFilterColor() {
    const datasets = this.chart.config.data.datasets;
    const newColors = this.colorList.slice(this.lowerIndex, this.higherIndex);
    datasets[0].backgroundColor = newColors;
    datasets[0].borderColor = newColors;
    this.chart.update();
  }

  removeFilterColor() {
    if(this.usedColors.length > 0)  {
      for(let i = 0; i < this.coloredCods.length; i++) {
        const id = this.idOrder.indexOf(this.coloredCods[i])
        this.colorList[id] = this.usedColors[i];
      }
    } else {
      this.colorList = Array(this.idOrder.length).fill("#AAAAAA");
      this.coloredCods = [];
    }

    const datasets = this.chart.config.data.datasets;
    const newColors = this.colorList.slice(this.lowerIndex, this.higherIndex);
    datasets[0].backgroundColor = newColors;
    datasets[0].borderColor = newColors;
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

  getId(id: any) {
    if(id == 'geometry') return 'geometry';
    else {
      return this.capitals.filter((c: any) => c.cod === id)[0].id.toUpperCase();
    }
  }
}
