(window.webpackJsonp=window.webpackJsonp||[]).push([[43,19,21,22],{472:function(t,e,n){var content=n(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4409da72",content,!0,{sourceMap:!1})},477:function(t,e,n){"use strict";n(472)},478:function(t,e,n){var r=n(14)(!1);r.push([t.i,".frame[data-v-7e3cff26]{display:flex;position:relative;overflow:hidden;width:100%;height:100%}.overlay[data-v-7e3cff26]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;z-index:2;padding-bottom:2rem;padding-right:1.9rem;justify-content:space-between}.v-image[data-v-7e3cff26]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-7e3cff26]{transform:scale(1.1);opacity:.8}",""]),t.exports=r},479:function(t,e,n){"use strict";n.r(e);n(20);var r={props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:"/img/header-bg.jpg"}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70,height:this.height}})}},mounted:function(){}},o=(n(477),n(36)),c=n(47),l=n.n(c),d=n(165),h=n(59),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame"},[n("div",{staticClass:"overlay"}),t._v(" "),t.src?n("v-img",t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size}},"v-img",t.$attrs,!1),[n("span",{attrs:{id:"caption-content"}},[t._t("caption"),t._v(" "),n("br")],2)]):n("v-sheet")],1)}),[],!1,null,"7e3cff26",null);e.default=component.exports;l()(component,{VImg:d.a,VSheet:h.a})},490:function(t,e,n){"use strict";var r=n(146),o=n(98),c=n(103),l=n(0),d=n(5),h=Object(d.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=h.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.h)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(l.h)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},503:function(t,e,n){"use strict";(function(t){var r=n(11);n(48),n(7);e.a={props:{},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,e.next=3,r(n.i18n.locale+"/pages/webinars").fetch();case 3:return o=e.sent,e.next=6,r(n.i18n.locale+"/webinars").where({published:!0}).sortBy("date","desc").fetch();case 6:return c=e.sent,l=c.filter((function(t){return new Date(t.date)>Date.now()})),e.abrupt("return",{webinarText:o,webinars:c,upcomingWebinars:l});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{model:null}},computed:{},created:function(){this.$vuetify.breakpoint.smAndDown&&t.env.BROWSER&&this.$vuetify.goTo(0)},mounted:function(){},methods:{}}}).call(this,n(174))},518:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(227),n(16),n(91),n(92),n(48),{props:{},data:function(){return{searching:!1,searchString:"",limit:10,tab:0,openModal:!1,webinars:[],selected:null,expand:!1,editions:[2021,2022],edition:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(t.$i18n.locale+"/webinars").where({published:!0}).sortBy("date","desc").limit(t.limit).fetch();case 2:t.webinars=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{},watch:{searchString:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=7;break}return e.searching=e.edition||!1,n.next=4,e.$content(e.$i18n.locale+"/webinars").where({published:!0}).sortBy("date","desc").limit(e.limit).fetch();case 4:e.webinars=n.sent,n.next=11;break;case 7:return e.searching=!0,n.next=10,e.$content(e.$i18n.locale+"/webinars").where({published:!0}).search(t).sortBy("date","asc").fetch();case 10:e.webinars=n.sent;case 11:case"end":return n.stop()}}),n)})))()},edition:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=7;break}return e.searching=e.searchString.length||!1,n.next=4,e.$content(e.$i18n.locale+"/webinars").where({published:!0}).sortBy("date","desc").limit(e.limit).fetch();case 4:e.webinars=n.sent,n.next=11;break;case 7:return e.searching=!0,n.next=10,e.$content(e.$i18n.locale+"/webinars").where({published:!0,edition:t.toString()}).sortBy("date","asc").fetch();case 10:e.webinars=n.sent;case 11:case"end":return n.stop()}}),n)})))()}},mounted:function(){},methods:{showInput:function(){var t=this;this.expand=!0,this.$nextTick((function(){t.focusInput()}))},focusInput:function(){this.$refs.search.focus()}}}),c=n(36),l=n(47),d=n.n(l),h=n(215),f=n(458),m=n(70),v=n(202),w=n(459),x=n(463),y=n(490),_=y.a.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=y.a.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),$=n(281),T=n(576),C=n(461),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("div",{staticClass:"d-flex"},[n("v-spacer"),t._v(" "),n("v-expand-x-transition",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:!t.expand,expression:"!expand"}],staticClass:"text-h4 py-8 my-0",attrs:{text:"",nuxt:""},on:{click:function(e){return t.showInput()}}},"v-btn",o,!1),r),[n("v-icon",{attrs:{large:"",color:t.$vuetify.theme.themes.light.primary}},[t._v("mdi-magnify")])],1)]}}])},[t._v(" "),n("span",[t._v("Search in the program")])])],1),t._v(" "),n("v-expand-x-transition",[n("v-text-field",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"search",style:"max-width:"+(t.expand?"300px":"0px")+";",attrs:{height:"64",large:"",type:"search",placeholder:t.$t("search"),outlined:"","prepend-inner-icon":"mdi-magnify",color:t.$vuetify.theme.themes.light.primary,"hide-details":"",clearable:""},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;e.preventDefault(),t.expand=!1,t.searchString=""},"click:clear":function(e){t.expand=!1,t.searchString=""}},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}})],1)],1),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",[t.searching?[t.webinars.length>0?n("div",{staticClass:"overline"},[t._v("\n              "+t._s(t.edition?"":'Searching for "'+t.searchString+'"')+'" -\n              '+t._s(t.webinars.length)+"\n              "+t._s(t.webinars.length>1?"results":"result")+"\n            ")]):n("div",{staticClass:"overline text-h6 d-flex flex-column align-center"},[n("div",[t._v("\n                "+t._s(t.$t("no-result-found-matching"))+"\n                "+t._s(t.edition?t.$t("your-filters"):'"'+t.searchString+'"')+"\n              ")]),t._v(" "),n("v-btn",{staticClass:"mt-3",attrs:{outlined:""},on:{click:function(e){t.searchString="",t.edition=null}}},[t._v(t._s(t.$t("cancel-my-search")))])],1),t._v(" "),t._l(t.webinars,(function(e,r){return n("WebinarListItem",{key:r,attrs:{item:e,search:t.searchString,index:r},on:{open:function(n){t.$router.push(t.localePath("/webinars/"+e.slug))}}})}))]:t._l(t.webinars,(function(e,r){return[n("WebinarListItem",{key:r,attrs:{item:e,index:r},on:{open:function(n){t.$router.push(t.localePath("/webinars/"+e.slug))}}})]}))],2)],1),t._v(" "),n("WebinarModal",{attrs:{item:t.webinars[t.selected]||{},open:t.openModal},on:{close:function(e){t.openModal=!1}}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{WebinarListItem:n(488).default,WebinarModal:n(521).default}),d()(component,{VBtn:h.a,VCol:f.a,VExpandXTransition:m.b,VIcon:v.a,VRow:w.a,VSpacer:x.a,VTabItem:_,VTabsItems:$.a,VTextField:T.a,VTooltip:C.a})},520:function(t,e,n){"use strict";n.r(e);n(20);var r={props:{index:{type:Number,default:0},total:{type:Number,default:15},item:{type:Object,default:function(){}},active:{type:Boolean,default:!1}},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{}},o=n(36),c=n(47),l=n.n(c),d=n(215),h=n(211),f=n(89),m=n(463),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"my-4 pa-4 d-flex flex-column",class:{"ml-4":0===t.index,"mr-4 ":t.index!==t.total},attrs:{"max-width":"400"}},[n("OptimizedImage",{staticClass:"white--text align-end",attrs:{src:t.item.image}}),t._v(" "),n("v-card-title",[t._v(t._s(t.item.title))]),t._v(" "),n("v-card-subtitle",{staticClass:"pb-0"},[t._v("\n    "+t._s(new Date(t.item.date).toLocaleDateString(t.$i18n.locale,{timezone:"UTC"})+" - "+new Date(t.item.date).toLocaleTimeString(t.$i18n.locale,{hour:"2-digit",minute:"2-digit",timezone:"UTC"}))+"\n  ")]),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[t._v("\n    "+t._s(t.item.subtitle)+"\n    ")]),t._v(" "),n("v-card-actions",{staticClass:"flex-row"},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",nuxt:"",to:t.localePath("/webinars/"+t.item.slug)}},[t._v(t._s(t.$t("learn-more")))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{OptimizedImage:n(479).default}),l()(component,{VBtn:d.a,VCard:h.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VSpacer:m.a})},585:function(t,e,n){"use strict";n.r(e);var r=n(503).a,o=n(36),c=n(47),l=n.n(c),d=n(458),h=n(459),f=n(142),m=n(1),v=n(98),w=n(5),x=n(10),y=n(2),_=n.n(y).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(m.a)({},this.activeClass,this.isActive)}),element):(Object(x.c)("v-item should only contain a single element",this),element)):(Object(x.c)("v-item is missing a default scopedSlot",this),null);var element}}),$=(Object(w.a)(_,Object(v.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(w.a)(_,Object(v.a)("slideGroup")).extend({name:"v-slide-item"})),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("h1",{staticClass:"mt-12"},[t._v(t._s(t.webinarText.title))]),t._v(" "),n("nuxt-content",{staticClass:"mt-6",attrs:{document:t.webinarText}})],1)],1)],1),t._v(" "),n("section",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("v-slide-group",{staticClass:"my-4",class:t.upcomingWebinars.length>3?"mx-n16":"mx-n4",attrs:{"show-arrows":"","center-active":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.upcomingWebinars,(function(e,r){return n("v-slide-item",{key:e.title,scopedSlots:t._u([{key:"default",fn:function(o){var c=o.active;return[n("WebinarItem",{attrs:{item:e,active:c,index:r,total:t.webinars.length}})]}}],null,!0)})})),1)],1)],1)],1),t._v(" "),n("WebinarList")],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{WebinarItem:n(520).default,WebinarList:n(518).default}),l()(component,{VCol:d.a,VRow:h.a,VSlideGroup:f.b,VSlideItem:$})}}]);