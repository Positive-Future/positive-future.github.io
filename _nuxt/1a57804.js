(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{488:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1449a06a",content,!0,{sourceMap:!1})},491:function(t,e,n){"use strict";n(488)},492:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.nuxt-content h2,h2{margin-bottom:10px;margin-top:30px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-size:30px;font-weight:600;line-height:normal;margin-bottom:20px;margin-top:10px}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{color:rgba(0,0,0,.6);flex:1 1 auto;font-family:"Lato",sans-serif;font-family:"Lato",sans-serif!important;font-size:16px;font-weight:400!important;letter-spacing:.0071428571em!important;line-height:1.375rem!important;max-width:100%;word-break:normal}.nuxt-content ul{margin-bottom:20px}',""]),r.locals={},t.exports=r},493:function(t,e,n){"use strict";n.r(e);var r=n(509),o=n(99),l={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0,ready:!1}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting},iframeLoded:function(){}}},c=(n(491),n(37)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{directives:[{def:o.a,name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[e(r.a,{staticClass:"d-flex",attrs:{type:"image"}}),t._v(" "),e("iframe",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{title:"Youtube video",src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{load:function(e){t.ready=!0}}})],1)}),[],!1,null,null,null);e.default=component.exports},511:function(t,e,n){"use strict";n.r(e);var r=n(216),o=n(90),l=n(503),c=(n(19),n(504)),m={props:{item:{type:Object,default:function(){}}},data:function(){return{show:!1}},computed:{},mounted:function(){console.log(this.$route.name)},methods:{truncateString:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return Object(c.b)(t,250)}}},f=m,d=n(37),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"pa-6 my-3 d-flex flex-row flex-no-wrap justify-space-between",attrs:{color:"winner"===t.item.category?"#ffe2a0":"transparent",nuxt:"",to:t.localePath("/contest/laureates/"+t.item.slug)}},[t.$vuetify.breakpoint.smAndUp?e("div",[t.item.video?e("YoutubeEmbedded",{staticClass:"mb-9 ml-3",attrs:{yt:t.item.video}}):t._e(),t._v(" "),t.item.image?e("div",[e("OptimizedImage",{attrs:{src:t.item.image,width:"200px"}}),t._v(" "),t.item.copyright?e("small",{staticClass:"muted caption"},[t._v("© "+t._s(t.item.copyright))]):t._e()],1):t._e()],1):t._e(),t._v(" "),e(o.c,{staticClass:"pt-0"},[e("div",{staticClass:"text-h6"},[t._v("\n      "+t._s(t.item.title)+"\n      "),"winner"===t.item.category?e(l.a,{staticClass:"ma-2",attrs:{small:"",color:"#fff1d0"}},[t._v("\n        "+t._s(t.$t("laureates."+t.item.category).toUpperCase())+"\n      ")]):t._e(),t._v(" "),"crush"===t.item.category?e(l.a,{staticClass:"ma-2",attrs:{small:"",color:"#fff1d0"}},[t._v("\n        "+t._s(t.$t("laureates.crush"))+"\n      ")]):t._e(),t._v(" "),e(l.a,{staticClass:"ma-2",attrs:{small:""}},[t._v("\n        "+t._s(t.$t("form.application.format."+t.item.type))+"\n      ")])],1),t._v(" "),e("div",{staticClass:"mb-3"},[t._v("\n      "+t._s(t.$t("from"))+"\n      "),t._l(t.item.team,(function(n,r){return e("span",{key:n.firstname+n.lastname},[t._v(t._s(n.lastname.toUpperCase()+" "+n.firstname)),r<t.item.team.length-1?[t._v(", ")]:t._e()],2)}))],2),t._v(" "),e("nuxt-content",{staticClass:"d-inline",attrs:{document:{body:t.item.excerpt}}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{YoutubeEmbedded:n(493).default,OptimizedImage:n(498).default})},517:function(t,e,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("158a1398",content,!0,{sourceMap:!1})},518:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,'.nuxt-content hr{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.nuxt-content h2,h2{margin-bottom:10px;margin-top:30px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-size:30px;font-weight:600;line-height:normal;margin-bottom:20px;margin-top:10px}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{color:rgba(0,0,0,.6);flex:1 1 auto;font-family:"Lato",sans-serif;font-family:"Lato",sans-serif!important;font-size:16px;font-weight:400!important;letter-spacing:.0071428571em!important;line-height:1.375rem!important;max-width:100%;word-break:normal}.nuxt-content ul{margin-bottom:20px}.v-item--disabled,.v-item--disabled *{pointer-events:none}',""]),r.locals={},t.exports=r},520:function(t,e,n){"use strict";n.r(e);var r=n(609),o=n(480),l=n(479),c=n(607),m=n(608),f=n(71),d=n(510),v=(n(4),n(8),n(9),n(36)),h=n(1),x=n(12);n(15),n(67),n(68),n(145),n(5),n(7),n(25),n(50);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){Object(h.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w={props:{},data:function(){return{searching:!1,searchString:"",limit:10,tab:0,openModal:!1,laureates:[],formats:[],edition:null,laureatesOnly:!1}},fetch:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).fetch();case 2:n=e.sent,t.laureates=t.sortLaureates(n);case 4:case"end":return e.stop()}}),e)})))()},computed:{},watch:{searchString:function(t){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},edition:function(t){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},formats:function(t){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},laureatesOnly:function(t){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){},methods:{updateSearch:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=[],l=_(_(_({},t.edition&&{edition:t.edition.toString()}),(null===(n=t.formats)||void 0===n?void 0:n.length)&&{type:{$in:t.formats}}),t.laureatesOnly&&{category:{$in:["winner","crush"]}}),console.log("query: ",l),!t.searchString){e.next=9;break}return e.next=6,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).where(l).search(t.searchString).fetch();case 6:o=e.sent,e.next=12;break;case 9:return e.next=11,t.$content("laureates/"+t.$i18n.locale,{deep:!0}).where(l).fetch();case 11:o=e.sent;case 12:t.searching=(null===(r=t.searchString)||void 0===r?void 0:r.length)||Object.keys(l).length||!1,t.laureates=t.sortLaureates(o);case 14:case"end":return e.stop()}}),e)})))()},sortLaureates:function(t){return[].concat(Object(v.a)(t.filter((function(t){return"winner"===t.category}))),Object(v.a)(t.filter((function(t){return"crush"===t.category}))),Object(v.a)(t.filter((function(t){return!["winner","crush"].includes(t.category)}))))}}},j=n(37),component=Object(j.a)(w,(function(){var t=this,e=t._self._c;return e("section",[e(l.a,{attrs:{justify:"center"}},[e(o.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[t.$vuetify.breakpoint.smAndUp?e(f.a,{staticClass:"mx-n4",attrs:{flat:""}},[e(d.a,{staticClass:"align-center justify-center d-flex"},[e(m.a,{staticClass:"mr-2",attrs:{id:"search",name:"search",label:t.$t("search"),"hide-details":"",solo:"",flat:"",outlined:"",clearable:"","append-icon":t.searching?null:"mdi-magnify"},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}}),t._v(" "),e(c.a,{staticClass:"mr-2",attrs:{items:[{text:t.$t("the-city-in-2100"),value:2021},{text:t.$t("work-in-2100"),value:2024}],label:t.$t("edition"),outlined:"","hide-details":"",clearable:"","menu-props":{bottom:!0,offsetY:!0}},model:{value:t.edition,callback:function(e){t.edition=e},expression:"edition"}}),t._v(" "),e(c.a,{attrs:{items:[{text:t.$t("form.application.format.audio"),value:"audio"},{text:t.$t("form.application.format.comic"),value:"comic"},{text:t.$t("form.application.format.article"),value:"article"},{text:t.$t("form.application.format.novel"),value:"novel"},{text:t.$t("form.application.format.video"),value:"video"}],label:t.$t("format"),multiple:"",outlined:"","hide-details":"",clearable:"","menu-props":{bottom:!0,offsetY:!0}},model:{value:t.formats,callback:function(e){t.formats=e},expression:"formats"}}),t._v(" "),e(r.a,{staticClass:"ml-4",attrs:{"hide-details":"",label:t.$t("laureates-only")},model:{value:t.laureatesOnly,callback:function(e){t.laureatesOnly=e},expression:"laureatesOnly"}})],1)],1):t._e(),t._v(" "),0===t.laureates.length?[t._v("\n        "+t._s(t.$t("no-laureates-found-matching-the-search-and-filter-criteria"))+"\n      ")]:t._e(),t._v(" "),t._l(t.laureates,(function(t,n){return[e("LaureateBlock",{key:n,attrs:{item:t,index:n}})]}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LaureateBlock:n(511).default})},547:function(t,e,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("52320768",content,!0,{sourceMap:!1})},552:function(t,e,n){"use strict";n.r(e);var r=n(219),o=n(216),l=n(90),c=n(503),m=n(170),f=(n(25),n(21),{props:{index:{type:Number,default:0},total:{type:Number,default:15},item:{type:Object,default:function(){}},active:{type:Boolean,default:!1}},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{}}),d=n(37),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"ma-1 pa-2 d-flex flex-column justify-space-between",attrs:{"max-width":"250",color:"winner"===t.item.category?"#ffe2a0":"transparent"}},[e("div",[e(m.a,{staticClass:"white--text align-end",attrs:{src:t.item.image,cover:""}}),t._v(" "),"winner"===t.item.category?e(c.a,{staticClass:"ma-1",attrs:{small:"",color:"#fff1d0"}},[t._v("\n      "+t._s(t.$t("laureates."+t.item.category).toUpperCase())+"\n    ")]):t._e(),t._v(" "),"crush"===t.item.category?e(c.a,{staticClass:"ma-1",attrs:{small:"",color:"#fff1d0"}},[t._v("\n      "+t._s(t.$t("laureates.crush"))+"\n    ")]):t._e(),t._v(" "),e(c.a,{staticClass:"ma-1",attrs:{small:""}},[t._v("\n      "+t._s(t.$t("form.application.format."+t.item.type))+"\n    ")]),t._v(" "),["crush","winner"].includes(t.item.category)?t._e():e(c.a,{staticClass:"ma-1",attrs:{small:""}},[t._v("\n      "+t._s(t.$t("selected"))+"\n    ")]),t._v(" "),e(l.d,{staticClass:"pa-0 text-h6"},[t._v("\n      "+t._s(t.item.title)+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("from"))+"\n      "),t._l(t.item.team,(function(n,r){return e("span",{key:n.firstname+n.lastname},[t._v(t._s(n.lastname.toUpperCase()+" "+n.firstname)),r<t.item.team.length-1?[t._v(", ")]:t._e()],2)}))],2)],1),t._v(" "),e(l.a,{staticClass:"pa-0"},[e(r.a,{attrs:{color:"primary",nuxt:"",to:t.localePath("/contest/laureates/"+t.item.slug)}},[t._v(t._s(t.$t("learn-more")))])],1)],1)}),[],!1,null,null,null);e.default=component.exports},555:function(t,e,n){"use strict";n(5),n(4),n(7),n(8),n(9);var r=n(1),o=(n(517),n(98)),l=n(6),c=n(13),m=n(2);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=n.n(m).a.extend({props:{activeClass:String,value:{required:!1},disabled:Boolean},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(r.a)(Object(r.a)({},this.activeClass,this.isActive),"v-item--disabled",this.disabled)}),this.disabled&&(element.data.attrs=d(d({},element.data.attrs),{},{tabindex:-1})),element):(Object(c.c)("v-item should only contain a single element",this),element)):(Object(c.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(l.a)(v,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(l.a)(v,Object(o.a)("slideGroup")).extend({name:"v-slide-item"})},591:function(t,e,n){"use strict";n(547)},592:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.nuxt-content h2,h2{margin-bottom:10px;margin-top:30px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-size:30px;font-weight:600;line-height:normal;margin-bottom:20px;margin-top:10px}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{color:rgba(0,0,0,.6);flex:1 1 auto;font-family:"Lato",sans-serif;font-family:"Lato",sans-serif!important;font-size:16px;font-weight:400!important;letter-spacing:.0071428571em!important;line-height:1.375rem!important;max-width:100%;word-break:normal}.nuxt-content ul{margin-bottom:20px}.anchor{display:block;position:relative;top:-250px;visibility:hidden}',""]),r.locals={},t.exports=r},630:function(t,e,n){"use strict";n.r(e);var r=n(216),o=n(480),l=n(208),c=n(479),m=n(143),f=n(555),d=n(36),v=n(12),h=(n(50),n(7),n(25),{props:{},asyncData:function(t){return Object(v.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,e.next=3,r("/pages/"+n.i18n.locale+"/2021/intro2021").fetch();case 3:return o=e.sent,e.next=6,r("/jury/"+n.i18n.locale+"/2021").fetch();case 6:return l=e.sent,e.next=9,r("/laureates/"+n.i18n.locale+"/2021").sortBy("order","asc").fetch();case 9:return c=e.sent,e.next=12,r("/sab/"+n.i18n.locale+"/2021").fetch();case 12:return m=e.sent,e.abrupt("return",{intro:o,jury:l,sab:m,laureates:[].concat(Object(d.a)(c.filter((function(t){return"winner"===t.category}))),Object(d.a)(c.filter((function(t){return"crush"===t.category}))),Object(d.a)(c.filter((function(t){return!["winner","crush"].includes(t.category)}))))});case 14:case"end":return e.stop()}}),e)})))()},data:function(){return{openModal:!1,selected:null}},computed:{},mounted:function(){},methods:{}}),x=(n(591),n(37)),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0","padding-bottom":"160px"}},[e(c.a,{attrs:{justify:"center"}},[e(o.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("div",{staticClass:"mt-6 subtitle"},[t._v("\n          "+t._s(t.$t("2021-edition"))+"\n        ")]),t._v(" "),e("h1",{staticClass:"pt-0 mt-0 mb-4"},[t._v("\n          "+t._s(t.intro.theme)+"\n        ")]),t._v(" "),e("nuxt-content",{attrs:{document:t.intro}})],1)],1)],1),t._v(" "),e(c.a,{attrs:{justify:"center","no-gutters":""}},[e(o.a,{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e(c.a,{attrs:{"no-gutters":""}},[e(o.a,{attrs:{cols:"12",sm:"8"}},[e("YoutubeEmbedded",{staticClass:"mb-9",staticStyle:{"margin-top":"-160px"},attrs:{yt:"en"===t.$i18n.locale?"1efqN3kp1NE":"-7Fd0Vk8jHM"}})],1)],1)],1)],1),t._v(" "),e("section",[e(c.a,{attrs:{justify:"center","no-gutters":""}},[e(o.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e(r.a,{staticClass:"mb-12",attrs:{flat:"",color:"transparent"}},[e("a",{staticClass:"anchor",attrs:{id:"awards"}}),t._v(" "),e("div",{staticClass:"headline mb-4 mx-6",attrs:{id:"laureates"}},[t._v("\n            "+t._s(t.$t("laureates_title"))+"\n          ")]),t._v(" "),t.$vuetify.breakpoint.smAndUp?e(m.b,{staticClass:"my-4",attrs:{"show-arrows":"","center-active":""}},t._l(t.laureates,(function(n,r){return e(f.a,{key:r,scopedSlots:t._u([{key:"default",fn:function(o){var l=o.active;return[e("LaureateItem",{attrs:{item:n,active:l,index:r,total:t.laureates.length}})]}}],null,!0)})})),1):e("LaureateList")],1)],1)],1)],1),t._v(" "),e("section",[e(c.a,{attrs:{justify:"center","no-gutters":""}},[e(o.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e(r.a,{staticClass:"px-6 mb-12",attrs:{flat:"",color:"transparent"}},[e("div",{staticClass:"mb-4 headline",attrs:{id:"jury"}},[t._v("\n            "+t._s(t.$t("jury-members"))+"\n          ")]),t._v(" "),e(c.a,{attrs:{"no-gutters":""}},t._l(t.jury,(function(t,n){return e("people-block",{key:n,attrs:{item:t}})})),1)],1)],1)],1)],1),t._v(" "),e("section",[e(c.a,{attrs:{justify:"center","no-gutters":""}},[e(o.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e(r.a,{staticClass:"px-6 mb-12",attrs:{flat:"",color:"transparent"}},[e("a",{staticClass:"anchor",attrs:{id:"sab"}}),t._v(" "),e("div",{staticClass:"mt-8 mb-0 headline",attrs:{id:"sab_list"}},[t._v("\n            "+t._s(t.$t("members-of-the-scientific-advisory-board"))+"\n          ")]),t._v(" "),e("nuxt-link",{staticClass:"subtitle",attrs:{to:t.localePath("/about/scientific_advisory_board")}},[t._v(t._s(t.$t("learn-more-about-the-role-of-the-scientific-advisory-board")))]),t._v(" "),t.sab&&t.sab.length>0?e(c.a,{attrs:{justify:"center","no-gutters":""}},t._l(t.sab,(function(t,n){return e("people-block",{key:n,attrs:{item:t,sab:!0}})})),1):e("i",[t._v("\n            "+t._s(t.$t("the-scientific-advisory-board-will-be-announced-soon"))+"\n          ")])],1)],1)],1)],1),t._v(" "),e("section",[e(c.a,{attrs:{justify:"center"}},[e(o.a,{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e(r.a,{staticClass:"py-6 ml-n1",style:"margin-bottom: -60px; max-width: "+(t.$vuetify.breakpoint.smAndUp?"66%":"100%"),attrs:{color:"#4FD4C7",flat:"",nuxt:"",to:t.localePath("/webinars/award-ceremony-2021")}},[e("div",{staticClass:"d-inline-flex justify-center align-center"},[t.$vuetify.breakpoint.smAndUp?e(l.a,{staticClass:"rotate-24 mx-6",attrs:{"x-large":"",color:"black"}},[t._v("mdi-medal")]):t._e(),t._v(" "),e("div",{staticClass:"subtitle",class:{"px-3":t.$vuetify.breakpoint.xs}},[t._v("\n              "+t._s(t.$t("watch-the-award-ceremony"))+"\n            ")])],1)])],1)],1)],1),t._v(" "),e("section",{staticStyle:{"background-color":"#c9f8f3","padding-top":"60px","padding-bottom":"2rem"}},[e(c.a,{attrs:{justify:"center"}},[e(o.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("div",{staticClass:"headline my-6",class:t.$vuetify.breakpoint.smAndUp?" ml-12":"mx-6"},[t._v("\n          "+t._s(t.$t("the-tools-of-the-contest"))+"\n        ")]),t._v(" "),e(r.a,{class:t.$vuetify.breakpoint.smAndUp?" mx-6":"mx-2",attrs:{flat:"",nuxt:"",href:t.localePath("/webinars"),color:"transparent"}},[e("div",{staticClass:"d-inline-flex justify-center align-center"},[e(l.a,{staticClass:"ma-6",attrs:{"x-large":"",color:"black"}},[t._v("mdi-television-play")]),t._v("\n            "+t._s(t.$t("consult-the-webinars-produced-on-the-theme-of-the-city-in-2100"))+"\n          ")],1)]),t._v(" "),e(r.a,{class:t.$vuetify.breakpoint.smAndUp?"mx-6":"mx-2 mt-6",attrs:{flat:"",nuxt:"",href:t.localePath("/resources"),color:"transparent"}},[e("div",{staticClass:"d-inline-flex justify-center align-center"},[e(l.a,{staticClass:"ma-6",attrs:{"x-large":"",color:"black"}},[t._v("mdi-note-multiple")]),t._v("\n            "+t._s(t.$t("find-all-the-resources-on-the-theme-of-the-competition-proposed-by-the-scientific-committee"))+"\n          ")],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{YoutubeEmbedded:n(493).default,LaureateItem:n(552).default,LaureateList:n(520).default,PeopleBlock:n(534).default})}}]);