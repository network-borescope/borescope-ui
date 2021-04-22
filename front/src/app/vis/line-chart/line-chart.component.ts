import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement, Title } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild("lineChart", { static: true }) private lineDiv?: ElementRef;
  chart: any;

  ngOnInit(): void {
    this.lineChartMethod();
  }

  lineChartMethod(){
    if (this.lineDiv === undefined) {
      return;
    }

    Chart.register(PointElement, LineElement, LineController, CategoryScale, LinearScale, Title);

    this.chart = new Chart(this.lineDiv.nativeElement, {
      type: 'line',
      data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        datasets: [{
          label: '$ em Vendas',
          data: [10, 9, 12, 19, 21, 7],
          borderColor: "#002200"
        }]
      },
      options: {
        plugins:{
          legend: {
              display: true
          },
          title: {
        
            display: false,
            text: 'Title'
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        elements: {
          point: {
            radius: 0
          }
<<<<<<< HEAD:front/src/app/views/graphics/line-chart/line-chart.component.ts
        },
        responsive: false,
        
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          x: {
            display: true,
            //type: 'time', ///#########
            time: {
              parser: 'MM/DD/YYYY HH:mm:ss',
              tooltipFormat: 'll HH:mm:ss'
            },
            title: {
              display: false,
              text: 'x'
            }
          },
          y:{
            display: true,
            title: {
              display: false,
              text: 'y'
            }
          }
        }
      }
      });
=======
        ]
      },
      options: {
        responsive: true
        // legend:{
        //   display: false;
        // }
      }
    });
>>>>>>> refs/remotes/origin/main:front/src/app/vis/line-chart/line-chart.component.ts
  }

  prototype = { /////##########
    setTitle: (title:any) => {
      this.chart.options.plugins.title.text = title;
      this.chart.options.plugins.title.display = true;
    },
    setTicksX: (ticks:any) => {
      this.chart.options.scales.x[0].ticks = ticks;
    },  
    setTicksY: (ticks:any) => {
      this.chart.options.scales.y[0].ticks = ticks;
    },  
    setTypeX: (type:any) => {
      this.chart.options.scales.x[0].type = type;
    },  
    setTypeY: (type:any) => {
      this.chart.options.scales.y[0].type = type;
    },  
    setLabelX: (label:any) => {
      this.chart.options.scales.x[0].title.text = label;
      this.chart.options.scales.x[0].title.display = true;
    },  
    setLabelY: (label:any) => {
      this.chart.options.scales.y[0].title.text = label;
      this.chart.options.scales.y[0].title.display = true;
    },
    setLabels: (labels:any) => {
      this.chart.config.data.labels = labels;
    },  
    addLabel: (label:any) => {
      let labels = this.chart.config.data.labels;
      let found = false;
      for (let i=0; i<labels.length; i++) {
        if (labels[i] == label) {
          found = true;
          break;
        }
      }
      if (!found) {
        labels.push(label);
      }
    },
    addData: (data:any) => {
      let datasets = this.chart.config.data.datasets;
      for (let i=0; i<datasets.length; i++) {
        datasets[i].data.push(data[i]);
      }
      this.chart.update();
    },
    addDataset: (label:any, data:any, color:any) => {
      let dataset = {
        label: label,
        backgroundColor: color,
        borderColor: color,
        data: data,
        fill: false
      };
      let datasets = this.chart.config.data.datasets;
      datasets.push(dataset);
      this.chart.update();
    },
    removePolyDataset: (label:any, color:any) => {
      let datasets = this.chart.config.data.datasets;
      for (let i=0; i<datasets.length; i++) {
        let dataset = datasets[i];
        if ((dataset.label == label) && 
            (dataset.backgroundColor == color) &&
            (dataset.borderColor == color)) {
          datasets.splice(i, 1);
          break;
        }
      }
      this.chart.update();
    },
    removeDataset: (label:any) => {
      let datasets = this.chart.config.data.datasets;
      for (let i=0; i<datasets.length; i++) {
        let dataset = datasets[i];
        if (dataset.label == label) {
          datasets.splice(i, 1);
          break;
        }
      }
      this.chart.update();
    },
    clear: () => {
      this.chart.data.labels = [];
      this.chart.data.datasets = [];
      this.chart.update();
    }
  };

}
