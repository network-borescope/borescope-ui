import { ViewChild, ElementRef, Directive } from '@angular/core';

import { CategoryScale, Chart, LinearScale, BarController, BarElement, PointElement, Title } from 'chart.js';

@Directive()
export class Bar {

    // referência para o div do grafico
  @ViewChild("barChart", { static: true }) private barDiv?: ElementRef;
  chart: any;
  
    
  //Configuração do grafico
  barChartMethod(){
    if (this.barDiv === undefined) {
      return;
    }
    //Registra os elementos utilizados pelo grafico
    Chart.register(PointElement, BarController, BarElement, CategoryScale, LinearScale, Title);

    //
    this.chart = new Chart(this.barDiv.nativeElement, {
      type: 'bar',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        plugins:{
          legend: {
            display: true
          },
          title: {
            display: false
          }
        },
        responsive: false,
        scales: {
          x:{
            title:{
                display: true,
                text: 'TTL'
              }
            },
          y:{
            beginAtZero: true,
            title: {
              display: true,
              text: 'Relative Frequency'
            }
          }
        }
      }
    });
  }

  /**
 * Atribui funcionalidades a classe do gráfico de barras.
 */
  prototype = {
    //Modifica as configurações globais para os títulos
    setTitle: (title:string) => {
      this.chart.options.plugins.title.text = title;
      this.chart.options.plugins.title.display = true;
    },

    //Modifica as configurações globais dos ticks comuns para eixos
    setTicksX: (ticks:any) => {
      this.chart.options.scales.x[0].ticks = ticks; /////##########
    },
    setTicksY: (ticks:any) => {
      this.chart.options.scales.y[0].ticks = ticks;/////##########
    },

    //Modifica as configurações globais dos dos tipos
    setTypeX: (type:string) => {
      this.chart.options.scales.x[0].type = type;
    },
    setTypeY: (type:string) => {
      this.chart.options.scales.y[0].type = type;
    },

    //Modifica as configurações globais dos labels
    setLabelX: (label:string) => {
      this.chart.options.scales.x[0].title.text = label;
      this.chart.options.scales.x[0].title.display = true;
    },
    setLabelY: (label:string) => {
      this.chart.options.scales.y[0].title.text = label;
      this.chart.options.scales.y[0].title.display = true;
    },
    setLabels: (labels:any) => {
      this.chart.config.data.labels = labels;
    },

    addLabel: (label:any) => {
      let labels = this.chart.config.data.labels;
      let found = false;
      for (let i=0; i<labels.length; i++) {
        if (labels[i] == label) {
          found = true;
          break;
        }
      }
      if (!found) {
        labels.push(label);
      }
    },
    addData: (data:any) => {
      let datasets = this.chart.config.data.datasets;
      for (let i=0; i<datasets.length; i++) {
        datasets[i].data.push(data[i]);
      }
      this.chart.update();
    },
    addDataset: (label:any, data:any, color:string) => {
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
    },
    removePolyDataset: (label:any, color:string) => {
      let datasets = this.chart.config.data.datasets;
      for (let i=0; i<datasets.length; i++) {
        let dataset = datasets[i];
        if ((dataset.label == label) &&
            (dataset.backgroundColor == color) &&
            (dataset.borderColor == color)) {
          datasets.splice(i, 1);
          break;
        }
      }
      this.chart.update();
    },
    removeDataset: (label:any) => {
      let datasets = this.chart.config.data.datasets;
      for (let i=0; i<datasets.length; i++) {
        let dataset = datasets[i];
        if (dataset.label == label) {
          datasets.splice(i, 1);
          break;
        }
      }
      this.chart.update();
    },
    clear: () => {
      this.chart.data.labels = [];
      this.chart.data.datasets = [];
      this.chart.update();
    }
  };

}
