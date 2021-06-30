import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  protected dateRange: any = {start: null, end: null};
  public clients = this.global.getGlobal('list_clientes').value;

  constructor(public global: GlobalService, public api: ApiService, public util: UtilService) {}

  ngOnInit(): void {}

  getTime() {
    let tsT0 = this.global.getGlobal("ts_t0");
    let tsT1 = this.global.getGlobal("ts_t1");
    let list = [];
    list.push("time");
    list.push("between");

    let start = new Date(tsT0.value * 1000);
    let t0 = start.getTime() / 1000;

    let end = new Date(tsT1.value * 1000);
    let t1 = end.getTime() / 1000;

    list.push(t0);
    list.push(t1);

    return list;
  }

  getStartDate() {
    let tsT0 = this.global.getGlobal("ts_t0");

    let start = new Date(tsT0.value * 1000);
    return start.toISOString().split('T')[0];
  }

  getEndDate() {
    let tsT1 = this.global.getGlobal("ts_t1");

    let end = new Date(tsT1.value * 1000);
    return end.toISOString().split('T')[0];
  }

  updateDate(dateId: string, event: any) {
    this.dateRange[dateId] = event.target.value;
  }

  toggleFiltersVisibility() {
    const obj = this.global.getGlobal('config_widgets');

    obj.value['filters'] = !obj.value['filters'];
    this.global.setGlobal(obj);
  }

  saveFilters() {
    if (this.dateRange['start']) {
      let start = new Date(this.dateRange['start']).getTime() / 1000;

      let tsT0 = this.global.getGlobal("ts_t0");
      tsT0.value = start;
      this.global.setGlobal(tsT0);
    }

    if (this.dateRange['end']) {
      let end = new Date(this.dateRange['end']).getTime() / 1000;

      let tsT1 = this.global.getGlobal("ts_t1");
      tsT1.value = end;
      this.global.setGlobal(tsT1);
    }

    this.toggleFiltersVisibility();
  }

}
