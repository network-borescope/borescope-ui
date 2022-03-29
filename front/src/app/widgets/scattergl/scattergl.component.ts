import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { GlobalService } from 'src/app/shared/global.service';

import * as THREE from 'three';
import * as ScatterGL from 'scatter-gl';
import { UMAP } from 'umap-js';

@Component({
  selector: 'app-scattergl',
  templateUrl: './scattergl.component.html',
  styleUrls: ['./scattergl.component.css']
})
export class ScatterglComponent implements OnInit {

  @ViewChild("embedding", { static: true }) private embeddingDiv!: ElementRef;

  @Output() onScatterglValueChanged = new EventEmitter<any>();
  
  //elementos para o scattergl chart
  private capitals: any;
  private embedding: any;
  private scatterGl: any;
  private dataset: any;

  constructor(public global: GlobalService) { }

  ngOnInit(): void {
    //start no scattergl
    this.scatterGl = new ScatterGL.ScatterGL(this.embeddingDiv.nativeElement, {
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
    console.log(responseData)
    //constrói as strings de pares de saída x entrada
    //constrói vetor de dado
    //isto não precisa ser executado todas as vezes que o dado atualizar
    //implementação provisória
    this.capitals = this.global.getGlobal('state_capitals').value.default;
    let holder: any[] = [];

    const data: any[][] = [];
    const statePairList = [];
    for(let i = 0; i < statesIds.length; i++) {
      statePairList.push(this.getCapitalId(statesIds[i][0]) + ' - ' + this.getCapitalId(statesIds[i][1]))
    }


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
    this.scatterGl.resize();
    console.log('CONSTRUIDO')
  }

  //constrói as strings de pares de saída x entrada 
  getCapitalId(id: number) {
    return this.capitals.filter((c: any) => c.cod === id)[0].id.toUpperCase();
  }
}
