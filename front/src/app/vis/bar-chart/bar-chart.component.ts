import { Component, OnInit } from '@angular/core';

import { Bar } from './bar';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit{

  chartLeft: any;
  dataChartLeft:any = [];

  bar = new Bar();
  //public zIndex: string = '1000';

  
  ngOnInit(): void {
    this.ChartRightBar();
  }
  
    /* Formata o gráfico da esquerda. ---- Gráfico de Barra
    */
  ChartRightBar() {
    //$('#chartLeftContainer').height(window.innerHeight - 350); // previus value 300
   //$('#chartLeft').height(window.innerHeight - 400); // previus value 350
  
    this.chartLeft = this.bar.barChartMethod();
    this.resetData();
    this.addXYMap(64, 0);
    this.addXYMap(124, 0);
    this.addXYMap(254, 0);
    let backgroundColor = this.getArrayColor('#AAAAAA');
    let borderColor = this.getArrayColor('#AAAAAA');
    let label = this.getLabel();
    let data = this.getDataMap();
    this.chartLeft.setLabels(label);
    this.chartLeft.addDataset('Map', data, backgroundColor, borderColor);
  }

  /**
 * Plota os dados do Mapa no gráfico da esquerda. ---- Gráfico de Barra
 * @param {*} responseData 
 */
  drawMapChartLeft(responseData:any) { 
    //this.chartLeft = this.getChart('left'); 
    let total = 0;
    for (let i=0; i<responseData.result.length; i++) {
      total = total + responseData.result[i].v[0];
    }
    for (let i=0; i<responseData.result.length; i++) {
      this.addXYMap(responseData.result[i].k[0], responseData.result[i].v[0]/total);
    }
    let backgroundColor = this.getArrayColor('#AAAAAA');
    let borderColor = this.getArrayColor('#AAAAAA');
    let label = this.getLabel();
    let data = this.getDataMap();
    this.chartLeft.removeDataset('Map');
    this.chartLeft.setLabels(label);
    this.chartLeft.addDataset('Map', data, backgroundColor, borderColor);
  }


  clearXYUnit() {
    for (let i=0; i<256; i++) {
      let active = this.dataChartLeft[i][0];
      let map = this.dataChartLeft[i][1];
      let filter = this.dataChartLeft[i][2];
      let geometries = this.dataChartLeft[i][3];
      let units = 0;
      if (map == 0 && filter == 0 && geometries == 0 && units == 0) {
        active = false;
      }
      this.dataChartLeft[i]=[active, map, filter, geometries, units];
    }
  }

  resetData() {
    this.dataChartLeft = [];
    for (let i=0; i<256; i++) {
      this.dataChartLeft.push([false, 0, 0, 0, 0]);
    }
  }

  addXYMap(k:number, v:number) {
    let filter = this.dataChartLeft[k][2];
    let geometries = this.dataChartLeft[k][3];
    let units = this.dataChartLeft[k][4];
    this.dataChartLeft[k] = [true, v, filter, geometries, units];
  }

  getArrayColor(color:any) {
    let result = [];
    for (let i=0; i<this.dataChartLeft.length; i++) {
      if (this.dataChartLeft[i][0] == true) {
        result.push(color);
      }
    }
    return result;
  }

  getLabel() {
    let result = [];
    for (let i=0; i<this.dataChartLeft.length; i++) {
      if (this.dataChartLeft[i][0] == true) {
        result.push(i);
      }
    }
    return result;
  }

  getDataMap() {
    let result = [];
    for (let i=0; i<this.dataChartLeft.length; i++) {
      if (this.dataChartLeft[i][0] == true) {
        result.push(this.dataChartLeft[i][1]);
      }
    }
    return result;
  }
  
}