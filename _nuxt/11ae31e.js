(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{529:function(t,n,e){"use strict";e.r(n);var c=e(11),r=(e(39),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function n(){var e,c,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app,c=t.$content,n.next=3,c(e.i18n.locale+"/pages/contest").fetch();case 3:return r=n.sent,n.next=6,c(e.i18n.locale+"/pages/index").fetch();case 6:return o=n.sent,n.abrupt("return",{contest:r,index:o});case 8:case"end":return n.stop()}}),n)})))()},data:function(){return{}},mounted:function(){},methods:{}}),o=e(43),l=e(40),v=e.n(l),d=e(187),m=e(425),_=e(177),f=e(426),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0","padding-bottom":"70px"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("div",{staticClass:"mt-6 subtitle"},[t._v("\n          "+t._s(t.$t("misc.ui.theme"))+"\n        ")]),t._v(" "),e("h1",{staticClass:"pt-0 mt-0 mb-4"},[t._v("\n          "+t._s(t.index.theme)+"\n          ")]),t._v(" "),e("p",[t._v("\n          "+t._s(t.contest.intro)+"\n        ")])])],1)],1),t._v(" "),e("section",{staticStyle:{"margin-top":"-90px"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("v-card",{staticClass:"pa-6",class:{"ml-n6":t.$vuetify.breakpoint.mdAndUp},attrs:{color:"#FFE2A0",flat:"",target:"_blank",to:"/rules_"+t.$i18n.locale+".pdf"}},[e("div",{staticClass:"d-inline-flex justify-center align-center"},[e("v-icon",{staticClass:"rotate-24 mr-6",attrs:{"x-large":"",color:"black"}},[t._v("mdi-file-pdf")]),t._v(" "),e("div",{staticClass:"subtitle"},[t._v("\n                  "+t._s(t.$t("misc.ui.download_rules"))+"\n                ")])],1)])],1)],1),t._v(" "),e("nuxt-content",{staticClass:"py-6",attrs:{document:t.contest}}),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"9"}},[e("v-card",{staticClass:"px-6 pt-6 pb-8",staticStyle:{"margin-bottom":"-120px"},attrs:{color:"#4FD4C7"}},[e("h1",{staticClass:"mb-4"},[t._v("\n                "+t._s(t.$t("misc.ui.award"))+"\n              ")]),t._v("\n              "+t._s(t.contest.award)+"\n            ")])],1)],1)],1)],1)],1),t._v(" "),e("section",{staticStyle:{"background-color":"#c9f8f3","padding-top":"110px"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{staticClass:"ma-3 pb-8",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("h1",{staticClass:"mt-8 mb-4"},[t._v("\n          "+t._s(t.contest.criterions.title)+"\n        ")]),t._v(" "),e("p",[t._v("\n          "+t._s(t.contest.criterions.text)+"\n        ")])])],1)],1)])}),[],!1,null,null,null);n.default=component.exports;v()(component,{VCard:d.a,VCol:m.a,VIcon:_.a,VRow:f.a})}}]);