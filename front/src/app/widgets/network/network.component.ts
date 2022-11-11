import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { point } from 'leaflet';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';
import { Network } from './network';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  // referência para o div do grafico
  @ViewChild("netChart", { static: true }) private netDiv!: ElementRef;

  @Output() heatMatrixValueChanged = new EventEmitter<number>();
  @Output() heatMatrixParamChanged = new EventEmitter<number>();
  // objeto do gráfico
  private netChart: any;
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
    console.log(data)
    const capitalId = clicked;
    this.netChart.setData(data, capitals, clicked >= 0, invert, capitalId, services);
    this.netChart.render();
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

  highlightCompletedValues() {
    this.netChart.highlightCompletedRectangles();
  }
  
  removeHighlightHeatmatrix() {
    this.netChart.removeRectangleHighlight();
  }

  flagColor() {
    const flag = this.global.getGlobal("flag_timeseries").value;
    let color: string;
    (flag > 0) ? color = '#4AB70F' : color = '#FF0000';
    return color;
  }

  flag() {
    return this.global.getGlobal("flag_timeseries").value > 0;
  }
}
