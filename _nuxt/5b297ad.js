(window.webpackJsonp=window.webpackJsonp||[]).push([[36,19],{471:function(t,e,n){var content=n(474);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("384d8948",content,!0,{sourceMap:!1})},472:function(t,e,n){var content=n(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("4409da72",content,!0,{sourceMap:!1})},473:function(t,e,n){"use strict";n(471)},474:function(t,e,n){var r=n(14)(!1);r.push([t.i,'.layout-enter-active,.layout-leave-active{transition:opacity .3s}.layout-enter,.layout-leave-active{opacity:0}.page-enter-active,.page-leave-active{transition:opacity .3s}.page-enter,.page-leave-active{opacity:0}.fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal;color:rgba(0,0,0,.6);font-family:"Lato",sans-serif!important;font-size:.875rem!important;font-weight:400!important;line-height:1.375rem!important;letter-spacing:.0071428571em!important}.nuxt-content ul{margin-bottom:20px}',""]),t.exports=r},475:function(t,e,n){"use strict";n.r(e);var r={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0,ready:!1}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting},iframeLoded:function(){}}},o=(n(473),n(36)),c=n(47),l=n.n(c),d=n(497),f=n(226),m=n.n(f),v=n(99),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("v-skeleton-loader",{staticClass:"d-flex",attrs:{type:"image"}}),t._v(" "),n("iframe",{directives:[{name:"show",rawName:"v-show",value:t.ready,expression:"ready"}],staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{title:"Youtube video",src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},on:{load:function(e){t.ready=!0}}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VSkeletonLoader:d.a}),m()(component,{Intersect:v.a})},477:function(t,e,n){"use strict";n(472)},478:function(t,e,n){var r=n(14)(!1);r.push([t.i,".frame[data-v-7e3cff26]{display:flex;position:relative;overflow:hidden;width:100%;height:100%}.overlay[data-v-7e3cff26]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;z-index:2;padding-bottom:2rem;padding-right:1.9rem;justify-content:space-between}.v-image[data-v-7e3cff26]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-7e3cff26]{transform:scale(1.1);opacity:.8}",""]),t.exports=r},479:function(t,e,n){"use strict";n.r(e);n(20);var r={props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:"/img/header-bg.jpg"}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70,height:this.height}})}},mounted:function(){}},o=(n(477),n(36)),c=n(47),l=n.n(c),d=n(165),f=n(59),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"frame"},[n("div",{staticClass:"overlay"}),t._v(" "),t.src?n("v-img",t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size}},"v-img",t.$attrs,!1),[n("span",{attrs:{id:"caption-content"}},[t._t("caption"),t._v(" "),n("br")],2)]):n("v-sheet")],1)}),[],!1,null,"7e3cff26",null);e.default=component.exports;l()(component,{VImg:d.a,VSheet:f.a})},597:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(48),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,o=t.params,e.next=3,r(n.i18n.locale+"/news",o.slug).fetch();case 3:return c=e.sent,e.abrupt("return",{post:c});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{}},created:function(){}}),c=n(36),l=n(47),d=n.n(l),f=n(209),m=n(525),v=n(211),h=n(89),x=n(484),y=n(458),_=n(442),w=n(202),k=n(459),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("v-breadcrumbs",{staticClass:"ml-n3",attrs:{nuxt:"",items:[{text:t.$t("navigation.news"),disabled:!1,href:t.localePath("/news")},{text:t.post.title,disabled:!0,href:"breadcrumbs_link_1"}]},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])}),t._v(" "),n("v-card",{staticClass:"px-6 pb-6 pt-1"},[n("v-card-title",[n("h1",[t._v("\n          "+t._s(t.post.title)+"\n        ")])]),t._v(" "),n("v-card-subtitle",[t._v("\n        "+t._s(t.post.subtitle)+"\n      ")]),t._v(" "),t.post.file?n("v-chip",{staticClass:"ma-2",attrs:{link:"",href:t.post.file,to:t.post.file,target:"_blank"}},[n("v-avatar",{attrs:{left:""}},[n("v-icon",[t._v("mdi-paperclip")])],1),t._v("\n        "+t._s(t.$t("misc.ui.download"))+"\n      ")],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[t.post.youtube_video_id?n("YoutubeEmbedded",{staticClass:"mb-9",attrs:{yt:t.post.youtube_video_id}}):t.post.image?n("OptimizedImage",{attrs:{src:t.post.image}}):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.post}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{YoutubeEmbedded:n(475).default,OptimizedImage:n(479).default}),d()(component,{VAvatar:f.a,VBreadcrumbs:m.a,VCard:v.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VChip:x.a,VCol:y.a,VDivider:_.a,VIcon:w.a,VRow:k.a})}}]);