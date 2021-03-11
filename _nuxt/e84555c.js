(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{507:function(t,e,o){"use strict";o.r(e);var n={props:{submitting:{type:Boolean,default:!1},error:{type:Boolean,default:!1},valid:{type:Boolean,default:!1}},data:function(){return{dialog:!1}}},r=o(41),l=o(37),c=o.n(l),m=o(182),v=o(178),f=o(79),d=o(429),_=o(412),$=o(180),h=o(430),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center"},[o("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"primary",disabled:!t.valid}},"v-btn",r,!1),n),[t._v("\n        "+t._s(t.$t("form.submit")))])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-card-title",{staticClass:"headline my-4"},[t._v("\n        "+t._s(t.submitting?t.$t("form.application.dialog.submitting"):t.$t("form.application.dialog.title"))+"\n      ")]),t._v(" "),t.submitting||t.error?t._e():o("v-card-text",[t._v("\n        "+t._s(t.$t("form.application.dialog.text"))+"\n      ")]),t._v(" "),t.error&&!t.submitting?o("v-card-text",[t._v("\n        "+t._s(t.$t("form.application.dialog.error"))+"\n      ")]):t._e(),t._v(" "),t.submitting?o("v-card-text",[o("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):t._e(),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("\n          "+t._s(t.$t("form.application.dialog.cancel"))+"\n        ")]),t._v(" "),o("v-btn",{attrs:{color:"primary",loading:t.submitting,type:"submit"},on:{click:function(e){return t.$emit("submit")}}},[t._v("\n          "+t._s(t.$t("form.application.dialog.submit"))+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VDialog:d.a,VDivider:_.a,VProgressLinear:$.a,VSpacer:h.a})},508:function(t,e,o){"use strict";o.r(e);var n={props:{team:{type:Array,default:function(){return[]}}},data:function(){var t=this;return{firstname:"",lastname:"",nameRules:[function(e){return!!e||0===e.length||t.$t("form.application.validation.required",{0:t.$t("form.application.lastname").toLowerCase()})},function(e){return e.length<=45||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.lastname").toLowerCase(),1:"45"})},function(e){return e.length>=2||0===e.length||t.$t("form.application.validation.moreThan",{0:t.$t("form.application.lastname").toLowerCase(),1:"2"})}],firstnameRules:[function(e){return!!e||0===e.length||t.$t("form.application.validation.required",{0:t.$t("form.application.firstname").toLowerCase()})},function(e){return e.length<=45||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.firstname").toLowerCase(),1:"45"})},function(e){return e.length>=2||0===e.length||t.$t("form.application.validation.moreThan",{0:t.$t("form.application.firstname").toLowerCase(),1:"2"})}]}},methods:{}},r=o(41),l=o(37),c=o.n(l),m=o(182),v=o(169),f=o(439),d=o(428),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex"},[o("v-text-field",{attrs:{rules:t.firstnameRules,counter:45,label:t.$t("form.application.firstname"),outlined:"","min-width":"250px"},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}}),t._v(" "),o("v-text-field",{staticClass:"mx-3",attrs:{rules:t.nameRules,counter:45,label:t.$t("form.application.lastname"),outlined:"","min-width":"250px"},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}}),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"success",outlined:"",height:"56",disabled:!(t.firstname.length>2&&t.lastname.length>2)},on:{click:function(e){return t.$emit("add",{firstname:t.firstname,lastname:t.lastname})}}},"v-btn",r,!1),n),[o("v-icon",[t._v("mdi-plus")])],1)]}}])},[t._v(" "),o("span",[t._v(t._s(t.$t("form.application.add_team")))])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:m.a,VIcon:v.a,VTextField:f.a,VTooltip:d.a})},527:function(t,e,o){"use strict";o.r(e);o(7),o(4),o(9),o(45);var n=o(14),r=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,l=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,c={beforeRouteLeave:function(t,e,o){if(!this.hasChanged)return o();window.confirm("Do you really want to leave? You have unsaved changes!")?o():o(!1)},data:function(){var t=this;return{valid:!0,agreed:!1,error:!1,submitting:!1,uploaded:!1,action:"https://formspree.io/f/xvovjdgv",baseForm:{firstname:"gesrgesr",lastname:"gesrgesrg",email:"boitalettre9@gmail.com",title:"gesrgsrg ersgesrg",description:"gsregseg esrg esrgesr gesrg esrgesrg ersg esrg esrg esrg sres g",team:[],type:3,file:null},formats:[{text:this.$t("form.application.format.article"),value:1},{text:this.$t("form.application.format.novel"),value:2},{text:this.$t("form.application.format.video"),value:3},{text:this.$t("form.application.format.comic"),value:4}],nameRules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.lastname").toLowerCase()})},function(e){return e.length<=45||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.lastname").toLowerCase(),1:"45"})},function(e){return e.length>=2||t.$t("form.application.validation.moreThan",{0:t.$t("form.application.lastname").toLowerCase(),1:"2"})}],firstnameRules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.firstname".toLowerCase())})},function(e){return e.length<=45||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.firstname".toLowerCase()),1:"45"})},function(e){return e.length>=2||t.$t("form.application.validation.moreThan",{0:t.$t("form.application.firstname".toLowerCase()),1:"2"})}],emailRules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.email").toLowerCase()})},function(e){return l.test(e)||t.$t("form.application.validation.invalid",{0:t.$t("form.application.email").toLowerCase()})}],titleRules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.title").toLowerCase()})},function(e){return e.length<85||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.title").toLowerCase(),1:"85"})},function(e){return e.length>=2||t.$t("form.application.validation.moreThan",{0:t.$t("form.application.title").toLowerCase(),1:"2"})}],fileRules:[function(e){return!!e||!!t.baseForm.url||t.$t("form.application.validation.file")},function(e){return!e||e.size<2e9||t.$t("form.application.validation.fileSize")}],urlRules:[function(e){return!!e||!!t.baseForm.file||t.$t("form.application.validation.url")},function(e){return r.test(e)||!e||t.$t("form.application.validation.invalid",{0:t.$t("form.application.url")})}],descriptionRules:[function(e){return!!e&&e.length<=500||0===e.length||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.description").toLowerCase(),1:"500"})}],typeRules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.format.title").toLowerCase()})}],agreedRules:[function(e){return e||t.$t("form.application.validation.tos")}]}},mounted:function(){},methods:{submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("submit"),t.$refs.form.validate(),!t.valid){e.next=24;break}return console.log(t.baseForm),t.submitting=!0,data=new FormData,Object.keys(t.baseForm).forEach((function(e){return data.append(e,t.baseForm[e])})),e.prev=7,e.next=10,t.$axios.$post(t.action,data,{headers:{Accept:"application/json","content-type":"multipart/form-data","referrer-policy":"strict-origin-when-cross-origin"}});case 10:t.error=!1,t.submitting=!1,t.uploaded=!0,t.$router.push({path:t.localePath("/thank_you")}),t.form={},e.next=21;break;case 17:e.prev=17,e.t0=e.catch(7),console.log("error: ",e.t0),t.error=!0;case 21:return e.prev=21,t.submitting=!1,e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[7,17,21,24]])})))()}}},m=o(41),v=o(37),f=o.n(v),d=o(538),_=o(182),$=o(535),h=o(425),x=o(412),y=o(62),k=o(518),w=o(519),F=o(169),C=o(172),V=o(114),L=o(174),R=o(54),T=o(426),S=o(504),j=o(439),A=o(520),D=o(428),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticStyle:{"background-color":"#fff1d0"}},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[o("h1",{staticClass:"mb-8 mt-12"},[t._v("\n          "+t._s(t.$t("form.application.title"))+"\n        ")])])],1)],1),t._v(" "),o("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown}},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[o("v-form",{ref:"form",staticClass:"mt-6",attrs:{enctype:"multipart/form-data",method:"POST",action:t.action},on:{submit:function(e){return e.preventDefault(),t.submit(t.submit)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12"}},[o("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.baseForm.description.length>0,expression:"baseForm.description.length > 0"}],attrs:{text:"",border:"left"}},[o("div",[t._v(t._s(t.$t("form.application.contact")))])]),t._v(" "),o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.firstname"))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")])],1),t._v(" "),o("v-text-field",{attrs:{rules:t.firstnameRules,counter:45,outlined:"",name:"firstname"},model:{value:t.baseForm.firstname,callback:function(e){t.$set(t.baseForm,"firstname",e)},expression:"baseForm.firstname"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.lastname"))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")])],1),t._v(" "),o("v-text-field",{attrs:{rules:t.nameRules,counter:45,outlined:""},model:{value:t.baseForm.lastname,callback:function(e){t.$set(t.baseForm,"lastname",e)},expression:"baseForm.lastname"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.email"))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")])],1),t._v(" "),o("v-text-field",{attrs:{counter:85,rules:t.emailRules,outlined:""},model:{value:t.baseForm.email,callback:function(e){t.$set(t.baseForm,"email","string"==typeof e?e.trim():e)},expression:"baseForm.email"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.work_title"))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")])],1),t._v(" "),o("v-text-field",{attrs:{counter:85,rules:t.titleRules,outlined:""},model:{value:t.baseForm.title,callback:function(e){t.$set(t.baseForm,"title",e)},expression:"baseForm.title"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.description"))+"\n              ")]),t._v(" "),o("v-expand-transition",[o("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.baseForm.description.length>0,expression:"baseForm.description.length > 0"}],attrs:{text:"",border:"left"}},[o("div",[t._v(t._s(t.$t("form.application.description_alt")))])])],1),t._v(" "),o("v-textarea",{attrs:{rules:t.descriptionRules,counter:500,outlined:""},model:{value:t.baseForm.description,callback:function(e){t.$set(t.baseForm,"description",e)},expression:"baseForm.description"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline mb-1"},[t._v("\n                "+t._s(t.$t("form.application.add_team"))+"\n              ")]),t._v(" "),o("Team",{key:t.baseForm.team.length,on:{add:function(e){return t.baseForm.team.push(e)}}}),t._v(" "),o("v-list",[t._l(t.baseForm.team,(function(e,n){return[o("v-list-item",{key:n,staticClass:"pl-0"},[o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.firstname+" "+e.lastname))])],1),t._v(" "),o("v-list-item-action",[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.baseForm.team.splice(n,1)}}},"v-btn",l,!1),r),[o("v-icon",[t._v("mdi-close")])],1)]}}],null,!0)},[t._v(" "),o("span",[t._v(t._s(t.$t("form.application.remove_team")))])])],1)],1),t._v(" "),n<t.baseForm.team.length-1?o("v-divider",{key:n}):t._e()]}))],2)],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.format.title"))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")])],1),t._v(" "),o("v-select",{attrs:{items:t.formats,rules:t.typeRules,outlined:""},model:{value:t.baseForm.type,callback:function(e){t.$set(t.baseForm,"type",e)},expression:"baseForm.type"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.file",[t.baseForm.type?t.$t("form.application.format."+["title","article","novel","video","comic"][t.baseForm.type]):""]))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")]),t._v(" "),o("v-icon")],1),t._v(" "),t.baseForm.type?o("v-alert",{attrs:{text:"",border:"left"}},[o("div",[t._v("\n                  "+t._s(t.$t("form.application."+["title","article","novel","video","comic"][t.baseForm.type]+"_hint"))+"\n                ")])]):t._e(),t._v(" "),o("v-file-input",{ref:"file",attrs:{accept:3===t.baseForm.type?"video/*":".pdf",label:t.$t("form.application.browse"),rules:t.fileRules,outlined:""},on:{blur:function(e){return t.$refs.url.validate()}},model:{value:t.baseForm.file,callback:function(e){t.$set(t.baseForm,"file",e)},expression:"baseForm.file"}}),t._v(" "),o("v-text-field",{ref:"url",attrs:{rules:t.urlRules,label:t.$t("form.application.url"),outlined:""},on:{blur:function(e){return t.$refs.file.validate()}},scopedSlots:t._u([{key:"prepend",fn:function(){return[o("div",{staticClass:"overline",attrs:{"min-width":"24px"}},[t._v("\n                    "+t._s(t.$t("misc.ui.or"))+"\n                  ")])]},proxy:!0}]),model:{value:t.baseForm.url,callback:function(e){t.$set(t.baseForm,"url",e)},expression:"baseForm.url"}})],1),t._v(" "),o("v-col",{staticClass:"d-inline-flex justify-start",attrs:{cols:"12"}},[o("v-checkbox",{staticClass:"mt-0",attrs:{rules:t.agreedRules},scopedSlots:t._u([{key:"label",fn:function(){},proxy:!0}]),model:{value:t.agreed,callback:function(e){t.agreed=e},expression:"agreed"}}),t._v(" "),o("div",{on:{click:function(e){t.agreed=!t.agreed}}},[t._v("\n                "+t._s(t.$t("form.application.agreed"))+"\n                "),o("a",{attrs:{href:"/rules_"+t.$i18n.locale+".pdf",target:"_blank"}},[t._v(t._s(t.$t("form.application.agreed_link")))]),t._v(t._s(t.$t("form.application.agreed_2"))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")])],1)],1),t._v(" "),o("v-col",{staticClass:"d-flex justify-end"},[o("Confirm",{attrs:{error:t.error,submitting:t.submitting,valid:t.valid},on:{submit:function(e){t.submitting=!0,t.submit()}}})],1)],1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;f()(component,{Team:o(508).default,Confirm:o(507).default}),f()(component,{VAlert:d.a,VBtn:_.a,VCheckbox:$.a,VCol:h.a,VDivider:x.a,VExpandTransition:y.a,VFileInput:k.a,VForm:w.a,VIcon:F.a,VList:C.a,VListItem:V.a,VListItemAction:L.a,VListItemContent:R.a,VListItemTitle:R.c,VRow:T.a,VSelect:S.a,VTextField:j.a,VTextarea:A.a,VTooltip:D.a})}}]);