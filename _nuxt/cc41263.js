(window.webpackJsonp=window.webpackJsonp||[]).push([[50,25],{517:function(t,e,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("158a1398",content,!0,{sourceMap:!1})},518:function(t,e,n){var r=n(16)((function(i){return i[1]}));r.push([t.i,'.nuxt-content hr{border:solid;border-width:thin 0 0;display:block;flex:1 1 0px;height:0;max-height:0;max-width:100%;transition:inherit}.nuxt-content h2,h2{margin-bottom:10px;margin-top:30px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-size:30px;font-weight:600;line-height:normal;margin-bottom:20px;margin-top:10px}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content p,.nuxt-content ul li,p{color:rgba(0,0,0,.6);flex:1 1 auto;font-family:"Lato",sans-serif;font-family:"Lato",sans-serif!important;font-size:16px;font-weight:400!important;letter-spacing:.0071428571em!important;line-height:1.375rem!important;max-width:100%;word-break:normal}.nuxt-content ul{margin-bottom:20px}.v-item--disabled,.v-item--disabled *{pointer-events:none}',""]),r.locals={},t.exports=r},528:function(t,e,n){"use strict";(function(t){var r=n(12);n(50),n(7);e.a={props:{},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.$content,e.next=3,r("pages/"+n.i18n.locale+"/webinars").fetch();case 3:return o=e.sent,e.next=6,r("webinars/"+n.i18n.locale).sortBy("date","desc").fetch();case 6:return l=e.sent,c=l.filter((function(t){return new Date(t.date)>Date.now()})).reverse(),e.abrupt("return",{webinarText:o,webinars:l,upcomingWebinars:c});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{model:null}},computed:{},created:function(){this.$vuetify.breakpoint.smAndDown&&t.env.BROWSER&&this.$vuetify.goTo(0)},mounted:function(){},methods:{}}}).call(this,n(179))},551:function(t,e,n){"use strict";n.r(e);var r=n(219),o=n(216),l=n(90),c=n(170),d=n(475),m=(n(21),{props:{index:{type:Number,default:0},total:{type:Number,default:15},item:{type:Object,default:function(){}},active:{type:Boolean,default:!1}},data:function(){return{}},computed:{},created:function(){},mounted:function(){},methods:{}}),f=n(37),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"my-4 pa-4 d-flex flex-column",class:{"ml-4":0===t.index,"mr-4 ":t.index!==t.total},attrs:{"max-width":"400"}},[e(c.a,{staticClass:"white--text align-end",attrs:{src:t.item.image}}),t._v(" "),e(l.d,[t._v(t._s(t.item.title))]),t._v(" "),e(l.b,{staticClass:"pb-0"},[t._v("\n    "+t._s(new Date(t.item.date).toLocaleDateString(t.$i18n.locale,{timezone:"UTC"})+" - "+new Date(t.item.date).toLocaleTimeString(t.$i18n.locale,{hour:"2-digit",minute:"2-digit",timezone:"UTC"}))+"\n  ")]),t._v(" "),e(l.c,{staticClass:"text--primary"},[t._v("\n    "+t._s(t.item.subtitle)+"\n    ")]),t._v(" "),e(l.a,{staticClass:"flex-row"},[e(d.a),t._v(" "),e(r.a,{attrs:{color:"primary",nuxt:"",to:t.localePath("/webinars/"+t.item.slug)}},[t._v(t._s(t.$t("learn-more")))])],1)],1)}),[],!1,null,null,null);e.default=component.exports},555:function(t,e,n){"use strict";n(5),n(4),n(7),n(8),n(9);var r=n(1),o=(n(517),n(98)),l=n(6),c=n(13),d=n(2);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h=n.n(d).a.extend({props:{activeClass:String,value:{required:!1},disabled:Boolean},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(r.a)(Object(r.a)({},this.activeClass,this.isActive),"v-item--disabled",this.disabled)}),this.disabled&&(element.data.attrs=f(f({},element.data.attrs),{},{tabindex:-1})),element):(Object(c.c)("v-item should only contain a single element",this),element)):(Object(c.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(l.a)(h,Object(o.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(l.a)(h,Object(o.a)("slideGroup")).extend({name:"v-slide-item"})},643:function(t,e,n){"use strict";n.r(e);var r=n(480),o=n(479),l=n(143),c=n(555),d=n(528).a,m=n(37),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown},staticStyle:{"background-color":"#fff1d0"}},[e(o.a,{attrs:{justify:"center"}},[e(r.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e("h1",{staticClass:"mt-12"},[t._v(t._s(t.webinarText.title))]),t._v(" "),e("nuxt-content",{staticClass:"mt-6",attrs:{document:t.webinarText}})],1)],1)],1),t._v(" "),e("section",[e(o.a,{attrs:{justify:"center"}},[e(r.a,{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[e(l.b,{staticClass:"my-4",class:t.upcomingWebinars.length>3?"mx-n16":"mx-n4",attrs:{"show-arrows":"","center-active":""},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.upcomingWebinars,(function(n,r){return e(c.a,{key:n.title,scopedSlots:t._u([{key:"default",fn:function(o){var l=o.active;return[e("WebinarItem",{attrs:{item:n,active:l,index:r,total:t.webinars.length}})]}}],null,!0)})})),1)],1)],1)],1),t._v(" "),e("WebinarList")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{WebinarItem:n(551).default,WebinarList:n(606).default})}}]);