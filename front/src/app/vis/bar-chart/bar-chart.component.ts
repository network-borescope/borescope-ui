import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { BarChart } from './bar';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit{

  // referência para o div do grafico
  @ViewChild("barChart", { static: true }) private barDiv!: ElementRef;

  barChart: any;
  chartData:any = [];

  //public zIndex: string = '1000';


  ngOnInit(): void {
    this.barChart = new BarChart(this.barDiv.nativeElement);
    this.ChartRightBar();
  }

    /* Formata o gráfico da esquerda. ---- Gráfico de Barra
    */
  ChartRightBar() {
    //$('#chartLeftContainer').height(window.innerHeight - 350); // previus value 300
   //$('#chartLeft').height(window.innerHeight - 400); // previus value 350

    this.resetData();
    this.addXYMap(64, 0);
    this.addXYMap(124, 0);
    this.addXYMap(254, 0);
    let backgroundColor = this.getArrayColor('#AAAAAA');
    let borderColor = this.getArrayColor('#AAAAAA');
    let label = this.getLabel();
    let data = this.getDataMap();
    this.barChart.setLabels(label);
    this.barChart.addDataset('Map', data, backgroundColor, borderColor);
  }

  /**
 * Plota os dados do Mapa no gráfico da esquerda. ---- Gráfico de Barra
 * @param {*} responseData
 */
  drawChart(responseData:any) {
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
    this.barChart.removeDataset('Map');
    this.barChart.setLabels(label);
    this.barChart.addDataset('Map', data, backgroundColor, borderColor);
  }


  clearXYUnit() {
    for (let i=0; i<256; i++) {
      let active = this.chartData[i][0];
      let map = this.chartData[i][1];
      let filter = this.chartData[i][2];
      let geometries = this.chartData[i][3];
      let units = 0;
      if (map == 0 && filter == 0 && geometries == 0 && units == 0) {
        active = false;
      }
      this.chartData[i]=[active, map, filter, geometries, units];
    }
  }

  resetData() {
    this.chartData = [];
    for (let i=0; i<256; i++) {
      this.chartData.push([false, 0, 0, 0, 0]);
    }
  }

  addXYMap(k:number, v:number) {
    let filter = this.chartData[k][2];
    let geometries = this.chartData[k][3];
    let units = this.chartData[k][4];
    this.chartData[k] = [true, v, filter, geometries, units];
  }

  getArrayColor(color:any) {
    let result = [];
    for (let i=0; i<this.chartData.length; i++) {
      if (this.chartData[i][0] == true) {
        result.push(color);
      }
    }
    return result;
  }

  getLabel() {
    let result = [];
    for (let i=0; i<this.chartData.length; i++) {
      if (this.chartData[i][0] == true) {
        result.push(i);
      }
    }
    return result;
  }

  getDataMap() {
    let result = [];
    for (let i=0; i<this.chartData.length; i++) {
      if (this.chartData[i][0] == true) {
        result.push(this.chartData[i][1]);
      }
    }
    return result;
  }
}
