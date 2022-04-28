import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';

import { MapComponent } from 'src/app/widgets/map/map.component';
import { BarChartComponent } from 'src/app/widgets/bar-chart/bar-chart.component';
import { LineChartComponent } from 'src/app/widgets/line-chart/line-chart.component';
import { NetworkComponent } from 'src/app/widgets/network/network.component';
import { AlertsComponent } from '../widgets/alerts/alerts.component';
import { FiltersComponent } from 'src/app/widgets/filters/filters.component';
import { ScatterglComponent } from 'src/app/widgets/scattergl/scattergl.component';

import { NgxSpinnerService } from "ngx-spinner";

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
  // referência para o componente da heatmatrix
  @ViewChild("appNetworkChart", { static: true }) private net!: NetworkComponent;
  // referência para o componente dos alertas
  @ViewChild("appAlerts", { static: true }) private alerts!: AlertsComponent;
  // referência para componente do mapa
  @ViewChild("appFilters", { static: true }) private filters!: FiltersComponent;
  // referência para componente do scattergl
  @ViewChild("appScatterglChart", { static: true }) private scattergl!: ScatterglComponent;

  public last: string = 'none';
  public moving: string = 'none';

  private timeBoundsRefreshFnc: any = undefined;

  constructor(public global: GlobalService, public api: ApiService, public util: UtilService, private spinner: NgxSpinnerService) {
    this.timeBoundsRefreshFnc = setInterval(async () => {
      await this.timeBoundsRefresh();
      await this.listIpsRefresh();
    }, 60 * 1000);
  }

  ngAfterViewInit(): void {
    this.initCharts();
  }

  ngDestroy() {
    if (this.timeBoundsRefreshFnc) {
      clearInterval(this.timeBoundsRefreshFnc);
    }
  }

  /**
   * Inicializa os gráficos usando os dados do mapa
   */
  initCharts() {
    this.updateHeatmap();
    // barchart e linechart do mapa
    this.updateLineChart('map', '#AAAAAA');
    this.updateBarChart('map', '#AAAAAA');

    // adiciona ao estado global
    this.addChartElementToGlobal('map', '#AAAAAA');

    // heat matrix
    this.updateHeatmatrix();
  }

  /**
   * Redesenha todos os gráficos
   */
  redrawAllCharts() {
    this.updateHeatmap();

    const line_params = this.global.getGlobal('line_params').value;
    for (const param of line_params) {
      this.line.clearLabel(param);
    }

    const bar_params = this.global.getGlobal('bar_params').value;
    for (const param of bar_params) {
      this.bar.clearLabel(param);
    }

    const elements = this.global.getGlobal('active_chart_elements').value;
    for (const elem of elements) {
      this.updateLineChart(elem.dataId, elem.chartColor, elem.feature);
      this.updateBarChart(elem.dataId, elem.chartColor, elem.feature);
    }

    this.updateHeatmatrix();
  }

  /**
   * Atualização automática do gráfico
   */
  async timeBoundsRefresh() {
    console.log('########## timeBoundsRefresh ##########')

    const bounds = await this.api.getTimeBounds();

    let bounds_time = {
      key: "bounds_time",
      value: [bounds.result.vs[0][0], bounds.result.vs[1][0]]
    };
    this.global.setGlobal(bounds_time);

    console.log(bounds_time);
    console.log('#######################################')
  }

  async listIpsRefresh() {
    console.log('########## ipListRefresh ##############')
    const ips = await this.api.getIPs();

    const list_ips = {
      key: "list_ips",
      value: ips
    };
    this.global.setGlobal(list_ips);

    console.log(list_ips);
    console.log('#######################################')
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
   * Adiciona um elemento do gráfico ao estado global
   */
  addChartElementToGlobal(dataId: string, chartColor: string, feature: any = undefined) {
    // restaura o estado
    const elements = this.global.getGlobal('active_chart_elements');

    // procura o elemento
    const id = elements.value.findIndex((el: any) => {
      return el.dataId === dataId && el.chartColor === chartColor
    });

    // se achar, remove
    if (id >= 0) {
      elements.value.splice(id, 1);
    }

    // adiciona o novo elemento
    elements.value.push({ dataId, chartColor, feature });

    // restaura o estado
    this.global.setGlobal(elements)
  }

  /**
   * Remove um elemento do gráfico do estado global
   */
  removeChartElementFromGlobal(dataId: string, chartColor: string, feature: any = undefined) {
    // remove o polígono a lista de elementos ativos
    const elements = this.global.getGlobal('active_chart_elements');

    // procura o elemento
    const id = elements.value.findIndex((el: any) => {
      return el.dataId === dataId && el.chartColor === chartColor
    });

    // se achar, remove
    if (id >= 0) {
      elements.value.splice(id, 1);
    }

    // atualiza o estado
    this.global.setGlobal(elements)
  }

  /**
   * Atualiza o mapa depois de um evento de zoom ou pan
   */
  onMoveEnded() {
    // atualiza o heatmap
    this.updateHeatmap();

    // redesenha o elemento map dos gráficos
    this.updateLineChart('map', '#AAAAAA');
    this.updateBarChart('map', '#AAAAAA');

    // TODO: atualizar a heat matrix com base no zoom
    this.updateHeatmatrix();
  }

  /**
   * Atualiza os gráficos após a criação de uma seleções do mapa
   */
  onPolyCreated(event: any) {
    const color = event.options.color;
    const poly = event._latlngs[0];

    // barchart e linechart da seleção geométrica
    this.updateLineChart('geometry', color, poly);
    this.updateBarChart('geometry', color, poly);

    // adiciona ao estado global
    this.addChartElementToGlobal('geometry', color, poly);
  }

  /**
   * Atualiza os gráficos após a remoção de uma seleções do mapa
   */
  onPolyRemoved(event: any) {
    const color = event.options.color;

    const line_params = this.global.getGlobal('line_params').value;
    for (const param of line_params) {
      this.line.clearChart(param.id, 'geometry', color);
    }

    const bar_params = this.global.getGlobal('bar_params').value;
    const lmap = this.global.getGlobal('label_maps').value;

    for (const param of bar_params) {
      this.bar.clearChart(param.id, 'geometry', color, lmap);
    }

    // remove do estado global
    this.removeChartElementFromGlobal('geometry', color);
  }

  /**
   * Atualiza os gráficos após a seleção de um pin do mapa
   */
  onMarkerAdded(event: any) {
    const cod = event.cod;
    const color = event.color;
    const name = event.nome.replace(/_/g, ' ');;
    // barchart e linechart do marker
    this.updateLineChart('client', color, cod, name);
    this.updateBarChart('client', color, cod, name);

    // adiciona ao estado global
    this.addChartElementToGlobal('client', color, cod);
  }

  /**
   * Atualiza os gráficos após a remoção de um pin do mapa
   */
  onMarkerRemoved(event: any) {
    const color = event.color;

    const line_params = this.global.getGlobal('line_params').value;
    for (const param of line_params) {
      this.line.clearChart(param.id, 'client', color);
    }

    const bar_params = this.global.getGlobal('bar_params').value;
    const lmap = this.global.getGlobal('label_maps').value;

    for (const param of bar_params) {
      this.bar.clearChart(param.id, 'client', color, lmap);
    }

    // remove do estado global
    this.removeChartElementFromGlobal('client', color);
  }

  /**
   * Atualiza os gráficos após a criação de um filtro
   */
  onFiltersDefined(clientData: any) {
    this.map.drawFilterMarkers(clientData);
    this.updateLineChart('filter', this.global.getGlobal('filter_color').value);
    this.updateBarChart('filter', this.global.getGlobal('filter_color').value);
    // adiciona ao estado global
    this.addChartElementToGlobal('filter', this.global.getGlobal('filter_color').value, clientData);
  }

  /**
   * Atualiza os gráficos após a remoção de um filtro
   */
  onFiltersRemoved() {
    this.map.eraseFilterMarkers();

    const line_params = this.global.getGlobal('line_params').value;
    for (const param of line_params) {
      this.line.clearChart(param.id, 'filter', this.global.getGlobal('filter_color').value);
    }

    const bar_params = this.global.getGlobal('bar_params').value;
    const lmap = this.global.getGlobal('label_maps').value;

    for (const param of bar_params) {
      this.bar.clearChart(param.id, 'filter', this.global.getGlobal('filter_color').value, lmap);
    }

    // remove do estado global
    this.removeChartElementFromGlobal('filter', this.global.getGlobal('filter_color').value);
  }

  /**
   * Atualiza o critério de groupby do barchart
   */
  onBarSelectedChanged() {
    const param = this.global.getGlobal('bar_params_value').value;
    this.bar.drawChart(param);
  };

  /**
   * Atualiza o from de saída do linechart
   */
   onLineSelectedChanged(){
    const param = this.global.getGlobal('line_params_value').value;
    const selectedParam = this.global.getGlobal('line_selected_params_value').value;
    this.line.drawChart(param, selectedParam);
  }
  /**
   * reseta a timeseries quando o botão de reset do zoom é clicado
   */
  onTimeseriesReset() {
    this.net.clearTimeseries();
  }
  /**
   * Atualiza o período de tempo ativo das visualizações
   */
  async onChartTimeChanged(delta: number) {
    // reseta o tempo
    if (delta === 5) {
      const bounds = this.global.getGlobal('bounds_time');

      let tsT0 = this.global.getGlobal("t0_vis");
      tsT0.value = bounds.value[0];
      this.global.setGlobal(tsT0);

      let tsT1 = this.global.getGlobal("t1_vis");
      tsT1.value = bounds.value[1];
      this.global.setGlobal(tsT1);
    }

    // atualiza o range de tempo dos gráficcos
    this.updateChartsTimeRange(delta)
    // redesenha todos os gráficos
    this.redrawAllCharts();
  }

  /**
   * Intervalo de tempo usado na montagem da consulta
   */
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

  /**
   * Atualiza o intervalo de tempo dos gráficos
   */
  updateChartsTimeRange(id: number) {
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
      if (t0 >= t1) t1 = t0 + 1;
      tsT0.value = t0;
      tsT1.value = t1;
      d = 0;
    }
    else if (id == 5) {
      d = 0;
    }

    d = Math.floor(d);
    let xt0 = tsT0.value + d;
    let xt1 = tsT1.value + d;
    let tnice = this.util.time_nice(xt0, xt1);

    const sDate = new Date(0);
    sDate.setUTCSeconds(tnice.t0)
    const eDate = new Date(0);
    eDate.setUTCSeconds(tnice.t1)

    console.log('#### New time range ############################')
    console.log(sDate.toUTCString(), eDate.toUTCString());

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

  async updateBarChart(dataId: string, chartColor: string, feat: any = undefined, name: any = undefined) {
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
    const bar_params = this.global.getGlobal('bar_params').value;
    for (const param of bar_params) {
      const res = await this.api.requestBarChart(location, time, client, param);
      data[param.id] = res;
    }
    const lmap = this.global.getGlobal('label_maps').value;
    this.bar.updateData(data, dataId, chartColor, lmap);

    const param = this.global.getGlobal('bar_params_value').value;
    this.bar.drawChart(param, name);
  }

  async updateLineChart(dataId: string, chartColor: string, feat: any = undefined, name: any = undefined) {
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
    const line_params = this.global.getGlobal('line_params').value;

    for (const param of line_params) {
      const res = await this.api.requestLineChart(location, time, client, param);
      data[param.id] = res;
    }

    this.line.updateData(data, dataId, chartColor);

    const param = this.global.getGlobal('line_params_value').value;
    const selectedParam = this.global.getGlobal('line_selected_params_value').value;
    this.line.drawChart(param, selectedParam, name);
  }

  async updateHeatmatrix() {
    let tsT0 = this.global.getGlobal("t0_vis").value;
    let tsT1 = this.global.getGlobal("t1_vis").value;

    const selectedParam = parseInt(this.global.getGlobal('heatmatrix_param').value);
    const selectedValue = this.global.getGlobal('heatmatrix_value').value;
    const capitals = this.global.getGlobal('state_capitals').value.default;

    const clicked = this.global.getGlobal("clicked_element").value;

    const res = await this.api.requestHeatmatrix(selectedParam, selectedValue, tsT0, tsT1, clicked);
    const data = JSON.parse(res).result;

    this.net.drawChart(data, capitals, clicked, selectedParam != 77);
  }

  async updateTimeseries(event: any) {
    let tsT0 = this.global.getGlobal("t0_vis").value;
    let tsT1 = this.global.getGlobal("t1_vis").value;


    const selectedParam = parseInt(this.global.getGlobal('heatmatrix_param').value);
    const selectedValue = this.global.getGlobal('heatmatrix_value').value;
    const capitals = this.global.getGlobal('state_capitals').value.default;

    const clicked = this.global.getGlobal("clicked_element").value;

    const res = await this.api.requestHeatmatrix(selectedParam, selectedValue, tsT0, tsT1, clicked);
    const data = JSON.parse(res).result;
    const selectedData:any = [];
    const datetimeArray:any = [];
    for(let i = 0; i < event.length; i++) {
      selectedData[i] = [event[i],[]];

      for(let j = 0; j < data.length; j++) {
        if(data[j][0] == event[i]) selectedData[i][1].push(data[j][2])
      } 
    }
    
    for(let i = 0; i < 7; i++) {
      let label = '';
      let date = new Date(data[i][1] * 1000);
      //@ts-ignore
      label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' })
      datetimeArray.push(label);
    }
    this.net.updateTimeseriesData(selectedData, datetimeArray, capitals, clicked);
  }

  async updateScattergl(event: any) {
    this.spinner.show();
    let selectedParam = event.value;
    const added = event.added;
    const statesIds = [];
    const finalData = [];
    const selectedValue = ['h_avg','h_min', 'h_max']
          //usando a mesma query da heatmatrix
          let tsT0 = this.global.getGlobal("t0_vis").value;
          let tsT1 = this.global.getGlobal("t1_vis").value;
          const clicked = this.global.getGlobal("clicked_element").value;
    if(event.added) {
      


      for(let i = 0; i < selectedValue.length; i++) {
        const res = await this.api.requestHeatmatrix(selectedParam, selectedValue[i], tsT0, tsT1, clicked);
        const data = JSON.parse(res).result;
        let dataList = []
        for(let k = 0; k < data.length; k++) {
          dataList.push(data[k][2])
        }
        finalData.push(dataList);
      }
    } else {
      //dummy request para o spinner funcionar
      const res = await this.api.getConfig();
      console.log(res)
    }
    this.scattergl.updateScatterglData(selectedParam, added, finalData);
    this.spinner.hide();
  }

  onAreaSelected(indices: number[]) {
    if(indices.length > 0) {
        this.net.highlightHeatmatrix(indices);
    } else {
      this.net.removeHighlightHeatmatrix();
    }
  }

  onHighlightRemoved() {
    this.net.removeHighlightHeatmatrix();
  }
}
