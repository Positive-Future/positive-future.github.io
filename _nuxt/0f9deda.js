(window.webpackJsonp=window.webpackJsonp||[]).push([[22,23],{489:function(t,e,r){var content=r(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("05ce56f8",content,!0,{sourceMap:!1})},496:function(t,e,r){"use strict";r(489)},497:function(t,e,r){var n=r(16)((function(i){return i[1]}));n.push([t.i,".frame[data-v-16bc5540]{display:flex;height:100%;overflow:hidden;position:relative;width:100%}.overlay[data-v-16bc5540]{bottom:0;display:flex;flex-direction:column;justify-content:space-between;left:0;padding-bottom:2rem;padding-right:1.9rem;position:absolute;right:0;top:0;z-index:2}.v-image[data-v-16bc5540]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-16bc5540]{opacity:.8;transform:scale(1.1)}",""]),n.locals={},t.exports=n},498:function(t,e,r){"use strict";r.r(e);var n=r(170),o=r(59),c=(r(21),{props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:"/img/header-bg.jpg"}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vh sm:100vh md:100vh lg:100vh xl:100vh",modifiers:{format:"webp",quality:70,height:this.height}})}},mounted:function(){}}),l=(r(496),r(37)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"frame"},[e("div",{staticClass:"overlay"}),t._v(" "),t.src?e(n.a,t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size}},"v-img",t.$attrs,!1),[e("span",{attrs:{id:"caption-content"}},[t._t("caption"),t._v(" "),e("br")],2)]):e(o.a)],1)}),[],!1,null,"16bc5540",null);e.default=component.exports},654:function(t,e,r){"use strict";r.r(e);var n=r(216),o=r(90),c=r(589),l=r(632),d={props:{item:{type:Object,default:function(){}}},computed:{dateAgo:function(){var t=new Date(this.item.createdAt);return Object(l.a)(t,new Date)+" ago"}}},f=r(37),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(c.a,{scopedSlots:t._u([{key:"default",fn:function(r){var c=r.hover;return[e(n.a,{attrs:{nuxt:"",to:t.localePath("/news/"+t.item.slug),color:"#FFF1D0",elevation:c?12:2}},[e("OptimizedImage",{attrs:{src:t.item.image}}),t._v(" "),e(o.d,{staticStyle:{"word-break":"normal"}},[t._v(" "+t._s(t.item.title)+" ")]),t._v(" "),e(o.c,[t._v("\n      "+t._s(t.item.subtitle)+"\n    ")])],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{OptimizedImage:r(498).default})}}]);