(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{409:function(t,e,n){var content=n(424);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("1b7833da",content,!0,{sourceMap:!1})},423:function(t,e,n){"use strict";n(409)},424:function(t,e,n){(e=n(12)(!1)).push([t.i,".date_headline{background-color:#000;color:#fff}",""]),t.exports=e},425:function(t,e,n){var content=n(426);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2d62e390",content,!0,{sourceMap:!1})},426:function(t,e,n){(e=n(12)(!1)).push([t.i,'.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer{font-family:"Lato",sans-serif}.nuxt-content li,.nuxt-content p,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal}.v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}',""]),t.exports=e},473:function(t,e,n){"use strict";n.r(e);n(44);var r=n(14),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,e.next=3,r(n.i18n.locale+"/pages/index").fetch();case 3:return o=e.sent,e.next=6,r(n.i18n.locale+"/pages/dates").fetch();case 6:return l=e.sent,e.next=9,r(n.i18n.locale+"/news").where({featured:!0}).where({draft:!1}).sortBy("createdAt").limit(3).fetch();case 9:return c=e.sent,e.abrupt("return",{index:o,dates:l,featured:c});case 11:case"end":return e.stop()}}),e)})))()},data:function(){return{colors:["indigo","red lighten-1","deep-purple accent-4"],slides:["First","Second","Third"]}},computed:{},mounted:function(){}},l=(n(423),n(40)),c=n(37),d=n.n(c),h=n(176),m=n(78),f=(n(11),n(8),n(7),n(4),n(9),n(1)),v=(n(18),n(425),n(175)),w=n(79),_=n(54),y=n(231),x=n(140),O=n(0),T=n(10);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=v.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return C(C({},v.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(T.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:v.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(w.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(_.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(x.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(y.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=v.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(O.g)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),D=n(138),$=n(87),P=n(91),S=n(5),E=Object(S.a)(D.a,Object($.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:P.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(O.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(O.g)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),V=n(141),B=n(48);function G(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I=Object(S.a)(E,B.a).extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(V.a,{staticClass:"v-carousel__item",props:A(A({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(O.q)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}}),H=n(396),F=n(397),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0","padding-bottom":"100px"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("h1",{staticClass:"mt-8 mb-4"},[t._v("\n          "+t._s(t.index.title)+"\n        ")]),t._v(" "),n("nuxt-content",{attrs:{document:t.index}})],1)],1)],1),t._v(" "),n("section",{staticStyle:{"margin-top":"-95px"}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"pa-6",attrs:{"max-width":"80%",color:"#FFE2A0",flat:""}},[t._v("\n              "+t._s(t.$t("misc.ui.theme"))+"\n              "),n("h1",[t._v("\n                "+t._s(t.index.theme)+"\n              ")])]),t._v(" "),n("v-card",{staticClass:"py-6 px-1",attrs:{flat:""}},[n("h1",{staticClass:"mt-2 mb-4"},[t._v(t._s(t.dates.title))]),t._v(" "),n("b",{staticClass:"date_headline"},[t._v(t._s(t.dates.schedule.opening.date))]),t._v(" "),n("p",[t._v(t._s(t.dates.schedule.opening.content))]),t._v(" "),n("b",{staticClass:"date_headline"},[t._v(t._s(t.dates.schedule.deadline.date))]),t._v(" "),n("p",[t._v(t._s(t.dates.schedule.deadline.content))]),t._v(" "),n("b",{staticClass:"date_headline"},[t._v(t._s(t.dates.schedule.awards.date))]),t._v(" "),n("p",[t._v(t._s(t.dates.schedule.awards.content))])])],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+("en"===t.$i18n.locale?"1efqN3kp1NE":"-7Fd0Vk8jHM")+"?autoplay=1&mute=1",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)],1)],1)],1),t._v(" "),n("section",{staticStyle:{"background-color":"#c9f8f3"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("h1",{staticClass:"mb-3"},[t._v(t._s(t.$t("navigation.news")))]),t._v(" "),n("v-carousel",{attrs:{cycle:"",height:"400","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.featured,(function(e,i){return n("v-carousel-item",{key:i},[n("v-card",{attrs:{nuxt:"",to:t.localePath("/news/"+e.slug),color:"#FFF1D0",height:"400",light:""}},[n("v-img",{attrs:{src:e.image,height:"300"}}),t._v(" "),n("v-card-title",[t._v(" "+t._s(e.title)+" ")]),t._v(" "),n("v-card-text",[t._v("\n                "+t._s(e.subtitle)+"\n              ")])],1)],1)})),1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:h.a,VCardText:m.c,VCardTitle:m.d,VCarousel:k,VCarouselItem:I,VCol:H.a,VImg:V.a,VRow:F.a})}}]);