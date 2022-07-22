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
  @Output() onItemSelected = new EventEmitter<any>();
  // objeto do gráfico
  private netChart: any;
  private timeseriesChart: any;
  //capitals select list
  private selectedItems: any = [];
  public selectedItemsRoot: any = [];
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
  public multiSelectPlaceholder = 'Estados';

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.netChart = new Network(this.netDiv.nativeElement);
    this.setMultipleSelectConfiguration('popxpop');
  }

  drawChart(data: any, capitals: any, clicked: number = -1, invert: boolean = false, dataType: string, services: any = null) {
    const capitalId = clicked;
    this.netChart.setData(data, capitals, clicked >= 0, invert, capitalId, services);
    this.netChart.render();
  }

  updateTimeseriesData(data: any, dates: any, clicked: number) {
    for(let i = 0; i < data.length; i++) {
       this.updateUsedColors(true,this.drawColors[i]);
    }
    this.timeseriesChart.clear();
    let type;
    this.isPopSelected() ? type = 'Pop de chegada' : type = 'Serviço';
    this.timeseriesChart.updateData(data, this.drawColors, type);
    this.timeseriesChart.setLabels(dates, type);
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
  }

  onParamChange(event: any) {
    const heatmatrix_param = {
      key: "heatmatrix_param",
      value: event.target.value
    };
    this.global.setGlobal(heatmatrix_param);
    this.heatMatrixParamChanged.emit();
  }

  onChartDataTypeChange(event: any) {
    const data_type = {
      key: "data_type",
      value: event.target.value
    };
    this.global.setGlobal(data_type);
    this.setMultipleSelectConfiguration(event.target.value);
    this.heatMatrixValueChanged.emit();
  }

  onTimeBoundsChange() {
    this.heatMatrixValueChanged.emit();
  }

  setMultipleSelectConfiguration(type: string) {
    //multiselect
    this.dropdownList = [];
    this.dropdownSettings = {};
    //setando as configuracoes do multiselect
    if(type == 'popxpop') {
      const capitals = this.global.getGlobal("state_capitals").value.default;
      this.multiSelectPlaceholder = 'Estados';
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
    } else {
      const services = this.global.getGlobal("services").value.default;
      this.multiSelectPlaceholder = 'Serviços';
      for(let i = 0; i < services.length; i++) {
        let id = services[i].id.toUpperCase();
        let cod = services[i].cod;
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
  }

  networkToggle() {
    this.networkChange = !this.networkChange;
  }

  onItemSelect(event: any, added: boolean) {
    if(this.selectedItems.includes(event.cod)) {
      const index = this.selectedItems.indexOf(event.cod);
      this.selectedItems = this.selectedItems.filter((e:any) => e !== event.cod);
      this.updateUsedColors(false, this.usedColors[index]);
    } else {
      this.selectedItems.push(event.cod);
    };
    this.onItemSelected.emit(this.selectedItems);
  }
  
  isCapitalSelected() {
    return (this.global.getGlobal("clicked_element").value > 0)
  }

  isPopSelected() {
    return (this.global.getGlobal("data_type").value == 'popxpop')
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

  highlightHeatmatrix(indices: number[]) {
    this.netChart.highlightRectangle(indices);
  }
  
  removeHighlightHeatmatrix() {
    this.netChart.removeRectangleHighlight();
  }
}
