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
  private chartData: any = [];

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.lineChart = new LineChart(this.lineDiv.nativeElement);
    console.log('called');
  }

  drawChart(data: any, datasetLabel: any, datasetColor: any) {
    let mx, mn;
    let kvs = new Array();

    // Pega os dados em si
    let rx = data.result;
    kvs.push((rx));

    // Pega o menor e maior valor da primeira coluna
    // Ela representa os dados em si a segunda coluna
    // deve ser a data
    let m = Math.max.apply(Math, rx.map((d: any) => d[0]));
    if (typeof mx === "undefined" || m > mx) mx = m;
    mn = 0;

    // computes the best unity
    const best_unity = this.util.compute_best_unity(mn, mx);
    const prefixo = best_unity.prefix;
    const div = best_unity.div;

    let resultUnity = this.global.getGlobal("result_unity");
    let unity = prefixo + resultUnity.value;
    let resultTitle = this.global.getGlobal("result_title");
    let title = resultTitle.value;
    this.lineChart.setLabelY(title + " [" + unity + "]");

    let tsT0 = this.global.getGlobal("ts_t0");
    let tsT1 = this.global.getGlobal("ts_t1");

    // Arthur 08/03/2021
    let window_size = this.global.getGlobal("window_size");
    let interval = tsT1.value - tsT0.value;
    let start = this.util.secondsToDate(tsT0.value);
    let end = this.util.secondsToDate(tsT1.value);

    if (window_size != undefined) {
      interval = window_size.value;
      start = this.util.secondsToDate(tsT1.value - window_size.value);
    }

    end.setSeconds(end.getSeconds() + 1);
    this.lineChart.setLabels([]);
    while (start < end) {
      let date = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes(), start.getSeconds());
      let label = '';
      if (interval < 1200) { // 20 min
        //@ts-ignore
        label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'medium' });
        start.setSeconds(start.getSeconds() + 1);
      } else if (interval < 72000) { // 20 hs
        //@ts-ignore
        label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'medium' });
        start.setMinutes(start.getMinutes() + 1);
      } else if (interval < 4320000) { // 50 dias
        //@ts-ignore
        label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'short' });
        start.setHours(start.getHours() + 1);
      } else {
        //@ts-ignore
        label = date.toLocaleString('en-US', { dateStyle: 'short' });
        start.setDate(start.getDate() + 1);
      }
      this.lineChart.addLabel(label);
    }

    for (let current_line = 0; current_line < kvs.length; current_line++) {
      rx = kvs[current_line];
      let xy = [];
      for (let i = 0; i < rx.length; i++) {
        xy.push({ x: this.util.secondsToDate(rx[i][1]), y: (rx[i][0] / div) });
      }
      this.lineChart.removeDataset(datasetLabel);
      this.lineChart.addDataset(datasetLabel, xy, datasetColor);
    }
  }
}



  ///**************************ATENÇÃO****************************************** */
//   /**
//  * Remove um poligono do gráfico inferior.
//  * @param {*} layer
//  */
//   removePolyInChartBottom(layer:any) {
//     let datasetLabel = getLayerType(layer);
//     let datasetColor = layer.options.color;
//     this.chartBottom = getChart('bottom');
//     this.chartBottom.removePolyDataset(datasetLabel, datasetColor);
//   }

