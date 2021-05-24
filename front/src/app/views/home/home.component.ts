import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';

import { MapComponent } from 'src/app/vis/map/map.component';
import { BarChartComponent } from 'src/app/vis/bar-chart/bar-chart.component';
import { LineChartComponent } from 'src/app/vis/line-chart/line-chart.component';

import { ConfigComponent } from '../config/config.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  // referência para componente do mapa
  @ViewChild("appMap", { static: true }) private map!: MapComponent;
  // referência para o componente do gráfico de barras
  @ViewChild("appBarChart", { static: true }) private bar!: BarChartComponent;
  // referência para o componente do gráfico de linhas
  @ViewChild("appLineChart", { static: true }) private line!: LineChartComponent;
  // referência para componente do mapa
  @ViewChild("appConfig", { static: true }) private config!: ConfigComponent;

  last: string = 'none';
  moving: string = 'none';

  constructor(public global: GlobalService, public api: ApiService) { }

  ngAfterViewInit(): void {
    this.initCharts();
  }

  chartZindex(chartId: string){
    if (chartId == this.moving) {
      return 950;
    }

    if (chartId == this.last) {
      return 930;
    }

    return 900;
  }

  isChartVisible(chartId: string): boolean {
    const obj = this.global.getGlobal('chart_widgets');
    return obj.value[chartId];
  }

  async initCharts() {
    await this.updateHeatmap();
    await this.updateBarChart();
    await this.updateLineChart();

  }

  /**
   * Função que faz o request dos heatmaps.
   */
  async updateHeatmap() {
    const location = this.map.getLocation();
    const time = this.config.getTime();

    // TODO: pegar os outros parâmetros
    const uf: any = undefined;
    const cidade: any = undefined;
    const bairro: any = undefined;

    const res = await this.api.requestHeatMap(location, time, uf, cidade, bairro);
    console.log(res);

    this.map.drawHeatMap(res);
  }

  async updateBarChart() {
    const location = this.map.getLocation();
    const time = this.config.getTime();

    // TODO: pegar os outros parâmetros
    const uf: any = [];
    const cidade: any = [];
    const bairro: any = [];

    const res = await this.api.requestBarChart(location, time, uf, cidade, bairro);
    console.log(res);

    this.bar.drawChart(res);
  }

  async updateLineChart() {
    const location = this.map.getLocation();
    const time = this.config.getTime();

    // TODO: pegar os outros parâmetros
    const uf: any = [];
    const cidade: any = [];
    const bairro: any = [];

    const res = await this.api.requestLineChart(location, time, uf, cidade, bairro);
    console.log(res);

    this.line.drawChart(res, 'teste', "#444");
  }

  async refreshAll() {
    this.updateHeatmap();
    // this.updateBarChart();
    // this.updateLineChart();
  }

  async refreshCharts() {
    console.log('called');
    // this.updateBarChart();
    // this.updateLineChart();
  }
}
