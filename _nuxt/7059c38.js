(window.webpackJsonp=window.webpackJsonp||[]).push([[50,25],{511:function(t,e,n){"use strict";(function(t){var r=n(11);n(47),n(7);e.a={props:{},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,e.next=3,r("pages/"+n.i18n.locale+"/webinars").fetch();case 3:return c=e.sent,e.next=6,r("webinars/"+n.i18n.locale).sortBy("date","desc").fetch();case 6:return l=e.sent,o=l.filter((function(t){return new Date(t.date)>Date.now()})).reverse(),e.abrupt("return",{webinarText:c,webinars:l,upcomingWebinars:o});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{model:null}},computed:{},created:function(){this.$vuetify.breakpoint.smAndDown&&t.env.BROWSER&&this.$vuetify.goTo(0)},mounted:function(){},methods:{}}}).call(this,n(174))},518:function(t,e,n){"use strict";var r=n(1),c=n(98),l=n(5),o=n(10),d=n(2),m=n.n(d).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(r.a)({},this.activeClass,this.isActive)}),element):(Object(o.c)("v-item should only contain a single element",this),element)):(Object(o.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(l.a)(m,Object(c.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(l.a)(m,Object(c.a)("slideGroup")).extend({name:"v-slide-item"})},535:function(t,e,n){"use strict";n.r(e);n(20);var r={props:{index:{type:Number,default:0},total:{type:Number,default:15},item:{type:Object,default:function(){}},active:{type:Boolean,default:!1}},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{}},c=n(36),l=n(46),o=n.n(l),d=n(215),m=n(211),v=n(88),f=n(165),h=n(464),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"my-4 pa-4 d-flex flex-column",class:{"ml-4":0===t.index,"mr-4 ":t.index!==t.total},attrs:{"max-width":"400"}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:t.item.image}}),t._v(" "),n("v-card-title",[t._v(t._s(t.item.title))]),t._v(" "),n("v-card-subtitle",{staticClass:"pb-0"},[t._v("\n    "+t._s(new Date(t.item.date).toLocaleDateString(t.$i18n.locale,{timezone:"UTC"})+" - "+new Date(t.item.date).toLocaleTimeString(t.$i18n.locale,{hour:"2-digit",minute:"2-digit",timezone:"UTC"}))+"\n  ")]),t._v(" "),n("v-card-text",{staticClass:"text--primary"},[t._v("\n    "+t._s(t.item.subtitle)+"\n    ")]),t._v(" "),n("v-card-actions",{staticClass:"flex-row"},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary",nuxt:"",to:t.localePath("/webinars/"+t.item.slug)}},[t._v(t._s(t.$t("learn-more")))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VImg:f.a,VSpacer:h.a})},631:function(t,e,n){"use strict";n.r(e);var r=n(511).a,c=n(36),l=n(46),o=n.n(l),d=n(459),m=n(460),v=n(142),f=n(518),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0"}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("h1",{staticClass:"mt-12"},[t._v(t._s(t.webinarText.title))]),t._v(" "),n("nuxt-content",{staticClass:"mt-6",attrs:{document:t.webinarText}})],1)],1)],1),t._v(" "),n("section",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[n("v-slide-group",{staticClass:"my-4",class:t.upcomingWebinars.length>3?"mx-n16":"mx-n4",attrs:{"show-arrows":"","center-active":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.upcomingWebinars,(function(e,r){return n("v-slide-item",{key:e.title,scopedSlots:t._u([{key:"default",fn:function(c){var l=c.active;return[n("WebinarItem",{attrs:{item:e,active:l,index:r,total:t.webinars.length}})]}}],null,!0)})})),1)],1)],1)],1),t._v(" "),n("WebinarList")],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{WebinarItem:n(535).default,WebinarList:n(594).default}),o()(component,{VCol:d.a,VRow:m.a,VSlideGroup:v.b,VSlideItem:f.a})}}]);