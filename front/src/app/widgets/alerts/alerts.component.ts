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
    this.ipsList = ips.value;

  }

  toggleFiltersVisibility() {
    const obj = this.global.getGlobal('widgets_charts');

    obj.value['alerts'] = !obj.value['alerts'];
    this.global.setGlobal(obj);
  }
}
