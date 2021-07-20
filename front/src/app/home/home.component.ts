import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';

import { MapComponent } from 'src/app/widgets/map/map.component';
import { BarChartComponent } from 'src/app/widgets/bar-chart/bar-chart.component';
import { LineChartComponent } from 'src/app/widgets/line-chart/line-chart.component';

import { FiltersComponent } from 'src/app/widgets/filters/filters.component';

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
  @ViewChild("appFilters", { static: true }) private filters!: FiltersComponent;

  last: string = 'none';
  moving: string = 'none';

  constructor(public global: GlobalService, public api: ApiService) { }

  ngAfterViewInit(): void {
    this.initCharts();
  }

  /**
   * Calcula o z-index do widget do gráfico
   */
  chartZindex(chartId: string) {
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
   * Checa se o modal de filtro é visivel
   */
  isConfigVisible(configId: string): boolean {
    const obj = this.global.getGlobal('config_widgets');
    return obj.value[configId];
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
    const poly = event._latlngs[0];

    this.updateBarChart('geometry', color, poly);
    this.updateLineChart('geometry', color, poly);
  }

  onPolyRemoved() {
    this.bar.clearDataInfo('geometry');
    this.line.clearDataInfo('geometry');
  }

  onFiltersDefined() {
    this.updateBarChart('filter', '#333');
    this.updateLineChart('filter', '#333');
  }

  onFiltersRemoved() {
    this.bar.clearDataInfo('filter');
    this.line.clearDataInfo('filter');
  }

  onChartTimeChanged(delta: number) {
    // TODO: atualizar dados do line chart, bar chart e map
    console.log(delta);
  }

  onMarkerClicked(event: any) {
    console.log(event);
  }

  getTime(dataId: string = 'map') {

    const t0Str = dataId === 'filter' ? 'ts_t0_filter' : 'ts_t0_vis';
    const t1Str = dataId === 'filter' ? 'ts_t1_filter' : 'ts_t1_vis';

    let tsT0 = this.global.getGlobal(t0Str);
    let tsT1 = this.global.getGlobal(t1Str);
    let list = [];
    list.push("time");
    list.push("between");

    let start = new Date(tsT0.value * 1000);
    let t0 = start.getTime() / 1000;

    let end = new Date(tsT1.value * 1000);
    let t1 = end.getTime() / 1000;

    list.push(t0);
    list.push(t1);

    return list;
  }

  /**
   * Função que faz o request dos heatmaps.
   */
  async updateHeatmap() {
    const location = this.map.getLocation();
    const time = this.getTime();

    // TODO: pegar os outros parâmetros
    const client: any = undefined;

    const res = await this.api.requestHeatMap(location, time, client);
    console.log(res);

    this.map.drawHeatMap(res);
  }

  async updateBarChart(dataId: string = 'map', chartColor: string = '#AAAAAA', poly: any = undefined) {
    const time = this.getTime(dataId);

    const location = (dataId === 'geometry') ?
      this.map.getPoly(poly) : this.map.getLocation();

    const client = (dataId === 'filter') ?
      this.filters.getClients() : undefined;

    const res = await this.api.requestBarChart(location, time, client);
    console.log(res);

    this.bar.drawChart(res, dataId, chartColor);
  }

  async updateLineChart(dataId: string = 'map', chartColor: string = '#AAAAAA', event: any = undefined) {
    const time = this.getTime(dataId);

    const location = (dataId === 'geometry') ?
      this.map.getPoly(event) : this.map.getLocation();

    const client = (dataId === 'filter') ?
      this.filters.getClients() : undefined;

    const res = await this.api.requestLineChart(location, time, client);
    console.log(res);

    this.line.drawChart(res, dataId, chartColor);
  }
}