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
  @Output() checkboxClicked = new EventEmitter<number>();

  private lineChart: any;

  private labels: any = {};
  private rawData: any = {};
  private nrmData: any = {};

  private unity: any = {};

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.lineChart = new LineChart(this.lineDiv.nativeElement);
  }

  updateData(responseData: any, dataId: any, chartColor: any) {
    // manages data for each volume
    for (let volume of Object.keys(responseData)) {
      // clear existing element
      this.deleteData(volume, dataId, chartColor);
      this.rawData[volume][dataId][chartColor] = [];

      // adiciona os valores não normalizados
      for (let i = 0; i < responseData[volume].result.length; i++) {
        const pointTime = responseData[volume].result[i][1];
        const pointValue = responseData[volume].result[i][0];

        this.rawData[volume][dataId][chartColor].push({ x: this.util.secondsToDate(pointTime), y: pointValue });
      }

      // computes the unity
      this.computeUnity(volume);

      // atualiza os labels baseado no dado novo
      this.updateLabels(volume);

      // normaliza os dados de dataId
      this.normalizeData(volume);
    }
  }

  drawChart(volume: string) {
    // set y label.
    this.lineChart.setLabelY("Requisitions" + " [" + this.unity.prefix + "package" + "]");

    // atualiza os labels
    this.lineChart.setLabels(this.labels[volume]);

    // atualiza os gráficos
    for (const dataId of Object.keys(this.nrmData[volume])) {
      for (const color of Object.keys(this.nrmData[volume][dataId])) {
        // gets the data
        const data = this.nrmData[volume][dataId];
        this.lineChart.updateDataset(dataId, color, data[color]);
      }
    }
  }

  deleteData(volume: string, dataId: string, color: string) {
    // new group
    if (!this.rawData[volume]) {
      this.rawData[volume] = {};
    }
    // new dataId
    if (!this.rawData[volume][dataId]) {
      this.rawData[volume][dataId] = {};
    }

    delete this.rawData[volume][dataId][color];

    // new group
    if (!this.nrmData[volume]) {
      this.nrmData[volume] = {};
    }
    // new dataId
    if (!this.nrmData[volume][dataId]) {
      this.nrmData[volume][dataId] = {};
    }

    delete this.nrmData[volume][dataId][color]
  }

  clearChart(volume: string, dataId: string, color: string) {
    // removes from chart
    this.lineChart.removeDataset(dataId, color);

    this.deleteData(volume, dataId, color);

    // atualiza os labels baseado no dado novo
    this.updateLabels(volume);

    // normaliza os dados de dataId
    this.normalizeData(volume);
  }

  clearLabel(volume: string) {
    this.labels[volume] = [];
  }

  computeUnity(volume: string) {
    let max = -1;

    const dataIds = Object.keys(this.rawData[volume]);
    for (let dataId of dataIds) {
      const colors = Object.keys(this.rawData[volume][dataId]);
      for (let color of colors) {
        // pega o máximo do dado atual
        const mx = Math.max(...this.rawData[volume][dataId][color].map((d: any) => d.y))
        // atualiza o máximo global
        max = Math.max(mx, max);
      }
    }

    // computes the best unity
    this.unity = this.util.compute_best_unity(0, max);
  }

  normalizeData(volume: string) {
    // pega o dataset
    const data = this.rawData[volume];

    // limpa os dados normalizados
    this.nrmData[volume] = {};

    const dataIds = Object.keys(data);
    for (let dataId of dataIds) {
      this.nrmData[volume][dataId] = {};
      const colors = Object.keys(data[dataId]);
      for (let color of colors) {
        this.nrmData[volume][dataId][color] = [];
        for (let pId = 0; pId < data[dataId][color].length; pId++) {
          this.nrmData[volume][dataId][color].push(data[dataId][color][pId].y / this.unity.div);
        };
      }
    }
  }

  updateLabels(volume: string) {
    // result array
    this.labels[volume] = [];

    const tsT0 = this.global.getGlobal("t0_vis");
    const tsT1 = this.global.getGlobal("t1_vis");

    const interval = tsT1.value - tsT0.value;

    const data = this.rawData[volume];

    for (let dataId of Object.keys(data)) {
      for (let chartColor of Object.keys(data[dataId])) {
        // numero de pontos
        const nPoints = this.rawData[volume][dataId][chartColor].length;

        // só atualiza se chegar um dado com mais pontos
        if (this.labels.length > nPoints) {
          continue;
        }

        // só atualiza se chegar um dado com mais pontos
        if (nPoints === 0) {
          continue;
        }

        // calcula o delta de tempo
        const tDelta = interval / (nPoints - 1);

        // result array
        this.labels[volume] = [];

        let current = tsT0.value;
        while (current <= tsT1.value) {
          let label = '';
          let date = new Date(current * 1000);

          if (interval < 1200) { // 20 min
            //@ts-ignore
            label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'medium', timeZone: 'UTC' });
          } else if (interval < 72000) { // 20 hs
            //@ts-ignore
            label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'medium', timeZone: 'UTC' });
          } else if (interval < 4320000) { // 50 dias
            //@ts-ignore
            label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' });
          } else {
            //@ts-ignore
            label = date.toLocaleString('en-US', { dateStyle: 'short', timeZone: 'UTC' });
          }
          this.labels[volume].push(label);
          current += tDelta
        }
      }
    }
  }

  onClickTime(delta: number) {
    this.chartTimeChanged.emit(delta);
  }

  onCheckboxClick(event: any) {
    const line_volume_value = {
      key: "line_volume_value",
      value: event.target.value
    };

    this.global.setGlobal(line_volume_value)
    this.checkboxClicked.emit();
  }

  refreshAvailable() {
    const bnds = this.global.getGlobal("bounds_time");

    const tsT0 = this.global.getGlobal("t0_vis");
    const tsT1 = this.global.getGlobal("t1_vis");

    return bnds.value[0] !== tsT0.value || bnds.value[1] !== tsT1.value;
  }
}
