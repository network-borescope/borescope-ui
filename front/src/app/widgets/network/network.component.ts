import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';
import { Network } from './network';
import { Timeseries } from './timeseries';

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
  // objeto do gráfico
  private netChart: any;
  private timeseriesChart: any;

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.netChart = new Network(this.netDiv.nativeElement);
    this.timeseriesChart = new Timeseries(this.timeseriesDiv.nativeElement);
  }

  drawChart(data: any, capitals: any, clicked: number = -1, invert: boolean = false) {
    const capitalId = clicked;
    this.netChart.setData(data, capitals, clicked >= 0, invert, capitalId);
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

  chartDisplay() {
    return (this.global.getGlobal("network_param").value > 0);
  }

  isCapitalSelected() {
    return (this.global.getGlobal("clicked_element").value > 0)
  }
}
