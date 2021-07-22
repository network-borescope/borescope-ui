import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

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

  @Output() checkboxClicked = new EventEmitter<number>();

  private barChart: any;

  private chartData: any = {};
  private colorList: any = [];

  private labels: any = [];

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.barChart = new BarChart(this.barDiv.nativeElement);
  }

  /**
 * Plota os dados do Mapa no grafico.
 */
  drawChart(responseData: any, dataId: string, chartColor: string) {
    // calcula a soma dos valores em results
    const total = responseData.result.reduce((a: any, b: any) => {
      return a + b.v[0];
    }, 0);

    if(this.chartData[chartColor]) {
      this.clearData(chartColor);
    };

    // adiciona os valores normalizados ao dataset
    for (let i = 0; i < responseData.result.length; i++) {
      const pointId = +responseData.result[i].k[0];
      const pointVl = responseData.result[i].v[0] / total;

      this.addDataPoint(chartColor, pointId, pointVl);
    }

    this.updateLabels(chartColor);
    this.barChart.setLabels(this.labels);

    this.fillMissingPoints();
    const data = this.getData(chartColor);

    if(!this.colorList.includes(chartColor)) {
      this.barChart.addDataset(dataId, data, chartColor);
      this.colorList.push(chartColor);
    }
    else {
      this.barChart.updateDataset(chartColor, data);
    }
  };

  clearData(color: string) {
    this.chartData[color] = [];
    this.barChart.removeDataset(color);
  }

  clearLabel(label: any, color: string) {
    this.chartData[color] = [];
    this.barChart.removeLabel(label, color);
    this.colorList.splice(this.colorList.indexOf(color),1);
  }

  addDataPoint(color: string, markerId: any, value: number) {
    if(!this.chartData[color]) {
      this.chartData[color] = [];
    }

    this.chartData[color].push({x: markerId, y: value});
    console.log(color, markerId);
  }

  fillMissingPoints() {
    const colors = Object.keys(this.chartData);

    for (let color of colors) {
      this.labels.forEach((label: number) => {
          if (!this.chartData[color].some((d: any) => d.x === label)) {
            this.chartData[color].push({x: label, y: 0});
          }
      });

      this.chartData[color].sort((a: any, b: any) => a.x - b.x)
    }
  }

  updateLabels(color: string) {
    this.chartData[color].forEach( (d: any) => {
      const x = +d['x'];

      if (!this.labels.includes(x)) {
        this.labels.push(x);

        console.log(color, x);
      }
    });

    this.labels.sort((a: number, b: number) => a - b);
  }

  getData(color: string) {
    return this.chartData[color];
  }

  onCheckboxClick() {
    this.checkboxClicked.emit();
  }
}
