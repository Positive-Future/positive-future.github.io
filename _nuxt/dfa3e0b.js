(window.webpackJsonp=window.webpackJsonp||[]).push([[35,10],{490:function(t,e,n){"use strict";var r=n(146),o=n(98),l=n(103),c=n(0),h=n(5),d=Object(h.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=d.extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(c.h)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(c.h)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},501:function(t,e,n){var content=n(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2d62e390",content,!0,{sourceMap:!1})},502:function(t,e,n){var r=n(14)(!1);r.push([t.i,'.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal;color:rgba(0,0,0,.6);font-family:"Lato",sans-serif!important;font-size:.875rem!important;font-weight:400!important;line-height:1.375rem!important;letter-spacing:.0071428571em!important}.nuxt-content ul{margin-bottom:20px}.v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}',""]),t.exports=r},508:function(t,e,n){var content=n(532);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2065e928",content,!0,{sourceMap:!1})},517:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(11);n(48),n(20),n(43),n(6),n(4),n(7),n(8),n(9);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:"auto"}},data:function(){return{carousel:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(t.$i18n.locale+"/carousel").where({published:!0}).sortBy("date","desc").limit(3).fetch();case 2:n=e.sent,t.carousel=n.map((function(e){return c(c({},e),{src:t.$img.getSizes(e.picture,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70,height:t.height}})})}));case 4:case"end":return e.stop()}}),e)})))()},computed:{},mounted:function(){},methods:{}},d=n(36),m=n(47),f=n.n(m),v=n(211),x=n(89),w=(n(501),n(199)),y=n(90),_=n(62),O=n(229),C=n(161),j=n(0),k=n(10);function T(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=w.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return $($({},w.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(k.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:w.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(y.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(_.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(C.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(O.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=w.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(j.h)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),D=n(490),S=n(165),E=n(5),z=n(56);function V(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function B(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=Object(E.a)(D.a,z.a).extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(S.a,{staticClass:"v-carousel__item",props:B(B({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(j.r)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}}),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-carousel",{attrs:{cycle:"","show-arrows-on-hover":"","hide-delimiter-background":"",height:"400"}},t._l(t.carousel,(function(e,i){return n("v-carousel-item",{key:i,staticClass:"mb-6",attrs:{nuxt:!e.new_tab_link,to:"en"===t.$i18n.locale?t.localePath(e.link):t.localePath(e.link_fr||e.link),target:e.new_tab_link?"_blank":"self","aspect-ratio":t.ratio,"lazy-src":t.$img(e.picture,{width:10,quality:70}),src:t.$img(e.picture,{height:t.height,quality:70}),srcset:e.src.srcset,sizes:e.src.size,light:""}},[n("v-card",{attrs:{color:"transparent",flat:""}},[n("v-card-title",[n("span",{staticClass:"px-2",staticStyle:{"background-color":"#fff1d0"}},[t._v("\n          "+t._s(e.carousel_title)+"\n        ")])]),t._v(" "),e.subtitle?n("v-card-text",[n("span",{staticStyle:{"background-color":"#fff1d0"}},[t._v("\n          "+t._s(e.subtitle)+"\n        ")])]):t._e()],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCard:v.a,VCardText:x.c,VCardTitle:x.d,VCarousel:P,VCarouselItem:A})},531:function(t,e,n){"use strict";n(508)},532:function(t,e,n){var r=n(14)(!1);r.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal;color:rgba(0,0,0,.6);font-family:"Lato",sans-serif!important;font-size:.875rem!important;font-weight:400!important;line-height:1.375rem!important;letter-spacing:.0071428571em!important}.nuxt-content ul{margin-bottom:20px}.date_headline{background-color:#000;color:#fff}.logos{position:relative;height:400px}.logo_container1{position:absolute;top:60px;left:0;background-color:#fff;height:160px;width:160px;padding:30px;align-items:center}.logo_container1 .logo{height:100px;width:100px}.logo_container2{position:absolute;top:150px;left:150px;background-color:#fff;height:160px;width:160px;padding:30px;align-items:center}.logo_container2 .logo{width:80px;margin:8px}.line1{left:80px;height:160px}.line1,.line2{position:absolute;top:-20px;width:4px;margin:6px 0;background:#fff}.line2{left:228px;height:180px}',""]),t.exports=r},587:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(48),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,e.next=3,r(n.i18n.locale+"/pages/index").fetch();case 3:return o=e.sent,e.next=6,r(n.i18n.locale+"/pages/dates").fetch();case 6:return l=e.sent,e.next=9,r(n.i18n.locale+"/pages/organizers").fetch();case 9:return c=e.sent,e.abrupt("return",{index:o,dates:l,organizers:c});case 11:case"end":return e.stop()}}),e)})))()},data:function(){return{colors:["indigo","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third"]}},computed:{},mounted:function(){},methods:{loaded:function(){}}}),l=(n(531),n(36)),c=n(47),h=n.n(c),d=n(211),m=n(458),f=n(202),v=n(165),x=n(459),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0","padding-bottom":"100px"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("div",{staticClass:"text-h5 mt-12"},[t._v(t._s(t.index.subtitle))]),t._v(" "),n("nuxt-content",{staticClass:"mt-8",attrs:{document:t.index}})],1)],1)],1),t._v(" "),n("section",{staticStyle:{"margin-top":"-95px"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("Carousel")],1)],1)],1),t._v(" "),n("section",{staticStyle:{"margin-top":"5vh"}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("div",{staticClass:"headline mb-6"},[t._v(t._s(t.$t("the-contest")))]),t._v(" "),n("div",{staticClass:"text-body-1 mb-12"},[t._v("\n          "+t._s(t.$t("many-of-you-participated-in-the-2021-edition-thank-you-very-much"))+"\n          "),n("br"),t._v("\n          "+t._s(t.$t("more-information-about-the-next-edition-is-coming-soon-stay-tuned"))+"\n        ")]),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"px-6 pt-6 pb-8",attrs:{color:"#FFE2A0",flat:"",to:t.localePath("/contest/laureates"),nuxt:""}},[n("div",{staticClass:"d-inline-flex justify-center align-center"},[n("v-icon",{staticClass:"rotate-24 mr-6",attrs:{"x-large":"",color:"black"}},[t._v("mdi-seal-variant")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n                  "+t._s(t.$t("discover-the-laureates-of-the-2021-edition-on-the-city-in-2021"))+"\n                ")])],1)])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"px-6 pt-6 pb-8",attrs:{color:"#FFE2A0",flat:"",nuxt:"",to:t.localePath("/resources")}},[n("div",{staticClass:"d-inline-flex justify-center align-center"},[n("v-icon",{staticClass:"rotate-24 mr-6",attrs:{"x-large":"",color:"black"}},[t._v("mdi-file-cog")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n                  "+t._s(t.$t("find-resources-to-prepare-for-the-contest"))+"\n                ")])],1)])],1)],1)],1)],1)],1),t._v(" "),n("section",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("v-card",{staticClass:"px-6 pt-6 pb-8",staticStyle:{"margin-bottom":"-60px","max-width":"70%"},attrs:{color:"#4FD4C7",flat:"",href:"http://eepurl.com/hgbB6f",target:"_blank"}},[n("div",{staticClass:"d-inline-flex justify-center align-center"},[n("v-icon",{staticClass:"rotate-24 mr-6",attrs:{"x-large":"",color:"black"}},[t._v("mdi-email")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n              "+t._s(t.$t("misc.ui.subscribe3"))+"\n            ")])],1)])],1)],1)],1),t._v(" "),n("section",{staticStyle:{"background-color":"#c9f8f3","padding-top":"50px"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[t.$vuetify.breakpoint.mdAndUp?[n("v-row",[n("v-col",{attrs:{md:"4"}},[n("div",{staticClass:"logos"},[n("div",{staticClass:"line1"}),t._v(" "),n("div",{staticClass:"logo_container1 rounded-circle"},[n("v-img",{staticClass:"logo",attrs:{src:t.organizers.ias.logo}})],1),t._v(" "),n("div",{staticClass:"line2"}),t._v(" "),n("div",{staticClass:"logo_container2 rounded-circle"},[n("v-img",{staticClass:"logo",attrs:{src:t.organizers.fundation.logo}})],1)])]),t._v(" "),n("v-col",{attrs:{md:"8"}},[n("div",{staticClass:"my-6"},[t._v("\n                "+t._s(t.$t("misc.credits"))+"\n              ")]),t._v(" "),n("v-img",{staticClass:"float-right mt-6",attrs:{contain:"",src:t.organizers.iff.logo,"max-width":"255","max-height":"200px"}})],1)],1)]:[n("v-col",{staticClass:"ma-3",attrs:{cols:"12"}},[n("div",{staticClass:"mb-6"},[t._v("\n              "+t._s(t.$t("misc.credits"))+"\n            ")])])]],2)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;h()(component,{Carousel:n(517).default}),h()(component,{VCard:d.a,VCol:m.a,VIcon:f.a,VImg:v.a,VRow:x.a})}}]);