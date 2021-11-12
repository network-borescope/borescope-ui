import * as d3 from 'd3';
import d3Tip from "d3-tip";

export class Network {
  // chart data
  protected _data: any = null;

  // capitals
  protected _capitals: any = null;

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
  protected _margin = { top: 40, right: 10, bottom: 50, left: 70 };

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

  constructor(chartDiv: HTMLElement) {
    this._chartDiv = chartDiv;

    this.initSvgAndGroups();
    this.initScalesAndAxes();

    window.addEventListener('resize', this.resize.bind(this));
  }

  setData(data: any, capitals: any, isTime: boolean = false, invert: boolean = false, capitalId: number) {
    this._data = data;
    this._capitals = capitals;
    this._isTime = isTime;
    this._invert = invert;
    this._capitalId = capitalId;
  }

  render() {
    this.updateScales();
    this.updateAxes();
    this.updateLabelsAndTitle()
    this.updateRectangles();
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
        .attr('height', this._chartDiv.clientHeight + 20);

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

    // legend
    this._svgCanvas
    .append('defs')
    .append('linearGradient')
    .attr('id', 'linear-gradient')
    
    this._svgCanvas
    .append('g')
    .attr("transform", "translate(" + (this._width*0.05) + " ," + (this._height + this._margin.bottom + 40) + ")")
    .append("rect")
    .attr('transform', "translate(" + this._margin.left + " ," +  0 + ")")
    .attr("width", this._width - this._margin.right - this._margin.left)
    .attr("height", 12)
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
    const ids = this._data.map( (d: any) => this.getCapitalId( d[0] ));
    const labelsIn = Array.from(new Set(ids));

    let labelsOut = labelsIn;
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
    this._svgGroup.select('.axis--y').call(this._yAxis)
        .selectAll('text')
        .style('pointer-events', 'auto')
  }


  updateRectangles() {
    // @ts-ignore
    const tip = d3Tip()
    .attr('class', 'd3-tip').html((d: any) => {
      return `${(d[2]).toFixed(1)}`;
    })
    this._svgCanvas.call(tip);

    const rects = this._svgGroup.selectAll(".rect_group").data([null]).join('g').attr('class', 'rect_group');

    rects.selectAll("rect")
        .data(this._data)
        .join("rect")
        .attr("x", (d: any) => this._outScale( this._isTime ? this.valToDate( d[1] ) : this.getCapitalId(d[1])))
        .attr("y", (d: any) => this._inScale( this._isTime ? this.getCapitalId(d[0]) : this.getCapitalId(d[0])))
        .attr("width", this._outScale.bandwidth())
        .attr("height", this._inScale.bandwidth())
        .attr("fill", (d: any) => this.valToColor(d))
        .on('mouseover', (e: any, d: any) => tip.show(d, e.target))
        .on('mouseout' , (e: any, d: any) => tip.hide(d, e.target));
  }

  updateLabelsAndTitle() {

    if (this._isTime) {
      const popId = this.getCapitalId(this._capitalId);
      this._xAxisLabel = 'Tempo'
      this._yAxisLabel = 'Pop de chegada';
      this._title = 'Medição do pop ' +  popId + ' para os demais pops ao longo do tempo'
    } else {
      this._capitalId = 0;
      this._xAxisLabel = 'Pop de chegada'
      this._yAxisLabel = 'Pop de saída';
      this._title = 'Medição entre pops'
    }

    this._svgCanvas.select('.axis--x--label')
        .text(this._xAxisLabel)

    this._svgCanvas.select('.axis--y--label')
        .text(this._yAxisLabel)

    this._svgCanvas.select('.chart-title')
        .text(this._title)
  }

  getCapitalId(id: number) {
    return this._capitals.filter((c: any) => c.cod === id)[0].id.toUpperCase();
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

