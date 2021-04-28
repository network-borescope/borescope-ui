import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { CategoryScale, Chart, LinearScale, BarController, BarElement, PointElement, Title } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit{

  // referência para o div do grafico
  @ViewChild("barChart", { static: true }) private barDiv?: ElementRef;

  public zIndex: string = '1000';

  chart: any;

  ngOnInit(): void {
    this.barChartMethod();
  }

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
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        datasets: [{
          data: [10, 9, 12, 19, 21, 7],
          borderColor: 'rgb(245,222,179)',
        }
        ]
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

//   /**
//  * Plota os dados do Mapa no gráfico da direita.
//  * @param {*} responseData 
//  */
//    drawMapChartRight(responseData:any) { 
//     this.chartRight.setLabels([]);
//     let xy = [];
//     for (let i=0; i<responseData.result.length; i++) {
//       this.chartRight.addLabel(responseData.result[i][0]);
//       xy.push({x: responseData.result[i][0], y: responseData.result[i][1]});
//     }
//     this.chartRight.removeDataset('Map');
//     this.chartRight.addDataset('Map', xy, '#AAAAAA'); 
//   }


//   /**
//  * Plota os dados do Filtro no gráfico da direita.
//  * @param {*} responseData 
//  */
//    drawFilterChartRight(responseData:any) { 
//     this.chartRight.setLabels([]);
//     let xy = [];
//     for (let i=0; i<responseData.result.length; i++) {
//       this.chartRight.addLabel(responseData.result[i][0]);
//       xy.push({x: responseData.result[i][0], y: responseData.result[i][1]});
//     }
//     this.chartRight.removeDataset('Filter');
//     this.chartRight.addDataset('Filter', xy, '#606060'); 
//   }

//     /**
//    * Remove bairro da lista.
//    * @param {*} layer 
//    */
//      removeBairroClick(codBairro:number) {
//       for (let i=0; i<this.listBairroClick.length; i++) {
//         if (this.listBairroClick[i].codigo == codBairro) {
//           this.listBairroClick.splice(i, 1);
//           break;
//         }
//       }  
//     }


//   /**
//    * Plota os dados dos Bairros no gráfico da direita.
//    * @param {*} responseData 
//    */
//   drawBairroChartRight(codBairro:number, responseData:any) { 
//     this.chartRight.setLabels([]);
//     let xy = [];
//     for (let i=0; i<responseData.result.length; i++) {
//       this.chartRight.addLabel(responseData.result[i][0]);
//       xy.push({x: responseData.result[i][0], y: responseData.result[i][1]});
//     }
//     this.chartRight.removeDataset('Client');
//     this.chartRight.addDataset('Client', xy, '#AA0000'); 
//   }

//    /**
//    * Plota os dados das Geometrias no gráfico da direita.
//    * @param {*} responseData 
//    */
//     drawPolyChartRight(layer:any, responseData:any) { 
//       this.chartRight.setLabels([]);
//       let xy = [];
//       for (let i=0; i<responseData.result.length; i++) {
//         this.chartRight.addLabel(responseData.result[i][0]);
      
//         xy.push({x: responseData.result[i][0], y: responseData.result[i][1]});
//       }
//       this.chartRight.removeDataset('Geometries');
//       this.chartRight.addDataset('Geometries', xy, '#00AA00'); 
//     }

//     clearXYPoly() {
//       for (let i=0; i<256; i++) {
//         let active = this.dataChartLeft[i][0];
//         let map = this.dataChartLeft[i][1];
//         let filter = this.dataChartLeft[i][2];
//         let geometries = 0;
//         let units = this.dataChartLeft[i][4];
//         if (map == 0 && filter == 0 && geometries == 0 && units == 0) {
//           active = false;
//         }
//         this.dataChartLeft[i]=[active, map, filter, geometries, units];
//       }
//     }
  
//     clearXYUnit() {
//       for (let i=0; i<256; i++) {
//         let active = this.dataChartLeft[i][0];
//         let map = this.dataChartLeft[i][1];
//         let filter = this.dataChartLeft[i][2];
//         let geometries = this.dataChartLeft[i][3];
//         let units = 0;
//         if (map == 0 && filter == 0 && geometries == 0 && units == 0) {
//           active = false;
//         }
//         this.dataChartLeft[i]=[active, map, filter, geometries, units];
//       }
//     }
  
//     /**
//      * Atualiza o grafico da esquerda após remoção de layer.
//      */
//     refreshPolyChartLeft() {
//       this.chartLeft = this.getChart('left');  
  
//       let listData = this.listPoly;
//       this.clearXYPoly();
//       for (let i=0; i<listData.length; i++) {
//         for (let j=0; j<listData[i].covid.length; j++) {
//           this.addXYPoly(listData[i].covid[j].k[0], listData[i].covid[j].v[0]);
//         }
//       }
//       let backgroundColor = this.getArrayColor('#00AA00');
//       let borderColor = this.getArrayColor('#00AA00');
//       let label = this.getLabel();
//       let data = this.getDataGeometries();
//       let total = 0;
//       for (let i=0; i<data.length; i++) {
//         total = total + data[i];
//       }
//       for (let i=0; i<data.length; i++) {
//         data[i] = data[i]/total;
//       }
  
//       this.chartLeft.removeDataset('Geometries');
//       if (listData.length > 0) {
//         this.chartLeft.setLabels(label);
//         this.chartLeft.addDataset('Geometries', data, backgroundColor, borderColor);  
//       }
//     }

//     /**
//    * Atualiza grafico da direita após mudança temporal.
//    */
//   updatePoly() {
//     for (let i=0; i<this.listPoly.length; i++) {
//       let layer = this.listPoly[i].layer;
//       this.removePoly(layer);
//       this.requestPoly2ChartLeft(layer);
//       this.requestPoly2ChartRight(layer);
//     }
//   }

//   /**
//    * Atualiza grafico da direita após mudança temporal.
//    */
//   updateBairro() {
//     for (let i=0; i<this.listBairroClick.length; i++) {
//       let codBairro = this.listBairroClick[i].codigo;
//       this.removeBairroClick(codBairro);
//       this.requestBairro2ChartLeft(codBairro);  
//       this.requestBairro2ChartRight(codBairro);  
//     }
//   }




}
