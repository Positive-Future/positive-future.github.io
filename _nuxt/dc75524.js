(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{543:function(t,n,e){var content=e(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(17).default)("5a9224f2",content,!0,{sourceMap:!1})},583:function(t,n,e){"use strict";e(543)},584:function(t,n,e){var r=e(16)((function(i){return i[1]}));r.push([t.i,".logos[data-v-c56beb84]{position:relative}.logo_container1[data-v-c56beb84]{align-items:center;background-color:#fff;height:160px;left:30px;padding:30px;position:absolute;top:60px;width:160px}.logo_container1 .logo[data-v-c56beb84]{height:100px;width:100px}.logo_container2[data-v-c56beb84]{align-items:center;background-color:#fff;height:160px;left:150px;padding:30px;position:absolute;top:350px;width:160px}.logo_container2 .logo[data-v-c56beb84]{height:100px;width:100px}.line1[data-v-c56beb84]{height:160px;left:108px}.line1[data-v-c56beb84],.line2[data-v-c56beb84]{background:#fff;margin:6px 0;position:absolute;top:-20px;width:4px}.line2[data-v-c56beb84]{height:380px;left:228px}",""]),r.locals={},t.exports=r},627:function(t,n,e){"use strict";e.r(n);var r=e(480),o=e(170),c=e(479),l=e(12),d=(e(50),e(55),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function n(){var e,r,o,c,l,d,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.app,r=t.$content,n.next=3,r("organizers/"+e.i18n.locale).fetch();case 3:return o=n.sent,c=o.find((function(t){return"ias"===t.slug})),l=o.find((function(t){return"2100"===t.slug})),d=o.find((function(t){return"inrs"===t.slug})),f=o.find((function(t){return"anact"===t.slug})),n.abrupt("return",{organizers:o,ias:c,fundation:l,inrs:d,anact:f});case 9:case"end":return n.stop()}}),n)})))()},data:function(){return{}},mounted:function(){},methods:{}}),f=d,_=(e(583),e(37)),component=Object(_.a)(f,(function(){var t=this,n=t._self._c;return n("div",[n("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0"}},[n(c.a,{attrs:{justify:"center","no-gutters":""}},[n(r.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n(c.a,{attrs:{"no-gutters":""}},[n(r.a,{staticClass:"pa-3",attrs:{cols:"12",md:"8"}},[n("h1",{staticClass:"mt-8"},[t._v("\n              "+t._s(t.ias.title)+"\n            ")]),t._v(" "),n("p",[n("nuxt-content",{attrs:{document:t.ias}}),t._v(" "),n("a",{attrs:{href:t.ias.url,target:"_blank",rel:"noopener noreferrer",title:t.ias.title}},[t._v(t._s(t.$t("misc.ui.more")))])],1),t._v(" "),n("h1",{staticClass:"mt-8 mb-4"},[t._v("\n              "+t._s(t.fundation.title)+"\n            ")]),t._v(" "),n("p",[n("nuxt-content",{attrs:{document:t.fundation}}),t._v(" "),n("a",{attrs:{href:t.fundation.url,target:"_blank",rel:"noopener noreferrer",title:t.fundation.title}},[t._v(t._s(t.$t("misc.ui.more")))])],1)]),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n(r.a,{attrs:{md:"4"}},[n("div",{staticClass:"logos"},[n("div",{staticClass:"line1"}),t._v(" "),n("div",{staticClass:"logo_container1 rounded-circle"},[n(o.a,{staticClass:"logo",attrs:{src:t.ias.logo}})],1),t._v(" "),n("div",{staticClass:"line2"}),t._v(" "),n("div",{staticClass:"logo_container2 rounded-circle"},[n(o.a,{staticClass:"logo",attrs:{src:t.fundation.logo}})],1)])]):t._e()],1)],1)],1)],1),t._v(" "),n("section",{staticClass:"px-3",class:{"px-3":t.$vuetify.breakpoint.smAndDown}},[n(c.a,{attrs:{justify:"center"}},[n(r.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n(c.a,[t.$vuetify.breakpoint.mdAndUp?n(r.a,{attrs:{cols:"4"}},[n(o.a,{staticClass:"logo mt-16",attrs:{src:t.anact.logo,contain:"","max-width":"255","max-height":"200px"}})],1):t._e(),t._v(" "),n(r.a,{attrs:{cols:"12",md:"8"}},[n("p",{staticClass:"mt-10 mb-0"},[t._v(t._s(t.$t("misc.ui.with_the_support_of")))]),t._v(" "),n("h1",{staticClass:"mt-4 mb-4"},[t._v("\n              "+t._s(t.anact.title)+"\n            ")]),t._v(" "),n("p",{staticClass:"mb-3"},[n("nuxt-content",{attrs:{document:t.anact}}),t._v(" "),n("a",{attrs:{href:t.anact.url,target:"_blank",rel:"noopener noreferrer",title:t.anact.title}},[t._v(t._s(t.$t("misc.ui.more")))])],1)]),t._v(" "),t.$vuetify.breakpoint.mdAndUp?n(r.a,{attrs:{cols:"4"}},[n(o.a,{staticClass:"logo",attrs:{src:t.inrs.logo,"max-width":"255","max-height":"200px"}})],1):t._e(),t._v(" "),n(r.a,{attrs:{cols:"12",md:"8"}},[n("h1",{staticClass:"mt-4 mb-4"},[t._v("\n              "+t._s(t.inrs.title)+"\n            ")]),t._v(" "),n("p",{staticClass:"mb-3"},[n("nuxt-content",{attrs:{document:t.inrs}}),t._v(" "),n("a",{attrs:{href:t.inrs.url,target:"_blank",rel:"noopener noreferrer",title:t.inrs.title}},[t._v(t._s(t.$t("misc.ui.more")))])],1)])],1)],1)],1)],1)])}),[],!1,null,"c56beb84",null);n.default=component.exports}}]);