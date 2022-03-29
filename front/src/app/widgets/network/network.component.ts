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
  //lista de cores
  private drawColors: any = [
    '#1F77B4', '#2CA02C', '#9467BD', '#8C564B', '#E377C2',
    '#AEC7E8', '#98DF8A', '#C5B0D5', '#C49C94', '#F7B6D2'
  ];
  //guarda se o chart a ser mostrado é o network ou umap
  public networkChange: boolean = false;
  //lista de cores já usadas
  private usedColors: any = [];
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
      limitSelection: 10,
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
    for(let i = 0; i < data.length; i++) {
       this.updateUsedColors(true,this.drawColors[i]);
    }

    this.timeseriesChart.clear();
    this.timeseriesChart.updateData(data, this.drawColors);
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
    if(!this.isTimeseriesSelected()) { 
      this.onCapitalSelected.emit(this.selectedCapitals);
    }
  }

  onParamChange(event: any) {
    const heatmatrix_param = {
      key: "heatmatrix_param",
      value: event.target.value
    };
    this.global.setGlobal(heatmatrix_param);
    this.heatMatrixParamChanged.emit();
    if(!this.isTimeseriesSelected()) { 
      this.onCapitalSelected.emit(this.selectedCapitals);
    }
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

  networkToggle() {
    this.networkChange = !this.networkChange;
  }

  isTimeseriesSelected() {
    const network_param = this.global.getGlobal("network_param");
    return network_param.value !== 0;
  }


  onCapitalSelect(event: any, added: boolean) {
    if(this.selectedCapitals.includes(event.cod)) {
      const index = this.selectedCapitals.indexOf(event.cod);
      this.selectedCapitals = this.selectedCapitals.filter((e:any) => e !== event.cod);
      this.updateUsedColors(false, this.usedColors[index]);
    } else {
      this.selectedCapitals.push(event.cod);
    };
    this.onCapitalSelected.emit(this.selectedCapitals);
  }

  chartDisplay() {
    const network_param = this.global.getGlobal("network_param").value;
    //verdadeiro para heatmatrix
    if(network_param == 1) return [true,false];
    //verdadeiro para time series
    else return [false,true];
  }

  isCapitalSelected() {
    return (this.global.getGlobal("clicked_element").value > 0)
  }
  
  clearTimeseries() {
    this.selectedCapitals = [];
    this.timeseriesChart.clear();
  }

  /**
 * seta as cores já utilizadas
 */
  updateUsedColors(added: boolean, color: string) {
    if (added) {
      if(!this.usedColors.includes(color)) this.usedColors.push(color);
    }
    else {
      this.usedColors = this.usedColors.filter( (d: string) => d !== color );
    }
  }
}
