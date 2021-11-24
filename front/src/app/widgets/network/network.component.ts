import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { point } from 'leaflet';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';
import { Network } from './network';
import { Timeseries } from './network';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  // referência para o div do grafico
  @ViewChild("netChart", { static: true }) private netDiv!: ElementRef;
  @ViewChild("timeseriesChart", { static: true }) private timeseriesDiv!: ElementRef;

  @Output() heatMatrixValueChanged = new EventEmitter<number>();
  @Output() heatMatrixParamChanged = new EventEmitter<number>();
  @Output() onCapitalSelected = new EventEmitter<any>();
  // objeto do gráfico
  private netChart: any;
  private timeseriesChart: any;
  //capitals select list
  private selectedCapitals: any = [];
  //multiselect
  public dropdownList: any = [];
  public dropdownSettings: any = {};


  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.netChart = new Network(this.netDiv.nativeElement);
    this.timeseriesChart = new Timeseries(this.timeseriesDiv.nativeElement);
    //setando as configuracoes do multiselect
    const capitals = this.global.getGlobal("state_capitals").value.default;
    for(let i = 0; i < capitals.length; i++) {
      let id = capitals[i].id.toUpperCase();
      let cod = capitals[i].cod;
      let obj:any = {};
      obj['estado'] = id;
      obj['cod'] = cod;
      this.dropdownList.push(obj);
    };
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'cod',
      textField: 'estado',
      enableCheckAll: false,
      unSelectAll: false,
      itemsShowLimit: 0,
      allowSearchFilter: false
    };
  }

  drawChart(data: any, capitals: any, clicked: number = -1, invert: boolean = false) {
    const capitalId = clicked;
    this.netChart.setData(data, capitals, clicked >= 0, invert, capitalId);
    this.netChart.render();
    this.timeseriesChart.setCapitals(capitals);
  }

  updateTimeseriesData(data: any, dates: any, capitals: any, clicked: number) {
    this.timeseriesChart.clear();
    this.timeseriesChart.updateData(data);
    this.timeseriesChart.setLabels(dates);
    this.timeseriesChart.setTitle(clicked);
    this.timeseriesChart.render();
  }

  onValueChange(event: any) {
    const heatmatrix_value = {
      key: "heatmatrix_value",
      value: event.target.value
    };
    this.global.setGlobal(heatmatrix_value);
    this.heatMatrixValueChanged.emit();
    this.onCapitalSelected.emit(this.selectedCapitals);
  }

  onParamChange(event: any) {
    const heatmatrix_param = {
      key: "heatmatrix_param",
      value: event.target.value
    };
    this.global.setGlobal(heatmatrix_param);
    this.heatMatrixParamChanged.emit();
    this.onCapitalSelected.emit(this.selectedCapitals);
  }

  onChartChange(event: any) {
    if(event.target.value == 'heatmatrix') {
      const network_param = {
        key: "network_param",
        value: 1
      };
      this.global.setGlobal(network_param);
    } else {
      const network_param = {
        key: "network_param",
        value: 0
      };
      this.global.setGlobal(network_param);  
    }
  }

  isTimeseriesSelected() {
    const network_param = this.global.getGlobal("network_param");
    return network_param.value !== 0;
  }

  onCapitalSelect(event: any) {
    if(this.selectedCapitals.includes(event.cod)) {
      this.selectedCapitals = this.selectedCapitals.filter((e:any) => e !== event.cod);
    } else {
      this.selectedCapitals.push(event.cod);
    };
    this.onCapitalSelected.emit(this.selectedCapitals);
  }

  chartDisplay() {
    return (this.global.getGlobal("network_param").value > 0);
  }

  isCapitalSelected() {
    return (this.global.getGlobal("clicked_element").value > 0)
  }
}
