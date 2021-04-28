import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';
import { BarChartComponent } from 'src/app/vis/bar-chart/bar-chart.component';
import { LineChartComponent } from 'src/app/vis/line-chart/line-chart.component';
import { MapComponent } from 'src/app/vis/map/map.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // referência para componente do mapa
  @ViewChild("appMap", { static: true }) private map!: MapComponent;
  // referência para o componente do gráfico de barras
  @ViewChild("appBarChart", { static: true }) private bar!: BarChartComponent;
  // referência para o componente do gráfico de linhas
  @ViewChild("appLineChart", { static: true }) private line!: LineChartComponent;

  constructor(public global: GlobalService, public api: ApiService) { }

  ngOnInit(): void { }

  /**
   * Função que faz o request dos heatmaps.
   */
  async requestHeatmap() {
    const location = this.map.getLocation();
    // TODO: pegar os outros parâmetros
    const time: any = [];
    const uf: any = [];
    const cidade: any = [];
    const bairro: any = [];

    const res = await this.api.request2HeatMap(location, time, uf, cidade, bairro);
    this.map.drawHeatMap(res);
  }

  async requestMap2ChartBottom(id: string, color: string) {

  }

  async requestMap2ChartLeft() {

  }

  async requestMap2ChartRight() {

  }

  async requestPoly2ChartBottom(layer: any) {

  }

  async requestPoly2ChartLeft(layer: any) {

  }

  async requestPoly2ChartRight(layer: any) {

  }

  async removePolyInChartBottom(layer: any) {

  }

  async removePoly(layer: any) {

  }

  async refreshPolyChartLeft() {

  }

  async refreshPolyChartRight() {

  }

  async onMoveEnded() {
      this.requestHeatmap();
      this.requestMap2ChartBottom("Map", "#AAAAAA");
      this.requestMap2ChartLeft();
      this.requestMap2ChartRight();
  }

  async onPolyCreated(layer: any) {
    this.requestPoly2ChartBottom(layer);
    this.requestPoly2ChartLeft(layer);
    this.requestPoly2ChartRight(layer);
  }

  async onPolyRemoved(layer: any) {
    this.removePolyInChartBottom(layer);
    this.removePoly(layer);
    this.refreshPolyChartLeft();
    this.refreshPolyChartRight();
  }

  async onPolyEdited(layer: any) {
    this.requestPoly2ChartBottom(layer);
    this.removePoly(layer);
    this.requestPoly2ChartLeft(layer);
    this.requestPoly2ChartRight(layer);
  }

  /**
   * Atualiza a tela.
   */
  refreshInterface() {
    let traceMode = {
      key: "trace_mode",
      // value: document.getElementById("trace").checked
    };
    this.global.setGlobal(traceMode);

    this.requestHeatmap();

    // if (isShowFilter()) {
    //   requestFilter2ChartBottom("Filter", "#606060");
    //   requestFilter2ChartLeft();
    //   //requestFilter2ChartRight();
    // }
    // requestMap2ChartBottom("Map", "#AAAAAA");
    // let listLayer = getListLayer();
    // for (let i = 0; i < listLayer.length; i++) {
    //   requestPoly2ChartBottom(listLayer[i]);
    // }
    // let listBairro = getListBairro();
    // for (let i = 0; i < listBairro.length; i++) {
    //   requestBairro2ChartBottom(listBairro[i].nome, listBairro[i].color, listBairro[i].codigo);
    // }
    // requestMap2ChartLeft();
    // //requestMap2ChartRight();
    // updatePoly();
    // updateBairro();
  }
}
