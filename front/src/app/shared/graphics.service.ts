import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  //Falta alterar os tipos
  chartLeft: any;
  chartRight: any;
  chartBottom: any;
  listBairroClick: any = [];
  listPoly: any = [];
  dataChartLeft: any = [];

  constructor() { 

  }

  /***  Operações sobre o gráfico.  ***/
    /**
     * Difine o intervalo de Y no gráfico inferior.
     * @param {*} mn 
     * @param {*} mx 
     */
    compute_best_unity(mn:number, mx:number) {
      let div = 1;
      let potencia = 0;
      for (let i = 0; i < 20; i++) {
        if (mx/div < 100) {
          break;
        }
        potencia ++;
        div *= 10;
      }
      potencia -= potencia % 3;
      div = 1; for (let i=0;i<potencia;i++) div *= 10;
      
      let prefixos = [ "", "K x ", "M x ", "G x ", "T x ", "E x ", "P x " ];
      let prefixo = prefixos[potencia/3];

      let res = { prefix: prefixo, div: div };
      console.log('dsad',res)
      
      // logaritmica ou nao ////#########********###########
      if (mn && mx/(mn+1) > 1000) {
        //res.log = 1;
        
      } else {
        //res.log = 0;
      }

      return res;
    }

    /**
   * Formata o gráfico da esquerda.
   */
    // initChartLeft() {
    //   //Falta adicionar os componentes na pagina e recupera-los
    //   $('#chartLeftContainer').height(window.innerHeight - 350); // previus value 300
    //   $('#chartLeft').height(window.innerHeight - 400); // previus value 350

    //   this.chartLeft = new Bar('chartLeft');
    //   resetData();
    //   addXYMap(64, 0);
    //   addXYMap(124, 0);
    //   addXYMap(254, 0);
    //   let backgroundColor = getArrayColor('#AAAAAA');
    //   let borderColor = getArrayColor('#AAAAAA');
    //   let label = getLabel();
    //   let data = getDataMap();
    //   this.chartLeft.setLabels(label);
    //   this. chartLeft.addDataset('Map', data, backgroundColor, borderColor);
    // }

    /**
 * Formata o gráfico da direita.
 */
  // initChartRight() {
  //   $('#chartLeftContainer').height(window.innerHeight - 300);
  //   $('#chartRight').height(window.innerHeight - 350);

  //   this.chartRight = new Line('chartRight');
  //   this.chartRight.setTicksY({ min: -1, max: 1 });
  //   this.chartRight.setTypeX('linear');
  //   this.chartRight.setLabelY("Correlation");
  //   this.chartRight.setLabelX("Offset");

  //   let xy = [];
  //   this.chartRight.setLabels([]);

  //   xy.push({x: 1, y: 0.5});
  //   this.chartRight.addLabel(1);

  //   xy.push({x: 2, y: 0.55});
  //   this.chartRight.addLabel(2);

  //   xy.push({x: 3, y: 0.55});
  //   this.chartRight.addLabel(3);

  //   xy.push({x: 4, y: 0.5});
  //   this.chartRight.addLabel(4);

  //   xy.push({x: 5, y: 0.5});
  //   this.chartRight.addLabel(5);

  //   xy.push({x: 6, y: 0.55});
  //   this.chartRight.addLabel(6);

  //   xy.push({x: 7, y: 0.6});
  //   this.chartRight.addLabel(7);

  //   xy.push({x: 8, y: 0.6});
  //   this.chartRight.addLabel(8);

  //   xy.push({x: 9, y: 0.65});
  //   this.chartRight.addLabel(9);

  //   xy.push({x: 10, y: 0.65});
  //   this.chartRight.addLabel(10);

  //   this.chartRight.removeDataset("Map");
  //   this.chartRight.addDataset("Map", xy, "#AAAAAA");
  // }

  /**
 * Apresenta o gráfico inferior.
 */
  // initChartBottom() {
  //   this.chartBottom = new Line('chartBottom');
  // }

/**
 * Retorna o gráfico escolhido.
 * @param {*} position 
 */
  getChart(position:string) {
    if (position == 'left') {
      return this.chartLeft;
    } else if (position == 'right') {
      return this.chartRight;
    } else if (position == 'bottom') {
      return this.chartBottom;
    } else {
      return null;
    }
  }

  addXYMap(k:number, v:number) {
    let filter = this.dataChartLeft[k][2];
    let geometries = this.dataChartLeft[k][3];
    let units = this.dataChartLeft[k][4];
    this.dataChartLeft[k] = [true, v, filter, geometries, units];
  }
  
  addXYFilter(k:number, v:number) {
    let map = this.dataChartLeft[k][1];
    let geometries = this.dataChartLeft[k][3];
    let units = this.dataChartLeft[k][4];
    this.dataChartLeft[k] = [true, map, v, geometries, units];
  }

  addXYPoly(k:number, v:number) {
    let map = this.dataChartLeft[k][1];
    let filter = this.dataChartLeft[k][2];
    let geometries = this.dataChartLeft[k][3];
    let units = this.dataChartLeft[k][4];
    this.dataChartLeft[k] = [true, map, filter, geometries + v, units];
  }
  
  addXYUnit(k:number, v:number) {
    let map = this.dataChartLeft[k][1];
    let filter = this.dataChartLeft[k][2];
    let geometries = this.dataChartLeft[k][3];
    let units = this.dataChartLeft[k][4];
    this.dataChartLeft[k] = [true, map, filter, geometries, units + v];
  }

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
  
//   resetData() {
//     this.dataChartLeft = [];
//     for (let i=0; i<256; i++) {
//       this.dataChartLeft.push([false, 0, 0, 0, 0]);
//     }
//   }

//   /**
//  * Plota os dados do Mapa no gráfico da esquerda.
//  * @param {*} responseData 
//  */
//   drawMapChartLeft(responseData:any) { 
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
//  * Plota os dados do Mapa no gráfico da direita.
//  * @param {*} responseData 
//  */
//   drawMapChartRight(responseData:any) { 
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

//   /**
//  * Plota os dados do Filtro no gráfico da direita.
//  * @param {*} responseData 
//  */
//   drawFilterChartRight(responseData:any) { 
//     this.chartRight.setLabels([]);
//     let xy = [];
//     for (let i=0; i<responseData.result.length; i++) {
//       this.chartRight.addLabel(responseData.result[i][0]);
//       xy.push({x: responseData.result[i][0], y: responseData.result[i][1]});
//     }
//     this.chartRight.removeDataset('Filter');
//     this.chartRight.addDataset('Filter', xy, '#606060'); 
//   }

//   /**
//  * Atualiza o grafico da esquerda após remoção de bairro.
//  */
//   refreshBairroChartLeft() {
//     let listData = this.listBairroClick;
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
//     if (listData.length > 0) {
//       this.chartLeft.setLabels(label);
//       this.chartLeft.addDataset('Client', data, backgroundColor, borderColor);
//     }
//   }

//   /**
//  * Atualiza o grafico da direta após remoção de bairro.
//  */
//   refreshBairroChartRight() {
//     console.log("refreshBairroChartRight");
//   }

//   /**
//    * Remove bairro da lista.
//    * @param {*} layer 
//    */
//   removeBairroClick(codBairro:number) {
//     for (let i=0; i<this.listBairroClick.length; i++) {
//       if (this.listBairroClick[i].codigo == codBairro) {
//         this.listBairroClick.splice(i, 1);
//         break;
//       }
//     }  
//   }

//   /**
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
//   drawBairroChartLeft(codBairro:number, responseData:any) { 
//     this.chartLeft = this.getChart('left');    
//     let listData = this.addBairroClick(codBairro, responseData.result);
//     clearXYUnit();
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

//   /**
//    * Remove layer da lista.
//    * @param {*} layer 
//    */
//   removePoly(layer:any) {
//     for (let i=0; i<this.listPoly.length; i++) {
//       if ((((layer instanceof L.Rectangle) && ////I########mportacao
//           (this.listPoly[i].layer instanceof L.Rectangle)) ||
//           ((layer instanceof L.Polygon) &&
//           (this.listPoly[i].layer instanceof L.Polygon))) &&
//           (layer.options.color == this.listPoly[i].layer.options.color)) {
//             this.listPoly.splice(i, 1);
//         break;
//       }
//     }
//   }

//   /**
//    * Adiciona layer a lista.
//    * @param {*} layer 
//    * @param {*} data 
//    */
//   addPoly(layer:any, dataCovid:any) {
//     let achou = false;
//     for (let i=0; i<this.listPoly.length; i++) {
//       if ((((layer instanceof L.Rectangle) &&
//           (this.listPoly[i].layer instanceof L.Rectangle)) ||
//           ((layer instanceof L.Polygon) &&
//           (this.listPoly[i].layer instanceof L.Polygon))) &&
//           (layer.options.color == this.listPoly[i].layer.options.color)) {
//             this.listPoly[i].covid = dataCovid;
//         achou = true;
//         break;
//       }
//     }  
//     if (!achou) {
//       let poly = { 
//         layer: layer,
//         covid: dataCovid
//       };
//       this.listPoly.push(poly);
//     }
//     return this.listPoly;
//   }

//   /**
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
//    * Plota os dados das Geometrias no gráfico da direita.
//    * @param {*} responseData 
//    */
//   drawPolyChartRight(layer:any, responseData:any) { 
//     this.chartRight.setLabels([]);
//     let xy = [];
//     for (let i=0; i<responseData.result.length; i++) {
//       this.chartRight.addLabel(responseData.result[i][0]);
    
//       xy.push({x: responseData.result[i][0], y: responseData.result[i][1]});
//     }
//     this.chartRight.removeDataset('Geometries');
//     this.chartRight.addDataset('Geometries', xy, '#00AA00'); 
//   }

//   clearXYPoly() {
//     for (let i=0; i<256; i++) {
//       let active = this.dataChartLeft[i][0];
//       let map = this.dataChartLeft[i][1];
//       let filter = this.dataChartLeft[i][2];
//       let geometries = 0;
//       let units = this.dataChartLeft[i][4];
//       if (map == 0 && filter == 0 && geometries == 0 && units == 0) {
//         active = false;
//       }
//       this.dataChartLeft[i]=[active, map, filter, geometries, units];
//     }
//   }

//   clearXYUnit() {
//     for (let i=0; i<256; i++) {
//       let active = this.dataChartLeft[i][0];
//       let map = this.dataChartLeft[i][1];
//       let filter = this.dataChartLeft[i][2];
//       let geometries = this.dataChartLeft[i][3];
//       let units = 0;
//       if (map == 0 && filter == 0 && geometries == 0 && units == 0) {
//         active = false;
//       }
//       this.dataChartLeft[i]=[active, map, filter, geometries, units];
//     }
//   }

//   /**
//    * Atualiza o grafico da esquerda após remoção de layer.
//    */
//   refreshPolyChartLeft() {
//     this.chartLeft = this.getChart('left');  

//     let listData = this.listPoly;
//     this.clearXYPoly();
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
//     if (listData.length > 0) {
//       this.chartLeft.setLabels(label);
//       this.chartLeft.addDataset('Geometries', data, backgroundColor, borderColor);  
//     }
//   }

//   /**
//    * Atualiza o grafico da direta após remoção de layer.
//    */
//   refreshPolyChartRight() {
//     console.log("refreshPolyChartRight");
//   }

//   /**
//    * Remove um poligono do gráfico inferior.
//    * @param {*} layer 
//    */
//   removePolyInChartBottom(layer:any) {
//     let datasetLabel = this.getLayerType(layer);
//     let datasetColor = layer.options.color;
//     this.chartBottom = this.getChart('bottom');
//     this.chartBottom.removePolyDataset(datasetLabel, datasetColor);
//   }

//   /**
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
