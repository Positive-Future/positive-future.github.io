(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{488:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1449a06a",content,!0,{sourceMap:!1})},491:function(t,e,n){"use strict";n(488)},492:function(t,e,n){var o=n(16)((function(i){return i[1]}));o.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.nuxt-content h2,h2{margin-bottom:10px;margin-top:30px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-size:30px;font-weight:600;line-height:normal;margin-bottom:20px;margin-top:10px}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{color:rgba(0,0,0,.6);flex:1 1 auto;font-family:"Lato",sans-serif;font-family:"Lato",sans-serif!important;font-size:16px;font-weight:400!important;letter-spacing:.0071428571em!important;line-height:1.375rem!important;max-width:100%;word-break:normal}.nuxt-content ul{margin-bottom:20px}',""]),o.locals={},t.exports=o},493:function(t,e,n){"use strict";n.r(e);var o=n(509),r=n(99),l={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0,ready:!1}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting},iframeLoded:function(){}}},c=(n(491),n(37)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{directives:[{def:r.a,name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[e(o.a,{staticClass:"d-flex",attrs:{type:"image"}}),t._v(" "),e("iframe",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{title:"Youtube video",src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{load:function(e){t.ready=!0}}})],1)}),[],!1,null,null,null);e.default=component.exports},554:function(t,e,n){"use strict";n.r(e);var o=n(219),r=n(216),l=n(90),c=n(503),m=n(208),d=n(475),f=n(477),v=(n(25),n(19),{props:{item:{type:Object,default:function(){}}},data:function(){return{}},computed:{},mounted:function(){},methods:{}}),_=n(37),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"px-6 pb-6 pt-1"},[["laureates___en","laureates___fr"].includes(t.$route.name)?e(o.a,{staticClass:"float-right mt-3",attrs:{large:"",icon:""},on:{click:function(e){return t.$emit("close")}}},[e(m.a,{attrs:{large:""}},[t._v("mdi-close")])],1):t._e(),t._v(" "),e(l.b,[t._v(t._s(t.$t("laureates."+t.item.category)))]),t._v(" "),e(l.d,{staticClass:"pt-0"},[t._v("\n    "+t._s(t.item.title)+" (\n    "),t._l(t.item.team,(function(n,o){return e("span",{key:n.firstname+n.lastname},[t._v(t._s(n.lastname.toUpperCase()+" "+n.firstname)),o<t.item.team.length-1?[t._v(", ")]:t._e()],2)})),t._v(")\n    "),e(c.a,{staticClass:"ma-2",attrs:{color:"primary"}},[t._v("\n      "+t._s(t.$t("resources.types."+t.item.type))+"\n    ")])],2),t._v(" "),e(l.c,[e("nuxt-content",{attrs:{document:t.item}})],1),t._v(" "),e("YoutubeEmbedded",{staticClass:"mb-9",attrs:{yt:"en"===t.$i18n.locale?"1efqN3kp1NE":"-7Fd0Vk8jHM"}}),t._v(" "),["laureates___en","laureates___fr"].includes(t.$route.name)?e(l.a,[e(d.a),t._v(" "),e(f.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({attrs:{icon:"",to:t.localePath("/laureates/"+t.item.slug)}},"v-btn",l,!1),r),[e(m.a,[t._v("mdi-open-in-new")])],1)]}}],null,!1,3185672306)},[t._v(" "),e("span",{domProps:{innerHTML:t._s(t.$t("open-the-webinar-page"))}})])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{YoutubeEmbedded:n(493).default})}}]);