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

  setChartsPosition() {
    const obj = this.global.getGlobal('widgets_charts').value;
    const barDiv = document.querySelectorAll<HTMLElement>(".bar-chart-window")[0];
    const lineDiv = document.querySelectorAll<HTMLElement>(".line-chart-window")[0];
    const netDiv = document.querySelectorAll<HTMLElement>(".network-window")[0];
  }

  setAlertColor() {
    const obj = this.global.getGlobal('widgets_charts');
    if(obj.value['hasAlert']) {
      return '#F51720';
    }
    else {
      if(obj.value['alerts']) return '#243d8f';
      else return '#000';
    } 
  }
  
  toggleConfigVisibility(configId: string) {
    const obj = this.global.getGlobal('widgets_config');

    obj.value[configId] = !obj.value[configId];
    this.global.setGlobal(obj);
  }

  isConfigVisible(configId: string): boolean {
    const obj = this.global.getGlobal('widgets_config');
    return obj.value[configId];
  }
}
