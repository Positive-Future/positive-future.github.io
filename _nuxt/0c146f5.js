(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{536:function(t,n,e){"use strict";e.r(n);e(41);var r=e(14),c={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,c,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app,r=t.$content,n.next=3,r(e.i18n.locale+"/pages/tips").fetch();case 3:return c=n.sent,n.next=6,r(e.i18n.locale+"/pages/index").fetch();case 6:return o=n.sent,n.abrupt("return",{tips:c,index:o});case 8:case"end":return n.stop()}}),n)})))()},data:function(){return{}},mounted:function(){},methods:{}},o=e(42),l=e(37),d=e.n(l),v=e(182),f=e(178),m=e(426),_=e(169),x=e(427),component=Object(o.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0","padding-bottom":"70px"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("h1",{staticClass:"mt-8 mb-4"},[t._v("\n          "+t._s(t.tips.title)+"\n          "),t.$vuetify.breakpoint.mdAndUp?e("v-btn",{staticClass:"mx-1 float-right",attrs:{color:"primary",nuxt:"",to:t.localePath("/apply")}},[t._v("\n            "+t._s(t.$t("apply"))+"\n          ")]):t._e()],1),t._v(" "),e("p",[t._v("\n          "+t._s(t.tips.subtitle)+"\n        ")])])],1)],1),t._v(" "),e("section",{staticStyle:{"margin-top":"-75px"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-card",{staticClass:"pa-6",class:{"ml-n6":t.$vuetify.breakpoint.mdAndUp},attrs:{color:"#FFE2A0",flat:"",target:"_blank",to:"/tips_"+t.$i18n.locale+".pdf"}},[e("div",{staticClass:"d-inline-flex justify-center align-center"},[e("v-icon",{staticClass:"rotate-24 mr-6",attrs:{"x-large":"",color:"black"}},[t._v("mdi-file-pdf")]),t._v(" "),e("div",{staticClass:"subtitle"},[t._v("\n                  "+t._s(t.$t("misc.ui.download_tips"))+"\n                ")])],1)])],1)],1),t._v(" "),e("nuxt-content",{staticClass:"py-6",attrs:{document:t.tips}})],1)],1)],1)])}),[],!1,null,null,null);n.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCol:m.a,VIcon:_.a,VRow:x.a})}}]);