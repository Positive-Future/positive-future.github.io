(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{471:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("384d8948",content,!0,{sourceMap:!1})},473:function(t,e,n){"use strict";n(471)},474:function(t,e,n){var r=n(14)(!1);r.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal;color:rgba(0,0,0,.6);font-family:"Lato",sans-serif!important;font-size:.875rem!important;font-weight:400!important;line-height:1.375rem!important;letter-spacing:.0071428571em!important}.nuxt-content ul{margin-bottom:20px}',""]),t.exports=r},475:function(t,e,n){"use strict";n.r(e);var r={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0,ready:!1}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting},iframeLoded:function(){}}},o=(n(473),n(36)),l=n(47),c=n.n(l),d=n(497),m=n(226),v=n.n(m),f=n(99),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("v-skeleton-loader",{staticClass:"d-flex",attrs:{type:"image"}}),t._v(" "),n("iframe",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{title:"Youtube video",src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{load:function(e){t.ready=!0}}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VSkeletonLoader:d.a}),v()(component,{Intersect:f.a})},487:function(t,e,n){"use strict";n.r(e);var r=n(494),o={components:{AddToCalendar:n.n(r).a},props:{dialog:{type:Boolean,default:!1},item:{type:Object,default:function(){}}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},l=n(36),c=n(47),d=n.n(c),m=n(215),v=n(211),f=n(89),_=n(462),h=n(442),w=n(202),y=n(463),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.dialog,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 lighten-2 mb-6"},[n("v-icon",{attrs:{left:"",color:"black"}},[t._v("mdi-calendar-plus")]),t._v("\n      "+t._s(t.$t("add-to-my-calendar"))+"\n    ")],1),t._v(" "),n("v-card-text",[n("div",{staticClass:"d-flex flex-column"},[n("v-btn",{staticClass:"my-3",attrs:{color:"default",outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-google")]),t._v(" "),n("AddToCalendar",{attrs:{title:t.item.title,location:"Online",start:new Date,end:new Date((new Date).setDate((new Date).getDate()+1))},inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("google-calendar",{staticStyle:{color:"inherit","text-decoration":"none"},attrs:{id:"google-calendar"}},[t._v("\n              Add to Google calendar\n            ")])},staticRenderFns:[]}})],1),t._v(" "),n("v-btn",{staticClass:"my-3",attrs:{color:"default",outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-microsoft-windows")]),t._v(" "),n("AddToCalendar",{attrs:{title:t.item.title,location:"Online",start:new Date,end:new Date((new Date).setDate((new Date).getDate()+1))},inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("microsoft-calendar",{staticStyle:{color:"inherit","text-decoration":"none"},attrs:{id:"microsoft-calendar"}},[t._v("\n              Add to Microsoft live calendar\n            ")])},staticRenderFns:[]}})],1),t._v(" "),n("v-btn",{staticClass:"my-3",attrs:{color:"default",outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-microsoft-office")]),t._v(" "),n("AddToCalendar",{attrs:{title:t.item.title,location:"Online",start:new Date,end:new Date((new Date).setDate((new Date).getDate()+1))},inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("office365-calendar",{staticStyle:{color:"inherit","text-decoration":"none"},attrs:{id:"office365-calendar"}},[t._v("\n              Add to Office365 outlook\n            ")])},staticRenderFns:[]}})],1)],1)]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("close")}}},[t._v("\n        "+t._s(t.$t("close"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VDialog:_.a,VDivider:h.a,VIcon:w.a,VSpacer:y.a})},488:function(t,e,n){"use strict";n.r(e);n(20),n(227),n(172),n(49);var r={props:{index:{type:Number,default:0},total:{type:Number,default:15},item:{type:Object,default:function(){}},active:{type:Boolean,default:!1},search:{type:String,default:""}},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{highlight:function(t,e){if(!this.search.length)return t;var n=new RegExp(e,"ig");return t.replace(n,(function(t,a,b){return'<strong style="color: darkslategray;background-color: yellow;">'+t+"</strong>"}))}}},o=n(36),l=n(47),c=n.n(l),d=n(209),m=n(211),v=n(89),f=n(484),_=n(165),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"d-flex",attrs:{justify:"top",align:"top"},on:{click:function(e){return t.$emit("open")}}},[t.$vuetify.breakpoint.smAndUp?n("v-avatar",{staticClass:"my-3 mr-6",attrs:{size:"125",tile:"",rounded:"",color:t.item.image.length?"transparent":t.$vuetify.theme.themes.light.primary}},[t.item.image?n("v-img",{attrs:{src:t.item.image,alt:t.item.title,contain:""}}):n("p",{domProps:{innerHTML:t._s(t.highlight(t.item.title,t.search))}})],1):t._e(),t._v(" "),n("div",{staticClass:"flex-column align-content-start mt-3"},[n("v-card-title",{staticClass:"d-flex flex-row align-center"},[n("p",{staticStyle:{"font-weight":"500","letter-spacing":"0.0125em","line-height":"2rem","font-family":"'Poppins', sans-serif","font-size":"1.15rem","word-break":"normal"}},[n("v-chip",{staticClass:"mr-2",attrs:{label:"",small:""}},[t._v("\n          "+t._s(2021===t.item.edition?t.$t("work-in-2100"):t.$t("the-city-in-2100"))+"\n        ")]),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.highlight(t.item.title,t.search))}})],1)]),t._v(" "),n("v-card-text",[n("p",{domProps:{innerHTML:t._s(new Date(t.item.date).toLocaleDateString(t.$i18n.locale,{timezone:"UTC"})+" - "+new Date(t.item.date).toLocaleTimeString(t.$i18n.locale,{hour:"2-digit",minute:"2-digit",timezone:"UTC"})+" - "+t.highlight(t.item.subtitle,t.search))}}),t._v(" "),t.item.copyright?n("small",{staticClass:"muted caption"},[t._v("Image of © "+t._s(t.item.copyright))]):t._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAvatar:d.a,VCard:m.a,VCardText:v.c,VCardTitle:v.d,VChip:f.a,VImg:_.a})},498:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(48),{components:{AddToCalendarModal:n(487).default},props:{item:{type:Object,default:function(){}}},data:function(){return{webinars:[],calendar:!1,selected:null,openModal:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content(t.$i18n.locale+"/webinars").sortBy("order","desc").where({slug:{$ne:t.item.slug},edition:t.item.edition}).limit(t.limit).fetch();case 2:t.webinars=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:{},mounted:function(){},methods:{}}),l=n(36),c=n(47),d=n.n(c),m=n(209),v=n(215),f=n(211),_=n(89),h=n(484),w=n(458),y=n(442),x=n(202),C=n(459),V=n(463),$=n(461),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"px-6 pb-6 pt-1",staticStyle:{}},[["webinars___en","webinars___fr"].includes(t.$route.name)?n("v-btn",{staticClass:"float-right mt-3",attrs:{large:"",icon:""},on:{click:function(e){return t.$emit("close")}}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-close")])],1):t._e(),t._v(" "),n("v-card-title",{staticClass:"d-flex"},[n("h1",{staticClass:"d-flex"},[t._v("\n      "+t._s(t.item.title)+"\n    ")])]),t._v(" "),n("v-card-subtitle",[t._v("\n    "+t._s(t.item.subtitle)+"\n  ")]),t._v(" "),t.item.file?n("v-chip",{staticClass:"ma-2",attrs:{link:"",href:t.item.file,to:t.item.file,target:"_blank"}},[n("v-avatar",{attrs:{left:""}},[n("v-icon",[t._v("mdi-paperclip")])],1),t._v("\n    "+t._s(t.$t("misc.ui.download"))+"\n  ")],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[t.item.youtube_video_id?n("YoutubeEmbedded",{staticClass:"mb-9",attrs:{yt:t.item.youtube_video_id}}):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.item}})],1),t._v(" "),["webinars___en","webinars___fr"].includes(t.$route.name)?n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",to:t.localePath("/webinars/"+t.item.slug)}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-open-in-new")])],1)]}}],null,!1,1443272073)},[t._v(" "),n("span",{domProps:{innerHTML:t._s(t.$t("open-the-webinar-page"))}})])],1):new Date(t.item.date)>Date.now()?[n("v-divider"),t._v(" "),n("div",{staticClass:"ma-3"},[t._v("The webinar will be held on Zoom: "+t._s(t.item.zoom))]),t._v(" "),n("v-btn",{staticClass:"my-6",attrs:{large:"",text:""},on:{click:function(e){t.calendar=!0}}},[n("v-icon",{staticClass:"mr-6 ml-3",attrs:{"x-large":"",left:"",color:"black"}},[t._v("mdi-calendar-plus")]),t._v("\n      "+t._s(t.$t("add-to-my-calendar")))],1),t._v(" "),n("AddToCalendarModal",{attrs:{dialog:t.calendar,item:t.item},on:{close:function(e){t.calendar=!1}}}),t._v(" "),n("v-row",[n("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8"}},[n("v-card",{staticClass:"px-6 pt-6 pb-8",attrs:{color:"#ffe2a0",flat:"",href:"http://eepurl.com/hgbB6f",target:"_blank"}},[n("div",{staticClass:"d-inline-flex justify-center align-center"},[n("v-icon",{staticClass:"rotate-24 mr-6",attrs:{"x-large":"",color:"black"}},[t._v("mdi-email")]),t._v(" "),n("div",{staticClass:"subtitle"},[t._v("\n              "+t._s(t.$t("misc.ui.subscribe3"))+"\n            ")])],1)])],1)],1)]:t._e(),t._v(" "),n("div",{staticClass:"headline mt-6 mb-3"},[t._v(t._s(t.$t("see-also")))]),t._v(" "),t._l(t.webinars,(function(e,r){return[n("WebinarListItem",{key:r,attrs:{item:e,index:r},on:{open:function(n){t.$router.push(t.localePath("/webinars/"+e.slug))}}})]}))],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{YoutubeEmbedded:n(475).default,AddToCalendarModal:n(487).default,WebinarListItem:n(488).default}),d()(component,{VAvatar:m.a,VBtn:v.a,VCard:f.a,VCardActions:_.a,VCardSubtitle:_.b,VCardText:_.c,VCardTitle:_.d,VChip:h.a,VCol:w.a,VDivider:y.a,VIcon:x.a,VRow:C.a,VSpacer:V.a,VTooltip:$.a})}}]);