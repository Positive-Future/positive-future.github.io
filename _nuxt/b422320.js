(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(t,e,n){"use strict";e.a=function(t){t.app.i18n.beforeLanguageSwitch=function(t,e){}}},217:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("69884628",content,!0,{sourceMap:!1})},223:function(t,e,n){var content=n(325);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("6160636a",content,!0,{sourceMap:!1})},224:function(t,e,n){var content=n(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(14).default)("6ea81be6",content,!0,{sourceMap:!1})},245:function(t,e,n){"use strict";n.r(e);n(37);var o=n(12),r={computed:{data:function(){return{alter:void 0}},languages:function(){return[{value:"en",text:this.$t("misc.languages.en"),flagSrc:"https://cdn.vuetifyjs.com/images/flags/us.png"},{value:"fr",text:this.$t("misc.languages.fr"),flagSrc:"https://cdn.vuetifyjs.com/images/flags/fr.png"}]}},updated:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{link:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}},c=n(42),l=n(38),v=n.n(l),d=n(182),f=n(426),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.$route.params.slug?t._e():n("v-btn-toggle",{staticClass:"ml-6",attrs:{tile:"",dense:""}},[n("v-btn",{attrs:{outlined:"",color:"en"===t.$i18n.locale?"primary":"grey darken-2"},on:{click:function(e){return t.$i18n.setLocale("en")}}},[t._v("\n      EN\n    ")]),t._v(" "),n("v-btn",{attrs:{outlined:"",color:"fr"===t.$i18n.locale?"primary":"grey darken-2"},on:{click:function(e){return t.$i18n.setLocale("fr")}}},[t._v("\n      FR\n    ")])],1)],1)}),[],!1,null,"44939f6a",null);e.default=component.exports;v()(component,{VBtn:d.a,VBtnToggle:f.a})},255:function(t,e,n){"use strict";var o={data:function(){return{drawer:!1}},computed:{},created:function(){},methods:{onScroll:function(t){this.$store.commit("setOffsetTop",t.target.scrollingElement.scrollTop)}}},r=(n(324),n(42)),c=n(38),l=n.n(c),v=n(425),d=n(438),f=n(182),m=n(427),_=n(62),h=n(433),x=n(169),y=n(143),w=n(172),k=n(173),C=n(115),$=n(54),V=n(434),P=n(435),S=n(428),T=n(432),j=n(430),A=n(226),L=n.n(A),I=n(144),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}]},[n("v-main",[t.$vuetify.breakpoint.mdAndUp?n("TopBar"):n("v-app-bar",{staticClass:"py-0 my-0",attrs:{app:"",fixed:"",color:"white"}},[n("nuxt-link",{attrs:{to:t.localePath("index")}},[n("v-img",{attrs:{nuxt:"",src:"/icon.png",height:"52px",width:"52px"}})],1),t._v(" "),n("v-spacer"),t._v(" "),t.$vuetify.breakpoint.smAndDown?n("v-btn",{attrs:{id:"menu_btn",large:"",icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",{attrs:{large:"",color:"black"}},[t._v("mdi-menu")])],1):t._e()],1),t._v(" "),n("v-navigation-drawer",{attrs:{fixed:"",temporary:"",right:"",color:"rgb(217, 217, 217)","overlay-color":"white"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("div",{staticClass:"d-flex flex-row-reverse"},[n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({staticClass:"ma-3",attrs:{large:"",icon:""},on:{click:function(e){t.drawer=!1}}},o),[n("v-icon",{attrs:{color:"black"}},[t._v("mdi-close")])],1)]}}])},[t._v(" "),n("span",[t._v("Close the menu")])])],1),t._v(" "),n("v-list",[n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                "+t._s(t.$t("navigation.contest"))+"\n              ")])],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",{staticClass:"pl-6",attrs:{nuxt:"",to:t.localePath("/contest/rules")}},[n("v-list-item-title",[t._v("\n              "+t._s(t.$t("navigation.rules"))+"\n            ")])],1),t._v(" "),n("v-list-item",{staticClass:"pl-6",attrs:{nuxt:"",to:t.localePath("/contest/tips")}},[n("v-list-item-title",[t._v("\n              "+t._s(t.$t("navigation.tips"))+"\n            ")])],1),t._v(" "),n("v-list-item",{staticClass:"pl-6",attrs:{nuxt:"",to:t.localePath("/contest/jury")}},[n("v-list-item-title",[t._v("\n              "+t._s(t.$t("navigation.jury"))+"\n            ")])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:t.localePath("/resources")}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n              "+t._s(t.$t("navigation.resources")))])],1)],1),t._v(" "),n("v-list-item",{attrs:{link:"",to:t.localePath("/news")}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n              "+t._s(t.$t("navigation.news")))])],1)],1),t._v(" "),n("v-list-group",{scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                "+t._s(t.$t("navigation.about"))+"\n              ")])],1)]},proxy:!0}])},[t._v(" "),n("v-list-item",{staticClass:"pl-6",attrs:{link:"",to:t.localePath("/about/organizers")}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                "+t._s(t.$t("navigation.organizers")))])],1)],1),t._v(" "),n("v-list-item",{staticClass:"pl-6",attrs:{link:"",to:t.localePath("/about/scientific_advisory_board")}},[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                "+t._s(t.$t("navigation.sab")))])],1)],1)],1)],1),t._v(" "),n("v-footer",{staticClass:"text-align:right",attrs:{app:"",flat:"",color:"rgb(217, 217, 217)"}},[n("LanguagePicker")],1)],1),t._v(" "),n("v-row",{attrs:{align:"center","no-gutters":"",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("nuxt")],1)],1)],1),t._v(" "),n("Footer"),t._v(" "),n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.offsetTop>600,expression:"$store.state.offsetTop > 600"}],attrs:{color:"secondary",fixed:"",bottom:"",right:"",contained:"",fab:""},on:{click:function(e){return t.$vuetify.goTo(0)}}},[n("v-icon",{attrs:{color:t.$vuetify.theme.isDark?"primary":"white"}},[t._v("\n        mdi-arrow-up\n      ")])],1)],1)],1)}),[],!1,null,"2980c6ce",null);e.a=component.exports;l()(component,{TopBar:n(413).default,LanguagePicker:n(245).default,Footer:n(411).default}),l()(component,{VApp:v.a,VAppBar:d.a,VBtn:f.a,VCol:m.a,VFabTransition:_.c,VFooter:h.a,VIcon:x.a,VImg:y.a,VList:w.a,VListGroup:k.a,VListItem:C.a,VListItemContent:$.a,VListItemTitle:$.c,VMain:V.a,VNavigationDrawer:P.a,VRow:S.a,VSpacer:T.a,VTooltip:j.a}),L()(component,{Scroll:I.b})},272:function(t,e,n){n(273),t.exports=n(274)},290:function(t,e,n){"use strict";n.r(e);n(22),n(58),n(37);var o=n(12);function r(){return(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,o,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.route,e.store,o=e.$content,r=e.redirect,c=e.app,!n.name.startsWith("redirect-lang-id")){t.next=9;break}if(n.params.lang===c.i18n.locale){t.next=5;break}return t.next=5,c.i18n.setLocale(n.params.lang);case 5:return t.next=7,o(c.i18n.locale+"/news").where({order:+n.params.id}).fetch();case 7:return l=t.sent,t.abrupt("return",!l.length||r("/news/"+l[0].slug));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=function(t){return r.apply(this,arguments)}},297:function(t,e,n){"use strict";n(217)},298:function(t,e,n){(e=n(13)(!1)).push([t.i,"h1[data-v-c2a714d4]{font-size:20px}",""]),t.exports=e},324:function(t,e,n){"use strict";n(223)},325:function(t,e,n){(e=n(13)(!1)).push([t.i,'.layout-enter-active[data-v-2980c6ce],.layout-leave-active[data-v-2980c6ce]{transition:opacity .3s}.layout-enter[data-v-2980c6ce],.layout-leave-active[data-v-2980c6ce]{opacity:0}.page-enter-active[data-v-2980c6ce],.page-leave-active[data-v-2980c6ce]{transition:opacity .3s}.page-enter[data-v-2980c6ce],.page-leave-active[data-v-2980c6ce]{opacity:0}.fade-enter-active[data-v-2980c6ce],.fade-leave-active[data-v-2980c6ce]{transition:opacity .3s}.fade-enter[data-v-2980c6ce],.fade-leave-active[data-v-2980c6ce]{opacity:0}.nuxt-content hr[data-v-2980c6ce]{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2[data-v-2980c6ce],h2[data-v-2980c6ce]{margin-top:30px;margin-bottom:10px}.nuxt-content h1[data-v-2980c6ce],.nuxt-content h2[data-v-2980c6ce],h1[data-v-2980c6ce],h2[data-v-2980c6ce]{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1[data-v-2980c6ce],h1[data-v-2980c6ce]{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.nuxt-content img[data-v-2980c6ce],.subtitle[data-v-2980c6ce]{max-width:100%}.subtitle[data-v-2980c6ce]{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title[data-v-2980c6ce]{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline[data-v-2980c6ce],.v-breadcrumbs[data-v-2980c6ce],.v-card__subtitle[data-v-2980c6ce],.v-card__text[data-v-2980c6ce],.v-footer[data-v-2980c6ce],.v-list-item__subtitle[data-v-2980c6ce]{font-family:"Lato",sans-serif!important}.nuxt-content li[data-v-2980c6ce],.nuxt-content p[data-v-2980c6ce],p[data-v-2980c6ce]{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal}.logo[data-v-2980c6ce]{max-height:15vh;z-index:2}#menu_btn[data-v-2980c6ce]{position:fixed;z-index:3;right:0;margin-top:10px;margin-right:10px}#language-picker[data-v-2980c6ce]{position:absolute;top:0;left:0;z-index:3;width:80px;margin-top:10px;margin-left:10px}#content[data-v-2980c6ce]{z-index:2}#content.sm[data-v-2980c6ce]{padding-top:5vh;height:40vh}#content.sm .public_logo[data-v-2980c6ce]{max-height:20vh}#content.md[data-v-2980c6ce]{padding-top:7vh;height:44vh}#content.md .public_logo[data-v-2980c6ce]{max-height:20vh}#content.lg[data-v-2980c6ce]{padding-top:7vh;height:44vh}#content.lg .public_logo[data-v-2980c6ce]{max-height:20vh}#content.xl[data-v-2980c6ce]{padding-top:7vh;height:44vh}#content.xl .public_logo[data-v-2980c6ce]{max-height:20vh}div[id^=particles-instance-][data-v-2980c6ce]{height:100vh!important;width:100vw!important;position:fixed!important;top:0!important;margin:0!important;padding:0!important;overflow:hidden!important;z-index:2!important}',""]),t.exports=e},326:function(t,e,n){"use strict";n(224)},327:function(t,e,n){(e=n(13)(!1)).push([t.i,".v-sheet.v-app-bar.v-toolbar{transition:background-color .3s ease-out!important}",""]),t.exports=e},381:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{offsetTop:0,tab:"",scrolling:!1,contactOnly:!1}},r={setContactOnly:function(t,e){t.contactOnly=e},setOffsetTop:function(t,e){t.offsetTop=e},setTab:function(t,e){void 0!==e&&(t.tab=e,1===e&&(t.contactOnly=!1),3===e&&(t.contactOnly=!0))},lockScrolling:function(t){t.scrolling=!0},unlockScrolling:function(t){t.scrolling=!1}}},386:function(t,e,n){var map={"./en":[264,3,1],"./en.json":[264,3,1],"./fr":[265,3,2],"./fr.json":[265,3,2],"./languages":[266,9,3],"./languages.js":[266,9,3]};function o(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return n.e(e[2]).then((function(){return n.t(o,e[1])}))}o.keys=function(){return Object.keys(map)},o.id=386,t.exports=o},411:function(t,e,n){"use strict";n.r(e);var o=[{url:"https://github.com/IEA_Paris/positive_future",text:"See this website source code and contribute",icon:"github"},{url:"https://twitter.com/positive_future",text:"Follow us on Twitter",icon:"twitter"},{url:"https://www.linkedin.com/company/positive_future/",text:"Visit our Linkedin page",icon:"linkedin"},{url:"https://www.facebook.com/positive_future/",text:"Visit our Facebook page",icon:"facebook"}],r={data:function(){return{showCredits:!1,socialIcons:o}},created:function(){},methods:{storeTheme:function(){console.log("this.$vuetify.theme.isDark: ",this.$vuetify.theme.isDark),localStorage.setItem("darkMode",this.$vuetify.theme.isDark)}}},c=n(42),l=n(38),v=n.n(l),d=n(182),f=n(427),m=n(433),_=n(169),h=n(428),x=n(430),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticStyle:{"z-index":"2"}},[n("v-row",{attrs:{align:"center","no-gutters":"",justify:"center"}},[n("v-col",{staticClass:"text-center",attrs:{xs:"12",sm:"11",md:"9",lg:"9",xl:"8"}},[n("a",{staticClass:"black--text",staticStyle:{"text-decoration":"none",cursor:"pointer"},attrs:{href:"mailto:info@positive-future.org"}},[t._v(t._s(t.$t("misc.ui.contact_us")))]),t._v(" - \n      "),n("a",{staticClass:"black--text",staticStyle:{"text-decoration":"none"},attrs:{href:"http://eepurl.com/hgbB6f"}},[t._v("\n        "+t._s(t.$t("misc.ui.subscribe")))]),t._v(" - \n      "),n("a",{staticClass:"black--text",staticStyle:{"text-decoration":"none"},on:{click:function(e){t.showCredits=!0}}},[t._v("\n        "+t._s(t.$t("misc.ui.seeCredits")))]),t._v(" "),n("br"),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:""}},o),[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"http://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",rel:"noopener noreferrer"}},[n("v-icon",{attrs:{color:t.$vuetify.theme.isDark?"white":"secondary"}},[t._v("mdi-creative-commons")])],1)])]}}])},[t._v(" "),n("span",[t._v("This website is licenced under Creative Commons")])]),t._v("\n      "+t._s((new Date).getFullYear())+" - "+t._s(t.$t("misc.ui.maintained"))+"\n      "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$t("misc.ui.maintainer")))]),t._v(".\n    ")],1)],1),t._v(" "),n("Credits",{attrs:{credits:t.showCredits},on:{"close-credits":function(e){t.showCredits=!1}}})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Credits:n(412).default}),v()(component,{VBtn:d.a,VCol:f.a,VFooter:m.a,VIcon:_.a,VRow:h.a,VTooltip:x.a})},412:function(t,e,n){"use strict";n.r(e);var o={props:{credits:{type:Boolean,default:!1,required:!1}}},r=n(42),c=n(38),l=n.n(c),v=n(176),d=n(182),f=n(178),m=n(79),_=n(431),h=n(414),x=n(169),y=n(143),w=n(432),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{scrollable:"","max-width":"700px",light:""},on:{"click:outside":function(e){return t.$emit("close-credits")}},model:{value:t.credits,callback:function(e){t.credits=e},expression:"credits"}},[n("v-card",[n("v-card-title",[n("v-avatar",{staticClass:"mr-3",attrs:{small:"",tile:"",color:"grey lighten-5",size:"72"}},[n("v-img",{attrs:{contain:"","max-height":"100%",src:"/logo.svg"}})],1),t._v("Credits\n      "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$emit("close-credits")}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"pt-6 px-6 subtitle-1"},[t._v("\n      Positive-future is a collective effort that originated from\n      "),n("a",{attrs:{href:"https://www.paris-iea.fr",target:"_blank"}},[t._v("IAS Paris - IEA de Paris")]),t._v(".\n      "),n("br"),t._v(" "),n("b",[t._v("Thanks")]),t._v("\n      to all those whose contribution and collective intelligence provides us\n      all with this shared resource.\n      "),n("br"),t._v("This is a non-profit initiative. We welcome donations.\n      "),n("br"),t._v(" "),n("nuxt-link",{staticClass:"blue--text",attrs:{to:t.localePath("privacy_policy")}},[t._v("Privacy Policy")]),t._v(" - \n      "),n("nuxt-link",{staticClass:"blue--text",attrs:{to:t.localePath("organizers")}},[t._v(t._s(t.$t("navigation.organizers")))]),t._v(" - \n      "),n("nuxt-link",{staticClass:"blue--text",attrs:{to:t.localePath("contest")}},[t._v(t._s(t.$t("navigation.contest")))]),t._v(" - \n      "),n("a",{staticClass:"blue--text",staticStyle:{"text-decoration":"underline",cursor:"pointer"},attrs:{href:"mailto:info@positive-future.org"}},[t._v("Contact us")]),t._v(" "),n("br"),t._v(" "),n("v-divider"),t._v("This website and logo as well as its infrastructure have\n      been designed by IAS Paris. It is powered by\n      "),n("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Nuxt")]),t._v(" and\n      "),n("a",{attrs:{href:"http://vuetifyjs.com",target:"_blank"}},[t._v("Vuetify")]),t._v("\n      ."),n("br"),t._v("All the images used are free of rights (or distributed as such).\n      "),n("br"),t._v(" "),n("span",{staticClass:"caption"},[n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by-sa/4.0/"}},[n("img",{staticStyle:{"border-width":"0"},attrs:{alt:"Creative Commons License",src:"https://i.creativecommons.org/l/by-sa/4.0/88x31.png"}})]),t._v(" "),n("br"),t._v(" "),n("span",{attrs:{"xmlns:dct":"http://purl.org/dc/terms/",property:"dct:title"}},[t._v("Positive-Future")]),t._v("\n        by\n        "),n("a",{attrs:{"xmlns:cc":"http://creativecommons.org/ns#",href:"https://wprn.org",property:"cc:attributionName",rel:"cc:attributionURL"}},[t._v("IAS Paris")]),t._v("\n        is licensed under a\n        "),n("a",{attrs:{rel:"license",href:"http://creativecommons.org/licenses/by-sa/4.0/"}},[t._v("\n          Creative Commons Attribution-ShareAlike 4.0 International License ")]),t._v(". "),n("br"),t._v("Based on a work at\n        "),n("a",{attrs:{"xmlns:dct":"http://purl.org/dc/terms/",href:"https://github.com/Positive-Future/positive-future.github.io",rel:"dct:source"}},[t._v("https://github.com/Positive-Future/positive-future.github.io")]),t._v("\n        By Antoine Cordelois.\n      ")])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.$emit("close-credits")}}},[t._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:v.a,VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardText:m.c,VCardTitle:m.d,VDialog:_.a,VDivider:h.a,VIcon:x.a,VImg:y.a,VSpacer:w.a})},413:function(t,e,n){"use strict";n.r(e);var o={props:{},data:function(){return{}},computed:{socialIcons:function(){return[{url:"https://www.linkedin.com/company/futurpositif",text:this.$t("misc.social.linkedin"),icon:"linkedin"},{url:"https://www.instagram.com/futurpositif/",text:this.$t("misc.social.instagram"),icon:"instagram"},{url:"https://www.youtube.com/channel/UCguKalm3EVILMvkvoNXkANg/featured",text:this.$t("misc.social.youtube"),icon:"youtube"},{url:"https://twitter.com/FuturPositif",text:this.$t("misc.social.twitter"),icon:"twitter"},{url:"https://www.facebook.com/FuturPositif",text:this.$t("misc.social.facebook"),icon:"facebook"}]}},mounted:function(){},methods:{}},r=(n(326),n(42)),c=n(38),l=n.n(c),v=n(438),d=n(182),f=n(427),m=n(437),_=n(169),h=n(143),x=n(172),y=n(115),w=n(54),k=n(415),C=n(428),$=n(429),V=n(436),P=n(430),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{staticClass:"py-0 my-0",attrs:{app:"",fixed:"",height:"112px",color:"white"}},[n("v-container",{staticClass:"py-0 my-0",attrs:{fluid:""}},[n("v-row",{class:{"mx-n6":t.$vuetify.breakpoint.lgAndUp},attrs:{"no-gutters":"",justify:"space-around"}},[n("v-col",{staticClass:"mx-n3",attrs:{xs:"12",sm:"11",md:"12",lg:"7",xl:"6"}},[n("v-row",{staticClass:"align-center",attrs:{"no-gutters":""}},[n("v-col",[n("nuxt-link",{attrs:{to:t.localePath("index")}},[n("v-img",{attrs:{nuxt:"",src:"/icon.png",height:t.$vuetify.breakpoint.mdAndUp?"90px":"44px",width:t.$vuetify.breakpoint.mdAndUp?"90px":"44px"}})],1)],1),t._v(" "),n("v-col",{staticClass:"pt-1",attrs:{align:"right",cols:"auto"}},[n("v-row",[n("v-col",{staticClass:"d-inline-flex flex-row-reverse align-center"},[n("LanguagePicker"),t._v(" "),t._l(t.socialIcons,(function(e,o){return n("v-tooltip",{key:o,attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on;return[n("v-btn",t._g({staticClass:"mx-1",attrs:{target:"_blank",rel:"noopener noreferrer",href:e.url,fab:"","x-small":"",depressed:"",color:"grey"}},r),[n("v-icon",{attrs:{color:"white"}},[t._v("mdi-"+t._s(e.icon)+" ")])],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.text))])])}))],2)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[t.$vuetify.breakpoint.mdAndUp?[n("v-tabs",{attrs:{right:"",color:"#00c2cb",optional:"","slider-size":"5","active-class":"selected"}},[n("v-menu",{attrs:{left:"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-tab",t._g(t._b({class:{selected:["contest-rules___fr","contest-rules___en","contest-jury___fr","contest-jury___en","contest-tips___fr","contest-tips___en"].includes(t.$route.name)}},"v-tab",r,!1),o),[t._v("\n                          "+t._s(t.$t("navigation.contest"))+"\n                          "),n("v-icon",[t._v("mdi-chevron-down")])],1)]}}],null,!1,1316162910)},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{nuxt:"",to:t.localePath("/apply")}},[n("v-list-item-title",[t._v("\n                            "+t._s(t.$t("apply"))+"\n                          ")])],1),t._v(" "),n("v-list-item",{attrs:{nuxt:"",to:t.localePath("/contest/rules")}},[n("v-list-item-title",[t._v("\n                            "+t._s(t.$t("navigation.rules"))+"\n                          ")])],1),t._v(" "),n("v-list-item",{attrs:{nuxt:"",to:t.localePath("/contest/tips")}},[n("v-list-item-title",[t._v("\n                            "+t._s(t.$t("navigation.tips"))+"\n                          ")])],1),t._v(" "),n("v-list-item",{attrs:{nuxt:"",to:t.localePath("/contest/jury")}},[n("v-list-item-title",[t._v("\n                            "+t._s(t.$t("navigation.jury"))+"\n                          ")])],1)],1)],1),t._v(" "),n("v-tab",{attrs:{nuxt:"",to:t.localePath("/resources")}},[t._v(t._s(t.$t("navigation.resources")))]),t._v(" "),n("v-tab",{attrs:{nuxt:"",to:t.localePath("/news")}},[t._v("\n                      "+t._s(t.$t("navigation.news"))+"\n                    ")]),t._v(" "),n("v-menu",{attrs:{left:"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-tab",t._g(t._b({class:{selected:["about-organizers___en","about-organizers___fr","about-scientific_advisory_board___en","about-scientific_advisory_board___fr"].includes(t.$route.name)}},"v-tab",r,!1),o),[t._v("\n                          "+t._s(t.$t("navigation.about"))+"\n                          "),n("v-icon",[t._v("mdi-chevron-down")])],1)]}}],null,!1,2331102104)},[t._v(" "),n("v-list",[n("v-list-item",{attrs:{nuxt:"",to:t.localePath("/about/organizers")}},[n("v-list-item-title",[t._v("\n                            "+t._s(t.$t("navigation.organizers"))+"\n                          ")])],1),t._v(" "),n("v-list-item",{attrs:{nuxt:"",to:t.localePath("/about/scientific_advisory_board")}},[n("v-list-item-title",[t._v("\n                            "+t._s(t.$t("navigation.sab"))+"\n                          ")])],1)],1)],1)],1)]:t._e()],2)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.$emit("toggle-drawer")}}},[n("v-icon",[t._v("mdi-menu")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{LanguagePicker:n(245).default}),l()(component,{VAppBar:v.a,VBtn:d.a,VCol:f.a,VContainer:m.a,VIcon:_.a,VImg:h.a,VList:x.a,VListItem:y.a,VListItemTitle:w.c,VMenu:k.a,VRow:C.a,VTab:$.a,VTabs:V.a,VTooltip:P.a})},77:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(297),n(42)),c=n(38),l=n.n(c),v=n(425),d=n(414),f=n(169),m=n(170),_=n(171),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-overlay",{staticClass:"text-center headline",attrs:{value:t.error}},[n("div",{staticClass:"display-1"},[t._v("Sorry for the inconvenience!")]),t._v(" "),n("v-responsive",{staticClass:"mx-auto",attrs:{width:"56"}},[n("v-divider",{staticClass:"mb-1 mt-3"}),t._v(" "),n("v-divider",{staticClass:"mb-3"})],1),t._v(" "),n("br"),t._v(" "),404===t.error.statusCode?n("v-icon",{staticClass:"mb-3",attrs:{"x-large":""}},[t._v("\n      mdi-link-variant-off\n    ")]):n("v-icon",{staticClass:"mb-3",attrs:{"x-large":""}},[t._v(" mdi-ladybug ")]),t._v(" "),n("br"),t._v(" "),404===t.error.statusCode?[t._v("\n      This page does not exist. "),n("br"),t._v(" "),n("div",{staticClass:"body-1 mt-3"},[n("NuxtLink",{attrs:{to:"/"}},[t._v(" Go back to Positive-Future Home page ")])],1)]:[t._v("\n      An error happened while loading this page. "),n("br"),t._v("You can try again and\n      refresh this page or\n      "),n("a",{attrs:{href:"mailto:info@positive-future.org"}},[t._v("contact us")]),t._v("\n      to report this error.\n    ")]],2)],1)}),[],!1,null,"c2a714d4",null);e.a=component.exports;l()(component,{VApp:v.a,VDivider:d.a,VIcon:f.a,VOverlay:m.a,VResponsive:_.a})}},[[272,21,6,22]]]);