import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';
import { BarChart } from './bar';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  // referência para o div do grafico
  @ViewChild("barChart", { static: true }) private barDiv!: ElementRef;

  private barChart: any;
  private chartData: any = [];
  private nClass: number = 256;

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.barChart = new BarChart(this.barDiv.nativeElement);
    this.resetData();
  }

  /**
 * Plota os dados do Mapa no grafico.
 */
  drawChart(responseData: any, infoId: string, chartColor: string) {
    // calcula a soma dos valores em results
    const total = responseData.result.reduce((a: any, b: any) => {
      return a + b.v[0];
    }, 0);

    // adiciona os valores normalizados ao dataset
    for (let i = 0; i < responseData.result.length; i++) {
      const pointId = responseData.result[i].k[0];
      const pointVl = responseData.result[i].v[0];

      this.addDataInfo(infoId, pointId, pointVl / total);
    }

    const fillColor = this.getColor(chartColor);
    const strokeColor = fillColor;

    const label = this.getLabel();
    const data = this.getData(infoId);

    this.barChart.removeDataset(infoId);
    this.barChart.setLabels(label);
    this.barChart.addDataset(infoId, data, fillColor, strokeColor);
  }

  resetData() {
    this.chartData = [];
    for (let i = 0; i < this.nClass; i++) {
      this.chartData.push([false, 0, 0, 0, 0]);
    }
  }

  clearDataInfo(infoId: string) {
    for (let i = 0; i < this.nClass; i++) {
      // available info channels
      const map = (infoId === 'map') ? 0 : this.chartData[i][1];
      const filter = (infoId === 'filter') ? 0 : this.chartData[i][2];
      const geometry = (infoId === 'geometry') ? 0 : this.chartData[i][3];
      const unity = (infoId === 'unity') ? 0 : this.chartData[i][4];

      // is data active?
      const active = map || filter || geometry || unity;

      // stores the data
      this.chartData[i] = [active, map, filter, geometry, unity];
    }

    this.barChart.removeDataset(infoId);
  }

  addDataInfo(infoId: string, k: number, v: number) {
    // available info channels
    const map = (infoId === 'map') ? v : this.chartData[k][1];
    const filter = (infoId === 'filter') ? v : this.chartData[k][2];
    const geometry = this.chartData[k][3] + (infoId === 'geometry') ? v  : 0;
    const unity = this.chartData[k][4] + (infoId === 'unity') ? v : 0;

    // stores the data
    this.chartData[k] = [true, map, filter, geometry, unity];
  }

  getColor(color: any) {
    let result = [];
    for (let i = 0; i < this.chartData.length; i++) {
      if (this.chartData[i][0] == true) {
        result.push(color);
      }
    }
    return result;
  }

  getLabel() {
    let result = [];
    for (let i = 0; i < this.chartData.length; i++) {
      if (this.chartData[i][0] == true) {
        result.push(i);
      }
    }
    return result;
  }

  getData(infoId: string) {
    let result = [];
    for (let i = 0; i < this.chartData.length; i++) {
      if (this.chartData[i][0]) {
        if (infoId === 'map') {
          result.push(this.chartData[i][1]);
        }
        if (infoId === 'filter') {
          result.push(this.chartData[i][2]);
        }
        if (infoId === 'geometry') {
          result.push(this.chartData[i][3]);
        }
        if (infoId === 'unity') {
          result.push(this.chartData[i][4]);
        }
      }
    }
    return result;
  }
}

/**

  //   /**
  //  * Plota os dados do Filtro no gráfico da esquerda.
  //  */
  //   drawFilterChartLeft(responseData:any) {
  //     this.chartLeft = this.getChart('left');
  //     let total = 0;
  //     for (let i=0; i<responseData.result.length; i++) {
  //       total = total + responseData.result[i].v[0];
  //     }
  //     for (let i=0; i<responseData.result.length; i++) {
  //       this.addXYFilter(responseData.result[i].k[0], responseData.result[i].v[0]/total);
  //     }
  //     let backgroundColor = this.getArrayColor('#606060');
  //     let borderColor = this.getArrayColor('#606060');
  //     let label = this.getLabel();
  //     let data = this.getDataFilter();
  //     this.chartLeft.removeDataset('Filter');
  //     this.chartLeft.setLabels(label);
  //     this.chartLeft.addDataset('Filter', data, backgroundColor, borderColor);
  //   }


  //     /**
  //  * Atualiza o grafico da esquerda após remoção de bairro.
  //  */
  //      refreshBairroChartLeft() {
  //       let listData = this.listBairroClick;
  //       this.clearXYUnit();
  //       let t64 = 0;
  //       let t128 = 0;
  //       let t256 = 0;
  //       for (let i=0; i<listData.length; i++) {
  //         for (let j=0; j<listData[i].covid.length; j++) {
  //           if (listData[i].covid[j].k[0] < 64) {
  //             t64 = t64 + listData[i].covid[j].v[0];
  //           } else if (listData[i].covid[j].k[0] < 128) {
  //             t128 = t128 + listData[i].covid[j].v[0];
  //           } else {
  //             t256 = t256 + listData[i].covid[j].v[0];
  //           }
  //           this.addXYUnit(listData[i].covid[j].k[0], listData[i].covid[j].v[0]);
  //         }
  //       }
  //       let backgroundColor = this.getArrayColor('#AA0000');
  //       let borderColor = this.getArrayColor('#AA0000');
  //       let label = this.getLabel();
  //       let data = this.getDataUnits();
  //       let total = 0;
  //       for (let i=0; i<data.length; i++) {
  //         total = total + data[i];
  //       }
  //       for (let i=0; i<data.length; i++) {
  //         data[i] = data[i]/total;
  //       }
  //       this.chartLeft.removeDataset('Client');
  //       if (listData.length > 0) {
  //         this.chartLeft.setLabels(label);
  //         this.chartLeft.addDataset('Client', data, backgroundColor, borderColor);
  //       }
  //     }

  //       /**
  //    * Adiciona bairro a lista.
  //    * @param {*} codBairro
  //    * @param {*} data
  //    */
  //   addBairroClick(codBairro:number, dataCovid:any) {
  //     let achou = false;
  //     for (let i=0; i<this.listBairroClick.length; i++) {
  //       if (this.listBairroClick[i].codigo == codBairro) {
  //         this.listBairroClick[i].covid = dataCovid;
  //         achou = true;
  //         break;
  //       }
  //     }
  //     if (!achou) {
  //       let bairro = {
  //         codigo: codBairro,
  //         covid: dataCovid
  //       };
  //       this.listBairroClick.push(bairro);
  //     }
  //     return this.listBairroClick;

  //   }
  //   /**
  //    * Plota os dados dos Bairros no gráfico da esquerda.
  //    * @param {*} responseData
  //    */
  //    drawBairroChartLeft(codBairro:number, responseData:any) {
  //     this.chartLeft = this.getChart('left');
  //     let listData = this.addBairroClick(codBairro, responseData.result);
  //     this.clearXYUnit();
  //     let t64 = 0;
  //     let t128 = 0;
  //     let t256 = 0;
  //     for (let i=0; i<listData.length; i++) {
  //       for (let j=0; j<listData[i].covid.length; j++) {
  //         if (listData[i].covid[j].k[0] < 64) {
  //           t64 = t64 + listData[i].covid[j].v[0];
  //         } else if (listData[i].covid[j].k[0] < 128) {
  //           t128 = t128 + listData[i].covid[j].v[0];
  //         } else {
  //           t256 = t256 + listData[i].covid[j].v[0];
  //         }
  //         this.addXYUnit(listData[i].covid[j].k[0], listData[i].covid[j].v[0]);
  //       }
  //     }
  //     let backgroundColor = this.getArrayColor('#AA0000');
  //     let borderColor = this.getArrayColor('#AA0000');
  //     let label = this.getLabel();
  //     let data = this.getDataUnits();
  //     let total = 0;
  //     for (let i=0; i<data.length; i++) {
  //       total = total + data[i];
  //     }
  //     for (let i=0; i<data.length; i++) {
  //       data[i] = data[i]/total;
  //     }
  //     this.chartLeft.removeDataset('Client');
  //     this.chartLeft.setLabels(label);
  //     this.chartLeft.addDataset('Client', data, backgroundColor, borderColor);

  //     let id = '#idBairro' + codBairro + '_64';
  //     $(id).text(t64);
  //     id = '#idBairro' + codBairro + '_128';
  //     $(id).text(t128);
  //     id = '#idBairro' + codBairro + '_256';
  //     $(id).text(t256);
  //     this.setCovidBairro(codBairro, t64, t128, t256);
  //   }

  //  /**
  //    * Plota os dados das Geometrias no gráfico da esquerda.
  //    * @param {*} responseData
  //    */
  //   drawPolyChartLeft(layer:any, responseData:any) {
  //     this.chartLeft = this.getChart('left');
  //     let listData = this.addPoly(layer, responseData.result);
  //     clearXYPoly();
  //     for (let i=0; i<listData.length; i++) {
  //       for (let j=0; j<listData[i].covid.length; j++) {
  //         this.addXYPoly(listData[i].covid[j].k[0], listData[i].covid[j].v[0]);
  //       }
  //     }
  //     let backgroundColor = this.getArrayColor('#00AA00');
  //     let borderColor = this.getArrayColor('#00AA00');
  //     let label = this.getLabel();
  //     let data = this.getDataGeometries();
  //     let total = 0;
  //     for (let i=0; i<data.length; i++) {
  //       total = total + data[i];
  //     }
  //     for (let i=0; i<data.length; i++) {
  //       data[i] = data[i]/total;
  //     }
  //     this.chartLeft.removeDataset('Geometries');
  //     this.chartLeft.setLabels(label);
  //     this.chartLeft.addDataset('Geometries', data, backgroundColor, borderColor);
  //   }


  //   /**
  //    * Remove um poligono do gráfico inferior.
  //    * @param {*} layer
  //    */
  //    removePolyInChartBottom(layer:any) {
  //     let datasetLabel = this.getLayerType(layer);
  //     let datasetColor = layer.options.color;
  //     this.chartBottom = this.getChart('bottom');
  //     this.chartBottom.removePolyDataset(datasetLabel, datasetColor);
  //   }
