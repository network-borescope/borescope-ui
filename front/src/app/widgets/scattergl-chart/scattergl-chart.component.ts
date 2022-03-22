import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

import * as THREE from 'three';
import * as ScatterGL from 'scatter-gl';

@Component({
  selector: 'app-scattergl-chart',
  templateUrl: './scattergl-chart.component.html',
  styleUrls: ['./scattergl-chart.component.css']
})
export class ScatterglChartComponent implements OnInit {

  @ViewChild("embedding", { static: true }) private embeddingDiv!: ElementRef;

  private embedding: any;
  private scatterGl: any;
  private dataPoints: ScatterGL.Point2D[] = [];
  private metadata: ScatterGL.PointMetadata[] = [];
  private dataset: any;

  constructor() { }

  ngOnInit(): void {
    this.scatterGl = new ScatterGL.ScatterGL(this.embeddingDiv.nativeElement, {
      renderMode: ScatterGL.RenderMode.TEXT,
      orbitControls: {
        zoomSpeed: 1.125,
      },
    });
  }

  updateData(responseData: any) {

  }

  drawScatterGl() {

  }

}
