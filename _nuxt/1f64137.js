(window.webpackJsonp=window.webpackJsonp||[]).push([[17,23],{472:function(t,e,r){var content=r(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("384d8948",content,!0,{sourceMap:!1})},473:function(t,e,r){"use strict";r.r(e);var n={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0,ready:!1}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting},iframeLoded:function(){}}},o=(r(474),r(36)),c=r(46),l=r.n(c),f=r(492),d=r(223),m=r.n(d),h=r(99),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[r("v-skeleton-loader",{staticClass:"d-flex",attrs:{type:"image"}}),t._v(" "),r("iframe",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{title:"Youtube video",src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{load:function(e){t.ready=!0}}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VSkeletonLoader:f.a}),m()(component,{Intersect:h.a})},474:function(t,e,r){"use strict";r(472)},475:function(t,e,r){var n=r(15)(!1);n.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal;color:rgba(0,0,0,.6);font-family:"Lato",sans-serif!important;font-weight:400!important;line-height:1.375rem!important;letter-spacing:.0071428571em!important}.nuxt-content ul{margin-bottom:20px}',""]),t.exports=n},476:function(t,e,r){var content=r(482);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("ac58d4b2",content,!0,{sourceMap:!1})},480:function(t,e,r){"use strict";r.r(e);r(20);var n={props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:"/img/header-bg.jpg"}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vh sm:100vh md:100vh lg:100vh xl:100vh",modifiers:{format:"webp",quality:70,height:this.height}})}},mounted:function(){}},o=(r(481),r(36)),c=r(46),l=r.n(c),f=r(165),d=r(59),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"frame"},[r("div",{staticClass:"overlay"}),t._v(" "),t.src?r("v-img",t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size}},"v-img",t.$attrs,!1),[r("span",{attrs:{id:"caption-content"}},[t._t("caption"),t._v(" "),r("br")],2)]):r("v-sheet")],1)}),[],!1,null,"16bc5540",null);e.default=component.exports;l()(component,{VImg:f.a,VSheet:d.a})},481:function(t,e,r){"use strict";r(476)},482:function(t,e,r){var n=r(15)(!1);n.push([t.i,".frame[data-v-16bc5540]{display:flex;position:relative;width:100%;height:100%;overflow:hidden}.overlay[data-v-16bc5540]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;z-index:2;padding-bottom:2rem;padding-right:1.9rem;justify-content:space-between}.v-image[data-v-16bc5540]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-16bc5540]{transform:scale(1.1);opacity:.8}",""]),t.exports=n},487:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}));r(29),r(48),r(17),r(90),r(91);var n=function(t,e){return t.length<=e?t:t.slice(0,e)+"..."},o=function(t){return t.toString().trim().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},494:function(t,e,r){"use strict";r.r(e);r(6),r(4),r(7),r(8),r(9);var n=r(1),o=r(487);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{item:{type:Object,default:function(){}}},data:function(){return{show:!1,laureateDoc:this.laureateDocMethod()}},computed:{},mounted:function(){},methods:{truncateString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(o.b)(t,250)},laureateDocMethod:function(){var t,e,r=this.item.excerpt;return(null==r||null===(t=r.children[0])||void 0===t?void 0:t.children)&&(null==r||null===(e=r.children[0])||void 0===e||e.children.push({type:"text",value:"..."})),{body:l({},r)}}}},d=f,m=r(36),h=r(46),v=r.n(h),y=r(211),x=r(88),w=r(488),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"pa-6 my-3 d-flex flex-row flex-no-wrap justify-space-between",attrs:{color:"winner"===t.item.category?"#ffe2a0":"transparent",nuxt:"",to:t.localePath("/contest/laureates/"+t.item.slug)}},[t.$vuetify.breakpoint.smAndUp?r("div",[t.item.video?r("YoutubeEmbedded",{staticClass:"mb-9 ml-3",attrs:{yt:t.item.video}}):t._e(),t._v(" "),t.item.image?r("div",[r("OptimizedImage",{attrs:{src:t.item.image,width:"200px"}}),t._v(" "),t.item.copyright?r("small",{staticClass:"muted caption"},[t._v("© "+t._s(t.item.copyright))]):t._e()],1):t._e()],1):t._e(),t._v(" "),r("v-card-text",{staticClass:"pt-0"},[r("div",{staticClass:"text-h6"},[t._v("\n      "+t._s(t.item.title)+"\n      "),"winner"===t.item.category?r("v-chip",{staticClass:"ma-2",attrs:{small:"",color:"#fff1d0"}},[t._v("\n        "+t._s(t.$t("laureates."+t.item.category).toUpperCase())+"\n      ")]):t._e(),t._v(" "),"crush"===t.item.category?r("v-chip",{staticClass:"ma-2",attrs:{small:"",color:"#fff1d0"}},[t._v("\n        "+t._s(t.$t("laureates.crush"))+"\n      ")]):t._e(),t._v(" "),r("v-chip",{staticClass:"ma-2",attrs:{small:""}},[t._v("\n        "+t._s(t.$t("form.application.format."+t.item.type))+"\n      ")])],1),t._v(" "),r("div",{staticClass:"mb-3"},[t._v("\n      "+t._s(t.$t("from"))+"\n      "),t._l(t.item.team,(function(e,n){return r("span",{key:e.firstname+e.lastname},[t._v(t._s(e.lastname.toUpperCase()+" "+e.firstname)),n<t.item.team.length-1?[t._v(", ")]:t._e()],2)}))],2),t._v(" "),r("nuxt-content",{staticClass:"d-inline",attrs:{document:t.laureateDoc}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{YoutubeEmbedded:r(473).default,OptimizedImage:r(480).default}),v()(component,{VCard:y.a,VCardText:x.c,VChip:w.a})},499:function(t,e,r){"use strict";r.r(e);r(4),r(8),r(9);var n=r(39),o=r(1),c=r(11);r(17),r(90),r(91),r(224),r(6),r(7),r(24),r(47);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{editionFilter:{type:String,default:null}},data:function(){return{searching:!1,searchString:"",limit:10,tab:0,openModal:!1,laureates:[],formats:[],edition:null,laureatesOnly:!1}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).fetch();case 2:r=e.sent,t.laureates=t.sortLaureates(r);case 4:case"end":return e.stop()}}),e)})))()},computed:{},watch:{searchString:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},edition:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},formats:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},laureatesOnly:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){"#2024"===this.$route.hash&&(this.edition=2024),"#2021"===this.$route.hash&&(this.edition=2021),this.editionFilter&&(this.edition=this.editionFilter)},methods:{updateSearch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=[],c=f(f(f({},t.edition&&{edition:t.edition.toString()}),(null===(r=t.formats)||void 0===r?void 0:r.length)&&{type:{$in:t.formats}}),t.laureatesOnly&&{category:{$in:["winner","crush"]}}),!t.searchString){e.next=8;break}return e.next=5,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).where(c).search(t.searchString).fetch();case 5:o=e.sent,e.next=11;break;case 8:return e.next=10,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).where(c).fetch();case 10:o=e.sent;case 11:t.searching=(null===(n=t.searchString)||void 0===n?void 0:n.length)||Object.keys(c).length||!1,t.laureates=t.sortLaureates(o);case 13:case"end":return e.stop()}}),e)})))()},sortLaureates:function(t){return[].concat(Object(n.a)(t.filter((function(t){return"winner"===t.category})).sort((function(a,b){return+(null==a?void 0:a.order)>+(null==b?void 0:b.order)}))),Object(n.a)(t.filter((function(t){return"crush"===t.category}))),Object(n.a)(t.filter((function(t){return!["winner","crush"].includes(t.category)})))).sort((function(a,b){return+a.edition<+b.edition}))}}},m=r(36),h=r(46),v=r.n(h),y=r(597),x=r(459),w=r(460),_=r(595),O=r(596),j=r(69),$=r(491),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[t.$vuetify.breakpoint.smAndUp?r("v-toolbar",{staticClass:"mx-n4",attrs:{flat:""}},[r("v-toolbar-items",{staticClass:"align-center justify-center d-flex"},[r("v-text-field",{staticClass:"mr-2",attrs:{id:"search",name:"search",label:t.$t("search"),"hide-details":"",solo:"",flat:"",outlined:"",clearable:"","append-icon":t.searching?null:"mdi-magnify"},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}}),t._v(" "),r("v-select",{staticClass:"mr-2",attrs:{items:[{text:t.$t("the-city-in-2100"),value:2021},{text:t.$t("work-in-2100"),value:2024}],label:t.$t("edition"),outlined:"","hide-details":"",clearable:"","menu-props":{bottom:!0,offsetY:!0}},model:{value:t.edition,callback:function(e){t.edition=e},expression:"edition"}}),t._v(" "),r("v-select",{attrs:{items:[{text:t.$t("form.application.format.audio"),value:"audio"},{text:t.$t("form.application.format.comic"),value:"comic"},{text:t.$t("form.application.format.article"),value:"article"},{text:t.$t("form.application.format.novel"),value:"novel"},{text:t.$t("form.application.format.video"),value:"video"}],label:t.$t("format"),multiple:"",outlined:"","hide-details":"",clearable:"","menu-props":{bottom:!0,offsetY:!0}},model:{value:t.formats,callback:function(e){t.formats=e},expression:"formats"}}),t._v(" "),r("v-checkbox",{staticClass:"ml-4",attrs:{"hide-details":"",label:t.$t("laureates-only")},model:{value:t.laureatesOnly,callback:function(e){t.laureatesOnly=e},expression:"laureatesOnly"}})],1)],1):t._e(),t._v(" "),0===t.laureates.length?[t._v("\n        "+t._s(t.$t("no-laureates-found-matching-the-search-and-filter-criteria"))+"\n      ")]:t._e(),t._v(" "),t._l(t.laureates,(function(t,e){return[r("LaureateBlock",{key:e,attrs:{item:t,index:e}})]}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{LaureateBlock:r(494).default}),v()(component,{VCheckbox:y.a,VCol:x.a,VRow:w.a,VSelect:_.a,VTextField:O.a,VToolbar:j.a,VToolbarItems:$.a})}}]);