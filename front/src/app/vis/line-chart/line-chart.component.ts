import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  private lineChart: any;
  private chartData: any = {};
  private nMarks: number = -1;

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.lineChart = new LineChart(this.lineDiv.nativeElement);
  }

  drawChart(responseData: any, dataId: any, chartColor: any) {
    // cleans the data
    this.clearDataInfo(dataId);

    // calcula o maior valor nos resultados
    const mx = responseData.result.reduce((a: any, b: any) => {
      return a + b[0];
    }, 0);

    this.nMarks = responseData.result.length;

    // computes the best unity
    const best_unity = this.util.compute_best_unity(0, mx);

    for (let i = 0; i < responseData.result.length; i++) {
      const pointTime  = this.util.secondsToDate(responseData.result[i][1]);
      const pointValue = responseData.result[i][0] / best_unity.div;

      this.addDataInfo(dataId, pointTime, pointValue);
    }

    // y axis title
    const title = this.global.getGlobal("result_title").value;
    const unity = this.global.getGlobal("result_unity").value;

    this.lineChart.setLabelY(title + " [" + best_unity.prefix + unity + "]");

    // point labels
    const labels = this.getLabels();
    const data = this.getData(dataId);

    this.lineChart.setLabels(labels);
    this.lineChart.addDataset(dataId, data, chartColor);
  }

  clearDataInfo(dataId: string) {
    this.chartData[dataId] = [];
    this.lineChart.removeDataset(dataId);
  }

  addDataInfo(dataId: string, markerId: any, value: number) {
    if(!this.chartData[dataId]) {
      this.chartData[dataId] = [];
    }

    this.chartData[dataId].push({x: markerId, y: value});
  }

  getLabels() {
    const tsT0 = this.global.getGlobal("ts_t0");
    const tsT1 = this.global.getGlobal("ts_t1");

    const interval = tsT1.value - tsT0.value;
    const tDelta = interval / (this.nMarks - 1);

    // result array
    const labels = [];

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
      labels.push(label);
      current += tDelta
    }

    return labels;
  }

  getData(dataId: string) {
    return this.chartData[dataId];
  }
}
