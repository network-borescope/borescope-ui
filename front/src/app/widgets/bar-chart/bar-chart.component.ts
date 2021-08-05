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

  public ids: any = [];

  constructor(public global: GlobalService, public util: UtilService) {
    this.ids = this.global.getGlobal('bar_params').value;
  }

  ngOnInit(): void {
    this.barChart = new BarChart(this.barDiv.nativeElement);
  }

  updateData(responseData: any, dataId: string, chartColor: string) {
    // manages data for each from
    for(let from of Object.keys(responseData)) {
      // clear existing element
      this.deleteData(from, dataId, chartColor);
      this.rawData[from][dataId][chartColor] = [];

      // adiciona os valores não normalizados
      for (let i = 0; i < responseData[from].result.length; i++) {
        const pointId = +responseData[from].result[i].k[0];
        const pointVl = +responseData[from].result[i].v[0];

        this.rawData[from][dataId][chartColor].push({ x: pointId, y: pointVl });
      }

      // atualiza os labels baseado no dado novo
      this.updateLabels(from);

      // normaliza os dados de dataId
      this.normalizeData(from);

      // completa os pontos que faltam
      this.fillMissingPoints(from);
    }
  }

  drawChart(from: string) {
    // set x labal
    this.barChart.setLabelX(from.toUpperCase());

    // atualiza os labels
    this.barChart.setLabels(this.labels[from]);

    // atualiza os dados
    for (const dataId of Object.keys(this.nrmData[from])) {
      for (const color of Object.keys(this.nrmData[from][dataId])) {
        // gets the data
        const data = this.nrmData[from][dataId];
        this.barChart.updateDataset(dataId, color, data[color]);
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

    // new group
    if (!this.nrmData[from]) {
      this.nrmData[from] = {};
    }
    // new dataId
    if (!this.nrmData[from][dataId]) {
      this.nrmData[from][dataId] = {};
    }

    delete this.nrmData[from][dataId][color]
  }

  clearChart(from: string, dataId: string, color: string) {
    // removes from chart
    this.barChart.removeDataset(dataId, color);

    this.deleteData(from, dataId, color);

    // atualiza os labels baseado no dado novo
    this.updateLabels(from);

    // normaliza os dados de dataId
    this.normalizeData(from);

    // completa os pontos que faltam
    this.fillMissingPoints(from);
  }

  clearLabel(from: string) {
    this.labels[from] = [];
  }

  normalizeData(from: string) {
    // limpa os dados normalizados
    this.nrmData[from] = {};

    // repete para cada dataId
    for (const dataId of Object.keys(this.rawData[from])) {
      // pega os datasets de dataId
      const data = this.rawData[from][dataId];

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
      this.nrmData[from][dataId] = norm;
    }
  }

  fillMissingPoints(from: string) {
    // lista de tipos de elementos
    const dataIds = Object.keys(this.nrmData[from]);
    for (let dataId of dataIds) {
      // lista de cores no elemento
      const colors = Object.keys(this.nrmData[from][dataId]);
      for (let color of colors) {
        // para cada label
        this.labels[from].forEach((label: number) => {
          // se não existe valor associado ao label, adiciona zero
          if (!this.nrmData[from][dataId][color].some((d: any) => d.x === label)) {
            this.nrmData[from][dataId][color].push({ x: label, y: 0 });
          }
        });

        // ordena os pontos
        this.nrmData[from][dataId][color].sort((a: any, b: any) => a.x - b.x)
      }
    }
  }

  updateLabels(from: string) {
    // limpa os labels do gráfico
    this.labels[from] = [];

    // percorre os tipos de elementos
    for (const dataId of Object.keys(this.rawData[from])) {
      // percorre os elementos
      for (const color of Object.keys(this.rawData[from][dataId])) {
        this.rawData[from][dataId][color].forEach((d: any) => {
          const x = d['x'];
          if (!this.labels[from].includes(x)) {
            this.labels[from].push(x);
          }
        });
      }
    }

    // ordena os labels
    this.labels[from].sort((a: number, b: number) => a - b);
  }

  onCheckboxClick(event: any) {
    const bar_params_value = {
      key: "bar_params_value",
      value: event.target.value
    };

    this.global.setGlobal(bar_params_value)
    this.checkboxClicked.emit();
  }
}
