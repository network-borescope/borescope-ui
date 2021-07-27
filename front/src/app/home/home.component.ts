import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';

import { MapComponent } from 'src/app/widgets/map/map.component';
import { BarChartComponent } from 'src/app/widgets/bar-chart/bar-chart.component';
import { LineChartComponent } from 'src/app/widgets/line-chart/line-chart.component';

import { FiltersComponent } from 'src/app/widgets/filters/filters.component';
import { UtilService } from '../shared/util.service';

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

  constructor(public global: GlobalService, public api: ApiService, public util: UtilService) { }

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
    const obj = this.global.getGlobal('widgets_charts');
    return obj.value[chartId];
  }

  /**
   * Checa se o modal de filtro é visivel
   */
  isConfigVisible(configId: string): boolean {
    const obj = this.global.getGlobal('widgets_config');
    return obj.value[configId];
  }

  /**
   * Adiciona marcação aos markers selecionados no Filtro
   */
  updateFilterMarkers(clientData: any) {
    this.map.drawFilterMarkers(clientData);
  }

  /**
   * Remove a marcação dos markers removidos no Filtro
   */
   removeFilterMarkers() {
    this.map.eraseFilterMarkers();
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

  onPolyRemoved(event: any) {
    const color = event.options.color;

    this.line.clearChart('geometry', color);

    const barChartGroupBy = this.global.getGlobal('bar_group_by').value;
    for (const groupBy of barChartGroupBy) {
      this.bar.clearChart(groupBy, 'geometry', color);
    }

    const groupBy = this.global.getGlobal('bar_group_by_selection').value;
    this.bar.drawChart(groupBy);
  }

  onFiltersDefined(clientData: any) {

    this.updateFilterMarkers(clientData);
    this.updateLineChart('filter', '#333');
    this.updateBarChart('filter', '#333');
  }

  onFiltersRemoved() {
    this.removeFilterMarkers();
    this.line.clearChart('filter', '#333');

    const barChartGroupBy = this.global.getGlobal('bar_group_by').value;
    for (const groupBy of barChartGroupBy) {
      this.bar.clearChart(groupBy, 'filter', '#333');
    }

    const groupBy = this.global.getGlobal('bar_group_by_selection').value;
    this.bar.drawChart(groupBy);
  }

  onMarkerAdded(event: any) {
    const color = event.color;
    const codigo = event.codigo;

    this.updateLineChart('client', color, codigo);
    this.updateBarChart('client', color, codigo);
  }

  onMarkerRemoved(event: any) {
    const color = event.color;

    this.line.clearChart('client', color);

    const barChartGroupBy = this.global.getGlobal('bar_group_by').value;
    for (const groupBy of barChartGroupBy) {
      this.bar.clearChart(groupBy, 'client', color);
    }

    const groupBy = this.global.getGlobal('bar_group_by_selection').value;
    this.bar.drawChart(groupBy);
  }

  onChartTimeChanged(delta: number) {
    // TODO: check the time rante update function
    this.updateTimeRange(delta)

    this.updateHeatmap();
    this.updateBarChart();
    this.updateLineChart();
  }

  onCheckboxClicked() {
    const groupBy = this.global.getGlobal('bar_group_by_selection').value;
    this.bar.drawChart(groupBy);
  };

  getTime(dataId: string = 'map') {
    const t0Str = dataId === 'filter' ? 't0_filter' : 't0_vis';
    const t1Str = dataId === 'filter' ? 't1_filter' : 't1_vis';

    let tsT0 = this.global.getGlobal(t0Str);
    let tsT1 = this.global.getGlobal(t1Str);
    let list = [];
    list.push("time");
    list.push("between");

    list.push(tsT0.value);
    list.push(tsT1.value);

    return list;
  }

  updateTimeRange(id: number) {
    let tsT0 = this.global.getGlobal("t0_vis");
    let tsT1 = this.global.getGlobal("t1_vis");

    let d = (tsT1.value - tsT0.value);

    let small = 20;
    let midi = 10;
    let large = 2;

    if (id == 1) {
      d = d / small;
    } else if (id == -1) {
      d = - d / small;
    } else if (id == 2) {
      d = d / midi;
    } else if (id == -2) {
      d = - d / midi;
    } else if (id == 3) {
      d = d / large;
    } else if (id == -3) {
      d = - d / large;
    }
    else if (id == 4) {
      d >>= 1;
      let tmid = tsT0.value + d;
      d >>= 1;
      let t0 = tmid - d;
      t0 = t0 - (t0 % 10);
      let t1 = tmid + d;
      if (t0 >= t1) t1 = t0 + 1;
      tsT0.value = t0;
      tsT1.value = t1;
      d = 0;
    }
    else if (id == -4) {
      d >>= 1;
      let tmid = tsT0.value + d;
      d <<= 1;
      let t0 = tmid - d;
      let t1 = tmid + d;
      tsT0.value = t0;
      tsT1.value = t1;
      d = 0;
    }

    d = Math.floor(d);
    let xt0 = tsT0.value + d;
    let xt1 = tsT1.value + d;
    let tnice = this.util.time_nice(xt0, xt1);

    tsT0.value = tnice.t0;
    tsT1.value = tnice.t1;
    this.global.setGlobal(tsT0);
    this.global.setGlobal(tsT1);
  }

  /**
   * Função que faz o request dos heatmaps.
   */
  async updateHeatmap() {
    const location = this.map.getLocation();
    const time = this.getTime();

    const res = await this.api.requestHeatMap(location, time);
    this.map.drawHeatMap(res);
  }

  async updateBarChart(dataId: string = 'map', chartColor: string = '#AAAAAA', feat: any = undefined) {
    const time = this.getTime(dataId);
    const location = (dataId === 'geometry') ?
      this.map.getPoly(feat) : this.map.getLocation();

    let client = undefined;
    if (dataId === 'filter') {
      client = this.filters.getClients();
    }
    if (dataId === 'client') {
      client = this.map.getClient(feat);
    }

    const data: any = {};
    const barChartGroupBy = this.global.getGlobal('bar_group_by').value;
    for (const gId of barChartGroupBy) {
      const parts = gId.split('-');
      const query = parts.length > 1 ? parts : parts[0];

      const res = await this.api.requestBarChart(location, time, client, query);
      data[gId] = res;
    }
    this.bar.updateData(data, dataId, chartColor);

    const groupBy = this.global.getGlobal('bar_group_by_selection').value;
    this.bar.drawChart(groupBy);
  }

  async updateLineChart(dataId: string = 'map', chartColor: string = '#AAAAAA', feat: any = undefined) {
    const time = this.getTime(dataId);

    const location = (dataId === 'geometry') ?
      this.map.getPoly(feat) : this.map.getLocation();

    let client = undefined;
    if (dataId === 'filter') {
      client = this.filters.getClients();
    }
    if (dataId === 'client') {
      client = this.map.getClient(feat);
    }

    const res = await this.api.requestLineChart(location, time, client);
    this.line.drawChart(res, dataId, chartColor);
  }
}
