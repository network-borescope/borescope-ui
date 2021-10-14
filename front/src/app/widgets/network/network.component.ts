import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  // objeto do gráfico
  private netChart: any;

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
    this.netChart = new Network(this.netDiv.nativeElement);
    this.netChart.setData([]);
    this.netChart.render();
  }

}
