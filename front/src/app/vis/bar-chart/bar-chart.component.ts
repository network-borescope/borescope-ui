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
  private nMarks: number = 256;

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.barChart = new BarChart(this.barDiv.nativeElement);
    this.resetData();
  }

  /**
 * Plota os dados do Mapa no grafico.
 */
  drawChart(responseData: any, dataId: string, chartColor: string) {
    // calcula a soma dos valores em results
    const total = responseData.result.reduce((a: any, b: any) => {
      return a + b.v[0];
    }, 0);

    // this.nMarks = responseData.result.length;

    // adiciona os valores normalizados ao dataset
    for (let i = 0; i < responseData.result.length; i++) {
      const pointId = responseData.result[i].k[0];
      const pointVl = responseData.result[i].v[0] / total;

      this.addDataInfo(dataId, pointId, pointVl);
    }

    const labels = this.getLabels();
    const data = this.getData(dataId);

    this.barChart.removeDataset(dataId);
    this.barChart.setLabels(labels);
    this.barChart.addDataset(dataId, data, chartColor);
  }

  resetData() {
    this.chartData = [];
    for (let i = 0; i < this.nMarks; i++) {
      this.chartData.push([false, 0, 0, 0, 0]);
    }
  }

  clearDataInfo(dataId: string) {
    for (let i = 0; i < this.nMarks; i++) {
      // available info channels
      const map = (dataId === 'map') ? 0 : this.chartData[i][1];
      const filter = (dataId === 'filter') ? 0 : this.chartData[i][2];
      const geometry = (dataId === 'geometry') ? 0 : this.chartData[i][3];
      const unity = (dataId === 'unity') ? 0 : this.chartData[i][4];

      // is data active?
      const active = map || filter || geometry || unity;

      // stores the data
      this.chartData[i] = [active, map, filter, geometry, unity];
    }

    this.barChart.removeDataset(dataId);
  }

  addDataInfo(dataId: string, markerId: number, value: number) {
    // available info channels
    const map = (dataId === 'map') ? value : this.chartData[markerId][1];
    const filter = (dataId === 'filter') ? value : this.chartData[markerId][2];
    const geometry = this.chartData[markerId][3] + (dataId === 'geometry') ? value  : 0;
    const unity = this.chartData[markerId][4] + (dataId === 'unity') ? value : 0;

    // stores the data
    this.chartData[markerId] = [true, map, filter, geometry, unity];
  }

  getLabels() {
    let result = [];
    for (let i = 0; i < this.chartData.length; i++) {
      if (this.chartData[i][0] == true) {
        result.push(i);
      }
    }
    return result;
  }

  getData(dataId: string) {
    const result = [];
    for (let i = 0; i < this.chartData.length; i++) {
      if (this.chartData[i][0]) {
        if (dataId === 'map') {
          result.push(this.chartData[i][1]);
        }
        if (dataId === 'filter') {
          result.push(this.chartData[i][2]);
        }
        if (dataId === 'geometry') {
          result.push(this.chartData[i][3]);
        }
        if (dataId === 'unity') {
          result.push(this.chartData[i][4]);
        }
      }
    }
    return result;
  }
}
