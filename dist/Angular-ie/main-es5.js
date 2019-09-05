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

module.exports = "<div>\r\n\t<mat-card>\r\n    <span class=\"information\">Information</span>\r\n\t<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n\t<mat-form-field fxFlex=\"25\">\r\n    <input matInput placeholder=\"Name\" value=\"{{name}}\" [(ngModel)]=\"name\">\r\n  \t</mat-form-field>\r\n\t<mat-form-field fxFlex=\"25\">\r\n    <input matInput placeholder=\"Email Address\" value=\"{{email}}\" [(ngModel)]=\"email\" [disabled]=\"!name\">\r\n  \t</mat-form-field>\r\n\t<mat-form-field fxFlex=\"25\">\r\n    <input matInput #phone placeholder=\"Contact No\" type=\"tel\" value=\"{{ctn}}\" [(ngModel)]=\"ctn\" maxlength=\"10\" [disabled]=\"!email\">\r\n    <mat-hint align=\"end\">{{phone.value.length}} / 10</mat-hint>\r\n  \t</mat-form-field>\r\n\t</div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n  <mat-form-field fxFlex=\"25\">\r\n    <input matInput placeholder=\"Address\" value=\"{{address}}\" [(ngModel)]=\"address\" [disabled]=\"!ctn\">\r\n    </mat-form-field>\r\n  <mat-form-field fxFlex=\"25\">\r\n    <input matInput placeholder=\"Latitude\" value=\"{{lat}}\" [(ngModel)]=\"lat\">\r\n    </mat-form-field>\r\n  <mat-form-field fxFlex=\"25\">\r\n    <input matInput placeholder=\"Logitude\"  value=\"{{long}}\" [(ngModel)]=\"long\">\r\n    </mat-form-field>\r\n  </div>\r\n\r\n\t<div  fxLayout=\"row\" fxLayoutAlign=\"space-around center\" >\r\n\t<mat-form-field style=\"width: 92%\">\r\n    <input matInput placeholder=\"Message\" value=\"{{msg}}\" [(ngModel)]=\"msg\" maxlength=\"100\" #message [disabled]=\"!address\">\r\n    <mat-hint align=\"end\">{{message.value.length}} / 100</mat-hint>\r\n  \t</mat-form-field>\r\n\t</div>\r\n\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" style=\"margin-right: 4%;\">\r\n\t<button mat-raised-button color=\"primary\" (click)=\"submitFunction(name,email,ctn,msg,address,lat,long);resetForm()\" [disabled]=\"!address || !msg\" routerLink=\"/list\">Submit</button>\r\n\t</div>\r\n\t</mat-card>\r\n</div>\r\n<!-- mat-card>\r\n\t<div *ngFor=\"let hero of courses\">\r\n      {{ hero.name}} || {{ hero.email}} || {{ hero.msg}} || {{hero.ctn}}\r\n    </div>\r\n</mat-card> -->\r\n<!-- <mat-card>\r\n<table>\r\n  <tr>\r\n    <th mat-sort-header=\"name\"  style=\"text-align: left;\">Name</th>\r\n    <th mat-sort-header=\"calories\"  style=\"text-align: left;\">Email</th>\r\n    <th mat-sort-header=\"fat\"  style=\"text-align: left;\">Message</th>\r\n    <th mat-sort-header=\"carbs\"  style=\"text-align: left;\">Contact No</th>\r\n    <th mat-sort-header=\"calories\"  style=\"text-align: left;\">Address</th>\r\n    <th mat-sort-header=\"fat\"  style=\"text-align: left;\">Latitude</th>\r\n    <th mat-sort-header=\"carbs\"  style=\"text-align: left;\">Longitude</th>\r\n  </tr>\r\n\r\n  <tr *ngFor=\"let hero of courses\" (click)=\"delete(name)\">\r\n    <td>{{ hero.name}}</td>\r\n    <td>{{ hero.email}}</td>\r\n    <td>{{ hero.msg}}</td>\r\n    <td>{{hero.ctn}}</td>\r\n    <td>{{ hero.address}}</td>\r\n    <td>{{ hero.lat}}</td>\r\n    <td>{{hero.long}}</td>\r\n  </tr>\r\n</table>\r\n</mat-card> -->"

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

module.exports = "<div>\r\n <mat-toolbar color=\"primary\">\r\n    <span class=\"dash-label\">{{label}}</span>\r\n    <!-- This fills the remaining space of the current row -->\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n      <span>User</span>\r\n      <i class=\"material-icons\">\r\n      perm_identity\r\n    </i>\r\n  </mat-toolbar>\r\n\r\n  <div fxLayout=\"row\" class=\"main-height\">\r\n    <div fxFlex=\"15\" class=\"Sidenav\" style=\"padding: 0;\">\r\n      <!-- <div routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</div>\r\n      <div routerLink=\"/activity\" routerLinkActive=\"active\">Activity</div> -->\r\n      <mat-list>\r\n        <div *ngFor=\"let menu of sideNavmenus;let i = index\" (click)=\"selectItem(i,menu)\" class=\"sideNav-txt\">\r\n        <mat-list-item routerLink=\"/{{menu.name}}\" [ngClass]=\"{'active': selectedIdx == i}\">\r\n           <button mat-icon-button matTooltip=\"{{menu.icon}}\" matTooltipPosition=\"right\">\r\n          <mat-icon mat-list-icon style=\"color: #232f3e;\">{{menu.icon}}</mat-icon>\r\n  </button>\r\n          <h4 mat-line><span class=\"ft-clr\">{{menu.name}}</span></h4>\r\n        </mat-list-item>\r\n      </div>\r\n      </mat-list>\r\n    </div>\r\n     <div fxFlex=\"85\" class=\"Maincontent\" [ngStyle]=\"{'padding':selectedIdx === 0 ? '0px' : '15px' }\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chart/chart.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chart/chart.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label class=\"image-upload-container btn btn-bwm\">\r\n  <span>Select Image</span>\r\n  <input #imageInput\r\n         type=\"file\"\r\n         accept=\"image/*\"\r\n         (change)=\"processFile(imageInput)\">\r\n</label>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      <mat-card class=\"margin-bottom-15\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div>\r\n            <div><b>{{greet}}</b>, Z-Team</div>\r\n            <div class=\"acc\">Account Type: <b>Personal</b></div>\r\n          </div>\r\n          <div>\r\n            <div>Time: <b>{{date | date:'hh:mm a':'+0530'}}</b></div>\r\n            <div class=\"acc\">Date: <b>{{date | date:'dd-MM-yyyy'}}</b></div>\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"mini-card\">\r\n        <mat-card fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div><i class=\"material-icons\">person</i></div>\r\n          <div class=\"card-txt\">\r\n            <div class=\"text-align-rgt card-val\">{{courses.length}}</div>\r\n            <div>Total User</div>\r\n          </div>\r\n        </mat-card>\r\n        <mat-card fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div><i class=\"material-icons\">shopping_cart</i></div>\r\n          <div class=\"card-txt\">\r\n            <div class=\"text-align-rgt card-val\">${{courses.length * 57}}</div>\r\n            <div>Today's sale</div>\r\n          </div>\r\n        </mat-card>\r\n        <mat-card fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div><i class=\"material-icons\">visibility</i></div>\r\n          <div class=\"card-txt\">\r\n            <div class=\"text-align-rgt card-val\">{{courses.length * 5}}</div>\r\n            <div>Total Visits</div>\r\n          </div>\r\n        </mat-card>\r\n        <mat-card fxFlex=\"20\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <div><i class=\"material-icons\">touch_app</i></div>\r\n          <div class=\"card-txt\">\r\n            <div class=\"text-align-rgt card-val\">{{courses.length * 2}}</div>\r\n            <div>Online Orders</div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n      <div>\r\n        <table mat-table [dataSource]=\"courses\" class=\"mat-elevation-z8\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef> Name. </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"address\">\r\n    <th mat-header-cell *matHeaderCellDef> Address </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"email\">\r\n    <th mat-header-cell *matHeaderCellDef> Email </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"ctn\">\r\n    <th mat-header-cell *matHeaderCellDef> Contact No </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.ctn}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span>Dashboard</span>\r\n    <!-- This fills the remaining space of the current row -->\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n      <span>User</span>\r\n      <i class=\"material-icons\">\r\n      perm_identity\r\n    </i>\r\n  </mat-toolbar>\r\n"

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

module.exports = "<div>\r\n  <div style=\"float: right;\"> \r\n    <button mat-icon-button matTooltip=\"Add\" matTooltipPosition=\"right\" routerLink=\"/activity\">\r\n          <mat-icon mat-list-icon style=\"color: #232f3e;\">library_add</mat-icon>\r\n    </button>\r\n  </div>\r\n<table mat-table [dataSource]=\"courses\" class=\"mat-elevation-z8\">\r\n  <ng-container matColumnDef=\"name\">\r\n    <th mat-header-cell *matHeaderCellDef><mat-checkbox color=\"primary\">Name</mat-checkbox>  </th>\r\n    <td mat-cell *matCellDef=\"let element\"> <mat-checkbox color=\"primary\">{{element.name}}</mat-checkbox> </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"email\">\r\n    <th mat-header-cell *matHeaderCellDef> Email </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"msg\">\r\n    <th mat-header-cell *matHeaderCellDef> Message </th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.msg}} </td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/map/map.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map \r\n  [latitude]=\"lat\"\r\n  [longitude]=\"lng\"\r\n  [zoom]=\"zoom\"\r\n  [disableDefaultUI]=\"false\"\r\n  [zoomControl]=\"true\"\r\n  [styles]=\"mapStyle\"\r\n  (mapClick)=\"mapClicked($event)\">\r\n <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\"> \r\n  <agm-marker \r\n      *ngFor=\"let m of courses\"\r\n      [latitude]=\"m.lat\"\r\n      [longitude]=\"m.long\"\r\n      [label]=\"m.label\"\r\n      [iconUrl]=\"'../assets/pin.png'\"\r\n      >\r\n      <!-- (mouseOver)=\"onMouseOver(infoWindow,$event)\" -->\r\n    <agm-info-window #infoWindow>\r\n      <strong>{{m.name}}</strong>\r\n    </agm-info-window>\r\n  </agm-marker>\r\n  </agm-marker-cluster>\r\n  </agm-map>\r\n\r\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>page-not-found!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/passwordmgt/dialog.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/passwordmgt/dialog.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n\t.mat-form-field {\r\n    display: inline-block;\r\n    position: relative;\r\n    text-align: left;\r\n    width: 100%;\r\n}\r\n</style>\r\n<h1 mat-dialog-title >Details</h1>\r\n<div mat-dialog-content>\r\n<mat-form-field style=\"width: 100%;\">\r\n  <mat-label>Select Type</mat-label>\r\n  <mat-select [(value)]=\"data.type\">\r\n    <mat-option value=\"cardetail\">Card Details</mat-option>\r\n    <mat-option value=\"social\">Social Media</mat-option>\r\n    <mat-option value=\"bank\">Bank Account</mat-option>\r\n    <mat-option value=\"personal\">Personal</mat-option>\r\n  </mat-select>\r\n</mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Name\" [(ngModel)]=\"data.name\" [disabled]=\"!data.type == cardetail ? true : null\">\r\n  </mat-form-field>\r\n     <mat-form-field>\r\n    <input matInput placeholder=\"Username\" [(ngModel)]=\"data.username\">\r\n  </mat-form-field>\r\n   <mat-form-field>\r\n    <input matInput placeholder=\"Password\" [(ngModel)]=\"data.password\">\r\n  </mat-form-field>\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"Comments\" [(ngModel)]=\"data.comments\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions align=\"end\">\r\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\r\n  <button mat-button color=\"primary\"  [mat-dialog-close]=\"data\" cdkFocusInitial>Submit</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/passwordmgt/passwordmgt.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/passwordmgt/passwordmgt.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<div>\r\n   <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Add Password</button>\r\n</div>\r\n<div fxLayout=\"row wrap\" fxLayoutGap=\"20px\">\r\n\t<div *ngFor=\"let t of passData\" fxFlex=\"30\">\r\n\t<mat-card style=\"margin-top: 20px;font-size: 15px;color: grey;\" [ngClass]=\"{'yellow': t.type == 'social','lime': t.type == 'personal','blue': t.type == 'cardetail','grey': t.type == 'bank'}\">\r\n\t\t<span class=\"name\">{{t.name}}</span>\r\n\t\t<div><span>Username</span> : <span>{{t.username}}</span></div>\r\n\t\t<div><span>Password</span> : <span>{{t.password}}</span></div>\r\n\t\t<div><span>Comments</span> : <span>{{t.comments}}</span></div>\r\n\t</mat-card>\r\n\t</div>\r\n</div> \r\n</div>"

/***/ }),

/***/ "./src/app/activity/activity.component.css":
/*!*************************************************!*\
  !*** ./src/app/activity/activity.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n    width: 100%;\r\n}\r\n.information {\r\n    font-size: 17px;\r\n    padding-left: 45px;\r\n    font-weight: 600;\r\n    color: #25282bbd;\r\n    text-transform: uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXR5L2FjdGl2aXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoiYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pbmZvcm1hdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMyNTI4MmJiZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn0iXX0= */"

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
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");




var ActivityComponent = /** @class */ (function () {
    function ActivityComponent(db, globalService) {
        var _this = this;
        this.db = db;
        this.globalService = globalService;
        this.name = "";
        this.email = "";
        this.ctn = "";
        this.msg = "";
        this.address = "";
        this.basePath = '/details';
        db.list(this.basePath).valueChanges()
            .subscribe(function (courses) {
            _this.courses = courses;
        });
    }
    ActivityComponent.prototype.getData = function () {
        return this.courses;
    };
    ActivityComponent.prototype.submitFunction = function (name, email, ctn, msg, address, lat, long) {
        var dataObj = {
            name: name,
            email: email,
            ctn: ctn,
            msg: msg,
            address: address,
            lat: lat,
            long: long
        };
        this.globalService.addFunction(dataObj);
    };
    ActivityComponent.prototype.resetForm = function () {
        this.name = "",
            this.email = "",
            this.ctn = "",
            this.msg = "",
            this.address = "",
            this.lat = "",
            this.long = "";
    };
    ActivityComponent.prototype.delete = function (name) {
        debugger;
        this.courses.remove(name);
    };
    ActivityComponent.prototype.ngOnInit = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            // console.log("Got position", position.coords);
            _this.lat = position.coords.latitude;
            _this.long = position.coords.longitude;
        });
    };
    ActivityComponent.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
    ]; };
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZy1ncmlkL2FnLWdyaWQuY29tcG9uZW50LmNzcyJ9 */"

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

module.exports = ".example-fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n}\r\n.example-container {\r\n    height: calc(100vh - 64px);\r\n}\r\n.main-height {\r\n    height: calc(100vh - 57px);\r\n}\r\n.Sidenav {\r\n    border-right: 1px solid #dedede;\r\n    padding: 10px;\r\n}\r\n.Maincontent {\r\n    background: #efefef;\r\n    /*padding: 10px 15px;*/\r\n    overflow: auto;\r\n}\r\n.acc {\r\n    font-size: 14px;\r\n    padding-top: 10px;\r\n}\r\n.mat-card {\r\n    margin-bottom: 15px;\r\n}\r\n.card-txt {\r\n    color: grey;\r\n    font-size: 14px;\r\n}\r\n.text-align-rgt {\r\n    text-align: right;\r\n}\r\n.mini-card i {\r\n    color: dodgerblue;\r\n    font-size: 30px;\r\n}\r\n.sideNav-txt {\r\n    text-transform: uppercase;\r\n    font-size: 15px;\r\n    font-weight: 600;\r\n    color: grey;\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n.ft-clr {\r\n    font-size: 14px;\r\n    font-weight: 500 !important;\r\n    color: #232f3e;\r\n}\r\n.mat-list-base {\r\n    padding-top: 0px !important;\r\n}\r\ntable {\r\n    width: 100%;\r\n}\r\n.active {\r\n    background: #FFC107;\r\n}\r\n.example-fill-remaining-space {\r\n    /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n}\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n    height: 56px;\r\n}\r\n.mat-toolbar.mat-primary {\r\n    background: #232f3e !important;\r\n    color: #fff;\r\n}\r\n.toolbar-fullscreen {\r\n    display: none;\r\n}\r\n.toolbar-filler {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto\r\n}\r\n.dash-label {\r\n    text-transform: uppercase;\r\n    font-size: 17px;\r\n    letter-spacing: 0.03cm;\r\n    padding-left: 17px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7bURBQytDO0lBQy9DLG1CQUFjO1lBQWQsY0FBYztBQUNsQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJO21EQUMrQztJQUMvQyxtQkFBYztZQUFkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFhO1lBQWI7QUFDSjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG59XHJcbi5tYWluLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1N3B4KTtcclxufVxyXG4uU2lkZW5hdiB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uTWFpbmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICAgIC8qcGFkZGluZzogMTBweCAxNXB4OyovXHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uYWNjIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5jYXJkLXR4dCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4udGV4dC1hbGlnbi1yZ3Qge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLm1pbmktY2FyZCBpIHtcclxuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5zaWRlTmF2LXR4dCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5mdC1jbHIge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMyMzJmM2U7XHJcbn1cclxuLm1hdC1saXN0LWJhc2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGQzEwNztcclxufVxyXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxyXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICMyMzJmM2UgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi50b29sYmFyLWZ1bGxzY3JlZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udG9vbGJhci1maWxsZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG9cclxufVxyXG4uZGFzaC1sYWJlbCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNjbTtcclxuICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Angular-ie';
        this.today = new Date();
        this.sideNavmenus = [{
                name: 'map',
                icon: 'map'
            },
            {
                name: 'activity',
                icon: 'local_activity'
            },
            {
                name: 'list',
                icon: 'list'
            },
            {
                name: 'chart',
                icon: 'insert_chart'
            },
            {
                name: 'dashboard',
                icon: 'dashboard'
            },
            {
                name: 'passwordmgt',
                icon: 'vpn_key'
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
        this.selectedIdx = 0;
        this.label = "MAP";
    }
    AppComponent.prototype.selectItem = function (index, menu) {
        this.selectedIdx = index;
        this.label = menu.name;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['']);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @agm/js-marker-clusterer */ "./node_modules/@agm/js-marker-clusterer/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _passwordmgt_passwordmgt_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./passwordmgt/passwordmgt.component */ "./src/app/passwordmgt/passwordmgt.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");













































var routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"] },
    { path: 'activity', component: _activity_activity_component__WEBPACK_IMPORTED_MODULE_18__["ActivityComponent"] },
    { path: 'list', component: _mail_mail_component__WEBPACK_IMPORTED_MODULE_21__["MailComponent"] },
    { path: 'chart', component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_22__["ChartComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_23__["HelpComponent"] },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_33__["MapComponent"] },
    { path: 'passwordmgt', component: _passwordmgt_passwordmgt_component__WEBPACK_IMPORTED_MODULE_40__["PasswordmgtComponent"] },
    { path: '', component: _map_map_component__WEBPACK_IMPORTED_MODULE_33__["MapComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__["PageNotFoundComponent"] },
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
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__["PageNotFoundComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_33__["MapComponent"],
                _passwordmgt_passwordmgt_component__WEBPACK_IMPORTED_MODULE_40__["PasswordmgtComponent"],
                _passwordmgt_passwordmgt_component__WEBPACK_IMPORTED_MODULE_40__["DialogOverviewExampleDialog"]
            ],
            entryComponents: [_passwordmgt_passwordmgt_component__WEBPACK_IMPORTED_MODULE_40__["PasswordmgtComponent"], _passwordmgt_passwordmgt_component__WEBPACK_IMPORTED_MODULE_40__["DialogOverviewExampleDialog"]],
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
                _angular_fire__WEBPACK_IMPORTED_MODULE_26__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_27__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["FormsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__["NgbPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_39__["NgbAlertModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_41__["MatDialogModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_43__["MatSelectModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_38__["LeafletModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"].forRoot(routes),
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_24__["AgGridModule"].withComponents([]),
                _agm_core__WEBPACK_IMPORTED_MODULE_34__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCsfAKMcwNFRB3o4uGi6Z5BD9-1kw6yy34'
                }),
                _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_35__["AgmJsMarkerClustererModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydC9jaGFydC5jb21wb25lbnQuY3NzIn0= */"

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

module.exports = ".Maincontent {\r\n  background: #efefef;\r\n  padding: 10px 15px;\r\n  overflow: auto;\r\n}\r\n\r\n.acc {\r\n  font-size: 14px;\r\n  padding-top: 10px;\r\n}\r\n\r\n.mat-card {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.card-txt {\r\n  color: grey;\r\n  font-size: 14px;\r\n}\r\n\r\n.text-align-rgt {\r\n  text-align: right;\r\n}\r\n\r\n.mini-card i{\r\n    color: #232f3e;\r\n    font-size: 30px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.card-val{\r\n  font-size: 18px;\r\n    font-weight: 600;\r\n    color: #232f3e;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsZUFBZTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCIiwiZmlsZSI6ImRhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5NYWluY29udGVudCB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5hY2Mge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1hdC1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZC10eHQge1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRleHQtYWxpZ24tcmd0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm1pbmktY2FyZCBpe1xyXG4gICAgY29sb3I6ICMyMzJmM2U7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jYXJkLXZhbHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMyMzJmM2U7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(db) {
        var _this = this;
        this.db = db;
        this.title = 'Angular-ie';
        this.date = new Date();
        this.time = this.date.getHours();
        this.greet = "";
        this.basePath = '/details';
        this.displayedColumns = ['name', 'address', 'email', 'ctn'];
        db.list(this.basePath).valueChanges()
            .subscribe(function (courses) {
            _this.courses = courses;
        });
        if (this.time < 12) {
            debugger;
            this.greet = "Good morning";
        }
        else if (this.time < 14) {
            this.greet = "Good Afternoon";
        }
        else {
            this.greet = "Good evening";
        }
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var GlobalService = /** @class */ (function () {
    function GlobalService(db) {
        this.db = db;
        this.basePath = '/details';
        this.passPath = '/password';
        this.dataApi = "https://jsonplaceholder.typicode.com/todos";
    }
    GlobalService.prototype.addFunction = function (data) {
        var obj = this.db.database.ref(this.basePath);
        obj.push(data);
        console.log('Success');
    };
    GlobalService.prototype.passwordFunction = function (data) {
        var obj = this.db.database.ref(this.passPath);
        debugger;
        obj.push(data);
        console.log('Success');
    };
    GlobalService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
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

module.exports = ".example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.mat-toolbar-row, .mat-toolbar-single-row {\r\n    height: 56px;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n    background: #232f3e !important;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO21EQUNpRDtFQUNqRCxtQkFBYztVQUFkLGNBQWM7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLFdBQVc7QUFDZiIsImZpbGUiOiJoZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXItcm93LCAubWF0LXRvb2xiYXItc2luZ2xlLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbn1cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICMyMzJmM2UgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwL2hlbHAuY29tcG9uZW50LmNzcyJ9 */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaWdoY2hhcnQvaGlnaGNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

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

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haWwvbWFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6Im1haWwvbWFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");




var MailComponent = /** @class */ (function () {
    function MailComponent(db, globalService) {
        var _this = this;
        this.db = db;
        this.globalService = globalService;
        this.basePath = '/details';
        this.displayedColumns = ['name', 'email', 'msg'];
        db.list(this.basePath).valueChanges()
            .subscribe(function (courses) {
            _this.courses = courses;
        });
    }
    MailComponent.prototype.ngOnInit = function () {
    };
    MailComponent.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] }
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

/***/ "./src/app/map.service.ts":
/*!********************************!*\
  !*** ./src/app/map.service.ts ***!
  \********************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapService = /** @class */ (function () {
    function MapService() {
        this.dayStyles = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#523735"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9b2a6"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#dcd2be"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ae9e90"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#93817c"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#a5b076"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#447530"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f1e6"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fdfcf8"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f8c967"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#e9bc62"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e98d58"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#db8555"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#806b63"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8f7d77"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ebe3cd"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dfd2ae"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b9d3c2"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#92998d"
                    }
                ]
            }
        ];
        this.nightStyles = [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8ec3b9"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1a3646"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#64779e"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#4b6878"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#334e87"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#6f9ba5"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3C7680"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#304a7d"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2c6675"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#255763"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#b0d5ce"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#023e58"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#98a5be"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1d2c4d"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#283d6a"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3a4762"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0e1626"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#4e6d70"
                    }
                ]
            }
        ];
    }
    MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC9tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJtYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");




var MapComponent = /** @class */ (function () {
    function MapComponent(db, mapService) {
        var _this = this;
        this.db = db;
        this.mapService = mapService;
        // google maps zoom level
        this.zoom = 2;
        this.basePath = '/details';
        this.today = new Date();
        this.hours = this.today.getHours();
        if (navigator) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                _this.lng = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
            });
            db.list(this.basePath).valueChanges()
                .subscribe(function (data) {
                _this.courses = data;
            });
            if (this.hours < 18) {
                this.mapStyle = this.mapService.dayStyles;
            }
            else {
                this.mapStyle = this.mapService.nightStyles;
            }
        }
    }
    MapComponent.prototype.getData = function () {
        return this.courses;
    };
    MapComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    // mapClicked($event: MouseEvent) {
    //   this.markers.push({
    //     lat: $event.coords.lat,
    //     lng: $event.coords.lng,
    //     draggable: false
    //   });
    // }
    // markerDragEnd(m: marker, $event: MouseEvent) {
    //   console.log('dragEnd', m, $event);
    // }
    // markers: marker[] = [
    //   {
    //     lat: 22.9676,
    //     lng: 76.0534,
    //     label: 'A',
    //     draggable: true,
    //     name: 'Dewas'
    //   },
    //   {
    //     lat: 22.7196,
    //     lng: 75.8577,
    //     label: 'B',
    //     draggable: false,
    //     name: 'Indore'
    //   }
    // ]
    MapComponent.prototype.onMouseOver = function (infoWindow) {
        infoWindow.open();
    };
    MapComponent.prototype.ngOnInit = function () { };
    MapComponent.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"] }
    ]; };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")]
        })
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

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

/***/ "./src/app/passwordmgt/passwordmgt.component.css":
/*!*******************************************************!*\
  !*** ./src/app/passwordmgt/passwordmgt.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-title {\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-size: 18px;\r\n    color: grey;\r\n}\r\n.name {\r\n    font-size: 15px;\r\n    font-weight: 500;\r\n    /*letter-spacing: 0.5px;*/\r\n    color: #000000;\r\n    text-transform: uppercase;\r\n}\r\n.yellow{\r\n\tbackground-color: #FF8F00;\r\n\tcolor: #ffffff !important;\r\n}\r\n.lime{\r\n\tbackground-color: #9E9D24;\r\n\tcolor: #ffffff !important;\r\n\r\n}\r\n.blue{\r\n\tbackground-color: #1565C0;\r\n\tcolor: #ffffff !important;\r\n\r\n}\r\n.grey{\r\n\tbackground-color: #424242;\r\n\tcolor: #ffffff !important;\r\n\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkbWd0L3Bhc3N3b3JkbWd0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qix5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLHlCQUF5QjtDQUN6Qix5QkFBeUI7O0FBRTFCO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIseUJBQXlCOztBQUUxQjtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLHlCQUF5Qjs7QUFFMUIiLCJmaWxlIjoicGFzc3dvcmRtZ3QvcGFzc3dvcmRtZ3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG4ubmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgLypsZXR0ZXItc3BhY2luZzogMC41cHg7Ki9cclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnllbGxvd3tcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4RjAwO1xyXG5cdGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saW1le1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM5RTlEMjQ7XHJcblx0Y29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuXHJcbn1cclxuLmJsdWV7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzE1NjVDMDtcclxuXHRjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4uZ3JleXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xyXG5cdGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcblx0XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/passwordmgt/passwordmgt.component.ts":
/*!******************************************************!*\
  !*** ./src/app/passwordmgt/passwordmgt.component.ts ***!
  \******************************************************/
/*! exports provided: PasswordmgtComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordmgtComponent", function() { return PasswordmgtComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global.service */ "./src/app/global.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");






var PasswordmgtComponent = /** @class */ (function () {
    function PasswordmgtComponent(dialog, globalService, db) {
        var _this = this;
        this.dialog = dialog;
        this.globalService = globalService;
        this.db = db;
        this.array = [];
        this.passPath = '/password';
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        db.list(this.passPath).valueChanges()
            .subscribe(function (password) {
            _this.passData = password;
        });
    }
    PasswordmgtComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '350px',
            data: { name: this.name, username: this.username, password: this.password, comments: this.comments, type: this.type }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.data = result;
            var obj = _this.db.database.ref(_this.passPath);
            obj.push(_this.data);
            // this.array.push(this.data);
        });
    };
    PasswordmgtComponent.prototype.ngOnInit = function () {
    };
    PasswordmgtComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"] }
    ]; };
    PasswordmgtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-passwordmgt',
            template: __webpack_require__(/*! raw-loader!./passwordmgt.component.html */ "./node_modules/raw-loader/index.js!./src/app/passwordmgt/passwordmgt.component.html"),
            styles: [__webpack_require__(/*! ./passwordmgt.component.css */ "./src/app/passwordmgt/passwordmgt.component.css")]
        })
    ], PasswordmgtComponent);
    return PasswordmgtComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! raw-loader!./dialog.html */ "./node_modules/raw-loader/index.js!./src/app/passwordmgt/dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
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
    firebaseConfig: {
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