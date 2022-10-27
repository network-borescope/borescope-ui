import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';
// inclusão do metadado do viaipe
import * as viaipeMetadata from '../../../assets/viaipe_metadata.json';
import { BarChart } from './bar';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  // referência para o div do grafico
  @ViewChild("barChart", { static: true }) private barDiv!: ElementRef;

  @Output() barParamChanged = new EventEmitter<number>();

  public barChart: any;

  public labels: any = {};
  public rawData: any = {};
  private viaipeClientsLabel: any = [];
  private lowerIndex: number = 0;
  private higherIndex: number = 9;
  public zoom: any;
  private tabsCounter: number = 0;
  private data: any;
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

  private numberOfGeometries: number = 0;

  constructor(public global: GlobalService, public util: UtilService) {
    this.ids = this.global.getGlobal('bar_params').value;
  }

  ngOnInit(): void {
    this.barChart = new BarChart(this.barDiv.nativeElement);
    const capitals = this.global.getGlobal('state_capitals').value.default;
    this.barChart.setCapitals(capitals);
  }

  updateData(responseData: any, dataId: string, chartColor: string, lmap: any, zoom: any = undefined) {
    this.viaipeClientsLabel = {};
    this.barChart.clear();
    this.barChart.lowerIndex = 0;
    this.barChart.higherIndex = 10;
    this.lowerIndex = 0;
    this.higherIndex = 10;
    this.tabsCounter = 0;
    // manages data for each from
    for(let from of Object.keys(responseData)) {
      // clear existing element
      this.deleteData(from, dataId, chartColor);
      this.rawData[from][dataId][chartColor] = [];

      // adiciona os valores não normalizados
      for (let i = 0; i < responseData[from].result.length; i++) {
        let pointId;
        if(zoom > 12) {
          pointId = +responseData[from].result[i].k[1];
          this.viaipeClientsLabel[pointId] = this.getViaipeClientLabel(responseData[from].result[i].k);
        } else {
          pointId = +responseData[from].result[i].k[0];
        }
        const pointVl = +responseData[from].result[i].v[0];

        this.rawData[from][dataId][chartColor].push({ x: pointId, y: pointVl });
      }
      this.barChart.viaipeLabels = this.viaipeClientsLabel;
      // atualiza os labels baseado no dado novo
      this.updateLabels(from, lmap, zoom);
      // completa os pontos que faltam
      this.fillMissingPoints(from); 
    }
  }

  drawChart(from: string, name: any = undefined, zoom: any = undefined) {
    this.barChart.labelList = this.labels[from];
    this.zoom = zoom;
    this.barChart.zoom = zoom;
    this.barChart.from = from;
    // set x labal
    const selectedValue = this.global.getGlobal('bar_params_value').value;
    //@ts-ignore
    this.barChart.setLabelY(this.optionsList[selectedValue]);
    for (const dataId of Object.keys(this.rawData[from])) {
      for (const color of Object.keys(this.rawData[from][dataId])) {
        const data = this.rawData[from][dataId];
        const sorted = [...data[color]].sort((a: any, b: any) => a.y - b.y)
        let newData = [];
        let idOrder = [];
        for(let i = 0; i < sorted.length; i++) {
          newData.push({ x: (sorted.length) - i, y: sorted[i].y} );
          idOrder.push(sorted[i].x);
        }
        newData.reverse();
        idOrder.reverse();
        this.barChart.updateDataset(dataId, color, newData, name, idOrder);
      }
    }
  }

  addGeometryValue(value: number, color: string) {
    this.numberOfGeometries += 1;
    this.labels['viaipe'].unshift((this.labels['viaipe'][this.labels['viaipe'].length - 1] + this.numberOfGeometries));
    this.barChart.addGeometry(value, color, this.labels);
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

  clearChart(from: string, dataId: string, color: string, lmap: any, zoom: number) {
    // removes from chart
    this.barChart.removeDataset(dataId, color);

    this.deleteData(from, dataId, color);

    // atualiza os labels baseado no dado novo
    this.updateLabels(from, lmap, zoom);

    // completa os pontos que faltam
    this.fillMissingPoints(from);   
  }

  clearLabel(from: string) {
    this.labels[from] = [];
  }

  fillMissingPoints(from: string) {
    // lista de tipos de elementos
    const dataIds = Object.keys(this.rawData[from]);
    for (let dataId of dataIds) {
      // lista de cores no elemento
      const colors = Object.keys(this.rawData[from][dataId]);
      for (let color of colors) {
        // para cada label
        this.labels[from].forEach((label: number) => {
          // se não existe valor associado ao label, adiciona zero
          if (!this.rawData[from][dataId][color].some((d: any) => d.x === label)) {
            this.rawData[from][dataId][color].push({ x: label, y: 0 });
          }
        });

        // ordena os pontos
        this.rawData[from][dataId][color].sort((a: any, b: any) => a.x - b.x)
      }
    }
  }

  updateLabels(from: string, lmap: any, zoom: number) {
    // limpa os labels do gráfico
    this.labels[from] = [];
    let counter = 1;
    // percorre os tipos de elementos
    for (const dataId of Object.keys(this.rawData[from])) {
      // percorre os elementos
      for (const color of Object.keys(this.rawData[from][dataId])) {
        this.rawData[from][dataId][color].forEach((d: any) => {
          if (!this.labels[from].includes(counter)) {
            this.labels[from].push(counter);
          }
          counter += 1
        });
      }
    }
    // ordena os labels
    this.labels[from].sort((a: number, b: number) => a - b);
    if(zoom > 12) this.labels[from] =  this.labels[from].slice(this.lowerIndex, this.higherIndex)
  }

  onParamChange(event: any) {
    const bar_params_value = {
      key: "bar_params_value",
      value: event.target.value
    };

    this.global.setGlobal(bar_params_value)
    this.barParamChanged.emit();
  }

  getViaipeClientLabel(ids: any) {
    const key = this.barChart.getId(ids[0]).toLowerCase();
    //@ts-ignore
    return viaipeMetadata['pops'][key]['clientes'][ids[1] - 1]["caption"];
  }

  updateColor(color: string, cod: number, isAdded: boolean) {
    if(isAdded) {
      this.barChart.changeBarColor(color, cod)
    } else {
      this.barChart.usedColors = this.barChart.usedColors.filter((e:any) => e !== color);
      this.barChart.coloredCods = this.barChart.coloredCods.filter((e:any) => e !== cod);
      this.barChart.changeBarColor('#AAAAAA', cod);
    }
  }

  removeFilters() {
    const indices = [];
    for(let i = 0; i < this.barChart.usedColors.length; i++) {
      if(this.global.getGlobal('filter_color').value == this.barChart.usedColors[i]) {
        indices.push(i);
      }
    }

    for(let i = 0; i < indices.length; i++) {
      this.barChart.coloredCods = this.barChart.coloredCods.splice(indices[i], 1)
    }

    this.barChart.usedColors = this.barChart.usedColors.filter((e:any) => e !== this.global.getGlobal('filter_color').value);
    this.barChart.removeFilterColor();
  }

  updateTabCounter(value: number) {
    this.tabsCounter += value;

    if(this.tabsCounter == 0) {
      this.barChart.lowerIndex = 0;
      this.barChart.higherIndex = 10;
      this.lowerIndex = 0;
      this.higherIndex = 10;
      this.data = this.barChart.data.slice(0, 10);
    } else {
      this.barChart.lowerIndex = this.tabsCounter*10;
      this.barChart.higherIndex = (this.tabsCounter + 1)*10;
      this.lowerIndex = this.tabsCounter*10;
      this.higherIndex = (this.tabsCounter + 1)*10;
      this.data = this.barChart.data.slice(this.tabsCounter*10, (this.tabsCounter + 1)*10);
    }
    this.barChart.changeBarColor('#AAAAAA', -1)
    this.barChart.changeData(this.data);
  }

  hasPrevious() {
    return ((this.tabsCounter + 1) * 10 > 10)
  }

  hasNext() {
    return ((this.tabsCounter + 1) * 10 < this.barChart.data.length)
  }

  removeGeometriesFromBar(color: string) {
    console.log(this.labels['viaipe'])
    this.barChart.idOrder = this.barChart.idOrder.slice(1);
    this.barChart.labelList = this.barChart.labelList.slice(1);
    this.labels['viaipe'] = this.labels['viaipe'].slice(1);
    console.log(this.labels['viaipe'])
    for(let i = 0; i < this.barChart.geometries.length; i ++) {
      if (this.barChart.geometries[i].backgroundColor == color) {
        this.barChart.geometries.splice(i, 1);
      };
    }
    this.barChart.chart.config.data.datasets.splice(0, 1);
    console.log(this.labels['viaipe'])
    this.barChart.setLabels(this.labels['viaipe']);
    this.barChart.chart.update();
  }
}
