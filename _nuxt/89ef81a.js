(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{489:function(t,e,r){var content=r(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("05ce56f8",content,!0,{sourceMap:!1})},496:function(t,e,r){"use strict";r(489)},497:function(t,e,r){var o=r(16)((function(i){return i[1]}));o.push([t.i,".frame[data-v-16bc5540]{display:flex;height:100%;overflow:hidden;position:relative;width:100%}.overlay[data-v-16bc5540]{bottom:0;display:flex;flex-direction:column;justify-content:space-between;left:0;padding-bottom:2rem;padding-right:1.9rem;position:absolute;right:0;top:0;z-index:2}.v-image[data-v-16bc5540]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-16bc5540]{opacity:.8;transform:scale(1.1)}",""]),o.locals={},t.exports=o},498:function(t,e,r){"use strict";r.r(e);var o=r(170),n=r(59),c=(r(21),{props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:"/img/header-bg.jpg"}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vh sm:100vh md:100vh lg:100vh xl:100vh",modifiers:{format:"webp",quality:70,height:this.height}})}},mounted:function(){}}),l=(r(496),r(37)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"frame"},[e("div",{staticClass:"overlay"}),t._v(" "),t.src?e(o.a,t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size}},"v-img",t.$attrs,!1),[e("span",{attrs:{id:"caption-content"}},[t._t("caption"),t._v(" "),e("br")],2)]):e(n.a)],1)}),[],!1,null,"16bc5540",null);e.default=component.exports}}]);