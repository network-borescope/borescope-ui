import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Chart, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
    
  // Quando eu tiro a "!" da
  @ViewChild('lineChart', { static: false } ) lineElement!: ElementRef;
  //@ViewChild("lineChart", { static: true }) private lineElement?: ElementRef;
    

  ngOnInit(): void {
    this.lineChartMethod();
  }
  

  lineChartMethod(){

    //console.log()
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

    new Chart(this.lineElement.nativeElement, {
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
