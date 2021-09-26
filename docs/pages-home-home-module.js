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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");






const _c0 = function () { return ["/work"]; };
const _c1 = function (a0) { return { workId: a0 }; };
function HomeComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
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
    constructor(workService) {
        this.workService = workService;
        this.works = this.workService.getWorks();
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 48, vars: 4, consts: [["id", "home", 1, "intro"], [1, "section__title", "section__title--intro"], [1, "section__subtitle", "section__subtitle--intro"], ["src", "assets/img/renis_intro.jpg", "alt", "A picture of Renis Fejzo", 1, "intro__image"], ["id", "services", 1, "my-services"], [1, "section__title", "section__title--services"], [1, "services"], [1, "service"], ["href", "home#work", 1, "btn"], ["id", "about", 1, "about-me"], [1, "section__title", "section__title--about"], [1, "section__subtitle", "section__subtitle--about"], [1, "about-me__body"], ["src", "assets/img/dev-jane-02.jpg", "alt", "Renis Again", 1, "about-me__image"], ["id", "work", 1, "my-work"], [1, "section__title", "section__title--work"], [1, "section__subtitle", "section__subtitle--work"], [1, "portfolio"], [4, "ngFor", "ngForOf"], [1, "portfolio__item", 3, "routerLink", "queryParams"], ["alt", "", 1, "portfolio__img", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Renis Fejzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "full-stack dev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "What I do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Back-End Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus molestie aliquam. Vestibulum lacinia rhoncus felis, ut facilisis felis varius nec. Pellentesque eget justo malesuada, lobortis magna sed, consectetur felis. Ut vestibulum ex vel finibus elementum. Phasellus eget mauris orci. Praesent vestibulum posuere arcu at imperdiet. Vivamus dignissim, diam at pretium ultrices, nisi odio tincidunt risus, eu fermentum dolor elit non dolor. Curabitur efficitur magna ut rutrum maximus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Angular Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus molestie aliquam. Vestibulum lacinia rhoncus felis, ut facilisis felis varius nec. Pellentesque eget justo malesuada, lobortis magna sed, consectetur felis. Ut vestibulum ex vel finibus elementum. Phasellus eget mauris orci. Praesent vestibulum posuere arcu at imperdiet. Vivamus dignissim, diam at pretium ultrices, nisi odio tincidunt risus, eu fermentum dolor elit non dolor. Curabitur efficitur magna ut rutrum maximus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "All around IT guy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempus molestie aliquam. Vestibulum lacinia rhoncus felis, ut facilisis felis varius nec. Pellentesque eget justo malesuada, lobortis magna sed, consectetur felis. Ut vestibulum ex vel finibus elementum. Phasellus eget mauris orci. Praesent vestibulum posuere arcu at imperdiet. Vivamus dignissim, diam at pretium ultrices, nisi odio tincidunt risus, eu fermentum dolor elit non dolor. Curabitur efficitur magna ut rutrum maximus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "MY WORKI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Who am I ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Yo brotha from another motha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec cursus est. Pellentesque sit amet massa tristique, auctor ipsum eget, bibendum turpis. Morbi enim leo, tincidunt sed nisi id, suscipit facilisis urna. Maecenas magna tortor, rhoncus sed nibh eget, auctor porta dolor. Aliquam pretium scelerisque iaculis. Mauris luctus varius sapien, ut blandit neque ullamcorper eu. Aliquam consectetur turpis quam. Sed maximus id nibh sed interdum. Nunc accumsan porttitor orci eu tincidunt. Praesent vel molestie nisl. Aliquam nec eleifend mauris. Aliquam a orci sed neque porta ornare. Fusce malesuada dui est, vitae tristique nisi tempor id. Mauris varius vulputate vehicula. In vel mattis augue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec cursus est. Pellentesque sit amet massa tristique, auctor ipsum eget, bibendum turpis. Morbi enim leo, tincidunt sed nisi id, suscipit facilisis urna. Maecenas magna tortor, rhoncus sed nibh eget, auctor porta dolor. Aliquam pretium scelerisque iaculis. Mauris luctus varius sapien, ut blandit neque ullamcorper eu. Aliquam consectetur turpis quam. Sed maximus id nibh sed interdum. Nunc accumsan porttitor orci eu tincidunt. Praesent vel molestie nisl. Aliquam nec eleifend mauris. Aliquam a orci sed neque porta ornare. Fusce malesuada dui est, vitae tristique nisi tempor id. Mauris varius vulputate vehicula. In vel mattis augue. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "My Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Collection of my things");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HomeComponent_div_47_Template, 3, 6, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "helloText"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.works);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]], styles: [".section__title[_ngcontent-%COMP%]\r\n{\r\n  margin-bottom: .25em;\r\n}\r\n\r\n\r\n.section__title--intro[_ngcontent-%COMP%]\r\n{\r\n  font-weight: var(--fw-reg);\r\n}\r\n\r\n\r\n.section__title--intro[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]\r\n{\r\n  display: block;\r\n}\r\n\r\n\r\n.section__subtitle[_ngcontent-%COMP%]\r\n{\r\n  margin: 0;\r\n  font-size: var(--fs-h3);\r\n}\r\n\r\n\r\n.section__subtitle--intro[_ngcontent-%COMP%], .section__subtitle--about[_ngcontent-%COMP%]\r\n{\r\n  background-color: var(--clr-accent);\r\n  padding: .25em 1em;\r\n  font-family: var(--ff-secondary);\r\n  margin-bottom: 1em;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.intro[_ngcontent-%COMP%]\r\n{\r\n  position: relative;\r\n}\r\n\r\n\r\n.intro__image[_ngcontent-%COMP%]\r\n{\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n\r\n@media (min-width: 600px)\r\n{\r\n .intro[_ngcontent-%COMP%]\r\n {\r\n   display: grid;\r\n   width: -webkit-min-content;\r\n   width: min-content;\r\n   margin: 0 auto;\r\n   grid-column-gap: 1em;\r\n   grid-template-areas:\r\n      \"img title\"\r\n      \"img subtitle\";\r\n   grid-template-columns: -webkit-min-content -webkit-max-content;\r\n   grid-template-columns: min-content max-content;\r\n }\r\n\r\n  .intro__image[_ngcontent-%COMP%]\r\n  {\r\n    grid-area: img;\r\n    min-width: 250px;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n  .section__subtitle--intro[_ngcontent-%COMP%]\r\n  {\r\n    align-self: start;\r\n    grid-column: -1 / 1;\r\n    grid-row: 2;\r\n    text-align: right;\r\n    position: relative;\r\n    left: -1.5em;\r\n    width: calc(100% + 1.5em);\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.my-services[_ngcontent-%COMP%]\r\n{\r\n  background-color: var(--clr-dark); \r\n  background-image: url('services-bg.jpg');\r\n  background-size: cover;\r\n  \r\n  color: var(--clr-light);\r\n  text-align: center;\r\n}\r\n\r\n\r\n.section__title--services[_ngcontent-%COMP%]\r\n{\r\n  color: var(--clr-accent);\r\n  position: relative;\r\n}\r\n\r\n\r\n.section__title--services[_ngcontent-%COMP%]::after\r\n{\r\n  content: '';\r\n  display: block;\r\n  width: 3em;\r\n  height: 1px;\r\n  margin: .5em auto 1em;\r\n  background: var(--clr-light);\r\n  opacity: 0.5;\r\n}\r\n\r\n\r\n.service[_ngcontent-%COMP%]\r\n{\r\n  max-width: 500px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n.services[_ngcontent-%COMP%]\r\n{\r\n  margin-bottom: 4em;\r\n}\r\n\r\n\r\n@media (min-width: 800px)\r\n{\r\n  .services[_ngcontent-%COMP%]\r\n  {\r\n    display: flex;\r\n    max-width: 1000px ;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 0;\r\n  }\r\n\r\n  .service[_ngcontent-%COMP%]    + .service[_ngcontent-%COMP%]\r\n  {\r\n    margin-left: 2em;\r\n  }\r\n}\r\n\r\n\r\n.about-me[_ngcontent-%COMP%]\r\n{\r\n  max-width: 1000px;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n.about-me__image[_ngcontent-%COMP%]\r\n{\r\n  box-shadow: var(--box-shadow);\r\n}\r\n\r\n\r\n@media (min-width: 600px)\r\n{\r\n  .about-me[_ngcontent-%COMP%]\r\n  {\r\n    display: grid;\r\n    grid-template-columns: 1fr 200px;\r\n    grid-template-areas:\r\n      \"title img\"\r\n      \"subtitle img\"\r\n      \"text img\";\r\n    grid-column-gap: 2em;\r\n  }\r\n\r\n  .section__title--about[_ngcontent-%COMP%]\r\n  {\r\n    grid-area: title;\r\n  }\r\n\r\n  .section__subtitle--about[_ngcontent-%COMP%]\r\n  {\r\n    grid-column: 1 / -1;\r\n    grid-row: 2;\r\n    position: relative;\r\n    left: -1em;\r\n    width: calc(100% + 2em);\r\n    padding-left: 1em;\r\n    padding-right: calc(200px + 4em);\r\n  }\r\n\r\n  .about-me__image[_ngcontent-%COMP%]\r\n  {\r\n    grid-area: img;\r\n    position: relative;\r\n    z-index: 2;\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.my-work[_ngcontent-%COMP%]\r\n{\r\n  background-color: var(--clr-dark);\r\n  color: var(--clr-light);\r\n  text-align: center;\r\n}\r\n\r\n\r\n.section__subtitle--work[_ngcontent-%COMP%]\r\n{\r\n  color: var(--clr-accent);\r\n  font-weight: var(--fw-bold);\r\n  margin-bottom: 2em;\r\n}\r\n\r\n\r\n.portfolio[_ngcontent-%COMP%]\r\n{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n}\r\n\r\n\r\n.portfolio__item[_ngcontent-%COMP%]\r\n{\r\n  background: var(--clr-accent);\r\n  overflow: hidden;\r\n}\r\n\r\n\r\n.portfolio__img[_ngcontent-%COMP%]\r\n{\r\n  width: 100%;\r\n  transition:\r\n    transform 750ms cubic-bezier(.5, 0, .5, 1),\r\n    opacity 250ms linear;\r\n}\r\n\r\n\r\n.portfolio__item[_ngcontent-%COMP%]:focus\r\n{\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.portfolio__img[_ngcontent-%COMP%]:hover, .portfolio__item[_ngcontent-%COMP%]:focus   .portfolio__img[_ngcontent-%COMP%]\r\n{\r\n  transform: scale(1.2);\r\n  opacity: .75;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZUFBZTs7O0FBR2Y7O0VBRUUsb0JBQW9CO0FBQ3RCOzs7QUFFQTs7RUFFRSwwQkFBMEI7QUFDNUI7OztBQUVBOztFQUVFLGNBQWM7QUFDaEI7OztBQUVBOztFQUVFLFNBQVM7RUFDVCx1QkFBdUI7QUFDekI7OztBQUVBOzs7RUFHRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7OztBQUtBLGtCQUFrQjs7O0FBRWxCOztFQUVFLGtCQUFrQjtBQUNwQjs7O0FBRUE7O0VBRUUsNkJBQTZCO0FBQy9COzs7QUFFQTs7Q0FFQzs7R0FFRSxhQUFhO0dBQ2IsMEJBQWtCO0dBQWxCLGtCQUFrQjtHQUNsQixjQUFjO0dBQ2Qsb0JBQW9CO0dBQ3BCOztvQkFFaUI7R0FDakIsOERBQThDO0dBQTlDLDhDQUE4QztDQUNoRDs7RUFFQzs7SUFFRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7O0lBRUUsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0FBQ0Y7OztBQUdBLHFCQUFxQjs7O0FBRXJCOztFQUVFLGlDQUFpQyxFQUFFLHlDQUF5QztFQUM1RSx3Q0FBdUQ7RUFDdkQsc0JBQXNCO0VBQ3RCLG9EQUFvRDtFQUNwRCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOzs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFVBQVU7RUFDVixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2Q7OztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOzs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7OztBQUVBOztFQUVFOztJQUVFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsZ0JBQWdCO0VBQ2xCO0FBQ0Y7OztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOzs7QUFFQTs7RUFFRSw2QkFBNkI7QUFDL0I7OztBQUdBOztFQUVFOztJQUVFLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEM7OztnQkFHWTtJQUNaLG9CQUFvQjtFQUN0Qjs7RUFFQTs7SUFFRSxnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZ0NBQWdDO0VBQ2xDOztFQUVBOztJQUVFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztBQUVGOzs7QUFFQSxZQUFZOzs7QUFDWjs7RUFFRSxpQ0FBaUM7RUFDakMsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7OztBQUVBOztFQUVFLGFBQWE7RUFDYiwyREFBMkQ7QUFDN0Q7OztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7OztBQUVBOztFQUVFLFdBQVc7RUFDWDs7d0JBRXNCO0FBQ3hCOzs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOzs7QUFFQTs7O0VBR0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogVHlwb2dyYXBoeSAqL1xyXG5cclxuXHJcbi5zZWN0aW9uX190aXRsZVxyXG57XHJcbiAgbWFyZ2luLWJvdHRvbTogLjI1ZW07XHJcbn1cclxuXHJcbi5zZWN0aW9uX190aXRsZS0taW50cm9cclxue1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mdy1yZWcpO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fdGl0bGUtLWludHJvIHN0cm9uZ1xyXG57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWN0aW9uX19zdWJ0aXRsZVxyXG57XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tZnMtaDMpO1xyXG59XHJcblxyXG4uc2VjdGlvbl9fc3VidGl0bGUtLWludHJvLFxyXG4uc2VjdGlvbl9fc3VidGl0bGUtLWFib3V0XHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcclxuICBwYWRkaW5nOiAuMjVlbSAxZW07XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXNlY29uZGFyeSk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBJTlRSTyBTRUNUSU9OICovXHJcblxyXG4uaW50cm9cclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmludHJvX19pbWFnZVxyXG57XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweClcclxue1xyXG4gLmludHJvXHJcbiB7XHJcbiAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xyXG4gICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICBcImltZyB0aXRsZVwiXHJcbiAgICAgIFwiaW1nIHN1YnRpdGxlXCI7XHJcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWluLWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiB9XHJcblxyXG4gIC5pbnRyb19faW1hZ2VcclxuICB7XHJcbiAgICBncmlkLWFyZWE6IGltZztcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25fX3N1YnRpdGxlLS1pbnRyb1xyXG4gIHtcclxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gICAgZ3JpZC1jb2x1bW46IC0xIC8gMTtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMS41ZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMS41ZW0pO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIFNlcnZpY2VzIHNlY3Rpb24gKi9cclxuXHJcbi5teS1zZXJ2aWNlc1xyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRhcmspOyAvKiBZb3UgY291bGQgcGxheSBhcm91bmQgYSBiaXQgd2l0aCB0aGlzKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9zZXJ2aWNlcy1iZy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAvKmJhY2tncm91bmQtYmxlbmQtbW9kZTogbXVsdGlwbHk7IC0tIEFuZCB3aXRoIHRoaXMqL1xyXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb25fX3RpdGxlLS1zZXJ2aWNlc1xyXG57XHJcbiAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlY3Rpb25fX3RpdGxlLS1zZXJ2aWNlczo6YWZ0ZXJcclxue1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luOiAuNWVtIGF1dG8gMWVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNsci1saWdodCk7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uc2VydmljZVxyXG57XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNlcnZpY2VzXHJcbntcclxuICBtYXJnaW4tYm90dG9tOiA0ZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweClcclxue1xyXG4gIC5zZXJ2aWNlc1xyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweCA7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICAuc2VydmljZSArIC5zZXJ2aWNlXHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5hYm91dC1tZVxyXG57XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5hYm91dC1tZV9faW1hZ2Vcclxue1xyXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KVxyXG57XHJcbiAgLmFib3V0LW1lXHJcbiAge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgXCJ0aXRsZSBpbWdcIlxyXG4gICAgICBcInN1YnRpdGxlIGltZ1wiXHJcbiAgICAgIFwidGV4dCBpbWdcIjtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMmVtO1xyXG4gIH1cclxuXHJcbiAgLnNlY3Rpb25fX3RpdGxlLS1hYm91dFxyXG4gIHtcclxuICAgIGdyaWQtYXJlYTogdGl0bGU7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbl9fc3VidGl0bGUtLWFib3V0XHJcbiAge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTFlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyZW0pO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDIwMHB4ICsgNGVtKTtcclxuICB9XHJcblxyXG4gIC5hYm91dC1tZV9faW1hZ2VcclxuICB7XHJcbiAgICBncmlkLWFyZWE6IGltZztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyogTXkgV29yayAqL1xyXG4ubXktd29ya1xyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWRhcmspO1xyXG4gIGNvbG9yOiB2YXIoLS1jbHItbGlnaHQpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb25fX3N1YnRpdGxlLS13b3JrXHJcbntcclxuICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XHJcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZ3LWJvbGQpO1xyXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLnBvcnRmb2xpb1xyXG57XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcclxufVxyXG5cclxuLnBvcnRmb2xpb19faXRlbVxyXG57XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY2xyLWFjY2VudCk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnBvcnRmb2xpb19faW1nXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICB0cmFuc2l0aW9uOlxyXG4gICAgdHJhbnNmb3JtIDc1MG1zIGN1YmljLWJlemllciguNSwgMCwgLjUsIDEpLFxyXG4gICAgb3BhY2l0eSAyNTBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW9fX2l0ZW06Zm9jdXNcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvX19pbWc6aG92ZXIsXHJcbi5wb3J0Zm9saW9fX2l0ZW06Zm9jdXMgLnBvcnRmb2xpb19faW1nXHJcbntcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgb3BhY2l0eTogLjc1O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: src_app_services_work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"] }]; }, null); })();


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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");







class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]
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


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map