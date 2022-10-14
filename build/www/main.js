(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/leovsf/code/leovsferreira/borescope-ui/front/src/main.ts */"zUnb");


/***/ }),

/***/ "1Kw/":
/*!**********************************************************************!*\
  !*** ./src/app/widgets/functions-chart/functions-chart.component.ts ***!
  \**********************************************************************/
/*! exports provided: FunctionsChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsChartComponent", function() { return FunctionsChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _functions_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions-chart */ "TL27");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/util.service */ "Cs7S");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");








const _c0 = ["functionsChart"];
function FunctionsChartComponent_select_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FunctionsChartComponent_select_16_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pop x Pop");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pop x Servi\u00E7os");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FunctionsChartComponent_select_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FunctionsChartComponent_select_17_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Todos os pops x todos os servi\u00E7os");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Todos os pops x servi\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "N pops x N servi\u00E7os");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FunctionsChartComponent_select_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FunctionsChartComponent_select_18_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pop x todos os servi\u00E7os");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pop x servi\u00E7o");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FunctionsChartComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FunctionsChartComponent_div_19_Template_select_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onPopValueChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "optgroup", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Failures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Atraso de ida e volta (RTT - average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Atraso de ida e volta (RTT - min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Atraso de ida e volta (RTT - max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Histogram-ttl-reverse (average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Histogram-ttl-reverse (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Histogram-ttl-reverse (max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Packet-count-lost-bidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Packet-count-sent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Packet-duplicates-bidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Packet-loss-rate-bidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Packet-reorders-bidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "optgroup", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Failures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Atraso unidirecional (owdelay - average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Atraso unidirecional (owdelay - min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Atraso unidirecional (owdelay - max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Histogram-ttl (average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Histogram-ttl (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Histogram-ttl (max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Packet-count-lost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Packet-count-sent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Packet-duplicates");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Packet-loss-rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Packet-reorders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "optgroup", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Failures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Packet-retransmits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Packet-retransmits-subintervals (average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Packet-retransmits-subintervals (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Packet-retransmits-subintervals (max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Throughput (BBR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Throughput-subintervals (average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Throughput-subintervals (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Throughput-subintervals (max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "optgroup", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Failures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Packet-retransmits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Packet-retransmits-subintervals (average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Packet-retransmits-subintervals (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Packet-retransmits-subintervals (max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Throughput (CUBIC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Throughput-subintervals (average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Throughput-subintervals (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Throughput-subintervals (max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "optgroup", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Failures");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Packet-trace (average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Packet-trace (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Packet-trace (max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", !ctx_r4.hasData ? "-64px" : "-42px");
} }
function FunctionsChartComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-multiselect-dropdown", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FunctionsChartComponent_div_20_Template_ng_multiselect_dropdown_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.selectedItemsRoot = $event; })("onSelect", function FunctionsChartComponent_div_20_Template_ng_multiselect_dropdown_onSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onItemSelect($event, true); })("onDeSelect", function FunctionsChartComponent_div_20_Template_ng_multiselect_dropdown_onDeSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.onItemSelect($event, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", !ctx_r5.isPopSelected() && ctx_r5.isCapitalSelected() ? "-50px" : "17px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", false)("placeholder", ctx_r5.multiSelectServicesPlaceholder)("settings", ctx_r5.dropdownSettingsServices)("data", ctx_r5.dropdownListServices)("ngModel", ctx_r5.selectedItemsRoot);
} }
function FunctionsChartComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-multiselect-dropdown", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FunctionsChartComponent_div_21_Template_ng_multiselect_dropdown_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.selectedItemsRoot = $event; })("onSelect", function FunctionsChartComponent_div_21_Template_ng_multiselect_dropdown_onSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.onItemSelect($event, true); })("onDeSelect", function FunctionsChartComponent_div_21_Template_ng_multiselect_dropdown_onDeSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onItemSelect($event, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", false)("placeholder", ctx_r6.multiSelectPopsPlaceholder)("settings", ctx_r6.dropdownSettingsPops)("data", ctx_r6.dropdownListPops)("ngModel", ctx_r6.selectedItemsRoot);
} }
function FunctionsChartComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-multiselect-dropdown", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FunctionsChartComponent_div_22_Template_ng_multiselect_dropdown_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.selectedItemsRoot = $event; })("onSelect", function FunctionsChartComponent_div_22_Template_ng_multiselect_dropdown_onSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.onCombinedSelect($event, "pop", true); })("onDeSelect", function FunctionsChartComponent_div_22_Template_ng_multiselect_dropdown_onDeSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onCombinedSelect($event, "pop", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx_r7.isPopSelected() ? "17px" : "64px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", false)("placeholder", ctx_r7.multiSelectPopsPlaceholder)("settings", ctx_r7.dropdownSettingsPops)("data", ctx_r7.dropdownListPops)("ngModel", ctx_r7.selectedItemsRoot);
} }
function FunctionsChartComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-multiselect-dropdown", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FunctionsChartComponent_div_23_Template_ng_multiselect_dropdown_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.selectedItemsRootSecondary = $event; })("onSelect", function FunctionsChartComponent_div_23_Template_ng_multiselect_dropdown_onSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.onCombinedSelect($event, "secondarypop", true); })("onDeSelect", function FunctionsChartComponent_div_23_Template_ng_multiselect_dropdown_onDeSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onCombinedSelect($event, "secondarypop", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", false)("placeholder", ctx_r8.multiSelectPopsPlaceholder)("settings", ctx_r8.dropdownSettingsPops)("data", ctx_r8.dropdownListPops)("ngModel", ctx_r8.selectedItemsRootSecondary);
} }
function FunctionsChartComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-multiselect-dropdown", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function FunctionsChartComponent_div_24_Template_ng_multiselect_dropdown_onSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.onCombinedSelect($event, "service", true); })("onDeSelect", function FunctionsChartComponent_div_24_Template_ng_multiselect_dropdown_onDeSelect_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.onCombinedSelect($event, "service", false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", false)("placeholder", ctx_r9.multiSelectServicesPlaceholder)("settings", ctx_r9.dropdownSettingsServices)("data", ctx_r9.dropdownListServices);
} }
function FunctionsChartComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ng-multiselect-dropdown", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FunctionsChartComponent_div_25_Template_ng_multiselect_dropdown_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.combinedSelections = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", false)("placeholder", ctx_r10.multiSelectCombinedPlaceholder)("settings", ctx_r10.dropdownSettingsCombined)("data", ctx_r10.dropdownListCombined)("ngModel", ctx_r10.combinedSelections);
} }
function FunctionsChartComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FunctionsChartComponent_div_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.addDataCombinations(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FunctionsChartComponent_div_26_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.removeDataCombinations(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "#243d8f");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", "#F51720");
} }
class FunctionsChartComponent {
    constructor(global, util) {
        this.global = global;
        this.util = util;
        this.functionsParamChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.functionsValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCombinedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedServices = [];
        //capitals select list
        this.selectedItems = [];
        this.selectedItemsRoot = [];
        this.selectedItemsRootSecondary = [];
        this.combinedSelection = {
            pops: [],
            services: []
        };
        this.selectionLimit = 10;
        //lista de cores
        this.drawColors = [
            '#1F77B4', '#2CA02C', '#9467BD', '#8C564B', '#E377C2',
            '#AEC7E8', '#98DF8A', '#C5B0D5', '#C49C94', '#F7B6D2'
        ];
        //lista de cores já usadas
        this.usedColors = [];
        //multiselect
        //configuração do multiselect para os servicos
        this.dropdownListServices = [];
        this.dropdownSettingsServices = {};
        this.multiSelectServicesPlaceholder = 'Estados';
        //configuração do multiselect para os pops
        this.dropdownListPops = [];
        this.dropdownSettingsPops = {};
        this.dropdownListPopsSecondary = [];
        this.dropdownSettingsPopsSecondary = {};
        this.multiSelectPopsPlaceholder = 'Estados';
        //configuração do multiselect para as combinacoes de servicos + pops adicionados ao grafico
        this.dropdownListCombined = [];
        this.dropdownSettingsCombined = {};
        this.multiSelectCombinedPlaceholder = 'Select';
        this.hasData = false;
        this.combinedData = [];
        this.combinedSelections = [];
    }
    ngOnInit() {
        this.functionsChart = new _functions_chart__WEBPACK_IMPORTED_MODULE_1__["Functionschart"](this.functionsDiv.nativeElement);
        this.setMultipleSelectConfiguration();
        this.functionsChart.setCapitals(this.global.getGlobal('state_capitals').value.default);
        this.functionsChart.setServices(this.global.getGlobal("services").value.default);
    }
    updateFunctionsChartData(data, clicked) {
        for (let i = 0; i < data.length; i++) {
            this.updateUsedColors(true, this.drawColors[i]);
        }
        const selectedParam = this.global.getGlobal('functions_param').value;
        this.functionsChart.clear();
        this.functionsChart.updateData(data, this.drawColors, selectedParam);
        this.functionsChart.setTitle(selectedParam, clicked);
        this.functionsChart.render();
    }
    updateFunctionsCombinationsData(data) {
        const selectedParam = this.global.getGlobal('functions_param').value;
        this.functionsChart.clear();
        this.functionsChart.updateCombinations(data, selectedParam);
        this.functionsChart.setTitle(selectedParam, -1);
        this.functionsChart.render();
    }
    onParamChange(event) {
        const selectedParam = this.global.getGlobal('functions_param').value;
        this.functionsChart.setConfig(event.target.value);
        const functions_param = {
            key: "functions_param",
            value: event.target.value
        };
        (selectedParam == "timeseries") ? this.clearSeries() : this.functionsChart.clear();
        this.global.setGlobal(functions_param);
        this.isTimeSeriesSelected() ? this.selectionLimit = 30 : this.selectionLimit = 10;
        if (this.shouldShowServices() && !this.isTimeSeriesSelected()) {
            this.onItemSelected.emit(this.selectedItems);
        }
        else if (!this.shouldShowServices() && this.hasData && !this.isTimeSeriesSelected()) {
            this.onCombinedChange.emit(this.combinedData);
        }
        else if (this.isTimeSeriesSelected()) {
            this.clearSeries();
            this.setMultipleSelectConfiguration();
            this.setCombinedMultipleSelectConfiguration();
        }
        else {
            this.functionsValueChanged.emit();
        }
    }
    onValueChange(event) {
        const functions_value = {
            key: "functions_value",
            value: event.target.value,
        };
        this.clearSeries();
        this.global.setGlobal(functions_value);
        this.shouldShowMultiSelectors() ? this.selectionLimit = 30 : this.selectionLimit = 10;
        this.setMultipleSelectConfiguration();
        this.setCombinedMultipleSelectConfiguration();
        if (!this.shouldShowServices() && !this.shouldShowMultiSelectors()) {
            this.functionsValueChanged.emit();
        }
    }
    onItemSelect(event, added) {
        if (this.selectedItems.includes(event.cod)) {
            const index = this.selectedItems.indexOf(event.cod);
            this.selectedItems = this.selectedItems.filter((e) => e !== event.cod);
            this.updateUsedColors(false, this.usedColors[index]);
        }
        else {
            this.selectedItems.push(event.cod);
        }
        ;
        this.onItemSelected.emit(this.selectedItems);
    }
    onCombinedSelect(event, from, added) {
        if (from == 'pop') {
            if (added) {
                this.combinedSelection.pops.push(event.cod);
            }
            else {
                const index = this.combinedSelection.pops.indexOf(event.cod);
                this.combinedSelection.pops.splice(index, 1);
            }
        }
        else {
            if (added) {
                this.combinedSelection.services.push(event.cod);
            }
            else {
                const index = this.combinedSelection.services.indexOf(event.cod);
                this.combinedSelection.services.splice(index, 1);
            }
        }
    }
    onPopValueChange() {
        this.functionsChart.clear();
        if (this.hasData)
            this.onCombinedChange.emit(this.combinedData);
        if (this.isPopSelected() && this.isTimeSeriesSelected && this.isCapitalSelected)
            this.onItemSelected.emit(this.selectedItems);
    }
    addDataCombinations() {
        //adiciona data para quando não é a timeseries selecionada
        if (this.combinedSelection.pops.length > 0 && this.combinedSelection.services.length > 0) {
            const services = this.global.getGlobal("services").value.default;
            const capitals = this.global.getGlobal("state_capitals").value.default;
            this.combinedData = [];
            if (!this.isTimeSeriesSelected()) {
                for (let i = 0; i < this.combinedSelection.pops.length; i++) {
                    for (let j = 0; j < this.combinedSelection.services.length; j++) {
                        const obj = { idPop: (this.combinedSelection.pops[i] >= 0) ? this.functionsChart.getId(this.combinedSelection.pops[i], 'pop') : 'TODOS POPS',
                            codPop: this.combinedSelection.pops[i],
                            idService: (this.combinedSelection.services[j] >= 0) ? this.functionsChart.getId(this.combinedSelection.services[j], 'service') : 'TODOS SERVIÇOS',
                            codService: this.combinedSelection.services[j] };
                        this.combinedData.push(obj);
                    }
                }
            }
            else {
                for (let i = 0; i < this.combinedSelection.pops.length; i++) {
                    for (let j = 0; j < this.combinedSelection.services.length; j++) {
                        const obj = { idPop: this.functionsChart.getId(this.combinedSelection.pops[i], 'pop'),
                            codPop: this.combinedSelection.pops[i],
                            idService: this.functionsChart.getId(this.combinedSelection.services[j], this.isPopSelected() ? 'pop' : 'service'),
                            codService: this.combinedSelection.services[j] };
                        if (obj.idPop !== obj.idService)
                            this.combinedData.push(obj);
                    }
                }
            }
            this.setCombinedMultipleSelectConfiguration();
            this.hasData = true;
            this.functionsChart.clear();
            this.onCombinedChange.emit(this.combinedData);
        }
    }
    removeDataCombinations() {
        if (this.combinedSelections.length > 0) {
            for (let i = 0; i < this.combinedSelections.length; i++) {
                for (let j = 0; j < this.combinedData.length; j++) {
                    if (this.combinedSelections[i].cods[0] == this.combinedData[j].codPop && this.combinedSelections[i].cods[1] == this.combinedData[j].codService) {
                        this.combinedData.splice(j, 1);
                    }
                }
            }
            this.functionsChart.clear();
            if (this.combinedData.length == 0) {
                this.hasData = false;
            }
            else {
                this.onCombinedChange.emit(this.combinedData);
            }
            this.combinedSelections = [];
            this.setCombinedMultipleSelectConfiguration();
        }
    }
    onTimeBoundsChange() {
        if (this.shouldShowServices() && !this.isTimeSeriesSelected()) {
            console.log('alo');
            this.onItemSelected.emit(this.selectedItems);
        }
        else if (!this.shouldShowServices() && this.hasData) {
            this.onCombinedChange.emit(this.combinedData);
        }
        else {
            if (this.isCapitalSelected()) {
                (this.isTimeSeriesSelected()) ? this.onItemSelected.emit(this.selectedItems) : this.functionsValueChanged.emit();
            }
            else {
                (this.shouldShowServices()) ? this.onCombinedChange.emit(this.combinedData) : this.functionsValueChanged.emit();
            }
        }
    }
    setMultipleSelectConfiguration() {
        //multiselect
        this.dropdownListServices = [];
        this.dropdownSettingsServices = {};
        this.dropdownListPops = [];
        this.dropdownSettingsPops = {};
        this.dropdownListPopsSecondary = [];
        this.dropdownSettingsPopsSecondary = {};
        //setando as configuracoes do multiselect p servicos
        const services = this.global.getGlobal("services").value.default;
        this.multiSelectServicesPlaceholder = 'Serviços';
        if (!this.isTimeSeriesSelected())
            this.dropdownListServices.push({ estado: 'TODOS SERVIÇOS', cod: -1 });
        for (let i = 0; i < services.length; i++) {
            let id = services[i].id.toUpperCase();
            let cod = services[i].cod;
            let obj = {};
            obj['estado'] = id;
            obj['cod'] = cod;
            this.dropdownListServices.push(obj);
        }
        ;
        this.dropdownSettingsServices = {
            singleSelection: false,
            limitSelection: this.selectionLimit,
            idField: 'cod',
            textField: 'estado',
            enableCheckAll: false,
            unSelectAll: false,
            itemsShowLimit: 0,
            allowSearchFilter: false
        };
        //setando as configuracoes do multiselect p pops
        const capitals = this.global.getGlobal("state_capitals").value.default;
        this.multiSelectPopsPlaceholder = 'Estados';
        if (!this.isTimeSeriesSelected())
            this.dropdownListPops.push({ estado: 'TODOS POPS', cod: -1 });
        for (let i = 0; i < capitals.length; i++) {
            let id = capitals[i].id.toUpperCase();
            let cod = capitals[i].cod;
            let obj = {};
            obj['estado'] = id;
            obj['cod'] = cod;
            this.dropdownListPops.push(obj);
        }
        ;
        this.dropdownSettingsPops = {
            singleSelection: false,
            limitSelection: this.selectionLimit,
            idField: 'cod',
            textField: 'estado',
            enableCheckAll: false,
            unSelectAll: false,
            itemsShowLimit: 0,
            allowSearchFilter: false
        };
    }
    setCombinedMultipleSelectConfiguration() {
        this.dropdownListCombined = [];
        this.dropdownSettingsCombined = {};
        this.multiSelectCombinedPlaceholder = 'Select';
        for (let i = 0; i < this.combinedData.length; i++) {
            let id = this.combinedData[i].idPop.toUpperCase() + ' - ' + this.combinedData[i].idService.toUpperCase();
            let cod = [this.combinedData[i].codPop, this.combinedData[i].codService];
            let obj = {};
            obj['estado+pop'] = id;
            obj['cods'] = cod;
            this.dropdownListCombined.push(obj);
        }
        this.dropdownSettingsCombined = {
            singleSelection: false,
            idField: 'cods',
            textField: 'estado+pop',
            enableCheckAll: true,
            itemsShowLimit: 0,
            allowSearchFilter: false
        };
    }
    isCapitalSelected() {
        return (this.global.getGlobal("clicked_element").value > 0);
    }
    isTimeSeriesSelected() {
        return (this.global.getGlobal('functions_param').value == 'timeseries');
    }
    isPopSelected() {
        const dataType = document.getElementById('functions-chart-select-value-options').value;
        return dataType == 'popxpop';
    }
    isServiceSelected() {
        const dataType = document.getElementById('functions-chart-select-value-options').value;
        return dataType == 'popxservice';
    }
    clear() {
        this.functionsChart.clear();
    }
    clearSeries() {
        this.selectedItems = [];
        this.selectedItemsRoot = [];
        this.selectedItemsRootSecondary = [];
        //cleaning combined selections
        this.hasData = false;
        this.combinedData = [];
        this.functionsChart.clear();
        this.combinedSelection = {
            pops: [],
            services: []
        };
        this.combinedSelections = [];
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
    shouldShowServices() {
        if (this.isTimeSeriesSelected() && this.isCapitalSelected && !this.isPopSelected())
            return true;
        if (!this.isTimeSeriesSelected()) {
            const dataType = document.getElementById('functions-chart-select-value-options').value;
            if (dataType == "single" || dataType == "allpops")
                return true;
            else
                return false;
        }
        else
            return false;
    }
    shouldShowMultiSelectors() {
        if (!this.isTimeSeriesSelected()) {
            const dataType = document.getElementById('functions-chart-select-value-options').value;
            if (dataType == 'nxn')
                return true;
            else
                return false;
        }
        else
            return true;
    }
}
FunctionsChartComponent.ɵfac = function FunctionsChartComponent_Factory(t) { return new (t || FunctionsChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"])); };
FunctionsChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FunctionsChartComponent, selectors: [["app-functions-chart"]], viewQuery: function FunctionsChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.functionsDiv = _t.first);
    } }, outputs: { functionsParamChanged: "functionsParamChanged", functionsValueChanged: "functionsValueChanged", onItemSelected: "onItemSelected", onCombinedChange: "onCombinedChange" }, decls: 27, vars: 13, consts: [[1, "fill", "functions-chart"], [2, "padding-bottom", "10px", "width", "100%", "height", "100% !important"], ["functionsChart", ""], [2, "display", "flex", "padding-bottom", "7px", "width", "100%", "border-top", "1px solid #eee", "left", "10px", "font-size", "11px !important"], [1, "model-select"], ["name", "select", "id", "functions-chart-options", 1, "param-selector", 3, "change"], ["value", "cdf", "selected", ""], ["value", "pdf"], ["value", "ccdf"], ["value", "timeseries"], [1, "code-select"], ["name", "type", "style", "width: 111px;", "id", "functions-chart-select-value-options", "name", "select", "class", "value-selector", 3, "change", 4, "ngIf"], ["id", "functions-chart-select-value-options", "name", "select", "class", "value-selector", 3, "change", 4, "ngIf"], ["id", "functions-chart-select-value-options", "name", "select", "class", "value-selector", "style", "width:133px;", 3, "change", 4, "ngIf"], ["id", "code-select-box", "class", "code-select", 3, "margin-left", 4, "ngIf"], ["id", "chart-select-box", "class", "chart-select", 3, "margin-left", 4, "ngIf"], ["id", "chart-select-box", "class", "chart-select", 4, "ngIf"], ["class", "combined-control", 4, "ngIf"], ["name", "type", "id", "functions-chart-select-value-options", "name", "select", 1, "value-selector", 2, "width", "111px", 3, "change"], ["value", "popxpop"], ["value", "popxservice"], ["id", "functions-chart-select-value-options", "name", "select", 1, "value-selector", 3, "change"], ["value", "all", "selected", ""], ["value", "allpops"], ["value", "nxn"], ["id", "functions-chart-select-value-options", "name", "select", 1, "value-selector", 2, "width", "133px", 3, "change"], ["value", "allservices", "selected", ""], ["value", "single"], ["id", "code-select-box", 1, "code-select"], ["name", "code", "id", "functions-chart-select-timeseries-popxpop-value-options", 1, "value-selector", 3, "change"], ["label", "Atraso e perda"], ["value", "10"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "21"], ["value", "22"], ["value", "23"], ["value", "24"], ["value", "25"], ["label", "Atraso unidirecional"], ["value", "40"], ["value", "41"], ["value", "42"], ["value", "43"], ["value", "46"], ["value", "47"], ["value", "48"], ["value", "51"], ["value", "52"], ["value", "53"], ["value", "54"], ["value", "55"], ["label", "BANDA (BBR)"], ["value", "70"], ["value", "71"], ["value", "72"], ["value", "73"], ["value", "74"], ["value", "77"], ["value", "78"], ["value", "79"], ["value", "80"], ["label", "BANDA (CUBIC)"], ["value", "100"], ["value", "101"], ["value", "102"], ["value", "103"], ["value", "104"], ["value", "107"], ["value", "108"], ["value", "109"], ["value", "110"], ["label", "TraceRoute"], ["value", "130"], ["value", "131"], ["value", "132"], ["value", "133"], ["id", "chart-select-box", 1, "chart-select"], [1, "custom-font-size", "custom-radius", "custom-dropdown", "custom-dropdown-place", "custom-dropdown-rotation", 3, "disabled", "placeholder", "settings", "data", "ngModel", "ngModelChange", "onSelect", "onDeSelect"], [1, "custom-font-size", "custom-radius", "custom-dropdown", "custom-dropdown-place", "custom-dropdown-rotation", 3, "disabled", "placeholder", "settings", "data", "onSelect", "onDeSelect"], [1, "custom-font-size", "custom-radius", "custom-dropdown", "custom-dropdown-place", "custom-dropdown-rotation", 3, "disabled", "placeholder", "settings", "data", "ngModel", "ngModelChange"], [1, "combined-control"], ["type", "button", 1, "btn", "btn-custom", 3, "click"], [1, "fas", "fa-plus"], [1, "fas", "fa-trash"]], template: function FunctionsChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canvas", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FunctionsChartComponent_Template_select_change_6_listener($event) { return ctx.onParamChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "CDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "CCDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Time series");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FunctionsChartComponent_select_16_Template, 5, 0, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FunctionsChartComponent_select_17_Template, 7, 0, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FunctionsChartComponent_select_18_Template, 5, 0, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FunctionsChartComponent_div_19_Template, 99, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FunctionsChartComponent_div_20_Template, 2, 7, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FunctionsChartComponent_div_21_Template, 2, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FunctionsChartComponent_div_22_Template, 2, 7, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FunctionsChartComponent_div_23_Template, 2, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FunctionsChartComponent_div_24_Template, 2, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FunctionsChartComponent_div_25_Template, 2, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FunctionsChartComponent_div_26_Template, 5, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-right", ctx.isCapitalSelected() ? "-30px" : "0px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTimeSeriesSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCapitalSelected() && !ctx.isTimeSeriesSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCapitalSelected() && !ctx.isTimeSeriesSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTimeSeriesSelected() && ctx.isPopSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldShowServices() && !ctx.isTimeSeriesSelected() || !ctx.isPopSelected() && ctx.isCapitalSelected() && ctx.isTimeSeriesSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCapitalSelected() && ctx.isTimeSeriesSelected() && ctx.isPopSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldShowMultiSelectors() && !ctx.isCapitalSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPopSelected() && !ctx.isCapitalSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shouldShowMultiSelectors() && !ctx.isTimeSeriesSelected() || ctx.isServiceSelected() && !ctx.isCapitalSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasData && ctx.shouldShowMultiSelectors());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.shouldShowMultiSelectors() || ctx.isTimeSeriesSelected()) && !ctx.isCapitalSelected());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".functions-chart[_ngcontent-%COMP%] {\n    top: 10px;\n    width: 678px;\n    height: 416px;\n}\n\n.code-select[_ngcontent-%COMP%] {\n    width: 222px;\n    margin-top: 7px;\n    margin-left: 5px;\n    font-size: 9px;\n}\n\n.model-select[_ngcontent-%COMP%] {\n    width: 72px;\n    margin-top: 7px;\n    margin-left: 8px;\n    font-size: 9px;\n}\n\n.chart-select[_ngcontent-%COMP%] {\n    width: 97px;\n    margin-top: 7px;\n    margin-left: 17px;\n}\n\n.combined-control[_ngcontent-%COMP%] {\n    display: flex;\n    width: 94px;\n    margin-top: 7px;\n    margin-left: 17px;\n    justify-content: space-around;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n    background-color: #fff;\n    outline: 0 !important;\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 12px;\n    font-size: 10px;\n    border-color: #bfbfbf;\n    height: 32px;\n    width: 32px;\n    padding: 10px 9px;\n  }\n\n.btn-custom[_ngcontent-%COMP%]:hover {\n    background-color: #eee !important;\n    outline: 0 !important;\n  }\n\n.btn-custom[_ngcontent-%COMP%]:target, .btn-custom[_ngcontent-%COMP%]:active, .btn-custom[_ngcontent-%COMP%]:visited {\n    background-color: #fff !important;\n    outline: 0 !important;\n  }\n\n.param-selector[_ngcontent-%COMP%], .value-selector[_ngcontent-%COMP%] {\n font-size: 9px;\n}\n\n@media screen and (min-width: 1024px) {\n\n    .chart-select[_ngcontent-%COMP%] {\n        width: 97px;\n    }\n\n    .param-selector[_ngcontent-%COMP%], .value-selector[_ngcontent-%COMP%], .combined-control[_ngcontent-%COMP%] {\n        font-size: 11px;\n    }    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9ucy1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0FBR0E7SUFDRSxpQ0FBaUM7SUFDakMscUJBQXFCO0VBQ3ZCOztBQUVBOzs7SUFHRSxpQ0FBaUM7SUFDakMscUJBQXFCO0VBQ3ZCOztBQUdGO0NBQ0MsY0FBYztBQUNmOztBQUVBOztJQUVJO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6ImZ1bmN0aW9ucy1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bmN0aW9ucy1jaGFydCB7XG4gICAgdG9wOiAxMHB4O1xuICAgIHdpZHRoOiA2NzhweDtcbiAgICBoZWlnaHQ6IDQxNnB4O1xufVxuXG4uY29kZS1zZWxlY3Qge1xuICAgIHdpZHRoOiAyMjJweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDlweDtcbn1cblxuLm1vZGVsLXNlbGVjdCB7XG4gICAgd2lkdGg6IDcycHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZm9udC1zaXplOiA5cHg7XG59XG5cbi5jaGFydC1zZWxlY3Qge1xuICAgIHdpZHRoOiA5N3B4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcbn1cblxuLmNvbWJpbmVkLWNvbnRyb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDk0cHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uYnRuLWN1c3RvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBib3JkZXItY29sb3I6ICNiZmJmYmY7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIHBhZGRpbmc6IDEwcHggOXB4O1xuICB9XG4gIFxuICBcbiAgLmJ0bi1jdXN0b206aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tY3VzdG9tOnRhcmdldCxcbiAgLmJ0bi1jdXN0b206YWN0aXZlLFxuICAuYnRuLWN1c3RvbTp2aXNpdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICB9XG4gIFxuXG4ucGFyYW0tc2VsZWN0b3IsIC52YWx1ZS1zZWxlY3RvciB7XG4gZm9udC1zaXplOiA5cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuXG4gICAgLmNoYXJ0LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA5N3B4O1xuICAgIH1cblxuICAgIC5wYXJhbS1zZWxlY3RvciwgLnZhbHVlLXNlbGVjdG9yLCAuY29tYmluZWQtY29udHJvbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9ICAgIFxufSJdfQ== */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = ["lineChart"];
function LineChartComponent_div_3_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", param_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](param_r4.caption);
} }
function LineChartComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LineChartComponent_div_3_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onParamChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LineChartComponent_div_3_option_2_Template, 2, 2, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LineChartComponent_div_3_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Average");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ids);
} }
function LineChartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LineChartComponent_div_4_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Average in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Average out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Max in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Max out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Val");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Average val");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Max val");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        this.t0 = 0;
        this.t1 = 0;
        this.ids = [];
        this.optionsList = {
            avg_in: 'Average in',
            avg_out: 'Average out',
            max_in: 'Max in',
            max_out: 'Max out',
            loss: 'Loss',
            avg_loss: 'Average loss',
            max_loss: 'Max loss',
            val: 'Val',
            avg_val: 'Average val',
            max_val: 'Max val'
        };
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
            this.nrmData[paramId][dataId][chartColor] = [];
            // adiciona os valores não normalizados
            for (let i = 0; i < responseData[paramId].result.length; i++) {
                if (!this.isViaipe()) {
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
                else {
                    //pega o tempo
                    const pointTime = responseData[paramId].result[i].k[0];
                    //pega valor
                    const pointValue = responseData[paramId].result[i].v[0];
                    this.rawData[paramId][dataId][chartColor].push({ x: this.util.secondsToDate(pointTime), y: pointValue });
                }
            }
            // seta o intervalo de tempo
            if (this.isViaipe()) {
                this.t0 = responseData['viaipe']['result'][0].k[0];
                this.t1 = responseData['viaipe']['result'].slice(-1)[0].k[0];
            }
            else {
                this.t0 = responseData['packet_rate']['result'][0].k[0];
                this.t1 = responseData['packet_rate']['result'].slice(-1)[0].k[0];
                // computes the unity
                this.computeUnity(paramId);
            }
            // atualiza os labels baseado no dado novo
            this.updateLabels(paramId);
            // normaliza os dados de dataId
            this.normalizeData(paramId);
        }
    }
    drawChart(from, selectedParam, name = undefined) {
        if (!this.isViaipe()) {
            // TODO: passar os labels de y em um objeto.
            if (from.includes('dns')) {
                // set y label.
                this.lineChart.setLabelY("Requisitions [%]");
            }
            else {
                // set y label.
                this.lineChart.setLabelY("Requisitions" + " [" + this.unity[from].prefix + "package" + "]");
            }
        }
        else {
            const selectedValue = this.global.getGlobal('line_selected_params_value').value;
            //@ts-ignore
            this.lineChart.setLabelY(this.optionsList[selectedValue]);
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
                    const label = this.labels[from][i];
                    if (this.isViaipe()) {
                        chartData.push({ y: data[color][i].y, x: label });
                    }
                    else {
                        if (selectedParam == 'average') {
                            chartData.push({ y: data[color][i].y, x: label });
                        }
                        else if (selectedParam == 'max') {
                            chartData.push({ y: data[color][i].z, x: label });
                        }
                        else {
                            chartData.push({ y: data[color][i].k, x: label });
                        }
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
        if (this.isViaipe()) {
            this.nrmData[from] = this.rawData[from];
        }
        else {
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
    }
    updateLabels(from) {
        // result array
        this.labels[from] = [];
        const tsT0 = this.t0;
        const tsT1 = this.t1;
        const interval = tsT1 - tsT0;
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
                let current = tsT0;
                while (current <= tsT1) {
                    let label = '';
                    let date = new Date(current * 1000);
                    if (interval < 1200) { // 20 min
                        //@ts-ignore
                        label = date.toLocaleString('en-GB', { hour12: false, year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
                    }
                    else if (interval < 72000) { // 20 hs
                        //@ts-ignore
                        label = date.toLocaleString('en-GB', { hour12: false, year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
                    }
                    else if (interval < 4320000) { // 50 dias
                        //@ts-ignore
                        label = date.toLocaleString('en-GB', { hour12: false, year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
                    }
                    else {
                        //@ts-ignore
                        label = date.toLocaleString('en-GB', { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
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
    isViaipe() {
        return this.global.getGlobal("client_option").value == "viaipe";
    }
}
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"])); };
LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineChartComponent, selectors: [["app-line-chart"]], viewQuery: function LineChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lineDiv = _t.first);
    } }, outputs: { lineParamChanged: "lineParamChanged", lineValueChanged: "lineValueChanged" }, decls: 5, vars: 6, consts: [[1, "fill"], ["lineChart", ""], ["style", "margin-top: 7px; padding-bottom: 7px; display: flex;", 4, "ngIf"], [2, "margin-top", "7px", "padding-bottom", "7px", "display", "flex"], ["name", "select", 1, "param-selector", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "select", 1, "value-selector", 3, "change"], ["value", "average", "selected", ""], ["value", "max"], ["value", "min"], [3, "value"], ["value", "avg_in", "selected", ""], ["value", "avg_out"], ["value", "max_in"], ["value", "max_out"], ["value", "val"], ["value", "avg_val"], ["value", "max_val"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LineChartComponent_div_3_Template, 10, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LineChartComponent_div_4_Template, 16, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-bottom", !ctx.isViaipe() ? "1px solid #eee;" : "none")("padding-bottom", !ctx.isViaipe() ? "10px;" : "0px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isViaipe());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViaipe());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]], styles: [".handler-line-chart[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #fff;\n    left: 5px;\n}\n\n.btn-line-chart[_ngcontent-%COMP%]{\n    color: #AAAAAA;\n    background-color: #fff;\n    outline-color: #fff !important;\n  }\n\n.btn-line-chart[_ngcontent-%COMP%]:hover {\n    background-color: #eee !important;\n    outline-color: #eee !important;\n    color: black;\n}\n\n.value-selector[_ngcontent-%COMP%] {\n    width: 93px;\n    font-size: 9px;\n    margin-left: 17px;\n    height: 27px;\n}\n\n.param-selector[_ngcontent-%COMP%] {\n    width: 174px;\n    font-size: 9px;\n    margin-left: 17px;\n    height: 27px;\n}\n\n.line-time-icon[_ngcontent-%COMP%] {\n    font-size: 1em;\n}\n\n.handler-line-chart[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    height: 24px;\n    padding: 6px 21px;\n    margin-top: 2px;\n}\n\n@media screen and (min-width: 1024px) {\n    .line-time-icon[_ngcontent-%COMP%] {\n        font-size: 1.33em;\n    }\n\n    .handler-line-chart[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n        height: 34px;\n        padding: 6px 24px;\n    }\n\n    .value-selector[_ngcontent-%COMP%] {\n        width: 99px;\n        font-size: 11px;\n    }\n    \n    .param-selector[_ngcontent-%COMP%] {\n        width: 204px;\n        font-size: 11px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmUtY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0Qiw4QkFBOEI7RUFDaEM7O0FBRUY7SUFDSSxpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoibGluZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhbmRsZXItbGluZS1jaGFydCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbGVmdDogNXB4O1xufVxuXG4uYnRuLWxpbmUtY2hhcnR7XG4gICAgY29sb3I6ICNBQUFBQUE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBvdXRsaW5lLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIH1cblxuLmJ0bi1saW5lLWNoYXJ0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZS1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnZhbHVlLXNlbGVjdG9yIHtcbiAgICB3aWR0aDogOTNweDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG59XG5cbi5wYXJhbS1zZWxlY3RvciB7XG4gICAgd2lkdGg6IDE3NHB4O1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICAgIGhlaWdodDogMjdweDtcbn1cblxuLmxpbmUtdGltZS1pY29uIHtcbiAgICBmb250LXNpemU6IDFlbTtcbn1cbi5oYW5kbGVyLWxpbmUtY2hhcnQgLmJ0biB7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDZweCAyMXB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmxpbmUtdGltZS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjMzZW07XG4gICAgfVxuXG4gICAgLmhhbmRsZXItbGluZS1jaGFydCAuYnRuIHtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgICBwYWRkaW5nOiA2cHggMjRweDtcbiAgICB9XG5cbiAgICAudmFsdWUtc2VsZWN0b3Ige1xuICAgICAgICB3aWR0aDogOTlweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgICBcbiAgICAucGFyYW0tc2VsZWN0b3Ige1xuICAgICAgICB3aWR0aDogMjA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG59Il19 */"] });


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
/*! exports provided: SchemaRequest, BoundsRequest, QueryRequest, MatrixRequest, TimeseriesRequest, FunctionsRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaRequest", function() { return SchemaRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundsRequest", function() { return BoundsRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryRequest", function() { return QueryRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixRequest", function() { return MatrixRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeseriesRequest", function() { return TimeseriesRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsRequest", function() { return FunctionsRequest; });
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
/**
 * Matrix Request Class
 */
class MatrixRequest {
    constructor() {
        this['what'] = "matrix";
        this['metric'] = 10;
        this['field'] = "h_avg";
        this['start'] = 1;
        this['end'] = 1634149785;
    }
}
/**
 * Timeseries Request Class
 */
class TimeseriesRequest {
    //{"what":"timecolumns","metric":10,"field":"h_avg","start":1648771200,"end":1656633300,"idpop":19}
    //{"what":"timecolumns","metric":10,"field":"havg","start":1648771200,"end":1656633300,"idpop":8,"from":"rnp_services"}
    constructor() {
        this['what'] = "timecolumns";
        this['metric'] = 0;
        this['field'] = "h_avg";
        this['start'] = 1;
        this['end'] = 2;
        this['idpop'] = -1;
    }
}
/**
 * Functions Request Class
 */
class FunctionsRequest {
    constructor() {
        this['from'] = "rnp_services";
        this['what'] = "statistics";
        this['field'] = "havg";
        this['start'] = 1647388800;
        this['end'] = 1652227080;
        this['model'] = "cdf";
    }
}


/***/ }),

/***/ "6aQK":
/*!*****************************************!*\
  !*** ./src/assets/viaipe_metadata.json ***!
  \*****************************************/
/*! exports provided: pops, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"pops\":{\"ac\":{\"clientes\":[{\"caption\":\"PSRB\",\"id\":\"PSRB - Pronto Socorro de Rio Branco\",\"cod\":1,\"lat\":-9.96457,\"lon\":-67.8144,\"interfaces\":[{\"name\":\"e5530\",\"id\":1},{\"name\":\"e5624\",\"id\":2}]},{\"caption\":\"IFAC\",\"id\":\"IFAC - Campus Xapuri\",\"cod\":2,\"lat\":-10.6607,\"lon\":-68.4943,\"interfaces\":[{\"name\":\"e5523\",\"id\":1},{\"name\":\"e5617\",\"id\":2}]},{\"caption\":\"SESACRE\",\"id\":\"SESACRE - Secretaria de Saúde do Estado do Acre\",\"cod\":3,\"lat\":-9.97452,\"lon\":-67.8075,\"interfaces\":[{\"name\":\"e5534\",\"id\":1},{\"name\":\"e5628\",\"id\":2}]},{\"caption\":\"FUNTAC\",\"id\":\"FUNTAC - Fundação de Tecnologia do Estado do Acre\",\"cod\":4,\"lat\":-9.94599,\"lon\":-67.8684,\"interfaces\":[{\"name\":\"e5521\",\"id\":1},{\"name\":\"e5615\",\"id\":2}]},{\"caption\":\"UFAC\",\"id\":\"UFAC - Campus Floresta\",\"cod\":5,\"lat\":-7.55925,\"lon\":-72.7159,\"interfaces\":[{\"name\":\"e5520\",\"id\":1},{\"name\":\"e5614\",\"id\":2}]},{\"caption\":\"UFAC\",\"id\":\"UFAC - Universidade Federal do Acre\",\"cod\":6,\"lat\":-9.95631,\"lon\":-67.8645,\"interfaces\":[{\"name\":\"e5511\",\"id\":1},{\"name\":\"e5605\",\"id\":2}]},{\"caption\":\"HC\",\"id\":\"HC - Hospital da Criança\",\"cod\":7,\"lat\":-9.9697,\"lon\":-67.8131,\"interfaces\":[{\"name\":\"e5531\",\"id\":1},{\"name\":\"e5625\",\"id\":2}]},{\"caption\":\"IFAC\",\"id\":\"IFAC - Campus Cruzeiro do Sul\",\"cod\":8,\"lat\":-7.5825,\"lon\":-72.7416,\"interfaces\":[{\"name\":\"e5519\",\"id\":1},{\"name\":\"e5613\",\"id\":2}]},{\"caption\":\"IFAC\",\"id\":\"IFAC - Campus Rio Branco\",\"cod\":9,\"lat\":-9.93033,\"lon\":-67.8167,\"interfaces\":[{\"name\":\"e5518\",\"id\":1},{\"name\":\"e5612\",\"id\":2}]},{\"caption\":\"ETSMMR\",\"id\":\"ETSMMR - Escola Técnica em Saúde Maria Moreira da Rocha\",\"cod\":10,\"lat\":-9.97004,\"lon\":-67.8534,\"interfaces\":[{\"name\":\"e5506\",\"id\":1},{\"name\":\"e5600\",\"id\":2}]},{\"caption\":\"FUNDHACRE\",\"id\":\"FUNDHACRE - Fundação Hospital Estadual do Acre\",\"cod\":11,\"lat\":-9.96642,\"lon\":-67.8545,\"interfaces\":[{\"name\":\"e5504\",\"id\":1},{\"name\":\"e5598\",\"id\":2}]},{\"caption\":\"IFAC\",\"id\":\"IFAC - Reitoria\",\"cod\":12,\"lat\":-9.96099,\"lon\":-67.8123,\"interfaces\":[{\"name\":\"e5517\",\"id\":1},{\"name\":\"e5611\",\"id\":2}]},{\"caption\":\"INPA\",\"id\":\"INPA - Instituto Nacional de Pesquisa da Amazônia\",\"cod\":13,\"lat\":-9.95743,\"lon\":-67.8748,\"interfaces\":[{\"name\":\"e5528\",\"id\":1},{\"name\":\"e5622\",\"id\":2}]},{\"caption\":\"IFAC\",\"id\":\"IFAC - Campus Baixada do Sol\",\"cod\":14,\"lat\":-9.98494,\"lon\":-67.8231,\"interfaces\":[{\"name\":\"e5527\",\"id\":1},{\"name\":\"e5621\",\"id\":2}]},{\"caption\":\"UFAC\",\"id\":\"UFAC - Colégio de Aplicação\",\"cod\":15,\"lat\":-9.97116,\"lon\":-67.8109,\"interfaces\":[{\"name\":\"e5512\",\"id\":1},{\"name\":\"e5606\",\"id\":2}]},{\"caption\":\"UFAC\",\"id\":\"UFAC - Campus Feijo\",\"cod\":16,\"lat\":-8.16647,\"lon\":-70.3516,\"interfaces\":[{\"name\":\"e5541\",\"id\":1},{\"name\":\"e5635\",\"id\":2}]},{\"caption\":\"IFAC\",\"id\":\"IFAC - Campus Tarauacá\",\"cod\":17,\"lat\":-8.14331,\"lon\":-70.7709,\"interfaces\":[{\"name\":\"e5536\",\"id\":1},{\"name\":\"e5630\",\"id\":2}]},{\"caption\":\"UFAC\",\"id\":\"UFAC - Núcleo Sena Madureira\",\"cod\":18,\"lat\":-9.06691,\"lon\":-68.6567,\"interfaces\":[{\"name\":\"e5546\",\"id\":1},{\"name\":\"e5640\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPAF-ACRE\",\"cod\":19,\"lat\":-10.0251,\"lon\":-67.7055,\"interfaces\":[{\"name\":\"e5544\",\"id\":1},{\"name\":\"e5638\",\"id\":2}]},{\"caption\":\"IFAC\",\"id\":\"IFAC - Campus Sena Madureira\",\"cod\":20,\"lat\":-9.08237,\"lon\":-68.6798,\"interfaces\":[{\"name\":\"e5537\",\"id\":1},{\"name\":\"e5631\",\"id\":2}]},{\"caption\":\"IPEM\",\"id\":\"IPEM/AC - Instituto de Pesos e Medidas no Acre\",\"cod\":21,\"lat\":-9.94704,\"lon\":-67.8669,\"interfaces\":[{\"name\":\"e5522\",\"id\":1},{\"name\":\"e5616\",\"id\":2}]}]},\"al\":{\"clientes\":[{\"caption\":\"IFAL\",\"id\":\"IFAL-Coruripe\",\"cod\":1,\"lat\":-10.1262,\"lon\":-36.157,\"interfaces\":[{\"name\":\"e3966\",\"id\":1},{\"name\":\"e4014\",\"id\":2},{\"name\":\"e4062\",\"id\":3},{\"name\":\"e4110\",\"id\":4}]},{\"caption\":\"HU\",\"id\":\"HU-EBSRH\",\"cod\":2,\"lat\":-9.55955,\"lon\":-35.7792,\"interfaces\":[{\"name\":\"e3964\",\"id\":1}]},{\"caption\":\"IFAL\",\"id\":\"IFAL-Benedito Bentes\",\"cod\":3,\"lat\":-9.55134,\"lon\":-35.7295,\"interfaces\":[{\"name\":\"e3962\",\"id\":1},{\"name\":\"e4010\",\"id\":2},{\"name\":\"e4058\",\"id\":3},{\"name\":\"e4106\",\"id\":4}]},{\"caption\":\"UFAL\",\"id\":\"UFAL - Delza Gitaí CECA\",\"cod\":4,\"lat\":-9.46542,\"lon\":-35.8264,\"interfaces\":[{\"name\":\"e3959\",\"id\":1},{\"name\":\"e4007\",\"id\":2},{\"name\":\"e4055\",\"id\":3},{\"name\":\"e4103\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL-RioLargo\",\"cod\":5,\"lat\":-9.51264,\"lon\":-35.8027,\"interfaces\":[{\"name\":\"e3949\",\"id\":1},{\"name\":\"e3997\",\"id\":2},{\"name\":\"e4045\",\"id\":3},{\"name\":\"e4093\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL-Batalha\",\"cod\":6,\"lat\":-9.66893,\"lon\":-37.1272,\"interfaces\":[{\"name\":\"e3947\",\"id\":1},{\"name\":\"e3995\",\"id\":2},{\"name\":\"e4043\",\"id\":3},{\"name\":\"e4091\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL-SaoMiguel\",\"cod\":7,\"lat\":-9.77944,\"lon\":-36.0846,\"interfaces\":[{\"name\":\"e3945\",\"id\":1},{\"name\":\"e3993\",\"id\":2},{\"name\":\"e4041\",\"id\":3},{\"name\":\"e4089\",\"id\":4}]},{\"caption\":\"UFAL\",\"id\":\"UFAL - Viçosa\",\"cod\":8,\"lat\":-9.37104,\"lon\":-36.2376,\"interfaces\":[{\"name\":\"e3943\",\"id\":1},{\"name\":\"e3991\",\"id\":2},{\"name\":\"e4039\",\"id\":3},{\"name\":\"e4087\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL - Santana\",\"cod\":9,\"lat\":-9.38628,\"lon\":-37.1447,\"interfaces\":[{\"name\":\"e3936\",\"id\":1},{\"name\":\"e3984\",\"id\":2},{\"name\":\"e4032\",\"id\":3},{\"name\":\"e4080\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL - Satuba\",\"cod\":10,\"lat\":-9.57276,\"lon\":-35.8245,\"interfaces\":[{\"name\":\"e3937\",\"id\":1},{\"name\":\"e3985\",\"id\":2},{\"name\":\"e4033\",\"id\":3},{\"name\":\"e4081\",\"id\":4}]},{\"caption\":\"UFAL\",\"id\":\"UFAL - A.C Simões\",\"cod\":11,\"lat\":-9.5559,\"lon\":-35.7757,\"interfaces\":[{\"name\":\"e3931\",\"id\":1},{\"name\":\"e3979\",\"id\":2},{\"name\":\"e4027\",\"id\":3},{\"name\":\"e4075\",\"id\":4}]},{\"caption\":\"UFAL\",\"id\":\"UFAL - Arapiraca\",\"cod\":12,\"lat\":-9.71821,\"lon\":-36.6873,\"interfaces\":[{\"name\":\"e3938\",\"id\":1},{\"name\":\"e3986\",\"id\":2},{\"name\":\"e4034\",\"id\":3},{\"name\":\"e4082\",\"id\":4}]},{\"caption\":\"UFAL\",\"id\":\"UFAL - Delmiro Gouveia\",\"cod\":13,\"lat\":-9.38622,\"lon\":-37.9997,\"interfaces\":[{\"name\":\"e3939\",\"id\":1},{\"name\":\"e3987\",\"id\":2},{\"name\":\"e4035\",\"id\":3},{\"name\":\"e4083\",\"id\":4}]},{\"caption\":\"UFAL\",\"id\":\"UFAL - Palmeira dos Índios\",\"cod\":14,\"lat\":-9.42257,\"lon\":-36.6433,\"interfaces\":[{\"name\":\"e3940\",\"id\":1},{\"name\":\"e3988\",\"id\":2},{\"name\":\"e4036\",\"id\":3},{\"name\":\"e4084\",\"id\":4}]},{\"caption\":\"UFAL\",\"id\":\"UFAL - Penedo\",\"cod\":15,\"lat\":-10.293,\"lon\":-36.5852,\"interfaces\":[{\"name\":\"e3941\",\"id\":1},{\"name\":\"e3989\",\"id\":2},{\"name\":\"e4037\",\"id\":3},{\"name\":\"e4085\",\"id\":4}]},{\"caption\":\"UFAL\",\"id\":\"UFAL - Santana do Ipanema\",\"cod\":16,\"lat\":-9.37481,\"lon\":-37.2435,\"interfaces\":[{\"name\":\"e3942\",\"id\":1},{\"name\":\"e3990\",\"id\":2},{\"name\":\"e4038\",\"id\":3},{\"name\":\"e4086\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL - Piranhas\",\"cod\":17,\"lat\":-9.6114,\"lon\":-37.7615,\"interfaces\":[{\"name\":\"e3935\",\"id\":1},{\"name\":\"e3983\",\"id\":2},{\"name\":\"e4031\",\"id\":3},{\"name\":\"e4079\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL - Penedo\",\"cod\":18,\"lat\":-10.2869,\"lon\":-36.5443,\"interfaces\":[{\"name\":\"e3934\",\"id\":1},{\"name\":\"e3982\",\"id\":2},{\"name\":\"e4030\",\"id\":3},{\"name\":\"e4078\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL - Arapiraca\",\"cod\":19,\"lat\":-9.75441,\"lon\":-36.6601,\"interfaces\":[{\"name\":\"e3933\",\"id\":1},{\"name\":\"e3981\",\"id\":2},{\"name\":\"e4029\",\"id\":3},{\"name\":\"e4077\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL - Palmeira dos Índios\",\"cod\":20,\"lat\":-9.40665,\"lon\":-36.6554,\"interfaces\":[{\"name\":\"e3957\",\"id\":1},{\"name\":\"e4005\",\"id\":2},{\"name\":\"e4053\",\"id\":3},{\"name\":\"e4101\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL-Murici\",\"cod\":21,\"lat\":-9.30829,\"lon\":-35.9364,\"interfaces\":[{\"name\":\"e3955\",\"id\":1},{\"name\":\"e4003\",\"id\":2},{\"name\":\"e4051\",\"id\":3},{\"name\":\"e4099\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL - Maragogi\",\"cod\":22,\"lat\":-9.05363,\"lon\":-35.2423,\"interfaces\":[{\"name\":\"e3951\",\"id\":1},{\"name\":\"e3999\",\"id\":2},{\"name\":\"e4047\",\"id\":3},{\"name\":\"e4095\",\"id\":4}]},{\"caption\":\"IFAL\",\"id\":\"IFAL - Marechal Deodoro\",\"cod\":23,\"lat\":-9.71298,\"lon\":-35.8948,\"interfaces\":[{\"name\":\"e3953\",\"id\":1},{\"name\":\"e4001\",\"id\":2},{\"name\":\"e4049\",\"id\":3},{\"name\":\"e4097\",\"id\":4}]},{\"caption\":\"EBSRH\",\"id\":\"EBSRH-HUPAA\",\"cod\":24,\"lat\":-9.55955,\"lon\":-35.7792,\"interfaces\":[{\"name\":\"e4012\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUPAA\",\"cod\":25,\"lat\":-9.55955,\"lon\":-35.7792,\"interfaces\":[{\"name\":\"e4060\",\"id\":1},{\"name\":\"e4108\",\"id\":2}]}]},\"am\":{\"clientes\":[{\"caption\":\"FCECON\",\"id\":\"FCECON\",\"cod\":1,\"lat\":-3.08341,\"lon\":-60.0432,\"interfaces\":[{\"name\":\"e6357\",\"id\":1}]},{\"caption\":\"IFAM\",\"id\":\"IFAM - Campus Itacoatiara\",\"cod\":2,\"lat\":-3.07383,\"lon\":-58.4662,\"interfaces\":[{\"name\":\"e6404\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUGV-UFAM\",\"cod\":3,\"lat\":-3.1169,\"lon\":-60.0187,\"interfaces\":[{\"name\":\"e6405\",\"id\":1}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPAA\",\"cod\":4,\"lat\":-2.8935,\"lon\":-59.9727,\"interfaces\":[{\"name\":\"e6355\",\"id\":1}]},{\"caption\":\"UFAM\",\"id\":\"UFAM - Parintins\",\"cod\":5,\"lat\":-2.65424,\"lon\":-56.7488,\"interfaces\":[{\"name\":\"e6408\",\"id\":1}]},{\"caption\":\"UFAM\",\"id\":\"UFAM - Benjamin Constant\",\"cod\":6,\"lat\":-4.39068,\"lon\":-70.0321,\"interfaces\":[{\"name\":\"e6409\",\"id\":1}]},{\"caption\":\"IFAM\",\"id\":\"IFAM - Campus Eirunepé\",\"cod\":7,\"lat\":-6.66266,\"lon\":-69.8634,\"interfaces\":[{\"name\":\"e6410\",\"id\":1}]},{\"caption\":\"IFAM\",\"id\":\"IFAM - Campus Maués\",\"cod\":8,\"lat\":-3.39744,\"lon\":-57.6966,\"interfaces\":[{\"name\":\"e6411\",\"id\":1}]},{\"caption\":\"SUSAM\",\"id\":\"SUSAM\",\"cod\":9,\"lat\":-3.10583,\"lon\":-59.9993,\"interfaces\":[{\"name\":\"e6379\",\"id\":1}]},{\"caption\":\"UEA\",\"id\":\"UEA\",\"cod\":10,\"lat\":-3.12629,\"lon\":-60.0163,\"interfaces\":[{\"name\":\"e6381\",\"id\":1}]},{\"caption\":\"INPA\",\"id\":\"INPA - Manaus\",\"cod\":11,\"lat\":-3.09336,\"lon\":-59.9898,\"interfaces\":[{\"name\":\"e6375\",\"id\":1}]},{\"caption\":\"SECTI\",\"id\":\"SECTI\",\"cod\":12,\"lat\":-3.09359,\"lon\":-60.0163,\"interfaces\":[{\"name\":\"e6377\",\"id\":1}]},{\"caption\":\"IFAM\",\"id\":\"IFAM - Reitoria+CMC+CMDI\",\"cod\":13,\"lat\":-3.12108,\"lon\":-60.0247,\"interfaces\":[{\"name\":\"e6371\",\"id\":1}]},{\"caption\":\"IFAM\",\"id\":\"IFAM - CMZL\",\"cod\":14,\"lat\":-3.07969,\"lon\":-59.9334,\"interfaces\":[{\"name\":\"e6373\",\"id\":1}]},{\"caption\":\"FHAJ\",\"id\":\"FHAJ\",\"cod\":15,\"lat\":-3.11917,\"lon\":-60.0047,\"interfaces\":[{\"name\":\"e6367\",\"id\":1}]},{\"caption\":\"FIOCRUZ\",\"id\":\"FIOCRUZ - Manaus\",\"cod\":16,\"lat\":-3.11258,\"lon\":-60.0121,\"interfaces\":[{\"name\":\"e6369\",\"id\":1}]},{\"caption\":\"UFAM\",\"id\":\"UFAM - Manaus (Setor Norte)\",\"cod\":17,\"lat\":-3.08909,\"lon\":-59.9659,\"interfaces\":[{\"name\":\"e6383\",\"id\":1}]},{\"caption\":\"IFAM\",\"id\":\"IFAM - Campus Presidente Figueiredo\",\"cod\":18,\"lat\":-2.04948,\"lon\":-60.004,\"interfaces\":[{\"name\":\"e6386\",\"id\":1}]},{\"caption\":\"IFAM\",\"id\":\"IFAM - Campus Parintins\",\"cod\":19,\"lat\":-2.65467,\"lon\":-56.7692,\"interfaces\":[{\"name\":\"e6407\",\"id\":1}]},{\"caption\":\"CMM\",\"id\":\"CMM\",\"cod\":20,\"lat\":-3.13105,\"lon\":-60.027,\"interfaces\":[{\"name\":\"e6353\",\"id\":1}]},{\"caption\":\"CBA\",\"id\":\"CBA\",\"cod\":21,\"lat\":-3.137,\"lon\":-59.9826,\"interfaces\":[{\"name\":\"e6351\",\"id\":1}]},{\"caption\":\"MAMIRAUÁ\",\"id\":\"MAMIRAUÁ\",\"cod\":22,\"lat\":-3.35532,\"lon\":-64.7312,\"interfaces\":[{\"name\":\"e6400\",\"id\":1},{\"name\":\"e6401\",\"id\":2}]},{\"caption\":\"IFAM\",\"id\":\"IFAM - Campus Tefé\",\"cod\":23,\"lat\":-3.35196,\"lon\":-64.7185,\"interfaces\":[{\"name\":\"e6399\",\"id\":1}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_SUREG-AM\",\"cod\":24,\"lat\":-3.09982,\"lon\":-59.9953,\"interfaces\":[{\"name\":\"e6390\",\"id\":1}]},{\"caption\":\"UFAM\",\"id\":\"UFAM - Humaitá\",\"cod\":25,\"lat\":-7.51459,\"lon\":-63.0286,\"interfaces\":[{\"name\":\"e6388\",\"id\":1}]},{\"caption\":\"UFAM\",\"id\":\"UFAM - Manaus (Setor Sul)\",\"cod\":26,\"lat\":-3.09957,\"lon\":-59.9758,\"interfaces\":[{\"name\":\"e6394\",\"id\":1}]},{\"caption\":\"FUCAPI\",\"id\":\"FUCAPI - Projeto BEPiD\",\"cod\":27,\"lat\":-3.13651,\"lon\":-59.9798,\"interfaces\":[{\"name\":\"e6392\",\"id\":1}]},{\"caption\":\"FMT\",\"id\":\"FMT - HVD\",\"cod\":28,\"lat\":-3.08664,\"lon\":-60.0351,\"interfaces\":[{\"name\":\"e6365\",\"id\":1}]},{\"caption\":\"HEMOAM\",\"id\":\"HEMOAM\",\"cod\":29,\"lat\":-3.08564,\"lon\":-60.0269,\"interfaces\":[{\"name\":\"e6363\",\"id\":1}]},{\"caption\":\"IFAM\",\"id\":\"IFAM - Campus Manacapuru\",\"cod\":30,\"lat\":-3.26119,\"lon\":-60.6313,\"interfaces\":[{\"name\":\"e6403\",\"id\":1}]},{\"caption\":\"IFAM\",\"id\":\"IFAM - Campus Coari\",\"cod\":31,\"lat\":-4.10558,\"lon\":-63.1336,\"interfaces\":[{\"name\":\"e6402\",\"id\":1}]},{\"caption\":\"UFAM\",\"id\":\"UFAM - Itacoatiara\",\"cod\":32,\"lat\":-3.14279,\"lon\":-58.4316,\"interfaces\":[{\"name\":\"e6397\",\"id\":1}]},{\"caption\":\"UFAM\",\"id\":\"UFAM - Coari\",\"cod\":33,\"lat\":-4.09367,\"lon\":-63.151,\"interfaces\":[{\"name\":\"e6395\",\"id\":1}]},{\"caption\":\"FUAM\",\"id\":\"FUAM\",\"cod\":34,\"lat\":-3.11975,\"lon\":-60.0053,\"interfaces\":[{\"name\":\"e6361\",\"id\":1}]},{\"caption\":\"FAPEAM\",\"id\":\"FAPEAM\",\"cod\":35,\"lat\":-3.07315,\"lon\":-60.0278,\"interfaces\":[{\"name\":\"e6359\",\"id\":1}]}]},\"ap\":{\"clientes\":[{\"caption\":\"IEPA\",\"id\":\"IEPA-CIE\",\"cod\":1,\"lat\":-0.00710854,\"lon\":-51.0795,\"interfaces\":[{\"name\":\"e2402\",\"id\":1},{\"name\":\"e2401\",\"id\":2},{\"name\":\"e2460\",\"id\":3},{\"name\":\"e2459\",\"id\":4},{\"name\":\"e2488\",\"id\":5},{\"name\":\"e2489\",\"id\":6},{\"name\":\"e2518\",\"id\":7},{\"name\":\"e2517\",\"id\":8},{\"name\":\"e2547\",\"id\":9},{\"name\":\"e2546\",\"id\":10},{\"name\":\"e2576\",\"id\":11},{\"name\":\"e2575\",\"id\":12},{\"name\":\"e2604\",\"id\":13},{\"name\":\"e2605\",\"id\":14},{\"name\":\"e2634\",\"id\":15},{\"name\":\"e2633\",\"id\":16}]},{\"caption\":\"IFAP\",\"id\":\"IFAP - Laranjal do Jari\",\"cod\":2,\"lat\":-0.822294,\"lon\":-52.5152,\"interfaces\":[{\"name\":\"e2382\",\"id\":1},{\"name\":\"e2440\",\"id\":2},{\"name\":\"e2469\",\"id\":3},{\"name\":\"e2498\",\"id\":4},{\"name\":\"e2527\",\"id\":5},{\"name\":\"e2556\",\"id\":6},{\"name\":\"e2585\",\"id\":7},{\"name\":\"e2614\",\"id\":8}]},{\"caption\":\"UEAP\",\"id\":\"UEAP - Campus 1\",\"cod\":3,\"lat\":0.0385165,\"lon\":-51.0556,\"interfaces\":[{\"name\":\"e2396\",\"id\":1},{\"name\":\"e2454\",\"id\":2},{\"name\":\"e2483\",\"id\":3},{\"name\":\"e2512\",\"id\":4},{\"name\":\"e2541\",\"id\":5},{\"name\":\"e2570\",\"id\":6},{\"name\":\"e2599\",\"id\":7},{\"name\":\"e2628\",\"id\":8}]},{\"caption\":\"IFAP\",\"id\":\"IFAP - Campus Santana\",\"cod\":4,\"lat\":-0.0211204,\"lon\":-51.1807,\"interfaces\":[{\"name\":\"e2378\",\"id\":1},{\"name\":\"e2436\",\"id\":2},{\"name\":\"e2465\",\"id\":3},{\"name\":\"e2494\",\"id\":4},{\"name\":\"e2523\",\"id\":5},{\"name\":\"e2552\",\"id\":6},{\"name\":\"e2581\",\"id\":7},{\"name\":\"e2610\",\"id\":8}]},{\"caption\":\"SARAH\",\"id\":\"SARAH\",\"cod\":5,\"lat\":-0.00629318,\"lon\":-51.0819,\"interfaces\":[{\"name\":\"e2393\",\"id\":1},{\"name\":\"e2451\",\"id\":2},{\"name\":\"e2480\",\"id\":3},{\"name\":\"e2509\",\"id\":4},{\"name\":\"e2538\",\"id\":5},{\"name\":\"e2567\",\"id\":6},{\"name\":\"e2596\",\"id\":7},{\"name\":\"e2625\",\"id\":8}]},{\"caption\":\"UNIFAP\",\"id\":\"UNIFAP - Campus Santana\",\"cod\":6,\"lat\":-0.0185394,\"lon\":-51.1805,\"interfaces\":[{\"name\":\"e2380\",\"id\":1},{\"name\":\"e2438\",\"id\":2},{\"name\":\"e2467\",\"id\":3},{\"name\":\"e2496\",\"id\":4},{\"name\":\"e2525\",\"id\":5},{\"name\":\"e2554\",\"id\":6},{\"name\":\"e2583\",\"id\":7},{\"name\":\"e2612\",\"id\":8}]},{\"caption\":\"IFAP\",\"id\":\"IFAP - Porto Grande\",\"cod\":7,\"lat\":0.711898,\"lon\":-51.4139,\"interfaces\":[{\"name\":\"e2394\",\"id\":1},{\"name\":\"e2452\",\"id\":2},{\"name\":\"e2481\",\"id\":3},{\"name\":\"e2510\",\"id\":4},{\"name\":\"e2539\",\"id\":5},{\"name\":\"e2568\",\"id\":6},{\"name\":\"e2597\",\"id\":7},{\"name\":\"e2626\",\"id\":8}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPAF-AMAPA\",\"cod\":8,\"lat\":-0.0125508,\"lon\":-51.0828,\"interfaces\":[{\"name\":\"e2387\",\"id\":1},{\"name\":\"e2445\",\"id\":2},{\"name\":\"e2474\",\"id\":3},{\"name\":\"e2503\",\"id\":4},{\"name\":\"e2532\",\"id\":5},{\"name\":\"e2561\",\"id\":6},{\"name\":\"e2590\",\"id\":7},{\"name\":\"e2619\",\"id\":8}]},{\"caption\":\"UNIFAP\",\"id\":\"UNIFAP - Campus Mazagão\",\"cod\":9,\"lat\":-0.115577,\"lon\":-51.2929,\"interfaces\":[{\"name\":\"e2385\",\"id\":1},{\"name\":\"e2443\",\"id\":2},{\"name\":\"e2472\",\"id\":3},{\"name\":\"e2501\",\"id\":4},{\"name\":\"e2530\",\"id\":5},{\"name\":\"e2559\",\"id\":6},{\"name\":\"e2588\",\"id\":7},{\"name\":\"e2617\",\"id\":8}]},{\"caption\":\"IFAP\",\"id\":\"IFAP - Macapá e Reitoria\",\"cod\":10,\"lat\":0.0857327,\"lon\":-51.0912,\"interfaces\":[{\"name\":\"e2391\",\"id\":1},{\"name\":\"e2449\",\"id\":2},{\"name\":\"e2478\",\"id\":3},{\"name\":\"e2507\",\"id\":4},{\"name\":\"e2536\",\"id\":5},{\"name\":\"e2565\",\"id\":6},{\"name\":\"e2594\",\"id\":7},{\"name\":\"e2623\",\"id\":8}]},{\"caption\":\"UNIFAP\",\"id\":\"UNIFAP - Campus Marco Zero\",\"cod\":11,\"lat\":-0.00397253,\"lon\":-51.0841,\"interfaces\":[{\"name\":\"e2389\",\"id\":1},{\"name\":\"e2447\",\"id\":2},{\"name\":\"e2476\",\"id\":3},{\"name\":\"e2505\",\"id\":4},{\"name\":\"e2534\",\"id\":5},{\"name\":\"e2563\",\"id\":6},{\"name\":\"e2592\",\"id\":7},{\"name\":\"e2621\",\"id\":8}]},{\"caption\":\"IPEM\",\"id\":\"IPEM\",\"cod\":12,\"lat\":0.0732779,\"lon\":-51.0616,\"interfaces\":[{\"name\":\"e2399\",\"id\":1},{\"name\":\"e2457\",\"id\":2},{\"name\":\"e2486\",\"id\":3},{\"name\":\"e2515\",\"id\":4},{\"name\":\"e2544\",\"id\":5},{\"name\":\"e2573\",\"id\":6},{\"name\":\"e2602\",\"id\":7},{\"name\":\"e2631\",\"id\":8}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HU-UNIFAP\",\"cod\":13,\"lat\":-0.000343323,\"lon\":-51.0827,\"interfaces\":[{\"name\":\"e2398\",\"id\":1},{\"name\":\"e2377\",\"id\":2},{\"name\":\"e2435\",\"id\":3},{\"name\":\"e2456\",\"id\":4},{\"name\":\"e2485\",\"id\":5},{\"name\":\"e2464\",\"id\":6},{\"name\":\"e2514\",\"id\":7},{\"name\":\"e2493\",\"id\":8},{\"name\":\"e2543\",\"id\":9},{\"name\":\"e2522\",\"id\":10},{\"name\":\"e2572\",\"id\":11},{\"name\":\"e2551\",\"id\":12},{\"name\":\"e2601\",\"id\":13},{\"name\":\"e2580\",\"id\":14},{\"name\":\"e2609\",\"id\":15},{\"name\":\"e2630\",\"id\":16}]},{\"caption\":\"IFAP\",\"id\":\"IFAP - Pedra Branca\",\"cod\":14,\"lat\":0.774124,\"lon\":-51.9555,\"interfaces\":[{\"name\":\"e2549\",\"id\":1},{\"name\":\"e2548\",\"id\":2},{\"name\":\"e2577\",\"id\":3},{\"name\":\"e2606\",\"id\":4},{\"name\":\"e2635\",\"id\":5}]}]},\"ba\":{\"clientes\":[{\"caption\":\"HSR\",\"id\":\"HSR - Garibaldi\",\"cod\":1,\"lat\":-13.0021,\"lon\":-38.5034,\"interfaces\":[{\"name\":\"e253930\",\"id\":1},{\"name\":\"e254493\",\"id\":2},{\"name\":\"e254776\",\"id\":3},{\"name\":\"e255332\",\"id\":4},{\"name\":\"e255880\",\"id\":5}]},{\"caption\":\"HSR\",\"id\":\"HSR - Sao Marcos\",\"cod\":2,\"lat\":-12.9282,\"lon\":-38.4305,\"interfaces\":[{\"name\":\"e253932\",\"id\":1},{\"name\":\"e253933\",\"id\":2},{\"name\":\"e254496\",\"id\":3},{\"name\":\"e254495\",\"id\":4},{\"name\":\"e254779\",\"id\":5},{\"name\":\"e254778\",\"id\":6},{\"name\":\"e255334\",\"id\":7},{\"name\":\"e255335\",\"id\":8},{\"name\":\"e255882\",\"id\":9},{\"name\":\"e255883\",\"id\":10}]},{\"caption\":\"EBMSP\",\"id\":\"EBMSP - Brotas\",\"cod\":3,\"lat\":-12.9907,\"lon\":-38.4885,\"interfaces\":[{\"name\":\"e253926\",\"id\":1},{\"name\":\"e253925\",\"id\":2},{\"name\":\"e253924\",\"id\":3},{\"name\":\"e254487\",\"id\":4},{\"name\":\"e254489\",\"id\":5},{\"name\":\"e254488\",\"id\":6},{\"name\":\"e254772\",\"id\":7},{\"name\":\"e254771\",\"id\":8},{\"name\":\"e254770\",\"id\":9},{\"name\":\"e255328\",\"id\":10},{\"name\":\"e255327\",\"id\":11},{\"name\":\"e255326\",\"id\":12},{\"name\":\"e255876\",\"id\":13},{\"name\":\"e255875\",\"id\":14},{\"name\":\"e255874\",\"id\":15}]},{\"caption\":\"IFBAIANO\",\"id\":\"IFBAIANO - Reitoria\",\"cod\":4,\"lat\":-12.9717,\"lon\":-38.4383,\"interfaces\":[{\"name\":\"e253928\",\"id\":1},{\"name\":\"e254491\",\"id\":2},{\"name\":\"e254774\",\"id\":3},{\"name\":\"e255330\",\"id\":4},{\"name\":\"e255878\",\"id\":5}]},{\"caption\":\"IBAMETRO\",\"id\":\"IBAMETRO\",\"cod\":5,\"lat\":-13.0078,\"lon\":-38.4622,\"interfaces\":[{\"name\":\"e253944\",\"id\":1},{\"name\":\"e254507\",\"id\":2},{\"name\":\"e254790\",\"id\":3},{\"name\":\"e255346\",\"id\":4},{\"name\":\"e255894\",\"id\":5}]},{\"caption\":\"IAT\",\"id\":\"Instituito Anisio Teixeira (IAT)\",\"cod\":6,\"lat\":-12.9371,\"lon\":-38.416,\"interfaces\":[{\"name\":\"e253947\",\"id\":1},{\"name\":\"e253946\",\"id\":2},{\"name\":\"e254509\",\"id\":3},{\"name\":\"e254510\",\"id\":4},{\"name\":\"e254793\",\"id\":5},{\"name\":\"e254792\",\"id\":6},{\"name\":\"e255349\",\"id\":7},{\"name\":\"e255348\",\"id\":8},{\"name\":\"e255897\",\"id\":9},{\"name\":\"e255896\",\"id\":10}]},{\"caption\":\"IRDEB\",\"id\":\"IRDEB\",\"cod\":7,\"lat\":-12.9968,\"lon\":-38.5,\"interfaces\":[{\"name\":\"e253935\",\"id\":1},{\"name\":\"e253936\",\"id\":2},{\"name\":\"e254498\",\"id\":3},{\"name\":\"e254499\",\"id\":4},{\"name\":\"e254782\",\"id\":5},{\"name\":\"e254781\",\"id\":6},{\"name\":\"e255338\",\"id\":7},{\"name\":\"e255337\",\"id\":8},{\"name\":\"e255886\",\"id\":9},{\"name\":\"e255885\",\"id\":10}]},{\"caption\":\"Tecnocentro / Parque Tecnológico (BA)\",\"id\":\"Tecnocentro / Parque Tecnológico (BA)\",\"cod\":8,\"lat\":-12.9232,\"lon\":-38.3885,\"interfaces\":[{\"name\":\"e253941\",\"id\":1},{\"name\":\"e253942\",\"id\":2},{\"name\":\"e253938\",\"id\":3},{\"name\":\"e253939\",\"id\":4},{\"name\":\"e253940\",\"id\":5},{\"name\":\"e254504\",\"id\":6},{\"name\":\"e254505\",\"id\":7},{\"name\":\"e254501\",\"id\":8},{\"name\":\"e254502\",\"id\":9},{\"name\":\"e254503\",\"id\":10},{\"name\":\"e254786\",\"id\":11},{\"name\":\"e254787\",\"id\":12},{\"name\":\"e254784\",\"id\":13},{\"name\":\"e254785\",\"id\":14},{\"name\":\"e254788\",\"id\":15},{\"name\":\"e255341\",\"id\":16},{\"name\":\"e255340\",\"id\":17},{\"name\":\"e255343\",\"id\":18},{\"name\":\"e255342\",\"id\":19},{\"name\":\"e255344\",\"id\":20},{\"name\":\"e255891\",\"id\":21},{\"name\":\"e255890\",\"id\":22},{\"name\":\"e255892\",\"id\":23},{\"name\":\"e255888\",\"id\":24},{\"name\":\"e255889\",\"id\":25}]},{\"caption\":\"SARAH\",\"id\":\"Rede SARAH - Salvador\",\"cod\":9,\"lat\":-12.9815,\"lon\":-38.4499,\"interfaces\":[{\"name\":\"e253949\",\"id\":1},{\"name\":\"e254512\",\"id\":2},{\"name\":\"e254795\",\"id\":3},{\"name\":\"e255351\",\"id\":4},{\"name\":\"e255899\",\"id\":5}]},{\"caption\":\"HJV\",\"id\":\"Hospital Jorge Valente (HJV)\",\"cod\":10,\"lat\":-13.0062,\"lon\":-38.5008,\"interfaces\":[{\"name\":\"e253951\",\"id\":1},{\"name\":\"e254514\",\"id\":2},{\"name\":\"e254797\",\"id\":3},{\"name\":\"e255353\",\"id\":4},{\"name\":\"e255901\",\"id\":5}]},{\"caption\":\"CRE\",\"id\":\"CRE-TEA (HMG-CAMPOGRANDE)\",\"cod\":11,\"lat\":-12.9892,\"lon\":-38.5233,\"interfaces\":[{\"name\":\"e254000\",\"id\":1},{\"name\":\"e253999\",\"id\":2},{\"name\":\"e254562\",\"id\":3},{\"name\":\"e254563\",\"id\":4},{\"name\":\"e254845\",\"id\":5},{\"name\":\"e254846\",\"id\":6},{\"name\":\"e255402\",\"id\":7},{\"name\":\"e255401\",\"id\":8},{\"name\":\"e255950\",\"id\":9},{\"name\":\"e255949\",\"id\":10}]},{\"caption\":\"UFOB\",\"id\":\"UFOB-Barra\",\"cod\":12,\"lat\":-11.0873,\"lon\":-43.1429,\"interfaces\":[{\"name\":\"e253865\",\"id\":1},{\"name\":\"e254428\",\"id\":2},{\"name\":\"e254709\",\"id\":3},{\"name\":\"e255265\",\"id\":4},{\"name\":\"e255813\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Itaberaba\",\"cod\":13,\"lat\":-12.5045,\"lon\":-40.2502,\"interfaces\":[{\"name\":\"e253852\",\"id\":1},{\"name\":\"e254415\",\"id\":2},{\"name\":\"e254696\",\"id\":3},{\"name\":\"e255252\",\"id\":4},{\"name\":\"e255800\",\"id\":5}]},{\"caption\":\"Hospital Municipal de Salvador\",\"id\":\"Hospital Municipal de Salvador\",\"cod\":14,\"lat\":-12.8978,\"lon\":-38.3899,\"interfaces\":[{\"name\":\"e253996\",\"id\":1},{\"name\":\"e254559\",\"id\":2},{\"name\":\"e254842\",\"id\":3},{\"name\":\"e255398\",\"id\":4},{\"name\":\"e255946\",\"id\":5}]},{\"caption\":\"UNIFACS\",\"id\":\"UNIFACS - Mouraria\",\"cod\":15,\"lat\":-12.9794,\"lon\":-38.5098,\"interfaces\":[{\"name\":\"e253973\",\"id\":1},{\"name\":\"e253975\",\"id\":2},{\"name\":\"e254538\",\"id\":3},{\"name\":\"e254536\",\"id\":4},{\"name\":\"e254821\",\"id\":5},{\"name\":\"e254819\",\"id\":6},{\"name\":\"e255375\",\"id\":7},{\"name\":\"e255377\",\"id\":8},{\"name\":\"e255923\",\"id\":9},{\"name\":\"e255925\",\"id\":10}]},{\"caption\":\"HHCL\",\"id\":\"HHCL (IBOPC)\",\"cod\":16,\"lat\":-12.9948,\"lon\":-38.5231,\"interfaces\":[{\"name\":\"e253971\",\"id\":1},{\"name\":\"e254534\",\"id\":2},{\"name\":\"e254817\",\"id\":3},{\"name\":\"e255373\",\"id\":4},{\"name\":\"e255921\",\"id\":5}]},{\"caption\":\"FTC\",\"id\":\"UniFTC - Paralela\",\"cod\":17,\"lat\":-12.9346,\"lon\":-38.3921,\"interfaces\":[{\"name\":\"e253969\",\"id\":1},{\"name\":\"e254532\",\"id\":2},{\"name\":\"e254815\",\"id\":3},{\"name\":\"e255371\",\"id\":4},{\"name\":\"e255919\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA - Lauro\",\"cod\":18,\"lat\":-12.8918,\"lon\":-38.3546,\"interfaces\":[{\"name\":\"e253967\",\"id\":1},{\"name\":\"e254530\",\"id\":2},{\"name\":\"e254813\",\"id\":3},{\"name\":\"e255369\",\"id\":4},{\"name\":\"e255917\",\"id\":5}]},{\"caption\":\"UEFS\",\"id\":\"UEFS-Lencois\",\"cod\":19,\"lat\":-12.5637,\"lon\":-41.3908,\"interfaces\":[{\"name\":\"e253821\",\"id\":1},{\"name\":\"e254384\",\"id\":2},{\"name\":\"e254665\",\"id\":3},{\"name\":\"e255221\",\"id\":4},{\"name\":\"e255769\",\"id\":5}]},{\"caption\":\"UNIVASF\",\"id\":\"UNIVASF-Paulo Afonso\",\"cod\":20,\"lat\":-9.38221,\"lon\":-38.2246,\"interfaces\":[{\"name\":\"e253822\",\"id\":1},{\"name\":\"e254385\",\"id\":2},{\"name\":\"e254666\",\"id\":3},{\"name\":\"e255222\",\"id\":4},{\"name\":\"e255770\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Seabra\",\"cod\":21,\"lat\":-12.3994,\"lon\":-41.786,\"interfaces\":[{\"name\":\"e253985\",\"id\":1},{\"name\":\"e254548\",\"id\":2},{\"name\":\"e254831\",\"id\":3},{\"name\":\"e255387\",\"id\":4},{\"name\":\"e255935\",\"id\":5}]},{\"caption\":\"HSI\",\"id\":\"HSI-Ondina-instituicao\",\"cod\":22,\"lat\":-13.0017,\"lon\":-38.5061,\"interfaces\":[{\"name\":\"e253976\",\"id\":1},{\"name\":\"e254539\",\"id\":2},{\"name\":\"e254822\",\"id\":3},{\"name\":\"e255378\",\"id\":4},{\"name\":\"e255926\",\"id\":5}]},{\"caption\":\"HMG\",\"id\":\"Hospital Martagão Gesteira (HMG)\",\"cod\":23,\"lat\":-12.9832,\"lon\":-38.5085,\"interfaces\":[{\"name\":\"e253978\",\"id\":1},{\"name\":\"e254541\",\"id\":2},{\"name\":\"e254824\",\"id\":3},{\"name\":\"e255380\",\"id\":4},{\"name\":\"e255928\",\"id\":5}]},{\"caption\":\"UFOB\",\"id\":\"UFOB-Bom Jesus da Lapa\",\"cod\":24,\"lat\":-13.2592,\"lon\":-43.4146,\"interfaces\":[{\"name\":\"e253824\",\"id\":1},{\"name\":\"e254387\",\"id\":2},{\"name\":\"e254668\",\"id\":3},{\"name\":\"e255224\",\"id\":4},{\"name\":\"e255772\",\"id\":5}]},{\"caption\":\"UFOB\",\"id\":\"UFOB-Santa Maria da Vitoria\",\"cod\":25,\"lat\":-13.4055,\"lon\":-44.208,\"interfaces\":[{\"name\":\"e253983\",\"id\":1},{\"name\":\"e254546\",\"id\":2},{\"name\":\"e254829\",\"id\":3},{\"name\":\"e255385\",\"id\":4},{\"name\":\"e255933\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Euclides da Cunha\",\"cod\":26,\"lat\":-10.5372,\"lon\":-38.9981,\"interfaces\":[{\"name\":\"e253981\",\"id\":1},{\"name\":\"e254544\",\"id\":2},{\"name\":\"e254827\",\"id\":3},{\"name\":\"e255383\",\"id\":4},{\"name\":\"e255931\",\"id\":5}]},{\"caption\":\"EBMSP\",\"id\":\"EBMSP - Cabula\",\"cod\":27,\"lat\":-12.9591,\"lon\":-38.4527,\"interfaces\":[{\"name\":\"e253922\",\"id\":1},{\"name\":\"e253921\",\"id\":2},{\"name\":\"e254485\",\"id\":3},{\"name\":\"e254484\",\"id\":4},{\"name\":\"e254768\",\"id\":5},{\"name\":\"e254767\",\"id\":6},{\"name\":\"e255323\",\"id\":7},{\"name\":\"e255324\",\"id\":8},{\"name\":\"e255872\",\"id\":9},{\"name\":\"e255871\",\"id\":10}]},{\"caption\":\"IFBA\",\"id\":\"IFBA - Reitoria\",\"cod\":28,\"lat\":-12.9935,\"lon\":-38.5224,\"interfaces\":[{\"name\":\"e253918\",\"id\":1},{\"name\":\"e253919\",\"id\":2},{\"name\":\"e254481\",\"id\":3},{\"name\":\"e254482\",\"id\":4},{\"name\":\"e254764\",\"id\":5},{\"name\":\"e254765\",\"id\":6},{\"name\":\"e255321\",\"id\":7},{\"name\":\"e255320\",\"id\":8},{\"name\":\"e255868\",\"id\":9},{\"name\":\"e255869\",\"id\":10}]},{\"caption\":\"FAPESB\",\"id\":\"FAPESB\",\"cod\":29,\"lat\":-13.0083,\"lon\":-38.512,\"interfaces\":[{\"name\":\"e253910\",\"id\":1},{\"name\":\"e254473\",\"id\":2},{\"name\":\"e254756\",\"id\":3},{\"name\":\"e255312\",\"id\":4},{\"name\":\"e255860\",\"id\":5}]},{\"caption\":\"FIOCRUZ\",\"id\":\"FIOCRUZ (BA)\",\"cod\":30,\"lat\":-12.9956,\"lon\":-38.4874,\"interfaces\":[{\"name\":\"e253908\",\"id\":1},{\"name\":\"e254471\",\"id\":2},{\"name\":\"e254754\",\"id\":3},{\"name\":\"e255310\",\"id\":4},{\"name\":\"e255858\",\"id\":5}]},{\"caption\":\"FCE\",\"id\":\"EsFCEx\",\"cod\":31,\"lat\":-12.9988,\"lon\":-38.4565,\"interfaces\":[{\"name\":\"e253916\",\"id\":1},{\"name\":\"e253914\",\"id\":2},{\"name\":\"e253915\",\"id\":3},{\"name\":\"e254477\",\"id\":4},{\"name\":\"e254478\",\"id\":5},{\"name\":\"e254479\",\"id\":6},{\"name\":\"e254760\",\"id\":7},{\"name\":\"e254761\",\"id\":8},{\"name\":\"e254762\",\"id\":9},{\"name\":\"e255318\",\"id\":10},{\"name\":\"e255316\",\"id\":11},{\"name\":\"e255317\",\"id\":12},{\"name\":\"e255864\",\"id\":13},{\"name\":\"e255865\",\"id\":14},{\"name\":\"e255866\",\"id\":15}]},{\"caption\":\"FRB\",\"id\":\"FRB - Area 1\",\"cod\":32,\"lat\":-12.9602,\"lon\":-38.4314,\"interfaces\":[{\"name\":\"e253912\",\"id\":1},{\"name\":\"e254475\",\"id\":2},{\"name\":\"e254758\",\"id\":3},{\"name\":\"e255314\",\"id\":4},{\"name\":\"e255862\",\"id\":5}]},{\"caption\":\"SECTI\",\"id\":\"SECTI-BA - Sede\",\"cod\":33,\"lat\":-12.9442,\"lon\":-38.4319,\"interfaces\":[{\"name\":\"e253899\",\"id\":1},{\"name\":\"e253898\",\"id\":2},{\"name\":\"e254462\",\"id\":3},{\"name\":\"e254461\",\"id\":4},{\"name\":\"e254744\",\"id\":5},{\"name\":\"e254745\",\"id\":6},{\"name\":\"e255301\",\"id\":7},{\"name\":\"e255300\",\"id\":8},{\"name\":\"e255848\",\"id\":9},{\"name\":\"e255849\",\"id\":10}]},{\"caption\":\"FIEB\",\"id\":\"FIEB - Salvador (Sede)\",\"cod\":34,\"lat\":-12.9836,\"lon\":-38.4499,\"interfaces\":[{\"name\":\"e253896\",\"id\":1},{\"name\":\"e254459\",\"id\":2},{\"name\":\"e254742\",\"id\":3},{\"name\":\"e255298\",\"id\":4},{\"name\":\"e255846\",\"id\":5}]},{\"caption\":\"UCSAL\",\"id\":\"UCSAL - Pituacu\",\"cod\":35,\"lat\":-12.947,\"lon\":-38.4135,\"interfaces\":[{\"name\":\"e253906\",\"id\":1},{\"name\":\"e254469\",\"id\":2},{\"name\":\"e254752\",\"id\":3},{\"name\":\"e255308\",\"id\":4},{\"name\":\"e255856\",\"id\":5}]},{\"caption\":\"HGRS\",\"id\":\"Hospital Geral Roberto Santos (HGRS)\",\"cod\":36,\"lat\":-12.9556,\"lon\":-38.4505,\"interfaces\":[{\"name\":\"e253901\",\"id\":1},{\"name\":\"e253902\",\"id\":2},{\"name\":\"e254465\",\"id\":3},{\"name\":\"e254464\",\"id\":4},{\"name\":\"e254748\",\"id\":5},{\"name\":\"e254747\",\"id\":6},{\"name\":\"e255304\",\"id\":7},{\"name\":\"e255303\",\"id\":8},{\"name\":\"e255851\",\"id\":9},{\"name\":\"e255852\",\"id\":10}]},{\"caption\":\"UNEB\",\"id\":\"UNEB - Paulo Afonso (Caatinga)\",\"cod\":37,\"lat\":-9.40222,\"lon\":-38.2146,\"interfaces\":[{\"name\":\"e254029\",\"id\":1},{\"name\":\"e254592\",\"id\":2},{\"name\":\"e254875\",\"id\":3},{\"name\":\"e255425\",\"id\":4},{\"name\":\"e255971\",\"id\":5}]},{\"caption\":\"UNEB\",\"id\":\"UNEB - Paulo Afonso (C. Águas)\",\"cod\":38,\"lat\":-9.40268,\"lon\":-38.2148,\"interfaces\":[{\"name\":\"e254031\",\"id\":1},{\"name\":\"e254594\",\"id\":2},{\"name\":\"e254877\",\"id\":3},{\"name\":\"e255427\",\"id\":4},{\"name\":\"e255973\",\"id\":5}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_SUREG-SA\",\"cod\":39,\"lat\":-12.939,\"lon\":-38.434,\"interfaces\":[{\"name\":\"e254026\",\"id\":1},{\"name\":\"e254025\",\"id\":2},{\"name\":\"e254588\",\"id\":3},{\"name\":\"e254589\",\"id\":4},{\"name\":\"e254871\",\"id\":5},{\"name\":\"e254872\",\"id\":6},{\"name\":\"e255421\",\"id\":7},{\"name\":\"e255422\",\"id\":8},{\"name\":\"e255967\",\"id\":9},{\"name\":\"e255968\",\"id\":10}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Paulo Afonso-RePEPE\",\"cod\":40,\"lat\":-9.40736,\"lon\":-38.2178,\"interfaces\":[{\"name\":\"e253868\",\"id\":1},{\"name\":\"e254431\",\"id\":2},{\"name\":\"e254712\",\"id\":3},{\"name\":\"e255268\",\"id\":4},{\"name\":\"e255816\",\"id\":5}]},{\"caption\":\"UFSB\",\"id\":\"UFSB-Teixeira de Freitas\",\"cod\":41,\"lat\":-17.534,\"lon\":-39.7222,\"interfaces\":[{\"name\":\"e253788\",\"id\":1},{\"name\":\"e254351\",\"id\":2},{\"name\":\"e254632\",\"id\":3},{\"name\":\"e255188\",\"id\":4},{\"name\":\"e255736\",\"id\":5}]},{\"caption\":\"UFRB\",\"id\":\"UFRB-Amargosa\",\"cod\":42,\"lat\":-13.0235,\"lon\":-39.6135,\"interfaces\":[{\"name\":\"e253789\",\"id\":1},{\"name\":\"e254352\",\"id\":2},{\"name\":\"e254633\",\"id\":3},{\"name\":\"e255189\",\"id\":4},{\"name\":\"e255737\",\"id\":5}]},{\"caption\":\"UEFS\",\"id\":\"UEFS\",\"cod\":43,\"lat\":-12.2004,\"lon\":-38.9715,\"interfaces\":[{\"name\":\"e253782\",\"id\":1},{\"name\":\"e254345\",\"id\":2},{\"name\":\"e254626\",\"id\":3},{\"name\":\"e255182\",\"id\":4},{\"name\":\"e255730\",\"id\":5}]},{\"caption\":\"UESB\",\"id\":\"UESB\",\"cod\":44,\"lat\":-15.0486,\"lon\":-40.3917,\"interfaces\":[{\"name\":\"e253783\",\"id\":1},{\"name\":\"e254346\",\"id\":2},{\"name\":\"e254627\",\"id\":3},{\"name\":\"e255183\",\"id\":4},{\"name\":\"e255731\",\"id\":5}]},{\"caption\":\"CNPMF\",\"id\":\"Embrapa - CNPMF\",\"cod\":45,\"lat\":-12.6824,\"lon\":-39.0884,\"interfaces\":[{\"name\":\"e253826\",\"id\":1},{\"name\":\"e254389\",\"id\":2},{\"name\":\"e254670\",\"id\":3},{\"name\":\"e255226\",\"id\":4},{\"name\":\"e255774\",\"id\":5}]},{\"caption\":\"UFRB\",\"id\":\"UFRB-Cruz das Almas\",\"cod\":46,\"lat\":-12.6595,\"lon\":-39.0879,\"interfaces\":[{\"name\":\"e253805\",\"id\":1},{\"name\":\"e254368\",\"id\":2},{\"name\":\"e254649\",\"id\":3},{\"name\":\"e255205\",\"id\":4},{\"name\":\"e255753\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Santo Amaro\",\"cod\":47,\"lat\":-12.5449,\"lon\":-38.7209,\"interfaces\":[{\"name\":\"e253785\",\"id\":1},{\"name\":\"e254348\",\"id\":2},{\"name\":\"e254629\",\"id\":3},{\"name\":\"e255185\",\"id\":4},{\"name\":\"e255733\",\"id\":5}]},{\"caption\":\"UFRB\",\"id\":\"UFRB-Cachoeira-Leite Alves\",\"cod\":48,\"lat\":-12.6049,\"lon\":-38.9628,\"interfaces\":[{\"name\":\"e253784\",\"id\":1},{\"name\":\"e254347\",\"id\":2},{\"name\":\"e254628\",\"id\":3},{\"name\":\"e255184\",\"id\":4},{\"name\":\"e255732\",\"id\":5}]},{\"caption\":\"UFRB\",\"id\":\"UFRB-Cachoeira-Casa da Moeda\",\"cod\":49,\"lat\":-12.6014,\"lon\":-38.9666,\"interfaces\":[{\"name\":\"e253786\",\"id\":1},{\"name\":\"e254349\",\"id\":2},{\"name\":\"e254630\",\"id\":3},{\"name\":\"e255186\",\"id\":4},{\"name\":\"e255734\",\"id\":5}]},{\"caption\":\"UFSB\",\"id\":\"UFSB-Itabuna\",\"cod\":50,\"lat\":-14.7884,\"lon\":-39.2748,\"interfaces\":[{\"name\":\"e253787\",\"id\":1},{\"name\":\"e254350\",\"id\":2},{\"name\":\"e254631\",\"id\":3},{\"name\":\"e255187\",\"id\":4},{\"name\":\"e255735\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Bom Jesus da Lapa\",\"cod\":51,\"lat\":-13.2617,\"lon\":-43.547,\"interfaces\":[{\"name\":\"e253844\",\"id\":1},{\"name\":\"e254407\",\"id\":2},{\"name\":\"e254688\",\"id\":3},{\"name\":\"e255244\",\"id\":4},{\"name\":\"e255792\",\"id\":5}]},{\"caption\":\"SESAB\",\"id\":\"SESAB-CAB\",\"cod\":52,\"lat\":-12.9438,\"lon\":-38.4288,\"interfaces\":[{\"name\":\"e253994\",\"id\":1},{\"name\":\"e254557\",\"id\":2},{\"name\":\"e254840\",\"id\":3},{\"name\":\"e255396\",\"id\":4},{\"name\":\"e255944\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Irece\",\"cod\":53,\"lat\":-11.328,\"lon\":-41.8638,\"interfaces\":[{\"name\":\"e253781\",\"id\":1},{\"name\":\"e254344\",\"id\":2},{\"name\":\"e254625\",\"id\":3},{\"name\":\"e255181\",\"id\":4},{\"name\":\"e255729\",\"id\":5}]},{\"caption\":\"UESC\",\"id\":\"UESC\",\"cod\":54,\"lat\":-14.7969,\"lon\":-39.1723,\"interfaces\":[{\"name\":\"e253780\",\"id\":1},{\"name\":\"e254343\",\"id\":2},{\"name\":\"e254624\",\"id\":3},{\"name\":\"e255180\",\"id\":4},{\"name\":\"e255728\",\"id\":5}]},{\"caption\":\"OSID\",\"id\":\"Obras Sociais Irmã Dulce (OSID)\",\"cod\":55,\"lat\":-12.9349,\"lon\":-38.507,\"interfaces\":[{\"name\":\"e253904\",\"id\":1},{\"name\":\"e254467\",\"id\":2},{\"name\":\"e254750\",\"id\":3},{\"name\":\"e255306\",\"id\":4},{\"name\":\"e255854\",\"id\":5}]},{\"caption\":\"HSI\",\"id\":\"Hospital Santa Isabel (HSI)\",\"cod\":56,\"lat\":-12.9716,\"lon\":-38.5027,\"interfaces\":[{\"name\":\"e253955\",\"id\":1},{\"name\":\"e254518\",\"id\":2},{\"name\":\"e254801\",\"id\":3},{\"name\":\"e255357\",\"id\":4},{\"name\":\"e255905\",\"id\":5}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUPES-UFBA\",\"cod\":57,\"lat\":-12.9939,\"lon\":-38.5208,\"interfaces\":[{\"name\":\"e254023\",\"id\":1},{\"name\":\"e254022\",\"id\":2},{\"name\":\"e254021\",\"id\":3},{\"name\":\"e254584\",\"id\":4},{\"name\":\"e254585\",\"id\":5},{\"name\":\"e254586\",\"id\":6},{\"name\":\"e254869\",\"id\":7},{\"name\":\"e254868\",\"id\":8},{\"name\":\"e254867\",\"id\":9},{\"name\":\"e255417\",\"id\":10},{\"name\":\"e255419\",\"id\":11},{\"name\":\"e255418\",\"id\":12},{\"name\":\"e255965\",\"id\":13}]},{\"caption\":\"HC\",\"id\":\"Hospital da Cidade (HC)\",\"cod\":58,\"lat\":-12.9573,\"lon\":-38.4935,\"interfaces\":[{\"name\":\"e253953\",\"id\":1},{\"name\":\"e254516\",\"id\":2},{\"name\":\"e254799\",\"id\":3},{\"name\":\"e255355\",\"id\":4},{\"name\":\"e255903\",\"id\":5}]},{\"caption\":\"UNIFACS\",\"id\":\"UNIFACS - Paralela\",\"cod\":59,\"lat\":-12.9611,\"lon\":-38.432,\"interfaces\":[{\"name\":\"e253879\",\"id\":1},{\"name\":\"e253878\",\"id\":2},{\"name\":\"e253877\",\"id\":3},{\"name\":\"e254441\",\"id\":4},{\"name\":\"e254440\",\"id\":5},{\"name\":\"e254442\",\"id\":6},{\"name\":\"e254724\",\"id\":7},{\"name\":\"e254725\",\"id\":8},{\"name\":\"e254723\",\"id\":9},{\"name\":\"e255280\",\"id\":10},{\"name\":\"e255279\",\"id\":11},{\"name\":\"e255281\",\"id\":12},{\"name\":\"e255827\",\"id\":13},{\"name\":\"e255828\",\"id\":14},{\"name\":\"e255829\",\"id\":15}]},{\"caption\":\"UCSAL\",\"id\":\"UCSAL - Federacao\",\"cod\":60,\"lat\":-13.0036,\"lon\":-38.5008,\"interfaces\":[{\"name\":\"e253875\",\"id\":1},{\"name\":\"e254438\",\"id\":2},{\"name\":\"e254721\",\"id\":3},{\"name\":\"e255277\",\"id\":4},{\"name\":\"e255825\",\"id\":5}]},{\"caption\":\"SENAI\",\"id\":\"SENAI - CIMATEC\",\"cod\":61,\"lat\":-12.9382,\"lon\":-38.3876,\"interfaces\":[{\"name\":\"e253873\",\"id\":1},{\"name\":\"e253872\",\"id\":2},{\"name\":\"e254435\",\"id\":3},{\"name\":\"e254436\",\"id\":4},{\"name\":\"e254719\",\"id\":5},{\"name\":\"e254718\",\"id\":6},{\"name\":\"e255275\",\"id\":7},{\"name\":\"e255274\",\"id\":8},{\"name\":\"e255822\",\"id\":9},{\"name\":\"e255823\",\"id\":10}]},{\"caption\":\"UNEB\",\"id\":\"UNEB - Cabula\",\"cod\":62,\"lat\":-12.9522,\"lon\":-38.4603,\"interfaces\":[{\"name\":\"e253870\",\"id\":1},{\"name\":\"e253869\",\"id\":2},{\"name\":\"e254432\",\"id\":3},{\"name\":\"e254433\",\"id\":4},{\"name\":\"e254715\",\"id\":5},{\"name\":\"e254716\",\"id\":6},{\"name\":\"e255271\",\"id\":7},{\"name\":\"e255272\",\"id\":8},{\"name\":\"e255819\",\"id\":9},{\"name\":\"e255820\",\"id\":10}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Brumado\",\"cod\":63,\"lat\":-14.1877,\"lon\":-41.6708,\"interfaces\":[{\"name\":\"e253856\",\"id\":1},{\"name\":\"e254419\",\"id\":2},{\"name\":\"e254700\",\"id\":3},{\"name\":\"e255256\",\"id\":4},{\"name\":\"e255804\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Xique Xique\",\"cod\":64,\"lat\":-10.8309,\"lon\":-42.7325,\"interfaces\":[{\"name\":\"e253858\",\"id\":1},{\"name\":\"e254421\",\"id\":2},{\"name\":\"e254702\",\"id\":3},{\"name\":\"e255258\",\"id\":4},{\"name\":\"e255806\",\"id\":5}]},{\"caption\":\"UNEB\",\"id\":\"UNEB - Juazeiro\",\"cod\":65,\"lat\":-9.41867,\"lon\":-40.4889,\"interfaces\":[{\"name\":\"e254002\",\"id\":1},{\"name\":\"e254565\",\"id\":2},{\"name\":\"e254848\",\"id\":3},{\"name\":\"e255404\",\"id\":4},{\"name\":\"e255952\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Ilheus\",\"cod\":66,\"lat\":-14.8031,\"lon\":-39.1499,\"interfaces\":[{\"name\":\"e253854\",\"id\":1},{\"name\":\"e254417\",\"id\":2},{\"name\":\"e254698\",\"id\":3},{\"name\":\"e255254\",\"id\":4},{\"name\":\"e255802\",\"id\":5}]},{\"caption\":\"UFRB\",\"id\":\"UFRB-Feira de Santana\",\"cod\":67,\"lat\":-12.2547,\"lon\":-38.9258,\"interfaces\":[{\"name\":\"e253804\",\"id\":1},{\"name\":\"e254367\",\"id\":2},{\"name\":\"e254648\",\"id\":3},{\"name\":\"e255204\",\"id\":4},{\"name\":\"e255752\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Barreiras\",\"cod\":68,\"lat\":-12.1519,\"lon\":-45.0061,\"interfaces\":[{\"name\":\"e253813\",\"id\":1},{\"name\":\"e254376\",\"id\":2},{\"name\":\"e254657\",\"id\":3},{\"name\":\"e255213\",\"id\":4},{\"name\":\"e255761\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Governador Mangabeira\",\"cod\":69,\"lat\":-12.6001,\"lon\":-39.0465,\"interfaces\":[{\"name\":\"e253802\",\"id\":1},{\"name\":\"e254365\",\"id\":2},{\"name\":\"e254646\",\"id\":3},{\"name\":\"e255202\",\"id\":4},{\"name\":\"e255750\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Porto Seguro\",\"cod\":70,\"lat\":-16.433,\"lon\":-39.0953,\"interfaces\":[{\"name\":\"e253803\",\"id\":1},{\"name\":\"e254366\",\"id\":2},{\"name\":\"e254647\",\"id\":3},{\"name\":\"e255203\",\"id\":4},{\"name\":\"e255751\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Eunapolis\",\"cod\":71,\"lat\":-16.3494,\"lon\":-39.5788,\"interfaces\":[{\"name\":\"e253850\",\"id\":1},{\"name\":\"e254413\",\"id\":2},{\"name\":\"e254694\",\"id\":3},{\"name\":\"e255250\",\"id\":4},{\"name\":\"e255798\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Feira de Santana\",\"cod\":72,\"lat\":-12.2904,\"lon\":-38.9123,\"interfaces\":[{\"name\":\"e253801\",\"id\":1},{\"name\":\"e254364\",\"id\":2},{\"name\":\"e254645\",\"id\":3},{\"name\":\"e255201\",\"id\":4},{\"name\":\"e255749\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Paulo Afonso\",\"cod\":73,\"lat\":-9.39062,\"lon\":-38.2158,\"interfaces\":[{\"name\":\"e253800\",\"id\":1},{\"name\":\"e254363\",\"id\":2},{\"name\":\"e254644\",\"id\":3},{\"name\":\"e255200\",\"id\":4},{\"name\":\"e255748\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Camacari\",\"cod\":74,\"lat\":-12.6993,\"lon\":-38.2952,\"interfaces\":[{\"name\":\"e254033\",\"id\":1},{\"name\":\"e254596\",\"id\":2},{\"name\":\"e254714\",\"id\":3},{\"name\":\"e255270\",\"id\":4},{\"name\":\"e255818\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Urucuca\",\"cod\":75,\"lat\":-14.594,\"lon\":-39.2823,\"interfaces\":[{\"name\":\"e253846\",\"id\":1},{\"name\":\"e254409\",\"id\":2},{\"name\":\"e254690\",\"id\":3},{\"name\":\"e255246\",\"id\":4},{\"name\":\"e255794\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Valenca\",\"cod\":76,\"lat\":-13.3675,\"lon\":-39.0734,\"interfaces\":[{\"name\":\"e253796\",\"id\":1},{\"name\":\"e254359\",\"id\":2},{\"name\":\"e254640\",\"id\":3},{\"name\":\"e255196\",\"id\":4},{\"name\":\"e255744\",\"id\":5}]},{\"caption\":\"UFBA\",\"id\":\"UFBA - Reitoria\",\"cod\":77,\"lat\":-12.9928,\"lon\":-38.5206,\"interfaces\":[{\"name\":\"e253883\",\"id\":1},{\"name\":\"e254446\",\"id\":2},{\"name\":\"e254729\",\"id\":3},{\"name\":\"e255285\",\"id\":4},{\"name\":\"e255833\",\"id\":5}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_MCO-UFBA\",\"cod\":78,\"lat\":-12.9727,\"lon\":-38.5008,\"interfaces\":[{\"name\":\"e254007\",\"id\":1},{\"name\":\"e254006\",\"id\":2},{\"name\":\"e254009\",\"id\":3},{\"name\":\"e254008\",\"id\":4},{\"name\":\"e254012\",\"id\":5},{\"name\":\"e254010\",\"id\":6},{\"name\":\"e254011\",\"id\":7},{\"name\":\"e254569\",\"id\":8},{\"name\":\"e254575\",\"id\":9},{\"name\":\"e254574\",\"id\":10},{\"name\":\"e254571\",\"id\":11},{\"name\":\"e254570\",\"id\":12},{\"name\":\"e254573\",\"id\":13},{\"name\":\"e254572\",\"id\":14},{\"name\":\"e254858\",\"id\":15},{\"name\":\"e254852\",\"id\":16},{\"name\":\"e254853\",\"id\":17},{\"name\":\"e254856\",\"id\":18},{\"name\":\"e254857\",\"id\":19},{\"name\":\"e254854\",\"id\":20},{\"name\":\"e254855\",\"id\":21},{\"name\":\"e255408\",\"id\":22},{\"name\":\"e255956\",\"id\":23}]},{\"caption\":\"UFBA\",\"id\":\"UFBA - MAS\",\"cod\":79,\"lat\":-12.9791,\"lon\":-38.5163,\"interfaces\":[{\"name\":\"e253887\",\"id\":1},{\"name\":\"e254450\",\"id\":2},{\"name\":\"e254733\",\"id\":3},{\"name\":\"e255289\",\"id\":4},{\"name\":\"e255837\",\"id\":5}]},{\"caption\":\"UFBA\",\"id\":\"UFBA - MAE\",\"cod\":80,\"lat\":-12.9728,\"lon\":-38.5098,\"interfaces\":[{\"name\":\"e253889\",\"id\":1},{\"name\":\"e254452\",\"id\":2},{\"name\":\"e254735\",\"id\":3},{\"name\":\"e255291\",\"id\":4},{\"name\":\"e255839\",\"id\":5}]},{\"caption\":\"UFBA\",\"id\":\"UFBA - Residencia V\",\"cod\":81,\"lat\":-12.9982,\"lon\":-38.5058,\"interfaces\":[{\"name\":\"e253881\",\"id\":1},{\"name\":\"e254444\",\"id\":2},{\"name\":\"e254727\",\"id\":3},{\"name\":\"e255283\",\"id\":4},{\"name\":\"e255831\",\"id\":5}]},{\"caption\":\"UFBA\",\"id\":\"UFBA - CAPS\",\"cod\":82,\"lat\":-12.9919,\"lon\":-38.5173,\"interfaces\":[{\"name\":\"e253891\",\"id\":1},{\"name\":\"e254454\",\"id\":2},{\"name\":\"e254737\",\"id\":3},{\"name\":\"e255293\",\"id\":4},{\"name\":\"e255841\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA - Barbalho\",\"cod\":83,\"lat\":-12.9634,\"lon\":-38.5006,\"interfaces\":[{\"name\":\"e253893\",\"id\":1},{\"name\":\"e253894\",\"id\":2},{\"name\":\"e254456\",\"id\":3},{\"name\":\"e254457\",\"id\":4},{\"name\":\"e254740\",\"id\":5},{\"name\":\"e254739\",\"id\":6},{\"name\":\"e255296\",\"id\":7},{\"name\":\"e255295\",\"id\":8},{\"name\":\"e255843\",\"id\":9},{\"name\":\"e255844\",\"id\":10}]},{\"caption\":\"UNEB\",\"id\":\"UNEB - NEOJIBA\",\"cod\":84,\"lat\":-12.9568,\"lon\":-38.4975,\"interfaces\":[{\"name\":\"e254014\",\"id\":1},{\"name\":\"e254015\",\"id\":2},{\"name\":\"e254577\",\"id\":3},{\"name\":\"e254578\",\"id\":4},{\"name\":\"e254861\",\"id\":5},{\"name\":\"e254860\",\"id\":6},{\"name\":\"e255411\",\"id\":7},{\"name\":\"e255410\",\"id\":8},{\"name\":\"e255958\",\"id\":9},{\"name\":\"e255959\",\"id\":10}]},{\"caption\":\"Unijorge Sede\",\"id\":\"Unijorge Sede\",\"cod\":85,\"lat\":-12.9373,\"lon\":-38.411,\"interfaces\":[{\"name\":\"e254016\",\"id\":1},{\"name\":\"e254017\",\"id\":2},{\"name\":\"e254580\",\"id\":3},{\"name\":\"e254579\",\"id\":4},{\"name\":\"e254863\",\"id\":5},{\"name\":\"e254862\",\"id\":6},{\"name\":\"e255413\",\"id\":7},{\"name\":\"e255412\",\"id\":8},{\"name\":\"e255961\",\"id\":9},{\"name\":\"e255960\",\"id\":10}]},{\"caption\":\"FESFSUS\",\"id\":\"FESFSUS-Comercio\",\"cod\":86,\"lat\":-12.9713,\"lon\":-38.5135,\"interfaces\":[{\"name\":\"e254003\",\"id\":1},{\"name\":\"e254004\",\"id\":2},{\"name\":\"e254566\",\"id\":3},{\"name\":\"e254567\",\"id\":4},{\"name\":\"e254850\",\"id\":5},{\"name\":\"e254849\",\"id\":6},{\"name\":\"e255406\",\"id\":7},{\"name\":\"e255405\",\"id\":8},{\"name\":\"e255953\",\"id\":9},{\"name\":\"e255954\",\"id\":10}]},{\"caption\":\"UEFS\",\"id\":\"UEFS-Horto Florestal\",\"cod\":87,\"lat\":-12.2599,\"lon\":-38.9608,\"interfaces\":[{\"name\":\"e253819\",\"id\":1},{\"name\":\"e254382\",\"id\":2},{\"name\":\"e254663\",\"id\":3},{\"name\":\"e255219\",\"id\":4},{\"name\":\"e255767\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Serrinha\",\"cod\":88,\"lat\":-11.6804,\"lon\":-38.9839,\"interfaces\":[{\"name\":\"e253860\",\"id\":1},{\"name\":\"e254423\",\"id\":2},{\"name\":\"e254704\",\"id\":3},{\"name\":\"e255260\",\"id\":4},{\"name\":\"e255808\",\"id\":5}]},{\"caption\":\"UEFS\",\"id\":\"UEFS-CUCA\",\"cod\":89,\"lat\":-12.2575,\"lon\":-38.9681,\"interfaces\":[{\"name\":\"e253810\",\"id\":1},{\"name\":\"e254373\",\"id\":2},{\"name\":\"e254654\",\"id\":3},{\"name\":\"e255210\",\"id\":4},{\"name\":\"e255758\",\"id\":5}]},{\"caption\":\"UFSB\",\"id\":\"UFSB-Porto Seguro\",\"cod\":90,\"lat\":-16.424,\"lon\":-39.136,\"interfaces\":[{\"name\":\"e253811\",\"id\":1},{\"name\":\"e254374\",\"id\":2},{\"name\":\"e254655\",\"id\":3},{\"name\":\"e255211\",\"id\":4},{\"name\":\"e255759\",\"id\":5}]},{\"caption\":\"UFOB\",\"id\":\"UFOB-Luis Eduardo Magalhaes\",\"cod\":91,\"lat\":-12.1051,\"lon\":-45.8036,\"interfaces\":[{\"name\":\"e253815\",\"id\":1},{\"name\":\"e254378\",\"id\":2},{\"name\":\"e254659\",\"id\":3},{\"name\":\"e255215\",\"id\":4},{\"name\":\"e255763\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Juazeiro\",\"cod\":92,\"lat\":-9.45373,\"lon\":-40.5114,\"interfaces\":[{\"name\":\"e253817\",\"id\":1},{\"name\":\"e254380\",\"id\":2},{\"name\":\"e254661\",\"id\":3},{\"name\":\"e255217\",\"id\":4},{\"name\":\"e255765\",\"id\":5}]},{\"caption\":\"UFBA\",\"id\":\"UFBA - Residencia I\",\"cod\":93,\"lat\":-12.994,\"lon\":-38.5266,\"interfaces\":[{\"name\":\"e253961\",\"id\":1},{\"name\":\"e254524\",\"id\":2},{\"name\":\"e254807\",\"id\":3},{\"name\":\"e255363\",\"id\":4},{\"name\":\"e255911\",\"id\":5}]},{\"caption\":\"UNIFACS\",\"id\":\"UNIFACS - Rio Vermelho\",\"cod\":94,\"lat\":-13.0117,\"lon\":-38.4902,\"interfaces\":[{\"name\":\"e253963\",\"id\":1},{\"name\":\"e253965\",\"id\":2},{\"name\":\"e253964\",\"id\":3},{\"name\":\"e254526\",\"id\":4},{\"name\":\"e254527\",\"id\":5},{\"name\":\"e254528\",\"id\":6},{\"name\":\"e254809\",\"id\":7},{\"name\":\"e254810\",\"id\":8},{\"name\":\"e254811\",\"id\":9},{\"name\":\"e255367\",\"id\":10},{\"name\":\"e255366\",\"id\":11},{\"name\":\"e255365\",\"id\":12},{\"name\":\"e255914\",\"id\":13},{\"name\":\"e255915\",\"id\":14},{\"name\":\"e255913\",\"id\":15}]},{\"caption\":\"HAN\",\"id\":\"Hospital Ana Nery (HAN)\",\"cod\":95,\"lat\":-12.9571,\"lon\":-38.4958,\"interfaces\":[{\"name\":\"e253885\",\"id\":1},{\"name\":\"e254448\",\"id\":2},{\"name\":\"e254731\",\"id\":3},{\"name\":\"e255287\",\"id\":4},{\"name\":\"e255835\",\"id\":5}]},{\"caption\":\"UEFS\",\"id\":\"UEFS-Observatório Antares\",\"cod\":96,\"lat\":-12.2398,\"lon\":-38.979,\"interfaces\":[{\"name\":\"e253809\",\"id\":1},{\"name\":\"e254372\",\"id\":2},{\"name\":\"e254653\",\"id\":3},{\"name\":\"e255209\",\"id\":4},{\"name\":\"e255757\",\"id\":5}]},{\"caption\":\"UNIFACS\",\"id\":\"UNIFACS - Comércio\",\"cod\":97,\"lat\":-12.9713,\"lon\":-38.5125,\"interfaces\":[{\"name\":\"e254018\",\"id\":1},{\"name\":\"e254019\",\"id\":2},{\"name\":\"e254581\",\"id\":3},{\"name\":\"e254582\",\"id\":4},{\"name\":\"e254865\",\"id\":5},{\"name\":\"e254864\",\"id\":6},{\"name\":\"e255415\",\"id\":7},{\"name\":\"e255414\",\"id\":8},{\"name\":\"e255963\",\"id\":9},{\"name\":\"e255962\",\"id\":10}]},{\"caption\":\"UFOB\",\"id\":\"UFOB-Barreiras\",\"cod\":98,\"lat\":-12.1484,\"lon\":-44.9971,\"interfaces\":[{\"name\":\"e253864\",\"id\":1},{\"name\":\"e254427\",\"id\":2},{\"name\":\"e254708\",\"id\":3},{\"name\":\"e255264\",\"id\":4},{\"name\":\"e255812\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Senhor do Bonfim\",\"cod\":99,\"lat\":-10.4458,\"lon\":-40.1471,\"interfaces\":[{\"name\":\"e253791\",\"id\":1},{\"name\":\"e254354\",\"id\":2},{\"name\":\"e254635\",\"id\":3},{\"name\":\"e255191\",\"id\":4},{\"name\":\"e255739\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Valenca\",\"cod\":100,\"lat\":-13.3729,\"lon\":-39.0608,\"interfaces\":[{\"name\":\"e253790\",\"id\":1},{\"name\":\"e254353\",\"id\":2},{\"name\":\"e254634\",\"id\":3},{\"name\":\"e255190\",\"id\":4},{\"name\":\"e255738\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Jacobina\",\"cod\":101,\"lat\":-11.1806,\"lon\":-40.5378,\"interfaces\":[{\"name\":\"e253793\",\"id\":1},{\"name\":\"e254356\",\"id\":2},{\"name\":\"e254637\",\"id\":3},{\"name\":\"e255193\",\"id\":4},{\"name\":\"e255741\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Catu\",\"cod\":102,\"lat\":-12.357,\"lon\":-38.375,\"interfaces\":[{\"name\":\"e253792\",\"id\":1},{\"name\":\"e254355\",\"id\":2},{\"name\":\"e254636\",\"id\":3},{\"name\":\"e255192\",\"id\":4},{\"name\":\"e255740\",\"id\":5}]},{\"caption\":\"UNIVASF\",\"id\":\"UNIVASF-Senhor do Bonfim\",\"cod\":103,\"lat\":-10.4733,\"lon\":-40.1794,\"interfaces\":[{\"name\":\"e253828\",\"id\":1},{\"name\":\"e254391\",\"id\":2},{\"name\":\"e254672\",\"id\":3},{\"name\":\"e255228\",\"id\":4},{\"name\":\"e255776\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Itapetinga\",\"cod\":104,\"lat\":-15.2481,\"lon\":-40.2487,\"interfaces\":[{\"name\":\"e253794\",\"id\":1},{\"name\":\"e254357\",\"id\":2},{\"name\":\"e254638\",\"id\":3},{\"name\":\"e255194\",\"id\":4},{\"name\":\"e255742\",\"id\":5}]},{\"caption\":\"UFRB\",\"id\":\"UFRB-Santo Amaro\",\"cod\":105,\"lat\":-12.5551,\"lon\":-38.7041,\"interfaces\":[{\"name\":\"e253797\",\"id\":1},{\"name\":\"e254360\",\"id\":2},{\"name\":\"e254641\",\"id\":3},{\"name\":\"e255197\",\"id\":4},{\"name\":\"e255745\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Teixeira de Freitas\",\"cod\":106,\"lat\":-17.576,\"lon\":-39.7338,\"interfaces\":[{\"name\":\"e253862\",\"id\":1},{\"name\":\"e254425\",\"id\":2},{\"name\":\"e254706\",\"id\":3},{\"name\":\"e255262\",\"id\":4},{\"name\":\"e255810\",\"id\":5}]},{\"caption\":\"UFBA\",\"id\":\"UFBA\",\"cod\":107,\"lat\":-13.0015,\"lon\":-38.5075,\"interfaces\":[{\"name\":\"e253799\",\"id\":1},{\"name\":\"e254362\",\"id\":2},{\"name\":\"e254643\",\"id\":3},{\"name\":\"e255199\",\"id\":4},{\"name\":\"e255747\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Simoes Filho\",\"cod\":108,\"lat\":-12.8082,\"lon\":-38.3827,\"interfaces\":[{\"name\":\"e253798\",\"id\":1},{\"name\":\"e254361\",\"id\":2},{\"name\":\"e254642\",\"id\":3},{\"name\":\"e255198\",\"id\":4},{\"name\":\"e255746\",\"id\":5}]},{\"caption\":\"IFBAIANO\",\"id\":\"IFBAIANO Mouraria\",\"cod\":109,\"lat\":-12.9818,\"lon\":-38.5105,\"interfaces\":[{\"name\":\"e253988\",\"id\":1},{\"name\":\"e253987\",\"id\":2},{\"name\":\"e254551\",\"id\":3},{\"name\":\"e254550\",\"id\":4},{\"name\":\"e254834\",\"id\":5},{\"name\":\"e254833\",\"id\":6},{\"name\":\"e255390\",\"id\":7},{\"name\":\"e255389\",\"id\":8},{\"name\":\"e255937\",\"id\":9},{\"name\":\"e255938\",\"id\":10}]},{\"caption\":\"UNIFACS\",\"id\":\"UNIFACS Tancredo Neves\",\"cod\":110,\"lat\":-12.9816,\"lon\":-38.4514,\"interfaces\":[{\"name\":\"e253989\",\"id\":1},{\"name\":\"e253990\",\"id\":2},{\"name\":\"e253991\",\"id\":3},{\"name\":\"e254553\",\"id\":4},{\"name\":\"e254552\",\"id\":5},{\"name\":\"e254554\",\"id\":6},{\"name\":\"e254835\",\"id\":7},{\"name\":\"e254836\",\"id\":8},{\"name\":\"e254837\",\"id\":9},{\"name\":\"e255392\",\"id\":10},{\"name\":\"e255393\",\"id\":11},{\"name\":\"e255391\",\"id\":12},{\"name\":\"e255941\",\"id\":13},{\"name\":\"e255940\",\"id\":14},{\"name\":\"e255939\",\"id\":15}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Alagoinhas\",\"cod\":111,\"lat\":-12.1469,\"lon\":-38.4022,\"interfaces\":[{\"name\":\"e253836\",\"id\":1},{\"name\":\"e254399\",\"id\":2},{\"name\":\"e254680\",\"id\":3},{\"name\":\"e255236\",\"id\":4},{\"name\":\"e255784\",\"id\":5}]},{\"caption\":\"UFBA\",\"id\":\"UFBA - Residencia II\",\"cod\":112,\"lat\":-12.996,\"lon\":-38.5276,\"interfaces\":[{\"name\":\"e253959\",\"id\":1},{\"name\":\"e254522\",\"id\":2},{\"name\":\"e254805\",\"id\":3},{\"name\":\"e255361\",\"id\":4},{\"name\":\"e255909\",\"id\":5}]},{\"caption\":\"LACEN\",\"id\":\"LACEN - Bahia\",\"cod\":113,\"lat\":-12.9966,\"lon\":-38.4884,\"interfaces\":[{\"name\":\"e253957\",\"id\":1},{\"name\":\"e254520\",\"id\":2},{\"name\":\"e254803\",\"id\":3},{\"name\":\"e255359\",\"id\":4},{\"name\":\"e255907\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Vitoria da Conquista\",\"cod\":114,\"lat\":-14.8626,\"lon\":-40.8449,\"interfaces\":[{\"name\":\"e253808\",\"id\":1},{\"name\":\"e254371\",\"id\":2},{\"name\":\"e254652\",\"id\":3},{\"name\":\"e255208\",\"id\":4},{\"name\":\"e255756\",\"id\":5}]},{\"caption\":\"UFBA\",\"id\":\"UFBA-Vitoria da Conquista\",\"cod\":115,\"lat\":-14.8689,\"lon\":-40.8437,\"interfaces\":[{\"name\":\"e253775\",\"id\":1},{\"name\":\"e254338\",\"id\":2},{\"name\":\"e254619\",\"id\":3},{\"name\":\"e255175\",\"id\":4},{\"name\":\"e255723\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Jequie\",\"cod\":116,\"lat\":-13.8521,\"lon\":-40.1173,\"interfaces\":[{\"name\":\"e253806\",\"id\":1},{\"name\":\"e254369\",\"id\":2},{\"name\":\"e254650\",\"id\":3},{\"name\":\"e255206\",\"id\":4},{\"name\":\"e255754\",\"id\":5}]},{\"caption\":\"UFRB\",\"id\":\"UFRB-Santo Antonio de Jesus\",\"cod\":117,\"lat\":-12.9665,\"lon\":-39.2627,\"interfaces\":[{\"name\":\"e253840\",\"id\":1},{\"name\":\"e254403\",\"id\":2},{\"name\":\"e254684\",\"id\":3},{\"name\":\"e255240\",\"id\":4},{\"name\":\"e255788\",\"id\":5}]},{\"caption\":\"IFBA\",\"id\":\"IFBA-Santo Antonio de Jesus\",\"cod\":118,\"lat\":-12.9675,\"lon\":-39.2605,\"interfaces\":[{\"name\":\"e253838\",\"id\":1},{\"name\":\"e254401\",\"id\":2},{\"name\":\"e254682\",\"id\":3},{\"name\":\"e255238\",\"id\":4},{\"name\":\"e255786\",\"id\":5}]},{\"caption\":\"UNILAB\",\"id\":\"UNILAB-Sao Francisco do Conde\",\"cod\":119,\"lat\":-12.616,\"lon\":-38.6628,\"interfaces\":[{\"name\":\"e253833\",\"id\":1},{\"name\":\"e254396\",\"id\":2},{\"name\":\"e254677\",\"id\":3},{\"name\":\"e255233\",\"id\":4},{\"name\":\"e255781\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Guanambi\",\"cod\":120,\"lat\":-14.3015,\"lon\":-42.6929,\"interfaces\":[{\"name\":\"e253779\",\"id\":1},{\"name\":\"e254342\",\"id\":2},{\"name\":\"e254623\",\"id\":3},{\"name\":\"e255179\",\"id\":4},{\"name\":\"e255727\",\"id\":5}]},{\"caption\":\"IFB\",\"id\":\"IFBaiano-Santa Ines\",\"cod\":121,\"lat\":-13.28,\"lon\":-39.8145,\"interfaces\":[{\"name\":\"e253842\",\"id\":1},{\"name\":\"e254405\",\"id\":2},{\"name\":\"e254686\",\"id\":3},{\"name\":\"e255242\",\"id\":4},{\"name\":\"e255790\",\"id\":5}]}]},\"ce\":{\"clientes\":[{\"caption\":\"ESP\",\"id\":\"ESP - Escola de Saúde Pública\",\"cod\":1,\"lat\":-3.72807,\"lon\":-38.4926,\"interfaces\":[{\"name\":\"e20022\",\"id\":1},{\"name\":\"e20269\",\"id\":2}]},{\"caption\":\"FUNCEME\",\"id\":\"FUNCEME - Fundação Cearense de Meteorologia e Recursos Hídrico\",\"cod\":2,\"lat\":-3.73359,\"lon\":-38.5086,\"interfaces\":[{\"name\":\"e19980\",\"id\":1},{\"name\":\"e20227\",\"id\":2}]},{\"caption\":\"UNIFOR\",\"id\":\"UNIFOR - Universidade de Fortaleza\",\"cod\":3,\"lat\":-3.76982,\"lon\":-38.4801,\"interfaces\":[{\"name\":\"e19972\",\"id\":1},{\"name\":\"e20219\",\"id\":2}]},{\"caption\":\"SECITECE\",\"id\":\"SECITECE - Secretaria da Ciência, tecnologia e Educação Superior\",\"cod\":4,\"lat\":-3.76006,\"lon\":-38.4792,\"interfaces\":[{\"name\":\"e19976\",\"id\":1},{\"name\":\"e20223\",\"id\":2}]},{\"caption\":\"UECE\",\"id\":\"UECE - Benfica\",\"cod\":5,\"lat\":-3.75092,\"lon\":-38.5321,\"interfaces\":[{\"name\":\"e20021\",\"id\":1},{\"name\":\"e20268\",\"id\":2}]},{\"caption\":\"FUNCAP\",\"id\":\"FUNCAP - Fundação Cearense de Apoio ao Desenvolvimento Científico e tecnológico\",\"cod\":6,\"lat\":-3.79586,\"lon\":-38.4976,\"interfaces\":[{\"name\":\"e19988\",\"id\":1},{\"name\":\"e20235\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPAT\",\"cod\":7,\"lat\":-3.75162,\"lon\":-38.576,\"interfaces\":[{\"name\":\"e19968\",\"id\":1},{\"name\":\"e20215\",\"id\":2}]},{\"caption\":\"UECE\",\"id\":\"UECE - Itaperi\",\"cod\":8,\"lat\":-3.78886,\"lon\":-38.553,\"interfaces\":[{\"name\":\"e19971\",\"id\":1},{\"name\":\"e20218\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Fortaleza\",\"cod\":9,\"lat\":-3.74472,\"lon\":-38.5365,\"interfaces\":[{\"name\":\"e19990\",\"id\":1},{\"name\":\"e20237\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Aldeota\",\"cod\":10,\"lat\":-3.72954,\"lon\":-38.5161,\"interfaces\":[{\"name\":\"e19981\",\"id\":1},{\"name\":\"e20228\",\"id\":2}]},{\"caption\":\"RUTE\",\"id\":\"RUTE | HM - Hospital de Messejana\",\"cod\":11,\"lat\":-3.81594,\"lon\":-38.5003,\"interfaces\":[{\"name\":\"e20025\",\"id\":1},{\"name\":\"e20272\",\"id\":2}]},{\"caption\":\"RUTE\",\"id\":\"RUTE | HIAS - Hospital Infantil Albert Sabin\",\"cod\":12,\"lat\":-3.76323,\"lon\":-38.532,\"interfaces\":[{\"name\":\"e20024\",\"id\":1},{\"name\":\"e20271\",\"id\":2}]},{\"caption\":\"HGF\",\"id\":\"HGF - Hospital Geral de Fortaleza\",\"cod\":13,\"lat\":-3.74013,\"lon\":-38.4762,\"interfaces\":[{\"name\":\"e19987\",\"id\":1},{\"name\":\"e20234\",\"id\":2}]},{\"caption\":\"INPE\",\"id\":\"INPE - Instituto Nacional de Pesquisas Espaciais | ROEN - Rádio-Observatório Espacial do Nordeste\",\"cod\":14,\"lat\":-3.87601,\"lon\":-38.4394,\"interfaces\":[{\"name\":\"e20023\",\"id\":1},{\"name\":\"e20270\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC - Reitoria\",\"cod\":15,\"lat\":-3.74096,\"lon\":-38.5392,\"interfaces\":[{\"name\":\"e20029\",\"id\":1},{\"name\":\"e20276\",\"id\":2}]},{\"caption\":\"RUTE\",\"id\":\"RUTE | IJF - Instituto Doutor José Frota\",\"cod\":16,\"lat\":-3.73436,\"lon\":-38.5301,\"interfaces\":[{\"name\":\"e20028\",\"id\":1},{\"name\":\"e20275\",\"id\":2}]},{\"caption\":\"RUTE\",\"id\":\"RUTE | HSJDI - Hospital São José de Doenças Infecciosas\",\"cod\":17,\"lat\":-3.74498,\"lon\":-38.558,\"interfaces\":[{\"name\":\"e20027\",\"id\":1},{\"name\":\"e20274\",\"id\":2}]},{\"caption\":\"RUTE\",\"id\":\"RUTE | HGCC - Hospital Geral de Fortaleza\",\"cod\":18,\"lat\":-3.73325,\"lon\":-38.5315,\"interfaces\":[{\"name\":\"e20026\",\"id\":1},{\"name\":\"e20273\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC | FEAAC - Faculdade de Economia, Administração, Atuária e Contabilidade\",\"cod\":19,\"lat\":-3.73851,\"lon\":-38.5367,\"interfaces\":[{\"name\":\"e20030\",\"id\":1},{\"name\":\"e20277\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC - Casa José de Alencar\",\"cod\":20,\"lat\":-3.81226,\"lon\":-38.4791,\"interfaces\":[{\"name\":\"e19962\",\"id\":1},{\"name\":\"e20209\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC - Porangabuçu\",\"cod\":21,\"lat\":-3.74916,\"lon\":-38.5513,\"interfaces\":[{\"name\":\"e20031\",\"id\":1},{\"name\":\"e20278\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC - Direito\",\"cod\":22,\"lat\":-3.73361,\"lon\":-38.5322,\"interfaces\":[{\"name\":\"e20032\",\"id\":1},{\"name\":\"e20279\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC - LABOMAR\",\"cod\":23,\"lat\":-3.72656,\"lon\":-38.4915,\"interfaces\":[{\"name\":\"e19960\",\"id\":1},{\"name\":\"e20207\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC - Pici\",\"cod\":24,\"lat\":-3.74447,\"lon\":-38.5761,\"interfaces\":[{\"name\":\"e19965\",\"id\":1},{\"name\":\"e20212\",\"id\":2}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_CH-UFC (MEAC)\",\"cod\":25,\"lat\":-3.7485,\"lon\":-38.5531,\"interfaces\":[{\"name\":\"e20033\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_CH-UFC (HUWC)\",\"cod\":26,\"lat\":-3.74927,\"lon\":-38.5512,\"interfaces\":[{\"name\":\"e20036\",\"id\":1},{\"name\":\"e20280\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Reitoria\",\"cod\":27,\"lat\":-3.75118,\"lon\":-38.5383,\"interfaces\":[{\"name\":\"e20037\",\"id\":1},{\"name\":\"e20281\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Itapipoca\",\"cod\":28,\"lat\":-3.54769,\"lon\":-39.5144,\"interfaces\":[{\"name\":\"e20046\",\"id\":1},{\"name\":\"e20290\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC Quixada\",\"cod\":29,\"lat\":-4.97913,\"lon\":-39.0565,\"interfaces\":[{\"name\":\"e20045\",\"id\":1},{\"name\":\"e20289\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Guaramiranga\",\"cod\":30,\"lat\":-4.26179,\"lon\":-38.9331,\"interfaces\":[{\"name\":\"e20048\",\"id\":1},{\"name\":\"e20292\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Tabuleiro do Norte\",\"cod\":31,\"lat\":-5.23701,\"lon\":-38.1451,\"interfaces\":[{\"name\":\"e20047\",\"id\":1},{\"name\":\"e20291\",\"id\":2}]},{\"caption\":\"CMF\",\"id\":\"CMF - Colégio Militar de Fortaleza\",\"cod\":32,\"lat\":-3.72903,\"lon\":-38.5178,\"interfaces\":[{\"name\":\"e20039\",\"id\":1},{\"name\":\"e20283\",\"id\":2}]},{\"caption\":\"Hospital Sarah\",\"id\":\"Hospital Sarah\",\"cod\":33,\"lat\":-3.818,\"lon\":-38.5336,\"interfaces\":[{\"name\":\"e20042\",\"id\":1},{\"name\":\"e20286\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC - Crateus\",\"cod\":34,\"lat\":-5.17878,\"lon\":-40.6637,\"interfaces\":[{\"name\":\"e20050\",\"id\":1},{\"name\":\"e20294\",\"id\":2}]},{\"caption\":\"UFCA\",\"id\":\"UFCA - Brejo Santo\",\"cod\":35,\"lat\":-7.48622,\"lon\":-38.9839,\"interfaces\":[{\"name\":\"e20049\",\"id\":1},{\"name\":\"e20293\",\"id\":2}]},{\"caption\":\"UNILAB\",\"id\":\"UNILAB-Auroras\",\"cod\":36,\"lat\":-4.21807,\"lon\":-38.714,\"interfaces\":[{\"name\":\"e20068\",\"id\":1},{\"name\":\"e20312\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE-Maranguape\",\"cod\":37,\"lat\":-3.91615,\"lon\":-38.6873,\"interfaces\":[{\"name\":\"e20067\",\"id\":1},{\"name\":\"e20311\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Paracuru\",\"cod\":38,\"lat\":-3.44499,\"lon\":-39.0412,\"interfaces\":[{\"name\":\"e20066\",\"id\":1},{\"name\":\"e20310\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Boa Viagem\",\"cod\":39,\"lat\":-5.0841,\"lon\":-39.7066,\"interfaces\":[{\"name\":\"e20065\",\"id\":1},{\"name\":\"e20309\",\"id\":2}]},{\"caption\":\"UECE\",\"id\":\"UECE-Taua\",\"cod\":40,\"lat\":-6.00533,\"lon\":-40.2839,\"interfaces\":[{\"name\":\"e20063\",\"id\":1},{\"name\":\"e20307\",\"id\":2}]},{\"caption\":\"UECE\",\"id\":\"UECE-Itapipoca\",\"cod\":41,\"lat\":-3.48953,\"lon\":-39.5678,\"interfaces\":[{\"name\":\"e20062\",\"id\":1},{\"name\":\"e20306\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Pecem\",\"cod\":42,\"lat\":-3.65819,\"lon\":-38.8583,\"interfaces\":[{\"name\":\"e20061\",\"id\":1},{\"name\":\"e20305\",\"id\":2}]},{\"caption\":\"UNILAB\",\"id\":\"UNILAB - Palmares\",\"cod\":43,\"lat\":-4.21338,\"lon\":-38.7002,\"interfaces\":[{\"name\":\"e20070\",\"id\":1},{\"name\":\"e20314\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Acopiara\",\"cod\":44,\"lat\":-6.06613,\"lon\":-39.4744,\"interfaces\":[{\"name\":\"e20069\",\"id\":1},{\"name\":\"e20313\",\"id\":2}]},{\"caption\":\"UECE\",\"id\":\"UECE-Limoeiro\",\"cod\":45,\"lat\":-5.14771,\"lon\":-38.101,\"interfaces\":[{\"name\":\"e20060\",\"id\":1},{\"name\":\"e20304\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Horizonte\",\"cod\":46,\"lat\":-4.10723,\"lon\":-38.491,\"interfaces\":[{\"name\":\"e19953\",\"id\":1},{\"name\":\"e20200\",\"id\":2}]},{\"caption\":\"UNIFOR\",\"id\":\"UNIFOR - Universidade de Fortaleza 10G\",\"cod\":47,\"lat\":-3.76888,\"lon\":-38.4816,\"interfaces\":[{\"name\":\"e20054\",\"id\":1},{\"name\":\"e20055\",\"id\":2},{\"name\":\"e20298\",\"id\":3},{\"name\":\"e20299\",\"id\":4}]},{\"caption\":\"UFC\",\"id\":\"UFC - Russas\",\"cod\":48,\"lat\":-4.9463,\"lon\":-37.9741,\"interfaces\":[{\"name\":\"e20051\",\"id\":1},{\"name\":\"e20295\",\"id\":2}]},{\"caption\":\"UFCA\",\"id\":\"UFCA - Reitoria\",\"cod\":49,\"lat\":-7.19434,\"lon\":-39.3156,\"interfaces\":[{\"name\":\"e20052\",\"id\":1},{\"name\":\"e20296\",\"id\":2}]},{\"caption\":\"UECE\",\"id\":\"UECE-Quixada\",\"cod\":50,\"lat\":-4.96849,\"lon\":-39.0244,\"interfaces\":[{\"name\":\"e20058\",\"id\":1},{\"name\":\"e20302\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPCO\",\"cod\":51,\"lat\":-3.75097,\"lon\":-40.3437,\"interfaces\":[{\"name\":\"e20059\",\"id\":1},{\"name\":\"e20303\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Reitoria 10G\",\"cod\":52,\"lat\":-3.7509,\"lon\":-38.5385,\"interfaces\":[{\"name\":\"e20056\",\"id\":1},{\"name\":\"e20300\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Jaguaribe\",\"cod\":53,\"lat\":-5.87925,\"lon\":-38.6098,\"interfaces\":[{\"name\":\"e20057\",\"id\":1},{\"name\":\"e20301\",\"id\":2}]},{\"caption\":\"Instituto Universidade Virtual\",\"id\":\"Instituto Universidade Virtual\",\"cod\":54,\"lat\":-3.74521,\"lon\":-38.5758,\"interfaces\":[{\"name\":\"e20075\",\"id\":1},{\"name\":\"e20319\",\"id\":2}]},{\"caption\":\"CNEN\",\"id\":\"CNEN - Fortaleza\",\"cod\":55,\"lat\":-3.73843,\"lon\":-38.4922,\"interfaces\":[{\"name\":\"e19955\",\"id\":1},{\"name\":\"e20202\",\"id\":2}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_REFO-CE\",\"cod\":56,\"lat\":-3.74259,\"lon\":-38.5111,\"interfaces\":[{\"name\":\"e20071\",\"id\":1},{\"name\":\"e20315\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Jaguaruana\",\"cod\":57,\"lat\":-4.83828,\"lon\":-37.7851,\"interfaces\":[{\"name\":\"e20072\",\"id\":1},{\"name\":\"e20316\",\"id\":2}]},{\"caption\":\"UECE\",\"id\":\"UECE - Iguatu\",\"cod\":58,\"lat\":-6.3671,\"lon\":-39.2994,\"interfaces\":[{\"name\":\"e20073\",\"id\":1},{\"name\":\"e20317\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Crateus\",\"cod\":59,\"lat\":-5.17326,\"lon\":-40.6568,\"interfaces\":[{\"name\":\"e20001\",\"id\":1},{\"name\":\"e20248\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Cedro\",\"cod\":60,\"lat\":-6.60133,\"lon\":-39.0551,\"interfaces\":[{\"name\":\"e20000\",\"id\":1},{\"name\":\"e20247\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Caucaia\",\"cod\":61,\"lat\":-3.73096,\"lon\":-38.672,\"interfaces\":[{\"name\":\"e19999\",\"id\":1},{\"name\":\"e20246\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Canindé\",\"cod\":62,\"lat\":-4.39079,\"lon\":-39.3126,\"interfaces\":[{\"name\":\"e19998\",\"id\":1},{\"name\":\"e20245\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Camocim\",\"cod\":63,\"lat\":-2.89832,\"lon\":-40.8605,\"interfaces\":[{\"name\":\"e19997\",\"id\":1},{\"name\":\"e19954\",\"id\":2},{\"name\":\"e20201\",\"id\":3},{\"name\":\"e20244\",\"id\":4}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Baturite\",\"cod\":64,\"lat\":-4.3324,\"lon\":-38.8822,\"interfaces\":[{\"name\":\"e19996\",\"id\":1},{\"name\":\"e20243\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Aracati\",\"cod\":65,\"lat\":-4.56901,\"lon\":-37.7766,\"interfaces\":[{\"name\":\"e19995\",\"id\":1},{\"name\":\"e20242\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Acarau\",\"cod\":66,\"lat\":-2.88876,\"lon\":-40.1134,\"interfaces\":[{\"name\":\"e19994\",\"id\":1},{\"name\":\"e19993\",\"id\":2},{\"name\":\"e20241\",\"id\":3},{\"name\":\"e20240\",\"id\":4}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Sobral\",\"cod\":67,\"lat\":-3.68342,\"lon\":-40.3409,\"interfaces\":[{\"name\":\"e20010\",\"id\":1},{\"name\":\"e20257\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Taua\",\"cod\":68,\"lat\":-6.00572,\"lon\":-40.2836,\"interfaces\":[{\"name\":\"e20011\",\"id\":1},{\"name\":\"e20258\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Limoeiro do Norte\",\"cod\":69,\"lat\":-5.1458,\"lon\":-38.0936,\"interfaces\":[{\"name\":\"e20006\",\"id\":1},{\"name\":\"e20253\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Maracanau\",\"cod\":70,\"lat\":-3.87265,\"lon\":-38.6106,\"interfaces\":[{\"name\":\"e20007\",\"id\":1},{\"name\":\"e20254\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Morada Nova\",\"cod\":71,\"lat\":-5.09148,\"lon\":-38.3647,\"interfaces\":[{\"name\":\"e20008\",\"id\":1},{\"name\":\"e20255\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Quixadá\",\"cod\":72,\"lat\":-4.97352,\"lon\":-39.0139,\"interfaces\":[{\"name\":\"e20009\",\"id\":1},{\"name\":\"e20256\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Crato\",\"cod\":73,\"lat\":-7.20575,\"lon\":-39.4477,\"interfaces\":[{\"name\":\"e20002\",\"id\":1},{\"name\":\"e20249\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Iguatu I\",\"cod\":74,\"lat\":-6.39328,\"lon\":-39.2704,\"interfaces\":[{\"name\":\"e20003\",\"id\":1},{\"name\":\"e20250\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Iguatu II\",\"cod\":75,\"lat\":-6.34686,\"lon\":-39.3062,\"interfaces\":[{\"name\":\"e20004\",\"id\":1},{\"name\":\"e20251\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Juazeiro do Norte\",\"cod\":76,\"lat\":-7.24617,\"lon\":-39.3059,\"interfaces\":[{\"name\":\"e20005\",\"id\":1},{\"name\":\"e20252\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Ubajara\",\"cod\":77,\"lat\":-3.84473,\"lon\":-40.9172,\"interfaces\":[{\"name\":\"e20013\",\"id\":1},{\"name\":\"e20260\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Tiangua\",\"cod\":78,\"lat\":-3.72865,\"lon\":-40.9916,\"interfaces\":[{\"name\":\"e20012\",\"id\":1},{\"name\":\"e20259\",\"id\":2}]},{\"caption\":\"UNILAB\",\"id\":\"UNILAB - Redencao\",\"cod\":79,\"lat\":-4.22327,\"lon\":-38.725,\"interfaces\":[{\"name\":\"e20015\",\"id\":1},{\"name\":\"e20262\",\"id\":2}]},{\"caption\":\"IFCE\",\"id\":\"IFCE - Umirim\",\"cod\":80,\"lat\":-3.68562,\"lon\":-39.341,\"interfaces\":[{\"name\":\"e20014\",\"id\":1},{\"name\":\"e20261\",\"id\":2}]},{\"caption\":\"UFCA\",\"id\":\"UFCA - Crato\",\"cod\":81,\"lat\":-7.22635,\"lon\":-39.3722,\"interfaces\":[{\"name\":\"e20017\",\"id\":1},{\"name\":\"e20264\",\"id\":2}]},{\"caption\":\"UFCA\",\"id\":\"UFCA - Barbalha\",\"cod\":82,\"lat\":-7.31331,\"lon\":-39.3046,\"interfaces\":[{\"name\":\"e20016\",\"id\":1},{\"name\":\"e20263\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC - Sobral Mucambinho\",\"cod\":83,\"lat\":-3.69274,\"lon\":-40.3542,\"interfaces\":[{\"name\":\"e20018\",\"id\":1},{\"name\":\"e20265\",\"id\":2}]},{\"caption\":\"UFCA\",\"id\":\"UFCA - Juazeiro do Norte\",\"cod\":84,\"lat\":-7.2566,\"lon\":-39.3041,\"interfaces\":[{\"name\":\"e19951\",\"id\":1},{\"name\":\"e20198\",\"id\":2}]},{\"caption\":\"UVA\",\"id\":\"UVA - Sobral\",\"cod\":85,\"lat\":-3.67729,\"lon\":-40.3399,\"interfaces\":[{\"name\":\"e20020\",\"id\":1},{\"name\":\"e20267\",\"id\":2}]},{\"caption\":\"UFC\",\"id\":\"UFC - Sobral Derby\",\"cod\":86,\"lat\":-3.68159,\"lon\":-40.3399,\"interfaces\":[{\"name\":\"e20019\",\"id\":1},{\"name\":\"e20266\",\"id\":2}]}]},\"df\":{\"clientes\":[{\"caption\":\"IBICT\",\"id\":\"IBICT2\",\"cod\":1,\"lat\":-15.8045,\"lon\":-47.8817,\"interfaces\":[{\"name\":\"e62273\",\"id\":1},{\"name\":\"e62441\",\"id\":2},{\"name\":\"e62607\",\"id\":3},{\"name\":\"e62776\",\"id\":4}]},{\"caption\":\"UNESCO\",\"id\":\"UNESCO\",\"cod\":2,\"lat\":-15.8045,\"lon\":-47.8818,\"interfaces\":[{\"name\":\"e62274\",\"id\":1},{\"name\":\"e62442\",\"id\":2},{\"name\":\"e62608\",\"id\":3},{\"name\":\"e62777\",\"id\":4}]},{\"caption\":\"UnB-Planaltina-Lan\",\"id\":\"UnB-Planaltina-Lan\",\"cod\":3,\"lat\":-15.6009,\"lon\":-47.6583,\"interfaces\":[{\"name\":\"e62275\",\"id\":1},{\"name\":\"e62443\",\"id\":2},{\"name\":\"e62609\",\"id\":3},{\"name\":\"e62778\",\"id\":4}]},{\"caption\":\"LAN\",\"id\":\"UnB-Ceilândia-LAN\",\"cod\":4,\"lat\":-15.8441,\"lon\":-48.1016,\"interfaces\":[{\"name\":\"e62276\",\"id\":1},{\"name\":\"e62444\",\"id\":2},{\"name\":\"e62610\",\"id\":3},{\"name\":\"e62779\",\"id\":4}]},{\"caption\":\"FAL\",\"id\":\"UnB FAL - Fazenda Água Limpa\",\"cod\":5,\"lat\":-15.9486,\"lon\":-47.9339,\"interfaces\":[{\"name\":\"e62241\",\"id\":1},{\"name\":\"e62409\",\"id\":2},{\"name\":\"e62576\",\"id\":3},{\"name\":\"e62745\",\"id\":4}]},{\"caption\":\"HVET\",\"id\":\"UnB - HVET - Hosp. Veterinário\",\"cod\":6,\"lat\":-15.7003,\"lon\":-47.9128,\"interfaces\":[{\"name\":\"e62242\",\"id\":1},{\"name\":\"e62410\",\"id\":2},{\"name\":\"e62577\",\"id\":3},{\"name\":\"e62746\",\"id\":4}]},{\"caption\":\"ESR\",\"id\":\"ESR\",\"cod\":7,\"lat\":-15.8048,\"lon\":-47.8817,\"interfaces\":[{\"name\":\"e62271\",\"id\":1},{\"name\":\"e62439\",\"id\":2},{\"name\":\"e62605\",\"id\":3},{\"name\":\"e62774\",\"id\":4}]},{\"caption\":\"IBICT\",\"id\":\"IBICT\",\"cod\":8,\"lat\":-15.8045,\"lon\":-47.8817,\"interfaces\":[{\"name\":\"e62272\",\"id\":1},{\"name\":\"e62440\",\"id\":2},{\"name\":\"e62606\",\"id\":3},{\"name\":\"e62775\",\"id\":4}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPAC\",\"cod\":9,\"lat\":-15.6142,\"lon\":-47.6978,\"interfaces\":[{\"name\":\"e62237\",\"id\":1},{\"name\":\"e62405\",\"id\":2},{\"name\":\"e62572\",\"id\":3},{\"name\":\"e62741\",\"id\":4}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPH\",\"cod\":10,\"lat\":-15.9324,\"lon\":-48.1447,\"interfaces\":[{\"name\":\"e62238\",\"id\":1},{\"name\":\"e62406\",\"id\":2},{\"name\":\"e62573\",\"id\":3},{\"name\":\"e62742\",\"id\":4}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_Sucupira\",\"cod\":11,\"lat\":-15.9129,\"lon\":-48.0129,\"interfaces\":[{\"name\":\"e62239\",\"id\":1},{\"name\":\"e62407\",\"id\":2},{\"name\":\"e62574\",\"id\":3},{\"name\":\"e62743\",\"id\":4}]},{\"caption\":\"UnB - Práticas Jurídicas\",\"id\":\"UnB - Práticas Jurídicas\",\"cod\":12,\"lat\":-15.8212,\"lon\":-48.1133,\"interfaces\":[{\"name\":\"e62240\",\"id\":1},{\"name\":\"e62408\",\"id\":2},{\"name\":\"e62575\",\"id\":3},{\"name\":\"e62744\",\"id\":4}]},{\"caption\":\"CGEE\",\"id\":\"CGEE\",\"cod\":13,\"lat\":-15.7957,\"lon\":-47.8936,\"interfaces\":[{\"name\":\"e62233\",\"id\":1},{\"name\":\"e62401\",\"id\":2},{\"name\":\"e62568\",\"id\":3},{\"name\":\"e62737\",\"id\":4}]},{\"caption\":\"CNEN\",\"id\":\"CNEN\",\"cod\":14,\"lat\":-15.7865,\"lon\":-47.8872,\"interfaces\":[{\"name\":\"e62234\",\"id\":1},{\"name\":\"e62402\",\"id\":2},{\"name\":\"e62569\",\"id\":3},{\"name\":\"e62738\",\"id\":4}]},{\"caption\":\"CNP\",\"id\":\"CNPq\",\"cod\":15,\"lat\":-15.8588,\"lon\":-47.9271,\"interfaces\":[{\"name\":\"e62235\",\"id\":1},{\"name\":\"e62403\",\"id\":2},{\"name\":\"e62570\",\"id\":3},{\"name\":\"e62739\",\"id\":4}]},{\"caption\":\"CONSECTI\",\"id\":\"CONSECTI\",\"cod\":16,\"lat\":-15.785,\"lon\":-47.8903,\"interfaces\":[{\"name\":\"e62236\",\"id\":1},{\"name\":\"e62404\",\"id\":2},{\"name\":\"e62571\",\"id\":3},{\"name\":\"e62740\",\"id\":4}]},{\"caption\":\"CTZL\",\"id\":\"Embrapa_CTZL\",\"cod\":17,\"lat\":-15.952,\"lon\":-48.1369,\"interfaces\":[{\"name\":\"e62296\",\"id\":1},{\"name\":\"e62463\",\"id\":2},{\"name\":\"e62629\",\"id\":3},{\"name\":\"e62799\",\"id\":4}]},{\"caption\":\"GigaCandanga - Sede - DF\",\"id\":\"GigaCandanga - Sede - DF\",\"cod\":18,\"lat\":-15.7734,\"lon\":-47.866,\"interfaces\":[{\"name\":\"e62308\",\"id\":1},{\"name\":\"e62475\",\"id\":2},{\"name\":\"e62641\",\"id\":3},{\"name\":\"e62812\",\"id\":4}]},{\"caption\":\"EMBRAPA\",\"id\":\" EMBRAPA_SEDE\",\"cod\":19,\"lat\":-15.7312,\"lon\":-47.8978,\"interfaces\":[{\"name\":\"e62289\",\"id\":1},{\"name\":\"e62456\",\"id\":2},{\"name\":\"e62622\",\"id\":3},{\"name\":\"e62792\",\"id\":4}]},{\"caption\":\"ESCS\",\"id\":\"ESCS - Escola Superior de Ciências da Saúde\",\"cod\":20,\"lat\":-15.7845,\"lon\":-47.8868,\"interfaces\":[{\"name\":\"e62293\",\"id\":1},{\"name\":\"e62460\",\"id\":2},{\"name\":\"e62626\",\"id\":3},{\"name\":\"e62796\",\"id\":4}]},{\"caption\":\"HFA\",\"id\":\"HFA - Hospital das Forças Armadas\",\"cod\":21,\"lat\":-15.8012,\"lon\":-47.9348,\"interfaces\":[{\"name\":\"e62287\",\"id\":1},{\"name\":\"e62454\",\"id\":2},{\"name\":\"e62620\",\"id\":3},{\"name\":\"e62790\",\"id\":4}]},{\"caption\":\"Teste_PoP-DF\",\"id\":\"Teste_PoP-DF\",\"cod\":22,\"lat\":-15.8048,\"lon\":-47.8818,\"interfaces\":[{\"name\":\"e62306\",\"id\":1},{\"name\":\"e62307\",\"id\":2},{\"name\":\"e62304\",\"id\":3},{\"name\":\"e62305\",\"id\":4},{\"name\":\"e62471\",\"id\":5},{\"name\":\"e62472\",\"id\":6},{\"name\":\"e62473\",\"id\":7},{\"name\":\"e62474\",\"id\":8},{\"name\":\"e62638\",\"id\":9},{\"name\":\"e62639\",\"id\":10},{\"name\":\"e62637\",\"id\":11},{\"name\":\"e62640\",\"id\":12},{\"name\":\"e62809\",\"id\":13},{\"name\":\"e62808\",\"id\":14},{\"name\":\"e62810\",\"id\":15},{\"name\":\"e62811\",\"id\":16}]},{\"caption\":\"CENSIPAM\",\"id\":\"CENSIPAM - DF\",\"cod\":23,\"lat\":-15.8145,\"lon\":-47.9412,\"interfaces\":[{\"name\":\"e62298\",\"id\":1},{\"name\":\"e62465\",\"id\":2},{\"name\":\"e62631\",\"id\":3},{\"name\":\"e62801\",\"id\":4}]},{\"caption\":\"MD\",\"id\":\"MD - ESG_IPC\",\"cod\":24,\"lat\":-15.7942,\"lon\":-47.8698,\"interfaces\":[{\"name\":\"e62286\",\"id\":1},{\"name\":\"e62479\",\"id\":2},{\"name\":\"e62645\",\"id\":3},{\"name\":\"e62789\",\"id\":4}]},{\"caption\":\"UnB\",\"id\":\"UnB\",\"cod\":25,\"lat\":-15.7728,\"lon\":-47.8658,\"interfaces\":[{\"name\":\"e62262\",\"id\":1},{\"name\":\"e62430\",\"id\":2},{\"name\":\"e62596\",\"id\":3},{\"name\":\"e62765\",\"id\":4}]},{\"caption\":\"INEP\",\"id\":\"INEP Back-up 10GBps\",\"cod\":26,\"lat\":-15.788,\"lon\":-47.9143,\"interfaces\":[{\"name\":\"e62292\",\"id\":1},{\"name\":\"e62459\",\"id\":2},{\"name\":\"e62625\",\"id\":3},{\"name\":\"e62795\",\"id\":4}]},{\"caption\":\"MEC\",\"id\":\"MEC\",\"cod\":27,\"lat\":-15.7933,\"lon\":-47.8723,\"interfaces\":[{\"name\":\"e62251\",\"id\":1},{\"name\":\"e62419\",\"id\":2},{\"name\":\"e62586\",\"id\":3},{\"name\":\"e62755\",\"id\":4}]},{\"caption\":\"MCTI\",\"id\":\"MCTI\",\"cod\":28,\"lat\":-15.7996,\"lon\":-47.8699,\"interfaces\":[{\"name\":\"e62250\",\"id\":1},{\"name\":\"e62418\",\"id\":2},{\"name\":\"e62585\",\"id\":3},{\"name\":\"e62754\",\"id\":4}]},{\"caption\":\"MLX\",\"id\":\"MLXe8 - port GigaCandanga\",\"cod\":29,\"lat\":-15.8058,\"lon\":-47.8814,\"interfaces\":[{\"name\":\"e62300\",\"id\":1},{\"name\":\"e62301\",\"id\":2},{\"name\":\"e62467\",\"id\":3},{\"name\":\"e62468\",\"id\":4},{\"name\":\"e62633\",\"id\":5},{\"name\":\"e62634\",\"id\":6},{\"name\":\"e62804\",\"id\":7},{\"name\":\"e62803\",\"id\":8}]},{\"caption\":\"CEBRASPE\",\"id\":\"CEBRASPE\",\"cod\":30,\"lat\":-15.7721,\"lon\":-47.8663,\"interfaces\":[{\"name\":\"e62282\",\"id\":1},{\"name\":\"e62450\",\"id\":2},{\"name\":\"e62616\",\"id\":3},{\"name\":\"e62785\",\"id\":4}]},{\"caption\":\"INMETRO\",\"id\":\"INMETRO - DF\",\"cod\":31,\"lat\":-15.7946,\"lon\":-47.9116,\"interfaces\":[{\"name\":\"e62243\",\"id\":1},{\"name\":\"e62411\",\"id\":2},{\"name\":\"e62578\",\"id\":3},{\"name\":\"e62747\",\"id\":4}]},{\"caption\":\"FNDE\",\"id\":\"FNDE\",\"cod\":32,\"lat\":-15.8009,\"lon\":-47.8833,\"interfaces\":[{\"name\":\"e62230\",\"id\":1},{\"name\":\"e62398\",\"id\":2},{\"name\":\"e62565\",\"id\":3},{\"name\":\"e62734\",\"id\":4}]},{\"caption\":\"IFB\",\"id\":\"IFB - Planaltina\",\"cod\":33,\"lat\":-15.8477,\"lon\":-47.5611,\"interfaces\":[{\"name\":\"e62245\",\"id\":1},{\"name\":\"e62413\",\"id\":2},{\"name\":\"e62580\",\"id\":3},{\"name\":\"e62749\",\"id\":4}]},{\"caption\":\"IFB\",\"id\":\"IFB - Brasilia\",\"cod\":34,\"lat\":-15.7541,\"lon\":-47.8791,\"interfaces\":[{\"name\":\"e62244\",\"id\":1},{\"name\":\"e62412\",\"id\":2},{\"name\":\"e62579\",\"id\":3},{\"name\":\"e62748\",\"id\":4}]},{\"caption\":\"IFB\",\"id\":\"IFB - Tag. Norte\",\"cod\":35,\"lat\":-15.7941,\"lon\":-48.1021,\"interfaces\":[{\"name\":\"e62247\",\"id\":1},{\"name\":\"e62415\",\"id\":2},{\"name\":\"e62582\",\"id\":3},{\"name\":\"e62751\",\"id\":4}]},{\"caption\":\"IFB\",\"id\":\"IFB - Samambaia\",\"cod\":36,\"lat\":-15.8627,\"lon\":-48.0538,\"interfaces\":[{\"name\":\"e62246\",\"id\":1},{\"name\":\"e62414\",\"id\":2},{\"name\":\"e62581\",\"id\":3},{\"name\":\"e62750\",\"id\":4}]},{\"caption\":\"IFB\",\"id\":\"IFB São Sebastião\",\"cod\":37,\"lat\":-15.8914,\"lon\":-47.78,\"interfaces\":[{\"name\":\"e62249\",\"id\":1},{\"name\":\"e62417\",\"id\":2},{\"name\":\"e62584\",\"id\":3},{\"name\":\"e62753\",\"id\":4}]},{\"caption\":\"IFB\",\"id\":\"IFB - Riacho Fundo\",\"cod\":38,\"lat\":-15.8814,\"lon\":-48.0094,\"interfaces\":[{\"name\":\"e62248\",\"id\":1},{\"name\":\"e62416\",\"id\":2},{\"name\":\"e62583\",\"id\":3},{\"name\":\"e62752\",\"id\":4}]},{\"caption\":\"MECD\",\"id\":\"MECDezGbps\",\"cod\":39,\"lat\":-15.7935,\"lon\":-47.8723,\"interfaces\":[{\"name\":\"e62268\",\"id\":1},{\"name\":\"e62436\",\"id\":2},{\"name\":\"e62602\",\"id\":3},{\"name\":\"e62771\",\"id\":4}]},{\"caption\":\"CAPES\",\"id\":\"CAPES - INEP\",\"cod\":40,\"lat\":-15.788,\"lon\":-47.9143,\"interfaces\":[{\"name\":\"e62291\",\"id\":1},{\"name\":\"e62458\",\"id\":2},{\"name\":\"e62624\",\"id\":3},{\"name\":\"e62794\",\"id\":4}]},{\"caption\":\"INEPD\",\"id\":\"INEPDezGbps\",\"cod\":41,\"lat\":-15.788,\"lon\":-47.9142,\"interfaces\":[{\"name\":\"e62266\",\"id\":1},{\"name\":\"e62434\",\"id\":2},{\"name\":\"e62600\",\"id\":3},{\"name\":\"e62769\",\"id\":4}]},{\"caption\":\"MCTIC\",\"id\":\"MCTIC-II\",\"cod\":42,\"lat\":-15.7953,\"lon\":-47.8668,\"interfaces\":[{\"name\":\"e62265\",\"id\":1},{\"name\":\"e62433\",\"id\":2},{\"name\":\"e62599\",\"id\":3},{\"name\":\"e62768\",\"id\":4}]},{\"caption\":\"Capes\",\"id\":\"Capes\",\"cod\":43,\"lat\":-15.7879,\"lon\":-47.8781,\"interfaces\":[{\"name\":\"e62264\",\"id\":1},{\"name\":\"e62432\",\"id\":2},{\"name\":\"e62598\",\"id\":3},{\"name\":\"e62767\",\"id\":4}]},{\"caption\":\"AEB\",\"id\":\"AEB - Agência Espacial Brasileira\",\"cod\":44,\"lat\":-15.8158,\"lon\":-47.9433,\"interfaces\":[{\"name\":\"e62263\",\"id\":1},{\"name\":\"e62431\",\"id\":2},{\"name\":\"e62597\",\"id\":3},{\"name\":\"e62766\",\"id\":4}]},{\"caption\":\"BNB\",\"id\":\"BNB - Biblioteca Nacional de Brasília\",\"cod\":45,\"lat\":-15.7967,\"lon\":-47.8793,\"interfaces\":[{\"name\":\"e62232\",\"id\":1},{\"name\":\"e62400\",\"id\":2},{\"name\":\"e62567\",\"id\":3},{\"name\":\"e62736\",\"id\":4}]},{\"caption\":\"EPL\",\"id\":\"EPL\",\"cod\":46,\"lat\":-15.7957,\"lon\":-47.8936,\"interfaces\":[{\"name\":\"e62261\",\"id\":1},{\"name\":\"e62429\",\"id\":2},{\"name\":\"e62595\",\"id\":3},{\"name\":\"e62764\",\"id\":4}]},{\"caption\":\"CMB\",\"id\":\"CMB - Colégio Militar de Brasília\",\"cod\":47,\"lat\":-15.781,\"lon\":-47.8929,\"interfaces\":[{\"name\":\"e62283\",\"id\":1},{\"name\":\"e62451\",\"id\":2},{\"name\":\"e62617\",\"id\":3},{\"name\":\"e62786\",\"id\":4}]},{\"caption\":\"LAN\",\"id\":\"UnB-Gama-LAN\",\"cod\":48,\"lat\":-15.9896,\"lon\":-48.0445,\"interfaces\":[{\"name\":\"e62277\",\"id\":1},{\"name\":\"e62445\",\"id\":2},{\"name\":\"e62611\",\"id\":3},{\"name\":\"e62780\",\"id\":4}]},{\"caption\":\"ITI\",\"id\":\"ITI - Inst. Nacional de TI\",\"cod\":49,\"lat\":-15.788,\"lon\":-47.8846,\"interfaces\":[{\"name\":\"e62285\",\"id\":1},{\"name\":\"e62267\",\"id\":2},{\"name\":\"e62435\",\"id\":3},{\"name\":\"e62453\",\"id\":4},{\"name\":\"e62601\",\"id\":5},{\"name\":\"e62619\",\"id\":6},{\"name\":\"e62788\",\"id\":7},{\"name\":\"e62770\",\"id\":8}]},{\"caption\":\"EBC\",\"id\":\"EBC- Empresa Brasil de Comunicação\",\"cod\":50,\"lat\":-15.7955,\"lon\":-47.8927,\"interfaces\":[{\"name\":\"e62284\",\"id\":1},{\"name\":\"e62452\",\"id\":2},{\"name\":\"e62618\",\"id\":3},{\"name\":\"e62787\",\"id\":4}]},{\"caption\":\"MEC\",\"id\":\"MEC10Gbps-II backup\",\"cod\":51,\"lat\":-15.7935,\"lon\":-47.8727,\"interfaces\":[{\"name\":\"e62279\",\"id\":1},{\"name\":\"e62447\",\"id\":2},{\"name\":\"e62613\",\"id\":3},{\"name\":\"e62782\",\"id\":4}]},{\"caption\":\"MLX\",\"id\":\"MLXe4 - port GigaCandanga\",\"cod\":52,\"lat\":-15.8058,\"lon\":-47.8813,\"interfaces\":[{\"name\":\"e62302\",\"id\":1},{\"name\":\"e62469\",\"id\":2},{\"name\":\"e62635\",\"id\":3},{\"name\":\"e62805\",\"id\":4}]},{\"caption\":\"ANDIFES\",\"id\":\"ANDIFES - DF\",\"cod\":53,\"lat\":-15.7972,\"lon\":-47.8865,\"interfaces\":[{\"name\":\"e62270\",\"id\":1},{\"name\":\"e62438\",\"id\":2},{\"name\":\"e62604\",\"id\":3},{\"name\":\"e62773\",\"id\":4}]},{\"caption\":\"CONIF\",\"id\":\"CONIF - DF\",\"cod\":54,\"lat\":-15.7966,\"lon\":-47.8866,\"interfaces\":[{\"name\":\"e62269\",\"id\":1},{\"name\":\"e62437\",\"id\":2},{\"name\":\"e62603\",\"id\":3},{\"name\":\"e62772\",\"id\":4}]},{\"caption\":\"MCTIC\",\"id\":\"MCTIC - Cerrado\",\"cod\":55,\"lat\":-15.8159,\"lon\":-47.9441,\"interfaces\":[{\"name\":\"e62281\",\"id\":1},{\"name\":\"e62449\",\"id\":2},{\"name\":\"e62615\",\"id\":3},{\"name\":\"e62784\",\"id\":4}]},{\"caption\":\"FIOCRUZ\",\"id\":\"FIOCRUZ - DF\",\"cod\":56,\"lat\":-15.7708,\"lon\":-47.8705,\"interfaces\":[{\"name\":\"e62297\",\"id\":1},{\"name\":\"e62464\",\"id\":2},{\"name\":\"e62630\",\"id\":3},{\"name\":\"e62800\",\"id\":4}]},{\"caption\":\"IFB\",\"id\":\"IFB - Recanto das Emas\",\"cod\":57,\"lat\":-15.9126,\"lon\":-48.0772,\"interfaces\":[{\"name\":\"e62280\",\"id\":1},{\"name\":\"e62448\",\"id\":2},{\"name\":\"e62614\",\"id\":3},{\"name\":\"e62783\",\"id\":4}]},{\"caption\":\"TIC\",\"id\":\"BioTIC - Parque Tecnológico de Brasília\",\"cod\":58,\"lat\":-15.7112,\"lon\":-47.9111,\"interfaces\":[{\"name\":\"e62294\",\"id\":1},{\"name\":\"e62461\",\"id\":2},{\"name\":\"e62627\",\"id\":3},{\"name\":\"e62797\",\"id\":4}]},{\"caption\":\"ESCS\",\"id\":\"ESCS - Escola Superior de Ciências da Saúde - Samambaia\",\"cod\":59,\"lat\":-15.8821,\"lon\":-48.0909,\"interfaces\":[{\"name\":\"e62229\",\"id\":1},{\"name\":\"e62397\",\"id\":2},{\"name\":\"e62564\",\"id\":3},{\"name\":\"e62733\",\"id\":4}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_SEDE\",\"cod\":60,\"lat\":-15.7885,\"lon\":-47.8793,\"interfaces\":[{\"name\":\"e62290\",\"id\":1},{\"name\":\"e62457\",\"id\":2},{\"name\":\"e62623\",\"id\":3},{\"name\":\"e62793\",\"id\":4}]},{\"caption\":\"MX\",\"id\":\"Teste_MX-NH\",\"cod\":61,\"lat\":-15.8047,\"lon\":-47.8818,\"interfaces\":[{\"name\":\"e62311\",\"id\":1},{\"name\":\"e62310\",\"id\":2},{\"name\":\"e62309\",\"id\":3},{\"name\":\"e62478\",\"id\":4},{\"name\":\"e62476\",\"id\":5},{\"name\":\"e62477\",\"id\":6},{\"name\":\"e62644\",\"id\":7},{\"name\":\"e62643\",\"id\":8},{\"name\":\"e62642\",\"id\":9},{\"name\":\"e62814\",\"id\":10},{\"name\":\"e62815\",\"id\":11},{\"name\":\"e62813\",\"id\":12}]},{\"caption\":\"IFB\",\"id\":\"IFB-Reitoria\",\"cod\":62,\"lat\":-15.8011,\"lon\":-47.8793,\"interfaces\":[{\"name\":\"e62288\",\"id\":1},{\"name\":\"e62455\",\"id\":2},{\"name\":\"e62621\",\"id\":3},{\"name\":\"e62791\",\"id\":4}]},{\"caption\":\"MCTI\",\"id\":\"MCTI - Bloco A\",\"cod\":63,\"lat\":-15.7987,\"lon\":-47.8736,\"interfaces\":[{\"name\":\"e62303\",\"id\":1},{\"name\":\"e62470\",\"id\":2},{\"name\":\"e62636\",\"id\":3},{\"name\":\"e62807\",\"id\":4}]},{\"caption\":\"MCOM\",\"id\":\"MCOM - DF\",\"cod\":64,\"lat\":-15.7953,\"lon\":-47.8737,\"interfaces\":[{\"name\":\"e62231\",\"id\":1},{\"name\":\"e62399\",\"id\":2},{\"name\":\"e62566\",\"id\":3},{\"name\":\"e62735\",\"id\":4}]},{\"caption\":\"Embrapii\",\"id\":\"Embrapii\",\"cod\":65,\"lat\":-15.7907,\"lon\":-47.8789,\"interfaces\":[{\"name\":\"e62278\",\"id\":1},{\"name\":\"e62446\",\"id\":2},{\"name\":\"e62612\",\"id\":3},{\"name\":\"e62781\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_SEDE\",\"cod\":66,\"lat\":-15.7948,\"lon\":-47.8932,\"interfaces\":[{\"name\":\"e62260\",\"id\":1},{\"name\":\"e62428\",\"id\":2}]},{\"caption\":\"IFB\",\"id\":\"IFB-Ceilândia\",\"cod\":67,\"lat\":-15.8428,\"lon\":-48.1011,\"interfaces\":[{\"name\":\"e62228\",\"id\":1},{\"name\":\"e62396\",\"id\":2},{\"name\":\"e62563\",\"id\":3},{\"name\":\"e62732\",\"id\":4}]},{\"caption\":\"CNE\",\"id\":\"CNE\",\"cod\":68,\"lat\":-15.8222,\"lon\":-47.8949,\"interfaces\":[{\"name\":\"e62258\",\"id\":1},{\"name\":\"e62426\",\"id\":2},{\"name\":\"e62593\",\"id\":3},{\"name\":\"e62762\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUB\",\"cod\":69,\"lat\":-15.7719,\"lon\":-47.8743,\"interfaces\":[{\"name\":\"e62259\",\"id\":1},{\"name\":\"e62427\",\"id\":2},{\"name\":\"e62594\",\"id\":3},{\"name\":\"e62763\",\"id\":4}]},{\"caption\":\"ENAP\",\"id\":\"ENAP\",\"cod\":70,\"lat\":-15.8305,\"lon\":-47.9309,\"interfaces\":[{\"name\":\"e62256\",\"id\":1},{\"name\":\"e62424\",\"id\":2},{\"name\":\"e62591\",\"id\":3},{\"name\":\"e62760\",\"id\":4}]},{\"caption\":\"INMET\",\"id\":\"INMET\",\"cod\":71,\"lat\":-15.7901,\"lon\":-47.9239,\"interfaces\":[{\"name\":\"e62257\",\"id\":1},{\"name\":\"e62425\",\"id\":2},{\"name\":\"e62592\",\"id\":3},{\"name\":\"e62761\",\"id\":4}]},{\"caption\":\"Sarah centro\",\"id\":\"Sarah centro\",\"cod\":72,\"lat\":-15.8,\"lon\":-47.8904,\"interfaces\":[{\"name\":\"e62254\",\"id\":1},{\"name\":\"e62422\",\"id\":2},{\"name\":\"e62589\",\"id\":3},{\"name\":\"e62758\",\"id\":4}]},{\"caption\":\"IFB\",\"id\":\"IFB estrutural\",\"cod\":73,\"lat\":-15.7938,\"lon\":-47.9693,\"interfaces\":[{\"name\":\"e62255\",\"id\":1},{\"name\":\"e62423\",\"id\":2},{\"name\":\"e62590\",\"id\":3},{\"name\":\"e62759\",\"id\":4}]},{\"caption\":\"RNP\",\"id\":\"RNP\",\"cod\":74,\"lat\":-15.8045,\"lon\":-47.8827,\"interfaces\":[{\"name\":\"e62252\",\"id\":1},{\"name\":\"e62420\",\"id\":2},{\"name\":\"e62587\",\"id\":3},{\"name\":\"e62756\",\"id\":4}]},{\"caption\":\"Sarah Lago \",\"id\":\"Sarah Lago \",\"cod\":75,\"lat\":-15.7527,\"lon\":-47.829,\"interfaces\":[{\"name\":\"e62253\",\"id\":1},{\"name\":\"e62421\",\"id\":2},{\"name\":\"e62588\",\"id\":3},{\"name\":\"e62757\",\"id\":4}]},{\"caption\":\"GigaCandanga - DF\",\"id\":\"GigaCandanga - DF\",\"cod\":76,\"lat\":-15.7653,\"lon\":-47.873,\"interfaces\":[{\"name\":\"e62806\",\"id\":1}]}]},\"es\":{\"clientes\":[{\"caption\":\"IFES\",\"id\":\"IFES - CEFOR\",\"cod\":1,\"lat\":-20.3084,\"lon\":-40.3202,\"interfaces\":[{\"name\":\"e10906\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Centro Serrano\",\"cod\":2,\"lat\":-20.1412,\"lon\":-40.7242,\"interfaces\":[{\"name\":\"e10902\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES-Montanha\",\"cod\":3,\"lat\":-18.1287,\"lon\":-40.3513,\"interfaces\":[{\"name\":\"e10903\",\"id\":1}]},{\"caption\":\"UFES\",\"id\":\"UFES - Jeronimo Monteiro\",\"cod\":4,\"lat\":-20.7897,\"lon\":-41.3888,\"interfaces\":[{\"name\":\"e10900\",\"id\":1}]},{\"caption\":\"INMA\",\"id\":\"INMA - ES\",\"cod\":5,\"lat\":-19.9354,\"lon\":-40.5998,\"interfaces\":[{\"name\":\"e10901\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUCAM-UFES\",\"cod\":6,\"lat\":-20.2985,\"lon\":-40.3162,\"interfaces\":[{\"name\":\"e10898\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Barra S. Francisco\",\"cod\":7,\"lat\":-18.7549,\"lon\":-40.8891,\"interfaces\":[{\"name\":\"e10899\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Vila Velha\",\"cod\":8,\"lat\":-20.3488,\"lon\":-40.3089,\"interfaces\":[{\"name\":\"e10880\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Venda Nova do Imigrante\",\"cod\":9,\"lat\":-20.3278,\"lon\":-41.136,\"interfaces\":[{\"name\":\"e10879\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Serra\",\"cod\":10,\"lat\":-20.1978,\"lon\":-40.2173,\"interfaces\":[{\"name\":\"e10877\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - São Mateus\",\"cod\":11,\"lat\":-18.6788,\"lon\":-39.8606,\"interfaces\":[{\"name\":\"e10876\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Santa Teresa\",\"cod\":12,\"lat\":-19.9375,\"lon\":-40.5877,\"interfaces\":[{\"name\":\"e10874\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Piúma\",\"cod\":13,\"lat\":-20.8404,\"lon\":-40.7246,\"interfaces\":[{\"name\":\"e10872\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Linhares\",\"cod\":14,\"lat\":-19.4078,\"lon\":-40.0436,\"interfaces\":[{\"name\":\"e10870\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Cariacica\",\"cod\":15,\"lat\":-20.3245,\"lon\":-40.3714,\"interfaces\":[{\"name\":\"e10860\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Ibatiba\",\"cod\":16,\"lat\":-20.2362,\"lon\":-41.5077,\"interfaces\":[{\"name\":\"e10866\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Guarapari\",\"cod\":17,\"lat\":-20.6474,\"lon\":-40.4961,\"interfaces\":[{\"name\":\"e10864\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Colatina\",\"cod\":18,\"lat\":-19.5209,\"lon\":-40.6137,\"interfaces\":[{\"name\":\"e10862\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Itapina\",\"cod\":19,\"lat\":-19.4984,\"lon\":-40.7611,\"interfaces\":[{\"name\":\"e10868\",\"id\":1}]},{\"caption\":\"UFES\",\"id\":\"UFES - Hospital Veterinário\",\"cod\":20,\"lat\":-20.7514,\"lon\":-41.4884,\"interfaces\":[{\"name\":\"e10923\",\"id\":1}]},{\"caption\":\"UFES\",\"id\":\"UFES - Base Oceanografica\",\"cod\":21,\"lat\":-19.9454,\"lon\":-40.1506,\"interfaces\":[{\"name\":\"e10922\",\"id\":1}]},{\"caption\":\"CETEM\",\"id\":\"CETEM-ES\",\"cod\":22,\"lat\":-20.8021,\"lon\":-41.1541,\"interfaces\":[{\"name\":\"e10852\",\"id\":1}]},{\"caption\":\"EMESCAM\",\"id\":\"EMESCAM - Escola Superior de Ciências da Santa Casa de Misericórdia de Vitória\",\"cod\":23,\"lat\":-20.2971,\"lon\":-40.3,\"interfaces\":[{\"name\":\"e10828\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Alegre\",\"cod\":24,\"lat\":-20.7567,\"lon\":-41.4524,\"interfaces\":[{\"name\":\"e10857\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Aracruz\",\"cod\":25,\"lat\":-19.8242,\"lon\":-40.2623,\"interfaces\":[{\"name\":\"e10859\",\"id\":1}]},{\"caption\":\"FAPES\",\"id\":\"FAPES - Fundação de Amparo à Pesquisa e Inovação do Espírito Santo \",\"cod\":26,\"lat\":-20.2762,\"lon\":-40.3003,\"interfaces\":[{\"name\":\"e10854\",\"id\":1}]},{\"caption\":\"HUCAM\",\"id\":\"HUCAM - Hospital Universitario Cassiano Antonio Moraes\",\"cod\":27,\"lat\":-20.2996,\"lon\":-40.3192,\"interfaces\":[{\"name\":\"e10833\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Cachoeiro de Itapemirim\",\"cod\":28,\"lat\":-20.8029,\"lon\":-41.1548,\"interfaces\":[{\"name\":\"e10882\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Nova Venécia\",\"cod\":29,\"lat\":-18.7135,\"lon\":-40.3776,\"interfaces\":[{\"name\":\"e10884\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Reitoria\",\"cod\":30,\"lat\":-20.3075,\"lon\":-40.3025,\"interfaces\":[{\"name\":\"e10886\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES - Vitória\",\"cod\":31,\"lat\":-20.3103,\"lon\":-40.3195,\"interfaces\":[{\"name\":\"e10837\",\"id\":1},{\"name\":\"e10836\",\"id\":2}]},{\"caption\":\"UFES\",\"id\":\"UFES - Alegre\",\"cod\":32,\"lat\":-20.7615,\"lon\":-41.5359,\"interfaces\":[{\"name\":\"e10889\",\"id\":1}]},{\"caption\":\"UFES\",\"id\":\"UFES - São Mateus\",\"cod\":33,\"lat\":-18.6756,\"lon\":-39.8619,\"interfaces\":[{\"name\":\"e10890\",\"id\":1}]},{\"caption\":\"UFES\",\"id\":\"UFES\",\"cod\":34,\"lat\":-20.2739,\"lon\":-40.3047,\"interfaces\":[{\"name\":\"e10825\",\"id\":1}]},{\"caption\":\"INCAPER\",\"id\":\"INCAPER - Instituto Capixaba de Pesquisa, Assistência Técnica e Extensão Rural\",\"cod\":35,\"lat\":-20.3188,\"lon\":-40.305,\"interfaces\":[{\"name\":\"e10840\",\"id\":1},{\"name\":\"e10841\",\"id\":2},{\"name\":\"e10891\",\"id\":3}]},{\"caption\":\"SECTI\",\"id\":\"SECTI - Secretaria de Estado de Ciência, Tecnologia, Inovação, Educação Profissional\",\"cod\":36,\"lat\":-20.2776,\"lon\":-40.3009,\"interfaces\":[{\"name\":\"e10893\",\"id\":1}]},{\"caption\":\"IFES\",\"id\":\"IFES-Viana\",\"cod\":37,\"lat\":-20.3593,\"lon\":-40.4238,\"interfaces\":[{\"name\":\"e10896\",\"id\":1}]}]},\"go\":{\"clientes\":[{\"caption\":\"IFG\",\"id\":\"IFG - Jatai - Flamboyant\",\"cod\":1,\"lat\":-17.8718,\"lon\":-51.7353,\"interfaces\":[{\"name\":\"e10154\",\"id\":1},{\"name\":\"e10326\",\"id\":2},{\"name\":\"e10412\",\"id\":3},{\"name\":\"e10670\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG – Senador Canedo\",\"cod\":2,\"lat\":-16.6845,\"lon\":-49.1441,\"interfaces\":[{\"name\":\"e10136\",\"id\":1},{\"name\":\"e10308\",\"id\":2},{\"name\":\"e10394\",\"id\":3},{\"name\":\"e10652\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano - Cristalina\",\"cod\":3,\"lat\":-16.7712,\"lon\":-47.6186,\"interfaces\":[{\"name\":\"e10158\",\"id\":1},{\"name\":\"e10330\",\"id\":2},{\"name\":\"e10416\",\"id\":3},{\"name\":\"e10674\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG - Valparaiso\",\"cod\":4,\"lat\":-16.1,\"lon\":-47.9749,\"interfaces\":[{\"name\":\"e10156\",\"id\":1},{\"name\":\"e10328\",\"id\":2},{\"name\":\"e10414\",\"id\":3},{\"name\":\"e10672\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano - Campos Belos\",\"cod\":5,\"lat\":-13.0309,\"lon\":-46.7754,\"interfaces\":[{\"name\":\"e10162\",\"id\":1},{\"name\":\"e10334\",\"id\":2},{\"name\":\"e10420\",\"id\":3},{\"name\":\"e10678\",\"id\":4}]},{\"caption\":\"CNEN\",\"id\":\"CNEN - Abadia de Goias\",\"cod\":6,\"lat\":-16.7513,\"lon\":-49.4278,\"interfaces\":[{\"name\":\"e10160\",\"id\":1},{\"name\":\"e10332\",\"id\":2},{\"name\":\"e10418\",\"id\":3},{\"name\":\"e10676\",\"id\":4}]},{\"caption\":\"UFJ\",\"id\":\"UFJ - Riachuelo\",\"cod\":7,\"lat\":-17.8829,\"lon\":-51.7266,\"interfaces\":[{\"name\":\"e10166\",\"id\":1},{\"name\":\"e10338\",\"id\":2},{\"name\":\"e10424\",\"id\":3},{\"name\":\"e10682\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano – Trindade\",\"cod\":8,\"lat\":-16.6774,\"lon\":-49.4854,\"interfaces\":[{\"name\":\"e10138\",\"id\":1},{\"name\":\"e10310\",\"id\":2},{\"name\":\"e10396\",\"id\":3},{\"name\":\"e10654\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano - Hidrolândia\",\"cod\":9,\"lat\":-17.0155,\"lon\":-49.2001,\"interfaces\":[{\"name\":\"e10170\",\"id\":1},{\"name\":\"e10342\",\"id\":2},{\"name\":\"e10428\",\"id\":3},{\"name\":\"e10686\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG - Reitoria\",\"cod\":10,\"lat\":-16.7029,\"lon\":-49.2799,\"interfaces\":[{\"name\":\"e10168\",\"id\":1},{\"name\":\"e10340\",\"id\":2},{\"name\":\"e10426\",\"id\":3},{\"name\":\"e10684\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano – Ceres\",\"cod\":11,\"lat\":-15.306,\"lon\":-49.601,\"interfaces\":[{\"name\":\"e10132\",\"id\":1},{\"name\":\"e10304\",\"id\":2},{\"name\":\"e10390\",\"id\":3},{\"name\":\"e10648\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG – Aguas Lindas\",\"cod\":12,\"lat\":-15.7523,\"lon\":-48.267,\"interfaces\":[{\"name\":\"e10134\",\"id\":1},{\"name\":\"e10306\",\"id\":2},{\"name\":\"e10392\",\"id\":3},{\"name\":\"e10650\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano – Urutai\",\"cod\":13,\"lat\":-17.4665,\"lon\":-48.2032,\"interfaces\":[{\"name\":\"e10144\",\"id\":1},{\"name\":\"e10316\",\"id\":2},{\"name\":\"e10402\",\"id\":3},{\"name\":\"e10660\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano Catalão\",\"cod\":14,\"lat\":-18.1723,\"lon\":-47.9531,\"interfaces\":[{\"name\":\"e10164\",\"id\":1},{\"name\":\"e10336\",\"id\":2},{\"name\":\"e10422\",\"id\":3},{\"name\":\"e10680\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG – Formosa\",\"cod\":15,\"lat\":-15.5633,\"lon\":-47.3269,\"interfaces\":[{\"name\":\"e10146\",\"id\":1},{\"name\":\"e10318\",\"id\":2},{\"name\":\"e10404\",\"id\":3},{\"name\":\"e10662\",\"id\":4}]},{\"caption\":\"UFG\",\"id\":\"UFG – Aparecida\",\"cod\":16,\"lat\":-16.8165,\"lon\":-49.2759,\"interfaces\":[{\"name\":\"e10140\",\"id\":1},{\"name\":\"e10312\",\"id\":2},{\"name\":\"e10398\",\"id\":3},{\"name\":\"e10656\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano – Ipora\",\"cod\":17,\"lat\":-16.4341,\"lon\":-51.128,\"interfaces\":[{\"name\":\"e10142\",\"id\":1},{\"name\":\"e10314\",\"id\":2},{\"name\":\"e10400\",\"id\":3},{\"name\":\"e10658\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano - Posse\",\"cod\":18,\"lat\":-14.1089,\"lon\":-46.3277,\"interfaces\":[{\"name\":\"e10172\",\"id\":1},{\"name\":\"e10344\",\"id\":2},{\"name\":\"e10430\",\"id\":3},{\"name\":\"e10688\",\"id\":4}]},{\"caption\":\"UFC\",\"id\":\"UFCat - LMPPM\",\"cod\":19,\"lat\":-18.1345,\"lon\":-47.9076,\"interfaces\":[{\"name\":\"e10176\",\"id\":1},{\"name\":\"e10348\",\"id\":2},{\"name\":\"e10434\",\"id\":3},{\"name\":\"e10692\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG - Goiânia Oeste (RFP)\",\"cod\":20,\"lat\":-16.7124,\"lon\":-49.3433,\"interfaces\":[{\"name\":\"e10178\",\"id\":1},{\"name\":\"e10350\",\"id\":2},{\"name\":\"e10436\",\"id\":3},{\"name\":\"e10694\",\"id\":4}]},{\"caption\":\"INMETRO\",\"id\":\"INMETRO - SURGO\",\"cod\":21,\"lat\":-16.696,\"lon\":-49.2595,\"interfaces\":[{\"name\":\"e10105\",\"id\":1},{\"name\":\"e10277\",\"id\":2},{\"name\":\"e10363\",\"id\":3},{\"name\":\"e10621\",\"id\":4}]},{\"caption\":\"UFC\",\"id\":\"UFCat - Sede\",\"cod\":22,\"lat\":-18.1564,\"lon\":-47.9295,\"interfaces\":[{\"name\":\"e10152\",\"id\":1},{\"name\":\"e10324\",\"id\":2},{\"name\":\"e10410\",\"id\":3},{\"name\":\"e10668\",\"id\":4}]},{\"caption\":\"UFC\",\"id\":\"UFCat - Campus 2\",\"cod\":23,\"lat\":-18.1564,\"lon\":-47.9224,\"interfaces\":[{\"name\":\"e10174\",\"id\":1},{\"name\":\"e10346\",\"id\":2},{\"name\":\"e10432\",\"id\":3},{\"name\":\"e10690\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG – Jatai - Riachuelo\",\"cod\":24,\"lat\":-17.8807,\"lon\":-51.7251,\"interfaces\":[{\"name\":\"e10148\",\"id\":1},{\"name\":\"e10320\",\"id\":2},{\"name\":\"e10406\",\"id\":3},{\"name\":\"e10664\",\"id\":4}]},{\"caption\":\"UFJ\",\"id\":\"UFJ - Jatobá\",\"cod\":25,\"lat\":-17.888,\"lon\":-51.7297,\"interfaces\":[{\"name\":\"e10150\",\"id\":1},{\"name\":\"e10322\",\"id\":2},{\"name\":\"e10408\",\"id\":3},{\"name\":\"e10666\",\"id\":4}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_SUREG-GO\",\"cod\":26,\"lat\":-16.6951,\"lon\":-49.2597,\"interfaces\":[{\"name\":\"e10107\",\"id\":1},{\"name\":\"e10279\",\"id\":2},{\"name\":\"e10365\",\"id\":3},{\"name\":\"e10623\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG - Cidade de Goiás\",\"cod\":27,\"lat\":-15.9323,\"lon\":-50.1488,\"interfaces\":[{\"name\":\"e10180\",\"id\":1},{\"name\":\"e10352\",\"id\":2},{\"name\":\"e10438\",\"id\":3},{\"name\":\"e10696\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HC-UFG\",\"cod\":28,\"lat\":-16.6739,\"lon\":-49.2454,\"interfaces\":[{\"name\":\"e10109\",\"id\":1},{\"name\":\"e10281\",\"id\":2},{\"name\":\"e10367\",\"id\":3},{\"name\":\"e10625\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG – Uruaçu\",\"cod\":29,\"lat\":-14.5099,\"lon\":-49.1437,\"interfaces\":[{\"name\":\"e10130\",\"id\":1},{\"name\":\"e10302\",\"id\":2},{\"name\":\"e10388\",\"id\":3},{\"name\":\"e10646\",\"id\":4}]},{\"caption\":\"UFG\",\"id\":\"UFG – Goias\",\"cod\":30,\"lat\":-15.9412,\"lon\":-50.1349,\"interfaces\":[{\"name\":\"e10128\",\"id\":1},{\"name\":\"e10300\",\"id\":2},{\"name\":\"e10386\",\"id\":3},{\"name\":\"e10644\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG – Itumbiara\",\"cod\":31,\"lat\":-18.4344,\"lon\":-49.2125,\"interfaces\":[{\"name\":\"e10118\",\"id\":1},{\"name\":\"e10290\",\"id\":2},{\"name\":\"e10376\",\"id\":3},{\"name\":\"e10634\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG – Luziania\",\"cod\":32,\"lat\":-16.2441,\"lon\":-47.9614,\"interfaces\":[{\"name\":\"e10116\",\"id\":1},{\"name\":\"e10288\",\"id\":2},{\"name\":\"e10374\",\"id\":3},{\"name\":\"e10632\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG – Anapolis\",\"cod\":33,\"lat\":-16.3742,\"lon\":-48.9808,\"interfaces\":[{\"name\":\"e10114\",\"id\":1},{\"name\":\"e10286\",\"id\":2},{\"name\":\"e10372\",\"id\":3},{\"name\":\"e10630\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano – Rio Verde\",\"cod\":34,\"lat\":-17.7964,\"lon\":-50.9314,\"interfaces\":[{\"name\":\"e10126\",\"id\":1},{\"name\":\"e10298\",\"id\":2},{\"name\":\"e10384\",\"id\":3},{\"name\":\"e10642\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFGoiano – Morrinhos\",\"cod\":35,\"lat\":-17.739,\"lon\":-49.1069,\"interfaces\":[{\"name\":\"e10124\",\"id\":1},{\"name\":\"e10296\",\"id\":2},{\"name\":\"e10382\",\"id\":3},{\"name\":\"e10640\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG – Inhumas\",\"cod\":36,\"lat\":-16.3768,\"lon\":-49.4863,\"interfaces\":[{\"name\":\"e10122\",\"id\":1},{\"name\":\"e10294\",\"id\":2},{\"name\":\"e10380\",\"id\":3},{\"name\":\"e10638\",\"id\":4}]},{\"caption\":\"IFG\",\"id\":\"IFG – Aparecida\",\"cod\":37,\"lat\":-16.817,\"lon\":-49.2757,\"interfaces\":[{\"name\":\"e10120\",\"id\":1},{\"name\":\"e10292\",\"id\":2},{\"name\":\"e10378\",\"id\":3},{\"name\":\"e10636\",\"id\":4}]}]},\"ma\":{\"clientes\":[{\"caption\":\"DSEI\",\"id\":\"DSEI Distrito Sanitário Especial Indígena Maranhão\",\"cod\":1,\"lat\":-2.54579,\"lon\":-44.2672,\"interfaces\":[{\"name\":\"e18400\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Coelho Neto\",\"cod\":2,\"lat\":-4.2694,\"lon\":-43.0265,\"interfaces\":[{\"name\":\"e18402\",\"id\":1}]},{\"caption\":\"IEMA\",\"id\":\"IEMA Unidade Plena Itaqui-Bacanga\",\"cod\":3,\"lat\":-2.56715,\"lon\":-44.3184,\"interfaces\":[{\"name\":\"e18393\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Pinheiro\",\"cod\":4,\"lat\":-2.53427,\"lon\":-45.122,\"interfaces\":[{\"name\":\"e18349\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Barra do Corda\",\"cod\":5,\"lat\":-5.48442,\"lon\":-45.274,\"interfaces\":[{\"name\":\"e18401\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Itaqui-Bacanga\",\"cod\":6,\"lat\":-2.56719,\"lon\":-44.3189,\"interfaces\":[{\"name\":\"e18374\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA Campus São Luis Maracanã\",\"cod\":7,\"lat\":-2.6091,\"lon\":-44.2679,\"interfaces\":[{\"name\":\"e18398\",\"id\":1}]},{\"caption\":\"IEMA\",\"id\":\"IEMA Centro Histórico\",\"cod\":8,\"lat\":-2.52916,\"lon\":-44.3066,\"interfaces\":[{\"name\":\"e18382\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Campus São Luis - Cidade Universitária\",\"cod\":9,\"lat\":-2.55549,\"lon\":-44.3085,\"interfaces\":[{\"name\":\"e18387\",\"id\":1},{\"name\":\"e18386\",\"id\":2}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Porto Franco\",\"cod\":10,\"lat\":-6.34019,\"lon\":-47.4025,\"interfaces\":[{\"name\":\"e18370\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Balsas\",\"cod\":11,\"lat\":-7.52974,\"lon\":-46.0402,\"interfaces\":[{\"name\":\"e18371\",\"id\":1}]},{\"caption\":\"CLA\",\"id\":\"Escritório do Centro de Lançamento de Alcântara - CLA\",\"cod\":12,\"lat\":-2.57954,\"lon\":-44.2406,\"interfaces\":[{\"name\":\"e18368\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Bacabal\",\"cod\":13,\"lat\":-4.24106,\"lon\":-44.8161,\"interfaces\":[{\"name\":\"e18369\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Imperatriz\",\"cod\":14,\"lat\":-5.49767,\"lon\":-47.4865,\"interfaces\":[{\"name\":\"e18356\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Codó\",\"cod\":15,\"lat\":-4.46588,\"lon\":-43.8828,\"interfaces\":[{\"name\":\"e18355\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Grajaú\",\"cod\":16,\"lat\":-5.7957,\"lon\":-46.1079,\"interfaces\":[{\"name\":\"e18372\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Reitoria\",\"cod\":17,\"lat\":-2.49929,\"lon\":-44.286,\"interfaces\":[{\"name\":\"e18373\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Alcantara\",\"cod\":18,\"lat\":-2.40577,\"lon\":-44.4144,\"interfaces\":[{\"name\":\"e18352\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Açailandia\",\"cod\":19,\"lat\":-4.95722,\"lon\":-47.4899,\"interfaces\":[{\"name\":\"e18351\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Caxias\",\"cod\":20,\"lat\":-4.87051,\"lon\":-43.3527,\"interfaces\":[{\"name\":\"e18354\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Buriticupu\",\"cod\":21,\"lat\":-4.31825,\"lon\":-46.4606,\"interfaces\":[{\"name\":\"e18353\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Imperatriz\",\"cod\":22,\"lat\":-5.5282,\"lon\":-47.4879,\"interfaces\":[{\"name\":\"e18348\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Grajaú\",\"cod\":23,\"lat\":-5.8213,\"lon\":-46.1571,\"interfaces\":[{\"name\":\"e18347\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - São Bernardo\",\"cod\":24,\"lat\":-3.37394,\"lon\":-42.4205,\"interfaces\":[{\"name\":\"e18350\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Bacabal\",\"cod\":25,\"lat\":-4.2329,\"lon\":-44.8257,\"interfaces\":[{\"name\":\"e18344\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Complexo Fábrica Santa Amélia\",\"cod\":26,\"lat\":-2.53295,\"lon\":-44.2995,\"interfaces\":[{\"name\":\"e18395\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Timon\",\"cod\":27,\"lat\":-5.11174,\"lon\":-42.8538,\"interfaces\":[{\"name\":\"e18385\",\"id\":1}]},{\"caption\":\"UEMA\",\"id\":\"UEMA - Arquitetura\",\"cod\":28,\"lat\":-2.53212,\"lon\":-44.3057,\"interfaces\":[{\"name\":\"e18384\",\"id\":1}]},{\"caption\":\"IEMA\",\"id\":\"IEMA - Marista\",\"cod\":29,\"lat\":-2.53089,\"lon\":-44.2955,\"interfaces\":[{\"name\":\"e18381\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA Diretoria de Educação a Distância\",\"cod\":30,\"lat\":-2.54103,\"lon\":-44.2806,\"interfaces\":[{\"name\":\"e18377\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Residência Universitária da UFMA\",\"cod\":31,\"lat\":-2.5295,\"lon\":-44.3005,\"interfaces\":[{\"name\":\"e18394\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Chapadinha\",\"cod\":32,\"lat\":-3.74393,\"lon\":-43.3578,\"interfaces\":[{\"name\":\"e18345\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Núcleo de Cultura Linguística\",\"cod\":33,\"lat\":-2.52477,\"lon\":-44.2963,\"interfaces\":[{\"name\":\"e18405\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Colinas\",\"cod\":34,\"lat\":-6.06735,\"lon\":-44.2554,\"interfaces\":[{\"name\":\"e18409\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Centro Histórico\",\"cod\":35,\"lat\":-2.53196,\"lon\":-44.3037,\"interfaces\":[{\"name\":\"e18379\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Faculdade de Direito\",\"cod\":36,\"lat\":-2.52873,\"lon\":-44.3024,\"interfaces\":[{\"name\":\"e18396\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Departamento de Saúde Pública\",\"cod\":37,\"lat\":-2.52478,\"lon\":-44.2954,\"interfaces\":[{\"name\":\"e18404\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Departamento de Patologia\",\"cod\":38,\"lat\":-2.54257,\"lon\":-44.2996,\"interfaces\":[{\"name\":\"e18390\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Palácio Cristo Rei\",\"cod\":39,\"lat\":-2.5246,\"lon\":-44.2959,\"interfaces\":[{\"name\":\"e18406\",\"id\":1}]},{\"caption\":\"CPACP\",\"id\":\"Embrapa_CPACP\",\"cod\":40,\"lat\":-2.50614,\"lon\":-44.2276,\"interfaces\":[{\"name\":\"e18378\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - São João dos Patos\",\"cod\":41,\"lat\":-6.48733,\"lon\":-43.6955,\"interfaces\":[{\"name\":\"e18408\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - ILA - Faculdade de Medicina\",\"cod\":42,\"lat\":-2.52341,\"lon\":-44.2956,\"interfaces\":[{\"name\":\"e18407\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"Departamento de Assuntos Culturais - UFMA DAC\",\"cod\":43,\"lat\":-2.52958,\"lon\":-44.3004,\"interfaces\":[{\"name\":\"e18389\",\"id\":1}]},{\"caption\":\"IEMA\",\"id\":\"IEMA Reitoria\",\"cod\":44,\"lat\":-2.51702,\"lon\":-44.2974,\"interfaces\":[{\"name\":\"e18392\",\"id\":1}]},{\"caption\":\"INPE\",\"id\":\"Instituto Nacional de Pesquisas Espaciais - INPE\",\"cod\":45,\"lat\":-2.59367,\"lon\":-44.2129,\"interfaces\":[{\"name\":\"e18391\",\"id\":1}]},{\"caption\":\"UEMA\",\"id\":\"Universidade Estadual do Maranhão - UEMA\",\"cod\":46,\"lat\":-2.57615,\"lon\":-44.2098,\"interfaces\":[{\"name\":\"e18367\",\"id\":1}]},{\"caption\":\"HOSPITAL\",\"id\":\"HOSPITAL SARAH\",\"cod\":47,\"lat\":-2.53334,\"lon\":-44.2742,\"interfaces\":[{\"name\":\"e18366\",\"id\":1}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Universidade Aberta do Sistema Único de Saúde\",\"cod\":48,\"lat\":-2.52626,\"lon\":-44.2958,\"interfaces\":[{\"name\":\"e18403\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUU-UFMA\",\"cod\":49,\"lat\":-2.52439,\"lon\":-44.2944,\"interfaces\":[{\"name\":\"e18362\",\"id\":1}]},{\"caption\":\"UEMA\",\"id\":\"UEMA - História\",\"cod\":50,\"lat\":-2.53061,\"lon\":-44.3055,\"interfaces\":[{\"name\":\"e18383\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Monte Castelo\",\"cod\":51,\"lat\":-2.53607,\"lon\":-44.2782,\"interfaces\":[{\"name\":\"e18365\",\"id\":1},{\"name\":\"e18364\",\"id\":2}]},{\"caption\":\"UFMA\",\"id\":\"UFMA - Codó\",\"cod\":52,\"lat\":-4.44273,\"lon\":-43.8902,\"interfaces\":[{\"name\":\"e18346\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Santa Inês\",\"cod\":53,\"lat\":-3.66196,\"lon\":-45.3872,\"interfaces\":[{\"name\":\"e18358\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Pinheiro\",\"cod\":54,\"lat\":-2.52638,\"lon\":-45.0846,\"interfaces\":[{\"name\":\"e18357\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Barreirinhas\",\"cod\":55,\"lat\":-2.78946,\"lon\":-42.8493,\"interfaces\":[{\"name\":\"e18360\",\"id\":1}]},{\"caption\":\"IFMA\",\"id\":\"IFMA - Zé Doca\",\"cod\":56,\"lat\":-3.28037,\"lon\":-45.6524,\"interfaces\":[{\"name\":\"e18359\",\"id\":1}]}]},\"mg\":{\"clientes\":[{\"caption\":\"CNEN\",\"id\":\"CNEN CDTN - Centro de Desenvolvimento da Tecnologia Nuclear\",\"cod\":1,\"lat\":-19.8768,\"lon\":-43.9713,\"interfaces\":[{\"name\":\"e254513\",\"id\":1},{\"name\":\"e255127\",\"id\":2},{\"name\":\"e255739\",\"id\":3},{\"name\":\"e256658\",\"id\":4}]},{\"caption\":\"ufla\",\"id\":\"ufla\",\"cod\":2,\"lat\":-21.228,\"lon\":-44.9768,\"interfaces\":[{\"name\":\"e254555\",\"id\":1},{\"name\":\"e255169\",\"id\":2},{\"name\":\"e255781\",\"id\":3},{\"name\":\"e256700\",\"id\":4}]},{\"caption\":\"UFVJM\",\"id\":\"UFVJM Fazenda Experimental Rio Manso\",\"cod\":3,\"lat\":-18.0794,\"lon\":-43.4562,\"interfaces\":[{\"name\":\"e254553\",\"id\":1},{\"name\":\"e255167\",\"id\":2},{\"name\":\"e255779\",\"id\":3},{\"name\":\"e256698\",\"id\":4}]},{\"caption\":\"UFVJM\",\"id\":\"UFVJM Fazenda Experimental Moura\",\"cod\":4,\"lat\":-18.759,\"lon\":-44.4347,\"interfaces\":[{\"name\":\"e254547\",\"id\":1},{\"name\":\"e255161\",\"id\":2},{\"name\":\"e255773\",\"id\":3},{\"name\":\"e256692\",\"id\":4}]},{\"caption\":\"UFSJ\",\"id\":\"UFSJ campus Dom Bosco\",\"cod\":5,\"lat\":-21.1234,\"lon\":-44.2512,\"interfaces\":[{\"name\":\"e254545\",\"id\":1},{\"name\":\"e255159\",\"id\":2},{\"name\":\"e255771\",\"id\":3},{\"name\":\"e256690\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG campus Diamantina\",\"cod\":6,\"lat\":-18.2429,\"lon\":-43.5996,\"interfaces\":[{\"name\":\"e254551\",\"id\":1},{\"name\":\"e255165\",\"id\":2},{\"name\":\"e255777\",\"id\":3},{\"name\":\"e256696\",\"id\":4}]},{\"caption\":\"IFSULDEMINAS\",\"id\":\"IFSULDEMINAS campus Carmo de Minas\",\"cod\":7,\"lat\":-22.1277,\"lon\":-45.1375,\"interfaces\":[{\"name\":\"e254549\",\"id\":1},{\"name\":\"e255163\",\"id\":2},{\"name\":\"e255775\",\"id\":3},{\"name\":\"e256694\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Santa Luzia\",\"cod\":8,\"lat\":-19.7938,\"lon\":-43.9142,\"interfaces\":[{\"name\":\"e254539\",\"id\":1},{\"name\":\"e255153\",\"id\":2},{\"name\":\"e255765\",\"id\":3},{\"name\":\"e256684\",\"id\":4}]},{\"caption\":\"UFVJM\",\"id\":\"UFVJM campus Janaúba\",\"cod\":9,\"lat\":-15.7938,\"lon\":-43.3199,\"interfaces\":[{\"name\":\"e254537\",\"id\":1},{\"name\":\"e255151\",\"id\":2},{\"name\":\"e255763\",\"id\":3},{\"name\":\"e256682\",\"id\":4}]},{\"caption\":\"UFSJ\",\"id\":\"UFSJ campus Tancredo Neves\",\"cod\":10,\"lat\":-21.1046,\"lon\":-44.2498,\"interfaces\":[{\"name\":\"e254543\",\"id\":1},{\"name\":\"e255157\",\"id\":2},{\"name\":\"e255769\",\"id\":3},{\"name\":\"e256688\",\"id\":4}]},{\"caption\":\"IFSULDEMINAS\",\"id\":\"IFSULDEMINAS campus Três Corações\",\"cod\":11,\"lat\":-21.6921,\"lon\":-45.2596,\"interfaces\":[{\"name\":\"e254541\",\"id\":1},{\"name\":\"e255155\",\"id\":2},{\"name\":\"e255767\",\"id\":3},{\"name\":\"e256686\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Arcos\",\"cod\":12,\"lat\":-20.2972,\"lon\":-45.5437,\"interfaces\":[{\"name\":\"e254731\",\"id\":1},{\"name\":\"e255345\",\"id\":2},{\"name\":\"e255957\",\"id\":3},{\"name\":\"e256876\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG Reitoria - Sede\",\"cod\":13,\"lat\":-16.717,\"lon\":-43.8679,\"interfaces\":[{\"name\":\"e254733\",\"id\":1},{\"name\":\"e255347\",\"id\":2},{\"name\":\"e255959\",\"id\":3},{\"name\":\"e256878\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG Campus Avançado de Porteirinha\",\"cod\":14,\"lat\":-15.7399,\"lon\":-43.022,\"interfaces\":[{\"name\":\"e254727\",\"id\":1},{\"name\":\"e255341\",\"id\":2},{\"name\":\"e255953\",\"id\":3},{\"name\":\"e256872\",\"id\":4}]},{\"caption\":\"UNIFEI\",\"id\":\"UNIFEI\",\"cod\":15,\"lat\":-22.4128,\"lon\":-45.4498,\"interfaces\":[{\"name\":\"e254729\",\"id\":1},{\"name\":\"e255343\",\"id\":2},{\"name\":\"e255955\",\"id\":3},{\"name\":\"e256874\",\"id\":4}]},{\"caption\":\"IFTM\",\"id\":\"IFTM campus Ituiutaba\",\"cod\":16,\"lat\":-19.0146,\"lon\":-49.4823,\"interfaces\":[{\"name\":\"e254723\",\"id\":1},{\"name\":\"e255337\",\"id\":2},{\"name\":\"e255949\",\"id\":3},{\"name\":\"e256868\",\"id\":4}]},{\"caption\":\"UFV\",\"id\":\"UFV Central de Experimentação, Pesquisa e Extensão do Triângulo Mineiro\",\"cod\":17,\"lat\":-18.7107,\"lon\":-49.5639,\"interfaces\":[{\"name\":\"e254725\",\"id\":1},{\"name\":\"e255339\",\"id\":2},{\"name\":\"e255951\",\"id\":3},{\"name\":\"e256870\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG campus Salinas\",\"cod\":18,\"lat\":-16.1578,\"lon\":-42.3113,\"interfaces\":[{\"name\":\"e254719\",\"id\":1},{\"name\":\"e255333\",\"id\":2},{\"name\":\"e255945\",\"id\":3},{\"name\":\"e256864\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Sabará\",\"cod\":19,\"lat\":-19.8701,\"lon\":-43.8384,\"interfaces\":[{\"name\":\"e254721\",\"id\":1},{\"name\":\"e255335\",\"id\":2},{\"name\":\"e255947\",\"id\":3},{\"name\":\"e256866\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG campus Barbacena\",\"cod\":20,\"lat\":-21.2273,\"lon\":-43.7682,\"interfaces\":[{\"name\":\"e254713\",\"id\":1},{\"name\":\"e255327\",\"id\":2},{\"name\":\"e255939\",\"id\":3},{\"name\":\"e256858\",\"id\":4}]},{\"caption\":\"IFMA\",\"id\":\"IFMA São Raimundo das Mangabeiras\",\"cod\":21,\"lat\":-7.03923,\"lon\":-45.5177,\"interfaces\":[{\"name\":\"e254715\",\"id\":1},{\"name\":\"e254717\",\"id\":2},{\"name\":\"e255331\",\"id\":3},{\"name\":\"e255329\",\"id\":4},{\"name\":\"e255943\",\"id\":5},{\"name\":\"e255941\",\"id\":6},{\"name\":\"e256860\",\"id\":7},{\"name\":\"e256862\",\"id\":8}]},{\"caption\":\"UFMG\",\"id\":\"UFMG Fazenda Experimental Professor Hélio Barbosa\",\"cod\":22,\"lat\":-20.0737,\"lon\":-44.3465,\"interfaces\":[{\"name\":\"e254753\",\"id\":1},{\"name\":\"e255367\",\"id\":2},{\"name\":\"e255979\",\"id\":3},{\"name\":\"e256898\",\"id\":4}]},{\"caption\":\"IFTM\",\"id\":\"IFTM campus avançado Uberaba Parque Tecnológico I\",\"cod\":23,\"lat\":-19.7187,\"lon\":-47.9578,\"interfaces\":[{\"name\":\"e254751\",\"id\":1},{\"name\":\"e255365\",\"id\":2},{\"name\":\"e255977\",\"id\":3},{\"name\":\"e256896\",\"id\":4}]},{\"caption\":\"IFSULDEMINAS\",\"id\":\"IFSULDEMINAS Centro de Excelência em Cafeicultura (CEC)\",\"cod\":24,\"lat\":-22.2918,\"lon\":-45.9208,\"interfaces\":[{\"name\":\"e254737\",\"id\":1},{\"name\":\"e255351\",\"id\":2},{\"name\":\"e255963\",\"id\":3},{\"name\":\"e256882\",\"id\":4}]},{\"caption\":\"UFMG\",\"id\":\"UFMG campus Regional Montes Claros \",\"cod\":25,\"lat\":-16.6816,\"lon\":-43.8408,\"interfaces\":[{\"name\":\"e254735\",\"id\":1},{\"name\":\"e255349\",\"id\":2},{\"name\":\"e255961\",\"id\":3},{\"name\":\"e256880\",\"id\":4}]},{\"caption\":\"IFTM\",\"id\":\"IFTM campus Patrocínio\",\"cod\":26,\"lat\":-18.9558,\"lon\":-46.9832,\"interfaces\":[{\"name\":\"e254741\",\"id\":1},{\"name\":\"e255355\",\"id\":2},{\"name\":\"e255967\",\"id\":3},{\"name\":\"e256886\",\"id\":4}]},{\"caption\":\"UFSJ\",\"id\":\"UFSJ campus Sete Lagoas\",\"cod\":27,\"lat\":-19.474,\"lon\":-44.1936,\"interfaces\":[{\"name\":\"e254739\",\"id\":1},{\"name\":\"e255353\",\"id\":2},{\"name\":\"e255965\",\"id\":3},{\"name\":\"e256884\",\"id\":4}]},{\"caption\":\"UFOP\",\"id\":\"UFOP campus João Monlevade\",\"cod\":28,\"lat\":-19.8355,\"lon\":-43.1676,\"interfaces\":[{\"name\":\"e254745\",\"id\":1},{\"name\":\"e255359\",\"id\":2},{\"name\":\"e255971\",\"id\":3},{\"name\":\"e256890\",\"id\":4}]},{\"caption\":\"UFU\",\"id\":\"UFU campus Patos de Minas\",\"cod\":29,\"lat\":-18.591,\"lon\":-46.5171,\"interfaces\":[{\"name\":\"e254743\",\"id\":1},{\"name\":\"e255357\",\"id\":2},{\"name\":\"e255969\",\"id\":3},{\"name\":\"e256888\",\"id\":4}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-MG unidade Araxá\",\"cod\":30,\"lat\":-19.5783,\"lon\":-46.9533,\"interfaces\":[{\"name\":\"e254749\",\"id\":1},{\"name\":\"e255363\",\"id\":2},{\"name\":\"e255975\",\"id\":3},{\"name\":\"e256894\",\"id\":4}]},{\"caption\":\"IFTM\",\"id\":\"IFTM campus avançado Uberaba Parque Tecnológico II\",\"cod\":31,\"lat\":-19.7703,\"lon\":-47.9484,\"interfaces\":[{\"name\":\"e254747\",\"id\":1},{\"name\":\"e255361\",\"id\":2},{\"name\":\"e255973\",\"id\":3},{\"name\":\"e256892\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG Reitoria\",\"cod\":32,\"lat\":-19.976,\"lon\":-43.9706,\"interfaces\":[{\"name\":\"e254517\",\"id\":1},{\"name\":\"e255131\",\"id\":2},{\"name\":\"e255743\",\"id\":3},{\"name\":\"e256662\",\"id\":4}]},{\"caption\":\"UEMG\",\"id\":\"UEMG Escola Guignard campus BH\",\"cod\":33,\"lat\":-19.9556,\"lon\":-43.9205,\"interfaces\":[{\"name\":\"e254519\",\"id\":1},{\"name\":\"e255133\",\"id\":2},{\"name\":\"e255745\",\"id\":3},{\"name\":\"e256664\",\"id\":4}]},{\"caption\":\"UEMG\",\"id\":\"UEMG Escola de Design campus BH\",\"cod\":34,\"lat\":-19.8569,\"lon\":-43.961,\"interfaces\":[{\"name\":\"e254521\",\"id\":1},{\"name\":\"e255135\",\"id\":2},{\"name\":\"e255747\",\"id\":3},{\"name\":\"e256666\",\"id\":4}]},{\"caption\":\"UEMG\",\"id\":\"UEMG Escola de Música campus BH\",\"cod\":35,\"lat\":-19.9162,\"lon\":-43.9759,\"interfaces\":[{\"name\":\"e254523\",\"id\":1},{\"name\":\"e255137\",\"id\":2},{\"name\":\"e255749\",\"id\":3},{\"name\":\"e256668\",\"id\":4}]},{\"caption\":\"UEMG\",\"id\":\"UEMG Faculdade de Educação campus BH\",\"cod\":36,\"lat\":-19.9291,\"lon\":-43.9316,\"interfaces\":[{\"name\":\"e254525\",\"id\":1},{\"name\":\"e255139\",\"id\":2},{\"name\":\"e255751\",\"id\":3},{\"name\":\"e256670\",\"id\":4}]},{\"caption\":\"UEMG\",\"id\":\"UEMG Faculdade de Políticas Públicas campus BH\",\"cod\":37,\"lat\":-19.9444,\"lon\":-43.935,\"interfaces\":[{\"name\":\"e254527\",\"id\":1},{\"name\":\"e255141\",\"id\":2},{\"name\":\"e255753\",\"id\":3},{\"name\":\"e256672\",\"id\":4}]},{\"caption\":\"UFMG\",\"id\":\"UFMG campus Pampulha\",\"cod\":38,\"lat\":-19.8692,\"lon\":-43.9656,\"interfaces\":[{\"name\":\"e254529\",\"id\":1},{\"name\":\"e255143\",\"id\":2},{\"name\":\"e255755\",\"id\":3},{\"name\":\"e256674\",\"id\":4}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-MG unidade BH campus I\",\"cod\":39,\"lat\":-19.9302,\"lon\":-43.9761,\"interfaces\":[{\"name\":\"e254531\",\"id\":1},{\"name\":\"e255145\",\"id\":2},{\"name\":\"e255757\",\"id\":3},{\"name\":\"e256676\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG campus Januária\",\"cod\":40,\"lat\":-15.4471,\"lon\":-44.3664,\"interfaces\":[{\"name\":\"e254533\",\"id\":1},{\"name\":\"e255147\",\"id\":2},{\"name\":\"e255759\",\"id\":3},{\"name\":\"e256678\",\"id\":4}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-MG unidade Curvelo\",\"cod\":41,\"lat\":-18.7441,\"lon\":-44.4452,\"interfaces\":[{\"name\":\"e254535\",\"id\":1},{\"name\":\"e255149\",\"id\":2},{\"name\":\"e255761\",\"id\":3},{\"name\":\"e256680\",\"id\":4}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-MG unidade Nepomuceno\",\"cod\":42,\"lat\":-21.2385,\"lon\":-45.2339,\"interfaces\":[{\"name\":\"e254763\",\"id\":1},{\"name\":\"e255377\",\"id\":2},{\"name\":\"e255989\",\"id\":3},{\"name\":\"e256908\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSudesteMG-SãoJoãoDelRei - CONEXAO TEMPORARIA SEM TUNEL\",\"cod\":43,\"lat\":-21.1118,\"lon\":-44.2466,\"interfaces\":[{\"name\":\"e254765\",\"id\":1},{\"name\":\"e255379\",\"id\":2},{\"name\":\"e255991\",\"id\":3},{\"name\":\"e256910\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Ribeirão das Neves\",\"cod\":44,\"lat\":-19.7592,\"lon\":-44.0895,\"interfaces\":[{\"name\":\"e254767\",\"id\":1},{\"name\":\"e255381\",\"id\":2},{\"name\":\"e255993\",\"id\":3},{\"name\":\"e256912\",\"id\":4}]},{\"caption\":\"UFVJM\",\"id\":\"UFVJM campus I\",\"cod\":45,\"lat\":-18.2421,\"lon\":-43.6008,\"interfaces\":[{\"name\":\"e254769\",\"id\":1},{\"name\":\"e255383\",\"id\":2},{\"name\":\"e255995\",\"id\":3},{\"name\":\"e256914\",\"id\":4}]},{\"caption\":\"UFU\",\"id\":\"UFU campus Educação Física\",\"cod\":46,\"lat\":-18.9086,\"lon\":-48.2634,\"interfaces\":[{\"name\":\"e254755\",\"id\":1},{\"name\":\"e255369\",\"id\":2},{\"name\":\"e255981\",\"id\":3},{\"name\":\"e256900\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus avançado Piumhi\",\"cod\":47,\"lat\":-20.4585,\"lon\":-45.9569,\"interfaces\":[{\"name\":\"e254757\",\"id\":1},{\"name\":\"e255371\",\"id\":2},{\"name\":\"e255983\",\"id\":3},{\"name\":\"e256902\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HC-UFU\",\"cod\":48,\"lat\":-18.8826,\"lon\":-48.2596,\"interfaces\":[{\"name\":\"e254758\",\"id\":1},{\"name\":\"e255372\",\"id\":2},{\"name\":\"e255984\",\"id\":3},{\"name\":\"e256903\",\"id\":4}]},{\"caption\":\"IFTM\",\"id\":\"IFTM campus Uberlândia Centro\",\"cod\":49,\"lat\":-18.9328,\"lon\":-48.2801,\"interfaces\":[{\"name\":\"e254760\",\"id\":1},{\"name\":\"e255374\",\"id\":2},{\"name\":\"e255986\",\"id\":3},{\"name\":\"e256905\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG Reitoria\",\"cod\":50,\"lat\":-21.7839,\"lon\":-43.3561,\"interfaces\":[{\"name\":\"e254771\",\"id\":1},{\"name\":\"e255384\",\"id\":2},{\"name\":\"e255805\",\"id\":3},{\"name\":\"e256724\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG Campus Teófilo Otoni\",\"cod\":51,\"lat\":-17.8472,\"lon\":-41.5269,\"interfaces\":[{\"name\":\"e254773\",\"id\":1},{\"name\":\"e255387\",\"id\":2},{\"name\":\"e255999\",\"id\":3},{\"name\":\"e256918\",\"id\":4}]},{\"caption\":\"UFTM\",\"id\":\"UFTM Sede\",\"cod\":52,\"lat\":-19.7564,\"lon\":-47.9294,\"interfaces\":[{\"name\":\"e254503\",\"id\":1},{\"name\":\"e255117\",\"id\":2},{\"name\":\"e255729\",\"id\":3},{\"name\":\"e256648\",\"id\":4}]},{\"caption\":\"UFSJ\",\"id\":\"UFSJ campus Alto Paraopeba\",\"cod\":53,\"lat\":-20.5221,\"lon\":-43.7444,\"interfaces\":[{\"name\":\"e254501\",\"id\":1},{\"name\":\"e255115\",\"id\":2},{\"name\":\"e255727\",\"id\":3},{\"name\":\"e256646\",\"id\":4}]},{\"caption\":\"UFSJ\",\"id\":\"UFSJ\",\"cod\":54,\"lat\":-21.1226,\"lon\":-44.2501,\"interfaces\":[{\"name\":\"e254499\",\"id\":1},{\"name\":\"e255113\",\"id\":2},{\"name\":\"e255725\",\"id\":3},{\"name\":\"e256644\",\"id\":4}]},{\"caption\":\"UFOP\",\"id\":\"UFOP\",\"cod\":55,\"lat\":-20.3984,\"lon\":-43.5086,\"interfaces\":[{\"name\":\"e254497\",\"id\":1},{\"name\":\"e255111\",\"id\":2},{\"name\":\"e255723\",\"id\":3},{\"name\":\"e256642\",\"id\":4}]},{\"caption\":\"UNIFAL\",\"id\":\"UNIFAL-MG campus Varginha\",\"cod\":56,\"lat\":-21.5759,\"lon\":-45.4132,\"interfaces\":[{\"name\":\"e254511\",\"id\":1},{\"name\":\"e255125\",\"id\":2},{\"name\":\"e255737\",\"id\":3},{\"name\":\"e256656\",\"id\":4}]},{\"caption\":\"UFJF\",\"id\":\"UFJF campus GV\",\"cod\":57,\"lat\":-18.8564,\"lon\":-41.9492,\"interfaces\":[{\"name\":\"e254611\",\"id\":1},{\"name\":\"e255225\",\"id\":2},{\"name\":\"e255837\",\"id\":3},{\"name\":\"e256756\",\"id\":4}]},{\"caption\":\"UFVJM\",\"id\":\"UFVJM campus do Mucuri\",\"cod\":58,\"lat\":-17.8829,\"lon\":-41.4966,\"interfaces\":[{\"name\":\"e254507\",\"id\":1},{\"name\":\"e255121\",\"id\":2},{\"name\":\"e255733\",\"id\":3},{\"name\":\"e256652\",\"id\":4}]},{\"caption\":\"UFV\",\"id\":\"UFV campus Rio Paranaíba\",\"cod\":59,\"lat\":-19.221,\"lon\":-46.2203,\"interfaces\":[{\"name\":\"e254505\",\"id\":1},{\"name\":\"e255119\",\"id\":2},{\"name\":\"e255731\",\"id\":3},{\"name\":\"e256650\",\"id\":4}]},{\"caption\":\"IFAM\",\"id\":\"IFAM campus Tabatinga\",\"cod\":60,\"lat\":-4.23121,\"lon\":-69.9148,\"interfaces\":[{\"name\":\"e254593\",\"id\":1},{\"name\":\"e254591\",\"id\":2},{\"name\":\"e255205\",\"id\":3},{\"name\":\"e255207\",\"id\":4},{\"name\":\"e255819\",\"id\":5},{\"name\":\"e255817\",\"id\":6},{\"name\":\"e256736\",\"id\":7},{\"name\":\"e256738\",\"id\":8}]},{\"caption\":\"IFPI\",\"id\":\"IFPI campus Corrente\",\"cod\":61,\"lat\":-10.4305,\"lon\":-45.174,\"interfaces\":[{\"name\":\"e254597\",\"id\":1},{\"name\":\"e254595\",\"id\":2},{\"name\":\"e255209\",\"id\":3},{\"name\":\"e255211\",\"id\":4},{\"name\":\"e255821\",\"id\":5},{\"name\":\"e255823\",\"id\":6},{\"name\":\"e256740\",\"id\":7},{\"name\":\"e256742\",\"id\":8}]},{\"caption\":\"Fiocruz Minas\",\"id\":\"Fiocruz Minas\",\"cod\":62,\"lat\":-19.9213,\"lon\":-43.9526,\"interfaces\":[{\"name\":\"e254515\",\"id\":1},{\"name\":\"e255129\",\"id\":2},{\"name\":\"e255741\",\"id\":3},{\"name\":\"e256660\",\"id\":4}]},{\"caption\":\"IFAM\",\"id\":\"IFAM campus São Gabriel da Cachoeira\",\"cod\":63,\"lat\":-0.130317,\"lon\":-67.0625,\"interfaces\":[{\"name\":\"e254605\",\"id\":1},{\"name\":\"e254603\",\"id\":2},{\"name\":\"e255217\",\"id\":3},{\"name\":\"e255219\",\"id\":4},{\"name\":\"e255829\",\"id\":5},{\"name\":\"e255831\",\"id\":6},{\"name\":\"e256748\",\"id\":7},{\"name\":\"e256750\",\"id\":8}]},{\"caption\":\"CEFETMG\",\"id\":\"CEFETMG unidade Timóteo\",\"cod\":64,\"lat\":-19.539,\"lon\":-42.6502,\"interfaces\":[{\"name\":\"e254577\",\"id\":1},{\"name\":\"e255191\",\"id\":2},{\"name\":\"e255803\",\"id\":3},{\"name\":\"e256722\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG Reitoria (Antigo)\",\"cod\":65,\"lat\":-21.7834,\"lon\":-43.356,\"interfaces\":[{\"name\":\"e254579\",\"id\":1},{\"name\":\"e255193\",\"id\":2}]},{\"caption\":\"UFAM\",\"id\":\"UFAM Instituto de Natureza e Cultura (INC) - Benjamin Constant\",\"cod\":66,\"lat\":-4.39081,\"lon\":-70.0322,\"interfaces\":[{\"name\":\"e254585\",\"id\":1},{\"name\":\"e254581\",\"id\":2},{\"name\":\"e254583\",\"id\":3},{\"name\":\"e255195\",\"id\":4},{\"name\":\"e255197\",\"id\":5},{\"name\":\"e255199\",\"id\":6},{\"name\":\"e255811\",\"id\":7},{\"name\":\"e255809\",\"id\":8},{\"name\":\"e255807\",\"id\":9},{\"name\":\"e256728\",\"id\":10},{\"name\":\"e256726\",\"id\":11},{\"name\":\"e256730\",\"id\":12}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG campus Arinos\",\"cod\":67,\"lat\":-15.9226,\"lon\":-46.134,\"interfaces\":[{\"name\":\"e254587\",\"id\":1},{\"name\":\"e254589\",\"id\":2},{\"name\":\"e255201\",\"id\":3},{\"name\":\"e255203\",\"id\":4},{\"name\":\"e255813\",\"id\":5},{\"name\":\"e255815\",\"id\":6},{\"name\":\"e256734\",\"id\":7},{\"name\":\"e256732\",\"id\":8}]},{\"caption\":\"IFTM\",\"id\":\"IFTM campus Uberaba\",\"cod\":68,\"lat\":-19.7187,\"lon\":-47.9576,\"interfaces\":[{\"name\":\"e254493\",\"id\":1},{\"name\":\"e255107\",\"id\":2},{\"name\":\"e255719\",\"id\":3},{\"name\":\"e256638\",\"id\":4}]},{\"caption\":\"IFTM\",\"id\":\"IFTM campus Uberlândia\",\"cod\":69,\"lat\":-18.7647,\"lon\":-48.2884,\"interfaces\":[{\"name\":\"e254495\",\"id\":1},{\"name\":\"e255109\",\"id\":2},{\"name\":\"e255721\",\"id\":3},{\"name\":\"e256640\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Formiga\",\"cod\":70,\"lat\":-20.4522,\"lon\":-45.439,\"interfaces\":[{\"name\":\"e254489\",\"id\":1},{\"name\":\"e255103\",\"id\":2},{\"name\":\"e255715\",\"id\":3},{\"name\":\"e256634\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Ouro Branco\",\"cod\":71,\"lat\":-20.514,\"lon\":-43.713,\"interfaces\":[{\"name\":\"e254491\",\"id\":1},{\"name\":\"e255105\",\"id\":2},{\"name\":\"e255717\",\"id\":3},{\"name\":\"e256636\",\"id\":4}]},{\"caption\":\"IFSULDEMINAS\",\"id\":\"IFSULDEMINAS campus Passos\",\"cod\":72,\"lat\":-20.7144,\"lon\":-46.6276,\"interfaces\":[{\"name\":\"e254485\",\"id\":1},{\"name\":\"e255099\",\"id\":2},{\"name\":\"e255711\",\"id\":3},{\"name\":\"e256630\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Congonhas\",\"cod\":73,\"lat\":-20.4864,\"lon\":-43.8409,\"interfaces\":[{\"name\":\"e254487\",\"id\":1},{\"name\":\"e255101\",\"id\":2},{\"name\":\"e255713\",\"id\":3},{\"name\":\"e256632\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG campus Muriaé unidade Barra\",\"cod\":74,\"lat\":-21.1276,\"lon\":-42.3791,\"interfaces\":[{\"name\":\"e254481\",\"id\":1},{\"name\":\"e255095\",\"id\":2},{\"name\":\"e255707\",\"id\":3},{\"name\":\"e256626\",\"id\":4}]},{\"caption\":\"IFSULDEMINAS\",\"id\":\"IFSULDEMINAS campus Muzambinho\",\"cod\":75,\"lat\":-21.3701,\"lon\":-46.5217,\"interfaces\":[{\"name\":\"e254483\",\"id\":1},{\"name\":\"e255097\",\"id\":2},{\"name\":\"e255709\",\"id\":3},{\"name\":\"e256628\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG campus Almenara\",\"cod\":76,\"lat\":-16.2294,\"lon\":-40.7432,\"interfaces\":[{\"name\":\"e254477\",\"id\":1},{\"name\":\"e255091\",\"id\":2},{\"name\":\"e255703\",\"id\":3},{\"name\":\"e256622\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG campus Pirapora\",\"cod\":77,\"lat\":-17.3248,\"lon\":-44.9292,\"interfaces\":[{\"name\":\"e254479\",\"id\":1},{\"name\":\"e255093\",\"id\":2},{\"name\":\"e255705\",\"id\":3},{\"name\":\"e256624\",\"id\":4}]},{\"caption\":\"UFMG\",\"id\":\"UFMG Fazenda Modelo Pedro Leopoldo\",\"cod\":78,\"lat\":-19.6354,\"lon\":-44.0515,\"interfaces\":[{\"name\":\"e254631\",\"id\":1},{\"name\":\"e255245\",\"id\":2},{\"name\":\"e255857\",\"id\":3},{\"name\":\"e256776\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HU-UFJF\",\"cod\":79,\"lat\":-21.7848,\"lon\":-43.3684,\"interfaces\":[{\"name\":\"e254629\",\"id\":1},{\"name\":\"e255243\",\"id\":2},{\"name\":\"e255855\",\"id\":3},{\"name\":\"e256774\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG campus avançado Bom Sucesso\",\"cod\":80,\"lat\":-21.038,\"lon\":-44.7671,\"interfaces\":[{\"name\":\"e254627\",\"id\":1},{\"name\":\"e255241\",\"id\":2},{\"name\":\"e255853\",\"id\":3},{\"name\":\"e256772\",\"id\":4}]},{\"caption\":\"IFSULDEMINAS\",\"id\":\"IFSULDEMINAS campus Machado\",\"cod\":81,\"lat\":-21.6998,\"lon\":-45.8907,\"interfaces\":[{\"name\":\"e254625\",\"id\":1},{\"name\":\"e255239\",\"id\":2},{\"name\":\"e255851\",\"id\":3},{\"name\":\"e256770\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG campus Araçuaí\",\"cod\":82,\"lat\":-16.848,\"lon\":-42.0364,\"interfaces\":[{\"name\":\"e254623\",\"id\":1},{\"name\":\"e255237\",\"id\":2},{\"name\":\"e255849\",\"id\":3},{\"name\":\"e256768\",\"id\":4}]},{\"caption\":\"UNIFAL\",\"id\":\"UNIFAL-MG unidade Santa Clara\",\"cod\":83,\"lat\":-21.4227,\"lon\":-45.9839,\"interfaces\":[{\"name\":\"e254621\",\"id\":1},{\"name\":\"e255235\",\"id\":2},{\"name\":\"e255847\",\"id\":3},{\"name\":\"e256766\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Ipatinga\",\"cod\":84,\"lat\":-19.4707,\"lon\":-42.527,\"interfaces\":[{\"name\":\"e254618\",\"id\":1},{\"name\":\"e255232\",\"id\":2},{\"name\":\"e255844\",\"id\":3},{\"name\":\"e256763\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG CEAD\",\"cod\":85,\"lat\":-16.722,\"lon\":-43.8729,\"interfaces\":[{\"name\":\"e254617\",\"id\":1},{\"name\":\"e255231\",\"id\":2},{\"name\":\"e255843\",\"id\":3},{\"name\":\"e256762\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HC-UFMG\",\"cod\":86,\"lat\":-19.9245,\"lon\":-43.9282,\"interfaces\":[{\"name\":\"e254615\",\"id\":1},{\"name\":\"e255229\",\"id\":2},{\"name\":\"e255841\",\"id\":3},{\"name\":\"e256760\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HC-UFTM\",\"cod\":87,\"lat\":-19.7558,\"lon\":-47.9306,\"interfaces\":[{\"name\":\"e254613\",\"id\":1},{\"name\":\"e255227\",\"id\":2},{\"name\":\"e255839\",\"id\":3},{\"name\":\"e256758\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Governador Valadares\",\"cod\":88,\"lat\":-18.8302,\"lon\":-41.975,\"interfaces\":[{\"name\":\"e254775\",\"id\":1},{\"name\":\"e255389\",\"id\":2},{\"name\":\"e256001\",\"id\":3},{\"name\":\"e256920\",\"id\":4}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-MG unidade Varginha\",\"cod\":89,\"lat\":-21.5496,\"lon\":-45.4192,\"interfaces\":[{\"name\":\"e254475\",\"id\":1},{\"name\":\"e255089\",\"id\":2},{\"name\":\"e255701\",\"id\":3},{\"name\":\"e256620\",\"id\":4}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-MG unidade Leopoldina\",\"cod\":90,\"lat\":-21.5314,\"lon\":-42.6344,\"interfaces\":[{\"name\":\"e254473\",\"id\":1},{\"name\":\"e255087\",\"id\":2},{\"name\":\"e255699\",\"id\":3},{\"name\":\"e256618\",\"id\":4}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-MG unidade Contagem\",\"cod\":91,\"lat\":-19.9554,\"lon\":-44.0273,\"interfaces\":[{\"name\":\"e254471\",\"id\":1},{\"name\":\"e255085\",\"id\":2},{\"name\":\"e255697\",\"id\":3},{\"name\":\"e256616\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Ponte Nova\",\"cod\":92,\"lat\":-20.4192,\"lon\":-42.9129,\"interfaces\":[{\"name\":\"e254649\",\"id\":1},{\"name\":\"e255263\",\"id\":2},{\"name\":\"e255875\",\"id\":3},{\"name\":\"e256794\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG campus Montes Claros\",\"cod\":93,\"lat\":-16.6864,\"lon\":-43.8281,\"interfaces\":[{\"name\":\"e254651\",\"id\":1},{\"name\":\"e255265\",\"id\":2},{\"name\":\"e255877\",\"id\":3},{\"name\":\"e256796\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG campus Santos Dumont\",\"cod\":94,\"lat\":-21.4692,\"lon\":-43.5433,\"interfaces\":[{\"name\":\"e254637\",\"id\":1},{\"name\":\"e255251\",\"id\":2},{\"name\":\"e255863\",\"id\":3},{\"name\":\"e256782\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus São João Evangelista\",\"cod\":95,\"lat\":-18.5479,\"lon\":-42.7646,\"interfaces\":[{\"name\":\"e254639\",\"id\":1},{\"name\":\"e255253\",\"id\":2},{\"name\":\"e255865\",\"id\":3},{\"name\":\"e256784\",\"id\":4}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPMS\",\"cod\":96,\"lat\":-19.4673,\"lon\":-44.1735,\"interfaces\":[{\"name\":\"e254633\",\"id\":1},{\"name\":\"e255247\",\"id\":2},{\"name\":\"e255859\",\"id\":3},{\"name\":\"e256778\",\"id\":4}]},{\"caption\":\"UFVJM\",\"id\":\"UFVJM campus Unaí\",\"cod\":97,\"lat\":-16.4363,\"lon\":-46.9006,\"interfaces\":[{\"name\":\"e254635\",\"id\":1},{\"name\":\"e255249\",\"id\":2},{\"name\":\"e255861\",\"id\":3},{\"name\":\"e256780\",\"id\":4}]},{\"caption\":\"UFMG\",\"id\":\"UFMG Observatório Astronômico da UFMG\",\"cod\":98,\"lat\":-19.8225,\"lon\":-43.6794,\"interfaces\":[{\"name\":\"e254644\",\"id\":1},{\"name\":\"e255258\",\"id\":2},{\"name\":\"e255870\",\"id\":3},{\"name\":\"e256789\",\"id\":4}]},{\"caption\":\"UFJF\",\"id\":\"UFJF Sede\",\"cod\":99,\"lat\":-21.7769,\"lon\":-43.369,\"interfaces\":[{\"name\":\"e254647\",\"id\":1},{\"name\":\"e255261\",\"id\":2},{\"name\":\"e255873\",\"id\":3},{\"name\":\"e256792\",\"id\":4}]},{\"caption\":\"UFMG\",\"id\":\"UFMG Instituto Casa da Glória\",\"cod\":100,\"lat\":-18.2415,\"lon\":-43.6017,\"interfaces\":[{\"name\":\"e254641\",\"id\":1},{\"name\":\"e255255\",\"id\":2},{\"name\":\"e255867\",\"id\":3},{\"name\":\"e256786\",\"id\":4}]},{\"caption\":\"UFV\",\"id\":\"UFV campus Florestal\",\"cod\":101,\"lat\":-19.8831,\"lon\":-44.4177,\"interfaces\":[{\"name\":\"e254643\",\"id\":1},{\"name\":\"e254642\",\"id\":2},{\"name\":\"e255257\",\"id\":3},{\"name\":\"e255256\",\"id\":4},{\"name\":\"e255868\",\"id\":5},{\"name\":\"e255869\",\"id\":6},{\"name\":\"e256788\",\"id\":7},{\"name\":\"e256787\",\"id\":8}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-MG unidade Divinópolis\",\"cod\":102,\"lat\":-20.1725,\"lon\":-44.91,\"interfaces\":[{\"name\":\"e254663\",\"id\":1},{\"name\":\"e255277\",\"id\":2},{\"name\":\"e255889\",\"id\":3},{\"name\":\"e256808\",\"id\":4}]},{\"caption\":\"UFU\",\"id\":\"UFU campus Pontal\",\"cod\":103,\"lat\":-19.0037,\"lon\":-49.457,\"interfaces\":[{\"name\":\"e254661\",\"id\":1},{\"name\":\"e255275\",\"id\":2},{\"name\":\"e255887\",\"id\":3},{\"name\":\"e256806\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG Campus Avançado Cataguases\",\"cod\":104,\"lat\":-21.3829,\"lon\":-42.7016,\"interfaces\":[{\"name\":\"e254667\",\"id\":1},{\"name\":\"e255281\",\"id\":2},{\"name\":\"e255893\",\"id\":3},{\"name\":\"e256812\",\"id\":4}]},{\"caption\":\"UFSJ\",\"id\":\"UFSJ campus Centro-Oeste Dona Lindu\",\"cod\":105,\"lat\":-20.1786,\"lon\":-44.9182,\"interfaces\":[{\"name\":\"e254664\",\"id\":1},{\"name\":\"e255278\",\"id\":2},{\"name\":\"e255890\",\"id\":3},{\"name\":\"e256809\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG campus Rio Pomba\",\"cod\":106,\"lat\":-21.2514,\"lon\":-43.159,\"interfaces\":[{\"name\":\"e254654\",\"id\":1},{\"name\":\"e255268\",\"id\":2},{\"name\":\"e255880\",\"id\":3},{\"name\":\"e256799\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus avançado Itabirito\",\"cod\":107,\"lat\":-20.2552,\"lon\":-43.793,\"interfaces\":[{\"name\":\"e254653\",\"id\":1},{\"name\":\"e255267\",\"id\":2},{\"name\":\"e255879\",\"id\":3},{\"name\":\"e256798\",\"id\":4}]},{\"caption\":\"LNA\",\"id\":\"LNA - Laboratório Nacional de Astrofísica\",\"cod\":108,\"lat\":-22.4315,\"lon\":-45.492,\"interfaces\":[{\"name\":\"e254659\",\"id\":1},{\"name\":\"e255273\",\"id\":2},{\"name\":\"e255885\",\"id\":3},{\"name\":\"e256804\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG campus Manhuaçu\",\"cod\":109,\"lat\":-20.2461,\"lon\":-42.1496,\"interfaces\":[{\"name\":\"e254657\",\"id\":1},{\"name\":\"e255271\",\"id\":2},{\"name\":\"e255883\",\"id\":3},{\"name\":\"e256802\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Conselheiro Lafaiete\",\"cod\":110,\"lat\":-20.67,\"lon\":-43.8058,\"interfaces\":[{\"name\":\"e254671\",\"id\":1},{\"name\":\"e255285\",\"id\":2},{\"name\":\"e255897\",\"id\":3},{\"name\":\"e256816\",\"id\":4}]},{\"caption\":\"IFSULDEMINAS\",\"id\":\"IFSULDEMINAS Reitoria\",\"cod\":111,\"lat\":-22.2916,\"lon\":-45.9202,\"interfaces\":[{\"name\":\"e254669\",\"id\":1},{\"name\":\"e255283\",\"id\":2},{\"name\":\"e255895\",\"id\":3},{\"name\":\"e256814\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG campus São João del-Rei\",\"cod\":112,\"lat\":-21.1104,\"lon\":-44.2458,\"interfaces\":[{\"name\":\"e254673\",\"id\":1},{\"name\":\"e255287\",\"id\":2},{\"name\":\"e255899\",\"id\":3},{\"name\":\"e256818\",\"id\":4}]},{\"caption\":\"BH\",\"id\":\"Hospital Sarah BH\",\"cod\":113,\"lat\":-19.9327,\"lon\":-43.9879,\"interfaces\":[{\"name\":\"e254675\",\"id\":1},{\"name\":\"e255289\",\"id\":2},{\"name\":\"e255901\",\"id\":3},{\"name\":\"e256820\",\"id\":4}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG campus Juiz de Fora\",\"cod\":114,\"lat\":-21.742,\"lon\":-43.3742,\"interfaces\":[{\"name\":\"e254677\",\"id\":1},{\"name\":\"e255291\",\"id\":2},{\"name\":\"e255903\",\"id\":3},{\"name\":\"e256822\",\"id\":4}]},{\"caption\":\"IFSULDEMINAS\",\"id\":\"IFSULDEMINAS campus Inconfidentes\",\"cod\":115,\"lat\":-22.3185,\"lon\":-46.3283,\"interfaces\":[{\"name\":\"e254679\",\"id\":1},{\"name\":\"e255293\",\"id\":2},{\"name\":\"e255905\",\"id\":3},{\"name\":\"e256824\",\"id\":4}]},{\"caption\":\"IFSULDEMINAS\",\"id\":\"IFSULDEMINAS campus Poços de Caldas\",\"cod\":116,\"lat\":-21.837,\"lon\":-46.5592,\"interfaces\":[{\"name\":\"e254681\",\"id\":1},{\"name\":\"e255295\",\"id\":2},{\"name\":\"e255907\",\"id\":3},{\"name\":\"e256826\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSudesteMG campus Muriaé unidade Rural\",\"cod\":117,\"lat\":-21.0717,\"lon\":-42.3691,\"interfaces\":[{\"name\":\"e254683\",\"id\":1},{\"name\":\"e255297\",\"id\":2},{\"name\":\"e255909\",\"id\":3},{\"name\":\"e256828\",\"id\":4}]},{\"caption\":\"UFV\",\"id\":\"UFV Centro Tecnológico de Desenvolvimento Regional de Viçosa\",\"cod\":118,\"lat\":-20.7137,\"lon\":-42.8647,\"interfaces\":[{\"name\":\"e254685\",\"id\":1},{\"name\":\"e255299\",\"id\":2},{\"name\":\"e255911\",\"id\":3},{\"name\":\"e256830\",\"id\":4}]},{\"caption\":\"UFVJM\",\"id\":\"UFVJM Moradia Estudantil\",\"cod\":119,\"lat\":-18.2298,\"lon\":-43.6081,\"interfaces\":[{\"name\":\"e254687\",\"id\":1},{\"name\":\"e255301\",\"id\":2},{\"name\":\"e255913\",\"id\":3},{\"name\":\"e256832\",\"id\":4}]},{\"caption\":\"UFVJM\",\"id\":\"UFVJM campus JK\",\"cod\":120,\"lat\":-18.201,\"lon\":-43.5753,\"interfaces\":[{\"name\":\"e254688\",\"id\":1},{\"name\":\"e255302\",\"id\":2},{\"name\":\"e255914\",\"id\":3},{\"name\":\"e256833\",\"id\":4}]},{\"caption\":\"UFTM\",\"id\":\"UFTM campus universitário Iturama\",\"cod\":121,\"lat\":-19.7392,\"lon\":-50.1788,\"interfaces\":[{\"name\":\"e254691\",\"id\":1},{\"name\":\"e255305\",\"id\":2},{\"name\":\"e255917\",\"id\":3},{\"name\":\"e256836\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Bambuí\",\"cod\":122,\"lat\":-20.0335,\"lon\":-46.0098,\"interfaces\":[{\"name\":\"e254561\",\"id\":1},{\"name\":\"e255175\",\"id\":2},{\"name\":\"e255787\",\"id\":3},{\"name\":\"e256706\",\"id\":4}]},{\"caption\":\"IFTM\",\"id\":\"IFTM campus Patos de Minas\",\"cod\":123,\"lat\":-18.6457,\"lon\":-46.492,\"interfaces\":[{\"name\":\"e254563\",\"id\":1},{\"name\":\"e255177\",\"id\":2},{\"name\":\"e255789\",\"id\":3},{\"name\":\"e256708\",\"id\":4}]},{\"caption\":\"UFV\",\"id\":\"UFV campus Viçosa\",\"cod\":124,\"lat\":-20.7612,\"lon\":-42.8676,\"interfaces\":[{\"name\":\"e254557\",\"id\":1},{\"name\":\"e255171\",\"id\":2},{\"name\":\"e255783\",\"id\":3},{\"name\":\"e256702\",\"id\":4}]},{\"caption\":\"IFNMG\",\"id\":\"IFNMG campus Janaúba\",\"cod\":125,\"lat\":-15.8015,\"lon\":-43.3099,\"interfaces\":[{\"name\":\"e254559\",\"id\":1},{\"name\":\"e255173\",\"id\":2},{\"name\":\"e255785\",\"id\":3},{\"name\":\"e256704\",\"id\":4}]},{\"caption\":\"IFTM\",\"id\":\"IFTM campus Paracatú\",\"cod\":126,\"lat\":-17.2469,\"lon\":-46.8802,\"interfaces\":[{\"name\":\"e254569\",\"id\":1},{\"name\":\"e255183\",\"id\":2},{\"name\":\"e255795\",\"id\":3},{\"name\":\"e256714\",\"id\":4}]},{\"caption\":\"CNEN\",\"id\":\"CNEN LAPOC - Laboratório de Poços de Caldas\",\"cod\":127,\"lat\":-21.8961,\"lon\":-46.5761,\"interfaces\":[{\"name\":\"e254571\",\"id\":1},{\"name\":\"e255185\",\"id\":2},{\"name\":\"e255797\",\"id\":3},{\"name\":\"e256716\",\"id\":4}]},{\"caption\":\"UFU\",\"id\":\"UFU campus Monte Carmelo\",\"cod\":128,\"lat\":-18.7244,\"lon\":-47.5238,\"interfaces\":[{\"name\":\"e254565\",\"id\":1},{\"name\":\"e255179\",\"id\":2},{\"name\":\"e255791\",\"id\":3},{\"name\":\"e256710\",\"id\":4}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_SUREG-BH\",\"cod\":129,\"lat\":-19.9317,\"lon\":-43.9346,\"interfaces\":[{\"name\":\"e254567\",\"id\":1},{\"name\":\"e255181\",\"id\":2},{\"name\":\"e255793\",\"id\":3},{\"name\":\"e256712\",\"id\":4}]},{\"caption\":\"MPEG\",\"id\":\"MPEG Estação Científica Ferreira Penna \",\"cod\":130,\"lat\":-1.69243,\"lon\":-50.4792,\"interfaces\":[{\"name\":\"e254607\",\"id\":1},{\"name\":\"e254609\",\"id\":2},{\"name\":\"e255223\",\"id\":3},{\"name\":\"e255221\",\"id\":4},{\"name\":\"e255835\",\"id\":5},{\"name\":\"e255833\",\"id\":6},{\"name\":\"e256754\",\"id\":7},{\"name\":\"e256752\",\"id\":8}]},{\"caption\":\"UFU\",\"id\":\"UFU Sede\",\"cod\":131,\"lat\":-18.9181,\"lon\":-48.2576,\"interfaces\":[{\"name\":\"e254573\",\"id\":1},{\"name\":\"e255187\",\"id\":2},{\"name\":\"e255799\",\"id\":3},{\"name\":\"e256718\",\"id\":4}]},{\"caption\":\"UNIFAL\",\"id\":\"UNIFAL-MG campus Poços de Caldas\",\"cod\":132,\"lat\":-21.8202,\"lon\":-46.6624,\"interfaces\":[{\"name\":\"e254575\",\"id\":1},{\"name\":\"e255189\",\"id\":2},{\"name\":\"e255801\",\"id\":3},{\"name\":\"e256720\",\"id\":4}]},{\"caption\":\"UNIFAL\",\"id\":\"UNIFAL-MG Sede\",\"cod\":133,\"lat\":-21.4202,\"lon\":-45.9485,\"interfaces\":[{\"name\":\"e254509\",\"id\":1},{\"name\":\"e255123\",\"id\":2},{\"name\":\"e255735\",\"id\":3},{\"name\":\"e256654\",\"id\":4}]},{\"caption\":\"IFTM\",\"id\":\"IFTM Reitoria\",\"cod\":134,\"lat\":-19.7047,\"lon\":-47.9723,\"interfaces\":[{\"name\":\"e254699\",\"id\":1},{\"name\":\"e255313\",\"id\":2},{\"name\":\"e255925\",\"id\":3},{\"name\":\"e256844\",\"id\":4}]},{\"caption\":\"UFVJM\",\"id\":\"UFVJM Núcleo de Estudos Avançados de Turismo\",\"cod\":135,\"lat\":-18.2427,\"lon\":-43.5985,\"interfaces\":[{\"name\":\"e254697\",\"id\":1},{\"name\":\"e255311\",\"id\":2},{\"name\":\"e255923\",\"id\":3},{\"name\":\"e256842\",\"id\":4}]},{\"caption\":\"UFSJ\",\"id\":\"UFSJ Fortim dos Emboabas\",\"cod\":136,\"lat\":-21.135,\"lon\":-44.2616,\"interfaces\":[{\"name\":\"e254695\",\"id\":1},{\"name\":\"e255309\",\"id\":2},{\"name\":\"e255921\",\"id\":3},{\"name\":\"e256840\",\"id\":4}]},{\"caption\":\"UFSJ\",\"id\":\"Centro Cultural da UFSJ\",\"cod\":137,\"lat\":-21.1339,\"lon\":-44.2606,\"interfaces\":[{\"name\":\"e254693\",\"id\":1},{\"name\":\"e255307\",\"id\":2},{\"name\":\"e255919\",\"id\":3},{\"name\":\"e256838\",\"id\":4}]},{\"caption\":\"IFTM\",\"id\":\"IFTM campus avançado Campina Verde\",\"cod\":138,\"lat\":-19.5412,\"lon\":-49.5194,\"interfaces\":[{\"name\":\"e254707\",\"id\":1},{\"name\":\"e255321\",\"id\":2},{\"name\":\"e255933\",\"id\":3},{\"name\":\"e256852\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Betim\",\"cod\":139,\"lat\":-19.9374,\"lon\":-44.1187,\"interfaces\":[{\"name\":\"e254705\",\"id\":1},{\"name\":\"e255319\",\"id\":2},{\"name\":\"e255931\",\"id\":3},{\"name\":\"e256850\",\"id\":4}]},{\"caption\":\"IFSULDEMINAS\",\"id\":\"IFSULDEMINAS campus Pouso Alegre\",\"cod\":140,\"lat\":-22.2912,\"lon\":-45.921,\"interfaces\":[{\"name\":\"e254703\",\"id\":1},{\"name\":\"e255317\",\"id\":2},{\"name\":\"e255929\",\"id\":3},{\"name\":\"e256848\",\"id\":4}]},{\"caption\":\"IFMG\",\"id\":\"IFMG campus Ibirité\",\"cod\":141,\"lat\":-20.0393,\"lon\":-44.0334,\"interfaces\":[{\"name\":\"e254701\",\"id\":1},{\"name\":\"e255315\",\"id\":2},{\"name\":\"e255927\",\"id\":3},{\"name\":\"e256846\",\"id\":4}]},{\"caption\":\"UFU\",\"id\":\"UFU campus Umuarama\",\"cod\":142,\"lat\":-18.8856,\"lon\":-48.2592,\"interfaces\":[{\"name\":\"e254711\",\"id\":1},{\"name\":\"e255325\",\"id\":2},{\"name\":\"e255937\",\"id\":3},{\"name\":\"e256856\",\"id\":4}]},{\"caption\":\"UFU\",\"id\":\"UFU campus Glória\",\"cod\":143,\"lat\":-18.9442,\"lon\":-48.2142,\"interfaces\":[{\"name\":\"e254709\",\"id\":1},{\"name\":\"e255323\",\"id\":2},{\"name\":\"e255935\",\"id\":3},{\"name\":\"e256854\",\"id\":4}]},{\"caption\":\"IFAM\",\"id\":\"IFAM campus Lábrea\",\"cod\":144,\"lat\":-7.2506,\"lon\":-64.7838,\"interfaces\":[{\"name\":\"e254601\",\"id\":1},{\"name\":\"e254599\",\"id\":2},{\"name\":\"e255215\",\"id\":3},{\"name\":\"e255213\",\"id\":4},{\"name\":\"e255825\",\"id\":5},{\"name\":\"e255827\",\"id\":6},{\"name\":\"e256744\",\"id\":7},{\"name\":\"e256746\",\"id\":8}]},{\"caption\":\"IF\",\"id\":\"IF Sudeste MG Reitoria (BRDigital)\",\"cod\":145,\"lat\":-21.7839,\"lon\":-43.3561,\"interfaces\":[{\"name\":\"e255996\",\"id\":1},{\"name\":\"e256915\",\"id\":2}]}]},\"ms\":{\"clientes\":[{\"caption\":\"IFMS\",\"id\":\"IFMS – Coxim\",\"cod\":1,\"lat\":-18.4844,\"lon\":-54.7527,\"interfaces\":[{\"name\":\"e8433\",\"id\":1},{\"name\":\"e8607\",\"id\":2}]},{\"caption\":\"IFMS\",\"id\":\"IFMS – Corumbá\",\"cod\":2,\"lat\":-19.0006,\"lon\":-57.6586,\"interfaces\":[{\"name\":\"e8448\",\"id\":1},{\"name\":\"e8622\",\"id\":2}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HU-UFGD\",\"cod\":3,\"lat\":-22.217,\"lon\":-54.8542,\"interfaces\":[{\"name\":\"e8450\",\"id\":1},{\"name\":\"e8624\",\"id\":2}]},{\"caption\":\"UFGD\",\"id\":\"UFGD – Sede\",\"cod\":4,\"lat\":-22.197,\"lon\":-54.935,\"interfaces\":[{\"name\":\"e8453\",\"id\":1},{\"name\":\"e8627\",\"id\":2}]},{\"caption\":\"IFMS\",\"id\":\"IFMS – Aquidauana\",\"cod\":5,\"lat\":-20.4811,\"lon\":-55.7727,\"interfaces\":[{\"name\":\"e8445\",\"id\":1},{\"name\":\"e8619\",\"id\":2}]},{\"caption\":\"IFMS\",\"id\":\"IFMS – Três Lagoas\",\"cod\":6,\"lat\":-20.7631,\"lon\":-51.7054,\"interfaces\":[{\"name\":\"e8432\",\"id\":1},{\"name\":\"e8606\",\"id\":2}]},{\"caption\":\"IFMS\",\"id\":\"IFMS – Ponta Porã\",\"cod\":7,\"lat\":-22.6196,\"lon\":-55.6093,\"interfaces\":[{\"name\":\"e8454\",\"id\":1},{\"name\":\"e8628\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS - Bonito\",\"cod\":8,\"lat\":-21.116,\"lon\":-56.5192,\"interfaces\":[{\"name\":\"e8456\",\"id\":1},{\"name\":\"e8630\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS - Sede\",\"cod\":9,\"lat\":-20.5028,\"lon\":-54.6124,\"interfaces\":[{\"name\":\"e8479\",\"id\":1},{\"name\":\"e8480\",\"id\":2},{\"name\":\"e8475\",\"id\":3},{\"name\":\"e8477\",\"id\":4},{\"name\":\"e8476\",\"id\":5},{\"name\":\"e8651\",\"id\":6},{\"name\":\"e8650\",\"id\":7},{\"name\":\"e8653\",\"id\":8},{\"name\":\"e8654\",\"id\":9},{\"name\":\"e8649\",\"id\":10}]},{\"caption\":\"INMETRO\",\"id\":\"INMETRO Agência Estadual MS\",\"cod\":10,\"lat\":-20.4942,\"lon\":-54.6148,\"interfaces\":[{\"name\":\"e8438\",\"id\":1},{\"name\":\"e8612\",\"id\":2}]},{\"caption\":\"IFMS\",\"id\":\"IFMS – Jardim\",\"cod\":11,\"lat\":-21.4979,\"lon\":-56.1622,\"interfaces\":[{\"name\":\"e8484\",\"id\":1},{\"name\":\"e8658\",\"id\":2}]},{\"caption\":\"FIOCRUZ\",\"id\":\"FIOCRUZ II - MS\",\"cod\":12,\"lat\":-20.506,\"lon\":-54.6204,\"interfaces\":[{\"name\":\"e8482\",\"id\":1},{\"name\":\"e8656\",\"id\":2}]},{\"caption\":\"FIOCRUZ\",\"id\":\"FIOCRUZ - MS\",\"cod\":13,\"lat\":-20.5053,\"lon\":-54.6217,\"interfaces\":[{\"name\":\"e8436\",\"id\":1},{\"name\":\"e8610\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPGC\",\"cod\":14,\"lat\":-20.4444,\"lon\":-54.7228,\"interfaces\":[{\"name\":\"e8435\",\"id\":1},{\"name\":\"e8609\",\"id\":2}]},{\"caption\":\"IFMS\",\"id\":\"IFMS – Campus II\",\"cod\":15,\"lat\":-20.4569,\"lon\":-54.6551,\"interfaces\":[{\"name\":\"e8472\",\"id\":1},{\"name\":\"e8646\",\"id\":2}]},{\"caption\":\"IFMS\",\"id\":\"IFMS – Reitoria\",\"cod\":16,\"lat\":-20.4577,\"lon\":-54.5925,\"interfaces\":[{\"name\":\"e8437\",\"id\":1},{\"name\":\"e8611\",\"id\":2}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUMAP\",\"cod\":17,\"lat\":-20.4993,\"lon\":-54.6164,\"interfaces\":[{\"name\":\"e8439\",\"id\":1},{\"name\":\"e8613\",\"id\":2}]},{\"caption\":\"IFMS\",\"id\":\"IFMS - Naviraí\",\"cod\":18,\"lat\":-23.0691,\"lon\":-54.2123,\"interfaces\":[{\"name\":\"e8485\",\"id\":1},{\"name\":\"e8659\",\"id\":2}]},{\"caption\":\"CMCG\",\"id\":\"CMCG\",\"cod\":19,\"lat\":-20.4361,\"lon\":-54.6475,\"interfaces\":[{\"name\":\"e8434\",\"id\":1},{\"name\":\"e8608\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS – Três Lagoas II\",\"cod\":20,\"lat\":-20.7835,\"lon\":-51.6655,\"interfaces\":[{\"name\":\"e8470\",\"id\":1},{\"name\":\"e8644\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS - Chapadão do Sul\",\"cod\":21,\"lat\":-18.7737,\"lon\":-52.6226,\"interfaces\":[{\"name\":\"e8461\",\"id\":1},{\"name\":\"e8635\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS - Paranaiba\",\"cod\":22,\"lat\":-19.6618,\"lon\":-51.1778,\"interfaces\":[{\"name\":\"e8459\",\"id\":1},{\"name\":\"e8633\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS - Aquidauana II\",\"cod\":23,\"lat\":-20.4708,\"lon\":-55.7712,\"interfaces\":[{\"name\":\"e8457\",\"id\":1},{\"name\":\"e8631\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS - Pantanal\",\"cod\":24,\"lat\":-19.0003,\"lon\":-57.6305,\"interfaces\":[{\"name\":\"e8440\",\"id\":1},{\"name\":\"e8614\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS – Ponta Porã\",\"cod\":25,\"lat\":-22.5818,\"lon\":-55.6811,\"interfaces\":[{\"name\":\"e8468\",\"id\":1},{\"name\":\"e8642\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS – Naviraí\",\"cod\":26,\"lat\":-23.0229,\"lon\":-54.1891,\"interfaces\":[{\"name\":\"e8466\",\"id\":1},{\"name\":\"e8640\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS – Nova Andradina\",\"cod\":27,\"lat\":-22.2188,\"lon\":-53.3332,\"interfaces\":[{\"name\":\"e8465\",\"id\":1},{\"name\":\"e8639\",\"id\":2}]},{\"caption\":\"UFMS\",\"id\":\"UFMS – Coxim\",\"cod\":28,\"lat\":-18.487,\"lon\":-54.7549,\"interfaces\":[{\"name\":\"e8463\",\"id\":1},{\"name\":\"e8637\",\"id\":2}]},{\"caption\":\"IFMS\",\"id\":\"IFMS - Nova Andradina\",\"cod\":29,\"lat\":-22.0799,\"lon\":-53.4535,\"interfaces\":[{\"name\":\"e8487\",\"id\":1},{\"name\":\"e8661\",\"id\":2}]}]},\"mt\":{\"clientes\":[{\"caption\":\"IFMT\",\"id\":\"IFMT-Juina\",\"cod\":1,\"lat\":-11.4484,\"lon\":-58.7233,\"interfaces\":[{\"name\":\"e11403\",\"id\":1},{\"name\":\"e11521\",\"id\":2},{\"name\":\"e11640\",\"id\":3},{\"name\":\"e11758\",\"id\":4},{\"name\":\"e11876\",\"id\":5},{\"name\":\"e11994\",\"id\":6},{\"name\":\"e12173\",\"id\":7}]},{\"caption\":\"SECITECI\",\"id\":\"Secretaria de Estado de Ciência, Tecnologia e Inovação de Mato Grosso- SECITECI MT\",\"cod\":2,\"lat\":-15.5661,\"lon\":-56.0722,\"interfaces\":[{\"name\":\"e11434\",\"id\":1},{\"name\":\"e11435\",\"id\":2},{\"name\":\"e11553\",\"id\":3},{\"name\":\"e11552\",\"id\":4},{\"name\":\"e11671\",\"id\":5},{\"name\":\"e11672\",\"id\":6},{\"name\":\"e11789\",\"id\":7},{\"name\":\"e11790\",\"id\":8},{\"name\":\"e11907\",\"id\":9},{\"name\":\"e11908\",\"id\":10},{\"name\":\"e12025\",\"id\":11},{\"name\":\"e12026\",\"id\":12},{\"name\":\"e12202\",\"id\":13},{\"name\":\"e12203\",\"id\":14}]},{\"caption\":\"IFMT\",\"id\":\"IFMT - São Vicente\",\"cod\":3,\"lat\":-15.8622,\"lon\":-56.0778,\"interfaces\":[{\"name\":\"e11433\",\"id\":1},{\"name\":\"e11551\",\"id\":2},{\"name\":\"e11670\",\"id\":3},{\"name\":\"e11788\",\"id\":4},{\"name\":\"e11906\",\"id\":5},{\"name\":\"e12024\",\"id\":6},{\"name\":\"e12201\",\"id\":7}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUJM-UFMT\",\"cod\":4,\"lat\":-15.5811,\"lon\":-56.0793,\"interfaces\":[{\"name\":\"e11438\",\"id\":1},{\"name\":\"e11439\",\"id\":2},{\"name\":\"e11557\",\"id\":3},{\"name\":\"e11556\",\"id\":4},{\"name\":\"e11675\",\"id\":5},{\"name\":\"e11676\",\"id\":6},{\"name\":\"e11794\",\"id\":7},{\"name\":\"e11793\",\"id\":8},{\"name\":\"e11911\",\"id\":9},{\"name\":\"e11912\",\"id\":10},{\"name\":\"e12029\",\"id\":11},{\"name\":\"e12030\",\"id\":12},{\"name\":\"e12206\",\"id\":13},{\"name\":\"e12207\",\"id\":14}]},{\"caption\":\"ESR\",\"id\":\"ESR\",\"cod\":5,\"lat\":-15.6086,\"lon\":-56.0631,\"interfaces\":[{\"name\":\"e11437\",\"id\":1},{\"name\":\"e11555\",\"id\":2},{\"name\":\"e11674\",\"id\":3},{\"name\":\"e11792\",\"id\":4},{\"name\":\"e11910\",\"id\":5},{\"name\":\"e12028\",\"id\":6},{\"name\":\"e12205\",\"id\":7}]},{\"caption\":\"IFMT\",\"id\":\"IFMT - Sorriso\",\"cod\":6,\"lat\":-12.578,\"lon\":-55.7406,\"interfaces\":[{\"name\":\"e11427\",\"id\":1},{\"name\":\"e11545\",\"id\":2},{\"name\":\"e11664\",\"id\":3},{\"name\":\"e11782\",\"id\":4},{\"name\":\"e11900\",\"id\":5},{\"name\":\"e12018\",\"id\":6},{\"name\":\"e12195\",\"id\":7}]},{\"caption\":\"IFMT\",\"id\":\"IFMT- Alta Floresta\",\"cod\":7,\"lat\":-9.87047,\"lon\":-56.0864,\"interfaces\":[{\"name\":\"e11425\",\"id\":1},{\"name\":\"e11543\",\"id\":2},{\"name\":\"e11662\",\"id\":3},{\"name\":\"e11780\",\"id\":4},{\"name\":\"e11898\",\"id\":5},{\"name\":\"e12016\",\"id\":6},{\"name\":\"e12193\",\"id\":7}]},{\"caption\":\"IFMT\",\"id\":\"IFMT - Caceres\",\"cod\":8,\"lat\":-16.1306,\"lon\":-57.695,\"interfaces\":[{\"name\":\"e11431\",\"id\":1},{\"name\":\"e11549\",\"id\":2},{\"name\":\"e11668\",\"id\":3},{\"name\":\"e11786\",\"id\":4},{\"name\":\"e11904\",\"id\":5},{\"name\":\"e12022\",\"id\":6},{\"name\":\"e12199\",\"id\":7}]},{\"caption\":\"IFMT\",\"id\":\"IFMT - Pontes e Lacerda\",\"cod\":9,\"lat\":-15.236,\"lon\":-59.3303,\"interfaces\":[{\"name\":\"e11429\",\"id\":1},{\"name\":\"e11547\",\"id\":2},{\"name\":\"e11666\",\"id\":3},{\"name\":\"e11784\",\"id\":4},{\"name\":\"e11902\",\"id\":5},{\"name\":\"e12020\",\"id\":6},{\"name\":\"e12197\",\"id\":7}]},{\"caption\":\"IFMT\",\"id\":\"IFMT-Cuiaba\",\"cod\":10,\"lat\":-15.5928,\"lon\":-56.0993,\"interfaces\":[{\"name\":\"e11442\",\"id\":1},{\"name\":\"e11441\",\"id\":2},{\"name\":\"e11560\",\"id\":3},{\"name\":\"e11559\",\"id\":4},{\"name\":\"e11678\",\"id\":5},{\"name\":\"e11679\",\"id\":6},{\"name\":\"e11797\",\"id\":7},{\"name\":\"e11796\",\"id\":8},{\"name\":\"e11915\",\"id\":9},{\"name\":\"e11914\",\"id\":10},{\"name\":\"e12033\",\"id\":11},{\"name\":\"e12032\",\"id\":12},{\"name\":\"e12210\",\"id\":13},{\"name\":\"e12209\",\"id\":14}]},{\"caption\":\"INPP\",\"id\":\"INPP - Cuiabá - MT\",\"cod\":11,\"lat\":-15.6067,\"lon\":-56.062,\"interfaces\":[{\"name\":\"e11458\",\"id\":1},{\"name\":\"e11457\",\"id\":2},{\"name\":\"e11576\",\"id\":3},{\"name\":\"e11575\",\"id\":4},{\"name\":\"e11694\",\"id\":5},{\"name\":\"e11695\",\"id\":6},{\"name\":\"e11812\",\"id\":7},{\"name\":\"e11813\",\"id\":8},{\"name\":\"e11931\",\"id\":9},{\"name\":\"e11930\",\"id\":10},{\"name\":\"e12048\",\"id\":11},{\"name\":\"e12049\",\"id\":12},{\"name\":\"e12226\",\"id\":13},{\"name\":\"e12225\",\"id\":14}]},{\"caption\":\"IFMT\",\"id\":\"IFMT - Reitoria\",\"cod\":12,\"lat\":-15.5885,\"lon\":-56.106,\"interfaces\":[{\"name\":\"e11455\",\"id\":1},{\"name\":\"e11456\",\"id\":2},{\"name\":\"e11574\",\"id\":3},{\"name\":\"e11573\",\"id\":4},{\"name\":\"e11692\",\"id\":5},{\"name\":\"e11693\",\"id\":6},{\"name\":\"e11810\",\"id\":7},{\"name\":\"e11811\",\"id\":8},{\"name\":\"e11928\",\"id\":9},{\"name\":\"e11929\",\"id\":10},{\"name\":\"e12046\",\"id\":11},{\"name\":\"e12047\",\"id\":12},{\"name\":\"e12223\",\"id\":13},{\"name\":\"e12224\",\"id\":14}]},{\"caption\":\"UFMT\",\"id\":\"UFMT-Fazenda-Experimental\",\"cod\":13,\"lat\":-15.8513,\"lon\":-56.0707,\"interfaces\":[{\"name\":\"e11454\",\"id\":1},{\"name\":\"e11572\",\"id\":2},{\"name\":\"e11691\",\"id\":3},{\"name\":\"e11809\",\"id\":4},{\"name\":\"e11927\",\"id\":5},{\"name\":\"e12045\",\"id\":6},{\"name\":\"e12222\",\"id\":7}]},{\"caption\":\"IFMT\",\"id\":\"IFMT - Bela Vista\",\"cod\":14,\"lat\":-15.5804,\"lon\":-56.0615,\"interfaces\":[{\"name\":\"e11452\",\"id\":1},{\"name\":\"e11453\",\"id\":2},{\"name\":\"e11571\",\"id\":3},{\"name\":\"e11570\",\"id\":4},{\"name\":\"e11689\",\"id\":5},{\"name\":\"e11690\",\"id\":6},{\"name\":\"e11807\",\"id\":7},{\"name\":\"e11808\",\"id\":8},{\"name\":\"e11925\",\"id\":9},{\"name\":\"e11926\",\"id\":10},{\"name\":\"e12043\",\"id\":11},{\"name\":\"e12044\",\"id\":12},{\"name\":\"e12220\",\"id\":13},{\"name\":\"e12221\",\"id\":14}]},{\"caption\":\"IFMT\",\"id\":\"IFMT-Varzea Grande\",\"cod\":15,\"lat\":-15.6043,\"lon\":-56.1805,\"interfaces\":[{\"name\":\"e11451\",\"id\":1},{\"name\":\"e11569\",\"id\":2},{\"name\":\"e11688\",\"id\":3},{\"name\":\"e11806\",\"id\":4},{\"name\":\"e11924\",\"id\":5},{\"name\":\"e12042\",\"id\":6},{\"name\":\"e12219\",\"id\":7}]},{\"caption\":\"INPE\",\"id\":\"INPE-MT\",\"cod\":16,\"lat\":-15.5522,\"lon\":-56.0681,\"interfaces\":[{\"name\":\"e11447\",\"id\":1},{\"name\":\"e11449\",\"id\":2},{\"name\":\"e11448\",\"id\":3},{\"name\":\"e11565\",\"id\":4},{\"name\":\"e11566\",\"id\":5},{\"name\":\"e11567\",\"id\":6},{\"name\":\"e11685\",\"id\":7},{\"name\":\"e11684\",\"id\":8},{\"name\":\"e11686\",\"id\":9},{\"name\":\"e11804\",\"id\":10},{\"name\":\"e11803\",\"id\":11},{\"name\":\"e11802\",\"id\":12},{\"name\":\"e11920\",\"id\":13},{\"name\":\"e11921\",\"id\":14},{\"name\":\"e11922\",\"id\":15},{\"name\":\"e12040\",\"id\":16},{\"name\":\"e12039\",\"id\":17},{\"name\":\"e12038\",\"id\":18},{\"name\":\"e12217\",\"id\":19},{\"name\":\"e12216\",\"id\":20},{\"name\":\"e12215\",\"id\":21}]},{\"caption\":\"IFMT\",\"id\":\"IFMT - Confresa\",\"cod\":17,\"lat\":-10.639,\"lon\":-51.4709,\"interfaces\":[{\"name\":\"e11445\",\"id\":1},{\"name\":\"e11563\",\"id\":2},{\"name\":\"e11682\",\"id\":3},{\"name\":\"e11800\",\"id\":4},{\"name\":\"e11918\",\"id\":5},{\"name\":\"e12036\",\"id\":6},{\"name\":\"e12213\",\"id\":7}]},{\"caption\":\"UFMT\",\"id\":\"UFMT - Residência Estudantil\",\"cod\":18,\"lat\":-15.6002,\"lon\":-56.057,\"interfaces\":[{\"name\":\"e11459\",\"id\":1},{\"name\":\"e11577\",\"id\":2},{\"name\":\"e11696\",\"id\":3},{\"name\":\"e11814\",\"id\":4},{\"name\":\"e11932\",\"id\":5},{\"name\":\"e12050\",\"id\":6},{\"name\":\"e12227\",\"id\":7}]},{\"caption\":\"IFMT\",\"id\":\"IFMT- Barra do Garças\",\"cod\":19,\"lat\":-15.874,\"lon\":-52.301,\"interfaces\":[{\"name\":\"e11417\",\"id\":1},{\"name\":\"e11535\",\"id\":2},{\"name\":\"e11654\",\"id\":3},{\"name\":\"e11772\",\"id\":4},{\"name\":\"e11890\",\"id\":5},{\"name\":\"e12008\",\"id\":6},{\"name\":\"e12185\",\"id\":7}]},{\"caption\":\"IFMT\",\"id\":\"IFMT - Primavera Leste\",\"cod\":20,\"lat\":-15.5538,\"lon\":-54.2809,\"interfaces\":[{\"name\":\"e11419\",\"id\":1},{\"name\":\"e11537\",\"id\":2},{\"name\":\"e11656\",\"id\":3},{\"name\":\"e11774\",\"id\":4},{\"name\":\"e11892\",\"id\":5},{\"name\":\"e12010\",\"id\":6},{\"name\":\"e12187\",\"id\":7}]},{\"caption\":\"UFMT\",\"id\":\"UFMT- Sinop\",\"cod\":21,\"lat\":-11.8611,\"lon\":-55.483,\"interfaces\":[{\"name\":\"e11412\",\"id\":1},{\"name\":\"e11530\",\"id\":2},{\"name\":\"e11649\",\"id\":3},{\"name\":\"e11767\",\"id\":4},{\"name\":\"e11885\",\"id\":5},{\"name\":\"e12003\",\"id\":6},{\"name\":\"e12180\",\"id\":7}]},{\"caption\":\"UFMT\",\"id\":\"UFMT- Pontal do Araguaia\",\"cod\":22,\"lat\":-15.9173,\"lon\":-52.2748,\"interfaces\":[{\"name\":\"e11415\",\"id\":1},{\"name\":\"e11533\",\"id\":2},{\"name\":\"e11652\",\"id\":3},{\"name\":\"e11770\",\"id\":4},{\"name\":\"e11888\",\"id\":5},{\"name\":\"e12006\",\"id\":6},{\"name\":\"e12183\",\"id\":7}]},{\"caption\":\"UFR\",\"id\":\"UFR - Rondonopolis\",\"cod\":23,\"lat\":-16.4678,\"lon\":-54.5792,\"interfaces\":[{\"name\":\"e11409\",\"id\":1},{\"name\":\"e11527\",\"id\":2},{\"name\":\"e11646\",\"id\":3},{\"name\":\"e11764\",\"id\":4},{\"name\":\"e11882\",\"id\":5},{\"name\":\"e12000\",\"id\":6},{\"name\":\"e12177\",\"id\":7}]},{\"caption\":\"IFMT\",\"id\":\"IFMT - Rondonopolis\",\"cod\":24,\"lat\":-16.4648,\"lon\":-54.6267,\"interfaces\":[{\"name\":\"e11411\",\"id\":1},{\"name\":\"e11529\",\"id\":2},{\"name\":\"e11648\",\"id\":3},{\"name\":\"e11766\",\"id\":4},{\"name\":\"e11884\",\"id\":5},{\"name\":\"e12002\",\"id\":6},{\"name\":\"e12179\",\"id\":7}]},{\"caption\":\"IFMT\",\"id\":\"IFMT- Campo novo do Parecis\",\"cod\":25,\"lat\":-13.6778,\"lon\":-57.7878,\"interfaces\":[{\"name\":\"e11405\",\"id\":1},{\"name\":\"e11523\",\"id\":2},{\"name\":\"e11642\",\"id\":3},{\"name\":\"e11760\",\"id\":4},{\"name\":\"e11878\",\"id\":5},{\"name\":\"e11996\",\"id\":6},{\"name\":\"e12175\",\"id\":7}]},{\"caption\":\"UFMT\",\"id\":\"UFMT- Cuiaba\",\"cod\":26,\"lat\":-15.6097,\"lon\":-56.0644,\"interfaces\":[{\"name\":\"e11407\",\"id\":1},{\"name\":\"e11525\",\"id\":2},{\"name\":\"e11644\",\"id\":3},{\"name\":\"e11643\",\"id\":4},{\"name\":\"e11762\",\"id\":5},{\"name\":\"e11761\",\"id\":6},{\"name\":\"e11879\",\"id\":7},{\"name\":\"e11880\",\"id\":8},{\"name\":\"e11997\",\"id\":9},{\"name\":\"e11998\",\"id\":10}]},{\"caption\":\"IFMT\",\"id\":\"IFMT - Campo Verde\",\"cod\":27,\"lat\":-15.5531,\"lon\":-55.1688,\"interfaces\":[{\"name\":\"e11421\",\"id\":1},{\"name\":\"e11539\",\"id\":2},{\"name\":\"e11658\",\"id\":3},{\"name\":\"e11776\",\"id\":4},{\"name\":\"e11894\",\"id\":5},{\"name\":\"e12012\",\"id\":6},{\"name\":\"e12189\",\"id\":7}]},{\"caption\":\"UFMT\",\"id\":\"UFMT - Barra Garças\",\"cod\":28,\"lat\":-15.8757,\"lon\":-52.3127,\"interfaces\":[{\"name\":\"e11423\",\"id\":1},{\"name\":\"e11541\",\"id\":2},{\"name\":\"e11660\",\"id\":3},{\"name\":\"e11778\",\"id\":4},{\"name\":\"e11896\",\"id\":5},{\"name\":\"e12014\",\"id\":6},{\"name\":\"e12191\",\"id\":7}]},{\"caption\":\"UFMT\",\"id\":\"UFMT - Cuiaba\",\"cod\":29,\"lat\":-15.6097,\"lon\":-56.0645,\"interfaces\":[{\"name\":\"e12231\",\"id\":1},{\"name\":\"e12229\",\"id\":2}]}]},\"pa\":{\"clientes\":[{\"caption\":\"IFPA\",\"id\":\"IFPA - Vigia - Campos\",\"cod\":1,\"lat\":-0.845447,\"lon\":-48.1384,\"interfaces\":[{\"name\":\"e46066\",\"id\":1},{\"name\":\"e46296\",\"id\":2}]},{\"caption\":\"UNIFESSPA\",\"id\":\"UNIFESSPA - Marabá - Campus II\",\"cod\":2,\"lat\":-5.33493,\"lon\":-49.0885,\"interfaces\":[{\"name\":\"e46065\",\"id\":1},{\"name\":\"e46295\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Marabá - Industrial\",\"cod\":3,\"lat\":-5.33961,\"lon\":-49.0988,\"interfaces\":[{\"name\":\"e46063\",\"id\":1},{\"name\":\"e46293\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Altamira - Campus\",\"cod\":4,\"lat\":-3.21137,\"lon\":-52.2124,\"interfaces\":[{\"name\":\"e46060\",\"id\":1},{\"name\":\"e46290\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Itaituba - Campus\",\"cod\":5,\"lat\":-8.23324,\"lon\":-52.0312,\"interfaces\":[{\"name\":\"e46068\",\"id\":1},{\"name\":\"e46298\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Paragominas - Campus\",\"cod\":6,\"lat\":-3.00714,\"lon\":-47.3594,\"interfaces\":[{\"name\":\"e46067\",\"id\":1},{\"name\":\"e46297\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Ananindeua - Campus\",\"cod\":7,\"lat\":-1.34668,\"lon\":-48.4065,\"interfaces\":[{\"name\":\"e46056\",\"id\":1},{\"name\":\"e46286\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPATU_NAPT-T\",\"cod\":8,\"lat\":-3.20175,\"lon\":-52.2092,\"interfaces\":[{\"name\":\"e46057\",\"id\":1},{\"name\":\"e46287\",\"id\":2}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_SUREG-BE\",\"cod\":9,\"lat\":-1.43482,\"lon\":-48.4498,\"interfaces\":[{\"name\":\"e46052\",\"id\":1},{\"name\":\"e46282\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Altamira - Campus\",\"cod\":10,\"lat\":-3.18924,\"lon\":-52.1818,\"interfaces\":[{\"name\":\"e46058\",\"id\":1},{\"name\":\"e46288\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA - Altamira - Campus\",\"cod\":11,\"lat\":-3.18847,\"lon\":-52.209,\"interfaces\":[{\"name\":\"e46059\",\"id\":1},{\"name\":\"e46289\",\"id\":2}]},{\"caption\":\"FSCMP\",\"id\":\"Fundação Santa Casa de Misericórdia do Pará (FSCMP) - Belém\",\"cod\":12,\"lat\":-1.44083,\"lon\":-48.4808,\"interfaces\":[{\"name\":\"e46086\",\"id\":1},{\"name\":\"e46316\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA - Marabá - Industrial\",\"cod\":13,\"lat\":-5.36294,\"lon\":-49.1207,\"interfaces\":[{\"name\":\"e46085\",\"id\":1},{\"name\":\"e46315\",\"id\":2}]},{\"caption\":\"Sarah - Belém - Campus\",\"id\":\"Sarah - Belém - Campus\",\"cod\":14,\"lat\":-1.39948,\"lon\":-48.4915,\"interfaces\":[{\"name\":\"e46078\",\"id\":1},{\"name\":\"e46308\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Belém - Campus\",\"cod\":15,\"lat\":-1.43814,\"lon\":-48.4611,\"interfaces\":[{\"name\":\"e46077\",\"id\":1},{\"name\":\"e46307\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Castanhal - Centro\",\"cod\":16,\"lat\":-1.29958,\"lon\":-47.9008,\"interfaces\":[{\"name\":\"e46080\",\"id\":1},{\"name\":\"e46310\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPATU_Sede\",\"cod\":17,\"lat\":-1.43623,\"lon\":-48.4492,\"interfaces\":[{\"name\":\"e46079\",\"id\":1},{\"name\":\"e46309\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Castanhal - HVET\",\"cod\":18,\"lat\":-1.31089,\"lon\":-47.9471,\"interfaces\":[{\"name\":\"e46082\",\"id\":1},{\"name\":\"e46312\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Castanhal - CEBRAN\",\"cod\":19,\"lat\":-1.30381,\"lon\":-47.9424,\"interfaces\":[{\"name\":\"e46081\",\"id\":1},{\"name\":\"e46311\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA - Castanhal - Campus\",\"cod\":20,\"lat\":-1.28111,\"lon\":-47.9097,\"interfaces\":[{\"name\":\"e46084\",\"id\":1},{\"name\":\"e46314\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Castanhal - Campus\",\"cod\":21,\"lat\":-1.29786,\"lon\":-47.9509,\"interfaces\":[{\"name\":\"e46083\",\"id\":1},{\"name\":\"e46313\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Tucuruí - Campus\",\"cod\":22,\"lat\":-3.83858,\"lon\":-49.6743,\"interfaces\":[{\"name\":\"e45999\",\"id\":1},{\"name\":\"e46229\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Parauapebas - Campus\",\"cod\":23,\"lat\":-6.0683,\"lon\":-49.9043,\"interfaces\":[{\"name\":\"e46000\",\"id\":1},{\"name\":\"e46230\",\"id\":2}]},{\"caption\":\"UNIFESSPA\",\"id\":\"UNIFESSPA - Santana do Araguaia\",\"cod\":24,\"lat\":-9.33462,\"lon\":-50.3382,\"interfaces\":[{\"name\":\"e46104\",\"id\":1},{\"name\":\"e46334\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Belém - Reitoria\",\"cod\":25,\"lat\":-1.41068,\"lon\":-48.4335,\"interfaces\":[{\"name\":\"e46076\",\"id\":1},{\"name\":\"e46306\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - Sede\",\"cod\":26,\"lat\":-1.47485,\"lon\":-48.4561,\"interfaces\":[{\"name\":\"e46074\",\"id\":1},{\"name\":\"e46304\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - PCT Guamá\",\"cod\":27,\"lat\":-1.46266,\"lon\":-48.4459,\"interfaces\":[{\"name\":\"e46075\",\"id\":1},{\"name\":\"e46305\",\"id\":2}]},{\"caption\":\"UFOPA\",\"id\":\"UFOPA - Santarém - Campus Tapajós\",\"cod\":28,\"lat\":-2.42035,\"lon\":-54.7408,\"interfaces\":[{\"name\":\"e46072\",\"id\":1},{\"name\":\"e46302\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Marabá - Campus Rural\",\"cod\":29,\"lat\":-5.57003,\"lon\":-49.1003,\"interfaces\":[{\"name\":\"e46073\",\"id\":1},{\"name\":\"e46303\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA - Santarém - Campus\",\"cod\":30,\"lat\":-2.43096,\"lon\":-54.7206,\"interfaces\":[{\"name\":\"e46070\",\"id\":1},{\"name\":\"e46300\",\"id\":2}]},{\"caption\":\"UFOPA\",\"id\":\"UFOPA - Santarém - Campus Rondon\",\"cod\":31,\"lat\":-2.42884,\"lon\":-54.7316,\"interfaces\":[{\"name\":\"e46071\",\"id\":1},{\"name\":\"e46301\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Santarém - Campus\",\"cod\":32,\"lat\":-2.44061,\"lon\":-54.7089,\"interfaces\":[{\"name\":\"e46069\",\"id\":1},{\"name\":\"e46299\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Capanema - Campus I\",\"cod\":33,\"lat\":-1.19134,\"lon\":-47.1735,\"interfaces\":[{\"name\":\"e46111\",\"id\":1},{\"name\":\"e46341\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPATU_NAPT-SA\",\"cod\":34,\"lat\":-2.44768,\"lon\":-54.7024,\"interfaces\":[{\"name\":\"e46110\",\"id\":1},{\"name\":\"e46340\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belem - Laboratorio Habilidades Humanas\",\"cod\":35,\"lat\":-1.46842,\"lon\":-48.4678,\"interfaces\":[{\"name\":\"e46109\",\"id\":1},{\"name\":\"e46339\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belem - Centro de Memoria da Amazonia\",\"cod\":36,\"lat\":-1.44823,\"lon\":-48.491,\"interfaces\":[{\"name\":\"e46108\",\"id\":1},{\"name\":\"e46338\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Salinópolis\",\"cod\":37,\"lat\":-0.631036,\"lon\":-47.3419,\"interfaces\":[{\"name\":\"e46107\",\"id\":1},{\"name\":\"e46337\",\"id\":2}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_CHU-UFPA (HUBFS)\",\"cod\":38,\"lat\":-1.46958,\"lon\":-48.4466,\"interfaces\":[{\"name\":\"e46106\",\"id\":1},{\"name\":\"e46336\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Soure - Campus\",\"cod\":39,\"lat\":-0.72075,\"lon\":-48.5076,\"interfaces\":[{\"name\":\"e46009\",\"id\":1},{\"name\":\"e46239\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Tucuruí - Campus\",\"cod\":40,\"lat\":-3.83148,\"lon\":-49.6644,\"interfaces\":[{\"name\":\"e46010\",\"id\":1},{\"name\":\"e46240\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Cametá - Campus\",\"cod\":41,\"lat\":-2.24692,\"lon\":-49.5044,\"interfaces\":[{\"name\":\"e46007\",\"id\":1},{\"name\":\"e46237\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Capanema - Campus II\",\"cod\":42,\"lat\":-1.20743,\"lon\":-47.1588,\"interfaces\":[{\"name\":\"e46008\",\"id\":1},{\"name\":\"e46238\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Bragança - Campus\",\"cod\":43,\"lat\":-1.04983,\"lon\":-46.7612,\"interfaces\":[{\"name\":\"e46005\",\"id\":1},{\"name\":\"e46235\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Breves - Campus\",\"cod\":44,\"lat\":-1.68478,\"lon\":-50.469,\"interfaces\":[{\"name\":\"e46006\",\"id\":1},{\"name\":\"e46236\",\"id\":2}]},{\"caption\":\"UFOPA\",\"id\":\"UFOPA - Juruti - Campus\",\"cod\":45,\"lat\":-2.15842,\"lon\":-56.089,\"interfaces\":[{\"name\":\"e46003\",\"id\":1},{\"name\":\"e46233\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Abaetetuba - Campus\",\"cod\":46,\"lat\":-1.72491,\"lon\":-48.8639,\"interfaces\":[{\"name\":\"e46004\",\"id\":1},{\"name\":\"e46234\",\"id\":2}]},{\"caption\":\"UFOPA\",\"id\":\"UFOPA - Óbidos - Campus\",\"cod\":47,\"lat\":-1.89569,\"lon\":-55.5181,\"interfaces\":[{\"name\":\"e46001\",\"id\":1},{\"name\":\"e46231\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPATU_NAPT-MA\",\"cod\":48,\"lat\":-5.36326,\"lon\":-49.1216,\"interfaces\":[{\"name\":\"e46097\",\"id\":1},{\"name\":\"e46327\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - Escola de Música\",\"cod\":49,\"lat\":-1.45585,\"lon\":-48.4812,\"interfaces\":[{\"name\":\"e46096\",\"id\":1},{\"name\":\"e46326\",\"id\":2}]},{\"caption\":\"FADESP\",\"id\":\"Fundação Amparo e Desenvolvimento da Pesquisa (FADESP) - Belem\",\"cod\":50,\"lat\":-1.47385,\"lon\":-48.458,\"interfaces\":[{\"name\":\"e46095\",\"id\":1},{\"name\":\"e46325\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Conceição do Araguaia - Campus\",\"cod\":51,\"lat\":-8.2611,\"lon\":-49.2603,\"interfaces\":[{\"name\":\"e46101\",\"id\":1},{\"name\":\"e46331\",\"id\":2}]},{\"caption\":\"UFRA\",\"id\":\"UFRA - Tomé-Açu - Campus\",\"cod\":52,\"lat\":-2.40433,\"lon\":-48.1644,\"interfaces\":[{\"name\":\"e46100\",\"id\":1},{\"name\":\"e46330\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Breves - Campus\",\"cod\":53,\"lat\":-1.68476,\"lon\":-50.469,\"interfaces\":[{\"name\":\"e46099\",\"id\":1},{\"name\":\"e46329\",\"id\":2}]},{\"caption\":\"INPE\",\"id\":\"INPE - Belém\",\"cod\":54,\"lat\":-1.46109,\"lon\":-48.4418,\"interfaces\":[{\"name\":\"e46098\",\"id\":1},{\"name\":\"e46328\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA - Belém- Editora\",\"cod\":55,\"lat\":-1.43709,\"lon\":-48.4884,\"interfaces\":[{\"name\":\"e46103\",\"id\":1},{\"name\":\"e46333\",\"id\":2}]},{\"caption\":\"UNIFESSPA\",\"id\":\"UNIFESSPA - São Félix do Xingú\",\"cod\":56,\"lat\":-6.64524,\"lon\":-51.9968,\"interfaces\":[{\"name\":\"e46102\",\"id\":1},{\"name\":\"e46332\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - NPI\",\"cod\":57,\"lat\":-1.44629,\"lon\":-48.4473,\"interfaces\":[{\"name\":\"e46030\",\"id\":1},{\"name\":\"e46260\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - NMT\",\"cod\":58,\"lat\":-1.44117,\"lon\":-48.483,\"interfaces\":[{\"name\":\"e46029\",\"id\":1},{\"name\":\"e46259\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Abaetetuba Campus\",\"cod\":59,\"lat\":-1.70754,\"lon\":-48.8767,\"interfaces\":[{\"name\":\"e46113\",\"id\":1},{\"name\":\"e46343\",\"id\":2}]},{\"caption\":\"EBSERH\",\"id\":\" EBSERH_CHU-UFPA (HUJBB)\",\"cod\":60,\"lat\":-1.45752,\"lon\":-48.4647,\"interfaces\":[{\"name\":\"e46024\",\"id\":1},{\"name\":\"e46254\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - Campus Guamá\",\"cod\":61,\"lat\":-1.47491,\"lon\":-48.4561,\"interfaces\":[{\"name\":\"e46023\",\"id\":1},{\"name\":\"e46253\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - ETUFPA\",\"cod\":62,\"lat\":-1.43977,\"lon\":-48.4866,\"interfaces\":[{\"name\":\"e46022\",\"id\":1},{\"name\":\"e46252\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Braganca - Campus\",\"cod\":63,\"lat\":-1.05242,\"lon\":-46.7853,\"interfaces\":[{\"name\":\"e46021\",\"id\":1},{\"name\":\"e46251\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém -  Campus MUFPA\",\"cod\":64,\"lat\":-1.45018,\"lon\":-48.4831,\"interfaces\":[{\"name\":\"e46028\",\"id\":1},{\"name\":\"e46258\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - LADIC\",\"cod\":65,\"lat\":-1.45893,\"lon\":-48.4437,\"interfaces\":[{\"name\":\"e46027\",\"id\":1},{\"name\":\"e46257\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - ICS\",\"cod\":66,\"lat\":-1.44044,\"lon\":-48.483,\"interfaces\":[{\"name\":\"e46026\",\"id\":1},{\"name\":\"e46256\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - Campus ICA\",\"cod\":67,\"lat\":-1.45269,\"lon\":-48.4949,\"interfaces\":[{\"name\":\"e46025\",\"id\":1},{\"name\":\"e46255\",\"id\":2}]},{\"caption\":\"UNIFESSPA\",\"id\":\"UNIFESSPA - Marabá - Campus III\",\"cod\":68,\"lat\":-5.3654,\"lon\":-49.0253,\"interfaces\":[{\"name\":\"e46087\",\"id\":1},{\"name\":\"e46317\",\"id\":2}]},{\"caption\":\"UNIFESSPA\",\"id\":\"UNIFESSPA - Marabá - Campus I\",\"cod\":69,\"lat\":-5.35062,\"lon\":-49.0931,\"interfaces\":[{\"name\":\"e46088\",\"id\":1},{\"name\":\"e46318\",\"id\":2}]},{\"caption\":\"UFRA\",\"id\":\"UFRA - Castanhal - Campus\",\"cod\":70,\"lat\":-1.32054,\"lon\":-47.9592,\"interfaces\":[{\"name\":\"e46089\",\"id\":1},{\"name\":\"e46319\",\"id\":2}]},{\"caption\":\"IEC\",\"id\":\"Instituto Evandro Chagas (IEC) - Belém - Campus\",\"cod\":71,\"lat\":-1.44472,\"lon\":-48.4639,\"interfaces\":[{\"name\":\"e46090\",\"id\":1},{\"name\":\"e46320\",\"id\":2}]},{\"caption\":\"IEC\",\"id\":\"Instituto Evandro Chagas (IEC) - Ananindeua - Campus\",\"cod\":72,\"lat\":-1.3747,\"lon\":-48.3855,\"interfaces\":[{\"name\":\"e46091\",\"id\":1},{\"name\":\"e46321\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA -  Belém - Planetário\",\"cod\":73,\"lat\":-1.38397,\"lon\":-48.4383,\"interfaces\":[{\"name\":\"e46092\",\"id\":1},{\"name\":\"e46322\",\"id\":2}]},{\"caption\":\"UFOPA\",\"id\":\"UFOPA - Santarém - Campus Amazônia\",\"cod\":74,\"lat\":-2.42588,\"lon\":-54.7288,\"interfaces\":[{\"name\":\"e46093\",\"id\":1},{\"name\":\"e46323\",\"id\":2}]},{\"caption\":\"INPA\",\"id\":\"INPA - Santarém - NAPPA\",\"cod\":75,\"lat\":-2.42306,\"lon\":-54.7401,\"interfaces\":[{\"name\":\"e46094\",\"id\":1},{\"name\":\"e46324\",\"id\":2}]},{\"caption\":\"UFRA\",\"id\":\"UFRA - Belém - Campus Perimetral\",\"cod\":76,\"lat\":-1.45386,\"lon\":-48.445,\"interfaces\":[{\"name\":\"e46019\",\"id\":1},{\"name\":\"e46249\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Ananindeua - Campus\",\"cod\":77,\"lat\":-1.37243,\"lon\":-48.3864,\"interfaces\":[{\"name\":\"e46020\",\"id\":1},{\"name\":\"e46250\",\"id\":2}]},{\"caption\":\"Instituto Tecnológico Vale - Belém\",\"id\":\"Instituto Tecnológico Vale - Belém\",\"cod\":78,\"lat\":-1.44691,\"lon\":-48.4822,\"interfaces\":[{\"name\":\"e46105\",\"id\":1},{\"name\":\"e46335\",\"id\":2}]},{\"caption\":\"UFRA\",\"id\":\"UFRA - Igarapé Açú - Campus\",\"cod\":79,\"lat\":-1.12288,\"lon\":-47.6896,\"interfaces\":[{\"name\":\"e46011\",\"id\":1},{\"name\":\"e46241\",\"id\":2}]},{\"caption\":\"UFRA\",\"id\":\"UFRA - Capitão Poço - Campus\",\"cod\":80,\"lat\":-1.73554,\"lon\":-47.057,\"interfaces\":[{\"name\":\"e46012\",\"id\":1},{\"name\":\"e46242\",\"id\":2}]},{\"caption\":\"UFRA\",\"id\":\"UFRA - Capanema - Campus\",\"cod\":81,\"lat\":-1.19412,\"lon\":-47.1789,\"interfaces\":[{\"name\":\"e46013\",\"id\":1},{\"name\":\"e46243\",\"id\":2}]},{\"caption\":\"UFRA\",\"id\":\"UFRA - Parauapebas - Campus\",\"cod\":82,\"lat\":-6.08581,\"lon\":-49.8398,\"interfaces\":[{\"name\":\"e46014\",\"id\":1},{\"name\":\"e46244\",\"id\":2}]},{\"caption\":\"UFRA\",\"id\":\"UFRA - Paragominas - Campus\",\"cod\":83,\"lat\":-2.98989,\"lon\":-47.4088,\"interfaces\":[{\"name\":\"e46015\",\"id\":1},{\"name\":\"e46245\",\"id\":2}]},{\"caption\":\"UNIFESSPA\",\"id\":\"UNIFESSPA - Rondon do Pará - Campus\",\"cod\":84,\"lat\":-4.77451,\"lon\":-48.0611,\"interfaces\":[{\"name\":\"e46016\",\"id\":1},{\"name\":\"e46246\",\"id\":2}]},{\"caption\":\"UNIFESSPA\",\"id\":\"UNIFESSPA - Xinguara\",\"cod\":85,\"lat\":-7.10352,\"lon\":-49.9487,\"interfaces\":[{\"name\":\"e46017\",\"id\":1},{\"name\":\"e46247\",\"id\":2}]},{\"caption\":\"IFPA\",\"id\":\"IFPA - Óbidos - Campus\",\"cod\":86,\"lat\":-1.8819,\"lon\":-55.5176,\"interfaces\":[{\"name\":\"e46018\",\"id\":1},{\"name\":\"e46248\",\"id\":2}]},{\"caption\":\"UFOPA\",\"id\":\"UFOPA - Alenquer - Campus\",\"cod\":87,\"lat\":-1.94635,\"lon\":-54.7214,\"interfaces\":[{\"name\":\"e46112\",\"id\":1},{\"name\":\"e46342\",\"id\":2}]},{\"caption\":\"UFOPA\",\"id\":\"UFOPA - Oriximiná - Campus\",\"cod\":88,\"lat\":-1.74787,\"lon\":-55.8507,\"interfaces\":[{\"name\":\"e46002\",\"id\":1},{\"name\":\"e46232\",\"id\":2}]},{\"caption\":\"MPEG\",\"id\":\"Museu Paraense Emílio Goeldi (MPEG) - Belém - Parque Zoobotânico\",\"cod\":89,\"lat\":-1.45214,\"lon\":-48.4765,\"interfaces\":[{\"name\":\"e46051\",\"id\":1},{\"name\":\"e46281\",\"id\":2}]},{\"caption\":\"MPEG\",\"id\":\"Museu Paraense Emílio Goeldi (MPEG) - Belém - Campus de Pesquisa\",\"cod\":90,\"lat\":-1.45007,\"lon\":-48.4464,\"interfaces\":[{\"name\":\"e46050\",\"id\":1},{\"name\":\"e46280\",\"id\":2}]},{\"caption\":\"CENSIPAM\",\"id\":\"CENSIPAM\",\"cod\":91,\"lat\":-1.4098,\"lon\":-48.4625,\"interfaces\":[{\"name\":\"e46046\",\"id\":1},{\"name\":\"e46276\",\"id\":2}]},{\"caption\":\"UNAMA\",\"id\":\"UNAMA - Belém - Quintino\",\"cod\":92,\"lat\":-1.45525,\"lon\":-48.4859,\"interfaces\":[{\"name\":\"e46045\",\"id\":1},{\"name\":\"e46275\",\"id\":2}]},{\"caption\":\"HMUE\",\"id\":\"Hospital Metropolitano de Urgência e Emergência (HMUE) - Ananindeua\",\"cod\":93,\"lat\":-1.39282,\"lon\":-48.4196,\"interfaces\":[{\"name\":\"e46049\",\"id\":1},{\"name\":\"e46279\",\"id\":2}]},{\"caption\":\"SECTET\",\"id\":\"Secretaria de Estado de Ciência, Tecnologia e Educação Profissional e Tecnológica (SECTET) - Belém\",\"cod\":94,\"lat\":-1.45464,\"lon\":-48.4934,\"interfaces\":[{\"name\":\"e46047\",\"id\":1},{\"name\":\"e46048\",\"id\":2},{\"name\":\"e46278\",\"id\":3},{\"name\":\"e46277\",\"id\":4}]},{\"caption\":\"UNAMA\",\"id\":\"Universidade da Amazônia (UNAMA) - Belém - Alcindo Cacela\",\"cod\":95,\"lat\":-1.43898,\"lon\":-48.4786,\"interfaces\":[{\"name\":\"e46042\",\"id\":1},{\"name\":\"e46272\",\"id\":2}]},{\"caption\":\"FUNTELPA\",\"id\":\"Fundação Paraense de Radiodifusão (FUNTELPA) - Belém\",\"cod\":96,\"lat\":-1.4426,\"lon\":-48.4631,\"interfaces\":[{\"name\":\"e46041\",\"id\":1},{\"name\":\"e46271\",\"id\":2}]},{\"caption\":\"UNAMA\",\"id\":\"UNAMA - Belém  - Senador Lemos\",\"cod\":97,\"lat\":-1.42005,\"lon\":-48.4809,\"interfaces\":[{\"name\":\"e46044\",\"id\":1},{\"name\":\"e46274\",\"id\":2}]},{\"caption\":\"UNAMA\",\"id\":\"Universidade da Amazônia (UNAMA) - Ananindeua - BR 316\",\"cod\":98,\"lat\":-1.38906,\"lon\":-48.4145,\"interfaces\":[{\"name\":\"e46043\",\"id\":1},{\"name\":\"e46273\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA - Belém - Campus Enfermagem\",\"cod\":99,\"lat\":-1.45778,\"lon\":-48.4688,\"interfaces\":[{\"name\":\"e46033\",\"id\":1},{\"name\":\"e46263\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA - Belém - Campus CCBS\",\"cod\":100,\"lat\":-1.42842,\"lon\":-48.4546,\"interfaces\":[{\"name\":\"e46034\",\"id\":1},{\"name\":\"e46264\",\"id\":2}]},{\"caption\":\"UFPA\",\"id\":\"UFPA - Belém - Prointer\",\"cod\":101,\"lat\":-1.45368,\"lon\":-48.4739,\"interfaces\":[{\"name\":\"e46031\",\"id\":1},{\"name\":\"e46261\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA - Belem - Campus Reitoria\",\"cod\":102,\"lat\":-1.43167,\"lon\":-48.4889,\"interfaces\":[{\"name\":\"e46032\",\"id\":1},{\"name\":\"e46262\",\"id\":2}]},{\"caption\":\"CESUPA\",\"id\":\"CESUPA - Belém - Campus Almirante Barroso\",\"cod\":103,\"lat\":-1.4191,\"lon\":-48.4477,\"interfaces\":[{\"name\":\"e46037\",\"id\":1},{\"name\":\"e46267\",\"id\":2}]},{\"caption\":\"CESUPA\",\"id\":\"CESUPA - Belém - Campus J Malcher\",\"cod\":104,\"lat\":-1.44828,\"lon\":-48.4761,\"interfaces\":[{\"name\":\"e46038\",\"id\":1},{\"name\":\"e46268\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA - Belém - Ed Fisica\",\"cod\":105,\"lat\":-1.44131,\"lon\":-48.459,\"interfaces\":[{\"name\":\"e46035\",\"id\":1},{\"name\":\"e46265\",\"id\":2}]},{\"caption\":\"UEPA\",\"id\":\"UEPA - Belém - Campus CCNT\",\"cod\":106,\"lat\":-1.43455,\"lon\":-48.4519,\"interfaces\":[{\"name\":\"e46036\",\"id\":1},{\"name\":\"e46266\",\"id\":2}]},{\"caption\":\"CESUPA\",\"id\":\"CESUPA - Belém - Campus Nazaré\",\"cod\":107,\"lat\":-1.45256,\"lon\":-48.4872,\"interfaces\":[{\"name\":\"e46039\",\"id\":1},{\"name\":\"e46269\",\"id\":2}]},{\"caption\":\"CESUPA\",\"id\":\"CESUPA - Belém - Campus Oliveira Belo\",\"cod\":108,\"lat\":-1.44092,\"lon\":-48.4802,\"interfaces\":[{\"name\":\"e46040\",\"id\":1},{\"name\":\"e46270\",\"id\":2}]}]},\"pb\":{\"clientes\":[{\"caption\":\"UFCG\",\"id\":\"UFCG – Sousa(BR)\",\"cod\":1,\"lat\":-6.78417,\"lon\":-38.2589,\"interfaces\":[{\"name\":\"e17901\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Guarabira\",\"cod\":2,\"lat\":-6.85317,\"lon\":-35.4784,\"interfaces\":[{\"name\":\"e17908\",\"id\":1}]},{\"caption\":\"UFPB\",\"id\":\"UFPB – Rio Tinto\",\"cod\":3,\"lat\":-6.807,\"lon\":-35.0736,\"interfaces\":[{\"name\":\"e17907\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Sousa\",\"cod\":4,\"lat\":-6.78146,\"lon\":-38.2423,\"interfaces\":[{\"name\":\"e17895\",\"id\":1}]},{\"caption\":\"UFCG\",\"id\":\"UFCG – Pombal\",\"cod\":5,\"lat\":-6.78335,\"lon\":-37.8017,\"interfaces\":[{\"name\":\"e17899\",\"id\":1}]},{\"caption\":\"UFPB\",\"id\":\"UFPB – Bananeiras\",\"cod\":6,\"lat\":-6.75165,\"lon\":-35.6432,\"interfaces\":[{\"name\":\"e17905\",\"id\":1}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPA\",\"cod\":7,\"lat\":-7.22595,\"lon\":-35.9039,\"interfaces\":[{\"name\":\"e17816\",\"id\":1},{\"name\":\"e17815\",\"id\":2}]},{\"caption\":\"FAPESQ\",\"id\":\"Fundação de Apoio à Pesquisa do Estado da Paraíba - FAPESQ-PB\",\"cod\":8,\"lat\":-7.20475,\"lon\":-35.9189,\"interfaces\":[{\"name\":\"e17817\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Catolé do Rocha\",\"cod\":9,\"lat\":-6.33266,\"lon\":-37.7382,\"interfaces\":[{\"name\":\"e17849\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Cajazeiras\",\"cod\":10,\"lat\":-6.88979,\"lon\":-38.5447,\"interfaces\":[{\"name\":\"e17890\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Itabaiana\",\"cod\":11,\"lat\":-7.30465,\"lon\":-35.346,\"interfaces\":[{\"name\":\"e17851\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUJB-UFCG\",\"cod\":12,\"lat\":-6.88516,\"lon\":-38.5547,\"interfaces\":[{\"name\":\"e17859\",\"id\":1}]},{\"caption\":\"UFCG\",\"id\":\"UFCG – CCBS\",\"cod\":13,\"lat\":-7.21082,\"lon\":-35.9183,\"interfaces\":[{\"name\":\"e17832\",\"id\":1},{\"name\":\"e17833\",\"id\":2}]},{\"caption\":\"UFCG\",\"id\":\"UFCG – Cuité\",\"cod\":14,\"lat\":-6.48764,\"lon\":-36.1594,\"interfaces\":[{\"name\":\"e17857\",\"id\":1}]},{\"caption\":\"UFCG\",\"id\":\"UFCG – Campina Grande\",\"cod\":15,\"lat\":-7.21549,\"lon\":-35.9075,\"interfaces\":[{\"name\":\"e17888\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUAC-UFCG\",\"cod\":16,\"lat\":-7.22789,\"lon\":-35.8925,\"interfaces\":[{\"name\":\"e17835\",\"id\":1},{\"name\":\"e17836\",\"id\":2}]},{\"caption\":\"UEPB\",\"id\":\"UEPB – Casa Brasil\",\"cod\":17,\"lat\":-7.21951,\"lon\":-35.8854,\"interfaces\":[{\"name\":\"e17837\",\"id\":1},{\"name\":\"e17838\",\"id\":2}]},{\"caption\":\"UEPB\",\"id\":\"UEPB – Direito\",\"cod\":18,\"lat\":-7.22221,\"lon\":-35.8783,\"interfaces\":[{\"name\":\"e17841\",\"id\":1},{\"name\":\"e17842\",\"id\":2}]},{\"caption\":\"IFPB\",\"id\":\"IFPB Esperança\",\"cod\":19,\"lat\":-7.03624,\"lon\":-35.8732,\"interfaces\":[{\"name\":\"e17919\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB Soledade\",\"cod\":20,\"lat\":-7.05793,\"lon\":-36.3652,\"interfaces\":[{\"name\":\"e17920\",\"id\":1}]},{\"caption\":\"UFPB\",\"id\":\"UFPB - São João do Cariri\",\"cod\":21,\"lat\":-7.3825,\"lon\":-36.5281,\"interfaces\":[{\"name\":\"e17873\",\"id\":1}]},{\"caption\":\"UFCG\",\"id\":\"UFCG – Patos\",\"cod\":22,\"lat\":-7.05523,\"lon\":-37.2751,\"interfaces\":[{\"name\":\"e17861\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HULW-UFPB\",\"cod\":23,\"lat\":-7.13537,\"lon\":-34.8405,\"interfaces\":[{\"name\":\"e17914\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB Santa Luzia\",\"cod\":24,\"lat\":-6.87362,\"lon\":-36.9199,\"interfaces\":[{\"name\":\"e17918\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Cabedelo Avançado\",\"cod\":25,\"lat\":-6.9727,\"lon\":-34.833,\"interfaces\":[{\"name\":\"e17912\",\"id\":1}]},{\"caption\":\"UFPB\",\"id\":\"UFPB – Areia\",\"cod\":26,\"lat\":-6.97279,\"lon\":-35.7164,\"interfaces\":[{\"name\":\"e17904\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Monteiro\",\"cod\":27,\"lat\":-7.90511,\"lon\":-37.1202,\"interfaces\":[{\"name\":\"e17892\",\"id\":1}]},{\"caption\":\"METRO\",\"id\":\"METRO-UFCG-Virtus\",\"cod\":28,\"lat\":-7.21633,\"lon\":-35.9158,\"interfaces\":[{\"name\":\"e17872\",\"id\":1}]},{\"caption\":\"UFPB\",\"id\":\"UFPB – João Pessoa\",\"cod\":29,\"lat\":-7.14233,\"lon\":-34.8508,\"interfaces\":[{\"name\":\"e17909\",\"id\":1}]},{\"caption\":\"UEPB\",\"id\":\"UEPB – Sede\",\"cod\":30,\"lat\":-7.20633,\"lon\":-35.9143,\"interfaces\":[{\"name\":\"e17845\",\"id\":1},{\"name\":\"e17844\",\"id\":2}]},{\"caption\":\"PAQTC\",\"id\":\"PAQTC-PB – CITTA\",\"cod\":31,\"lat\":-7.21376,\"lon\":-35.9223,\"interfaces\":[{\"name\":\"e17856\",\"id\":1}]},{\"caption\":\"INSA\",\"id\":\" Instituto Nacional do Semiárido - INSA - Sede\",\"cod\":32,\"lat\":-7.25261,\"lon\":-35.9451,\"interfaces\":[{\"name\":\"e17823\",\"id\":1},{\"name\":\"e17822\",\"id\":2}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Campina Grande\",\"cod\":33,\"lat\":-7.23957,\"lon\":-35.9159,\"interfaces\":[{\"name\":\"e17820\",\"id\":1},{\"name\":\"e17819\",\"id\":2}]},{\"caption\":\"PAQTC\",\"id\":\"Fundação Parque Tecnológico da Paraíba - PAQTC-PB \",\"cod\":34,\"lat\":-7.20495,\"lon\":-35.9199,\"interfaces\":[{\"name\":\"e17829\",\"id\":1},{\"name\":\"e17830\",\"id\":2}]},{\"caption\":\"INSA\",\"id\":\"INSA – Fazenda\",\"cod\":35,\"lat\":-7.21184,\"lon\":-35.9125,\"interfaces\":[{\"name\":\"e17825\",\"id\":1},{\"name\":\"e17824\",\"id\":2}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Princesa Isabel\",\"cod\":36,\"lat\":-7.75805,\"lon\":-38.0163,\"interfaces\":[{\"name\":\"e17894\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Picuí\",\"cod\":37,\"lat\":-6.50871,\"lon\":-36.3615,\"interfaces\":[{\"name\":\"e17893\",\"id\":1}]},{\"caption\":\"UFPB\",\"id\":\"UFPB – Mamanguape\",\"cod\":38,\"lat\":-6.83559,\"lon\":-35.125,\"interfaces\":[{\"name\":\"e17906\",\"id\":1}]},{\"caption\":\"IFPB\",\"id\":\"IFPB – Patos\",\"cod\":39,\"lat\":-7.03133,\"lon\":-37.2797,\"interfaces\":[{\"name\":\"e17915\",\"id\":1}]},{\"caption\":\"UFCG\",\"id\":\"UFCG – Cajazeiras\",\"cod\":40,\"lat\":-6.87123,\"lon\":-38.5593,\"interfaces\":[{\"name\":\"e17897\",\"id\":1}]},{\"caption\":\"UFCG\",\"id\":\"UFCG – Sumé\",\"cod\":41,\"lat\":-7.66085,\"lon\":-36.8963,\"interfaces\":[{\"name\":\"e17864\",\"id\":1}]},{\"caption\":\"UFCG\",\"id\":\"UFCG – Sousa(centro)\",\"cod\":42,\"lat\":-6.76294,\"lon\":-38.2281,\"interfaces\":[{\"name\":\"e17902\",\"id\":1}]}]},\"pe\":{\"clientes\":[{\"caption\":\"UFRPE\",\"id\":\"UFRPE-Itamaracá\",\"cod\":1,\"lat\":-7.73306,\"lon\":-34.8259,\"interfaces\":[{\"name\":\"e77085\",\"id\":1},{\"name\":\"e77600\",\"id\":2},{\"name\":\"e78110\",\"id\":3},{\"name\":\"e78878\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSertão - Pernambucano - Serra Talhada\",\"cod\":2,\"lat\":-7.97254,\"lon\":-38.2244,\"interfaces\":[{\"name\":\"e77087\",\"id\":1},{\"name\":\"e77602\",\"id\":2},{\"name\":\"e78112\",\"id\":3},{\"name\":\"e78880\",\"id\":4}]},{\"caption\":\"UFRPE\",\"id\":\"UFRPE-Cabo de Stº Agostinho\",\"cod\":3,\"lat\":-8.29405,\"lon\":-35.0563,\"interfaces\":[{\"name\":\"e77213\",\"id\":1},{\"name\":\"e77728\",\"id\":2},{\"name\":\"e78238\",\"id\":3},{\"name\":\"e79006\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE-Palmares\",\"cod\":4,\"lat\":-8.66484,\"lon\":-35.5691,\"interfaces\":[{\"name\":\"e77088\",\"id\":1},{\"name\":\"e77603\",\"id\":2},{\"name\":\"e78113\",\"id\":3},{\"name\":\"e78881\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Afogados\",\"cod\":5,\"lat\":-7.74786,\"lon\":-37.6348,\"interfaces\":[{\"name\":\"e77222\",\"id\":1},{\"name\":\"e77737\",\"id\":2},{\"name\":\"e78247\",\"id\":3},{\"name\":\"e79015\",\"id\":4}]},{\"caption\":\"UFRPE\",\"id\":\"UFRPE - Parnamirim\",\"cod\":6,\"lat\":-8.09056,\"lon\":-39.5742,\"interfaces\":[{\"name\":\"e77205\",\"id\":1},{\"name\":\"e77720\",\"id\":2},{\"name\":\"e78230\",\"id\":3},{\"name\":\"e78998\",\"id\":4}]},{\"caption\":\"UFRPE\",\"id\":\"UFRPE - Tapacurá\",\"cod\":7,\"lat\":-8.04058,\"lon\":-35.1964,\"interfaces\":[{\"name\":\"e77210\",\"id\":1},{\"name\":\"e77725\",\"id\":2},{\"name\":\"e78235\",\"id\":3},{\"name\":\"e79003\",\"id\":4}]},{\"caption\":\"IPEM\",\"id\":\"IPEM - Instituto de Pesos e Medidas de Pernambuco\",\"cod\":8,\"lat\":-8.05717,\"lon\":-34.9541,\"interfaces\":[{\"name\":\"e77083\",\"id\":1},{\"name\":\"e77598\",\"id\":2},{\"name\":\"e78108\",\"id\":3},{\"name\":\"e78876\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Barreiros\",\"cod\":9,\"lat\":-8.82267,\"lon\":-35.1962,\"interfaces\":[{\"name\":\"e77216\",\"id\":1},{\"name\":\"e77731\",\"id\":2},{\"name\":\"e78241\",\"id\":3},{\"name\":\"e79009\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSertão-PE - Floresta\",\"cod\":10,\"lat\":-8.60283,\"lon\":-38.5816,\"interfaces\":[{\"name\":\"e77219\",\"id\":1},{\"name\":\"e77734\",\"id\":2},{\"name\":\"e78244\",\"id\":3},{\"name\":\"e79012\",\"id\":4}]},{\"caption\":\"UFPE\",\"id\":\"UFPE-COVEST\",\"cod\":11,\"lat\":-8.0499,\"lon\":-34.954,\"interfaces\":[{\"name\":\"e77311\",\"id\":1}]},{\"caption\":\"PMJ\",\"id\":\"PMJ Prefeitura Municipal de Juazeiro\",\"cod\":12,\"lat\":-9.41138,\"lon\":-40.5053,\"interfaces\":[{\"name\":\"e77328\",\"id\":1},{\"name\":\"e77836\",\"id\":2},{\"name\":\"e78346\",\"id\":3},{\"name\":\"e79114\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HU-UNIVASF\",\"cod\":13,\"lat\":-9.39253,\"lon\":-40.4965,\"interfaces\":[{\"name\":\"e77324\",\"id\":1},{\"name\":\"e77832\",\"id\":2},{\"name\":\"e78342\",\"id\":3},{\"name\":\"e79110\",\"id\":4}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPATSA_Esc\",\"cod\":14,\"lat\":-9.38963,\"lon\":-40.494,\"interfaces\":[{\"name\":\"e77325\",\"id\":1},{\"name\":\"e77833\",\"id\":2},{\"name\":\"e78343\",\"id\":3},{\"name\":\"e79111\",\"id\":4}]},{\"caption\":\"UFPE\",\"id\":\"UFPE-SEDE\",\"cod\":15,\"lat\":-8.05173,\"lon\":-34.9507,\"interfaces\":[{\"name\":\"e77302\",\"id\":1}]},{\"caption\":\"UFPE\",\"id\":\"UFPE-Diretoria de Extensão Cultural\",\"cod\":16,\"lat\":-8.06015,\"lon\":-34.9021,\"interfaces\":[{\"name\":\"e77307\",\"id\":1},{\"name\":\"e77819\",\"id\":2},{\"name\":\"e78329\",\"id\":3},{\"name\":\"e79097\",\"id\":4}]},{\"caption\":\"FCAP\",\"id\":\"FCAP - Faculdade de Ciências da Administração de Pernambuco\",\"cod\":17,\"lat\":-8.06087,\"lon\":-34.9037,\"interfaces\":[{\"name\":\"e77298\",\"id\":1},{\"name\":\"e77813\",\"id\":2},{\"name\":\"e78323\",\"id\":3},{\"name\":\"e79091\",\"id\":4}]},{\"caption\":\"UFPE\",\"id\":\"UFPE-CCJ-DIREITO\",\"cod\":18,\"lat\":-8.0582,\"lon\":-34.8822,\"interfaces\":[{\"name\":\"e77300\",\"id\":1},{\"name\":\"e77815\",\"id\":2},{\"name\":\"e78325\",\"id\":3},{\"name\":\"e79093\",\"id\":4}]},{\"caption\":\"UFPE\",\"id\":\"UFPE- TVU (TV Universitaria)\",\"cod\":19,\"lat\":-8.05106,\"lon\":-34.8747,\"interfaces\":[{\"name\":\"e77305\",\"id\":1},{\"name\":\"e77818\",\"id\":2},{\"name\":\"e78328\",\"id\":3},{\"name\":\"e79096\",\"id\":4}]},{\"caption\":\"UPE\",\"id\":\"UPE-POLI (Escola Politécnica de Pernambuco)\",\"cod\":20,\"lat\":-8.05944,\"lon\":-34.9022,\"interfaces\":[{\"name\":\"e77296\",\"id\":1},{\"name\":\"e77811\",\"id\":2},{\"name\":\"e78321\",\"id\":3},{\"name\":\"e79089\",\"id\":4}]},{\"caption\":\"APAC\",\"id\":\"APAC - Agência Pernambucana de Águas e Climas\",\"cod\":21,\"lat\":-8.04472,\"lon\":-34.8753,\"interfaces\":[{\"name\":\"e77284\",\"id\":1},{\"name\":\"e77799\",\"id\":2},{\"name\":\"e78309\",\"id\":3},{\"name\":\"e79077\",\"id\":4}]},{\"caption\":\"UPE\",\"id\":\"UPE-REITORIA\",\"cod\":22,\"lat\":-8.04408,\"lon\":-34.8861,\"interfaces\":[{\"name\":\"e77275\",\"id\":1},{\"name\":\"e77790\",\"id\":2},{\"name\":\"e78300\",\"id\":3},{\"name\":\"e79068\",\"id\":4}]},{\"caption\":\"PARQTEL\",\"id\":\"PARQTEL - Parque Tecnológico de Eletroeletrônicos e Tecnologias\",\"cod\":23,\"lat\":-8.06647,\"lon\":-34.9853,\"interfaces\":[{\"name\":\"e77292\",\"id\":1},{\"name\":\"e77807\",\"id\":2},{\"name\":\"e78317\",\"id\":3},{\"name\":\"e79085\",\"id\":4}]},{\"caption\":\"ESPACO\",\"id\":\"ESPACO CIENCIA\",\"cod\":24,\"lat\":-8.03569,\"lon\":-34.8705,\"interfaces\":[{\"name\":\"e77289\",\"id\":1},{\"name\":\"e77804\",\"id\":2},{\"name\":\"e78314\",\"id\":3},{\"name\":\"e79082\",\"id\":4}]},{\"caption\":\"INVASF\",\"id\":\"INVASF Incubadora de Empresas de Base Tecnológica do Vale do São Francisco\",\"cod\":25,\"lat\":-9.39622,\"lon\":-40.4786,\"interfaces\":[{\"name\":\"e77318\",\"id\":1},{\"name\":\"e77826\",\"id\":2},{\"name\":\"e78336\",\"id\":3},{\"name\":\"e79104\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH-HC-UFPE\",\"cod\":26,\"lat\":-8.04757,\"lon\":-34.9463,\"interfaces\":[{\"name\":\"e77339\",\"id\":1},{\"name\":\"e77847\",\"id\":2},{\"name\":\"e78357\",\"id\":3},{\"name\":\"e79125\",\"id\":4}]},{\"caption\":\"UFRPE\",\"id\":\"UFRPE-BOV-GARANHUNS\",\"cod\":27,\"lat\":-8.91048,\"lon\":-36.4942,\"interfaces\":[{\"name\":\"e77338\",\"id\":1},{\"name\":\"e77846\",\"id\":2},{\"name\":\"e78356\",\"id\":3},{\"name\":\"e79124\",\"id\":4}]},{\"caption\":\"POA\",\"id\":\"POA Paulo Afonso\",\"cod\":28,\"lat\":-9.40027,\"lon\":-38.2176,\"interfaces\":[{\"name\":\"e77341\",\"id\":1},{\"name\":\"e77849\",\"id\":2},{\"name\":\"e78359\",\"id\":3},{\"name\":\"e79127\",\"id\":4}]},{\"caption\":\"PMJSS\",\"id\":\"PMJSS Secretaria de Saúde de Juazeiro\",\"cod\":29,\"lat\":-9.41138,\"lon\":-40.5053,\"interfaces\":[{\"name\":\"e77329\",\"id\":1},{\"name\":\"e77837\",\"id\":2},{\"name\":\"e78347\",\"id\":3},{\"name\":\"e79115\",\"id\":4}]},{\"caption\":\"UNICAP\",\"id\":\"UNICAP - Universidade Católica de Pernambuco\",\"cod\":30,\"lat\":-8.0549,\"lon\":-34.8878,\"interfaces\":[{\"name\":\"e77274\",\"id\":1},{\"name\":\"e77789\",\"id\":2},{\"name\":\"e78299\",\"id\":3},{\"name\":\"e79067\",\"id\":4}]},{\"caption\":\"CESAR\",\"id\":\"CESAR - Centro de Estudos e Sistemas Avançados do Recife\",\"cod\":31,\"lat\":-8.05825,\"lon\":-34.872,\"interfaces\":[{\"name\":\"e77270\",\"id\":1},{\"name\":\"e77785\",\"id\":2},{\"name\":\"e78295\",\"id\":3},{\"name\":\"e79063\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSertão - Pernambucano - Santa Maria da Boa Vista\",\"cod\":32,\"lat\":-8.78847,\"lon\":-39.8766,\"interfaces\":[{\"name\":\"e77267\",\"id\":1},{\"name\":\"e77782\",\"id\":2},{\"name\":\"e78292\",\"id\":3},{\"name\":\"e79060\",\"id\":4}]},{\"caption\":\"UPE\",\"id\":\"UPE- Centro Integrado de Saúde Amaury de Medeiros (CISAM)\",\"cod\":33,\"lat\":-8.03777,\"lon\":-34.8882,\"interfaces\":[{\"name\":\"e77263\",\"id\":1},{\"name\":\"e77778\",\"id\":2},{\"name\":\"e78288\",\"id\":3},{\"name\":\"e79056\",\"id\":4}]},{\"caption\":\"UFRPE\",\"id\":\"UFRPE-SEDE\",\"cod\":34,\"lat\":-8.01607,\"lon\":-34.9495,\"interfaces\":[{\"name\":\"e77260\",\"id\":1},{\"name\":\"e77775\",\"id\":2},{\"name\":\"e78285\",\"id\":3},{\"name\":\"e79053\",\"id\":4}]},{\"caption\":\"UPE\",\"id\":\"UPE-GARANHUNS\",\"cod\":35,\"lat\":-8.88285,\"lon\":-36.4969,\"interfaces\":[{\"name\":\"e77250\",\"id\":1},{\"name\":\"e77765\",\"id\":2},{\"name\":\"e78275\",\"id\":3},{\"name\":\"e79043\",\"id\":4}]},{\"caption\":\"ITEP\",\"id\":\"Instituto de Tecnologia de Pernambuco (ITEP) - Garanhuns\",\"cod\":36,\"lat\":-8.9107,\"lon\":-36.4957,\"interfaces\":[{\"name\":\"e77251\",\"id\":1},{\"name\":\"e77766\",\"id\":2},{\"name\":\"e78276\",\"id\":3},{\"name\":\"e79044\",\"id\":4}]},{\"caption\":\"ASCES\",\"id\":\"ASCES-UNITA\",\"cod\":37,\"lat\":-8.26798,\"lon\":-35.9644,\"interfaces\":[{\"name\":\"e77257\",\"id\":1},{\"name\":\"e77772\",\"id\":2},{\"name\":\"e78282\",\"id\":3},{\"name\":\"e79050\",\"id\":4}]},{\"caption\":\"SECTI\",\"id\":\"SECTI-ARMAZEM-DA-CRIATIVIDADE\",\"cod\":38,\"lat\":-8.23965,\"lon\":-35.9805,\"interfaces\":[{\"name\":\"e77244\",\"id\":1},{\"name\":\"e77759\",\"id\":2},{\"name\":\"e78269\",\"id\":3},{\"name\":\"e79037\",\"id\":4}]},{\"caption\":\"UPE\",\"id\":\"UPE-CARUARU\",\"cod\":39,\"lat\":-8.23915,\"lon\":-35.9817,\"interfaces\":[{\"name\":\"e77246\",\"id\":1},{\"name\":\"e77761\",\"id\":2},{\"name\":\"e78271\",\"id\":3},{\"name\":\"e79039\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Garanhuns\",\"cod\":40,\"lat\":-8.87676,\"lon\":-36.4635,\"interfaces\":[{\"name\":\"e77254\",\"id\":1},{\"name\":\"e77769\",\"id\":2},{\"name\":\"e78279\",\"id\":3},{\"name\":\"e79047\",\"id\":4}]},{\"caption\":\"UFAPE\",\"id\":\"UFAPE-GARANHUNS\",\"cod\":41,\"lat\":-8.90674,\"lon\":-36.4943,\"interfaces\":[{\"name\":\"e77247\",\"id\":1},{\"name\":\"e77762\",\"id\":2},{\"name\":\"e78272\",\"id\":3},{\"name\":\"e79040\",\"id\":4}]},{\"caption\":\"ITEP\",\"id\":\"Instituto de Tecnologia de Pernambuco (ITEP) - Caruaru\",\"cod\":42,\"lat\":-8.28885,\"lon\":-35.9838,\"interfaces\":[{\"name\":\"e77242\",\"id\":1},{\"name\":\"e77757\",\"id\":2},{\"name\":\"e78267\",\"id\":3},{\"name\":\"e79035\",\"id\":4}]},{\"caption\":\"UFPE\",\"id\":\"UFPE - Caruaru\",\"cod\":43,\"lat\":-8.22568,\"lon\":-35.9815,\"interfaces\":[{\"name\":\"e77240\",\"id\":1},{\"name\":\"e77755\",\"id\":2},{\"name\":\"e78265\",\"id\":3},{\"name\":\"e79033\",\"id\":4}]},{\"caption\":\"POA\",\"id\":\"POA Petrolina\",\"cod\":44,\"lat\":-9.40395,\"lon\":-40.5028,\"interfaces\":[{\"name\":\"e77337\",\"id\":1},{\"name\":\"e77845\",\"id\":2},{\"name\":\"e78355\",\"id\":3},{\"name\":\"e79123\",\"id\":4}]},{\"caption\":\"POA\",\"id\":\"POA Salgueiro\",\"cod\":45,\"lat\":-8.07562,\"lon\":-39.1286,\"interfaces\":[{\"name\":\"e77336\",\"id\":1},{\"name\":\"e77844\",\"id\":2},{\"name\":\"e78354\",\"id\":3},{\"name\":\"e79122\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Caruaru\",\"cod\":46,\"lat\":-8.28696,\"lon\":-36.0199,\"interfaces\":[{\"name\":\"e77156\",\"id\":1},{\"name\":\"e77671\",\"id\":2},{\"name\":\"e78181\",\"id\":3},{\"name\":\"e78949\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Ipojuca\",\"cod\":47,\"lat\":-8.38518,\"lon\":-35.042,\"interfaces\":[{\"name\":\"e77158\",\"id\":1},{\"name\":\"e77673\",\"id\":2},{\"name\":\"e78183\",\"id\":3},{\"name\":\"e78951\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Jaboatão\",\"cod\":48,\"lat\":-8.11268,\"lon\":-35.021,\"interfaces\":[{\"name\":\"e77160\",\"id\":1},{\"name\":\"e77675\",\"id\":2},{\"name\":\"e78185\",\"id\":3},{\"name\":\"e78953\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Pesqueira\",\"cod\":49,\"lat\":-8.36488,\"lon\":-36.682,\"interfaces\":[{\"name\":\"e77221\",\"id\":1},{\"name\":\"e77736\",\"id\":2},{\"name\":\"e78246\",\"id\":3},{\"name\":\"e79014\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Vitória de Santo Antão\",\"cod\":50,\"lat\":-8.13091,\"lon\":-35.293,\"interfaces\":[{\"name\":\"e77162\",\"id\":1},{\"name\":\"e77677\",\"id\":2},{\"name\":\"e78187\",\"id\":3},{\"name\":\"e78955\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Recife - SEDE\",\"cod\":51,\"lat\":-8.05948,\"lon\":-34.9506,\"interfaces\":[{\"name\":\"e77135\",\"id\":1},{\"name\":\"e77650\",\"id\":2},{\"name\":\"e78160\",\"id\":3},{\"name\":\"e78928\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSertão- Pernambucano - Campus Salgueiro\",\"cod\":52,\"lat\":-8.0764,\"lon\":-39.1192,\"interfaces\":[{\"name\":\"e77164\",\"id\":1},{\"name\":\"e77679\",\"id\":2},{\"name\":\"e78189\",\"id\":3},{\"name\":\"e78957\",\"id\":4}]},{\"caption\":\"UFPE\",\"id\":\"UFPE - Vitoria\",\"cod\":53,\"lat\":-8.1174,\"lon\":-35.2994,\"interfaces\":[{\"name\":\"e77166\",\"id\":1},{\"name\":\"e77681\",\"id\":2},{\"name\":\"e78191\",\"id\":3},{\"name\":\"e78959\",\"id\":4}]},{\"caption\":\"SES\",\"id\":\"Secretaria de Saude - SES\",\"cod\":54,\"lat\":-8.06526,\"lon\":-34.9228,\"interfaces\":[{\"name\":\"e77330\",\"id\":1},{\"name\":\"e77838\",\"id\":2},{\"name\":\"e78348\",\"id\":3},{\"name\":\"e79116\",\"id\":4}]},{\"caption\":\"POA\",\"id\":\"POA Caruaru\",\"cod\":55,\"lat\":-8.28552,\"lon\":-35.9599,\"interfaces\":[{\"name\":\"e77332\",\"id\":1},{\"name\":\"e77840\",\"id\":2},{\"name\":\"e78350\",\"id\":3},{\"name\":\"e79118\",\"id\":4}]},{\"caption\":\"POA\",\"id\":\"POA Belo Jardim\",\"cod\":56,\"lat\":-8.33709,\"lon\":-36.4179,\"interfaces\":[{\"name\":\"e77335\",\"id\":1},{\"name\":\"e77843\",\"id\":2},{\"name\":\"e78353\",\"id\":3},{\"name\":\"e79121\",\"id\":4}]},{\"caption\":\"POA\",\"id\":\"POA Garanhuns\",\"cod\":57,\"lat\":-8.90132,\"lon\":-36.4922,\"interfaces\":[{\"name\":\"e77333\",\"id\":1},{\"name\":\"e77841\",\"id\":2},{\"name\":\"e78351\",\"id\":3},{\"name\":\"e79119\",\"id\":4}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_SUREG-RE\",\"cod\":58,\"lat\":-8.0812,\"lon\":-34.9044,\"interfaces\":[{\"name\":\"e77093\",\"id\":1},{\"name\":\"e77608\",\"id\":2},{\"name\":\"e78118\",\"id\":3},{\"name\":\"e78886\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Belo Jardim\",\"cod\":59,\"lat\":-8.31991,\"lon\":-36.4167,\"interfaces\":[{\"name\":\"e77234\",\"id\":1},{\"name\":\"e77225\",\"id\":2},{\"name\":\"e77740\",\"id\":3},{\"name\":\"e77749\",\"id\":4},{\"name\":\"e78259\",\"id\":5},{\"name\":\"e78250\",\"id\":6},{\"name\":\"e79027\",\"id\":7},{\"name\":\"e79018\",\"id\":8}]},{\"caption\":\"IFPE\",\"id\":\"IFPE - Cabo de St° Agostinho\",\"cod\":60,\"lat\":-8.27535,\"lon\":-35.0263,\"interfaces\":[{\"name\":\"e77091\",\"id\":1},{\"name\":\"e77606\",\"id\":2},{\"name\":\"e78116\",\"id\":3},{\"name\":\"e78884\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE-Paulista\",\"cod\":61,\"lat\":-7.95764,\"lon\":-34.8717,\"interfaces\":[{\"name\":\"e77233\",\"id\":1},{\"name\":\"e77748\",\"id\":2},{\"name\":\"e78258\",\"id\":3},{\"name\":\"e79026\",\"id\":4}]},{\"caption\":\"UNIVASF\",\"id\":\"UNIVASF-PETROLINA\",\"cod\":62,\"lat\":-9.39057,\"lon\":-40.4958,\"interfaces\":[{\"name\":\"e77223\",\"id\":1},{\"name\":\"e77224\",\"id\":2},{\"name\":\"e77739\",\"id\":3},{\"name\":\"e77738\",\"id\":4},{\"name\":\"e78248\",\"id\":5},{\"name\":\"e78249\",\"id\":6},{\"name\":\"e79016\",\"id\":7},{\"name\":\"e79017\",\"id\":8}]},{\"caption\":\"FUNDAJ\",\"id\":\"FUNDAJ - Engenho Massangana\",\"cod\":63,\"lat\":-8.2141,\"lon\":-34.9354,\"interfaces\":[{\"name\":\"e77180\",\"id\":1},{\"name\":\"e77695\",\"id\":2},{\"name\":\"e78205\",\"id\":3},{\"name\":\"e78973\",\"id\":4}]},{\"caption\":\"FUNDAJ\",\"id\":\"FUNDAJ Recife - CasaForte - Campus Gilberto Freyre (CGF)\",\"cod\":64,\"lat\":-8.05711,\"lon\":-34.8965,\"interfaces\":[{\"name\":\"e77178\",\"id\":1},{\"name\":\"e77693\",\"id\":2},{\"name\":\"e78203\",\"id\":3},{\"name\":\"e78971\",\"id\":4}]},{\"caption\":\"FUNDAJ\",\"id\":\"FUNDAJ Recife - Apipucos - Campus Anísio Teixeira (CAT)\",\"cod\":65,\"lat\":-8.02033,\"lon\":-34.9366,\"interfaces\":[{\"name\":\"e77131\",\"id\":1},{\"name\":\"e77646\",\"id\":2},{\"name\":\"e78156\",\"id\":3},{\"name\":\"e78924\",\"id\":4}]},{\"caption\":\"FUNDAJ\",\"id\":\"FUNDAJ Recife - Derby\",\"cod\":66,\"lat\":-8.06178,\"lon\":-34.8986,\"interfaces\":[{\"name\":\"e77129\",\"id\":1},{\"name\":\"e77644\",\"id\":2},{\"name\":\"e78154\",\"id\":3},{\"name\":\"e78922\",\"id\":4}]},{\"caption\":\"UFRPE\",\"id\":\"UFRPE - CODAI (São Lourenço da Mata)\",\"cod\":67,\"lat\":-7.99736,\"lon\":-35.0378,\"interfaces\":[{\"name\":\"e77170\",\"id\":1},{\"name\":\"e77685\",\"id\":2},{\"name\":\"e78195\",\"id\":3},{\"name\":\"e78963\",\"id\":4}]},{\"caption\":\"UFRPE\",\"id\":\"UFRPE - Serra Talhada\",\"cod\":68,\"lat\":-7.99068,\"lon\":-38.2918,\"interfaces\":[{\"name\":\"e77168\",\"id\":1},{\"name\":\"e77683\",\"id\":2},{\"name\":\"e78193\",\"id\":3},{\"name\":\"e78961\",\"id\":4}]},{\"caption\":\"UFRPE\",\"id\":\"UFRPE - Pequenos Animais\",\"cod\":69,\"lat\":-7.84208,\"lon\":-35.255,\"interfaces\":[{\"name\":\"e77176\",\"id\":1},{\"name\":\"e77691\",\"id\":2},{\"name\":\"e78201\",\"id\":3},{\"name\":\"e78969\",\"id\":4}]},{\"caption\":\"UFRPE\",\"id\":\"UFRPE - Cana de Açúcar\",\"cod\":70,\"lat\":-7.84672,\"lon\":-35.2553,\"interfaces\":[{\"name\":\"e77172\",\"id\":1},{\"name\":\"e77687\",\"id\":2},{\"name\":\"e78197\",\"id\":3},{\"name\":\"e78965\",\"id\":4}]},{\"caption\":\"UNIVASF\",\"id\":\"UNIVASF Espaço Plural da UNIVASF (FACJU)\",\"cod\":71,\"lat\":-9.41362,\"lon\":-40.5162,\"interfaces\":[{\"name\":\"e77327\",\"id\":1},{\"name\":\"e77835\",\"id\":2},{\"name\":\"e78345\",\"id\":3},{\"name\":\"e79113\",\"id\":4}]},{\"caption\":\"UNIVASF\",\"id\":\"UNIVASF Campus Juazeiro\",\"cod\":72,\"lat\":-9.41362,\"lon\":-40.5162,\"interfaces\":[{\"name\":\"e77326\",\"id\":1},{\"name\":\"e77834\",\"id\":2},{\"name\":\"e78344\",\"id\":3},{\"name\":\"e79112\",\"id\":4}]},{\"caption\":\"CPOR\",\"id\":\"CPOR - Centro de Preparação de Oficiais da Reserva do Recife\",\"cod\":73,\"lat\":-8.03813,\"lon\":-34.9176,\"interfaces\":[{\"name\":\"e77142\",\"id\":1},{\"name\":\"e77657\",\"id\":2},{\"name\":\"e78167\",\"id\":3},{\"name\":\"e78935\",\"id\":4}]},{\"caption\":\"PROCAPE\",\"id\":\"PROCAPE - Pronto Socorro Cardiológico de Pernambuco Prof. Luiz Tavares\",\"cod\":74,\"lat\":-8.05205,\"lon\":-34.8854,\"interfaces\":[{\"name\":\"e77120\",\"id\":1},{\"name\":\"e77635\",\"id\":2},{\"name\":\"e78145\",\"id\":3},{\"name\":\"e78913\",\"id\":4}]},{\"caption\":\"FACAPE\",\"id\":\"FACAPE - Faculdade de Ciências Aplicadas e Sociais de Petrolina\",\"cod\":75,\"lat\":-9.39601,\"lon\":-40.4789,\"interfaces\":[{\"name\":\"e77317\",\"id\":1},{\"name\":\"e77825\",\"id\":2},{\"name\":\"e78335\",\"id\":3},{\"name\":\"e79103\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSertão - Pernambucano - Petrolina (Orla)\",\"cod\":76,\"lat\":-9.36226,\"lon\":-40.5396,\"interfaces\":[{\"name\":\"e77315\",\"id\":1},{\"name\":\"e77823\",\"id\":2},{\"name\":\"e78333\",\"id\":3},{\"name\":\"e79101\",\"id\":4}]},{\"caption\":\"IFPE\",\"id\":\"IFPE-REITORIA-SUDENE\",\"cod\":77,\"lat\":-8.04764,\"lon\":-34.9447,\"interfaces\":[{\"name\":\"e77153\",\"id\":1},{\"name\":\"e77668\",\"id\":2},{\"name\":\"e78178\",\"id\":3},{\"name\":\"e78946\",\"id\":4}]},{\"caption\":\"AGGEU\",\"id\":\"AGGEU\",\"cod\":78,\"lat\":-8.04818,\"lon\":-34.9448,\"interfaces\":[{\"name\":\"e77198\",\"id\":1},{\"name\":\"e77713\",\"id\":2},{\"name\":\"e78223\",\"id\":3},{\"name\":\"e78991\",\"id\":4}]},{\"caption\":\"CRCN\",\"id\":\"CRCN/NE\",\"cod\":79,\"lat\":-8.05908,\"lon\":-34.9492,\"interfaces\":[{\"name\":\"e77196\",\"id\":1},{\"name\":\"e77711\",\"id\":2},{\"name\":\"e78221\",\"id\":3},{\"name\":\"e78989\",\"id\":4}]},{\"caption\":\"MCTI\",\"id\":\"MCTI\",\"cod\":80,\"lat\":-8.0597,\"lon\":-34.9478,\"interfaces\":[{\"name\":\"e77194\",\"id\":1},{\"name\":\"e77709\",\"id\":2},{\"name\":\"e78219\",\"id\":3},{\"name\":\"e78987\",\"id\":4}]},{\"caption\":\"CETENE\",\"id\":\"CETENE\",\"cod\":81,\"lat\":-8.05993,\"lon\":-34.9453,\"interfaces\":[{\"name\":\"e77192\",\"id\":1},{\"name\":\"e77707\",\"id\":2},{\"name\":\"e78217\",\"id\":3},{\"name\":\"e78985\",\"id\":4}]},{\"caption\":\"HEMOPE\",\"id\":\"HEMOPE - Fundação de Hematologia e Hemoterapia de Pernambuco\",\"cod\":82,\"lat\":-8.05264,\"lon\":-34.898,\"interfaces\":[{\"name\":\"e77109\",\"id\":1},{\"name\":\"e77624\",\"id\":2},{\"name\":\"e78134\",\"id\":3},{\"name\":\"e78902\",\"id\":4}]},{\"caption\":\"HCP\",\"id\":\"HCP - Hospital de Câncer de Pernambuco\",\"cod\":83,\"lat\":-8.04162,\"lon\":-34.8733,\"interfaces\":[{\"name\":\"e77190\",\"id\":1},{\"name\":\"e77705\",\"id\":2},{\"name\":\"e78215\",\"id\":3},{\"name\":\"e78983\",\"id\":4}]},{\"caption\":\"SECTI\",\"id\":\"SECTI - Secretaria Estadual de Ciência, Tecnologia e Inovação de Pernambuco\",\"cod\":84,\"lat\":-8.06002,\"lon\":-34.8708,\"interfaces\":[{\"name\":\"e77145\",\"id\":1},{\"name\":\"e77660\",\"id\":2},{\"name\":\"e78170\",\"id\":3},{\"name\":\"e78938\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSertão- Pernambucano - Campus Ouricuri\",\"cod\":85,\"lat\":-7.88447,\"lon\":-40.1071,\"interfaces\":[{\"name\":\"e77203\",\"id\":1},{\"name\":\"e77718\",\"id\":2},{\"name\":\"e78228\",\"id\":3},{\"name\":\"e78996\",\"id\":4}]},{\"caption\":\"UFRPE\",\"id\":\"UFRPE - IBIMIRIM\",\"cod\":86,\"lat\":-8.50582,\"lon\":-37.7214,\"interfaces\":[{\"name\":\"e77200\",\"id\":1},{\"name\":\"e77715\",\"id\":2},{\"name\":\"e78225\",\"id\":3},{\"name\":\"e78993\",\"id\":4}]},{\"caption\":\"HGV\",\"id\":\"Hospital Getúlio Vargas - (HGV)\",\"cod\":87,\"lat\":-8.05154,\"lon\":-34.9221,\"interfaces\":[{\"name\":\"e77101\",\"id\":1},{\"name\":\"e77616\",\"id\":2},{\"name\":\"e78126\",\"id\":3},{\"name\":\"e78894\",\"id\":4}]},{\"caption\":\"IMIP\",\"id\":\"IMIP - Instituto de Medicina Integral Professor Fernando Figueira\",\"cod\":88,\"lat\":-8.06711,\"lon\":-34.8901,\"interfaces\":[{\"name\":\"e77115\",\"id\":1},{\"name\":\"e77630\",\"id\":2},{\"name\":\"e78140\",\"id\":3},{\"name\":\"e78908\",\"id\":4}]},{\"caption\":\"FACEPE\",\"id\":\"FACEPE - Fundação de Amparo a Ciência e Tecnologia de PE\",\"cod\":89,\"lat\":-8.0608,\"lon\":-34.9017,\"interfaces\":[{\"name\":\"e77107\",\"id\":1},{\"name\":\"e77622\",\"id\":2},{\"name\":\"e78132\",\"id\":3},{\"name\":\"e78900\",\"id\":4}]},{\"caption\":\"ITEP\",\"id\":\"Instituto de Tecnologia de Pernambuco (ITEP) - Recife\",\"cod\":90,\"lat\":-8.05959,\"lon\":-34.9492,\"interfaces\":[{\"name\":\"e77183\",\"id\":1},{\"name\":\"e77698\",\"id\":2},{\"name\":\"e78208\",\"id\":3},{\"name\":\"e78976\",\"id\":4}]},{\"caption\":\"CMR\",\"id\":\"CMR - Comando da 7 Regiao do Recife\",\"cod\":91,\"lat\":-8.05929,\"lon\":-34.9474,\"interfaces\":[{\"name\":\"e77181\",\"id\":1},{\"name\":\"e77696\",\"id\":2},{\"name\":\"e78206\",\"id\":3},{\"name\":\"e78974\",\"id\":4}]},{\"caption\":\"IPA\",\"id\":\"IPA - Instituto Agronômico de Pernambuco\",\"cod\":92,\"lat\":-8.06291,\"lon\":-34.9261,\"interfaces\":[{\"name\":\"e77104\",\"id\":1},{\"name\":\"e77619\",\"id\":2},{\"name\":\"e78129\",\"id\":3},{\"name\":\"e78897\",\"id\":4}]},{\"caption\":\"HBL\",\"id\":\"HBL - Hospital Barão de Lucena\",\"cod\":93,\"lat\":-8.03848,\"lon\":-34.939,\"interfaces\":[{\"name\":\"e77124\",\"id\":1},{\"name\":\"e77639\",\"id\":2},{\"name\":\"e78149\",\"id\":3},{\"name\":\"e78917\",\"id\":4}]},{\"caption\":\"HR\",\"id\":\"HR - Hospital da Restauração\",\"cod\":94,\"lat\":-8.05392,\"lon\":-34.8977,\"interfaces\":[{\"name\":\"e77112\",\"id\":1},{\"name\":\"e77627\",\"id\":2},{\"name\":\"e78137\",\"id\":3},{\"name\":\"e78905\",\"id\":4}]},{\"caption\":\"HUOC\",\"id\":\"HUOC - Hospital Universitário Oswaldo Cruz\",\"cod\":95,\"lat\":-8.04771,\"lon\":-34.8879,\"interfaces\":[{\"name\":\"e77186\",\"id\":1},{\"name\":\"e77701\",\"id\":2},{\"name\":\"e78211\",\"id\":3},{\"name\":\"e78979\",\"id\":4}]},{\"caption\":\"HAM\",\"id\":\"HAM - Hospital Agamenon Magalhães\",\"cod\":96,\"lat\":-8.0303,\"lon\":-34.9071,\"interfaces\":[{\"name\":\"e77123\",\"id\":1},{\"name\":\"e77638\",\"id\":2},{\"name\":\"e78148\",\"id\":3},{\"name\":\"e78916\",\"id\":4}]},{\"caption\":\"UNIVASF\",\"id\":\"UNIVASF-CIENCIAS-AGRARIAS-PETROLINA\",\"cod\":97,\"lat\":-9.32426,\"lon\":-40.5491,\"interfaces\":[{\"name\":\"e77316\",\"id\":1},{\"name\":\"e77824\",\"id\":2},{\"name\":\"e78334\",\"id\":3},{\"name\":\"e79102\",\"id\":4}]},{\"caption\":\"IPA\",\"id\":\"IPA - Instituto Agronômico de Pernambuco (Petrolina)\",\"cod\":98,\"lat\":-9.39271,\"lon\":-40.5072,\"interfaces\":[{\"name\":\"e77323\",\"id\":1},{\"name\":\"e77831\",\"id\":2},{\"name\":\"e78341\",\"id\":3},{\"name\":\"e79109\",\"id\":4}]},{\"caption\":\"HDMSDE\",\"id\":\"HDMSDE - Hospital Dom Malan\",\"cod\":99,\"lat\":-9.39487,\"lon\":-40.4998,\"interfaces\":[{\"name\":\"e77322\",\"id\":1},{\"name\":\"e77830\",\"id\":2},{\"name\":\"e78340\",\"id\":3},{\"name\":\"e79108\",\"id\":4}]},{\"caption\":\"PMP\",\"id\":\"PMP - Prefeitura Municipal de Petrolina\",\"cod\":100,\"lat\":-9.39989,\"lon\":-40.5006,\"interfaces\":[{\"name\":\"e77321\",\"id\":1},{\"name\":\"e77829\",\"id\":2},{\"name\":\"e78339\",\"id\":3},{\"name\":\"e79107\",\"id\":4}]},{\"caption\":\"ITEP\",\"id\":\"Instituto de Tecnologia de Pernambuco (ITEP) - Petrolina\",\"cod\":101,\"lat\":-9.393,\"lon\":-40.4943,\"interfaces\":[{\"name\":\"e77313\",\"id\":1},{\"name\":\"e77821\",\"id\":2},{\"name\":\"e78331\",\"id\":3},{\"name\":\"e79099\",\"id\":4}]},{\"caption\":\"IFSERTAO\",\"id\":\"IFSERTAO-ZONAR-PETROLINA\",\"cod\":102,\"lat\":-9.36225,\"lon\":-40.5396,\"interfaces\":[{\"name\":\"e77314\",\"id\":1},{\"name\":\"e77822\",\"id\":2},{\"name\":\"e78332\",\"id\":3},{\"name\":\"e79100\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSertão Pernambucano - Petrolina\",\"cod\":103,\"lat\":-9.36225,\"lon\":-40.5396,\"interfaces\":[{\"name\":\"e77312\",\"id\":1},{\"name\":\"e77820\",\"id\":2},{\"name\":\"e78330\",\"id\":3},{\"name\":\"e79098\",\"id\":4}]},{\"caption\":\"UPE\",\"id\":\"Universidade de Pernambuco (UPE) - Petrolina\",\"cod\":104,\"lat\":-9.39752,\"lon\":-40.4792,\"interfaces\":[{\"name\":\"e77319\",\"id\":1},{\"name\":\"e77827\",\"id\":2},{\"name\":\"e78337\",\"id\":3},{\"name\":\"e79105\",\"id\":4}]},{\"caption\":\"UNIVASF\",\"id\":\"UNIVASF Salgueiro\",\"cod\":105,\"lat\":-8.06855,\"lon\":-39.1194,\"interfaces\":[{\"name\":\"e77850\",\"id\":1},{\"name\":\"e78360\",\"id\":2},{\"name\":\"e79128\",\"id\":3}]},{\"caption\":\"CHESF\",\"id\":\"CHESF COS\",\"cod\":106,\"lat\":-8.06388,\"lon\":-34.93,\"interfaces\":[{\"name\":\"e78361\",\"id\":1},{\"name\":\"e79129\",\"id\":2}]},{\"caption\":\"ONS\",\"id\":\"ONS Acesso - Operador Nacional do Sistema Elétrico\",\"cod\":107,\"lat\":-8.05301,\"lon\":-34.876,\"interfaces\":[{\"name\":\"e79130\",\"id\":1}]}]},\"pi\":{\"clientes\":[{\"caption\":\"CPRM\",\"id\":\"CPRM-RETE\",\"cod\":1,\"lat\":-5.0877,\"lon\":-42.7992,\"interfaces\":[{\"name\":\"e25721\",\"id\":1},{\"name\":\"e25801\",\"id\":2},{\"name\":\"e25881\",\"id\":3},{\"name\":\"e25961\",\"id\":4},{\"name\":\"e26041\",\"id\":5}]},{\"caption\":\"UFPI\",\"id\":\"UFPI-CEAD\",\"cod\":2,\"lat\":-5.0954,\"lon\":-42.8126,\"interfaces\":[{\"name\":\"e25688\",\"id\":1},{\"name\":\"e25768\",\"id\":2},{\"name\":\"e25848\",\"id\":3},{\"name\":\"e25928\",\"id\":4},{\"name\":\"e26008\",\"id\":5}]},{\"caption\":\"UESPI\",\"id\":\"UESPI-FACIME\",\"cod\":3,\"lat\":-5.0905,\"lon\":-42.8032,\"interfaces\":[{\"name\":\"e25692\",\"id\":1},{\"name\":\"e25772\",\"id\":2},{\"name\":\"e25852\",\"id\":3},{\"name\":\"e25932\",\"id\":4},{\"name\":\"e26012\",\"id\":5}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HU-UFPI\",\"cod\":4,\"lat\":-5.06009,\"lon\":-42.794,\"interfaces\":[{\"name\":\"e25713\",\"id\":1},{\"name\":\"e25793\",\"id\":2},{\"name\":\"e25873\",\"id\":3},{\"name\":\"e25953\",\"id\":4},{\"name\":\"e26033\",\"id\":5}]},{\"caption\":\"UFPI\",\"id\":\"UFPI-NTI\",\"cod\":5,\"lat\":-5.05664,\"lon\":-42.7904,\"interfaces\":[{\"name\":\"e25715\",\"id\":1},{\"name\":\"e25795\",\"id\":2},{\"name\":\"e25875\",\"id\":3},{\"name\":\"e25955\",\"id\":4},{\"name\":\"e26035\",\"id\":5}]},{\"caption\":\"UESPI\",\"id\":\"UESPI-CM\",\"cod\":6,\"lat\":-5.09814,\"lon\":-42.758,\"interfaces\":[{\"name\":\"e25693\",\"id\":1},{\"name\":\"e25773\",\"id\":2},{\"name\":\"e25853\",\"id\":3},{\"name\":\"e25933\",\"id\":4},{\"name\":\"e26013\",\"id\":5}]},{\"caption\":\"UESPI\",\"id\":\"UESPI-CPTN\",\"cod\":7,\"lat\":-5.07808,\"lon\":-42.826,\"interfaces\":[{\"name\":\"e25717\",\"id\":1},{\"name\":\"e25797\",\"id\":2},{\"name\":\"e25877\",\"id\":3},{\"name\":\"e25957\",\"id\":4},{\"name\":\"e26037\",\"id\":5}]},{\"caption\":\"UESPI\",\"id\":\"UESPI-CTU\",\"cod\":8,\"lat\":-5.07386,\"lon\":-42.8312,\"interfaces\":[{\"name\":\"e25719\",\"id\":1},{\"name\":\"e25799\",\"id\":2},{\"name\":\"e25879\",\"id\":3},{\"name\":\"e25959\",\"id\":4},{\"name\":\"e26039\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Pedro II\",\"cod\":9,\"lat\":-4.44814,\"lon\":-41.457,\"interfaces\":[{\"name\":\"e25646\",\"id\":1},{\"name\":\"e25726\",\"id\":2},{\"name\":\"e25806\",\"id\":3},{\"name\":\"e25886\",\"id\":4},{\"name\":\"e25966\",\"id\":5}]},{\"caption\":\"UFDP\",\"id\":\"UFDPar\",\"cod\":10,\"lat\":-2.90905,\"lon\":-41.7543,\"interfaces\":[{\"name\":\"e25672\",\"id\":1},{\"name\":\"e25752\",\"id\":2},{\"name\":\"e25832\",\"id\":3},{\"name\":\"e25912\",\"id\":4},{\"name\":\"e25992\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Parnaíba\",\"cod\":11,\"lat\":-2.94688,\"lon\":-41.7312,\"interfaces\":[{\"name\":\"e25674\",\"id\":1},{\"name\":\"e25754\",\"id\":2},{\"name\":\"e25834\",\"id\":3},{\"name\":\"e25914\",\"id\":4},{\"name\":\"e25994\",\"id\":5}]},{\"caption\":\"UFPI\",\"id\":\"UFPI-Floriano\",\"cod\":12,\"lat\":-6.78663,\"lon\":-43.041,\"interfaces\":[{\"name\":\"e25676\",\"id\":1},{\"name\":\"e25756\",\"id\":2},{\"name\":\"e25836\",\"id\":3},{\"name\":\"e25916\",\"id\":4},{\"name\":\"e25996\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Floriano\",\"cod\":13,\"lat\":-6.78869,\"lon\":-43.0433,\"interfaces\":[{\"name\":\"e25678\",\"id\":1},{\"name\":\"e25758\",\"id\":2},{\"name\":\"e25838\",\"id\":3},{\"name\":\"e25918\",\"id\":4},{\"name\":\"e25998\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Campo Maior\",\"cod\":14,\"lat\":-4.86439,\"lon\":-42.1467,\"interfaces\":[{\"name\":\"e25664\",\"id\":1},{\"name\":\"e25744\",\"id\":2},{\"name\":\"e25824\",\"id\":3},{\"name\":\"e25904\",\"id\":4},{\"name\":\"e25984\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Paulistana\",\"cod\":15,\"lat\":-8.13541,\"lon\":-41.1391,\"interfaces\":[{\"name\":\"e25666\",\"id\":1},{\"name\":\"e25746\",\"id\":2},{\"name\":\"e25826\",\"id\":3},{\"name\":\"e25906\",\"id\":4},{\"name\":\"e25986\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Pio IX\",\"cod\":16,\"lat\":-6.8341,\"lon\":-40.6122,\"interfaces\":[{\"name\":\"e25668\",\"id\":1},{\"name\":\"e25748\",\"id\":2},{\"name\":\"e25828\",\"id\":3},{\"name\":\"e25908\",\"id\":4},{\"name\":\"e25988\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-José de Freitas\",\"cod\":17,\"lat\":-4.76026,\"lon\":-42.5771,\"interfaces\":[{\"name\":\"e25670\",\"id\":1},{\"name\":\"e25750\",\"id\":2},{\"name\":\"e25830\",\"id\":3},{\"name\":\"e25910\",\"id\":4},{\"name\":\"e25990\",\"id\":5}]},{\"caption\":\"UFPI\",\"id\":\"UFPI-Picos\",\"cod\":18,\"lat\":-7.08183,\"lon\":-41.4343,\"interfaces\":[{\"name\":\"e25680\",\"id\":1},{\"name\":\"e25760\",\"id\":2},{\"name\":\"e25840\",\"id\":3},{\"name\":\"e25920\",\"id\":4},{\"name\":\"e26000\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Picos\",\"cod\":19,\"lat\":-7.07017,\"lon\":-41.4022,\"interfaces\":[{\"name\":\"e25682\",\"id\":1},{\"name\":\"e25762\",\"id\":2},{\"name\":\"e25842\",\"id\":3},{\"name\":\"e25922\",\"id\":4},{\"name\":\"e26002\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Cocal\",\"cod\":20,\"lat\":-3.46135,\"lon\":-41.5857,\"interfaces\":[{\"name\":\"e25662\",\"id\":1},{\"name\":\"e25742\",\"id\":2},{\"name\":\"e25822\",\"id\":3},{\"name\":\"e25902\",\"id\":4},{\"name\":\"e25982\",\"id\":5}]},{\"caption\":\"UFPI\",\"id\":\"UFPI-Bom Jesus\",\"cod\":21,\"lat\":-9.08451,\"lon\":-44.327,\"interfaces\":[{\"name\":\"e25660\",\"id\":1},{\"name\":\"e25740\",\"id\":2},{\"name\":\"e25820\",\"id\":3},{\"name\":\"e25900\",\"id\":4},{\"name\":\"e25980\",\"id\":5}]},{\"caption\":\"HGV\",\"id\":\"Hospital Getúlio Vargas - HGV\",\"cod\":22,\"lat\":-5.08784,\"lon\":-42.8045,\"interfaces\":[{\"name\":\"e25697\",\"id\":1},{\"name\":\"e25777\",\"id\":2},{\"name\":\"e25857\",\"id\":3},{\"name\":\"e25937\",\"id\":4},{\"name\":\"e26017\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Oeiras\",\"cod\":23,\"lat\":-6.99923,\"lon\":-42.1018,\"interfaces\":[{\"name\":\"e25648\",\"id\":1},{\"name\":\"e25728\",\"id\":2},{\"name\":\"e25808\",\"id\":3},{\"name\":\"e25888\",\"id\":4},{\"name\":\"e25968\",\"id\":5}]},{\"caption\":\"UNIVASF\",\"id\":\"UNIVASF-SRN\",\"cod\":24,\"lat\":-9.03063,\"lon\":-42.7025,\"interfaces\":[{\"name\":\"e25650\",\"id\":1},{\"name\":\"e25730\",\"id\":2},{\"name\":\"e25810\",\"id\":3},{\"name\":\"e25890\",\"id\":4},{\"name\":\"e25970\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Angical\",\"cod\":25,\"lat\":-6.08835,\"lon\":-42.7383,\"interfaces\":[{\"name\":\"e25643\",\"id\":1},{\"name\":\"e25723\",\"id\":2},{\"name\":\"e25803\",\"id\":3},{\"name\":\"e25883\",\"id\":4},{\"name\":\"e25963\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Valença\",\"cod\":26,\"lat\":-6.40845,\"lon\":-41.7498,\"interfaces\":[{\"name\":\"e25653\",\"id\":1},{\"name\":\"e25654\",\"id\":2},{\"name\":\"e25734\",\"id\":3},{\"name\":\"e25733\",\"id\":4},{\"name\":\"e25814\",\"id\":5},{\"name\":\"e25813\",\"id\":6},{\"name\":\"e25894\",\"id\":7},{\"name\":\"e25893\",\"id\":8},{\"name\":\"e25973\",\"id\":9},{\"name\":\"e25974\",\"id\":10}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Uruçui\",\"cod\":27,\"lat\":-7.27568,\"lon\":-44.5157,\"interfaces\":[{\"name\":\"e25652\",\"id\":1},{\"name\":\"e25732\",\"id\":2},{\"name\":\"e25812\",\"id\":3},{\"name\":\"e25892\",\"id\":4},{\"name\":\"e25972\",\"id\":5}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPAMN_UEP\",\"cod\":28,\"lat\":-2.9205,\"lon\":-41.7541,\"interfaces\":[{\"name\":\"e25658\",\"id\":1},{\"name\":\"e25738\",\"id\":2},{\"name\":\"e25818\",\"id\":3},{\"name\":\"e25898\",\"id\":4},{\"name\":\"e25978\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-São Raimundo Nonato\",\"cod\":29,\"lat\":-9.04612,\"lon\":-42.6936,\"interfaces\":[{\"name\":\"e25656\",\"id\":1},{\"name\":\"e25736\",\"id\":2},{\"name\":\"e25816\",\"id\":3},{\"name\":\"e25896\",\"id\":4},{\"name\":\"e25976\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-DIRCEU\",\"cod\":30,\"lat\":-5.09941,\"lon\":-42.7387,\"interfaces\":[{\"name\":\"e25711\",\"id\":1},{\"name\":\"e25791\",\"id\":2},{\"name\":\"e25871\",\"id\":3},{\"name\":\"e25951\",\"id\":4},{\"name\":\"e26031\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-REITORIA\",\"cod\":31,\"lat\":-5.07618,\"lon\":-42.752,\"interfaces\":[{\"name\":\"e25709\",\"id\":1},{\"name\":\"e25789\",\"id\":2},{\"name\":\"e25869\",\"id\":3},{\"name\":\"e25949\",\"id\":4},{\"name\":\"e26029\",\"id\":5}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPAMN_Sede\",\"cod\":32,\"lat\":-5.03695,\"lon\":-42.7985,\"interfaces\":[{\"name\":\"e25702\",\"id\":1},{\"name\":\"e25782\",\"id\":2},{\"name\":\"e25862\",\"id\":3},{\"name\":\"e25942\",\"id\":4},{\"name\":\"e26022\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-CENTRAL\",\"cod\":33,\"lat\":-5.08882,\"lon\":-42.8112,\"interfaces\":[{\"name\":\"e25690\",\"id\":1},{\"name\":\"e25770\",\"id\":2},{\"name\":\"e25850\",\"id\":3},{\"name\":\"e25930\",\"id\":4},{\"name\":\"e26010\",\"id\":5}]},{\"caption\":\"MDER\",\"id\":\"MDER\",\"cod\":34,\"lat\":-5.09591,\"lon\":-42.7882,\"interfaces\":[{\"name\":\"e25695\",\"id\":1},{\"name\":\"e25775\",\"id\":2},{\"name\":\"e25855\",\"id\":3},{\"name\":\"e25935\",\"id\":4},{\"name\":\"e26015\",\"id\":5}]},{\"caption\":\"SESAPI\",\"id\":\"SESAPI\",\"cod\":35,\"lat\":-5.11118,\"lon\":-42.8132,\"interfaces\":[{\"name\":\"e25694\",\"id\":1},{\"name\":\"e25774\",\"id\":2},{\"name\":\"e25854\",\"id\":3},{\"name\":\"e25934\",\"id\":4},{\"name\":\"e26014\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-São João do Piauí\",\"cod\":36,\"lat\":-8.36117,\"lon\":-42.2526,\"interfaces\":[{\"name\":\"e25686\",\"id\":1},{\"name\":\"e25766\",\"id\":2},{\"name\":\"e25846\",\"id\":3},{\"name\":\"e25926\",\"id\":4},{\"name\":\"e26006\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-Piripiri\",\"cod\":37,\"lat\":-4.28972,\"lon\":-41.7938,\"interfaces\":[{\"name\":\"e25684\",\"id\":1},{\"name\":\"e25764\",\"id\":2},{\"name\":\"e25844\",\"id\":3},{\"name\":\"e25924\",\"id\":4},{\"name\":\"e26004\",\"id\":5}]},{\"caption\":\"UFPI\",\"id\":\"UFPI-CCS\",\"cod\":38,\"lat\":-5.08803,\"lon\":-42.805,\"interfaces\":[{\"name\":\"e25689\",\"id\":1},{\"name\":\"e25769\",\"id\":2},{\"name\":\"e25849\",\"id\":3},{\"name\":\"e25929\",\"id\":4},{\"name\":\"e26009\",\"id\":5}]},{\"caption\":\"IFPI\",\"id\":\"IFPI-ZONASUL\",\"cod\":39,\"lat\":-5.10223,\"lon\":-42.814,\"interfaces\":[{\"name\":\"e25691\",\"id\":1},{\"name\":\"e25771\",\"id\":2},{\"name\":\"e25851\",\"id\":3},{\"name\":\"e25931\",\"id\":4},{\"name\":\"e26011\",\"id\":5}]}]},\"pr\":{\"clientes\":[{\"caption\":\"IFPR\",\"id\":\"IFPR Paranaguá\",\"cod\":1,\"lat\":-25.5858,\"lon\":-48.5656,\"interfaces\":[{\"name\":\"e34272\",\"id\":1},{\"name\":\"e34540\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Paranavaí \",\"cod\":2,\"lat\":-23.0538,\"lon\":-52.4535,\"interfaces\":[{\"name\":\"e34274\",\"id\":1},{\"name\":\"e34542\",\"id\":2}]},{\"caption\":\"CMC\",\"id\":\"CMC - Colégio Militar de Curitiba\",\"cod\":3,\"lat\":-25.4268,\"lon\":-49.2249,\"interfaces\":[{\"name\":\"e34340\",\"id\":1},{\"name\":\"e34606\",\"id\":2}]},{\"caption\":\"CITS\",\"id\":\"CITS - Centro Internacional de Tecnologia de Software\",\"cod\":4,\"lat\":-25.4685,\"lon\":-49.3471,\"interfaces\":[{\"name\":\"e34334\",\"id\":1},{\"name\":\"e34335\",\"id\":2},{\"name\":\"e34336\",\"id\":3},{\"name\":\"e34600\",\"id\":4},{\"name\":\"e34601\",\"id\":5},{\"name\":\"e34602\",\"id\":6}]},{\"caption\":\"FIOCRUZ\",\"id\":\"FIOCRUZ Paraná - Instituto Carlos Chagas\",\"cod\":5,\"lat\":-25.4947,\"lon\":-49.3317,\"interfaces\":[{\"name\":\"e34339\",\"id\":1},{\"name\":\"e34605\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Pato Branco \",\"cod\":6,\"lat\":-26.1976,\"lon\":-52.6903,\"interfaces\":[{\"name\":\"e34256\",\"id\":1},{\"name\":\"e34524\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Ponta Grossa \",\"cod\":7,\"lat\":-25.0517,\"lon\":-50.1322,\"interfaces\":[{\"name\":\"e34258\",\"id\":1},{\"name\":\"e34526\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Medianeira\",\"cod\":8,\"lat\":-25.3009,\"lon\":-54.1144,\"interfaces\":[{\"name\":\"e34260\",\"id\":1},{\"name\":\"e34528\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR Aquicultura\",\"cod\":9,\"lat\":-25.6912,\"lon\":-48.4669,\"interfaces\":[{\"name\":\"e34234\",\"id\":1},{\"name\":\"e34502\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Foz do Iguaçu \",\"cod\":10,\"lat\":-25.5046,\"lon\":-54.5752,\"interfaces\":[{\"name\":\"e34264\",\"id\":1},{\"name\":\"e34532\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Jacarezinho\",\"cod\":11,\"lat\":-23.1403,\"lon\":-49.9727,\"interfaces\":[{\"name\":\"e34266\",\"id\":1},{\"name\":\"e34534\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Londrina\",\"cod\":12,\"lat\":-23.309,\"lon\":-51.1763,\"interfaces\":[{\"name\":\"e34268\",\"id\":1},{\"name\":\"e34536\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Palmas\",\"cod\":13,\"lat\":-26.5116,\"lon\":-51.985,\"interfaces\":[{\"name\":\"e34270\",\"id\":1},{\"name\":\"e34538\",\"id\":2}]},{\"caption\":\"UFFS\",\"id\":\"UFFS Laranjeiras do Sul\",\"cod\":14,\"lat\":-25.4447,\"lon\":-52.4428,\"interfaces\":[{\"name\":\"e34292\",\"id\":1},{\"name\":\"e34560\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR Maripa\",\"cod\":15,\"lat\":-24.4252,\"lon\":-53.8277,\"interfaces\":[{\"name\":\"e34360\",\"id\":1},{\"name\":\"e34626\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Curitiba - Ecoville\",\"cod\":16,\"lat\":-25.4436,\"lon\":-49.3535,\"interfaces\":[{\"name\":\"e34348\",\"id\":1},{\"name\":\"e34614\",\"id\":2}]},{\"caption\":\"PTI\",\"id\":\"PTI - Parque Tecnológico de Itaipu\",\"cod\":17,\"lat\":-25.4334,\"lon\":-54.5944,\"interfaces\":[{\"name\":\"e34346\",\"id\":1},{\"name\":\"e34612\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Irati\",\"cod\":18,\"lat\":-25.4921,\"lon\":-50.6359,\"interfaces\":[{\"name\":\"e34288\",\"id\":1},{\"name\":\"e34556\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Astorga\",\"cod\":19,\"lat\":-23.2238,\"lon\":-51.6629,\"interfaces\":[{\"name\":\"e34331\",\"id\":1},{\"name\":\"e34597\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Colombo\",\"cod\":20,\"lat\":-25.3272,\"lon\":-49.2183,\"interfaces\":[{\"name\":\"e34359\",\"id\":1},{\"name\":\"e34625\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR Piraquara\",\"cod\":21,\"lat\":-25.4591,\"lon\":-49.098,\"interfaces\":[{\"name\":\"e34333\",\"id\":1},{\"name\":\"e34599\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Campo Largo \",\"cod\":22,\"lat\":-25.4557,\"lon\":-49.523,\"interfaces\":[{\"name\":\"e34282\",\"id\":1},{\"name\":\"e34550\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Reitoria\",\"cod\":23,\"lat\":-25.4481,\"lon\":-49.2154,\"interfaces\":[{\"name\":\"e34365\",\"id\":1},{\"name\":\"e34631\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPSO\",\"cod\":24,\"lat\":-23.1917,\"lon\":-51.1827,\"interfaces\":[{\"name\":\"e34347\",\"id\":1},{\"name\":\"e34613\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Assis Chateaubriand \",\"cod\":25,\"lat\":-24.4029,\"lon\":-53.5072,\"interfaces\":[{\"name\":\"e34280\",\"id\":1},{\"name\":\"e34548\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Pinhais\",\"cod\":26,\"lat\":-25.4248,\"lon\":-49.1624,\"interfaces\":[{\"name\":\"e34315\",\"id\":1},{\"name\":\"e34633\",\"id\":2},{\"name\":\"e34632\",\"id\":3}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Jaguariaíva\",\"cod\":27,\"lat\":-24.2626,\"lon\":-49.7179,\"interfaces\":[{\"name\":\"e34313\",\"id\":1},{\"name\":\"e34581\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Goioerê\",\"cod\":28,\"lat\":-24.1835,\"lon\":-53.048,\"interfaces\":[{\"name\":\"e34319\",\"id\":1},{\"name\":\"e34585\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Pitanga\",\"cod\":29,\"lat\":-24.7438,\"lon\":-51.7569,\"interfaces\":[{\"name\":\"e34317\",\"id\":1},{\"name\":\"e34583\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Pato Branco Est. Exp.\",\"cod\":30,\"lat\":-26.1753,\"lon\":-52.6892,\"interfaces\":[{\"name\":\"e34323\",\"id\":1},{\"name\":\"e34589\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Umuarama\",\"cod\":31,\"lat\":-23.8068,\"lon\":-53.321,\"interfaces\":[{\"name\":\"e34278\",\"id\":1},{\"name\":\"e34546\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR União da Vitória\",\"cod\":32,\"lat\":-26.2282,\"lon\":-51.049,\"interfaces\":[{\"name\":\"e34329\",\"id\":1},{\"name\":\"e34595\",\"id\":2}]},{\"caption\":\"UEPG\",\"id\":\"UEPG - Universidade Estadual de Ponta Grossa\",\"cod\":33,\"lat\":-25.0898,\"lon\":-50.1063,\"interfaces\":[{\"name\":\"e34327\",\"id\":1},{\"name\":\"e34326\",\"id\":2},{\"name\":\"e34325\",\"id\":3},{\"name\":\"e34324\",\"id\":4},{\"name\":\"e34590\",\"id\":5},{\"name\":\"e34591\",\"id\":6},{\"name\":\"e34592\",\"id\":7},{\"name\":\"e34593\",\"id\":8}]},{\"caption\":\"UFPR\",\"id\":\"UFPR - Centro de Computação Científica e Software Livre\",\"cod\":34,\"lat\":-25.4505,\"lon\":-49.2317,\"interfaces\":[{\"name\":\"e34350\",\"id\":1},{\"name\":\"e34351\",\"id\":2},{\"name\":\"e34617\",\"id\":3},{\"name\":\"e34616\",\"id\":4}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Curitiba - Neoville\",\"cod\":35,\"lat\":-25.5056,\"lon\":-49.3187,\"interfaces\":[{\"name\":\"e34349\",\"id\":1},{\"name\":\"e34615\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Curitiba\",\"cod\":36,\"lat\":-25.44,\"lon\":-49.2617,\"interfaces\":[{\"name\":\"e34293\",\"id\":1},{\"name\":\"e34561\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Toledo\",\"cod\":37,\"lat\":-24.7335,\"lon\":-53.7642,\"interfaces\":[{\"name\":\"e34262\",\"id\":1},{\"name\":\"e34530\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Londrina\",\"cod\":38,\"lat\":-23.3073,\"lon\":-51.1142,\"interfaces\":[{\"name\":\"e34254\",\"id\":1},{\"name\":\"e34522\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Francisco Beltrão\",\"cod\":39,\"lat\":-26.0841,\"lon\":-53.0916,\"interfaces\":[{\"name\":\"e34252\",\"id\":1},{\"name\":\"e34520\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR Toledo\",\"cod\":40,\"lat\":-24.6166,\"lon\":-53.7108,\"interfaces\":[{\"name\":\"e34344\",\"id\":1},{\"name\":\"e34610\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Campo Mourão \",\"cod\":41,\"lat\":-24.0615,\"lon\":-52.3865,\"interfaces\":[{\"name\":\"e34246\",\"id\":1},{\"name\":\"e34514\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Apucarana\",\"cod\":42,\"lat\":-23.5511,\"lon\":-51.4282,\"interfaces\":[{\"name\":\"e34244\",\"id\":1},{\"name\":\"e34512\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Dois Vizinhos \",\"cod\":43,\"lat\":-25.7029,\"lon\":-53.098,\"interfaces\":[{\"name\":\"e34250\",\"id\":1},{\"name\":\"e34518\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Cornélio Procópio \",\"cod\":44,\"lat\":-23.1863,\"lon\":-50.6574,\"interfaces\":[{\"name\":\"e34248\",\"id\":1},{\"name\":\"e34516\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR Paranaguá\",\"cod\":45,\"lat\":-25.5217,\"lon\":-48.507,\"interfaces\":[{\"name\":\"e34238\",\"id\":1},{\"name\":\"e34506\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR Litoral\",\"cod\":46,\"lat\":-25.835,\"lon\":-48.5386,\"interfaces\":[{\"name\":\"e34236\",\"id\":1},{\"name\":\"e34504\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR Palotina\",\"cod\":47,\"lat\":-24.2961,\"lon\":-53.8432,\"interfaces\":[{\"name\":\"e34242\",\"id\":1},{\"name\":\"e34510\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR Pontal do Paraná\",\"cod\":48,\"lat\":-25.5741,\"lon\":-48.3506,\"interfaces\":[{\"name\":\"e34240\",\"id\":1},{\"name\":\"e34508\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Coronel Vivida \",\"cod\":49,\"lat\":-25.9842,\"lon\":-52.5374,\"interfaces\":[{\"name\":\"e34286\",\"id\":1},{\"name\":\"e34554\",\"id\":2}]},{\"caption\":\"Simepar - Sistema de Tecnologia e Monitoramento Ambiental do Paraná\",\"id\":\"Simepar - Sistema de Tecnologia e Monitoramento Ambiental do Paraná\",\"cod\":50,\"lat\":-25.4519,\"lon\":-49.2371,\"interfaces\":[{\"name\":\"e34341\",\"id\":1},{\"name\":\"e34342\",\"id\":2},{\"name\":\"e34608\",\"id\":3},{\"name\":\"e34607\",\"id\":4}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Cascavel\",\"cod\":51,\"lat\":-24.917,\"lon\":-53.4174,\"interfaces\":[{\"name\":\"e34284\",\"id\":1},{\"name\":\"e34552\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Telêmaco Borba \",\"cod\":52,\"lat\":-24.3372,\"lon\":-50.6572,\"interfaces\":[{\"name\":\"e34276\",\"id\":1},{\"name\":\"e34544\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR - Maternidade Victor Ferreira do Amaral\",\"cod\":53,\"lat\":-25.4465,\"lon\":-49.2799,\"interfaces\":[{\"name\":\"e34364\",\"id\":1},{\"name\":\"e34630\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Capanema\",\"cod\":54,\"lat\":-25.6836,\"lon\":-53.7869,\"interfaces\":[{\"name\":\"e34357\",\"id\":1},{\"name\":\"e34623\",\"id\":2}]},{\"caption\":\"UFFS\",\"id\":\"UFFS Realeza\",\"cod\":55,\"lat\":-25.79,\"lon\":-53.5288,\"interfaces\":[{\"name\":\"e34299\",\"id\":1},{\"name\":\"e34567\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR - Hospital de Clínicas\",\"cod\":56,\"lat\":-25.4241,\"lon\":-49.262,\"interfaces\":[{\"name\":\"e34363\",\"id\":1},{\"name\":\"e34362\",\"id\":2},{\"name\":\"e34628\",\"id\":3},{\"name\":\"e34629\",\"id\":4}]},{\"caption\":\"TECPAR\",\"id\":\"TECPAR - Instituto de Tecnologia do Paraná\",\"cod\":57,\"lat\":-25.4943,\"lon\":-49.3316,\"interfaces\":[{\"name\":\"e34338\",\"id\":1},{\"name\":\"e34337\",\"id\":2},{\"name\":\"e34603\",\"id\":3},{\"name\":\"e34604\",\"id\":4}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Quedas do Iguaçu\",\"cod\":58,\"lat\":-25.4332,\"lon\":-52.901,\"interfaces\":[{\"name\":\"e34321\",\"id\":1},{\"name\":\"e34587\",\"id\":2}]},{\"caption\":\"PUC\",\"id\":\"PUC-PR - Pontifícia Universidade Católica do Paraná\",\"cod\":59,\"lat\":-25.4517,\"lon\":-49.2523,\"interfaces\":[{\"name\":\"e34352\",\"id\":1},{\"name\":\"e34353\",\"id\":2},{\"name\":\"e34354\",\"id\":3},{\"name\":\"e34355\",\"id\":4},{\"name\":\"e34621\",\"id\":5},{\"name\":\"e34620\",\"id\":6},{\"name\":\"e34619\",\"id\":7},{\"name\":\"e34618\",\"id\":8}]},{\"caption\":\"LACTEC\",\"id\":\"LACTEC - Instituto de Tecnologia para o Desenvolvimento\",\"cod\":60,\"lat\":-25.4476,\"lon\":-49.2432,\"interfaces\":[{\"name\":\"e34343\",\"id\":1},{\"name\":\"e34609\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR Fazenda Rio Negro\",\"cod\":61,\"lat\":-26.069,\"lon\":-49.7584,\"interfaces\":[{\"name\":\"e34309\",\"id\":1},{\"name\":\"e34577\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Santa Helena\",\"cod\":62,\"lat\":-24.8461,\"lon\":-54.343,\"interfaces\":[{\"name\":\"e34311\",\"id\":1},{\"name\":\"e34579\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Barracão\",\"cod\":63,\"lat\":-26.2329,\"lon\":-53.6409,\"interfaces\":[{\"name\":\"e34305\",\"id\":1},{\"name\":\"e34573\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR Jandaia do Sul\",\"cod\":64,\"lat\":-23.5971,\"lon\":-51.6497,\"interfaces\":[{\"name\":\"e34307\",\"id\":1},{\"name\":\"e34575\",\"id\":2}]},{\"caption\":\"UNILA\",\"id\":\"UNILA\",\"cod\":65,\"lat\":-25.4416,\"lon\":-54.5872,\"interfaces\":[{\"name\":\"e34301\",\"id\":1},{\"name\":\"e34569\",\"id\":2}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR Guarapuava\",\"cod\":66,\"lat\":-25.3519,\"lon\":-51.4806,\"interfaces\":[{\"name\":\"e34303\",\"id\":1},{\"name\":\"e34571\",\"id\":2}]},{\"caption\":\"IFPR\",\"id\":\"IFPR Ivaiporã\",\"cod\":67,\"lat\":-24.2522,\"lon\":-51.7146,\"interfaces\":[{\"name\":\"e34290\",\"id\":1},{\"name\":\"e34558\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPF\",\"cod\":68,\"lat\":-25.3217,\"lon\":-49.1596,\"interfaces\":[{\"name\":\"e34300\",\"id\":1},{\"name\":\"e34568\",\"id\":2}]},{\"caption\":\"UFPR\",\"id\":\"UFPR\",\"cod\":69,\"lat\":-25.451,\"lon\":-49.234,\"interfaces\":[{\"name\":\"e34295\",\"id\":1},{\"name\":\"e34294\",\"id\":2},{\"name\":\"e34563\",\"id\":3},{\"name\":\"e34562\",\"id\":4}]},{\"caption\":\"UTFPR\",\"id\":\"UTFPR\",\"cod\":70,\"lat\":-25.4393,\"lon\":-49.2689,\"interfaces\":[{\"name\":\"e34297\",\"id\":1},{\"name\":\"e34296\",\"id\":2},{\"name\":\"e34565\",\"id\":3},{\"name\":\"e34564\",\"id\":4}]}]},\"rj\":{\"clientes\":[{\"caption\":\"FOSORIO\",\"id\":\"FOSORIO\",\"cod\":1,\"lat\":-22.9337,\"lon\":-43.2103,\"interfaces\":[{\"name\":\"e75553\",\"id\":1},{\"name\":\"e75551\",\"id\":2},{\"name\":\"e76187\",\"id\":3},{\"name\":\"e76189\",\"id\":4},{\"name\":\"e76829\",\"id\":5},{\"name\":\"e76827\",\"id\":6},{\"name\":\"e77468\",\"id\":7},{\"name\":\"e77470\",\"id\":8},{\"name\":\"e78111\",\"id\":9},{\"name\":\"e78109\",\"id\":10}]},{\"caption\":\"HFA\",\"id\":\"HFA\",\"cod\":2,\"lat\":-22.9275,\"lon\":-43.2526,\"interfaces\":[{\"name\":\"e75557\",\"id\":1},{\"name\":\"e75555\",\"id\":2},{\"name\":\"e76193\",\"id\":3},{\"name\":\"e76191\",\"id\":4},{\"name\":\"e76831\",\"id\":5},{\"name\":\"e76833\",\"id\":6},{\"name\":\"e77472\",\"id\":7},{\"name\":\"e77474\",\"id\":8},{\"name\":\"e78113\",\"id\":9},{\"name\":\"e78115\",\"id\":10}]},{\"caption\":\"ANCINE\",\"id\":\"ANCINE\",\"cod\":3,\"lat\":-22.9094,\"lon\":-43.1744,\"interfaces\":[{\"name\":\"e75415\",\"id\":1},{\"name\":\"e76051\",\"id\":2},{\"name\":\"e76691\",\"id\":3},{\"name\":\"e77332\",\"id\":4},{\"name\":\"e77973\",\"id\":5}]},{\"caption\":\"ANCINE\",\"id\":\"ANCINE-Escrtório RJ\",\"cod\":4,\"lat\":-22.9146,\"lon\":-43.177,\"interfaces\":[{\"name\":\"e75413\",\"id\":1},{\"name\":\"e76049\",\"id\":2},{\"name\":\"e76689\",\"id\":3},{\"name\":\"e77330\",\"id\":4},{\"name\":\"e77971\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF-Sede\",\"cod\":5,\"lat\":-22.9031,\"lon\":-43.1167,\"interfaces\":[{\"name\":\"e75411\",\"id\":1},{\"name\":\"e76047\",\"id\":2},{\"name\":\"e76687\",\"id\":3},{\"name\":\"e77328\",\"id\":4},{\"name\":\"e77969\",\"id\":5}]},{\"caption\":\"UNIFA\",\"id\":\"UNIFA\",\"cod\":6,\"lat\":-22.8827,\"lon\":-43.3836,\"interfaces\":[{\"name\":\"e75409\",\"id\":1},{\"name\":\"e76045\",\"id\":2},{\"name\":\"e76685\",\"id\":3},{\"name\":\"e77326\",\"id\":4},{\"name\":\"e77967\",\"id\":5}]},{\"caption\":\"ABC\",\"id\":\"ABC-Sede\",\"cod\":7,\"lat\":-22.9083,\"lon\":-43.1741,\"interfaces\":[{\"name\":\"e75407\",\"id\":1},{\"name\":\"e76043\",\"id\":2},{\"name\":\"e76683\",\"id\":3},{\"name\":\"e77324\",\"id\":4},{\"name\":\"e77965\",\"id\":5}]},{\"caption\":\"PESAGRO\",\"id\":\"PESAGRO\",\"cod\":8,\"lat\":-22.8814,\"lon\":-43.09,\"interfaces\":[{\"name\":\"e75405\",\"id\":1},{\"name\":\"e76041\",\"id\":2},{\"name\":\"e76681\",\"id\":3},{\"name\":\"e77322\",\"id\":4},{\"name\":\"e77963\",\"id\":5}]},{\"caption\":\"UCP\",\"id\":\"UCP\",\"cod\":9,\"lat\":-22.5108,\"lon\":-43.1844,\"interfaces\":[{\"name\":\"e75403\",\"id\":1},{\"name\":\"e76039\",\"id\":2},{\"name\":\"e76679\",\"id\":3},{\"name\":\"e77320\",\"id\":4},{\"name\":\"e77961\",\"id\":5}]},{\"caption\":\"INTO\",\"id\":\"INTO\",\"cod\":10,\"lat\":-22.8933,\"lon\":-43.2149,\"interfaces\":[{\"name\":\"e75417\",\"id\":1},{\"name\":\"e75419\",\"id\":2},{\"name\":\"e76055\",\"id\":3},{\"name\":\"e76053\",\"id\":4},{\"name\":\"e76693\",\"id\":5},{\"name\":\"e76695\",\"id\":6},{\"name\":\"e77334\",\"id\":7},{\"name\":\"e77336\",\"id\":8},{\"name\":\"e77977\",\"id\":9},{\"name\":\"e77975\",\"id\":10}]},{\"caption\":\"UFF\",\"id\":\"UFF-Petrópolis\",\"cod\":11,\"lat\":-22.5321,\"lon\":-43.2078,\"interfaces\":[{\"name\":\"e75519\",\"id\":1},{\"name\":\"e76155\",\"id\":2},{\"name\":\"e76795\",\"id\":3},{\"name\":\"e77436\",\"id\":4},{\"name\":\"e78077\",\"id\":5}]},{\"caption\":\"CNFCP\",\"id\":\"CNFCP\",\"cod\":12,\"lat\":-22.9265,\"lon\":-43.1764,\"interfaces\":[{\"name\":\"e75435\",\"id\":1},{\"name\":\"e76071\",\"id\":2},{\"name\":\"e76711\",\"id\":3},{\"name\":\"e77352\",\"id\":4},{\"name\":\"e77993\",\"id\":5}]},{\"caption\":\"CTA\",\"id\":\"CTAv\",\"cod\":13,\"lat\":-22.8851,\"lon\":-43.2289,\"interfaces\":[{\"name\":\"e75436\",\"id\":1},{\"name\":\"e76072\",\"id\":2},{\"name\":\"e76712\",\"id\":3},{\"name\":\"e77353\",\"id\":4},{\"name\":\"e77994\",\"id\":5}]},{\"caption\":\"FUNARTE\",\"id\":\"FUNARTE-RJ\",\"cod\":14,\"lat\":-22.9053,\"lon\":-43.1756,\"interfaces\":[{\"name\":\"e75439\",\"id\":1},{\"name\":\"e76075\",\"id\":2},{\"name\":\"e76715\",\"id\":3},{\"name\":\"e77356\",\"id\":4},{\"name\":\"e77997\",\"id\":5}]},{\"caption\":\"FCRB\",\"id\":\"FCRB\",\"cod\":15,\"lat\":-22.9488,\"lon\":-43.187,\"interfaces\":[{\"name\":\"e75441\",\"id\":1},{\"name\":\"e76077\",\"id\":2},{\"name\":\"e76717\",\"id\":3},{\"name\":\"e77358\",\"id\":4},{\"name\":\"e77999\",\"id\":5}]},{\"caption\":\"HFB\",\"id\":\"HFB\",\"cod\":16,\"lat\":-22.8673,\"lon\":-43.2486,\"interfaces\":[{\"name\":\"e75421\",\"id\":1},{\"name\":\"e76057\",\"id\":2},{\"name\":\"e76697\",\"id\":3},{\"name\":\"e77338\",\"id\":4},{\"name\":\"e77979\",\"id\":5}]},{\"caption\":\"INC\",\"id\":\"INC\",\"cod\":17,\"lat\":-22.9368,\"lon\":-43.1905,\"interfaces\":[{\"name\":\"e75425\",\"id\":1},{\"name\":\"e75423\",\"id\":2},{\"name\":\"e76059\",\"id\":3},{\"name\":\"e76061\",\"id\":4},{\"name\":\"e76699\",\"id\":5},{\"name\":\"e76701\",\"id\":6},{\"name\":\"e77340\",\"id\":7},{\"name\":\"e77342\",\"id\":8},{\"name\":\"e77983\",\"id\":9},{\"name\":\"e77981\",\"id\":10}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ- ReitoriaCentro\",\"cod\":18,\"lat\":-22.9049,\"lon\":-43.1844,\"interfaces\":[{\"name\":\"e75427\",\"id\":1},{\"name\":\"e75429\",\"id\":2},{\"name\":\"e76065\",\"id\":3},{\"name\":\"e76063\",\"id\":4},{\"name\":\"e76703\",\"id\":5},{\"name\":\"e76705\",\"id\":6},{\"name\":\"e77344\",\"id\":7},{\"name\":\"e77346\",\"id\":8},{\"name\":\"e77987\",\"id\":9},{\"name\":\"e77985\",\"id\":10}]},{\"caption\":\"HSE\",\"id\":\"HSE\",\"cod\":19,\"lat\":-22.8965,\"lon\":-43.1882,\"interfaces\":[{\"name\":\"e75431\",\"id\":1},{\"name\":\"e75433\",\"id\":2},{\"name\":\"e76067\",\"id\":3},{\"name\":\"e76069\",\"id\":4},{\"name\":\"e76709\",\"id\":5},{\"name\":\"e76707\",\"id\":6},{\"name\":\"e77350\",\"id\":7},{\"name\":\"e77348\",\"id\":8},{\"name\":\"e77991\",\"id\":9},{\"name\":\"e77989\",\"id\":10}]},{\"caption\":\"FBN\",\"id\":\"FBN-Sede\",\"cod\":20,\"lat\":-22.9097,\"lon\":-43.1754,\"interfaces\":[{\"name\":\"e75443\",\"id\":1},{\"name\":\"e76079\",\"id\":2},{\"name\":\"e76719\",\"id\":3},{\"name\":\"e77360\",\"id\":4},{\"name\":\"e78001\",\"id\":5}]},{\"caption\":\"IBC\",\"id\":\"IBC\",\"cod\":21,\"lat\":-22.9536,\"lon\":-43.1722,\"interfaces\":[{\"name\":\"e75445\",\"id\":1},{\"name\":\"e76081\",\"id\":2},{\"name\":\"e76721\",\"id\":3},{\"name\":\"e77362\",\"id\":4},{\"name\":\"e78003\",\"id\":5}]},{\"caption\":\"UFRRJ\",\"id\":\"UFRRJ-Seropedica\",\"cod\":22,\"lat\":-22.769,\"lon\":-43.687,\"interfaces\":[{\"name\":\"e75505\",\"id\":1},{\"name\":\"e75503\",\"id\":2},{\"name\":\"e76141\",\"id\":3},{\"name\":\"e76139\",\"id\":4},{\"name\":\"e76781\",\"id\":5},{\"name\":\"e76779\",\"id\":6},{\"name\":\"e77420\",\"id\":7},{\"name\":\"e77422\",\"id\":8},{\"name\":\"e78061\",\"id\":9},{\"name\":\"e78063\",\"id\":10}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-RJ - Valença\",\"cod\":23,\"lat\":-22.246,\"lon\":-43.7058,\"interfaces\":[{\"name\":\"e75298\",\"id\":1},{\"name\":\"e75934\",\"id\":2},{\"name\":\"e76574\",\"id\":3},{\"name\":\"e77215\",\"id\":4},{\"name\":\"e77856\",\"id\":5}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUAP-UFF\",\"cod\":24,\"lat\":-22.8951,\"lon\":-43.1122,\"interfaces\":[{\"name\":\"e75506\",\"id\":1},{\"name\":\"e76142\",\"id\":2},{\"name\":\"e76782\",\"id\":3},{\"name\":\"e77423\",\"id\":4},{\"name\":\"e78064\",\"id\":5}]},{\"caption\":\"CNEN\",\"id\":\"CNEN - Angra dos Reis Escritório\",\"cod\":25,\"lat\":-22.9984,\"lon\":-44.3035,\"interfaces\":[{\"name\":\"e75300\",\"id\":1},{\"name\":\"e75936\",\"id\":2},{\"name\":\"e76576\",\"id\":3},{\"name\":\"e77217\",\"id\":4},{\"name\":\"e77858\",\"id\":5}]},{\"caption\":\"LNCC\",\"id\":\"LNCC\",\"cod\":26,\"lat\":-22.5299,\"lon\":-43.2171,\"interfaces\":[{\"name\":\"e75370\",\"id\":1},{\"name\":\"e76006\",\"id\":2},{\"name\":\"e76646\",\"id\":3},{\"name\":\"e77287\",\"id\":4},{\"name\":\"e77928\",\"id\":5}]},{\"caption\":\"INMETRO\",\"id\":\"INMETRO-Bacen\",\"cod\":27,\"lat\":-22.9022,\"lon\":-43.1825,\"interfaces\":[{\"name\":\"e75571\",\"id\":1},{\"name\":\"e76207\",\"id\":2},{\"name\":\"e76849\",\"id\":3},{\"name\":\"e77490\",\"id\":4},{\"name\":\"e78131\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - Itaperuna\",\"cod\":28,\"lat\":-21.2007,\"lon\":-41.9058,\"interfaces\":[{\"name\":\"e75263\",\"id\":1},{\"name\":\"e75899\",\"id\":2},{\"name\":\"e76539\",\"id\":3},{\"name\":\"e77180\",\"id\":4},{\"name\":\"e77821\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - Macaé\",\"cod\":29,\"lat\":-22.4075,\"lon\":-41.8073,\"interfaces\":[{\"name\":\"e75310\",\"id\":1},{\"name\":\"e75946\",\"id\":2},{\"name\":\"e76586\",\"id\":3},{\"name\":\"e77227\",\"id\":4},{\"name\":\"e77868\",\"id\":5}]},{\"caption\":\"FAPERJ\",\"id\":\"FAPERJ\",\"cod\":30,\"lat\":-22.9046,\"lon\":-43.1738,\"interfaces\":[{\"name\":\"e75395\",\"id\":1},{\"name\":\"e75396\",\"id\":2},{\"name\":\"e76031\",\"id\":3},{\"name\":\"e76032\",\"id\":4},{\"name\":\"e76672\",\"id\":5},{\"name\":\"e76671\",\"id\":6},{\"name\":\"e77313\",\"id\":7},{\"name\":\"e77312\",\"id\":8},{\"name\":\"e77954\",\"id\":9},{\"name\":\"e77953\",\"id\":10}]},{\"caption\":\"CNEN\",\"id\":\"CNEN-IEN\",\"cod\":31,\"lat\":-22.8657,\"lon\":-43.2269,\"interfaces\":[{\"name\":\"e75399\",\"id\":1},{\"name\":\"e75400\",\"id\":2},{\"name\":\"e76035\",\"id\":3},{\"name\":\"e76036\",\"id\":4},{\"name\":\"e76676\",\"id\":5},{\"name\":\"e76675\",\"id\":6},{\"name\":\"e77317\",\"id\":7},{\"name\":\"e77316\",\"id\":8},{\"name\":\"e77957\",\"id\":9},{\"name\":\"e77958\",\"id\":10}]},{\"caption\":\"FAETEC\",\"id\":\"FAETEC\",\"cod\":32,\"lat\":-22.8926,\"lon\":-43.3244,\"interfaces\":[{\"name\":\"e75389\",\"id\":1},{\"name\":\"e76025\",\"id\":2},{\"name\":\"e76665\",\"id\":3},{\"name\":\"e77306\",\"id\":4},{\"name\":\"e77947\",\"id\":5}]},{\"caption\":\"CECIERJ\",\"id\":\"CECIERJ\",\"cod\":33,\"lat\":-22.9031,\"lon\":-43.1911,\"interfaces\":[{\"name\":\"e75391\",\"id\":1},{\"name\":\"e75393\",\"id\":2},{\"name\":\"e76029\",\"id\":3},{\"name\":\"e76027\",\"id\":4},{\"name\":\"e76669\",\"id\":5},{\"name\":\"e76667\",\"id\":6},{\"name\":\"e77308\",\"id\":7},{\"name\":\"e77310\",\"id\":8},{\"name\":\"e77951\",\"id\":9},{\"name\":\"e77949\",\"id\":10}]},{\"caption\":\"MHN\",\"id\":\"MHN/IBRAM\",\"cod\":34,\"lat\":-22.9059,\"lon\":-43.1695,\"interfaces\":[{\"name\":\"e75385\",\"id\":1},{\"name\":\"e76021\",\"id\":2},{\"name\":\"e76661\",\"id\":3},{\"name\":\"e77302\",\"id\":4},{\"name\":\"e77943\",\"id\":5}]},{\"caption\":\"ISERJ\",\"id\":\"ISERJ\",\"cod\":35,\"lat\":-22.9135,\"lon\":-43.2171,\"interfaces\":[{\"name\":\"e75387\",\"id\":1},{\"name\":\"e76023\",\"id\":2},{\"name\":\"e76663\",\"id\":3},{\"name\":\"e77304\",\"id\":4},{\"name\":\"e77945\",\"id\":5}]},{\"caption\":\"EBC\",\"id\":\"EBC\",\"cod\":36,\"lat\":-22.9101,\"lon\":-43.1837,\"interfaces\":[{\"name\":\"e75377\",\"id\":1},{\"name\":\"e75379\",\"id\":2},{\"name\":\"e76013\",\"id\":3},{\"name\":\"e76015\",\"id\":4},{\"name\":\"e76655\",\"id\":5},{\"name\":\"e76653\",\"id\":6},{\"name\":\"e77296\",\"id\":7},{\"name\":\"e77294\",\"id\":8},{\"name\":\"e77937\",\"id\":9},{\"name\":\"e77935\",\"id\":10}]},{\"caption\":\"JBRJ\",\"id\":\"JBRJ\",\"cod\":37,\"lat\":-22.9656,\"lon\":-43.2281,\"interfaces\":[{\"name\":\"e75383\",\"id\":1},{\"name\":\"e75381\",\"id\":2},{\"name\":\"e76019\",\"id\":3},{\"name\":\"e76017\",\"id\":4},{\"name\":\"e76657\",\"id\":5},{\"name\":\"e76659\",\"id\":6},{\"name\":\"e77300\",\"id\":7},{\"name\":\"e77298\",\"id\":8},{\"name\":\"e77939\",\"id\":9},{\"name\":\"e77941\",\"id\":10}]},{\"caption\":\"IVB\",\"id\":\"IVB - Instituto Vital Brasil\",\"cod\":38,\"lat\":-22.9057,\"lon\":-43.0975,\"interfaces\":[{\"name\":\"e75372\",\"id\":1},{\"name\":\"e76008\",\"id\":2},{\"name\":\"e76648\",\"id\":3},{\"name\":\"e77289\",\"id\":4},{\"name\":\"e77930\",\"id\":5}]},{\"caption\":\"DRM\",\"id\":\"DRM-RJ\",\"cod\":39,\"lat\":-22.8892,\"lon\":-43.1154,\"interfaces\":[{\"name\":\"e75375\",\"id\":1},{\"name\":\"e76011\",\"id\":2},{\"name\":\"e76651\",\"id\":3},{\"name\":\"e77292\",\"id\":4},{\"name\":\"e77933\",\"id\":5}]},{\"caption\":\"EGN\",\"id\":\"EGN\",\"cod\":40,\"lat\":-22.9547,\"lon\":-43.1676,\"interfaces\":[{\"name\":\"e75543\",\"id\":1},{\"name\":\"e76179\",\"id\":2},{\"name\":\"e76819\",\"id\":3},{\"name\":\"e77460\",\"id\":4},{\"name\":\"e78101\",\"id\":5}]},{\"caption\":\"INEA\",\"id\":\"INEA\",\"cod\":41,\"lat\":-22.8962,\"lon\":-43.185,\"interfaces\":[{\"name\":\"e75541\",\"id\":1},{\"name\":\"e75539\",\"id\":2},{\"name\":\"e76175\",\"id\":3},{\"name\":\"e76177\",\"id\":4},{\"name\":\"e76817\",\"id\":5},{\"name\":\"e76815\",\"id\":6},{\"name\":\"e77456\",\"id\":7},{\"name\":\"e77458\",\"id\":8},{\"name\":\"e78097\",\"id\":9},{\"name\":\"e78099\",\"id\":10}]},{\"caption\":\"HFCF\",\"id\":\"HFCF\",\"cod\":42,\"lat\":-22.9237,\"lon\":-43.2821,\"interfaces\":[{\"name\":\"e75537\",\"id\":1},{\"name\":\"e76173\",\"id\":2},{\"name\":\"e76813\",\"id\":3},{\"name\":\"e77454\",\"id\":4},{\"name\":\"e78095\",\"id\":5}]},{\"caption\":\"HFI\",\"id\":\"HFI-1\",\"cod\":43,\"lat\":-22.9835,\"lon\":-43.2006,\"interfaces\":[{\"name\":\"e75535\",\"id\":1},{\"name\":\"e76171\",\"id\":2},{\"name\":\"e76811\",\"id\":3},{\"name\":\"e77452\",\"id\":4},{\"name\":\"e78093\",\"id\":5}]},{\"caption\":\"HFL\",\"id\":\"HFL\",\"cod\":44,\"lat\":-22.9637,\"lon\":-43.2156,\"interfaces\":[{\"name\":\"e75531\",\"id\":1},{\"name\":\"e75533\",\"id\":2},{\"name\":\"e76169\",\"id\":3},{\"name\":\"e76167\",\"id\":4},{\"name\":\"e76807\",\"id\":5},{\"name\":\"e76809\",\"id\":6},{\"name\":\"e77448\",\"id\":7},{\"name\":\"e77450\",\"id\":8},{\"name\":\"e78091\",\"id\":9},{\"name\":\"e78089\",\"id\":10}]},{\"caption\":\"IFF\",\"id\":\"IFF - Marica\",\"cod\":45,\"lat\":-22.8753,\"lon\":-42.7914,\"interfaces\":[{\"name\":\"e75529\",\"id\":1},{\"name\":\"e76165\",\"id\":2},{\"name\":\"e76805\",\"id\":3},{\"name\":\"e77446\",\"id\":4},{\"name\":\"e78087\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF - Iguaba\",\"cod\":46,\"lat\":-22.8466,\"lon\":-42.197,\"interfaces\":[{\"name\":\"e75527\",\"id\":1},{\"name\":\"e76163\",\"id\":2},{\"name\":\"e76803\",\"id\":3},{\"name\":\"e77444\",\"id\":4},{\"name\":\"e78085\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Resende\",\"cod\":47,\"lat\":-22.4674,\"lon\":-44.4438,\"interfaces\":[{\"name\":\"e75525\",\"id\":1},{\"name\":\"e76161\",\"id\":2},{\"name\":\"e76801\",\"id\":3},{\"name\":\"e77442\",\"id\":4},{\"name\":\"e78083\",\"id\":5}]},{\"caption\":\"CEPERJ\",\"id\":\"CEPERJ\",\"cod\":48,\"lat\":-22.9573,\"lon\":-43.1779,\"interfaces\":[{\"name\":\"e75547\",\"id\":1},{\"name\":\"e76183\",\"id\":2},{\"name\":\"e76823\",\"id\":3},{\"name\":\"e77464\",\"id\":4},{\"name\":\"e78105\",\"id\":5}]},{\"caption\":\"DATASUS\",\"id\":\"DATASUS\",\"cod\":49,\"lat\":-22.9071,\"lon\":-43.1758,\"interfaces\":[{\"name\":\"e75545\",\"id\":1},{\"name\":\"e76181\",\"id\":2},{\"name\":\"e76821\",\"id\":3},{\"name\":\"e77462\",\"id\":4},{\"name\":\"e78103\",\"id\":5}]},{\"caption\":\"FINEP\",\"id\":\"FINEP-Flamengo\",\"cod\":50,\"lat\":-22.9324,\"lon\":-43.1748,\"interfaces\":[{\"name\":\"e75512\",\"id\":1},{\"name\":\"e76148\",\"id\":2},{\"name\":\"e76788\",\"id\":3},{\"name\":\"e77429\",\"id\":4},{\"name\":\"e78070\",\"id\":5}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-RJ - Petrópolis\",\"cod\":51,\"lat\":-22.5118,\"lon\":-43.1782,\"interfaces\":[{\"name\":\"e75515\",\"id\":1},{\"name\":\"e76151\",\"id\":2},{\"name\":\"e76791\",\"id\":3},{\"name\":\"e77432\",\"id\":4},{\"name\":\"e78073\",\"id\":5}]},{\"caption\":\"IBRAM\",\"id\":\"IBRAM - Museu Imperial\",\"cod\":52,\"lat\":-22.5081,\"lon\":-43.1757,\"interfaces\":[{\"name\":\"e75517\",\"id\":1},{\"name\":\"e76153\",\"id\":2},{\"name\":\"e76793\",\"id\":3},{\"name\":\"e77434\",\"id\":4},{\"name\":\"e78075\",\"id\":5}]},{\"caption\":\"IBICT\",\"id\":\"IBICT\",\"cod\":53,\"lat\":-22.9543,\"lon\":-43.1744,\"interfaces\":[{\"name\":\"e75256\",\"id\":1},{\"name\":\"e75892\",\"id\":2},{\"name\":\"e76532\",\"id\":3},{\"name\":\"e77173\",\"id\":4},{\"name\":\"e77814\",\"id\":5}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-RJ - Itaguai\",\"cod\":54,\"lat\":-22.8531,\"lon\":-43.7621,\"interfaces\":[{\"name\":\"e75295\",\"id\":1},{\"name\":\"e75931\",\"id\":2},{\"name\":\"e76571\",\"id\":3},{\"name\":\"e77212\",\"id\":4},{\"name\":\"e77853\",\"id\":5}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-RJ - Angra dos Reis\",\"cod\":55,\"lat\":-23.0212,\"lon\":-44.5359,\"interfaces\":[{\"name\":\"e75292\",\"id\":1},{\"name\":\"e75928\",\"id\":2},{\"name\":\"e76568\",\"id\":3},{\"name\":\"e77209\",\"id\":4},{\"name\":\"e77850\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - Campos dos Goytacazes Reitoria\",\"cod\":56,\"lat\":-21.7372,\"lon\":-41.3235,\"interfaces\":[{\"name\":\"e75508\",\"id\":1},{\"name\":\"e76144\",\"id\":2},{\"name\":\"e76784\",\"id\":3},{\"name\":\"e77425\",\"id\":4},{\"name\":\"e78066\",\"id\":5}]},{\"caption\":\"CESGRANRIO\",\"id\":\"CESGRANRIO\",\"cod\":57,\"lat\":-22.9331,\"lon\":-43.2089,\"interfaces\":[{\"name\":\"e75510\",\"id\":1},{\"name\":\"e76146\",\"id\":2},{\"name\":\"e76786\",\"id\":3},{\"name\":\"e77427\",\"id\":4},{\"name\":\"e78068\",\"id\":5}]},{\"caption\":\"IMPA\",\"id\":\"IMPA\",\"cod\":58,\"lat\":-22.9664,\"lon\":-43.2367,\"interfaces\":[{\"name\":\"e75339\",\"id\":1},{\"name\":\"e75336\",\"id\":2},{\"name\":\"e75341\",\"id\":3},{\"name\":\"e75972\",\"id\":4},{\"name\":\"e75975\",\"id\":5},{\"name\":\"e75977\",\"id\":6},{\"name\":\"e76612\",\"id\":7},{\"name\":\"e76615\",\"id\":8},{\"name\":\"e76617\",\"id\":9},{\"name\":\"e77258\",\"id\":10},{\"name\":\"e77256\",\"id\":11},{\"name\":\"e77253\",\"id\":12},{\"name\":\"e77894\",\"id\":13},{\"name\":\"e77897\",\"id\":14},{\"name\":\"e77899\",\"id\":15}]},{\"caption\":\"CNEN\",\"id\":\"CNEN - Angra dos Reis Usina\",\"cod\":59,\"lat\":-23.0067,\"lon\":-44.4566,\"interfaces\":[{\"name\":\"e75259\",\"id\":1},{\"name\":\"e75895\",\"id\":2},{\"name\":\"e76535\",\"id\":3},{\"name\":\"e77176\",\"id\":4},{\"name\":\"e77817\",\"id\":5}]},{\"caption\":\"UFRJ\",\"id\":\"UFRJ - MACAÉ - Polo Barreto\",\"cod\":60,\"lat\":-22.3311,\"lon\":-41.7344,\"interfaces\":[{\"name\":\"e75334\",\"id\":1},{\"name\":\"e75970\",\"id\":2},{\"name\":\"e76610\",\"id\":3},{\"name\":\"e77251\",\"id\":4},{\"name\":\"e77892\",\"id\":5}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-RJ - Nova Friburgo\",\"cod\":61,\"lat\":-22.2451,\"lon\":-42.523,\"interfaces\":[{\"name\":\"e75296\",\"id\":1},{\"name\":\"e75932\",\"id\":2},{\"name\":\"e76572\",\"id\":3},{\"name\":\"e77213\",\"id\":4},{\"name\":\"e77854\",\"id\":5}]},{\"caption\":\"FUNARTE\",\"id\":\"FUNARTE - RJ\",\"cod\":62,\"lat\":-22.9091,\"lon\":-43.1733,\"interfaces\":[{\"name\":\"e75254\",\"id\":1},{\"name\":\"e75890\",\"id\":2},{\"name\":\"e76530\",\"id\":3},{\"name\":\"e77171\",\"id\":4},{\"name\":\"e77812\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - NITEROI\",\"cod\":63,\"lat\":-22.8936,\"lon\":-43.0537,\"interfaces\":[{\"name\":\"e75522\",\"id\":1},{\"name\":\"e75523\",\"id\":2},{\"name\":\"e76158\",\"id\":3},{\"name\":\"e76159\",\"id\":4},{\"name\":\"e76798\",\"id\":5},{\"name\":\"e76799\",\"id\":6},{\"name\":\"e77440\",\"id\":7},{\"name\":\"e77439\",\"id\":8},{\"name\":\"e78080\",\"id\":9},{\"name\":\"e78081\",\"id\":10}]},{\"caption\":\"UFRJ\",\"id\":\"UFRJ - MACAÉ - Polo Ajuda\",\"cod\":64,\"lat\":-22.3282,\"lon\":-41.7368,\"interfaces\":[{\"name\":\"e75345\",\"id\":1},{\"name\":\"e75981\",\"id\":2},{\"name\":\"e76621\",\"id\":3},{\"name\":\"e77262\",\"id\":4},{\"name\":\"e77903\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF - Volta Redonda\",\"cod\":65,\"lat\":-22.5057,\"lon\":-44.0855,\"interfaces\":[{\"name\":\"e75343\",\"id\":1},{\"name\":\"e75979\",\"id\":2},{\"name\":\"e76619\",\"id\":3},{\"name\":\"e77260\",\"id\":4},{\"name\":\"e77901\",\"id\":5}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-RJ - Nova Iguaçu\",\"cod\":66,\"lat\":-22.658,\"lon\":-43.507,\"interfaces\":[{\"name\":\"e75265\",\"id\":1},{\"name\":\"e75901\",\"id\":2},{\"name\":\"e76541\",\"id\":3},{\"name\":\"e77182\",\"id\":4},{\"name\":\"e77823\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF - Rio das Ostras\",\"cod\":67,\"lat\":-22.5061,\"lon\":-41.9199,\"interfaces\":[{\"name\":\"e75332\",\"id\":1},{\"name\":\"e75968\",\"id\":2},{\"name\":\"e76608\",\"id\":3},{\"name\":\"e77249\",\"id\":4},{\"name\":\"e77890\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF - Cachoeiras de Macacu\",\"cod\":68,\"lat\":-22.521,\"lon\":-42.708,\"interfaces\":[{\"name\":\"e75521\",\"id\":1},{\"name\":\"e76157\",\"id\":2},{\"name\":\"e76797\",\"id\":3},{\"name\":\"e77438\",\"id\":4},{\"name\":\"e78079\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF - ANGRA\",\"cod\":69,\"lat\":-22.9933,\"lon\":-44.2371,\"interfaces\":[{\"name\":\"e75364\",\"id\":1},{\"name\":\"e76000\",\"id\":2},{\"name\":\"e76640\",\"id\":3},{\"name\":\"e77281\",\"id\":4},{\"name\":\"e77922\",\"id\":5}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CTAA\",\"cod\":70,\"lat\":-23.0011,\"lon\":-43.5823,\"interfaces\":[{\"name\":\"e75366\",\"id\":1},{\"name\":\"e76002\",\"id\":2},{\"name\":\"e76642\",\"id\":3},{\"name\":\"e77283\",\"id\":4},{\"name\":\"e77924\",\"id\":5}]},{\"caption\":\"CNEN\",\"id\":\"CNEN - Resende\",\"cod\":71,\"lat\":-22.4638,\"lon\":-44.4442,\"interfaces\":[{\"name\":\"e75302\",\"id\":1},{\"name\":\"e75938\",\"id\":2},{\"name\":\"e76578\",\"id\":3},{\"name\":\"e77219\",\"id\":4},{\"name\":\"e77860\",\"id\":5}]},{\"caption\":\"II\",\"id\":\"Colégio Pedro II\",\"cod\":72,\"lat\":-22.7799,\"lon\":-43.3134,\"interfaces\":[{\"name\":\"e75304\",\"id\":1},{\"name\":\"e75940\",\"id\":2},{\"name\":\"e76580\",\"id\":3},{\"name\":\"e77221\",\"id\":4},{\"name\":\"e77862\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - Bom Jesus De Itabapoana\",\"cod\":73,\"lat\":-21.1401,\"lon\":-41.6766,\"interfaces\":[{\"name\":\"e75271\",\"id\":1},{\"name\":\"e75907\",\"id\":2},{\"name\":\"e76547\",\"id\":3},{\"name\":\"e77188\",\"id\":4},{\"name\":\"e77829\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - Cambuci\",\"cod\":74,\"lat\":-21.6311,\"lon\":-41.9833,\"interfaces\":[{\"name\":\"e75278\",\"id\":1},{\"name\":\"e75914\",\"id\":2},{\"name\":\"e76554\",\"id\":3},{\"name\":\"e77195\",\"id\":4},{\"name\":\"e77836\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - Campos dos Goytacazes Centro\",\"cod\":75,\"lat\":-21.7625,\"lon\":-41.3363,\"interfaces\":[{\"name\":\"e75305\",\"id\":1},{\"name\":\"e75941\",\"id\":2},{\"name\":\"e76581\",\"id\":3},{\"name\":\"e77222\",\"id\":4},{\"name\":\"e77863\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - Guarus\",\"cod\":76,\"lat\":-21.7359,\"lon\":-41.3242,\"interfaces\":[{\"name\":\"e75308\",\"id\":1},{\"name\":\"e75944\",\"id\":2},{\"name\":\"e76584\",\"id\":3},{\"name\":\"e77225\",\"id\":4},{\"name\":\"e77866\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF Vila Santa Cecília\",\"cod\":77,\"lat\":-22.5158,\"lon\":-44.1052,\"interfaces\":[{\"name\":\"e75348\",\"id\":1},{\"name\":\"e75984\",\"id\":2},{\"name\":\"e76624\",\"id\":3},{\"name\":\"e77265\",\"id\":4},{\"name\":\"e77906\",\"id\":5}]},{\"caption\":\"CPTEC\",\"id\":\"CPTEC-INPE-enlace-backup\",\"cod\":78,\"lat\":-22.6672,\"lon\":-45.0145,\"interfaces\":[{\"name\":\"e75350\",\"id\":1},{\"name\":\"e75986\",\"id\":2},{\"name\":\"e76626\",\"id\":3},{\"name\":\"e77267\",\"id\":4},{\"name\":\"e77908\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - Cabo Frio\",\"cod\":79,\"lat\":-22.7807,\"lon\":-41.9385,\"interfaces\":[{\"name\":\"e75353\",\"id\":1},{\"name\":\"e75989\",\"id\":2},{\"name\":\"e76629\",\"id\":3},{\"name\":\"e77270\",\"id\":4},{\"name\":\"e77911\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Nilópolis\",\"cod\":80,\"lat\":-22.8013,\"lon\":-43.4191,\"interfaces\":[{\"name\":\"e75355\",\"id\":1},{\"name\":\"e75991\",\"id\":2},{\"name\":\"e76631\",\"id\":3},{\"name\":\"e77272\",\"id\":4},{\"name\":\"e77913\",\"id\":5}]},{\"caption\":\"ESR\",\"id\":\"ESR\",\"cod\":81,\"lat\":-22.9541,\"lon\":-43.1738,\"interfaces\":[{\"name\":\"e75356\",\"id\":1},{\"name\":\"e75992\",\"id\":2},{\"name\":\"e76632\",\"id\":3},{\"name\":\"e77273\",\"id\":4},{\"name\":\"e77914\",\"id\":5}]},{\"caption\":\"PADEX\",\"id\":\"PADEX|RNP|LNCC\",\"cod\":82,\"lat\":-22.5301,\"lon\":-43.2176,\"interfaces\":[{\"name\":\"e75358\",\"id\":1},{\"name\":\"e75994\",\"id\":2},{\"name\":\"e76634\",\"id\":3},{\"name\":\"e77275\",\"id\":4},{\"name\":\"e77916\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF-Santo Antonio de Pádua\",\"cod\":83,\"lat\":-21.5312,\"lon\":-42.1949,\"interfaces\":[{\"name\":\"e75360\",\"id\":1},{\"name\":\"e75996\",\"id\":2},{\"name\":\"e76636\",\"id\":3},{\"name\":\"e77277\",\"id\":4},{\"name\":\"e77918\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF - Santo Antonio de Pádua\",\"cod\":84,\"lat\":-21.5276,\"lon\":-42.2002,\"interfaces\":[{\"name\":\"e75362\",\"id\":1},{\"name\":\"e75998\",\"id\":2},{\"name\":\"e76638\",\"id\":3},{\"name\":\"e77279\",\"id\":4},{\"name\":\"e77920\",\"id\":5}]},{\"caption\":\"FIOCRUZ\",\"id\":\"FIOCRUZ-Sede\",\"cod\":85,\"lat\":-22.8776,\"lon\":-43.2441,\"interfaces\":[{\"name\":\"e75463\",\"id\":1},{\"name\":\"e76099\",\"id\":2},{\"name\":\"e76739\",\"id\":3},{\"name\":\"e77380\",\"id\":4},{\"name\":\"e78021\",\"id\":5}]},{\"caption\":\"UERJ\",\"id\":\"UERJ-Sede\",\"cod\":86,\"lat\":-22.9112,\"lon\":-43.2361,\"interfaces\":[{\"name\":\"e75461\",\"id\":1},{\"name\":\"e76097\",\"id\":2},{\"name\":\"e76737\",\"id\":3},{\"name\":\"e77378\",\"id\":4},{\"name\":\"e78019\",\"id\":5}]},{\"caption\":\"PUC\",\"id\":\"PUC-Rio\",\"cod\":87,\"lat\":-22.9799,\"lon\":-43.2335,\"interfaces\":[{\"name\":\"e75467\",\"id\":1},{\"name\":\"e76103\",\"id\":2},{\"name\":\"e76743\",\"id\":3},{\"name\":\"e77384\",\"id\":4},{\"name\":\"e78025\",\"id\":5}]},{\"caption\":\"CBPF\",\"id\":\"CBPF-Sede\",\"cod\":88,\"lat\":-22.9541,\"lon\":-43.1737,\"interfaces\":[{\"name\":\"e75465\",\"id\":1},{\"name\":\"e76101\",\"id\":2},{\"name\":\"e76741\",\"id\":3},{\"name\":\"e77382\",\"id\":4},{\"name\":\"e78023\",\"id\":5}]},{\"caption\":\"CNEN\",\"id\":\"CNEN-Sede\",\"cod\":89,\"lat\":-22.953,\"lon\":-43.1775,\"interfaces\":[{\"name\":\"e75453\",\"id\":1},{\"name\":\"e75451\",\"id\":2},{\"name\":\"e76087\",\"id\":3},{\"name\":\"e76089\",\"id\":4},{\"name\":\"e76729\",\"id\":5},{\"name\":\"e76727\",\"id\":6},{\"name\":\"e77370\",\"id\":7},{\"name\":\"e77368\",\"id\":8},{\"name\":\"e78011\",\"id\":9},{\"name\":\"e78009\",\"id\":10}]},{\"caption\":\"INES\",\"id\":\"INES\",\"cod\":90,\"lat\":-22.9341,\"lon\":-43.1876,\"interfaces\":[{\"name\":\"e75449\",\"id\":1},{\"name\":\"e75447\",\"id\":2},{\"name\":\"e76085\",\"id\":3},{\"name\":\"e76083\",\"id\":4},{\"name\":\"e76723\",\"id\":5},{\"name\":\"e76725\",\"id\":6},{\"name\":\"e77366\",\"id\":7},{\"name\":\"e77364\",\"id\":8},{\"name\":\"e78007\",\"id\":9},{\"name\":\"e78005\",\"id\":10}]},{\"caption\":\"CPII\",\"id\":\"CPII-Sede\",\"cod\":91,\"lat\":-22.8999,\"lon\":-43.2222,\"interfaces\":[{\"name\":\"e75459\",\"id\":1},{\"name\":\"e76095\",\"id\":2},{\"name\":\"e76735\",\"id\":3},{\"name\":\"e77376\",\"id\":4},{\"name\":\"e78017\",\"id\":5}]},{\"caption\":\"INT\",\"id\":\"INT\",\"cod\":92,\"lat\":-22.8965,\"lon\":-43.1843,\"interfaces\":[{\"name\":\"e75457\",\"id\":1},{\"name\":\"e75455\",\"id\":2},{\"name\":\"e76093\",\"id\":3},{\"name\":\"e76091\",\"id\":4},{\"name\":\"e76733\",\"id\":5},{\"name\":\"e76731\",\"id\":6},{\"name\":\"e77372\",\"id\":7},{\"name\":\"e77374\",\"id\":8},{\"name\":\"e78015\",\"id\":9},{\"name\":\"e78013\",\"id\":10}]},{\"caption\":\"PMPETRO\",\"id\":\"PMPETRO\",\"cod\":93,\"lat\":-22.5077,\"lon\":-43.1815,\"interfaces\":[{\"name\":\"e75563\",\"id\":1},{\"name\":\"e76199\",\"id\":2},{\"name\":\"e76839\",\"id\":3},{\"name\":\"e77480\",\"id\":4},{\"name\":\"e78121\",\"id\":5}]},{\"caption\":\"HFI\",\"id\":\"HFI-2\",\"cod\":94,\"lat\":-22.9838,\"lon\":-43.1957,\"interfaces\":[{\"name\":\"e75565\",\"id\":1},{\"name\":\"e76201\",\"id\":2},{\"name\":\"e76841\",\"id\":3},{\"name\":\"e77482\",\"id\":4},{\"name\":\"e78123\",\"id\":5}]},{\"caption\":\"INMETRO\",\"id\":\"INMETRO-Xerem\",\"cod\":95,\"lat\":-22.5976,\"lon\":-43.2895,\"interfaces\":[{\"name\":\"e75559\",\"id\":1},{\"name\":\"e75561\",\"id\":2},{\"name\":\"e76197\",\"id\":3},{\"name\":\"e76195\",\"id\":4},{\"name\":\"e76835\",\"id\":5},{\"name\":\"e76837\",\"id\":6},{\"name\":\"e77478\",\"id\":7},{\"name\":\"e77476\",\"id\":8},{\"name\":\"e78119\",\"id\":9},{\"name\":\"e78117\",\"id\":10}]},{\"caption\":\"UNIRIO\",\"id\":\"UNIRIO-Sede\",\"cod\":96,\"lat\":-22.9526,\"lon\":-43.1733,\"interfaces\":[{\"name\":\"e75473\",\"id\":1},{\"name\":\"e76109\",\"id\":2},{\"name\":\"e76749\",\"id\":3},{\"name\":\"e77390\",\"id\":4},{\"name\":\"e78031\",\"id\":5}]},{\"caption\":\"MAST\",\"id\":\"MAST\",\"cod\":97,\"lat\":-22.8959,\"lon\":-43.2228,\"interfaces\":[{\"name\":\"e75469\",\"id\":1},{\"name\":\"e75471\",\"id\":2},{\"name\":\"e76105\",\"id\":3},{\"name\":\"e76107\",\"id\":4},{\"name\":\"e76747\",\"id\":5},{\"name\":\"e76745\",\"id\":6},{\"name\":\"e77388\",\"id\":7},{\"name\":\"e77386\",\"id\":8},{\"name\":\"e78029\",\"id\":9},{\"name\":\"e78027\",\"id\":10}]},{\"caption\":\"CTA\",\"id\":\"2CTA\",\"cod\":98,\"lat\":-22.904,\"lon\":-43.1894,\"interfaces\":[{\"name\":\"e75549\",\"id\":1},{\"name\":\"e76185\",\"id\":2},{\"name\":\"e76825\",\"id\":3},{\"name\":\"e77466\",\"id\":4},{\"name\":\"e78107\",\"id\":5}]},{\"caption\":\"UFRRJ\",\"id\":\"UFRRJ - Tres Rios\",\"cod\":99,\"lat\":-22.1166,\"lon\":-43.1972,\"interfaces\":[{\"name\":\"e75316\",\"id\":1},{\"name\":\"e75952\",\"id\":2},{\"name\":\"e76592\",\"id\":3},{\"name\":\"e77233\",\"id\":4},{\"name\":\"e77874\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Pinheiral\",\"cod\":100,\"lat\":-22.5189,\"lon\":-43.9947,\"interfaces\":[{\"name\":\"e75275\",\"id\":1},{\"name\":\"e75911\",\"id\":2},{\"name\":\"e76551\",\"id\":3},{\"name\":\"e77192\",\"id\":4},{\"name\":\"e77833\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Eng. Paulo de Frontin\",\"cod\":101,\"lat\":-22.4927,\"lon\":-43.6055,\"interfaces\":[{\"name\":\"e75276\",\"id\":1},{\"name\":\"e75912\",\"id\":2},{\"name\":\"e76552\",\"id\":3},{\"name\":\"e77193\",\"id\":4},{\"name\":\"e77834\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Duque de Caxias\",\"cod\":102,\"lat\":-22.7496,\"lon\":-43.2983,\"interfaces\":[{\"name\":\"e75313\",\"id\":1},{\"name\":\"e75949\",\"id\":2},{\"name\":\"e76589\",\"id\":3},{\"name\":\"e77230\",\"id\":4},{\"name\":\"e77871\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Paracambi\",\"cod\":103,\"lat\":-22.6113,\"lon\":-43.7111,\"interfaces\":[{\"name\":\"e75267\",\"id\":1},{\"name\":\"e75903\",\"id\":2},{\"name\":\"e76543\",\"id\":3},{\"name\":\"e77184\",\"id\":4},{\"name\":\"e77825\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Mesquita\",\"cod\":104,\"lat\":-22.7824,\"lon\":-43.4245,\"interfaces\":[{\"name\":\"e75269\",\"id\":1},{\"name\":\"e75905\",\"id\":2},{\"name\":\"e76545\",\"id\":3},{\"name\":\"e77186\",\"id\":4},{\"name\":\"e77827\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - São João da Barra\",\"cod\":105,\"lat\":-21.6333,\"lon\":-41.0422,\"interfaces\":[{\"name\":\"e75285\",\"id\":1},{\"name\":\"e75921\",\"id\":2},{\"name\":\"e76561\",\"id\":3},{\"name\":\"e77202\",\"id\":4},{\"name\":\"e77843\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - Quissamã\",\"cod\":106,\"lat\":-22.1159,\"lon\":-41.484,\"interfaces\":[{\"name\":\"e75282\",\"id\":1},{\"name\":\"e75918\",\"id\":2},{\"name\":\"e76558\",\"id\":3},{\"name\":\"e77199\",\"id\":4},{\"name\":\"e77840\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Arraial do Cabo\",\"cod\":107,\"lat\":-22.965,\"lon\":-42.0265,\"interfaces\":[{\"name\":\"e75312\",\"id\":1},{\"name\":\"e75948\",\"id\":2},{\"name\":\"e76588\",\"id\":3},{\"name\":\"e77229\",\"id\":4},{\"name\":\"e77870\",\"id\":5}]},{\"caption\":\"IFF\",\"id\":\"IFF - UPEA\",\"cod\":108,\"lat\":-21.7302,\"lon\":-41.1881,\"interfaces\":[{\"name\":\"e75261\",\"id\":1},{\"name\":\"e75897\",\"id\":2},{\"name\":\"e76537\",\"id\":3},{\"name\":\"e77178\",\"id\":4},{\"name\":\"e77819\",\"id\":5}]},{\"caption\":\"UFRRJ\",\"id\":\"UFRRJ-Campos dos Goytacazes \",\"cod\":109,\"lat\":-21.8031,\"lon\":-41.2967,\"interfaces\":[{\"name\":\"e75499\",\"id\":1},{\"name\":\"e76135\",\"id\":2},{\"name\":\"e76775\",\"id\":3},{\"name\":\"e77416\",\"id\":4},{\"name\":\"e78057\",\"id\":5}]},{\"caption\":\"Fiocruz-Petropolis-RJ\",\"id\":\"Fiocruz-Petropolis-RJ\",\"cod\":110,\"lat\":-22.5154,\"lon\":-43.1873,\"interfaces\":[{\"name\":\"e75501\",\"id\":1},{\"name\":\"e76137\",\"id\":2},{\"name\":\"e76777\",\"id\":3},{\"name\":\"e77418\",\"id\":4},{\"name\":\"e78059\",\"id\":5}]},{\"caption\":\"CETEM\",\"id\":\"CETEM\",\"cod\":111,\"lat\":-22.8603,\"lon\":-43.2215,\"interfaces\":[{\"name\":\"e75481\",\"id\":1},{\"name\":\"e75483\",\"id\":2},{\"name\":\"e76117\",\"id\":3},{\"name\":\"e76119\",\"id\":4},{\"name\":\"e76759\",\"id\":5},{\"name\":\"e76757\",\"id\":6},{\"name\":\"e77400\",\"id\":7},{\"name\":\"e77398\",\"id\":8},{\"name\":\"e78041\",\"id\":9},{\"name\":\"e78039\",\"id\":10}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPS\",\"cod\":112,\"lat\":-22.9712,\"lon\":-43.2236,\"interfaces\":[{\"name\":\"e75485\",\"id\":1},{\"name\":\"e75487\",\"id\":2},{\"name\":\"e76123\",\"id\":3},{\"name\":\"e76121\",\"id\":4},{\"name\":\"e76761\",\"id\":5},{\"name\":\"e76763\",\"id\":6},{\"name\":\"e77404\",\"id\":7},{\"name\":\"e77402\",\"id\":8},{\"name\":\"e78043\",\"id\":9},{\"name\":\"e78045\",\"id\":10}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-Sede\",\"cod\":113,\"lat\":-22.9125,\"lon\":-43.2248,\"interfaces\":[{\"name\":\"e75475\",\"id\":1},{\"name\":\"e76111\",\"id\":2},{\"name\":\"e76751\",\"id\":3},{\"name\":\"e77392\",\"id\":4},{\"name\":\"e78033\",\"id\":5}]},{\"caption\":\"ON\",\"id\":\"ON\",\"cod\":114,\"lat\":-22.895,\"lon\":-43.2257,\"interfaces\":[{\"name\":\"e75477\",\"id\":1},{\"name\":\"e75479\",\"id\":2},{\"name\":\"e76115\",\"id\":3},{\"name\":\"e76113\",\"id\":4},{\"name\":\"e76753\",\"id\":5},{\"name\":\"e76755\",\"id\":6},{\"name\":\"e77396\",\"id\":7},{\"name\":\"e77394\",\"id\":8},{\"name\":\"e78037\",\"id\":9},{\"name\":\"e78035\",\"id\":10}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_ERJ\",\"cod\":115,\"lat\":-22.9541,\"lon\":-43.1708,\"interfaces\":[{\"name\":\"e75495\",\"id\":1},{\"name\":\"e76131\",\"id\":2},{\"name\":\"e76771\",\"id\":3},{\"name\":\"e77412\",\"id\":4},{\"name\":\"e78053\",\"id\":5}]},{\"caption\":\"CEFET\",\"id\":\"CEFET-Maria da Graca\",\"cod\":116,\"lat\":-22.8823,\"lon\":-43.2589,\"interfaces\":[{\"name\":\"e75497\",\"id\":1},{\"name\":\"e76133\",\"id\":2},{\"name\":\"e76773\",\"id\":3},{\"name\":\"e77414\",\"id\":4},{\"name\":\"e78055\",\"id\":5}]},{\"caption\":\"UFRJ\",\"id\":\"UFRJ - Fundão\",\"cod\":117,\"lat\":-22.8576,\"lon\":-43.2329,\"interfaces\":[{\"name\":\"e75489\",\"id\":1},{\"name\":\"e76125\",\"id\":2},{\"name\":\"e76765\",\"id\":3},{\"name\":\"e77406\",\"id\":4},{\"name\":\"e78047\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Campus_Maracana\",\"cod\":118,\"lat\":-22.9106,\"lon\":-43.2203,\"interfaces\":[{\"name\":\"e75493\",\"id\":1},{\"name\":\"e75491\",\"id\":2},{\"name\":\"e76127\",\"id\":3},{\"name\":\"e76129\",\"id\":4},{\"name\":\"e76767\",\"id\":5},{\"name\":\"e76769\",\"id\":6},{\"name\":\"e77410\",\"id\":7},{\"name\":\"e77408\",\"id\":8},{\"name\":\"e78051\",\"id\":9},{\"name\":\"e78049\",\"id\":10}]},{\"caption\":\"INCA\",\"id\":\"INCA-2\",\"cod\":119,\"lat\":-22.9124,\"lon\":-43.1888,\"interfaces\":[{\"name\":\"e75567\",\"id\":1},{\"name\":\"e76203\",\"id\":2},{\"name\":\"e76843\",\"id\":3},{\"name\":\"e77484\",\"id\":4},{\"name\":\"e78125\",\"id\":5}]},{\"caption\":\"INCA\",\"id\":\"INCA-1\",\"cod\":120,\"lat\":-22.9124,\"lon\":-43.1884,\"interfaces\":[{\"name\":\"e75569\",\"id\":1},{\"name\":\"e76205\",\"id\":2},{\"name\":\"e76845\",\"id\":3},{\"name\":\"e77486\",\"id\":4},{\"name\":\"e78127\",\"id\":5}]},{\"caption\":\"UFRJ\",\"id\":\"UFRJ - Xerém\",\"cod\":121,\"lat\":-22.6327,\"lon\":-43.3277,\"interfaces\":[{\"name\":\"e75319\",\"id\":1},{\"name\":\"e75955\",\"id\":2},{\"name\":\"e76595\",\"id\":3},{\"name\":\"e77236\",\"id\":4},{\"name\":\"e77877\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Realengo\",\"cod\":122,\"lat\":-22.8804,\"lon\":-43.4338,\"interfaces\":[{\"name\":\"e75273\",\"id\":1},{\"name\":\"e75909\",\"id\":2},{\"name\":\"e76549\",\"id\":3},{\"name\":\"e77190\",\"id\":4},{\"name\":\"e77831\",\"id\":5}]},{\"caption\":\"INCA\",\"id\":\"INCA\",\"cod\":123,\"lat\":-22.9123,\"lon\":-43.1876,\"interfaces\":[{\"name\":\"e75318\",\"id\":1},{\"name\":\"e75954\",\"id\":2},{\"name\":\"e76594\",\"id\":3},{\"name\":\"e77235\",\"id\":4},{\"name\":\"e77876\",\"id\":5}]},{\"caption\":\"UFRRJ\",\"id\":\"UFRRJ - Nova Iguaçu\",\"cod\":124,\"lat\":-22.7388,\"lon\":-43.4567,\"interfaces\":[{\"name\":\"e75280\",\"id\":1},{\"name\":\"e75916\",\"id\":2},{\"name\":\"e76556\",\"id\":3},{\"name\":\"e77197\",\"id\":4},{\"name\":\"e77838\",\"id\":5}]},{\"caption\":\"UFRJ\",\"id\":\"UFRJ - MACAÉ - Polo Cavaleiros\",\"cod\":125,\"lat\":-22.3286,\"lon\":-41.736,\"interfaces\":[{\"name\":\"e75325\",\"id\":1},{\"name\":\"e75961\",\"id\":2},{\"name\":\"e76601\",\"id\":3},{\"name\":\"e77242\",\"id\":4},{\"name\":\"e77883\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF - Campos do Goytacases\",\"cod\":126,\"lat\":-21.7655,\"lon\":-41.3259,\"interfaces\":[{\"name\":\"e75326\",\"id\":1},{\"name\":\"e75962\",\"id\":2},{\"name\":\"e76602\",\"id\":3},{\"name\":\"e77243\",\"id\":4},{\"name\":\"e77884\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - São Gonçalo\",\"cod\":127,\"lat\":-22.8536,\"lon\":-43.0983,\"interfaces\":[{\"name\":\"e75320\",\"id\":1},{\"name\":\"e75956\",\"id\":2},{\"name\":\"e76596\",\"id\":3},{\"name\":\"e77237\",\"id\":4},{\"name\":\"e77878\",\"id\":5}]},{\"caption\":\"IFRJ\",\"id\":\"IFRJ - Volta Redonda\",\"cod\":128,\"lat\":-22.5067,\"lon\":-44.0955,\"interfaces\":[{\"name\":\"e75323\",\"id\":1},{\"name\":\"e75959\",\"id\":2},{\"name\":\"e76599\",\"id\":3},{\"name\":\"e77240\",\"id\":4},{\"name\":\"e77881\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF - Macaé\",\"cod\":129,\"lat\":-22.3932,\"lon\":-41.8146,\"interfaces\":[{\"name\":\"e75328\",\"id\":1},{\"name\":\"e75964\",\"id\":2},{\"name\":\"e76604\",\"id\":3},{\"name\":\"e77245\",\"id\":4},{\"name\":\"e77886\",\"id\":5}]},{\"caption\":\"UFF\",\"id\":\"UFF - Nova Friburgo\",\"cod\":130,\"lat\":-22.2767,\"lon\":-42.5361,\"interfaces\":[{\"name\":\"e75330\",\"id\":1},{\"name\":\"e75966\",\"id\":2},{\"name\":\"e76606\",\"id\":3},{\"name\":\"e77247\",\"id\":4},{\"name\":\"e77888\",\"id\":5}]}]},\"rn\":{\"clientes\":[{\"caption\":\"UFERSA\",\"id\":\"UFERSA Angicos\",\"cod\":1,\"lat\":-5.66489,\"lon\":-36.6007,\"interfaces\":[{\"name\":\"e16302\",\"id\":1}]},{\"caption\":\"UFERSA\",\"id\":\"UFERSA Mossoro\",\"cod\":2,\"lat\":-5.2061,\"lon\":-37.3292,\"interfaces\":[{\"name\":\"e16301\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Currais Novos\",\"cod\":3,\"lat\":-6.25179,\"lon\":-36.5345,\"interfaces\":[{\"name\":\"e16304\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Mossoro\",\"cod\":4,\"lat\":-5.21366,\"lon\":-37.3191,\"interfaces\":[{\"name\":\"e16303\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN Currais Novos\",\"cod\":5,\"lat\":-6.25166,\"lon\":-36.5273,\"interfaces\":[{\"name\":\"e16306\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Santa Cruz\",\"cod\":6,\"lat\":-6.23336,\"lon\":-36.0286,\"interfaces\":[{\"name\":\"e16305\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Pau dos Ferros\",\"cod\":7,\"lat\":-6.14597,\"lon\":-38.2043,\"interfaces\":[{\"name\":\"e16300\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN Santa Cruz\",\"cod\":8,\"lat\":-6.22741,\"lon\":-36.0221,\"interfaces\":[{\"name\":\"e16307\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Joao Camara\",\"cod\":9,\"lat\":-5.52476,\"lon\":-35.8196,\"interfaces\":[{\"name\":\"e16309\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Apodi\",\"cod\":10,\"lat\":-5.66207,\"lon\":-37.7989,\"interfaces\":[{\"name\":\"e16308\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - HMWG - Dep. Urgência e Emergência\",\"cod\":11,\"lat\":-5.81005,\"lon\":-35.2033,\"interfaces\":[{\"name\":\"e16334\",\"id\":1}]},{\"caption\":\"Residencia Univ. Mipibu - Mista\",\"id\":\"Residencia Univ. Mipibu - Mista\",\"cod\":12,\"lat\":-5.78555,\"lon\":-35.2018,\"interfaces\":[{\"name\":\"e16350\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN - Reitoria\",\"cod\":13,\"lat\":-5.81138,\"lon\":-35.2,\"interfaces\":[{\"name\":\"e16290\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN - Campus Central\",\"cod\":14,\"lat\":-5.81167,\"lon\":-35.203,\"interfaces\":[{\"name\":\"e16322\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - SINFO\",\"cod\":15,\"lat\":-5.84152,\"lon\":-35.1987,\"interfaces\":[{\"name\":\"e16321\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_MEJC-UFRN\",\"cod\":16,\"lat\":-5.78159,\"lon\":-35.1979,\"interfaces\":[{\"name\":\"e16320\",\"id\":1}]},{\"caption\":\"UNP\",\"id\":\"UNP - Floriano Peixoto\",\"cod\":17,\"lat\":-5.78222,\"lon\":-35.2005,\"interfaces\":[{\"name\":\"e16326\",\"id\":1}]},{\"caption\":\"CLBI\",\"id\":\"CLBI\",\"cod\":18,\"lat\":-5.92287,\"lon\":-35.1684,\"interfaces\":[{\"name\":\"e16325\",\"id\":1}]},{\"caption\":\"IPEM\",\"id\":\"IPEM - RN\",\"cod\":19,\"lat\":-5.79476,\"lon\":-35.2112,\"interfaces\":[{\"name\":\"e16324\",\"id\":1}]},{\"caption\":\"CTGÁS\",\"id\":\"CTGÁS \",\"cod\":20,\"lat\":-5.82455,\"lon\":-35.226,\"interfaces\":[{\"name\":\"e16323\",\"id\":1}]},{\"caption\":\"UNP\",\"id\":\"UNP - Roberto Freire\",\"cod\":21,\"lat\":-5.8616,\"lon\":-35.1927,\"interfaces\":[{\"name\":\"e16284\",\"id\":1}]},{\"caption\":\"UNP\",\"id\":\"UNP - Nascimento de Castro\",\"cod\":22,\"lat\":-5.81431,\"lon\":-35.2156,\"interfaces\":[{\"name\":\"e16327\",\"id\":1}]},{\"caption\":\"IMD\",\"id\":\"IMD-TC-Helio Vasconcelos\",\"cod\":23,\"lat\":-5.69762,\"lon\":-35.2881,\"interfaces\":[{\"name\":\"e16341\",\"id\":1}]},{\"caption\":\"IMD\",\"id\":\"IMD-TC-Ascendina Lustosa\",\"cod\":24,\"lat\":-6.04574,\"lon\":-35.4327,\"interfaces\":[{\"name\":\"e16340\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN - Rocas\",\"cod\":25,\"lat\":-5.77529,\"lon\":-35.199,\"interfaces\":[{\"name\":\"e16274\",\"id\":1}]},{\"caption\":\"SW\",\"id\":\"SW.CENTRO.CONVENCOES\",\"cod\":26,\"lat\":-5.8622,\"lon\":-35.1823,\"interfaces\":[{\"name\":\"e16354\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUAB-UFRN\",\"cod\":27,\"lat\":-6.22709,\"lon\":-36.021,\"interfaces\":[{\"name\":\"e16353\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - COMUNICA\",\"cod\":28,\"lat\":-5.83813,\"lon\":-35.2006,\"interfaces\":[{\"name\":\"e16285\",\"id\":1}]},{\"caption\":\"Residencia Univ. Pr. Civica - Feminina\",\"id\":\"Residencia Univ. Pr. Civica - Feminina\",\"cod\":29,\"lat\":-5.78359,\"lon\":-35.201,\"interfaces\":[{\"name\":\"e16352\",\"id\":1}]},{\"caption\":\"UFERSA\",\"id\":\"UFERSA - Pau dos Ferros\",\"cod\":30,\"lat\":-6.10625,\"lon\":-38.1839,\"interfaces\":[{\"name\":\"e16351\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Lajes\",\"cod\":31,\"lat\":-5.70452,\"lon\":-36.2354,\"interfaces\":[{\"name\":\"e16355\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - Museu\",\"cod\":32,\"lat\":-5.80326,\"lon\":-35.2018,\"interfaces\":[{\"name\":\"e16330\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - Dep. Odontologia\",\"cod\":33,\"lat\":-5.81572,\"lon\":-35.2059,\"interfaces\":[{\"name\":\"e16331\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - Enfermagem\",\"cod\":34,\"lat\":-5.83363,\"lon\":-35.2022,\"interfaces\":[{\"name\":\"e16346\",\"id\":1}]},{\"caption\":\"UERN\",\"id\":\"UERN - ZN\",\"cod\":35,\"lat\":-5.75479,\"lon\":-35.2398,\"interfaces\":[{\"name\":\"e16291\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN - Cidade Alta\",\"cod\":36,\"lat\":-5.78834,\"lon\":-35.2074,\"interfaces\":[{\"name\":\"e16278\",\"id\":1}]},{\"caption\":\"LIGA\",\"id\":\"LIGA - Policlínica\",\"cod\":37,\"lat\":-5.79355,\"lon\":-35.2165,\"interfaces\":[{\"name\":\"e16279\",\"id\":1}]},{\"caption\":\"LIGA\",\"id\":\"LIGA - CECAN\",\"cod\":38,\"lat\":-5.81579,\"lon\":-35.2293,\"interfaces\":[{\"name\":\"e16287\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN - Parnamirim\",\"cod\":39,\"lat\":-5.93917,\"lon\":-35.2664,\"interfaces\":[{\"name\":\"e16328\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - CCS\",\"cod\":40,\"lat\":-5.78075,\"lon\":-35.1977,\"interfaces\":[{\"name\":\"e16329\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN - São Gonçalo do Amarante\",\"cod\":41,\"lat\":-5.7907,\"lon\":-35.338,\"interfaces\":[{\"name\":\"e16294\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN - Zona Norte\",\"cod\":42,\"lat\":-5.74961,\"lon\":-35.2611,\"interfaces\":[{\"name\":\"e16292\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Ipanguacu\",\"cod\":43,\"lat\":-5.50378,\"lon\":-36.8574,\"interfaces\":[{\"name\":\"e16310\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Macau\",\"cod\":44,\"lat\":-5.11314,\"lon\":-36.6289,\"interfaces\":[{\"name\":\"e16311\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Canguaretama\",\"cod\":45,\"lat\":-6.38202,\"lon\":-35.1298,\"interfaces\":[{\"name\":\"e16312\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Ceara Mirim\",\"cod\":46,\"lat\":-5.65196,\"lon\":-35.4287,\"interfaces\":[{\"name\":\"e16313\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Sao Paulo do Potengi\",\"cod\":47,\"lat\":-5.89585,\"lon\":-35.7539,\"interfaces\":[{\"name\":\"e16314\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN Caico\",\"cod\":48,\"lat\":-6.46791,\"lon\":-37.085,\"interfaces\":[{\"name\":\"e16315\",\"id\":1}]},{\"caption\":\"UFERSA\",\"id\":\"UFERSA Caraubas\",\"cod\":49,\"lat\":-5.77374,\"lon\":-37.5685,\"interfaces\":[{\"name\":\"e16316\",\"id\":1}]},{\"caption\":\"INPE\",\"id\":\"INPE\",\"cod\":50,\"lat\":-5.83539,\"lon\":-35.2088,\"interfaces\":[{\"name\":\"e16317\",\"id\":1}]},{\"caption\":\"SW\",\"id\":\"SW.HEMONORTE\",\"cod\":51,\"lat\":-5.8105,\"lon\":-35.1966,\"interfaces\":[{\"name\":\"e16318\",\"id\":1}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUOL-UFRN\",\"cod\":52,\"lat\":-5.78033,\"lon\":-35.197,\"interfaces\":[{\"name\":\"e16319\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - IMD\",\"cod\":53,\"lat\":-5.83216,\"lon\":-35.2053,\"interfaces\":[{\"name\":\"e16335\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - Escola de Musica\",\"cod\":54,\"lat\":-5.83748,\"lon\":-35.2064,\"interfaces\":[{\"name\":\"e16345\",\"id\":1}]},{\"caption\":\"UNP\",\"id\":\"UNP - Salgado Filho\",\"cod\":55,\"lat\":-5.81433,\"lon\":-35.2059,\"interfaces\":[{\"name\":\"e16337\",\"id\":1}]},{\"caption\":\"UERN\",\"id\":\"UERN - Mossoró\",\"cod\":56,\"lat\":-5.20579,\"lon\":-37.3163,\"interfaces\":[{\"name\":\"e16347\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN - TVU\",\"cod\":57,\"lat\":-5.81259,\"lon\":-35.1929,\"interfaces\":[{\"name\":\"e16348\",\"id\":1}]},{\"caption\":\"Base Naval\",\"id\":\"Base Naval\",\"cod\":58,\"lat\":-5.79119,\"lon\":-35.2216,\"interfaces\":[{\"name\":\"e16342\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - EAJ - Ensino Superior\",\"cod\":59,\"lat\":-5.88586,\"lon\":-35.363,\"interfaces\":[{\"name\":\"e16297\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - EAJ - CVT\",\"cod\":60,\"lat\":-5.88438,\"lon\":-35.3643,\"interfaces\":[{\"name\":\"e16343\",\"id\":1}]},{\"caption\":\"SEDEC\",\"id\":\"SEDEC - FAPERN\",\"cod\":61,\"lat\":-5.82899,\"lon\":-35.2146,\"interfaces\":[{\"name\":\"e16336\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - EAJ - Ensino Medio\",\"cod\":62,\"lat\":-5.88525,\"lon\":-35.3648,\"interfaces\":[{\"name\":\"e16344\",\"id\":1}]},{\"caption\":\"IFRN\",\"id\":\"IFRN Caicó\",\"cod\":63,\"lat\":-6.4456,\"lon\":-37.0684,\"interfaces\":[{\"name\":\"e16349\",\"id\":1}]},{\"caption\":\"IMD\",\"id\":\"IMD-TC-Mon Senhor Paiva\",\"cod\":64,\"lat\":-6.04429,\"lon\":-35.4306,\"interfaces\":[{\"name\":\"e16339\",\"id\":1}]},{\"caption\":\"IMD\",\"id\":\"IMD-TC-Prefeitura\",\"cod\":65,\"lat\":-6.06751,\"lon\":-35.3322,\"interfaces\":[{\"name\":\"e16338\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - HGT - Dep. Infectologia\",\"cod\":66,\"lat\":-5.79736,\"lon\":-35.226,\"interfaces\":[{\"name\":\"e16333\",\"id\":1}]},{\"caption\":\"UFRN\",\"id\":\"UFRN - DOL\",\"cod\":67,\"lat\":-5.7951,\"lon\":-35.183,\"interfaces\":[{\"name\":\"e16332\",\"id\":1}]}]},\"ro\":{\"clientes\":[{\"caption\":\"IFRO\",\"id\":\"IFRO-SÃO MIGUEL\",\"cod\":1,\"lat\":-11.6813,\"lon\":-62.7058,\"interfaces\":[{\"name\":\"e7975\",\"id\":1}]},{\"caption\":\"CENSIPAM\",\"id\":\"CENSIPAM - RO\",\"cod\":2,\"lat\":-8.70994,\"lon\":-63.8964,\"interfaces\":[{\"name\":\"e7985\",\"id\":1}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPAFRO\",\"cod\":3,\"lat\":-8.79451,\"lon\":-63.8466,\"interfaces\":[{\"name\":\"e7973\",\"id\":1}]},{\"caption\":\"UNIR\",\"id\":\"UNIR - Campus BR\",\"cod\":4,\"lat\":-8.83775,\"lon\":-63.9377,\"interfaces\":[{\"name\":\"e7987\",\"id\":1}]},{\"caption\":\"UNIR\",\"id\":\"UNIR - Ariquemes\",\"cod\":5,\"lat\":-9.90069,\"lon\":-63.0338,\"interfaces\":[{\"name\":\"e7986\",\"id\":1}]},{\"caption\":\"IFRO\",\"id\":\"IFRO - Zona Norte\",\"cod\":6,\"lat\":-8.74109,\"lon\":-63.8891,\"interfaces\":[{\"name\":\"e7982\",\"id\":1}]},{\"caption\":\"UNIR\",\"id\":\"UNIR - Vilhena\",\"cod\":7,\"lat\":-12.7518,\"lon\":-60.1427,\"interfaces\":[{\"name\":\"e7981\",\"id\":1}]},{\"caption\":\"IFRO\",\"id\":\"IFRO - Calama\",\"cod\":8,\"lat\":-8.74453,\"lon\":-63.8715,\"interfaces\":[{\"name\":\"e7984\",\"id\":1}]},{\"caption\":\"UNIR\",\"id\":\"UNIR - Centro\",\"cod\":9,\"lat\":-8.76355,\"lon\":-63.9066,\"interfaces\":[{\"name\":\"e7970\",\"id\":1}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_REPO\",\"cod\":10,\"lat\":-8.74201,\"lon\":-63.9032,\"interfaces\":[{\"name\":\"e7971\",\"id\":1}]},{\"caption\":\"UNIR\",\"id\":\"UNIR - Medici\",\"cod\":11,\"lat\":-11.176,\"lon\":-61.8885,\"interfaces\":[{\"name\":\"e7994\",\"id\":1}]},{\"caption\":\"IFRO\",\"id\":\"IFRO - GUAJARÁ MIRIM\",\"cod\":12,\"lat\":-10.762,\"lon\":-65.3152,\"interfaces\":[{\"name\":\"e7995\",\"id\":1}]},{\"caption\":\"IFRO\",\"id\":\"IFRO - Vilhena\",\"cod\":13,\"lat\":-12.7045,\"lon\":-60.1188,\"interfaces\":[{\"name\":\"e7988\",\"id\":1}]},{\"caption\":\"IFRO\",\"id\":\"IFRO - Cacoal\",\"cod\":14,\"lat\":-11.4803,\"lon\":-61.3805,\"interfaces\":[{\"name\":\"e7976\",\"id\":1}]},{\"caption\":\"FIOCRUZ\",\"id\":\"FIOCRUZ-RO\",\"cod\":15,\"lat\":-8.78442,\"lon\":-63.8594,\"interfaces\":[{\"name\":\"e7972\",\"id\":1}]},{\"caption\":\"IFRO\",\"id\":\"IFRO - Ji-Paraná\",\"cod\":16,\"lat\":-10.8818,\"lon\":-61.9679,\"interfaces\":[{\"name\":\"e7989\",\"id\":1}]},{\"caption\":\"IFRO\",\"id\":\"IFRO - Colorado\",\"cod\":17,\"lat\":-13.1148,\"lon\":-60.4867,\"interfaces\":[{\"name\":\"e7990\",\"id\":1}]},{\"caption\":\"IFRO\",\"id\":\"IFRO - Ariquemes\",\"cod\":18,\"lat\":-9.94947,\"lon\":-62.9627,\"interfaces\":[{\"name\":\"e7991\",\"id\":1}]},{\"caption\":\"IFAM\",\"id\":\"IFAM-HUMAITÁ\",\"cod\":19,\"lat\":-7.5514,\"lon\":-63.0714,\"interfaces\":[{\"name\":\"e7992\",\"id\":1}]},{\"caption\":\"IFRO\",\"id\":\"IFRO - JARU\",\"cod\":20,\"lat\":-10.4365,\"lon\":-62.453,\"interfaces\":[{\"name\":\"e7993\",\"id\":1}]},{\"caption\":\"UNIR\",\"id\":\"UNIR - Rolim de Moura\",\"cod\":21,\"lat\":-11.7049,\"lon\":-61.7779,\"interfaces\":[{\"name\":\"e7977\",\"id\":1}]},{\"caption\":\"UNIR\",\"id\":\"UNIR - Guajará-Mirim\",\"cod\":22,\"lat\":-10.7517,\"lon\":-65.3025,\"interfaces\":[{\"name\":\"e7978\",\"id\":1}]},{\"caption\":\"UNIR\",\"id\":\"UNIR - Cacoal\",\"cod\":23,\"lat\":-11.4165,\"lon\":-61.4553,\"interfaces\":[{\"name\":\"e7979\",\"id\":1}]},{\"caption\":\"UNIR\",\"id\":\"UNIR - Ji-Paraná\",\"cod\":24,\"lat\":-10.8808,\"lon\":-61.9696,\"interfaces\":[{\"name\":\"e7980\",\"id\":1}]}]},\"rr\":{\"clientes\":[{\"caption\":\"Univirr-Pricumã\",\"id\":\"Univirr-Pricumã\",\"cod\":1,\"lat\":2.8051,\"lon\":-60.6981,\"interfaces\":[{\"name\":\"e2847\",\"id\":1},{\"name\":\"e2937\",\"id\":2}]},{\"caption\":\"IFRR\",\"id\":\"IFRR-Amajari\",\"cod\":2,\"lat\":3.63247,\"lon\":-61.4107,\"interfaces\":[{\"name\":\"e2845\",\"id\":1},{\"name\":\"e2935\",\"id\":2}]},{\"caption\":\"IFRR\",\"id\":\"IFRR-Zona-Oeste\",\"cod\":3,\"lat\":2.79458,\"lon\":-60.7729,\"interfaces\":[{\"name\":\"e2839\",\"id\":1},{\"name\":\"e2928\",\"id\":2}]},{\"caption\":\"UERR\",\"id\":\"UERR-Sede\",\"cod\":4,\"lat\":2.83216,\"lon\":-60.6594,\"interfaces\":[{\"name\":\"e2837\",\"id\":1},{\"name\":\"e2926\",\"id\":2}]},{\"caption\":\"IFRR\",\"id\":\"IFRR-Reitoria\",\"cod\":5,\"lat\":2.80145,\"lon\":-60.6762,\"interfaces\":[{\"name\":\"e2842\",\"id\":1},{\"name\":\"e2931\",\"id\":2}]},{\"caption\":\"IFRR\",\"id\":\"IFRR-Novo-Paraíso\",\"cod\":6,\"lat\":1.24979,\"lon\":-60.4851,\"interfaces\":[{\"name\":\"e2834\",\"id\":1},{\"name\":\"e2832\",\"id\":2},{\"name\":\"e2920\",\"id\":3},{\"name\":\"e2922\",\"id\":4}]},{\"caption\":\"SESAU\",\"id\":\"SESAU-Telesaúde\",\"cod\":7,\"lat\":2.83256,\"lon\":-60.6911,\"interfaces\":[{\"name\":\"e2831\",\"id\":1},{\"name\":\"e2830\",\"id\":2},{\"name\":\"e2918\",\"id\":3},{\"name\":\"e2919\",\"id\":4}]},{\"caption\":\"SMEC\",\"id\":\"SMEC\",\"cod\":8,\"lat\":2.81905,\"lon\":-60.6758,\"interfaces\":[{\"name\":\"e2848\",\"id\":1},{\"name\":\"e2938\",\"id\":2}]},{\"caption\":\"UFRR\",\"id\":\"UFRR - Paricarana\",\"cod\":9,\"lat\":2.83385,\"lon\":-60.6947,\"interfaces\":[{\"name\":\"e2828\",\"id\":1},{\"name\":\"e2916\",\"id\":2}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPAFRR_Sede\",\"cod\":10,\"lat\":2.75728,\"lon\":-60.7312,\"interfaces\":[{\"name\":\"e2817\",\"id\":1},{\"name\":\"e2905\",\"id\":2}]},{\"caption\":\"UFRR\",\"id\":\"UFRR - Cauamé\",\"cod\":11,\"lat\":2.86992,\"lon\":-60.7142,\"interfaces\":[{\"name\":\"e2822\",\"id\":1},{\"name\":\"e2910\",\"id\":2}]},{\"caption\":\"IFRR\",\"id\":\"IFRR - BoaVista\",\"cod\":12,\"lat\":2.81405,\"lon\":-60.6941,\"interfaces\":[{\"name\":\"e2824\",\"id\":1},{\"name\":\"e2912\",\"id\":2}]},{\"caption\":\"INPA\",\"id\":\"INPA\",\"cod\":13,\"lat\":2.82254,\"lon\":-60.6718,\"interfaces\":[{\"name\":\"e2815\",\"id\":1},{\"name\":\"e2903\",\"id\":2}]},{\"caption\":\"NRTU\",\"id\":\"NRTU - UFRR\",\"cod\":14,\"lat\":2.83092,\"lon\":-60.6753,\"interfaces\":[{\"name\":\"e2826\",\"id\":1},{\"name\":\"e2914\",\"id\":2}]},{\"caption\":\"Embrapa_Água-Boa\",\"id\":\"Embrapa_Água-Boa\",\"cod\":15,\"lat\":2.66122,\"lon\":-60.8645,\"interfaces\":[{\"name\":\"e2934\",\"id\":1}]},{\"caption\":\"IFRR\",\"id\":\"IFRR-Bonfim\",\"cod\":16,\"lat\":3.35719,\"lon\":-59.8419,\"interfaces\":[{\"name\":\"e2923\",\"id\":1}]}]},\"rs\":{\"clientes\":[{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPPSUL\",\"cod\":1,\"lat\":-31.3525,\"lon\":-54.016,\"interfaces\":[{\"name\":\"e68438\",\"id\":1},{\"name\":\"e68957\",\"id\":2},{\"name\":\"e69478\",\"id\":3},{\"name\":\"e69999\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSul - Gravatai\",\"cod\":2,\"lat\":-29.9293,\"lon\":-51.0394,\"interfaces\":[{\"name\":\"e68440\",\"id\":1},{\"name\":\"e68959\",\"id\":2},{\"name\":\"e69480\",\"id\":3},{\"name\":\"e70001\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Porto Alegre\",\"cod\":3,\"lat\":-30.0265,\"lon\":-51.2213,\"interfaces\":[{\"name\":\"e68428\",\"id\":1},{\"name\":\"e68947\",\"id\":2},{\"name\":\"e69468\",\"id\":3},{\"name\":\"e69989\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Alvorada\",\"cod\":4,\"lat\":-30.0008,\"lon\":-51.0518,\"interfaces\":[{\"name\":\"e68430\",\"id\":1},{\"name\":\"e68949\",\"id\":2},{\"name\":\"e69470\",\"id\":3},{\"name\":\"e69991\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - Lajeado\",\"cod\":5,\"lat\":-29.4361,\"lon\":-51.9876,\"interfaces\":[{\"name\":\"e68432\",\"id\":1},{\"name\":\"e68434\",\"id\":2},{\"name\":\"e68951\",\"id\":3},{\"name\":\"e68953\",\"id\":4},{\"name\":\"e69474\",\"id\":5},{\"name\":\"e69472\",\"id\":6},{\"name\":\"e69993\",\"id\":7},{\"name\":\"e69995\",\"id\":8}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPUV\",\"cod\":6,\"lat\":-29.1632,\"lon\":-51.5316,\"interfaces\":[{\"name\":\"e68436\",\"id\":1},{\"name\":\"e68955\",\"id\":2},{\"name\":\"e69476\",\"id\":3},{\"name\":\"e69997\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - Bagé\",\"cod\":7,\"lat\":-31.3323,\"lon\":-54.0719,\"interfaces\":[{\"name\":\"e68420\",\"id\":1},{\"name\":\"e68939\",\"id\":2},{\"name\":\"e69460\",\"id\":3},{\"name\":\"e69981\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - Jaguarao\",\"cod\":8,\"lat\":-32.5504,\"lon\":-53.3684,\"interfaces\":[{\"name\":\"e68422\",\"id\":1},{\"name\":\"e68941\",\"id\":2},{\"name\":\"e69462\",\"id\":3},{\"name\":\"e69983\",\"id\":4}]},{\"caption\":\"UNISC\",\"id\":\"UNISC\",\"cod\":9,\"lat\":-29.6978,\"lon\":-52.4385,\"interfaces\":[{\"name\":\"e68424\",\"id\":1},{\"name\":\"e68943\",\"id\":2},{\"name\":\"e69464\",\"id\":3},{\"name\":\"e69985\",\"id\":4}]},{\"caption\":\"UFCSPA\",\"id\":\"UFCSPA\",\"cod\":10,\"lat\":-30.0316,\"lon\":-51.2204,\"interfaces\":[{\"name\":\"e68426\",\"id\":1},{\"name\":\"e68945\",\"id\":2},{\"name\":\"e69466\",\"id\":3},{\"name\":\"e69987\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - S. Livramento\",\"cod\":11,\"lat\":-30.8889,\"lon\":-55.5291,\"interfaces\":[{\"name\":\"e68402\",\"id\":1},{\"name\":\"e68921\",\"id\":2},{\"name\":\"e69442\",\"id\":3},{\"name\":\"e69963\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - S. Gabriel\",\"cod\":12,\"lat\":-30.358,\"lon\":-54.334,\"interfaces\":[{\"name\":\"e68400\",\"id\":1},{\"name\":\"e68919\",\"id\":2},{\"name\":\"e69440\",\"id\":3},{\"name\":\"e69961\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Vacaria\",\"cod\":13,\"lat\":-28.495,\"lon\":-50.957,\"interfaces\":[{\"name\":\"e68406\",\"id\":1},{\"name\":\"e68925\",\"id\":2},{\"name\":\"e69446\",\"id\":3},{\"name\":\"e69967\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - Uruguaiana\",\"cod\":14,\"lat\":-29.7706,\"lon\":-57.072,\"interfaces\":[{\"name\":\"e68404\",\"id\":1},{\"name\":\"e68923\",\"id\":2},{\"name\":\"e69444\",\"id\":3},{\"name\":\"e69965\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - Eldorado do Sul\",\"cod\":15,\"lat\":-30.092,\"lon\":-51.6722,\"interfaces\":[{\"name\":\"e68410\",\"id\":1},{\"name\":\"e68929\",\"id\":2},{\"name\":\"e69450\",\"id\":3},{\"name\":\"e69971\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - Uruguaiana\",\"cod\":16,\"lat\":-29.7819,\"lon\":-57.1072,\"interfaces\":[{\"name\":\"e68408\",\"id\":1},{\"name\":\"e68927\",\"id\":2},{\"name\":\"e69448\",\"id\":3},{\"name\":\"e69969\",\"id\":4}]},{\"caption\":\"FURG\",\"id\":\"FURG - Unidade Saúde\",\"cod\":17,\"lat\":-32.0297,\"lon\":-52.1026,\"interfaces\":[{\"name\":\"e68414\",\"id\":1},{\"name\":\"e68933\",\"id\":2},{\"name\":\"e69454\",\"id\":3},{\"name\":\"e69975\",\"id\":4}]},{\"caption\":\"FURG\",\"id\":\"FURG - Santa Vitória do Palmar\",\"cod\":18,\"lat\":-33.5347,\"lon\":-53.3827,\"interfaces\":[{\"name\":\"e68412\",\"id\":1},{\"name\":\"e68931\",\"id\":2},{\"name\":\"e69452\",\"id\":3},{\"name\":\"e69973\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - Sapiranga\",\"cod\":19,\"lat\":-29.6481,\"lon\":-51.0321,\"interfaces\":[{\"name\":\"e68418\",\"id\":1},{\"name\":\"e68937\",\"id\":2},{\"name\":\"e69458\",\"id\":3},{\"name\":\"e69979\",\"id\":4}]},{\"caption\":\"UFSM\",\"id\":\"UFSM - Cachoeira\",\"cod\":20,\"lat\":-30.0441,\"lon\":-52.9001,\"interfaces\":[{\"name\":\"e68416\",\"id\":1},{\"name\":\"e68935\",\"id\":2},{\"name\":\"e69456\",\"id\":3},{\"name\":\"e69977\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - São Borja\",\"cod\":21,\"lat\":-28.6498,\"lon\":-56.0034,\"interfaces\":[{\"name\":\"e68322\",\"id\":1},{\"name\":\"e68841\",\"id\":2},{\"name\":\"e69362\",\"id\":3},{\"name\":\"e69883\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - Santo Augusto\",\"cod\":22,\"lat\":-27.8521,\"lon\":-53.7791,\"interfaces\":[{\"name\":\"e68320\",\"id\":1},{\"name\":\"e68839\",\"id\":2},{\"name\":\"e69360\",\"id\":3},{\"name\":\"e69881\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - Santo Angelo\",\"cod\":23,\"lat\":-28.3049,\"lon\":-54.2569,\"interfaces\":[{\"name\":\"e68318\",\"id\":1},{\"name\":\"e68837\",\"id\":2},{\"name\":\"e69358\",\"id\":3},{\"name\":\"e69879\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - Reitoria\",\"cod\":24,\"lat\":-29.7054,\"lon\":-53.7351,\"interfaces\":[{\"name\":\"e68316\",\"id\":1},{\"name\":\"e68835\",\"id\":2},{\"name\":\"e69356\",\"id\":3},{\"name\":\"e69877\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - Panambi\",\"cod\":25,\"lat\":-28.2811,\"lon\":-53.5148,\"interfaces\":[{\"name\":\"e68314\",\"id\":1},{\"name\":\"e68833\",\"id\":2},{\"name\":\"e69354\",\"id\":3},{\"name\":\"e69875\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - Júlio de Castilhos\",\"cod\":26,\"lat\":-29.227,\"lon\":-53.6833,\"interfaces\":[{\"name\":\"e68312\",\"id\":1},{\"name\":\"e68831\",\"id\":2},{\"name\":\"e69352\",\"id\":3},{\"name\":\"e69873\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - Jaguari\",\"cod\":27,\"lat\":-29.5062,\"lon\":-54.6762,\"interfaces\":[{\"name\":\"e68310\",\"id\":1},{\"name\":\"e68829\",\"id\":2},{\"name\":\"e69350\",\"id\":3},{\"name\":\"e69871\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - Alegrete\",\"cod\":28,\"lat\":-29.7975,\"lon\":-55.7949,\"interfaces\":[{\"name\":\"e68308\",\"id\":1},{\"name\":\"e68827\",\"id\":2},{\"name\":\"e69348\",\"id\":3},{\"name\":\"e69869\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - São Vicente do Sul\",\"cod\":29,\"lat\":-29.6926,\"lon\":-54.6806,\"interfaces\":[{\"name\":\"e68326\",\"id\":1},{\"name\":\"e68845\",\"id\":2},{\"name\":\"e69366\",\"id\":3},{\"name\":\"e69887\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha - Santa Rosa\",\"cod\":30,\"lat\":-27.8521,\"lon\":-54.4545,\"interfaces\":[{\"name\":\"e68324\",\"id\":1},{\"name\":\"e68843\",\"id\":2},{\"name\":\"e69364\",\"id\":3},{\"name\":\"e69885\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS – Litoral\",\"cod\":31,\"lat\":-29.9737,\"lon\":-50.2277,\"interfaces\":[{\"name\":\"e68376\",\"id\":1},{\"name\":\"e68895\",\"id\":2},{\"name\":\"e69416\",\"id\":3},{\"name\":\"e69937\",\"id\":4}]},{\"caption\":\"UFSM\",\"id\":\"UFSM - Frederico Westphalen\",\"cod\":32,\"lat\":-27.3924,\"lon\":-53.427,\"interfaces\":[{\"name\":\"e68377\",\"id\":1},{\"name\":\"e68896\",\"id\":2},{\"name\":\"e69417\",\"id\":3},{\"name\":\"e69938\",\"id\":4}]},{\"caption\":\"UFFS\",\"id\":\"UFFS - Erechim\",\"cod\":33,\"lat\":-27.7287,\"lon\":-52.2841,\"interfaces\":[{\"name\":\"e68364\",\"id\":1},{\"name\":\"e68883\",\"id\":2},{\"name\":\"e69404\",\"id\":3},{\"name\":\"e69925\",\"id\":4}]},{\"caption\":\"UFFS\",\"id\":\"UFFS - P. Fundo\",\"cod\":34,\"lat\":-28.2911,\"lon\":-52.4532,\"interfaces\":[{\"name\":\"e68366\",\"id\":1},{\"name\":\"e68885\",\"id\":2},{\"name\":\"e69406\",\"id\":3},{\"name\":\"e69927\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - V Aires\",\"cod\":35,\"lat\":-29.6367,\"lon\":-52.1701,\"interfaces\":[{\"name\":\"e68360\",\"id\":1},{\"name\":\"e68879\",\"id\":2},{\"name\":\"e69400\",\"id\":3},{\"name\":\"e69921\",\"id\":4}]},{\"caption\":\"UFFS\",\"id\":\"UFFS - C. Largo\",\"cod\":36,\"lat\":-28.1414,\"lon\":-54.7531,\"interfaces\":[{\"name\":\"e68362\",\"id\":1},{\"name\":\"e68881\",\"id\":2},{\"name\":\"e69402\",\"id\":3},{\"name\":\"e69923\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - Ceclimar\",\"cod\":37,\"lat\":-29.9746,\"lon\":-50.1368,\"interfaces\":[{\"name\":\"e68372\",\"id\":1},{\"name\":\"e68891\",\"id\":2},{\"name\":\"e69412\",\"id\":3},{\"name\":\"e69933\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - Gramado\",\"cod\":38,\"lat\":-29.3767,\"lon\":-50.8771,\"interfaces\":[{\"name\":\"e68374\",\"id\":1},{\"name\":\"e68893\",\"id\":2},{\"name\":\"e69414\",\"id\":3},{\"name\":\"e69935\",\"id\":4}]},{\"caption\":\"UFPEL\",\"id\":\"UFPEL - C. Do Leao\",\"cod\":39,\"lat\":-31.8023,\"lon\":-52.4153,\"interfaces\":[{\"name\":\"e68368\",\"id\":1},{\"name\":\"e68887\",\"id\":2},{\"name\":\"e69408\",\"id\":3},{\"name\":\"e69929\",\"id\":4}]},{\"caption\":\"UFPEL\",\"id\":\"UFPEL - Porto\",\"cod\":40,\"lat\":-31.781,\"lon\":-52.3227,\"interfaces\":[{\"name\":\"e68370\",\"id\":1},{\"name\":\"e68889\",\"id\":2},{\"name\":\"e69410\",\"id\":3},{\"name\":\"e69931\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - Itaqui\",\"cod\":41,\"lat\":-29.1564,\"lon\":-56.5507,\"interfaces\":[{\"name\":\"e68392\",\"id\":1},{\"name\":\"e68911\",\"id\":2},{\"name\":\"e69432\",\"id\":3},{\"name\":\"e69953\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - Jaguarao\",\"cod\":42,\"lat\":-32.5503,\"lon\":-53.3933,\"interfaces\":[{\"name\":\"e68394\",\"id\":1},{\"name\":\"e68913\",\"id\":2},{\"name\":\"e69434\",\"id\":3},{\"name\":\"e69955\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - Cacapava\",\"cod\":43,\"lat\":-30.498,\"lon\":-53.4808,\"interfaces\":[{\"name\":\"e68388\",\"id\":1},{\"name\":\"e68907\",\"id\":2},{\"name\":\"e69428\",\"id\":3},{\"name\":\"e69949\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - D. Pedrito\",\"cod\":44,\"lat\":-30.994,\"lon\":-54.6678,\"interfaces\":[{\"name\":\"e68390\",\"id\":1},{\"name\":\"e68909\",\"id\":2},{\"name\":\"e69430\",\"id\":3},{\"name\":\"e69951\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - Alegrete\",\"cod\":45,\"lat\":-29.7894,\"lon\":-55.7681,\"interfaces\":[{\"name\":\"e68384\",\"id\":1},{\"name\":\"e68903\",\"id\":2},{\"name\":\"e69424\",\"id\":3},{\"name\":\"e69945\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - Bagé\",\"cod\":46,\"lat\":-31.3045,\"lon\":-54.0633,\"interfaces\":[{\"name\":\"e68386\",\"id\":1},{\"name\":\"e68905\",\"id\":2},{\"name\":\"e69426\",\"id\":3},{\"name\":\"e69947\",\"id\":4}]},{\"caption\":\"UFSM\",\"id\":\"UFSM - Palmeira das Missões\",\"cod\":47,\"lat\":-27.9217,\"lon\":-53.3129,\"interfaces\":[{\"name\":\"e68380\",\"id\":1},{\"name\":\"e68899\",\"id\":2},{\"name\":\"e69420\",\"id\":3},{\"name\":\"e69941\",\"id\":4}]},{\"caption\":\"UFSM\",\"id\":\"UFSM - Silveira Martins\",\"cod\":48,\"lat\":-29.645,\"lon\":-53.5819,\"interfaces\":[{\"name\":\"e68382\",\"id\":1},{\"name\":\"e68901\",\"id\":2},{\"name\":\"e69422\",\"id\":3},{\"name\":\"e69943\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - Reitoria\",\"cod\":49,\"lat\":-31.3317,\"lon\":-54.1069,\"interfaces\":[{\"name\":\"e68396\",\"id\":1},{\"name\":\"e68915\",\"id\":2},{\"name\":\"e69436\",\"id\":3},{\"name\":\"e69957\",\"id\":4}]},{\"caption\":\"UNIPAMPA\",\"id\":\"UNIPAMPA - São Borja\",\"cod\":50,\"lat\":-28.6299,\"lon\":-56.0391,\"interfaces\":[{\"name\":\"e68398\",\"id\":1},{\"name\":\"e68917\",\"id\":2},{\"name\":\"e69438\",\"id\":3},{\"name\":\"e69959\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Farroupilha\",\"cod\":51,\"lat\":-29.2022,\"lon\":-51.3488,\"interfaces\":[{\"name\":\"e68334\",\"id\":1},{\"name\":\"e68853\",\"id\":2},{\"name\":\"e69374\",\"id\":3},{\"name\":\"e69895\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Feliz\",\"cod\":52,\"lat\":-29.4522,\"lon\":-51.295,\"interfaces\":[{\"name\":\"e68336\",\"id\":1},{\"name\":\"e68855\",\"id\":2},{\"name\":\"e69376\",\"id\":3},{\"name\":\"e69897\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Ibiruba\",\"cod\":53,\"lat\":-28.6491,\"lon\":-53.1049,\"interfaces\":[{\"name\":\"e68338\",\"id\":1},{\"name\":\"e68857\",\"id\":2},{\"name\":\"e69378\",\"id\":3},{\"name\":\"e69899\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Osorio\",\"cod\":54,\"lat\":-29.9023,\"lon\":-50.258,\"interfaces\":[{\"name\":\"e68298\",\"id\":1},{\"name\":\"e68817\",\"id\":2},{\"name\":\"e69338\",\"id\":3},{\"name\":\"e69859\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - B. Goncalves\",\"cod\":55,\"lat\":-29.16,\"lon\":-51.5204,\"interfaces\":[{\"name\":\"e68328\",\"id\":1},{\"name\":\"e68847\",\"id\":2},{\"name\":\"e69368\",\"id\":3},{\"name\":\"e69889\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Canoas\",\"cod\":56,\"lat\":-29.9002,\"lon\":-51.1504,\"interfaces\":[{\"name\":\"e68293\",\"id\":1},{\"name\":\"e68812\",\"id\":2},{\"name\":\"e69333\",\"id\":3},{\"name\":\"e69854\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Caxias\",\"cod\":57,\"lat\":-29.1761,\"lon\":-51.2157,\"interfaces\":[{\"name\":\"e68330\",\"id\":1},{\"name\":\"e68849\",\"id\":2},{\"name\":\"e69370\",\"id\":3},{\"name\":\"e69891\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Erechim\",\"cod\":58,\"lat\":-27.6441,\"lon\":-52.2972,\"interfaces\":[{\"name\":\"e68332\",\"id\":1},{\"name\":\"e68851\",\"id\":2},{\"name\":\"e69372\",\"id\":3},{\"name\":\"e69893\",\"id\":4}]},{\"caption\":\"IFF\",\"id\":\"IFFarroupilha Frederico Westphalen\",\"cod\":59,\"lat\":-27.3904,\"lon\":-53.4303,\"interfaces\":[{\"name\":\"e68550\",\"id\":1},{\"name\":\"e69069\",\"id\":2},{\"name\":\"e69590\",\"id\":3},{\"name\":\"e70111\",\"id\":4}]},{\"caption\":\"UNILASALLE\",\"id\":\"UNILASALLE\",\"cod\":60,\"lat\":-29.9174,\"lon\":-51.1803,\"interfaces\":[{\"name\":\"e68546\",\"id\":1},{\"name\":\"e69065\",\"id\":2},{\"name\":\"e69586\",\"id\":3},{\"name\":\"e70107\",\"id\":4}]},{\"caption\":\"Uniritter - Canoas\",\"id\":\"Uniritter - Canoas\",\"cod\":61,\"lat\":-29.9457,\"lon\":-51.1676,\"interfaces\":[{\"name\":\"e68548\",\"id\":1},{\"name\":\"e69067\",\"id\":2},{\"name\":\"e69588\",\"id\":3},{\"name\":\"e70109\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Reitoria\",\"cod\":62,\"lat\":-29.1681,\"lon\":-51.5141,\"interfaces\":[{\"name\":\"e68299\",\"id\":1},{\"name\":\"e68818\",\"id\":2},{\"name\":\"e69339\",\"id\":3},{\"name\":\"e69860\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Restinga\",\"cod\":63,\"lat\":-30.1654,\"lon\":-51.1525,\"interfaces\":[{\"name\":\"e68340\",\"id\":1},{\"name\":\"e68859\",\"id\":2},{\"name\":\"e69380\",\"id\":3},{\"name\":\"e69901\",\"id\":4}]},{\"caption\":\"FEEVALE\",\"id\":\"FEEVALE\",\"cod\":64,\"lat\":-29.6629,\"lon\":-51.1183,\"interfaces\":[{\"name\":\"e68540\",\"id\":1},{\"name\":\"e69059\",\"id\":2},{\"name\":\"e69580\",\"id\":3},{\"name\":\"e70101\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH-FURG-HU\",\"cod\":65,\"lat\":-32.0292,\"lon\":-52.1029,\"interfaces\":[{\"name\":\"e68459\",\"id\":1},{\"name\":\"e68978\",\"id\":2},{\"name\":\"e69499\",\"id\":3},{\"name\":\"e70020\",\"id\":4}]},{\"caption\":\"UNIFRA\",\"id\":\"UNIFRA\",\"cod\":66,\"lat\":-29.6861,\"lon\":-53.8104,\"interfaces\":[{\"name\":\"e68448\",\"id\":1},{\"name\":\"e68967\",\"id\":2},{\"name\":\"e69488\",\"id\":3},{\"name\":\"e70009\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - Sapucaia\",\"cod\":67,\"lat\":-29.8164,\"lon\":-51.1559,\"interfaces\":[{\"name\":\"e68356\",\"id\":1},{\"name\":\"e68875\",\"id\":2},{\"name\":\"e69396\",\"id\":3},{\"name\":\"e69917\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - EENF\",\"cod\":68,\"lat\":-30.0425,\"lon\":-51.2055,\"interfaces\":[{\"name\":\"e68524\",\"id\":1},{\"name\":\"e69043\",\"id\":2},{\"name\":\"e69564\",\"id\":3},{\"name\":\"e70085\",\"id\":4}]},{\"caption\":\"GHC\",\"id\":\"GHC - Conceição\",\"cod\":69,\"lat\":-30.0161,\"lon\":-51.1586,\"interfaces\":[{\"name\":\"e68522\",\"id\":1},{\"name\":\"e69041\",\"id\":2},{\"name\":\"e69562\",\"id\":3},{\"name\":\"e70083\",\"id\":4}]},{\"caption\":\"GHC\",\"id\":\"GHC - UPA\",\"cod\":70,\"lat\":-30.0098,\"lon\":-51.1462,\"interfaces\":[{\"name\":\"e68520\",\"id\":1},{\"name\":\"e69039\",\"id\":2},{\"name\":\"e69560\",\"id\":3},{\"name\":\"e70081\",\"id\":4}]},{\"caption\":\"GHC\",\"id\":\"GHC - Cristo\",\"cod\":71,\"lat\":-30.0101,\"lon\":-51.1593,\"interfaces\":[{\"name\":\"e68518\",\"id\":1},{\"name\":\"e69037\",\"id\":2},{\"name\":\"e69558\",\"id\":3},{\"name\":\"e70079\",\"id\":4}]},{\"caption\":\"UERGS\",\"id\":\"UERGS - Reitoria\",\"cod\":72,\"lat\":-30.0369,\"lon\":-51.2338,\"interfaces\":[{\"name\":\"e68532\",\"id\":1},{\"name\":\"e69051\",\"id\":2},{\"name\":\"e69572\",\"id\":3},{\"name\":\"e70093\",\"id\":4}]},{\"caption\":\"UERGS\",\"id\":\"UERGS - Centro\",\"cod\":73,\"lat\":-30.0289,\"lon\":-51.2293,\"interfaces\":[{\"name\":\"e68530\",\"id\":1},{\"name\":\"e69049\",\"id\":2},{\"name\":\"e69570\",\"id\":3},{\"name\":\"e70091\",\"id\":4}]},{\"caption\":\"Santa Casa - Cemitério\",\"id\":\"Santa Casa - Cemitério\",\"cod\":74,\"lat\":-30.0555,\"lon\":-51.2107,\"interfaces\":[{\"name\":\"e68528\",\"id\":1},{\"name\":\"e69047\",\"id\":2},{\"name\":\"e69568\",\"id\":3},{\"name\":\"e70089\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - Farmacia\",\"cod\":75,\"lat\":-30.045,\"lon\":-51.2063,\"interfaces\":[{\"name\":\"e68525\",\"id\":1},{\"name\":\"e69044\",\"id\":2},{\"name\":\"e69565\",\"id\":3},{\"name\":\"e70086\",\"id\":4}]},{\"caption\":\"EMATER\",\"id\":\"EMATER\",\"cod\":76,\"lat\":-30.0551,\"lon\":-51.219,\"interfaces\":[{\"name\":\"e68534\",\"id\":1},{\"name\":\"e69053\",\"id\":2},{\"name\":\"e69574\",\"id\":3},{\"name\":\"e70095\",\"id\":4}]},{\"caption\":\"FURG\",\"id\":\"FURG – S. Lourenço\",\"cod\":77,\"lat\":-31.3662,\"lon\":-51.9824,\"interfaces\":[{\"name\":\"e68304\",\"id\":1},{\"name\":\"e68823\",\"id\":2},{\"name\":\"e69344\",\"id\":3},{\"name\":\"e69865\",\"id\":4}]},{\"caption\":\"FURG\",\"id\":\"FURG – Sto. Ant. Patrulha\",\"cod\":78,\"lat\":-29.8249,\"lon\":-50.5188,\"interfaces\":[{\"name\":\"e68306\",\"id\":1},{\"name\":\"e68825\",\"id\":2},{\"name\":\"e69346\",\"id\":3},{\"name\":\"e69867\",\"id\":4}]},{\"caption\":\"FURG\",\"id\":\"FURG\",\"cod\":79,\"lat\":-32.076,\"lon\":-52.169,\"interfaces\":[{\"name\":\"e68302\",\"id\":1},{\"name\":\"e68821\",\"id\":2},{\"name\":\"e69342\",\"id\":3},{\"name\":\"e69863\",\"id\":4}]},{\"caption\":\"UNISINOS\",\"id\":\"UNISINOS - Porto Alegre\",\"cod\":80,\"lat\":-30.0272,\"lon\":-51.1751,\"interfaces\":[{\"name\":\"e68500\",\"id\":1},{\"name\":\"e69019\",\"id\":2},{\"name\":\"e69540\",\"id\":3},{\"name\":\"e70061\",\"id\":4}]},{\"caption\":\"FAPA\",\"id\":\"FAPA\",\"cod\":81,\"lat\":-30.0331,\"lon\":-51.1237,\"interfaces\":[{\"name\":\"e68502\",\"id\":1},{\"name\":\"e69021\",\"id\":2},{\"name\":\"e69542\",\"id\":3},{\"name\":\"e70063\",\"id\":4}]},{\"caption\":\"PUCRS\",\"id\":\"PUCRS\",\"cod\":82,\"lat\":-30.0589,\"lon\":-51.173,\"interfaces\":[{\"name\":\"e68503\",\"id\":1},{\"name\":\"e69022\",\"id\":2},{\"name\":\"e69543\",\"id\":3},{\"name\":\"e70064\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - Telessaude-1\",\"cod\":83,\"lat\":-30.0296,\"lon\":-51.2024,\"interfaces\":[{\"name\":\"e68505\",\"id\":1},{\"name\":\"e69024\",\"id\":2},{\"name\":\"e69545\",\"id\":3},{\"name\":\"e70066\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - Telessaude-2\",\"cod\":84,\"lat\":-30.0285,\"lon\":-51.2037,\"interfaces\":[{\"name\":\"e68508\",\"id\":1},{\"name\":\"e69027\",\"id\":2},{\"name\":\"e69548\",\"id\":3},{\"name\":\"e70069\",\"id\":4}]},{\"caption\":\"Hospital Moinhos de Vento\",\"id\":\"Hospital Moinhos de Vento\",\"cod\":85,\"lat\":-30.0251,\"lon\":-51.2085,\"interfaces\":[{\"name\":\"e68510\",\"id\":1},{\"name\":\"e69029\",\"id\":2},{\"name\":\"e69550\",\"id\":3},{\"name\":\"e70071\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - ESEFID\",\"cod\":86,\"lat\":-30.0511,\"lon\":-51.1826,\"interfaces\":[{\"name\":\"e68512\",\"id\":1},{\"name\":\"e69031\",\"id\":2},{\"name\":\"e69552\",\"id\":3},{\"name\":\"e70073\",\"id\":4}]},{\"caption\":\"GHC\",\"id\":\"GHC - Femina\",\"cod\":87,\"lat\":-30.0293,\"lon\":-51.2069,\"interfaces\":[{\"name\":\"e68514\",\"id\":1},{\"name\":\"e69033\",\"id\":2},{\"name\":\"e69554\",\"id\":3},{\"name\":\"e70075\",\"id\":4}]},{\"caption\":\"GHC\",\"id\":\"GHC - Backup\",\"cod\":88,\"lat\":-30.0161,\"lon\":-51.1586,\"interfaces\":[{\"name\":\"e68516\",\"id\":1},{\"name\":\"e69035\",\"id\":2},{\"name\":\"e69556\",\"id\":3},{\"name\":\"e70077\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - IA\",\"cod\":89,\"lat\":-30.0291,\"lon\":-51.2234,\"interfaces\":[{\"name\":\"e68484\",\"id\":1},{\"name\":\"e69003\",\"id\":2},{\"name\":\"e69524\",\"id\":3},{\"name\":\"e70045\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - DAD\",\"cod\":90,\"lat\":-30.0304,\"lon\":-51.2253,\"interfaces\":[{\"name\":\"e68482\",\"id\":1},{\"name\":\"e69001\",\"id\":2},{\"name\":\"e69522\",\"id\":3},{\"name\":\"e70043\",\"id\":4}]},{\"caption\":\"CEITEC\",\"id\":\"CEITEC\",\"cod\":91,\"lat\":-30.0833,\"lon\":-51.1324,\"interfaces\":[{\"name\":\"e68487\",\"id\":1},{\"name\":\"e69006\",\"id\":2},{\"name\":\"e69527\",\"id\":3},{\"name\":\"e70048\",\"id\":4}]},{\"caption\":\"UFRGS\",\"id\":\"UFRGS - Musica\",\"cod\":92,\"lat\":-30.0308,\"lon\":-51.2236,\"interfaces\":[{\"name\":\"e68486\",\"id\":1},{\"name\":\"e69005\",\"id\":2},{\"name\":\"e69526\",\"id\":3},{\"name\":\"e70047\",\"id\":4}]},{\"caption\":\"CPOR\",\"id\":\"CPOR/PA\",\"cod\":93,\"lat\":-30.0618,\"lon\":-51.2207,\"interfaces\":[{\"name\":\"e68477\",\"id\":1},{\"name\":\"e68996\",\"id\":2},{\"name\":\"e69517\",\"id\":3},{\"name\":\"e70038\",\"id\":4}]},{\"caption\":\"Santa Casa de Misericórdia\",\"id\":\"Santa Casa de Misericórdia\",\"cod\":94,\"lat\":-30.031,\"lon\":-51.2216,\"interfaces\":[{\"name\":\"e68479\",\"id\":1},{\"name\":\"e68998\",\"id\":2},{\"name\":\"e69519\",\"id\":3},{\"name\":\"e70040\",\"id\":4}]},{\"caption\":\"Setrem\",\"id\":\"Setrem\",\"cod\":95,\"lat\":-27.7831,\"lon\":-54.2492,\"interfaces\":[{\"name\":\"e68466\",\"id\":1},{\"name\":\"e68985\",\"id\":2},{\"name\":\"e69506\",\"id\":3},{\"name\":\"e70027\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUSM-UFSM\",\"cod\":96,\"lat\":-29.7145,\"lon\":-53.7154,\"interfaces\":[{\"name\":\"e68462\",\"id\":1},{\"name\":\"e68981\",\"id\":2},{\"name\":\"e69502\",\"id\":3},{\"name\":\"e70023\",\"id\":4}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH-HE-UFPEL\",\"cod\":97,\"lat\":-31.7626,\"lon\":-52.357,\"interfaces\":[{\"name\":\"e68464\",\"id\":1},{\"name\":\"e68983\",\"id\":2},{\"name\":\"e69504\",\"id\":3},{\"name\":\"e70025\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - Novo Hamburgo\",\"cod\":98,\"lat\":-29.7178,\"lon\":-51.1309,\"interfaces\":[{\"name\":\"e68473\",\"id\":1},{\"name\":\"e68992\",\"id\":2},{\"name\":\"e69513\",\"id\":3},{\"name\":\"e70034\",\"id\":4}]},{\"caption\":\"CMPA\",\"id\":\"CMPA\",\"cod\":99,\"lat\":-30.0384,\"lon\":-51.2137,\"interfaces\":[{\"name\":\"e68476\",\"id\":1},{\"name\":\"e68995\",\"id\":2},{\"name\":\"e69516\",\"id\":3},{\"name\":\"e70037\",\"id\":4}]},{\"caption\":\"INPE\",\"id\":\"INPE Santa Maria\",\"cod\":100,\"lat\":-29.7136,\"lon\":-53.7164,\"interfaces\":[{\"name\":\"e68470\",\"id\":1},{\"name\":\"e68989\",\"id\":2},{\"name\":\"e69510\",\"id\":3},{\"name\":\"e70031\",\"id\":4}]},{\"caption\":\"UFSM\",\"id\":\"UFSM - CAPPA\",\"cod\":101,\"lat\":-29.6147,\"lon\":-53.4483,\"interfaces\":[{\"name\":\"e68472\",\"id\":1},{\"name\":\"e68991\",\"id\":2},{\"name\":\"e69512\",\"id\":3},{\"name\":\"e70033\",\"id\":4}]},{\"caption\":\"Unisinos - São Leopoldo\",\"id\":\"Unisinos - São Leopoldo\",\"cod\":102,\"lat\":-29.7955,\"lon\":-51.1521,\"interfaces\":[{\"name\":\"e68542\",\"id\":1},{\"name\":\"e69061\",\"id\":2},{\"name\":\"e69582\",\"id\":3},{\"name\":\"e70103\",\"id\":4}]},{\"caption\":\"ULBRA\",\"id\":\"ULBRA\",\"cod\":103,\"lat\":-29.8872,\"lon\":-51.1629,\"interfaces\":[{\"name\":\"e68544\",\"id\":1},{\"name\":\"e69063\",\"id\":2},{\"name\":\"e69584\",\"id\":3},{\"name\":\"e70105\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - Charqueadas\",\"cod\":104,\"lat\":-29.9627,\"lon\":-51.6292,\"interfaces\":[{\"name\":\"e68350\",\"id\":1},{\"name\":\"e68869\",\"id\":2},{\"name\":\"e69390\",\"id\":3},{\"name\":\"e69911\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - Camaqua\",\"cod\":105,\"lat\":-30.8658,\"lon\":-51.8006,\"interfaces\":[{\"name\":\"e68347\",\"id\":1},{\"name\":\"e68866\",\"id\":2},{\"name\":\"e69387\",\"id\":3},{\"name\":\"e69908\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - Passo Fundo\",\"cod\":106,\"lat\":-28.2407,\"lon\":-52.3577,\"interfaces\":[{\"name\":\"e68354\",\"id\":1},{\"name\":\"e68873\",\"id\":2},{\"name\":\"e69394\",\"id\":3},{\"name\":\"e69915\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - Pelotas\",\"cod\":107,\"lat\":-31.767,\"lon\":-52.352,\"interfaces\":[{\"name\":\"e68352\",\"id\":1},{\"name\":\"e68871\",\"id\":2},{\"name\":\"e69392\",\"id\":3},{\"name\":\"e69913\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Sertao\",\"cod\":108,\"lat\":-27.9874,\"lon\":-52.2571,\"interfaces\":[{\"name\":\"e68300\",\"id\":1},{\"name\":\"e68819\",\"id\":2},{\"name\":\"e69340\",\"id\":3},{\"name\":\"e69861\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - R. Grande\",\"cod\":109,\"lat\":-32.0409,\"lon\":-52.0885,\"interfaces\":[{\"name\":\"e68342\",\"id\":1},{\"name\":\"e68861\",\"id\":2},{\"name\":\"e69382\",\"id\":3},{\"name\":\"e69903\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Viamao\",\"cod\":110,\"lat\":-30.0857,\"lon\":-51.0572,\"interfaces\":[{\"name\":\"e68346\",\"id\":1},{\"name\":\"e68865\",\"id\":2},{\"name\":\"e69386\",\"id\":3},{\"name\":\"e69907\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Veranopolis\",\"cod\":111,\"lat\":-28.9038,\"lon\":-51.5511,\"interfaces\":[{\"name\":\"e68344\",\"id\":1},{\"name\":\"e68863\",\"id\":2},{\"name\":\"e69384\",\"id\":3},{\"name\":\"e69905\",\"id\":4}]},{\"caption\":\"UFSM\",\"id\":\"UFSM\",\"cod\":112,\"lat\":-29.7134,\"lon\":-53.7165,\"interfaces\":[{\"name\":\"e68455\",\"id\":1},{\"name\":\"e68974\",\"id\":2},{\"name\":\"e69495\",\"id\":3},{\"name\":\"e70016\",\"id\":4}]},{\"caption\":\"IFRS\",\"id\":\"IFRS - Rolante\",\"cod\":113,\"lat\":-29.6602,\"lon\":-50.619,\"interfaces\":[{\"name\":\"e68454\",\"id\":1},{\"name\":\"e68973\",\"id\":2},{\"name\":\"e69494\",\"id\":3},{\"name\":\"e70015\",\"id\":4}]},{\"caption\":\"UFPEL\",\"id\":\"UFPEL - Palma\",\"cod\":114,\"lat\":-31.7524,\"lon\":-52.4236,\"interfaces\":[{\"name\":\"e68452\",\"id\":1},{\"name\":\"e68971\",\"id\":2},{\"name\":\"e69492\",\"id\":3},{\"name\":\"e70013\",\"id\":4}]},{\"caption\":\"INMETRO\",\"id\":\"INMETRO - SURRS\",\"cod\":115,\"lat\":-30.0146,\"lon\":-51.1972,\"interfaces\":[{\"name\":\"e68450\",\"id\":1},{\"name\":\"e68969\",\"id\":2},{\"name\":\"e69490\",\"id\":3},{\"name\":\"e70011\",\"id\":4}]},{\"caption\":\"IFSUL\",\"id\":\"IFSUL - S. Livramento\",\"cod\":116,\"lat\":-30.9016,\"lon\":-55.5339,\"interfaces\":[{\"name\":\"e68358\",\"id\":1},{\"name\":\"e68877\",\"id\":2},{\"name\":\"e69398\",\"id\":3},{\"name\":\"e69919\",\"id\":4}]},{\"caption\":\"IFS\",\"id\":\"IFSul - Reitoria\",\"cod\":117,\"lat\":-31.7578,\"lon\":-52.3335,\"interfaces\":[{\"name\":\"e68446\",\"id\":1},{\"name\":\"e68965\",\"id\":2},{\"name\":\"e69486\",\"id\":3},{\"name\":\"e70007\",\"id\":4}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPACT\",\"cod\":118,\"lat\":-31.6805,\"lon\":-52.4398,\"interfaces\":[{\"name\":\"e68444\",\"id\":1},{\"name\":\"e68963\",\"id\":2},{\"name\":\"e69484\",\"id\":3},{\"name\":\"e70005\",\"id\":4}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPT\",\"cod\":119,\"lat\":-28.2304,\"lon\":-52.4041,\"interfaces\":[{\"name\":\"e68442\",\"id\":1},{\"name\":\"e68441\",\"id\":2},{\"name\":\"e68960\",\"id\":3},{\"name\":\"e68961\",\"id\":4},{\"name\":\"e69481\",\"id\":5},{\"name\":\"e69482\",\"id\":6},{\"name\":\"e70002\",\"id\":7},{\"name\":\"e70003\",\"id\":8}]},{\"caption\":\"FACCAT\",\"id\":\"FACCAT\",\"cod\":120,\"lat\":-29.6391,\"lon\":-50.787,\"interfaces\":[{\"name\":\"e69592\",\"id\":1},{\"name\":\"e70113\",\"id\":2}]}]},\"sc\":{\"clientes\":[{\"caption\":\"UNIBAVE\",\"id\":\"UNIBAVE - Sede (RCT)\",\"cod\":1,\"lat\":-28.3592,\"lon\":-49.2761,\"interfaces\":[{\"name\":\"e288448\",\"id\":1},{\"name\":\"e289093\",\"id\":2},{\"name\":\"e289736\",\"id\":3},{\"name\":\"e290376\",\"id\":4},{\"name\":\"e291016\",\"id\":5},{\"name\":\"e291656\",\"id\":6},{\"name\":\"e292296\",\"id\":7},{\"name\":\"e292936\",\"id\":8},{\"name\":\"e293576\",\"id\":9},{\"name\":\"e294219\",\"id\":10}]},{\"caption\":\"UNIBAVE\",\"id\":\"UNIBAVE - Museu (RCT)\",\"cod\":2,\"lat\":-28.3703,\"lon\":-49.2874,\"interfaces\":[{\"name\":\"e288447\",\"id\":1},{\"name\":\"e289092\",\"id\":2},{\"name\":\"e289735\",\"id\":3},{\"name\":\"e290375\",\"id\":4},{\"name\":\"e291015\",\"id\":5},{\"name\":\"e291655\",\"id\":6},{\"name\":\"e292295\",\"id\":7},{\"name\":\"e292935\",\"id\":8},{\"name\":\"e293575\",\"id\":9},{\"name\":\"e294218\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CAV (RCT)\",\"cod\":3,\"lat\":-27.793,\"lon\":-50.306,\"interfaces\":[{\"name\":\"e288446\",\"id\":1},{\"name\":\"e289091\",\"id\":2},{\"name\":\"e289734\",\"id\":3},{\"name\":\"e290374\",\"id\":4},{\"name\":\"e291014\",\"id\":5},{\"name\":\"e291654\",\"id\":6},{\"name\":\"e292294\",\"id\":7},{\"name\":\"e292934\",\"id\":8},{\"name\":\"e293574\",\"id\":9},{\"name\":\"e294217\",\"id\":10}]},{\"caption\":\"UNERJ\",\"id\":\"UNERJ - Jaraguá (RCT)\",\"cod\":4,\"lat\":-26.4771,\"lon\":-49.0704,\"interfaces\":[{\"name\":\"e288445\",\"id\":1},{\"name\":\"e289090\",\"id\":2},{\"name\":\"e289733\",\"id\":3},{\"name\":\"e290373\",\"id\":4},{\"name\":\"e291013\",\"id\":5},{\"name\":\"e291653\",\"id\":6},{\"name\":\"e292293\",\"id\":7},{\"name\":\"e292933\",\"id\":8},{\"name\":\"e293573\",\"id\":9},{\"name\":\"e294216\",\"id\":10}]},{\"caption\":\"UNESC\",\"id\":\"UNESC - Criciúma (RCT)\",\"cod\":5,\"lat\":-28.6885,\"lon\":-49.3739,\"interfaces\":[{\"name\":\"e288444\",\"id\":1},{\"name\":\"e289089\",\"id\":2},{\"name\":\"e289732\",\"id\":3},{\"name\":\"e290372\",\"id\":4},{\"name\":\"e291012\",\"id\":5},{\"name\":\"e291652\",\"id\":6},{\"name\":\"e292292\",\"id\":7},{\"name\":\"e292932\",\"id\":8},{\"name\":\"e293572\",\"id\":9},{\"name\":\"e294215\",\"id\":10}]},{\"caption\":\"UNOCHAPECO\",\"id\":\"UNOCHAPECO - Reitoria (RCT)\",\"cod\":6,\"lat\":-27.1243,\"lon\":-52.6465,\"interfaces\":[{\"name\":\"e288443\",\"id\":1},{\"name\":\"e289088\",\"id\":2},{\"name\":\"e289731\",\"id\":3},{\"name\":\"e290371\",\"id\":4},{\"name\":\"e291011\",\"id\":5},{\"name\":\"e291651\",\"id\":6},{\"name\":\"e292291\",\"id\":7},{\"name\":\"e292931\",\"id\":8},{\"name\":\"e293571\",\"id\":9},{\"name\":\"e294214\",\"id\":10}]},{\"caption\":\"UNISUL\",\"id\":\"UNISUL - Braço Norte (RCT)\",\"cod\":7,\"lat\":-28.2467,\"lon\":-49.135,\"interfaces\":[{\"name\":\"e288442\",\"id\":1},{\"name\":\"e289087\",\"id\":2},{\"name\":\"e289730\",\"id\":3},{\"name\":\"e290370\",\"id\":4},{\"name\":\"e291010\",\"id\":5},{\"name\":\"e291650\",\"id\":6},{\"name\":\"e292290\",\"id\":7},{\"name\":\"e292930\",\"id\":8},{\"name\":\"e293570\",\"id\":9},{\"name\":\"e294213\",\"id\":10}]},{\"caption\":\"FURB\",\"id\":\"FURB - Blumenau (RCT)\",\"cod\":8,\"lat\":-26.8615,\"lon\":-48.988,\"interfaces\":[{\"name\":\"e288441\",\"id\":1},{\"name\":\"e289086\",\"id\":2},{\"name\":\"e289729\",\"id\":3},{\"name\":\"e290369\",\"id\":4},{\"name\":\"e291009\",\"id\":5},{\"name\":\"e291649\",\"id\":6},{\"name\":\"e292289\",\"id\":7},{\"name\":\"e292929\",\"id\":8},{\"name\":\"e293569\",\"id\":9},{\"name\":\"e294212\",\"id\":10}]},{\"caption\":\"UNISUL\",\"id\":\"UNISUL - Araranguá (RCT)\",\"cod\":9,\"lat\":-28.9482,\"lon\":-49.4955,\"interfaces\":[{\"name\":\"e288440\",\"id\":1},{\"name\":\"e289085\",\"id\":2},{\"name\":\"e289728\",\"id\":3},{\"name\":\"e290368\",\"id\":4},{\"name\":\"e291008\",\"id\":5},{\"name\":\"e291648\",\"id\":6},{\"name\":\"e292288\",\"id\":7},{\"name\":\"e292928\",\"id\":8},{\"name\":\"e293568\",\"id\":9},{\"name\":\"e294211\",\"id\":10}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPSA\",\"cod\":10,\"lat\":-27.3121,\"lon\":-51.9863,\"interfaces\":[{\"name\":\"e288497\",\"id\":1},{\"name\":\"e289142\",\"id\":2},{\"name\":\"e289787\",\"id\":3},{\"name\":\"e290427\",\"id\":4},{\"name\":\"e291067\",\"id\":5},{\"name\":\"e291707\",\"id\":6},{\"name\":\"e292347\",\"id\":7},{\"name\":\"e292987\",\"id\":8},{\"name\":\"e293627\",\"id\":9},{\"name\":\"e294268\",\"id\":10}]},{\"caption\":\"UNC\",\"id\":\"UNC - Canoinhas (RCT)\",\"cod\":11,\"lat\":-26.1718,\"lon\":-50.3942,\"interfaces\":[{\"name\":\"e288482\",\"id\":1},{\"name\":\"e289127\",\"id\":2},{\"name\":\"e289770\",\"id\":3},{\"name\":\"e290410\",\"id\":4},{\"name\":\"e291050\",\"id\":5},{\"name\":\"e291690\",\"id\":6},{\"name\":\"e292330\",\"id\":7},{\"name\":\"e292970\",\"id\":8},{\"name\":\"e293610\",\"id\":9},{\"name\":\"e294253\",\"id\":10}]},{\"caption\":\"UNC\",\"id\":\"UNC - Concórdia (RCT)\",\"cod\":12,\"lat\":-27.2262,\"lon\":-51.9945,\"interfaces\":[{\"name\":\"e288465\",\"id\":1},{\"name\":\"e289110\",\"id\":2},{\"name\":\"e289753\",\"id\":3},{\"name\":\"e290393\",\"id\":4},{\"name\":\"e291033\",\"id\":5},{\"name\":\"e291673\",\"id\":6},{\"name\":\"e292313\",\"id\":7},{\"name\":\"e292953\",\"id\":8},{\"name\":\"e293593\",\"id\":9},{\"name\":\"e294236\",\"id\":10}]},{\"caption\":\"UNOESC\",\"id\":\"UNOESC - Xanxerê (RCT)\",\"cod\":13,\"lat\":-26.8808,\"lon\":-52.4048,\"interfaces\":[{\"name\":\"e288456\",\"id\":1},{\"name\":\"e289101\",\"id\":2},{\"name\":\"e289744\",\"id\":3},{\"name\":\"e290384\",\"id\":4},{\"name\":\"e291024\",\"id\":5},{\"name\":\"e291664\",\"id\":6},{\"name\":\"e292304\",\"id\":7},{\"name\":\"e292944\",\"id\":8},{\"name\":\"e293584\",\"id\":9},{\"name\":\"e294227\",\"id\":10}]},{\"caption\":\"UNIVILLE\",\"id\":\"UNIVILLE - Joinville (RCT)\",\"cod\":14,\"lat\":-26.3064,\"lon\":-48.8644,\"interfaces\":[{\"name\":\"e288457\",\"id\":1},{\"name\":\"e289102\",\"id\":2},{\"name\":\"e289745\",\"id\":3},{\"name\":\"e290385\",\"id\":4},{\"name\":\"e291025\",\"id\":5},{\"name\":\"e291665\",\"id\":6},{\"name\":\"e292305\",\"id\":7},{\"name\":\"e292945\",\"id\":8},{\"name\":\"e293585\",\"id\":9},{\"name\":\"e294228\",\"id\":10}]},{\"caption\":\"UFFS\",\"id\":\"UFFS - Bom Pastor (RCT)\",\"cod\":15,\"lat\":-27.1058,\"lon\":-52.6164,\"interfaces\":[{\"name\":\"e288459\",\"id\":1},{\"name\":\"e289104\",\"id\":2},{\"name\":\"e289747\",\"id\":3},{\"name\":\"e290387\",\"id\":4},{\"name\":\"e291027\",\"id\":5},{\"name\":\"e291667\",\"id\":6},{\"name\":\"e292307\",\"id\":7},{\"name\":\"e292947\",\"id\":8},{\"name\":\"e293587\",\"id\":9},{\"name\":\"e294230\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CEO - Zootecnia (RCT)\",\"cod\":16,\"lat\":-27.1192,\"lon\":-52.6304,\"interfaces\":[{\"name\":\"e288460\",\"id\":1},{\"name\":\"e289105\",\"id\":2},{\"name\":\"e289748\",\"id\":3},{\"name\":\"e290388\",\"id\":4},{\"name\":\"e291028\",\"id\":5},{\"name\":\"e291668\",\"id\":6},{\"name\":\"e292308\",\"id\":7},{\"name\":\"e292948\",\"id\":8},{\"name\":\"e293588\",\"id\":9},{\"name\":\"e294231\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CEAVI (RCT)\",\"cod\":17,\"lat\":-27.0499,\"lon\":-49.5378,\"interfaces\":[{\"name\":\"e288461\",\"id\":1},{\"name\":\"e289106\",\"id\":2},{\"name\":\"e289749\",\"id\":3},{\"name\":\"e290389\",\"id\":4},{\"name\":\"e291029\",\"id\":5},{\"name\":\"e291669\",\"id\":6},{\"name\":\"e292309\",\"id\":7},{\"name\":\"e292949\",\"id\":8},{\"name\":\"e293589\",\"id\":9},{\"name\":\"e294232\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CEO - Enfermagem (RCT)\",\"cod\":18,\"lat\":-27.095,\"lon\":-52.6151,\"interfaces\":[{\"name\":\"e288458\",\"id\":1},{\"name\":\"e289103\",\"id\":2},{\"name\":\"e289746\",\"id\":3},{\"name\":\"e290386\",\"id\":4},{\"name\":\"e291026\",\"id\":5},{\"name\":\"e291666\",\"id\":6},{\"name\":\"e292306\",\"id\":7},{\"name\":\"e292946\",\"id\":8},{\"name\":\"e293586\",\"id\":9},{\"name\":\"e294229\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CERES (RCT)\",\"cod\":19,\"lat\":-28.4772,\"lon\":-48.7843,\"interfaces\":[{\"name\":\"e288462\",\"id\":1},{\"name\":\"e289107\",\"id\":2},{\"name\":\"e289750\",\"id\":3},{\"name\":\"e290390\",\"id\":4},{\"name\":\"e291030\",\"id\":5},{\"name\":\"e291670\",\"id\":6},{\"name\":\"e292310\",\"id\":7},{\"name\":\"e292950\",\"id\":8},{\"name\":\"e293590\",\"id\":9},{\"name\":\"e294233\",\"id\":10}]},{\"caption\":\"UNIFEBE\",\"id\":\"UNIFEBE - Brusque (RCT)\",\"cod\":20,\"lat\":-27.0667,\"lon\":-48.8823,\"interfaces\":[{\"name\":\"e288463\",\"id\":1},{\"name\":\"e289108\",\"id\":2},{\"name\":\"e289751\",\"id\":3},{\"name\":\"e290391\",\"id\":4},{\"name\":\"e291031\",\"id\":5},{\"name\":\"e291671\",\"id\":6},{\"name\":\"e292311\",\"id\":7},{\"name\":\"e292951\",\"id\":8},{\"name\":\"e293591\",\"id\":9},{\"name\":\"e294234\",\"id\":10}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HU-UFSC\",\"cod\":21,\"lat\":-27.5974,\"lon\":-48.5183,\"interfaces\":[{\"name\":\"e288593\",\"id\":1},{\"name\":\"e289234\",\"id\":2}]},{\"caption\":\"UNOESC\",\"id\":\"UNOESC - Videira (RCT)\",\"cod\":22,\"lat\":-26.9921,\"lon\":-51.1764,\"interfaces\":[{\"name\":\"e288455\",\"id\":1},{\"name\":\"e289100\",\"id\":2},{\"name\":\"e289743\",\"id\":3},{\"name\":\"e290383\",\"id\":4},{\"name\":\"e291023\",\"id\":5},{\"name\":\"e291663\",\"id\":6},{\"name\":\"e292303\",\"id\":7},{\"name\":\"e292943\",\"id\":8},{\"name\":\"e293583\",\"id\":9},{\"name\":\"e294226\",\"id\":10}]},{\"caption\":\"UNOESC\",\"id\":\"UNOESC - São Miguel (RCT)\",\"cod\":23,\"lat\":-26.7227,\"lon\":-53.5089,\"interfaces\":[{\"name\":\"e288454\",\"id\":1},{\"name\":\"e289099\",\"id\":2},{\"name\":\"e289742\",\"id\":3},{\"name\":\"e290382\",\"id\":4},{\"name\":\"e291022\",\"id\":5},{\"name\":\"e291662\",\"id\":6},{\"name\":\"e292302\",\"id\":7},{\"name\":\"e292942\",\"id\":8},{\"name\":\"e293582\",\"id\":9},{\"name\":\"e294225\",\"id\":10}]},{\"caption\":\"UNOESC\",\"id\":\"UNOESC - Campos Novos (RCT)\",\"cod\":24,\"lat\":-27.4042,\"lon\":-51.2045,\"interfaces\":[{\"name\":\"e288502\",\"id\":1},{\"name\":\"e289147\",\"id\":2},{\"name\":\"e289792\",\"id\":3},{\"name\":\"e290432\",\"id\":4},{\"name\":\"e291072\",\"id\":5},{\"name\":\"e291712\",\"id\":6},{\"name\":\"e292352\",\"id\":7},{\"name\":\"e292992\",\"id\":8},{\"name\":\"e293632\",\"id\":9},{\"name\":\"e294273\",\"id\":10}]},{\"caption\":\"UNISUL\",\"id\":\"UNISUL - Içara (RCT)\",\"cod\":25,\"lat\":-28.7185,\"lon\":-49.3128,\"interfaces\":[{\"name\":\"e288450\",\"id\":1},{\"name\":\"e289095\",\"id\":2},{\"name\":\"e289738\",\"id\":3},{\"name\":\"e290378\",\"id\":4},{\"name\":\"e291018\",\"id\":5},{\"name\":\"e291658\",\"id\":6},{\"name\":\"e292298\",\"id\":7},{\"name\":\"e292938\",\"id\":8},{\"name\":\"e293578\",\"id\":9},{\"name\":\"e294221\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Ressacada (REMEP)\",\"cod\":26,\"lat\":-27.6853,\"lon\":-48.5441,\"interfaces\":[{\"name\":\"e288563\",\"id\":1},{\"name\":\"e288499\",\"id\":2},{\"name\":\"e288684\",\"id\":3},{\"name\":\"e288501\",\"id\":4},{\"name\":\"e289146\",\"id\":5},{\"name\":\"e289144\",\"id\":6},{\"name\":\"e289325\",\"id\":7},{\"name\":\"e289206\",\"id\":8},{\"name\":\"e289968\",\"id\":9},{\"name\":\"e289789\",\"id\":10},{\"name\":\"e289851\",\"id\":11},{\"name\":\"e289791\",\"id\":12},{\"name\":\"e290431\",\"id\":13},{\"name\":\"e290429\",\"id\":14},{\"name\":\"e290491\",\"id\":15},{\"name\":\"e290608\",\"id\":16},{\"name\":\"e291069\",\"id\":17},{\"name\":\"e291248\",\"id\":18},{\"name\":\"e291071\",\"id\":19},{\"name\":\"e291131\",\"id\":20},{\"name\":\"e291709\",\"id\":21},{\"name\":\"e291888\",\"id\":22},{\"name\":\"e291771\",\"id\":23},{\"name\":\"e291711\",\"id\":24},{\"name\":\"e292411\",\"id\":25},{\"name\":\"e292528\",\"id\":26},{\"name\":\"e292351\",\"id\":27},{\"name\":\"e292349\",\"id\":28},{\"name\":\"e292991\",\"id\":29},{\"name\":\"e293168\",\"id\":30},{\"name\":\"e293051\",\"id\":31},{\"name\":\"e292989\",\"id\":32},{\"name\":\"e293808\",\"id\":33},{\"name\":\"e293629\",\"id\":34},{\"name\":\"e293631\",\"id\":35},{\"name\":\"e293691\",\"id\":36},{\"name\":\"e294449\",\"id\":37},{\"name\":\"e294332\",\"id\":38},{\"name\":\"e294272\",\"id\":39},{\"name\":\"e294270\",\"id\":40}]},{\"caption\":\"UNIDAVI\",\"id\":\"UNIDAVI (RCT)\",\"cod\":27,\"lat\":-27.2182,\"lon\":-49.6417,\"interfaces\":[{\"name\":\"e288449\",\"id\":1},{\"name\":\"e289094\",\"id\":2},{\"name\":\"e289737\",\"id\":3},{\"name\":\"e290377\",\"id\":4},{\"name\":\"e291017\",\"id\":5},{\"name\":\"e291657\",\"id\":6},{\"name\":\"e292297\",\"id\":7},{\"name\":\"e292937\",\"id\":8},{\"name\":\"e293577\",\"id\":9},{\"name\":\"e294220\",\"id\":10}]},{\"caption\":\"UNOCHAPECO\",\"id\":\"UNOCHAPECO - São Lourenço (RCT)\",\"cod\":28,\"lat\":-26.3442,\"lon\":-52.8305,\"interfaces\":[{\"name\":\"e288453\",\"id\":1},{\"name\":\"e289098\",\"id\":2},{\"name\":\"e289741\",\"id\":3},{\"name\":\"e290381\",\"id\":4},{\"name\":\"e291021\",\"id\":5},{\"name\":\"e291661\",\"id\":6},{\"name\":\"e292301\",\"id\":7},{\"name\":\"e292941\",\"id\":8},{\"name\":\"e293581\",\"id\":9},{\"name\":\"e294224\",\"id\":10}]},{\"caption\":\"UNOESC\",\"id\":\"UNOESC - Joaçaba (RCT)\",\"cod\":29,\"lat\":-27.1763,\"lon\":-51.5008,\"interfaces\":[{\"name\":\"e288452\",\"id\":1},{\"name\":\"e289097\",\"id\":2},{\"name\":\"e289740\",\"id\":3},{\"name\":\"e290380\",\"id\":4},{\"name\":\"e291020\",\"id\":5},{\"name\":\"e291660\",\"id\":6},{\"name\":\"e292300\",\"id\":7},{\"name\":\"e292940\",\"id\":8},{\"name\":\"e293580\",\"id\":9},{\"name\":\"e294223\",\"id\":10}]},{\"caption\":\"UNOESC\",\"id\":\"UNOESC - Chapecó (RCT)\",\"cod\":30,\"lat\":-27.1345,\"lon\":-52.5994,\"interfaces\":[{\"name\":\"e288451\",\"id\":1},{\"name\":\"e289096\",\"id\":2},{\"name\":\"e289739\",\"id\":3},{\"name\":\"e290379\",\"id\":4},{\"name\":\"e291019\",\"id\":5},{\"name\":\"e291659\",\"id\":6},{\"name\":\"e292299\",\"id\":7},{\"name\":\"e292939\",\"id\":8},{\"name\":\"e293579\",\"id\":9},{\"name\":\"e294222\",\"id\":10}]},{\"caption\":\"UNOESC\",\"id\":\"UNOESC - Capinzal (RCT)\",\"cod\":31,\"lat\":-27.349,\"lon\":-51.6042,\"interfaces\":[{\"name\":\"e288505\",\"id\":1},{\"name\":\"e289150\",\"id\":2},{\"name\":\"e289795\",\"id\":3},{\"name\":\"e290435\",\"id\":4},{\"name\":\"e291075\",\"id\":5},{\"name\":\"e291715\",\"id\":6},{\"name\":\"e292355\",\"id\":7},{\"name\":\"e292995\",\"id\":8},{\"name\":\"e293635\",\"id\":9},{\"name\":\"e294276\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Fraiburgo\",\"cod\":32,\"lat\":-27.0293,\"lon\":-50.9242,\"interfaces\":[{\"name\":\"e288659\",\"id\":1},{\"name\":\"e289300\",\"id\":2},{\"name\":\"e289943\",\"id\":3},{\"name\":\"e290583\",\"id\":4},{\"name\":\"e291223\",\"id\":5},{\"name\":\"e291863\",\"id\":6},{\"name\":\"e292503\",\"id\":7},{\"name\":\"e293143\",\"id\":8},{\"name\":\"e293783\",\"id\":9},{\"name\":\"e294424\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Concórdia\",\"cod\":33,\"lat\":-27.233,\"lon\":-52.0141,\"interfaces\":[{\"name\":\"e288664\",\"id\":1},{\"name\":\"e289305\",\"id\":2},{\"name\":\"e289948\",\"id\":3},{\"name\":\"e290588\",\"id\":4},{\"name\":\"e291228\",\"id\":5},{\"name\":\"e291868\",\"id\":6},{\"name\":\"e292508\",\"id\":7},{\"name\":\"e293148\",\"id\":8},{\"name\":\"e293788\",\"id\":9},{\"name\":\"e294429\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Camboriú\",\"cod\":34,\"lat\":-27.0124,\"lon\":-48.6596,\"interfaces\":[{\"name\":\"e288486\",\"id\":1},{\"name\":\"e289131\",\"id\":2},{\"name\":\"e289774\",\"id\":3},{\"name\":\"e290414\",\"id\":4},{\"name\":\"e291054\",\"id\":5},{\"name\":\"e291694\",\"id\":6},{\"name\":\"e292334\",\"id\":7},{\"name\":\"e292974\",\"id\":8},{\"name\":\"e293614\",\"id\":9},{\"name\":\"e294257\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Blumenau\",\"cod\":35,\"lat\":-26.8836,\"lon\":-49.1367,\"interfaces\":[{\"name\":\"e288654\",\"id\":1},{\"name\":\"e289295\",\"id\":2},{\"name\":\"e289938\",\"id\":3},{\"name\":\"e290578\",\"id\":4},{\"name\":\"e291218\",\"id\":5},{\"name\":\"e291858\",\"id\":6},{\"name\":\"e292498\",\"id\":7},{\"name\":\"e293138\",\"id\":8},{\"name\":\"e293778\",\"id\":9},{\"name\":\"e294419\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Araquari\",\"cod\":36,\"lat\":-26.3988,\"lon\":-48.7425,\"interfaces\":[{\"name\":\"e288484\",\"id\":1},{\"name\":\"e289129\",\"id\":2},{\"name\":\"e289772\",\"id\":3},{\"name\":\"e290412\",\"id\":4},{\"name\":\"e291052\",\"id\":5},{\"name\":\"e291692\",\"id\":6},{\"name\":\"e292332\",\"id\":7},{\"name\":\"e292972\",\"id\":8},{\"name\":\"e293612\",\"id\":9},{\"name\":\"e294255\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Luzerna\",\"cod\":37,\"lat\":-27.1334,\"lon\":-51.4626,\"interfaces\":[{\"name\":\"e288666\",\"id\":1},{\"name\":\"e289307\",\"id\":2},{\"name\":\"e289950\",\"id\":3},{\"name\":\"e290590\",\"id\":4},{\"name\":\"e291230\",\"id\":5},{\"name\":\"e291870\",\"id\":6},{\"name\":\"e292510\",\"id\":7},{\"name\":\"e293150\",\"id\":8},{\"name\":\"e293790\",\"id\":9},{\"name\":\"e294431\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Ibirama\",\"cod\":38,\"lat\":-27.0532,\"lon\":-49.5166,\"interfaces\":[{\"name\":\"e288609\",\"id\":1},{\"name\":\"e289250\",\"id\":2},{\"name\":\"e289893\",\"id\":3},{\"name\":\"e290533\",\"id\":4},{\"name\":\"e291173\",\"id\":5},{\"name\":\"e291813\",\"id\":6},{\"name\":\"e292453\",\"id\":7},{\"name\":\"e293093\",\"id\":8},{\"name\":\"e293733\",\"id\":9},{\"name\":\"e294374\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CEPLAN - CEDUP (RCT)\",\"cod\":39,\"lat\":-26.2206,\"lon\":-49.3467,\"interfaces\":[{\"name\":\"e288513\",\"id\":1},{\"name\":\"e289158\",\"id\":2},{\"name\":\"e289803\",\"id\":3},{\"name\":\"e290443\",\"id\":4},{\"name\":\"e291083\",\"id\":5},{\"name\":\"e291723\",\"id\":6},{\"name\":\"e292363\",\"id\":7},{\"name\":\"e293003\",\"id\":8},{\"name\":\"e293643\",\"id\":9},{\"name\":\"e294284\",\"id\":10}]},{\"caption\":\"UFFS\",\"id\":\"UFFS - Chapecó (RCT)\",\"cod\":40,\"lat\":-27.1146,\"lon\":-52.7074,\"interfaces\":[{\"name\":\"e288508\",\"id\":1},{\"name\":\"e289153\",\"id\":2},{\"name\":\"e289798\",\"id\":3},{\"name\":\"e290438\",\"id\":4},{\"name\":\"e291078\",\"id\":5},{\"name\":\"e291718\",\"id\":6},{\"name\":\"e292358\",\"id\":7},{\"name\":\"e292998\",\"id\":8},{\"name\":\"e293638\",\"id\":9},{\"name\":\"e294279\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CERES - Restaurante (RCT)\",\"cod\":41,\"lat\":-28.4642,\"lon\":-48.7748,\"interfaces\":[{\"name\":\"e288511\",\"id\":1},{\"name\":\"e289156\",\"id\":2},{\"name\":\"e289801\",\"id\":3},{\"name\":\"e290441\",\"id\":4},{\"name\":\"e291081\",\"id\":5},{\"name\":\"e291721\",\"id\":6},{\"name\":\"e292361\",\"id\":7},{\"name\":\"e293001\",\"id\":8},{\"name\":\"e293641\",\"id\":9},{\"name\":\"e294282\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Bridge (REMEP)\",\"cod\":42,\"lat\":-27.5964,\"lon\":-48.5205,\"interfaces\":[{\"name\":\"e288676\",\"id\":1},{\"name\":\"e289317\",\"id\":2},{\"name\":\"e289960\",\"id\":3},{\"name\":\"e290600\",\"id\":4},{\"name\":\"e291240\",\"id\":5},{\"name\":\"e291880\",\"id\":6},{\"name\":\"e292520\",\"id\":7},{\"name\":\"e293160\",\"id\":8},{\"name\":\"e293800\",\"id\":9},{\"name\":\"e294441\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Fortaleza SJ Ponta Grossa (RCT)\",\"cod\":43,\"lat\":-27.4316,\"lon\":-48.5178,\"interfaces\":[{\"name\":\"e288476\",\"id\":1},{\"name\":\"e289121\",\"id\":2},{\"name\":\"e289764\",\"id\":3},{\"name\":\"e290404\",\"id\":4},{\"name\":\"e291044\",\"id\":5},{\"name\":\"e291684\",\"id\":6},{\"name\":\"e292324\",\"id\":7},{\"name\":\"e292964\",\"id\":8},{\"name\":\"e293604\",\"id\":9},{\"name\":\"e294247\",\"id\":10}]},{\"caption\":\"UNIVILLE\",\"id\":\"UNIVILLE - OXFORD (RCT)\",\"cod\":44,\"lat\":-26.2274,\"lon\":-49.4174,\"interfaces\":[{\"name\":\"e288474\",\"id\":1},{\"name\":\"e289119\",\"id\":2},{\"name\":\"e289762\",\"id\":3},{\"name\":\"e290402\",\"id\":4},{\"name\":\"e291042\",\"id\":5},{\"name\":\"e291682\",\"id\":6},{\"name\":\"e292322\",\"id\":7},{\"name\":\"e292962\",\"id\":8},{\"name\":\"e293602\",\"id\":9},{\"name\":\"e294245\",\"id\":10}]},{\"caption\":\"UNIPLAC\",\"id\":\"UNIPLAC - Lages (RCT)\",\"cod\":45,\"lat\":-27.822,\"lon\":-50.3162,\"interfaces\":[{\"name\":\"e288475\",\"id\":1},{\"name\":\"e289120\",\"id\":2},{\"name\":\"e289763\",\"id\":3},{\"name\":\"e290403\",\"id\":4},{\"name\":\"e291043\",\"id\":5},{\"name\":\"e291683\",\"id\":6},{\"name\":\"e292323\",\"id\":7},{\"name\":\"e292963\",\"id\":8},{\"name\":\"e293603\",\"id\":9},{\"name\":\"e294246\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - São Lourenço Rui Barbosa\",\"cod\":46,\"lat\":-26.3492,\"lon\":-52.8463,\"interfaces\":[{\"name\":\"e288646\",\"id\":1},{\"name\":\"e289287\",\"id\":2},{\"name\":\"e289930\",\"id\":3},{\"name\":\"e290570\",\"id\":4},{\"name\":\"e291210\",\"id\":5},{\"name\":\"e291850\",\"id\":6},{\"name\":\"e292490\",\"id\":7},{\"name\":\"e293130\",\"id\":8},{\"name\":\"e293770\",\"id\":9},{\"name\":\"e294411\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - São Francisco do Sul\",\"cod\":47,\"lat\":-26.2143,\"lon\":-48.5608,\"interfaces\":[{\"name\":\"e288605\",\"id\":1},{\"name\":\"e289246\",\"id\":2},{\"name\":\"e289889\",\"id\":3},{\"name\":\"e290529\",\"id\":4},{\"name\":\"e291169\",\"id\":5},{\"name\":\"e291809\",\"id\":6},{\"name\":\"e292449\",\"id\":7},{\"name\":\"e293089\",\"id\":8},{\"name\":\"e293729\",\"id\":9},{\"name\":\"e294370\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Videira\",\"cod\":48,\"lat\":-26.9979,\"lon\":-51.1153,\"interfaces\":[{\"name\":\"e288623\",\"id\":1},{\"name\":\"e289264\",\"id\":2},{\"name\":\"e289907\",\"id\":3},{\"name\":\"e290547\",\"id\":4},{\"name\":\"e291187\",\"id\":5},{\"name\":\"e291827\",\"id\":6},{\"name\":\"e292467\",\"id\":7},{\"name\":\"e293107\",\"id\":8},{\"name\":\"e293747\",\"id\":9},{\"name\":\"e294388\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Santa Rosa do Sul\",\"cod\":49,\"lat\":-29.0961,\"lon\":-49.8141,\"interfaces\":[{\"name\":\"e288488\",\"id\":1},{\"name\":\"e289133\",\"id\":2},{\"name\":\"e289776\",\"id\":3},{\"name\":\"e290416\",\"id\":4},{\"name\":\"e291056\",\"id\":5},{\"name\":\"e291696\",\"id\":6},{\"name\":\"e292336\",\"id\":7},{\"name\":\"e292976\",\"id\":8},{\"name\":\"e293616\",\"id\":9},{\"name\":\"e294259\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Sombrio\",\"cod\":50,\"lat\":-29.1017,\"lon\":-49.6384,\"interfaces\":[{\"name\":\"e288601\",\"id\":1},{\"name\":\"e289242\",\"id\":2},{\"name\":\"e289885\",\"id\":3},{\"name\":\"e290525\",\"id\":4},{\"name\":\"e291165\",\"id\":5},{\"name\":\"e291805\",\"id\":6},{\"name\":\"e292445\",\"id\":7},{\"name\":\"e293085\",\"id\":8},{\"name\":\"e293725\",\"id\":9},{\"name\":\"e294366\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Caçador\",\"cod\":51,\"lat\":-26.7814,\"lon\":-51.049,\"interfaces\":[{\"name\":\"e288611\",\"id\":1},{\"name\":\"e289252\",\"id\":2},{\"name\":\"e289895\",\"id\":3},{\"name\":\"e290535\",\"id\":4},{\"name\":\"e291175\",\"id\":5},{\"name\":\"e291815\",\"id\":6},{\"name\":\"e292455\",\"id\":7},{\"name\":\"e293095\",\"id\":8},{\"name\":\"e293735\",\"id\":9},{\"name\":\"e294376\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Chapecó\",\"cod\":52,\"lat\":-27.1372,\"lon\":-52.5989,\"interfaces\":[{\"name\":\"e288634\",\"id\":1},{\"name\":\"e289275\",\"id\":2},{\"name\":\"e289918\",\"id\":3},{\"name\":\"e290558\",\"id\":4},{\"name\":\"e291198\",\"id\":5},{\"name\":\"e291838\",\"id\":6},{\"name\":\"e292478\",\"id\":7},{\"name\":\"e293118\",\"id\":8},{\"name\":\"e293758\",\"id\":9},{\"name\":\"e294399\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Araranguá\",\"cod\":53,\"lat\":-28.9475,\"lon\":-49.493,\"interfaces\":[{\"name\":\"e288636\",\"id\":1},{\"name\":\"e289277\",\"id\":2},{\"name\":\"e289920\",\"id\":3},{\"name\":\"e290560\",\"id\":4},{\"name\":\"e291200\",\"id\":5},{\"name\":\"e291840\",\"id\":6},{\"name\":\"e292480\",\"id\":7},{\"name\":\"e293120\",\"id\":8},{\"name\":\"e293760\",\"id\":9},{\"name\":\"e294401\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Canoinhas\",\"cod\":54,\"lat\":-26.184,\"lon\":-50.3685,\"interfaces\":[{\"name\":\"e288617\",\"id\":1},{\"name\":\"e289258\",\"id\":2},{\"name\":\"e289901\",\"id\":3},{\"name\":\"e290541\",\"id\":4},{\"name\":\"e291181\",\"id\":5},{\"name\":\"e291821\",\"id\":6},{\"name\":\"e292461\",\"id\":7},{\"name\":\"e293101\",\"id\":8},{\"name\":\"e293741\",\"id\":9},{\"name\":\"e294382\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Criciúma\",\"cod\":55,\"lat\":-28.6787,\"lon\":-49.3317,\"interfaces\":[{\"name\":\"e288490\",\"id\":1},{\"name\":\"e289135\",\"id\":2},{\"name\":\"e289778\",\"id\":3},{\"name\":\"e290418\",\"id\":4},{\"name\":\"e291058\",\"id\":5},{\"name\":\"e291698\",\"id\":6},{\"name\":\"e292338\",\"id\":7},{\"name\":\"e292978\",\"id\":8},{\"name\":\"e293618\",\"id\":9},{\"name\":\"e294261\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - EAD (REMEP)\",\"cod\":56,\"lat\":-27.5918,\"lon\":-48.5585,\"interfaces\":[{\"name\":\"e288541\",\"id\":1},{\"name\":\"e288579\",\"id\":2},{\"name\":\"e289184\",\"id\":3},{\"name\":\"e289222\",\"id\":4},{\"name\":\"e289829\",\"id\":5},{\"name\":\"e289867\",\"id\":6},{\"name\":\"e290507\",\"id\":7},{\"name\":\"e290469\",\"id\":8},{\"name\":\"e291147\",\"id\":9},{\"name\":\"e291109\",\"id\":10},{\"name\":\"e291749\",\"id\":11},{\"name\":\"e291787\",\"id\":12},{\"name\":\"e292427\",\"id\":13},{\"name\":\"e292389\",\"id\":14},{\"name\":\"e293067\",\"id\":15},{\"name\":\"e293029\",\"id\":16},{\"name\":\"e293707\",\"id\":17},{\"name\":\"e293669\",\"id\":18},{\"name\":\"e294310\",\"id\":19},{\"name\":\"e294348\",\"id\":20}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Sala Cofre (REMEP)\",\"cod\":57,\"lat\":-27.6006,\"lon\":-48.5185,\"interfaces\":[{\"name\":\"e288690\",\"id\":1},{\"name\":\"e288696\",\"id\":2},{\"name\":\"e289339\",\"id\":3},{\"name\":\"e289331\",\"id\":4},{\"name\":\"e289982\",\"id\":5},{\"name\":\"e289974\",\"id\":6},{\"name\":\"e290614\",\"id\":7},{\"name\":\"e290622\",\"id\":8},{\"name\":\"e291262\",\"id\":9},{\"name\":\"e291254\",\"id\":10},{\"name\":\"e291894\",\"id\":11},{\"name\":\"e291902\",\"id\":12},{\"name\":\"e292534\",\"id\":13},{\"name\":\"e292542\",\"id\":14},{\"name\":\"e293174\",\"id\":15},{\"name\":\"e293182\",\"id\":16},{\"name\":\"e293814\",\"id\":17},{\"name\":\"e293822\",\"id\":18},{\"name\":\"e294463\",\"id\":19},{\"name\":\"e294455\",\"id\":20}]},{\"caption\":\"UNC\",\"id\":\"UNC - Mafra (RCT)\",\"cod\":58,\"lat\":-26.1335,\"lon\":-49.8089,\"interfaces\":[{\"name\":\"e288467\",\"id\":1},{\"name\":\"e289112\",\"id\":2},{\"name\":\"e289755\",\"id\":3},{\"name\":\"e290395\",\"id\":4},{\"name\":\"e291035\",\"id\":5},{\"name\":\"e291675\",\"id\":6},{\"name\":\"e292315\",\"id\":7},{\"name\":\"e292955\",\"id\":8},{\"name\":\"e293595\",\"id\":9},{\"name\":\"e294238\",\"id\":10}]},{\"caption\":\"UNC\",\"id\":\"UNC - Curitibanos (RCT)\",\"cod\":59,\"lat\":-27.3069,\"lon\":-50.5632,\"interfaces\":[{\"name\":\"e288466\",\"id\":1},{\"name\":\"e289111\",\"id\":2},{\"name\":\"e289754\",\"id\":3},{\"name\":\"e290394\",\"id\":4},{\"name\":\"e291034\",\"id\":5},{\"name\":\"e291674\",\"id\":6},{\"name\":\"e292314\",\"id\":7},{\"name\":\"e292954\",\"id\":8},{\"name\":\"e293594\",\"id\":9},{\"name\":\"e294237\",\"id\":10}]},{\"caption\":\"UNC\",\"id\":\"UNC - Rio Negrinho (RCT)\",\"cod\":60,\"lat\":-26.2467,\"lon\":-49.5173,\"interfaces\":[{\"name\":\"e288469\",\"id\":1},{\"name\":\"e289114\",\"id\":2},{\"name\":\"e289757\",\"id\":3},{\"name\":\"e290397\",\"id\":4},{\"name\":\"e291037\",\"id\":5},{\"name\":\"e291677\",\"id\":6},{\"name\":\"e292317\",\"id\":7},{\"name\":\"e292957\",\"id\":8},{\"name\":\"e293597\",\"id\":9},{\"name\":\"e294240\",\"id\":10}]},{\"caption\":\"UNC\",\"id\":\"UNC - Porto União (RCT)\",\"cod\":61,\"lat\":-26.2448,\"lon\":-51.0844,\"interfaces\":[{\"name\":\"e288468\",\"id\":1},{\"name\":\"e289113\",\"id\":2},{\"name\":\"e289756\",\"id\":3},{\"name\":\"e290396\",\"id\":4},{\"name\":\"e291036\",\"id\":5},{\"name\":\"e291676\",\"id\":6},{\"name\":\"e292316\",\"id\":7},{\"name\":\"e292956\",\"id\":8},{\"name\":\"e293596\",\"id\":9},{\"name\":\"e294239\",\"id\":10}]},{\"caption\":\"UNIDAVI\",\"id\":\"UNIDAVI - Ituporanga (RCT)\",\"cod\":62,\"lat\":-27.4166,\"lon\":-49.5831,\"interfaces\":[{\"name\":\"e288470\",\"id\":1},{\"name\":\"e289115\",\"id\":2},{\"name\":\"e289758\",\"id\":3},{\"name\":\"e290398\",\"id\":4},{\"name\":\"e291038\",\"id\":5},{\"name\":\"e291678\",\"id\":6},{\"name\":\"e292318\",\"id\":7},{\"name\":\"e292958\",\"id\":8},{\"name\":\"e293598\",\"id\":9},{\"name\":\"e294241\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - Criciúma (RCT)\",\"cod\":63,\"lat\":-28.7008,\"lon\":-49.41,\"interfaces\":[{\"name\":\"e288464\",\"id\":1},{\"name\":\"e289109\",\"id\":2},{\"name\":\"e289752\",\"id\":3},{\"name\":\"e290392\",\"id\":4},{\"name\":\"e291032\",\"id\":5},{\"name\":\"e291672\",\"id\":6},{\"name\":\"e292312\",\"id\":7},{\"name\":\"e292952\",\"id\":8},{\"name\":\"e293592\",\"id\":9},{\"name\":\"e294235\",\"id\":10}]},{\"caption\":\"UNIDAVI\",\"id\":\"UNIDAVI - Taió (RCT)\",\"cod\":64,\"lat\":-27.1109,\"lon\":-49.9877,\"interfaces\":[{\"name\":\"e288472\",\"id\":1},{\"name\":\"e289117\",\"id\":2},{\"name\":\"e289760\",\"id\":3},{\"name\":\"e290400\",\"id\":4},{\"name\":\"e291040\",\"id\":5},{\"name\":\"e291680\",\"id\":6},{\"name\":\"e292320\",\"id\":7},{\"name\":\"e292960\",\"id\":8},{\"name\":\"e293600\",\"id\":9},{\"name\":\"e294243\",\"id\":10}]},{\"caption\":\"UNIDAVI\",\"id\":\"UNIDAVI - Pres. Getúlio (RCT)\",\"cod\":65,\"lat\":-27.0628,\"lon\":-49.6434,\"interfaces\":[{\"name\":\"e288471\",\"id\":1},{\"name\":\"e289116\",\"id\":2},{\"name\":\"e289759\",\"id\":3},{\"name\":\"e290399\",\"id\":4},{\"name\":\"e291039\",\"id\":5},{\"name\":\"e291679\",\"id\":6},{\"name\":\"e292319\",\"id\":7},{\"name\":\"e292959\",\"id\":8},{\"name\":\"e293599\",\"id\":9},{\"name\":\"e294242\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CEPLAN - CTM (RCT)\",\"cod\":66,\"lat\":-26.2474,\"lon\":-49.3487,\"interfaces\":[{\"name\":\"e288507\",\"id\":1},{\"name\":\"e289152\",\"id\":2},{\"name\":\"e289797\",\"id\":3},{\"name\":\"e290437\",\"id\":4},{\"name\":\"e291077\",\"id\":5},{\"name\":\"e291717\",\"id\":6},{\"name\":\"e292357\",\"id\":7},{\"name\":\"e292997\",\"id\":8},{\"name\":\"e293637\",\"id\":9},{\"name\":\"e294278\",\"id\":10}]},{\"caption\":\"UNIARP\",\"id\":\"UNIARP - Caçador (RCT)\",\"cod\":67,\"lat\":-26.7777,\"lon\":-51.0072,\"interfaces\":[{\"name\":\"e288473\",\"id\":1},{\"name\":\"e289118\",\"id\":2},{\"name\":\"e289761\",\"id\":3},{\"name\":\"e290401\",\"id\":4},{\"name\":\"e291041\",\"id\":5},{\"name\":\"e291681\",\"id\":6},{\"name\":\"e292321\",\"id\":7},{\"name\":\"e292961\",\"id\":8},{\"name\":\"e293601\",\"id\":9},{\"name\":\"e294244\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Xanxerê\",\"cod\":68,\"lat\":-26.8651,\"lon\":-52.4181,\"interfaces\":[{\"name\":\"e288618\",\"id\":1},{\"name\":\"e289259\",\"id\":2},{\"name\":\"e289902\",\"id\":3},{\"name\":\"e290542\",\"id\":4},{\"name\":\"e291182\",\"id\":5},{\"name\":\"e291822\",\"id\":6},{\"name\":\"e292462\",\"id\":7},{\"name\":\"e293102\",\"id\":8},{\"name\":\"e293742\",\"id\":9},{\"name\":\"e294383\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Urupema\",\"cod\":69,\"lat\":-27.9558,\"lon\":-49.8781,\"interfaces\":[{\"name\":\"e288644\",\"id\":1},{\"name\":\"e289285\",\"id\":2},{\"name\":\"e289928\",\"id\":3},{\"name\":\"e290568\",\"id\":4},{\"name\":\"e291208\",\"id\":5},{\"name\":\"e291848\",\"id\":6},{\"name\":\"e292488\",\"id\":7},{\"name\":\"e293128\",\"id\":8},{\"name\":\"e293768\",\"id\":9},{\"name\":\"e294409\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Palhoça (REMEP)\",\"cod\":70,\"lat\":-27.6301,\"lon\":-48.6893,\"interfaces\":[{\"name\":\"e288551\",\"id\":1},{\"name\":\"e289194\",\"id\":2},{\"name\":\"e289839\",\"id\":3},{\"name\":\"e290479\",\"id\":4},{\"name\":\"e291119\",\"id\":5},{\"name\":\"e291759\",\"id\":6},{\"name\":\"e292399\",\"id\":7},{\"name\":\"e293039\",\"id\":8},{\"name\":\"e293679\",\"id\":9},{\"name\":\"e294320\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Lages\",\"cod\":71,\"lat\":-27.7994,\"lon\":-50.3371,\"interfaces\":[{\"name\":\"e288603\",\"id\":1},{\"name\":\"e289244\",\"id\":2},{\"name\":\"e289887\",\"id\":3},{\"name\":\"e290527\",\"id\":4},{\"name\":\"e291167\",\"id\":5},{\"name\":\"e291807\",\"id\":6},{\"name\":\"e292447\",\"id\":7},{\"name\":\"e293087\",\"id\":8},{\"name\":\"e293727\",\"id\":9},{\"name\":\"e294368\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Tubarão\",\"cod\":72,\"lat\":-28.4783,\"lon\":-49.0282,\"interfaces\":[{\"name\":\"e288653\",\"id\":1},{\"name\":\"e289294\",\"id\":2},{\"name\":\"e289937\",\"id\":3},{\"name\":\"e290577\",\"id\":4},{\"name\":\"e291217\",\"id\":5},{\"name\":\"e291857\",\"id\":6},{\"name\":\"e292497\",\"id\":7},{\"name\":\"e293137\",\"id\":8},{\"name\":\"e293777\",\"id\":9},{\"name\":\"e294418\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Reitoria (REMEP)\",\"cod\":73,\"lat\":-27.5998,\"lon\":-48.5733,\"interfaces\":[{\"name\":\"e288589\",\"id\":1},{\"name\":\"e288555\",\"id\":2},{\"name\":\"e288494\",\"id\":3},{\"name\":\"e288492\",\"id\":4},{\"name\":\"e289139\",\"id\":5},{\"name\":\"e289198\",\"id\":6},{\"name\":\"e289137\",\"id\":7},{\"name\":\"e289230\",\"id\":8},{\"name\":\"e289875\",\"id\":9},{\"name\":\"e289780\",\"id\":10},{\"name\":\"e289843\",\"id\":11},{\"name\":\"e289782\",\"id\":12},{\"name\":\"e290422\",\"id\":13},{\"name\":\"e290515\",\"id\":14},{\"name\":\"e290420\",\"id\":15},{\"name\":\"e290483\",\"id\":16},{\"name\":\"e291123\",\"id\":17},{\"name\":\"e291060\",\"id\":18},{\"name\":\"e291062\",\"id\":19},{\"name\":\"e291155\",\"id\":20},{\"name\":\"e291700\",\"id\":21},{\"name\":\"e291702\",\"id\":22},{\"name\":\"e291795\",\"id\":23},{\"name\":\"e291763\",\"id\":24},{\"name\":\"e292435\",\"id\":25},{\"name\":\"e292340\",\"id\":26},{\"name\":\"e292403\",\"id\":27},{\"name\":\"e292342\",\"id\":28},{\"name\":\"e293075\",\"id\":29},{\"name\":\"e292982\",\"id\":30},{\"name\":\"e292980\",\"id\":31},{\"name\":\"e293043\",\"id\":32},{\"name\":\"e293683\",\"id\":33},{\"name\":\"e293620\",\"id\":34},{\"name\":\"e293622\",\"id\":35},{\"name\":\"e293715\",\"id\":36},{\"name\":\"e294324\",\"id\":37},{\"name\":\"e294265\",\"id\":38},{\"name\":\"e294356\",\"id\":39},{\"name\":\"e294263\",\"id\":40}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Jaraguá do Sul\",\"cod\":74,\"lat\":-26.4779,\"lon\":-49.089,\"interfaces\":[{\"name\":\"e288613\",\"id\":1},{\"name\":\"e289254\",\"id\":2},{\"name\":\"e289897\",\"id\":3},{\"name\":\"e290537\",\"id\":4},{\"name\":\"e291177\",\"id\":5},{\"name\":\"e291817\",\"id\":6},{\"name\":\"e292457\",\"id\":7},{\"name\":\"e293097\",\"id\":8},{\"name\":\"e293737\",\"id\":9},{\"name\":\"e294378\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Itajaí\",\"cod\":75,\"lat\":-26.9054,\"lon\":-48.6636,\"interfaces\":[{\"name\":\"e288621\",\"id\":1},{\"name\":\"e289262\",\"id\":2},{\"name\":\"e289905\",\"id\":3},{\"name\":\"e290545\",\"id\":4},{\"name\":\"e291185\",\"id\":5},{\"name\":\"e291825\",\"id\":6},{\"name\":\"e292465\",\"id\":7},{\"name\":\"e293105\",\"id\":8},{\"name\":\"e293745\",\"id\":9},{\"name\":\"e294386\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Joinville\",\"cod\":76,\"lat\":-26.2786,\"lon\":-48.8802,\"interfaces\":[{\"name\":\"e288638\",\"id\":1},{\"name\":\"e289279\",\"id\":2},{\"name\":\"e289922\",\"id\":3},{\"name\":\"e290562\",\"id\":4},{\"name\":\"e291202\",\"id\":5},{\"name\":\"e291842\",\"id\":6},{\"name\":\"e292482\",\"id\":7},{\"name\":\"e293122\",\"id\":8},{\"name\":\"e293762\",\"id\":9},{\"name\":\"e294403\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Jaraguá GW\",\"cod\":77,\"lat\":-26.4688,\"lon\":-49.1132,\"interfaces\":[{\"name\":\"e288615\",\"id\":1},{\"name\":\"e289256\",\"id\":2},{\"name\":\"e289899\",\"id\":3},{\"name\":\"e290539\",\"id\":4},{\"name\":\"e291179\",\"id\":5},{\"name\":\"e291819\",\"id\":6},{\"name\":\"e292459\",\"id\":7},{\"name\":\"e293099\",\"id\":8},{\"name\":\"e293739\",\"id\":9},{\"name\":\"e294380\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Cocreation (REMEP)\",\"cod\":78,\"lat\":-27.6675,\"lon\":-48.4797,\"interfaces\":[{\"name\":\"e288680\",\"id\":1},{\"name\":\"e289321\",\"id\":2},{\"name\":\"e289964\",\"id\":3},{\"name\":\"e290604\",\"id\":4},{\"name\":\"e291244\",\"id\":5},{\"name\":\"e291884\",\"id\":6},{\"name\":\"e292524\",\"id\":7},{\"name\":\"e293164\",\"id\":8},{\"name\":\"e293804\",\"id\":9},{\"name\":\"e294445\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - UFSC (REMEP)\",\"cod\":79,\"lat\":-27.6015,\"lon\":-48.518,\"interfaces\":[{\"name\":\"e288686\",\"id\":1},{\"name\":\"e289327\",\"id\":2},{\"name\":\"e289970\",\"id\":3},{\"name\":\"e290610\",\"id\":4},{\"name\":\"e291250\",\"id\":5},{\"name\":\"e291890\",\"id\":6},{\"name\":\"e292530\",\"id\":7},{\"name\":\"e293170\",\"id\":8},{\"name\":\"e293810\",\"id\":9},{\"name\":\"e294451\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Curitibanos\",\"cod\":80,\"lat\":-27.2858,\"lon\":-50.533,\"interfaces\":[{\"name\":\"e288607\",\"id\":1},{\"name\":\"e289248\",\"id\":2},{\"name\":\"e289891\",\"id\":3},{\"name\":\"e290531\",\"id\":4},{\"name\":\"e291171\",\"id\":5},{\"name\":\"e291811\",\"id\":6},{\"name\":\"e292451\",\"id\":7},{\"name\":\"e293091\",\"id\":8},{\"name\":\"e293731\",\"id\":9},{\"name\":\"e294372\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - HU (REMEP)\",\"cod\":81,\"lat\":-27.5973,\"lon\":-48.5182,\"interfaces\":[{\"name\":\"e288670\",\"id\":1},{\"name\":\"e288525\",\"id\":2},{\"name\":\"e289311\",\"id\":3},{\"name\":\"e289170\",\"id\":4}]},{\"caption\":\"UFSC\",\"id\":\"UFSC-Trindade\",\"cod\":82,\"lat\":-27.6014,\"lon\":-48.5179,\"interfaces\":[{\"name\":\"e288700\",\"id\":1},{\"name\":\"e289343\",\"id\":2},{\"name\":\"e289986\",\"id\":3},{\"name\":\"e290626\",\"id\":4},{\"name\":\"e291266\",\"id\":5},{\"name\":\"e291906\",\"id\":6},{\"name\":\"e292546\",\"id\":7},{\"name\":\"e293186\",\"id\":8},{\"name\":\"e293826\",\"id\":9},{\"name\":\"e294467\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - São José (REMEP)\",\"cod\":83,\"lat\":-27.6085,\"lon\":-48.6332,\"interfaces\":[{\"name\":\"e288553\",\"id\":1},{\"name\":\"e289196\",\"id\":2},{\"name\":\"e289841\",\"id\":3},{\"name\":\"e290481\",\"id\":4},{\"name\":\"e291121\",\"id\":5},{\"name\":\"e291761\",\"id\":6},{\"name\":\"e292401\",\"id\":7},{\"name\":\"e293041\",\"id\":8},{\"name\":\"e293681\",\"id\":9},{\"name\":\"e294322\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Florianópolis (REMEP)\",\"cod\":84,\"lat\":-27.5939,\"lon\":-48.5413,\"interfaces\":[{\"name\":\"e288537\",\"id\":1},{\"name\":\"e289180\",\"id\":2},{\"name\":\"e289825\",\"id\":3},{\"name\":\"e290465\",\"id\":4},{\"name\":\"e291105\",\"id\":5},{\"name\":\"e291745\",\"id\":6},{\"name\":\"e292385\",\"id\":7},{\"name\":\"e293025\",\"id\":8},{\"name\":\"e293665\",\"id\":9},{\"name\":\"e294306\",\"id\":10}]},{\"caption\":\"UFFS\",\"id\":\"UFFS - Bom Pastor Reitoria\",\"cod\":85,\"lat\":-27.1059,\"lon\":-52.6164,\"interfaces\":[{\"name\":\"e288648\",\"id\":1},{\"name\":\"e289289\",\"id\":2},{\"name\":\"e289932\",\"id\":3},{\"name\":\"e290572\",\"id\":4},{\"name\":\"e291212\",\"id\":5},{\"name\":\"e291852\",\"id\":6},{\"name\":\"e292492\",\"id\":7},{\"name\":\"e293132\",\"id\":8},{\"name\":\"e293772\",\"id\":9},{\"name\":\"e294413\",\"id\":10}]},{\"caption\":\"UFFS\",\"id\":\"UFFS - Chapecó\",\"cod\":86,\"lat\":-27.1153,\"lon\":-52.7059,\"interfaces\":[{\"name\":\"e288651\",\"id\":1},{\"name\":\"e289292\",\"id\":2},{\"name\":\"e289935\",\"id\":3},{\"name\":\"e290575\",\"id\":4},{\"name\":\"e291215\",\"id\":5},{\"name\":\"e291855\",\"id\":6},{\"name\":\"e292495\",\"id\":7},{\"name\":\"e293135\",\"id\":8},{\"name\":\"e293775\",\"id\":9},{\"name\":\"e294416\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Cidade das Abelhas (REMEP)\",\"cod\":87,\"lat\":-27.5386,\"lon\":-48.5036,\"interfaces\":[{\"name\":\"e288521\",\"id\":1},{\"name\":\"e289166\",\"id\":2},{\"name\":\"e289811\",\"id\":3},{\"name\":\"e290451\",\"id\":4},{\"name\":\"e291091\",\"id\":5},{\"name\":\"e291731\",\"id\":6},{\"name\":\"e292371\",\"id\":7},{\"name\":\"e293011\",\"id\":8},{\"name\":\"e293651\",\"id\":9},{\"name\":\"e294292\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Araranguá\",\"cod\":88,\"lat\":-28.9528,\"lon\":-49.5023,\"interfaces\":[{\"name\":\"e288597\",\"id\":1},{\"name\":\"e289238\",\"id\":2},{\"name\":\"e289881\",\"id\":3},{\"name\":\"e290521\",\"id\":4},{\"name\":\"e291161\",\"id\":5},{\"name\":\"e291801\",\"id\":6},{\"name\":\"e292441\",\"id\":7},{\"name\":\"e293081\",\"id\":8},{\"name\":\"e293721\",\"id\":9},{\"name\":\"e294362\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Blumenau\",\"cod\":89,\"lat\":-26.8761,\"lon\":-49.1023,\"interfaces\":[{\"name\":\"e288630\",\"id\":1},{\"name\":\"e289271\",\"id\":2},{\"name\":\"e289914\",\"id\":3},{\"name\":\"e290554\",\"id\":4},{\"name\":\"e291194\",\"id\":5},{\"name\":\"e291834\",\"id\":6},{\"name\":\"e292474\",\"id\":7},{\"name\":\"e293114\",\"id\":8},{\"name\":\"e293754\",\"id\":9},{\"name\":\"e294395\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - CCA (REMEP)\",\"cod\":90,\"lat\":-27.583,\"lon\":-48.5046,\"interfaces\":[{\"name\":\"e288698\",\"id\":1},{\"name\":\"e288692\",\"id\":2},{\"name\":\"e289341\",\"id\":3},{\"name\":\"e289333\",\"id\":4},{\"name\":\"e289984\",\"id\":5},{\"name\":\"e289976\",\"id\":6},{\"name\":\"e290616\",\"id\":7},{\"name\":\"e290624\",\"id\":8},{\"name\":\"e291256\",\"id\":9},{\"name\":\"e291264\",\"id\":10},{\"name\":\"e291904\",\"id\":11},{\"name\":\"e291896\",\"id\":12},{\"name\":\"e292544\",\"id\":13},{\"name\":\"e292536\",\"id\":14},{\"name\":\"e293184\",\"id\":15},{\"name\":\"e293176\",\"id\":16},{\"name\":\"e293816\",\"id\":17},{\"name\":\"e293824\",\"id\":18},{\"name\":\"e294457\",\"id\":19},{\"name\":\"e294465\",\"id\":20}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Labtrans/Trindade (REMEP)\",\"cod\":91,\"lat\":-27.5964,\"lon\":-48.5213,\"interfaces\":[{\"name\":\"e288674\",\"id\":1},{\"name\":\"e289315\",\"id\":2},{\"name\":\"e289958\",\"id\":3},{\"name\":\"e290598\",\"id\":4},{\"name\":\"e291238\",\"id\":5},{\"name\":\"e291878\",\"id\":6},{\"name\":\"e292518\",\"id\":7},{\"name\":\"e293158\",\"id\":8},{\"name\":\"e293798\",\"id\":9},{\"name\":\"e294439\",\"id\":10}]},{\"caption\":\"UNIVILLE\",\"id\":\"UNIVILLE - Joinville (REMEP)\",\"cod\":92,\"lat\":-26.3074,\"lon\":-48.844,\"interfaces\":[{\"name\":\"e288672\",\"id\":1},{\"name\":\"e289313\",\"id\":2},{\"name\":\"e289956\",\"id\":3},{\"name\":\"e290596\",\"id\":4},{\"name\":\"e291236\",\"id\":5},{\"name\":\"e291876\",\"id\":6},{\"name\":\"e292516\",\"id\":7},{\"name\":\"e293156\",\"id\":8},{\"name\":\"e293796\",\"id\":9},{\"name\":\"e294437\",\"id\":10}]},{\"caption\":\"UNISINOS\",\"id\":\"UNISINOS (REMEP)\",\"cod\":93,\"lat\":-27.5889,\"lon\":-48.5535,\"interfaces\":[{\"name\":\"e288539\",\"id\":1},{\"name\":\"e288577\",\"id\":2},{\"name\":\"e289182\",\"id\":3},{\"name\":\"e289220\",\"id\":4},{\"name\":\"e289827\",\"id\":5},{\"name\":\"e289865\",\"id\":6},{\"name\":\"e290505\",\"id\":7},{\"name\":\"e290467\",\"id\":8},{\"name\":\"e291107\",\"id\":9},{\"name\":\"e291145\",\"id\":10},{\"name\":\"e291747\",\"id\":11},{\"name\":\"e291785\",\"id\":12},{\"name\":\"e292425\",\"id\":13},{\"name\":\"e292387\",\"id\":14},{\"name\":\"e293027\",\"id\":15},{\"name\":\"e293065\",\"id\":16},{\"name\":\"e293667\",\"id\":17},{\"name\":\"e293705\",\"id\":18},{\"name\":\"e294346\",\"id\":19},{\"name\":\"e294308\",\"id\":20}]},{\"caption\":\"UNIVALI\",\"id\":\"UNIVALI (REMEP)\",\"cod\":94,\"lat\":-26.9143,\"lon\":-48.6624,\"interfaces\":[{\"name\":\"e288573\",\"id\":1},{\"name\":\"e289216\",\"id\":2},{\"name\":\"e289861\",\"id\":3},{\"name\":\"e290501\",\"id\":4},{\"name\":\"e291141\",\"id\":5},{\"name\":\"e291781\",\"id\":6},{\"name\":\"e292421\",\"id\":7},{\"name\":\"e293061\",\"id\":8},{\"name\":\"e293701\",\"id\":9},{\"name\":\"e294342\",\"id\":10}]},{\"caption\":\"UNISUL\",\"id\":\"UNISUL - Tubarão - Fundação (RCT)\",\"cod\":95,\"lat\":-28.4838,\"lon\":-49.0136,\"interfaces\":[{\"name\":\"e288570\",\"id\":1},{\"name\":\"e289213\",\"id\":2},{\"name\":\"e289858\",\"id\":3},{\"name\":\"e290498\",\"id\":4},{\"name\":\"e291138\",\"id\":5},{\"name\":\"e291778\",\"id\":6},{\"name\":\"e292418\",\"id\":7},{\"name\":\"e293058\",\"id\":8},{\"name\":\"e293698\",\"id\":9},{\"name\":\"e294339\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CEO - Pinhalzinho (RCT)\",\"cod\":96,\"lat\":-26.8757,\"lon\":-52.9555,\"interfaces\":[{\"name\":\"e288567\",\"id\":1},{\"name\":\"e289210\",\"id\":2},{\"name\":\"e289855\",\"id\":3},{\"name\":\"e290495\",\"id\":4},{\"name\":\"e291135\",\"id\":5},{\"name\":\"e291775\",\"id\":6},{\"name\":\"e292415\",\"id\":7},{\"name\":\"e293055\",\"id\":8},{\"name\":\"e293695\",\"id\":9},{\"name\":\"e294336\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CESFI (RCT)\",\"cod\":97,\"lat\":-27.0217,\"lon\":-48.6154,\"interfaces\":[{\"name\":\"e288565\",\"id\":1},{\"name\":\"e289208\",\"id\":2},{\"name\":\"e289853\",\"id\":3},{\"name\":\"e290493\",\"id\":4},{\"name\":\"e291133\",\"id\":5},{\"name\":\"e291773\",\"id\":6},{\"name\":\"e292413\",\"id\":7},{\"name\":\"e293053\",\"id\":8},{\"name\":\"e293693\",\"id\":9},{\"name\":\"e294334\",\"id\":10}]},{\"caption\":\"UNISUL\",\"id\":\"UNISUL - Palhoça (REMEP)\",\"cod\":98,\"lat\":-27.6263,\"lon\":-48.6835,\"interfaces\":[{\"name\":\"e288559\",\"id\":1},{\"name\":\"e289202\",\"id\":2},{\"name\":\"e289847\",\"id\":3},{\"name\":\"e290487\",\"id\":4},{\"name\":\"e291127\",\"id\":5},{\"name\":\"e291767\",\"id\":6},{\"name\":\"e292407\",\"id\":7},{\"name\":\"e293047\",\"id\":8},{\"name\":\"e293687\",\"id\":9},{\"name\":\"e294328\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Reitoria\",\"cod\":99,\"lat\":-26.9129,\"lon\":-49.0661,\"interfaces\":[{\"name\":\"e288650\",\"id\":1},{\"name\":\"e289291\",\"id\":2},{\"name\":\"e289934\",\"id\":3},{\"name\":\"e290574\",\"id\":4},{\"name\":\"e291214\",\"id\":5},{\"name\":\"e291854\",\"id\":6},{\"name\":\"e292494\",\"id\":7},{\"name\":\"e293134\",\"id\":8},{\"name\":\"e293774\",\"id\":9},{\"name\":\"e294415\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - NEPAQ (REMEP)\",\"cod\":100,\"lat\":-27.5861,\"lon\":-48.5086,\"interfaces\":[{\"name\":\"e288523\",\"id\":1},{\"name\":\"e289168\",\"id\":2},{\"name\":\"e289813\",\"id\":3},{\"name\":\"e290453\",\"id\":4},{\"name\":\"e291093\",\"id\":5},{\"name\":\"e291733\",\"id\":6},{\"name\":\"e292373\",\"id\":7},{\"name\":\"e293013\",\"id\":8},{\"name\":\"e293653\",\"id\":9},{\"name\":\"e294294\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Joinville\",\"cod\":101,\"lat\":-26.2403,\"lon\":-48.8822,\"interfaces\":[{\"name\":\"e288594\",\"id\":1},{\"name\":\"e289235\",\"id\":2},{\"name\":\"e289878\",\"id\":3},{\"name\":\"e290518\",\"id\":4},{\"name\":\"e291158\",\"id\":5},{\"name\":\"e291798\",\"id\":6},{\"name\":\"e292438\",\"id\":7},{\"name\":\"e293078\",\"id\":8},{\"name\":\"e293718\",\"id\":9},{\"name\":\"e294359\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - Museu (REMEP)\",\"cod\":102,\"lat\":-27.5979,\"lon\":-48.5482,\"interfaces\":[{\"name\":\"e288531\",\"id\":1},{\"name\":\"e288581\",\"id\":2},{\"name\":\"e289174\",\"id\":3},{\"name\":\"e289224\",\"id\":4},{\"name\":\"e289869\",\"id\":5},{\"name\":\"e289784\",\"id\":6},{\"name\":\"e289819\",\"id\":7},{\"name\":\"e290424\",\"id\":8},{\"name\":\"e290459\",\"id\":9},{\"name\":\"e290509\",\"id\":10},{\"name\":\"e291149\",\"id\":11},{\"name\":\"e291064\",\"id\":12},{\"name\":\"e291099\",\"id\":13},{\"name\":\"e291789\",\"id\":14},{\"name\":\"e291704\",\"id\":15},{\"name\":\"e291739\",\"id\":16},{\"name\":\"e292429\",\"id\":17},{\"name\":\"e292379\",\"id\":18},{\"name\":\"e292344\",\"id\":19},{\"name\":\"e292984\",\"id\":20},{\"name\":\"e293069\",\"id\":21},{\"name\":\"e293019\",\"id\":22},{\"name\":\"e293659\",\"id\":23},{\"name\":\"e293624\",\"id\":24},{\"name\":\"e293709\",\"id\":25},{\"name\":\"e294350\",\"id\":26},{\"name\":\"e294300\",\"id\":27}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - DAPE (REMEP)\",\"cod\":103,\"lat\":-27.5931,\"lon\":-48.5471,\"interfaces\":[{\"name\":\"e288585\",\"id\":1},{\"name\":\"e288529\",\"id\":2}]},{\"caption\":\"UNISUL\",\"id\":\"UNISUL - Ilha Centro (REMEP)\",\"cod\":104,\"lat\":-27.5965,\"lon\":-48.5505,\"interfaces\":[{\"name\":\"e288587\",\"id\":1},{\"name\":\"e288533\",\"id\":2},{\"name\":\"e289176\",\"id\":3},{\"name\":\"e289228\",\"id\":4},{\"name\":\"e289821\",\"id\":5},{\"name\":\"e289873\",\"id\":6},{\"name\":\"e290513\",\"id\":7},{\"name\":\"e290461\",\"id\":8},{\"name\":\"e291153\",\"id\":9},{\"name\":\"e291101\",\"id\":10},{\"name\":\"e291741\",\"id\":11},{\"name\":\"e291793\",\"id\":12},{\"name\":\"e292433\",\"id\":13},{\"name\":\"e292381\",\"id\":14},{\"name\":\"e293021\",\"id\":15},{\"name\":\"e293073\",\"id\":16},{\"name\":\"e293713\",\"id\":17},{\"name\":\"e293661\",\"id\":18},{\"name\":\"e294354\",\"id\":19},{\"name\":\"e294302\",\"id\":20}]},{\"caption\":\"UNISUL\",\"id\":\"UNISUL - Dib Mussi (REMEP)\",\"cod\":105,\"lat\":-27.5931,\"lon\":-48.5518,\"interfaces\":[{\"name\":\"e288535\",\"id\":1},{\"name\":\"e288583\",\"id\":2},{\"name\":\"e289226\",\"id\":3},{\"name\":\"e289178\",\"id\":4},{\"name\":\"e289823\",\"id\":5},{\"name\":\"e289871\",\"id\":6},{\"name\":\"e290463\",\"id\":7},{\"name\":\"e290511\",\"id\":8},{\"name\":\"e291151\",\"id\":9},{\"name\":\"e291103\",\"id\":10},{\"name\":\"e291743\",\"id\":11},{\"name\":\"e291791\",\"id\":12},{\"name\":\"e292431\",\"id\":13},{\"name\":\"e292383\",\"id\":14},{\"name\":\"e293071\",\"id\":15},{\"name\":\"e293023\",\"id\":16},{\"name\":\"e293711\",\"id\":17},{\"name\":\"e293663\",\"id\":18},{\"name\":\"e294304\",\"id\":19},{\"name\":\"e294352\",\"id\":20}]},{\"caption\":\"IFC\",\"id\":\"IFC - Blumenau (RCT)\",\"cod\":106,\"lat\":-26.8812,\"lon\":-49.1396,\"interfaces\":[{\"name\":\"e288428\",\"id\":1},{\"name\":\"e289073\",\"id\":2},{\"name\":\"e289716\",\"id\":3},{\"name\":\"e290356\",\"id\":4},{\"name\":\"e290996\",\"id\":5},{\"name\":\"e291636\",\"id\":6},{\"name\":\"e292276\",\"id\":7},{\"name\":\"e292916\",\"id\":8},{\"name\":\"e293556\",\"id\":9},{\"name\":\"e294199\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Luzerna (RCT)\",\"cod\":107,\"lat\":-27.133,\"lon\":-51.4635,\"interfaces\":[{\"name\":\"e288429\",\"id\":1},{\"name\":\"e289074\",\"id\":2},{\"name\":\"e289717\",\"id\":3},{\"name\":\"e290357\",\"id\":4},{\"name\":\"e290997\",\"id\":5},{\"name\":\"e291637\",\"id\":6},{\"name\":\"e292277\",\"id\":7},{\"name\":\"e292917\",\"id\":8},{\"name\":\"e293557\",\"id\":9},{\"name\":\"e294200\",\"id\":10}]},{\"caption\":\"EPAGRI\",\"id\":\"EPAGRI (REMEP)\",\"cod\":108,\"lat\":-27.5814,\"lon\":-48.5038,\"interfaces\":[{\"name\":\"e288688\",\"id\":1},{\"name\":\"e288515\",\"id\":2},{\"name\":\"e289329\",\"id\":3},{\"name\":\"e289160\",\"id\":4},{\"name\":\"e289805\",\"id\":5},{\"name\":\"e289972\",\"id\":6},{\"name\":\"e290445\",\"id\":7},{\"name\":\"e290612\",\"id\":8},{\"name\":\"e291252\",\"id\":9},{\"name\":\"e291085\",\"id\":10},{\"name\":\"e291725\",\"id\":11},{\"name\":\"e291892\",\"id\":12},{\"name\":\"e292532\",\"id\":13},{\"name\":\"e292365\",\"id\":14},{\"name\":\"e293005\",\"id\":15},{\"name\":\"e293172\",\"id\":16},{\"name\":\"e293645\",\"id\":17},{\"name\":\"e293812\",\"id\":18},{\"name\":\"e294286\",\"id\":19},{\"name\":\"e294453\",\"id\":20}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - SEAD (REMEP)\",\"cod\":109,\"lat\":-27.5907,\"lon\":-48.5469,\"interfaces\":[{\"name\":\"e288591\",\"id\":1},{\"name\":\"e288543\",\"id\":2},{\"name\":\"e289186\",\"id\":3},{\"name\":\"e289232\",\"id\":4},{\"name\":\"e289877\",\"id\":5},{\"name\":\"e289831\",\"id\":6},{\"name\":\"e290517\",\"id\":7},{\"name\":\"e290471\",\"id\":8},{\"name\":\"e291111\",\"id\":9},{\"name\":\"e291157\",\"id\":10},{\"name\":\"e291797\",\"id\":11},{\"name\":\"e291751\",\"id\":12},{\"name\":\"e292437\",\"id\":13},{\"name\":\"e292391\",\"id\":14},{\"name\":\"e293031\",\"id\":15},{\"name\":\"e293077\",\"id\":16},{\"name\":\"e293671\",\"id\":17},{\"name\":\"e293717\",\"id\":18},{\"name\":\"e294312\",\"id\":19},{\"name\":\"e294358\",\"id\":20}]},{\"caption\":\"ESTÁCIO\",\"id\":\"ESTÁCIO DE SÁ - ASSESC (REMEP)\",\"cod\":110,\"lat\":-27.5733,\"lon\":-48.514,\"interfaces\":[{\"name\":\"e288517\",\"id\":1},{\"name\":\"e289162\",\"id\":2},{\"name\":\"e289807\",\"id\":3},{\"name\":\"e290447\",\"id\":4},{\"name\":\"e291087\",\"id\":5},{\"name\":\"e291727\",\"id\":6},{\"name\":\"e292367\",\"id\":7},{\"name\":\"e293007\",\"id\":8},{\"name\":\"e293647\",\"id\":9},{\"name\":\"e294288\",\"id\":10}]},{\"caption\":\"IMETRO\",\"id\":\"IMETRO - SC (REMEP)\",\"cod\":111,\"lat\":-27.5798,\"lon\":-48.6242,\"interfaces\":[{\"name\":\"e288549\",\"id\":1},{\"name\":\"e289192\",\"id\":2},{\"name\":\"e289837\",\"id\":3},{\"name\":\"e290477\",\"id\":4},{\"name\":\"e291117\",\"id\":5},{\"name\":\"e291757\",\"id\":6},{\"name\":\"e292397\",\"id\":7},{\"name\":\"e293037\",\"id\":8},{\"name\":\"e293677\",\"id\":9},{\"name\":\"e294318\",\"id\":10}]},{\"caption\":\"FAPESC\",\"id\":\"FAPESC (REMEP)\",\"cod\":112,\"lat\":-27.5713,\"lon\":-48.509,\"interfaces\":[{\"name\":\"e288519\",\"id\":1},{\"name\":\"e289164\",\"id\":2},{\"name\":\"e289809\",\"id\":3},{\"name\":\"e290449\",\"id\":4},{\"name\":\"e291089\",\"id\":5},{\"name\":\"e291729\",\"id\":6},{\"name\":\"e292369\",\"id\":7},{\"name\":\"e293009\",\"id\":8},{\"name\":\"e293649\",\"id\":9},{\"name\":\"e294290\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - Florianópolis (REMEP)\",\"cod\":113,\"lat\":-27.5854,\"lon\":-48.5035,\"interfaces\":[{\"name\":\"e288526\",\"id\":1},{\"name\":\"e289171\",\"id\":2},{\"name\":\"e289816\",\"id\":3},{\"name\":\"e290456\",\"id\":4},{\"name\":\"e291096\",\"id\":5},{\"name\":\"e291736\",\"id\":6},{\"name\":\"e292376\",\"id\":7},{\"name\":\"e293016\",\"id\":8},{\"name\":\"e293656\",\"id\":9},{\"name\":\"e294297\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Caçador (RCT)\",\"cod\":114,\"lat\":-26.7797,\"lon\":-51.0385,\"interfaces\":[{\"name\":\"e288438\",\"id\":1},{\"name\":\"e289083\",\"id\":2},{\"name\":\"e289726\",\"id\":3},{\"name\":\"e290366\",\"id\":4},{\"name\":\"e291006\",\"id\":5},{\"name\":\"e291646\",\"id\":6},{\"name\":\"e292286\",\"id\":7},{\"name\":\"e292926\",\"id\":8},{\"name\":\"e293566\",\"id\":9},{\"name\":\"e294209\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Criciúma (RCT)\",\"cod\":115,\"lat\":-28.6787,\"lon\":-49.3319,\"interfaces\":[{\"name\":\"e288430\",\"id\":1},{\"name\":\"e289075\",\"id\":2},{\"name\":\"e289718\",\"id\":3},{\"name\":\"e290358\",\"id\":4},{\"name\":\"e290998\",\"id\":5},{\"name\":\"e291638\",\"id\":6},{\"name\":\"e292278\",\"id\":7},{\"name\":\"e292918\",\"id\":8},{\"name\":\"e293558\",\"id\":9},{\"name\":\"e294201\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Abelardo Luz\",\"cod\":116,\"lat\":-26.5696,\"lon\":-52.3272,\"interfaces\":[{\"name\":\"e288668\",\"id\":1},{\"name\":\"e289309\",\"id\":2},{\"name\":\"e289952\",\"id\":3},{\"name\":\"e290592\",\"id\":4},{\"name\":\"e291232\",\"id\":5},{\"name\":\"e291872\",\"id\":6},{\"name\":\"e292512\",\"id\":7},{\"name\":\"e293152\",\"id\":8},{\"name\":\"e293792\",\"id\":9},{\"name\":\"e294433\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - São Bento do Sul\",\"cod\":117,\"lat\":-26.2461,\"lon\":-49.3463,\"interfaces\":[{\"name\":\"e288628\",\"id\":1},{\"name\":\"e289269\",\"id\":2},{\"name\":\"e289912\",\"id\":3},{\"name\":\"e290552\",\"id\":4},{\"name\":\"e291192\",\"id\":5},{\"name\":\"e291832\",\"id\":6},{\"name\":\"e292472\",\"id\":7},{\"name\":\"e293112\",\"id\":8},{\"name\":\"e293752\",\"id\":9},{\"name\":\"e294393\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - LAPAD (REMEP)\",\"cod\":118,\"lat\":-27.7292,\"lon\":-48.5089,\"interfaces\":[{\"name\":\"e288682\",\"id\":1},{\"name\":\"e289323\",\"id\":2},{\"name\":\"e289966\",\"id\":3},{\"name\":\"e290606\",\"id\":4},{\"name\":\"e291246\",\"id\":5},{\"name\":\"e291886\",\"id\":6},{\"name\":\"e292526\",\"id\":7},{\"name\":\"e293166\",\"id\":8},{\"name\":\"e293806\",\"id\":9},{\"name\":\"e294447\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - LCM (REMEP)\",\"cod\":119,\"lat\":-27.5818,\"lon\":-48.442,\"interfaces\":[{\"name\":\"e288694\",\"id\":1},{\"name\":\"e289337\",\"id\":2},{\"name\":\"e289980\",\"id\":3},{\"name\":\"e290620\",\"id\":4},{\"name\":\"e291260\",\"id\":5},{\"name\":\"e291900\",\"id\":6},{\"name\":\"e292540\",\"id\":7},{\"name\":\"e293180\",\"id\":8},{\"name\":\"e293820\",\"id\":9},{\"name\":\"e294461\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Barra do Sul / Fazenda Yakult (RCT)\",\"cod\":120,\"lat\":-26.5631,\"lon\":-48.6636,\"interfaces\":[{\"name\":\"e288439\",\"id\":1},{\"name\":\"e289084\",\"id\":2},{\"name\":\"e289727\",\"id\":3},{\"name\":\"e290367\",\"id\":4},{\"name\":\"e291007\",\"id\":5},{\"name\":\"e291647\",\"id\":6},{\"name\":\"e292287\",\"id\":7},{\"name\":\"e292927\",\"id\":8},{\"name\":\"e293567\",\"id\":9},{\"name\":\"e294210\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Brusque\",\"cod\":121,\"lat\":-27.0995,\"lon\":-48.9286,\"interfaces\":[{\"name\":\"e288626\",\"id\":1},{\"name\":\"e289267\",\"id\":2},{\"name\":\"e289910\",\"id\":3},{\"name\":\"e290550\",\"id\":4},{\"name\":\"e291190\",\"id\":5},{\"name\":\"e291830\",\"id\":6},{\"name\":\"e292470\",\"id\":7},{\"name\":\"e293110\",\"id\":8},{\"name\":\"e293750\",\"id\":9},{\"name\":\"e294391\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Rio do Sul Urbana\",\"cod\":122,\"lat\":-27.2122,\"lon\":-49.6401,\"interfaces\":[{\"name\":\"e288640\",\"id\":1},{\"name\":\"e289281\",\"id\":2},{\"name\":\"e289924\",\"id\":3},{\"name\":\"e290564\",\"id\":4},{\"name\":\"e291204\",\"id\":5},{\"name\":\"e291844\",\"id\":6},{\"name\":\"e292484\",\"id\":7},{\"name\":\"e293124\",\"id\":8},{\"name\":\"e293764\",\"id\":9},{\"name\":\"e294405\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - São Miguel\",\"cod\":123,\"lat\":-26.7423,\"lon\":-53.5271,\"interfaces\":[{\"name\":\"e288642\",\"id\":1},{\"name\":\"e289283\",\"id\":2},{\"name\":\"e289926\",\"id\":3},{\"name\":\"e290566\",\"id\":4},{\"name\":\"e291206\",\"id\":5},{\"name\":\"e291846\",\"id\":6},{\"name\":\"e292486\",\"id\":7},{\"name\":\"e293126\",\"id\":8},{\"name\":\"e293766\",\"id\":9},{\"name\":\"e294407\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - São Carlos\",\"cod\":124,\"lat\":-27.0839,\"lon\":-53.0058,\"interfaces\":[{\"name\":\"e288657\",\"id\":1},{\"name\":\"e289298\",\"id\":2},{\"name\":\"e289941\",\"id\":3},{\"name\":\"e290581\",\"id\":4},{\"name\":\"e291221\",\"id\":5},{\"name\":\"e291861\",\"id\":6},{\"name\":\"e292501\",\"id\":7},{\"name\":\"e293141\",\"id\":8},{\"name\":\"e293781\",\"id\":9},{\"name\":\"e294422\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Garopaba\",\"cod\":125,\"lat\":-28.0925,\"lon\":-48.6684,\"interfaces\":[{\"name\":\"e288599\",\"id\":1},{\"name\":\"e289240\",\"id\":2},{\"name\":\"e289883\",\"id\":3},{\"name\":\"e290523\",\"id\":4},{\"name\":\"e291163\",\"id\":5},{\"name\":\"e291803\",\"id\":6},{\"name\":\"e292443\",\"id\":7},{\"name\":\"e293083\",\"id\":8},{\"name\":\"e293723\",\"id\":9},{\"name\":\"e294364\",\"id\":10}]},{\"caption\":\"UNISUL\",\"id\":\"UNISUL-FLN-Continente (REMEP)\",\"cod\":126,\"lat\":-27.6008,\"lon\":-48.6039,\"interfaces\":[{\"name\":\"e288561\",\"id\":1},{\"name\":\"e289204\",\"id\":2},{\"name\":\"e289849\",\"id\":3},{\"name\":\"e290489\",\"id\":4},{\"name\":\"e291129\",\"id\":5},{\"name\":\"e291769\",\"id\":6},{\"name\":\"e292409\",\"id\":7},{\"name\":\"e293049\",\"id\":8},{\"name\":\"e293689\",\"id\":9},{\"name\":\"e294330\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC Sambaqui - LLM (RCT)\",\"cod\":127,\"lat\":-27.4898,\"lon\":-48.5378,\"interfaces\":[{\"name\":\"e288480\",\"id\":1},{\"name\":\"e289125\",\"id\":2},{\"name\":\"e289768\",\"id\":3},{\"name\":\"e290408\",\"id\":4},{\"name\":\"e291048\",\"id\":5},{\"name\":\"e291688\",\"id\":6},{\"name\":\"e292328\",\"id\":7},{\"name\":\"e292968\",\"id\":8},{\"name\":\"e293608\",\"id\":9},{\"name\":\"e294251\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Fotovoltaica (REMEP)\",\"cod\":128,\"lat\":-27.4308,\"lon\":-48.4414,\"interfaces\":[{\"name\":\"e288569\",\"id\":1},{\"name\":\"e289212\",\"id\":2},{\"name\":\"e289857\",\"id\":3},{\"name\":\"e290497\",\"id\":4},{\"name\":\"e291137\",\"id\":5},{\"name\":\"e291777\",\"id\":6},{\"name\":\"e292417\",\"id\":7},{\"name\":\"e293057\",\"id\":8},{\"name\":\"e293697\",\"id\":9},{\"name\":\"e294338\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Blumenau Administrativo\",\"cod\":129,\"lat\":-26.9211,\"lon\":-49.0985,\"interfaces\":[{\"name\":\"e288632\",\"id\":1},{\"name\":\"e289273\",\"id\":2},{\"name\":\"e289916\",\"id\":3},{\"name\":\"e290556\",\"id\":4},{\"name\":\"e291196\",\"id\":5},{\"name\":\"e291836\",\"id\":6},{\"name\":\"e292476\",\"id\":7},{\"name\":\"e293116\",\"id\":8},{\"name\":\"e293756\",\"id\":9},{\"name\":\"e294397\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Gaspar\",\"cod\":130,\"lat\":-26.9008,\"lon\":-49.004,\"interfaces\":[{\"name\":\"e288662\",\"id\":1},{\"name\":\"e289303\",\"id\":2},{\"name\":\"e289946\",\"id\":3},{\"name\":\"e290586\",\"id\":4},{\"name\":\"e291226\",\"id\":5},{\"name\":\"e291866\",\"id\":6},{\"name\":\"e292506\",\"id\":7},{\"name\":\"e293146\",\"id\":8},{\"name\":\"e293786\",\"id\":9},{\"name\":\"e294427\",\"id\":10}]},{\"caption\":\"UNIDAVI\",\"id\":\"UNIDAVI - Incubadora - GTEC (RCT)\",\"cod\":131,\"lat\":-27.2186,\"lon\":-49.6481,\"interfaces\":[{\"name\":\"e288702\",\"id\":1},{\"name\":\"e289345\",\"id\":2},{\"name\":\"e289988\",\"id\":3},{\"name\":\"e290628\",\"id\":4},{\"name\":\"e291268\",\"id\":5},{\"name\":\"e291908\",\"id\":6},{\"name\":\"e292548\",\"id\":7},{\"name\":\"e293188\",\"id\":8},{\"name\":\"e293828\",\"id\":9},{\"name\":\"e294469\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Labtrans/DNIT (REMEP)\",\"cod\":132,\"lat\":-27.6017,\"lon\":-48.5483,\"interfaces\":[{\"name\":\"e288575\",\"id\":1},{\"name\":\"e288547\",\"id\":2},{\"name\":\"e289190\",\"id\":3},{\"name\":\"e289218\",\"id\":4},{\"name\":\"e289863\",\"id\":5},{\"name\":\"e289835\",\"id\":6},{\"name\":\"e290475\",\"id\":7},{\"name\":\"e290503\",\"id\":8},{\"name\":\"e291143\",\"id\":9},{\"name\":\"e291115\",\"id\":10},{\"name\":\"e291783\",\"id\":11},{\"name\":\"e291755\",\"id\":12},{\"name\":\"e292395\",\"id\":13},{\"name\":\"e292423\",\"id\":14},{\"name\":\"e293063\",\"id\":15},{\"name\":\"e293035\",\"id\":16},{\"name\":\"e293703\",\"id\":17},{\"name\":\"e293675\",\"id\":18},{\"name\":\"e294344\",\"id\":19},{\"name\":\"e294316\",\"id\":20}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Jaraguá (RCT)\",\"cod\":133,\"lat\":-26.4774,\"lon\":-49.0901,\"interfaces\":[{\"name\":\"e288432\",\"id\":1},{\"name\":\"e289077\",\"id\":2},{\"name\":\"e289720\",\"id\":3},{\"name\":\"e290360\",\"id\":4},{\"name\":\"e291000\",\"id\":5},{\"name\":\"e291640\",\"id\":6},{\"name\":\"e292280\",\"id\":7},{\"name\":\"e292920\",\"id\":8},{\"name\":\"e293560\",\"id\":9},{\"name\":\"e294203\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Jaraguá GW (RCT)\",\"cod\":134,\"lat\":-26.4683,\"lon\":-49.1141,\"interfaces\":[{\"name\":\"e288431\",\"id\":1},{\"name\":\"e289076\",\"id\":2},{\"name\":\"e289719\",\"id\":3},{\"name\":\"e290359\",\"id\":4},{\"name\":\"e290999\",\"id\":5},{\"name\":\"e291639\",\"id\":6},{\"name\":\"e292279\",\"id\":7},{\"name\":\"e292919\",\"id\":8},{\"name\":\"e293559\",\"id\":9},{\"name\":\"e294202\",\"id\":10}]},{\"caption\":\"UFSC\",\"id\":\"UFSC - Curitibanos (RCT)\",\"cod\":135,\"lat\":-27.2846,\"lon\":-50.5346,\"interfaces\":[{\"name\":\"e288437\",\"id\":1},{\"name\":\"e289082\",\"id\":2},{\"name\":\"e289725\",\"id\":3},{\"name\":\"e290365\",\"id\":4},{\"name\":\"e291005\",\"id\":5},{\"name\":\"e291645\",\"id\":6},{\"name\":\"e292285\",\"id\":7},{\"name\":\"e292925\",\"id\":8},{\"name\":\"e293565\",\"id\":9},{\"name\":\"e294208\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Lages (RCT)\",\"cod\":136,\"lat\":-27.8019,\"lon\":-50.337,\"interfaces\":[{\"name\":\"e288435\",\"id\":1},{\"name\":\"e289080\",\"id\":2},{\"name\":\"e289723\",\"id\":3},{\"name\":\"e290363\",\"id\":4},{\"name\":\"e291003\",\"id\":5},{\"name\":\"e291643\",\"id\":6},{\"name\":\"e292283\",\"id\":7},{\"name\":\"e292923\",\"id\":8},{\"name\":\"e293563\",\"id\":9},{\"name\":\"e294206\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - Xanxerê (RCT)\",\"cod\":137,\"lat\":-26.8652,\"lon\":-52.4174,\"interfaces\":[{\"name\":\"e288433\",\"id\":1},{\"name\":\"e289078\",\"id\":2},{\"name\":\"e289721\",\"id\":3},{\"name\":\"e290361\",\"id\":4},{\"name\":\"e291001\",\"id\":5},{\"name\":\"e291641\",\"id\":6},{\"name\":\"e292281\",\"id\":7},{\"name\":\"e292921\",\"id\":8},{\"name\":\"e293561\",\"id\":9},{\"name\":\"e294204\",\"id\":10}]},{\"caption\":\"IFSC\",\"id\":\"IFSC - São Miguel (RCT)\",\"cod\":138,\"lat\":-26.7418,\"lon\":-53.5279,\"interfaces\":[{\"name\":\"e288436\",\"id\":1},{\"name\":\"e289081\",\"id\":2},{\"name\":\"e289724\",\"id\":3},{\"name\":\"e290364\",\"id\":4},{\"name\":\"e291004\",\"id\":5},{\"name\":\"e291644\",\"id\":6},{\"name\":\"e292284\",\"id\":7},{\"name\":\"e292924\",\"id\":8},{\"name\":\"e293564\",\"id\":9},{\"name\":\"e294207\",\"id\":10}]},{\"caption\":\"TV\",\"id\":\"TV-UFSC-Morro da Cruz (REMEP)\",\"cod\":139,\"lat\":-27.5877,\"lon\":-48.5337,\"interfaces\":[{\"name\":\"e288545\",\"id\":1},{\"name\":\"e288678\",\"id\":2},{\"name\":\"e289188\",\"id\":3},{\"name\":\"e289319\",\"id\":4},{\"name\":\"e289833\",\"id\":5},{\"name\":\"e289962\",\"id\":6},{\"name\":\"e290602\",\"id\":7},{\"name\":\"e290473\",\"id\":8},{\"name\":\"e291242\",\"id\":9},{\"name\":\"e291113\",\"id\":10},{\"name\":\"e291753\",\"id\":11},{\"name\":\"e291882\",\"id\":12},{\"name\":\"e292522\",\"id\":13},{\"name\":\"e292393\",\"id\":14},{\"name\":\"e293033\",\"id\":15},{\"name\":\"e293162\",\"id\":16},{\"name\":\"e293673\",\"id\":17},{\"name\":\"e293802\",\"id\":18},{\"name\":\"e294314\",\"id\":19},{\"name\":\"e294443\",\"id\":20}]},{\"caption\":\"IFC\",\"id\":\"IFC - Rio do Sul Urbana (RCT)\",\"cod\":140,\"lat\":-27.2047,\"lon\":-49.6466,\"interfaces\":[{\"name\":\"e288434\",\"id\":1},{\"name\":\"e289079\",\"id\":2},{\"name\":\"e289722\",\"id\":3},{\"name\":\"e290362\",\"id\":4},{\"name\":\"e291002\",\"id\":5},{\"name\":\"e291642\",\"id\":6},{\"name\":\"e292282\",\"id\":7},{\"name\":\"e292922\",\"id\":8},{\"name\":\"e293562\",\"id\":9},{\"name\":\"e294205\",\"id\":10}]},{\"caption\":\"IFC\",\"id\":\"IFC - Rio do Sul Sede\",\"cod\":141,\"lat\":-27.1843,\"lon\":-49.6609,\"interfaces\":[{\"name\":\"e288622\",\"id\":1},{\"name\":\"e289263\",\"id\":2},{\"name\":\"e289906\",\"id\":3},{\"name\":\"e290546\",\"id\":4},{\"name\":\"e291186\",\"id\":5},{\"name\":\"e291826\",\"id\":6},{\"name\":\"e292466\",\"id\":7},{\"name\":\"e293106\",\"id\":8},{\"name\":\"e293746\",\"id\":9},{\"name\":\"e294387\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - CEFID (REMEP)\",\"cod\":142,\"lat\":-27.6085,\"lon\":-48.5807,\"interfaces\":[{\"name\":\"e288557\",\"id\":1},{\"name\":\"e289200\",\"id\":2},{\"name\":\"e289845\",\"id\":3},{\"name\":\"e290485\",\"id\":4},{\"name\":\"e291125\",\"id\":5},{\"name\":\"e291765\",\"id\":6},{\"name\":\"e292405\",\"id\":7},{\"name\":\"e293045\",\"id\":8},{\"name\":\"e293685\",\"id\":9},{\"name\":\"e294326\",\"id\":10}]},{\"caption\":\"UDESC\",\"id\":\"UDESC - IDCH (REMEP)\",\"cod\":143,\"lat\":-27.5961,\"lon\":-48.5199,\"interfaces\":[{\"name\":\"e289335\",\"id\":1},{\"name\":\"e289978\",\"id\":2},{\"name\":\"e290618\",\"id\":3},{\"name\":\"e291258\",\"id\":4},{\"name\":\"e291898\",\"id\":5},{\"name\":\"e292538\",\"id\":6},{\"name\":\"e293178\",\"id\":7},{\"name\":\"e293818\",\"id\":8},{\"name\":\"e294459\",\"id\":9}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HU-UFSC (REMEP)\",\"cod\":144,\"lat\":-27.5973,\"lon\":-48.5182,\"interfaces\":[{\"name\":\"e289815\",\"id\":1},{\"name\":\"e289954\",\"id\":2},{\"name\":\"e290594\",\"id\":3},{\"name\":\"e290455\",\"id\":4},{\"name\":\"e291095\",\"id\":5},{\"name\":\"e291234\",\"id\":6},{\"name\":\"e291874\",\"id\":7},{\"name\":\"e291735\",\"id\":8},{\"name\":\"e292375\",\"id\":9},{\"name\":\"e292514\",\"id\":10},{\"name\":\"e293015\",\"id\":11},{\"name\":\"e293154\",\"id\":12},{\"name\":\"e293794\",\"id\":13},{\"name\":\"e293655\",\"id\":14},{\"name\":\"e294435\",\"id\":15},{\"name\":\"e294296\",\"id\":16}]},{\"caption\":\"UFSC\",\"id\":\"UFSC-COCREATION-CENTRO-SAPIENS (REMEP)\",\"cod\":145,\"lat\":-27.598,\"lon\":-48.5484,\"interfaces\":[{\"name\":\"e294470\",\"id\":1}]}]},\"se\":{\"clientes\":[{\"caption\":\"IFS\",\"id\":\"IFS - Estância\",\"cod\":1,\"lat\":-11.2713,\"lon\":-37.4387,\"interfaces\":[{\"name\":\"e5539\",\"id\":1},{\"name\":\"e5607\",\"id\":2},{\"name\":\"e5675\",\"id\":3}]},{\"caption\":\"IFS\",\"id\":\"IFS - Lagarto\",\"cod\":2,\"lat\":-10.9051,\"lon\":-37.687,\"interfaces\":[{\"name\":\"e5521\",\"id\":1},{\"name\":\"e5589\",\"id\":2},{\"name\":\"e5657\",\"id\":3}]},{\"caption\":\"IFS\",\"id\":\"IFS - Itabaiana\",\"cod\":3,\"lat\":-10.6909,\"lon\":-37.4065,\"interfaces\":[{\"name\":\"e5540\",\"id\":1},{\"name\":\"e5608\",\"id\":2},{\"name\":\"e5676\",\"id\":3}]},{\"caption\":\"IFS\",\"id\":\"IFS - Propriá\",\"cod\":4,\"lat\":-10.2124,\"lon\":-36.8349,\"interfaces\":[{\"name\":\"e5537\",\"id\":1},{\"name\":\"e5605\",\"id\":2},{\"name\":\"e5673\",\"id\":3}]},{\"caption\":\"IFS\",\"id\":\"IFS - Poço Redondo\",\"cod\":5,\"lat\":-9.81831,\"lon\":-37.6833,\"interfaces\":[{\"name\":\"e5536\",\"id\":1},{\"name\":\"e5604\",\"id\":2},{\"name\":\"e5672\",\"id\":3}]},{\"caption\":\"UFS\",\"id\":\"UFS - Itabaiana\",\"cod\":6,\"lat\":-10.6815,\"lon\":-37.437,\"interfaces\":[{\"name\":\"e5543\",\"id\":1},{\"name\":\"e5611\",\"id\":2},{\"name\":\"e5679\",\"id\":3}]},{\"caption\":\"UFS\",\"id\":\"UFS - São Cristovão\",\"cod\":7,\"lat\":-10.926,\"lon\":-37.1023,\"interfaces\":[{\"name\":\"e5517\",\"id\":1},{\"name\":\"e5585\",\"id\":2},{\"name\":\"e5653\",\"id\":3}]},{\"caption\":\"UFS\",\"id\":\"UFS - Laranjeiras\",\"cod\":8,\"lat\":-10.8047,\"lon\":-37.168,\"interfaces\":[{\"name\":\"e5518\",\"id\":1},{\"name\":\"e5586\",\"id\":2},{\"name\":\"e5654\",\"id\":3}]},{\"caption\":\"UFS\",\"id\":\"UFS - Lagarto\",\"cod\":9,\"lat\":-10.9161,\"lon\":-37.6739,\"interfaces\":[{\"name\":\"e5520\",\"id\":1},{\"name\":\"e5588\",\"id\":2},{\"name\":\"e5656\",\"id\":3}]},{\"caption\":\"IFS\",\"id\":\"IFS - Aracaju\",\"cod\":10,\"lat\":-10.9111,\"lon\":-37.0635,\"interfaces\":[{\"name\":\"e5519\",\"id\":1},{\"name\":\"e5587\",\"id\":2},{\"name\":\"e5655\",\"id\":3}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HU-UFS\",\"cod\":11,\"lat\":-10.894,\"lon\":-37.065,\"interfaces\":[{\"name\":\"e5526\",\"id\":1},{\"name\":\"e5594\",\"id\":2},{\"name\":\"e5662\",\"id\":3}]},{\"caption\":\"IFS\",\"id\":\"IFS - Reitoria\",\"cod\":12,\"lat\":-10.9419,\"lon\":-37.0531,\"interfaces\":[{\"name\":\"e5523\",\"id\":1},{\"name\":\"e5591\",\"id\":2},{\"name\":\"e5659\",\"id\":3}]},{\"caption\":\"IFS\",\"id\":\"IFS - Socorro\",\"cod\":13,\"lat\":-10.8527,\"lon\":-37.0731,\"interfaces\":[{\"name\":\"e5541\",\"id\":1},{\"name\":\"e5609\",\"id\":2},{\"name\":\"e5677\",\"id\":3}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HUL-UFS\",\"cod\":14,\"lat\":-10.9227,\"lon\":-37.6601,\"interfaces\":[{\"name\":\"e5538\",\"id\":1},{\"name\":\"e5606\",\"id\":2},{\"name\":\"e5674\",\"id\":3}]},{\"caption\":\"Funesa\",\"id\":\"Funesa\",\"cod\":15,\"lat\":-10.9096,\"lon\":-37.0659,\"interfaces\":[{\"name\":\"e5535\",\"id\":1},{\"name\":\"e5603\",\"id\":2},{\"name\":\"e5671\",\"id\":3}]},{\"caption\":\"UFS\",\"id\":\"UFS-Glória\",\"cod\":16,\"lat\":-10.2063,\"lon\":-37.3214,\"interfaces\":[{\"name\":\"e5542\",\"id\":1},{\"name\":\"e5610\",\"id\":2},{\"name\":\"e5678\",\"id\":3}]},{\"caption\":\"ITPS\",\"id\":\"ITPS\",\"cod\":17,\"lat\":-10.9256,\"lon\":-37.0465,\"interfaces\":[{\"name\":\"e5529\",\"id\":1},{\"name\":\"e5597\",\"id\":2},{\"name\":\"e5665\",\"id\":3}]},{\"caption\":\"CPACT\",\"id\":\"Embrapa_CPACT\",\"cod\":18,\"lat\":-10.9519,\"lon\":-37.0517,\"interfaces\":[{\"name\":\"e5524\",\"id\":1},{\"name\":\"e5592\",\"id\":2},{\"name\":\"e5660\",\"id\":3}]},{\"caption\":\"IFS\",\"id\":\"IFS-SC\",\"cod\":19,\"lat\":-10.9134,\"lon\":-37.1848,\"interfaces\":[{\"name\":\"e5544\",\"id\":1},{\"name\":\"e5612\",\"id\":2},{\"name\":\"e5680\",\"id\":3}]},{\"caption\":\"IFS\",\"id\":\"IFS - Tobias Barreto\",\"cod\":20,\"lat\":-11.1671,\"lon\":-38.0086,\"interfaces\":[{\"name\":\"e5522\",\"id\":1},{\"name\":\"e5590\",\"id\":2},{\"name\":\"e5658\",\"id\":3}]},{\"caption\":\"Sedetec\",\"id\":\"Sedetec\",\"cod\":21,\"lat\":-10.9499,\"lon\":-37.0741,\"interfaces\":[{\"name\":\"e5530\",\"id\":1},{\"name\":\"e5598\",\"id\":2},{\"name\":\"e5666\",\"id\":3}]}]},\"sp\":{\"clientes\":[{\"caption\":\"USP\",\"id\":\"Escola de Enfermagem da USP\",\"cod\":1,\"lat\":-23.5568,\"lon\":-46.6712,\"interfaces\":[{\"name\":\"e175441\",\"id\":1},{\"name\":\"e175777\",\"id\":2},{\"name\":\"e176112\",\"id\":3},{\"name\":\"e176279\",\"id\":4},{\"name\":\"e176606\",\"id\":5},{\"name\":\"e176932\",\"id\":6}]},{\"caption\":\"USP\",\"id\":\"Faculdade de Saúde Pública da USP\",\"cod\":2,\"lat\":-23.554,\"lon\":-46.6725,\"interfaces\":[{\"name\":\"e175442\",\"id\":1},{\"name\":\"e175778\",\"id\":2},{\"name\":\"e176113\",\"id\":3},{\"name\":\"e176280\",\"id\":4},{\"name\":\"e176607\",\"id\":5},{\"name\":\"e176933\",\"id\":6}]},{\"caption\":\"USP\",\"id\":\"USP\",\"cod\":3,\"lat\":-23.5554,\"lon\":-46.7318,\"interfaces\":[{\"name\":\"e175438\",\"id\":1},{\"name\":\"e175437\",\"id\":2},{\"name\":\"e175773\",\"id\":3},{\"name\":\"e175774\",\"id\":4},{\"name\":\"e176109\",\"id\":5},{\"name\":\"e176108\",\"id\":6},{\"name\":\"e176276\",\"id\":7},{\"name\":\"e176275\",\"id\":8},{\"name\":\"e176602\",\"id\":9},{\"name\":\"e176603\",\"id\":10},{\"name\":\"e176929\",\"id\":11},{\"name\":\"e176928\",\"id\":12}]},{\"caption\":\"UNICAMP\",\"id\":\"UNICAMP\",\"cod\":4,\"lat\":-22.8151,\"lon\":-47.0625,\"interfaces\":[{\"name\":\"e175439\",\"id\":1},{\"name\":\"e175440\",\"id\":2},{\"name\":\"e175776\",\"id\":3},{\"name\":\"e175775\",\"id\":4},{\"name\":\"e176110\",\"id\":5},{\"name\":\"e176111\",\"id\":6},{\"name\":\"e176278\",\"id\":7},{\"name\":\"e176277\",\"id\":8},{\"name\":\"e176604\",\"id\":9},{\"name\":\"e176605\",\"id\":10},{\"name\":\"e176930\",\"id\":11},{\"name\":\"e176931\",\"id\":12}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPM\",\"cod\":5,\"lat\":-22.8805,\"lon\":-47.09,\"interfaces\":[{\"name\":\"e175444\",\"id\":1},{\"name\":\"e175780\",\"id\":2},{\"name\":\"e176115\",\"id\":3},{\"name\":\"e176282\",\"id\":4},{\"name\":\"e176609\",\"id\":5},{\"name\":\"e176935\",\"id\":6}]},{\"caption\":\"USP\",\"id\":\"Faculdade de Medicina da USP\",\"cod\":6,\"lat\":-23.5548,\"lon\":-46.6707,\"interfaces\":[{\"name\":\"e175445\",\"id\":1},{\"name\":\"e175781\",\"id\":2},{\"name\":\"e176116\",\"id\":3},{\"name\":\"e176283\",\"id\":4},{\"name\":\"e176610\",\"id\":5},{\"name\":\"e176936\",\"id\":6}]},{\"caption\":\"UNESP\",\"id\":\"Sprace - UNESP Barra Funda\",\"cod\":7,\"lat\":-23.5238,\"lon\":-46.6676,\"interfaces\":[{\"name\":\"e175443\",\"id\":1},{\"name\":\"e175779\",\"id\":2},{\"name\":\"e176114\",\"id\":3},{\"name\":\"e176281\",\"id\":4},{\"name\":\"e176608\",\"id\":5},{\"name\":\"e176934\",\"id\":6}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPMA\",\"cod\":8,\"lat\":-22.7099,\"lon\":-47.0133,\"interfaces\":[{\"name\":\"e175486\",\"id\":1},{\"name\":\"e175822\",\"id\":2},{\"name\":\"e176156\",\"id\":3},{\"name\":\"e176323\",\"id\":4},{\"name\":\"e176650\",\"id\":5},{\"name\":\"e176976\",\"id\":6}]},{\"caption\":\"Hospital São Paulo\",\"id\":\"Hospital São Paulo\",\"cod\":9,\"lat\":-23.5972,\"lon\":-46.6436,\"interfaces\":[{\"name\":\"e175447\",\"id\":1},{\"name\":\"e175783\",\"id\":2},{\"name\":\"e176118\",\"id\":3},{\"name\":\"e176285\",\"id\":4},{\"name\":\"e176612\",\"id\":5},{\"name\":\"e176938\",\"id\":6}]},{\"caption\":\"HCFMUSP\",\"id\":\"Instituto do Coração do HCFMUSP - InCor\",\"cod\":10,\"lat\":-23.5571,\"lon\":-46.6704,\"interfaces\":[{\"name\":\"e175448\",\"id\":1},{\"name\":\"e175784\",\"id\":2},{\"name\":\"e176119\",\"id\":3},{\"name\":\"e176286\",\"id\":4},{\"name\":\"e176613\",\"id\":5},{\"name\":\"e176939\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Birigui\",\"cod\":11,\"lat\":-21.2491,\"lon\":-50.3145,\"interfaces\":[{\"name\":\"e175515\",\"id\":1},{\"name\":\"e175851\",\"id\":2},{\"name\":\"e176185\",\"id\":3},{\"name\":\"e176352\",\"id\":4},{\"name\":\"e176679\",\"id\":5},{\"name\":\"e177005\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Capivari\",\"cod\":12,\"lat\":-22.9769,\"lon\":-47.4741,\"interfaces\":[{\"name\":\"e175495\",\"id\":1},{\"name\":\"e175831\",\"id\":2},{\"name\":\"e176165\",\"id\":3},{\"name\":\"e176332\",\"id\":4},{\"name\":\"e176659\",\"id\":5},{\"name\":\"e176985\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – São João da Boa Vista\",\"cod\":13,\"lat\":-21.9674,\"lon\":-46.8125,\"interfaces\":[{\"name\":\"e175489\",\"id\":1},{\"name\":\"e175825\",\"id\":2},{\"name\":\"e176159\",\"id\":3},{\"name\":\"e176326\",\"id\":4},{\"name\":\"e176653\",\"id\":5},{\"name\":\"e176979\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – São Roque\",\"cod\":14,\"lat\":-23.5553,\"lon\":-47.1495,\"interfaces\":[{\"name\":\"e175518\",\"id\":1},{\"name\":\"e175854\",\"id\":2},{\"name\":\"e176188\",\"id\":3},{\"name\":\"e176355\",\"id\":4},{\"name\":\"e176682\",\"id\":5},{\"name\":\"e177008\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Araraquara\",\"cod\":15,\"lat\":-21.7857,\"lon\":-48.2119,\"interfaces\":[{\"name\":\"e175491\",\"id\":1},{\"name\":\"e175827\",\"id\":2},{\"name\":\"e176161\",\"id\":3},{\"name\":\"e176328\",\"id\":4},{\"name\":\"e176655\",\"id\":5},{\"name\":\"e176981\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Barretos\",\"cod\":16,\"lat\":-20.5409,\"lon\":-48.5495,\"interfaces\":[{\"name\":\"e175520\",\"id\":1},{\"name\":\"e175856\",\"id\":2},{\"name\":\"e176190\",\"id\":3},{\"name\":\"e176357\",\"id\":4},{\"name\":\"e176684\",\"id\":5},{\"name\":\"e177010\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Bragança Paulista\",\"cod\":17,\"lat\":-22.9463,\"lon\":-46.5267,\"interfaces\":[{\"name\":\"e175517\",\"id\":1},{\"name\":\"e175853\",\"id\":2},{\"name\":\"e176187\",\"id\":3},{\"name\":\"e176354\",\"id\":4},{\"name\":\"e176681\",\"id\":5},{\"name\":\"e177007\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Caraguatatuba\",\"cod\":18,\"lat\":-23.6369,\"lon\":-45.426,\"interfaces\":[{\"name\":\"e175409\",\"id\":1},{\"name\":\"e175745\",\"id\":2},{\"name\":\"e176080\",\"id\":3},{\"name\":\"e176247\",\"id\":4},{\"name\":\"e176575\",\"id\":5},{\"name\":\"e176901\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Guarulhos\",\"cod\":19,\"lat\":-23.4398,\"lon\":-46.537,\"interfaces\":[{\"name\":\"e175502\",\"id\":1},{\"name\":\"e175838\",\"id\":2},{\"name\":\"e176172\",\"id\":3},{\"name\":\"e176339\",\"id\":4},{\"name\":\"e176666\",\"id\":5},{\"name\":\"e176992\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP - Salto\",\"cod\":20,\"lat\":-23.197,\"lon\":-47.3014,\"interfaces\":[{\"name\":\"e175488\",\"id\":1},{\"name\":\"e175824\",\"id\":2},{\"name\":\"e176158\",\"id\":3},{\"name\":\"e176325\",\"id\":4},{\"name\":\"e176652\",\"id\":5},{\"name\":\"e176978\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP - São Carlos\",\"cod\":21,\"lat\":-21.9789,\"lon\":-47.8811,\"interfaces\":[{\"name\":\"e175433\",\"id\":1},{\"name\":\"e175769\",\"id\":2},{\"name\":\"e176104\",\"id\":3},{\"name\":\"e176271\",\"id\":4},{\"name\":\"e176598\",\"id\":5},{\"name\":\"e176924\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP - Jundiaí\",\"cod\":22,\"lat\":-23.1927,\"lon\":-46.8776,\"interfaces\":[{\"name\":\"e175497\",\"id\":1},{\"name\":\"e175833\",\"id\":2},{\"name\":\"e176167\",\"id\":3},{\"name\":\"e176334\",\"id\":4},{\"name\":\"e176661\",\"id\":5},{\"name\":\"e176987\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP - Sorocaba\",\"cod\":23,\"lat\":-23.49,\"lon\":-47.4421,\"interfaces\":[{\"name\":\"e175496\",\"id\":1},{\"name\":\"e175832\",\"id\":2},{\"name\":\"e176166\",\"id\":3},{\"name\":\"e176333\",\"id\":4},{\"name\":\"e176660\",\"id\":5},{\"name\":\"e176986\",\"id\":6}]},{\"caption\":\"CRIA\",\"id\":\"Centro de Referência em Informação Ambiental (CRIA)\",\"cod\":24,\"lat\":-22.8324,\"lon\":-47.0771,\"interfaces\":[{\"name\":\"e175431\",\"id\":1},{\"name\":\"e175767\",\"id\":2},{\"name\":\"e176102\",\"id\":3},{\"name\":\"e176269\",\"id\":4},{\"name\":\"e176596\",\"id\":5},{\"name\":\"e176922\",\"id\":6}]},{\"caption\":\"CATI\",\"id\":\"Coordenadoria de Assistência Técnica Legal (CATI) - Campinas\",\"cod\":25,\"lat\":-22.8772,\"lon\":-47.0752,\"interfaces\":[{\"name\":\"e175430\",\"id\":1},{\"name\":\"e175766\",\"id\":2},{\"name\":\"e176101\",\"id\":3},{\"name\":\"e176268\",\"id\":4},{\"name\":\"e176595\",\"id\":5},{\"name\":\"e176921\",\"id\":6}]},{\"caption\":\"IAC\",\"id\":\"Instituto Agronomico (IAC) - Campinas \",\"cod\":26,\"lat\":-22.8936,\"lon\":-47.0649,\"interfaces\":[{\"name\":\"e175429\",\"id\":1},{\"name\":\"e175765\",\"id\":2},{\"name\":\"e176100\",\"id\":3},{\"name\":\"e176267\",\"id\":4},{\"name\":\"e176594\",\"id\":5},{\"name\":\"e176920\",\"id\":6}]},{\"caption\":\"Hospital Sírio Libanês\",\"id\":\"Hospital Sírio Libanês\",\"cod\":27,\"lat\":-23.5576,\"lon\":-46.6542,\"interfaces\":[{\"name\":\"e175428\",\"id\":1},{\"name\":\"e175764\",\"id\":2},{\"name\":\"e176099\",\"id\":3},{\"name\":\"e176266\",\"id\":4},{\"name\":\"e176593\",\"id\":5},{\"name\":\"e176919\",\"id\":6}]},{\"caption\":\"FUNARTE\",\"id\":\"FUNARTE - SP\",\"cod\":28,\"lat\":-23.5352,\"lon\":-46.6509,\"interfaces\":[{\"name\":\"e175427\",\"id\":1},{\"name\":\"e175763\",\"id\":2},{\"name\":\"e176098\",\"id\":3},{\"name\":\"e176265\",\"id\":4},{\"name\":\"e176592\",\"id\":5},{\"name\":\"e176918\",\"id\":6}]},{\"caption\":\"PUC\",\"id\":\"Pontifícia Universidade Católica de São Paulo - PUC\",\"cod\":29,\"lat\":-23.5492,\"lon\":-46.65,\"interfaces\":[{\"name\":\"e175435\",\"id\":1},{\"name\":\"e175436\",\"id\":2},{\"name\":\"e175772\",\"id\":3},{\"name\":\"e175771\",\"id\":4},{\"name\":\"e176107\",\"id\":5},{\"name\":\"e176106\",\"id\":6},{\"name\":\"e176273\",\"id\":7},{\"name\":\"e176274\",\"id\":8},{\"name\":\"e176600\",\"id\":9},{\"name\":\"e176601\",\"id\":10},{\"name\":\"e176927\",\"id\":11},{\"name\":\"e176926\",\"id\":12}]},{\"caption\":\"Hospital das Clínicas\",\"id\":\"Hospital das Clínicas\",\"cod\":30,\"lat\":-23.5574,\"lon\":-46.6699,\"interfaces\":[{\"name\":\"e175434\",\"id\":1},{\"name\":\"e175770\",\"id\":2},{\"name\":\"e176105\",\"id\":3},{\"name\":\"e176272\",\"id\":4},{\"name\":\"e176599\",\"id\":5},{\"name\":\"e176925\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Presidente Epitácio\",\"cod\":31,\"lat\":-21.7852,\"lon\":-52.1112,\"interfaces\":[{\"name\":\"e175519\",\"id\":1},{\"name\":\"e175855\",\"id\":2},{\"name\":\"e176189\",\"id\":3},{\"name\":\"e176356\",\"id\":4},{\"name\":\"e176683\",\"id\":5},{\"name\":\"e177009\",\"id\":6}]},{\"caption\":\"Cinemateca Brasileira\",\"id\":\"Cinemateca Brasileira\",\"cod\":32,\"lat\":-23.592,\"lon\":-46.6462,\"interfaces\":[{\"name\":\"e175395\",\"id\":1},{\"name\":\"e175423\",\"id\":2},{\"name\":\"e175759\",\"id\":3},{\"name\":\"e175731\",\"id\":4},{\"name\":\"e176094\",\"id\":5},{\"name\":\"e176066\",\"id\":6},{\"name\":\"e176261\",\"id\":7},{\"name\":\"e176233\",\"id\":8},{\"name\":\"e176588\",\"id\":9},{\"name\":\"e176561\",\"id\":10},{\"name\":\"e176887\",\"id\":11},{\"name\":\"e176914\",\"id\":12}]},{\"caption\":\"CCSP\",\"id\":\"Centro Cultural de São Paulo - CCSP\",\"cod\":33,\"lat\":-23.566,\"lon\":-46.6398,\"interfaces\":[{\"name\":\"e175425\",\"id\":1},{\"name\":\"e175761\",\"id\":2},{\"name\":\"e176096\",\"id\":3},{\"name\":\"e176263\",\"id\":4},{\"name\":\"e176590\",\"id\":5},{\"name\":\"e176916\",\"id\":6}]},{\"caption\":\"CNPEM\",\"id\":\"Centro Nacional de Pesquisa em Energia e Materiais (CNPEM) / LNLS\",\"cod\":34,\"lat\":-22.8041,\"lon\":-47.0537,\"interfaces\":[{\"name\":\"e175426\",\"id\":1},{\"name\":\"e175762\",\"id\":2},{\"name\":\"e176097\",\"id\":3},{\"name\":\"e176264\",\"id\":4},{\"name\":\"e176591\",\"id\":5},{\"name\":\"e176917\",\"id\":6}]},{\"caption\":\"CPTEC\",\"id\":\"CPTEC/INPE – Cachoeira Paulista\",\"cod\":35,\"lat\":-22.677,\"lon\":-44.9986,\"interfaces\":[{\"name\":\"e175420\",\"id\":1},{\"name\":\"e175756\",\"id\":2},{\"name\":\"e176091\",\"id\":3},{\"name\":\"e176258\",\"id\":4},{\"name\":\"e176585\",\"id\":5},{\"name\":\"e176911\",\"id\":6}]},{\"caption\":\"CEMADEN\",\"id\":\"CEMADEN – São José dos Campos\",\"cod\":36,\"lat\":-23.1573,\"lon\":-45.7925,\"interfaces\":[{\"name\":\"e175422\",\"id\":1},{\"name\":\"e175500\",\"id\":2},{\"name\":\"e175421\",\"id\":3},{\"name\":\"e175390\",\"id\":4},{\"name\":\"e175726\",\"id\":5},{\"name\":\"e175757\",\"id\":6},{\"name\":\"e175836\",\"id\":7},{\"name\":\"e175758\",\"id\":8},{\"name\":\"e176093\",\"id\":9},{\"name\":\"e176061\",\"id\":10},{\"name\":\"e176170\",\"id\":11},{\"name\":\"e176092\",\"id\":12},{\"name\":\"e176260\",\"id\":13},{\"name\":\"e176337\",\"id\":14},{\"name\":\"e176259\",\"id\":15},{\"name\":\"e176228\",\"id\":16},{\"name\":\"e176664\",\"id\":17},{\"name\":\"e176556\",\"id\":18},{\"name\":\"e176587\",\"id\":19},{\"name\":\"e176586\",\"id\":20},{\"name\":\"e176912\",\"id\":21},{\"name\":\"e176913\",\"id\":22},{\"name\":\"e176990\",\"id\":23},{\"name\":\"e176882\",\"id\":24}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Campos do Jordão\",\"cod\":37,\"lat\":-22.7433,\"lon\":-45.592,\"interfaces\":[{\"name\":\"e175492\",\"id\":1},{\"name\":\"e175828\",\"id\":2},{\"name\":\"e176162\",\"id\":3},{\"name\":\"e176329\",\"id\":4},{\"name\":\"e176656\",\"id\":5},{\"name\":\"e176982\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Cubatão\",\"cod\":38,\"lat\":-23.9286,\"lon\":-46.4122,\"interfaces\":[{\"name\":\"e175501\",\"id\":1},{\"name\":\"e175837\",\"id\":2},{\"name\":\"e176171\",\"id\":3},{\"name\":\"e176338\",\"id\":4},{\"name\":\"e176665\",\"id\":5},{\"name\":\"e176991\",\"id\":6}]},{\"caption\":\"UNIFESP\",\"id\":\"UNIFESP – São José dos Campos\",\"cod\":39,\"lat\":-23.2157,\"lon\":-45.8864,\"interfaces\":[{\"name\":\"e175508\",\"id\":1},{\"name\":\"e175844\",\"id\":2},{\"name\":\"e176178\",\"id\":3},{\"name\":\"e176345\",\"id\":4},{\"name\":\"e176672\",\"id\":5},{\"name\":\"e176998\",\"id\":6}]},{\"caption\":\"UNIFESP\",\"id\":\"UNIFESP – São José dos Campos(PT)\",\"cod\":40,\"lat\":-23.158,\"lon\":-45.791,\"interfaces\":[{\"name\":\"e175505\",\"id\":1},{\"name\":\"e175841\",\"id\":2},{\"name\":\"e176175\",\"id\":3},{\"name\":\"e176342\",\"id\":4},{\"name\":\"e176669\",\"id\":5},{\"name\":\"e176995\",\"id\":6}]},{\"caption\":\"INPE\",\"id\":\"INPE – SJC/SP\",\"cod\":41,\"lat\":-23.2072,\"lon\":-45.8611,\"interfaces\":[{\"name\":\"e175418\",\"id\":1},{\"name\":\"e175389\",\"id\":2},{\"name\":\"e175725\",\"id\":3},{\"name\":\"e175754\",\"id\":4},{\"name\":\"e176060\",\"id\":5},{\"name\":\"e176089\",\"id\":6},{\"name\":\"e176227\",\"id\":7},{\"name\":\"e176256\",\"id\":8},{\"name\":\"e176584\",\"id\":9},{\"name\":\"e176555\",\"id\":10},{\"name\":\"e176910\",\"id\":11},{\"name\":\"e176881\",\"id\":12}]},{\"caption\":\"UNESP\",\"id\":\"UNESP\",\"cod\":42,\"lat\":-23.5481,\"lon\":-46.6411,\"interfaces\":[{\"name\":\"e175417\",\"id\":1},{\"name\":\"e175753\",\"id\":2},{\"name\":\"e176088\",\"id\":3},{\"name\":\"e176255\",\"id\":4},{\"name\":\"e176583\",\"id\":5},{\"name\":\"e176909\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Hortolândia\",\"cod\":43,\"lat\":-22.8508,\"lon\":-47.2308,\"interfaces\":[{\"name\":\"e175498\",\"id\":1},{\"name\":\"e175834\",\"id\":2},{\"name\":\"e176168\",\"id\":3},{\"name\":\"e176335\",\"id\":4},{\"name\":\"e176662\",\"id\":5},{\"name\":\"e176988\",\"id\":6}]},{\"caption\":\"UNIFESP\",\"id\":\"UNIFESP – Osasco\",\"cod\":44,\"lat\":-23.5377,\"lon\":-46.7884,\"interfaces\":[{\"name\":\"e175411\",\"id\":1},{\"name\":\"e175747\",\"id\":2},{\"name\":\"e176082\",\"id\":3},{\"name\":\"e176249\",\"id\":4},{\"name\":\"e176577\",\"id\":5},{\"name\":\"e176903\",\"id\":6}]},{\"caption\":\"UFSC\",\"id\":\"UFSCar – Lagoa do Sino\",\"cod\":45,\"lat\":-23.5999,\"lon\":-48.5298,\"interfaces\":[{\"name\":\"e175414\",\"id\":1},{\"name\":\"e175750\",\"id\":2},{\"name\":\"e176085\",\"id\":3},{\"name\":\"e176252\",\"id\":4},{\"name\":\"e176580\",\"id\":5},{\"name\":\"e176906\",\"id\":6}]},{\"caption\":\"UFSC\",\"id\":\"UFSCar – Araras\",\"cod\":46,\"lat\":-22.3131,\"lon\":-47.3891,\"interfaces\":[{\"name\":\"e175412\",\"id\":1},{\"name\":\"e175748\",\"id\":2},{\"name\":\"e176083\",\"id\":3},{\"name\":\"e176250\",\"id\":4},{\"name\":\"e176578\",\"id\":5},{\"name\":\"e176904\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Matão\",\"cod\":47,\"lat\":-21.6244,\"lon\":-48.3489,\"interfaces\":[{\"name\":\"e175504\",\"id\":1},{\"name\":\"e175840\",\"id\":2},{\"name\":\"e176174\",\"id\":3},{\"name\":\"e176341\",\"id\":4},{\"name\":\"e176668\",\"id\":5},{\"name\":\"e176994\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Jacareí\",\"cod\":48,\"lat\":-23.316,\"lon\":-45.985,\"interfaces\":[{\"name\":\"e175522\",\"id\":1},{\"name\":\"e175858\",\"id\":2},{\"name\":\"e176192\",\"id\":3},{\"name\":\"e176359\",\"id\":4},{\"name\":\"e176686\",\"id\":5},{\"name\":\"e177012\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – São José dos Campos\",\"cod\":49,\"lat\":-23.1892,\"lon\":-45.8511,\"interfaces\":[{\"name\":\"e175396\",\"id\":1},{\"name\":\"e175732\",\"id\":2},{\"name\":\"e176067\",\"id\":3},{\"name\":\"e176234\",\"id\":4},{\"name\":\"e176562\",\"id\":5},{\"name\":\"e176888\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Avaré\",\"cod\":50,\"lat\":-23.0783,\"lon\":-48.9263,\"interfaces\":[{\"name\":\"e175516\",\"id\":1},{\"name\":\"e175852\",\"id\":2},{\"name\":\"e176186\",\"id\":3},{\"name\":\"e176353\",\"id\":4},{\"name\":\"e176680\",\"id\":5},{\"name\":\"e177006\",\"id\":6}]},{\"caption\":\"UFABC\",\"id\":\"UFABC – São Bernardo do Campo\",\"cod\":51,\"lat\":-23.6769,\"lon\":-46.5629,\"interfaces\":[{\"name\":\"e175513\",\"id\":1},{\"name\":\"e175849\",\"id\":2},{\"name\":\"e176183\",\"id\":3},{\"name\":\"e176350\",\"id\":4},{\"name\":\"e176677\",\"id\":5},{\"name\":\"e177003\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Votuporanga\",\"cod\":52,\"lat\":-20.4035,\"lon\":-49.9677,\"interfaces\":[{\"name\":\"e175523\",\"id\":1},{\"name\":\"e175859\",\"id\":2},{\"name\":\"e176193\",\"id\":3},{\"name\":\"e176360\",\"id\":4},{\"name\":\"e176687\",\"id\":5},{\"name\":\"e177013\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP - Boituva\",\"cod\":53,\"lat\":-23.2887,\"lon\":-47.6519,\"interfaces\":[{\"name\":\"e175493\",\"id\":1},{\"name\":\"e175829\",\"id\":2},{\"name\":\"e176163\",\"id\":3},{\"name\":\"e176330\",\"id\":4},{\"name\":\"e176657\",\"id\":5},{\"name\":\"e176983\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Piracicaba\",\"cod\":54,\"lat\":-22.6934,\"lon\":-47.6257,\"interfaces\":[{\"name\":\"e175490\",\"id\":1},{\"name\":\"e175826\",\"id\":2},{\"name\":\"e176160\",\"id\":3},{\"name\":\"e176327\",\"id\":4},{\"name\":\"e176654\",\"id\":5},{\"name\":\"e176980\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Registro\",\"cod\":55,\"lat\":-24.5336,\"lon\":-47.869,\"interfaces\":[{\"name\":\"e175511\",\"id\":1},{\"name\":\"e175847\",\"id\":2},{\"name\":\"e176181\",\"id\":3},{\"name\":\"e176348\",\"id\":4},{\"name\":\"e176675\",\"id\":5},{\"name\":\"e177001\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Sertãozinho\",\"cod\":56,\"lat\":-21.1431,\"lon\":-47.9729,\"interfaces\":[{\"name\":\"e175487\",\"id\":1},{\"name\":\"e175823\",\"id\":2},{\"name\":\"e176157\",\"id\":3},{\"name\":\"e176324\",\"id\":4},{\"name\":\"e176651\",\"id\":5},{\"name\":\"e176977\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Suzano\",\"cod\":57,\"lat\":-23.5358,\"lon\":-46.3266,\"interfaces\":[{\"name\":\"e175410\",\"id\":1},{\"name\":\"e175746\",\"id\":2},{\"name\":\"e176081\",\"id\":3},{\"name\":\"e176248\",\"id\":4},{\"name\":\"e176576\",\"id\":5},{\"name\":\"e176902\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Catanduva\",\"cod\":58,\"lat\":-21.1472,\"lon\":-48.9461,\"interfaces\":[{\"name\":\"e175514\",\"id\":1},{\"name\":\"e175850\",\"id\":2},{\"name\":\"e176184\",\"id\":3},{\"name\":\"e176351\",\"id\":4},{\"name\":\"e176678\",\"id\":5},{\"name\":\"e177004\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP – Itapetininga\",\"cod\":59,\"lat\":-23.5948,\"lon\":-48.0194,\"interfaces\":[{\"name\":\"e175512\",\"id\":1},{\"name\":\"e175848\",\"id\":2},{\"name\":\"e176182\",\"id\":3},{\"name\":\"e176349\",\"id\":4},{\"name\":\"e176676\",\"id\":5},{\"name\":\"e177002\",\"id\":6}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPDIA\",\"cod\":60,\"lat\":-22.0125,\"lon\":-47.8961,\"interfaces\":[{\"name\":\"e175529\",\"id\":1},{\"name\":\"e175865\",\"id\":2},{\"name\":\"e176199\",\"id\":3},{\"name\":\"e176366\",\"id\":4},{\"name\":\"e176693\",\"id\":5},{\"name\":\"e177019\",\"id\":6}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CPPSE\",\"cod\":61,\"lat\":-21.955,\"lon\":-47.8473,\"interfaces\":[{\"name\":\"e175528\",\"id\":1},{\"name\":\"e175864\",\"id\":2},{\"name\":\"e176198\",\"id\":3},{\"name\":\"e176365\",\"id\":4},{\"name\":\"e176692\",\"id\":5},{\"name\":\"e177018\",\"id\":6}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HU-UFSCAR\",\"cod\":62,\"lat\":-21.9927,\"lon\":-47.8879,\"interfaces\":[{\"name\":\"e175481\",\"id\":1},{\"name\":\"e175482\",\"id\":2},{\"name\":\"e175817\",\"id\":3},{\"name\":\"e175818\",\"id\":4},{\"name\":\"e176152\",\"id\":5},{\"name\":\"e176151\",\"id\":6},{\"name\":\"e176318\",\"id\":7},{\"name\":\"e176319\",\"id\":8},{\"name\":\"e176646\",\"id\":9},{\"name\":\"e176645\",\"id\":10},{\"name\":\"e176971\",\"id\":11},{\"name\":\"e176972\",\"id\":12}]},{\"caption\":\"IFSP\",\"id\":\"IFSP - Campinas\",\"cod\":63,\"lat\":-22.9544,\"lon\":-47.1535,\"interfaces\":[{\"name\":\"e175524\",\"id\":1},{\"name\":\"e175860\",\"id\":2},{\"name\":\"e176194\",\"id\":3},{\"name\":\"e176361\",\"id\":4},{\"name\":\"e176688\",\"id\":5},{\"name\":\"e177014\",\"id\":6}]},{\"caption\":\"CPRM\",\"id\":\"CPRM_SUREG-SP\",\"cod\":64,\"lat\":-23.553,\"lon\":-46.6553,\"interfaces\":[{\"name\":\"e175507\",\"id\":1},{\"name\":\"e175843\",\"id\":2},{\"name\":\"e176177\",\"id\":3},{\"name\":\"e176344\",\"id\":4},{\"name\":\"e176671\",\"id\":5},{\"name\":\"e176997\",\"id\":6}]},{\"caption\":\"Cinemateca Leopoldina\",\"id\":\"Cinemateca Leopoldina\",\"cod\":65,\"lat\":-23.532,\"lon\":-46.7424,\"interfaces\":[{\"name\":\"e175527\",\"id\":1},{\"name\":\"e175863\",\"id\":2},{\"name\":\"e176197\",\"id\":3},{\"name\":\"e176364\",\"id\":4},{\"name\":\"e176691\",\"id\":5},{\"name\":\"e177017\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP - Sao Miguel Paulista\",\"cod\":66,\"lat\":-23.4991,\"lon\":-46.439,\"interfaces\":[{\"name\":\"e175526\",\"id\":1},{\"name\":\"e175862\",\"id\":2},{\"name\":\"e176196\",\"id\":3},{\"name\":\"e176363\",\"id\":4},{\"name\":\"e176690\",\"id\":5},{\"name\":\"e177016\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP - Pirituba\",\"cod\":67,\"lat\":-23.4885,\"lon\":-46.7347,\"interfaces\":[{\"name\":\"e175525\",\"id\":1},{\"name\":\"e175861\",\"id\":2},{\"name\":\"e176195\",\"id\":3},{\"name\":\"e176362\",\"id\":4},{\"name\":\"e176689\",\"id\":5},{\"name\":\"e177015\",\"id\":6}]},{\"caption\":\"UNIFESP\",\"id\":\"UNIFESP Diadema Eldorado\",\"cod\":68,\"lat\":-23.7194,\"lon\":-46.6276,\"interfaces\":[{\"name\":\"e175494\",\"id\":1},{\"name\":\"e175830\",\"id\":2},{\"name\":\"e176164\",\"id\":3},{\"name\":\"e176331\",\"id\":4},{\"name\":\"e176658\",\"id\":5},{\"name\":\"e176984\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP - Tupã\",\"cod\":69,\"lat\":-21.9242,\"lon\":-50.5221,\"interfaces\":[{\"name\":\"e175531\",\"id\":1},{\"name\":\"e175867\",\"id\":2},{\"name\":\"e176201\",\"id\":3},{\"name\":\"e176368\",\"id\":4},{\"name\":\"e176695\",\"id\":5},{\"name\":\"e177021\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP Ilha Solteira\",\"cod\":70,\"lat\":-20.4208,\"lon\":-51.3332,\"interfaces\":[{\"name\":\"e175509\",\"id\":1},{\"name\":\"e175845\",\"id\":2},{\"name\":\"e176179\",\"id\":3},{\"name\":\"e176346\",\"id\":4},{\"name\":\"e176673\",\"id\":5},{\"name\":\"e176999\",\"id\":6}]},{\"caption\":\"AEB\",\"id\":\"AEB-SJCAM\",\"cod\":71,\"lat\":-23.1572,\"lon\":-45.7929,\"interfaces\":[{\"name\":\"e175510\",\"id\":1},{\"name\":\"e175846\",\"id\":2},{\"name\":\"e176180\",\"id\":3},{\"name\":\"e176347\",\"id\":4},{\"name\":\"e176674\",\"id\":5},{\"name\":\"e177000\",\"id\":6}]},{\"caption\":\"Ilum Escola de Ciencia\",\"id\":\"Ilum Escola de Ciencia\",\"cod\":72,\"lat\":-22.8457,\"lon\":-47.0524,\"interfaces\":[{\"name\":\"e175393\",\"id\":1},{\"name\":\"e175729\",\"id\":2},{\"name\":\"e176064\",\"id\":3},{\"name\":\"e176231\",\"id\":4},{\"name\":\"e176559\",\"id\":5},{\"name\":\"e176885\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP-Itaquaquecetuba\",\"cod\":73,\"lat\":-23.4853,\"lon\":-46.3424,\"interfaces\":[{\"name\":\"e175530\",\"id\":1},{\"name\":\"e175866\",\"id\":2},{\"name\":\"e176200\",\"id\":3},{\"name\":\"e176367\",\"id\":4},{\"name\":\"e176694\",\"id\":5},{\"name\":\"e177020\",\"id\":6}]},{\"caption\":\"USP\",\"id\":\"USP - CEUMA\",\"cod\":74,\"lat\":-23.5459,\"lon\":-46.6513,\"interfaces\":[{\"name\":\"e175480\",\"id\":1},{\"name\":\"e175816\",\"id\":2},{\"name\":\"e176150\",\"id\":3},{\"name\":\"e176317\",\"id\":4},{\"name\":\"e176644\",\"id\":5},{\"name\":\"e176970\",\"id\":6}]},{\"caption\":\"Instituto Eldorado\",\"id\":\"Instituto Eldorado\",\"cod\":75,\"lat\":-22.8127,\"lon\":-47.0615,\"interfaces\":[{\"name\":\"e175462\",\"id\":1},{\"name\":\"e175798\",\"id\":2},{\"name\":\"e176132\",\"id\":3},{\"name\":\"e176299\",\"id\":4},{\"name\":\"e176626\",\"id\":5},{\"name\":\"e176952\",\"id\":6}]},{\"caption\":\"USP\",\"id\":\"USP Campus CDCC\",\"cod\":76,\"lat\":-22.019,\"lon\":-47.8927,\"interfaces\":[{\"name\":\"e175476\",\"id\":1},{\"name\":\"e175812\",\"id\":2},{\"name\":\"e176146\",\"id\":3},{\"name\":\"e176313\",\"id\":4},{\"name\":\"e176640\",\"id\":5},{\"name\":\"e176966\",\"id\":6}]},{\"caption\":\"USP\",\"id\":\"USP Campus I - Redecomep Sao Carlos\",\"cod\":77,\"lat\":-22.0033,\"lon\":-47.8984,\"interfaces\":[{\"name\":\"e175477\",\"id\":1},{\"name\":\"e175813\",\"id\":2},{\"name\":\"e176147\",\"id\":3},{\"name\":\"e176314\",\"id\":4},{\"name\":\"e176641\",\"id\":5},{\"name\":\"e176967\",\"id\":6}]},{\"caption\":\"SBPC\",\"id\":\"Sociedade Brasileira para o Progresso da Ciência - SBPC\",\"cod\":78,\"lat\":-23.5461,\"lon\":-46.651,\"interfaces\":[{\"name\":\"e175478\",\"id\":1},{\"name\":\"e175814\",\"id\":2},{\"name\":\"e176148\",\"id\":3},{\"name\":\"e176315\",\"id\":4},{\"name\":\"e176642\",\"id\":5},{\"name\":\"e176968\",\"id\":6}]},{\"caption\":\"IFSP\",\"id\":\"IFSP - Campus SP\",\"cod\":79,\"lat\":-23.5243,\"lon\":-46.6227,\"interfaces\":[{\"name\":\"e175374\",\"id\":1},{\"name\":\"e175373\",\"id\":2},{\"name\":\"e175372\",\"id\":3},{\"name\":\"e175710\",\"id\":4},{\"name\":\"e175708\",\"id\":5},{\"name\":\"e175709\",\"id\":6},{\"name\":\"e176043\",\"id\":7},{\"name\":\"e176044\",\"id\":8},{\"name\":\"e176045\",\"id\":9},{\"name\":\"e176211\",\"id\":10},{\"name\":\"e176210\",\"id\":11},{\"name\":\"e176212\",\"id\":12},{\"name\":\"e176541\",\"id\":13},{\"name\":\"e176543\",\"id\":14},{\"name\":\"e176542\",\"id\":15},{\"name\":\"e176868\",\"id\":16},{\"name\":\"e176869\",\"id\":17},{\"name\":\"e176867\",\"id\":18}]},{\"caption\":\"EBC\",\"id\":\"EBC - TV Brasil\",\"cod\":80,\"lat\":-23.5338,\"lon\":-46.7446,\"interfaces\":[{\"name\":\"e175485\",\"id\":1},{\"name\":\"e175455\",\"id\":2},{\"name\":\"e175791\",\"id\":3},{\"name\":\"e175821\",\"id\":4},{\"name\":\"e176155\",\"id\":5},{\"name\":\"e176126\",\"id\":6},{\"name\":\"e176322\",\"id\":7},{\"name\":\"e176293\",\"id\":8},{\"name\":\"e176620\",\"id\":9},{\"name\":\"e176649\",\"id\":10},{\"name\":\"e176975\",\"id\":11},{\"name\":\"e176946\",\"id\":12}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPTIA\",\"cod\":81,\"lat\":-22.818,\"lon\":-47.0624,\"interfaces\":[{\"name\":\"e175453\",\"id\":1},{\"name\":\"e175789\",\"id\":2},{\"name\":\"e176124\",\"id\":3},{\"name\":\"e176291\",\"id\":4},{\"name\":\"e176618\",\"id\":5},{\"name\":\"e176944\",\"id\":6}]},{\"caption\":\"RNP\",\"id\":\"RNP - Campinas\",\"cod\":82,\"lat\":-22.8182,\"lon\":-47.0618,\"interfaces\":[{\"name\":\"e175458\",\"id\":1},{\"name\":\"e175459\",\"id\":2},{\"name\":\"e175795\",\"id\":3},{\"name\":\"e175794\",\"id\":4},{\"name\":\"e176129\",\"id\":5},{\"name\":\"e176296\",\"id\":6},{\"name\":\"e176623\",\"id\":7},{\"name\":\"e176949\",\"id\":8}]},{\"caption\":\"Instituto Federal de São Paulo - Reitoria\",\"id\":\"Instituto Federal de São Paulo - Reitoria\",\"cod\":83,\"lat\":-23.5234,\"lon\":-46.6226,\"interfaces\":[{\"name\":\"e175456\",\"id\":1},{\"name\":\"e175457\",\"id\":2},{\"name\":\"e175371\",\"id\":3},{\"name\":\"e175707\",\"id\":4},{\"name\":\"e175793\",\"id\":5},{\"name\":\"e175792\",\"id\":6},{\"name\":\"e176042\",\"id\":7},{\"name\":\"e176128\",\"id\":8},{\"name\":\"e176127\",\"id\":9},{\"name\":\"e176295\",\"id\":10},{\"name\":\"e176294\",\"id\":11},{\"name\":\"e176209\",\"id\":12},{\"name\":\"e176621\",\"id\":13},{\"name\":\"e176622\",\"id\":14},{\"name\":\"e176540\",\"id\":15},{\"name\":\"e176948\",\"id\":16},{\"name\":\"e176866\",\"id\":17},{\"name\":\"e176947\",\"id\":18}]},{\"caption\":\"USP\",\"id\":\"Faculdade de Direito - USP\",\"cod\":84,\"lat\":-23.5498,\"lon\":-46.637,\"interfaces\":[{\"name\":\"e175450\",\"id\":1},{\"name\":\"e175786\",\"id\":2},{\"name\":\"e176121\",\"id\":3},{\"name\":\"e176288\",\"id\":4},{\"name\":\"e176615\",\"id\":5},{\"name\":\"e176941\",\"id\":6}]},{\"caption\":\"UNIFESP\",\"id\":\"UNIFESP - Baixada Santista (Silva Jardim)\",\"cod\":85,\"lat\":-23.9471,\"lon\":-46.3191,\"interfaces\":[{\"name\":\"e175499\",\"id\":1},{\"name\":\"e175835\",\"id\":2},{\"name\":\"e176169\",\"id\":3},{\"name\":\"e176336\",\"id\":4},{\"name\":\"e176663\",\"id\":5},{\"name\":\"e176989\",\"id\":6}]},{\"caption\":\"Hospital Amparo Maternal\",\"id\":\"Hospital Amparo Maternal\",\"cod\":86,\"lat\":-23.5999,\"lon\":-46.6435,\"interfaces\":[{\"name\":\"e175452\",\"id\":1},{\"name\":\"e175788\",\"id\":2},{\"name\":\"e176123\",\"id\":3},{\"name\":\"e176290\",\"id\":4},{\"name\":\"e176617\",\"id\":5},{\"name\":\"e176943\",\"id\":6}]},{\"caption\":\"CP\",\"id\":\"Fundação Centro de Pesquisa e Desenvolvimento em Telecomunicações (CPqD) - Campinas\",\"cod\":87,\"lat\":-22.8163,\"lon\":-47.0445,\"interfaces\":[{\"name\":\"e175451\",\"id\":1},{\"name\":\"e175787\",\"id\":2},{\"name\":\"e176122\",\"id\":3},{\"name\":\"e176289\",\"id\":4},{\"name\":\"e176616\",\"id\":5},{\"name\":\"e176942\",\"id\":6}]},{\"caption\":\"ABC\",\"id\":\"Universidade Federal do ABC - UFABC\",\"cod\":88,\"lat\":-23.6445,\"lon\":-46.5287,\"interfaces\":[{\"name\":\"e175506\",\"id\":1},{\"name\":\"e175407\",\"id\":2},{\"name\":\"e175408\",\"id\":3},{\"name\":\"e175743\",\"id\":4},{\"name\":\"e175744\",\"id\":5},{\"name\":\"e175842\",\"id\":6},{\"name\":\"e176176\",\"id\":7},{\"name\":\"e176079\",\"id\":8},{\"name\":\"e176078\",\"id\":9},{\"name\":\"e176343\",\"id\":10},{\"name\":\"e176246\",\"id\":11},{\"name\":\"e176245\",\"id\":12},{\"name\":\"e176573\",\"id\":13},{\"name\":\"e176574\",\"id\":14},{\"name\":\"e176670\",\"id\":15},{\"name\":\"e176996\",\"id\":16},{\"name\":\"e176900\",\"id\":17},{\"name\":\"e176899\",\"id\":18}]},{\"caption\":\"UNIFESP\",\"id\":\"UNIFESP – Guarulhos\",\"cod\":89,\"lat\":-23.4411,\"lon\":-46.4033,\"interfaces\":[{\"name\":\"e175503\",\"id\":1},{\"name\":\"e175839\",\"id\":2},{\"name\":\"e176173\",\"id\":3},{\"name\":\"e176340\",\"id\":4},{\"name\":\"e176667\",\"id\":5},{\"name\":\"e176993\",\"id\":6}]},{\"caption\":\"UNIFESP\",\"id\":\"UNIFESP – Diadema\",\"cod\":90,\"lat\":-23.7192,\"lon\":-46.6278,\"interfaces\":[{\"name\":\"e175521\",\"id\":1},{\"name\":\"e175857\",\"id\":2},{\"name\":\"e176191\",\"id\":3},{\"name\":\"e176358\",\"id\":4},{\"name\":\"e176685\",\"id\":5},{\"name\":\"e177011\",\"id\":6}]},{\"caption\":\"UFSC\",\"id\":\"UFSCar – Sorocaba\",\"cod\":91,\"lat\":-23.5821,\"lon\":-47.5234,\"interfaces\":[{\"name\":\"e175405\",\"id\":1},{\"name\":\"e175404\",\"id\":2},{\"name\":\"e175403\",\"id\":3},{\"name\":\"e175740\",\"id\":4},{\"name\":\"e175741\",\"id\":5},{\"name\":\"e175739\",\"id\":6},{\"name\":\"e176075\",\"id\":7},{\"name\":\"e176074\",\"id\":8},{\"name\":\"e176076\",\"id\":9},{\"name\":\"e176242\",\"id\":10},{\"name\":\"e176243\",\"id\":11},{\"name\":\"e176241\",\"id\":12},{\"name\":\"e176570\",\"id\":13},{\"name\":\"e176571\",\"id\":14},{\"name\":\"e176569\",\"id\":15},{\"name\":\"e176897\",\"id\":16},{\"name\":\"e176896\",\"id\":17},{\"name\":\"e176895\",\"id\":18}]},{\"caption\":\"UFSC\",\"id\":\"Universidade Federal de São Carlos – UFSCar\",\"cod\":92,\"lat\":-21.9822,\"lon\":-47.8799,\"interfaces\":[{\"name\":\"e175484\",\"id\":1},{\"name\":\"e175820\",\"id\":2},{\"name\":\"e176154\",\"id\":3},{\"name\":\"e176321\",\"id\":4},{\"name\":\"e176648\",\"id\":5},{\"name\":\"e176974\",\"id\":6}]},{\"caption\":\"UNIFESP\",\"id\":\"Universidade Federal de São Paulo - UNIFESP\",\"cod\":93,\"lat\":-23.5993,\"lon\":-46.643,\"interfaces\":[{\"name\":\"e175401\",\"id\":1},{\"name\":\"e175402\",\"id\":2},{\"name\":\"e175737\",\"id\":3},{\"name\":\"e175738\",\"id\":4},{\"name\":\"e176073\",\"id\":5},{\"name\":\"e176072\",\"id\":6},{\"name\":\"e176240\",\"id\":7},{\"name\":\"e176239\",\"id\":8},{\"name\":\"e176568\",\"id\":9},{\"name\":\"e176567\",\"id\":10},{\"name\":\"e176894\",\"id\":11},{\"name\":\"e176893\",\"id\":12}]},{\"caption\":\"FINEP\",\"id\":\"FINEP – SP\",\"cod\":94,\"lat\":-23.5872,\"lon\":-46.6751,\"interfaces\":[{\"name\":\"e175400\",\"id\":1},{\"name\":\"e175736\",\"id\":2},{\"name\":\"e176071\",\"id\":3},{\"name\":\"e176238\",\"id\":4},{\"name\":\"e176566\",\"id\":5},{\"name\":\"e176892\",\"id\":6}]},{\"caption\":\"CTI\",\"id\":\"CTI Renato Archer\",\"cod\":95,\"lat\":-22.8537,\"lon\":-47.1271,\"interfaces\":[{\"name\":\"e175399\",\"id\":1},{\"name\":\"e175735\",\"id\":2},{\"name\":\"e176070\",\"id\":3},{\"name\":\"e176237\",\"id\":4},{\"name\":\"e176565\",\"id\":5},{\"name\":\"e176891\",\"id\":6}]},{\"caption\":\"UNIFESP\",\"id\":\"UNIFESP - Zona Leste\",\"cod\":96,\"lat\":-23.5785,\"lon\":-46.4433,\"interfaces\":[{\"name\":\"e175868\",\"id\":1},{\"name\":\"e176202\",\"id\":2},{\"name\":\"e176369\",\"id\":3},{\"name\":\"e176696\",\"id\":4},{\"name\":\"e177022\",\"id\":5}]}]},\"to\":{\"clientes\":[{\"caption\":\"IFTO\",\"id\":\"IFTO-Dianopolis\",\"cod\":1,\"lat\":-11.6349,\"lon\":-46.766,\"interfaces\":[{\"name\":\"e12262\",\"id\":1},{\"name\":\"e12392\",\"id\":2},{\"name\":\"e12522\",\"id\":3},{\"name\":\"e12652\",\"id\":4},{\"name\":\"e12782\",\"id\":5}]},{\"caption\":\"UNITINS\",\"id\":\"UNITINS Graciosa\",\"cod\":2,\"lat\":-10.1825,\"lon\":-48.3604,\"interfaces\":[{\"name\":\"e12255\",\"id\":1},{\"name\":\"e12385\",\"id\":2},{\"name\":\"e12515\",\"id\":3},{\"name\":\"e12645\",\"id\":4},{\"name\":\"e12775\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO Lagoa da Confusão\",\"cod\":3,\"lat\":-10.8003,\"lon\":-49.6293,\"interfaces\":[{\"name\":\"e12268\",\"id\":1},{\"name\":\"e12398\",\"id\":2},{\"name\":\"e12528\",\"id\":3},{\"name\":\"e12658\",\"id\":4},{\"name\":\"e12788\",\"id\":5}]},{\"caption\":\"UFT\",\"id\":\"UFT - Palmas\",\"cod\":4,\"lat\":-10.1793,\"lon\":-48.3599,\"interfaces\":[{\"name\":\"e12251\",\"id\":1},{\"name\":\"e12250\",\"id\":2},{\"name\":\"e12381\",\"id\":3},{\"name\":\"e12380\",\"id\":4},{\"name\":\"e12510\",\"id\":5},{\"name\":\"e12511\",\"id\":6},{\"name\":\"e12640\",\"id\":7},{\"name\":\"e12641\",\"id\":8},{\"name\":\"e12770\",\"id\":9},{\"name\":\"e12771\",\"id\":10}]},{\"caption\":\"PoP-TO\",\"id\":\"PoP-TO\",\"cod\":5,\"lat\":-10.1768,\"lon\":-48.3618,\"interfaces\":[{\"name\":\"e12254\",\"id\":1},{\"name\":\"e12384\",\"id\":2},{\"name\":\"e12514\",\"id\":3},{\"name\":\"e12644\",\"id\":4},{\"name\":\"e12774\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO - Araguaina\",\"cod\":6,\"lat\":-7.182,\"lon\":-48.1937,\"interfaces\":[{\"name\":\"e12226\",\"id\":1},{\"name\":\"e12356\",\"id\":2},{\"name\":\"e12486\",\"id\":3},{\"name\":\"e12616\",\"id\":4},{\"name\":\"e12746\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO-Araguatins\",\"cod\":7,\"lat\":-5.64503,\"lon\":-48.072,\"interfaces\":[{\"name\":\"e12227\",\"id\":1},{\"name\":\"e12357\",\"id\":2},{\"name\":\"e12487\",\"id\":3},{\"name\":\"e12617\",\"id\":4},{\"name\":\"e12747\",\"id\":5}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CEAQ\",\"cod\":8,\"lat\":-10.1403,\"lon\":-48.3141,\"interfaces\":[{\"name\":\"e12246\",\"id\":1},{\"name\":\"e12376\",\"id\":2},{\"name\":\"e12506\",\"id\":3},{\"name\":\"e12636\",\"id\":4},{\"name\":\"e12766\",\"id\":5}]},{\"caption\":\"UNITINS\",\"id\":\"UNITINS\",\"cod\":9,\"lat\":-10.191,\"lon\":-48.3166,\"interfaces\":[{\"name\":\"e12247\",\"id\":1},{\"name\":\"e12377\",\"id\":2},{\"name\":\"e12507\",\"id\":3},{\"name\":\"e12637\",\"id\":4},{\"name\":\"e12767\",\"id\":5}]},{\"caption\":\"UFT\",\"id\":\"UFT - Araguaina Cimba\",\"cod\":10,\"lat\":-7.18187,\"lon\":-48.1967,\"interfaces\":[{\"name\":\"e12222\",\"id\":1},{\"name\":\"e12352\",\"id\":2},{\"name\":\"e12482\",\"id\":3},{\"name\":\"e12612\",\"id\":4},{\"name\":\"e12742\",\"id\":5}]},{\"caption\":\"UFT\",\"id\":\"UFT - Araguaina CCA\",\"cod\":11,\"lat\":-7.10145,\"lon\":-48.2017,\"interfaces\":[{\"name\":\"e12224\",\"id\":1},{\"name\":\"e12354\",\"id\":2},{\"name\":\"e12484\",\"id\":3},{\"name\":\"e12614\",\"id\":4},{\"name\":\"e12744\",\"id\":5}]},{\"caption\":\"ETSUS\",\"id\":\"ETSUS\",\"cod\":12,\"lat\":-10.2212,\"lon\":-48.3214,\"interfaces\":[{\"name\":\"e12258\",\"id\":1},{\"name\":\"e12388\",\"id\":2},{\"name\":\"e12518\",\"id\":3},{\"name\":\"e12648\",\"id\":4},{\"name\":\"e12778\",\"id\":5}]},{\"caption\":\"EBSERH\",\"id\":\"EBSERH_HDT-UFT\",\"cod\":13,\"lat\":-7.1937,\"lon\":-48.2162,\"interfaces\":[{\"name\":\"e12260\",\"id\":1},{\"name\":\"e12390\",\"id\":2},{\"name\":\"e12520\",\"id\":3},{\"name\":\"e12650\",\"id\":4},{\"name\":\"e12780\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO-Pedro-Afonso\",\"cod\":14,\"lat\":-8.98817,\"lon\":-48.161,\"interfaces\":[{\"name\":\"e12266\",\"id\":1},{\"name\":\"e12396\",\"id\":2},{\"name\":\"e12526\",\"id\":3},{\"name\":\"e12656\",\"id\":4},{\"name\":\"e12786\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO Colinas do Tocantins\",\"cod\":15,\"lat\":-8.09096,\"lon\":-48.476,\"interfaces\":[{\"name\":\"e12272\",\"id\":1},{\"name\":\"e12402\",\"id\":2},{\"name\":\"e12532\",\"id\":3},{\"name\":\"e12662\",\"id\":4},{\"name\":\"e12792\",\"id\":5}]},{\"caption\":\"UFT\",\"id\":\"UFT Arraias\",\"cod\":16,\"lat\":-12.9205,\"lon\":-46.9489,\"interfaces\":[{\"name\":\"e12270\",\"id\":1},{\"name\":\"e12400\",\"id\":2},{\"name\":\"e12530\",\"id\":3},{\"name\":\"e12660\",\"id\":4},{\"name\":\"e12790\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO Formoso do Araguaia\",\"cod\":17,\"lat\":-11.7975,\"lon\":-49.5242,\"interfaces\":[{\"name\":\"e12274\",\"id\":1},{\"name\":\"e12404\",\"id\":2},{\"name\":\"e12534\",\"id\":3},{\"name\":\"e12664\",\"id\":4},{\"name\":\"e12794\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO-Reitoria\",\"cod\":18,\"lat\":-10.1952,\"lon\":-48.3329,\"interfaces\":[{\"name\":\"e12248\",\"id\":1},{\"name\":\"e12378\",\"id\":2},{\"name\":\"e12508\",\"id\":3},{\"name\":\"e12638\",\"id\":4},{\"name\":\"e12768\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO-Palmas\",\"cod\":19,\"lat\":-10.1993,\"lon\":-48.3113,\"interfaces\":[{\"name\":\"e12249\",\"id\":1},{\"name\":\"e12379\",\"id\":2},{\"name\":\"e12509\",\"id\":3},{\"name\":\"e12639\",\"id\":4},{\"name\":\"e12769\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO-Gurupi\",\"cod\":20,\"lat\":-11.7386,\"lon\":-49.0545,\"interfaces\":[{\"name\":\"e12236\",\"id\":1},{\"name\":\"e12366\",\"id\":2},{\"name\":\"e12496\",\"id\":3},{\"name\":\"e12626\",\"id\":4},{\"name\":\"e12756\",\"id\":5}]},{\"caption\":\"UFT\",\"id\":\"UFT-Gurupi\",\"cod\":21,\"lat\":-11.7467,\"lon\":-49.049,\"interfaces\":[{\"name\":\"e12234\",\"id\":1},{\"name\":\"e12364\",\"id\":2},{\"name\":\"e12494\",\"id\":3},{\"name\":\"e12624\",\"id\":4},{\"name\":\"e12754\",\"id\":5}]},{\"caption\":\"UFT\",\"id\":\"UFT-Miracema\",\"cod\":22,\"lat\":-9.56938,\"lon\":-48.4054,\"interfaces\":[{\"name\":\"e12232\",\"id\":1},{\"name\":\"e12362\",\"id\":2},{\"name\":\"e12492\",\"id\":3},{\"name\":\"e12622\",\"id\":4},{\"name\":\"e12752\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO-Paraiso\",\"cod\":23,\"lat\":-10.2683,\"lon\":-48.8876,\"interfaces\":[{\"name\":\"e12230\",\"id\":1},{\"name\":\"e12360\",\"id\":2},{\"name\":\"e12490\",\"id\":3},{\"name\":\"e12620\",\"id\":4},{\"name\":\"e12750\",\"id\":5}]},{\"caption\":\"IPEM\",\"id\":\"IPEM\",\"cod\":24,\"lat\":-10.2222,\"lon\":-48.3325,\"interfaces\":[{\"name\":\"e12243\",\"id\":1},{\"name\":\"e12373\",\"id\":2},{\"name\":\"e12503\",\"id\":3},{\"name\":\"e12633\",\"id\":4},{\"name\":\"e12763\",\"id\":5}]},{\"caption\":\"UFT\",\"id\":\"UFT-Tocantinopolis\",\"cod\":25,\"lat\":-6.32471,\"lon\":-47.4289,\"interfaces\":[{\"name\":\"e12242\",\"id\":1},{\"name\":\"e12372\",\"id\":2},{\"name\":\"e12502\",\"id\":3},{\"name\":\"e12632\",\"id\":4},{\"name\":\"e12762\",\"id\":5}]},{\"caption\":\"IFTO\",\"id\":\"IFTO-Porto Nacional\",\"cod\":26,\"lat\":-10.6937,\"lon\":-48.3983,\"interfaces\":[{\"name\":\"e12240\",\"id\":1},{\"name\":\"e12370\",\"id\":2},{\"name\":\"e12500\",\"id\":3},{\"name\":\"e12630\",\"id\":4},{\"name\":\"e12760\",\"id\":5}]},{\"caption\":\"UFT\",\"id\":\"UFT-Porto Nacional\",\"cod\":27,\"lat\":-10.6895,\"lon\":-48.3813,\"interfaces\":[{\"name\":\"e12238\",\"id\":1},{\"name\":\"e12368\",\"id\":2},{\"name\":\"e12498\",\"id\":3},{\"name\":\"e12628\",\"id\":4},{\"name\":\"e12758\",\"id\":5}]},{\"caption\":\"EMBRAPA\",\"id\":\"EMBRAPA_CNPASA\",\"cod\":28,\"lat\":-10.1452,\"lon\":-48.3148,\"interfaces\":[{\"name\":\"e12245\",\"id\":1},{\"name\":\"e12375\",\"id\":2},{\"name\":\"e12505\",\"id\":3},{\"name\":\"e12635\",\"id\":4},{\"name\":\"e12765\",\"id\":5}]},{\"caption\":\"SEDECTI\",\"id\":\"SEDECTI\",\"cod\":29,\"lat\":-10.184,\"lon\":-48.3309,\"interfaces\":[{\"name\":\"e12244\",\"id\":1},{\"name\":\"e12374\",\"id\":2},{\"name\":\"e12504\",\"id\":3},{\"name\":\"e12634\",\"id\":4},{\"name\":\"e12764\",\"id\":5}]}]}}}");

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
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _widgets_map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../widgets/map/map.component */ "Weg6");
/* harmony import */ var _bars_charts_bar_charts_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bars/charts-bar/charts-bar.component */ "K4GV");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-draggable */ "DIQL");
/* harmony import */ var _widgets_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/bar-chart/bar-chart.component */ "pvtx");
/* harmony import */ var _widgets_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/line-chart/line-chart.component */ "1t5r");
/* harmony import */ var _widgets_network_network_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/network/network.component */ "SfxP");
/* harmony import */ var _widgets_functions_chart_functions_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../widgets/functions-chart/functions-chart.component */ "1Kw/");
/* harmony import */ var _widgets_scattergl_scattergl_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../widgets/scattergl/scattergl.component */ "jCsL");
/* harmony import */ var _widgets_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../widgets/alerts/alerts.component */ "Krjr");
/* harmony import */ var _widgets_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../widgets/filters/filters.component */ "Kb4X");
/* harmony import */ var _bars_time_bar_time_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../bars/time-bar/time-bar.component */ "T/Ui");

















const _c0 = ["appMap"];
const _c1 = ["appBarChart"];
const _c2 = ["appLineChart"];
const _c3 = ["appNetworkChart"];
const _c4 = ["appAlerts"];
const _c5 = ["appFilters"];
const _c6 = ["appScatterglChart"];
const _c7 = ["appFunctionsChart"];
class HomeComponent {
    constructor(global, api, util, spinner) {
        this.global = global;
        this.api = api;
        this.util = util;
        this.spinner = spinner;
        this.last = 'none';
        this.moving = 'none';
        this.t0 = 'none';
        this.t1 = 'none';
        this.timeBoundsRefreshFnc = undefined;
        this.chartsElements = { cods: [], colors: [], names: [], from: [] };
        this.timeBoundsRefreshFnc = setInterval(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.timeBoundsRefresh();
            yield this.listIpsRefresh();
        }), 60 * 1000);
    }
    ngAfterViewInit() {
        this.initCharts();
    }
    ngOnInit() {
        const line_selected_params_value = this.global.getGlobal('line_selected_params_value');
        const selectedClientOption = this.global.getGlobal("client_option").value;
        if (selectedClientOption == 'viaipe') {
            line_selected_params_value.value = 'avg_in';
            this.global.setGlobal(line_selected_params_value);
        }
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
        this.setDates();
        // barchart e linechart do mapa
        this.updateLineChart('map', '#AAAAAA');
        this.updateBarChart('map', '#AAAAAA');
        // adiciona ao estado global
        this.addChartElementToGlobal('map', '#AAAAAA');
        // heat matrix
        this.updateHeatmatrix();
        //functions chart
        this.updateFunctionsChart();
    }
    setDates() {
        const date0 = new Date(this.global.getGlobal("t0_vis").value * 1000);
        const date1 = new Date(this.global.getGlobal("t1_vis").value * 1000);
        //@ts-ignore
        this.t0 = date0.toLocaleString('en-GB', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }).replace(', ', ' - ');
        //@ts-ignore
        this.t1 = date1.toLocaleString('en-GB', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }).replace(', ', ' - ');
    }
    ;
    /**
     * Redesenha todos os gráficos
     */
    redrawAllCharts() {
        this.updateHeatmap();
        const selectedClientOption = this.global.getGlobal("client_option").value;
        if (selectedClientOption !== 'viaipe') {
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
        }
        else {
            //muda dado para o barchart 
            this.updateBarChart('map', '#AAAAAA');
            // percorre os tipos de elementos
            for (const dataId of Object.keys(this.line.rawData['viaipe'])) {
                // percorre os elementos
                for (const color of Object.keys(this.line.rawData['viaipe'][dataId])) {
                    console.log(dataId);
                }
            }
            //muda dado para o linechart
            //muda mapa
            this.updateLineChart('map', '#AAAAAA');
            //muda filtros
            if (this.line.rawData['viaipe']['filter'] !== undefined) {
                if (this.line.rawData['viaipe']['filter']['#FF7F0E'].length > 0) {
                    this.updateLineChart('filter', this.global.getGlobal('filter_color').value);
                }
            }
            //muda clientes
            for (let i = 0; i < this.chartsElements.length; i++) {
                this.updateLineChart('client', this.chartsElements[i].color, this.chartsElements[i].cod, this.chartsElements[i].name);
            }
        }
        this.setDates();
        this.net.onTimeBoundsChange();
        this.func.onTimeBoundsChange();
        this.scattergl.onTimeBoundsChange();
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
            this.bar.clearChart(param.id, 'geometry', color, lmap, this.map.getZoom());
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
        const selectedClientOption = this.global.getGlobal("client_option").value;
        this.chartsElements.cods.push(cod);
        this.chartsElements.colors.push(color);
        this.chartsElements.names.push(name);
        // barchart e linechart do marker
        this.updateLineChart('client', color, cod, name);
        if (selectedClientOption == 'viaipe') {
            this.bar.updateColor(color, cod, true);
        }
        else {
            this.updateBarChart('client', color, cod, name);
        }
        // adiciona ao estado global
        this.addChartElementToGlobal('client', color, cod);
    }
    /**
     * Atualiza os gráficos após a remoção de um pin do mapa
     */
    onMarkerRemoved(event) {
        const color = event.color;
        const cod = event.cod;
        const name = event.nome.replace(/_/g, ' ');
        const selectedClientOption = this.global.getGlobal("client_option").value;
        this.chartsElements.colors = this.chartsElements.colors.filter((e) => e !== color);
        this.chartsElements.cods = this.chartsElements.cods.filter((e) => e !== cod);
        this.chartsElements.names = this.chartsElements.names.filter((e) => e !== name);
        const line_params = this.global.getGlobal('line_params').value;
        const bar_params = this.global.getGlobal('bar_params').value;
        const lmap = this.global.getGlobal('label_maps').value;
        if (selectedClientOption !== 'viaipe') {
            for (const param of line_params) {
                this.line.clearChart(param.id, 'client', color);
            }
            for (const param of bar_params) {
                this.bar.clearChart(param.id, 'client', color, lmap, this.map.getZoom());
            }
        }
        else {
            this.line.clearChart('viaipe', 'client', color);
            this.bar.updateColor(color, cod, false);
        }
        // remove do estado global
        this.removeChartElementFromGlobal('client', color);
    }
    /**
     * Atualiza os gráficos após a criação de um filtro
     */
    onFiltersDefined(clientData) {
        this.map.drawFilterMarkers(clientData);
        const selectedClientOption = this.global.getGlobal("client_option").value;
        if (selectedClientOption == 'viaipe') {
            for (let i = 0; i < clientData.length; i++) {
                this.bar.updateColor(this.global.getGlobal('filter_color').value, clientData[i].cod, true);
            }
        }
        else {
            this.updateBarChart('filter', this.global.getGlobal('filter_color').value);
        }
        this.updateLineChart('filter', this.global.getGlobal('filter_color').value);
        // adiciona ao estado global
        this.addChartElementToGlobal('filter', this.global.getGlobal('filter_color').value, clientData);
    }
    /**
     * Atualiza os gráficos após a remoção de um filtro
     */
    onFiltersRemoved() {
        this.map.eraseFilterMarkers();
        const selectedClientOption = this.global.getGlobal("client_option").value;
        if (selectedClientOption == 'viaipe') {
            this.line.clearChart('viaipe', 'filter', this.global.getGlobal('filter_color').value);
            this.bar.removeFilters();
        }
        else {
            const line_params = this.global.getGlobal('line_params').value;
            for (const param of line_params) {
                this.line.clearChart(param.id, 'filter', this.global.getGlobal('filter_color').value);
            }
            const bar_params = this.global.getGlobal('bar_params').value;
            const lmap = this.global.getGlobal('label_maps').value;
            for (const param of bar_params) {
                this.bar.clearChart(param.id, 'filter', this.global.getGlobal('filter_color').value, lmap, this.map.getZoom());
            }
        }
        // remove do estado global
        this.removeChartElementFromGlobal('filter', this.global.getGlobal('filter_color').value);
    }
    /**
     * Atualiza o critério de groupby do barchart
     */
    onBarSelectedChanged() {
        const selectedClientOption = this.global.getGlobal("client_option").value;
        const param = this.global.getGlobal('bar_params_value').value;
        if (selectedClientOption == 'viaipe') {
            this.bar.barChart.clear();
            for (let paramId of Object.keys(this.bar.rawData['viaipe'])) {
                if (paramId == 'map')
                    this.updateBarChart(paramId, '#AAAAAA');
                else {
                    for (let i = 0; i < this.chartsElements.cods.length; i++) {
                        const color = this.chartsElements.colors[i];
                        const cod = this.chartsElements.cods[i];
                        const name = this.chartsElements.names[i];
                        this.updateBarChart(paramId, color, cod, name);
                    }
                }
            }
        }
        else {
            this.bar.drawChart(param, undefined, this.map.getZoom());
        }
    }
    ;
    /**
     * Atualiza o from de saída do linechart
     */
    onLineSelectedChanged() {
        const param = this.global.getGlobal('line_params_value').value;
        const selectedParam = this.global.getGlobal('line_selected_params_value').value;
        const selectedClientOption = this.global.getGlobal("client_option").value;
        if (selectedClientOption == 'viaipe') {
            for (let paramId of Object.keys(this.line.rawData['viaipe'])) {
                if (paramId == 'map') {
                    this.updateLineChart(paramId, '#AAAAAA');
                }
                else {
                    for (let i = 0; i < this.chartsElements.cods.length; i++) {
                        const color = this.chartsElements.colors[i];
                        const cod = this.chartsElements.cods[i];
                        const name = this.chartsElements.names[i];
                        this.updateLineChart(paramId, color, cod, name, 'data change');
                    }
                }
            }
        }
    }
    onFunctionsChartReset() {
        this.func.clearSeries();
        document.getElementById('functions-chart-options').value = "cdf";
        document.getElementById('functions-chart-select-value-options').value = "all";
        const functions_param = {
            key: "functions_param",
            value: "cdf"
        };
        this.global.setGlobal(functions_param);
        const functions_value = {
            key: "functions_value",
            value: 'all'
        };
        this.global.setGlobal(functions_value);
        this.func.functionsChart.setConfig(functions_param.value);
        this.func.setMultipleSelectConfiguration();
        this.func.setCombinedMultipleSelectConfiguration();
        this.updateFunctionsChart();
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
            this.map.removeCurrentHeatmapLayer();
            if (this.map.getZoom() > 12) {
                const location = this.map.getLocation();
                const time = this.getTime();
                this.spinner.show();
                const res = yield this.api.requestHeatMap(location, time);
                this.map.drawHeatMap(res);
                this.spinner.hide();
            }
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
            const selectedClientOption = this.global.getGlobal("client_option").value;
            const selectedValue = this.global.getGlobal('bar_params_value').value;
            let zoom;
            let lmap;
            let param;
            let res;
            if (selectedClientOption == 'popdf') {
                for (const param of bar_params) {
                    res = yield this.api.requestBarChart(location, time, client, param, selectedClientOption);
                    data[param.id] = res;
                    lmap = this.global.getGlobal('label_maps').value;
                }
                param = this.global.getGlobal('bar_params_value').value;
            }
            else {
                zoom = this.map.getZoom();
                res = yield this.api.requestBarChart(location, time, client, selectedValue, selectedClientOption, zoom);
                param = selectedClientOption;
                data['viaipe'] = res;
                lmap = { 'viaipe': {} };
            }
            if (Object.keys(res.result).length) {
                this.bar.updateData(data, dataId, chartColor, lmap, zoom);
                this.bar.drawChart(param, name, zoom);
            }
        });
    }
    updateLineChart(dataId, chartColor, feat = undefined, name = undefined, from = undefined) {
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
            let res;
            const line_params = this.global.getGlobal('line_params').value;
            const selectedParam = this.global.getGlobal('line_selected_params_value').value;
            const selectedClientOption = this.global.getGlobal("client_option").value;
            let param;
            if (selectedClientOption == 'popdf') {
                for (const param of line_params) {
                    res = yield this.api.requestLineChart(location, time, client, param, selectedClientOption);
                    data[param.id] = res;
                }
                param = this.global.getGlobal('line_params_value').value;
            }
            else {
                res = yield this.api.requestLineChart(location, time, client, selectedParam, selectedClientOption);
                param = 'viaipe';
                data['viaipe'] = res;
            }
            if (Object.keys(res.result).length) {
                this.line.updateData(data, dataId, chartColor);
                this.line.drawChart(param, selectedParam, name);
            }
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
            const dataType = this.global.getGlobal("data_type").value;
            if (dataType == "popxpop") {
                const res = yield this.api.requestHeatmatrix(selectedParam, selectedValue, tsT0, tsT1, clicked);
                const data = JSON.parse(res).result;
                this.net.drawChart(data, capitals, clicked, selectedParam != 77, dataType);
            }
            else {
                const services = this.global.getGlobal("services").value.default;
                const res = yield this.api.requestHeatmatrix('rnp_services', 'havg', tsT0, tsT1, clicked);
                const data = JSON.parse(res).result;
                this.net.drawChart(data, capitals, clicked, selectedParam != 77, dataType, services);
            }
        });
    }
    //atualiza quando selecionado agregado
    updateFunctionsChart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.spinner.show();
            let tsT0 = this.global.getGlobal("t0_vis").value;
            let tsT1 = this.global.getGlobal("t1_vis").value;
            const selectedParam = this.global.getGlobal('functions_param').value;
            const clicked = this.global.getGlobal("clicked_element").value;
            const res = yield this.api.requestFunctions(0, selectedParam, tsT0, tsT1, clicked);
            let data;
            (clicked >= 0) ? data = res.result[`${clicked}`]['0'] : data = res.result['0']['0'];
            const adaptedData = this.adaptData(data, "functions");
            const selectedData = [[-1, [adaptedData]]];
            this.func.updateFunctionsChartData(selectedData, clicked);
            this.spinner.hide();
        });
    }
    //atualiza quando selecionado um servico individualmente
    updateFunctionsChartService(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.spinner.show();
            let tsT0 = this.global.getGlobal("t0_vis").value;
            let tsT1 = this.global.getGlobal("t1_vis").value;
            const selectedParam = this.global.getGlobal('functions_param').value;
            const clicked = this.global.getGlobal("clicked_element").value;
            const selectedData = [];
            if (selectedParam !== 'timeseries') {
                for (let i = 0; i < event.length; i++) {
                    const res = yield this.api.requestFunctions(event[i], selectedParam, tsT0, tsT1, clicked);
                    let data;
                    let id;
                    event[i] == -1 ? id = 0 : id = event[i];
                    (clicked >= 0) ? data = res.result[`${clicked}`][`${id}`] : data = res.result['0'][`${id}`];
                    const adaptedData = this.adaptData(data, "functions");
                    selectedData[i] = [event[i], [adaptedData]];
                }
            }
            else {
                for (let i = 0; i < event.length; i++) {
                    if (this.func.isPopSelected()) {
                        const selectedValue = document.getElementById('functions-chart-select-timeseries-popxpop-value-options').value;
                        const res = yield this.api.requestTimeseries(selectedValue, "h_avg", tsT0, tsT1, clicked);
                        const data = JSON.parse(res).result;
                        const adaptedData = this.adaptData(data, "timeseries", event[i]);
                        selectedData[i] = [event[i], [adaptedData]];
                    }
                    else {
                        const res = yield this.api.requestTimeseries(10, "havg", tsT0, tsT1, clicked, "rnp_services");
                        const data = JSON.parse(res).result;
                        const adaptedData = this.adaptData(data, "timeseries", event[i]);
                        selectedData[i] = [event[i], [adaptedData]];
                    }
                }
            }
            this.func.updateFunctionsChartData(selectedData, clicked);
            this.spinner.hide();
        });
    }
    //atualiza quando esta selecionada a opcao de n pops x n servicos
    updateFunctionsCombinations(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.spinner.show();
            const tsT0 = this.global.getGlobal("t0_vis").value;
            const tsT1 = this.global.getGlobal("t1_vis").value;
            const selectedParam = this.global.getGlobal('functions_param').value;
            const selectedData = [];
            for (let i = 0; i < event.length; i++) {
                let pop = event[i].codPop;
                let service = event[i].codService;
                let data;
                let res;
                if (selectedParam !== "timeseries") {
                    res = yield this.api.requestFunctions(service, selectedParam, tsT0, tsT1, pop);
                    if (pop >= 0 && service >= 0) {
                        data = res.result[`${pop}`][`${service}`];
                    }
                    else if (pop == -1 && service >= 0) {
                        data = res.result['0'][`${service}`];
                    }
                    else if (pop >= 0 && service == -1) {
                        data = res.result[`${pop}`]['0'];
                    }
                    else {
                        data = res.result['0']['0'];
                    }
                    const adaptedData = this.adaptData(data, "functions");
                    selectedData[i] = [event[i], [adaptedData]];
                }
                else {
                    let selectedValue;
                    if (this.func.isPopSelected()) {
                        selectedValue = document.getElementById('functions-chart-select-timeseries-popxpop-value-options').value;
                        res = yield this.api.requestTimeseries(selectedValue, "h_avg", tsT0, tsT1, pop);
                        data = JSON.parse(res).result;
                    }
                    else {
                        selectedValue = 10;
                        res = yield this.api.requestTimeseries(selectedValue, "havg", tsT0, tsT1, pop, "rnp_services");
                        data = JSON.parse(res).result;
                    }
                    const adaptedData = this.adaptData(data, "timeseries", service);
                    selectedData[i] = [event[i], [adaptedData]];
                }
            }
            this.func.updateFunctionsCombinationsData(selectedData);
            this.spinner.hide();
        });
    }
    adaptData(data, from, secondParam = 0) {
        const adaptedValues = [];
        if (from == "functions") {
            for (let i = 0; i < data.length; i++) {
                adaptedValues.push({ x: data[i][0], y: data[i][1] });
            }
        }
        else {
            for (let i = 0; i < data.length; i++) {
                let label = '';
                let date = new Date(data[i][1] * 1000);
                //@ts-ignore
                label = date.toLocaleString('en-GB', { hour12: false, dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }).split(', ')[0];
                if (secondParam == data[i][0]) {
                    adaptedValues.push({ x: label, y: data[i][2] });
                }
            }
        }
        const totalData = [adaptedValues];
        return totalData;
    }
    updateScattergl(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.spinner.show();
            let selectedParam = event.value;
            const added = event.added;
            const statesIds = [];
            const finalData = [];
            const selectedValue = ['h_avg', 'h_min', 'h_max'];
            //usando a mesma query da heatmatrix
            let tsT0 = this.global.getGlobal("t0_vis").value;
            let tsT1 = this.global.getGlobal("t1_vis").value;
            const clicked = this.global.getGlobal("clicked_element").value;
            if (event.added) {
                for (let i = 0; i < selectedValue.length; i++) {
                    const res = yield this.api.requestHeatmatrix(selectedParam, selectedValue[i], tsT0, tsT1, clicked);
                    const data = JSON.parse(res).result;
                    let dataList = [];
                    for (let k = 0; k < data.length; k++) {
                        dataList.push(data[k][2]);
                    }
                    finalData.push(dataList);
                }
            }
            else {
                //dummy request para o spinner funcionar
                const res = yield this.api.getConfig();
            }
            this.scattergl.updateScatterglData(selectedParam, added, finalData);
            this.spinner.hide();
        });
    }
    onAreaSelected(indices) {
        if (indices.length > 0) {
            this.net.highlightHeatmatrix(indices);
        }
        else {
            this.net.removeHighlightHeatmatrix();
        }
    }
    onHighlightRemoved() {
        this.net.removeHighlightHeatmatrix();
    }
    onClientsSet(event) {
        if (event == 'add') {
            const clicked = this.global.getGlobal("clicked_element").value;
            const capitals = this.global.getGlobal('state_capitals').value.default;
            const capital = capitals.filter((c) => c.cod === clicked)[0].id;
            this.filters.setClients(capital);
        }
        else {
            this.filters.removeClients();
        }
    }
    isHeatmatrixSelected() {
        return this.global.getGlobal("network_param").value > 0;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.bar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.line = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.net = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.alerts = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.filters = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scattergl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.func = _t.first);
    } }, decls: 36, vars: 19, consts: [["id", "rnp-inicio-screen", 1, "home"], ["size", "medium", "type", "ball-clip-rotate", 3, "fullScreen"], [2, "color", "white"], [1, "row", "home-map-row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "fill", 2, "padding", "0px !important"], [3, "moveEndedEvent", "polyCreatedEvent", "polyEditedEvent", "polyRemovedEvent", "markerAddedEvent", "markerRemovedEvent", "resetFunctionsChart", "setClients"], ["appMap", ""], [1, "charts-menu"], ["ngDraggable", "", 1, "widget", "bar-chart-window", 3, "started", "stopped"], [3, "barParamChanged"], ["appBarChart", ""], ["ngDraggable", "", 1, "widget", "line-chart-window", 3, "started", "stopped"], [3, "lineParamChanged", "lineValueChanged"], ["appLineChart", ""], ["ngDraggable", "", 1, "widget", 3, "started", "stopped"], [3, "heatMatrixValueChanged", "heatMatrixParamChanged"], ["appNetworkChart", ""], ["ngDraggable", "", 1, "widget", "functions-chart-window", 3, "started", "stopped"], [3, "functionsParamChanged", "functionsValueChanged", "onItemSelected", "onCombinedChange"], ["appFunctionsChart", ""], ["ngDraggable", "", 1, "widget", "scattergl-window", 3, "started", "stopped"], [3, "onAreaSelect", "removeAreaSelection", "onParamSelected", "onTimeBoundsChanged"], ["appScatterglChart", ""], ["ngDraggable", "", 2, "position", "absolute", "top", "400px", "left", "10px", "width", "200px", "z-index", "900", 3, "started", "stopped"], ["appAlerts", ""], [2, "position", "absolute", "width", "400px", "bottom", "10px", "left", "10px", "z-index", "-10"], [3, "filtersDefined", "filtersRemoved"], ["appFilters", ""], [1, "dates"], [1, "date", 2, "border-style", "solid", "border-width", "0px 2px 0px 0px", "border-color", "#bfbfbf"], [1, "date"], [1, "time-menu", 3, "chartTimeChanged"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngx-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-map", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("moveEndedEvent", function HomeComponent_Template_app_map_moveEndedEvent_6_listener() { return ctx.onMoveEnded(); })("polyCreatedEvent", function HomeComponent_Template_app_map_polyCreatedEvent_6_listener($event) { return ctx.onPolyCreated($event); })("polyEditedEvent", function HomeComponent_Template_app_map_polyEditedEvent_6_listener($event) { return ctx.onPolyCreated($event); })("polyRemovedEvent", function HomeComponent_Template_app_map_polyRemovedEvent_6_listener($event) { return ctx.onPolyRemoved($event); })("markerAddedEvent", function HomeComponent_Template_app_map_markerAddedEvent_6_listener($event) { return ctx.onMarkerAdded($event); })("markerRemovedEvent", function HomeComponent_Template_app_map_markerRemovedEvent_6_listener($event) { return ctx.onMarkerRemoved($event); })("resetFunctionsChart", function HomeComponent_Template_app_map_resetFunctionsChart_6_listener() { return ctx.onFunctionsChartReset(); })("setClients", function HomeComponent_Template_app_map_setClients_6_listener($event) { return ctx.onClientsSet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-charts-bar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("started", function HomeComponent_Template_div_started_9_listener() { ctx.moving = "bar"; return ctx.last = "none"; })("stopped", function HomeComponent_Template_div_stopped_9_listener() { ctx.moving = "none"; return ctx.last = "bar"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "app-bar-chart", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("barParamChanged", function HomeComponent_Template_app_bar_chart_barParamChanged_10_listener() { return ctx.onBarSelectedChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("started", function HomeComponent_Template_div_started_12_listener() { ctx.moving = "line"; return ctx.last = "none"; })("stopped", function HomeComponent_Template_div_stopped_12_listener() { ctx.moving = "none"; return ctx.last = "line"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "app-line-chart", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("lineParamChanged", function HomeComponent_Template_app_line_chart_lineParamChanged_13_listener() { return ctx.onLineSelectedChanged(); })("lineValueChanged", function HomeComponent_Template_app_line_chart_lineValueChanged_13_listener() { return ctx.onLineSelectedChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("started", function HomeComponent_Template_div_started_15_listener() { ctx.moving = "net"; return ctx.last = "none"; })("stopped", function HomeComponent_Template_div_stopped_15_listener() { ctx.moving = "none"; return ctx.last = "net"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-network", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("heatMatrixValueChanged", function HomeComponent_Template_app_network_heatMatrixValueChanged_16_listener() { return ctx.updateHeatmatrix(); })("heatMatrixParamChanged", function HomeComponent_Template_app_network_heatMatrixParamChanged_16_listener() { return ctx.updateHeatmatrix(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("started", function HomeComponent_Template_div_started_18_listener() { ctx.moving = "net"; return ctx.last = "none"; })("stopped", function HomeComponent_Template_div_stopped_18_listener() { ctx.moving = "none"; return ctx.last = "net"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "app-functions-chart", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("functionsParamChanged", function HomeComponent_Template_app_functions_chart_functionsParamChanged_19_listener() { return ctx.updateFunctionsChart(); })("functionsValueChanged", function HomeComponent_Template_app_functions_chart_functionsValueChanged_19_listener() { return ctx.updateFunctionsChart(); })("onItemSelected", function HomeComponent_Template_app_functions_chart_onItemSelected_19_listener($event) { return ctx.updateFunctionsChartService($event); })("onCombinedChange", function HomeComponent_Template_app_functions_chart_onCombinedChange_19_listener($event) { return ctx.updateFunctionsCombinations($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("started", function HomeComponent_Template_div_started_21_listener() { ctx.moving = "scattergl"; return ctx.last = "none"; })("stopped", function HomeComponent_Template_div_stopped_21_listener() { ctx.moving = "none"; return ctx.last = "scattergl"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "app-scattergl", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onAreaSelect", function HomeComponent_Template_app_scattergl_onAreaSelect_22_listener($event) { return ctx.onAreaSelected($event); })("removeAreaSelection", function HomeComponent_Template_app_scattergl_removeAreaSelection_22_listener() { return ctx.onHighlightRemoved(); })("onParamSelected", function HomeComponent_Template_app_scattergl_onParamSelected_22_listener($event) { return ctx.updateScattergl($event); })("onTimeBoundsChanged", function HomeComponent_Template_app_scattergl_onTimeBoundsChanged_22_listener($event) { return ctx.updateScattergl($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("started", function HomeComponent_Template_div_started_24_listener() { ctx.moving = "alerts"; return ctx.last = "none"; })("stopped", function HomeComponent_Template_div_stopped_24_listener() { ctx.moving = "none"; return ctx.last = "alerts"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "app-alerts", null, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "app-filters", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filtersDefined", function HomeComponent_Template_app_filters_filtersDefined_28_listener($event) { return ctx.onFiltersDefined($event); })("filtersRemoved", function HomeComponent_Template_app_filters_filtersRemoved_28_listener() { return ctx.onFiltersRemoved(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "app-time-bar", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("chartTimeChanged", function HomeComponent_Template_app_time_bar_chartTimeChanged_35_listener($event) { return ctx.onChartTimeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isChartVisible("bar") ? ctx.chartZindex("bar") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isChartVisible("line") ? ctx.chartZindex("line") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.isHeatmatrixSelected() ? "network-heatmatrix-window" : "network-timeseries-window");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isChartVisible("net") ? ctx.chartZindex("net") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isChartVisible("net") ? ctx.chartZindex("net") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isChartVisible("scattergl") ? ctx.chartZindex("scattergl") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isChartVisible("alerts") ? ctx.chartZindex("alerts") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.isConfigVisible("filters") ? ctx.chartZindex("filters") : "-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.t0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.t1, " ");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _widgets_map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"], _bars_charts_bar_charts_bar_component__WEBPACK_IMPORTED_MODULE_7__["ChartsBarComponent"], angular2_draggable__WEBPACK_IMPORTED_MODULE_8__["AngularDraggableDirective"], _widgets_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__["BarChartComponent"], _widgets_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_10__["LineChartComponent"], _widgets_network_network_component__WEBPACK_IMPORTED_MODULE_11__["NetworkComponent"], _widgets_functions_chart_functions_chart_component__WEBPACK_IMPORTED_MODULE_12__["FunctionsChartComponent"], _widgets_scattergl_scattergl_component__WEBPACK_IMPORTED_MODULE_13__["ScatterglComponent"], _widgets_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_14__["AlertsComponent"], _widgets_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__["FiltersComponent"], _bars_time_bar_time_bar_component__WEBPACK_IMPORTED_MODULE_16__["TimeBarComponent"]], styles: [".home[_ngcontent-%COMP%] {\n  --split: 1.0;\n  height: calc(100% - 120px);\n}\n\n.home-map-row[_ngcontent-%COMP%] {\n  height: calc(var(--split) * 100%);\n}\n\n.home-chart-row[_ngcontent-%COMP%] {\n  height: calc((1.0 - var(--split)) * 100%);\n}\n\n.widget[_ngcontent-%COMP%] {\n  z-index: 100;\n\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  box-shadow: 0 5px 15px rgb(0 0 0 / 50%);\n\n  padding: 10px;\n\n  background-color: white;\n  opacity: 0.95;\n}\n\n.charts-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #bfbfbf;\n  box-shadow: 2px 3px 5px #ccc;\n\n  background-color: #fff;\n  opacity: 0.9;\n\n  top: 130px;\n  right: 10px;\n}\n\n.time-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #bfbfbf;\n  box-shadow: 2px 3px 5px #ccc;\n  background-color: #fff;\n  opacity: 0.9;\n  bottom: 30px;\n  right: 10px;\n}\n\n.dates[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1001;\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 2px 2px 2px 2px;\n  border-color: #bfbfbf;\n  background-color: #fff;\n  opacity: 0.9;\n  right: 410px;\n  width: 298px;\n  height: 38px;\n  top: 130px;\n  box-shadow: 2px 3px 5px #ccc;\n}\n\n.date[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 100%;\n  font-size: 15px;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 600;\n  line-height: 34px;\n}\n\n.configs-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n\n  border-radius: 5px;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #bfbfbf;\n  box-shadow: 2px 3px 5px #ccc;\n\n  background-color: #fff;\n  opacity: 0.9;\n\n  bottom: 20px;\n  left: 10px;\n}\n\n.bar-chart-window[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 180px;\n  right: 10px;\n  width: 516px;\n  height: 294px;\n  z-index: -10;\n}\n\n.line-chart-window[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 480px;\n  right: 10px;\n  width: 516px; \n  height: 294px;\n  z-index: -10;\n}\n\n.scattergl-window[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 129px;\n  right: 532px;\n  width: 516px;\n  height: 410px;\n  z-index: -10;\n}\n\n.network-heatmatrix-window[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 129px;\n  right: 546px;\n  width: 622px;\n  height: 778px;\n  z-index: -10;\n}\n\n.network-timeseries-window[_ngcontent-%COMP%], .functions-chart-window[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 129px;\n  right: 532px;\n  width: 620px;\n  height: 470px;\n  z-index: -10;\n}\n\n.functions-chart-window[_ngcontent-%COMP%] {\n  right: 10px !important;\n  top: 174px !important;\n  width: 712px !important;\n}\n\n@media screen and (min-width: 1024px) {\n  .bar-chart-window[_ngcontent-%COMP%] {\n    width: 600px;\n    height: 342px;\n  }\n  \n  .line-chart-window[_ngcontent-%COMP%] {\n    width: 600px;\n    top: 530px;\n    height: 342px;\n  }\n  \n  .scattergl-window[_ngcontent-%COMP%] {\n    width: 600px;\n    right: 620px;\n    height: 463px;\n  }\n  .network-heatmatrix-window[_ngcontent-%COMP%] {\n    width: 740px;\n    right: 636px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxZQUFZOztFQUVaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsdUNBQXVDOztFQUV2QyxhQUFhOztFQUViLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNEJBQTRCOztFQUU1QixzQkFBc0I7RUFDdEIsWUFBWTs7RUFFWixVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDViw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTs7RUFFYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsNEJBQTRCOztFQUU1QixzQkFBc0I7RUFDdEIsWUFBWTs7RUFFWixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCOztBQUlBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7RUFDZjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcbiAgLS1zcGxpdDogMS4wO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMHB4KTtcbn1cblxuLmhvbWUtbWFwLXJvdyB7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1zcGxpdCkgKiAxMDAlKTtcbn1cblxuLmhvbWUtY2hhcnQtcm93IHtcbiAgaGVpZ2h0OiBjYWxjKCgxLjAgLSB2YXIoLS1zcGxpdCkpICogMTAwJSk7XG59XG5cbi53aWRnZXQge1xuICB6LWluZGV4OiAxMDA7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiKDAgMCAwIC8gNTAlKTtcblxuICBwYWRkaW5nOiAxMHB4O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjk1O1xufVxuXG4uY2hhcnRzLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjYmZiZmJmO1xuICBib3gtc2hhZG93OiAycHggM3B4IDVweCAjY2NjO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuOTtcblxuICB0b3A6IDEzMHB4O1xuICByaWdodDogMTBweDtcbn1cblxuLnRpbWUtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjYmZiZmJmO1xuICBib3gtc2hhZG93OiAycHggM3B4IDVweCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjk7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXRlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMnB4IDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjYmZiZmJmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjk7XG4gIHJpZ2h0OiA0MTBweDtcbiAgd2lkdGg6IDI5OHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIHRvcDogMTMwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNXB4ICNjY2M7XG59XG5cbi5kYXRlIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG59XG5cblxuLmNvbmZpZ3MtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcblxuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6ICNiZmJmYmY7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNXB4ICNjY2M7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC45O1xuXG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMTBweDtcbn1cblxuXG4uYmFyLWNoYXJ0LXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxODBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA1MTZweDtcbiAgaGVpZ2h0OiAyOTRweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG4ubGluZS1jaGFydC13aW5kb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDgwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB3aWR0aDogNTE2cHg7IFxuICBoZWlnaHQ6IDI5NHB4O1xuICB6LWluZGV4OiAtMTA7XG59XG5cbi5zY2F0dGVyZ2wtd2luZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyOXB4O1xuICByaWdodDogNTMycHg7XG4gIHdpZHRoOiA1MTZweDtcbiAgaGVpZ2h0OiA0MTBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG4ubmV0d29yay1oZWF0bWF0cml4LXdpbmRvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMjlweDtcbiAgcmlnaHQ6IDU0NnB4O1xuICB3aWR0aDogNjIycHg7XG4gIGhlaWdodDogNzc4cHg7XG4gIHotaW5kZXg6IC0xMDtcbn1cblxuLm5ldHdvcmstdGltZXNlcmllcy13aW5kb3csIC5mdW5jdGlvbnMtY2hhcnQtd2luZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEyOXB4O1xuICByaWdodDogNTMycHg7XG4gIHdpZHRoOiA2MjBweDtcbiAgaGVpZ2h0OiA0NzBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG4uZnVuY3Rpb25zLWNoYXJ0LXdpbmRvdyB7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogMTc0cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDcxMnB4ICFpbXBvcnRhbnQ7XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJhci1jaGFydC13aW5kb3cge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDM0MnB4O1xuICB9XG4gIFxuICAubGluZS1jaGFydC13aW5kb3cge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICB0b3A6IDUzMHB4O1xuICAgIGhlaWdodDogMzQycHg7XG4gIH1cbiAgXG4gIC5zY2F0dGVyZ2wtd2luZG93IHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgcmlnaHQ6IDYyMHB4O1xuICAgIGhlaWdodDogNDYzcHg7XG4gIH1cbiAgLm5ldHdvcmstaGVhdG1hdHJpeC13aW5kb3cge1xuICAgIHdpZHRoOiA3NDBweDtcbiAgICByaWdodDogNjM2cHg7XG4gIH1cbn0iXX0= */"] });


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

/***/ "Fyeg":
/*!**********************************!*\
  !*** ./src/assets/servicos.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"airbnb\",\"cod\":1,\"imageDim\":[32,32],\"imagePath\":\"assets/servicos/airbnb.png\"},{\"id\":\"alibaba\",\"cod\":2,\"imageDim\":[63,32],\"imagePath\":\"assets/servicos/alibaba.png\"},{\"id\":\"aliexpress\",\"cod\":3,\"imageDim\":[32,32],\"imagePath\":\"assets/servicos/aliexpress.png\"},{\"id\":\"amazon\",\"cod\":4,\"imageDim\":[31,32],\"imagePath\":\"assets/servicos/amazon.png\"},{\"id\":\"apple\",\"cod\":5,\"imageDim\":[26,32],\"imagePath\":\"assets/servicos/apple.png\"},{\"id\":\"aws\",\"cod\":6,\"imageDim\":[53,32],\"imagePath\":\"assets/servicos/aws.png\"},{\"id\":\"azure\",\"cod\":7,\"imageDim\":[33,32],\"imagePath\":\"assets/servicos/azure.png\"},{\"id\":\"bing\",\"cod\":8,\"imageDim\":[25,32],\"imagePath\":\"assets/servicos/bing.png\"},{\"id\":\"rnp integra\",\"cod\":9,\"imageDim\":[38,32],\"imagePath\":\"assets/servicos/cafe.png\"},{\"id\":\"discord\",\"cod\":10,\"imageDim\":[42,32],\"imagePath\":\"assets/servicos/discord.png\"},{\"id\":\"disney\",\"cod\":11,\"imageDim\":[77,32],\"imagePath\":\"assets/servicos/disney.png\"},{\"id\":\"dropbox\",\"cod\":12,\"imageDim\":[34,32],\"imagePath\":\"assets/servicos/dropbox.png\"},{\"id\":\"eduplay\",\"cod\":13,\"imageDim\":[21,32],\"imagePath\":\"assets/servicos/eduplay.png\"},{\"id\":\"facebook\",\"cod\":14,\"imageDim\":[32,32],\"imagePath\":\"assets/servicos/facebook.png\"},{\"id\":\"globoplay\",\"cod\":15,\"imageDim\":[147,32],\"imagePath\":\"assets/servicos/globoplay.png\"},{\"id\":\"google\",\"cod\":16,\"imageDim\":[32,32],\"imagePath\":\"assets/servicos/google.png\"},{\"id\":\"govbr\",\"cod\":17,\"imageDim\":[88,32],\"imagePath\":\"assets/servicos/govbr.png\"},{\"id\":\"itau\",\"cod\":18,\"imageDim\":[32,32],\"imagePath\":\"assets/servicos/itau.png\"},{\"id\":\"mercado livre\",\"cod\":19,\"imageDim\":[46,32],\"imagePath\":\"assets/servicos/mercadolivre.png\"},{\"id\":\"microsoft\",\"cod\":20,\"imageDim\":[32,32],\"imagePath\":\"assets/servicos/microsoft.png\"},{\"id\":\"netflix\",\"cod\":21,\"imageDim\":[18,32],\"imagePath\":\"assets/servicos/netflix.png\"},{\"id\":\"office\",\"cod\":22,\"imageDim\":[27,32],\"imagePath\":\"assets/servicos/office.png\"},{\"id\":\"rnp\",\"cod\":23,\"imageDim\":[32,32],\"imagePath\":\"assets/servicos/rnp.png\"},{\"id\":\"spotify\",\"cod\":24,\"imageDim\":[32,32],\"imagePath\":\"assets/servicos/spotify.png\"},{\"id\":\"tiktok\",\"cod\":25,\"imageDim\":[26,32],\"imagePath\":\"assets/servicos/tiktok.png\"},{\"id\":\"trivago\",\"cod\":26,\"imageDim\":[106,32],\"imagePath\":\"assets/servicos/trivago.png\"},{\"id\":\"twitter\",\"cod\":27,\"imageDim\":[39,32],\"imagePath\":\"assets/servicos/twitter.png\"},{\"id\":\"vivo\",\"cod\":28,\"imageDim\":[23,32],\"imagePath\":\"assets/servicos/vivo.png\"},{\"id\":\"whatsapp\",\"cod\":29,\"imageDim\":[31,32],\"imagePath\":\"assets/servicos/whatsapp.png\"},{\"id\":\"windows\",\"cod\":30,\"imageDim\":[32,32],\"imagePath\":\"assets/servicos/windows.png\"},{\"id\":\"youtube\",\"cod\":31,\"imageDim\":[45,32],\"imagePath\":\"assets/servicos/youtube.png\"}]");

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
/* harmony import */ var _assets_parameters_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/parameters.json */ "gxC8");
var _assets_parameters_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/parameters.json */ "gxC8", 1);
/* harmony import */ var _assets_servicos_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/servicos.json */ "Fyeg");
var _assets_servicos_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/servicos.json */ "Fyeg", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




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
         * Estabelece carregamento de dados para clientes
         */
        const client_option = {
            key: "client_option",
            value: "viaipe"
        };
        this.setGlobal(client_option);
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
            value: 'avg_in'
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
         * Guarda a seleção de from do functions chart.
         */
        const functions_value = {
            key: "functions_value",
            service: 0,
            value: "all"
        };
        this.setGlobal(functions_value);
        /**
         * Guarda a seleção de average, max, min selecionado no functions chart.
         */
        const functions_param = {
            key: "functions_param",
            value: 'cdf'
        };
        this.setGlobal(functions_param);
        /**
         * Guarda a seleção dos parametros para a heatmatrix
         */
        const heatmatrix_param = {
            key: "heatmatrix_param",
            value: "11",
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
         * Guarda os serviços e seus nomes.
         */
        const companies_services = {
            key: 'services',
            value: _assets_servicos_json__WEBPACK_IMPORTED_MODULE_2___namespace
        };
        this.setGlobal(companies_services);
        /**
         * Guarda tipo selecionado popxpop ou popxservices p heatmatrix
         */
        const data_type = {
            key: 'data_type',
            value: 'popxpop'
        };
        this.setGlobal(data_type);
        /**
         * Guarda os parâmetros a serem utilizados para o scattergl no multiselect
         */
        const scattergl_params = {
            key: 'scattergl_params',
            value: _assets_parameters_json__WEBPACK_IMPORTED_MODULE_1___namespace
        };
        this.setGlobal(scattergl_params);
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
GlobalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: GlobalService, factory: GlobalService.ɵfac, providedIn: 'root' });


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
    clickedCheck() {
        const clicked = this.global.getGlobal("clicked_element").value;
        if (clicked > -1)
            return true;
        else
            return false;
    }
}
ChartsBarComponent.ɵfac = function ChartsBarComponent_Factory(t) { return new (t || ChartsBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"])); };
ChartsBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartsBarComponent, selectors: [["app-charts-bar"]], decls: 13, vars: 13, consts: [[1, "row", 3, "click"], ["type", "button", 1, "btn", "btn-custom", 3, "click"], ["id", "alerts", 1, "fas", "fa-exclamation", "fa-lg"], ["type", "button", 1, "btn", "btn-custom", 3, "disabled", "click"], [1, "fas", "fa-filter", "fa-lg"], [1, "fas", "fa-chart-bar", "fa-lg"], [1, "fas", "fa-line-chart", "fa-lg"], [1, "fas", "fa-project-diagram", "fa-lg"], [1, "fas", "fa-braille", "fa-lg"]], template: function ChartsBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_div_click_0_listener() { return ctx.setChartsPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_1_listener() { return ctx.toggleChartVisibility("alerts"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_3_listener() { return ctx.toggleConfigVisibility("filters"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_5_listener() { return ctx.toggleChartVisibility("bar"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_7_listener() { return ctx.toggleChartVisibility("line"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_9_listener() { return ctx.toggleChartVisibility("net"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChartsBarComponent_Template_button_click_11_listener() { return ctx.toggleChartVisibility("scattergl"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.setAlertColor());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.clickedCheck());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.isConfigVisible("filters") ? "#243d8f" : "#000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.isChartVisible("bar") ? "#243d8f" : "#000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.isChartVisible("line") ? "#243d8f" : "#000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.isChartVisible("net") ? "#243d8f" : "#000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.isChartVisible("scattergl") ? "#243d8f" : "#000");
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
/* harmony import */ var _assets_viaipe_metadata_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/viaipe_metadata.json */ "6aQK");
var _assets_viaipe_metadata_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/viaipe_metadata.json */ "6aQK", 1);
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/api.service */ "eokG");
/* harmony import */ var src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/util.service */ "Cs7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

// inclusão do metadado do viaipe







const _c0 = ["clientsInput"];
function FiltersComponent_div_0_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "option", 22);
} if (rf & 2) {
    const el_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", el_r3.caption);
} }
function FiltersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clients");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FiltersComponent_div_0_Template_input_keyup_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.updateClientSelection($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "datalist", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FiltersComponent_div_0_option_11_Template, 1, 1, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FiltersComponent_div_0_Template_input_keyup_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.updateDate("start", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FiltersComponent_div_0_Template_input_keyup_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateDate("end", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onClickRefresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.saveFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_div_0_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeFilters(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_div_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggleFiltersVisibility(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.clients.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.getStartDate());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.getEndDate());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r0.refreshAvailable() ? "#F97432" : "#AAAAAA");
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
        console.log(this.clients);
    }
    toggleFiltersVisibility() {
        const obj = this.global.getGlobal('widgets_config');
        obj.value['filters'] = !obj.value['filters'];
        this.global.setGlobal(obj);
    }
    setClients(client) {
        //@ts-ignore
        this.clients = { caption: `Clientes do POP ${client.toUpperCase()}`, items: _assets_viaipe_metadata_json__WEBPACK_IMPORTED_MODULE_1__["pops"][client]['clientes'] };
    }
    removeClients() {
        this.clients = [];
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
    removeFilters(clientsInput) {
        clientsInput.value = '';
        let t0 = this.global.getGlobal("t0_filter");
        let start = new Date(t0.value * 1000);
        this.dateRange['start'] = start.toISOString().slice(0, -8).replace('T', ' # ');
        let t1 = this.global.getGlobal("t1_filter");
        let end = new Date(t1.value * 1000);
        this.dateRange['end'] = end.toISOString().slice(0, -8).replace('T', ' # ');
        this.clientsSelection = [];
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
    clickedCheck() {
        const clicked = this.global.getGlobal("clicked_element").value;
        if (clicked > -1)
            return true;
        else
            return false;
    }
}
FiltersComponent.ɵfac = function FiltersComponent_Factory(t) { return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"])); };
FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiltersComponent, selectors: [["app-filters"]], viewQuery: function FiltersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clientsInput = _t.first);
    } }, outputs: { filtersDefined: "filtersDefined", filtersRemoved: "filtersRemoved" }, decls: 1, vars: 1, consts: [["class", "modal-content", 4, "ngIf"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", "ng-binding"], [1, "modal-body"], [1, "row"], ["type", "email", "list", "clientes", "multiple", "", "title", "", "pattern", "", 2, "width", "100%", 3, "keyup"], ["clientsInput", ""], ["id", "clientes"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", 2, "height", "5px"], [1, "input-group", "input-daterange"], ["type", "text", 1, "form-control", 3, "value", "keyup"], [1, "input-group-addon"], [1, "input-group-addon", 2, "padding", "0"], [1, "btn", "btn-filter", 3, "click"], [1, "fas", "fa-sync-alt", "fa-lg"], [1, "row", 2, "height", "20px"], [1, "modal-footer", 2, "padding-right", "0"], ["type", "button", 1, "btn", "btn-primary-color", 3, "click"], ["type", "button", 1, "btn", "btn-delete-color", 3, "click"], ["type", "button", 1, "btn", "btn-secondary-color", 3, "click"], [3, "value"]], template: function FiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FiltersComponent_div_0_Template, 32, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.clickedCheck());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"]], styles: [".btn-filter[_ngcontent-%COMP%]{\n  padding: 6px 12px;\n  color: #AAAAAA;\n  background-color: #fff;\n  outline-color: #fff !important;\n  height: 32px !important;;\n}\n\n.btn-filter[_ngcontent-%COMP%]:hover {\n  background-color: #eee !important;\n  outline-color: #eee !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLFlBQVk7QUFDZCIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWZpbHRlcntcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGNvbG9yOiAjQUFBQUFBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdXRsaW5lLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzJweCAhaW1wb3J0YW50Oztcbn1cblxuLmJ0bi1maWx0ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4iXX0= */"] });


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
/*! exports provided: Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var d3_tip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-tip */ "agSX");


class Network {
    constructor(chartDiv) {
        // chart data
        this._data = null;
        // capitals
        this._capitals = null;
        // services
        this._services = null;
        // params
        this._isTime = false;
        this._invert = false;
        this._capitalId = 0;
        // Svg element
        this._svgCanvas = null;
        // Group element
        this._svgGroup = null;
        // margin object
        this._margin = { top: 40, right: 10, bottom: 50, left: 120 };
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
    setData(data, capitals, isTime = false, invert = false, capitalId, services) {
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
            .style('fill', '#8c8c8c')
            .style('font-size', '15px');
        // axis label groups
        this._svgCanvas
            .append('text')
            .attr('class', 'axis axis--x--label')
            .attr("transform", "translate(" + (this._width / 1.6) + " ," + (this._height + this._margin.bottom + 37) + ")")
            .style("text-anchor", "middle")
            .style('fill', '#8c8c8c')
            .style('font-size', '15px');
        this._svgCanvas
            .append('text')
            .attr('class', 'axis axis--y--label')
            .attr("transform", "rotate(-90)")
            .attr("y", 10)
            .attr("x", 0 - (this._height / 1.5))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .style('fill', '#8c8c8c')
            .style('font-size', '15px');
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
        const ids = this._data.map((d) => (this._isTime && this._services != null) ? this.getId(d[0], 'services') : this.getId(d[0], 'pop'));
        let labelsOut = Array.from(new Set(ids));
        let labelsIn;
        if (this._services == null) {
            labelsIn = labelsOut;
        }
        else {
            const services = this._data.map((d) => this.getId(d[0], 'services'));
            labelsIn = Array.from(new Set(services));
        }
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
            .style('font-size', '15px')
            .style('text-anchor', 'end')
            .style('pointer-events', 'auto')
            .style('', 'default')
            .attr('dx', '-0.1em')
            .attr('dy', '+0.3em')
            .attr('transform', 'rotate(-25)');
        this._yAxis.scale(this._inScale).tickSizeOuter(0);
        if (this._services == null) {
            this._svgGroup.select('.axis--y').call(this._yAxis)
                .selectAll('text')
                .style('font-size', '15px')
                .style('pointer-events', 'auto');
        }
        else {
            this._svgGroup.select('.axis--y').call(this._yAxis)
                .selectAll("text")
                .remove();
            this._svgGroup.select('.axis--y').call(this._yAxis)
                .selectAll('.tick')
                .data(this._services)
                .append("svg:image")
                .attr("xlink:href", (d) => d["imagePath"])
                .attr("width", (d) => d["imageDim"][0] / 2)
                .attr("height", (d) => d["imageDim"][1] / 2)
                .attr("x", (d) => -d["imageDim"][0] / 2 - 15)
                .attr("y", -8);
        }
    }
    updateRectangles() {
        // @ts-ignore
        const tip = Object(d3_tip__WEBPACK_IMPORTED_MODULE_1__["default"])()
            .attr('class', 'd3-tip').html((d) => {
            return `${(d[2]).toFixed(1)}`;
        });
        this._svgCanvas.call(tip);
        const rects = this._svgGroup.selectAll(".rect_group").data([null]).join('g').attr('class', 'rect_group');
        if (this._services == null) {
            rects.selectAll("rect")
                .data(this._data)
                .join("rect")
                .attr("x", (d) => this._outScale(this._isTime ? this.valToDate(d[1]) : this.getId(d[1], 'pop')))
                .attr("y", (d) => this._inScale(this.getId(d[0], 'pop')))
                .attr("width", this._outScale.bandwidth())
                .attr("height", this._inScale.bandwidth())
                .attr("fill", (d) => this.valToColor(d))
                .attr("id", (d, i) => i)
                .on('mouseover', (e, d) => tip.show(d, e.target))
                .on('mouseout', (e, d) => tip.hide(d, e.target));
        }
        else {
            rects.selectAll("rect")
                .data(this._data)
                .join("rect")
                .attr("x", (d) => this._outScale(this._isTime ? this.valToDate(d[1]) : this.getId(d[0], 'pop')))
                .attr("y", (d) => this._inScale(this._isTime ? this.getId(d[0], 'services') : this.getId(d[1], 'services')))
                .attr("width", this._outScale.bandwidth())
                .attr("height", this._inScale.bandwidth())
                .attr("fill", (d) => this.valToColor(d))
                .attr("id", (d, i) => i)
                .on('mouseover', (e, d) => tip.show(d, e.target))
                .on('mouseout', (e, d) => tip.hide(d, e.target));
        }
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
            const popId = this.getId(this._capitalId, 'pop');
            this._xAxisLabel = 'Tempo';
            if (this._services == null) {
                this._yAxisLabel = 'Pop de chegada';
                this._title = 'Medição do pop ' + popId + ' para os demais pops ao longo do tempo';
            }
            else {
                this._yAxisLabel = 'Serviço';
                this._title = 'Medição do pop ' + popId + ' para os demais serviços ao longo do tempo';
            }
        }
        else {
            this._capitalId = 0;
            if (this._services == null) {
                this._xAxisLabel = 'Pop de chegada';
                this._yAxisLabel = 'Pop de saída';
                this._title = 'Medição entre pops';
            }
            else {
                this._xAxisLabel = 'Pop';
                this._yAxisLabel = 'Serviço';
                this._title = 'Medição de pops e serviços';
            }
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
    getId(id, type) {
        if (type == 'pop') {
            return this._capitals.filter((c) => c.cod === id)[0].id.toUpperCase();
        }
        else {
            return this._services.filter((c) => c.cod === id)[0].id.toUpperCase();
        }
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
        return data.toLocaleString('en-GB', { dateStyle: 'short', timeZone: 'UTC' });
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["netChart"];
function NetworkComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NetworkComponent_div_10_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onParamChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "optgroup", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Atraso de ida e volta (RTT - average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Atraso de ida e volta (RTT - min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Atraso de ida e volta (RTT - max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Histogram-ttl-reverse (average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Histogram-ttl-reverse (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Histogram-ttl-reverse (max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Packet-loss-rate-bidir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "optgroup", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Atraso unidirecional (owdelay - average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Atraso unidirecional (owdelay - min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Atraso unidirecional (owdelay - max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Histogram-ttl (average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Histogram-ttl (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Histogram-ttl (max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Packet-loss-rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "optgroup", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Throughput (BBR)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "optgroup", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Throughput (CUBIC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "optgroup", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Packet-trace (average)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Packet-trace (min)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Packet-trace (max)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.networkChange);
} }
function NetworkComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NetworkComponent_div_11_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onValueChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Average");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NetworkComponent {
    constructor(global, util) {
        this.global = global;
        this.util = util;
        this.heatMatrixValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.heatMatrixParamChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //capitals select list
        this.selectedItems = [];
        this.selectedItemsRoot = [];
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
        this.multiSelectPlaceholder = 'Estados';
    }
    ngOnInit() {
        this.netChart = new _network__WEBPACK_IMPORTED_MODULE_1__["Network"](this.netDiv.nativeElement);
        this.setMultipleSelectConfiguration('popxpop');
    }
    drawChart(data, capitals, clicked = -1, invert = false, dataType, services = null) {
        const capitalId = clicked;
        this.netChart.setData(data, capitals, clicked >= 0, invert, capitalId, services);
        this.netChart.render();
    }
    onValueChange(event) {
        const heatmatrix_value = {
            key: "heatmatrix_value",
            value: event.target.value
        };
        this.global.setGlobal(heatmatrix_value);
        this.heatMatrixValueChanged.emit();
    }
    onParamChange(event) {
        const heatmatrix_param = {
            key: "heatmatrix_param",
            value: event.target.value
        };
        this.global.setGlobal(heatmatrix_param);
        this.heatMatrixParamChanged.emit();
    }
    onChartDataTypeChange(event) {
        const data_type = {
            key: "data_type",
            value: event.target.value
        };
        this.global.setGlobal(data_type);
        this.setMultipleSelectConfiguration(event.target.value);
        this.heatMatrixValueChanged.emit();
    }
    onTimeBoundsChange() {
        this.heatMatrixValueChanged.emit();
    }
    setMultipleSelectConfiguration(type) {
        //multiselect
        this.dropdownList = [];
        this.dropdownSettings = {};
        //setando as configuracoes do multiselect
        if (type == 'popxpop') {
            const capitals = this.global.getGlobal("state_capitals").value.default;
            this.multiSelectPlaceholder = 'Estados';
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
        else {
            const services = this.global.getGlobal("services").value.default;
            this.multiSelectPlaceholder = 'Serviços';
            for (let i = 0; i < services.length; i++) {
                let id = services[i].id.toUpperCase();
                let cod = services[i].cod;
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
    }
    networkToggle() {
        this.networkChange = !this.networkChange;
    }
    isCapitalSelected() {
        return (this.global.getGlobal("clicked_element").value > 0);
    }
    isPopSelected() {
        return (this.global.getGlobal("data_type").value == 'popxpop');
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
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.netDiv = _t.first);
    } }, outputs: { heatMatrixValueChanged: "heatMatrixValueChanged", heatMatrixParamChanged: "heatMatrixParamChanged" }, decls: 12, vars: 2, consts: [[1, "fill", "network-chart", 2, "z-index", "99", "opacity", "1", "display", "inline-block"], ["netChart", ""], [2, "display", "flex", "margin-top", "27px", "padding-bottom", "7px", "width", "100%", "border-top", "1px solid #eee", "left", "10px", "font-size", "11px !important"], ["id", "code-select-box", 1, "code-select"], ["name", "type", 1, "network-select", 3, "change"], ["value", "popxpop"], ["value", "popxservice"], ["id", "code-select-box", "class", "code-select", 4, "ngIf"], ["id", "codfield-select-box", "class", "codfield-select", 4, "ngIf"], ["name", "code", 1, "network-select", 3, "disabled", "change"], ["label", "Atraso e perda"], ["value", "11"], ["value", "12"], ["value", "13"], ["value", "16"], ["value", "17"], ["value", "18"], ["value", "24"], ["label", "Atraso unidirecional"], ["value", "41"], ["value", "42"], ["value", "43"], ["value", "46"], ["value", "47"], ["value", "48"], ["value", "54"], ["label", "BANDA (BBR)"], ["value", "77"], ["label", "BANDA (CUBIC)"], ["value", "107"], ["label", "TraceRoute"], ["value", "131"], ["value", "132"], ["value", "133"], ["id", "codfield-select-box", 1, "codfield-select"], ["name", "codfield", 1, "network-select", 3, "change"], ["value", "h_avg"], ["value", "h_max"], ["value", "h_min"]], template: function NetworkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NetworkComponent_Template_select_change_5_listener($event) { return ctx.onChartDataTypeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pop x Pop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pop x Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NetworkComponent_div_10_Template, 45, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NetworkComponent_div_11_Template, 8, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPopSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPopSelected());
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".network-chart[_ngcontent-%COMP%] {\n    height: 662px;\n}\n\n.timeseries-chart[_ngcontent-%COMP%] {\n    height: 380px;\n    top: 10px;\n    width: 578px;\n}\n\n.network-select[_ngcontent-%COMP%] {\n    font-size: 9px;\n}\n\n.code-select[_ngcontent-%COMP%] {\n    width: 164px;\n    margin-top: 7px;\n    margin-left: 17px;\n}\n\n.codfield-select[_ngcontent-%COMP%] {\n    width: 71px;\n    margin-top: 7px;\n    margin-left: 17px;\n}\n\n.chart-select[_ngcontent-%COMP%] {\n    width: 86px;\n    margin-top: 7px;\n    margin-left: 17px;\n}\n\n@media screen and (min-width: 1024px) {\n\n    .network-chart[_ngcontent-%COMP%] {\n        height: 662px;\n    }\n\n    .network-select[_ngcontent-%COMP%] {\n        font-size: 11px;\n    }\n    \n    .code-select[_ngcontent-%COMP%] {\n        width: 192px;\n    }\n    \n    .codfield-select[_ngcontent-%COMP%] {\n        width: 79px;\n    }\n\n    .chart-select[_ngcontent-%COMP%] {\n        width: 97px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldHdvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoibmV0d29yay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldHdvcmstY2hhcnQge1xuICAgIGhlaWdodDogNjYycHg7XG59XG5cbi50aW1lc2VyaWVzLWNoYXJ0IHtcbiAgICBoZWlnaHQ6IDM4MHB4O1xuICAgIHRvcDogMTBweDtcbiAgICB3aWR0aDogNTc4cHg7XG59XG5cbi5uZXR3b3JrLXNlbGVjdCB7XG4gICAgZm9udC1zaXplOiA5cHg7XG59XG5cbi5jb2RlLXNlbGVjdCB7XG4gICAgd2lkdGg6IDE2NHB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcbn1cblxuLmNvZGZpZWxkLXNlbGVjdCB7XG4gICAgd2lkdGg6IDcxcHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xufVxuXG4uY2hhcnQtc2VsZWN0IHtcbiAgICB3aWR0aDogODZweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuXG4gICAgLm5ldHdvcmstY2hhcnQge1xuICAgICAgICBoZWlnaHQ6IDY2MnB4O1xuICAgIH1cblxuICAgIC5uZXR3b3JrLXNlbGVjdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgXG4gICAgLmNvZGUtc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDE5MnB4O1xuICAgIH1cbiAgICBcbiAgICAuY29kZmllbGQtc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDc5cHg7XG4gICAgfVxuXG4gICAgLmNoYXJ0LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA5N3B4O1xuICAgIH1cbn0iXX0= */"] });


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
    } }, styles: [".btn-custom[_ngcontent-%COMP%] {\n    color: black;\n    background-color: #fff;\n    outline-color: #fff !important;\n    border-color: #fff !important;\n}\n  \n  \n  .btn-custom[_ngcontent-%COMP%]:hover {\n    background-color: #eee !important;\n    outline-color: #eee !important;\n    border-color: #eee !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7OztFQUdFO0lBQ0UsaUNBQWlDO0lBQ2pDLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoidGltZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY3VzdG9tIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBvdXRsaW5lLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4gIFxuICBcbiAgLmJ0bi1jdXN0b206aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "TL27":
/*!************************************************************!*\
  !*** ./src/app/widgets/functions-chart/functions-chart.ts ***!
  \************************************************************/
/*! exports provided: Functionschart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Functionschart", function() { return Functionschart; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "m0r1");

class Functionschart {
    constructor(canvas) {
        // capitals
        this.capitals = null;
        // services
        this.services = null;
        // labels 
        this.labels = null;
        this.data = null;
        this.isTimeSeries = false;
        this.canvas = canvas;
        this.init();
    }
    //Configuração do grafico
    init() {
        const self = this;
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
                        title: {
                            display: true,
                            text: '',
                            font: {
                                size: 15
                            }
                        },
                        display: true,
                        position: "top",
                        labels: {
                            font: {
                                size: 15
                            }
                        }
                    },
                    title: {
                        display: true,
                        text: 'CDF',
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
                        type: 'linear',
                        display: true,
                        title: {
                            display: true,
                            text: 'Tempo (ms)',
                            font: {
                                size: 15
                            }
                        },
                        ticks: {
                            font: {
                                size: 15
                            },
                            callback: function (value, index, ticks) {
                                if (self.isTimeSeries) {
                                    //@ts-ignore
                                    return this.chart.config.data.datasets[0].data[value].x;
                                }
                                else
                                    return value;
                            }
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 15
                            }
                        },
                        display: true,
                        title: {
                            display: true,
                            text: 'F(X)',
                            font: {
                                size: 15
                            }
                        }
                    }
                }
            }
        });
    }
    //Modifica as configurações globais para os títulos
    setTitle(param, id) {
        if (id >= 0)
            this.chart.options.plugins.legend.title.text = `${param.toUpperCase()} ${this.getId(id, 'pop')}`;
        else
            this.chart.options.plugins.legend.title.text = `${param.toUpperCase()}`;
    }
    setCapitals(capitals) {
        this.capitals = capitals;
    }
    setServices(services) {
        this.services = services;
    }
    updateData(data, colorList, param) {
        const selectedValue = document.getElementById('functions-chart-select-value-options').value;
        let popOrService;
        (selectedValue == "popxpop") ? popOrService = 'pop' : popOrService = 'service';
        const datasets = this.chart.config.data.datasets;
        for (let i = 0; i < data.length; i++) {
            const newData = {
                label: (data[i][0] >= 0) ? this.getId(data[i][0], popOrService) : param.toUpperCase(),
                data: data[i][1][0][0],
                backgroundColor: colorList[i],
                borderColor: colorList[i],
                fill: false
            };
            datasets.push(newData);
        }
        this.chart.update();
    }
    updateCombinations(data, selectedParam) {
        const datasets = this.chart.config.data.datasets;
        for (let i = 0; i < data.length; i++) {
            const color = this.getRandomColor();
            const newData = {
                label: `${data[i][0].idPop} - ${data[i][0].idService}`,
                data: data[i][1][0][0],
                backgroundColor: color,
                borderColor: color,
                fill: false
            };
            datasets.push(newData);
        }
        this.chart.update();
    }
    getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    getId(id, type) {
        if (type == 'pop') {
            return this.capitals.filter((c) => c.cod === id)[0].id.toUpperCase();
        }
        else {
            return this.services.filter((c) => c.cod === id)[0].id.toUpperCase();
        }
    }
    clear() {
        this.chart.data.labels = [];
        this.chart.data.datasets = [];
        this.chart.options.plugins.legend.title.text = '';
        this.chart.config.options.scales.y.title.text = '';
        this.chart.update();
    }
    setConfig(selectedParam) {
        if (selectedParam == "timeseries") {
            this.isTimeSeries = true;
            this.chart.config.options.scales.x.title.text = 'Date';
            this.chart.config.options.scales.x.type = 'category';
        }
        else {
            this.isTimeSeries = false;
            this.chart.config.options.scales.x.title.text = 'Tempo (ms)';
            this.chart.config.options.scales.x.type = 'linear';
        }
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
    valToDate(d) {
        const data = new Date(1000 * d);
        //@ts-ignore
        return data.toLocaleString('en-US', { dateStyle: 'short', timeZone: 'UTC' });
    }
}


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
/* harmony import */ var _assets_viaipe_metadata_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/viaipe_metadata.json */ "6aQK");
var _assets_viaipe_metadata_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/viaipe_metadata.json */ "6aQK", 1);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-draw */ "INa4");
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_draw__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var leaflet_heatmap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet-heatmap */ "hUj/");
/* harmony import */ var leaflet_heatmap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet_heatmap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet_easybutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet-easybutton */ "mD1w");
/* harmony import */ var leaflet_easybutton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet_easybutton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/api.service */ "eokG");
/* harmony import */ var src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/util.service */ "Cs7S");

// inclusão de bibliotecas do angular

// inclusão do metadado do viaipe

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
        this.resetFunctionsChart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.setClients = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
        // lista com clientes para renderizar na tela
        this.clients = [];
        // Inicialização do layer do outlier
        this.outlierMarker = new leaflet__WEBPACK_IMPORTED_MODULE_3__["FeatureGroup"]();
        // Inicialização do layer dos clientes
        this.clientsMarkers = new leaflet__WEBPACK_IMPORTED_MODULE_3__["FeatureGroup"]();
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
            this.map = leaflet__WEBPACK_IMPORTED_MODULE_3__["map"](this.mapDiv.nativeElement).setView([lat, lng], zoom);
            // configuração do layer do mapa
            leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"]('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/light-v10',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(this.map);
            // adição dos layers clicáveis
            let capitalsMarkersLayers = new leaflet__WEBPACK_IMPORTED_MODULE_3__["FeatureGroup"]().addTo(this.map);
            const capitals = this.global.getGlobal('state_capitals').value.default;
            for (let i = 0; i < capitals.length; i++) {
                let capitalMarker = leaflet__WEBPACK_IMPORTED_MODULE_3__["marker"]({ lat: capitals[i].latitude, lng: capitals[i].longitude }, { icon: this.capitalMarkers(capitals[i].cod) }).on("mouseup", this.capitalClick.bind(this), false);
                capitalsMarkersLayers.addLayer(capitalMarker);
            }
            // Inicialização dos layers editaveis
            let editableLayers = new leaflet__WEBPACK_IMPORTED_MODULE_3__["FeatureGroup"]();
            this.map.addLayer(editableLayers);
            // Controles de desnho dos polígonos
            this.drawControl = new leaflet__WEBPACK_IMPORTED_MODULE_3__["Control"].Draw({
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
            this.map.on(leaflet__WEBPACK_IMPORTED_MODULE_3__["Draw"].Event.CREATED, (e) => {
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
            this.map.on(leaflet__WEBPACK_IMPORTED_MODULE_3__["Draw"].Event.DELETED, (e) => {
                // remover dataset
                e.layers.eachLayer((layer) => {
                    this.polyRemovedEvent.emit(layer);
                    this.removeLayer(layer);
                    this.updateUsedColors(false, layer.options.color);
                });
            });
            // Eventos do mapa: edição do polígono
            this.map.on(leaflet__WEBPACK_IMPORTED_MODULE_3__["Draw"].Event.EDITED, (e) => {
                // update dataset
                e.layers.eachLayer((layer) => {
                    this.removeLayer(layer);
                    this.listLayer.push(e.layer);
                    this.polyEditedEvent.emit(layer);
                });
            });
            // Eventos do mapa: movimentação do mapa
            this.map.on('moveend', () => {
                // adição e remoção dos layers baseado no zoom
                if (this.map.getZoom() < 9) {
                    this.map.addLayer(capitalsMarkersLayers);
                    this.map.removeLayer(this.clientsMarkers);
                    this.map.removeLayer(this.outlierMarker);
                }
                else {
                    this.map.removeLayer(this.clientsMarkers);
                    this.map.removeLayer(capitalsMarkersLayers);
                    this.clientsMarkers = new leaflet__WEBPACK_IMPORTED_MODULE_3__["FeatureGroup"]();
                    this.updateClients();
                }
                this.moveEndedEvent.emit();
            });
            const global = this.global;
            const self = this;
            leaflet__WEBPACK_IMPORTED_MODULE_3__["easyButton"]('fa-redo fa-lg', function (btn, map) {
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
                self.resetFunctionsChart.emit();
                self.setClients.emit('delete');
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
            if ((((layer instanceof leaflet__WEBPACK_IMPORTED_MODULE_3__["Rectangle"]) &&
                (this.listLayer[i] instanceof leaflet__WEBPACK_IMPORTED_MODULE_3__["Rectangle"])) ||
                ((layer instanceof leaflet__WEBPACK_IMPORTED_MODULE_3__["Polygon"]) &&
                    (this.listLayer[i] instanceof leaflet__WEBPACK_IMPORTED_MODULE_3__["Polygon"]))) &&
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
        return leaflet__WEBPACK_IMPORTED_MODULE_3__["marker"](latlng, { icon: this.clientIcon(color) });
    }
    /**
     * Formata o poligono dos bairros.
     */
    clientIcon(color) {
        return leaflet__WEBPACK_IMPORTED_MODULE_3__["divIcon"]({
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
        return leaflet__WEBPACK_IMPORTED_MODULE_3__["divIcon"]({
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
        this.resetFunctionsChart.emit();
        console.log(_assets_viaipe_metadata_json__WEBPACK_IMPORTED_MODULE_2___namespace);
        this.setClients.emit('add');
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
        const found = this.listClient.findIndex(d => {
            return d.cod === feature.properties.cod;
        });
        if (found >= 0) {
            layer.setIcon(this.clientIcon(this.listClient[found].color));
        }
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
            if (!b.contains(leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"](vlat, vlon)))
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
        this.removeCurrentHeatmapLayer();
        this.current_heatmapLayer = new HeatmapOverlay(this.heatCfg);
        this.current_heatmapLayer.setData(heatData);
        this.map.addLayer(this.current_heatmapLayer);
    }
    removeCurrentHeatmapLayer() {
        if (this.current_heatmapLayer != undefined)
            this.map.removeLayer(this.current_heatmapLayer);
    }
    /**
     * Função que adiciona os markers do filtro ao mapa
     */
    drawFilterMarkers(clientData) {
        const markerList = [];
        for (let i = 0; i < clientData.length; i++) {
            const lat = clientData[i].lat;
            const lng = clientData[i].lon;
            markerList.push(leaflet__WEBPACK_IMPORTED_MODULE_3__["circle"]([lat, lng], 250, { color: this.global.getGlobal('filter_color').value, fillColor: this.global.getGlobal('filter_color').value, opacity: 1, fillOpacity: 1 }));
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
    /**
     * Função para atualizar os clientes com movimento do mapa
     */
    updateClients() {
        const selectedClientOption = this.global.getGlobal("client_option").value;
        //carrega dados viaipe se for do viaipe
        if (selectedClientOption == "viaipe") {
            this.map.removeLayer(this.outlierMarker);
            this.clients = _assets_viaipe_metadata_json__WEBPACK_IMPORTED_MODULE_2__["pops"];
            //pega clientes que estão nos bounds da tela atual
            const clientsToShowOnScreen = [];
            Object.keys(this.clients).forEach((key) => {
                //@ts-ignore
                this.clients[key].clientes.map((client) => {
                    if (this.map.getBounds().contains((leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"](client.lat, client.lon)))) {
                        clientsToShowOnScreen.push(client);
                    }
                });
            });
            this.clients = clientsToShowOnScreen.map((d) => {
                return {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [d.lon, d.lat]
                    },
                    "properties": d
                };
            });
        }
        else {
            // carregamento do dado dos clientes
            this.clients = this.global.getGlobal('list_clientes').value.items.map((d) => {
                // adciona um marcador extra
                if (d.id === "OTHERS") {
                    const outColor = this.global.getGlobal('outlier_color').value;
                    this.outlierMarker.addLayer(leaflet__WEBPACK_IMPORTED_MODULE_3__["circle"]([d.lat, d.lon], 250, { color: outColor, fillColor: outColor, opacity: 1, fillOpacity: 1 }));
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
            this.map.addLayer(this.outlierMarker);
        }
        this.geojson = leaflet__WEBPACK_IMPORTED_MODULE_3__["geoJSON"](this.clients, { pointToLayer: this.clientMarker.bind(this), onEachFeature: this.onEachFeature.bind(this) });
        this.clientsMarkers.addLayer(this.geojson);
        this.map.addLayer(this.clientsMarkers);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_9__["UtilService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], viewQuery: function MapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapDiv = _t.first);
    } }, outputs: { polyCreatedEvent: "polyCreatedEvent", polyRemovedEvent: "polyRemovedEvent", polyEditedEvent: "polyEditedEvent", moveEndedEvent: "moveEndedEvent", markerAddedEvent: "markerAddedEvent", markerRemovedEvent: "markerRemovedEvent", resetFunctionsChart: "resetFunctionsChart", setClients: "setClients" }, decls: 2, vars: 0, consts: [[1, "fill"], ["map", ""]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-draggable */ "DIQL");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_init_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-init.service */ "9LMx");
/* harmony import */ var _bars_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bars/top-bar/top-bar.component */ "27/6");
/* harmony import */ var _bars_charts_bar_charts_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bars/charts-bar/charts-bar.component */ "K4GV");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _widgets_map_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/map/map.component */ "Weg6");
/* harmony import */ var _widgets_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgets/bar-chart/bar-chart.component */ "pvtx");
/* harmony import */ var _widgets_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widgets/line-chart/line-chart.component */ "1t5r");
/* harmony import */ var _widgets_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widgets/filters/filters.component */ "Kb4X");
/* harmony import */ var _widgets_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widgets/alerts/alerts.component */ "Krjr");
/* harmony import */ var _widgets_network_network_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widgets/network/network.component */ "SfxP");
/* harmony import */ var _bars_time_bar_time_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bars/time-bar/time-bar.component */ "T/Ui");
/* harmony import */ var _widgets_scattergl_scattergl_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./widgets/scattergl/scattergl.component */ "jCsL");
/* harmony import */ var _widgets_functions_chart_functions_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./widgets/functions-chart/functions-chart.component */ "1Kw/");























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _app_init_service__WEBPACK_IMPORTED_MODULE_8__["AppInitService"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
            multi: true,
            deps: [_app_init_service__WEBPACK_IMPORTED_MODULE_8__["AppInitService"]],
            useFactory: (appInit) => {
                return () => {
                    return appInit.init();
                };
            }
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            angular2_draggable__WEBPACK_IMPORTED_MODULE_4__["AngularDraggableModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _widgets_map_map_component__WEBPACK_IMPORTED_MODULE_12__["MapComponent"],
        _widgets_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_13__["BarChartComponent"],
        _widgets_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_14__["LineChartComponent"],
        _bars_top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_9__["TopBarComponent"],
        _bars_charts_bar_charts_bar_component__WEBPACK_IMPORTED_MODULE_10__["ChartsBarComponent"],
        _widgets_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__["FiltersComponent"],
        _widgets_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_16__["AlertsComponent"],
        _widgets_network_network_component__WEBPACK_IMPORTED_MODULE_17__["NetworkComponent"],
        _bars_time_bar_time_bar_component__WEBPACK_IMPORTED_MODULE_18__["TimeBarComponent"],
        _widgets_scattergl_scattergl_component__WEBPACK_IMPORTED_MODULE_19__["ScatterglComponent"],
        _widgets_functions_chart_functions_chart_component__WEBPACK_IMPORTED_MODULE_20__["FunctionsChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        angular2_draggable__WEBPACK_IMPORTED_MODULE_4__["AngularDraggableModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"]] }); })();


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
        const self = this;
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
                        labels: {
                            font: {
                                size: 15
                            }
                        }
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
                        ticks: {
                            font: {
                                size: 15
                            },
                            // Include a dollar sign in the ticks
                            callback: function (value, index, ticks) {
                                if (self.data[value] !== undefined && self.data[value].x !== undefined)
                                    return self.data[value].x.slice(0, -7);
                            }
                        }
                    },
                    y: {
                        display: true,
                        ticks: {
                            font: {
                                size: 15
                            }
                        },
                        title: {
                            display: false,
                            text: 'Y',
                            font: {
                                size: 15
                            }
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
    updateDataset(dataId, color, data, name = undefined) {
        this.data = data;
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
            console.log(name);
            console.log(label);
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
            try {
                // Return a new promise.
                const response = yield fetch(address, {
                    method: 'GET',
                });
                return yield response.json();
            }
            catch (e) {
                return [];
            }
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
            const selectedClientOption = this.global.getGlobal("client_option").value;
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
            //se vir do viaipe seta from viaipe
            if (selectedClientOption == "viaipe") {
                query['select'] = ['avg_in'];
                query['from'] = 'viaipe';
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
    requestBarChart(location, time, client, params, option, zoom = undefined) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let query = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["QueryRequest"]();
            query['where'] = [];
            if (location !== undefined) {
                query['where'].push(location);
            }
            if (time !== undefined) {
                query['where'].push(time);
            }
            query['id'] = this.getQueryId();
            if (option == 'popdf') {
                query['from'] = params.from;
                query['select'] = params.select;
                query['group-by'] = params.groupBy;
            }
            else {
                query['select'] = [params];
                query['from'] = 'viaipe';
                if (zoom > 12) {
                    query['group-by'] = ['pop', 'cliente'];
                }
                else {
                    query['group-by'] = ['pop'];
                }
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
    requestLineChart(location, time, client, params = undefined, option) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const clicked = this.global.getGlobal("clicked_element").value;
            let query = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["QueryRequest"]();
            const tsT0 = this.global.getGlobal("t0_vis").value;
            const tsT1 = this.global.getGlobal("t1_vis").value;
            query['id'] = this.getQueryId();
            query['where'] = [];
            if (location !== undefined) {
                query['where'].push(location);
            }
            if (time !== undefined) {
                query['where'].push(time);
            }
            //se vir do viaipe seta from viaipe
            query['id'] = this.getQueryId();
            if (option == 'popdf') {
                query["group-by"] = { "field": "time", "min-k": tsT0, "max-k": tsT1, "n-points": 1024, "v": "AMPNS" };
                query['from'] = params.from;
                query['select'] = params.select;
            }
            else {
                query["group-by"] = { "field": "time", "min-k": tsT0, "max-k": tsT1, "n-points": 1024 };
                query['select'] = [params];
                query['from'] = 'viaipe';
                if (clicked > 0 && client !== undefined) {
                    query['where'].push(["pop", "eq", clicked]);
                    query['where'].push(client);
                }
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
            if (metric === 'rnp_services') {
                // @ts-ignore
                query['from'] = metric;
            }
            else {
                query['metric'] = metric;
            }
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
    /**
     * Solicita os dados para timeseries
    */
    requestTimeseries(metric, field, t0, t1, idpop, from = "") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let query = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["TimeseriesRequest"]();
            //{"what":"timecolumns","metric":10,"field":"h_avg","start":1648771200,"end":1656633300,"idpop":19}
            //{"what":"timecolumns","metric":10,"field":"havg","start":1648771200,"end":1656633300,"idpop":8,"from":"rnp_services"}
            query['metric'] = metric;
            query['field'] = field;
            query['start'] = t0;
            query['end'] = t1;
            query['idpop'] = idpop;
            if (from == 'rnp_services') {
                // @ts-ignore
                query['from'] = 'rnp_services';
            }
            this.utils.showTrace("requestTimeseries", query);
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
    /**
     * Solicita os dados do mapa para compor a heatmatrix.
     */
    requestFunctions(service, model, t0, t1, clicked) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let query = new src_app_shared_api_models__WEBPACK_IMPORTED_MODULE_2__["FunctionsRequest"]();
            if (clicked >= 0) {
                query['pop'] = clicked;
            }
            if (service > 0) {
                query['service'] = service;
            }
            query['from'] = 'rnp_services';
            query['what'] = 'statistics';
            query['field'] = 'havg';
            query['model'] = model;
            query['start'] = t0;
            query['end'] = t1;
            this.utils.showTrace("requestFunctions", query);
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

/***/ "gxC8":
/*!************************************!*\
  !*** ./src/assets/parameters.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"param\":\"Failures\",\"value\":10,\"category\":\"Atraso e perda\"},{\"param\":\"Atraso de ida e volta (RTT - average)\",\"value\":11,\"category\":\"Atraso e perda\"},{\"param\":\"Atraso de ida e volta (RTT - min)\",\"value\":12,\"category\":\"Atraso e perda\"},{\"param\":\"Atraso de ida e volta (RTT - max)\",\"value\":13,\"category\":\"Atraso e perda\"},{\"param\":\"Histogram-ttl-reverse (average)\",\"value\":16,\"category\":\"Atraso e perda\"},{\"param\":\"Histogram-ttl-reverse (min)\",\"value\":17,\"category\":\"Atraso e perda\"},{\"param\":\"Histogram-ttl-reverse (max)\",\"value\":18,\"category\":\"Atraso e perda\"},{\"param\":\"Packet-count-lost-bidir\",\"value\":21,\"category\":\"Atraso e perda\"},{\"param\":\"Packet-count-sent\",\"value\":22,\"category\":\"Atraso e perda\"},{\"param\":\"Packet-duplicates-bidir\",\"value\":23,\"category\":\"Atraso e perda\"},{\"param\":\"Packet-loss-rate-bidir\",\"value\":24,\"category\":\"Atraso e perda\"},{\"param\":\"Packet-reorders-bidir\",\"value\":25,\"category\":\"Atraso e perda\"},{\"param\":\"Failures\",\"value\":40,\"category\":\"Atraso unidirecional\"},{\"param\":\"Atraso unidirecional (owdelay - average)\",\"value\":41,\"category\":\"Atraso unidirecional\"},{\"param\":\"Atraso unidirecional (owdelay - min)\",\"value\":42,\"category\":\"Atraso unidirecional\"},{\"param\":\"Atraso unidirecional (owdelay - max)\",\"value\":43,\"category\":\"Atraso unidirecional\"},{\"param\":\"Histogram-ttl (average)\",\"value\":46,\"category\":\"Atraso unidirecional\"},{\"param\":\"Histogram-ttl (min)\",\"value\":47,\"category\":\"Atraso unidirecional\"},{\"param\":\"Histogram-ttl (max)\",\"value\":48,\"category\":\"Atraso unidirecional\"},{\"param\":\"Packet-count-lost\",\"value\":51,\"category\":\"Atraso unidirecional\"},{\"param\":\"Packet-count-sent\",\"value\":52,\"category\":\"Atraso unidirecional\"},{\"param\":\"Packet-duplicates\",\"value\":53,\"category\":\"Atraso unidirecional\"},{\"param\":\"Packet-loss-rate\",\"value\":54,\"category\":\"Atraso unidirecional\"},{\"param\":\"Packet-reorders\",\"value\":55,\"category\":\"Atraso unidirecional\"},{\"param\":\"Failures\",\"value\":70,\"category\":\"BANDA (BBR)\"},{\"param\":\"Packet-retransmits\",\"value\":71,\"category\":\"BANDA (BBR)\"},{\"param\":\"Packet-retransmits-subintervals (average)\",\"value\":72,\"category\":\"BANDA (BBR)\"},{\"param\":\"Packet-retransmits-subintervals (min)\",\"value\":73,\"category\":\"BANDA (BBR)\"},{\"param\":\"Packet-retransmits-subintervals (max)\",\"value\":74,\"category\":\"BANDA (BBR)\"},{\"param\":\"Throughput (BBR)\",\"value\":77,\"category\":\"BANDA (BBR)\"},{\"param\":\"Throughput-subintervals (average)\",\"value\":78,\"category\":\"BANDA (BBR)\"},{\"param\":\"Throughput-subintervals (min)\",\"value\":79,\"category\":\"BANDA (BBR)\"},{\"param\":\"Throughput-subintervals (max)\",\"value\":80,\"category\":\"BANDA (BBR)\"},{\"param\":\"Failures\",\"value\":100,\"category\":\"BANDA (CUBIC)\"},{\"param\":\"Packet-retransmits\",\"value\":101,\"category\":\"BANDA (CUBIC)\"},{\"param\":\"Packet-retransmits-subintervals (average)\",\"value\":102,\"category\":\"BANDA (CUBIC)\"},{\"param\":\"Packet-retransmits-subintervals (min)\",\"value\":103,\"category\":\"BANDA (CUBIC)\"},{\"param\":\"Packet-retransmits-subintervals (max)\",\"value\":104,\"category\":\"BANDA (CUBIC)\"},{\"param\":\"Throughput (BBR)\",\"value\":107,\"category\":\"BANDA (CUBIC)\"},{\"param\":\"Throughput-subintervals (average)\",\"value\":108,\"category\":\"BANDA (CUBIC)\"},{\"param\":\"Throughput-subintervals (min)\",\"value\":109,\"category\":\"BANDA (CUBIC)\"},{\"param\":\"Throughput-subintervals (max)\",\"value\":110,\"category\":\"BANDA (CUBIC)\"},{\"param\":\"Throughput (BBR)\",\"value\":130,\"category\":\"TraceRoute\"},{\"param\":\"Throughput-subintervals (average)\",\"value\":131,\"category\":\"TraceRoute\"},{\"param\":\"Throughput-subintervals (min)\",\"value\":132,\"category\":\"TraceRoute\"},{\"param\":\"Throughput-subintervals (max)\",\"value\":133,\"category\":\"TraceRoute\"}]");

/***/ }),

/***/ "jCsL":
/*!**********************************************************!*\
  !*** ./src/app/widgets/scattergl/scattergl.component.ts ***!
  \**********************************************************/
/*! exports provided: ScatterglComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterglComponent", function() { return ScatterglComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var scatter_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scatter-gl */ "a4BQ");
/* harmony import */ var scatter_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scatter_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var umap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! umap-js */ "O4oN");
/* harmony import */ var umap_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(umap_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "iYt/");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["embedding"];
function ScatterglComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", param_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", param_r2.param, " ");
} }
class ScatterglComponent {
    constructor(global) {
        this.global = global;
        this.onScatterglValueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onParamSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAreaSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTimeBoundsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.removeAreaSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        //elementos para o scattergl chart
        this.capitals = this.global.getGlobal('state_capitals').value.default;
        this.scatterglData = [];
        this.colorScale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleSequential"](d3__WEBPACK_IMPORTED_MODULE_4__["interpolateReds"]);
        this.statePairList = [];
        //configurações do multiselect
        this.selectDisabler = "disabled";
        this.dropdownList = this.global.getGlobal("scattergl_params").value.default;
        this.dropdownSettings = {
            singleSelection: false,
            limitSelection: 10,
            idField: 'value',
            textField: 'param',
            enableCheckAll: false,
            unSelectAll: false,
            itemsShowLimit: 0,
            allowSearchFilter: false
        };
        this.selectedParams = [];
    }
    ngOnInit() {
        this.buildStatePairList();
        this.startScattergl();
    }
    startScattergl() {
        //start no scattergl
        this.scatterGl = new scatter_gl__WEBPACK_IMPORTED_MODULE_2__["ScatterGL"](this.embeddingDiv.nativeElement, {
            onSelect: (points) => {
                if (points.length === 0) {
                    console.log('nothing selected');
                    this.onAreaSelect.emit([]);
                }
                else {
                    this.onAreaSelect.emit(points);
                }
            },
            renderMode: "POINT" /* POINT */,
            orbitControls: {
                zoomSpeed: 1.125,
            },
        });
        //adding resize on screen resize to scattergl plot
        window.addEventListener('resize', () => {
            this.scatterGl.resize();
        });
    }
    updateScatterglData(id, added, responseData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (added) {
                this.scatterglData.push({ 'id': id, 'data': responseData });
            }
            else {
                const newScatterglData = [];
                for (let i = 0; i < this.scatterglData.length; i++) {
                    if (this.scatterglData[i].id !== id) {
                        newScatterglData.push(this.scatterglData[i]);
                    }
                }
                this.scatterGl.setPointColorer(() => {
                    return "hsla(240,100%,25%,0.5)";
                });
                this.scatterglData = newScatterglData;
            }
            if (this.scatterglData.length == 0) {
                //restart no scattergl caso nenhum dado selecionado
                const scatterGlDiv = document.querySelector('#scattergl-embedding');
                scatterGlDiv.innerHTML = "";
                this.startScattergl();
            }
            else {
                const data = this.buildData(this.scatterglData);
                //reduzindo dimensionalidade do dado
                const umap = new umap_js__WEBPACK_IMPORTED_MODULE_3__["UMAP"]();
                const embedding = umap.fit(data);
                const dataPoints = [];
                const metadata = [];
                for (let i = 0; i < embedding.length; i++) {
                    let labelIndex = [i].toString();
                    let label = this.statePairList[i];
                    dataPoints.push([embedding[i][0], embedding[i][1]]);
                    metadata.push({
                        labelIndex,
                        label
                    });
                }
                this.dataset = new scatter_gl__WEBPACK_IMPORTED_MODULE_2__["Dataset"](dataPoints, metadata);
                this.scatterGl.updateDataset(this.dataset);
                this.scatterGl.render(this.dataset);
                this.scatterGl.resize();
            }
        });
    }
    //constrói as strings de pares de saída x entrada 
    getCapitalId(id) {
        return this.capitals.filter((c) => c.cod === id)[0].id.toUpperCase();
    }
    colorPoints(scatterglOptions) {
        const data = this.selectData(scatterglOptions);
        // @ts-ignore
        const all = d3__WEBPACK_IMPORTED_MODULE_4__["extent"](data.map((d) => d).filter(e => e > 0));
        if (scatterglOptions.invert) {
            this.colorScale.domain(all.reverse());
        }
        else {
            this.colorScale.domain(all);
        }
        this.scatterGl.setPointColorer((i, selectedIndices, hoverIndex) => {
            const isSelected = selectedIndices.has(i);
            const labelIndex = this.dataset.metadata[i]['labelIndex'];
            const color = this.valToColor(data[labelIndex]);
            if (hoverIndex === i)
                return 'red';
            else if (isSelected)
                return "hsla(240,100%,25%,0.5)";
            else
                return color;
        });
    }
    valToColor(d) {
        if (d === 0) {
            return "#333";
        }
        return this.colorScale(d);
    }
    onOptionChange(event) {
        const scattergl_options = this.global.getGlobal("scattergl_options");
        console.log(scattergl_options);
        if (event.target.name == 'code') {
            scattergl_options.value = parseInt(event.target.value);
            this.global.setGlobal(scattergl_options);
        }
        else {
            scattergl_options.param = parseInt(event.target.value);
            this.global.setGlobal(scattergl_options);
        }
        this.colorPoints(scattergl_options);
    }
    onParamChange(event, added) {
        if (added) {
            this.selectDisabler = "";
            this.selectedParams.push(event);
        }
        else {
            for (let i = 0; i < this.selectedParams.length; i++) {
                if (this.selectedParams[i].value == event.value) {
                    this.selectedParams.splice(i, 1);
                }
            }
            if (this.selectedParams.length > 0) {
                this.selectDisabler = "";
            }
            else {
                document.getElementById('scattergl-select-options').value = "-1";
                this.selectDisabler = "disabled";
            }
        }
        this.onParamSelected.emit({ "value": event.value, "added": added });
    }
    onTimeBoundsChange() {
        for (let i = 0; i < this.scatterglData.length; i++) {
            this.onTimeBoundsChanged.emit({ value: this.scatterglData[i].id, added: true });
        }
    }
    onSelectionModeChange(event) {
        if (event.target.value == "pan") {
            this.removeAreaSelection.emit();
            this.scatterGl.setPanMode();
        }
        else {
            this.removeAreaSelection.emit();
            this.scatterGl.setSelectMode();
        }
    }
    selectData(options) {
        for (let i = 0; i < this.scatterglData.length; i++) {
            if (this.scatterglData[i].id == options.value)
                return this.scatterglData[i].data[options.param];
        }
    }
    buildData(data) {
        const structuredData = [];
        for (let i = 0; i < data[0].data[0].length; i++)
            structuredData.push([]);
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < structuredData.length; j++) {
                structuredData[j].push(data[i].data[0][j]);
                structuredData[j].push(data[i].data[1][j]);
                structuredData[j].push(data[i].data[2][j]);
            }
        }
        return structuredData;
    }
    buildStatePairList() {
        //constrói a lista com os pares de estados
        const statesIds = [];
        for (let i = 1; i < 28; i++) {
            for (let j = 1; j < 28; j++) {
                statesIds.push([i, j]);
            }
        }
        for (let i = 0; i < statesIds.length; i++) {
            this.statePairList.push(this.getCapitalId(statesIds[i][0]) + ' - ' + this.getCapitalId(statesIds[i][1]));
        }
    }
}
ScatterglComponent.ɵfac = function ScatterglComponent_Factory(t) { return new (t || ScatterglComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"])); };
ScatterglComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScatterglComponent, selectors: [["app-scattergl"]], viewQuery: function ScatterglComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.embeddingDiv = _t.first);
    } }, outputs: { onScatterglValueChanged: "onScatterglValueChanged", onParamSelected: "onParamSelected", onAreaSelect: "onAreaSelect", onTimeBoundsChanged: "onTimeBoundsChanged", removeAreaSelection: "removeAreaSelection" }, decls: 25, vars: 6, consts: [[1, "fill", "scattergl-chart", 3, "mousedown"], ["id", "scattergl-embedding", 1, "fill"], ["embedding", ""], [2, "display", "flex", "margin-top", "27px", "padding-bottom", "7px", "width", "100%", "border-top", "1px solid #eee", "left", "10px", "font-size", "11px !important"], ["id", "scattergl-select-box", 1, "chart-select"], ["id", "scattergl-dropdown", 1, "custom-font-size", "custom-radius", "custom-dropdown", "custom-dropdown-list", "custom-dropdown-place", "custom-dropdown-rotation", 3, "disabled", "placeholder", "settings", "data", "onSelect", "onDeSelect"], ["id", "scattergl-select-options", "placeholder", "Color by", "name", "code", 1, "scattergl-select", 3, "disabled", "change"], ["value", "-1", "disabled", "", "selected", "", "hidden", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "codfield-select-box", 1, "codfield-select"], ["name", "codfield", 1, "scattergl-select", 3, "change"], ["value", "0"], ["value", "2"], ["value", "1"], ["value", "pan"], ["value", "selectio"], [3, "value"]], template: function ScatterglComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mousedown", function ScatterglComponent_Template_div_mousedown_0_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ng-multiselect-dropdown", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onSelect", function ScatterglComponent_Template_ng_multiselect_dropdown_onSelect_5_listener($event) { return ctx.onParamChange($event, true); })("onDeSelect", function ScatterglComponent_Template_ng_multiselect_dropdown_onDeSelect_5_listener($event) { return ctx.onParamChange($event, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ScatterglComponent_Template_select_change_7_listener($event) { return ctx.onOptionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Color by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ScatterglComponent_option_10_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ScatterglComponent_Template_select_change_12_listener($event) { return ctx.onOptionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Max");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Min");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ScatterglComponent_Template_select_change_20_listener($event) { return ctx.onSelectionModeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Pan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", false)("placeholder", "Params")("settings", ctx.dropdownSettings)("data", ctx.dropdownList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.selectDisabler);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedParams);
    } }, directives: [ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], styles: [".scattergl-chart[_ngcontent-%COMP%] {\n    height: 327px;\n}\n\n.scattergl-select[_ngcontent-%COMP%] {\n    font-size: 9px;\n}\n\n.code-select[_ngcontent-%COMP%] {\n    width: 188px;\n    margin-top: 7px;\n    margin-left: 17px;\n}\n\n.codfield-select[_ngcontent-%COMP%] {\n    width: 71px;\n    margin-top: 7px;\n    margin-left: 17px;\n}\n\n.chart-select[_ngcontent-%COMP%] {\n    width: 86px;\n    margin-top: 7px;\n    margin-left: 17px;\n}\n\n@media screen and (min-width: 1024px) {\n    .scattergl-chart[_ngcontent-%COMP%] {\n        height: 380px;\n    }\n\n    .scattergl-select[_ngcontent-%COMP%] {\n        font-size: 11px;\n    }\n    \n    .code-select[_ngcontent-%COMP%] {\n        width: 220px;\n    }\n    \n    .codfield-select[_ngcontent-%COMP%] {\n        width: 79px;\n    }\n\n    .chart-select[_ngcontent-%COMP%] {\n        width: 97px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYXR0ZXJnbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNjYXR0ZXJnbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjYXR0ZXJnbC1jaGFydCB7XG4gICAgaGVpZ2h0OiAzMjdweDtcbn1cblxuLnNjYXR0ZXJnbC1zZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xufVxuXG4uY29kZS1zZWxlY3Qge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE3cHg7XG59XG5cbi5jb2RmaWVsZC1zZWxlY3Qge1xuICAgIHdpZHRoOiA3MXB4O1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcbn1cblxuLmNoYXJ0LXNlbGVjdCB7XG4gICAgd2lkdGg6IDg2cHg7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxN3B4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAuc2NhdHRlcmdsLWNoYXJ0IHtcbiAgICAgICAgaGVpZ2h0OiAzODBweDtcbiAgICB9XG5cbiAgICAuc2NhdHRlcmdsLXNlbGVjdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgXG4gICAgLmNvZGUtc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuY29kZmllbGQtc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDc5cHg7XG4gICAgfVxuXG4gICAgLmNoYXJ0LXNlbGVjdCB7XG4gICAgICAgIHdpZHRoOiA5N3B4O1xuICAgIH1cbn0iXX0= */"] });


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
        this.colorList = [];
        this.coloredCods = [];
        this.usedColors = [];
        this.zoom = undefined;
        this.viaipeLabels = [];
        this.from = undefined;
        this.lowerIndex = 0;
        this.higherIndex = 9;
        this.selectedColumns = [];
        this.canvas = canvas;
        this.init();
    }
    //Configuração do grafico
    init() {
        if (this.canvas === undefined) {
            return;
        }
        const self = this;
        const setTooltipTitle = (tooltipItems) => {
            if (self.zoom > 12 && self.from == 'viaipe') {
                //@ts-ignore
                const id = parseInt(tooltipItems[0].parsed.x) + self.lowerIndex;
                return self.viaipeLabels[self.idOrder[id]];
            }
            else {
                const id = parseInt(tooltipItems[0].parsed.x);
                return self.getId(self.idOrder[id]);
            }
        };
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
                    tooltip: {
                        callbacks: {
                            title: setTooltipTitle,
                        }
                    },
                    legend: {
                        display: true,
                        position: "top",
                        labels: {
                            font: {
                                size: 15
                            }
                        }
                    },
                    title: {
                        display: false
                    }
                },
                responsive: true,
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            font: {
                                size: 15
                            },
                            autoSkip: false,
                            // Include a dollar sign in the ticks
                            callback: function (value, index, ticks) {
                                if (self.zoom > 12 && self.from == 'viaipe') {
                                    //@ts-ignore
                                    const id = value + self.lowerIndex;
                                    return self.viaipeLabels[self.idOrder[id]];
                                }
                                else {
                                    return self.getId(self.idOrder[value]);
                                }
                            }
                        }
                    },
                    y: {
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Relative Frequency',
                            font: {
                                size: 15
                            }
                        },
                        ticks: {
                            font: {
                                size: 15
                            }
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
    updateDataset(dataId, color, data, name = undefined, idOrder = undefined) {
        if (idOrder !== undefined)
            this.idOrder = idOrder;
        this.colorList = Array(this.idOrder.length).fill("#AAAAAA");
        if (this.zoom > 12) {
            for (let i = 0; i < this.coloredCods.length; i++) {
                if (this.idOrder.includes(this.coloredCods[i])) {
                    const id = this.idOrder.indexOf(this.coloredCods[i]);
                    const colorId = this.coloredCods.indexOf(this.idOrder[id]);
                    const color = this.usedColors[colorId];
                    this.colorList[id] = color;
                }
            }
        }
        this.data = data;
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
            if (this.zoom > 12 && this.from == 'viaipe') {
                datasets[id].data = data.slice(this.lowerIndex, this.higherIndex);
            }
            else {
                datasets[id].data = data;
            }
        }
        else {
            const newData = {
                label: label,
                backgroundColor: (this.zoom > 12 && this.from == 'viaipe') ? this.colorList.slice(this.lowerIndex, this.higherIndex) : color,
                borderColor: (this.zoom > 12 && this.from == 'viaipe') ? this.colorList.slice(this.lowerIndex, this.higherIndex) : color,
                data: (this.zoom > 12 && this.from == 'viaipe') ? data.slice(this.lowerIndex, this.higherIndex) : data,
                fill: false,
                stack: dataId
            };
            datasets.push(newData);
        }
        const newColors = this.colorList.slice(this.lowerIndex, this.higherIndex);
        datasets[0].backgroundColor = newColors;
        datasets[0].borderColor = newColors;
        this.chart.update();
    }
    changeData(data) {
        const datasets = this.chart.config.data.datasets;
        datasets[0].data = data;
        this.chart.update();
    }
    changeBarColor(color, cod = -1) {
        const datasets = this.chart.config.data.datasets;
        if (cod > -1) {
            const id = this.idOrder.indexOf(cod);
            this.colorList[id] = color;
            if (color !== "#AAAAAA") {
                this.coloredCods.push(this.idOrder[id]);
                this.usedColors.push(color);
            }
        }
        const newColors = this.colorList.slice(this.lowerIndex, this.higherIndex);
        datasets[0].backgroundColor = newColors;
        datasets[0].borderColor = newColors;
        this.chart.update();
    }
    addFilterColor() {
        const datasets = this.chart.config.data.datasets;
        const newColors = this.colorList.slice(this.lowerIndex, this.higherIndex);
        datasets[0].backgroundColor = newColors;
        datasets[0].borderColor = newColors;
        this.chart.update();
    }
    removeFilterColor() {
        if (this.usedColors.length > 0) {
            for (let i = 0; i < this.coloredCods.length; i++) {
                const id = this.idOrder.indexOf(this.coloredCods[i]);
                this.colorList[id] = this.usedColors[i];
            }
        }
        else {
            this.colorList = Array(this.idOrder.length).fill("#AAAAAA");
            this.coloredCods = [];
        }
        const datasets = this.chart.config.data.datasets;
        const newColors = this.colorList.slice(this.lowerIndex, this.higherIndex);
        datasets[0].backgroundColor = newColors;
        datasets[0].borderColor = newColors;
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
    setCapitals(capitals) {
        this.capitals = capitals;
    }
    getId(id) {
        return this.capitals.filter((c) => c.cod === id)[0].id.toUpperCase();
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
/* harmony import */ var _assets_viaipe_metadata_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/viaipe_metadata.json */ "6aQK");
var _assets_viaipe_metadata_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/viaipe_metadata.json */ "6aQK", 1);
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar */ "pPrM");
/* harmony import */ var src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global.service */ "H2Bz");
/* harmony import */ var src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/util.service */ "Cs7S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");

// inclusão do metadado do viaipe







const _c0 = ["barChart"];
function BarChartComponent_select_3_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", param_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](param_r6.id);
} }
function BarChartComponent_select_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BarChartComponent_select_3_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onParamChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BarChartComponent_select_3_option_1_Template, 2, 2, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ids);
} }
function BarChartComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarChartComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateTabCounter(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.hasPrevious());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r2.hasPrevious() ? "rgb(36, 61, 143)" : "rgb(149, 165, 166)");
} }
function BarChartComponent_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BarChartComponent_select_6_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onParamChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Average in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Average out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Max in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Max out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Val");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Average val");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Max val");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx_r3.zoom > 12 ? "-367px" : "0px");
} }
function BarChartComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BarChartComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.updateTabCounter(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.hasNext());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r4.hasNext() ? "rgb(36, 61, 143)" : "rgb(149, 165, 166)");
} }
class BarChartComponent {
    constructor(global, util) {
        this.global = global;
        this.util = util;
        this.barParamChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.labels = {};
        this.rawData = {};
        this.nrmData = {};
        this.viaipeClientsLabel = [];
        this.lowerIndex = 0;
        this.higherIndex = 9;
        this.tabsCounter = 0;
        this.ids = [];
        this.optionsList = {
            avg_in: 'Average in',
            avg_out: 'Average out',
            max_in: 'Max in',
            max_out: 'Max out',
            loss: 'Loss',
            avg_loss: 'Average loss',
            max_loss: 'Max loss',
            val: 'Val',
            avg_val: 'Average val',
            max_val: 'Max val'
        };
        this.ids = this.global.getGlobal('bar_params').value;
    }
    ngOnInit() {
        this.barChart = new _bar__WEBPACK_IMPORTED_MODULE_2__["BarChart"](this.barDiv.nativeElement);
        const capitals = this.global.getGlobal('state_capitals').value.default;
        this.barChart.setCapitals(capitals);
    }
    updateData(responseData, dataId, chartColor, lmap, zoom = undefined) {
        this.viaipeClientsLabel = {};
        this.barChart.clear();
        this.barChart.lowerIndex = 0;
        this.barChart.higherIndex = 10;
        this.lowerIndex = 0;
        this.higherIndex = 10;
        this.tabsCounter = 0;
        // manages data for each from
        for (let from of Object.keys(responseData)) {
            // clear existing element
            this.deleteData(from, dataId, chartColor);
            this.rawData[from][dataId][chartColor] = [];
            // adiciona os valores não normalizados
            for (let i = 0; i < responseData[from].result.length; i++) {
                let pointId;
                if (zoom > 12) {
                    pointId = +responseData[from].result[i].k[1];
                    this.viaipeClientsLabel[pointId] = this.getViaipeClientLabel(responseData[from].result[i].k);
                }
                else {
                    pointId = +responseData[from].result[i].k[0];
                }
                const pointVl = +responseData[from].result[i].v[0];
                this.rawData[from][dataId][chartColor].push({ x: pointId, y: pointVl });
            }
            this.barChart.viaipeLabels = this.viaipeClientsLabel;
            // atualiza os labels baseado no dado novo
            this.updateLabels(from, lmap, zoom);
            // normaliza os dados de dataId
            this.normalizeData(from);
            // completa os pontos que faltam
            if (!this.isViaipe())
                this.fillMissingPoints(from);
        }
    }
    drawChart(from, name = undefined, zoom = undefined) {
        this.barChart.setLabels(this.labels[from], name);
        this.zoom = zoom;
        this.barChart.zoom = zoom;
        this.barChart.from = from;
        // set x labal
        if (!this.isViaipe()) {
            if (from.includes('ttls')) {
                this.barChart.setLabelY('TTLs');
            }
            else {
                this.barChart.setLabelY('TCP Connection Services');
            }
            // atualiza os dados
            for (const dataId of Object.keys(this.nrmData[from])) {
                for (const color of Object.keys(this.nrmData[from][dataId])) {
                    // gets the data
                    const data = this.nrmData[from][dataId];
                    this.barChart.updateDataset(dataId, color, data[color], name, undefined);
                }
            }
        }
        else {
            const selectedValue = this.global.getGlobal('bar_params_value').value;
            //@ts-ignore
            this.barChart.setLabelY(this.optionsList[selectedValue]);
            for (const dataId of Object.keys(this.nrmData[from])) {
                for (const color of Object.keys(this.nrmData[from][dataId])) {
                    const data = this.nrmData[from][dataId];
                    const sorted = [...data[color]].sort((a, b) => a.y - b.y);
                    let newData = [];
                    let idOrder = [];
                    for (let i = 0; i < sorted.length; i++) {
                        newData.push({ x: (sorted.length) - i, y: sorted[i].y });
                        idOrder.push(sorted[i].x);
                    }
                    newData.reverse();
                    idOrder.reverse();
                    this.barChart.updateDataset(dataId, color, newData, name, idOrder);
                }
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
    clearChart(from, dataId, color, lmap, zoom) {
        // removes from chart
        this.barChart.removeDataset(dataId, color);
        this.deleteData(from, dataId, color);
        // atualiza os labels baseado no dado novo
        this.updateLabels(from, lmap, zoom);
        // normaliza os dados de dataId
        this.normalizeData(from);
        // completa os pontos que faltam
        if (!this.isViaipe())
            this.fillMissingPoints(from);
    }
    clearLabel(from) {
        this.labels[from] = [];
    }
    normalizeData(from) {
        // limpa os dados normalizados
        this.nrmData[from] = {};
        if (this.isViaipe() || (this.isViaipe() && from == "client")) {
            this.nrmData[from] = this.rawData[from];
        }
        else {
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
    updateLabels(from, lmap, zoom) {
        // limpa os labels do gráfico
        this.labels[from] = [];
        let counter = 1;
        // percorre os tipos de elementos
        for (const dataId of Object.keys(this.rawData[from])) {
            // percorre os elementos
            for (const color of Object.keys(this.rawData[from][dataId])) {
                this.rawData[from][dataId][color].forEach((d) => {
                    if (this.isViaipe()) {
                        if (!this.labels[from].includes(counter)) {
                            this.labels[from].push(counter);
                        }
                    }
                    else {
                        const x = Object.keys(lmap[from]).length > 0 ? lmap[from][d['x']] : d['x'];
                        if (!this.labels[from].includes(x)) {
                            this.labels[from].push(x);
                        }
                    }
                    counter += 1;
                });
            }
        }
        // ordena os labels
        this.labels[from].sort((a, b) => a - b);
        if (zoom > 12 && from == 'viaipe')
            this.labels[from] = this.labels[from].slice(this.lowerIndex, this.higherIndex);
    }
    onParamChange(event) {
        const bar_params_value = {
            key: "bar_params_value",
            value: event.target.value
        };
        this.global.setGlobal(bar_params_value);
        this.barParamChanged.emit();
    }
    isViaipe() {
        return this.global.getGlobal("client_option").value == "viaipe";
    }
    getViaipeClientLabel(ids) {
        const key = this.barChart.getId(ids[0]).toLowerCase();
        //@ts-ignore
        return _assets_viaipe_metadata_json__WEBPACK_IMPORTED_MODULE_1__["pops"][key]['clientes'][ids[1] - 1]["caption"];
    }
    updateColor(color, cod, isAdded) {
        if (isAdded) {
            this.barChart.changeBarColor(color, cod);
        }
        else {
            this.barChart.usedColors = this.barChart.usedColors.filter((e) => e !== color);
            this.barChart.coloredCods = this.barChart.coloredCods.filter((e) => e !== cod);
            this.barChart.changeBarColor('#AAAAAA', cod);
        }
    }
    removeFilters() {
        const indices = [];
        for (let i = 0; i < this.barChart.usedColors.length; i++) {
            if (this.global.getGlobal('filter_color').value == this.barChart.usedColors[i]) {
                indices.push(i);
            }
        }
        for (let i = 0; i < indices.length; i++) {
            this.barChart.coloredCods = this.barChart.coloredCods.splice(indices[i], 1);
        }
        this.barChart.usedColors = this.barChart.usedColors.filter((e) => e !== this.global.getGlobal('filter_color').value);
        this.barChart.removeFilterColor();
    }
    updateTabCounter(value) {
        this.tabsCounter += value;
        if (this.tabsCounter == 0) {
            this.barChart.lowerIndex = 0;
            this.barChart.higherIndex = 10;
            this.lowerIndex = 0;
            this.higherIndex = 10;
            this.data = this.barChart.data.slice(0, 10);
        }
        else {
            this.barChart.lowerIndex = this.tabsCounter * 10;
            this.barChart.higherIndex = (this.tabsCounter + 1) * 10;
            this.lowerIndex = this.tabsCounter * 10;
            this.higherIndex = (this.tabsCounter + 1) * 10;
            this.data = this.barChart.data.slice(this.tabsCounter * 10, (this.tabsCounter + 1) * 10);
        }
        this.barChart.changeBarColor('#AAAAAA', -1);
        this.barChart.changeData(this.data);
    }
    hasPrevious() {
        return ((this.tabsCounter + 1) * 10 > 10);
    }
    hasNext() {
        return ((this.tabsCounter + 1) * 10 < this.barChart.data.length);
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"])); };
BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], viewQuery: function BarChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.barDiv = _t.first);
    } }, outputs: { barParamChanged: "barParamChanged" }, decls: 8, vars: 8, consts: [[1, "fill"], ["barChart", ""], ["name", "select", "class", "param-selector", 3, "change", 4, "ngIf"], [1, "controls"], ["type", "button", "class", "btn btn-custom", 3, "disabled", "click", 4, "ngIf"], ["name", "select", "class", "param-selector", "style", "margin-top: 1px !important;", 3, "margin-left", "change", 4, "ngIf"], ["name", "select", 1, "param-selector", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "button", 1, "btn", "btn-custom", 3, "disabled", "click"], [1, "fas", "fa-arrow-left", "fa-lg"], ["name", "select", 1, "param-selector", 2, "margin-top", "1px !important", 3, "change"], ["value", "avg_in", "selected", ""], ["value", "avg_out"], ["value", "max_in"], ["value", "max_out"], ["value", "val"], ["value", "avg_val"], ["value", "max_val"], [1, "fas", "fa-arrow-right", "fa-lg"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BarChartComponent_select_3_Template, 2, 1, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BarChartComponent_button_5_Template, 2, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BarChartComponent_select_6_Template, 15, 2, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BarChartComponent_button_7_Template, 2, 3, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-bottom", !ctx.isViaipe() ? "1px solid #eee;" : "none")("padding-bottom", !ctx.isViaipe() ? "10px;" : "0px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isViaipe());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViaipe() && ctx.zoom > 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViaipe());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isViaipe() && ctx.zoom > 12);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"]], styles: [".param-selector[_ngcontent-%COMP%] {\n    width: 93px;\n    font-size: 9px;\n    margin-left: 17px;\n    height: 27px;\n    margin-top: 4px;\n}\n\n.controls[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    width: 493px\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n    outline: none !important;\n    box-shadow: none !important;\n}\n\n.btn[_ngcontent-%COMP%]{\n    padding: 9px 16px !important;\n    width: 49px;\n    height: 29px;\n\tbox-shadow: none !important\n}\n\n.btn-custom[_ngcontent-%COMP%]{\n    background-color: #eee !important;\n    outline-color: #eee !important;\n    border-color: #eee !important;\n}\n\n.btn-custom[_ngcontent-%COMP%]:hover {\n    background-color: #fff;\n    outline-color: #fff !important;\n    border-color: #fff !important;\n}\n\n.btn-custom[_ngcontent-%COMP%]{\n    background-color: #eee !important;\n    outline-color: #eee !important;\n    border-color: #eee !important;\n}\n\n.btn[_ngcontent-%COMP%]:active {\n    transform: translateY(2px);\n    filter: saturate(150%);\n}\n\n@media screen and (min-width: 1024px) {\n    .param-selector[_ngcontent-%COMP%] {\n        font-size: 11px;\n        margin-top: 7px;\n    }\n\n    .controls[_ngcontent-%COMP%] {\n        width: 578px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhci1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0NBQ2Y7QUFDRDs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7QUFDakM7O0FBR0E7SUFDSSxpQ0FBaUM7SUFDakMsOEJBQThCO0lBQzlCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6ImJhci1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFtLXNlbGVjdG9yIHtcbiAgICB3aWR0aDogOTNweDtcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiA0OTNweFxufVxuXG4uYnRuOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYnRue1xuICAgIHBhZGRpbmc6IDlweCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDQ5cHg7XG4gICAgaGVpZ2h0OiAyOXB4O1xuXHRib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcbn1cblxuLmJ0bi1jdXN0b217XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmUtY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbiAgICBib3JkZXItY29sb3I6ICNlZWUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jdXN0b206aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgb3V0bGluZS1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuICBcbiAgXG4uYnRuLWN1c3RvbXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZS1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1jb2xvcjogI2VlZSAhaW1wb3J0YW50O1xufVxuXG4uYnRuOmFjdGl2ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxNTAlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLnBhcmFtLXNlbGVjdG9yIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgfVxuXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgICAgd2lkdGg6IDU3OHB4O1xuICAgIH1cbn0iXX0= */"] });


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