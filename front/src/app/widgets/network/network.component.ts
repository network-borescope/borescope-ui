import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  // referência para o div do grafico
  @ViewChild("netChart", { static: true }) private netDiv!: ElementRef;

  private netChart: any;

  constructor(public global: GlobalService, public util: UtilService) { }

  ngOnInit(): void {
  }

}
