(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{625:function(t,e,n){"use strict";n.r(e);var o={props:{dialog:{type:Boolean,default:!1},item:{type:Object,default:function(){}}},data:function(){return{}},computed:{},mounted:function(){},methods:{formatDate:function(t){return new Date(t)}}},r=n(36),l=n(46),c=n.n(l),d=n(215),f=n(211),v=n(88),m=n(463),_=n(444),T=n(202),h=n(464),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.dialog,width:"500"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 lighten-2 mb-6"},[n("v-icon",{attrs:{left:"",color:"black"}},[t._v("mdi-calendar-plus")]),t._v("\n      "+t._s(t.$t("add-to-my-calendar"))+"\n    ")],1),t._v(" "),n("v-card-text",[n("div",{staticClass:"d-flex flex-column"},[n("v-btn",{staticClass:"my-3",attrs:{color:"default",outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-google")]),t._v(" "),n("AddToCalendar",{attrs:{title:t.item.title,location:"Online",start:new Date("2024-03-22T00:00:00"),end:new Date("2024-04-26T00:00:00")},inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("google-calendar",{staticStyle:{color:"inherit","text-decoration":"none"},attrs:{id:"google-calendar"}},[t._v("\n              Add to Google calendar\n            ")])},staticRenderFns:[]}})],1),t._v(" "),n("v-btn",{staticClass:"my-3",attrs:{color:"default",outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-microsoft-windows")]),t._v(" "),n("AddToCalendar",{attrs:{title:t.item.title,location:"Online",start:t.formatDate("2024-03-22T00:00:00"),end:t.formatDate("2024-04-26T00:00:00")},inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("microsoft-calendar",{staticStyle:{color:"inherit","text-decoration":"none"},attrs:{id:"microsoft-calendar"}},[t._v("\n              Add to Microsoft live calendar\n            ")])},staticRenderFns:[]}})],1),t._v(" "),n("v-btn",{staticClass:"my-3",attrs:{color:"default",outlined:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-microsoft-office")]),t._v(" "),n("AddToCalendar",{attrs:{title:t.item.title,location:"Online",start:t.formatDate("2024-03-22T00:00:00"),end:t.formatDate("2024-04-26T00:00:00")},inlineTemplate:{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("office365-calendar",{staticStyle:{color:"inherit","text-decoration":"none"},attrs:{id:"office365-calendar"}},[t._v("\n              Add to Office365 outlook\n            ")])},staticRenderFns:[]}})],1)],1)]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.$emit("close")}}},[t._v("\n        "+t._s(t.$t("close"))+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VDialog:m.a,VDivider:_.a,VIcon:T.a,VSpacer:h.a})}}]);