import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() filtersDefined = new EventEmitter();

  public clients = this.global.getGlobal('list_clientes').value;

  public dateRange: any = {start: null, end: null};
  public clientList = [];

  constructor(public global: GlobalService, public api: ApiService, public util: UtilService) {}

  ngOnInit(): void {}

  toggleFiltersVisibility() {
    const obj = this.global.getGlobal('config_widgets');

    obj.value['filters'] = !obj.value['filters'];
    this.global.setGlobal(obj);
  }

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

  saveDate() {
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
  }

  updateClientList(event: any) {
    this.clientList = event.target.value.split(',').filter( (d: string) => d.length > 0);
  }

  saveClientList() {
    if (this.clientList !== null) {
      let info = this.global.getGlobal('list_clientes');
      info.value = this.clientList;

      this.global.setGlobal(info);
    }
  }

  saveFilters() {
    this.saveClientList();
    this.saveDate();

    this.toggleFiltersVisibility();
    this.filtersDefined.emit();
  }


/**
 * Monta o trecho da query que define a bairro.
 */
//  function getBairro() {
//   let listBairro = getGlobal("list_bairro");
//   let list = [];
//   list.push("cliente");
//   list.push("eq");
//   getCbBairro().selected().forEach(function (value, index, array) {
//     let o = listBairro.value[value-1].item;
//     if (o.CODBAIRRO != undefined) list.push(parseInt(o.CODBAIRRO));
//   });
//   return list;
// }


}
