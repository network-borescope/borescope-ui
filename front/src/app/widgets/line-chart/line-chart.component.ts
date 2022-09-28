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

  @Output() lineParamChanged = new EventEmitter<number>();
  @Output() lineValueChanged = new EventEmitter<number>();

  public lineChart: any;

  private labels: any = {};
  public rawData: any = {};
  private nrmData: any = {};

  private unity: any = {};

  private t0: number = 0;
  private t1:number = 0;

  public ids: any = [];

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
        if(!this.isViaipe()) {
        //pega o tempo
        const pointTime = responseData[paramId].result[i].k[0];
        //pega valor das médias
        const pointAverageValue = responseData[paramId].result[i].v[0];
        //pega valor max
        const pointMaxValue = responseData[paramId].result[i].v[2];
        //pega valor min
        const pointMinValue = responseData[paramId].result[i].v[3];        
        this.rawData[paramId][dataId][chartColor].push({ x: this.util.secondsToDate(pointTime), y: pointAverageValue, z: pointMaxValue, k: pointMinValue});
        } else {
          //pega o tempo
          const pointTime = responseData[paramId].result[i].k[0];
          //pega valor
          const pointValue = responseData[paramId].result[i].v[0];
          this.rawData[paramId][dataId][chartColor].push({ x: this.util.secondsToDate(pointTime), y: pointValue});
        }
      }
      // seta o intervalo de tempo
      if(this.isViaipe()) {
        this.t0 = responseData['viaipe']['result'][0].k[0];
        this.t1 = responseData['viaipe']['result'].slice(-1)[0].k[0]; 
      } else {
        this.t0 = responseData['packet_rate']['result'][0].k[0];
        this.t1 = responseData['packet_rate']['result'].slice(-1)[0].k[0];
        // computes the unity
        this.computeUnity(paramId);

      }
      // atualiza os labels baseado no dado novo
      this.updateLabels(paramId);
      // normaliza os dados de dataId
      this.normalizeData(paramId);
    }
  }

  drawChart(from: string, selectedParam: string, name: any = undefined) {
    if(!this.isViaipe()) {
      // TODO: passar os labels de y em um objeto.
      if (from.includes('dns')) {
        // set y label.
        this.lineChart.setLabelY("Requisitions [%]");
      }
      else {
        // set y label.
        this.lineChart.setLabelY("Requisitions" + " [" + this.unity[from].prefix + "package" + "]");
      }
    } else {
      this.lineChart.setLabelY(this.global.getGlobal('line_selected_params_value').value);
    }
    // atualiza os labels
    this.lineChart.setLabels(this.labels[from], name);
    console.log(this.nrmData[from])
    // atualiza os gráficos
    for (const dataId of Object.keys(this.nrmData[from])) {
      for (const color of Object.keys(this.nrmData[from][dataId])) {
        // gets the data
        const data = this.nrmData[from][dataId];
        const chartData = [];
        for(let i = 0; i < data[color].length; i++) {
          const label = this.labels[from][i];
          if(this.isViaipe()) {
            chartData.push({ y: data[color][i].y, x: label});
          } else {
            if(selectedParam == 'average') {
              chartData.push({ y: data[color][i].y, x: label});
            } else if(selectedParam == 'max') {
              chartData.push({ y: data[color][i].z, x: label});
            } else {
              chartData.push({ y: data[color][i].k, x: label});
            } 
          }
    
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
    // new group
    if (!this.nrmData[from]) {
      this.nrmData[from] = {};
    }
    // new dataId
    if (!this.nrmData[from][dataId]) {
      this.nrmData[from][dataId] = {};
    }

    delete this.nrmData[from][dataId][color];
  }

  clearChart(from: string, dataId: string, color: string) {
    // removes from chart
    this.lineChart.removeDataset(dataId, color);

    this.deleteData(from, dataId, color);

    // atualiza os labels baseado no dado novo
    this.updateLabels(from);

    // normaliza os dados de dataId
    this.normalizeData(from);
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

  normalizeData(from: string) {
    // pega o dataset
    const data = this.rawData[from];

    // limpa os dados normalizados
    this.nrmData[from] = {};
    if(this.isViaipe()) {
      this.nrmData[from] = this.rawData[from];
    } else { 
      const dataIds = Object.keys(data);
      for (let dataId of dataIds) {
        this.nrmData[from][dataId] = {};
        const colors = Object.keys(data[dataId]);
        for (let color of colors) {
          this.nrmData[from][dataId][color] = [];
          for (let pId = 0; pId < data[dataId][color].length; pId++) {
            this.nrmData[from][dataId][color].push({ x: data[dataId][color][pId].y / this.unity[from].div,
                                                     y: data[dataId][color][pId].z / this.unity[from].div,
                                                     z: data[dataId][color][pId].k / this.unity[from].div});
          };
        }
      }
    }
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

  onParamChange(event: any) {
    const line_params_value = {
      key: "line_params_value",
      value: event.target.value
    };
    
    this.global.setGlobal(line_params_value);
    this.lineParamChanged.emit();
  }

  onValueChange(event: any) {
    const line_selected_params_value = {
      key: "line_selected_params_value",
      value: event.target.value
    };
    this.global.setGlobal(line_selected_params_value);
    this.lineValueChanged.emit();
  }

  isViaipe() {
    return this.global.getGlobal("client_option").value == "viaipe";
  }
}
