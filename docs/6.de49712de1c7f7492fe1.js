(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1GSI":function(t,e,n){"use strict";n.r(e),n.d(e,"WorkModule",function(){return b});var i=n("ofXK"),r=n("tyNb"),o=n("fXoL"),a=n("Wcwo"),c=n("TSSN");function s(t,e){if(1&t&&(o.Hb(0,"div"),o.Hb(1,"section",1),o.Fb(2,"h1",2),o.Rb(3,"translate"),o.Fb(4,"p",3),o.Rb(5,"translate"),o.Fb(6,"img",4),o.Gb(),o.Hb(7,"div",5),o.Fb(8,"p",6),o.Rb(9,"translate"),o.Fb(10,"img",7),o.Fb(11,"p",6),o.Rb(12,"translate"),o.Gb(),o.Gb()),2&t){const t=o.Qb();o.ub(2),o.Vb("innerHTML",o.Sb(3,6,t.selectedWork.title),o.ac),o.ub(2),o.Vb("innerHTML",o.Sb(5,8,t.selectedWork.subtitle),o.ac),o.ub(2),o.Vb("src",t.selectedWork.mainImage,o.bc),o.ub(2),o.Vb("innerHTML",o.Sb(9,10,t.selectedWork.paragraph1Keyword),o.ac),o.ub(2),o.Vb("src",t.selectedWork.secondaryImage,o.bc),o.ub(1),o.Vb("innerHTML",o.Sb(12,12,t.selectedWork.paragraph2Keyword),o.ac)}}const m=[{path:"",component:(()=>{class t{constructor(t,e){this.route=t,this.workService=e,this.hasErrors=!1,this.workId=this.route.snapshot.queryParamMap.get("workId"),this.selectedWork=this.workService.getWorkViaId(this.workId),this.selectedWork||(this.hasErrors=!0)}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Eb(r.a),o.Eb(a.a))},t.\u0275cmp=o.yb({type:t,selectors:[["app-work"]],decls:1,vars:1,consts:[[4,"ngIf"],["id","home",1,"work-item"],[1,"section__title",3,"innerHTML"],[1,"section__subtitle",3,"innerHTML"],["alt","",1,"intro__image",3,"src"],[1,"work-item-individual"],[3,"innerHTML"],["alt","",1,"work-item-individual__image",3,"src"]],template:function(t,e){1&t&&o.dc(0,s,13,14,"div",0),2&t&&o.Vb("ngIf",!e.hasErrors)},directives:[i.i],pipes:[c.c],styles:['.section__title[_ngcontent-%COMP%]{margin-bottom:.25em;font-weight:var(--fw-reg)}.section__title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}.section__subtitle[_ngcontent-%COMP%]{margin:0;font-size:var(--fs-h3);background-color:var(--clr-accent);padding:.25em 1em;font-family:var(--ff-secondary);margin-bottom:1em}.work-item[_ngcontent-%COMP%]{position:relative}.intro__image[_ngcontent-%COMP%]{box-shadow:var(--box-shadow)}@media (min-width:600px){.work-item[_ngcontent-%COMP%]{display:grid;width:-webkit-min-content;width:min-content;margin:0 auto;grid-column-gap:1em;grid-template-areas:"img title" "img subtitle";grid-template-columns:-webkit-min-content -webkit-max-content;grid-template-columns:min-content max-content}.intro__image[_ngcontent-%COMP%]{grid-area:img;min-width:250px;position:relative;z-index:2}.section__subtitle[_ngcontent-%COMP%]{align-self:start;grid-column:-1/1;grid-row:2;text-align:right;position:relative;left:-1.5em;width:calc(100% + 1.5em)}}.work-item-individual[_ngcontent-%COMP%]{padding:0 2em 2em;max-width:1500px;margin:0 auto}.work-item-individual__image[_ngcontent-%COMP%]{margin:1em auto auto}']}),t})()}];let d=(()=>{class t{}return t.\u0275mod=o.Cb({type:t}),t.\u0275inj=o.Bb({factory:function(e){return new(e||t)},imports:[[r.c.forChild(m)],r.c]}),t})(),b=(()=>{class t{}return t.\u0275mod=o.Cb({type:t}),t.\u0275inj=o.Bb({factory:function(e){return new(e||t)},imports:[[i.b,d,c.b]]}),t})()}}]);