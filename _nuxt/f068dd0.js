(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{472:function(t,e,r){var content=r(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("4409da72",content,!0,{sourceMap:!1})},477:function(t,e,r){"use strict";r(472)},478:function(t,e,r){var o=r(14)(!1);o.push([t.i,".frame[data-v-7e3cff26]{display:flex;position:relative;overflow:hidden;width:100%;height:100%}.overlay[data-v-7e3cff26]{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;z-index:2;padding-bottom:2rem;padding-right:1.9rem;justify-content:space-between}.v-image[data-v-7e3cff26]{transition:all .3s ease-in-out;z-index:1}.overlay:hover+.v-image[data-v-7e3cff26]{transform:scale(1.1);opacity:.8}",""]),t.exports=o},479:function(t,e,r){"use strict";r.r(e);r(20);var o={props:{ratio:{type:Number,default:16/9},height:{type:[Number,String],default:500},src:{type:String,default:"/img/header-bg.jpg"}},computed:{_srcset:function(){return this.$img.getSizes(this.src,{sizes:"xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",modifiers:{format:"webp",quality:70,height:this.height}})}},mounted:function(){}},n=(r(477),r(36)),c=r(47),l=r.n(c),f=r(165),d=r(59),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"frame"},[r("div",{staticClass:"overlay"}),t._v(" "),t.src?r("v-img",t._b({attrs:{"aspect-ratio":t.ratio,"lazy-src":t.$img(t.src,{width:10,quality:70}),src:t.$img(t.src,{height:t.height,quality:70}),srcset:t._srcset.srcset,sizes:t._srcset.size}},"v-img",t.$attrs,!1),[r("span",{attrs:{id:"caption-content"}},[t._t("caption"),t._v(" "),r("br")],2)]):r("v-sheet")],1)}),[],!1,null,"7e3cff26",null);e.default=component.exports;l()(component,{VImg:f.a,VSheet:d.a})}}]);