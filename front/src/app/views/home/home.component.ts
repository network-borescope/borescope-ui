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

  /**
   * Calcula o z-index do widget do gráfico
   */
  chartZindex(chartId: string){
    if (chartId == this.moving) {
      return 950;
    }
    if (chartId == this.last) {
      return 930;
    }
    return 900;
  }

  /**
   * Checa se o widget do gráfico é visivel
   */
   isChartVisible(chartId: string): boolean {
    const obj = this.global.getGlobal('chart_widgets');
    return obj.value[chartId];
  }

  /**
   * Inicializa os gráficos usando os dados do mapa
   */
  async initCharts() {
    await this.updateHeatmap();
    await this.updateBarChart();
    await this.updateLineChart();
  }

  /**
   * updates the map chart after map update
   */
  onMoveEnded() {
    this.updateBarChart();
    this.updateLineChart();
  }

  /**
   * Atualiza os gráficos a pós as seleções do mapa
   */
  onPolyCreated(event: any) {
    const color = event.options.color;
    const poly  = event._latlngs[0];

    this.updateBarChart('geometry', color, poly);
    // this.updateLineChart();
  }

  onPolyRemoved() {
    this.bar.clearDataInfo('geometry');
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

  async updateBarChart(infoId: string = 'map', chartColor: string = '#AAAAAA', poly: any = undefined) {
    const time = this.config.getTime();

    const location = (infoId === 'geometry') ?
      this.map.getPoly(poly) : this.map.getLocation();

    const estado = (infoId === 'filter') ? [] : undefined;
    const cidade = (infoId === 'filter') ? [] : undefined;
    const bairro = (infoId === 'filter') ? [] : undefined;

    const res = await this.api.requestBarChart(location, time, estado, cidade, bairro);
    console.log(res);

    this.bar.drawChart(res, infoId, chartColor);
  }

  async updateLineChart(infoId: string = 'map', chartColor: string = '#AAAAAA', event: any = undefined) {
    const time = this.config.getTime();

    const location = (infoId === 'geometry') ?
      this.map.getPoly(event) : this.map.getLocation();

    const estado = (infoId === 'filter') ? [] : undefined;
    const cidade = (infoId === 'filter') ? [] : undefined;
    const bairro = (infoId === 'filter') ? [] : undefined;

    const res = await this.api.requestLineChart(location, time, bairro, cidade, bairro);
    console.log(res);

    this.line.drawChart(res, infoId, chartColor);
  }
}
