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
  private chartData: any = {};
  private colorList: any = [];

  private labels: any = [];
  private nMarks: any = undefined;

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.barChart = new BarChart(this.barDiv.nativeElement);
  }

  /**
 * Plota os dados do Mapa no grafico.
 */
  drawChart(responseData: any, dataId: string, chartColor: string) {
    // cleans the data
    //this.clearDataInfo(dataId);

    // calcula a soma dos valores em results
    const total = responseData.result.reduce((a: any, b: any) => {
      return a + b.v[0];
    }, 0);

    if (!this.nMarks) {
      this.nMarks = responseData.result.length;
    }

    if(this.chartData[chartColor]) {
      this.clearDataInfo(chartColor);
    };
    
    // adiciona os valores normalizados ao dataset
    for (let i = 0; i < responseData.result.length; i++) {
      const pointId = responseData.result[i].k[0];
      const pointVl = responseData.result[i].v[0] / total;

      this.addDataInfo(chartColor, pointId, pointVl);
    }
    
    this.updateLabels(chartColor);
    const data = this.getData(chartColor);

    this.barChart.setLabels(this.labels);
    if(!this.colorList.includes(chartColor)) {
      this.barChart.addDataset(dataId, data, chartColor);
      this.colorList.push(chartColor);
    } else {
      this.barChart.updateDataset(chartColor, data);
    }
  };

  clearDataInfo(color: string) {

    this.chartData[color] = [];
    this.barChart.removeDataset(color);
    this.colorList.splice(this.colorList.indexOf(color),1); 
  }

  clearLabel(label: any, color: string) {
  
    this.chartData[color] = [];
    this.barChart.removeLabel(label, color);
  }

  addDataInfo(color: string, markerId: any, value: number) {
    if(!this.chartData[color]) {
      this.chartData[color] = [];
    }

    this.chartData[color].push({x: markerId, y: value});
  }

  updateLabels(color: string) {
    this.chartData[color].forEach( (d: any) => {
      const x = d['x'];

      if (!this.labels.includes(x)) {
        this.labels.push(x);
      }
    });
  }

  getData(color: string) {
    return this.chartData[color];
  }
}
