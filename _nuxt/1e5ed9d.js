(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{455:function(e,t,r){var content=r(456);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("b1bed018",content,!0,{sourceMap:!1})},456:function(e,t,r){(t=r(12)(!1)).push([e.i,'.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.subtitle{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-breadcrumbs,.v-card__text{font-family:"Lato",sans-serif}.nuxt-content li,.nuxt-content p,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal}.theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}',""]),e.exports=t},474:function(e,t,r){"use strict";r.r(t);r(44);var n=r(14),o={asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,n=e.$content,o=e.params,t.next=3,n(r.i18n.locale+"/news",o.slug).fetch();case 3:return c=t.sent,t.abrupt("return",{post:c});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{}},created:function(){}},c=r(40),l=r(37),d=r.n(l),m=(r(11),r(8),r(7),r(4),r(9),r(1)),f=(r(455),r(48)),h=r(5);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=Object(h.a)(f.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(m.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,x(x({},data),{},{attrs:x(x({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),O=r(0),w=Object(O.h)("v-breadcrumbs__divider","li"),_=r(16);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var P=Object(h.a)(_.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(w,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(y,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}}),k=r(176),C=r(78),D=r(396),$=r(167),S=r(397),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"ma-3",attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[r("v-breadcrumbs",{staticClass:"ml-4",attrs:{nuxt:"",items:[{text:e.$t("navigation.news"),disabled:!1,href:e.localePath("/news")},{text:e.post.title,disabled:!0,href:"breadcrumbs_link_1"}]},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])}),e._v(" "),r("v-card",{staticClass:"pa-6"},[r("v-card-title",[r("h1",[e._v("\n          "+e._s(e.post.title)+"\n        ")])]),e._v(" "),r("v-card-subtitle",[e._v("\n        "+e._s(e.post.subtitle)+"\n      ")]),e._v(" "),r("v-card-text",[r("nuxt-content",{attrs:{document:e.post}})],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBreadcrumbs:P,VCard:k.a,VCardSubtitle:C.b,VCardText:C.c,VCardTitle:C.d,VCol:D.a,VIcon:$.a,VRow:S.a})}}]);