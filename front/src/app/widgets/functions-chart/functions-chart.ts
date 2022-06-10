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
    setTitle(id: number) {
      if(id >= 0 ) this.chart.options.plugins.legend.title.text = this.getId(id, 'pop');
    }
  
    setCapitals(capitals: any) {
      this.capitals = capitals;
    }
  
    setServices(services: any) {
      this.services = services;
    }
  
    updateData(data: any, colorList: any, param: string) {
      const datasets = this.chart.config.data.datasets;
      for(let i = 0; i < data.length; i++) {
        console.log(data[i])
        const newData = {
          label: param.toUpperCase(),
          data: data[i],
          backgroundColor: colorList[i],
          borderColor: colorList[i],
          fill: false
        };
        datasets.push(newData);
      }
      this.chart.update();
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
      this.chart.config.options.scales.y.title.text = '';
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
  }