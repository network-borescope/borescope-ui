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
  @Output() onTimeBoundsChanged = new EventEmitter<any>();
  @Output() removeAreaSelection = new EventEmitter();
  //elementos para o scattergl chart
  private capitals: any = this.global.getGlobal('state_capitals').value.default;
  private embedding: any;
  private scatterGl: any;
  private scatterglData: any = [];
  private dataset: any;
  private colorScale: any = d3.scaleSequential(d3.interpolateReds);
  private statePairList: any[] = [];

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
    this.buildStatePairList();
    this.startScattergl();
  }

  startScattergl() {
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

  async updateScatterglData(id: number, added: boolean ,responseData: any) {
    if(added) {
      this.scatterglData.push({'id': id, 'data': responseData});
    } else {
      const newScatterglData = [];
      for(let i = 0; i < this.scatterglData.length; i++) {
        if(this.scatterglData[i].id !== id) { 
          newScatterglData.push(this.scatterglData[i]);
        }
      }
      this.scatterGl.setPointColorer(() => {
        return "hsla(240,100%,25%,0.5)";
      });
      this.scatterglData = newScatterglData;
    }
    if(this.scatterglData.length == 0) {
      //restart no scattergl caso nenhum dado selecionado
      const scatterGlDiv = document.querySelector('#scattergl-embedding')!;
      scatterGlDiv.innerHTML = "";
      this.startScattergl();
    } else {
      const data = this.buildData(this.scatterglData);
  
      //reduzindo dimensionalidade do dado
      const umap = new UMAP();
      const embedding = umap.fit(data);
      const dataPoints: ScatterGL.Point2D[] = [];
      const metadata: ScatterGL.PointMetadata[] = [];
  
      for(let i = 0; i < embedding.length; i++) {
        let labelIndex = [i].toString();
        let label = this.statePairList[i];
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
    console.log(scattergl_options)

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
          this.selectedParams.splice(i, 1);
        }
      }
      if(this.selectedParams.length > 0) {
        this.selectDisabler = "";
      } else {
        (document.getElementById('scattergl-select-options') as HTMLInputElement).value = "-1";
        this.selectDisabler = "disabled";
      }
    }
    this.onParamSelected.emit({"value": event.value, "added": added});
  }

  onTimeBoundsChange()  {
    for(let  i = 0; i < this.scatterglData.length; i++) {
      this.onTimeBoundsChanged.emit({value: this.scatterglData[i].id, added: true})
    }
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
    for(let i = 0; i < this.scatterglData.length; i++) {
      if(this.scatterglData[i].id == options.value) return this.scatterglData[i].data[options.param];
    }
  }

  buildData(data: any) {
    const structuredData: any[] = [];
    for(let i = 0; i < data[0].data[0].length; i++) structuredData.push([]);
    for(let i = 0; i < data.length; i++) {
      for(let j = 0; j < structuredData.length; j++) {
        structuredData[j].push(data[i].data[0][j])
        structuredData[j].push(data[i].data[1][j])
        structuredData[j].push(data[i].data[2][j])
      }
    }
    return structuredData;
  }

  buildStatePairList() {
    //constrói a lista com os pares de estados
    const statesIds = [];
    for(let i = 1; i < 28; i++) {
      for(let j = 1; j < 28; j++) {
        statesIds.push([i, j])
      }
    }

    for(let i = 0; i < statesIds.length; i++) {
      this.statePairList.push(this.getCapitalId(statesIds[i][0]) + ' - ' + this.getCapitalId(statesIds[i][1]))
    }
  }
}