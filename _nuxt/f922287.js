(window.webpackJsonp=window.webpackJsonp||[]).push([[40,22,23],{472:function(t,e,n){var content=n(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("384d8948",content,!0,{sourceMap:!1})},474:function(t,e,n){"use strict";n(472)},475:function(t,e,n){var r=n(15)(!1);r.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal;color:rgba(0,0,0,.6);font-family:"Lato",sans-serif!important;font-size:.875rem!important;font-weight:400!important;line-height:1.375rem!important;letter-spacing:.0071428571em!important}.nuxt-content ul{margin-bottom:20px}',""]),t.exports=r},476:function(t,e,n){"use strict";n.r(e);var r={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0,ready:!1}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting},iframeLoded:function(){}}},o=(n(474),n(36)),l=n(46),c=n.n(l),d=n(498),m=n(224),f=n.n(m),v=n(98),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("v-skeleton-loader",{staticClass:"d-flex",attrs:{type:"image"}}),t._v(" "),n("iframe",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{title:"Youtube video",src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{load:function(e){t.ready=!0}}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VSkeletonLoader:d.a}),f()(component,{Intersect:v.a})},487:function(t,e,n){"use strict";n.r(e);var r=n(495),o={components:{AddToCalendar:n.n(r).a},props:{dialog:{type:Boolean,default:!1},item:{type:Object,default:function(){}}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},l=n(36),c=n(46),d=n.n(c),m=n(214),f=n(210),v=n(87),h=n(463),_=n(443),x=n(201),y=n(464),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.dialog,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 lighten-2 mb-6"},[n("v-icon",{attrs:{left:"",color:"black"}},[t._v("mdi-calendar-plus")]),t._v("\n      "+t._s(t.$t("add-to-my-calendar"))+"\n    ")],1),t._v(" "),n("v-card-text",[n("div",{staticClass:"d-flex flex-column"},[n("v-btn",{staticClass:"my-3",attrs:{color:"default",outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-google")]),t._v(" "),n("AddToCalendar",{attrs:{title:t.item.title,location:"Online",start:new Date,end:new Date((new Date).setDate((new Date).getDate()+1))},inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("google-calendar",{staticStyle:{color:"inherit","text-decoration":"none"},attrs:{id:"google-calendar"}},[t._v("\n              Add to Google calendar\n            ")])},staticRenderFns:[]}})],1),t._v(" "),n("v-btn",{staticClass:"my-3",attrs:{color:"default",outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-microsoft-windows")]),t._v(" "),n("AddToCalendar",{attrs:{title:t.item.title,location:"Online",start:new Date,end:new Date((new Date).setDate((new Date).getDate()+1))},inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("microsoft-calendar",{staticStyle:{color:"inherit","text-decoration":"none"},attrs:{id:"microsoft-calendar"}},[t._v("\n              Add to Microsoft live calendar\n            ")])},staticRenderFns:[]}})],1),t._v(" "),n("v-btn",{staticClass:"my-3",attrs:{color:"default",outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-microsoft-office")]),t._v(" "),n("AddToCalendar",{attrs:{title:t.item.title,location:"Online",start:new Date,end:new Date((new Date).setDate((new Date).getDate()+1))},inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("office365-calendar",{staticStyle:{color:"inherit","text-decoration":"none"},attrs:{id:"office365-calendar"}},[t._v("\n              Add to Office365 outlook\n            ")])},staticRenderFns:[]}})],1)],1)]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("close")}}},[t._v("\n        "+t._s(t.$t("close"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VDialog:h.a,VDivider:_.a,VIcon:x.a,VSpacer:y.a})},489:function(t,e,n){"use strict";n.r(e);n(20),n(225),n(171),n(48);var r={props:{index:{type:Number,default:0},total:{type:Number,default:15},item:{type:Object,default:function(){}},active:{type:Boolean,default:!1},search:{type:String,default:""}},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{highlight:function(t,e){if(!this.search.length)return t;var n=new RegExp(e,"ig");return t.replace(n,(function(t,a,b){return'<strong style="color: darkslategray;background-color: yellow;">'+t+"</strong>"}))}}},o=n(36),l=n(46),c=n.n(l),d=n(208),m=n(210),f=n(87),v=n(164),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"d-flex",attrs:{justify:"top",align:"top"},on:{click:function(e){return t.$emit("open")}}},[t.$vuetify.breakpoint.smAndUp?n("v-avatar",{staticClass:"my-3 mr-6",attrs:{size:"125",tile:"",rounded:"",color:t.item.image.length?"transparent":t.$vuetify.theme.themes.light.primary}},[t.item.image?n("v-img",{attrs:{src:t.item.image,alt:t.item.title,contain:""}}):n("p",{domProps:{innerHTML:t._s(t.highlight(t.item.title,t.search))}})],1):t._e(),t._v(" "),n("div",{staticClass:"flex-column align-content-start mt-3"},[n("v-card-title",{staticClass:"d-flex flex-row align-center pb-0"},[n("p",{staticClass:"text-h6",staticStyle:{"letter-spacing":"0.0125em","font-family":"'Poppins', sans-serif","word-break":"normal"}},[n("span",{domProps:{innerHTML:t._s(t.highlight(t.item.title,t.search))}})])]),t._v(" "),n("v-card-text",[n("p",{domProps:{innerHTML:t._s(new Date(t.item.date).toLocaleDateString(t.$i18n.locale,{timezone:"UTC"})+" - "+new Date(t.item.date).toLocaleTimeString(t.$i18n.locale,{hour:"2-digit",minute:"2-digit",timezone:"UTC"})+" - "+t.highlight(t.item.subtitle,t.search))}}),t._v(" "),t.item.copyright?n("small",{staticClass:"muted caption"},[t._v("Image of © "+t._s(t.item.copyright))]):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:d.a,VCard:m.a,VCardText:f.c,VCardTitle:f.d,VImg:v.a})},496:function(t,e,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("b1bed018",content,!0,{sourceMap:!1})},497:function(t,e,n){var r=n(15)(!1);r.push([t.i,'.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal;color:rgba(0,0,0,.6);font-family:"Lato",sans-serif!important;font-size:.875rem!important;font-weight:400!important;line-height:1.375rem!important;letter-spacing:.0071428571em!important}.nuxt-content ul{margin-bottom:20px}.theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}',""]),t.exports=r},499:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(47),{components:{AddToCalendarModal:n(487).default},props:{item:{type:Object,default:function(){}}},data:function(){return{webinars:[],calendar:!1,selected:null,openModal:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(t.$i18n.locale+"/webinars").sortBy("order","desc").where({slug:{$ne:t.item.slug},edition:t.item.edition}).limit(t.limit).fetch();case 2:t.webinars=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{},mounted:function(){},methods:{}}),l=n(36),c=n(46),d=n.n(c),m=n(208),f=n(214),v=n(210),h=n(87),_=n(488),x=n(459),y=n(443),w=n(201),C=n(460),O=n(464),j=n(462),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"px-6 pb-6 pt-1",staticStyle:{}},[["webinars___en","webinars___fr"].includes(t.$route.name)?n("v-btn",{staticClass:"float-right mt-3",attrs:{large:"",icon:""},on:{click:function(e){return t.$emit("close")}}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-close")])],1):t._e(),t._v(" "),n("v-card-title",{staticClass:"d-flex"},[n("h1",{staticClass:"d-flex"},[t._v("\n      "+t._s(t.item.title)+"\n    ")])]),t._v(" "),n("v-card-subtitle",[t._v("\n    "+t._s(t.item.subtitle)+"\n  ")]),t._v(" "),t.item.file?n("v-chip",{staticClass:"ma-2",attrs:{link:"",href:t.item.file,to:t.item.file,target:"_blank"}},[n("v-avatar",{attrs:{left:""}},[n("v-icon",[t._v("mdi-paperclip")])],1),t._v("\n    "+t._s(t.$t("misc.ui.download"))+"\n  ")],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[t.item.youtube_video_id?n("YoutubeEmbedded",{staticClass:"mb-9",attrs:{yt:t.item.youtube_video_id}}):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.item}})],1),t._v(" "),["webinars___en","webinars___fr"].includes(t.$route.name)?n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",to:t.localePath("/webinars/"+t.item.slug)}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-open-in-new")])],1)]}}],null,!1,1443272073)},[t._v(" "),n("span",{domProps:{innerHTML:t._s(t.$t("open-the-webinar-page"))}})])],1):new Date(t.item.date)>Date.now()?[n("v-divider"),t._v(" "),n("div",{staticClass:"ma-3"},[t._v("The webinar will be held on Zoom: "+t._s(t.item.zoom))]),t._v(" "),n("v-btn",{staticClass:"my-6",attrs:{large:"",text:""},on:{click:function(e){t.calendar=!0}}},[n("v-icon",{staticClass:"mr-6 ml-3",attrs:{"x-large":"",left:"",color:"black"}},[t._v("mdi-calendar-plus")]),t._v("\n      "+t._s(t.$t("add-to-my-calendar")))],1),t._v(" "),n("AddToCalendarModal",{attrs:{dialog:t.calendar,item:t.item},on:{close:function(e){t.calendar=!1}}}),t._v(" "),n("v-row",[n("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8"}},[n("v-card",{staticClass:"px-6 pt-6 pb-8",attrs:{color:"#ffe2a0",flat:"",href:"http://eepurl.com/hgbB6f",target:"_blank"}},[n("div",{staticClass:"d-inline-flex justify-center align-center"},[n("v-icon",{staticClass:"rotate-24 mr-6",attrs:{"x-large":"",color:"black"}},[t._v("mdi-email")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n              "+t._s(t.$t("misc.ui.subscribe3"))+"\n            ")])],1)])],1)],1)]:t._e(),t._v(" "),n("div",{staticClass:"headline mt-6 mb-3"},[t._v(t._s(t.$t("see-also")))]),t._v(" "),t._l(t.webinars,(function(e,r){return[n("WebinarListItem",{key:r,attrs:{item:e,index:r},on:{open:function(n){t.$router.push(t.localePath("/webinars/"+e.slug))}}})]}))],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{YoutubeEmbedded:n(476).default,AddToCalendarModal:n(487).default,WebinarListItem:n(489).default}),d()(component,{VAvatar:m.a,VBtn:f.a,VCard:v.a,VCardActions:h.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VChip:_.a,VCol:x.a,VDivider:y.a,VIcon:w.a,VRow:C.a,VSpacer:O.a,VTooltip:j.a})},526:function(t,e,n){"use strict";n(6),n(4),n(7),n(8),n(9);var r=n(1),o=(n(496),n(56)),l=n(5);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return t("li",[t(n,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),f=n(0),v=Object(f.i)("v-breadcrumbs__divider","li"),h=n(21);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(l.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(m,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},598:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(47),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,o=t.params,e.next=3,r(n.i18n.locale+"/webinars",o.slug).fetch();case 3:return l=e.sent,e.abrupt("return",{item:l});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{}},created:function(){}}),l=n(36),c=n(46),d=n.n(c),m=n(526),f=n(459),v=n(201),h=n(460),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("v-breadcrumbs",{staticClass:"ml-n3",attrs:{nuxt:"",items:[{text:t.$t("webinars"),disabled:!1,href:t.localePath("/webinars")},{text:t.item.title,disabled:!0,href:"breadcrumbs_link_1"}]},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),t._v(" "),n("WebinarView",{attrs:{item:t.item}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{WebinarView:n(499).default}),d()(component,{VBreadcrumbs:m.a,VCol:f.a,VIcon:v.a,VRow:h.a})}}]);