(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{416:function(t,e,n){var content=n(454);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("5bb03e97",content,!0,{sourceMap:!1})},453:function(t,e,n){"use strict";n(416)},454:function(t,e,n){(e=n(12)(!1)).push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.subtitle{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-breadcrumbs,.v-card__subtitle,.v-card__text{font-family:"Lato",sans-serif}.nuxt-content li,.nuxt-content p,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal}.logos{position:relative}.logo_container1{position:absolute;top:60px;left:30px;background-color:#fff;height:160px;width:160px;padding:30px;align-items:center}.logo_container1 .logo{height:100px;width:100px}.logo_container2{position:absolute;top:350px;left:150px;background-color:#fff;height:160px;width:160px;padding:30px;align-items:center}.logo_container2 .logo{height:100px;width:100px}.line1{left:108px;height:160px}.line1,.line2{position:absolute;top:-20px;width:4px;margin:6px 0;background:#fff}.line2{left:228px;height:380px}',""]),t.exports=e},484:function(t,e,n){"use strict";n.r(e);n(44);var o=n(14),r={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,o=t.$content,e.next=3,o(n.i18n.locale+"/pages/organizers").fetch();case 3:return r=e.sent,e.abrupt("return",{organizers:r});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{}},mounted:function(){},methods:{}},l=(n(453),n(40)),c=n(37),f=n.n(c),d=n(398),v=n(141),m=n(399),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0"}},[n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-3",attrs:{cols:"12",md:"8"}},[n("h1",{staticClass:"mt-8 mb-4"},[t._v("\n              "+t._s(t.organizers.ias.title)+"\n            ")]),t._v(" "),n("p",[t._v("\n              "+t._s(t.organizers.ias.text)+"\n              "),n("a",{attrs:{href:t.organizers.ias.url,target:"_blank",rel:"noopener noreferrer",title:t.organizers.ias.title}},[t._v(t._s(t.$t("misc.ui.more")))])]),t._v(" "),n("h1",{staticClass:"mt-8 mb-4"},[t._v("\n              "+t._s(t.organizers.fundation.title)+"\n            ")]),t._v(" "),n("p",[t._v("\n              "+t._s(t.organizers.fundation.text)+"\n              "),n("a",{attrs:{href:t.organizers.fundation.url,target:"_blank",rel:"noopener noreferrer",title:t.organizers.fundation.title}},[t._v(t._s(t.$t("misc.ui.more")))])])]),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("v-col",{attrs:{md:"4"}},[n("div",{staticClass:"logos"},[n("div",{staticClass:"line1"}),t._v(" "),n("div",{staticClass:"logo_container1 rounded-circle"},[n("v-img",{staticClass:"logo",attrs:{src:t.organizers.ias.logo}})],1),t._v(" "),n("div",{staticClass:"line2"}),t._v(" "),n("div",{staticClass:"logo_container2 rounded-circle"},[n("v-img",{staticClass:"logo",attrs:{src:t.organizers.fundation.logo}})],1)])]):t._e()],1)],1)],1)],1),t._v(" "),n("section",{staticClass:"px-3",class:{"px-3":t.$vuetify.breakpoint.smAndDown}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"8"}},[n("p",{staticClass:"mt-10 mb-0"},[t._v(t._s(t.$t("misc.ui.with_the_support_of")))]),t._v(" "),n("h1",{staticClass:"mt-4 mb-4"},[t._v("\n              "+t._s(t.organizers.iff.title)+"\n            ")]),t._v(" "),n("p",{staticClass:"mb-3"},[t._v("\n              "+t._s(t.organizers.iff.text)+"\n              "),n("a",{attrs:{href:t.organizers.iff.url,target:"_blank",rel:"noopener noreferrer",title:t.organizers.iff.title}},[t._v(t._s(t.$t("misc.ui.more")))])])]),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n("v-col",{attrs:{cols:"4"}},[n("v-img",{staticClass:"logo",attrs:{src:t.organizers.iff.logo,"max-width":"255","max-height":"200px"}})],1):t._e()],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:d.a,VImg:v.a,VRow:m.a})}}]);