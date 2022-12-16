import { CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip } from 'chart.js';
import { ticks } from 'd3';

export class Functionschart {

    private chart: any;
    private canvas: HTMLCanvasElement;
    // capitals
    private capitals: any = null;
    // services
    private services: any = null;
    // labels 
    private labels: any = null;
    private data: any = null;
    public isTimeSeries: boolean = false;
    private popTitle: string = '';
    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      this.init();
    }
  
    //Configuração do grafico
    init() {
      const self = this;

      if (this.canvas === undefined) {
        return;
      }
      
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
          if(self.isTimeSeries) {

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
              console.log(config.flagIcon)
              console.log(config.flagColor)
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
        
              const text = document.createTextNode(`${self.popTitle}${item.text}`);
              textContainer.appendChild(text);
              
              li.appendChild(flagSpan)
              li.appendChild(boxSpan);
              li.appendChild(textContainer);
              ul.appendChild(li);
            });
          }

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
              containerID: 'legend-container-timeseries',
            },
            legend: {
              display: true,
            },
            title: {
              display: true,
              text: 'CDF',
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
              type: 'linear',
              display: true,
              title: {
                display: true,
                text: 'Tempo (ms)',
                font: {
                  size: 15
                }
              },
              ticks: {
                font: {
                  size: 15
                },
                callback: function(value, index, ticks) {
                    if(self.isTimeSeries) {
                      //@ts-ignore
                      return this.chart.config.data.datasets[0].data[value].x;
                  } else return value;
                }
              }
            },
            y: {
              ticks: {
                font: {
                  size: 15
                }
              },
              display: true,
              title: {
                display: true,
                text: 'F(X)',
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
    setTitle(param: string, id: number) {
      if(id >= 0 ) { 
        this.chart.options.plugins.legend.title.text = `${param.toUpperCase()} ${this.getId(id, 'pop')}`; 
        this.popTitle = this.getId(id, 'pop') + ' - ';
      }
      else { 
        this.chart.options.plugins.legend.title.text = `${param.toUpperCase()}`;
        this.popTitle = '';
      }
    }
  
    setCapitals(capitals: any) {
      this.capitals = capitals;
    }
  
    setServices(services: any) {
      this.services = services;
    }

    updateData(data: any, colorList: any, param: string) {
      const selectedValue = (document.getElementById('functions-chart-select-value-options') as HTMLInputElement).value;
      let popOrService;
      let flag = data[0][2];
      (selectedValue == "popxpop") ? popOrService = 'pop' : popOrService = 'service'
      const datasets = this.chart.config.data.datasets;
      for(let i = 0; i < data.length; i++) {
        const newData = {
          label: (data[i][0] >= 0) ? this.getId(data[i][0], popOrService) : param.toUpperCase(),
          data: data[i][1][0][0],
          backgroundColor: colorList[i % 10],
          borderColor: colorList[i % 10],
          fill: false,
          flagIcon: this.buildFlag(flag, 'icon'),
          flagColor: this.buildFlag(flag, 'color'),
          segment: {
            borderColor: (ctx: any) => {
              if(data[i][1][0][0][ctx.p0DataIndex + 1].z > 0) {
                return '#FF0000';
              } else {
                return colorList[i % 10];
              }
            }
          }
        };
        datasets.push(newData);
      }
      this.chart.update();
    }
  
    updateCombinations(data: any, selectedParam: string, colorList: any) {
      const datasets = this.chart.config.data.datasets;
      let flag = data[0][2];

      for(let i = 0; i < data.length; i++) {
        const newData = {
          label: `${data[i][0].idPop} - ${data[i][0].idService}`,
          data: data[i][1][0][0],
          backgroundColor: colorList[i % 10],
          borderColor: colorList[i % 10],
          fill: false,
          flagIcon: this.buildFlag(flag, 'icon'),
          flagColor: this.buildFlag(flag, 'color'),
          segment: {
            borderColor: (ctx: any) => {
              if(data[i][1][0][0][ctx.p0DataIndex + 1].z > 0) {
                return '#FF0000';
              } else {
                return colorList[i % 10];
              }
            }
          }
        };
        datasets.push(newData);
        
      }
      this.chart.update();
    }

    buildFlag(flag: any, from: string) {
      if(from == 'icon') {
        if(flag == null) return '';
        if(flag == 0) return 'fas fa-arrow-circle-down fa-lg';
        else return 'fas fa-arrow-circle-up fa-lg';
      } else {
        if(flag == null) return '';
        if(flag == 0) return '#FF0000';
        else return '#4AB70F';
      }
    }

    getRandomColor() {
      return '#'+Math.floor(Math.random()*16777215).toString(16);
    }

    getId(id: number, type: string) {
      if(type == 'pop') {
        return this.capitals.filter((c: any) => c.cod === id)[0].id.toUpperCase();
      } else {
        return this.services.filter((c: any) => c.cod === id)[0].id.toUpperCase();
      }
    }
  
    clear() {
      this.chart.data.labels = [];
      this.chart.data.datasets = [];
      this.chart.options.plugins.legend.title.text = '';
      this.chart.config.options.scales.y.title.text = '';
      this.chart.update();
    }

    setConfig(selectedParam: string) {
      if(selectedParam == "timeseries") {
        this.isTimeSeries = true;
        this.chart.config.options.plugins.legend.display = false;
        this.chart.config.options.scales.x.title.text = 'Date';
        this.chart.config.options.scales.x.type = 'category';
      } else {
        this.isTimeSeries = false;
        this.chart.config.options.plugins.legend.display = true;
        this.chart.config.options.scales.x.title.text = 'Tempo (ms)';
        this.chart.config.options.scales.x.type = 'linear';
      }
      this.chart.update();
    }

    render() {
      this.chart.update();
    }
  
    removeDataset() {
      this.chart.config.data.labels = [];
      this.chart.config.data.datasets = [];
      this.chart.update();
    }

    valToDate(d: any) {
      const data = new Date(1000 * d)
      //@ts-ignore
      return data.toLocaleString('en-US', { dateStyle: 'short', timeZone: 'UTC' });
    }
  }