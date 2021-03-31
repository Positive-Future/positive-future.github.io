(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{510:function(t,e,o){"use strict";o.r(e);var n={props:{submitting:{type:Boolean,default:!1},error:{type:Boolean,default:!1},valid:{type:Boolean,default:!1}},data:function(){return{dialog:!1}}},r=o(42),l=o(37),c=o.n(l),m=o(182),v=o(178),f=o(79),d=o(430),_=o(413),$=o(180),h=o(431),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center"},[o("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"primary",disabled:!t.valid}},"v-btn",r,!1),n),[t._v("\n        "+t._s(t.$t("form.submit")))])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-card-title",{staticClass:"headline my-4"},[t._v("\n        "+t._s(t.submitting?t.$t("form.application.dialog.submitting"):t.$t("form.application.dialog.title"))+"\n      ")]),t._v(" "),t.submitting||t.error?t._e():o("v-card-text",[t._v("\n        "+t._s(t.$t("form.application.dialog.text"))+"\n      ")]),t._v(" "),t.error&&!t.submitting?o("v-card-text",[t._v("\n        "+t._s(t.$t("form.application.dialog.error"))+"\n      ")]):t._e(),t._v(" "),t.submitting?o("v-card-text",[o("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):t._e(),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("\n          "+t._s(t.$t("form.application.dialog.cancel"))+"\n        ")]),t._v(" "),o("v-btn",{attrs:{color:"primary",loading:t.submitting,type:"submit"},on:{click:function(e){return t.$emit("submit")}}},[t._v("\n          "+t._s(t.$t("form.application.dialog.submit"))+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:m.a,VCard:v.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VDialog:d.a,VDivider:_.a,VProgressLinear:$.a,VSpacer:h.a})},511:function(t,e,o){"use strict";o.r(e);var n={props:{team:{type:Array,default:function(){return[]}}},data:function(){var t=this;return{firstname:"",lastname:"",birthday:null,menu:!1,major:!1,nameRules:[function(e){return!!e||0===e.length||t.$t("form.application.validation.required",{0:t.$t("form.application.lastname").toLowerCase()})},function(e){return e.length<=45||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.lastname").toLowerCase(),1:"45"})},function(e){return e.length>=2||0===e.length||t.$t("form.application.validation.moreThan",{0:t.$t("form.application.lastname").toLowerCase(),1:"2"})}],firstnameRules:[function(e){return!!e||0===e.length||t.$t("form.application.validation.required",{0:t.$t("form.application.firstname").toLowerCase()})},function(e){return e.length<=45||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.firstname").toLowerCase(),1:"45"})},function(e){return e.length>=2||0===e.length||t.$t("form.application.validation.moreThan",{0:t.$t("form.application.firstname").toLowerCase(),1:"2"})}]}},watch:{menu:function(t){var e=this;t&&setTimeout((function(){return e.$refs.picker.activePicker="YEAR"}))}},methods:{save:function(t){this.$refs.menu.save(t)}}},r=o(42),l=o(37),c=o.n(l),m=o(182),v=o(169),f=o(458),d=o(441),_=o(429),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex"},[o("v-text-field",{attrs:{rules:t.firstnameRules,counter:45,label:t.$t("form.application.firstname"),outlined:""},model:{value:t.firstname,callback:function(e){t.firstname=e},expression:"firstname"}}),t._v(" "),o("v-text-field",{staticClass:"mx-3",attrs:{rules:t.nameRules,counter:45,label:t.$t("form.application.lastname"),outlined:""},model:{value:t.lastname,callback:function(e){t.lastname=e},expression:"lastname"}}),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("div",t._g(t._b({staticClass:"mr-2 d-flex flex-column caption"},"div",r,!1),n),[o("div",{staticClass:"text-center"},[t._v("\n          "+t._s(t.$t("form.application.18orOlder"))+"\n        ")]),t._v(" "),o("v-simple-checkbox",{staticClass:"ma-0",attrs:{small:"","no-hint":"",color:"primary"},model:{value:t.major,callback:function(e){t.major=e},expression:"major"}})],1)]}}])},[t._v(" "),o("span",[t._v(t._s(t.$t("form.application.18tooltip")))])]),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{height:"56",color:"primary",disabled:!(t.firstname.length>1&&t.lastname.length>1&&t.major)},on:{click:function(e){return t.$emit("add",{firstname:t.firstname,lastname:t.lastname})}}},"v-btn",r,!1),n),[o("v-icon",[t._v("mdi-plus")])],1)]}}])},[t._v(" "),o("span",[t._v(t._s(t.$t("form.application.add_team")))])])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:m.a,VIcon:v.a,VSimpleCheckbox:f.a,VTextField:d.a,VTooltip:_.a})},536:function(t,e,o){"use strict";o.r(e);o(7),o(4),o(9),o(41);var n=o(14),r=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,l=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,c={beforeRouteLeave:function(t,e,o){if(!this.hasChanged)return o();window.confirm("Do you really want to leave? You have unsaved changes!")?o():o(!1)},data:function(){var t=this;return{valid:!0,agreed:!1,error:!1,submitting:!1,uploaded:!1,action:"https://formspree.io/f/xvovjdgv",email2:"",urlMode:!1,choice:!0,baseForm:{firstname:"",lastname:"",email:"",title:"",description:"",team:[],type:null,file:null},formats:[{text:this.$t("form.application.format.article"),value:1},{text:this.$t("form.application.format.novel"),value:2},{text:this.$t("form.application.format.video"),value:3},{text:this.$t("form.application.format.comic"),value:4}],nameRules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.lastname").toLowerCase()})},function(e){return e.length<=45||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.lastname").toLowerCase(),1:"45"})},function(e){return e.length>=2||t.$t("form.application.validation.moreThan",{0:t.$t("form.application.lastname").toLowerCase(),1:"2"})}],firstnameRules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.firstname".toLowerCase())})},function(e){return e.length<=45||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.firstname".toLowerCase()),1:"45"})},function(e){return e.length>=2||t.$t("form.application.validation.moreThan",{0:t.$t("form.application.firstname".toLowerCase()),1:"2"})}],emailRules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.email").toLowerCase()})},function(e){return l.test(e)||t.$t("form.application.validation.invalid",{0:t.$t("form.application.email").toLowerCase()})}],email2Rules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.email").toLowerCase()})},function(e){return l.test(e)||t.$t("form.application.validation.invalid",{0:t.$t("form.application.email").toLowerCase()})},function(e){return e===t.baseForm.email||t.$t("form.application.validation.dontmatch")}],titleRules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.title").toLowerCase()})},function(e){return e.length<85||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.title").toLowerCase(),1:"85"})},function(e){return e.length>=2||t.$t("form.application.validation.moreThan",{0:t.$t("form.application.title").toLowerCase(),1:"2"})}],fileRules:[function(e){return!!e||t.$t("form.application.validation.file")},function(e){return!e||e.size<25e6||t.$t("form.application.validation.fileSize")}],urlRules:[function(e){return!!e||t.$t("form.application.validation.url")},function(e){return r.test(e)||!e||t.$t("form.application.validation.invalid",{0:t.$t("form.application.url")})}],descriptionRules:[function(e){return!!e&&e.length<=1e3||0===e.length||t.$t("form.application.validation.lessThan",{0:t.$t("form.application.description").toLowerCase(),1:"1000"})}],typeRules:[function(e){return!!e||t.$t("form.application.validation.required",{0:t.$t("form.application.format.title").toLowerCase()})}],agreedRules:[function(e){return e||t.$t("form.application.validation.tos")}]}},mounted:function(){},methods:{makeContact:function(t){this.baseForm.team.unshift(this.baseForm.team.splice(t,1)[0])},submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate(),!t.valid){e.next=22;break}return t.submitting=!0,data=new FormData,Object.keys(t.baseForm).forEach((function(e){"team"===e?data.append(e,JSON.stringify(t.baseForm[e])):data.append(e,t.baseForm[e])})),e.prev=5,e.next=8,t.$axios.$post(t.action,data);case 8:t.error=!1,t.submitting=!1,t.uploaded=!0,t.$router.push({path:t.localePath("/thank_you")}),t.form={},e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.log("error: ",e.t0),t.error=!0;case 19:return e.prev=19,t.submitting=!1,e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[5,15,19,22]])})))()}}},m=o(42),v=o(37),f=o.n(v),d=o(541),_=o(182),$=o(540),h=o(426),k=o(413),y=o(62),x=o(521),C=o(522),w=o(169),F=o(172),V=o(115),L=o(174),R=o(54),T=o(98),S=o(427),j=o(512),I=o(441),A=o(523),D=o(429),component=Object(m.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("section",{staticStyle:{"background-color":"#fff1d0"}},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[o("h1",{staticClass:"mb-8 mt-12"},[t._v("\n          "+t._s(t.$t("form.application.title"))+"\n        ")])])],1)],1),t._v(" "),o("section",{class:{"px-3":t.$vuetify.breakpoint.smAndDown}},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{xs:"12",sm:"11",md:"8",lg:"7",xl:"6"}},[o("v-form",{ref:"form",staticClass:"mt-6",attrs:{enctype:"multipart/form-data",method:"POST",action:t.action},on:{submit:function(e){return e.preventDefault(),t.submit(t.submit)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.work_title"))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")])],1),t._v(" "),o("v-text-field",{attrs:{counter:85,rules:t.titleRules,outlined:""},model:{value:t.baseForm.title,callback:function(e){t.$set(t.baseForm,"title",e)},expression:"baseForm.title"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.description"))+"\n              ")]),t._v(" "),o("v-expand-transition",[o("v-alert",{attrs:{text:"",border:"left"}},[o("div",[t._v(t._s(t.$t("form.application.description_alt")))])])],1),t._v(" "),o("v-textarea",{attrs:{rules:t.descriptionRules,counter:1e3,outlined:""},model:{value:t.baseForm.description,callback:function(e){t.$set(t.baseForm,"description",e)},expression:"baseForm.description"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-alert",{attrs:{text:"",border:"left"}},[o("div",[t._v(t._s(t.$t("form.application.contact")))])]),t._v(" "),o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.email"))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")])],1),t._v(" "),o("v-text-field",{ref:"email",attrs:{counter:85,rules:t.emailRules,outlined:""},on:{blur:function(e){return t.$refs.email2.validate()}},model:{value:t.baseForm.email,callback:function(e){t.$set(t.baseForm,"email","string"==typeof e?e.trim():e)},expression:"baseForm.email"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.email2"))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")])],1),t._v(" "),o("v-text-field",{ref:"email2",attrs:{counter:85,rules:t.email2Rules,outlined:""},on:{paste:function(t){t.preventDefault()},blur:function(e){return t.$refs.email.validate()}},model:{value:t.email2,callback:function(e){t.email2="string"==typeof e?e.trim():e},expression:"email2"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline mb-1"},[t._v("\n                "+t._s(t.$t("form.application.team"))+"\n              ")]),t._v(" "),o("Team",{key:t.baseForm.team.length,on:{add:function(e){return t.baseForm.team.push(e)}}}),t._v(" "),o("v-list",[t._l(t.baseForm.team,(function(e,n){return[o("v-list-item",{key:n,staticClass:"pl-0",on:{click:function(e){return t.makeContact(n)}}},[o("v-list-item-icon",[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[o("v-icon",t._g(t._b({attrs:{color:0===n?"primary":""}},"v-icon",l,!1),r),[t._v("\n                            mdi-email\n                          ")])]}}],null,!0)},[t._v(" "),o("span",[t._v(t._s(0===n?t.$t("form.application.contactPerson"):t.$t("form.application.clickToMakeContact")))])])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.firstname+" "+e.lastname))])],1),t._v(" "),o("v-list-item-action",[o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,l=e.attrs;return[o("v-btn",t._g(t._b({attrs:{icon:""},on:{click:function(e){return t.baseForm.team.splice(n,1)}}},"v-btn",l,!1),r),[o("v-icon",[t._v("mdi-close")])],1)]}}],null,!0)},[t._v(" "),o("span",[t._v(t._s(t.$t("form.application.remove_team")))])])],1)],1),t._v(" "),n<t.baseForm.team.length-1?o("v-divider",{key:n}):t._e()]}))],2)],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.format.title"))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}])},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")])],1),t._v(" "),o("v-select",{attrs:{items:t.formats,rules:t.typeRules,outlined:""},model:{value:t.baseForm.type,callback:function(e){t.$set(t.baseForm,"type",e)},expression:"baseForm.type"}})],1),t._v(" "),t.baseForm.type?o("v-col",{attrs:{cols:"12"}},[o("div",{staticClass:"overline"},[t._v("\n                "+t._s(t.$t("form.application.file",[t.baseForm.type?t.$t("form.application.format."+["title","article","novel","video","comic"][t.baseForm.type]):""]))+"\n                "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                      mdi-asterisk\n                    ")])]}}],null,!1,420846082)},[t._v("\n                  "+t._s(t.$t("form.mandatory"))+"\n                ")]),t._v(" "),o("v-icon")],1),t._v(" "),t.baseForm.type?o("v-alert",{attrs:{text:"",border:"left"}},[o("div",[t._v("\n                  "+t._s(t.$t("form.application."+["title","article","novel","video","comic"][t.baseForm.type]+"_hint"))+"\n                ")])]):t._e(),t._v(" "),t.choice?[o("div",{staticClass:"text-center my-4"},[o("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.choice=!1,t.urlMode=!1}}},[t._v(t._s(t.$t("form.application.choice1")))]),t._v(" "),o("div",{staticClass:"overline"},[t._v(t._s(t.$t("or")))]),t._v(" "),o("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.choice=!1,t.urlMode=!0}}},[t._v(t._s(t.$t("form.application.choice2")))])],1)]:[t.urlMode?[o("v-text-field",{ref:"url",attrs:{rules:t.urlRules,label:t.$t("form.application.url"),outlined:""},model:{value:t.baseForm.url,callback:function(e){t.$set(t.baseForm,"url",e)},expression:"baseForm.url"}}),t._v(" "),o("v-btn",{staticClass:"mb-6 float-right",attrs:{small:""},on:{click:function(e){t.urlMode=!1}}},[t._v("\n                    "+t._s(t.$t("form.application.fileInstead")))])]:[o("v-file-input",{ref:"file",attrs:{accept:3===t.baseForm.type?"video/*":".pdf",label:t.$t("form.application.browse"),rules:t.fileRules,outlined:"",hint:3===t.baseForm.type?t.$t("form.application.videoHint"):t.$t("form.application.pdfHint")},model:{value:t.baseForm.file,callback:function(e){t.$set(t.baseForm,"file",e)},expression:"baseForm.file"}}),t._v(" "),o("v-btn",{staticClass:"mb-6 float-right",attrs:{small:""},on:{click:function(e){t.urlMode=!0}}},[t._v("\n                    "+t._s(t.$t("form.application.urlInstead")))])]]],2):t._e(),t._v(" "),o("v-col",{staticClass:"d-inline-flex justify-start",attrs:{cols:"12"}},[o("v-checkbox",{staticClass:"mt-0",attrs:{rules:t.agreedRules},scopedSlots:t._u([{key:"label",fn:function(){return[o("div",[t._v("\n                    "+t._s(t.$t("form.application.agreed"))+"\n                    "),o("a",{attrs:{href:"/rules_"+t.$i18n.locale+".pdf",target:"_blank"},on:{click:function(t){t.stopPropagation()}}},[t._v(t._s(t.$t("form.application.agreed_link")))]),t._v(" "),o("span",{domProps:{innerHTML:t._s(t.$t("form.application.agreed_2"))}}),t._v(" "),o("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-icon",t._g({attrs:{small:"",color:"red"}},n),[t._v("\n                          mdi-asterisk\n                        ")])]}}])},[t._v("\n                      "+t._s(t.$t("form.mandatory"))+"\n                    ")])],1)]},proxy:!0}]),model:{value:t.agreed,callback:function(e){t.agreed=e},expression:"agreed"}})],1),t._v(" "),o("v-col",{staticClass:"d-flex justify-end"},[o("Confirm",{attrs:{error:t.error,submitting:t.submitting,valid:t.valid},on:{submit:function(e){t.submitting=!0,t.submit()}}})],1)],1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports;f()(component,{Team:o(511).default,Confirm:o(510).default}),f()(component,{VAlert:d.a,VBtn:_.a,VCheckbox:$.a,VCol:h.a,VDivider:k.a,VExpandTransition:y.a,VFileInput:x.a,VForm:C.a,VIcon:w.a,VList:F.a,VListItem:V.a,VListItemAction:L.a,VListItemContent:R.a,VListItemIcon:T.a,VListItemTitle:R.c,VRow:S.a,VSelect:j.a,VTextField:I.a,VTextarea:A.a,VTooltip:D.a})}}]);