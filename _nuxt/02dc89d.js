(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{633:function(t,e,n){var content=n(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("34113967",content,!0,{sourceMap:!1})},638:function(t,e,n){"use strict";n(633)},639:function(t,e,n){var r=n(20)((function(i){return i[1]}));r.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.nuxt-content h2,h2{margin-bottom:10px;margin-top:30px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-size:30px;font-weight:600;line-height:normal;margin-bottom:20px;margin-top:10px}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{color:rgba(0,0,0,.6);flex:1 1 auto;font-family:"Lato",sans-serif;font-family:"Lato",sans-serif!important;font-size:16px;font-weight:400!important;letter-spacing:.0071428571em!important;line-height:1.375rem!important;max-width:100%;word-break:normal}.nuxt-content ul{margin-bottom:20px}.abstract{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}',""]),r.locals={},t.exports=r},641:function(t,e,n){"use strict";n.r(e);var r=n(288),o=n(289),l=n(112),c=n(635),h=n(220),d=n(605),f=(n(23),n(186),n(27),n(228),n(36),n(54),{props:{index:{type:Number,default:0},total:{type:Number,default:15},item:{type:Object,default:function(){}},active:{type:Boolean,default:!1},search:{type:String,default:""}},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{highlight:function(t,e){if(!this.search.length)return t;var n=new RegExp(e,"ig");return t.replace(n,(function(t,a,b){return'<strong style="color: darkslategray;background-color: yellow;">'+t+"</strong>"}))}}}),m=(n(638),n(52)),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"d-flex ma-2",attrs:{justify:"top",align:"top",plain:""},on:{click:function(e){return t.$emit("open")}}},[t.$vuetify.breakpoint.smAndUp?e(r.a,{staticClass:"mr-6 ma-3",attrs:{size:"200",tile:"",rounded:"",color:t.item.image.length?"transparent":t.$vuetify.theme.themes.light.primary}},[t.item.image?e(h.a,{attrs:{src:t.item.image,alt:t.item.title,cover:""}},[e(c.a,{attrs:{label:""}},[t._v(" "+t._s(t.$t(t.item.edition))+" ")])],1):e("p",{domProps:{innerHTML:t._s(t.highlight(t.item.title,t.search))}})],1):t._e(),t._v(" "),e("div",{staticClass:"d-flex flex-column flex-grow-1"},[e("div",{staticClass:"d-flex flex-row pt-3 pr-3"},[e(l.d,{staticClass:"align-center pb-0 pr-0 mr-3",staticStyle:{"max-width":"580px"}},[e("p",{staticClass:"font-weight-black",staticStyle:{"letter-spacing":"0.0125em","font-family":"'Poppins', sans-serif","word-break":"normal"}},[e("span",{domProps:{innerHTML:t._s(t.highlight(t.item.title,t.search))}})])]),t._v(" "),e(d.a),t._v(" "),new Date(t.item.date)>Date.now()?e(c.a,{attrs:{label:"",small:"",color:"#fff1d0"}},[t._v("\n        "+t._s(t.$t("upcoming")))]):t.item.youtube_video_id?e(c.a,{style:"min-width: "+("en"===t.$i18n.locale?"65":"80")+"px; text-align: center;",attrs:{label:"",color:"#00c2cb","text-color":"white"}},[t._v("\n        "+t._s(t.$t("replay"))+"\n      ")]):t._e()],1),t._v(" "),e(l.c,{staticClass:"pt-0"},[e("p",{domProps:{innerHTML:t._s(new Date(t.item.date).toLocaleDateString(t.$i18n.locale,{timezone:"UTC"})+" - "+new Date(t.item.date).toLocaleTimeString(t.$i18n.locale,{hour:"2-digit",minute:"2-digit",timezone:"UTC"}))}}),t._v(" "),e("p",{staticClass:"abstract"},[t._v(t._s(t.item.abstract)+" …")]),t._v(" "),t.item.copyright?e("small",{staticClass:"muted caption"},[t._v("Image of © "+t._s(t.item.copyright))]):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports},651:function(t,e,n){"use strict";var r=n(190),o=n(121),l=n(140),c=n(0),h=n(9),d=Object(h.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=d.extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(c.h)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(c.h)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},666:function(t,e,n){var content=n(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("7b5d4dc6",content,!0,{sourceMap:!1})},667:function(t,e,n){var r=n(20)((function(i){return i[1]}));r.push([t.i,'.nuxt-content hr{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.nuxt-content h2,h2{margin-bottom:10px;margin-top:30px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-size:30px;font-weight:600;line-height:normal;margin-bottom:20px;margin-top:10px}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{color:rgba(0,0,0,.6);flex:1 1 auto;font-family:"Lato",sans-serif;font-family:"Lato",sans-serif!important;font-size:16px;font-weight:400!important;letter-spacing:.0071428571em!important;line-height:1.375rem!important;max-width:100%;word-break:normal}.nuxt-content ul{margin-bottom:20px}.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}',""]),r.locals={},t.exports=r},668:function(t,e,n){var content=n(669);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("ae7a972c",content,!0,{sourceMap:!1})},669:function(t,e,n){var r=n(20)((function(i){return i[1]}));r.push([t.i,'.nuxt-content hr{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.nuxt-content h2,h2{margin-bottom:10px;margin-top:30px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-size:30px;font-weight:600;line-height:normal;margin-bottom:20px;margin-top:10px}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{color:rgba(0,0,0,.6);flex:1 1 auto;font-family:"Lato",sans-serif;font-family:"Lato",sans-serif!important;font-size:16px;font-weight:400!important;letter-spacing:.0071428571em!important;line-height:1.375rem!important;max-width:100%;word-break:normal}.nuxt-content ul{margin-bottom:20px}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),r.locals={},t.exports=r},774:function(t,e,n){"use strict";n.r(e);var r=n(292),o=n(777),l=n(610),c=n(281),h=n(284),d=n(174),f=n(148),m=n(22),v=n(591),x=n(609),w=n(775),_=n(605),y=n(678),k=n(651),O=k.a.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=k.a.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),C=n(384),j=n(776),S=n(93),$=n(607),P=(n(7),n(6),n(10),n(3),n(11),n(8),n(12),n(1));function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){Object(P.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var I=n(15);n(36),n(23),n(186),n(61);function L(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?L(Object(n),!0).forEach((function(e){Object(P.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var V={props:{},data:function(){return{searching:!1,searchString:"",tab:0,webinars:[],expand:!1,edition:null,pastOnly:!1,sortDate:null,currentSort:{text:"date",value:"date",icon:"sort-calendar-descending"},defaultSort:{text:"date",value:"date",icon:"calendar"}}},fetch:function(){var t=this;return Object(I.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("webinars/"+t.$i18n.locale).sortBy("date","desc").fetch();case 2:t.webinars=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{},watch:{searchString:function(t){var e=this;return Object(I.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateSearch();case 2:case"end":return t.stop()}}),t)})))()},edition:function(){var t=this;return Object(I.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateSearch();case 2:case"end":return e.stop()}}),e)})))()},pastOnly:function(){var t=this;return Object(I.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateSearch();case 2:case"end":return e.stop()}}),e)})))()},sortDate:function(){var t=this;return Object(I.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.updateSearch();case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){},methods:{updateSearch:function(){var t=this;return Object(I.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=[],o=A({},t.edition&&{edition:t.edition.toString()}),!t.searchString){e.next=8;break}return e.next=5,t.$content("webinars/"+t.$i18n.locale,{deep:!0}).where(o).search(t.searchString).sortBy("date","desc").fetch();case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,t.$content("webinars/"+t.$i18n.locale,{deep:!0}).where(o).sortBy("date","desc").fetch();case 10:r=e.sent;case 11:t.searching=(null===(n=t.searchString)||void 0===n?void 0:n.length)||Object.keys(o).length||t.pastOnly||!1,r=t.pastOnly?r.filter((function(t){return new Date(t.date)<Date.now()})):r,r=t.sortDate?r.reverse():r,t.webinars=r;case 15:case"end":return e.stop()}}),e)})))()}}},z=n(52),component=Object(z.a)(V,(function(){var t=this,e=t._self._c;return e("section",[e(x.a,{attrs:{justify:"center"}},[e(l.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("div",{staticClass:"d-flex"},[t.$vuetify.breakpoint.smAndUp?e(S.a,{staticClass:"mx-n4",attrs:{flat:""}},[e(j.a,{staticClass:"mr-2",attrs:{id:"search",name:"search",label:t.$t("search"),"hide-details":"",solo:"",flat:"",outlined:"",clearable:"","append-icon":t.searching?null:"mdi-magnify"},model:{value:t.searchString,callback:function(e){t.searchString=e},expression:"searchString"}}),t._v(" "),e(w.a,{attrs:{items:[{text:t.$t("the-city-in-2100"),value:2021},{text:t.$t("work-in-2100"),value:2024}],label:t.$t("edition"),outlined:"","hide-details":"",clearable:"","menu-props":{bottom:!0,offsetY:!0}},model:{value:t.edition,callback:function(e){t.edition=e},expression:"edition"}}),t._v(" "),e(o.a,{staticClass:"ml-4",attrs:{"hide-details":"",label:t.$t("past-webinars-only")},model:{value:t.pastOnly,callback:function(e){t.pastOnly=e},expression:"pastOnly"}}),t._v(" "),e(_.a),t._v(" "),e("div",[e(v.a,{staticClass:"ml-auto",attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var menu=n.on,o=n.attrs;return[e($.a,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on;return[e(r.a,t._g(t._b({class:{"mt-3":t.$vuetify.breakpoint.xs},attrs:{"x-large":"",tile:"",icon:""}},"v-btn",o,!1),D(D({},l),menu)),[e(c.a,[t._v(" mdi-sort")])],1)]}}],null,!0)},[t._v(" "),e("span",{domProps:{innerHTML:t._s(t.$t("sort-modedate"))}})])]}}],null,!1,1744662814)},[t._v(" "),e(h.a,[e(y.a,[t._v(t._s(t.$t("sort-webinars-by-date"))+" ")]),t._v(" "),e(d.a,{on:{click:function(e){t.sortDate=!1}}},[e(f.a,[e(c.a,[t._v("mdi-sort-calendar-descending")])],1),t._v(" "),e(m.c,[t._v(t._s(t.$t("latest-first")))])],1),t._v(" "),e(d.a,{on:{click:function(e){t.sortDate=!0}}},[e(f.a,[e(c.a,[t._v("mdi-sort-calendar-ascending")])],1),t._v(" "),e(m.c,[t._v(t._s(t.$t("oldest-first")))])],1)],1)],1)],1)],1):t._e()],1),t._v(" "),e(C.a,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(O,[t.searching?[0===t.webinars.length?e("div",{staticClass:"overline text-h6 d-flex flex-column align-center"},[e("div",{staticClass:"mt-6"},[t._v("\n                "+t._s(t.$t("no-result-found-matching"))+"\n                "+t._s(t.edition?t.$t("your-filters"):'"'+t.searchString+'"')+"\n              ")]),t._v(" "),e(r.a,{staticClass:"mt-3",attrs:{outlined:""},on:{click:function(e){t.searchString="",t.pastOnly=!1,t.edition=null}}},[t._v(t._s(t.$t("cancel-my-search")))])],1):t._e(),t._v(" "),t._l(t.webinars,(function(n,r){return e("WebinarListItem",{key:r,attrs:{item:n,search:t.searchString||"",index:r},on:{open:function(e){t.$router.push(t.localePath("/webinars/"+n.slug))}}})}))]:t._l(t.webinars,(function(n,r){return[e("WebinarListItem",{key:r,attrs:{item:n,index:r,search:t.searchString||""},on:{open:function(e){t.$router.push(t.localePath("/webinars/"+n.slug))}}})]}))],2)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WebinarListItem:n(641).default})},777:function(t,e,n){"use strict";n(7),n(6),n(10),n(11),n(8),n(12);var r=n(117),o=n(1),l=(n(3),n(36),n(666),n(668),n(85)),c=n(647),h=n(125),d=n(2),f=n.n(d).a.extend({name:"rippleable",directives:{ripple:h.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),m=n(303),v=n(9);function x(t){t.preventDefault()}var w=Object(v.a)(c.a,f,m.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=c.a.options.methods.genLabel.call(this);return label?(label.data.on={click:x},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:x},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),_=["title"];function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=w.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return k(k({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,_));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",k(k({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);