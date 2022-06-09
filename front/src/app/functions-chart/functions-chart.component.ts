import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-functions-chart',
  templateUrl: './functions-chart.component.html',
  styleUrls: ['./functions-chart.component.css']
})
export class FunctionsChartComponent implements OnInit {
  // referência para o div do grafico
  @ViewChild("functionsChart", { static: true }) private functionsDiv!: ElementRef;

  @Output() functionsParamChanged = new EventEmitter<number>();
  @Output() functionsValueChanged = new EventEmitter<number>();
  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
  }


  onParamChange(event: any) {
    const functions_param = {
      key: "functions_param",
      value: event.target.value
    };
    
    this.global.setGlobal(functions_param);
    this.functionsParamChanged.emit();
  }

  onValueChange(event: any) {
    const functions_value = {
      key: "functions_value",
      value: event.target.value
    };
    this.global.setGlobal(functions_value);
    this.functionsValueChanged.emit();
  }

  isCapitalSelected() {
    return (this.global.getGlobal("clicked_element").value > 0)
  }
}
