(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{697:function(t,e,n){var content=n(754);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("66c37aae",content,!0,{sourceMap:!1})},753:function(t,e,n){"use strict";n(697)},754:function(t,e,n){var o=n(20)((function(i){return i[1]}));o.push([t.i,".name{background-color:#000;color:#fff}",""]),o.locals={},t.exports=o},796:function(t,e,n){"use strict";n.r(e);var o=n(610),r=n(609),c=n(15),l=(n(61),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,o=t.$content,e.next=3,o("/pages/"+n.i18n.locale+"/sab").fetch();case 3:return r=e.sent,e.next=6,o("sab/"+n.i18n.locale+"/2024").fetch();case 6:return c=e.sent,e.abrupt("return",{sab:r,sabList:c});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{expanded:[0,1,2,3,4]}},mounted:function(){},methods:{}}),f=(n(753),n(52)),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0"}},[e(r.a,{attrs:{justify:"center"}},[e(o.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("h1",{staticClass:"mt-12"},[t._v("\n          "+t._s(t.sab.title)+"\n        ")]),t._v(" "),e("nuxt-content",{attrs:{document:t.sab}})],1)],1)],1),t._v(" "),e("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown}},[e(r.a,{attrs:{justify:"center"}},[e(o.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[0===t.sabList.length?e("div",{staticClass:"headline mt-12"},[t._v("\n          "+t._s(t.$t("we-will-soon-release-the-full-list-of-positive-future-scientific-advisory-board-members"))+"\n        ")]):t._e(),t._v(" "),e("div",{staticClass:"headline mt-12"},[t._v("\n          "+t._s(t.$t("2024-edition"))+"\n        ")]),t._v(" "),t._l(t.sabList,(function(t,n){return[e("people-block",{key:n,attrs:{item:t,sab:!0}})]})),t._v(" "),e("div",{staticClass:"headline mt-12 mb-2"},[t._v("\n          "+t._s(t.$t("2021-edition"))+"\n        ")]),t._v(" "),e("nuxt-link",{attrs:{nuxt:"",to:t.localePath("/contest/2021_edition#sab")}},[t._v(t._s(t.$t("check-positive-future-2021-scientific-advisory-board-members")))])],2)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PeopleBlock:n(671).default})}}]);