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
  private firstDraw: any;

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
    //this.clearDataInfo('map');

    // calcula a soma dos valores em results
    const total = responseData.result.reduce((a: any, b: any) => {
      return a + b.v[0];
    }, 0);

    if (!this.nMarks) {
      this.nMarks = responseData.result.length;
    }
    let oldMapDataCounter = 0;
    // adiciona os valores normalizados ao dataset
    for (let i = 0; i < responseData.result.length; i++) {
      const pointId = responseData.result[i].k[0];
      const pointVl = responseData.result[i].v[0] / total;

      oldMapDataCounter += 1;
      this.addDataInfo(dataId, pointId, pointVl);
    }
    //checa se é a primeira vez que recebe um dado
    //como o primeiro dado recebido é proveniente do map
    //caso seja falso, nunca recebeu dado
    if(!this.firstDraw || dataId != 'map') {
      this.updateLabels(dataId);
      const data = this.getData(dataId);

      this.barChart.setLabels(this.labels);
      this.barChart.addDataset(dataId, data, chartColor);
      this.firstDraw = true;
    } else {
      
      const data = this.getData(dataId);
      const newMapData = data.slice(Math.max(data.length - oldMapDataCounter, 0));
      this.barChart.updateMapData(newMapData);
    }
  };

  clearDataInfo(dataId: string) {

    this.chartData[dataId] = [];
    this.barChart.removeDataset(dataId);
  }

  addDataInfo(dataId: string, markerId: any, value: number) {
    if(!this.chartData[dataId]) {
      this.chartData[dataId] = [];
    }

    this.chartData[dataId].push({x: markerId, y: value});
  }

  updateLabels(dataId: string) {
    this.chartData[dataId].forEach( (d: any) => {
      const x = d['x'];

      if (!this.labels.includes(x)) {
        this.labels.push(x);
      }
    });
  }

  getData(dataId: string) {
    return this.chartData[dataId];
  }
}
