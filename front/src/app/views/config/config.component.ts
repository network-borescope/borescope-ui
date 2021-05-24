import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { GlobalService } from 'src/app/shared/global.service';
import { UtilService } from 'src/app/shared/util.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(public global: GlobalService, public api: ApiService, public util: UtilService) { }

  ngOnInit(): void {
  }

  getTime() {
    let tsT0 = this.global.getGlobal("ts_t0");
    let tsT1 = this.global.getGlobal("ts_t1");
    let list = [];
    list.push("time");
    list.push("between");

    // begin Nilson
    let date
    // fazer o ajuste apropriado posteriormente
    // TODO: Fix timezone
    const tz = -10800

    let start = new Date(tsT0.value * 1000);

    // Arthur 09/03/2021
    let window_size = this.global.getGlobal("window_size");
    if (window_size.value != undefined) {
      start = this.util.secondsToDate(tsT1.value - window_size.value);
    }


    date = new Date(start.getFullYear(), start.getMonth(), start.getDate(), start.getHours(), start.getMinutes());
    let t0 = date.getTime()/1000 + tz;

    let end = new Date(tsT1.value * 1000);
    date = new Date(end.getFullYear(), end.getMonth(), end.getDate(), end.getHours(), end.getMinutes());
    // let t1 = date.getTime()/1000 + tz;
    let t1 = t0 + 24 * 60 * 60

    list.push(t0);
    list.push(t1);

    return list;
  }

}
