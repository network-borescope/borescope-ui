import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrls: ['./time-bar.component.css']
})
export class TimeBarComponent implements OnInit {
    @Output() chartTimeChanged = new EventEmitter<number>();

    constructor(public global: GlobalService) {}

    ngOnInit(): void {
    }

    onClickTime(delta: number) {
        this.chartTimeChanged.emit(delta);
    }

    refreshAvailable() {
        const bnds = this.global.getGlobal("bounds_time");
    
        const tsT0 = this.global.getGlobal("t0_vis");
        const tsT1 = this.global.getGlobal("t1_vis");
    
        return bnds.value[0] !== tsT0.value || bnds.value[1] !== tsT1.value;
      }
}
