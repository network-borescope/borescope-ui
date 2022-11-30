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

    //plugin da legend customizada
    const getOrCreateLegendList = (chart: any, id: any) => {
      const legendContainer = document.getElementById(id)!;
      let listContainer = legendContainer.querySelector('ul');
    
      if (!listContainer) {
        listContainer = document.createElement('ul');
        listContainer.style.display = 'grid';
        listContainer.style.flexDirection = 'row';
        listContainer.style.margin = '0';
        listContainer.style.padding = '0';
    
        legendContainer.appendChild(listContainer);
      }
    
      return listContainer;
    };
    
    const htmlLegendPlugin = {
      id: 'htmlLegend',
      afterUpdate(chart: any, args:any, options:any) {
        const ul = getOrCreateLegendList(chart, options.containerID);
        // Remove old legend items
        while (ul.firstChild) {
          ul.firstChild.remove();
        }
        
        ul.style.padding = '6px 0px 0px 14px';
        ul.style.marginBottom = '12px';
        ul.style.display = 'flex';
        ul.style.flexDirection = 'column';
        // Reuse the built-in legendItems generator
        const items = chart.options.plugins.legend.labels.generateLabels(chart);
  
        
        items.forEach((item: any) => {
          const li = document.createElement('li');
          li.style.alignItems = 'center';
          li.style.cursor = 'pointer';
          li.style.display = 'flex';
          li.style.flexDirection = 'row';
          li.style.marginLeft = '10px';
          li.style.marginBottom = '6px';

          li.onclick = () => {
            const {type} = chart.config;
            if (type === 'pie' || type === 'doughnut') {
              // Pie and doughnut charts only have a single dataset and visibility is per item
              chart.toggleDataVisibility(item.index);
            } else {
              chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
            }
            chart.update();
          };
          const config = chart.config.data.datasets[item.datasetIndex]
          // Color box
          const boxSpan = document.createElement('span');
          boxSpan.style.background = item.fillStyle;
          boxSpan.style.borderColor = item.strokeStyle;
          boxSpan.style.borderWidth = item.lineWidth + 'px';
          boxSpan.style.display = 'inline-block';
          boxSpan.style.height = '16px';
          boxSpan.style.marginRight = '6px';
          boxSpan.style.width = '16px';
          //Flag 
          const flagSpan = document.createElement('span');
          flagSpan.style.display = 'inline-block';
          flagSpan.className = config.flagIcon;
          flagSpan.style.height = '16px';
          flagSpan.style.marginRight = '3px';
          flagSpan.style.width = '16px';
          flagSpan.style.paddingTop = '2px';
          flagSpan.style.color = config.flagColor;
          // Text
          const textContainer = document.createElement('p');
          textContainer.style.color = item.fontColor;
          textContainer.style.margin = '0';
          textContainer.style.padding = '0';
          textContainer.style.textDecoration = item.hidden ? 'line-through' : '';
    
          const text = document.createTextNode(item.text);
          textContainer.appendChild(text);
          
          li.appendChild(flagSpan)
          li.appendChild(boxSpan);
          li.appendChild(textContainer);
          ul.appendChild(li);
        });
      }
    };

    this.chart = new Chart(this.canvas, {
      type: 'line',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        plugins: {
          //@ts-ignore
          htmlLegend: {
            // ID of the container to put the legend in
            containerID: 'legend-container',
          },
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Title'
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              labelColor: function(context) {
                const index = context.dataIndex;
                const data = context.dataset.data;
                //@ts-ignore
                const borderColor: string = context.dataset.borderColor;
                //@ts-ignore
                const flag = data[index].z;
                let color = {borderColor: borderColor, backgroundColor: ""};
                if(flag !== 0) color.backgroundColor = "#FF0000";
                else {
                  color.backgroundColor = borderColor;
                }
                return color;
              }
            }
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
              font: {
                size: 15
              },
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                  if(self.data[value] !== undefined && self.data[value].x !== undefined) return self.data[value].x.slice(0, -7);
              }
            }
          },
          y: {
            display: true,
            ticks: {
              font: {
                size: 15
              }
            },
            title: {
              display: false,
              text: 'Y',
              font: {
                size: 15
              }
            }
          }
        }
      },
      plugins: [htmlLegendPlugin],
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


  updateDataset(dataId: string, color: string, data: any, name: any = undefined, flag: number = 1) {
    this.data = data;
    const datasets = this.chart.config.data.datasets;
    let label = "";
    if(name) {
      label = name
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
        flagIcon: (flag == 1) ? 'fas fa-arrow-circle-up fa-lg' : 'fas fa-arrow-circle-down fa-lg',
        flagColor: (flag == 1) ? '#4AB70F' : '#FF0000',
        segment: {
          borderColor: (ctx: any) => {
            if(data[ctx.p0DataIndex + 1].z > 0) {
              return '#FF0000';
            } else {
              return color;
            }
          }
        }
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
