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
/* harmony import */ var src_app_services_project_skill_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project-skill.service */ "cZUR");
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language.service */ "kyOO");
/* harmony import */ var angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-typewriter-effect */ "uAFX");
/* harmony import */ var _directives_appear_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/appear.directive */ "abyg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function HomeComponent_div_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", skill_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", skill_r2.mainImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("title", skill_r2.id)("alt", skill_r2.id);
} }
const _c0 = function () { return ["/work"]; };
const _c1 = function (a0) { return { workId: a0 }; };
function HomeComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, project_r3.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r3.mainImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class HomeComponent {
    constructor(workService, languageService) {
        this.workService = workService;
        this.languageService = languageService;
        this.projects = this.workService.getProjects();
        this.skills = this.workService.getSkills();
    }
    ngOnInit() {
    }
    addClassToDiv(e) {
        e.nativeElement.classList.add('in-view');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_project_skill_service__WEBPACK_IMPORTED_MODULE_1__["ProjectSkillService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 104, vars: 81, consts: [["id", "home", 1, "intro"], [1, "section__title", "section__title--intro"], ["speed", "1000", 1, "section__subtitle", "section__subtitle--intro", 3, "StringList"], ["src", "assets/img/renis-1.jpg", "alt", "A picture of Renis Fejzo", 1, "intro__image"], ["id", "services", 1, "my-services"], [1, "section__title", "section__title--services"], [1, "services"], [1, "service"], [3, "innerHTML"], ["href", "home#work", 1, "btn", 3, "innerHTML"], ["id", "about", 1, "about-me"], [1, "section__title", "section__title--about", 3, "innerHTML"], [1, "section__subtitle", "section__subtitle--about", 3, "innerHTML"], [1, "about-me__body"], ["src", "assets/img/renis-2.jpeg", "alt", "Renis Again", 1, "about-me__image"], ["id", "education", 1, "my-education"], [1, "section__title", "section__title--education", 3, "innerHTML"], [1, "timeline"], [1, "timeline__list"], [1, "timeline__list__item", 3, "appear"], ["id", "work", 1, "my-work"], [1, "section__title", "section__title--work", 3, "innerHTML"], [1, "section__subtitle", "section__subtitle--work", 3, "innerHTML"], [1, "skills"], [4, "ngFor", "ngForOf"], [1, "portfolio"], ["target", "_blank", 1, "skill__item", 3, "href"], [1, "skill__img", 3, "src", "title", "alt"], [1, "portfolio__item", 3, "routerLink", "queryParams"], ["alt", "", 1, "portfolio__img", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_48_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "1998");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_54_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "2004");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_60_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2004 1/2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_66_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "2005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_72_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_78_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("appear", function HomeComponent_Template_li_appear_84_listener($event) { return ctx.addClassToDiv($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "2020 - 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Collection of my things");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, HomeComponent_div_97_Template, 3, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, HomeComponent_div_103_Template, 3, 6, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 29, "helloText"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("StringList", ctx.languageService.subTitleArrayList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 31, "whatIDo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 33, "service1Title"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 35, "service1Paragraph"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 37, "service2Title"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 39, "service2Paragraph"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 41, "service3Title"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 43, "service3Paragraph"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 45, "workNSkills"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 47, "aboutMeTitle"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 49, "aboutMeSubtitle"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 51, "aboutMeParagraph1"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 53, "aboutMeSubtitle2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 55, "aboutMeParagraph2"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 57, "myEducation"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 59, "timeline1"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 61, "timeline2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 63, "timeline3"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 65, "timeline4"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 67, "timeline5"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 69, "timeline6"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 71, "timeline7"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 73, "skillsNToolsTitle"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](94, 75, "skillsNToolsSubtitle"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 77, "workTitle"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 79, "workSubtitle"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [angular_typewriter_effect__WEBPACK_IMPORTED_MODULE_3__["TypewriterComponent"], _directives_appear_directive__WEBPACK_IMPORTED_MODULE_4__["AppearDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\r\n/* Typography */\r\n\r\n\r\n.section__title\r\n{\r\n  margin-bottom: .25em;\r\n}\r\n\r\n\r\n.section__title--intro\r\n{\r\n  font-weight: var(--fw-reg);\r\n}\r\n\r\n\r\n.section__title--intro strong\r\n{\r\n  display: block;\r\n}\r\n\r\n\r\n.section__subtitle\r\n{\r\n  margin: 0;\r\n  font-size: var(--fs-h3);\r\n}\r\n\r\n\r\n.section__subtitle--intro,\r\n.section__subtitle--about\r\n{\r\n  background-color: var(--clr-accent);\r\n  padding: .25em 1em;\r\n  font-family: var(--ff-secondary);\r\n  margin-bottom: 1em;\r\n}\r\n\r\n\r\n/* INTRO SECTION */\r\n\r\n\r\n.intro\r\n{\r\n  position: relative;\r\n}\r\n\r\n\r\n.intro__image\r\n{\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n\r\n@media (min-width: 600px)\r\n{\r\n .intro\r\n {\r\n   display: grid;\r\n   width: -webkit-min-content;\r\n   width: min-content;\r\n   margin: 0 auto;\r\n   grid-column-gap: 1em;\r\n   grid-template-areas:\r\n      \"img title\"\r\n      \"img subtitle\";\r\n   grid-template-columns: -webkit-min-content -webkit-max-content;\r\n   grid-template-columns: min-content max-content;\r\n }\r\n\r\n  .intro__image\r\n  {\r\n    grid-area: img;\r\n    min-width: 250px;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n  .section__subtitle--intro\r\n  {\r\n    align-self: start;\r\n    grid-column: -1 / 1;\r\n    grid-row: 2;\r\n    text-align: right;\r\n    position: relative;\r\n    left: -1.5em;\r\n    width: calc(100% + 1.5em);\r\n  }\r\n}\r\n\r\n\r\n/* Services section */\r\n\r\n\r\n.my-services\r\n{\r\n  background-color: var(--clr-dark); /* You could play around a bit with this*/\r\n  background-image: url(\"/assets/img/services-bg.jpg\");\r\n  background-size: cover;\r\n  /*background-blend-mode: multiply; -- And with this*/\r\n  color: var(--clr-light);\r\n  text-align: center;\r\n}\r\n\r\n\r\n.section__title--services\r\n{\r\n  color: var(--clr-accent);\r\n  position: relative;\r\n}\r\n\r\n\r\n.section__title--services::after\r\n{\r\n  content: '';\r\n  display: block;\r\n  width: 3em;\r\n  height: 1px;\r\n  margin: .5em auto 1em;\r\n  background: var(--clr-light);\r\n  opacity: 0.5;\r\n}\r\n\r\n\r\n.service\r\n{\r\n  max-width: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n.services\r\n{\r\n  margin-bottom: 4em;\r\n}\r\n\r\n\r\n@media (min-width: 800px)\r\n{\r\n  .services\r\n  {\r\n    display: flex;\r\n    max-width: 90vw ;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .service + .service\r\n  {\r\n    margin-left: 2em;\r\n  }\r\n}\r\n\r\n\r\n.about-me\r\n{\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n.about-me__image\r\n{\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n\r\n@media (min-width: 600px)\r\n{\r\n  .about-me\r\n  {\r\n    display: grid;\r\n    grid-template-columns: 1fr 200px;\r\n    grid-template-areas:\r\n      \"title img\"\r\n      \"subtitle img\"\r\n      \"text img\";\r\n    grid-column-gap: 2em;\r\n  }\r\n\r\n  .section__title--about\r\n  {\r\n    grid-area: title;\r\n  }\r\n\r\n  .section__subtitle--about\r\n  {\r\n    grid-column: 1 / -1;\r\n    grid-row: 2;\r\n    position: relative;\r\n    left: -1em;\r\n    width: calc(100% + 2em);\r\n    padding-left: 1em;\r\n    padding-right: calc(200px + 4em);\r\n  }\r\n\r\n  .about-me__image\r\n  {\r\n    grid-area: img;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n}\r\n\r\n\r\n/* My Education */\r\n\r\n\r\n.my-education\r\n{\r\n  padding: 0;\r\n  overflow-x: hidden;\r\n  margin-bottom: 4rem;\r\n\r\n}\r\n\r\n\r\n.section__title--education\r\n{\r\n  text-align: center;\r\n}\r\n\r\n\r\n/* TIMELINE */\r\n\r\n\r\n.timeline .timeline__list\r\n{\r\n  padding-right: 40px ;\r\n}\r\n\r\n\r\n.timeline .timeline__list li time\r\n{\r\n  display: block;\r\n  font-weight: var(--fw-bold);\r\n  font-size: var(--fs-h2);\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item {\r\n  list-style-type: none;\r\n  position: relative;\r\n  width: 6px;\r\n  margin: 0 auto;\r\n  padding-top: 50px;\r\n  background: var(--clr-dark);\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item::after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 50%;\r\n  bottom: 0;\r\n  transform: translateX(-50%);\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  background: inherit;\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item div {\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 400px;\r\n  padding: 15px;\r\n  background: var(--clr-accent);\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item div::before {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 7px;\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item:nth-child(odd) div {\r\n  left: 45px;\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item:nth-child(odd) div::before {\r\n  left: -15px;\r\n  border-width: 8px 16px 8px 0;\r\n  border-color: transparent var(--clr-accent) transparent transparent;\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item:nth-child(even) div {\r\n  left: -439px;\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item:nth-child(even) div::before {\r\n  right: -15px;\r\n  border-width: 8px 0 8px 16px;\r\n  border-color: transparent transparent transparent var(--clr-accent);\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item::after {\r\n  background: #fff;\r\n  transition: background .5s ease-in-out;\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item.in-view::after {\r\n  background: var(--clr-accent);\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item div {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: all 1s cubic-bezier(1, 0, 0, 1.04);\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item:nth-child(odd) div {\r\n  transform: translate3d(200px,0,0);\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item:nth-child(even) div {\r\n  transform: translate3d(-200px,0,0);\r\n}\r\n\r\n\r\n.timeline .timeline__list .timeline__list__item.in-view div {\r\n  transform: none;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n\r\n@media screen and (max-width: 900px) {\r\n  .timeline .timeline__list .timeline__list__item div {\r\n    width: 250px;\r\n  }\r\n  .timeline .timeline__list .timeline__list__item:nth-child(even) div {\r\n    left: -289px; /*250+45-6*/\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 600px)\r\n{\r\n  .timeline .timeline__list .timeline__list__item\r\n  {\r\n    margin-left: 0;\r\n  }\r\n\r\n  .timeline .timeline__list .timeline__list__item div {\r\n    width: calc(100vw - 91px);\r\n  }\r\n\r\n  .timeline .timeline__list .timeline__list__item:nth-child(even) div {\r\n    left: 45px;\r\n  }\r\n\r\n  .timeline .timeline__list .timeline__list__item:nth-child(even) div::before {\r\n    left: -15px;\r\n    border-width: 8px 16px 8px 0;\r\n    border-color: transparent #F45B69 transparent transparent;\r\n  }\r\n}\r\n\r\n\r\n/* My Work */\r\n\r\n\r\n.my-work\r\n{\r\n  background-color: var(--clr-dark);\r\n  color: var(--clr-light);\r\n  text-align: center;\r\n}\r\n\r\n\r\n.section__subtitle--work\r\n{\r\n  color: var(--clr-accent);\r\n  font-weight: var(--fw-bold);\r\n  margin-bottom: 2em;\r\n}\r\n\r\n\r\n.skills\r\n{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));\r\n  grid-gap: 15px;\r\n  align-items: center;\r\n  align-content: center;\r\n\r\n  margin-bottom: 2em;\r\n}\r\n\r\n\r\n.skill__img\r\n{\r\n  margin: auto;\r\n  max-width: 80px;\r\n\r\n  transition:\r\n    all 200ms ease-out;\r\n}\r\n\r\n\r\n.skill__img:focus\r\n{\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.skill__img:hover,\r\n.skill__item:focus .skill__img\r\n{\r\n  transform: scale(1.3) ;\r\n  opacity: .75;\r\n}\r\n\r\n\r\n.portfolio\r\n{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n}\r\n\r\n\r\n.portfolio__item\r\n{\r\n  background: var(--clr-accent);\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.portfolio__img\r\n{\r\n  max-width: 400px;\r\n  /*height: 370px;*/\r\n  /*width: 100%;*/\r\n  transition:\r\n    transform 750ms cubic-bezier(.5, 0, .5, 1),\r\n    opacity 250ms linear;\r\n}\r\n\r\n\r\n.portfolio__item:focus\r\n{\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.portfolio__img:hover,\r\n.portfolio__item:focus .portfolio__img\r\n{\r\n  transform: scale(1.2);\r\n  opacity: .75;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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QUNkOzs7QUFHQTs7RUFFRSxhQUFhO0VBQ2IsMkRBQTJEO0FBQzdEOzs7QUFFQTs7RUFFRSw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOzs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZjs7d0JBRXNCO0FBQ3hCOzs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOzs7QUFFQTs7O0VBR0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogVHlwb2dyYXBoeSAqL1xyXG5cclxuXHJcbi5zZWN0aW9uX190aXRsZVxyXG57XHJcbiAgbWFyZ2luLWJvdHRvbTogLjI1ZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uX190aXRsZS0taW50cm9cclxue1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1yZWcpO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fdGl0bGUtLWludHJvIHN0cm9uZ1xyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWN0aW9uX19zdWJ0aXRsZVxyXG57XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtaDMpO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fc3VidGl0bGUtLWludHJvLFxyXG4uc2VjdGlvbl9fc3VidGl0bGUtLWFib3V0XHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcclxuICBwYWRkaW5nOiAuMjVlbSAxZW07XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXNlY29uZGFyeSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBJTlRSTyBTRUNUSU9OICovXHJcblxyXG4uaW50cm9cclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmludHJvX19pbWFnZVxyXG57XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweClcclxue1xyXG4gLmludHJvXHJcbiB7XHJcbiAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xyXG4gICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImltZyB0aXRsZVwiXHJcbiAgICAgIFwiaW1nIHN1YnRpdGxlXCI7XHJcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiB9XHJcblxyXG4gIC5pbnRyb19faW1hZ2VcclxuICB7XHJcbiAgICBncmlkLWFyZWE6IGltZztcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25fX3N1YnRpdGxlLS1pbnRyb1xyXG4gIHtcclxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gICAgZ3JpZC1jb2x1bW46IC0xIC8gMTtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMS41ZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMS41ZW0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIFNlcnZpY2VzIHNlY3Rpb24gKi9cclxuXHJcbi5teS1zZXJ2aWNlc1xyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRhcmspOyAvKiBZb3UgY291bGQgcGxheSBhcm91bmQgYSBiaXQgd2l0aCB0aGlzKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9zZXJ2aWNlcy1iZy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKmJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7IC0tIEFuZCB3aXRoIHRoaXMqL1xyXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb25fX3RpdGxlLS1zZXJ2aWNlc1xyXG57XHJcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlY3Rpb25fX3RpdGxlLS1zZXJ2aWNlczo6YWZ0ZXJcclxue1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luOiAuNWVtIGF1dG8gMWVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uc2VydmljZVxyXG57XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNlcnZpY2VzXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiA0ZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweClcclxue1xyXG4gIC5zZXJ2aWNlc1xyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IDkwdncgO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNlcnZpY2UgKyAuc2VydmljZVxyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYWJvdXQtbWVcclxue1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uYWJvdXQtbWVfX2ltYWdlXHJcbntcclxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweClcclxue1xyXG4gIC5hYm91dC1tZVxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgIFwidGl0bGUgaW1nXCJcclxuICAgICAgXCJzdWJ0aXRsZSBpbWdcIlxyXG4gICAgICBcInRleHQgaW1nXCI7XHJcbiAgICBncmlkLWNvbHVtbi1nYXA6IDJlbTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uX190aXRsZS0tYWJvdXRcclxuICB7XHJcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25fX3N1YnRpdGxlLS1hYm91dFxyXG4gIHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAgICBncmlkLXJvdzogMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMmVtKTtcclxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogY2FsYygyMDBweCArIDRlbSk7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtbWVfX2ltYWdlXHJcbiAge1xyXG4gICAgZ3JpZC1hcmVhOiBpbWc7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qIE15IEVkdWNhdGlvbiAqL1xyXG5cclxuLm15LWVkdWNhdGlvblxyXG57XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuXHJcbn1cclxuXHJcbi5zZWN0aW9uX190aXRsZS0tZWR1Y2F0aW9uXHJcbntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4vKiBUSU1FTElORSAqL1xyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZV9fbGlzdFxyXG57XHJcbiAgcGFkZGluZy1yaWdodDogNDBweCA7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmVfX2xpc3QgbGkgdGltZVxyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtaDIpO1xyXG59XHJcbi50aW1lbGluZSAudGltZWxpbmVfX2xpc3QgLnRpbWVsaW5lX19saXN0X19pdGVtIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWRhcmspO1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lX19saXN0IC50aW1lbGluZV9fbGlzdF9faXRlbTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmVfX2xpc3QgLnRpbWVsaW5lX19saXN0X19pdGVtIGRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItYWNjZW50KTtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZV9fbGlzdCAudGltZWxpbmVfX2xpc3RfX2l0ZW0gZGl2OjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDdweDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZV9fbGlzdCAudGltZWxpbmVfX2xpc3RfX2l0ZW06bnRoLWNoaWxkKG9kZCkgZGl2IHtcclxuICBsZWZ0OiA0NXB4O1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lX19saXN0IC50aW1lbGluZV9fbGlzdF9faXRlbTpudGgtY2hpbGQob2RkKSBkaXY6OmJlZm9yZSB7XHJcbiAgbGVmdDogLTE1cHg7XHJcbiAgYm9yZGVyLXdpZHRoOiA4cHggMTZweCA4cHggMDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHZhcigtLWNsci1hY2NlbnQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lX19saXN0IC50aW1lbGluZV9fbGlzdF9faXRlbTpudGgtY2hpbGQoZXZlbikgZGl2IHtcclxuICBsZWZ0OiAtNDM5cHg7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmVfX2xpc3QgLnRpbWVsaW5lX19saXN0X19pdGVtOm50aC1jaGlsZChldmVuKSBkaXY6OmJlZm9yZSB7XHJcbiAgcmlnaHQ6IC0xNXB4O1xyXG4gIGJvcmRlci13aWR0aDogOHB4IDAgOHB4IDE2cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1jbHItYWNjZW50KTtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZV9fbGlzdCAudGltZWxpbmVfX2xpc3RfX2l0ZW06OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udGltZWxpbmUgLnRpbWVsaW5lX19saXN0IC50aW1lbGluZV9fbGlzdF9faXRlbS5pbi12aWV3OjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWFjY2VudCk7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmVfX2xpc3QgLnRpbWVsaW5lX19saXN0X19pdGVtIGRpdiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGN1YmljLWJlemllcigxLCAwLCAwLCAxLjA0KTtcclxufVxyXG5cclxuLnRpbWVsaW5lIC50aW1lbGluZV9fbGlzdCAudGltZWxpbmVfX2xpc3RfX2l0ZW06bnRoLWNoaWxkKG9kZCkgZGl2IHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMHB4LDAsMCk7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmVfX2xpc3QgLnRpbWVsaW5lX19saXN0X19pdGVtOm50aC1jaGlsZChldmVuKSBkaXYge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMHB4LDAsMCk7XHJcbn1cclxuXHJcbi50aW1lbGluZSAudGltZWxpbmVfX2xpc3QgLnRpbWVsaW5lX19saXN0X19pdGVtLmluLXZpZXcgZGl2IHtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG4gIC50aW1lbGluZSAudGltZWxpbmVfX2xpc3QgLnRpbWVsaW5lX19saXN0X19pdGVtIGRpdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIC50aW1lbGluZSAudGltZWxpbmVfX2xpc3QgLnRpbWVsaW5lX19saXN0X19pdGVtOm50aC1jaGlsZChldmVuKSBkaXYge1xyXG4gICAgbGVmdDogLTI4OXB4OyAvKjI1MCs0NS02Ki9cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxyXG57XHJcbiAgLnRpbWVsaW5lIC50aW1lbGluZV9fbGlzdCAudGltZWxpbmVfX2xpc3RfX2l0ZW1cclxuICB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gIC50aW1lbGluZSAudGltZWxpbmVfX2xpc3QgLnRpbWVsaW5lX19saXN0X19pdGVtIGRpdiB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDkxcHgpO1xyXG4gIH1cclxuXHJcbiAgLnRpbWVsaW5lIC50aW1lbGluZV9fbGlzdCAudGltZWxpbmVfX2xpc3RfX2l0ZW06bnRoLWNoaWxkKGV2ZW4pIGRpdiB7XHJcbiAgICBsZWZ0OiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgLnRpbWVsaW5lIC50aW1lbGluZV9fbGlzdCAudGltZWxpbmVfX2xpc3RfX2l0ZW06bnRoLWNoaWxkKGV2ZW4pIGRpdjo6YmVmb3JlIHtcclxuICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiA4cHggMTZweCA4cHggMDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI0Y0NUI2OSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKiBNeSBXb3JrICovXHJcbi5teS13b3JrXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItZGFyayk7XHJcbiAgY29sb3I6IHZhcigtLWNsci1saWdodCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fc3VidGl0bGUtLXdvcmtcclxue1xyXG4gIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcclxuICBmb250LXdlaWdodDogdmFyKC0tZnctYm9sZCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4uc2tpbGxzXHJcbntcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAxNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5za2lsbF9faW1nXHJcbntcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG5cclxuICB0cmFuc2l0aW9uOlxyXG4gICAgYWxsIDIwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc2tpbGxfX2ltZzpmb2N1c1xyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5za2lsbF9faW1nOmhvdmVyLFxyXG4uc2tpbGxfX2l0ZW06Zm9jdXMgLnNraWxsX19pbWdcclxue1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKSA7XHJcbiAgb3BhY2l0eTogLjc1O1xyXG59XHJcblxyXG5cclxuLnBvcnRmb2xpb1xyXG57XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxufVxyXG5cclxuLnBvcnRmb2xpb19faXRlbVxyXG57XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWFjY2VudCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBvcnRmb2xpb19faW1nXHJcbntcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIC8qaGVpZ2h0OiAzNzBweDsqL1xyXG4gIC8qd2lkdGg6IDEwMCU7Ki9cclxuICB0cmFuc2l0aW9uOlxyXG4gICAgdHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguNSwgMCwgLjUsIDEpLFxyXG4gICAgb3BhY2l0eSAyNTBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW9fX2l0ZW06Zm9jdXNcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvX19pbWc6aG92ZXIsXHJcbi5wb3J0Zm9saW9fX2l0ZW06Zm9jdXMgLnBvcnRmb2xpb19faW1nXHJcbntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgb3BhY2l0eTogLjc1O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./css/home.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_services_project_skill_service__WEBPACK_IMPORTED_MODULE_1__["ProjectSkillService"] }, { type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__["LanguageService"] }]; }, null); })();


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