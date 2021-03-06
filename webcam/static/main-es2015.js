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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<nav class=\"navbar navbar-expand-sm bg-light\">\n    <div class=\"container-fluid\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLink=\"upload\" class=\"nav-link\" routerLinkActive=\"active\">\n            Add images\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"match\" class=\"nav-link\" routerLinkActive=\"active\">\n            Check similarity\n          </a>\n          <li class=\"nav-item\">\n            <a routerLink=\"matchVid\" class=\"nav-link\" routerLinkActive=\"active\">\n              Check Video similarity\n            </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"select\" class=\"nav-link\" routerLinkActive=\"active\">\n            Select Person\n          </a>\n        </li> \n \n      </ul>\n    </div>\n  </nav>\n  \n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class =\"img-selection\">\n    <div>\n      <button (click) = \"next()\"> Next</button>\n      <button (click) = \"prev()\"> prev</button>\n    </div>\n\n    <div>\n    <img *ngIf=\"imgbase64\"  src=\"{{'data:image/jpg;base64,' + imgbase64}}\" alt=\"First slide\">\n    </div>\n</div>\n\n<div>\n  <input type=\"text\" (input) = \"nsim\">\n</div>\n<div class=\"img-similar\">\n    <div *ngIf=\"similar\">\n        <img  *ngFor=\"let sim of similar\"  class =\"img-single\" src=\"{{'data:image/jpg;base64,' + sim}}\" alt=\"First slide\">\n      </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-carousel  class=\"carousel-multi-item multi-animation\" \n              [animation]=\"'slide'\">\n  <mdb-carousel-item *ngFor=\"let item of slides; let i = index\">\n    <div class=\"col-md-4\" [ngClass]=\"{'d-none d-md-block': cardIndex !== 0}\"\n         *ngFor=\"let card of item; let cardIndex = index\">\n      <mdb-card class=\"my-1\">\n        <mdb-card-img [src]=\"card.img\" alt=\"Card image cap\"></mdb-card-img>\n        <button class=\"btn btn-primary\" (click) = \"select(card)\">Select</button>\n      </mdb-card>\n    </div>\n  </mdb-carousel-item>\n</mdb-carousel>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align:center\">\n        <h1>\n          WebCam capture\n        </h1>\n      \n        <div>\n          <webcam [height]=\"500\" [width]=\"500\" [trigger]=\"triggerObservable\" (imageCapture)=\"handleImage($event)\" *ngIf=\"showWebcam\"\n                  [switchCamera]=\"nextWebcamObservable\"\n                  [videoOptions]=\"videoOptions\"\n                  [imageQuality]=\"1\"\n                  (cameraSwitched)=\"cameraWasSwitched($event)\"\n                  (initError)=\"handleInitError($event)\"\n          ></webcam>\n          <br/>\n          <div>\n          <button type = \"button\" class=\"btn btn-primary\" (click)=\"triggerSnapshot();\">Take A Snapshot</button>\n          <button type = \"button\" class=\"btn btn-primary\" (click)=\"uploadFile();\">Upload</button>\n          <div>\n              <label name=\"File name prefix\"> File Name prefix</label>\n          <input type = \"text\" [value] = filePrefix>\n          </div>\n          <div>\n          <br/>\n        </div>\n      </div>\n      \n      <div class=\"snapshot\" *ngIf=\"webcamImage\">\n        <h2>Nice one!</h2>\n        <img [src]=\"webcamImage.imageAsDataUrl\"/>\n      </div>\n      \n      <h4 *ngIf=\"errors.length > 0\">Messages:</h4>\n      <ul *ngFor=\"let error of errors\">\n        <li>{{error | json}}</li>\n      </ul>\n   \n      \n      ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/videomatch/videomatch.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videomatch/videomatch.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\n    <ul>\n        <li *ngFor =\"let vidName of vidNames\"> <a (click) = \"select(vidName)\">{{vidName}}</a></li>\n    </ul>\n\n</div>\n<div class = \"playlist\">\n\n    <vg-player *ngFor=\"let video of playlist\" class=\"video-container\">\n        <vg-overlay-play></vg-overlay-play>\n        <vg-buffering></vg-buffering>\n\n        <vg-scrub-bar>\n            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n        </vg-scrub-bar>\n\n        <vg-controls>\n            <vg-play-pause></vg-play-pause>\n            <vg-playback-button></vg-playback-button>\n\n            <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n            <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\n\n            <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\n            <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n\n            <vg-track-selector></vg-track-selector>\n            <vg-mute></vg-mute>\n            <vg-volume></vg-volume>\n\n            <vg-fullscreen></vg-fullscreen>\n        </vg-controls>\n\n        <video #mediaOne [vgMedia]=\"mediaOne\" preload=\"auto\" crossorigin>\n            <source [src]=\"video.src\" [type]=\"video.type\">\n            <!-- <track kind=\"subtitles\" label=\"English\" src=\"assets/subs/pale-blue-dot.vtt\" srclang=\"en\" default> -->\n            <!-- <track kind=\"subtitles\" label=\"Español\" src=\"assets/subs/pale-blue-dot-es.vtt\" srclang=\"es\"> -->\n        </video>\n        <ul>\n            <!-- <li *ngFor=\"let item of playlist; let $index = index\"\n        (click)=\"onClickPlaylistItem(item, $index)\"\n        [class.selected]=\"item === currentItem\">\n        {{ item.title }}\n    </li> -->\n        </ul>\n    </vg-player>\n\n</div>\n<!-- <ul>\n    <li *ngFor=\"let item of playlist; let $index = index\"\n        (click)=\"onClickPlaylistItem(item, $index)\"\n        [class.selected]=\"item === currentItem\">\n        {{ item.title }}\n    </li>\n </ul> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _match_match_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./match/match.component */ "./src/app/match/match.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select/select.component */ "./src/app/select/select.component.ts");
/* harmony import */ var _videomatch_videomatch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./videomatch/videomatch.component */ "./src/app/videomatch/videomatch.component.ts");







const routes = [
    {
        path: 'upload',
        component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"]
    },
    {
        path: 'match',
        component: _match_match_component__WEBPACK_IMPORTED_MODULE_4__["MatchComponent"]
    },
    {
        path: 'select',
        component: _select_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"]
    },
    {
        path: 'matchVid',
        component: _videomatch_videomatch_component__WEBPACK_IMPORTED_MODULE_6__["VideomatchComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-selection {\n  width: 20%;\n  height: 20%;\n}\n\n.img-similar {\n  width: 100%;\n  height: 100%;\n}\n\n.img-single {\n  width: 20%;\n  height: 20%;\n  display: inline-block;\n}\n\n.videocontainer {\n  width: 20%;\n  height: 20;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaWJpbi9Eb3dubG9hZHMvUmVzZWFyY2gvZW1vdGlvbnMtdWkvd2ViY2FtL2Zyb250ZW5kL2ZleHAtdWkvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1zZWxlY3Rpb257XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDIwJTtcbn1cbi5pbWctc2ltaWxhcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uaW1nLXNpbmdsZXtcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMjAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi52aWRlb2NvbnRhaW5lcntcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMjA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSIsIi5pbWctc2VsZWN0aW9uIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5pbWctc2ltaWxhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWctc2luZ2xlIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnZpZGVvY29udGFpbmVyIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'fexp-ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _match_match_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./match/match.component */ "./src/app/match/match.component.ts");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select/select.component */ "./src/app/select/select.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _videomatch_videomatch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./videomatch/videomatch.component */ "./src/app/videomatch/videomatch.component.ts");
/* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! videogular2/compiled/core */ "./node_modules/videogular2/compiled/core.js");
/* harmony import */ var videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! videogular2/compiled/controls */ "./node_modules/videogular2/compiled/controls.js");
/* harmony import */ var videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! videogular2/compiled/overlay-play */ "./node_modules/videogular2/compiled/overlay-play.js");
/* harmony import */ var videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! videogular2/compiled/buffering */ "./node_modules/videogular2/compiled/buffering.js");
/* harmony import */ var videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15__);
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _upload_upload_component__WEBPACK_IMPORTED_MODULE_5__["UploadComponent"],
            _match_match_component__WEBPACK_IMPORTED_MODULE_6__["MatchComponent"],
            _select_select_component__WEBPACK_IMPORTED_MODULE_9__["SelectComponent"],
            _videomatch_videomatch_component__WEBPACK_IMPORTED_MODULE_11__["VideomatchComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            videogular2_compiled_core__WEBPACK_IMPORTED_MODULE_12__["VgCoreModule"],
            videogular2_compiled_controls__WEBPACK_IMPORTED_MODULE_13__["VgControlsModule"],
            videogular2_compiled_overlay_play__WEBPACK_IMPORTED_MODULE_14__["VgOverlayPlayModule"],
            videogular2_compiled_buffering__WEBPACK_IMPORTED_MODULE_15__["VgBufferingModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_7__["WebcamModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MDBBootstrapModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/match/match.component.scss":
/*!********************************************!*\
  !*** ./src/app/match/match.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 768px) {\n  .carousel-multi-item-2 .col-md-3 {\n    float: left;\n    width: 25%;\n    max-width: 100%;\n  }\n}\n.carousel-multi-item-2 .card img {\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaWJpbi9Eb3dubG9hZHMvUmVzZWFyY2gvZW1vdGlvbnMtdWkvd2ViY2FtL2Zyb250ZW5kL2ZleHAtdWkvc3JjL2FwcC9tYXRjaC9tYXRjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0Y2gvbWF0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0EsZUFBQTtFQ0NGO0FBQ0Y7QURBSTtFQUNBLGtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9tYXRjaC9tYXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jYXJvdXNlbC1tdWx0aS1pdGVtLTIgLmNvbC1tZC0zIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1heC13aWR0aDogMTAwJTsgfSB9XG4gICAgXG4gICAgLmNhcm91c2VsLW11bHRpLWl0ZW0tMiAuY2FyZCBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgfVxuXG5cbiIsIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2Fyb3VzZWwtbXVsdGktaXRlbS0yIC5jb2wtbWQtMyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jYXJvdXNlbC1tdWx0aS1pdGVtLTIgLmNhcmQgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/match/match.component.ts":
/*!******************************************!*\
  !*** ./src/app/match/match.component.ts ***!
  \******************************************/
/*! exports provided: MatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchComponent", function() { return MatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MatchComponent = class MatchComponent {
    constructor(http) {
        this.http = http;
        this.imageList = [];
        this.listAllUrl = '/upload/';
        this.imageLoadUrl = '/upload/';
        this.matchLoadUrl = '/match/';
        this.similar = [];
        this.curIndex = 0;
        this.nsim = 5;
    }
    ngOnInit() {
        //console.log("initlize"+ this.listAllUrl);
        this.http.get(this.listAllUrl).subscribe(res => {
            //console.log(res);
            let data = res['files'];
            //console.log("data"+data);
            // tslint:disable-next-line: align
            for (let i = 0; i < data.length; i++) {
                this.imageList.push(data[i]['file_name']);
            }
        }, (err => {
            //console.log(err);
        }));
    }
    loadImage() {
        const url = this.imageLoadUrl + this.imageList[this.curIndex];
        this.http.get(url).subscribe((res => {
            this.imgbase64 = res.toString();
            //console.log("img:"+this.imgbase64);
        }));
    }
    loadImage2(file) {
        const url = this.imageLoadUrl + file;
        return this.http.get(url);
    }
    next() {
        this.curIndex = (this.curIndex + 1) % this.imageList.length;
        this.loadImage();
        this.loadSim();
    }
    prev() {
        this.curIndex = (this.curIndex + this.imageList.length - 1) % this.imageList.length;
        this.loadImage();
        this.loadSim();
    }
    loadSim() {
        const url = this.matchLoadUrl + this.imageList[this.curIndex];
        this.http.get(url).subscribe((res => {
            let files = res;
            const n = Math.min(this.nsim, files.length);
            files = files.slice(0, n);
            this.similar = new Array(files.length);
            console.log(files);
            for (let i = 0; i < files.length; i++) {
                this.loadImage2(files[i]).subscribe((res => { this.similar[i] = res.toString(); }));
            }
        }));
    }
};
MatchComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-match',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./match.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/match/match.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./match.component.scss */ "./src/app/match/match.component.scss")).default]
    })
], MatchComponent);



/***/ }),

/***/ "./src/app/select/select.component.scss":
/*!**********************************************!*\
  !*** ./src/app/select/select.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/select/select.component.ts":
/*!********************************************!*\
  !*** ./src/app/select/select.component.ts ***!
  \********************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SelectComponent = class SelectComponent {
    constructor(renderer, http) {
        this.renderer = renderer;
        this.http = http;
        this.cards = [
        // {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
        // {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
        // {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
        // {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
        // {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
        // {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
        // {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
        // {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
        // {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg'},
        ];
        this.slides = [[]];
    }
    chunk(arr, chunkSize) {
        let R = [];
        for (let i = 0, len = arr.length; i < len; i += chunkSize) {
            R.push(arr.slice(i, i + chunkSize));
        }
        return R;
    }
    ngOnInit() {
        this.cards = [];
        //this.slides = this.chunk(this.cards, 5);
        this.http.get('/select/').subscribe(res => {
            let data = res['files'];
            for (let i = 0; i < data.length; i++) {
                this.cards.push({ 'img': data[i]['file_name'] });
            }
            this.slides = this.chunk(this.cards, 3);
        }, err => {
            console.log(err);
        });
    }
    select(card) {
        const fileNames = card['img'].split('/');
        const fileName = fileNames[fileNames.length - 1];
        console.log(fileName);
        this.http.post('/select/' + fileName, {}).subscribe(res => {
            console.log("Success");
        });
    }
    ngAfterViewInit() {
        const buttons = document.querySelectorAll('.btn-floating');
        buttons.forEach((el) => {
            this.renderer.removeClass(el, 'btn-floating');
            this.renderer.addClass(el, 'px-5');
            this.renderer.addClass(el.firstElementChild, 'fa-3x');
        });
    }
};
SelectComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/select/select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select.component.scss */ "./src/app/select/select.component.scss")).default]
    })
], SelectComponent);



/***/ }),

/***/ "./src/app/upload/upload.component.scss":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let UploadComponent = class UploadComponent {
    constructor(http) {
        this.http = http;
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.filePrefix = '';
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get fileName() {
        return 'img_' + (this.filePrefix ? this.filePrefix : '') + (new Date()).getUTCDate();
    }
    ngOnInit() {
        ngx_webcam__WEBPACK_IMPORTED_MODULE_3__["WebcamUtil"].getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    uploadFile() {
        const compFileName = this.fileName;
        const url = '/upload/' + compFileName + '.jpg';
        this.http.post(url, { content: this.webcamImage.imageAsDataUrl }).subscribe((msg) => {
            //console.log(msg);
        });
    }
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    showNextWebcam(directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }
    handleImage(webcamImage) {
        //console.info('received webcam image', webcamImage);
        this.webcamImage = webcamImage;
    }
    cameraWasSwitched(deviceId) {
        //console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
};
UploadComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.scss */ "./src/app/upload/upload.component.scss")).default]
    })
], UploadComponent);



/***/ }),

/***/ "./src/app/videomatch/videomatch.component.scss":
/*!******************************************************!*\
  !*** ./src/app/videomatch/videomatch.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".videocontainer {\n  width: 20%;\n  height: 20;\n  display: inline-block;\n}\n\n.playlist {\n  width: 20%;\n  height: 20%;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NoaWJpbi9Eb3dubG9hZHMvUmVzZWFyY2gvZW1vdGlvbnMtdWkvd2ViY2FtL2Zyb250ZW5kL2ZleHAtdWkvc3JjL2FwcC92aWRlb21hdGNoL3ZpZGVvbWF0Y2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvbWF0Y2gvdmlkZW9tYXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvbWF0Y2gvdmlkZW9tYXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlb2NvbnRhaW5lcntcbiAgICB3aWR0aDogMjAlO1xuICAgIGhlaWdodDogMjA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGxheWxpc3R7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH0iLCIudmlkZW9jb250YWluZXIge1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDIwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wbGF5bGlzdCB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMjAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/videomatch/videomatch.component.ts":
/*!****************************************************!*\
  !*** ./src/app/videomatch/videomatch.component.ts ***!
  \****************************************************/
/*! exports provided: VideomatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideomatchComponent", function() { return VideomatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let VideomatchComponent = class VideomatchComponent {
    constructor(http) {
        this.http = http;
        this.vidNames = [];
        this.playlist = [
            {
                title: 'Pale Blue Dot',
                src: 'http://static.videogular.com/assets/videos/videogular.mp4',
                type: 'video/mp4'
            }
        ];
    }
    ngOnInit() {
        // load file list
        this.loadList();
    }
    getSimilarity(fileName) {
        this.playlist = [];
        this.http.get('match_video/' + fileName).subscribe((res => {
            console.log(res);
            console.log(res['files']);
            let data = res['files'];
            for (let i = 0; i < data.length; i++) {
                this.playlist.push(({
                    title: 'Match ' + i,
                    src: 'video/' + data[i]['file_name'],
                    type: 'video/mp4'
                }));
            }
        }));
    }
    loadList() {
        this.vidNames = [];
        this.http.get('video').subscribe((res => {
            let data = res['files'];
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                this.vidNames.push(data[i]['file_name']);
            }
        }), (err => { console.log(err); }));
    }
    select(fileName) {
        this.getSimilarity(fileName);
    }
};
VideomatchComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VideomatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-videomatch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./videomatch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/videomatch/videomatch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./videomatch.component.scss */ "./src/app/videomatch/videomatch.component.scss")).default]
    })
], VideomatchComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shibin/Downloads/Research/emotions-ui/webcam/frontend/fexp-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map