(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "cZUR":
/*!***************************************************!*\
  !*** ./src/app/services/project-skill.service.ts ***!
  \***************************************************/
/*! exports provided: ProjectSkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSkillService", function() { return ProjectSkillService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjectSkillService {
    constructor() {
        this.projects = [
            {
                id: 'concierge',
                mainImage: 'assets/img/projects/conc-1.png',
                secondaryImage: 'assets/img/projects/conc-2.png',
                title: 'conciergeTitle',
                subtitle: 'conciergeSubtitle',
                paragraph1Keyword: 'conciergeParagraph1',
                paragraph2Keyword: 'conciergeParagraph2'
            }
        ];
        this.skills = [
            {
                id: 'Java',
                mainImage: 'assets/img/skills/java/java-1.svg',
                link: 'https://www.java.com/en/'
            },
            {
                id: 'Spring',
                mainImage: 'assets/img/skills/spring/spring-boot-1.svg',
                link: 'https://spring.io/'
            },
            {
                id: 'Angular',
                mainImage: 'assets/img/skills/angular/angular-1.svg',
                link: 'https://angular.io/'
            },
            {
                id: 'JavaScript',
                mainImage: 'assets/img/skills/javascript/javascript-1.svg',
                link: 'https://www.javascript.com/'
            },
            {
                id: 'typescript',
                mainImage: 'assets/img/skills/typescript/typescript.svg',
                link: 'https://www.typescriptlang.org/'
            },
            {
                id: 'Git',
                mainImage: 'assets/img/skills/git/git-1.svg',
                link: 'https://git-scm.com/'
            },
            {
                id: 'PostgreSQL',
                mainImage: 'assets/img/skills/postgresql/postgresql-1.svg',
                link: 'https://www.postgresql.org/'
            },
            {
                id: 'C#',
                mainImage: 'assets/img/skills/c-sharp/c-sharp-1.svg',
                link: 'https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/'
            },
            {
                id: 'IntelliJ IDEA',
                mainImage: 'assets/img/skills/tools/intellij-idea.svg',
                link: 'https://www.jetbrains.com/idea/'
            },
            {
                id: 'IntelliJ Webstorm',
                mainImage: 'assets/img/skills/tools/webstorm.svg',
                link: 'https://www.jetbrains.com/webstorm/'
            },
            {
                id: 'Visual Studio',
                mainImage: 'assets/img/skills/tools/visual-studio.svg',
                link: 'https://visualstudio.microsoft.com/'
            },
            {
                id: 'Wordpress',
                mainImage: 'assets/img/skills/wordpress/wordpress.svg',
                link: 'https://wordpress.com/'
            },
        ];
    }
    getProjectViaId(projectId) {
        return this.projects.find(work => work.id === projectId);
    }
    getProjects() {
        return this.projects;
    }
    getSkills() {
        return this.skills;
    }
}
ProjectSkillService.ɵfac = function ProjectSkillService_Factory(t) { return new (t || ProjectSkillService)(); };
ProjectSkillService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectSkillService, factory: ProjectSkillService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectSkillService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map