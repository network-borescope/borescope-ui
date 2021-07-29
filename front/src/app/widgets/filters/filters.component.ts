import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() filtersDefined = new EventEmitter<any>();
  @Output() filtersRemoved = new EventEmitter();

  @ViewChild("clientsInput", { static: true }) private clientsInput!: ElementRef;

  public clients: any = [];
  public clientsSelection = [];

  public dateRange: any = {start: null, end: null};

  constructor(public global: GlobalService, public api: ApiService, public util: UtilService) {}

  ngOnInit(): void {
    this.clients = this.global.getGlobal('list_clientes').value;
  }

  toggleFiltersVisibility() {
    const obj = this.global.getGlobal('widgets_config');

    obj.value['filters'] = !obj.value['filters'];
    this.global.setGlobal(obj);
  }

  getClients() {
    let list = [];
    list.push("cliente");
    list.push("eq");

    this.clientsSelection.forEach((client: any) => {
      let found = this.clients.items.find((c: any) => c.caption === client);
      if (found) {
        list.push(parseInt(found.cod))
      }
    });

    return list;
  }

  updateClientSelection(event: any) {
    this.clientsSelection = event.target.value.split(',').filter( (d: string) => d.length > 0 );
  }

  getStartDate() {
    let tsT0 = this.global.getGlobal("t0_filter");

    let start = new Date(tsT0.value * 1000);
    return  start.toISOString().slice(0,-8).replace('T', ' # ');
  }

  getEndDate() {
    let tsT1 = this.global.getGlobal("t1_filter");

    let end = new Date(tsT1.value * 1000);
    return end.toISOString().slice(0,-8).replace('T', ' # ');
  }

  updateDate(dateId: string, event: any) {
    this.dateRange[dateId] = event.target.value;
  }

  saveDate() {
    let tsT0 = this.global.getGlobal("t0_filter");
    let tsT1 = this.global.getGlobal("t1_filter");

    if (this.dateRange['start']) {
      const parts = this.dateRange['start'].split(' # ');

      let start = new Date(`${parts[0]}T${parts[1]}:00Z`).getTime() / 1000;

      if(start > tsT1.value) {
        console.log('Invalid Filter Date: end < start.')
        return
      }

      tsT0.value = start;
      this.global.setGlobal(tsT0);
    }

    if (this.dateRange['end']) {
      const parts = this.dateRange['end'].split(' # ');
      let end = new Date(`${parts[0]}T${parts[1]}:00Z`).getTime() / 1000;

      if(end < tsT0.value) {
        console.log('Invalid Filter Date: end < start.')
        return
      }

      tsT1.value = end;
      this.global.setGlobal(tsT1);
    }
  }

  saveFilters() {
    if(!this.clientsSelection.length) {
      console.log('Invalid Filter: empity client list.')
      return;
    }

    const clientsList = this.clients.items;
    const selectedClients = this.clientsSelection;

    const clientsData = [];
    for(let i = 0; i < selectedClients.length; i++) {
      let client = clientsList.find((x: any) => x.caption === selectedClients[i]);
      clientsData.push(client)
    };

    this.saveDate();
    this.toggleFiltersVisibility();
    this.filtersDefined.emit(clientsData);
  }

  removeFilters() {
    let t0 = this.global.getGlobal("t0_filter");
    let start = new Date(t0.value * 1000);
    this.dateRange['start'] = start.toISOString().slice(0,-8).replace('T', ' # ');

    let t1 = this.global.getGlobal("t1_filter");
    let end = new Date(t1.value * 1000);
    this.dateRange['end'] = end.toISOString().slice(0,-8).replace('T', ' # ');

    this.clientsSelection = [];
    this.clientsInput.nativeElement.value = '';

    this.saveDate();
    this.toggleFiltersVisibility();
    this.filtersRemoved.emit();
  }
}
