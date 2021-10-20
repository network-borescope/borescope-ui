import * as d3 from 'd3';
import d3Tip from "d3-tip";

export class Network {
  // chart data
  protected _data: any = null;

  // capitals
  protected _capitals: any = null;
  protected _isTime: boolean = false;

  // Chart div
  protected _chartDiv: HTMLElement;
  // Svg element
  protected _svgCanvas: any = null;
  // Group element
  protected _svgGroup: any = null;

  // margin object
  protected _margin = { top: 10, right: 10, bottom: 20, left: 30 };

  // svg width
  protected _width: number = 800;
  // charts height
  protected _height: number = 600;

  // scales
  protected _xScale: any = null;
  protected _yScale: any = null;
  protected _cScale: any = null;

  // axis
  protected _xAxis: any = null;
  protected _yAxis: any = null;

  constructor(chartDiv: HTMLElement) {
    this._chartDiv = chartDiv;

    this.initSvgAndGroups();
    this.initScalesAndAxes();

    window.addEventListener('resize', this.resize.bind(this));
  }

  setData(data: any, capitals: any, isTime: boolean = false) {
    this._data = data;
    this._capitals = capitals;
    this._isTime = isTime;

    console.log("=====>", capitals)
  }

  render() {
    this.updateScales();
    this.updateAxes();
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
        .attr('height', this._chartDiv.clientHeight);

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
    this._xScale = d3.scaleBand().range([0, this._width]).paddingInner(0.1).paddingOuter(0.0);
    this._yScale = d3.scaleBand().range([this._height, 0]).paddingInner(0.1).paddingOuter(0.0);
    this._cScale = d3.scaleDiverging(d3.interpolateRdBu);

    // @ts-ignore
    this._xAxis = d3.axisBottom(this._xScale);
    // @ts-ignore
    this._yAxis = d3.axisLeft(this._yScale);
  }

  getCapitalId(id: number) {
    return this._capitals.filter((c: any) => c.cod === id)[0].id.toUpperCase();
  }

  updateScales() {
    const labelsX = Array.from(new Set(this._data.map( (d: any) => this.getCapitalId(d[0] ))));
    const labelsY = this._isTime ? Array.from(new Set(this._data.map((d: any) => d[1]))) : labelsX;
    // @ts-ignore
    this._xScale.domain(labelsX);
    // @ts-ignore
    this._yScale.domain(labelsY);
    // @ts-ignore
    this._cScale.domain( d3.extent(this._data.map((d: any) => d[2])) );
  }

  updateAxes() {
    this._xAxis.scale(this._xScale).tickSizeOuter(0);
    this._svgGroup.select('.axis--x').call(this._xAxis)
        .selectAll('text')
        .style('text-anchor', 'end')
        .style('pointer-events', 'auto')
        .attr('dx', '-0.1em')
        .attr('dy', '+0.3em')
        .attr('transform', 'rotate(-25)');

    this._yAxis.scale(this._yScale).tickSizeOuter(0);
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
        .attr("x", (d: any) => this._xScale(this.getCapitalId(d[0])))
        .attr("y", (d: any) => this._yScale( this._isTime ? d[1] : this.getCapitalId(d[1])))
        .attr("width", this._xScale.bandwidth())
        .attr("height", this._yScale.bandwidth())
        .attr("fill", (d: any) => this._cScale(d[2]))
        .on('mouseover', (e: any, d: any) => tip.show(d, e.target))
        .on('mouseout' , (e: any, d: any) => tip.hide(d, e.target));
  }
}

