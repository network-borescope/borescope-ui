import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { GlobalService } from 'src/app/shared/global.service';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import * as THREE from 'three';
import * as ScatterGL from 'scatter-gl';
import { UMAP } from 'umap-js';
import * as d3 from 'd3'

@Component({
  selector: 'app-scattergl',
  templateUrl: './scattergl.component.html',
  styleUrls: ['./scattergl.component.css']
})
export class ScatterglComponent implements OnInit {

  @ViewChild("embedding", { static: true }) private embeddingDiv!: ElementRef;

  @Output() onScatterglValueChanged = new EventEmitter<any>();
  @Output() onParamSelected = new EventEmitter<any>();
  @Output() onAreaSelect = new EventEmitter<any>();
  @Output() removeAreaSelection = new EventEmitter();
  //elementos para o scattergl chart
  private capitals: any;
  private embedding: any;
  private scatterGl: any;
  private scatterglData: any = [];
  private dataset: any;
  private colorScale: any = d3.scaleSequential(d3.interpolateReds);

  //configurações do multiselect
  public selectDisabler: string = "disabled";
  public dropdownList: any = this.global.getGlobal("scattergl_params").value.default;
  public dropdownSettings: any = {
    singleSelection: false,
    limitSelection: 10,
    idField: 'value',
    textField: 'param',
    enableCheckAll: false,
    unSelectAll: false,
    itemsShowLimit: 0,
    allowSearchFilter: false
  };
  public selectedParams: any[] = [];

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
    console.log(this.dropdownList)
    //start no scattergl
    this.scatterGl = new ScatterGL.ScatterGL(this.embeddingDiv.nativeElement, {
      onSelect: (points: number[]) => {
        if (points.length === 0) {
          console.log('nothing selected');
          this.onAreaSelect.emit([]);
        } else {
          this.onAreaSelect.emit(points);
        }
      },
      renderMode: ScatterGL.RenderMode.POINT,
      orbitControls: {
        zoomSpeed: 1.125,
      },
    });
    //adding resize on screen resize to scattergl plot
    window.addEventListener('resize', () => {
      this.scatterGl.resize();
    }); 
  }

  updateScatterglData(id: number,responseData: any, statesIds: any) {
    this.scatterglData.push({'id': id, 'data': responseData});
    //constrói as strings de pares de saída x entrada
    //constrói vetor de dado
    //isto não precisa ser executado todas as vezes que o dado atualizar
    //implementação provisória
    this.capitals = this.global.getGlobal('state_capitals').value.default;

    const statePairList = [];
    const stateIdPairList = [];
    for(let i = 0; i < statesIds.length; i++) {
      statePairList.push(this.getCapitalId(statesIds[i][0]) + ' - ' + this.getCapitalId(statesIds[i][1]))
    }

    const data = [];
    
    for(let i = 0; i < responseData[0].length; i++){
     data.push([responseData[0][i],
                 responseData[1][i], 
                 responseData[2][i],
                 responseData[3][i], 
                 responseData[4][i],
                 responseData[5][i], 
                 responseData[6][i],
                 responseData[7][i], 
                 responseData[8][i],
                 responseData[9][i], 
                 responseData[10][i],
                 responseData[11][i]])
    }
    
    this.colorPoints(this.global.getGlobal("scattergl_options"))
    //reduzindo dimensionalidade do dado
    const umap = new UMAP();
    const embedding = umap.fit(data);
    const dataPoints: ScatterGL.Point2D[] = [];
    const metadata: ScatterGL.PointMetadata[] = [];

    for(let i = 0; i < embedding.length; i++) {
      let labelIndex = [i].toString();
      let label = statePairList[i];
      dataPoints.push([embedding[i][0], embedding[i][1]])
      metadata.push({
        labelIndex,
        label
      });
      
    }

    this.dataset = new ScatterGL.Dataset(dataPoints, metadata);
    
    this.scatterGl.updateDataset(this.dataset);
    
    this.scatterGl.render(this.dataset);
    this.scatterGl.resize();
  }

  //constrói as strings de pares de saída x entrada 
  getCapitalId(id: number) {
    return this.capitals.filter((c: any) => c.cod === id)[0].id.toUpperCase();
  }

  colorPoints(scatterglOptions: any) {
    const data = this.selectData(scatterglOptions)
    // @ts-ignore
    const all = d3.extent(data.map((d: any) => d).filter(e => e > 0) );

    if (scatterglOptions.invert) {
      this.colorScale.domain( all.reverse() );
    }
    else {
      this.colorScale.domain( all );
    }

    this.scatterGl.setPointColorer((i: any, selectedIndices: any, hoverIndex: any) => {
      const isSelected = selectedIndices.has(i);
      const labelIndex = this.dataset.metadata![i]['labelIndex'] as number;
      const color = this.valToColor(data[labelIndex])
      if (hoverIndex === i) return 'red';
      else if(isSelected) return "hsla(240,100%,25%,0.5)";
      else return color;
    });
  }

  valToColor(d: any) {
    if (d === 0) {
      return "#333";
    }
    return this.colorScale(d)
  }

  onOptionChange(event: any) {
    const scattergl_options = this.global.getGlobal("scattergl_options")
    if(event.target.name == 'code') {
      scattergl_options.value = parseInt(event.target.value);
      this.global.setGlobal(scattergl_options)      
    } else {
      scattergl_options.param = parseInt(event.target.value);
      this.global.setGlobal(scattergl_options)
    }
    this.colorPoints(scattergl_options);
  }

  onParamChange(event: any, added: boolean) {
    if(added) {
      this.selectDisabler = "";
      this.selectedParams.push(event)
    } else {
      for(let i = 0; i < this.selectedParams.length; i++) {
        if(this.selectedParams[i].value == event.value) {
          console.log
          this.selectedParams.splice(i, 1);
        }
      }
      (this.selectedParams.length > 0) ? this.selectDisabler = "" : this.selectDisabler = "disabled"
    }
    this.onParamSelected.emit({"value": event.value, "added": added});
  }

  onSelectionModeChange(event: any) {
    if(event.target.value == "pan") { 
      this.removeAreaSelection.emit();
      this.scatterGl.setPanMode();
    } else {
      this.removeAreaSelection.emit();
      this.scatterGl.setSelectMode();
    }
  }

  selectData(options: any) {
    const dataIndex = options.value + options.param;
    console.log(dataIndex)
    return this.scatterglData[dataIndex];
  }
}