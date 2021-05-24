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

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.barChart = new BarChart(this.barDiv.nativeElement);
    this.resetData();
  }

  /**
 * Plota os dados do Mapa no grafico.
 */
  drawChart(responseData: any, chartId: string, chartColor: string) {
    let total = 0;
    for (let i = 0; i < responseData.result.length; i++) {
      total = total + responseData.result[i].v[0];
    }
    for (let i = 0; i < responseData.result.length; i++) {
      this.addXYMap(responseData.result[i].k[0], responseData.result[i].v[0] / total);
    }
    let backgroundColor = this.getArrayColor(chartColor);
    let borderColor = this.getArrayColor(chartColor);
    let label = this.getLabel();
    let data = this.getDataMap();
    this.barChart.removeDataset(chartId);
    this.barChart.setLabels(label);
    this.barChart.addDataset(chartId, data, backgroundColor, borderColor);
  }
  clearXYUnit() {
    for (let i = 0; i < 256; i++) {
      let active = this.chartData[i][0];
      let map = this.chartData[i][1];
      let filter = this.chartData[i][2];
      let geometries = this.chartData[i][3];
      let units = 0;
      if (map == 0 && filter == 0 && geometries == 0 && units == 0) {
        active = false;
      }
      this.chartData[i] = [active, map, filter, geometries, units];
    }
  }

  resetData() {
    this.chartData = [];
    for (let i = 0; i < 256; i++) {
      this.chartData.push([false, 0, 0, 0, 0]);
    }
  }

  addXYMap(k: number, v: number) {
    let filter = this.chartData[k][2];
    let geometries = this.chartData[k][3];
    let units = this.chartData[k][4];
    this.chartData[k] = [true, v, filter, geometries, units];
  }

  getArrayColor(color: any) {
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

  getDataMap() {
    let result = [];
    for (let i = 0; i < this.chartData.length; i++) {
      if (this.chartData[i][0] == true) {
        result.push(this.chartData[i][1]);
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
