import { CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip } from 'chart.js';

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
              title: {
                display: true,
                text: ''
              },
              display: true,
              position: "top",
            },
            title: {
              display: true,
              text: 'CDF'
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
              type: 'linear',
              display: true,
              title: {
                display: true,
                text: 'Tempo (ms)'
              }
            },
            y: {
              display: true,
              title: {
                display: true,
                text: 'F(X)'
              }
            }
          }
        }
      });
    }
  
  
    //Modifica as configurações globais para os títulos
    setTitle(param: string, id: number) {
      if(id >= 0 ) this.chart.options.plugins.legend.title.text = `${param.toUpperCase()} ${this.getId(id, 'pop')}`; 
      else this.chart.options.plugins.legend.title.text = `${param.toUpperCase()}`;
    }
  
    setCapitals(capitals: any) {
      this.capitals = capitals;
    }
  
    setServices(services: any) {
      this.services = services;
    }

    updateData(data: any, colorList: any, param: string) {
      const datasets = this.chart.config.data.datasets;
      console.log(data)
      for(let i = 0; i < data.length; i++) {
        const newData = {
          label: (data[i][0] >= 0) ? this.getId(data[i][0], 'service') : param.toUpperCase(),
          data: data[i][1][0][0],
          backgroundColor: colorList[i],
          borderColor: colorList[i],
          fill: false
        };
        datasets.push(newData);
      }
      this.chart.update();
    }
  
    updateCombinations(data: any, selectedParam: string) {
      const datasets = this.chart.config.data.datasets;
      console.log(data)
 
      if(selectedParam !== "timeseries") {
        for(let i = 0; i < data.length; i++) {
          const color = this.getRandomColor();
          const newData = {
            label: `${data[i][0].idPop} - ${data[i][0].idService}`,
            data: data[i][1][0][0],
            backgroundColor: color,
            borderColor: color,
            fill: false
          };
          datasets.push(newData);
        }
      }
      this.chart.update();
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
        this.chart.config.options.scales.x.title.text = 'Date';
        this.chart.config.options.scales.x.type = 'category';
      } else {
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