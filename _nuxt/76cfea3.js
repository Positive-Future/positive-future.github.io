(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{519:function(e,t,r){"use strict";r.r(t);var n={props:{items:{type:Array,required:!0},label:{type:Boolean,default:!0},relatedKey:{type:String,default:"true"},filters:{type:Array,required:!1}},data:function(){return{showMore:!1}},computed:{}},o=r(36),l=r(47),c=r.n(l),f=r(484),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"ma-n1"},e._l(e.items,(function(t,n){return r("v-chip",{key:n,staticClass:"ma-1",attrs:{color:"relatedKey === 'issues'?'primary':'secondary'",outlined:!(e.filters&&e.filters.includes(t))}},[e._v("\n      "+e._s(e.$t("resources."+e.relatedKey+"."+t))+"\n    ")])})),1)])}),[],!1,null,null,null);t.default=component.exports;c()(component,{VChip:f.a})},551:function(e,t,r){"use strict";var strong=r(295),n=r(230);e.exports=r(296)("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return strong.def(n(this,"Set"),e=0===e?0:e,e)}},strong)},552:function(e,t,r){"use strict";var n=r(106),o=r(38),l=r(5),c=r(10);t.a=Object(l.a)(n.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},589:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r(41),l=r(11);r(48),r(551),r(28),r(16),r(25),r(43),r(7),r(228),r(37),r(24),r(6),r(4),r(8),r(9);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={asyncData:function(e){return Object(l.a)(regeneratorRuntime.mark((function t(){var r,n,l,c,f,v,m,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,n=e.$content,t.next=3,n(r.i18n.locale+"/pages/resources").fetch();case 3:return l=t.sent,t.next=6,n("resources").fetch();case 6:return c=t.sent,f=Object(o.a)(new Set(c.map((function(e){return e.type})).flat())).sort(),v=Object(o.a)(new Set(c.map((function(e){return e.lang})))).sort(),m=Object(o.a)(new Set(c.map((function(e){return e.issues})).flat())).sort(),d=Object(o.a)(new Set(c.map((function(e){return e.perspectives})).flat())).sort(),t.abrupt("return",{types:f,issues:m,languages:v,perspectives:d,resources:l,items:c});case 12:case"end":return t.stop()}}),t)})))()},data:function(){return{icons:{Article:"file-document-edit-outline",Book:"book-open-page-variant",Photos:"draw",Picture:"image",Video:"video-box"},category_view:!0,itemsPerPageArray:[10,20,50,100],sortDesc:!1,page:1,itemsPerPage:10,sortBy:"name",categories:[{name:"think_about_the_future",icon:"head-cog"},{name:"face_our_challenges_today",icon:"white-balance-sunny"},{name:"stimulate_your_creativity",icon:"creation"},{name:"learn_from_the_past",icon:"rewind"}],filters:{category:[],type:[],issues:[],perspectives:[],lang:[],search:""}}},computed:{browsing:function(){return Object.values(this.filters).flat().filter((function(e){return null==e?void 0:e.length})).length>0||!this.category_view},filteredItems:function(){var e=this;return this.items.filter((function(t){var r,n,o,l,c;return(!(null!==(r=e.filters.type)&&void 0!==r&&r.length)||e.filters.type.some((function(e){return t.type.includes(e)})))&&(!(null!==(n=e.filters.issues)&&void 0!==n&&n.length)||e.filters.issues.some((function(e){return t.issues.includes(e)})))&&(!(null!==(o=e.filters.perspectives)&&void 0!==o&&o.length)||e.filters.perspectives.some((function(e){return t.perspectives.includes(e)})))&&(!(null!==(l=e.filters.lang)&&void 0!==l&&l.length)||e.filters.lang.includes(t.lang))&&(!(null!==(c=e.filters.category)&&void 0!==c&&c.length)||e.filters.category.some((function(e){return t.category.includes(e)})))})).map((function(e){return f(f({},e),{},{perspectives:e.perspectives.sort(),category:e.category.sort()})}))}},watch:{},updated:function(){},mounted:function(){},methods:{}},m=r(36),d=r(47),y=r.n(d),_=r(209),h=r(215),x=r(211),w=r(89),$=r(484),k=r(458),C=r(606),j=r(442),O=r(70),P=r(552),V=r(202),S=r(165),A=r(131),D=r(208),I=r(63),L=r(459),T=r(574),E=r(576),B=r(461),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{class:{"px-3":e.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0"}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[r("h1",{staticClass:"mt-8 mb-4"},[e._v("\n          "+e._s(e.resources.title)+"\n        ")]),e._v(" "),r("nuxt-content",{attrs:{document:e.resources}})],1)],1)],1),e._v(" "),r("v-row",{attrs:{justify:"center","no-gutters":""}},[r("v-col",{staticClass:"px-0 mx-0",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e.category_view?r("v-expand-transition",[r("v-row",{staticClass:"px-0 mx-n1"},[e._l(e.categories,(function(t,n){return r("v-col",{key:n,attrs:{cols:"12",sm:"6",xl:"3"}},[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var o=n.hover;return[r("v-card",{staticClass:"pa-2 text-center",attrs:{flat:"",elevation:o?12:2,height:"100%"},on:{click:function(r){e.filters.category=[t.name],e.category_view=!1}}},[r("v-avatar",{attrs:{color:"#00c2cb",size:"44"}},[r("v-icon",{attrs:{dark:""}},[e._v(" mdi-"+e._s(t.icon)+" ")])],1),e._v(" "),r("v-card-title",{staticClass:"justify-center font-weight-black text-uppercase",staticStyle:{"word-break":"normal"}},[e._v("\n                  "+e._s(e.$t("resources.categories."+t.name))+"\n                ")]),e._v(" "),r("v-card-text",{staticClass:"text-left",domProps:{innerHTML:e._s(e.$t("resources.categoriesTexts."+t.name))}})],1)]}}],null,!0)})],1)})),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"ma-6 text-center headline"},[e._v("\n              "+e._s(e.$t("resources.filterAlternativeText"))+"\n            ")])])],2)],1):e._e(),e._v(" "),e.category_view?e._e():r("v-btn",{staticClass:"mt-6",attrs:{text:"",small:""},on:{click:function(t){e.category_view=!0}}},[r("small",[r("v-icon",{attrs:{left:""}},[e._v("mdi-arrow-left")]),e._v(e._s(e.$t("misc.ui.back_to_categories")))],1)]),e._v(" "),r("v-data-iterator",{staticClass:"my-6",attrs:{items:e.filteredItems,"items-per-page":e.itemsPerPage,page:e.page,search:e.filters.search,"hide-default-footer":!e.browsing},on:{"update:itemsPerPage":function(t){e.itemsPerPage=t},"update:items-per-page":function(t){e.itemsPerPage=t}},scopedSlots:e._u([{key:"header",fn:function(){return[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{clearable:"",multiple:"",outlined:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},"prepend-inner-icon":"mdi-magnify",label:e.$t("resources.filters.search")},model:{value:e.filters.search,callback:function(t){e.$set(e.filters,"search",t)},expression:"filters.search"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{outlined:"",multiple:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.categories.map((function(t){return{text:e.$t("resources.categories."+t.name),value:t.name}})),label:e.$t("resources.filters.category")},model:{value:e.filters.category,callback:function(t){e.$set(e.filters,"category",t)},expression:"filters.category"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{outlined:"",multiple:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.types.map((function(t){return{text:e.$t("resources.types."+t),value:t}})),label:e.$t("resources.filters.type")},model:{value:e.filters.type,callback:function(t){e.$set(e.filters,"type",t)},expression:"filters.type"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{outlined:"",multiple:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.perspectives.map((function(t){return{text:e.$t("resources.perspectives."+t),value:t}})),label:e.$t("resources.filters.perspectives")},model:{value:e.filters.perspectives,callback:function(t){e.$set(e.filters,"perspectives",t)},expression:"filters.perspectives"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{outlined:"",multiple:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.issues.map((function(t){return{text:e.$t("resources.issues."+t),value:t}})),label:e.$t("resources.filters.issues")},model:{value:e.filters.issues,callback:function(t){e.$set(e.filters,"issues",t)},expression:"filters.issues"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-select",{attrs:{outlined:"",multiple:"","hide-details":"","menu-props":{bottom:!0,offsetY:!0},items:e.languages.map((function(t){return{text:e.$t("misc.languages."+t.toLowerCase()),value:t}})),label:e.$t("resources.filters.lang")},model:{value:e.filters.lang,callback:function(t){e.$set(e.filters,"lang",t)},expression:"filters.lang"}})],1)],1)]},proxy:!0},e.browsing?{key:"no-results",fn:function(){return[r("div",{staticClass:"ml-6 my-6"},[e._v(e._s(e.$t("resources.noResultsText")))])]},proxy:!0}:null,e.browsing?{key:"no-data",fn:function(){return[r("div",{staticClass:"ml-6 my-6"},[e._v(e._s(e.$t("resources.noDataText")))])]},proxy:!0}:null,e.browsing?{key:"default",fn:function(t){return[r("v-row",{staticClass:"mx-3"},[r("p",{staticClass:"ml-3 mt-6"},[r("small",[e._v("\n                "+e._s(e.filteredItems.length+(1===e.filteredItems.length?e.$t("resources.resultFound"):e.$t("resources.resultsFound"))+(e.itemsPerPage>0?" ("+e.itemsPerPage+e.$t("resources.perPage")+")":""))+"\n              ")])]),e._v(" "),e._l(t.items,(function(t){return r("v-col",{key:t.name,attrs:{cols:"12"}},[r("v-card",{attrs:{link:"",href:t.url,to:t.file,target:"_blank"}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("div",{staticClass:"overline mb-4"},e._l(t.category,(function(t,n){return r("v-chip",{key:n,staticClass:"mx-1",attrs:{"x-small":"",label:"",outlined:!(e.filters.category&&e.filters.category.includes(t))}},[e._v("\n                        "+e._s(e.$t("resources.categories."+t))+"\n                      ")])})),1),e._v(" "),r("v-list-item-title",{staticClass:"headline mb-1"},[e._v("\n                      "+e._s(t.name)+"\n                    ")]),e._v(" "),r("v-list-item-subtitle",{staticClass:"d-inline-flex align-center justify-start"},[r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[r("v-img",e._g(e._b({staticClass:"mr-3",attrs:{src:"EN"===t.lang?"https://cdn.vuetifyjs.com/images/flags/us.png":"https://cdn.vuetifyjs.com/images/flags/fr.png","max-width":"20",height:"15"}},"v-img",l,!1),o))]}}],null,!0)},[e._v(" "),r("span",[e._v(e._s(e.$t("misc.ui.thisDocumentLangIs")+" "+e.$t("misc.languages."+t.lang.toLowerCase())))])]),e._v("\n\n                      "+e._s(t.author))],1)],1),e._v(" "),r("v-list-item-avatar",[r("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[r("v-icon",e._g(e._b({},"v-icon",l,!1),o),[e._v("\n                          mdi-"+e._s(e.icons[t.type[0]])+"\n                        ")])]}}],null,!0)},[e._v(" "),r("span",[e._v(e._s(e.$t("resources.types."+t.type[0])))])])],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",[r("p",[e._v("\n                    "+e._s(t["description_"+e.$i18n.locale.toLowerCase()])+"\n                  ")]),e._v(" "),r("ChipsContainer",{attrs:{filters:e.filters.perspectives,"related-key":"perspectives",items:t.perspectives}}),e._v(" "),r("ChipsContainer",{attrs:{"related-key":"issues",items:t.issues,filters:e.filters.issues}})],1)],1)],1)}))],2)]}}:null],null,!0)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;y()(component,{ChipsContainer:r(519).default}),y()(component,{VAvatar:_.a,VBtn:h.a,VCard:x.a,VCardText:w.c,VCardTitle:w.d,VChip:$.a,VCol:k.a,VDataIterator:C.a,VDivider:j.a,VExpandTransition:O.a,VHover:P.a,VIcon:V.a,VImg:S.a,VListItem:A.a,VListItemAvatar:D.a,VListItemContent:I.a,VListItemSubtitle:I.b,VListItemTitle:I.c,VRow:L.a,VSelect:T.a,VTextField:E.a,VTooltip:B.a})}}]);