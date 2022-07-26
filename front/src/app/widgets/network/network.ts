import * as d3 from 'd3';
import d3Tip from "d3-tip";
import { CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip } from 'chart.js';


export class Network {
  // chart data
  protected _data: any = null;

  // capitals
  protected _capitals: any = null;

  // services
  protected _services: any = null;

  // params
  protected _isTime: boolean = false;
  protected _invert: boolean = false;
  protected _capitalId: number = 0;

  // Chart div
  protected _chartDiv: HTMLElement;
  // Svg element
  protected _svgCanvas: any = null;
  // Group element
  protected _svgGroup: any = null;

  // margin object
  protected _margin = { top: 40, right: 10, bottom: 50, left: 120 };

  // svg width
  protected _width: number = 800;
  // charts height
  protected _height: number = 600;

  // scales
  protected _inScale: any = null;
  protected _outScale: any = null;
  protected _cScale: any = null;

  // axis
  protected _xAxis: any = null;
  protected _yAxis: any = null;

  // axis labels
  protected _xAxisLabel: any = null;
  protected _yAxisLabel: any = null;

  // title
  protected _title: any = null;

  // last rectangle stroke added
  protected _lastIndices: number[] = [];

  constructor(chartDiv: HTMLElement) {
    this._chartDiv = chartDiv;

    this.initSvgAndGroups();
    this.initScalesAndAxes();

    window.addEventListener('resize', this.resize.bind(this));
  }

  setData(data: any, capitals: any, isTime: boolean = false, invert: boolean = false, capitalId: number, services: any) {
    this._data = data;
    this._capitals = capitals;
    this._isTime = isTime;
    this._invert = invert;
    this._capitalId = capitalId;
    this._services = services;
  }

  render() {
    const tips = document.querySelectorAll('.d3-tip');

    tips.forEach(tip => {
      tip.remove();
    });

    this.updateScales();
    this.updateAxes();
    this.updateLabelsAndTitle()
    this.updateRectangles();
    this.updateLegend();
  }

  resize() {
    this._svgCanvas.remove();

    this.initSvgAndGroups();
    this.initScalesAndAxes();
    this.render();
  }

  initSvgAndGroups() {
    // dimensions using margins convention
    this._width = this._chartDiv.clientWidth - this._margin.left - this._margin.right;
    this._height = this._chartDiv.clientHeight - this._margin.top - this._margin.bottom;
    // creates the new canvas element
    this._svgCanvas = d3.select(this._chartDiv)
        .append('svg')
        .attr('width', this._chartDiv.clientWidth)
        .attr('height', this._chartDiv.clientHeight + 26);

    // axis title
    this._svgCanvas
    .append('text')
    .attr('class', 'chart chart-title')
    .attr("transform", "translate(" + (this._width/1.6) + " ," + (this._margin.top  - 15) + ")")
    .style("text-anchor", "middle")
    .style('fill', '#8c8c8c');

    // axis label groups
    this._svgCanvas
    .append('text')
    .attr('class', 'axis axis--x--label')
    .attr("transform", "translate(" + (this._width/1.6) + " ," + (this._height + this._margin.bottom + 30) + ")")
    .style("text-anchor", "middle")
    .style('fill', '#8c8c8c');

    this._svgCanvas
    .append('text')
    .attr('class', 'axis axis--y--label')
    .attr("transform", "rotate(-90)")
    .attr("y", 10)
    .attr("x", 0 - (this._height / 1.5))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style('fill', '#8c8c8c');
    
    // creates the group
    this._svgGroup = this._svgCanvas
        .append('g')
        .attr('class', 'svgGroup')
        .attr('transform', 'translate(' + this._margin.left + ',' + this._margin.top + ')');

    // axis groups
    this._svgGroup
        .append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + (this._height) + ')');

    this._svgGroup
        .append('g')
        .attr('class', 'axis axis--y');
  }

  initScalesAndAxes() {
    this._inScale = d3.scaleBand().range([0, this._height]).paddingInner(0.1).paddingOuter(0.0);
    this._outScale = d3.scaleBand().range([0, this._width]).paddingInner(0.1).paddingOuter(0.0);
    this._cScale = d3.scaleSequential(d3.interpolateReds);

    // @ts-ignore
    this._xAxis = d3.axisBottom(this._outScale);
    // @ts-ignore
    this._yAxis = d3.axisLeft(this._outScale);
  }

   updateScales() {
    const ids = this._data.map( (d: any) => (this._isTime && this._services != null) ? this.getId( d[0], 'services' ) : this.getId( d[0], 'pop' ));
    let labelsOut = Array.from(new Set(ids));

    let labelsIn;
    if(this._services == null) {
      labelsIn = labelsOut;
    } else {
      const services = this._data.map( (d: any) => this.getId( d[0], 'services' ));
      labelsIn = Array.from(new Set(services));
    }

    if (this._isTime) {
      const ts = this._data.map( (d: any) => this.valToDate(d[1]) );
      labelsOut = Array.from(new Set(ts));
    }

    // @ts-ignore
    this._inScale.domain(labelsIn);
    // @ts-ignore
    this._outScale.domain(labelsOut);
    // @ts-ignore
    const all = d3.extent(this._data.map((d: any) => d[2]).filter(e => e > 0) );

    if (this._invert) {
      this._cScale.domain( all.reverse() );
    }
    else {
      this._cScale.domain( all );
    }
    console.log("Color Scale", all)
  }

  updateAxes() {

    this._xAxis.scale(this._outScale).tickSizeOuter(0);
    this._svgGroup.select('.axis--x').call(this._xAxis)
        .selectAll('text')
        .style('text-anchor', 'end')
        .style('pointer-events', 'auto')
        .style('', 'default')
        .attr('dx', '-0.1em')
        .attr('dy', '+0.3em')
        .attr('transform', 'rotate(-25)');

    this._yAxis.scale(this._inScale).tickSizeOuter(0);
    if(this._services == null) {
    this._svgGroup.select('.axis--y').call(this._yAxis)
        .selectAll('text')
        .style('pointer-events', 'auto')
    } else {
      this._svgGroup.select('.axis--y').call(this._yAxis)
                    .selectAll("text")
                    .remove();
      this._svgGroup.select('.axis--y').call(this._yAxis)
            .selectAll('.tick')
            .data(this._services)
            .append("svg:image")
            .attr("xlink:href", (d: any) => d["imagePath"])
            .attr("width", (d: any) => d["imageDim"][0]/2)
            .attr("height", (d: any) => d["imageDim"][1]/2)
            .attr("x", (d: any) => -d["imageDim"][0]/2 - 15)
            .attr("y", -8)
    }
  }


  updateRectangles() {
    // @ts-ignore
    const tip = d3Tip()
    .attr('class', 'd3-tip').html((d: any) => {
      return `${(d[2]).toFixed(1)}`;
    })
    this._svgCanvas.call(tip);

    const rects = this._svgGroup.selectAll(".rect_group").data([null]).join('g').attr('class', 'rect_group');
    if(this._services == null) {
      rects.selectAll("rect")
           .data(this._data)
           .join("rect")
           .attr("x", (d: any) => this._outScale( this._isTime ? this.valToDate( d[1] ) : this.getId(d[1], 'pop')))
           .attr("y", (d: any) => this._inScale( this.getId(d[0], 'pop')) )
           .attr("width", this._outScale.bandwidth())
           .attr("height", this._inScale.bandwidth())
           .attr("fill", (d: any) => this.valToColor(d))
           .attr("id", (d: any, i: number) => i )
           .on('mouseover', (e: any, d: any) => tip.show(d, e.target))
           .on('mouseout' , (e: any, d: any) => tip.hide(d, e.target));
    } else {
      rects.selectAll("rect")
           .data(this._data)
           .join("rect")
           .attr("x", (d: any) => this._outScale(this._isTime ? this.valToDate( d[1]) : this.getId(d[0], 'pop')))
           .attr("y", (d: any) => this._inScale(this._isTime ? this.getId(d[0], 'services' ) : this.getId(d[1], 'services')))
           .attr("width", this._outScale.bandwidth())
           .attr("height", this._inScale.bandwidth())
           .attr("fill", (d: any) => this.valToColor(d))
           .attr("id", (d: any, i: number) => i )
           .on('mouseover', (e: any, d: any) => tip.show(d, e.target))
           .on('mouseout' , (e: any, d: any) => tip.hide(d, e.target));
    }
  }

  highlightRectangle(indices: number[]) {
    if(this._lastIndices.length > 0) {
      for(let i = 0; i < this._lastIndices.length; i++) {
        this._svgGroup.select('[id="' + this._lastIndices[i] + '"]')
        .attr("stroke", "none");
      }
    }

    for(let i = 0; i < indices.length; i++) {
    this._svgGroup.select('[id="' + indices[i] + '"]')
                  .attr("stroke", "#333")
                  .attr('stroke-width', '2')
    }

    this._lastIndices = indices;      
  }

  removeRectangleHighlight() {
    if(this._lastIndices.length > 0) {
      for(let i = 0; i < this._lastIndices.length; i++) {
        this._svgGroup.select('[id="' + this._lastIndices[i] + '"]')
        .attr("stroke", "none");
      }
    }
    this._lastIndices = [];  
  }

  updateLabelsAndTitle() {
    if (this._isTime) {
      const popId = this.getId(this._capitalId, 'pop');
      this._xAxisLabel = 'Tempo'
      if(this._services == null) {
        this._yAxisLabel = 'Pop de chegada';
        this._title = 'Medição do pop ' +  popId + ' para os demais pops ao longo do tempo'        
      } else {
        this._yAxisLabel = 'Serviço';
        this._title = 'Medição do pop ' +  popId + ' para os demais serviços ao longo do tempo'
      }
    } else {
      this._capitalId = 0;
      if(this._services == null) {
        this._xAxisLabel = 'Pop de chegada'
        this._yAxisLabel = 'Pop de saída';
        this._title = 'Medição entre pops'        
      } else {
        this._xAxisLabel = 'Pop'
        this._yAxisLabel = 'Serviço';
        this._title = 'Medição de pops e serviços'  
      }
    }

    this._svgCanvas.select('.axis--x--label')
        .text(this._xAxisLabel)

    this._svgCanvas.select('.axis--y--label')
        .text(this._yAxisLabel)

    this._svgCanvas.select('.chart-title')
        .text(this._title)
  }

  updateLegend() {
    //remove antiga legenda e ticks
    this._svgCanvas.select(".legend-scale").remove();
    this._svgCanvas.select("defs").remove();
    this._svgCanvas.select("#linear-gradient").remove();
    this._svgCanvas.select("#legend").remove();

    const defs =  this._svgCanvas
                  .append('defs')

    const linearGradient =  defs
                            .append('linearGradient')
                            .attr('id', 'linear-gradient')

    linearGradient.selectAll('stop')
    .data(this._cScale.ticks().map((t: any, i: any, n: any) => ({ offset: `${100*i/n.length}%`, color: this._cScale(t) })))
    .enter().append('stop')
    .attr('offset', (d: any) => d.offset)
    .attr('stop-color', (d: any) => d.color); 

    this._svgCanvas
    .append('g')
    .attr('id', 'legend')
    .attr("transform", "translate(" + (this._width*0.05) + " ," + (this._height + this._margin.bottom + 42) + ")")
    .append("rect")
    .attr('transform', "translate(" + this._margin.left + " ," +  0 + ")")
    .attr("width", this._width - this._margin.right - this._margin.left)
    .attr("height", 12)
    .style('fill', 'url(#linear-gradient)')

    const legendScale = d3.scaleLinear()
                        .domain(this._cScale.domain())
                        .range([this._margin.left, this._width - this._margin.right])
    
    this._svgCanvas
    .append('g')
    .attr("class", "legend-scale")
    .attr("transform", "translate(" + (this._width*0.05) + " ," + (this._height + this._margin.bottom + 42) + ")")
    .call(d3.axisBottom(legendScale)
    .ticks(this._width / 100)
    .tickSize(12))

    this._svgCanvas.selectAll(".legend-scale line")
    .attr("stroke", "#fff");

    this._svgCanvas.select(".legend-scale path")
    .attr("stroke", "#fff");
  }

  getId(id: number, type: string) {
    if(type == 'pop') {
      return this._capitals.filter((c: any) => c.cod === id)[0].id.toUpperCase();
    } else {
      return this._services.filter((c: any) => c.cod === id)[0].id.toUpperCase();
    }
  }

  valToColor(d: any) {
    if (d[2] === 0) {
      return "#333";
    }
    
    return this._cScale(d[2])
  }

  valToDate(d: any) {
    const data = new Date(1000 * d)
    //@ts-ignore
    return data.toLocaleString('en-US', { dateStyle: 'short', timeZone: 'UTC' });
  }
}


export class Timeseries {

  private chart: any;
  private canvas: HTMLCanvasElement;
  // capitals
  private capitals: any = null;
  // services
  private services: any = null;
  // labels 
  private labels: any = null;
  private data: any = null;
  
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.init();
  }

  //Configuração do grafico
  init() {
    if (this.canvas === undefined) {
      return;
    }

    //Registra os elementos utilizados pelo grafico
    Chart.register(PointElement, LineElement, LineController, CategoryScale, LinearScale, Legend, Tooltip);
    Chart.defaults.animation = false;

    this.chart = new Chart(this.canvas, {
      type: 'line',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        plugins: {
          legend: {
            title: {
              display: true,
              text: 'Legend'
            },
            display: true,
            position: "top",
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
        },
        responsive: true,
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          x: {
            display: true,
            time: {
              parser: 'MM/DD/YYYY HH:mm',
              tooltipFormat: 'll HH:mm'
            },
            title: {
              display: true,
              text: 'Tempo'
            }
          },
          y: {
            display: true,
            title: {
              display: true
            }
          }
        }
      }
    });
  }


  //Modifica as configurações globais para os títulos
  setTitle(id: number) {
    this.chart.options.plugins.legend.title.text = this.getId(id, 'Pop de chegada');
  }

  setCapitals(capitals: any) {
    this.capitals = capitals;
  }

  setServices(services: any) {
    this.services = services;
  }

  updateData(data: any, colorList: any, type: string) {
    const datasets = this.chart.config.data.datasets;
    console.log(data)
    for(let i = 0; i < data.length; i++) {
      const newData = {
        label: this.getId(data[i][0], type),
        data: data[i][1],
        backgroundColor: colorList[i],
        borderColor: colorList[i],
        fill: false
      };
      datasets.push(newData);
    }
    this.chart.update();
  }

  setLabels(labels: any, type: string) {
      this.chart.config.data.labels = labels;
      this.chart.config.options.scales.y.title.text = type;
  }

  getId(id: number, type: string) {
    if(type == 'Pop de chegada') {
      return this.capitals.filter((c: any) => c.cod === id)[0].id.toUpperCase();
    } else {
      return this.services.filter((c: any) => c.cod === id)[0].id.toUpperCase();
    }
  }

  clear() {
    this.chart.data.labels = [];
    this.chart.data.datasets = [];
    this.chart.config.options.scales.y.title.text = '';
    this.chart.update();
  }

  render() {
    this.chart.update();
  }

  removeDataset() {
    this.chart.config.data.labels = [];
    this.chart.config.data.datasets = [];
    this.chart.update();
  }
}