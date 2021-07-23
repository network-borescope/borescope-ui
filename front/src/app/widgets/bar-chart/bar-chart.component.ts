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
  private labels: any = [];

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.barChart = new BarChart(this.barDiv.nativeElement);
  }

  /**
 * Plota os dados do Mapa no grafico.
 */
  drawChart(responseData: any, dataId: string, chartColor: string) {
    // new dataId
    if (!this.chartData[dataId]) {
      this.chartData[dataId] = {};
    }

    // clear existing (dataId, color)
    this.clearData(dataId, chartColor);
    this.chartData[dataId][chartColor] = [];

    // adiciona os valores não normalizados
    for (let i = 0; i < responseData.result.length; i++) {
      const pointId = +responseData.result[i].k[0];
      const pointVl = +responseData.result[i].v[0];

      this.chartData[dataId][chartColor].push({ x: pointId, y: pointVl });
    }

    // atualiza os labels
    this.updateLabels(dataId, chartColor);
    this.barChart.setLabels(this.labels);

    // completa os pontos que faltam
    this.fillMissingPoints();

    // normaliza os dados de dataId
    const data = this.normalizeData(dataId);

    // atualiza os gráficos
    for (const color of Object.keys(data)) {
      this.barChart.updateDataset(dataId, color, data[color]);
    }
  };

  clearData(dataId: string, color: string) {
    delete this.chartData[dataId][color];
    this.barChart.removeDataset(dataId, color);

    // normaliza os dados de dataId
    const data = this.normalizeData(dataId);

    // atualiza os gráficos
    for (const color of Object.keys(data)) {
      this.barChart.updateDataset(dataId, color, data[color]);
    }
  }

  clearLabel() {
    this.labels = [];
  }

  fillMissingPoints() {
    const dataIds = Object.keys(this.chartData);
    for (let dataId of dataIds) {
      const colors = Object.keys(this.chartData[dataId]);
      for (let color of colors) {
        this.labels.forEach((label: number) => {
          if (!this.chartData[dataId][color].some((d: any) => d.x === label)) {
            this.chartData[dataId][color].push({ x: label, y: 0 });
          }
        });

        this.chartData[dataId][color].sort((a: any, b: any) => a.x - b.x)
      }
    }
  }

  normalizeData(dataId: string) {
    // pega os datasets de dataId
    const data = this.chartData[dataId];

    // calcula a soma dos da categoria
    let total = 0;
    for (let cor of Object.keys(data)) {
      const partial = data[cor].reduce((a: any, b: any) => {
        return a + b.y;
      }, 0);

      total += partial;
    }

    // normaliza os valores
    const norm: any = {};
    for (let cor of Object.keys(data)) {
      norm[cor] = [];
      for (let pId = 0; pId < data[cor].length; pId++) {
        norm[cor].push( data[cor][pId].y / total );
      };
    }

    return norm;
  }

  updateLabels(dataId: string, color: string) {
    this.chartData[dataId][color].forEach((d: any) => {
      const x = d['x'];
      if (!this.labels.includes(x)) {
        this.labels.push(x);
      }
    });

    this.labels.sort((a: number, b: number) => a - b);
  }

  onCheckboxClick() {
    this.checkboxClicked.emit();
  }
}
