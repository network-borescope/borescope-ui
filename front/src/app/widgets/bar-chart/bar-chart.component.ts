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

  private labels: any = {};
  private rawData: any = {};
  private nrmData: any = {};

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.barChart = new BarChart(this.barDiv.nativeElement);
  }

  updateData(responseData: any, dataId: string, chartColor: string) {
    // manages data for each groupBy
    for(let groupBy of Object.keys(responseData)) {
      // clear existing (dataId, color)
      this.deleteData(groupBy, dataId, chartColor);
      this.rawData[groupBy][dataId][chartColor] = [];

      // adiciona os valores não normalizados
      for (let i = 0; i < responseData[groupBy].result.length; i++) {
        const pointId = +responseData[groupBy].result[i].k[0];
        const pointVl = +responseData[groupBy].result[i].v[0];

        this.rawData[groupBy][dataId][chartColor].push({ x: pointId, y: pointVl });
      }

      // atualiza os labels baseado no dado novo
      this.updateLabels(groupBy, dataId, chartColor);

      // completa os pontos que faltam
      this.fillMissingPoints(groupBy);

      // normaliza os dados de dataId
      this.normalizeData(groupBy, dataId);
    }
  }

  drawChart(groupBy: string) {
    // atualiza os labels
    this.barChart.setLabels(this.labels[groupBy]);

    // atualiza os dados
    for (const dataId of Object.keys(this.nrmData[groupBy])) {
      for (const color of Object.keys(this.nrmData[groupBy][dataId])) {
        // gets the data
        const data = this.nrmData[groupBy][dataId];
        this.barChart.updateDataset(dataId, color, data[color]);
      }
    }
  }

  deleteData(groupBy: string, dataId: string, color: string) {
    // new group
    if (!this.rawData[groupBy]) {
      this.rawData[groupBy] = {};
    }
    // new dataId
    if (!this.rawData[groupBy][dataId]) {
      this.rawData[groupBy][dataId] = {};
    }

    delete this.rawData[groupBy][dataId][color];

    // new group
    if (!this.nrmData[groupBy]) {
      this.nrmData[groupBy] = {};
    }
    // new dataId
    if (!this.nrmData[groupBy][dataId]) {
      this.nrmData[groupBy][dataId] = {};
    }

    delete this.nrmData[groupBy][dataId][color]
  }

  clearData(groupBy: string, dataId: string, color: string) {
    this.deleteData(groupBy, dataId, color);

    // normaliza os dados de dataId
    this.normalizeData(groupBy, dataId);

    // removes from chart
    this.barChart.removeDataset(dataId, color);
  }

  clearLabel(groupBy: string) {
    this.labels[groupBy] = [];
  }

  fillMissingPoints(groupBy: string) {
    const dataIds = Object.keys(this.rawData[groupBy]);
    for (let dataId of dataIds) {
      const colors = Object.keys(this.rawData[groupBy][dataId]);
      for (let color of colors) {
        this.labels[groupBy].forEach((label: number) => {
          if (!this.rawData[groupBy][dataId][color].some((d: any) => d.x === label)) {
            this.rawData[groupBy][dataId][color].push({ x: label, y: 0 });
          }
        });

        this.rawData[groupBy][dataId][color].sort((a: any, b: any) => a.x - b.x)
      }
    }
  }

  normalizeData(groupBy: string, dataId: string) {

    // pega os datasets de dataId
    const data = this.rawData[groupBy][dataId];

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

    // substitui o dado normalizado anterior
    this.nrmData[groupBy][dataId] = data;
  }

  updateLabels(groupBy:string, dataId: string, color: string) {
    if (!this.labels[groupBy]) {
      this.labels[groupBy] = [];
    }

    this.rawData[groupBy][dataId][color].forEach((d: any) => {
      const x = d['x'];
      if (!this.labels[groupBy].includes(x)) {
        this.labels[groupBy].push(x);
      }
    });

    this.labels[groupBy].sort((a: number, b: number) => a - b);
  }

  onCheckboxClick(event: any) {
     const selected_bar_group_by = {
      key: "selected_bar_group_by",
      value: event.target.value
    };

    this.global.setGlobal(selected_bar_group_by)
    this.checkboxClicked.emit();
  }
}
