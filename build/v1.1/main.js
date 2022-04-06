(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/leovsf/code/leovsferreira/borescope-ui/front/src/main.ts */"zUnb");


/***/ }),

/***/ "1t5r":
/*!************************************************************!*\
  !*** ./src/app/widgets/line-chart/line-chart.component.ts ***!
  \************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line */ "c5/f");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/util.service */ "Cs7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["lineChart"];
function LineChartComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", param_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](param_r2.caption);
} }
class LineChartComponent {
    constructor(global, util) {
        this.global = global;
        this.util = util;
        this.lineParamChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.lineValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.labels = {};
        this.rawData = {};
        this.nrmData = {};
        this.unity = {};
        this.ids = [];
        this.ids = this.global.getGlobal('line_params').value;
    }
    ngOnInit() {
        this.lineChart = new _line__WEBPACK_IMPORTED_MODULE_1__["LineChart"](this.lineDiv.nativeElement);
    }
    updateData(responseData, dataId, chartColor) {
        // manages data for each from
        for (let paramId of Object.keys(responseData)) {
            // clear existing element
            this.deleteData(paramId, dataId, chartColor);
            //creating list to average, max, min
            this.rawData[paramId][dataId][chartColor] = [];
            // adiciona os valores não normalizados
            for (let i = 0; i < responseData[paramId].result.length; i++) {
                //pega o tempo
                const pointTime = responseData[paramId].result[i].k[0];
                //pega valor das médias
                const pointAverageValue = responseData[paramId].result[i].v[0];
                //pega valor max
                const pointMaxValue = responseData[paramId].result[i].v[2];
                //pega valor min
                const pointMinValue = responseData[paramId].result[i].v[3];
                this.rawData[paramId][dataId][chartColor].push({ x: this.util.secondsToDate(pointTime), y: pointAverageValue, z: pointMaxValue, k: pointMinValue });
            }
            // computes the unity
            this.computeUnity(paramId);
            // atualiza os labels baseado no dado novo
            this.updateLabels(paramId);
            // normaliza os dados de dataId
            this.normalizeData(paramId);
        }
    }
    drawChart(from, selectedParam, name = undefined) {
        // TODO: passar os labels de y em um objeto.
        if (from.includes('dns')) {
            // set y label.
            this.lineChart.setLabelY("Requisitions [%]");
        }
        else {
            // set y label.
            this.lineChart.setLabelY("Requisitions" + " [" + this.unity[from].prefix + "package" + "]");
        }
        // atualiza os labels
        this.lineChart.setLabels(this.labels[from], name);
        // atualiza os gráficos
        for (const dataId of Object.keys(this.nrmData[from])) {
            for (const color of Object.keys(this.nrmData[from][dataId])) {
                // gets the data
                const data = this.nrmData[from][dataId];
                const chartData = [];
                for (let i = 0; i < data[color].length; i++) {
                    if (selectedParam == 'average') {
                        chartData.push(data[color][i].x);
                    }
                    else if (selectedParam == 'max') {
                        chartData.push(data[color][i].y);
                    }
                    else {
                        chartData.push(data[color][i].z);
                    }
                }
                this.lineChart.updateDataset(dataId, color, chartData, name);
            }
        }
    }
    deleteData(from, dataId, color) {
        // new group
        if (!this.rawData[from]) {
            this.rawData[from] = {};
        }
        // new dataId
        if (!this.rawData[from][dataId]) {
            this.rawData[from][dataId] = {};
        }
        delete this.rawData[from][dataId][color];
        // new group
        if (!this.nrmData[from]) {
            this.nrmData[from] = {};
        }
        // new dataId
        if (!this.nrmData[from][dataId]) {
            this.nrmData[from][dataId] = {};
        }
        delete this.nrmData[from][dataId][color];
    }
    clearChart(from, dataId, color) {
        // removes from chart
        this.lineChart.removeDataset(dataId, color);
        this.deleteData(from, dataId, color);
        // atualiza os labels baseado no dado novo
        this.updateLabels(from);
        // normaliza os dados de dataId
        this.normalizeData(from);
    }
    clearLabel(from) {
        this.labels[from] = [];
    }
    computeUnity(from) {
        let max = -1;
        const dataIds = Object.keys(this.rawData[from]);
        for (let dataId of dataIds) {
            const colors = Object.keys(this.rawData[from][dataId]);
            for (let color of colors) {
                // pega o máximo do dado atual
                const mx = Math.max(...this.rawData[from][dataId][color].map((d) => d.y));
                // atualiza o máximo global
                max = Math.max(mx, max);
            }
        }
        // computes the best unity
        this.unity[from] = this.util.compute_best_unity(0, max);
    }
    normalizeData(from) {
        // pega o dataset
        const data = this.rawData[from];
        // limpa os dados normalizados
        this.nrmData[from] = {};
        const dataIds = Object.keys(data);
        for (let dataId of dataIds) {
            this.nrmData[from][dataId] = {};
            const colors = Object.keys(data[dataId]);
            for (let color of colors) {
                this.nrmData[from][dataId][color] = [];
                for (let pId = 0; pId < data[dataId][color].length; pId++) {
                    this.nrmData[from][dataId][color].push({ x: data[dataId][color][pId].y / this.unity[from].div,
                        y: data[dataId][color][pId].z / this.unity[from].div,
                        z: data[dataId][color][pId].k / this.unity[from].div });
                }
                ;
            }
        }
    }
    updateLabels(from) {
        // result array
        this.labels[from] = [];
        const tsT0 = this.global.getGlobal("t0_vis");
        const tsT1 = this.global.getGlobal("t1_vis");
        const interval = tsT1.value - tsT0.value;
        const data = this.rawData[from];
        for (let dataId of Object.keys(data)) {
            for (let chartColor of Object.keys(data[dataId])) {
                // numero de pontos
                const nPoints = this.rawData[from][dataId][chartColor].length;
                // só atualiza se chegar um dado com mais pontos
                if (this.labels.length > nPoints) {
                    continue;
                }
                // só atualiza se chegar um dado com mais pontos
                if (nPoints === 0) {
                    continue;
                }
                // calcula o delta de tempo
                const tDelta = interval / (nPoints - 1);
                // result array
                this.labels[from] = [];
                let current = tsT0.value;
                while (current <= tsT1.value) {
                    let label = '';
                    let date = new Date(current * 1000);
                    if (interval < 1200) { // 20 min
                        //@ts-ignore
                        label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' });
                    }
                    else if (interval < 72000) { // 20 hs
                        //@ts-ignore
                        label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' });
                    }
                    else if (interval < 4320000) { // 50 dias
                        //@ts-ignore
                        label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' });
                    }
                    else {
                        //@ts-ignore
                        label = date.toLocaleString('en-US', { dateStyle: 'short', timeZone: 'UTC' });
                    }
                    this.labels[from].push(label);
                    current += tDelta;
                }
            }
        }
    }
    onParamChange(event) {
        const line_params_value = {
            key: "line_params_value",
            value: event.target.value
        };
        this.global.setGlobal(line_params_value);
        this.lineParamChanged.emit();
    }
    onValueChange(event) {
        const line_selected_params_value = {
            key: "line_selected_params_value",
            value: event.target.value
        };
        this.global.setGlobal(line_selected_params_value);
        this.lineValueChanged.emit();
    }
}
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"])); };
LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineChartComponent, selectors: [["app-line-chart"]], viewQuery: function LineChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineDiv = _t.first);
    } }, outputs: { lineParamChanged: "lineParamChanged", lineValueChanged: "lineValueChanged" }, decls: 13, vars: 1, consts: [[1, "fill"], [1, "fill", 2, "padding-bottom", "10px", "border-bottom", "1px solid #eee"], ["lineChart", ""], [2, "margin-top", "7px", "padding-bottom", "7px", "display", "flex"], ["name", "select", 1, "param-selector", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "select", 1, "value-selector", 3, "change"], ["value", "average", "selected", ""], ["value", "max"], ["value", "min"], [3, "value"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LineChartComponent_Template_select_change_4_listener($event) { return ctx.onParamChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LineChartComponent_option_5_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LineChartComponent_Template_select_change_6_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ids);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".handler-line-chart[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #fff;\n    left: 5px;\n}\n\n.btn-line-chart[_ngcontent-%COMP%]{\n    color: #AAAAAA;\n    background-color: #fff;\n    outline-color: #fff !important;\n  }\n\n.btn-line-chart[_ngcontent-%COMP%]:hover {\n    background-color: #eee !important;\n    outline-color: #eee !important;\n    color: black;\n}\n\n.value-selector[_ngcontent-%COMP%] {\n    width: 71px;\n    font-size: 9px;\n    margin-left: 17px;\n    height: 27px;\n}\n\n.param-selector[_ngcontent-%COMP%] {\n    width: 174px;\n    font-size: 9px;\n    margin-left: 17px;\n    height: 27px;\n}\n\n.line-time-icon[_ngcontent-%COMP%] {\n    font-size: 1em;\n}\n\n.handler-line-chart[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    height: 24px;\n    padding: 6px 21px;\n    margin-top: 2px;\n}\n\n@media screen and (min-width: 1024px) {\n    .line-time-icon[_ngcontent-%COMP%] {\n        font-size: 1.33em;\n    }\n\n    .handler-line-chart[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        height: 34px;\n        padding: 6px 24px;\n    }\n\n    .value-selector[_ngcontent-%COMP%] {\n        width: 79px;\n        font-size: 11px;\n    }\n    \n    .param-selector[_ngcontent-%COMP%] {\n        width: 204px;\n        font-size: 11px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0Qiw4QkFBOEI7RUFDaEM7O0FBRUY7SUFDSSxpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbmRsZXItbGluZS1jaGFydCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbGVmdDogNXB4O1xufVxuXG4uYnRuLWxpbmUtY2hhcnR7XG4gICAgY29sb3I6ICNBQUFBQUE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBvdXRsaW5lLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuLmJ0bi1saW5lLWNoYXJ0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZS1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnZhbHVlLXNlbGVjdG9yIHtcbiAgICB3aWR0aDogNzFweDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG59XG5cbi5wYXJhbS1zZWxlY3RvciB7XG4gICAgd2lkdGg6IDE3NHB4O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgIGhlaWdodDogMjdweDtcbn1cblxuLmxpbmUtdGltZS1pY29uIHtcbiAgICBmb250LXNpemU6IDFlbTtcbn1cbi5oYW5kbGVyLWxpbmUtY2hhcnQgLmJ0biB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDZweCAyMXB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmxpbmUtdGltZS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjMzZW07XG4gICAgfVxuXG4gICAgLmhhbmRsZXItbGluZS1jaGFydCAuYnRuIHtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggMjRweDtcbiAgICB9XG5cbiAgICAudmFsdWUtc2VsZWN0b3Ige1xuICAgICAgICB3aWR0aDogNzlweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgICBcbiAgICAucGFyYW0tc2VsZWN0b3Ige1xuICAgICAgICB3aWR0aDogMjA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "27/6":
/*!***************************************************!*\
  !*** ./src/app/bars/top-bar/top-bar.component.ts ***!
  \***************************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");


class TopBarComponent {
    constructor(global) {
        this.global = global;
    }
    ngOnInit() { }
}
TopBarComponent.ɵfac = function TopBarComponent_Factory(t) { return new (t || TopBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"])); };
TopBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopBarComponent, selectors: [["app-top-bar"]], decls: 8, vars: 0, consts: [[1, "main-bar"], [1, "row"], [1, "rnp-logo"], [1, "menu-container"], [1, "project-title"], ["src", "assets/logouff.png", "alt", "", 1, "uff-logo"], ["src", "assets/logoic.png", "alt", "", 1, "ic-logo"]], template: function TopBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Network Borescope");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".menu-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 120px;\n  margin: auto;\n}\n\n.project-title[_ngcontent-%COMP%] {\n  color: white;\n  margin: auto;\n}\n\n.uff-logo[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n  margin-left: 15px;\n  margin-right: 10px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n\n.ic-logo[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 60px;\n  margin-left: 10px;\n  margin-right: 30px;\n  margin-top: auto;\n  margin-bottom: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InRvcC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMTIwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnVmZi1sb2dvIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmljLWxvZ28ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuIl19 */"] });


/***/ }),

/***/ "4NiE":
/*!**************************************!*\
  !*** ./src/app/shared/api.models.ts ***!
  \**************************************/
/*! exports provided: SchemaRequest, BoundsRequest, QueryRequest, MatrixRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaRequest", function() { return SchemaRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundsRequest", function() { return BoundsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryRequest", function() { return QueryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixRequest", function() { return MatrixRequest; });
/**
 * Schema Request Class
 */
class SchemaRequest {
    constructor() {
        this.schema = [1];
        this.id = 1;
        this.from = "ttls";
    }
}
/**
 * Bounds Request Class
 */
class BoundsRequest {
    constructor(zoom) {
        let location = ["location", "zrect", zoom, 85, -179, -85, 179];
        this.bounds = "location";
        this.where = [location];
        this.dummy = [1];
        this.id = 1;
        this.from = "ttls";
    }
}
/**
 * Query Request Class
 */
class QueryRequest {
    constructor() {
        let location = ["location", "zrect", 14, -22.75212144238171, -43.90960693359376, -23.073414748499108, -42.944183349609375];
        let time = ["time", "between", 1583020800, 1585698900];
        let client = ["cliente", "eq", '10'];
        this['select'] = ["hsum"];
        this['group-by'] = {};
        this['group-by-output'] = "kv";
        this['where'] = [time, location, client];
        this['id'] = 1;
        this['from'] = "ttls";
    }
}
class MatrixRequest {
    constructor() {
        this['what'] = "matrix";
        this['metric'] = 10;
        this['field'] = "h_avg";
        this['start'] = 1;
        this['end'] = 1634149785;
    }
}


/***/ }),

/***/ "9LMx":
/*!*************************************!*\
  !*** ./src/app/app-init.service.ts ***!
  \*************************************/
/*! exports provided: AppInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInitService", function() { return AppInitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/global.service */ "H2Bz");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/api.service */ "eokG");
/* harmony import */ var _shared_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/util.service */ "Cs7S");






class AppInitService {
    constructor(global, api, utils) {
        this.global = global;
        this.api = api;
        this.utils = utils;
    }
    loadSchema() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const schema_ttls = yield this.api.getSchema('ttls');
            console.log(schema_ttls);
            const schema_serv = yield this.api.getSchema('serv');
            console.log(schema_serv);
            const schema_dns = yield this.api.getSchema('dns');
            console.log(schema_dns);
            const data = {
                key: "schema_info",
                value: {
                    'ttls': schema_ttls.result,
                    'serv': schema_serv.result,
                    'dns': schema_dns.result
                }
            };
            this.global.setGlobal(data);
        });
    }
    loadTimeBounds() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const bounds = yield this.api.getTimeBounds();
            console.log(bounds);
            let bounds_time = {
                key: "bounds_time",
                value: [bounds.result.vs[0][0], bounds.result.vs[1][0]]
            };
            this.global.setGlobal(bounds_time);
            let t0_filter = {
                key: "t0_filter",
                value: bounds_time.value[0]
            };
            this.global.setGlobal(t0_filter);
            let t1_filter = {
                key: "t1_filter",
                value: bounds_time.value[1]
            };
            this.global.setGlobal(t1_filter);
            let t0_vis = {
                key: "t0_vis",
                value: bounds_time.value[0]
            };
            this.global.setGlobal(t0_vis);
            let t1_vis = {
                key: "t1_vis",
                value: bounds_time.value[1]
            };
            this.global.setGlobal(t1_vis);
        });
    }
    loadGeoBounds() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const bounds = yield this.api.getGeoBounds();
            console.log(bounds);
            const data = {
                key: "bounds_geo",
                value: bounds.result.vs
            };
            this.global.setGlobal(data);
        });
    }
    loadIPs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const data = yield this.api.getIPs();
            // console.log(data);
            const list_ips = {
                key: 'list_ips',
                value: data
            };
            this.global.setGlobal(list_ips);
        });
    }
    loadEnvIp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const config = yield this.api.getConfig();
            src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend = config.backend;
            this.api.updateConfig();
        });
    }
    loadClients() {
        const schema = this.global.getGlobal('schema_info').value;
        const data = {
            key: 'list_clientes',
            value: schema['ttls'].clientes_df
        };
        this.global.setGlobal(data);
    }
    loadLabelMaps() {
        const schema = this.global.getGlobal('schema_info').value;
        const data = {
            key: 'label_maps',
            value: {
                'ttls': {},
                'services': schema['serv'].services
            }
        };
        this.global.setGlobal(data);
    }
    init() {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.loadEnvIp();
            console.log(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]);
            yield this.loadSchema();
            yield this.loadTimeBounds();
            yield this.loadGeoBounds();
            yield this.loadIPs();
            this.loadClients();
            this.loadLabelMaps();
            console.log('########## Initialization Done! ##########');
            resolve();
        }));
    }
}
AppInitService.ɵfac = function AppInitService_Factory(t) { return new (t || AppInitService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"])); };
AppInitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppInitService, factory: AppInitService.ɵfac });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api.service */ "eokG");
/* harmony import */ var _shared_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/util.service */ "Cs7S");
/* harmony import */ var _widgets_map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widgets/map/map.component */ "Weg6");
/* harmony import */ var _bars_charts_bar_charts_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bars/charts-bar/charts-bar.component */ "K4GV");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-draggable */ "DIQL");
/* harmony import */ var _widgets_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/bar-chart/bar-chart.component */ "pvtx");
/* harmony import */ var _widgets_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/line-chart/line-chart.component */ "1t5r");
/* harmony import */ var _widgets_network_network_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/network/network.component */ "SfxP");
/* harmony import */ var _widgets_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/alerts/alerts.component */ "Krjr");
/* harmony import */ var _widgets_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../widgets/filters/filters.component */ "Kb4X");
/* harmony import */ var _bars_time_bar_time_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../bars/time-bar/time-bar.component */ "T/Ui");














const _c0 = ["appMap"];
const _c1 = ["appBarChart"];
const _c2 = ["appLineChart"];
const _c3 = ["appNetworkChart"];
const _c4 = ["appAlerts"];
const _c5 = ["appFilters"];
class HomeComponent {
    constructor(global, api, util) {
        this.global = global;
        this.api = api;
        this.util = util;
        this.last = 'none';
        this.moving = 'none';
        this.timeBoundsRefreshFnc = undefined;
        this.timeBoundsRefreshFnc = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.timeBoundsRefresh();
            yield this.listIpsRefresh();
        }), 60 * 1000);
    }
    ngAfterViewInit() {
        this.initCharts();
    }
    ngDestroy() {
        if (this.timeBoundsRefreshFnc) {
            clearInterval(this.timeBoundsRefreshFnc);
        }
    }
    /**
     * Inicializa os gráficos usando os dados do mapa
     */
    initCharts() {
        this.updateHeatmap();
        // barchart e linechart do mapa
        this.updateLineChart('map', '#AAAAAA');
        this.updateBarChart('map', '#AAAAAA');
        // adiciona ao estado global
        this.addChartElementToGlobal('map', '#AAAAAA');
        // heat matrix
        this.updateHeatmatrix();
    }
    /**
     * Redesenha todos os gráficos
     */
    redrawAllCharts() {
        this.updateHeatmap();
        const line_params = this.global.getGlobal('line_params').value;
        for (const param of line_params) {
            this.line.clearLabel(param);
        }
        const bar_params = this.global.getGlobal('bar_params').value;
        for (const param of bar_params) {
            this.bar.clearLabel(param);
        }
        const elements = this.global.getGlobal('active_chart_elements').value;
        for (const elem of elements) {
            this.updateLineChart(elem.dataId, elem.chartColor, elem.feature);
            this.updateBarChart(elem.dataId, elem.chartColor, elem.feature);
        }
        this.updateHeatmatrix();
    }
    /**
     * Atualização automática do gráfico
     */
    timeBoundsRefresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('########## timeBoundsRefresh ##########');
            const bounds = yield this.api.getTimeBounds();
            let bounds_time = {
                key: "bounds_time",
                value: [bounds.result.vs[0][0], bounds.result.vs[1][0]]
            };
            this.global.setGlobal(bounds_time);
            console.log(bounds_time);
            console.log('#######################################');
        });
    }
    listIpsRefresh() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('########## ipListRefresh ##############');
            const ips = yield this.api.getIPs();
            const list_ips = {
                key: "list_ips",
                value: ips
            };
            this.global.setGlobal(list_ips);
            console.log(list_ips);
            console.log('#######################################');
        });
    }
    /**
     * Calcula o z-index do widget do gráfico
     */
    chartZindex(chartId) {
        if (chartId == this.moving) {
            return 950;
        }
        if (chartId == this.last) {
            return 930;
        }
        return 900;
    }
    /**
     * Checa se o widget do gráfico é visivel
     */
    isChartVisible(chartId) {
        const obj = this.global.getGlobal('widgets_charts');
        return obj.value[chartId];
    }
    /**
     * Checa se o modal de filtro é visivel
     */
    isConfigVisible(configId) {
        const obj = this.global.getGlobal('widgets_config');
        return obj.value[configId];
    }
    /**
     * Adiciona um elemento do gráfico ao estado global
     */
    addChartElementToGlobal(dataId, chartColor, feature = undefined) {
        // restaura o estado
        const elements = this.global.getGlobal('active_chart_elements');
        // procura o elemento
        const id = elements.value.findIndex((el) => {
            return el.dataId === dataId && el.chartColor === chartColor;
        });
        // se achar, remove
        if (id >= 0) {
            elements.value.splice(id, 1);
        }
        // adiciona o novo elemento
        elements.value.push({ dataId, chartColor, feature });
        // restaura o estado
        this.global.setGlobal(elements);
    }
    /**
     * Remove um elemento do gráfico do estado global
     */
    removeChartElementFromGlobal(dataId, chartColor, feature = undefined) {
        // remove o polígono a lista de elementos ativos
        const elements = this.global.getGlobal('active_chart_elements');
        // procura o elemento
        const id = elements.value.findIndex((el) => {
            return el.dataId === dataId && el.chartColor === chartColor;
        });
        // se achar, remove
        if (id >= 0) {
            elements.value.splice(id, 1);
        }
        // atualiza o estado
        this.global.setGlobal(elements);
    }
    /**
     * Atualiza o mapa depois de um evento de zoom ou pan
     */
    onMoveEnded() {
        // atualiza o heatmap
        this.updateHeatmap();
        // redesenha o elemento map dos gráficos
        this.updateLineChart('map', '#AAAAAA');
        this.updateBarChart('map', '#AAAAAA');
        // TODO: atualizar a heat matrix com base no zoom
        this.updateHeatmatrix();
    }
    /**
     * Atualiza os gráficos após a criação de uma seleções do mapa
     */
    onPolyCreated(event) {
        const color = event.options.color;
        const poly = event._latlngs[0];
        // barchart e linechart da seleção geométrica
        this.updateLineChart('geometry', color, poly);
        this.updateBarChart('geometry', color, poly);
        // adiciona ao estado global
        this.addChartElementToGlobal('geometry', color, poly);
    }
    /**
     * Atualiza os gráficos após a remoção de uma seleções do mapa
     */
    onPolyRemoved(event) {
        const color = event.options.color;
        const line_params = this.global.getGlobal('line_params').value;
        for (const param of line_params) {
            this.line.clearChart(param.id, 'geometry', color);
        }
        const bar_params = this.global.getGlobal('bar_params').value;
        const lmap = this.global.getGlobal('label_maps').value;
        for (const param of bar_params) {
            this.bar.clearChart(param.id, 'geometry', color, lmap);
        }
        // remove do estado global
        this.removeChartElementFromGlobal('geometry', color);
    }
    /**
     * Atualiza os gráficos após a seleção de um pin do mapa
     */
    onMarkerAdded(event) {
        const cod = event.cod;
        const color = event.color;
        const name = event.nome.replace(/_/g, ' ');
        ;
        // barchart e linechart do marker
        this.updateLineChart('client', color, cod, name);
        this.updateBarChart('client', color, cod, name);
        // adiciona ao estado global
        this.addChartElementToGlobal('client', color, cod);
    }
    /**
     * Atualiza os gráficos após a remoção de um pin do mapa
     */
    onMarkerRemoved(event) {
        const color = event.color;
        const line_params = this.global.getGlobal('line_params').value;
        for (const param of line_params) {
            this.line.clearChart(param.id, 'client', color);
        }
        const bar_params = this.global.getGlobal('bar_params').value;
        const lmap = this.global.getGlobal('label_maps').value;
        for (const param of bar_params) {
            this.bar.clearChart(param.id, 'client', color, lmap);
        }
        // remove do estado global
        this.removeChartElementFromGlobal('client', color);
    }
    /**
     * Atualiza os gráficos após a criação de um filtro
     */
    onFiltersDefined(clientData) {
        this.map.drawFilterMarkers(clientData);
        this.updateLineChart('filter', this.global.getGlobal('filter_color').value);
        this.updateBarChart('filter', this.global.getGlobal('filter_color').value);
        // adiciona ao estado global
        this.addChartElementToGlobal('filter', this.global.getGlobal('filter_color').value, clientData);
    }
    /**
     * Atualiza os gráficos após a remoção de um filtro
     */
    onFiltersRemoved() {
        this.map.eraseFilterMarkers();
        const line_params = this.global.getGlobal('line_params').value;
        for (const param of line_params) {
            this.line.clearChart(param.id, 'filter', this.global.getGlobal('filter_color').value);
        }
        const bar_params = this.global.getGlobal('bar_params').value;
        const lmap = this.global.getGlobal('label_maps').value;
        for (const param of bar_params) {
            this.bar.clearChart(param.id, 'filter', this.global.getGlobal('filter_color').value, lmap);
        }
        // remove do estado global
        this.removeChartElementFromGlobal('filter', this.global.getGlobal('filter_color').value);
    }
    /**
     * Atualiza o critério de groupby do barchart
     */
    onBarSelectedChanged() {
        const param = this.global.getGlobal('bar_params_value').value;
        this.bar.drawChart(param);
    }
    ;
    /**
     * Atualiza o from de saída do linechart
     */
    onLineSelectedChanged() {
        const param = this.global.getGlobal('line_params_value').value;
        const selectedParam = this.global.getGlobal('line_selected_params_value').value;
        this.line.drawChart(param, selectedParam);
    }
    /**
     * reseta a timeseries quando o botão de reset do zoom é clicado
     */
    onTimeseriesReset() {
        this.net.clearTimeseries();
    }
    /**
     * Atualiza o período de tempo ativo das visualizações
     */
    onChartTimeChanged(delta) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // reseta o tempo
            if (delta === 5) {
                const bounds = this.global.getGlobal('bounds_time');
                let tsT0 = this.global.getGlobal("t0_vis");
                tsT0.value = bounds.value[0];
                this.global.setGlobal(tsT0);
                let tsT1 = this.global.getGlobal("t1_vis");
                tsT1.value = bounds.value[1];
                this.global.setGlobal(tsT1);
            }
            // atualiza o range de tempo dos gráficcos
            this.updateChartsTimeRange(delta);
            // redesenha todos os gráficos
            this.redrawAllCharts();
        });
    }
    /**
     * Intervalo de tempo usado na montagem da consulta
     */
    getTime(dataId = 'map') {
        const t0Str = dataId === 'filter' ? 't0_filter' : 't0_vis';
        const t1Str = dataId === 'filter' ? 't1_filter' : 't1_vis';
        let tsT0 = this.global.getGlobal(t0Str);
        let tsT1 = this.global.getGlobal(t1Str);
        let list = [];
        list.push("time");
        list.push("between");
        list.push(tsT0.value);
        list.push(tsT1.value);
        return list;
    }
    /**
     * Atualiza o intervalo de tempo dos gráficos
     */
    updateChartsTimeRange(id) {
        let tsT0 = this.global.getGlobal("t0_vis");
        let tsT1 = this.global.getGlobal("t1_vis");
        let d = (tsT1.value - tsT0.value);
        let small = 20;
        let midi = 10;
        let large = 2;
        if (id == 1) {
            d = d / small;
        }
        else if (id == -1) {
            d = -d / small;
        }
        else if (id == 2) {
            d = d / midi;
        }
        else if (id == -2) {
            d = -d / midi;
        }
        else if (id == 3) {
            d = d / large;
        }
        else if (id == -3) {
            d = -d / large;
        }
        else if (id == 4) {
            d >>= 1;
            let tmid = tsT0.value + d;
            d >>= 1;
            let t0 = tmid - d;
            let t1 = tmid + d;
            if (t0 >= t1)
                t1 = t0 + 1;
            tsT0.value = t0;
            tsT1.value = t1;
            d = 0;
        }
        else if (id == -4) {
            d >>= 1;
            let tmid = tsT0.value + d;
            d <<= 1;
            let t0 = tmid - d;
            let t1 = tmid + d;
            if (t0 >= t1)
                t1 = t0 + 1;
            tsT0.value = t0;
            tsT1.value = t1;
            d = 0;
        }
        else if (id == 5) {
            d = 0;
        }
        d = Math.floor(d);
        let xt0 = tsT0.value + d;
        let xt1 = tsT1.value + d;
        let tnice = this.util.time_nice(xt0, xt1);
        const sDate = new Date(0);
        sDate.setUTCSeconds(tnice.t0);
        const eDate = new Date(0);
        eDate.setUTCSeconds(tnice.t1);
        console.log('#### New time range ############################');
        console.log(sDate.toUTCString(), eDate.toUTCString());
        tsT0.value = tnice.t0;
        tsT1.value = tnice.t1;
        this.global.setGlobal(tsT0);
        this.global.setGlobal(tsT1);
    }
    /**
     * Função que faz o request dos heatmaps.
     */
    updateHeatmap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const location = this.map.getLocation();
            const time = this.getTime();
            const res = yield this.api.requestHeatMap(location, time);
            this.map.drawHeatMap(res);
        });
    }
    updateBarChart(dataId, chartColor, feat = undefined, name = undefined) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const time = this.getTime(dataId);
            const location = (dataId === 'geometry') ?
                this.map.getPoly(feat) : this.map.getLocation();
            let client = undefined;
            if (dataId === 'filter') {
                client = this.filters.getClients();
            }
            if (dataId === 'client') {
                client = this.map.getClient(feat);
            }
            const data = {};
            const bar_params = this.global.getGlobal('bar_params').value;
            for (const param of bar_params) {
                const res = yield this.api.requestBarChart(location, time, client, param);
                data[param.id] = res;
            }
            const lmap = this.global.getGlobal('label_maps').value;
            this.bar.updateData(data, dataId, chartColor, lmap);
            const param = this.global.getGlobal('bar_params_value').value;
            this.bar.drawChart(param, name);
        });
    }
    updateLineChart(dataId, chartColor, feat = undefined, name = undefined) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const time = this.getTime(dataId);
            const location = (dataId === 'geometry') ?
                this.map.getPoly(feat) : this.map.getLocation();
            let client = undefined;
            if (dataId === 'filter') {
                client = this.filters.getClients();
            }
            if (dataId === 'client') {
                client = this.map.getClient(feat);
            }
            const data = {};
            const line_params = this.global.getGlobal('line_params').value;
            for (const param of line_params) {
                const res = yield this.api.requestLineChart(location, time, client, param);
                data[param.id] = res;
            }
            this.line.updateData(data, dataId, chartColor);
            const param = this.global.getGlobal('line_params_value').value;
            const selectedParam = this.global.getGlobal('line_selected_params_value').value;
            this.line.drawChart(param, selectedParam, name);
        });
    }
    updateHeatmatrix() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let tsT0 = this.global.getGlobal("t0_vis").value;
            let tsT1 = this.global.getGlobal("t1_vis").value;
            const selectedParam = parseInt(this.global.getGlobal('heatmatrix_param').value);
            const selectedValue = this.global.getGlobal('heatmatrix_value').value;
            const capitals = this.global.getGlobal('state_capitals').value.default;
            const clicked = this.global.getGlobal("clicked_element").value;
            const res = yield this.api.requestHeatmatrix(selectedParam, selectedValue, tsT0, tsT1, clicked);
            const data = JSON.parse(res).result;
            this.net.drawChart(data, capitals, clicked, selectedParam != 77);
        });
    }
    updateTimeseries(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let tsT0 = this.global.getGlobal("t0_vis").value;
            let tsT1 = this.global.getGlobal("t1_vis").value;
            const selectedParam = parseInt(this.global.getGlobal('heatmatrix_param').value);
            const selectedValue = this.global.getGlobal('heatmatrix_value').value;
            const capitals = this.global.getGlobal('state_capitals').value.default;
            const clicked = this.global.getGlobal("clicked_element").value;
            const res = yield this.api.requestHeatmatrix(selectedParam, selectedValue, tsT0, tsT1, clicked);
            const data = JSON.parse(res).result;
            const selectedData = [];
            const datetimeArray = [];
            for (let i = 0; i < event.length; i++) {
                selectedData[i] = [event[i], []];
                for (let j = 0; j < data.length; j++) {
                    if (data[j][0] == event[i])
                        selectedData[i][1].push(data[j][2]);
                }
            }
            for (let i = 0; i < 7; i++) {
                let label = '';
                let date = new Date(data[i][1] * 1000);
                //@ts-ignore
                label = date.toLocaleString('en-US', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' });
                datetimeArray.push(label);
            }
            this.net.updateTimeseriesData(selectedData, datetimeArray, capitals, clicked);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.line = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.net = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.alerts = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filters = _t.first);
    } }, decls: 22, vars: 10, consts: [["id", "rnp-inicio-screen", 1, "home"], [1, "row", "home-map-row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "fill", 2, "padding", "0px !important"], [3, "moveEndedEvent", "polyCreatedEvent", "polyEditedEvent", "polyRemovedEvent", "markerAddedEvent", "markerRemovedEvent", "resetTimeseries"], ["appMap", ""], [1, "charts-menu"], ["ngDraggable", "", 1, "widget", "bar-chart-window", 3, "started", "stopped"], [3, "barParamChanged"], ["appBarChart", ""], ["ngDraggable", "", 1, "widget", "line-chart-window", 3, "started", "stopped"], [3, "lineParamChanged", "lineValueChanged"], ["appLineChart", ""], ["ngDraggable", "", 1, "widget", "network-window", 3, "started", "stopped"], [3, "heatMatrixValueChanged", "heatMatrixParamChanged", "onCapitalSelected"], ["appNetworkChart", ""], ["ngDraggable", "", 2, "position", "absolute", "top", "400px", "left", "10px", "width", "200px", "z-index", "900", 3, "started", "stopped"], ["appAlerts", ""], [2, "position", "absolute", "width", "400px", "bottom", "10px", "left", "10px", "z-index", "-10"], [3, "filtersDefined", "filtersRemoved"], ["appFilters", ""], [1, "time-menu", 3, "chartTimeChanged"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-map", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("moveEndedEvent", function HomeComponent_Template_app_map_moveEndedEvent_3_listener() { return ctx.onMoveEnded(); })("polyCreatedEvent", function HomeComponent_Template_app_map_polyCreatedEvent_3_listener($event) { return ctx.onPolyCreated($event); })("polyEditedEvent", function HomeComponent_Template_app_map_polyEditedEvent_3_listener($event) { return ctx.onPolyCreated($event); })("polyRemovedEvent", function HomeComponent_Template_app_map_polyRemovedEvent_3_listener($event) { return ctx.onPolyRemoved($event); })("markerAddedEvent", function HomeComponent_Template_app_map_markerAddedEvent_3_listener($event) { return ctx.onMarkerAdded($event); })("markerRemovedEvent", function HomeComponent_Template_app_map_markerRemovedEvent_3_listener($event) { return ctx.onMarkerRemoved($event); })("resetTimeseries", function HomeComponent_Template_app_map_resetTimeseries_3_listener() { return ctx.onTimeseriesReset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-charts-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("started", function HomeComponent_Template_div_started_6_listener() { ctx.moving = "bar"; return ctx.last = "none"; })("stopped", function HomeComponent_Template_div_stopped_6_listener() { ctx.moving = "none"; return ctx.last = "bar"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-bar-chart", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("barParamChanged", function HomeComponent_Template_app_bar_chart_barParamChanged_7_listener() { return ctx.onBarSelectedChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("started", function HomeComponent_Template_div_started_9_listener() { ctx.moving = "line"; return ctx.last = "none"; })("stopped", function HomeComponent_Template_div_stopped_9_listener() { ctx.moving = "none"; return ctx.last = "line"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-line-chart", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("lineParamChanged", function HomeComponent_Template_app_line_chart_lineParamChanged_10_listener() { return ctx.onLineSelectedChanged(); })("lineValueChanged", function HomeComponent_Template_app_line_chart_lineValueChanged_10_listener() { return ctx.onLineSelectedChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("started", function HomeComponent_Template_div_started_12_listener() { ctx.moving = "net"; return ctx.last = "none"; })("stopped", function HomeComponent_Template_div_stopped_12_listener() { ctx.moving = "none"; return ctx.last = "net"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "app-network", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("heatMatrixValueChanged", function HomeComponent_Template_app_network_heatMatrixValueChanged_13_listener() { return ctx.updateHeatmatrix(); })("heatMatrixParamChanged", function HomeComponent_Template_app_network_heatMatrixParamChanged_13_listener() { return ctx.updateHeatmatrix(); })("onCapitalSelected", function HomeComponent_Template_app_network_onCapitalSelected_13_listener($event) { return ctx.updateTimeseries($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("started", function HomeComponent_Template_div_started_15_listener() { ctx.moving = "alerts"; return ctx.last = "none"; })("stopped", function HomeComponent_Template_div_stopped_15_listener() { ctx.moving = "none"; return ctx.last = "alerts"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-alerts", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "app-filters", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filtersDefined", function HomeComponent_Template_app_filters_filtersDefined_19_listener($event) { return ctx.onFiltersDefined($event); })("filtersRemoved", function HomeComponent_Template_app_filters_filtersRemoved_19_listener() { return ctx.onFiltersRemoved(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-time-bar", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("chartTimeChanged", function HomeComponent_Template_app_time_bar_chartTimeChanged_21_listener($event) { return ctx.onChartTimeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isChartVisible("bar") ? ctx.chartZindex("bar") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isChartVisible("line") ? ctx.chartZindex("line") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isChartVisible("net") ? ctx.chartZindex("net") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isChartVisible("alerts") ? ctx.chartZindex("alerts") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isConfigVisible("filters") ? ctx.chartZindex("filters") : "-10");
    } }, directives: [_widgets_map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"], _bars_charts_bar_charts_bar_component__WEBPACK_IMPORTED_MODULE_6__["ChartsBarComponent"], angular2_draggable__WEBPACK_IMPORTED_MODULE_7__["AngularDraggableDirective"], _widgets_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["BarChartComponent"], _widgets_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_9__["LineChartComponent"], _widgets_network_network_component__WEBPACK_IMPORTED_MODULE_10__["NetworkComponent"], _widgets_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_11__["AlertsComponent"], _widgets_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__["FiltersComponent"], _bars_time_bar_time_bar_component__WEBPACK_IMPORTED_MODULE_13__["TimeBarComponent"]], styles: [".home[_ngcontent-%COMP%] {\n  --split: 1.0;\n  height: calc(100% - 120px);\n}\n\n.home-map-row[_ngcontent-%COMP%] {\n  height: calc(var(--split) * 100%);\n}\n\n.home-chart-row[_ngcontent-%COMP%] {\n  height: calc((1.0 - var(--split)) * 100%);\n}\n\n.widget[_ngcontent-%COMP%] {\n  z-index: 100;\n\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 5px 15px rgb(0 0 0 / 50%);\n\n  padding: 10px;\n\n  background-color: white;\n  opacity: 0.95;\n}\n\n.charts-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #bfbfbf;\n  box-shadow: 2px 3px 5px #ccc;\n\n  background-color: #fff;\n  opacity: 0.9;\n\n  top: 130px;\n  right: 10px;\n}\n\n.time-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #bfbfbf;\n  box-shadow: 2px 3px 5px #ccc;\n  background-color: #fff;\n  opacity: 0.9;\n  bottom: 30px;\n  right: 10px;\n}\n\n.configs-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #bfbfbf;\n  box-shadow: 2px 3px 5px #ccc;\n\n  background-color: #fff;\n  opacity: 0.9;\n\n  bottom: 20px;\n  left: 10px;\n}\n\n.bar-chart-window[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 180px;\n  right: 10px;\n  width: 516px;\n  height: 294px !important;\n  z-index: -10;\n}\n\n.line-chart-window[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 480px;\n  right: 10px;\n  width: 516px; \n  height: 294px !important;\n  z-index: -10;\n}\n\n.scattergl-window[_ngcontent-%COMP%], .network-window[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 180px;\n  right: 532px;\n  width: 516px;\n  height: 410px !important;\n  z-index: -10;\n}\n\n@media screen and (min-width: 1024px) {\n  .bar-chart-window[_ngcontent-%COMP%] {\n    width: 600px;\n    height: 342px !important;\n  }\n  \n  .line-chart-window[_ngcontent-%COMP%] {\n    width: 600px;\n    top: 530px;\n    height: 342px !important;\n  }\n  \n  .scattergl-window[_ngcontent-%COMP%], .network-window[_ngcontent-%COMP%] {\n    width: 600px;\n    top: 180px;\n    right: 620px;\n    height: 463px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxZQUFZOztFQUVaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsdUNBQXVDOztFQUV2QyxhQUFhOztFQUViLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNEJBQTRCOztFQUU1QixzQkFBc0I7RUFDdEIsWUFBWTs7RUFFWixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhOztFQUViLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQiw0QkFBNEI7O0VBRTVCLHNCQUFzQjtFQUN0QixZQUFZOztFQUVaLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcbiAgLS1zcGxpdDogMS4wO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMHB4KTtcbn1cblxuLmhvbWUtbWFwLXJvdyB7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1zcGxpdCkgKiAxMDAlKTtcbn1cblxuLmhvbWUtY2hhcnQtcm93IHtcbiAgaGVpZ2h0OiBjYWxjKCgxLjAgLSB2YXIoLS1zcGxpdCkpICogMTAwJSk7XG59XG5cbi53aWRnZXQge1xuICB6LWluZGV4OiAxMDA7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiKDAgMCAwIC8gNTAlKTtcblxuICBwYWRkaW5nOiAxMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjk1O1xufVxuXG4uY2hhcnRzLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjYmZiZmJmO1xuICBib3gtc2hhZG93OiAycHggM3B4IDVweCAjY2NjO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuOTtcblxuICB0b3A6IDEzMHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLnRpbWUtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjYmZiZmJmO1xuICBib3gtc2hhZG93OiAycHggM3B4IDVweCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5jb25maWdzLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjYmZiZmJmO1xuICBib3gtc2hhZG93OiAycHggM3B4IDVweCAjY2NjO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuOTtcblxuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cblxuLmJhci1jaGFydC13aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTgwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB3aWR0aDogNTE2cHg7XG4gIGhlaWdodDogMjk0cHggIWltcG9ydGFudDtcbiAgei1pbmRleDogLTEwO1xufVxuXG4ubGluZS1jaGFydC13aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDgwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB3aWR0aDogNTE2cHg7IFxuICBoZWlnaHQ6IDI5NHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IC0xMDtcbn1cblxuLnNjYXR0ZXJnbC13aW5kb3csIC5uZXR3b3JrLXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxODBweDtcbiAgcmlnaHQ6IDUzMnB4O1xuICB3aWR0aDogNTE2cHg7XG4gIGhlaWdodDogNDEwcHggIWltcG9ydGFudDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJhci1jaGFydC13aW5kb3cge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDM0MnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5saW5lLWNoYXJ0LXdpbmRvdyB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIHRvcDogNTMwcHg7XG4gICAgaGVpZ2h0OiAzNDJweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuc2NhdHRlcmdsLXdpbmRvdywgLm5ldHdvcmstd2luZG93IHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgdG9wOiAxODBweDtcbiAgICByaWdodDogNjIwcHg7XG4gICAgaGVpZ2h0OiA0NjNweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backend: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cs7S":
/*!****************************************!*\
  !*** ./src/app/shared/util.service.ts ***!
  \****************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global.service */ "H2Bz");


class UtilService {
    constructor(global) {
        this.global = global;
    }
    /**
     * Converte "tile" em longitude.
     */
    tile2long(x, z) {
        return (x / Math.pow(2, z) * 360 - 180);
    }
    /**
     * Converte "tile" em latitude.
     */
    tile2lat(y, z) {
        var n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
        return (180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))));
    }
    /**
     * Converte "tile" em longitude média.
     */
    tile2longX(x, z) {
        let c1 = this.tile2long(x, z);
        let c2 = this.tile2long(x + 1, z);
        return (c1 + c2) / 2;
    }
    /**
     * Converte "tile" em latitude média.
     */
    tile2latX(x, z) {
        let c1 = this.tile2lat(x, z);
        let c2 = this.tile2lat(x + 1, z);
        return (c1 + c2) / 2;
    }
    /**
     * Ajusta o intervalo da série temporal.
     */
    time_nice(t0, t1) {
        let dt0 = new Date(0); // The 0 there is the key, which sets the date to the epoch
        let Y0, M0, D0, h0, m0, s0;
        dt0.setUTCSeconds(t0);
        s0 = dt0.getSeconds();
        m0 = dt0.getMinutes();
        h0 = dt0.getHours();
        D0 = dt0.getDate();
        M0 = dt0.getMonth();
        Y0 = dt0.getFullYear();
        let dt1 = new Date(0); // The 0 there is the key, which sets the date to the epoch
        let Y1, M1, D1, h1, m1, s1;
        dt1.setUTCSeconds(t0);
        s1 = dt1.getSeconds();
        m1 = dt1.getMinutes();
        h1 = dt1.getHours();
        D1 = dt1.getDate();
        M1 = dt1.getMonth();
        Y1 = dt1.getFullYear();
        let d = t1 - t0;
        let changed = 0;
        if (d < 180) {
            if (s0 > 0) {
                t0 -= s0;
                s0 = 0;
                changed = 1;
            }
            if (s1 > 0) {
                t1 += 60 - s1;
                s1 = 0;
                changed = 1;
            }
        }
        else if (d < 600) {
            if (s0 > 0) {
                t0 -= s0;
                s0 = 0;
                changed = 1;
            }
            if (s1 > 0) {
                t1 += 60 - s1;
                s1 = 0;
                changed = 1;
            }
            let x;
            x = m0 % 5;
            if (x != 0) {
                t0 -= x * 60;
                m0 -= x;
                changed = 1;
            }
            x = m1 % 5;
            if (x != 0) {
                t1 -= x * 60;
                m1 -= x;
                changed = 1;
            }
        }
        if (changed) {
            let o0 = new Date(0);
            o0.setSeconds(s0);
            o0.setMinutes(m0);
            o0.setHours(h0);
            o0.setDate(D0);
            o0.setMonth(M0);
            o0.setFullYear(Y0);
            let o1 = new Date(0);
            o1.setSeconds(s1);
            o1.setMinutes(m1);
            o1.setHours(h1);
            o1.setDate(D1);
            o1.setMonth(M1);
            o1.setFullYear(Y1);
        }
        return { t0: t0, t1: t1 };
    }
    /**
     * Difine o intervalo de Y no gráfico inferior.
     */
    compute_best_unity(mn, mx) {
        let div = 1;
        let potencia = 0;
        for (let i = 0; i < 20; i++) {
            if (mx / div < 100) {
                break;
            }
            potencia++;
            div *= 10;
        }
        potencia -= potencia % 3;
        div = 1;
        for (let i = 0; i < potencia; i++)
            div *= 10;
        let prefixos = ["", "K x ", "M x ", "G x ", "T x ", "E x ", "P x "];
        let prefixo = prefixos[potencia / 3];
        let res = { prefix: prefixo, div: div, log: -1 };
        // logaritmica ou nao
        if (mn && mx / (mn + 1) > 1000) {
            res.log = 1;
        }
        else {
            res.log = 0;
        }
        return res;
    }
    /**
     * Converte segundos em data.
     */
    secondsToDate(seconds) {
        var date = new Date(0);
        date.setUTCSeconds(seconds);
        return date;
    }
    /**
     * Recupera URL base.
     */
    getUrlBase() {
        var getUrl = window.location;
        return getUrl.protocol + "//" + getUrl.host;
    }
    /**
     * Exibe o json usado nas requisições a API.
     */
    showTrace(title, json) {
        let trace_mode = this.global.getGlobal("trace_mode");
        if (trace_mode.value) {
            console.log(title);
            console.log(JSON.stringify(json));
        }
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"])); };
UtilService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H2Bz":
/*!******************************************!*\
  !*** ./src/app/shared/global.service.ts ***!
  \******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _assets_capitais_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/capitais.json */ "de2y");
var _assets_capitais_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/capitais.json */ "de2y", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GlobalService {
    constructor() {
        this.init();
    }
    init() {
        /**
         * Esquema usado para o armazenamento dos dados
         */
        const schema_info = {
            key: "schema_info",
            value: {}
        };
        this.setGlobal(schema_info);
        /**
         * Id da consulta usado pelo tiny cubes
         */
        const query_id = {
            key: "query_id",
            value: 1
        };
        this.setGlobal(query_id);
        /**
         * Elementos ativos nos gráficos
         */
        const active_chart_elements = {
            key: "active_chart_elements",
            value: []
        };
        this.setGlobal(active_chart_elements);
        /**
         * Domínio temporal dos dados.
         */
        const bounds_time = {
            key: "bounds_time",
            value: false
        };
        this.setGlobal(bounds_time);
        /**
         * Domínio espacial dos dados.
         */
        const bounds_geo = {
            key: "bounds_geo",
            value: false
        };
        this.setGlobal(bounds_geo);
        /**
         * Estabelece uma constante para um valor de zoom no mapa.
         */
        const geo_extra_zoom = {
            key: "geo_extra_zoom",
            value: 5
        };
        this.setGlobal(geo_extra_zoom);
        /**
         * Guarda o time inicial nas visualizações.
         */
        const t0_vis = {
            key: "t0_vis",
            value: undefined
        };
        this.setGlobal(t0_vis);
        /**
         * Guarda o time final nas visualizações.
         */
        const t1_vis = {
            key: "t1_vis",
            value: undefined
        };
        this.setGlobal(t1_vis);
        /**
         * Guarda o time inicial usado no filtro.
         */
        const t0_filter = {
            key: "t0_filter",
            value: undefined
        };
        this.setGlobal(t0_filter);
        /**
         * Guarda o time final usado no filtro.
         */
        const t1_filter = {
            key: "t1_filter",
            value: undefined
        };
        this.setGlobal(t1_filter);
        /**
         * Mapa de labels do barchart.
         */
        const label_maps = {
            key: "label_maps",
            value: {
                'ttls': {},
                'services': {}
            }
        };
        this.setGlobal(label_maps);
        /**
         * Guarda o parametro selecionado no network chart quando mudado para heatmatrix ou timeseries
         */
        const network_param = {
            key: "network_param",
            value: 1
        };
        this.setGlobal(network_param);
        /**
         * Guarda as opções de from do bar chart.
         */
        const bar_params = {
            key: "bar_params",
            value: [
                { id: 'ttls', from: 'ttls', groupBy: 'ttl', select: ["hsum"] },
                { id: 'services', from: 'serv', groupBy: 'serv', select: ["hsum"] }
            ]
        };
        this.setGlobal(bar_params);
        /**
         * Guarda a seleção de from do bar chart.
         */
        const bar_params_value = {
            key: "bar_params_value",
            value: bar_params.value[0].id
        };
        this.setGlobal(bar_params_value);
        /**
         * Guarda as opções de from do line chart.
         */
        const line_params = {
            key: "line_params",
            value: [
                { id: 'packet_rate', from: 'ttls', groupBy: 'time', select: ['hsum'], caption: 'packet rate' },
                { id: 'dns_in', from: 'dns', groupBy: 'time', select: ['total_ireq', 'total_ireq_off'], caption: 'dns requests received w/o answer' },
                { id: 'dns_out', from: 'dns', groupBy: 'time', select: ['total_oreq', 'total_oreq_off'], caption: 'dns requests sent w/o answer' },
            ]
        };
        this.setGlobal(line_params);
        /**
         * Guarda a seleção de from do line chart.
         */
        const line_params_value = {
            key: "line_params_value",
            value: line_params.value[0].id
        };
        this.setGlobal(line_params_value);
        /**
         * Guarda a seleção de average, max, min selecionado no line chart.
         */
        const line_selected_params_value = {
            key: "line_selected_params_value",
            value: 'average'
        };
        this.setGlobal(line_selected_params_value);
        /**
         * Guarda a seleção dos parametros para a heatmatrix
         */
        const heatmatrix_param = {
            key: "heatmatrix_param",
            value: "10",
        };
        this.setGlobal(heatmatrix_param);
        /**
         * Guarda a seleção dos valores para a heatmatrix
         */
        const heatmatrix_value = {
            key: "heatmatrix_value",
            value: "h_avg",
        };
        this.setGlobal(heatmatrix_value);
        /**
        * Guarda a seleção dos valores para a heatmatrix
        */
        const scattergl_options = {
            key: "scattergl_options",
            value: 0,
            param: 0,
            invert: true
        };
        this.setGlobal(scattergl_options);
        /**
         * Estabelece uma lista de cores.
         */
        const draw_colors = {
            key: "draw_colors",
            value: [
                '#1F77B4', '#2CA02C', '#9467BD', '#8C564B', '#E377C2',
                '#AEC7E8', '#98DF8A', '#C5B0D5', '#C49C94', '#F7B6D2'
            ]
        };
        this.setGlobal(draw_colors);
        /**
         * Lista de cores usadas.
         */
        const used_draw_colors = {
            key: "used_draw_colors",
            value: []
        };
        this.setGlobal(used_draw_colors);
        /**
         * Guarda a cor atual.
         */
        const draw_color_index = {
            key: "draw_color_index",
            value: 0
        };
        this.setGlobal(draw_color_index);
        /**
         * Guarda a cor do elemento não selecionado.
         */
        const unselected_color = {
            key: 'unselected_color',
            value: '##CCC'
        };
        this.setGlobal(unselected_color);
        /**
         * Guarda a as capitais e suas localizações.
         */
        const state_capitals = {
            key: 'state_capitals',
            value: _assets_capitais_json__WEBPACK_IMPORTED_MODULE_0___namespace
        };
        this.setGlobal(state_capitals);
        /**
         * Guarda se o click foi no botão de reset zoom ou algum pin de capital
         */
        const clicked_element = {
            key: 'clicked_element',
            value: -1
        };
        this.setGlobal(clicked_element);
        /**
         * Guarda a cor do filtro.
         */
        const filter_color = {
            key: 'filter_color',
            value: '#FF7F0E'
        };
        this.setGlobal(filter_color);
        /**
         * Guarda a cor do outlier.
         */
        const outlier_color = {
            key: 'outlier_color',
            value: '#D62728'
        };
        this.setGlobal(outlier_color);
        /**
         * Guarta a lista de clientes
         */
        const list_clientes = {
            key: "list_clientes",
            value: []
        };
        this.setGlobal(list_clientes);
        /**
         * Guarda a lista de ips
         */
        const list_ips = {
            key: "list_ips",
            value: []
        };
        this.setGlobal(list_ips);
        /**
         * Estado das janelas dos gráficos
         */
        const widgets_charts = {
            key: "widgets_charts",
            value: { 'line': false, 'bar': false, 'alerts': false, 'hasAlert': false, 'net': false }
        };
        this.setGlobal(widgets_charts);
        /**
         * Estado das janelas de configuração
         */
        const widgets_config = {
            key: "widgets_config",
            value: { 'filters': false }
        };
        this.setGlobal(widgets_config);
        /**
         * Modo de debug.
         */
        const trace_mode = {
            key: "trace_mode",
            value: true
        };
        this.setGlobal(trace_mode);
    }
    /**
     * Recupera a variavél global gravada na sessão.
     */
    getGlobal(key) {
        // invalid key
        if (key === null) {
            console.log(`getGlobal --> Ivalid key: ${key}`);
            return undefined;
        }
        // item not found
        const value = sessionStorage.getItem(key);
        if (value === null) {
            console.log(`getGlobal --> Key not found: ${key}`);
            return undefined;
        }
        return JSON.parse(value);
    }
    /**
     * Grava a varavél global na sessão.
     */
    setGlobal(object) {
        sessionStorage.setItem(object.key, JSON.stringify(object));
    }
}
GlobalService.ɵfac = function GlobalService_Factory(t) { return new (t || GlobalService)(); };
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "K4GV":
/*!*********************************************************!*\
  !*** ./src/app/bars/charts-bar/charts-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: ChartsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsBarComponent", function() { return ChartsBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");


class ChartsBarComponent {
    constructor(global) {
        this.global = global;
    }
    ngOnInit() { }
    toggleChartVisibility(chartId) {
        const obj = this.global.getGlobal('widgets_charts');
        obj.value[chartId] = !obj.value[chartId];
        this.global.setGlobal(obj);
    }
    isChartVisible(chartId) {
        const obj = this.global.getGlobal('widgets_charts');
        return obj.value[chartId];
    }
    setChartsPosition() {
        const obj = this.global.getGlobal('widgets_charts').value;
        const barDiv = document.querySelectorAll(".bar-chart-window")[0];
        const lineDiv = document.querySelectorAll(".line-chart-window")[0];
        const netDiv = document.querySelectorAll(".network-window")[0];
    }
    setAlertColor() {
        const obj = this.global.getGlobal('widgets_charts');
        if (obj.value['hasAlert']) {
            return '#F51720';
        }
        else {
            if (obj.value['alerts'])
                return '#243d8f';
            else
                return '#000';
        }
    }
    toggleConfigVisibility(configId) {
        const obj = this.global.getGlobal('widgets_config');
        obj.value[configId] = !obj.value[configId];
        this.global.setGlobal(obj);
    }
    isConfigVisible(configId) {
        const obj = this.global.getGlobal('widgets_config');
        return obj.value[configId];
    }
}
ChartsBarComponent.ɵfac = function ChartsBarComponent_Factory(t) { return new (t || ChartsBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"])); };
ChartsBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartsBarComponent, selectors: [["app-charts-bar"]], decls: 11, vars: 10, consts: [[1, "row", 3, "click"], ["type", "button", 1, "btn", "btn-custom", 3, "click"], ["id", "alerts", 1, "fas", "fa-exclamation", "fa-lg"], [1, "fas", "fa-cog", "fa-lg"], [1, "fas", "fa-chart-bar", "fa-lg"], [1, "fas", "fa-line-chart", "fa-lg"], [1, "fas", "fa-project-diagram", "fa-lg"]], template: function ChartsBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_div_click_0_listener() { return ctx.setChartsPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_1_listener() { return ctx.toggleChartVisibility("alerts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_3_listener() { return ctx.toggleConfigVisibility("filters"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_5_listener() { return ctx.toggleChartVisibility("bar"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_7_listener() { return ctx.toggleChartVisibility("line"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_9_listener() { return ctx.toggleChartVisibility("net"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.setAlertColor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.isConfigVisible("filters") ? "#243d8f" : "#000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.isChartVisible("bar") ? "#243d8f" : "#000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.isChartVisible("line") ? "#243d8f" : "#000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.isChartVisible("net") ? "#243d8f" : "#000");
    } }, styles: [".btn-custom[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #fff;\n  outline-color: #fff !important;\n  border-color: #fff !important;\n}\n\n\n.btn-custom[_ngcontent-%COMP%]:hover {\n  background-color: #eee !important;\n  outline-color: #eee !important;\n  border-color: #eee !important;\n}\n\n\n.btn-custom[_ngcontent-%COMP%]:target, .btn-custom[_ngcontent-%COMP%]:active, .btn-custom[_ngcontent-%COMP%]:visited {\n  background-color: #fff !important;\n  outline-color: #fff !important;\n  border-color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0cy1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0I7OztBQUdBO0VBQ0UsaUNBQWlDO0VBQ2pDLDhCQUE4QjtFQUM5Qiw2QkFBNkI7QUFDL0I7OztBQUVBOzs7RUFHRSxpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJjaGFydHMtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5idG4tY3VzdG9tIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdXRsaW5lLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5cbi5idG4tY3VzdG9tOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xuICBvdXRsaW5lLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWN1c3RvbTp0YXJnZXQsXG4uYnRuLWN1c3RvbTphY3RpdmUsXG4uYnRuLWN1c3RvbTp2aXNpdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBvdXRsaW5lLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuIl19 */"] });


/***/ }),

/***/ "Kb4X":
/*!******************************************************!*\
  !*** ./src/app/widgets/filters/filters.component.ts ***!
  \******************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api.service */ "eokG");
/* harmony import */ var src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/util.service */ "Cs7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["clientsInput"];
function FiltersComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 21);
} if (rf & 2) {
    const el_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", el_r2.caption);
} }
class FiltersComponent {
    constructor(global, api, util) {
        this.global = global;
        this.api = api;
        this.util = util;
        this.filtersDefined = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filtersRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clients = [];
        this.clientsSelection = [];
        this.dateRange = { start: null, end: null };
    }
    ngOnInit() {
        this.clients = this.global.getGlobal('list_clientes').value;
    }
    toggleFiltersVisibility() {
        const obj = this.global.getGlobal('widgets_config');
        obj.value['filters'] = !obj.value['filters'];
        this.global.setGlobal(obj);
    }
    getClients() {
        let list = [];
        list.push("cliente");
        list.push("eq");
        this.clientsSelection.forEach((client) => {
            let found = this.clients.items.find((c) => c.caption === client);
            if (found) {
                list.push(parseInt(found.cod));
            }
        });
        return list;
    }
    updateClientSelection(event) {
        this.clientsSelection = event.target.value.split(',').filter((d) => d.length > 0);
    }
    getStartDate() {
        let tsT0 = this.global.getGlobal("t0_filter");
        let start = new Date(tsT0.value * 1000);
        return start.toISOString().slice(0, -8).replace('T', ' # ');
    }
    getEndDate() {
        let tsT1 = this.global.getGlobal("t1_filter");
        let end = new Date(tsT1.value * 1000);
        return end.toISOString().slice(0, -8).replace('T', ' # ');
    }
    updateDate(dateId, event) {
        this.dateRange[dateId] = event.target.value;
    }
    saveDate() {
        let tsT0 = this.global.getGlobal("t0_filter");
        let tsT1 = this.global.getGlobal("t1_filter");
        if (this.dateRange['start']) {
            const parts = this.dateRange['start'].split(' # ');
            let start = new Date(`${parts[0]}T${parts[1]}:00Z`).getTime() / 1000;
            if (start > tsT1.value) {
                console.log('Invalid Filter Date: end < start.');
                return;
            }
            tsT0.value = start;
            this.global.setGlobal(tsT0);
        }
        if (this.dateRange['end']) {
            const parts = this.dateRange['end'].split(' # ');
            let end = new Date(`${parts[0]}T${parts[1]}:00Z`).getTime() / 1000;
            if (end < tsT0.value) {
                console.log('Invalid Filter Date: end < start.');
                return;
            }
            tsT1.value = end;
            this.global.setGlobal(tsT1);
        }
    }
    saveFilters() {
        if (!this.clientsSelection.length) {
            console.log('Invalid Filter: empity client list.');
            return;
        }
        const clientsList = this.clients.items;
        const selectedClients = this.clientsSelection;
        const clientsData = [];
        for (let i = 0; i < selectedClients.length; i++) {
            let client = clientsList.find((x) => x.caption === selectedClients[i]);
            clientsData.push(client);
        }
        ;
        this.saveDate();
        this.toggleFiltersVisibility();
        this.filtersDefined.emit(clientsData);
    }
    removeFilters() {
        let t0 = this.global.getGlobal("t0_filter");
        let start = new Date(t0.value * 1000);
        this.dateRange['start'] = start.toISOString().slice(0, -8).replace('T', ' # ');
        let t1 = this.global.getGlobal("t1_filter");
        let end = new Date(t1.value * 1000);
        this.dateRange['end'] = end.toISOString().slice(0, -8).replace('T', ' # ');
        this.clientsSelection = [];
        this.clientsInput.nativeElement.value = '';
        this.saveDate();
        this.toggleFiltersVisibility();
        this.filtersRemoved.emit();
    }
    onClickRefresh() {
        const bnds = this.global.getGlobal("bounds_time");
        const tsT0 = this.global.getGlobal("t0_filter");
        const tsT1 = this.global.getGlobal("t1_filter");
        tsT0.value = bnds.value[0];
        tsT1.value = bnds.value[1];
        this.global.setGlobal(tsT0);
        this.global.setGlobal(tsT1);
    }
    refreshAvailable() {
        const bnds = this.global.getGlobal("bounds_time");
        const tsT0 = this.global.getGlobal("t0_filter");
        const tsT1 = this.global.getGlobal("t1_filter");
        return bnds.value[0] !== tsT0.value || bnds.value[1] !== tsT1.value;
    }
}
FiltersComponent.ɵfac = function FiltersComponent_Factory(t) { return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"])); };
FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiltersComponent, selectors: [["app-filters"]], viewQuery: function FiltersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clientsInput = _t.first);
    } }, outputs: { filtersDefined: "filtersDefined", filtersRemoved: "filtersRemoved" }, decls: 32, vars: 5, consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title", "ng-binding"], [1, "modal-body"], [1, "row"], ["type", "email", "list", "clientes", "multiple", "", "title", "", "pattern", "", 2, "width", "100%", 3, "keyup"], ["clientsInput", ""], ["id", "clientes"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", 2, "height", "5px"], [1, "input-group", "input-daterange"], ["type", "text", 1, "form-control", 3, "value", "keyup"], [1, "input-group-addon"], [1, "input-group-addon", 2, "padding", "0"], [1, "btn", "btn-filter", 3, "click"], [1, "fas", "fa-sync-alt", "fa-lg"], [1, "row", 2, "height", "20px"], [1, "modal-footer", 2, "padding-right", "0"], ["type", "button", 1, "btn", "btn-primary-color", 3, "click"], ["type", "button", 1, "btn", "btn-delete-color", 3, "click"], ["type", "button", 1, "btn", "btn-secondary-color", 3, "click"], [3, "value"]], template: function FiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FiltersComponent_Template_input_keyup_8_listener($event) { return ctx.updateClientSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "datalist", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FiltersComponent_option_11_Template, 1, 1, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FiltersComponent_Template_input_keyup_17_listener($event) { return ctx.updateDate("start", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FiltersComponent_Template_input_keyup_20_listener($event) { return ctx.updateDate("end", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_22_listener() { return ctx.onClickRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_26_listener() { return ctx.saveFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_28_listener() { return ctx.removeFilters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_button_click_30_listener() { return ctx.toggleFiltersVisibility(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clients.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.getStartDate());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.getEndDate());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.refreshAvailable() ? "#F97432" : "#AAAAAA");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".btn-filter[_ngcontent-%COMP%]{\n  padding: 6px 12px;\n  color: #AAAAAA;\n  background-color: #fff;\n  outline-color: #fff !important;\n  height: 32px !important;;\n}\n\n.btn-filter[_ngcontent-%COMP%]:hover {\n  background-color: #eee !important;\n  outline-color: #eee !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLFlBQVk7QUFDZCIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWZpbHRlcntcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGNvbG9yOiAjQUFBQUFBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdXRsaW5lLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50Oztcbn1cblxuLmJ0bi1maWx0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ "Krjr":
/*!****************************************************!*\
  !*** ./src/app/widgets/alerts/alerts.component.ts ***!
  \****************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api.service */ "eokG");
/* harmony import */ var src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/util.service */ "Cs7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AlertsComponent_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ip_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("OTHERS: ", ip_r1[0], "");
} }
class AlertsComponent {
    constructor(global, api, util) {
        this.global = global;
        this.api = api;
        this.util = util;
        this.ipsList = [];
    }
    ngOnInit() {
        const ips = this.global.getGlobal('list_ips');
        const t0_vis = this.global.getGlobal('t0_vis').value * 1000;
        const t1_vis = this.global.getGlobal('t1_vis').value * 1000;
        for (let i = 0; i < ips.value.length; i++) {
            let t0_ip = new Date(ips.value[i][1]).getTime();
            let t1_ip = new Date(ips.value[i][2]).getTime();
            //if(t0_ip >= t0_vis && t1_ip <= t1_vis) this.ipsList.push(ips.value[i]);
            if (ips.value[i][3] == 1)
                this.ipsList.push(ips.value[i]);
        }
        ;
        if (this.ipsList.length) {
            const obj = this.global.getGlobal('widgets_charts');
            // obj.value['alerts'] = !obj.value['alerts'];
            obj.value['hasAlert'] = true;
            this.global.setGlobal(obj);
        }
    }
    toggleFiltersVisibility() {
        const obj = this.global.getGlobal('widgets_charts');
        obj.value['alerts'] = !obj.value['alerts'];
        this.global.setGlobal(obj);
    }
}
AlertsComponent.ɵfac = function AlertsComponent_Factory(t) { return new (t || AlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"])); };
AlertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertsComponent, selectors: [["app-alerts"]], decls: 14, vars: 1, consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title", "ng-binding"], [1, "modal-body"], [1, "row"], [1, "table-striped", "customTable", 2, "width", "100% !important"], [2, "height", "30px"], ["style", "height: 30px", 4, "ngFor", "ngForOf"]], template: function AlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Unknown IPs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AlertsComponent_tr_12_Template, 3, 1, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ipsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".customTable[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]{\n  height:150px !important;\n  max-height:150px !important;\n  overflow-y:scroll;\n  width: 100%;\n}\n\n.customTable[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\n  display:block;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  border-radius: 2px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background:#AAA;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSxVQUFVO0FBQ1o7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUNYO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFsZXJ0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbVRhYmxlID4gdGJvZHl7XG4gIGhlaWdodDoxNTBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OjE1MHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbVRhYmxlID4gdGhlYWQsdGJvZHksdHIsdGQsdGh7XG4gIGRpc3BsYXk6YmxvY2s7XG59XG5cbi8qIHdpZHRoICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6I0FBQTtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzk5OTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "PK+9":
/*!********************************************!*\
  !*** ./src/app/widgets/network/network.ts ***!
  \********************************************/
/*! exports provided: Network, Timeseries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeseries", function() { return Timeseries; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var d3_tip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-tip */ "agSX");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "m0r1");



class Network {
    constructor(chartDiv) {
        // chart data
        this._data = null;
        // capitals
        this._capitals = null;
        // params
        this._isTime = false;
        this._invert = false;
        this._capitalId = 0;
        // Svg element
        this._svgCanvas = null;
        // Group element
        this._svgGroup = null;
        // margin object
        this._margin = { top: 40, right: 10, bottom: 50, left: 70 };
        // svg width
        this._width = 800;
        // charts height
        this._height = 600;
        // scales
        this._inScale = null;
        this._outScale = null;
        this._cScale = null;
        // axis
        this._xAxis = null;
        this._yAxis = null;
        // axis labels
        this._xAxisLabel = null;
        this._yAxisLabel = null;
        // title
        this._title = null;
        // last rectangle stroke added
        this._lastIndices = [];
        this._chartDiv = chartDiv;
        this.initSvgAndGroups();
        this.initScalesAndAxes();
        window.addEventListener('resize', this.resize.bind(this));
    }
    setData(data, capitals, isTime = false, invert = false, capitalId) {
        this._data = data;
        this._capitals = capitals;
        this._isTime = isTime;
        this._invert = invert;
        this._capitalId = capitalId;
    }
    render() {
        this.updateScales();
        this.updateAxes();
        this.updateLabelsAndTitle();
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
        this._svgCanvas = d3__WEBPACK_IMPORTED_MODULE_0__["select"](this._chartDiv)
            .append('svg')
            .attr('width', this._chartDiv.clientWidth)
            .attr('height', this._chartDiv.clientHeight + 26);
        // axis title
        this._svgCanvas
            .append('text')
            .attr('class', 'chart chart-title')
            .attr("transform", "translate(" + (this._width / 1.6) + " ," + (this._margin.top - 15) + ")")
            .style("text-anchor", "middle")
            .style('fill', '#8c8c8c');
        // axis label groups
        this._svgCanvas
            .append('text')
            .attr('class', 'axis axis--x--label')
            .attr("transform", "translate(" + (this._width / 1.6) + " ," + (this._height + this._margin.bottom + 30) + ")")
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
        this._inScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]().range([0, this._height]).paddingInner(0.1).paddingOuter(0.0);
        this._outScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleBand"]().range([0, this._width]).paddingInner(0.1).paddingOuter(0.0);
        this._cScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleSequential"](d3__WEBPACK_IMPORTED_MODULE_0__["interpolateReds"]);
        // @ts-ignore
        this._xAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](this._outScale);
        // @ts-ignore
        this._yAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisLeft"](this._outScale);
    }
    updateScales() {
        const ids = this._data.map((d) => this.getCapitalId(d[0]));
        const labelsIn = Array.from(new Set(ids));
        let labelsOut = labelsIn;
        if (this._isTime) {
            const ts = this._data.map((d) => this.valToDate(d[1]));
            labelsOut = Array.from(new Set(ts));
        }
        // @ts-ignore
        this._inScale.domain(labelsIn);
        // @ts-ignore
        this._outScale.domain(labelsOut);
        // @ts-ignore
        const all = d3__WEBPACK_IMPORTED_MODULE_0__["extent"](this._data.map((d) => d[2]).filter(e => e > 0));
        if (this._invert) {
            this._cScale.domain(all.reverse());
        }
        else {
            this._cScale.domain(all);
        }
        console.log("Color Scale", all);
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
            .style('pointer-events', 'auto');
    }
    updateRectangles() {
        // @ts-ignore
        const tip = Object(d3_tip__WEBPACK_IMPORTED_MODULE_1__["default"])()
            .attr('class', 'd3-tip').html((d) => {
            return `${(d[2]).toFixed(1)}`;
        });
        this._svgCanvas.call(tip);
        const rects = this._svgGroup.selectAll(".rect_group").data([null]).join('g').attr('class', 'rect_group');
        rects.selectAll("rect")
            .data(this._data)
            .join("rect")
            .attr("x", (d) => this._outScale(this._isTime ? this.valToDate(d[1]) : this.getCapitalId(d[1])))
            .attr("y", (d) => this._inScale(this._isTime ? this.getCapitalId(d[0]) : this.getCapitalId(d[0])))
            .attr("width", this._outScale.bandwidth())
            .attr("height", this._inScale.bandwidth())
            .attr("fill", (d) => this.valToColor(d))
            .attr("id", (d, i) => i)
            .on('mouseover', (e, d) => tip.show(d, e.target))
            .on('mouseout', (e, d) => tip.hide(d, e.target));
    }
    highlightRectangle(indices) {
        if (this._lastIndices.length > 0) {
            for (let i = 0; i < this._lastIndices.length; i++) {
                this._svgGroup.select('[id="' + this._lastIndices[i] + '"]')
                    .attr("stroke", "none");
            }
        }
        for (let i = 0; i < indices.length; i++) {
            this._svgGroup.select('[id="' + indices[i] + '"]')
                .attr("stroke", "#333")
                .attr('stroke-width', '2');
        }
        this._lastIndices = indices;
    }
    removeRectangleHighlight() {
        if (this._lastIndices.length > 0) {
            for (let i = 0; i < this._lastIndices.length; i++) {
                this._svgGroup.select('[id="' + this._lastIndices[i] + '"]')
                    .attr("stroke", "none");
            }
        }
        this._lastIndices = [];
    }
    updateLabelsAndTitle() {
        if (this._isTime) {
            const popId = this.getCapitalId(this._capitalId);
            this._xAxisLabel = 'Tempo';
            this._yAxisLabel = 'Pop de chegada';
            this._title = 'Medição do pop ' + popId + ' para os demais pops ao longo do tempo';
        }
        else {
            this._capitalId = 0;
            this._xAxisLabel = 'Pop de chegada';
            this._yAxisLabel = 'Pop de saída';
            this._title = 'Medição entre pops';
        }
        this._svgCanvas.select('.axis--x--label')
            .text(this._xAxisLabel);
        this._svgCanvas.select('.axis--y--label')
            .text(this._yAxisLabel);
        this._svgCanvas.select('.chart-title')
            .text(this._title);
    }
    updateLegend() {
        //remove antiga legenda e ticks
        this._svgCanvas.select(".legend-scale").remove();
        this._svgCanvas.select("defs").remove();
        this._svgCanvas.select("#linear-gradient").remove();
        this._svgCanvas.select("#legend").remove();
        const defs = this._svgCanvas
            .append('defs');
        const linearGradient = defs
            .append('linearGradient')
            .attr('id', 'linear-gradient');
        linearGradient.selectAll('stop')
            .data(this._cScale.ticks().map((t, i, n) => ({ offset: `${100 * i / n.length}%`, color: this._cScale(t) })))
            .enter().append('stop')
            .attr('offset', (d) => d.offset)
            .attr('stop-color', (d) => d.color);
        this._svgCanvas
            .append('g')
            .attr('id', 'legend')
            .attr("transform", "translate(" + (this._width * 0.05) + " ," + (this._height + this._margin.bottom + 42) + ")")
            .append("rect")
            .attr('transform', "translate(" + this._margin.left + " ," + 0 + ")")
            .attr("width", this._width - this._margin.right - this._margin.left)
            .attr("height", 12)
            .style('fill', 'url(#linear-gradient)');
        const legendScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
            .domain(this._cScale.domain())
            .range([this._margin.left, this._width - this._margin.right]);
        this._svgCanvas
            .append('g')
            .attr("class", "legend-scale")
            .attr("transform", "translate(" + (this._width * 0.05) + " ," + (this._height + this._margin.bottom + 42) + ")")
            .call(d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"](legendScale)
            .ticks(this._width / 100)
            .tickSize(12));
        this._svgCanvas.selectAll(".legend-scale line")
            .attr("stroke", "#fff");
        this._svgCanvas.select(".legend-scale path")
            .attr("stroke", "#fff");
    }
    getCapitalId(id) {
        return this._capitals.filter((c) => c.cod === id)[0].id.toUpperCase();
    }
    valToColor(d) {
        if (d[2] === 0) {
            return "#333";
        }
        return this._cScale(d[2]);
    }
    valToDate(d) {
        const data = new Date(1000 * d);
        //@ts-ignore
        return data.toLocaleString('en-US', { dateStyle: 'short', timeZone: 'UTC' });
    }
}
class Timeseries {
    constructor(canvas) {
        // capitals
        this.capitals = null;
        // labels 
        this.labels = null;
        this.data = null;
        this.canvas = canvas;
        this.init();
    }
    //Configuração do grafico
    init() {
        if (this.canvas === undefined) {
            return;
        }
        //Registra os elementos utilizados pelo grafico
        chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].register(chart_js__WEBPACK_IMPORTED_MODULE_2__["PointElement"], chart_js__WEBPACK_IMPORTED_MODULE_2__["LineElement"], chart_js__WEBPACK_IMPORTED_MODULE_2__["LineController"], chart_js__WEBPACK_IMPORTED_MODULE_2__["CategoryScale"], chart_js__WEBPACK_IMPORTED_MODULE_2__["LinearScale"], chart_js__WEBPACK_IMPORTED_MODULE_2__["Legend"], chart_js__WEBPACK_IMPORTED_MODULE_2__["Tooltip"]);
        chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"].defaults.animation = false;
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](this.canvas, {
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
                            display: true,
                            text: 'Pop de chegada'
                        }
                    }
                }
            }
        });
    }
    //Modifica as configurações globais para os títulos
    setTitle(id) {
        this.chart.options.plugins.legend.title.text = this.getCapitalId(id);
    }
    setCapitals(capitals) {
        this.capitals = capitals;
    }
    updateData(data, colorList) {
        const datasets = this.chart.config.data.datasets;
        for (let i = 0; i < data.length; i++) {
            const newData = {
                label: this.getCapitalId(data[i][0]),
                data: data[i][1],
                backgroundColor: colorList[i],
                borderColor: colorList[i],
                fill: false
            };
            datasets.push(newData);
        }
        this.chart.update();
    }
    setLabels(labels) {
        this.chart.config.data.labels = labels;
    }
    getCapitalId(id) {
        return this.capitals.filter((c) => c.cod === id)[0].id.toUpperCase();
    }
    clear() {
        this.chart.data.labels = [];
        this.chart.data.datasets = [];
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


/***/ }),

/***/ "SfxP":
/*!******************************************************!*\
  !*** ./src/app/widgets/network/network.component.ts ***!
  \******************************************************/
/*! exports provided: NetworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkComponent", function() { return NetworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network */ "PK+9");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/util.service */ "Cs7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");








const _c0 = ["netChart"];
const _c1 = ["timeseriesChart"];
function NetworkComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-multiselect-dropdown", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function NetworkComponent_div_120_Template_ng_multiselect_dropdown_onSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onCapitalSelect($event, true); })("onDeSelect", function NetworkComponent_div_120_Template_ng_multiselect_dropdown_onDeSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onCapitalSelect($event, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.isTimeseriesSelected())("placeholder", "Estados")("settings", ctx_r2.dropdownSettings)("data", ctx_r2.dropdownList);
} }
class NetworkComponent {
    constructor(global, util) {
        this.global = global;
        this.util = util;
        this.heatMatrixValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.heatMatrixParamChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCapitalSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //capitals select list
        this.selectedCapitals = [];
        //lista de cores
        this.drawColors = [
            '#1F77B4', '#2CA02C', '#9467BD', '#8C564B', '#E377C2',
            '#AEC7E8', '#98DF8A', '#C5B0D5', '#C49C94', '#F7B6D2'
        ];
        //guarda se o chart a ser mostrado é o network ou umap
        this.networkChange = false;
        //lista de cores já usadas
        this.usedColors = [];
        //multiselect
        this.dropdownList = [];
        this.dropdownSettings = {};
    }
    ngOnInit() {
        this.netChart = new _network__WEBPACK_IMPORTED_MODULE_1__["Network"](this.netDiv.nativeElement);
        this.timeseriesChart = new _network__WEBPACK_IMPORTED_MODULE_1__["Timeseries"](this.timeseriesDiv.nativeElement);
        //setando as configuracoes do multiselect
        const capitals = this.global.getGlobal("state_capitals").value.default;
        for (let i = 0; i < capitals.length; i++) {
            let id = capitals[i].id.toUpperCase();
            let cod = capitals[i].cod;
            let obj = {};
            obj['estado'] = id;
            obj['cod'] = cod;
            this.dropdownList.push(obj);
        }
        ;
        this.dropdownSettings = {
            singleSelection: false,
            limitSelection: 10,
            idField: 'cod',
            textField: 'estado',
            enableCheckAll: false,
            unSelectAll: false,
            itemsShowLimit: 0,
            allowSearchFilter: false
        };
    }
    drawChart(data, capitals, clicked = -1, invert = false) {
        const capitalId = clicked;
        this.netChart.setData(data, capitals, clicked >= 0, invert, capitalId);
        this.netChart.render();
        this.timeseriesChart.setCapitals(capitals);
    }
    updateTimeseriesData(data, dates, capitals, clicked) {
        for (let i = 0; i < data.length; i++) {
            this.updateUsedColors(true, this.drawColors[i]);
        }
        this.timeseriesChart.clear();
        this.timeseriesChart.updateData(data, this.drawColors);
        this.timeseriesChart.setLabels(dates);
        this.timeseriesChart.setTitle(clicked);
        this.timeseriesChart.render();
    }
    onValueChange(event) {
        const heatmatrix_value = {
            key: "heatmatrix_value",
            value: event.target.value
        };
        this.global.setGlobal(heatmatrix_value);
        this.heatMatrixValueChanged.emit();
        if (!this.isTimeseriesSelected()) {
            this.onCapitalSelected.emit(this.selectedCapitals);
        }
    }
    onParamChange(event) {
        const heatmatrix_param = {
            key: "heatmatrix_param",
            value: event.target.value
        };
        this.global.setGlobal(heatmatrix_param);
        this.heatMatrixParamChanged.emit();
        if (!this.isTimeseriesSelected()) {
            this.onCapitalSelected.emit(this.selectedCapitals);
        }
    }
    onChartChange(event) {
        if (event.target.value == 'heatmatrix') {
            const network_param = {
                key: "network_param",
                value: 1
            };
            this.global.setGlobal(network_param);
        }
        else {
            const network_param = {
                key: "network_param",
                value: 0
            };
            this.global.setGlobal(network_param);
        }
    }
    networkToggle() {
        this.networkChange = !this.networkChange;
    }
    isTimeseriesSelected() {
        const network_param = this.global.getGlobal("network_param");
        return network_param.value !== 0;
    }
    onCapitalSelect(event, added) {
        if (this.selectedCapitals.includes(event.cod)) {
            const index = this.selectedCapitals.indexOf(event.cod);
            this.selectedCapitals = this.selectedCapitals.filter((e) => e !== event.cod);
            this.updateUsedColors(false, this.usedColors[index]);
        }
        else {
            this.selectedCapitals.push(event.cod);
        }
        ;
        this.onCapitalSelected.emit(this.selectedCapitals);
    }
    chartDisplay() {
        const network_param = this.global.getGlobal("network_param").value;
        //verdadeiro para heatmatrix
        if (network_param == 1)
            return [true, false];
        //verdadeiro para time series
        else
            return [false, true];
    }
    isCapitalSelected() {
        return (this.global.getGlobal("clicked_element").value > 0);
    }
    clearTimeseries() {
        this.selectedCapitals = [];
        this.timeseriesChart.clear();
    }
    /**
   * seta as cores já utilizadas
   */
    updateUsedColors(added, color) {
        if (added) {
            if (!this.usedColors.includes(color))
                this.usedColors.push(color);
        }
        else {
            this.usedColors = this.usedColors.filter((d) => d !== color);
        }
    }
    highlightHeatmatrix(indices) {
        this.netChart.highlightRectangle(indices);
    }
    removeHighlightHeatmatrix() {
        this.netChart.removeRectangleHighlight();
    }
}
NetworkComponent.ɵfac = function NetworkComponent_Factory(t) { return new (t || NetworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"])); };
NetworkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NetworkComponent, selectors: [["app-network"]], viewQuery: function NetworkComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.netDiv = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.timeseriesDiv = _t.first);
    } }, outputs: { heatMatrixValueChanged: "heatMatrixValueChanged", heatMatrixParamChanged: "heatMatrixParamChanged", onCapitalSelected: "onCapitalSelected" }, decls: 121, vars: 11, consts: [[1, "fill", "network-chart"], ["netChart", ""], [1, "fill", "timeseries-chart"], [2, "padding-bottom", "10px", "width", "100%", "height", "100%"], ["timeseriesChart", ""], [2, "display", "flex", "margin-top", "27px", "padding-bottom", "7px", "width", "100%", "border-top", "1px solid #eee", "left", "10px", "font-size", "11px !important"], ["id", "code-select-box", 1, "code-select"], ["name", "code", 1, "network-select", 3, "disabled", "change"], ["label", "Atraso e perda"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["label", "Atraso unidirecional"], ["value", "40"], ["value", "41"], ["value", "42"], ["value", "43"], ["value", "46"], ["value", "47"], ["value", "48"], ["value", "51"], ["value", "52"], ["value", "53"], ["value", "54"], ["value", "55"], ["label", "BANDA (BBR)"], ["value", "70"], ["value", "71"], ["value", "72"], ["value", "73"], ["value", "74"], ["value", "77"], ["value", "78"], ["value", "79"], ["value", "80"], ["label", "BANDA (CUBIC)"], ["value", "100"], ["value", "101"], ["value", "102"], ["value", "103"], ["value", "104"], ["value", "107"], ["value", "108"], ["value", "109"], ["value", "110"], ["label", "TraceRoute"], ["value", "130"], ["value", "131"], ["value", "132"], ["value", "133"], ["id", "codfield-select-box", 1, "codfield-select"], ["name", "codfield", 1, "network-select", 3, "change"], ["value", "h_avg"], ["value", "h_max"], ["value", "h_min"], ["id", "chart-select-box", 1, "chart-select"], ["name", "chart-selector", 1, "network-select", 3, "change"], ["value", "heatmatrix"], ["value", "timeseries", 3, "disabled"], ["id", "chart-select-box", "class", "chart-select", 4, "ngIf"], [1, "custom-font-size", "custom-radius", "custom-dropdown", "custom-dropdown-place", "custom-dropdown-rotation", 3, "disabled", "placeholder", "settings", "data", "onSelect", "onDeSelect"]], template: function NetworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NetworkComponent_Template_select_change_8_listener($event) { return ctx.onParamChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "optgroup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Failures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Atraso de ida e volta (RTT - average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Atraso de ida e volta (RTT - min)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Atraso de ida e volta (RTT - max)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Histogram-ttl-reverse (average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Histogram-ttl-reverse (min)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Histogram-ttl-reverse (max)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Packet-count-lost-bidir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Packet-count-sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Packet-duplicates-bidir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Packet-loss-rate-bidir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Packet-reorders-bidir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "optgroup", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Failures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Atraso unidirecional (owdelay - average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Atraso unidirecional (owdelay - min)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Atraso unidirecional (owdelay - max)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Histogram-ttl (average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Histogram-ttl (min)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Histogram-ttl (max)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Packet-count-lost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Packet-count-sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Packet-duplicates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Packet-loss-rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Packet-reorders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "optgroup", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Failures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Packet-retransmits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Packet-retransmits-subintervals (average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Packet-retransmits-subintervals (min)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Packet-retransmits-subintervals (max)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Throughput (BBR)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Throughput-subintervals (average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Throughput-subintervals (min)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Throughput-subintervals (max)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "optgroup", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Failures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Packet-retransmits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Packet-retransmits-subintervals (average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Packet-retransmits-subintervals (min)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Packet-retransmits-subintervals (max)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Throughput (CUBIC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Throughput-subintervals (average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Throughput-subintervals (min)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Throughput-subintervals (max)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "optgroup", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Failures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Packet-trace (average)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Packet-trace (min)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Packet-trace (max)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "select", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NetworkComponent_Template_select_change_107_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "option", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "option", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "select", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NetworkComponent_Template_select_change_115_listener($event) { return ctx.onChartChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Heatmatrix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Time Series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, NetworkComponent_div_120_Template, 2, 4, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ctx.chartDisplay()[0] ? 99 : -1)("opacity", ctx.chartDisplay()[0] ? 1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ctx.chartDisplay()[1] ? 99 : -1)("opacity", ctx.chartDisplay()[1] ? 1 : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.networkChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isCapitalSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCapitalSelected());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["MultiSelectComponent"]], styles: [".network-chart[_ngcontent-%COMP%] {\n    height: 327px;\n}\n\n.timeseries-chart[_ngcontent-%COMP%] {\n    height: 327px;\n    position: absolute;\n    width: 494px;\n    top: 10px;\n}\n\n.network-select[_ngcontent-%COMP%] {\n    font-size: 9px;\n}\n\n.code-select[_ngcontent-%COMP%] {\n    width: 164px;\n    margin-top: 7px;\n    margin-left: 17px;\n}\n\n.codfield-select[_ngcontent-%COMP%] {\n    width: 71px;\n    margin-top: 7px;\n    margin-left: 17px;\n}\n\n.chart-select[_ngcontent-%COMP%] {\n    width: 86px;\n    margin-top: 7px;\n    margin-left: 17px;\n}\n\n@media screen and (min-width: 1024px) {\n    .timeseries-chart[_ngcontent-%COMP%] {\n        height: 380px;\n        top: 10px;\n        width: 578px;\n    }\n\n    .network-chart[_ngcontent-%COMP%] {\n        height: 380px;\n    }\n\n    .network-select[_ngcontent-%COMP%] {\n        font-size: 11px;\n    }\n    \n    .code-select[_ngcontent-%COMP%] {\n        width: 192px;\n    }\n    \n    .codfield-select[_ngcontent-%COMP%] {\n        width: 79px;\n    }\n\n    .chart-select[_ngcontent-%COMP%] {\n        width: 97px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldHdvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsU0FBUztRQUNULFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJuZXR3b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV0d29yay1jaGFydCB7XG4gICAgaGVpZ2h0OiAzMjdweDtcbn1cblxuLnRpbWVzZXJpZXMtY2hhcnQge1xuICAgIGhlaWdodDogMzI3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0OTRweDtcbiAgICB0b3A6IDEwcHg7XG59XG5cbi5uZXR3b3JrLXNlbGVjdCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG59XG5cbi5jb2RlLXNlbGVjdCB7XG4gICAgd2lkdGg6IDE2NHB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcbn1cblxuLmNvZGZpZWxkLXNlbGVjdCB7XG4gICAgd2lkdGg6IDcxcHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xufVxuXG4uY2hhcnQtc2VsZWN0IHtcbiAgICB3aWR0aDogODZweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC50aW1lc2VyaWVzLWNoYXJ0IHtcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogNTc4cHg7XG4gICAgfVxuXG4gICAgLm5ldHdvcmstY2hhcnQge1xuICAgICAgICBoZWlnaHQ6IDM4MHB4O1xuICAgIH1cblxuICAgIC5uZXR3b3JrLXNlbGVjdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgXG4gICAgLmNvZGUtc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDE5MnB4O1xuICAgIH1cbiAgICBcbiAgICAuY29kZmllbGQtc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDc5cHg7XG4gICAgfVxuXG4gICAgLmNoYXJ0LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA5N3B4O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bars_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bars/top-bar/top-bar.component */ "27/6");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");



class AppComponent {
    constructor() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home");
    } }, directives: [_bars_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_1__["TopBarComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "T/Ui":
/*!*****************************************************!*\
  !*** ./src/app/bars/time-bar/time-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: TimeBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeBarComponent", function() { return TimeBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");



class TimeBarComponent {
    constructor(global) {
        this.global = global;
        this.chartTimeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClickTime(delta) {
        this.chartTimeChanged.emit(delta);
    }
    refreshAvailable() {
        const bnds = this.global.getGlobal("bounds_time");
        const tsT0 = this.global.getGlobal("t0_vis");
        const tsT1 = this.global.getGlobal("t1_vis");
        return bnds.value[0] !== tsT0.value || bnds.value[1] !== tsT1.value;
    }
}
TimeBarComponent.ɵfac = function TimeBarComponent_Factory(t) { return new (t || TimeBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"])); };
TimeBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeBarComponent, selectors: [["app-time-bar"]], outputs: { chartTimeChanged: "chartTimeChanged" }, decls: 19, vars: 2, consts: [[1, "row"], [1, "btn", "btn-custom", 3, "click"], [1, "fas", "fa-fast-backward", "line-time-icon"], [1, "fas", "fa-backward", "line-time-icon"], [1, "fas", "fa-step-backward", "line-time-icon"], [1, "fas", "fa-step-forward", "line-time-icon"], [1, "fas", "fa-forward", "line-time-icon"], [1, "fas", "fa-fast-forward", "line-time-icon"], [1, "fas", "fa-search-plus", "line-time-icon"], [1, "fas", "fa-search-minus", "line-time-icon"], [1, "fas", "fa-sync-alt", "line-time-icon"]], template: function TimeBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeBarComponent_Template_button_click_1_listener() { return ctx.onClickTime(-3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeBarComponent_Template_button_click_3_listener() { return ctx.onClickTime(-2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeBarComponent_Template_button_click_5_listener() { return ctx.onClickTime(-1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeBarComponent_Template_button_click_7_listener() { return ctx.onClickTime(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeBarComponent_Template_button_click_9_listener() { return ctx.onClickTime(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeBarComponent_Template_button_click_11_listener() { return ctx.onClickTime(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeBarComponent_Template_button_click_13_listener() { return ctx.onClickTime(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeBarComponent_Template_button_click_15_listener() { return ctx.onClickTime(-4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimeBarComponent_Template_button_click_17_listener() { return ctx.onClickTime(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.refreshAvailable() ? "#F97432" : "#kkk");
    } }, styles: [".btn-custom[_ngcontent-%COMP%] {\n    color: black;\n    background-color: #fff;\n    outline-color: #fff !important;\n    border-color: #fff !important;\n}\n  \n  \n  .btn-custom[_ngcontent-%COMP%]:hover {\n    background-color: #eee !important;\n    outline-color: #eee !important;\n    border-color: #eee !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7OztFQUdFO0lBQ0UsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoidGltZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY3VzdG9tIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBvdXRsaW5lLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4gIFxuICBcbiAgLmJ0bi1jdXN0b206aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG4gICJdfQ== */"] });


/***/ }),

/***/ "Weg6":
/*!**********************************************!*\
  !*** ./src/app/widgets/map/map.component.ts ***!
  \**********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet-draw */ "INa4");
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_draw__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_heatmap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-heatmap */ "hUj/");
/* harmony import */ var leaflet_heatmap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_heatmap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet_easybutton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-easybutton */ "mD1w");
/* harmony import */ var leaflet_easybutton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_easybutton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/api.service */ "eokG");
/* harmony import */ var src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/util.service */ "Cs7S");

// inclusão de bibliotecas do angular

// inclusão do leaflet

// inclusão do leaflet draw

// inclusão do heatmap

// inclusão do leaflet easybutton





const _c0 = ["map"];
class MapComponent {
    constructor(global, api, util) {
        this.global = global;
        this.api = api;
        this.util = util;
        // eventos de desenho no mapa
        this.polyCreatedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.polyRemovedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.polyEditedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveEndedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // eventos de seleção de markers
        this.markerAddedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.markerRemovedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // evento para reset da timeseries
        this.resetTimeseries = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // lista de layers ativos
        this.listLayer = [];
        // lista dos bairros
        this.listClient = [];
        // lista com os clients selecionados no filtro para adição no mapa
        this.clientLayers = [];
        // heatmap configuration
        this.heatCfg = {
            "radius": 10.0,
            "maxOpacity": 1.0,
            "scaleRadius": false,
            "useLocalExtrema": true,
            valueField: 'count',
            gradient: {
                '0.0': '#feedde', '.2': '#fdd0a2', '.4': '#fdae6b', '.6': '#fd8d3c', '.8': '#e6550d', '1.0': '#a63603'
            }
        };
    }
    ngAfterViewInit() {
        this.setupMap();
        this.updatePolygonDrawColors();
    }
    /**
     * Configura o mapa.
     */
    //  -15.787129, -47.884329
    setupMap(lat = -15.787129, lng = -47.884329, zoom = 5) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.mapDiv === undefined) {
                return;
            }
            // inicialização do mapa
            this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__["map"](this.mapDiv.nativeElement).setView([lat, lng], zoom);
            // configuração do layer do mapa
            leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"]('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/light-v10',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(this.map);
            // Inicialização do layer do outlier
            let outlierMarker = new leaflet__WEBPACK_IMPORTED_MODULE_2__["FeatureGroup"]();
            // carregamento do dado dos clientes
            const clientes = this.global.getGlobal('list_clientes').value.items.map((d) => {
                // adciona um marcador extra
                if (d.id === "OTHERS") {
                    const outColor = this.global.getGlobal('outlier_color').value;
                    outlierMarker.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_2__["circle"]([d.lat, d.lon], 250, { color: outColor, fillColor: outColor, opacity: 1, fillOpacity: 1 }));
                }
                ;
                return {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [d.lon, d.lat]
                    },
                    "properties": d
                };
            });
            // adição dos layers clicáveis
            let capitalsMarkersLayers = new leaflet__WEBPACK_IMPORTED_MODULE_2__["FeatureGroup"]().addTo(this.map);
            const capitals = this.global.getGlobal('state_capitals').value.default;
            for (let i = 0; i < capitals.length; i++) {
                let capitalMarker = leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"]({ lat: capitals[i].latitude, lng: capitals[i].longitude }, { icon: this.capitalMarkers(capitals[i].cod) }).on("mouseup", this.capitalClick.bind(this), false);
                capitalsMarkersLayers.addLayer(capitalMarker);
            }
            // Inicialização layers dos markers dos clientes
            let clientMarkersLayers = new leaflet__WEBPACK_IMPORTED_MODULE_2__["FeatureGroup"]();
            this.geojson = leaflet__WEBPACK_IMPORTED_MODULE_2__["geoJSON"](clientes, { pointToLayer: this.clientMarker.bind(this), onEachFeature: this.onEachFeature.bind(this) });
            clientMarkersLayers.addLayer(this.geojson);
            // Inicialização dos layers editaveis
            let editableLayers = new leaflet__WEBPACK_IMPORTED_MODULE_2__["FeatureGroup"]();
            this.map.addLayer(editableLayers);
            // adição e remoção dos layers baseado no
            this.map.on('zoomend', () => {
                if (this.map.getZoom() < 9) {
                    this.map.addLayer(capitalsMarkersLayers);
                    this.map.removeLayer(clientMarkersLayers);
                    this.map.removeLayer(outlierMarker);
                }
                else {
                    this.map.removeLayer(capitalsMarkersLayers);
                    this.map.addLayer(clientMarkersLayers);
                    this.map.addLayer(outlierMarker);
                }
            });
            // Controles de desnho dos polígonos
            this.drawControl = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Control"].Draw({
                position: 'topleft',
                draw: {
                    polygon: {
                        allowIntersection: false,
                        drawError: {
                            color: '#e1e100',
                            message: '<strong>Error!<strong> you can\'t draw that!' // Message that will show when intersect
                        },
                    },
                    rectangle: {},
                    polyline: false,
                    circle: false,
                    circlemarker: false,
                    marker: false
                },
                edit: {
                    featureGroup: editableLayers,
                }
            });
            this.map.addControl(this.drawControl);
            // Eventos do mapa: criação do polígono
            this.map.on(leaflet__WEBPACK_IMPORTED_MODULE_2__["Draw"].Event.CREATED, (e) => {
                const usedColors = this.global.getGlobal("used_draw_colors");
                if (usedColors.value.length < 10) {
                    this.listLayer.push(e.layer);
                    this.updateUsedColors(true, e.layer.options.color);
                    this.polyCreatedEvent.emit(e.layer);
                    editableLayers.addLayer(e.layer);
                }
                else {
                    console.log("LIMITE DE SELEÇÃO");
                }
            });
            // Eventos do mapa: deleção do polígono
            this.map.on(leaflet__WEBPACK_IMPORTED_MODULE_2__["Draw"].Event.DELETED, (e) => {
                // remover dataset
                e.layers.eachLayer((layer) => {
                    this.polyRemovedEvent.emit(layer);
                    this.removeLayer(layer);
                    this.updateUsedColors(false, layer.options.color);
                });
            });
            // Eventos do mapa: edição do polígono
            this.map.on(leaflet__WEBPACK_IMPORTED_MODULE_2__["Draw"].Event.EDITED, (e) => {
                // update dataset
                e.layers.eachLayer((layer) => {
                    this.removeLayer(layer);
                    this.listLayer.push(e.layer);
                    this.polyEditedEvent.emit(layer);
                });
            });
            // Eventos do mapa: movimentação do mapa
            this.map.on('moveend', () => {
                this.moveEndedEvent.emit();
            });
            const global = this.global;
            const self = this;
            leaflet__WEBPACK_IMPORTED_MODULE_2__["easyButton"]('fa-redo fa-lg', function (btn, map) {
                const clicked_element = {
                    key: 'clicked_element',
                    value: -1
                };
                const network_param = {
                    key: 'network_param',
                    value: 1
                };
                global.setGlobal(clicked_element);
                global.setGlobal(network_param);
                self.resetTimeseries.emit();
                map.setView([lat, lng], zoom);
            }).addTo(this.map);
        });
    }
    /**
     * Retorna lista de poligonos.
     */
    getListLayer() {
        return this.listLayer;
    }
    /**
     * Retorna lista de clientes.
     */
    getListClient() {
        return this.listClient;
    }
    /**
     * Retorna o mapa.
     */
    getMap() {
        return this.map;
    }
    /**
     * Monta o trecho da query que define uma região geográfica
     * conforme a visualização no Mapa.
     */
    getLocation() {
        let zoom = this.getZoom();
        let bounds = this.map.getBounds();
        let c0 = bounds.getNorthEast();
        let c1 = bounds.getSouthWest();
        let list = [];
        list.push("location");
        list.push("zrect");
        list.push(zoom);
        list.push(c0.lat);
        list.push(c1.lng);
        list.push(c1.lat);
        list.push(c0.lng);
        return list;
    }
    /**
     * Monta o trecho da query que define o poligono.
     */
    getPoly(latlngs) {
        let poly = [];
        for (let i = 0; i < latlngs.length; i++) {
            poly.push([latlngs[i].lat, latlngs[i].lng]);
        }
        let list = [];
        list.push("location");
        list.push("zpoly");
        list.push(this.getZoom());
        for (let i = 0; i < poly.length; i++) {
            list.push(poly[i][0]);
            list.push(poly[i][1]);
        }
        return list;
    }
    /**
     * Monta o trecho da query que define o cliente
     */
    getClient(clientFeature) {
        let list = [];
        list.push("cliente");
        list.push("eq");
        list.push(clientFeature);
        return list;
    }
    /**
     * Retorna um zoom mais adequado ao uso nas querys.
     */
    getZoom() {
        let geoExtraZoom = this.global.getGlobal("geo_extra_zoom");
        return this.map.getZoom() - 1 + geoExtraZoom.value;
    }
    /**
     * Escolhe uma cor a partir das que já
     * foram usadas.
     */
    updateUsedColors(added, color) {
        const drawColors = this.global.getGlobal("draw_colors");
        const usedColors = this.global.getGlobal("used_draw_colors");
        // atualiza as cores usadas
        if (added) {
            usedColors.value.push(color);
        }
        else {
            usedColors.value = usedColors.value.filter((d) => d !== color);
        }
        this.global.setGlobal(usedColors);
        // atualiza o índice de cor
        let drawColorIndex = this.global.getGlobal("draw_color_index");
        for (let id = 0; id < drawColors.value.length; id++) {
            const current = drawColors.value[id];
            if (!usedColors.value.includes(current)) {
                drawColorIndex.value = id;
                break;
            }
        }
        this.global.setGlobal(drawColorIndex);
        this.updatePolygonDrawColors();
    }
    /**
    * Define a cor do retangulo e do poligono que serão desenhados no mapa.
    */
    updatePolygonDrawColors() {
        if (this.drawControl === undefined) {
            return;
        }
        let drawColors = this.global.getGlobal("draw_colors");
        let drawColorIndex = this.global.getGlobal("draw_color_index");
        this.drawControl.setDrawingOptions({
            rectangle: {
                shapeOptions: {
                    color: drawColors.value[drawColorIndex.value]
                }
            },
            polygon: {
                shapeOptions: {
                    color: drawColors.value[drawColorIndex.value]
                }
            }
        });
    }
    /**
     * Remove poligono da lista.
     */
    removeLayer(layer) {
        for (let i = 0; i < this.listLayer.length; i++) {
            if ((((layer instanceof leaflet__WEBPACK_IMPORTED_MODULE_2__["Rectangle"]) &&
                (this.listLayer[i] instanceof leaflet__WEBPACK_IMPORTED_MODULE_2__["Rectangle"])) ||
                ((layer instanceof leaflet__WEBPACK_IMPORTED_MODULE_2__["Polygon"]) &&
                    (this.listLayer[i] instanceof leaflet__WEBPACK_IMPORTED_MODULE_2__["Polygon"]))) &&
                (layer.options.color == this.listLayer[i].options.color)) {
                this.listLayer.splice(i, 1);
                break;
            }
        }
    }
    /**
     * Formata o poligono dos bairros ao clicar.
     */
    clientMarker(geoJsonPoint, latlng) {
        // @ts-ignore
        let color = this.global.getGlobal("unselected_color").value;
        return leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"](latlng, { icon: this.clientIcon(color) });
    }
    /**
     * Formata o poligono dos bairros.
     */
    clientIcon(color) {
        return leaflet__WEBPACK_IMPORTED_MODULE_2__["divIcon"]({
            className: 'custom-div-icon',
            html: `<div style='background-color:${color};' class='marker-pin'></div><i class='fa fa-circle awesome'>`,
            iconSize: [30, 42],
            iconAnchor: [15, 42],
            popupAnchor: [0, -38]
        });
    }
    /**
     * Markers das capitais dos estados.
     */
    capitalMarkers(capitalCod) {
        return leaflet__WEBPACK_IMPORTED_MODULE_2__["divIcon"]({
            className: 'custom-div-icon',
            html: `<div style='background-color:#000;' class='marker-pin' id='capital-marker' data-capital=` + capitalCod + `></div><i class='fa fa-circle awesome'>`,
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });
    }
    /**
     * Ação de click no marker da capital.
     */
    capitalClick(event) {
        // pega o id da capital referente ao marker clicado
        const clickedIcon = event.target.options.icon.options.html;
        const html = new DOMParser().parseFromString(clickedIcon, "text/html");
        const element = html.getElementById('capital-marker');
        const capitalData = element === null || element === void 0 ? void 0 : element.getAttribute('data-capital');
        let cod;
        if (capitalData)
            cod = parseInt(capitalData);
        const clicked_element = {
            key: 'clicked_element',
            value: cod
        };
        this.global.setGlobal(clicked_element);
        event.sourceTarget._map.setView([event.latlng.lat, event.latlng.lng], 12);
    }
    /**
     * Atribui eventos aos markers dos pops.
     */
    onEachFeature(feature, layer) {
        // criação do popup
        const cliente = feature.properties.caption;
        let contentPopup = '';
        if (layer.feature.properties.id == "OTHERS") {
            const size = this.global.getGlobal('list_ips').value.length;
            contentPopup = "<div>" +
                "<div style='display: block;'><b>" + cliente + " (" + size + " IPs)</b></div>" +
                "</div>";
        }
        else {
            contentPopup = "<div>" +
                "<div style='display: block;'><b>" + cliente + "</b></div>" +
                "</div>";
        }
        layer.bindPopup(contentPopup);
        // Evento de click no marker
        layer.on('click', () => {
            // default color
            let color = this.global.getGlobal("unselected_color").value;
            // searches the client
            const found = this.listClient.findIndex(d => {
                return d.cod === feature.properties.cod;
            });
            const usedColors = this.global.getGlobal("used_draw_colors");
            if (found >= 0) {
                layer.setIcon(this.clientIcon(color));
                const client = this.listClient.splice(found, 1);
                color = client[0].color;
                this.markerRemovedEvent.emit(client[0]);
                this.updateUsedColors(found < 0, color);
            }
            else {
                // libera criação de layer se tiver cor disponível
                if (usedColors.value.length < 10) {
                    let drawColors = this.global.getGlobal("draw_colors");
                    let drawColorIndex = this.global.getGlobal("draw_color_index");
                    color = drawColors.value[drawColorIndex.value];
                    layer.setIcon(this.clientIcon(color));
                    const client = {
                        cod: feature.properties.cod,
                        nome: feature.properties.id,
                        color: color,
                    };
                    this.listClient.push(client);
                    this.markerAddedEvent.emit(client);
                    this.updateUsedColors(found < 0, color);
                }
                else {
                    console.log("LIMITE DE SELEÇÃO");
                }
            }
        });
        // Evento de mouseout no marker.
        layer.on('mouseout', () => {
            const found = this.listClient.findIndex(d => {
                return d.cod === feature.properties.cod;
            });
            if (found >= 0) {
                layer.setIcon(this.clientIcon(this.listClient[found].color));
            }
            layer.closePopup();
        });
        // Evento de mouseover no marker.
        layer.on('mouseover', () => {
            layer.openPopup();
        });
    }
    /**
     * Função que desenha um heatmap a partir dos dados passados como parâmetro.
     */
    drawHeatMap(json) {
        if (json.tp == "0") {
            console.log(json);
            return;
        }
        let a = [];
        let max_v = 0;
        let min_v = Number.MAX_VALUE;
        let zoom = this.map.getZoom() - 1;
        let b = this.map.getBounds();
        let geoExtraZoom = this.global.getGlobal("geo_extra_zoom");
        for (let i = 0; i < json.result.length; i++) {
            let o = json.result[i];
            let vlat = this.util.tile2latX(o.k[0], zoom + geoExtraZoom.value);
            let vlon = this.util.tile2longX(o.k[1], zoom + geoExtraZoom.value);
            let coords = [vlat, vlon];
            vlat = coords[0];
            vlon = coords[1];
            if (!b.contains(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"](vlat, vlon)))
                continue;
            let v = Math.log(o.v[0] + 1);
            o.v[0] = o.v[0] / 1000000000;
            if (v > max_v)
                max_v = v;
            if (v < min_v)
                min_v = v;
            let o2 = { lat: vlat, lng: vlon, count: v };
            a.push(o2);
        }
        let heatData = {};
        heatData.min = min_v;
        heatData.max = max_v;
        heatData.data = a;
        if (this.current_heatmapLayer != undefined) {
            this.current_heatmapLayer.setData(heatData);
        }
        else {
            this.current_heatmapLayer = new HeatmapOverlay(this.heatCfg);
            this.current_heatmapLayer.setData(heatData);
            // desenha o heatmap apenas se o zoom for maior do que 8
            let currentHeatmapLayer = this.current_heatmapLayer;
            let map = this.map;
            this.map.on('zoomend', function () {
                if (map.getZoom() < 9) {
                    map.removeLayer(currentHeatmapLayer);
                }
                else {
                    map.addLayer(currentHeatmapLayer);
                }
            });
        }
    }
    /**
     * Função que adiciona os markers do filtro ao mapa
     */
    drawFilterMarkers(clientData) {
        const markerList = [];
        for (let i = 0; i < clientData.length; i++) {
            const lat = clientData[i].lat;
            const lng = clientData[i].lon;
            markerList.push(leaflet__WEBPACK_IMPORTED_MODULE_2__["circle"]([lat, lng], 250, { color: this.global.getGlobal('filter_color').value, fillColor: this.global.getGlobal('filter_color').value, opacity: 1, fillOpacity: 1 }));
        }
        ;
        if (this.clientLayers.length) {
            for (let i = 0; i < this.clientLayers.length; i++) {
                this.map.removeLayer(this.clientLayers[i]);
            }
            ;
            this.clientLayers = [];
            for (let i = 0; i < clientData.length; i++) {
                markerList[i].addTo(this.map);
                this.clientLayers.push(markerList[i]);
            }
            ;
        }
        else {
            for (let i = 0; i < clientData.length; i++) {
                markerList[i].addTo(this.map);
                this.clientLayers.push(markerList[i]);
            }
            ;
        }
    }
    ;
    /**
     * Função que deleta o marker
     */
    eraseFilterMarkers() {
        for (let i = 0; i < this.clientLayers.length; i++) {
            this.map.removeLayer(this.clientLayers[i]);
        }
        ;
        this.clientLayers = [];
    }
    ;
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapDiv = _t.first);
    } }, outputs: { polyCreatedEvent: "polyCreatedEvent", polyRemovedEvent: "polyRemovedEvent", polyEditedEvent: "polyEditedEvent", moveEndedEvent: "moveEndedEvent", markerAddedEvent: "markerAddedEvent", markerRemovedEvent: "markerRemovedEvent", resetTimeseries: "resetTimeseries" }, decls: 2, vars: 0, consts: [[1, "fill"], ["map", ""]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-draggable */ "DIQL");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_init_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-init.service */ "9LMx");
/* harmony import */ var _bars_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bars/top-bar/top-bar.component */ "27/6");
/* harmony import */ var _bars_charts_bar_charts_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bars/charts-bar/charts-bar.component */ "K4GV");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _widgets_map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/map/map.component */ "Weg6");
/* harmony import */ var _widgets_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/bar-chart/bar-chart.component */ "pvtx");
/* harmony import */ var _widgets_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/line-chart/line-chart.component */ "1t5r");
/* harmony import */ var _widgets_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/filters/filters.component */ "Kb4X");
/* harmony import */ var _widgets_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgets/alerts/alerts.component */ "Krjr");
/* harmony import */ var _widgets_network_network_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widgets/network/network.component */ "SfxP");
/* harmony import */ var _bars_time_bar_time_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bars/time-bar/time-bar.component */ "T/Ui");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _app_init_service__WEBPACK_IMPORTED_MODULE_5__["AppInitService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            multi: true,
            deps: [_app_init_service__WEBPACK_IMPORTED_MODULE_5__["AppInitService"]],
            useFactory: (appInit) => {
                return () => {
                    return appInit.init();
                };
            }
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular2_draggable__WEBPACK_IMPORTED_MODULE_2__["AngularDraggableModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__["NgMultiSelectDropDownModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _widgets_map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"],
        _widgets_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__["BarChartComponent"],
        _widgets_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["LineChartComponent"],
        _bars_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__["TopBarComponent"],
        _bars_charts_bar_charts_bar_component__WEBPACK_IMPORTED_MODULE_7__["ChartsBarComponent"],
        _widgets_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__["FiltersComponent"],
        _widgets_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_13__["AlertsComponent"],
        _widgets_network_network_component__WEBPACK_IMPORTED_MODULE_14__["NetworkComponent"],
        _bars_time_bar_time_bar_component__WEBPACK_IMPORTED_MODULE_15__["TimeBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        angular2_draggable__WEBPACK_IMPORTED_MODULE_2__["AngularDraggableModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_3__["NgMultiSelectDropDownModule"]] }); })();


/***/ }),

/***/ "c5/f":
/*!********************************************!*\
  !*** ./src/app/widgets/line-chart/line.ts ***!
  \********************************************/
/*! exports provided: LineChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChart", function() { return LineChart; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "m0r1");

class LineChart {
    constructor(canvas) {
        this.canvas = canvas;
        this.init();
    }
    //Configuração do grafico
    init() {
        if (this.canvas === undefined) {
            return;
        }
        //Registra os elementos utilizados pelo grafico
        chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].register(chart_js__WEBPACK_IMPORTED_MODULE_0__["PointElement"], chart_js__WEBPACK_IMPORTED_MODULE_0__["LineElement"], chart_js__WEBPACK_IMPORTED_MODULE_0__["LineController"], chart_js__WEBPACK_IMPORTED_MODULE_0__["CategoryScale"], chart_js__WEBPACK_IMPORTED_MODULE_0__["LinearScale"], chart_js__WEBPACK_IMPORTED_MODULE_0__["Legend"], chart_js__WEBPACK_IMPORTED_MODULE_0__["Tooltip"]);
        chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].defaults.animation = false;
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"](this.canvas, {
            type: 'line',
            data: {
                labels: [],
                datasets: []
            },
            options: {
                plugins: {
                    legend: {
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
                            display: false,
                            text: 'X'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: false,
                            text: 'Y'
                        }
                    }
                }
            }
        });
    }
    //Modifica as configurações globais para os títulos
    setTitle(title) {
        this.chart.options.plugins.title.text = title;
        this.chart.options.plugins.title.display = true;
    }
    //Modifica as configurações globais dos ticks comuns para eixos
    setTicksX(ticks) {
        this.chart.options.scales.x[0].ticks = ticks;
    }
    setTicksY(ticks) {
        this.chart.options.scales.y[0].ticks = ticks;
    }
    //Modifica as configurações globais dos dos tipos
    setTypeX(type) {
        this.chart.options.scales.x[0].type = type;
    }
    setTypeY(type) {
        this.chart.options.scales.y[0].type = type;
    }
    //Modifica as configurações globais dos labels
    setLabelX(label) {
        this.chart.options.scales.x.title.text = label;
        this.chart.options.scales.x.title.display = true;
    }
    setLabelY(label) {
        this.chart.options.scales.y.title.text = label;
        this.chart.options.scales.y.title.display = true;
    }
    setLabels(labels) {
        this.chart.config.data.labels = labels;
    }
    addDataset(label, data, color) {
        let dataset = {
            label: label,
            backgroundColor: color,
            borderColor: color,
            data: data,
            fill: false
        };
        this.chart.config.data.datasets.push(dataset);
        this.chart.update();
    }
    updateDataset(dataId, color, data, name = undefined) {
        const datasets = this.chart.config.data.datasets;
        let label = "";
        if (name) {
            label = dataId + " (" + name + ")";
        }
        else {
            label = dataId;
        }
        ;
        const id = datasets.findIndex((d) => d.backgroundColor == color);
        if (id >= 0) {
            datasets[id].data = data;
        }
        else {
            const newData = {
                label: label,
                backgroundColor: color,
                borderColor: color,
                data: data,
                fill: false
            };
            datasets.push(newData);
        }
        this.chart.update();
    }
    removeDataset(dataId, color) {
        const datasets = this.chart.config.data.datasets;
        const id = datasets.findIndex((d) => d.backgroundColor == color);
        if (id >= 0) {
            datasets.splice(id, 1);
            this.chart.update();
        }
    }
    clear() {
        this.chart.data.labels = [];
        this.chart.data.datasets = [];
        this.chart.update();
    }
}


/***/ }),

/***/ "de2y":
/*!**********************************!*\
  !*** ./src/assets/capitais.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"nome\":\"Aracaju\",\"estado\":\"Sergipe\",\"latitude\":-10.9091,\"longitude\":-37.0677,\"cod\":25,\"id\":\"se\"},{\"nome\":\"Belém\",\"estado\":\"Pará\",\"latitude\":-1.4554,\"longitude\":-48.4898,\"cod\":14,\"id\":\"pa\"},{\"nome\":\"Belo Horizonte\",\"estado\":\"Minas Gerais\",\"latitude\":-19.9102,\"longitude\":-43.9266,\"cod\":11,\"id\":\"mg\"},{\"nome\":\"Boa Vista\",\"estado\":\"Roraima\",\"latitude\":2.82384,\"longitude\":-60.6753,\"cod\":22,\"id\":\"rr\"},{\"nome\":\"Brasília\",\"estado\":\"Distrito Federal\",\"latitude\":-15.7795,\"longitude\":-47.9297,\"cod\":7,\"id\":\"df\"},{\"nome\":\"Campo Grande\",\"estado\":\"Mato Grosso do Sul\",\"latitude\":-20.4486,\"longitude\":-54.6295,\"cod\":12,\"id\":\"ms\"},{\"nome\":\"Cuiabá\",\"estado\":\"Mato Grosso\",\"latitude\":-15.601,\"longitude\":-56.0974,\"cod\":13,\"id\":\"mt\"},{\"nome\":\"Curitiba\",\"estado\":\"Paraná\",\"latitude\":-25.4195,\"longitude\":-49.2646,\"cod\":18,\"id\":\"pr\"},{\"nome\":\"Florianópolis\",\"estado\":\"Santa Catarina\",\"latitude\":-27.5945,\"longitude\":-48.5477,\"cod\":24,\"id\":\"sc\"},{\"nome\":\"Fortaleza\",\"estado\":\"Ceará\",\"latitude\":-3.71664,\"longitude\":-38.5423,\"cod\":6,\"id\":\"ce\"},{\"nome\":\"Goiânia\",\"estado\":\"Goiás\",\"latitude\":-16.6864,\"longitude\":-49.2643,\"cod\":9,\"id\":\"go\"},{\"nome\":\"João Pessoa\",\"estado\":\"Paraíba\",\"latitude\":-7.11509,\"longitude\":-34.8641,\"cod\":15,\"id\":\"pb\"},{\"nome\":\"Macapá\",\"estado\":\"Amapá\",\"latitude\":0.034934,\"longitude\":-51.0694,\"cod\":4,\"id\":\"ap\"},{\"nome\":\"Maceió\",\"estado\":\"Alagoas\",\"latitude\":-9.66599,\"longitude\":-35.735,\"cod\":2,\"id\":\"al\"},{\"nome\":\"Manaus\",\"estado\":\"Amazonas\",\"latitude\":-3.11866,\"longitude\":-60.0212,\"cod\":3,\"id\":\"am\"},{\"nome\":\"Natal\",\"estado\":\"Rio Grande do Norte\",\"latitude\":-5.79357,\"longitude\":-35.1986,\"cod\":20,\"id\":\"rn\"},{\"nome\":\"Palmas\",\"estado\":\"Tocantins\",\"latitude\":-10.24,\"longitude\":-48.3558,\"cod\":27,\"id\":\"to\"},{\"nome\":\"Porto Alegre\",\"estado\":\"Rio Grande do Sul\",\"latitude\":-30.0318,\"longitude\":-51.2065,\"cod\":23,\"id\":\"rs\"},{\"nome\":\"Porto Velho\",\"estado\":\"Rondônia\",\"latitude\":-8.76077,\"longitude\":-63.8999,\"cod\":21,\"id\":\"ro\"},{\"nome\":\"Vitória\",\"estado\":\"Espírito Santo\",\"latitude\":-20.3155,\"longitude\":-40.3128,\"cod\":8,\"id\":\"es\"},{\"nome\":\"Recife\",\"estado\":\"Pernambuco\",\"latitude\":-8.04666,\"longitude\":-34.8771,\"cod\":16,\"id\":\"pe\"},{\"nome\":\"Rio Branco\",\"estado\":\"Acre\",\"latitude\":-9.97499,\"longitude\":-67.8243,\"cod\":1,\"id\":\"ac\"},{\"nome\":\"Rio de Janeiro\",\"estado\":\"Rio de Janeiro\",\"latitude\":-22.9129,\"longitude\":-43.2003,\"cod\":19,\"id\":\"rj\"},{\"nome\":\"Salvador\",\"estado\":\"Bahia\",\"latitude\":-12.9718,\"longitude\":-38.5011,\"cod\":5,\"id\":\"ba\"},{\"nome\":\"São Luís\",\"estado\":\"Maranhão\",\"latitude\":-2.53874,\"longitude\":-44.2825,\"cod\":10,\"id\":\"ma\"},{\"nome\":\"São Paulo\",\"estado\":\"São Paulo\",\"latitude\":-23.5329,\"longitude\":-46.6395,\"cod\":26,\"id\":\"sp\"},{\"nome\":\"Teresina\",\"estado\":\"Piauí\",\"latitude\":-5.09194,\"longitude\":-42.8034,\"cod\":17,\"id\":\"pi\"}]");

/***/ }),

/***/ "eokG":
/*!***************************************!*\
  !*** ./src/app/shared/api.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/api.models */ "4NiE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.service */ "H2Bz");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util.service */ "Cs7S");






class ApiService {
    constructor(global, utils) {
        this.global = global;
        this.utils = utils;
        // base server url
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend;
        // static files
        this.files_url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend}/extra`;
        // xhttp urls
        this.xhttp_url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend}/tc/query`;
        // config path
        this.config_url = '../assets/config.json';
    }
    updateConfig() {
        this.server_url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend;
        // static files
        this.files_url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend}/extra`;
        // xhttp urls
        this.xhttp_url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].backend}/tc/query`;
    }
    getQueryId() {
        const id = this.global.getGlobal('query_id').value;
        const query_id = {
            key: 'query_id',
            value: id + 1
        };
        this.global.setGlobal(query_id);
        return id;
    }
    getIPs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // IPs address
            const address = this.files_url + '/dynamic_ips.js';
            this.utils.showTrace("getIPs", {});
            // Return a new promise.
            const response = yield fetch(address, {
                method: 'GET',
            });
            return yield response.json();
        });
    }
    getConfig() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield fetch(this.config_url, {
                method: 'GET',
            });
            return yield response.json();
        });
    }
    /**
     * Carrega o schema do tiny cubes
     */
    getSchema(from = 'ttls') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let schema = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["SchemaRequest"]();
            schema['id'] = this.getQueryId();
            schema['from'] = from;
            this.utils.showTrace("initSchema", schema);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(this.xhttp_url, {
                method: 'POST',
                headers,
                body: JSON.stringify(schema),
            });
            return yield response.json();
        });
    }
    /**
     * Acessa o range de tempo
     */
    getTimeBounds() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["BoundsRequest"](24);
            data['bounds'] = "time";
            data['id'] = this.getQueryId();
            this.utils.showTrace("initTimeBounds", data);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(this.xhttp_url, {
                method: 'POST',
                headers,
                body: JSON.stringify(data),
            });
            return yield response.json();
        });
    }
    /**
     * Acessa o range espacial
     */
    getGeoBounds() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["BoundsRequest"](24);
            data['id'] = this.getQueryId();
            this.utils.showTrace("initGeoBounds", data);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(this.xhttp_url, {
                method: 'POST',
                headers,
                body: JSON.stringify(data),
            });
            return yield response.json();
        });
    }
    /**
     * Solicita os dados que compõe o mapa de calor.
     */
    requestHeatMap(location, time) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let query = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["QueryRequest"]();
            query['select'] = ['hsum'];
            query['group-by'] = "location";
            query['id'] = this.getQueryId();
            query['where'] = [];
            if (location !== undefined) {
                query['where'].push(location);
            }
            if (time !== undefined) {
                query['where'].push(time);
            }
            this.utils.showTrace("requestHeatMap", query);
            // post header
            const headers = {
                'Content-Type': 'application/json',
            };
            // Return a new promise.
            const response = yield fetch(this.xhttp_url, {
                method: 'POST',
                headers,
                body: JSON.stringify(query),
            });
            return yield response.json();
        });
    }
    /**
     * Solicita os dados do mapa para compor o gráfico de barras.
     */
    requestBarChart(location, time, client, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let query = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["QueryRequest"]();
            query['from'] = params.from;
            query['select'] = params.select;
            query['group-by'] = params.groupBy;
            query['id'] = this.getQueryId();
            query['where'] = [];
            if (location !== undefined) {
                query['where'].push(location);
            }
            if (time !== undefined) {
                query['where'].push(time);
            }
            if (client !== undefined) {
                query['where'].push(client);
            }
            this.utils.showTrace("requestBarChart", query);
            // post header
            const headers = {
                'Content-Type': 'application/json',
                'dataType': 'json'
            };
            // Return a new promise.
            const response = yield fetch(this.xhttp_url, {
                method: 'POST',
                headers,
                body: JSON.stringify(query),
            });
            return yield response.json();
        });
    }
    /**
     * Solicita os dados do mapa para compor o gráfico de linhas.
     */
    requestLineChart(location, time, client, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let query = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["QueryRequest"]();
            const tsT0 = this.global.getGlobal("t0_vis").value;
            const tsT1 = this.global.getGlobal("t1_vis").value;
            query['from'] = params.from;
            query['select'] = params.select;
            query["group-by"] = { "field": "time", "min-k": tsT0, "max-k": tsT1, "n-points": 1024, "v": "AMPNS" };
            query['id'] = this.getQueryId();
            query.where = [];
            query['where'] = [];
            if (location !== undefined) {
                query['where'].push(location);
            }
            if (time !== undefined) {
                query['where'].push(time);
            }
            if (client !== undefined) {
                query['where'].push(client);
            }
            this.utils.showTrace("requestLineChart", query);
            // post header
            const headers = {
                'Content-Type': 'application/json',
                'dataType': 'json'
            };
            // Return a new promise.
            const response = yield fetch(this.xhttp_url, {
                method: 'POST',
                headers,
                body: JSON.stringify(query),
            });
            return yield response.json();
        });
    }
    /**
     * Solicita os dados do mapa para compor a heatmatrix.
     */
    requestHeatmatrix(metric, field, t0, t1, clicked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let query = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["MatrixRequest"]();
            if (clicked >= 0) {
                query['what'] = "timecolumns";
                // @ts-ignore
                query['idpop'] = clicked;
                // @ts-ignore
                // query['ncols'] = 25;
            }
            query['metric'] = metric;
            query['field'] = field;
            query['start'] = t0;
            query['end'] = t1;
            this.utils.showTrace("requestHeatMatrix", query);
            // post header
            const headers = {
                'Content-Type': 'application/json',
                'dataType': 'json'
            };
            // Return a new promise.
            const response = yield fetch(this.xhttp_url + '2', {
                method: 'POST',
                headers,
                body: JSON.stringify(query),
            });
            return yield response.json();
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pPrM":
/*!******************************************!*\
  !*** ./src/app/widgets/bar-chart/bar.ts ***!
  \******************************************/
/*! exports provided: BarChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChart", function() { return BarChart; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "m0r1");

class BarChart {
    constructor(canvas) {
        this.canvas = canvas;
        this.init();
    }
    //Configuração do grafico
    init() {
        if (this.canvas === undefined) {
            return;
        }
        // Registra os elementos utilizados pelo grafico
        chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].register(chart_js__WEBPACK_IMPORTED_MODULE_0__["PointElement"], chart_js__WEBPACK_IMPORTED_MODULE_0__["BarController"], chart_js__WEBPACK_IMPORTED_MODULE_0__["BarElement"], chart_js__WEBPACK_IMPORTED_MODULE_0__["CategoryScale"], chart_js__WEBPACK_IMPORTED_MODULE_0__["LinearScale"], chart_js__WEBPACK_IMPORTED_MODULE_0__["Legend"], chart_js__WEBPACK_IMPORTED_MODULE_0__["Tooltip"]);
        chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"].defaults.animation = false;
        // Configuração do gráfico
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"](this.canvas, {
            type: 'bar',
            data: {
                labels: [],
                datasets: []
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        position: "top"
                    },
                    title: {
                        display: false
                    }
                },
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'TTL'
                        }
                    },
                    y: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Relative Frequency'
                        }
                    }
                }
            }
        });
    }
    // Modifica as configurações globais para os títulos
    setTitle(title) {
        this.chart.options.plugins.title.text = title;
        this.chart.options.plugins.title.display = true;
    }
    // Modifica as configurações dos ticks
    setTicksX(ticks) {
        this.chart.options.scales.x[0].ticks = ticks;
    }
    // Modifica as configurações dos ticks
    setTicksY(ticks) {
        this.chart.options.scales.y[0].ticks = ticks;
    }
    // Modifica o tipo do eixo
    setTypeX(type) {
        this.chart.options.scales.x[0].type = type;
    }
    // Modifica o tipo do eixo
    setTypeY(type) {
        this.chart.options.scales.y[0].type = type;
    }
    // Modifica as configurações dos labels
    setLabelX(label) {
        this.chart.options.scales.x.title.text = label;
        this.chart.options.scales.x.title.display = true;
    }
    // Modifica as configurações dos labels
    setLabelY(label) {
        this.chart.options.scales.y.title.text = label;
        this.chart.options.scales.y.title.display = true;
    }
    // Modifica as configurações dos labels
    setLabels(labels) {
        this.chart.config.data.labels = labels;
    }
    updateDataset(dataId, color, data, name = undefined) {
        const datasets = this.chart.config.data.datasets;
        let label = "";
        if (name) {
            label = dataId + " (" + name + ")";
        }
        else {
            label = dataId;
        }
        ;
        const id = datasets.findIndex((d) => d.backgroundColor == color);
        if (id >= 0) {
            datasets[id].data = data;
        }
        else {
            const newData = {
                label: label,
                backgroundColor: color,
                borderColor: color,
                data: data,
                fill: false,
                stack: dataId
            };
            datasets.push(newData);
        }
        this.chart.update();
    }
    removeDataset(dataId, color) {
        const datasets = this.chart.config.data.datasets;
        const id = datasets.findIndex((d) => d.backgroundColor == color);
        if (id >= 0) {
            datasets.splice(id, 1);
            this.chart.update();
        }
    }
    clear() {
        this.chart.data.labels = [];
        this.chart.data.datasets = [];
        this.chart.update();
    }
}


/***/ }),

/***/ "pvtx":
/*!**********************************************************!*\
  !*** ./src/app/widgets/bar-chart/bar-chart.component.ts ***!
  \**********************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar */ "pPrM");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/util.service */ "Cs7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["barChart"];
function BarChartComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", param_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](param_r2.id);
} }
class BarChartComponent {
    constructor(global, util) {
        this.global = global;
        this.util = util;
        this.barParamChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.labels = {};
        this.rawData = {};
        this.nrmData = {};
        this.ids = [];
        this.ids = this.global.getGlobal('bar_params').value;
    }
    ngOnInit() {
        this.barChart = new _bar__WEBPACK_IMPORTED_MODULE_1__["BarChart"](this.barDiv.nativeElement);
    }
    updateData(responseData, dataId, chartColor, lmap) {
        // manages data for each from
        for (let from of Object.keys(responseData)) {
            // clear existing element
            this.deleteData(from, dataId, chartColor);
            this.rawData[from][dataId][chartColor] = [];
            // adiciona os valores não normalizados
            for (let i = 0; i < responseData[from].result.length; i++) {
                const pointId = +responseData[from].result[i].k[0];
                const pointVl = +responseData[from].result[i].v[0];
                this.rawData[from][dataId][chartColor].push({ x: pointId, y: pointVl });
            }
            // atualiza os labels baseado no dado novo
            this.updateLabels(from, lmap);
            // normaliza os dados de dataId
            this.normalizeData(from);
            // completa os pontos que faltam
            this.fillMissingPoints(from);
        }
    }
    drawChart(from, name = undefined) {
        // set x labal
        if (from.includes('ttls')) {
            this.barChart.setLabelX('TTLs');
        }
        else {
            this.barChart.setLabelX('TCP Connection Services');
        }
        // atualiza os labels
        this.barChart.setLabels(this.labels[from], name);
        // atualiza os dados
        for (const dataId of Object.keys(this.nrmData[from])) {
            for (const color of Object.keys(this.nrmData[from][dataId])) {
                // gets the data
                const data = this.nrmData[from][dataId];
                this.barChart.updateDataset(dataId, color, data[color], name);
            }
        }
    }
    deleteData(from, dataId, color) {
        // new group
        if (!this.rawData[from]) {
            this.rawData[from] = {};
        }
        // new dataId
        if (!this.rawData[from][dataId]) {
            this.rawData[from][dataId] = {};
        }
        delete this.rawData[from][dataId][color];
        // new group
        if (!this.nrmData[from]) {
            this.nrmData[from] = {};
        }
        // new dataId
        if (!this.nrmData[from][dataId]) {
            this.nrmData[from][dataId] = {};
        }
        delete this.nrmData[from][dataId][color];
    }
    clearChart(from, dataId, color, lmap) {
        // removes from chart
        this.barChart.removeDataset(dataId, color);
        this.deleteData(from, dataId, color);
        // atualiza os labels baseado no dado novo
        this.updateLabels(from, lmap);
        // normaliza os dados de dataId
        this.normalizeData(from);
        // completa os pontos que faltam
        this.fillMissingPoints(from);
    }
    clearLabel(from) {
        this.labels[from] = [];
    }
    normalizeData(from) {
        // limpa os dados normalizados
        this.nrmData[from] = {};
        // repete para cada dataId
        for (const dataId of Object.keys(this.rawData[from])) {
            // pega os datasets de dataId
            const data = this.rawData[from][dataId];
            // calcula a soma dos da categoria
            let total = 0;
            for (let cor of Object.keys(data)) {
                const partial = data[cor].reduce((a, b) => {
                    return a + b.y;
                }, 0);
                total += partial;
            }
            // normaliza os valores
            const norm = {};
            for (let cor of Object.keys(data)) {
                norm[cor] = [];
                for (let pId = 0; pId < data[cor].length; pId++) {
                    const nrmPnt = { x: data[cor][pId].x, y: data[cor][pId].y / total };
                    norm[cor].push(nrmPnt);
                }
                ;
            }
            // substitui o dado normalizado anterior
            this.nrmData[from][dataId] = norm;
        }
    }
    fillMissingPoints(from) {
        // lista de tipos de elementos
        const dataIds = Object.keys(this.nrmData[from]);
        for (let dataId of dataIds) {
            // lista de cores no elemento
            const colors = Object.keys(this.nrmData[from][dataId]);
            for (let color of colors) {
                // para cada label
                this.labels[from].forEach((label) => {
                    // se não existe valor associado ao label, adiciona zero
                    if (!this.nrmData[from][dataId][color].some((d) => d.x === label)) {
                        this.nrmData[from][dataId][color].push({ x: label, y: 0 });
                    }
                });
                // ordena os pontos
                this.nrmData[from][dataId][color].sort((a, b) => a.x - b.x);
            }
        }
    }
    updateLabels(from, lmap) {
        // limpa os labels do gráfico
        this.labels[from] = [];
        // percorre os tipos de elementos
        for (const dataId of Object.keys(this.rawData[from])) {
            // percorre os elementos
            for (const color of Object.keys(this.rawData[from][dataId])) {
                this.rawData[from][dataId][color].forEach((d) => {
                    const x = Object.keys(lmap[from]).length > 0 ? lmap[from][d['x']] : d['x'];
                    if (!this.labels[from].includes(x)) {
                        this.labels[from].push(x);
                    }
                });
            }
        }
        // ordena os labels
        this.labels[from].sort((a, b) => a - b);
    }
    onParamChange(event) {
        const bar_params_value = {
            key: "bar_params_value",
            value: event.target.value
        };
        this.global.setGlobal(bar_params_value);
        this.barParamChanged.emit();
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"])); };
BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], viewQuery: function BarChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.barDiv = _t.first);
    } }, outputs: { barParamChanged: "barParamChanged" }, decls: 5, vars: 1, consts: [[1, "fill"], [1, "fill", 2, "padding-bottom", "10px", "border-bottom", "1px solid #eee"], ["barChart", ""], ["name", "select", 1, "param-selector", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BarChartComponent_Template_select_change_3_listener($event) { return ctx.onParamChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BarChartComponent_option_4_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ids);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".param-selector[_ngcontent-%COMP%] {\n    width: 79px;\n    font-size: 9px;\n    margin-left: 17px;\n    height: 27px;\n    margin-top: 4px;\n}\n\n@media screen and (min-width: 1024px) {\n    .param-selector[_ngcontent-%COMP%] {\n        font-size: 11px;\n        margin-top: 7px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoiYmFyLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyYW0tc2VsZWN0b3Ige1xuICAgIHdpZHRoOiA3OXB4O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgIGhlaWdodDogMjdweDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5wYXJhbS1zZWxlY3RvciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map