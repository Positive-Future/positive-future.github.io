(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{600:function(t,n,r){"use strict";r.r(n);var o={props:{submitting:{type:Boolean,default:!1},error:{type:Boolean,default:!1},valid:{type:Boolean,default:!1}},data:function(){return{dialog:!1}}},e=r(36),l=r(46),c=r.n(l),d=r(214),v=r(210),_=r(87),m=r(463),f=r(443),y=r(212),V=r(464),component=Object(e.a)(o,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"text-center"},[r("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,e=n.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",disabled:!t.valid}},"v-btn",e,!1),o),[t._v("\n        "+t._s(t.$t("form.submit")))])]}}]),model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline my-4"},[t._v("\n        "+t._s(t.submitting?t.$t("form.application.dialog.submitting"):t.$t("form.application.dialog.title"))+"\n      ")]),t._v(" "),t.submitting||t.error?t._e():r("v-card-text",[t._v("\n        "+t._s(t.$t("form.application.dialog.text"))+"\n      ")]),t._v(" "),t.error&&!t.submitting?r("v-card-text",[t._v("\n        "+t._s(t.$t("form.application.dialog.error"))+"\n      ")]):t._e(),t._v(" "),t.submitting?r("v-card-text",[r("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):t._e(),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{on:{click:function(n){t.dialog=!1}}},[t._v("\n          "+t._s(t.$t("form.application.dialog.cancel"))+"\n        ")]),t._v(" "),r("v-btn",{attrs:{color:"primary",loading:t.submitting,type:"submit"},on:{click:function(n){return t.$emit("submit")}}},[t._v("\n          "+t._s(t.$t("form.application.dialog.submit"))+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VDialog:m.a,VDivider:f.a,VProgressLinear:y.a,VSpacer:V.a})}}]);