(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{455:function(t,e,n){"use strict";n.r(e);var r={props:{yt:{type:String,default:""}},data:function(){return{isIntersecting:!0}},mounted:function(){},methods:{onIntersect:function(t,e){this.isIntersecting=t[0].isIntersecting}}},o=n(43),c=n(205),l=n.n(c),d=n(92),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"intersect",rawName:"v-intersect",value:t.onIntersect,expression:"onIntersect"}],staticStyle:{position:"relative","padding-bottom":"56.25%",height:"0"}},[n("iframe",{ref:"ytPlayer",staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:t.isIntersecting?"https://www.youtube.com/embed/"+t.yt:"",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,null,null);e.default=component.exports;l()(component,{Intersect:d.a})}}]);