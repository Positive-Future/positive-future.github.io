(window.webpackJsonp=window.webpackJsonp||[]).push([[38,17,23],{618:function(t,e,r){var content=r(622);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("1449a06a",content,!0,{sourceMap:!1})},619:function(t,e,r){var content=r(627);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("05ce56f8",content,!0,{sourceMap:!1})},620:function(t,e,r){"use strict";r.r(e);var n=r(640),o=r(122),c={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0,ready:!1}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting},iframeLoded:function(){}}},l=(r(621),r(52)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{directives:[{def:o.a,name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[e(n.a,{staticClass:"d-flex",attrs:{type:"image"}}),t._v(" "),e("iframe",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{title:"Youtube video",src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{load:function(e){t.ready=!0}}})],1)}),[],!1,null,null,null);e.default=component.exports},621:function(t,e,r){"use strict";r(618)},622:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.nuxt-content h2,h2{margin-bottom:10px;margin-top:30px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-size:30px;font-weight:600;line-height:normal;margin-bottom:20px;margin-top:10px}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{color:rgba(0,0,0,.6);flex:1 1 auto;font-family:"Lato",sans-serif;font-family:"Lato",sans-serif!important;font-size:16px;font-weight:400!important;letter-spacing:.0071428571em!important;line-height:1.375rem!important;max-width:100%;word-break:normal}.nuxt-content ul{margin-bottom:20px}',""]),n.locals={},t.exports=n},626:function(t,e,r){"use strict";r(619)},627:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,".frame[data-v-16bc5540]{display:flex;height:100%;overflow:hidden;position:relative;width:100%}.overlay[data-v-16bc5540]{bottom:0;display:flex;flex-direction:column;justify-content:space-between;left:0;padding-bottom:2rem;padding-right:1.9rem;position:absolute;right:0;top:0;z-index:2}.v-image[data-v-16bc5540]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-16bc5540]{opacity:.8;transform:scale(1.1)}",""]),n.locals={},t.exports=n},628:function(t,e,r){"use strict";r.r(e);var n=r(220),o=r(78),c=(r(27),{props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:"/img/header-bg.jpg"}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vh sm:100vh md:100vh lg:100vh xl:100vh",modifiers:{format:"webp",quality:70,height:this.height}})}},mounted:function(){}}),l=(r(626),r(52)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"frame"},[e("div",{staticClass:"overlay"}),t._v(" "),t.src?e(n.a,t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size}},"v-img",t.$attrs,!1),[e("span",{attrs:{id:"caption-content"}},[t._t("caption"),t._v(" "),e("br")],2)]):e(o.a)],1)}),[],!1,null,"16bc5540",null);e.default=component.exports},637:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return o}));r(39),r(23),r(54),r(79),r(3),r(36);var n=function(t,e){return t.length<=e?t:t.slice(0,e)+"..."},o=function(t){return t.toString().trim().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},646:function(t,e,r){"use strict";r.r(e);var n=r(289),o=r(112),c=r(635),l=(r(7),r(6),r(10),r(3),r(11),r(8),r(12),r(1)),f=r(637);function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(l.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var h={props:{item:{type:Object,default:function(){}}},data:function(){return{show:!1,laureateDoc:this.laureateDocMethod()}},computed:{},mounted:function(){},methods:{truncateString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(f.b)(t,250)},laureateDocMethod:function(){var t,e,r=this.item.excerpt;return(null==r||null===(t=r.children[0])||void 0===t?void 0:t.children)&&(null==r||null===(e=r.children[0])||void 0===e||e.children.push({type:"text",value:"..."})),{body:m({},r)}}}},v=h,y=r(52),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"pa-6 my-3 d-flex flex-row flex-no-wrap justify-space-between",attrs:{color:"winner"===t.item.category?"#ffe2a0":"transparent",nuxt:"",to:t.localePath("/contest/laureates/"+t.item.slug)}},[t.$vuetify.breakpoint.smAndUp?e("div",[t.item.video?e("YoutubeEmbedded",{staticClass:"mb-9 ml-3",attrs:{yt:t.item.video}}):t._e(),t._v(" "),t.item.image?e("div",[e("OptimizedImage",{attrs:{src:t.item.image,width:"200px"}}),t._v(" "),t.item.copyright?e("small",{staticClass:"muted caption"},[t._v("© "+t._s(t.item.copyright))]):t._e()],1):t._e()],1):t._e(),t._v(" "),e(o.c,{staticClass:"pt-0"},[e("div",{staticClass:"text-h6"},[t._v("\n      "+t._s(t.item.title)+"\n      "),"winner"===t.item.category?e(c.a,{staticClass:"ma-2",attrs:{small:"",color:"#fff1d0"}},[t._v("\n        "+t._s(t.$t("laureates."+t.item.category).toUpperCase())+"\n      ")]):t._e(),t._v(" "),"crush"===t.item.category?e(c.a,{staticClass:"ma-2",attrs:{small:"",color:"#fff1d0"}},[t._v("\n        "+t._s(t.$t("laureates.crush"))+"\n      ")]):t._e(),t._v(" "),e(c.a,{staticClass:"ma-2",attrs:{small:""}},[t._v("\n        "+t._s(t.$t("form.application.format."+t.item.type))+"\n      ")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[t._v("\n      "+t._s(t.$t("from"))+"\n      "),t._l(t.item.team,(function(r,n){return e("span",{key:r.firstname+r.lastname},[t._v(t._s(r.lastname.toUpperCase()+" "+r.firstname)),n<t.item.team.length-1?[t._v(", ")]:t._e()],2)}))],2),t._v(" "),e("nuxt-content",{staticClass:"d-inline",attrs:{document:t.laureateDoc}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{YoutubeEmbedded:r(620).default,OptimizedImage:r(628).default})},656:function(t,e,r){"use strict";r.r(e);var n=r(777),o=r(610),c=r(609),l=r(775),f=r(776),d=r(93),m=r(645),h=(r(6),r(11),r(8),r(12),r(51)),v=r(1),y=r(15);r(3),r(36),r(23),r(186),r(7),r(227),r(25),r(10),r(35),r(61);function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(Object(r),!0).forEach((function(e){Object(v.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var _={props:{},data:function(){return{searching:!1,searchString:"",limit:10,tab:0,openModal:!1,laureates:[],formats:[],edition:null,laureatesOnly:!1}},fetch:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).fetch();case 2:r=e.sent,t.laureates=t.sortLaureates(r);case 4:case"end":return e.stop()}}),e)})))()},computed:{},watch:{searchString:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},edition:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},formats:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},laureatesOnly:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){"#2024"===this.$route.hash&&(this.edition=2024),"#2021"===this.$route.hash&&(this.edition=2021)},methods:{updateSearch:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=[],c=w(w(w({},t.edition&&{edition:t.edition.toString()}),(null===(r=t.formats)||void 0===r?void 0:r.length)&&{type:{$in:t.formats}}),t.laureatesOnly&&{category:{$in:["winner","crush"]}}),!t.searchString){e.next=8;break}return e.next=5,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).where(c).search(t.searchString).fetch();case 5:o=e.sent,e.next=11;break;case 8:return e.next=10,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).where(c).fetch();case 10:o=e.sent;case 11:t.searching=(null===(n=t.searchString)||void 0===n?void 0:n.length)||Object.keys(c).length||!1,t.laureates=t.sortLaureates(o);case 13:case"end":return e.stop()}}),e)})))()},sortLaureates:function(t){return[].concat(Object(h.a)(t.filter((function(t){return"winner"===t.category}))),Object(h.a)(t.filter((function(t){return"crush"===t.category}))),Object(h.a)(t.filter((function(t){return!["winner","crush"].includes(t.category)})))).sort((function(a,b){return+a.edition<+b.edition}))}}},O=r(52),component=Object(O.a)(_,(function(){var t=this,e=t._self._c;return e("section",[e(c.a,{attrs:{justify:"center"}},[e(o.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[t.$vuetify.breakpoint.smAndUp?e(d.a,{staticClass:"mx-n4",attrs:{flat:""}},[e(m.a,{staticClass:"align-center justify-center d-flex"},[e(f.a,{staticClass:"mr-2",attrs:{id:"search",name:"search",label:t.$t("search"),"hide-details":"",solo:"",flat:"",outlined:"",clearable:"","append-icon":t.searching?null:"mdi-magnify"},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}}),t._v(" "),e(l.a,{staticClass:"mr-2",attrs:{items:[{text:t.$t("the-city-in-2100"),value:2021},{text:t.$t("work-in-2100"),value:2024}],label:t.$t("edition"),outlined:"","hide-details":"",clearable:"","menu-props":{bottom:!0,offsetY:!0}},model:{value:t.edition,callback:function(e){t.edition=e},expression:"edition"}}),t._v(" "),e(l.a,{attrs:{items:[{text:t.$t("form.application.format.audio"),value:"audio"},{text:t.$t("form.application.format.comic"),value:"comic"},{text:t.$t("form.application.format.article"),value:"article"},{text:t.$t("form.application.format.novel"),value:"novel"},{text:t.$t("form.application.format.video"),value:"video"}],label:t.$t("format"),multiple:"",outlined:"","hide-details":"",clearable:"","menu-props":{bottom:!0,offsetY:!0}},model:{value:t.formats,callback:function(e){t.formats=e},expression:"formats"}}),t._v(" "),e(n.a,{staticClass:"ml-4",attrs:{"hide-details":"",label:t.$t("laureates-only")},model:{value:t.laureatesOnly,callback:function(e){t.laureatesOnly=e},expression:"laureatesOnly"}})],1)],1):t._e(),t._v(" "),0===t.laureates.length?[t._v("\n        "+t._s(t.$t("no-laureates-found-matching-the-search-and-filter-criteria"))+"\n      ")]:t._e(),t._v(" "),t._l(t.laureates,(function(t,r){return[e("LaureateBlock",{key:r,attrs:{item:t,index:r}})]}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LaureateBlock:r(646).default})},670:function(t,e,r){"use strict";(function(t){var n=r(15);r(61);e.a={props:{},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app,n=t.$content,e.next=3,n("/pages/"+r.i18n.locale+"/laureates").fetch();case 3:return o=e.sent,e.next=6,n("laureates/"+r.i18n.locale).fetch();case 6:return c=e.sent,e.abrupt("return",{laureateText:o,laureates:c});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{model:null}},computed:{},created:function(){this.$vuetify.breakpoint.smAndDown&&t.env.BROWSER&&this.$vuetify.goTo(0)},mounted:function(){},methods:{}}}).call(this,r(232))},812:function(t,e,r){"use strict";r.r(e);var n=r(610),o=r(609),c=r(670).a,l=r(52),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0"}},[e(o.a,{attrs:{justify:"center"}},[e(n.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("h1",{staticClass:"mt-12"},[t._v(t._s(t.laureateText.title))]),t._v(" "),e("nuxt-content",{staticClass:"mt-6",attrs:{document:t.laureateText}})],1)],1)],1),t._v(" "),e("LaureateList",{staticClass:"mt-6"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LaureateList:r(656).default})}}]);