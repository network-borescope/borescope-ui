import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.netChart = new Network(this.netDiv.nativeElement);
  }

  drawChart(data: any, capitals: any) {
    this.netChart.setData(data, capitals);
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
}
 