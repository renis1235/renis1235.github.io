(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-work-work-module"],{

/***/ "1GSI":
/*!*******************************************!*\
  !*** ./src/app/pages/work/work.module.ts ***!
  \*******************************************/
/*! exports provided: WorkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkModule", function() { return WorkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _work_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work-routing.module */ "U/eK");
/* harmony import */ var _work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work.component */ "yR4Z");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");






class WorkModule {
}
WorkModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkModule });
WorkModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkModule_Factory(t) { return new (t || WorkModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _work_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkModule, { declarations: [_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _work_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _work_routing_module__WEBPACK_IMPORTED_MODULE_2__["WorkRoutingModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "U/eK":
/*!***************************************************!*\
  !*** ./src/app/pages/work/work-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WorkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRoutingModule", function() { return WorkRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _work_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work.component */ "yR4Z");





const routes = [{ path: '', component: _work_component__WEBPACK_IMPORTED_MODULE_2__["WorkComponent"] }];
class WorkRoutingModule {
}
WorkRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WorkRoutingModule });
WorkRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WorkRoutingModule_Factory(t) { return new (t || WorkRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WorkRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yR4Z":
/*!**********************************************!*\
  !*** ./src/app/pages/work/work.component.ts ***!
  \**********************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_work_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/work.service */ "Wcwo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");






function WorkComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "h1", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx_r0.selectedWork.title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx_r0.selectedWork.subtitle), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedWork.mainImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx_r0.selectedWork.paragraph1Keyword), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedWork.secondaryImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 12, ctx_r0.selectedWork.paragraph2Keyword), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class WorkComponent {
    constructor(route, workService) {
        this.route = route;
        this.workService = workService;
        this.hasErrors = false;
        this.workId = this.route.snapshot.queryParamMap.get('workId');
        this.selectedWork = this.workService.getWorkViaId(this.workId);
        if (!this.selectedWork) {
            this.hasErrors = true;
        }
    }
    ngOnInit() {
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_work_service__WEBPACK_IMPORTED_MODULE_2__["WorkService"])); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "home", 1, "work-item"], [1, "section__title", 3, "innerHTML"], [1, "section__subtitle", 3, "innerHTML"], ["alt", "", 1, "intro__image", 3, "src"], [1, "work-item-individual"], [3, "innerHTML"], ["alt", "", 1, "work-item-individual__image", 3, "src"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkComponent_div_0_Template, 13, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasErrors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".section__title[_ngcontent-%COMP%]\r\n{\r\n  margin-bottom: .25em;\r\n  font-weight: var(--fw-reg);\r\n}\r\n\r\n\r\n\r\n.section__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]\r\n{\r\n  display: block;\r\n}\r\n\r\n\r\n\r\n.section__subtitle[_ngcontent-%COMP%]\r\n{\r\n  margin: 0;\r\n  font-size: var(--fs-h3);\r\n}\r\n\r\n\r\n\r\n.section__subtitle[_ngcontent-%COMP%]\r\n{\r\n  background-color: var(--clr-accent);\r\n  padding: .25em 1em;\r\n  font-family: var(--ff-secondary);\r\n  margin-bottom: 1em;\r\n}\r\n\r\n\r\n\r\n.work-item[_ngcontent-%COMP%]\r\n{\r\n  position: relative;\r\n}\r\n\r\n\r\n\r\n.intro__image[_ngcontent-%COMP%]\r\n{\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n\r\n\r\n@media (min-width: 600px)\r\n{\r\n .work-item[_ngcontent-%COMP%]\r\n {\r\n   display: grid;\r\n   width: -webkit-min-content;\r\n   width: min-content;\r\n   margin: 0 auto;\r\n   grid-column-gap: 1em;\r\n   grid-template-areas:\r\n      \"img title\"\r\n      \"img subtitle\";\r\n   grid-template-columns: -webkit-min-content -webkit-max-content;\r\n   grid-template-columns: min-content max-content;\r\n }\r\n\r\n  .intro__image[_ngcontent-%COMP%]\r\n  {\r\n    grid-area: img;\r\n    min-width: 250px;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n  .section__subtitle[_ngcontent-%COMP%]\r\n  {\r\n    align-self: start;\r\n    grid-column: -1 / 1;\r\n    grid-row: 2;\r\n    text-align: right;\r\n    position: relative;\r\n    left: -1.5em;\r\n    width: calc(100% + 1.5em);\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.work-item-individual[_ngcontent-%COMP%]\r\n{\r\n    padding: 0 2em 2em;\r\n    max-width: 1500px;\r\n    margin: 0 auto;\r\n}\r\n\r\n\r\n\r\n.work-item-individual__image[_ngcontent-%COMP%]\r\n{\r\n    margin: auto;\r\n    margin-top: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlOzs7O0FBSWY7O0VBRUUsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1Qjs7OztBQUVBOztFQUVFLGNBQWM7QUFDaEI7Ozs7QUFFQTs7RUFFRSxTQUFTO0VBQ1QsdUJBQXVCO0FBQ3pCOzs7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOzs7O0FBSUE7O0VBRUUsa0JBQWtCO0FBQ3BCOzs7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COzs7O0FBRUE7O0NBRUM7O0dBRUUsYUFBYTtHQUNiLDBCQUFrQjtHQUFsQixrQkFBa0I7R0FDbEIsY0FBYztHQUNkLG9CQUFvQjtHQUNwQjs7b0JBRWlCO0dBQ2pCLDhEQUE4QztHQUE5Qyw4Q0FBOEM7Q0FDaEQ7O0VBRUM7O0lBRUUsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjtBQUNGOzs7O0FBR0EseUJBQXlCOzs7O0FBRXpCOztJQUVJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7OztBQUVBOztJQUVJLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6IndvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFR5cG9ncmFwaHkgKi9cclxuXHJcblxyXG5cclxuLnNlY3Rpb25fX3RpdGxlXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiAuMjVlbTtcclxuICBmb250LXdlaWdodDogdmFyKC0tZnctcmVnKTtcclxufVxyXG5cclxuLnNlY3Rpb25fX3RpdGxlIHN0cm9uZ1xyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWN0aW9uX19zdWJ0aXRsZVxyXG57XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtaDMpO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fc3VidGl0bGVcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xyXG4gIHBhZGRpbmc6IC4yNWVtIDFlbTtcclxuICBmb250LWZhbWlseTogdmFyKC0tZmYtc2Vjb25kYXJ5KTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcblxyXG5cclxuLndvcmstaXRlbVxyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW50cm9fX2ltYWdlXHJcbntcclxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KVxyXG57XHJcbiAud29yay1pdGVtXHJcbiB7XHJcbiAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xyXG4gICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImltZyB0aXRsZVwiXHJcbiAgICAgIFwiaW1nIHN1YnRpdGxlXCI7XHJcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiB9XHJcblxyXG4gIC5pbnRyb19faW1hZ2VcclxuICB7XHJcbiAgICBncmlkLWFyZWE6IGltZztcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25fX3N1YnRpdGxlXHJcbiAge1xyXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XHJcbiAgICBncmlkLWNvbHVtbjogLTEgLyAxO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xLjVlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxLjVlbSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogV09SSyBJVEVNIElORElWSURVQUwgKi9cclxuXHJcbi53b3JrLWl0ZW0taW5kaXZpZHVhbFxyXG57XHJcbiAgICBwYWRkaW5nOiAwIDJlbSAyZW07XHJcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ud29yay1pdGVtLWluZGl2aWR1YWxfX2ltYWdlXHJcbntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_work_service__WEBPACK_IMPORTED_MODULE_2__["WorkService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-work-work-module.js.map