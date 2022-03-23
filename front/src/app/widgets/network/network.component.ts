import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { point } from 'leaflet';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';
import { Network } from './network';
import { Timeseries } from './network';

import * as THREE from 'three';
import * as ScatterGL from 'scatter-gl';
import { UMAP } from 'umap-js';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  // referência para o div do grafico
  @ViewChild("netChart", { static: true }) private netDiv!: ElementRef;
  @ViewChild("timeseriesChart", { static: true }) private timeseriesDiv!: ElementRef;
  @ViewChild("embedding", { static: true }) private embeddingDiv!: ElementRef;

  @Output() heatMatrixValueChanged = new EventEmitter<number>();
  @Output() heatMatrixParamChanged = new EventEmitter<number>();
  @Output() onCapitalSelected = new EventEmitter<any>();
  @Output() onScatterglValueChanged = new EventEmitter<any>();
  // objeto do gráfico
  private netChart: any;
  private timeseriesChart: any;
  //capitals select list
  private selectedCapitals: any = [];
  //lista de cores
  private drawColors: any = [
    '#1F77B4', '#2CA02C', '#9467BD', '#8C564B', '#E377C2',
    '#AEC7E8', '#98DF8A', '#C5B0D5', '#C49C94', '#F7B6D2'
  ];
  //guarda se o chart a ser mostrado é o network ou umap
  public networkChange: boolean = false;
  //lista de cores já usadas
  private usedColors: any = [];
  //multiselect
  public dropdownList: any = [];
  public dropdownSettings: any = {};

  //elementos para o scattergl chart
  private capitals: any;
  private embedding: any;
  private scatterGl: any;
  private dataset: any;

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.netChart = new Network(this.netDiv.nativeElement);
    this.timeseriesChart = new Timeseries(this.timeseriesDiv.nativeElement);
    //setando as configuracoes do multiselect
    const capitals = this.global.getGlobal("state_capitals").value.default;
    for(let i = 0; i < capitals.length; i++) {
      let id = capitals[i].id.toUpperCase();
      let cod = capitals[i].cod;
      let obj:any = {};
      obj['estado'] = id;
      obj['cod'] = cod;
      this.dropdownList.push(obj);
    };
    this.dropdownSettings = {
      singleSelection: false,
      limitSelection: 10,
      idField: 'cod',
      textField: 'estado',
      enableCheckAll: false,
      unSelectAll: false,
      itemsShowLimit: 0,
      allowSearchFilter: false
    };

    //start no scattergl
    this.scatterGl = new ScatterGL.ScatterGL(this.embeddingDiv.nativeElement, {
      renderMode: ScatterGL.RenderMode.TEXT,
      orbitControls: {
        zoomSpeed: 1.125,
      },
    });
    //pega o dado pro scattergl
    this.onScatterglValueChanged.emit();  
  }

  drawChart(data: any, capitals: any, clicked: number = -1, invert: boolean = false) {
    const capitalId = clicked;
    this.netChart.setData(data, capitals, clicked >= 0, invert, capitalId);
    this.netChart.render();
    this.timeseriesChart.setCapitals(capitals);
  }

  updateTimeseriesData(data: any, dates: any, capitals: any, clicked: number) {
    for(let i = 0; i < data.length; i++) {
       this.updateUsedColors(true,this.drawColors[i]);
    }

    this.timeseriesChart.clear();
    this.timeseriesChart.updateData(data, this.drawColors);
    this.timeseriesChart.setLabels(dates);
    this.timeseriesChart.setTitle(clicked);
    this.timeseriesChart.render();
  }

  updateScatterglData(responseData: any) {
    //constrói as strings de pares de saída x entrada
    //constrói vetor de dado
    //isto não precisa ser executado todas as vezes que o dado atualizar
    //implementação provisória
    this.capitals = this.global.getGlobal('state_capitals').value.default;
    const statePairList = [];
    const data = [];
    for(let i = 0; i < responseData.length; i++) {
      statePairList.push(this.getCapitalId(responseData[i][0]) + ' - ' + this.getCapitalId(responseData[i][1]))
      data.push(responseData[i][2])
    }
    //reduzindo dimensionalidade do dado
    const umap = new UMAP();
    const embedding = umap.fit(data);

    const dataPoints: ScatterGL.Point2D[] = [];
    const metadata: ScatterGL.PointMetadata[] = [];

    for(let i = 0; i < embedding.length; i++) {
      let labelIndex = [i].toString();
      let label = statePairList[i]
      dataPoints.push([embedding[i][0], embedding[i][1]])
      metadata.push({
        labelIndex,
        label
      });
      
    }

    const dataset = new ScatterGL.Dataset(dataPoints, metadata);
    this.scatterGl.updateDataset(dataset);
    this.scatterGl.render(dataset);
    console.log('CONSTRUIDO')
  }

  //constrói as strings de pares de saída x entrada 
  getCapitalId(id: number) {
    return this.capitals.filter((c: any) => c.cod === id)[0].id.toUpperCase();
  }

  onValueChange(event: any) {
    const heatmatrix_value = {
      key: "heatmatrix_value",
      value: event.target.value
    };
    this.global.setGlobal(heatmatrix_value);
    this.heatMatrixValueChanged.emit();
    if(!this.isTimeseriesSelected()) { 
      this.onCapitalSelected.emit(this.selectedCapitals);
    }
  }

  onParamChange(event: any) {
    const heatmatrix_param = {
      key: "heatmatrix_param",
      value: event.target.value
    };
    this.global.setGlobal(heatmatrix_param);
    this.heatMatrixParamChanged.emit();
    if(!this.isTimeseriesSelected()) { 
      this.onCapitalSelected.emit(this.selectedCapitals);
    }
  }

  onChartChange(event: any) {
    if(event.target.value == 'heatmatrix') {
      const network_param = {
        key: "network_param",
        value: 2
      };
      this.global.setGlobal(network_param);
    } else if (event.target.value == 'umap') {
      const network_param = {
        key: "network_param",
        value: 1
      };
      this.global.setGlobal(network_param);    
    } else {
      const network_param = {
        key: "network_param",
        value: 0
      };
      this.global.setGlobal(network_param);  
    }
  }

  networkToggle() {
    this.networkChange = !this.networkChange;
  }

  isTimeseriesSelected() {
    const network_param = this.global.getGlobal("network_param");
    return network_param.value !== 0;
  }


  onCapitalSelect(event: any, added: boolean) {
    if(this.selectedCapitals.includes(event.cod)) {
      const index = this.selectedCapitals.indexOf(event.cod);
      this.selectedCapitals = this.selectedCapitals.filter((e:any) => e !== event.cod);
      this.updateUsedColors(false, this.usedColors[index]);
    } else {
      this.selectedCapitals.push(event.cod);
    };
    this.onCapitalSelected.emit(this.selectedCapitals);
  }

  chartDisplay() {
    const network_param = this.global.getGlobal("network_param").value;
    //verdadeiro para heatmatrix
    if(network_param == 2) return [true,false,false];
    //verdadeiro para UMAP
    else if(network_param == 1) return [false,false,true];
    //verdadeiro para time series
    else return [false,true,false];
  }

  isCapitalSelected() {
    return (this.global.getGlobal("clicked_element").value > 0)
  }
  
  clearTimeseries() {
    this.selectedCapitals = [];
    this.timeseriesChart.clear();
  }

  /**
 * seta as cores já utilizadas
 */
  updateUsedColors(added: boolean, color: string) {
    if (added) {
      if(!this.usedColors.includes(color)) this.usedColors.push(color);
    }
    else {
      this.usedColors = this.usedColors.filter( (d: string) => d !== color );
    }
  }
}
