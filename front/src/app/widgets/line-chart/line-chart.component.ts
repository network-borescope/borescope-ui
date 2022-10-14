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

  @Output() lineValueChanged = new EventEmitter<number>();

  public lineChart: any;

  private labels: any = {};
  public rawData: any = {};

  private unity: any = {};

  private t0: number = 0;
  private t1:number = 0;

  public ids: any = [];
  private optionsList = {
    avg_in: 'Average in',
    avg_out: 'Average out',
    max_in: 'Max in',
    max_out: 'Max out',
    loss: 'Loss',
    avg_loss: 'Average loss',
    max_loss: 'Max loss',
    val: 'Val',
    avg_val: 'Average val',
    max_val: 'Max val'
  };

  constructor(public global: GlobalService, public util: UtilService) {
    this.ids = this.global.getGlobal('line_params').value;
  }

  ngOnInit(): void {
    this.lineChart = new LineChart(this.lineDiv.nativeElement);
  }

  updateData(responseData: any, dataId: any, chartColor: any) {
    // manages data for each from
    for (let paramId of Object.keys(responseData)) {
      // clear existing element
      this.deleteData(paramId, dataId, chartColor);
      //creating list to average, max, min
      this.rawData[paramId][dataId][chartColor] = [];

      // adiciona os valores não normalizados
      for (let i = 0; i < responseData[paramId].result.length; i++) {
        //pega o tempo
        const pointTime = responseData[paramId].result[i].k[0];
        //pega valor
        const pointValue = responseData[paramId].result[i].v[0];
        this.rawData[paramId][dataId][chartColor].push({ x: this.util.secondsToDate(pointTime), y: pointValue});
      }
      // seta o intervalo de tempo
      this.t0 = responseData['viaipe']['result'][0].k[0];
      this.t1 = responseData['viaipe']['result'].slice(-1)[0].k[0];
      // atualiza os labels baseado no dado novo
      this.updateLabels(paramId);
    }
  }

  drawChart(from: string, selectedParam: string, name: any = undefined) {
    const selectedValue = this.global.getGlobal('line_selected_params_value').value;
    //@ts-ignore
    this.lineChart.setLabelY(this.optionsList[selectedValue]);
    // atualiza os labels
    this.lineChart.setLabels(this.labels[from], name);
    // atualiza os gráficos
    for (const dataId of Object.keys(this.rawData[from])) {
      for (const color of Object.keys(this.rawData[from][dataId])) {
        // gets the data
        const data = this.rawData[from][dataId];
        const chartData = [];
        for(let i = 0; i < data[color].length; i++) {
          const label = this.labels[from][i];
          chartData.push({ y: data[color][i].y, x: label});
        }
        this.lineChart.updateDataset(dataId, color, chartData, name);
      }
    }
  }

  deleteData(from: string, dataId: string, color: string) {
    // new group
    if (!this.rawData[from]) {
      this.rawData[from] = {};
    }
    // new dataId
    if (!this.rawData[from][dataId]) {
      this.rawData[from][dataId] = {};
    }

    delete this.rawData[from][dataId][color];
  }

  clearChart(from: string, dataId: string, color: string) {
    // removes from chart
    this.lineChart.removeDataset(dataId, color);

    this.deleteData(from, dataId, color);

    // atualiza os labels baseado no dado novo
    this.updateLabels(from);
  }

  clearLabel(from: string) {
    this.labels[from] = [];
  }

  computeUnity(from: string) {
    let max = -1;

    const dataIds = Object.keys(this.rawData[from]);
    for (let dataId of dataIds) {
      const colors = Object.keys(this.rawData[from][dataId]);
      for (let color of colors) {
        // pega o máximo do dado atual
        const mx = Math.max(...this.rawData[from][dataId][color].map((d: any) => d.y))
        // atualiza o máximo global
        max = Math.max(mx, max);
      }
    }

    // computes the best unity
    this.unity[from] = this.util.compute_best_unity(0, max);
  }

  updateLabels(from: string) {
    // result array
    this.labels[from] = [];

    const tsT0 = this.t0;
    const tsT1 = this.t1;

    const interval = tsT1 - tsT0;

    const data = this.rawData[from];

    for (let dataId of Object.keys(data)) {
      for (let chartColor of Object.keys(data[dataId])) {
        // numero de pontos
        const nPoints = this.rawData[from][dataId][chartColor].length;

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
        this.labels[from] = [];

        let current = tsT0;
        while (current <= tsT1) {
          let label = '';
          let date = new Date(current * 1000);
          if (interval < 1200) { // 20 min
            //@ts-ignore
            label = date.toLocaleString('en-GB', { hour12: false, year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
          } else if (interval < 72000) { // 20 hs
            //@ts-ignore
            label = date.toLocaleString('en-GB', { hour12: false, year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
          } else if (interval < 4320000) { // 50 dias
            //@ts-ignore
            label = date.toLocaleString('en-GB', { hour12: false, year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
          } else {
            //@ts-ignore
            label = date.toLocaleString('en-GB', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
          }
          this.labels[from].push(label);
          current += tDelta
        }
      }
    }
  }

  onValueChange(event: any) {
    const line_selected_params_value = {
      key: "line_selected_params_value",
      value: event.target.value
    };
    this.global.setGlobal(line_selected_params_value);
    this.lineValueChanged.emit();
  }
}
