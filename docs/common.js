(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Wcwo":
/*!******************************************!*\
  !*** ./src/app/services/work.service.ts ***!
  \******************************************/
/*! exports provided: WorkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkService", function() { return WorkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WorkService {
    constructor() {
        this.works = [
            {
                id: 'java',
                mainImage: 'assets/img/works/java/java-1.jpg',
                secondaryImage: 'assets/img/works/java/java-2.jpg',
                title: 'javaTitle',
                subtitle: 'javaSubtitle',
                paragraph1Keyword: 'javaParagraph1',
                paragraph2Keyword: 'javaParagraph2'
            },
            {
                id: 'javafx',
                mainImage: 'assets/img/works/javafx/javafx-1.png',
                secondaryImage: 'assets/img/works/javafx/javafx-2.png',
                title: 'javafxTitle',
                subtitle: 'javafxSubtitle',
                paragraph1Keyword: 'javafxParagraph1',
                paragraph2Keyword: 'javafxParagraph2'
            },
            {
                id: 'spring',
                mainImage: 'assets/img/works/spring/spring-boot-1.png',
                secondaryImage: 'assets/img/works/spring/spring-boot-2.png',
                title: 'springTitle',
                subtitle: 'springSubtitle',
                paragraph1Keyword: 'springParagraph1',
                paragraph2Keyword: 'springParagraph2'
            },
            {
                id: 'angular',
                mainImage: 'assets/img/works/angular/angular-1.png',
                secondaryImage: 'assets/img/works/angular/angular-2.png',
                title: 'javaTitle',
                subtitle: 'javaSubtitle',
                paragraph1Keyword: 'javaParagraph1',
                paragraph2Keyword: 'javaParagraph2'
            }
        ];
    }
    getWorkViaId(workId) {
        return this.works.find(work => work.id === workId);
    }
    getWorks() {
        return this.works;
    }
}
WorkService.ɵfac = function WorkService_Factory(t) { return new (t || WorkService)(); };
WorkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorkService, factory: WorkService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map