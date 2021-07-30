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
      // clear existing element
      this.deleteData(groupBy, dataId, chartColor);
      this.rawData[groupBy][dataId][chartColor] = [];

      // adiciona os valores não normalizados
      for (let i = 0; i < responseData[groupBy].result.length; i++) {
        const pointId = +responseData[groupBy].result[i].k[0];
        const pointVl = +responseData[groupBy].result[i].v[0];

        this.rawData[groupBy][dataId][chartColor].push({ x: pointId, y: pointVl });
      }

      // atualiza os labels baseado no dado novo
      this.updateLabels(groupBy);

      // normaliza os dados de dataId
      this.normalizeData(groupBy);

      // completa os pontos que faltam
      this.fillMissingPoints(groupBy);
    }
  }

  drawChart(groupBy: string) {
    // set x labal
    this.barChart.setLabelX(groupBy.toUpperCase());

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

  clearChart(groupBy: string, dataId: string, color: string) {
    // removes from chart
    this.barChart.removeDataset(dataId, color);

    this.deleteData(groupBy, dataId, color);

    // atualiza os labels baseado no dado novo
    this.updateLabels(groupBy);

    // normaliza os dados de dataId
    this.normalizeData(groupBy);

    // completa os pontos que faltam
    this.fillMissingPoints(groupBy);
  }

  clearLabel(groupBy: string) {
    this.labels[groupBy] = [];
  }

  normalizeData(groupBy: string) {
    // limpa os dados normalizados
    this.nrmData[groupBy] = {};

    // repete para cada dataId
    for (const dataId of Object.keys(this.rawData[groupBy])) {
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
          const nrmPnt = {x: data[cor][pId].x, y: data[cor][pId].y / total};
          norm[cor].push( nrmPnt );
        };
      }

      // substitui o dado normalizado anterior
      this.nrmData[groupBy][dataId] = norm;
    }
  }

  fillMissingPoints(groupBy: string) {
    // lista de tipos de elementos
    const dataIds = Object.keys(this.nrmData[groupBy]);
    for (let dataId of dataIds) {
      // lista de cores no elemento
      const colors = Object.keys(this.nrmData[groupBy][dataId]);
      for (let color of colors) {
        // para cada label
        this.labels[groupBy].forEach((label: number) => {
          // se não existe valor associado ao label, adiciona zero
          if (!this.nrmData[groupBy][dataId][color].some((d: any) => d.x === label)) {
            this.nrmData[groupBy][dataId][color].push({ x: label, y: 0 });
          }
        });

        // ordena os pontos
        this.nrmData[groupBy][dataId][color].sort((a: any, b: any) => a.x - b.x)
      }
    }
  }

  updateLabels(groupBy: string) {
    // limpa os labels do gráfico
    this.labels[groupBy] = [];

    // percorre os tipos de elementos
    for (const dataId of Object.keys(this.rawData[groupBy])) {
      // percorre os elementos
      for (const color of Object.keys(this.rawData[groupBy][dataId])) {
        this.rawData[groupBy][dataId][color].forEach((d: any) => {
          const x = d['x'];
          if (!this.labels[groupBy].includes(x)) {
            this.labels[groupBy].push(x);
          }
        });
      }
    }

    // ordena os labels
    this.labels[groupBy].sort((a: number, b: number) => a - b);
  }

  onCheckboxClick(event: any) {
    const bar_group_by_value = {
      key: "bar_group_by_value",
      value: event.target.value
    };

    this.global.setGlobal(bar_group_by_value)
    this.checkboxClicked.emit();
  }
}
