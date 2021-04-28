import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Line } from './line';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  chartline: any;

  constructor(line: Line){

  }


  ngOnInit(): void {
     //this.lineChartMethod();

  }
}
  

/** 
    
  //   addXYMap(k:number, v:number) {
  //     let filter = this.dataChartLeft[k][2];
  //     let geometries = this.dataChartLeft[k][3];
  //     let units = this.dataChartLeft[k][4];
  //     this.dataChartLeft[k] = [true, v, filter, geometries, units];
  //   }
    
  //   addXYFilter(k:number, v:number) {
  //     let map = this.dataChartLeft[k][1];
  //     let geometries = this.dataChartLeft[k][3];
  //     let units = this.dataChartLeft[k][4];
  //     this.dataChartLeft[k] = [true, map, v, geometries, units];
  //   }

  //   addXYPoly(k:number, v:number) {
  //     let map = this.dataChartLeft[k][1];
  //     let filter = this.dataChartLeft[k][2];
  //     let geometries = this.dataChartLeft[k][3];
  //     let units = this.dataChartLeft[k][4];
  //     this.dataChartLeft[k] = [true, map, filter, geometries + v, units];
  //   }
    
  //   addXYUnit(k:number, v:number) {
  //     let map = this.dataChartLeft[k][1];
  //     let filter = this.dataChartLeft[k][2];
  //     let geometries = this.dataChartLeft[k][3];
  //     let units = this.dataChartLeft[k][4];
  //     this.dataChartLeft[k] = [true, map, filter, geometries, units + v];
  //   }

  //   getArrayColor(color:string) {
  //     let result = [];
  //     for (let i=0; i<this.dataChartLeft.length; i++) {
  //       if (this.dataChartLeft[i][0] == true) {
  //         result.push(color);
  //       }
  //     }
  //     return result;
  //   }

  //   getLabel() {
  //     let result = [];
  //     for (let i=0; i<this.dataChartLeft.length; i++) {
  //       if (this.dataChartLeft[i][0] == true) {
  //         result.push(i);
  //       }
  //     }
  //     return result;
  //   }

  //   getDataMap() {
  //     let result = [];
  //     for (let i=0; i<this.dataChartLeft.length; i++) {
  //       if (this.dataChartLeft[i][0] == true) {
  //         result.push(this.dataChartLeft[i][1]);
  //       }
  //     }
  //     return result;
  //   }

  //   getDataFilter() {
  //     let result = [];
  //     for (let i=0; i<this.dataChartLeft.length; i++) {
  //       if (this.dataChartLeft[i][0] == true) {
  //         result.push(this.dataChartLeft[i][2]);
  //       }
  //     }
  //     return result;
  //   }

  //   getDataGeometries() {
  //     let result = [];
  //     for (let i=0; i<this.dataChartLeft.length; i++) {
  //       if (this.dataChartLeft[i][0] == true) {
  //         result.push(this.dataChartLeft[i][3]);
  //       }
  //     }
  //     return result;
  //   }
    
  //   getDataUnits() {
  //     let result = [];
  //     for (let i=0; i<this.dataChartLeft.length; i++) {
  //       if (this.dataChartLeft[i][0] == true) {
  //         result.push(this.dataChartLeft[i][4]);
  //       }
  //     }
  //     return result;
  //   }


  //   /**
  //  * Plota os dados do Mapa no gráfico da esquerda.
  //  * //@param {*} responseData 
  //  */
  //    drawMapChartLeft(responseData:any) { 
  //     this.chartLeft = this.getChart('left'); 
  //     let total = 0;
  //     for (let i=0; i<responseData.result.length; i++) {
  //       total = total + responseData.result[i].v[0];
  //     }
  //     for (let i=0; i<responseData.result.length; i++) {
  //       this.addXYMap(responseData.result[i].k[0], responseData.result[i].v[0]/total);
  //     }
  //     let backgroundColor = this.getArrayColor('#AAAAAA');
  //     let borderColor = this.getArrayColor('#AAAAAA');
  //     let label = this.getLabel();
  //     let data = this.getDataMap();
  //     this.chartLeft.removeDataset('Map');
  //     this.chartLeft.setLabels(label);
  //     this.chartLeft.addDataset('Map', data, backgroundColor, borderColor);
  //   }

  //   /**
  //  * Plota os dados do Filtro no gráfico da esquerda.
  //  * @param {*} responseData 
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