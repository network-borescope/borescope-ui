import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';

import { MapComponent } from 'src/app/widgets/map/map.component';
import { BarChartComponent } from 'src/app/widgets/bar-chart/bar-chart.component';
import { LineChartComponent } from 'src/app/widgets/line-chart/line-chart.component';
import { NetworkComponent } from 'src/app/widgets/network/network.component';
import { AlertsComponent } from '../widgets/alerts/alerts.component';
import { FiltersComponent } from 'src/app/widgets/filters/filters.component';
import { FunctionsChartComponent } from 'src/app/widgets/functions-chart/functions-chart.component';

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
  // referência para o componente das functions
  @ViewChild("appFunctionsChart", { static: true }) private func!: FunctionsChartComponent;

  public last: string = 'none';
  public moving: string = 'none';
  public t0: string = 'none';
  public t1: string = 'none';
  private timeBoundsRefreshFnc: any = undefined;
  private chartsElements: any = {paramId: [], cods: [], colors: [], names: [], from: []};

  constructor(public global: GlobalService, public api: ApiService, public util: UtilService, private spinner: NgxSpinnerService) {
    this.timeBoundsRefreshFnc = setInterval(async () => {
      await this.timeBoundsRefresh();
      await this.listIpsRefresh();
    }, 60 * 1000);
  }

  ngAfterViewInit(): void {
    this.initCharts();
  }

  ngOnInit(): void {
    const line_selected_params_value = this.global.getGlobal('line_selected_params_value');
    line_selected_params_value.value = 'avg_in';
    this.global.setGlobal(line_selected_params_value);
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
    this.setDates();

    // barchart e linechart do mapa
    this.updateLineChart('map', '#AAAAAA');
    this.updateBarChart('map', '#AAAAAA');

    // adiciona ao estado global
    this.addChartElementToGlobal('map', '#AAAAAA');

    // heat matrix
    this.updateHeatmatrix();

    //functions chart
    this.updateFunctionsChart();
  }

  setDates() {
    const date0 = new Date(this.global.getGlobal("t0_vis").value * 1000);
    const date1 = new Date(this.global.getGlobal("t1_vis").value * 1000);
    //@ts-ignore
    this.t0 = date0.toLocaleString('en-GB', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }).replace(', ', ' - ');
    //@ts-ignore
    this.t1 = date1.toLocaleString('en-GB', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }).replace(', ', ' - ');
  };

  /**
   * Redesenha todos os gráficos
   */
  redrawAllCharts() {
    this.updateHeatmap();

    //muda dado para o barchart 
    this.updateBarChart('map', '#AAAAAA');
    this.onLineSelectedChanged();
    this.onBarSelectedChanged();
    //muda filtros
    if(this.chartsElements.paramId.includes('filter')) {
      this.updateLineChart('filter', this.global.getGlobal('filter_color').value);
    }
    //muda clientes
    for(let i = 0; i < this.chartsElements.length; i++) {
      this.updateLineChart('client', this.chartsElements[i].color, this.chartsElements[i].cod, this.chartsElements[i].name);
    }
    this.setDates();

    this.net.onTimeBoundsChange();
    this.func.onTimeBoundsChange();
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
    this.onLineSelectedChanged();
    this.onBarSelectedChanged();

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
    this.line.lineGeometries.colors.push(color);
    this.line.lineGeometries.polys.push(poly);
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

    for(let i = 0; i < this.line.lineGeometries.colors.length; i++) {
      if(this.line.lineGeometries.colors[i] == color) {
        this.line.lineGeometries.colors.splice(i, 1);
        this.line.lineGeometries.polys.splice(i, 1);
      }
    }
    //remove geometrias das listas
    this.bar.removeGeometriesFromBar(color);
    // remove do estado global
    this.removeChartElementFromGlobal('geometry', color);
  }

  /**
   * Atualiza os gráficos após a seleção de um pin do mapa
   */
  onMarkerAdded(event: any) {
    const cod = event.cod;
    const color = event.color;
    const name = event.nome.replace(/_/g, ' ');
    this.chartsElements.cods.push(cod);
    this.chartsElements.colors.push(color);
    this.chartsElements.names.push(name);
    this.chartsElements.paramId.push('client')
    // barchart e linechart do marker
    this.updateLineChart('client', color, cod, name);
    this.bar.updateColor(color, cod, true);
    // adiciona ao estado global
    this.addChartElementToGlobal('client', color, cod);
  }

  /**
   * Atualiza os gráficos após a remoção de um pin do mapa
   */
  onMarkerRemoved(event: any) {
    const color = event.color;
    const cod = event.cod;
    const name = event.nome.replace(/_/g, ' ');

    this.chartsElements.colors = this.chartsElements.colors.filter((e:any) => e !== color);
    this.chartsElements.cods = this.chartsElements.cods.filter((e:any) => e !== cod);
    this.chartsElements.names = this.chartsElements.names.filter((e:any) => e !== name);
    for(let i = 0; i < this.chartsElements.colors; i++) {
      if(color == this.chartsElements.color[i]) this.chartsElements.paramId.splice(i, 1);
    }

    this.line.clearChart('viaipe', 'client', color);
    this.bar.updateColor(color, cod, false);

    // remove do estado global
    this.removeChartElementFromGlobal('client', color);
  }

  /**
   * Atualiza os gráficos após a criação de um filtro
   */
  onFiltersDefined(clientData: any) {
    this.map.drawFilterMarkers(clientData);

    for(let i = 0; i < clientData.length; i++) {
      this.bar.updateColor(this.global.getGlobal('filter_color').value, clientData[i].cod, true);
    }
    this.updateLineChart('filter', this.global.getGlobal('filter_color').value);
    // adiciona ao estado global
    this.addChartElementToGlobal('filter', this.global.getGlobal('filter_color').value, clientData);
  }

  /**
   * Atualiza os gráficos após a remoção de um filtro
   */
  onFiltersRemoved() {
    this.map.eraseFilterMarkers();

    this.line.clearChart('viaipe', 'filter', this.global.getGlobal('filter_color').value);
    this.bar.removeFilters();

    // remove do estado global
    this.removeChartElementFromGlobal('filter', this.global.getGlobal('filter_color').value);
  }

  /**
   * Atualiza o critério de groupby do barchart
   */
  onBarSelectedChanged() {
    this.bar.barChart.clear();
    for (let paramId of Object.keys(this.bar.rawData['viaipe'])) {
      if(paramId == 'map') this.updateBarChart(paramId, '#AAAAAA');
      else {
        for(let i = 0; i < this.chartsElements.cods.length; i++) {
          const color = this.chartsElements.colors[i];
          const cod = this.chartsElements.cods[i];
          const name = this.chartsElements.names[i];
          this.updateBarChart(paramId, color, cod, name);
        }
      }
    }      
  };

  /**
   * Atualiza o from de saída do linechart
   */
   onLineSelectedChanged() {
    this.line.rawData = {};
    this.line.lineChart.clear();
    this.updateLineChart('map', '#AAAAAA');
    for(let i = 0; i < this.chartsElements.cods.length; i++) {
      const color = this.chartsElements.colors[i];
      const cod = this.chartsElements.cods[i];
      const name = this.chartsElements.names[i];
      const paramId = this.chartsElements.paramId[i];
      this.updateLineChart(paramId, color, cod, name, 'data change');
    }
    for(let i = 0; i < this.line.lineGeometries.polys.length; i++) {
      const color = this.line.lineGeometries.colors[i];
      const poly = this.line.lineGeometries.polys[i];
      this.updateLineChart('geometry', color, poly);
    }
  }

  onFunctionsChartReset() {
    this.func.clearSeries();
    (document.getElementById('functions-chart-options') as HTMLInputElement).value = "cdf";
    (document.getElementById('functions-chart-select-value-options') as HTMLInputElement).value = "all"
    const functions_param = {
      key: "functions_param",
      value: "cdf"
    };
    this.global.setGlobal(functions_param);
    const functions_value = {
      key: "functions_value",
      value: 'all'
    };
    this.global.setGlobal(functions_value);
    this.func.functionsChart.setConfig(functions_param.value);
    this.func.setMultipleSelectConfiguration();
    this.func.setCombinedMultipleSelectConfiguration();
    this.updateFunctionsChart();
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
    this.map.removeCurrentHeatmapLayer();

    if(this.map.getZoom() > 12) {
      console.log(this.map.getZoom())
      const location = this.map.getLocation();
      const time = this.getTime();
      this.spinner.show();
      const res = await this.api.requestHeatMap(location, time);
      this.map.drawHeatMap(res);
      this.spinner.hide();
    }
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
    const selectedValue = this.global.getGlobal('bar_params_value').value;
    
    const zoom = this.map.getZoom();      
    const param = 'viaipe';
    const res = await this.api.requestBarChart(location, time, client, selectedValue, param, zoom);
    if(dataId !== 'geometry') {
      data['viaipe'] = res;
      const lmap = {'viaipe': {}};
  
      if(Object.keys(res.result).length) {
        this.bar.updateData(data, dataId, chartColor, lmap, zoom);
        this.bar.drawChart(param, name, zoom);
      }
    } else {
      if(res.result.length > 0) {
        let value = 0;
        for(let i = 0; i < res.result.length; i++) {
          value += res.result[i].v[0]
        };
        this.bar.addGeometryValue(value, chartColor);
      }
    }
  }

  async updateLineChart(dataId: string, chartColor: string, feat: any = undefined, name: any = undefined, from: any = undefined) {
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
    const selectedParam = this.global.getGlobal('line_selected_params_value').value;
    
    const param = 'viaipe'
    const res = await this.api.requestLineChart(location, time, client, selectedParam, param);
    console.log(res)
    data['viaipe'] = res;

    if(Object.keys(res.result).length) {
      this.line.updateData(data, dataId, chartColor);
      this.line.drawChart(param, selectedParam, name);
    }
  }

  async updateHeatmatrix() {
    let tsT0 = this.global.getGlobal("t0_vis").value;
    let tsT1 = this.global.getGlobal("t1_vis").value;
    console.log('alo')
    const selectedParam = parseInt(this.global.getGlobal('heatmatrix_param').value);
    const selectedValue = this.global.getGlobal('heatmatrix_value').value;
    const capitals = this.global.getGlobal('state_capitals').value.default;
    const clicked = this.global.getGlobal("clicked_element").value;

    const dataType = this.global.getGlobal("data_type").value;
    if(dataType == "popxpop") {
      const res = await this.api.requestHeatmatrix(selectedParam, selectedValue, tsT0, tsT1, clicked);
      const data = JSON.parse(res).result;
      
      this.net.drawChart(data, capitals, clicked, selectedParam != 77, dataType);
    } else {
      const services = this.global.getGlobal("services").value.default;
      const res = await this.api.requestHeatmatrix('rnp_services', 'havg', tsT0, tsT1, clicked);
      const data = JSON.parse(res).result;
      
      this.net.drawChart(data, capitals, clicked, selectedParam != 77, dataType, services);
    }

    this.net.removeHighlightHeatmatrix();
    this.net.highlightCompletedValues();
  }

  //atualiza quando selecionado agregado
  async updateFunctionsChart() {
    this.spinner.show();
    let tsT0 = this.global.getGlobal("t0_vis").value;
    let tsT1 = this.global.getGlobal("t1_vis").value;
    const selectedParam = this.global.getGlobal('functions_param').value;
    const clicked = this.global.getGlobal("clicked_element").value;
    const res = await this.api.requestFunctions(0, selectedParam,  tsT0, tsT1, clicked);
    let data;
    (clicked >= 0) ? data = res.result[`${clicked}`]['0'] : data = res.result['0']['0'];
    const adaptedData = this.adaptData(data, "functions");
    const selectedData:any = [[-1,[adaptedData]]];
    this.func.updateFunctionsChartData(selectedData, clicked);
    this.spinner.hide();
  }

  //atualiza quando selecionado um servico individualmente
  async updateFunctionsChartService(event: any) {
    this.spinner.show();
    let tsT0 = this.global.getGlobal("t0_vis").value;
    let tsT1 = this.global.getGlobal("t1_vis").value;
    const selectedParam = this.global.getGlobal('functions_param').value;
    const clicked = this.global.getGlobal("clicked_element").value;
    const selectedData:any = [];
    let lstmFlag = null;
    if(selectedParam !== 'timeseries') {
      for(let i = 0; i < event.length; i++) {
        const res = await this.api.requestFunctions(event[i], selectedParam,  tsT0, tsT1, clicked);
        let data;
        let id;
        event[i] == -1 ? id = 0 : id = event[i];
        (clicked >= 0) ? data = res.result[`${clicked}`][`${id}`] : data = res.result['0'][`${id}`];
        const adaptedData = this.adaptData(data, "functions");
        selectedData[i] = [event[i],[adaptedData]];
      }  
    } else {
      for(let i = 0; i < event.length; i++) {
        if(this.func.isPopSelected()) {
          const selectedValue = (document.getElementById('functions-chart-select-timeseries-popxpop-value-options') as HTMLInputElement).value;
          const res = await this.api.requestTimeseries(selectedValue, "h_avg", tsT0, tsT1, clicked, event[i]);
          const data = res.timeSeries.result;
          lstmFlag = res.lstm1h;
          const adaptedData = this.adaptData(data, "timeseries");
          selectedData[i] = [event[i],[adaptedData],lstmFlag];
        } else {
          const res = await this.api.requestTimeseries(10, "havg", tsT0, tsT1, clicked, event[i], "rnp_services");
          const data = res.result;
          const adaptedData = this.adaptData(data, "timeseries");
          selectedData[i] = [event[i],[adaptedData],lstmFlag];
        }
      }
    }
    this.func.updateFunctionsChartData(selectedData, clicked);
    this.spinner.hide();
  }

  //atualiza quando esta selecionada a opcao de n pops x n servicos
  async updateFunctionsCombinations(event: any) {
    //without zoom
    this.spinner.show();
    const tsT0 = this.global.getGlobal("t0_vis").value;
    const tsT1 = this.global.getGlobal("t1_vis").value;
    const selectedParam = this.global.getGlobal('functions_param').value;
    let lstmFlag = null;

    const selectedData:any = [];
    for(let i  = 0; i < event.length; i++) {
      let pop = event[i].codPop;
      let secondaryId = event[i].codService;
      let data;
      let res;
      if(selectedParam !== "timeseries") {
        res = await this.api.requestFunctions(secondaryId, selectedParam,  tsT0, tsT1, pop);
        if(pop >= 0 && secondaryId >= 0) {
          data = res.result[`${pop}`][`${secondaryId}`];
        } else if(pop == -1 && secondaryId >= 0) {
          data = res.result['0'][`${secondaryId}`];
        } else if(pop >= 0 && secondaryId == -1) {
          data = res.result[`${pop}`]['0'];
        } else {
          data = res.result['0']['0'];
        }
        const adaptedData = this.adaptData(data, "functions");
        selectedData[i] = [event[i],[adaptedData],lstmFlag];
      }
      else {
        let selectedValue;
        if(this.func.isPopSelected()) {
          selectedValue = (document.getElementById('functions-chart-select-timeseries-popxpop-value-options') as HTMLInputElement).value;
          res = await this.api.requestTimeseries(selectedValue, "h_avg", tsT0, tsT1, pop, secondaryId)
          data = res.timeSeries.result;
          lstmFlag = res.lstm1h;
        } else {
          selectedValue = 10;
          res = await this.api.requestTimeseries(selectedValue, "havg", tsT0, tsT1, pop, secondaryId, "rnp_services")
          data = res.result;
        }
        
        const adaptedData = this.adaptData(data, "timeseries", secondaryId);
        selectedData[i] = [event[i],[adaptedData],lstmFlag];
      }
    }

    this.func.updateFunctionsCombinationsData(selectedData);
    this.spinner.hide();
  }

  adaptData(data: any, from: string, secondParam: number = 0) {
    const adaptedValues: any[] = [];
    if(from == "functions") {
      for(let i = 0; i < data.length; i++) {
        adaptedValues.push({x: data[i][0], y: data[i][1], z: 0})
      }
    } else {
      for(let i = 0; i < data.length; i++) {
        let label = '';
        if( i % Math.floor(data.length / 7) == 0) {
          let date = new Date(data[i].k[0] * 1000);
          //@ts-ignore
          label = date.toLocaleString('en-GB', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }).split(', ')[0];
          adaptedValues.push({x: label, y: data[i].v[0], z: data[i].v[1]});
        }
      }
    }
    adaptedValues
    const totalData = [adaptedValues];
    return totalData;
  }

  async updateTable(event: any) {
    this.spinner.show();
    console.log(event)
    const tsT0 = this.global.getGlobal("t0_vis").value;
    const tsT1 = this.global.getGlobal("t1_vis").value;
    const option = this.global.getGlobal("table_option").value;
    const param = this.global.getGlobal("table_param").value;
    const model = this.global.getGlobal("table_model").value;
    let data;
    if(option == "all") {
      const res = await this.api.requestTable(param, model, tsT0, tsT1, -1, -1);
      data = JSON.parse(res).result;
    } else if(option == "1xn") {
      if(event.length !== 0) {
        const res = await this.api.requestTable(param, model, tsT0, tsT1, event[0], -1);
        data = JSON.parse(res).result;
      } 
    } else {
      if(event.length !== 0) {
        const res = await this.api.requestTable(param, model, tsT0, tsT1, event[0], event[1]);
        data = JSON.parse(res).result;
      } 
    }
    if (typeof data === 'string' || data instanceof String) {
      for(let i = 0; i < this.func.tableElements.length; i++) {
        this.func.tableElements[i].value = null;
      }  
    } else {
      for(let i = 0; i < this.func.tableElements.length; i++) {
        this.func.tableElements[i].value = parseFloat(data[i]).toFixed(3);
      }
    }
    this.spinner.hide();
  }

  onClientsSet(event: any) {
    if(event == 'add') {
      const clicked = this.global.getGlobal("clicked_element").value;
      const capitals = this.global.getGlobal('state_capitals').value.default;
      const capital = capitals.filter((c: any) => c.cod === clicked)[0].id;
      this.filters.setClients(capital);
    } else {
      this.resetChartElements();
    }
  }

  resetChartElements() {
    //reseta cores usadas
    const usedColors = this.global.getGlobal("used_draw_colors");
    const drawColorIndex = this.global.getGlobal("draw_color_index");
    usedColors.value = [];
    drawColorIndex.value = 0;
    this.global.setGlobal(usedColors);
    this.global.setGlobal(drawColorIndex);
    //remove clientes dos filtros
    this.filters.removeClients();
    //reseta dados linechart
    this.line.rawData = {};
    this.line.lineChart.clear();
    this.updateLineChart('map', '#AAAAAA');
    //reseta dados barchart
    this.bar.barChart.clear();
    this.updateBarChart('map', '#AAAAAA');
    this.bar.barChart.coloredCods = [];
    this.bar.barChart.usedColors = [];
    this.bar.barChart.colorList = [];
    this.chartsElements = {paramId: [], cods: [], colors: [], names: [], from: []};
  }

  isHeatmatrixSelected() {
    return this.global.getGlobal("network_param").value > 0;
  }
}
