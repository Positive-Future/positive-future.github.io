(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{518:function(e,t,r){"use strict";r.r(t);var n=r(486),l=(r(38),r(25),{props:{items:{type:Array,required:!0},label:{type:Boolean,default:!0},relatedKey:{type:String,default:"true"},filters:{type:Array,required:!1}},data:function(){return{showMore:!1}},computed:{}}),o=r(37),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"ma-n1"},e._l(e.items,(function(r,l){return t(n.a,{key:l,staticClass:"ma-1",attrs:{color:"relatedKey === 'issues'?'primary':'secondary'",outlined:!(e.filters&&e.filters.includes(r))}},[e._v("\n      "+e._s(e.$t("resources."+e.relatedKey+"."+r))+"\n    ")])})),1)])}),[],!1,null,null,null);t.default=component.exports},587:function(e,t,r){"use strict";r.r(t);var n=r(209),l=r(213),o=r(210),c=r(86),f=r(486),m=r(462),d=r(603),v=r(441),_=r(68),y=r(530),h=r(202),x=r(164),w=r(129),k=r(208),$=r(22),C=r(461),P=r(571),j=r(573),O=r(459),S=(r(18),r(222),r(43),r(38),r(25),r(1)),D=r(42),A=r(11);r(47),r(549),r(30),r(17),r(28),r(7),r(224),r(6),r(4),r(8),r(9);function Y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function I(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Y(Object(source),!0).forEach((function(t){Object(S.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):Y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var L={asyncData:function(e){return Object(A.a)(regeneratorRuntime.mark((function t(){var r,n,l,o,c,f,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,n=e.$content,t.next=3,n(r.i18n.locale+"/pages/resources").fetch();case 3:return l=t.sent,t.next=6,n("resources").fetch();case 6:return o=t.sent,c=Object(D.a)(new Set(o.map((function(e){return e.type})).flat())).sort(),f=Object(D.a)(new Set(o.map((function(e){return e.lang})))).sort(),m=Object(D.a)(new Set(o.map((function(e){return e.issues})).flat())).sort(),d=Object(D.a)(new Set(o.map((function(e){return e.perspectives})).flat())).sort(),t.abrupt("return",{types:c,issues:m,languages:f,perspectives:d,resources:l,items:o});case 12:case"end":return t.stop()}}),t)})))()},data:function(){return{icons:{Article:"file-document-edit-outline",Book:"book-open-page-variant",Photos:"draw",Picture:"image",Video:"video-box"},category_view:!0,itemsPerPageArray:[10,20,50,100],sortDesc:!1,page:1,itemsPerPage:10,sortBy:"name",categories:[{name:"think_about_the_future",icon:"head-cog"},{name:"face_our_challenges_today",icon:"earth"},{name:"stimulate_your_creativity",icon:"creation"},{name:"learn_from_the_past",icon:"rewind"}],filters:{category:[],type:[],issues:[],perspectives:[],lang:[],search:""}}},computed:{browsing:function(){return Object.values(this.filters).flat().filter((function(e){return null==e?void 0:e.length})).length>0||!this.category_view},filteredItems:function(){var e=this;return this.items.filter((function(t){var r,n,l,o,c;return(!(null!==(r=e.filters.type)&&void 0!==r&&r.length)||e.filters.type.some((function(e){return t.type.includes(e)})))&&(!(null!==(n=e.filters.issues)&&void 0!==n&&n.length)||e.filters.issues.some((function(e){return t.issues.includes(e)})))&&(!(null!==(l=e.filters.perspectives)&&void 0!==l&&l.length)||e.filters.perspectives.some((function(e){return t.perspectives.includes(e)})))&&(!(null!==(o=e.filters.lang)&&void 0!==o&&o.length)||e.filters.lang.includes(t.lang))&&(!(null!==(c=e.filters.category)&&void 0!==c&&c.length)||e.filters.category.some((function(e){return t.category.includes(e)})))})).map((function(e){return I(I({},e),{},{perspectives:e.perspectives.sort(),category:e.category.sort()})}))}},watch:{},updated:function(){},mounted:function(){},methods:{}},T=r(37),component=Object(T.a)(L,(function(){var e=this,t=e._self._c;return t("div",[t("section",{class:{"px-3":e.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0"}},[t(C.a,{attrs:{justify:"center"}},[t(m.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[t("h1",{staticClass:"mt-8 mb-4"},[e._v("\n          "+e._s(e.resources.title)+"\n        ")]),e._v(" "),t("nuxt-content",{attrs:{document:e.resources}})],1)],1)],1),e._v(" "),t(C.a,{attrs:{justify:"center","no-gutters":""}},[t(m.a,{staticClass:"px-0 mx-0",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e.category_view?t(_.a,[t(C.a,{staticClass:"px-0 mx-n1"},[e._l(e.categories,(function(r,l){return t(m.a,{key:l,attrs:{cols:"12",sm:"6",xl:"3"}},[t(y.a,{scopedSlots:e._u([{key:"default",fn:function(l){var f=l.hover;return[t(o.a,{staticClass:"pa-2 text-center",attrs:{flat:"",elevation:f?12:2,height:"100%"},on:{click:function(t){e.filters.category=[r.name],e.category_view=!1}}},[t(n.a,{attrs:{color:"#00c2cb",size:"44"}},[t(h.a,{attrs:{dark:""}},[e._v(" mdi-"+e._s(r.icon)+" ")])],1),e._v(" "),t(c.d,{staticClass:"justify-center font-weight-black text-uppercase",staticStyle:{"word-break":"normal"}},[e._v("\n                  "+e._s(e.$t("resources.categories."+r.name))+"\n                ")]),e._v(" "),t(c.c,{staticClass:"text-left",domProps:{innerHTML:e._s(e.$t("resources.categoriesTexts."+r.name))}})],1)]}}],null,!0)})],1)})),e._v(" "),t(m.a,{attrs:{cols:"12"}},[t("div",{staticClass:"ma-6 text-center headline"},[e._v("\n              "+e._s(e.$t("resources.filterAlternativeText"))+"\n            ")])])],2)],1):e._e(),e._v(" "),e.category_view?e._e():t(l.a,{staticClass:"mt-6",attrs:{text:"",small:""},on:{click:function(t){e.category_view=!0}}},[t("small",[t(h.a,{attrs:{left:""}},[e._v("mdi-arrow-left")]),e._v(e._s(e.$t("misc.ui.back_to_categories")))],1)]),e._v(" "),t(d.a,{staticClass:"my-6",attrs:{items:e.filteredItems,"items-per-page":e.itemsPerPage,page:e.page,search:e.filters.search,"hide-default-footer":!e.browsing},on:{"update:itemsPerPage":function(t){e.itemsPerPage=t},"update:items-per-page":function(t){e.itemsPerPage=t}},scopedSlots:e._u([{key:"header",fn:function(){return[t(C.a,[t(m.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(j.a,{attrs:{clearable:"",multiple:"",outlined:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},"prepend-inner-icon":"mdi-magnify",label:e.$t("resources.filters.search")},model:{value:e.filters.search,callback:function(t){e.$set(e.filters,"search",t)},expression:"filters.search"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(P.a,{attrs:{outlined:"",multiple:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.categories.map((function(t){return{text:e.$t("resources.categories."+t.name),value:t.name}})),label:e.$t("resources.filters.category")},model:{value:e.filters.category,callback:function(t){e.$set(e.filters,"category",t)},expression:"filters.category"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(P.a,{attrs:{outlined:"",multiple:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.types.map((function(t){return{text:e.$t("resources.types."+t),value:t}})),label:e.$t("resources.filters.type")},model:{value:e.filters.type,callback:function(t){e.$set(e.filters,"type",t)},expression:"filters.type"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(P.a,{attrs:{outlined:"",multiple:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.perspectives.map((function(t){return{text:e.$t("resources.perspectives."+t),value:t}})),label:e.$t("resources.filters.perspectives")},model:{value:e.filters.perspectives,callback:function(t){e.$set(e.filters,"perspectives",t)},expression:"filters.perspectives"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(P.a,{attrs:{outlined:"",multiple:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.issues.map((function(t){return{text:e.$t("resources.issues."+t),value:t}})),label:e.$t("resources.filters.issues")},model:{value:e.filters.issues,callback:function(t){e.$set(e.filters,"issues",t)},expression:"filters.issues"}})],1),e._v(" "),t(m.a,{attrs:{cols:"12",sm:"6",md:"4"}},[t(P.a,{attrs:{outlined:"",multiple:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.languages.map((function(t){return{text:e.$t("misc.languages."+t.toLowerCase()),value:t}})),label:e.$t("resources.filters.lang")},model:{value:e.filters.lang,callback:function(t){e.$set(e.filters,"lang",t)},expression:"filters.lang"}})],1)],1)]},proxy:!0},e.browsing?{key:"no-results",fn:function(){return[t("div",{staticClass:"ml-6 my-6"},[e._v(e._s(e.$t("resources.noResultsText")))])]},proxy:!0}:null,e.browsing?{key:"no-data",fn:function(){return[t("div",{staticClass:"ml-6 my-6"},[e._v(e._s(e.$t("resources.noDataText")))])]},proxy:!0}:null,e.browsing?{key:"default",fn:function(r){return[t(C.a,{staticClass:"mx-3"},[t("p",{staticClass:"ml-3 mt-6"},[t("small",[e._v("\n                "+e._s(e.filteredItems.length+(1===e.filteredItems.length?e.$t("resources.resultFound"):e.$t("resources.resultsFound"))+(e.itemsPerPage>0?" ("+e.itemsPerPage+e.$t("resources.perPage")+")":""))+"\n              ")])]),e._v(" "),e._l(r.items,(function(r){return t(m.a,{key:r.name,attrs:{cols:"12"}},[t(o.a,{attrs:{link:"",href:r.url,to:r.file,target:"_blank"}},[t(w.a,{attrs:{"three-line":""}},[t($.a,[t("div",{staticClass:"overline mb-4"},e._l(r.category,(function(r,n){return t(f.a,{key:n,staticClass:"mx-1",attrs:{"x-small":"",label:"",outlined:!(e.filters.category&&e.filters.category.includes(r))}},[e._v("\n                        "+e._s(e.$t("resources.categories."+r))+"\n                      ")])})),1),e._v(" "),t($.c,{staticClass:"headline mb-1"},[e._v("\n                      "+e._s(r.name)+"\n                    ")]),e._v(" "),t($.b,{staticClass:"d-inline-flex align-center justify-start"},[t(O.a,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t(x.a,e._g(e._b({staticClass:"mr-3",attrs:{src:"EN"===r.lang?"https://cdn.vuetifyjs.com/images/flags/us.png":"https://cdn.vuetifyjs.com/images/flags/fr.png","max-width":"20",height:"15"}},"v-img",o,!1),l))]}}],null,!0)},[e._v(" "),t("span",[e._v(e._s(e.$t("misc.ui.thisDocumentLangIs")+" "+e.$t("misc.languages."+r.lang.toLowerCase())))])]),e._v("\n\n                      "+e._s(r.author))],1)],1),e._v(" "),t(k.a,[t(O.a,{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t(h.a,e._g(e._b({},"v-icon",o,!1),l),[e._v("\n                          mdi-"+e._s(e.icons[r.type[0]])+"\n                        ")])]}}],null,!0)},[e._v(" "),t("span",[e._v(e._s(e.$t("resources.types."+r.type[0])))])])],1)],1),e._v(" "),t(v.a),e._v(" "),t(c.c,[t("p",[e._v("\n                    "+e._s(r["description_"+e.$i18n.locale.toLowerCase()])+"\n                  ")]),e._v(" "),t("ChipsContainer",{attrs:{filters:e.filters.perspectives,"related-key":"perspectives",items:r.perspectives}}),e._v(" "),t("ChipsContainer",{attrs:{"related-key":"issues",items:r.issues,filters:e.filters.issues}})],1)],1)],1)}))],2)]}}:null],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ChipsContainer:r(518).default})}}]);