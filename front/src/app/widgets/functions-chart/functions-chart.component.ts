import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { thresholdFreedmanDiaconis } from 'd3';

import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';
import { Functionschart } from './functions-chart';

@Component({
  selector: 'app-functions-chart',
  templateUrl: './functions-chart.component.html',
  styleUrls: ['./functions-chart.component.css']
})
export class FunctionsChartComponent implements OnInit {
  // referência para o div do grafico
  @ViewChild("functionsChart", { static: true }) private functionsDiv!: ElementRef;

  @Output() functionsParamChanged = new EventEmitter<any>();
  @Output() functionsValueChanged = new EventEmitter<any>();
  @Output() onItemSelected = new EventEmitter<any>();
  @Output() onCombinedChange = new EventEmitter<any>();

  constructor(public global: GlobalService, public util: UtilService) { }

  private selectedServices: any[] = [];
  // objeto do gráfico
  private functionsChart: any;
  //capitals select list
  private selectedItems: any = [];
  public selectedItemsRoot: any = [];
  private combinedSelection: any = {
    pops: [],
    services: []
  }
  private selectionLimit: number = 10;
  //lista de cores
  private drawColors: any = [
    '#1F77B4', '#2CA02C', '#9467BD', '#8C564B', '#E377C2',
    '#AEC7E8', '#98DF8A', '#C5B0D5', '#C49C94', '#F7B6D2'
  ];
  //lista de cores já usadas
  private usedColors: any = [];
  //multiselect
  //configuração do multiselect para os servicos
  public dropdownListServices: any = [];
  public dropdownSettingsServices: any = {};
  public multiSelectServicesPlaceholder = 'Estados';
  //configuração do multiselect para os pops
  public dropdownListPops: any = [];
  public dropdownSettingsPops: any = {};
  public multiSelectPopsPlaceholder = 'Estados';
  //configuração do multiselect para as combinacoes de servicos + pops adicionados ao grafico
  public dropdownListCombined: any = [];
  public dropdownSettingsCombined: any = {};
  public multiSelectCombinedPlaceholder = 'Select';
  public hasData = false;
  private combinedData: any = [];
  public combinedSelections: any = [];


  ngOnInit(): void {
    this.functionsChart = new Functionschart(this.functionsDiv.nativeElement);
    this.setMultipleSelectConfiguration();
    this.functionsChart.setCapitals(this.global.getGlobal('state_capitals').value.default);
    this.functionsChart.setServices(this.global.getGlobal("services").value.default);
  }

  updateFunctionsChartData(data: any, clicked: number) {
    for(let i = 0; i < data.length; i++) {
       this.updateUsedColors(true,this.drawColors[i]);
    }
    const selectedParam = this.global.getGlobal('functions_param').value;
    this.functionsChart.clear();
    this.functionsChart.updateData(data, this.drawColors, selectedParam);
    this.functionsChart.setTitle(selectedParam, clicked);
    this.functionsChart.render();
  }

  updateFunctionsCombinationsData(data: any) {
    const selectedParam = this.global.getGlobal('functions_param').value;
    this.functionsChart.clear();
    this.functionsChart.updateCombinations(data);
    this.functionsChart.setTitle(selectedParam, -1);
    this.functionsChart.render();
  }

  onParamChange(event: any) {
    const functions_param = {
      key: "functions_param",
      value: event.target.value
    };
    this.functionsChart.clear();
    this.global.setGlobal(functions_param);
    if(this.shouldShowServices()) {
      this.onItemSelected.emit(this.selectedItems)
    } else if(!this.shouldShowServices() && this.hasData) {
      this.onCombinedChange.emit(this.combinedData);
    } else {
      this.functionsValueChanged.emit();
    }
  }

  onValueChange(event: any) {
    const functions_value = {
      key: "functions_value",
      value: event.target.value,
    };

    this.clearSeries();
    this.global.setGlobal(functions_value);
    this.shouldShowMultiSelectors() || this.isTimeSeriesSelected() ? this.selectionLimit = 30 : this.selectionLimit = 10;
    this.setMultipleSelectConfiguration();

    //cleaning combined selections
    this.hasData = false; 
    this.combinedData = [];
    this.combinedSelection = {pops:[], services:[]};
    this.combinedSelections = [];
    this.setCombinedMultipleSelectConfiguration();

    if(!this.shouldShowServices() && !this.shouldShowMultiSelectors()) {
      this.functionsValueChanged.emit();
    }
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

  onCombinedSelect(event: any, from: string, added: boolean) {
    if(from == 'pop') {
      if (added) {
        this.combinedSelection.pops.push(event.cod);
      } else {
        const index = this.combinedSelection.pops.indexOf(event.cod);
        this.combinedSelection.pops.splice(index, 1);
      }  
    } else {
      if (added) {
        this.combinedSelection.services.push(event.cod);
      } else {
        const index = this.combinedSelection.services.indexOf(event.cod);
        this.combinedSelection.services.splice(index, 1);
      }  
    }
  }

  addDataCombinations() {
    if(this.combinedSelection.pops.length > 0 && this.combinedSelection.services.length > 0) {
      const services = this.global.getGlobal("services").value.default;
      const capitals = this.global.getGlobal("state_capitals").value.default;
      this.combinedData = [];

      for(let i = 0; i < this.combinedSelection.pops.length; i++) {
        for(let j = 0; j < this.combinedSelection.services.length; j++) {
          const obj = {idPop: (this.combinedSelection.pops[i] >= 0) ? this.functionsChart.getId(this.combinedSelection.pops[i], 'pop') : 'TODOS POPS',
                                  codPop: this.combinedSelection.pops[i],
                                  idService: (this.combinedSelection.services[j] >= 0) ? this.functionsChart.getId(this.combinedSelection.services[j], 'service') : 'TODOS SERVIÇOS',
                                  codService: this.combinedSelection.services[j]}
          this.combinedData.push(obj);
        }
      }
      this.setCombinedMultipleSelectConfiguration();
      this.hasData = true;
      this.functionsChart.clear();
      this.onCombinedChange.emit(this.combinedData);
    }
    
  }

  removeDataCombinations() {
    if(this.combinedSelections.length > 0) {
      for(let i = 0; i < this.combinedSelections.length; i++) {
        for(let  j = 0; j < this.combinedData.length; j++) {
          if(this.combinedSelections[i].cods[0] ==  this.combinedData[j].codPop && this.combinedSelections[i].cods[1] ==  this.combinedData[j].codService) {
            this.combinedData.splice(j, 1);
          }
        }
      }
      this.functionsChart.clear();
      if(this.combinedData.length == 0) { 
        this.hasData = false;
      } else {
        this.onCombinedChange.emit(this.combinedData);
      }
      this.combinedSelections = [];
      this.setCombinedMultipleSelectConfiguration();
    }
  }

  onTimeBoundsChange() {
    if(this.shouldShowServices()) {
      this.onItemSelected.emit(this.selectedItems)
    } else if(!this.shouldShowServices() && this.hasData) {
      this.onCombinedChange.emit(this.combinedData);
    } else {
      this.functionsValueChanged.emit();
    }
  }
  
  setMultipleSelectConfiguration() {
    //multiselect
    this.dropdownListServices = [];
    this.dropdownSettingsServices = {};
    //setando as configuracoes do multiselect p servicos
    const services = this.global.getGlobal("services").value.default;
    this.multiSelectServicesPlaceholder = 'Serviços';
    this.dropdownListServices.push({estado:'TODOS SERVIÇOS', cod:-1})
    for(let i = 0; i < services.length; i++) {
      let id = services[i].id.toUpperCase();
      let cod = services[i].cod;
      let obj:any = {};
      obj['estado'] = id;
      obj['cod'] = cod;
      this.dropdownListServices.push(obj);
    };  
    this.dropdownSettingsServices = {
      singleSelection: false,
      limitSelection: this.selectionLimit,
      idField: 'cod',
      textField: 'estado',
      enableCheckAll: false,
      unSelectAll: false,
      itemsShowLimit: 0,
      allowSearchFilter: false
    };
    //setando as configuracoes do multiselect p servicos
    const capitals = this.global.getGlobal("state_capitals").value.default;
    this.multiSelectPopsPlaceholder = 'Estados';
    this.dropdownListPops.push({estado:'TODOS POPS', cod:-1})
    for(let i = 0; i < capitals.length; i++) {
      let id = capitals[i].id.toUpperCase();
      let cod = capitals[i].cod;
      let obj:any = {};
      obj['estado'] = id;
      obj['cod'] = cod;
      this.dropdownListPops.push(obj);
    };
    this.dropdownSettingsPops = {
      singleSelection: false,
      limitSelection: this.selectionLimit,
      idField: 'cod',
      textField: 'estado',
      enableCheckAll: false,
      unSelectAll: false,
      itemsShowLimit: 0,
      allowSearchFilter: false
    };    
  }

  setCombinedMultipleSelectConfiguration() {
    this.dropdownListCombined = [];
    this.dropdownSettingsCombined =  {};
    this.multiSelectCombinedPlaceholder = 'Select';
    for(let i = 0; i < this.combinedData.length; i++) {
      let id = this.combinedData[i].idPop.toUpperCase() + ' - '  + this.combinedData[i].idService.toUpperCase();
      let cod = [this.combinedData[i].codPop, this.combinedData[i].codService];
      let obj:any = {};
      obj['estado+pop'] = id;
      obj['cods'] = cod;
      this.dropdownListCombined.push(obj);
    }
    this.dropdownSettingsCombined = {
      singleSelection: false,
      idField: 'cods',
      textField: 'estado+pop',
      enableCheckAll: true,
      itemsShowLimit: 0,
      allowSearchFilter: false
    }; 
  }
    
  isCapitalSelected() {
    return (this.global.getGlobal("clicked_element").value > 0)
  }

  isTimeSeriesSelected() {
    return (this.global.getGlobal('functions_param').value == 'timeseries');
  }

  clear() {
    this.functionsChart.clear();
  }

  clearSeries() {
    this.selectedItems = [];
    this.selectedItemsRoot = [];
    this.functionsChart.clear();
    this.combinedSelection = {
      pops: [],
      services: []
    }
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

  shouldShowServices() {
    const dataType = (document.getElementById('functions-chart-select-value-options') as HTMLInputElement).value;
    if(dataType == "single" || dataType == "allpops") return true;
    else return false;
  }

  shouldShowMultiSelectors() {
    const dataType = (document.getElementById('functions-chart-select-value-options') as HTMLInputElement).value;
    if(dataType == 'nxn' || dataType == 'timeseries') return true;
    else return false
  }
}
