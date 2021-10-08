(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_work_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/work.service */ "Wcwo");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language.service */ "kyOO");
/* harmony import */ var angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-typewriter-effect */ "uAFX");
/* harmony import */ var _directives_appear_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/appear.directive */ "abyg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









const _c0 = function () { return ["/work"]; };
const _c1 = function (a0) { return { workId: a0 }; };
function HomeComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const work_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, work_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", work_r1.mainImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class HomeComponent {
    constructor(workService, languageService) {
        this.workService = workService;
        this.languageService = languageService;
        this.works = this.workService.getWorks();
    }
    ngOnInit() {
    }
    addClassToDiv(e) {
        console.log(e);
        e.nativeElement.classList.add('in-view');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 113, vars: 44, consts: [["id", "home", 1, "intro"], [1, "section__title", "section__title--intro"], ["speed", "1000", 1, "section__subtitle", "section__subtitle--intro", 3, "StringList"], ["src", "assets/img/renis_intro.jpg", "alt", "A picture of Renis Fejzo", 1, "intro__image"], ["id", "services", 1, "my-services"], [1, "section__title", "section__title--services"], [1, "services"], [1, "service"], [3, "innerHTML"], ["href", "home#work", 1, "btn", 3, "innerHTML"], ["id", "about", 1, "about-me"], [1, "section__title", "section__title--about", 3, "innerHTML"], [1, "section__subtitle", "section__subtitle--about", 3, "innerHTML"], [1, "about-me__body"], ["src", "assets/img/renis-2.jpeg", "alt", "Renis Again", 1, "about-me__image"], ["id", "education", 1, "my-education"], [1, "section__title", "section__title--education", 3, "innerHTML"], [1, "timeline"], [3, "appear"], ["id", "work", 1, "my-work"], [1, "section__title", "section__title--work"], [1, "section__subtitle", "section__subtitle--work"], [1, "portfolio"], [4, "ngFor", "ngForOf"], [1, "portfolio__item", 3, "routerLink", "queryParams"], ["alt", "", 1, "portfolio__img", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Renis Fejzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ngtypewriter", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_46_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "1998");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " I was born in Albania to two wonderful parents. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_51_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Learned how to walk and how to speak ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_56_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "2004");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " My father bought me the my first computer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_61_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "2004 1/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " I bricked my first computer... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_66_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "2005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Dad got tired of fixing the PC for me, so I started to do it myself. Allowing me to learn the Hardware and Software parts of it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_71_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "1956");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_76_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "1957");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_81_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "1967");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_86_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "1977");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Vestibulum porttitor lorem sed pharetra dignissim. Nulla maximus, dui a tristique iaculis, quam dolor convallis enim, non dignissim ligula ipsum a turpis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_91_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "1985");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_96_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_101_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "2005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Collection of my things");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, HomeComponent_div_112_Template, 3, 6, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 16, "helloText"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("StringList", ctx.languageService.subTitleArrayList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 18, "whatIDo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 20, "service1Title"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "service1Paragraph"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 24, "service2Title"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 26, "service2Paragraph"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 28, "service3Title"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 30, "service3Paragraph"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 32, "workNSkills"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 34, "aboutMeTitle"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 36, "aboutMeSubtitle"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 38, "aboutMeParagraph1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 40, "aboutMeParagraph2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 42, "myEducation"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.works);
    } }, directives: [angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_3__["TypewriterComponent"], _directives_appear_directive__WEBPACK_IMPORTED_MODULE_4__["AppearDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\r\n/* Typography */\r\n\r\n\r\n.section__title\r\n{\r\n  margin-bottom: .25em;\r\n}\r\n\r\n\r\n.section__title--intro\r\n{\r\n  font-weight: var(--fw-reg);\r\n}\r\n\r\n\r\n.section__title--intro strong\r\n{\r\n  display: block;\r\n}\r\n\r\n\r\n.section__subtitle\r\n{\r\n  margin: 0;\r\n  font-size: var(--fs-h3);\r\n}\r\n\r\n\r\n.section__subtitle--intro,\r\n.section__subtitle--about\r\n{\r\n  background-color: var(--clr-accent);\r\n  padding: .25em 1em;\r\n  font-family: var(--ff-secondary);\r\n  margin-bottom: 1em;\r\n}\r\n\r\n\r\n/* INTRO SECTION */\r\n\r\n\r\n.intro\r\n{\r\n  position: relative;\r\n}\r\n\r\n\r\n.intro__image\r\n{\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n\r\n@media (min-width: 600px)\r\n{\r\n .intro\r\n {\r\n   display: grid;\r\n   width: -webkit-min-content;\r\n   width: min-content;\r\n   margin: 0 auto;\r\n   grid-column-gap: 1em;\r\n   grid-template-areas:\r\n      \"img title\"\r\n      \"img subtitle\";\r\n   grid-template-columns: -webkit-min-content -webkit-max-content;\r\n   grid-template-columns: min-content max-content;\r\n }\r\n\r\n  .intro__image\r\n  {\r\n    grid-area: img;\r\n    min-width: 250px;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n  .section__subtitle--intro\r\n  {\r\n    align-self: start;\r\n    grid-column: -1 / 1;\r\n    grid-row: 2;\r\n    text-align: right;\r\n    position: relative;\r\n    left: -1.5em;\r\n    width: calc(100% + 1.5em);\r\n  }\r\n}\r\n\r\n\r\n/* Services section */\r\n\r\n\r\n.my-services\r\n{\r\n  background-color: var(--clr-dark); /* You could play around a bit with this*/\r\n  background-image: url('services-bg.jpg');\r\n  background-size: cover;\r\n  /*background-blend-mode: multiply; -- And with this*/\r\n  color: var(--clr-light);\r\n  text-align: center;\r\n}\r\n\r\n\r\n.section__title--services\r\n{\r\n  color: var(--clr-accent);\r\n  position: relative;\r\n}\r\n\r\n\r\n.section__title--services::after\r\n{\r\n  content: '';\r\n  display: block;\r\n  width: 3em;\r\n  height: 1px;\r\n  margin: .5em auto 1em;\r\n  background: var(--clr-light);\r\n  opacity: 0.5;\r\n}\r\n\r\n\r\n.service\r\n{\r\n  max-width: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n.services\r\n{\r\n  margin-bottom: 4em;\r\n}\r\n\r\n\r\n@media (min-width: 800px)\r\n{\r\n  .services\r\n  {\r\n    display: flex;\r\n    max-width: 90vw ;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .service + .service\r\n  {\r\n    margin-left: 2em;\r\n  }\r\n}\r\n\r\n\r\n.about-me\r\n{\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n.about-me__image\r\n{\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n\r\n@media (min-width: 600px)\r\n{\r\n  .about-me\r\n  {\r\n    display: grid;\r\n    grid-template-columns: 1fr 200px;\r\n    grid-template-areas:\r\n      \"title img\"\r\n      \"subtitle img\"\r\n      \"text img\";\r\n    grid-column-gap: 2em;\r\n  }\r\n\r\n  .section__title--about\r\n  {\r\n    grid-area: title;\r\n  }\r\n\r\n  .section__subtitle--about\r\n  {\r\n    grid-column: 1 / -1;\r\n    grid-row: 2;\r\n    position: relative;\r\n    left: -1em;\r\n    width: calc(100% + 2em);\r\n    padding-left: 1em;\r\n    padding-right: calc(200px + 4em);\r\n  }\r\n\r\n  .about-me__image\r\n  {\r\n    grid-area: img;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n}\r\n\r\n\r\n/* My Education */\r\n\r\n\r\n.my-education\r\n{\r\n  padding: 0;\r\n  overflow-x: hidden;\r\n}\r\n\r\n\r\n.section__title--education\r\n{\r\n  text-align: center;\r\n}\r\n\r\n\r\n/* TIMELINE */\r\n\r\n\r\n.timeline ul li time\r\n{\r\n  display: block;\r\n  font-weight: var(--fw-bold);\r\n  font-size: var(--fs-h2);\r\n}\r\n\r\n\r\n.timeline ul li {\r\n  list-style-type: none;\r\n  position: relative;\r\n  width: 6px;\r\n  margin: 0 auto;\r\n  padding-top: 50px;\r\n  background: var(--clr-dark);\r\n}\r\n\r\n\r\n.timeline ul li::after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: 0;\r\n  transform: translateX(-50%);\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background: inherit;\r\n}\r\n\r\n\r\n.timeline ul li div {\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 400px;\r\n  padding: 15px;\r\n  background: var(--clr-accent);\r\n}\r\n\r\n\r\n.timeline ul li div::before {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 7px;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n}\r\n\r\n\r\n.timeline ul li:nth-child(odd) div {\r\n  left: 45px;\r\n}\r\n\r\n\r\n.timeline ul li:nth-child(odd) div::before {\r\n  left: -15px;\r\n  border-width: 8px 16px 8px 0;\r\n  border-color: transparent var(--clr-accent) transparent transparent;\r\n}\r\n\r\n\r\n.timeline ul li:nth-child(even) div {\r\n  left: -439px;\r\n}\r\n\r\n\r\n.timeline ul li:nth-child(even) div::before {\r\n  right: -15px;\r\n  border-width: 8px 0 8px 16px;\r\n  border-color: transparent transparent transparent var(--clr-accent);\r\n}\r\n\r\n\r\n.timeline ul li::after {\r\n  background: #fff;\r\n  transition: background .5s ease-in-out;\r\n}\r\n\r\n\r\n.timeline ul li.in-view::after {\r\n  background: var(--clr-accent);\r\n}\r\n\r\n\r\n.timeline ul li div {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 1s cubic-bezier(1, 0, 0, 1.04);\r\n}\r\n\r\n\r\n.timeline ul li:nth-child(odd) div {\r\n  transform: translate3d(200px,0,0);\r\n}\r\n\r\n\r\n.timeline ul li:nth-child(even) div {\r\n  transform: translate3d(-200px,0,0);\r\n}\r\n\r\n\r\n.timeline ul li.in-view div {\r\n  transform: none;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n\r\n@media screen and (max-width: 900px) {\r\n  .timeline ul li div {\r\n    width: 250px;\r\n  }\r\n  .timeline ul li:nth-child(even) div {\r\n    left: -289px; /*250+45-6*/\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 600px) {\r\n  .timeline ul li {\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .timeline ul li div {\r\n    width: calc(100vw - 91px);\r\n  }\r\n\r\n  .timeline ul li:nth-child(even) div {\r\n    left: 45px;\r\n  }\r\n\r\n  .timeline ul li:nth-child(even) div::before {\r\n    left: -15px;\r\n    border-width: 8px 16px 8px 0;\r\n    border-color: transparent #F45B69 transparent transparent;\r\n  }\r\n}\r\n\r\n\r\n/* My Work */\r\n\r\n\r\n.my-work\r\n{\r\n  background-color: var(--clr-dark);\r\n  color: var(--clr-light);\r\n  text-align: center;\r\n}\r\n\r\n\r\n.section__subtitle--work\r\n{\r\n  color: var(--clr-accent);\r\n  font-weight: var(--fw-bold);\r\n  margin-bottom: 2em;\r\n}\r\n\r\n\r\n.portfolio\r\n{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n}\r\n\r\n\r\n.portfolio__item\r\n{\r\n  background: var(--clr-accent);\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.portfolio__img\r\n{\r\n  width: 100%;\r\n  transition:\r\n    transform 750ms cubic-bezier(.5, 0, .5, 1),\r\n    opacity 250ms linear;\r\n}\r\n\r\n\r\n.portfolio__item:focus\r\n{\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.portfolio__img:hover,\r\n.portfolio__item:focus .portfolio__img\r\n{\r\n  transform: scale(1.2);\r\n  opacity: .75;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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cG9ncmFwaHkgKi9cclxuXHJcblxyXG4uc2VjdGlvbl9fdGl0bGVcclxue1xyXG4gIG1hcmdpbi1ib3R0b206IC4yNWVtO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fdGl0bGUtLWludHJvXHJcbntcclxuICBmb250LXdlaWdodDogdmFyKC0tZnctcmVnKTtcclxufVxyXG5cclxuLnNlY3Rpb25fX3RpdGxlLS1pbnRybyBzdHJvbmdcclxue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fc3VidGl0bGVcclxue1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IHZhcigtLWZzLWgzKTtcclxufVxyXG5cclxuLnNlY3Rpb25fX3N1YnRpdGxlLS1pbnRybyxcclxuLnNlY3Rpb25fX3N1YnRpdGxlLS1hYm91dFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XHJcbiAgcGFkZGluZzogLjI1ZW0gMWVtO1xyXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1zZWNvbmRhcnkpO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogSU5UUk8gU0VDVElPTiAqL1xyXG5cclxuLmludHJvXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbnRyb19faW1hZ2Vcclxue1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpXHJcbntcclxuIC5pbnRyb1xyXG4ge1xyXG4gICBkaXNwbGF5OiBncmlkO1xyXG4gICB3aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcclxuICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgXCJpbWcgdGl0bGVcIlxyXG4gICAgICBcImltZyBzdWJ0aXRsZVwiO1xyXG4gICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IG1heC1jb250ZW50O1xyXG4gfVxyXG5cclxuICAuaW50cm9fX2ltYWdlXHJcbiAge1xyXG4gICAgZ3JpZC1hcmVhOiBpbWc7XHJcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uX19zdWJ0aXRsZS0taW50cm9cclxuICB7XHJcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcclxuICAgIGdyaWQtY29sdW1uOiAtMSAvIDE7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTEuNWVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDEuNWVtKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBTZXJ2aWNlcyBzZWN0aW9uICovXHJcblxyXG4ubXktc2VydmljZXNcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kYXJrKTsgLyogWW91IGNvdWxkIHBsYXkgYXJvdW5kIGEgYml0IHdpdGggdGhpcyovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWcvc2VydmljZXMtYmcuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgLypiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG11bHRpcGx5OyAtLSBBbmQgd2l0aCB0aGlzKi9cclxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uX190aXRsZS0tc2VydmljZXNcclxue1xyXG4gIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWN0aW9uX190aXRsZS0tc2VydmljZXM6OmFmdGVyXHJcbntcclxuICBjb250ZW50OiAnJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogM2VtO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIG1hcmdpbjogLjVlbSBhdXRvIDFlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItbGlnaHQpO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnNlcnZpY2Vcclxue1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5zZXJ2aWNlc1xyXG57XHJcbiAgbWFyZ2luLWJvdHRvbTogNGVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpXHJcbntcclxuICAuc2VydmljZXNcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA5MHZ3IDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5zZXJ2aWNlICsgLnNlcnZpY2VcclxuICB7XHJcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmFib3V0LW1lXHJcbntcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmFib3V0LW1lX19pbWFnZVxyXG57XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpXHJcbntcclxuICAuYWJvdXQtbWVcclxuICB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcInRpdGxlIGltZ1wiXHJcbiAgICAgIFwic3VidGl0bGUgaW1nXCJcclxuICAgICAgXCJ0ZXh0IGltZ1wiO1xyXG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiAyZW07XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbl9fdGl0bGUtLWFib3V0XHJcbiAge1xyXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uX19zdWJ0aXRsZS0tYWJvdXRcclxuICB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMWVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDJlbSk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMjAwcHggKyA0ZW0pO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0LW1lX19pbWFnZVxyXG4gIHtcclxuICAgIGdyaWQtYXJlYTogaW1nO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiBNeSBFZHVjYXRpb24gKi9cclxuXHJcbi5teS1lZHVjYXRpb25cclxue1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fdGl0bGUtLWVkdWNhdGlvblxyXG57XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogVElNRUxJTkUgKi9cclxuXHJcbi50aW1lbGluZSB1bCBsaSB0aW1lXHJcbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mcy1oMik7XHJcbn1cclxuLnRpbWVsaW5lIHVsIGxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWRhcmspO1xyXG59XHJcblxyXG4udGltZWxpbmUgdWwgbGk6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvdHRvbTogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4udGltZWxpbmUgdWwgbGkgZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1hY2NlbnQpO1xyXG59XHJcblxyXG4udGltZWxpbmUgdWwgbGkgZGl2OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDdweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpIGRpdiB7XHJcbiAgbGVmdDogNDVweDtcclxufVxyXG5cclxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChvZGQpIGRpdjo6YmVmb3JlIHtcclxuICBsZWZ0OiAtMTVweDtcclxuICBib3JkZXItd2lkdGg6IDhweCAxNnB4IDhweCAwO1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdmFyKC0tY2xyLWFjY2VudCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikgZGl2IHtcclxuICBsZWZ0OiAtNDM5cHg7XHJcbn1cclxuXHJcbi50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikgZGl2OjpiZWZvcmUge1xyXG4gIHJpZ2h0OiAtMTVweDtcclxuICBib3JkZXItd2lkdGg6IDhweCAwIDhweCAxNnB4O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdmFyKC0tY2xyLWFjY2VudCk7XHJcbn1cclxuXHJcbi50aW1lbGluZSB1bCBsaTo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi50aW1lbGluZSB1bCBsaS5pbi12aWV3OjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWFjY2VudCk7XHJcbn1cclxuXHJcbi50aW1lbGluZSB1bCBsaSBkaXYge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBjdWJpYy1iZXppZXIoMSwgMCwgMCwgMS4wNCk7XHJcbn1cclxuXHJcbi50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQob2RkKSBkaXYge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwcHgsMCwwKTtcclxufVxyXG5cclxuLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKSBkaXYge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMHB4LDAsMCk7XHJcbn1cclxuXHJcbi50aW1lbGluZSB1bCBsaS5pbi12aWV3IGRpdiB7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAudGltZWxpbmUgdWwgbGkgZGl2IHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKSBkaXYge1xyXG4gICAgbGVmdDogLTI4OXB4OyAvKjI1MCs0NS02Ki9cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnRpbWVsaW5lIHVsIGxpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRpbWVsaW5lIHVsIGxpIGRpdiB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDkxcHgpO1xyXG4gIH1cclxuXHJcbiAgLnRpbWVsaW5lIHVsIGxpOm50aC1jaGlsZChldmVuKSBkaXYge1xyXG4gICAgbGVmdDogNDVweDtcclxuICB9XHJcblxyXG4gIC50aW1lbGluZSB1bCBsaTpudGgtY2hpbGQoZXZlbikgZGl2OjpiZWZvcmUge1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDhweCAxNnB4IDhweCAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjRjQ1QjY5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIE15IFdvcmsgKi9cclxuLm15LXdvcmtcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1kYXJrKTtcclxuICBjb2xvcjogdmFyKC0tY2xyLWxpZ2h0KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zZWN0aW9uX19zdWJ0aXRsZS0td29ya1xyXG57XHJcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1ib2xkKTtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5wb3J0Zm9saW9cclxue1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW9fX2l0ZW1cclxue1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1hY2NlbnQpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wb3J0Zm9saW9fX2ltZ1xyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjpcclxuICAgIHRyYW5zZm9ybSA3NTBtcyBjdWJpYy1iZXppZXIoLjUsIDAsIC41LCAxKSxcclxuICAgIG9wYWNpdHkgMjUwbXMgbGluZWFyO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvX19pdGVtOmZvY3VzXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnBvcnRmb2xpb19faW1nOmhvdmVyLFxyXG4ucG9ydGZvbGlvX19pdGVtOmZvY3VzIC5wb3J0Zm9saW9fX2ltZ1xyXG57XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIG9wYWNpdHk6IC43NTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./css/home.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_services_work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"] }, { type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] }]; }, null); })();


/***/ }),

/***/ "5zXN":
/*!********************************************************************************!*\
  !*** ./node_modules/angular-typewriter-effect/node_modules/tslib/tslib.es6.js ***!
  \********************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-typewriter-effect */ "uAFX");
/* harmony import */ var _directives_appear_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/appear.directive */ "abyg");









class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_6__["AngularTypewriterEffectModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _directives_appear_directive__WEBPACK_IMPORTED_MODULE_7__["AppearDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_6__["AngularTypewriterEffectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _directives_appear_directive__WEBPACK_IMPORTED_MODULE_7__["AppearDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
                    angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_6__["AngularTypewriterEffectModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "1LmZ");





const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "abyg":
/*!************************************************!*\
  !*** ./src/app/directives/appear.directive.ts ***!
  \************************************************/
/*! exports provided: AppearDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearDirective", function() { return AppearDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




class AppearDirective {
    constructor(element) {
        this.element = element;
        this.appear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    saveDimensions() {
        this.elementPos = this.getOffsetTop(this.element.nativeElement);
        this.elementHeight = this.element.nativeElement.offsetHeight;
        this.windowHeight = window.innerHeight;
    }
    saveScrollPos() {
        this.scrollPos = window.scrollY;
    }
    getOffsetTop(element) {
        let offsetTop = element.offsetTop || 0;
        if (element.offsetParent) {
            offsetTop += this.getOffsetTop(element.offsetParent);
        }
        return offsetTop;
    }
    checkVisibility() {
        if (this.isVisible()) {
            // double check dimensions (due to async loaded contents, e.g. images)
            this.saveDimensions();
            if (this.isVisible()) {
                this.unsubscribe();
                this.appear.emit(this.element);
            }
        }
    }
    isVisible() {
        return this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight);
    }
    subscribe() {
        this.subscriptionScroll = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null))
            .subscribe(() => {
            this.saveScrollPos();
            this.checkVisibility();
        });
        this.subscriptionResize = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(null))
            .subscribe(() => {
            this.saveDimensions();
            this.checkVisibility();
        });
    }
    unsubscribe() {
        if (this.subscriptionScroll) {
            this.subscriptionScroll.unsubscribe();
        }
        if (this.subscriptionResize) {
            this.subscriptionResize.unsubscribe();
        }
    }
    ngAfterViewInit() {
        this.subscribe();
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
}
AppearDirective.ɵfac = function AppearDirective_Factory(t) { return new (t || AppearDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppearDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AppearDirective, selectors: [["", "appear", ""]], outputs: { appear: "appear" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppearDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appear]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { appear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "uAFX":
/*!***************************************************************************************************!*\
  !*** ./node_modules/angular-typewriter-effect/__ivy_ngcc__/fesm2015/angular-typewriter-effect.js ***!
  \***************************************************************************************************/
/*! exports provided: AngularTypewriterEffectModule, TypewriterComponent, TypewriterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularTypewriterEffectModule", function() { return AngularTypewriterEffectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypewriterComponent", function() { return TypewriterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypewriterService", function() { return TypewriterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "5zXN");



/**
 * @fileoverview added by tsickle
 * Generated from: lib/typewriter.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class TypewriterService {
    constructor() { }
}
TypewriterService.ɵfac = function TypewriterService_Factory(t) { return new (t || TypewriterService)(); };
TypewriterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TypewriterService, factory: TypewriterService.ɵfac, providedIn: 'root' });
/** @nocollapse */
TypewriterService.ctorParameters = () => [];
/** @nocollapse */ TypewriterService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function TypewriterService_Factory() { return new TypewriterService(); }, token: TypewriterService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypewriterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/typewriter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TypewriterComponent {
    constructor() {
        this.writeText = '';
        this.loopNumber = 0;
        this.isDeleting = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => this.writeLine()), 500);
    }
    /**
     * @return {?}
     */
    writeLine() {
        /** @type {?} */
        let i = this.loopNumber % this.StringList.length;
        /** @type {?} */
        let fullTxt = this.StringList[i];
        if (this.isDeleting) {
            this.writeText = fullTxt.substring(0, this.writeText.length - 1);
        }
        else {
            this.writeText = fullTxt.substring(0, this.writeText.length + 1);
        }
        /** @type {?} */
        let delTime = 90;
        if (this.isDeleting) {
            delTime /= 2;
        }
        if (!this.isDeleting && this.writeText === fullTxt) {
            delTime = this.speed || 700;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.writeText === '') {
            this.isDeleting = false, this.loopNumber++;
            delTime = this.speed || 700;
        }
        setTimeout((/**
         * @return {?}
         */
        () => Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__awaiter"])(this, void 0, void 0, function* () { return yield this.writeLine(); })), delTime);
    }
}
TypewriterComponent.ɵfac = function TypewriterComponent_Factory(t) { return new (t || TypewriterComponent)(); };
TypewriterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypewriterComponent, selectors: [["ngtypewriter"]], inputs: { StringList: "StringList", speed: "speed" }, decls: 2, vars: 1, consts: [[2, "border-right", "1px solid #666", "animation", "blink 1s", "padding-right", "3px"]], template: function TypewriterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.writeText);
    } }, styles: ["@-webkit-keyframes blink{50%{border-right:transparent}}@keyframes blink{50%{border-right:transparent}}"] });
/** @nocollapse */
TypewriterComponent.ctorParameters = () => [];
TypewriterComponent.propDecorators = {
    StringList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    speed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypewriterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngtypewriter',
                template: `
  <span style="border-right:1px solid #666;animation:blink 1s; padding-right:3px;">{{writeText}}</span>
  `,
                styles: ["@-webkit-keyframes blink{50%{border-right:transparent}}@keyframes blink{50%{border-right:transparent}}"]
            }]
    }], function () { return []; }, { StringList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], speed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/typewriter.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularTypewriterEffectModule {
}
AngularTypewriterEffectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularTypewriterEffectModule });
AngularTypewriterEffectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularTypewriterEffectModule_Factory(t) { return new (t || AngularTypewriterEffectModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularTypewriterEffectModule, { declarations: [TypewriterComponent], exports: [TypewriterComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularTypewriterEffectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [TypewriterComponent],
                imports: [],
                exports: [TypewriterComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-typewriter-effect.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-typewriter-effect.js.map

/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map