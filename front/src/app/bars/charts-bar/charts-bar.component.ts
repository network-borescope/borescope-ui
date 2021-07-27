import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-charts-bar',
  templateUrl: './charts-bar.component.html',
  styleUrls: ['./charts-bar.component.css']
})
export class ChartsBarComponent implements OnInit {

  constructor(public global: GlobalService) {}

  ngOnInit(): void {}

  toggleChartVisibility(chartId: string) {
    const obj = this.global.getGlobal('widgets_charts');

    obj.value[chartId] = !obj.value[chartId];
    this.global.setGlobal(obj);
  }

  isChartVisible(chartId: string): boolean {
    const obj = this.global.getGlobal('widgets_charts');
    return obj.value[chartId];
  }
}
