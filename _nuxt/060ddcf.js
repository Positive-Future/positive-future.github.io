(window.webpackJsonp=window.webpackJsonp||[]).push([[38,17,23],{488:function(t,e,n){var content=n(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1449a06a",content,!0,{sourceMap:!1})},489:function(t,e,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("05ce56f8",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";n.r(e);var r=n(508),o=n(99),c={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0,ready:!1}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting},iframeLoded:function(){}}},l=(n(492),n(37)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{directives:[{def:o.a,name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[e(r.a,{staticClass:"d-flex",attrs:{type:"image"}}),t._v(" "),e("iframe",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{title:"Youtube video",src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{load:function(e){t.ready=!0}}})],1)}),[],!1,null,null,null);e.default=component.exports},492:function(t,e,n){"use strict";n(488)},493:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.nuxt-content h2,h2{margin-bottom:10px;margin-top:30px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-size:30px;font-weight:600;line-height:normal;margin-bottom:20px;margin-top:10px}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{color:rgba(0,0,0,.6);flex:1 1 auto;font-family:"Lato",sans-serif;font-family:"Lato",sans-serif!important;font-size:16px;font-weight:400!important;letter-spacing:.0071428571em!important;line-height:1.375rem!important;max-width:100%;word-break:normal}.nuxt-content ul{margin-bottom:20px}',""]),r.locals={},t.exports=r},496:function(t,e,n){"use strict";n(489)},497:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,".frame[data-v-16bc5540]{display:flex;height:100%;overflow:hidden;position:relative;width:100%}.overlay[data-v-16bc5540]{bottom:0;display:flex;flex-direction:column;justify-content:space-between;left:0;padding-bottom:2rem;padding-right:1.9rem;position:absolute;right:0;top:0;z-index:2}.v-image[data-v-16bc5540]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-16bc5540]{opacity:.8;transform:scale(1.1)}",""]),r.locals={},t.exports=r},498:function(t,e,n){"use strict";n.r(e);var r=n(170),o=n(59),c=(n(21),{props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:"/img/header-bg.jpg"}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vh sm:100vh md:100vh lg:100vh xl:100vh",modifiers:{format:"webp",quality:70,height:this.height}})}},mounted:function(){}}),l=(n(496),n(37)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"frame"},[e("div",{staticClass:"overlay"}),t._v(" "),t.src?e(r.a,t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size}},"v-img",t.$attrs,!1),[e("span",{attrs:{id:"caption-content"}},[t._t("caption"),t._v(" "),e("br")],2)]):e(o.a)],1)}),[],!1,null,"16bc5540",null);e.default=component.exports},504:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));n(29),n(39),n(15),n(71),n(72);var r=function(t,e){return t.length<=e?t:t.slice(0,e)+"..."},o=function(t){return t.toString().trim().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},514:function(t,e,n){"use strict";n.r(e);var r=n(216),o=n(90),c=n(503),l=n(504),f={props:{item:{type:Object,default:function(){}}},data:function(){return{show:!1}},computed:{},mounted:function(){},methods:{truncateString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(l.b)(t,250)}}},m=f,d=n(37),component=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"pa-6 my-3 d-flex flex-row flex-no-wrap justify-space-between",attrs:{color:"winner"===t.item.category?"#ffe2a0":"transparent",nuxt:"",to:t.localePath("/contest/laureates/"+t.item.slug)}},[t.$vuetify.breakpoint.smAndUp?e("div",[t.item.video?e("YoutubeEmbedded",{staticClass:"mb-9 ml-3",attrs:{yt:t.item.video}}):t._e(),t._v(" "),t.item.image?e("div",[e("OptimizedImage",{attrs:{src:t.item.image,width:"200px"}}),t._v(" "),t.item.copyright?e("small",{staticClass:"muted caption"},[t._v("© "+t._s(t.item.copyright))]):t._e()],1):t._e()],1):t._e(),t._v(" "),e(o.c,{staticClass:"pt-0"},[e("div",{staticClass:"text-h6"},[t._v("\n      "+t._s(t.item.title)+"\n      "),"winner"===t.item.category?e(c.a,{staticClass:"ma-2",attrs:{small:"",color:"#fff1d0"}},[t._v("\n        "+t._s(t.$t("laureates."+t.item.category).toUpperCase())+"\n      ")]):t._e(),t._v(" "),"crush"===t.item.category?e(c.a,{staticClass:"ma-2",attrs:{small:"",color:"#fff1d0"}},[t._v("\n        "+t._s(t.$t("laureates.crush"))+"\n      ")]):t._e(),t._v(" "),e(c.a,{staticClass:"ma-2",attrs:{small:""}},[t._v("\n        "+t._s(t.$t("form.application.format."+t.item.type))+"\n      ")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[t._v("\n      "+t._s(t.$t("from"))+"\n      "),t._l(t.item.team,(function(n,r){return e("span",{key:n.firstname+n.lastname},[t._v(t._s(n.lastname.toUpperCase()+" "+n.firstname)),r<t.item.team.length-1?[t._v(", ")]:t._e()],2)}))],2),t._v(" "),e("nuxt-content",{staticClass:"d-inline",attrs:{document:{body:t.item.excerpt}}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{YoutubeEmbedded:n(490).default,OptimizedImage:n(498).default})},525:function(t,e,n){"use strict";n.r(e);var r=n(557),o=n(480),c=n(479),l=n(618),f=n(527),m=n(69),d=n(512),h=(n(4),n(8),n(9),n(36)),v=n(1),y=n(12);n(15),n(71),n(72),n(146),n(5),n(7),n(25),n(50);function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){Object(v.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w={props:{},data:function(){return{searching:!1,searchString:"",limit:10,tab:0,openModal:!1,laureates:[],formats:[],edition:null,laureatesOnly:!1}},fetch:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).fetch();case 2:n=e.sent,t.laureates=t.sortLaureates(n);case 4:case"end":return e.stop()}}),e)})))()},computed:{},watch:{searchString:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},edition:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},formats:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},laureatesOnly:function(t){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){},methods:{updateSearch:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=[],c=_(_(_({},t.edition&&{edition:t.edition.toString()}),(null===(n=t.formats)||void 0===n?void 0:n.length)&&{type:{$in:t.formats}}),t.laureatesOnly&&{category:{$in:["winner","crush"]}}),!t.searchString){e.next=8;break}return e.next=5,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).where(c).search(t.searchString).fetch();case 5:o=e.sent,e.next=11;break;case 8:return e.next=10,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).where(c).fetch();case 10:o=e.sent;case 11:t.searching=(null===(r=t.searchString)||void 0===r?void 0:r.length)||Object.keys(c).length||!1,t.laureates=t.sortLaureates(o);case 13:case"end":return e.stop()}}),e)})))()},sortLaureates:function(t){return[].concat(Object(h.a)(t.filter((function(t){return"winner"===t.category}))),Object(h.a)(t.filter((function(t){return"crush"===t.category}))),Object(h.a)(t.filter((function(t){return!["winner","crush"].includes(t.category)}))))}}},O=n(37),component=Object(O.a)(w,(function(){var t=this,e=t._self._c;return e("section",[e(c.a,{attrs:{justify:"center"}},[e(o.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[t.$vuetify.breakpoint.smAndUp?e(m.a,{staticClass:"mx-n4",attrs:{flat:""}},[e(d.a,{staticClass:"align-center justify-center d-flex"},[e(f.a,{staticClass:"mr-2",attrs:{id:"search",name:"search",label:t.$t("search"),"hide-details":"",solo:"",flat:"",outlined:"",clearable:"","append-icon":t.searching?null:"mdi-magnify"},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}}),t._v(" "),e(l.a,{staticClass:"mr-2",attrs:{items:[{text:t.$t("the-city-in-2100"),value:2021},{text:t.$t("work-in-2100"),value:2024}],label:t.$t("edition"),outlined:"","hide-details":"",clearable:"","menu-props":{bottom:!0,offsetY:!0}},model:{value:t.edition,callback:function(e){t.edition=e},expression:"edition"}}),t._v(" "),e(l.a,{attrs:{items:[{text:t.$t("form.application.format.audio"),value:"audio"},{text:t.$t("form.application.format.comic"),value:"comic"},{text:t.$t("form.application.format.article"),value:"article"},{text:t.$t("form.application.format.novel"),value:"novel"},{text:t.$t("form.application.format.video"),value:"video"}],label:t.$t("format"),multiple:"",outlined:"","hide-details":"",clearable:"","menu-props":{bottom:!0,offsetY:!0}},model:{value:t.formats,callback:function(e){t.formats=e},expression:"formats"}}),t._v(" "),e(r.a,{staticClass:"ml-4",attrs:{"hide-details":"",label:t.$t("laureates-only")},model:{value:t.laureatesOnly,callback:function(e){t.laureatesOnly=e},expression:"laureatesOnly"}})],1)],1):t._e(),t._v(" "),0===t.laureates.length?[t._v("\n        "+t._s(t.$t("no-laureates-found-matching-the-search-and-filter-criteria"))+"\n      ")]:t._e(),t._v(" "),t._l(t.laureates,(function(t,n){return[e("LaureateBlock",{key:n,attrs:{item:t,index:n}})]}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LaureateBlock:n(514).default})},534:function(t,e,n){"use strict";(function(t){var r=n(12);n(50);e.a={props:{},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,e.next=3,r("/pages/"+n.i18n.locale+"/laureates").fetch();case 3:return o=e.sent,e.next=6,r("laureates/"+n.i18n.locale).fetch();case 6:return c=e.sent,e.abrupt("return",{laureateText:o,laureates:c});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{model:null}},computed:{},created:function(){this.$vuetify.breakpoint.smAndDown&&t.env.BROWSER&&this.$vuetify.goTo(0)},mounted:function(){},methods:{}}}).call(this,n(179))},659:function(t,e,n){"use strict";n.r(e);var r=n(480),o=n(479),c=n(534).a,l=n(37),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0"}},[e(o.a,{attrs:{justify:"center"}},[e(r.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("h1",{staticClass:"mt-12"},[t._v(t._s(t.laureateText.title))]),t._v(" "),e("nuxt-content",{staticClass:"mt-6",attrs:{document:t.laureateText}})],1)],1)],1),t._v(" "),e("LaureateList",{staticClass:"mt-6"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LaureateList:n(525).default})}}]);