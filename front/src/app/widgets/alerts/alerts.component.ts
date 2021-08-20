import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  public ipsList: string[] = [];

  constructor(public global: GlobalService, public api: ApiService, public util: UtilService) { }

  ngOnInit(): void {
    const ips = this.global.getGlobal('list_ips');
    const t0_vis = this.global.getGlobal('t0_vis').value * 1000;
    const t1_vis = this.global.getGlobal('t1_vis').value * 1000; 
    for(let i = 0; i < ips.value.length; i++) {
      let t0_ip = new Date(ips.value[i][1]).getTime();
      let t1_ip = new Date(ips.value[i][2]).getTime();
      if(t0_ip >= t0_vis && t1_ip <= t1_vis) this.ipsList.push(ips.value[i])
    };
  }

  toggleFiltersVisibility() {
    const obj = this.global.getGlobal('widgets_charts');

    obj.value['alerts'] = !obj.value['alerts'];
    this.global.setGlobal(obj);
  }
}
