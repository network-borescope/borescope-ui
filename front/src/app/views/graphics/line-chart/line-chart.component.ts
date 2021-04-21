import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild("lineChart", { static: true }) private lineDiv?: ElementRef;

  ngOnInit(): void {
    this.lineChartMethod();
  }

  lineChartMethod(){
    if (this.lineDiv === undefined) {
      return;
    }

    Chart.register(PointElement, LineElement, LineController, CategoryScale, LinearScale);

    new Chart(this.lineDiv.nativeElement, {
      type: 'line',
      data: {
        labels: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        datasets: [
          {
            data: [85,72,86,81,84,86,94,60,62,65,41,58],
            borderColor: '#00AEFF',
            fill: false
          },
          {
            data: [33,38,10,93,68,50,35,29,34,2,62,4],
            borderColor: "#FFCC00",
            fill: false
          }
        ]
      },
      // options: {
      //   legend:{
      //     display: false;
      //   }
      // }
    });
  }
}
