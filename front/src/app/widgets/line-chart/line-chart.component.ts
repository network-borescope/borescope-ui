import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';
import { LineChart } from './line';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  // referência para o div do grafico
  @ViewChild("lineChart", { static: true }) private lineDiv!: ElementRef;

  @Output() chartTimeChanged = new EventEmitter<number>();

  private lineChart: any;
  private chartData: any = {};
  private labels: any = [];
  private bestUnity: any = undefined;

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.lineChart = new LineChart(this.lineDiv.nativeElement);
  }

  drawChart(responseData: any, dataId: any, chartColor: any) {
    // new dataId
    if (!this.chartData[dataId]) {
      this.chartData[dataId] = {};
    }

    // clear existing (dataId, color)
    this.clearChart(dataId, chartColor);
    this.chartData[dataId][chartColor] = [];

    for (let i = 0; i < responseData.result.length; i++) {
      const pointTime  = responseData.result[i][1];
      const pointValue = responseData.result[i][0];

      this.chartData[dataId][chartColor].push({ x: this.util.secondsToDate(pointTime), y: pointValue });
    }

    // atualiza os labels
    this.updateLabels(dataId, chartColor);
    this.lineChart.setLabels(this.labels);

    // recalcula a unidade de tempo e atualiza o eixo y.
    const unity = this.computeUnity();
    this.lineChart.setLabelY("Requisitions" + " [" + unity.prefix + "package" + "]");

    //point labels
    const data = this.normalizeData(unity.div);

    // atualiza os gráficos
    for (const dId of Object.keys(data)) {
      for (const color of Object.keys(data[dId])) {
        this.lineChart.updateDataset(dId, color, data[dId][color]);
      }
    }
  }

  clearChart(dataId: string, color: string) {
    delete this.chartData[dataId][color];
    this.lineChart.removeDataset(dataId, color);
  }

  clearLabel() {
    this.labels = [];
  }

  computeUnity() {
    let max = -1;

    const dataIds = Object.keys(this.chartData);
    for (let dataId of dataIds) {
      const colors = Object.keys(this.chartData[dataId]);
      for (let color of colors) {
        // pega o máximo do dado atual
        const mx = Math.max(...this.chartData[dataId][color].map((d: any) => d.y))
        // atualiza o máximo global
        max = Math.max(mx, max);
      }
    }

    // computes the best unity
    return this.util.compute_best_unity(0, max);
  }


  normalizeData(unity: number) {
    // pega o dataset
    const data = this.chartData;

    // normaliza os valores
    const norm: any = {};

    const dataIds = Object.keys(data);
    for (let dataId of dataIds) {
      norm[dataId] = {};
      const colors = Object.keys(data[dataId]);
      for (let color of colors) {
        norm[dataId][color] = [];
        for (let pId = 0; pId < data[dataId][color].length; pId++) {
          norm[dataId][color].push( data[dataId][color][pId].y / unity );
        };
      }
    }

    return norm;
  }


  updateLabels(dataId: string, chartColor: string) {
    const nPoints = this.chartData[dataId][chartColor].length;

    // só atualiza se chegar um dado com mais pontos
    if (this.labels.length > nPoints) {
      return;
    }

    // só atualiza se chegar um dado com mais pontos
    if (nPoints === 0) {
      return;
    }

    const tsT0 = this.global.getGlobal("ts_t0_vis");
    const tsT1 = this.global.getGlobal("ts_t1_vis");

    const interval = tsT1.value - tsT0.value;
    const tDelta = interval / (nPoints - 1);

    // result array
    this.labels = [];

    let current = tsT0.value;
    while (current <= tsT1.value) {
      let label = '';
      let date = new Date(current * 1000);

      if (interval < 1200) { // 20 min
        //@ts-ignore
        label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'medium' });
      } else if (interval < 72000) { // 20 hs
        //@ts-ignore
        label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'medium' });
      } else if (interval < 4320000) { // 50 dias
        //@ts-ignore
        label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'short' });
      } else {
        //@ts-ignore
        label = date.toLocaleString('en-US', { dateStyle: 'short' });
      }
      this.labels.push(label);
      current += tDelta
    }
  }

  onClickTime(delta: number) {
    this.chartTimeChanged.emit(delta);
  }
}
