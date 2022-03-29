import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { GlobalService } from 'src/app/shared/global.service';

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
  @Output() onPointHover = new EventEmitter<number>();
  @Output() onHoverLeft = new EventEmitter();
  //elementos para o scattergl chart
  private capitals: any;
  private embedding: any;
  private scatterGl: any;
  private scatterglData: any = [];
  private dataset: any;
  private colorScale: any = d3.scaleSequential(d3.interpolateReds);

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
    //start no scattergl
    this.scatterGl = new ScatterGL.ScatterGL(this.embeddingDiv.nativeElement, {
      onHover: (point: number | null) => {
        if(point !== null) {
          this.onPointHover.emit(point);
        } else {
          this.onHoverLeft.emit();
        };
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

  updateScatterglData(responseData: any, statesIds: any) {
    this.scatterglData = responseData;
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
    console.log('CONSTRUIDO')
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
      const labelIndex = this.dataset.metadata![i]['labelIndex'] as number;
      const color = this.valToColor(data[labelIndex])
      if (hoverIndex === i) {
        return 'red';
      } else {
        return color
      }
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

  selectData(options: any) {
    const dataIndex = options.value + options.param;
    console.log(dataIndex)
    return this.scatterglData[dataIndex];
  }
}
