(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/activity/activity.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/activity/activity.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n\t<mat-form-field fxFlex=\"25\">\r\n    <input matInput placeholder=\"Name\" value=\"{{name}}\" [(ngModel)]=\"name\">\r\n  \t</mat-form-field>\r\n\t<mat-form-field fxFlex=\"25\">\r\n    <input matInput placeholder=\"Email Address\" value=\"{{email}}\" [(ngModel)]=\"email\">\r\n  \t</mat-form-field>\r\n\t<mat-form-field fxFlex=\"25\">\r\n\t<span matPrefix>+91 &nbsp;</span>\r\n    <input matInput placeholder=\"Contact No\" type=\"tel\" value=\"{{ctn}}\" [(ngModel)]=\"ctn\">\r\n  \t</mat-form-field>\r\n\t</div>\r\n\t<div  fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\r\n\t<mat-form-field style=\"width: 92%\">\r\n    <input matInput placeholder=\"Message\" value=\"{{msg}}\" [(ngModel)]=\"msg\">\r\n  \t</mat-form-field>\r\n\t</div>\r\n\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" style=\"margin-right: 4%;\">\r\n\t<button mat-raised-button color=\"primary\" (click)=\"submitFunction(name,email,ctn,msg)\">Submit</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ag-grid/ag-grid.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ag-grid/ag-grid.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ag-grid-angular \r\n    style=\"width: 100%; height: 375px;\" \r\n    class=\"ag-theme-balham\"\r\n    [rowData]=\"rowData | async\"\r\n    [columnDefs]=\"columnDefs\"\r\n    >\r\n</ag-grid-angular>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-header></app-header>\r\n  <div fxLayout=\"row\" class=\"main-height\">\r\n    <div fxFlex=\"15\" class=\"Sidenav\" style=\"padding: 0;\">\r\n      <!-- <div routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</div>\r\n      <div routerLink=\"/activity\" routerLinkActive=\"active\">Activity</div> -->\r\n      <mat-list>\r\n        <div *ngFor=\"let menu of sideNavmenus\" class=\"sideNav-txt\">\r\n        <mat-list-item routerLinkActive=\"active\" routerLink=\"/{{menu.name}}\">\r\n          <mat-icon mat-list-icon style=\"color: dimgrey;\">{{menu.icon}}</mat-icon>\r\n          <h4 mat-line><span class=\"ft-clr\">{{menu.name}}</span></h4>\r\n        </mat-list-item>\r\n      </div>\r\n      </mat-list>\r\n    </div>\r\n     <div fxFlex=\"85\" class=\"Maincontent\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chart/chart.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chart/chart.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Chart Working</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <mat-card class=\"margin-bottom-15\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div>\r\n            <div><b>Good Morning</b>, Z-Team</div>\r\n            <div class=\"acc\">Account Type: <b>Personal</b></div>\r\n          </div>\r\n          <div>\r\n            <div>Time: <b>{{today | date:'hh:mm a':'+0530'}}</b></div>\r\n            <div class=\"acc\">Date: <b>{{today | date:'dd-MM-yyyy'}}</b></div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mini-card\">\r\n        <mat-card fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div><i class=\"material-icons\">person</i></div>\r\n          <div class=\"card-txt\">\r\n            <div class=\"text-align-rgt\">5000</div>\r\n            <div>Total User</div>\r\n          </div>\r\n        </mat-card>\r\n        <mat-card fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div><i class=\"material-icons\">shopping_cart</i></div>\r\n          <div class=\"card-txt\">\r\n            <div class=\"text-align-rgt\">$3000</div>\r\n            <div>Today's sale</div>\r\n          </div>\r\n        </mat-card>\r\n        <mat-card fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div><i class=\"material-icons\">visibility</i></div>\r\n          <div class=\"card-txt\">\r\n            <div class=\"text-align-rgt\">8000</div>\r\n            <div>Total Visits</div>\r\n          </div>\r\n        </mat-card>\r\n        <mat-card fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div><i class=\"material-icons\">touch_app</i></div>\r\n          <div class=\"card-txt\">\r\n            <div class=\"text-align-rgt\">2000</div>\r\n            <div>Online Orders</div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n  <app-ag-grid></app-ag-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span>Dashboard</span>\r\n    <!-- This fills the remaining space of the current row -->\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <i class=\"material-icons\">\r\n      perm_identity\r\n    </i>\r\n    <span>Z-Team</span>\r\n  </mat-toolbar>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/help/help.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/help/help.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>help works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/highchart/highchart.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/highchart/highchart.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Highchart Works</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mail/mail.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mail/mail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<button (click)=\"get_products()\">click</button>\r\n<mat-list *ngFor=\"let folder of products\">\r\n <mat-list-item> {{folder.id}} |  {{folder.title}} | {{folder.completed}}</mat-list-item>\r\n <mat-divider></mat-divider>\r\n</mat-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found!</p>\r\n"

/***/ }),

/***/ "./src/app/activity/activity.component.css":
/*!*************************************************!*\
  !*** ./src/app/activity/activity.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/activity/activity.component.ts":
/*!************************************************!*\
  !*** ./src/app/activity/activity.component.ts ***!
  \************************************************/
/*! exports provided: ActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityComponent", function() { return ActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ActivityComponent = /** @class */ (function () {
    function ActivityComponent() {
        this.name = "";
        this.email = "";
        this.ctn = "";
        this.msg = "";
    }
    ActivityComponent.prototype.submitFunction = function (name, email, ctn, msg) {
        console.log("Hello" + " " + name + " " + email + " " + ctn + " " + msg);
        this.name = name;
        this.email = email;
        this.ctn = ctn;
        this.msg = msg;
    };
    ActivityComponent.prototype.ngOnInit = function () {
    };
    ActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-activity',
            template: __webpack_require__(/*! raw-loader!./activity.component.html */ "./node_modules/raw-loader/index.js!./src/app/activity/activity.component.html"),
            styles: [__webpack_require__(/*! ./activity.component.css */ "./src/app/activity/activity.component.css")]
        })
    ], ActivityComponent);
    return ActivityComponent;
}());



/***/ }),

/***/ "./src/app/ag-grid/ag-grid.component.css":
/*!***********************************************!*\
  !*** ./src/app/ag-grid/ag-grid.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnLWdyaWQvYWctZ3JpZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ag-grid/ag-grid.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ag-grid/ag-grid.component.ts ***!
  \**********************************************/
/*! exports provided: AgGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgGridComponent", function() { return AgGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");




var AgGridComponent = /** @class */ (function () {
    function AgGridComponent(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.columnDefs = [
            { headerName: 'ID', field: 'id', width: 100, resizable: true },
            { headerName: 'USER ID', field: 'userId', width: 100, resizable: true },
            { headerName: 'TITLE', field: 'title', width: 560, resizable: true },
            { headerName: 'COMPLETE', field: 'completed', width: 350, resizable: true }
        ];
    }
    AgGridComponent.prototype.ngOnInit = function () {
        this.rowData = this.http.get(this.globalService.dataApi);
    };
    AgGridComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
    ]; };
    AgGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ag-grid',
            template: __webpack_require__(/*! raw-loader!./ag-grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/ag-grid/ag-grid.component.html"),
            styles: [__webpack_require__(/*! ./ag-grid.component.css */ "./src/app/ag-grid/ag-grid.component.css")]
        })
    ], AgGridComponent);
    return AgGridComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.example-container {\r\n  height: calc(100vh - 64px);\r\n}\r\n\r\n.main-height {\r\n  height: calc(100vh - 65px);\r\n\r\n}\r\n\r\n.Sidenav {\r\n  border-right: 1px solid #dedede;\r\n  padding: 10px;\r\n}\r\n\r\n.Maincontent {\r\n  background: #efefef;\r\n  padding: 10px 15px;\r\n  overflow: auto;\r\n}\r\n\r\n.acc {\r\n  font-size: 14px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.mat-card {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.card-txt {\r\n  color: grey;\r\n  font-size: 14px;\r\n}\r\n\r\n.text-align-rgt {\r\n  text-align: right;\r\n}\r\n\r\n.mini-card i{\r\n      color: dodgerblue;\r\n    font-size: 30px;\r\n}\r\n\r\n.sideNav-txt{\r\n  text-transform: uppercase;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: grey;\r\ncursor: pointer;\r\ntext-decoration: none;\r\n}\r\n\r\n.ft-clr{\r\n      font-size: 14px;\r\n    font-weight: 500;\r\n    color: grey;\r\n}\r\n\r\n.mat-list-base {\r\n    padding-top: 0px !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTttREFDaUQ7RUFDakQsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCOztBQUU1Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7TUFDTSxpQkFBaUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFDQTtFQUNFLHlCQUF5QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZixlQUFlO0FBQ2YscUJBQXFCO0FBQ3JCOztBQUNBO01BQ00sZUFBZTtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG59XHJcblxyXG4ubWFpbi1oZWlnaHQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY1cHgpO1xyXG5cclxufVxyXG5cclxuLlNpZGVuYXYge1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLk1haW5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmFjYyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLXR4dCB7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udGV4dC1hbGlnbi1yZ3Qge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubWluaS1jYXJkIGl7XHJcbiAgICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5zaWRlTmF2LXR4dHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZnQtY2xye1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuLm1hdC1saXN0LWJhc2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular-ie';
        this.today = new Date();
        this.sideNavmenus = [{
                name: 'dashboard',
                icon: 'dashboard'
            },
            {
                name: 'activity',
                icon: 'local_activity'
            },
            {
                name: 'mail',
                icon: 'email'
            },
            {
                name: 'chart',
                icon: 'insert_chart'
            },
            {
                name: 'help',
                icon: 'help'
            },
            {
                name: 'signout',
                icon: 'exit_to_app'
            }
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _highchart_highchart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./highchart/highchart.component */ "./src/app/highchart/highchart.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _activity_activity_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./activity/activity.component */ "./src/app/activity/activity.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _mail_mail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mail/mail.component */ "./src/app/mail/mail.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ag-grid/ag-grid.component */ "./src/app/ag-grid/ag-grid.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");































var routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"] },
    { path: 'activity', component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_18__["ActivityComponent"] },
    { path: 'mail', component: _mail_mail_component__WEBPACK_IMPORTED_MODULE_21__["MailComponent"] },
    { path: 'chart', component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_22__["ChartComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_23__["HelpComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _highchart_highchart_component__WEBPACK_IMPORTED_MODULE_12__["HighchartComponent"],
                _activity_activity_component__WEBPACK_IMPORTED_MODULE_18__["ActivityComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                _mail_mail_component__WEBPACK_IMPORTED_MODULE_21__["MailComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_22__["ChartComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_23__["HelpComponent"],
                _ag_grid_ag_grid_component__WEBPACK_IMPORTED_MODULE_25__["AgGridComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_14__["ChartModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_27__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(routes),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_24__["AgGridModule"].withComponents([])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/*!*******************************************!*\
  !*** ./src/app/chart/chart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart.component.css")]
        })
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Maincontent {\r\n  background: #efefef;\r\n  padding: 10px 15px;\r\n  overflow: auto;\r\n}\r\n\r\n.acc {\r\n  font-size: 14px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.mat-card {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.card-txt {\r\n  color: grey;\r\n  font-size: 14px;\r\n}\r\n\r\n.text-align-rgt {\r\n  text-align: right;\r\n}\r\n\r\n.mini-card i{\r\n      color: dodgerblue;\r\n    font-size: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO01BQ00saUJBQWlCO0lBQ25CLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTWFpbmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYWNjIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNhcmQtdHh0IHtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50ZXh0LWFsaWduLXJndCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5taW5pLWNhcmQgaXtcclxuICAgICAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.title = 'Angular-ie';
        this.today = new Date();
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/global.service.ts":
/*!***********************************!*\
  !*** ./src/app/global.service.ts ***!
  \***********************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalService = /** @class */ (function () {
    function GlobalService() {
        this.dataApi = "https://jsonplaceholder.typicode.com/todos";
    }
    GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7bURBQ2lEO0VBQ2pELG1CQUFjO1VBQWQsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/index.js!./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        })
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/highchart/highchart.component.css":
/*!***************************************************!*\
  !*** ./src/app/highchart/highchart.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpZ2hjaGFydC9oaWdoY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/highchart/highchart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/highchart/highchart.component.ts ***!
  \**************************************************/
/*! exports provided: HighchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighchartComponent", function() { return HighchartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighchartComponent = /** @class */ (function () {
    function HighchartComponent() {
    }
    HighchartComponent.prototype.ngOnInit = function () {
    };
    HighchartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-highchart',
            template: __webpack_require__(/*! raw-loader!./highchart.component.html */ "./node_modules/raw-loader/index.js!./src/app/highchart/highchart.component.html"),
            styles: [__webpack_require__(/*! ./highchart.component.css */ "./src/app/highchart/highchart.component.css")]
        })
    ], HighchartComponent);
    return HighchartComponent;
}());



/***/ }),

/***/ "./src/app/mail/mail.component.css":
/*!*****************************************!*\
  !*** ./src/app/mail/mail.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWwvbWFpbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/mail/mail.component.ts":
/*!****************************************!*\
  !*** ./src/app/mail/mail.component.ts ***!
  \****************************************/
/*! exports provided: MailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComponent", function() { return MailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");




var MailComponent = /** @class */ (function () {
    function MailComponent(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.products = "";
    }
    MailComponent.prototype.get_products = function () {
        var _this = this;
        this.http.get(this.globalService.dataApi).subscribe(function (res) {
            console.log(_this.products);
        });
    };
    ;
    MailComponent.prototype.ngOnInit = function () { };
    MailComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] }
    ]; };
    MailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mail',
            template: __webpack_require__(/*! raw-loader!./mail.component.html */ "./node_modules/raw-loader/index.js!./src/app/mail/mail.component.html"),
            styles: [__webpack_require__(/*! ./mail.component.css */ "./src/app/mail/mail.component.css")]
        })
    ], MailComponent);
    return MailComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAFo7y4JY-bS8wgiyqovlQlIPGda7pAD9E",
        authDomain: "dash-1a311.firebaseapp.com",
        databaseURL: "https://dash-1a311.firebaseio.com",
        projectId: "dash-1a311",
        storageBucket: "",
        messagingSenderId: 480233127837
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Learning\AngularMain\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map