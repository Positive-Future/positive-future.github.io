(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{461:function(t,e,n){var content=n(462);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("79d48750",content,!0,{sourceMap:!1})},462:function(t,e,n){(e=n(12)(!1)).push([t.i,'.nuxt-content hr{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.nuxt-content h2,h2{margin-top:30px;margin-bottom:10px}.nuxt-content h1,.nuxt-content h2,h1,h2{font-family:"Poppins",sans-serif;letter-spacing:normal;word-break:normal}.nuxt-content h1,h1{font-weight:600;font-size:30px;margin-top:10px;margin-bottom:20px;line-height:normal}.nuxt-content img,.subtitle{max-width:100%}.subtitle{flex:1 1 auto;font-family:"Lato",sans-serif;word-break:normal}.v-card__title{font-family:"Poppins",sans-serif;font-size:1.15rem;word-break:normal}.v-application .headline,.v-breadcrumbs,.v-card__subtitle,.v-card__text,.v-footer,.v-list-item__subtitle{font-family:"Lato",sans-serif!important}.nuxt-content li,.nuxt-content p,p{flex:1 1 auto;max-width:100%;font-family:"Lato",sans-serif;font-size:16px;word-break:normal}.v-data-footer{display:flex;flex-wrap:wrap;justify-content:flex-end;align-items:center;font-size:.75rem;padding:0 8px}.v-data-footer .v-btn{color:inherit}.v-application--is-ltr .v-data-footer__icons-before .v-btn:last-child{margin-right:7px}.v-application--is-ltr .v-data-footer__icons-after .v-btn:first-child,.v-application--is-rtl .v-data-footer__icons-before .v-btn:last-child{margin-left:7px}.v-application--is-rtl .v-data-footer__icons-after .v-btn:first-child{margin-right:7px}.v-data-footer__pagination{display:block;text-align:center}.v-application--is-ltr .v-data-footer__pagination{margin:0 32px 0 24px}.v-application--is-rtl .v-data-footer__pagination{margin:0 24px 0 32px}.v-data-footer__select{display:flex;align-items:center;flex:0 0 0;justify-content:flex-end;white-space:nowrap}.v-application--is-ltr .v-data-footer__select{margin-right:14px}.v-application--is-rtl .v-data-footer__select{margin-left:14px}.v-data-footer__select .v-select{flex:0 1 0;padding:0;position:static}.v-application--is-ltr .v-data-footer__select .v-select{margin:13px 0 13px 34px}.v-application--is-rtl .v-data-footer__select .v-select{margin:13px 34px 13px 0}.v-data-footer__select .v-select__selections{flex-wrap:nowrap}.v-data-footer__select .v-select__selections .v-select__selection--comma{font-size:.75rem}',""]),t.exports=e},536:function(t,e,n){"use strict";n(10),n(8);var o=n(15),r=(n(24),n(26),n(190),n(7),n(4),n(9),n(1)),c=(n(148),n(256),n(33)),l=(n(18),n(0)),h=n(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=h.a.extend({name:"v-data",inheritAttrs:!1,props:{items:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},sortBy:{type:[String,Array],default:function(){return[]}},sortDesc:{type:[Boolean,Array],default:function(){return[]}},customSort:{type:Function,default:l.C},mustSort:Boolean,multiSort:Boolean,page:{type:Number,default:1},itemsPerPage:{type:Number,default:10},groupBy:{type:[String,Array],default:function(){return[]}},groupDesc:{type:[Boolean,Array],default:function(){return[]}},customGroup:{type:Function,default:l.t},locale:{type:String,default:"en-US"},disableSort:Boolean,disablePagination:Boolean,disableFiltering:Boolean,search:String,customFilter:{type:Function,default:l.B},serverItemsLength:{type:Number,default:-1}},data:function(){var t={page:this.page,itemsPerPage:this.itemsPerPage,sortBy:Object(l.E)(this.sortBy),sortDesc:Object(l.E)(this.sortDesc),groupBy:Object(l.E)(this.groupBy),groupDesc:Object(l.E)(this.groupDesc),mustSort:this.mustSort,multiSort:this.multiSort};this.options&&(t=Object.assign(t,this.options));var e,n,o=t,r=o.sortBy,h=o.sortDesc,d=o.groupBy,f=o.groupDesc,m=r.length-h.length,y=d.length-f.length;m>0&&(e=t.sortDesc).push.apply(e,Object(c.a)(Object(l.k)(m,!1)));y>0&&(n=t.groupDesc).push.apply(n,Object(c.a)(Object(l.k)(y,!1)));return{internalOptions:t}},computed:{itemsLength:function(){return this.serverItemsLength>=0?this.serverItemsLength:this.filteredItems.length},pageCount:function(){return this.internalOptions.itemsPerPage<=0?1:Math.ceil(this.itemsLength/this.internalOptions.itemsPerPage)},pageStart:function(){return-1!==this.internalOptions.itemsPerPage&&this.items.length?(this.internalOptions.page-1)*this.internalOptions.itemsPerPage:0},pageStop:function(){return-1===this.internalOptions.itemsPerPage?this.itemsLength:this.items.length?Math.min(this.itemsLength,this.internalOptions.page*this.internalOptions.itemsPerPage):0},isGrouped:function(){return!!this.internalOptions.groupBy.length},pagination:function(){return{page:this.internalOptions.page,itemsPerPage:this.internalOptions.itemsPerPage,pageStart:this.pageStart,pageStop:this.pageStop,pageCount:this.pageCount,itemsLength:this.itemsLength}},filteredItems:function(){var t=this.items.slice();return!this.disableFiltering&&this.serverItemsLength<=0&&(t=this.customFilter(t,this.search)),t},computedItems:function(){var t=this.filteredItems.slice();return!this.disableSort&&this.serverItemsLength<=0&&(t=this.sortItems(t)),!this.disablePagination&&this.serverItemsLength<=0&&(t=this.paginateItems(t)),t},groupedItems:function(){return this.isGrouped?this.groupItems(this.computedItems):null},scopedProps:function(){return{sort:this.sort,sortArray:this.sortArray,group:this.group,items:this.computedItems,options:this.internalOptions,updateOptions:this.updateOptions,pagination:this.pagination,groupedItems:this.groupedItems,originalItemsLength:this.items.length}},computedOptions:function(){return f({},this.options)}},watch:{computedOptions:{handler:function(t,e){Object(l.i)(t,e)||this.updateOptions(t)},deep:!0,immediate:!0},internalOptions:{handler:function(t,e){Object(l.i)(t,e)||this.$emit("update:options",t)},deep:!0,immediate:!0},page:function(t){this.updateOptions({page:t})},"internalOptions.page":function(t){this.$emit("update:page",t)},itemsPerPage:function(t){this.updateOptions({itemsPerPage:t})},"internalOptions.itemsPerPage":function(t){this.$emit("update:items-per-page",t)},sortBy:function(t){this.updateOptions({sortBy:Object(l.E)(t)})},"internalOptions.sortBy":function(t,e){!Object(l.i)(t,e)&&this.$emit("update:sort-by",Array.isArray(this.sortBy)?t:t[0])},sortDesc:function(t){this.updateOptions({sortDesc:Object(l.E)(t)})},"internalOptions.sortDesc":function(t,e){!Object(l.i)(t,e)&&this.$emit("update:sort-desc",Array.isArray(this.sortDesc)?t:t[0])},groupBy:function(t){this.updateOptions({groupBy:Object(l.E)(t)})},"internalOptions.groupBy":function(t,e){!Object(l.i)(t,e)&&this.$emit("update:group-by",Array.isArray(this.groupBy)?t:t[0])},groupDesc:function(t){this.updateOptions({groupDesc:Object(l.E)(t)})},"internalOptions.groupDesc":function(t,e){!Object(l.i)(t,e)&&this.$emit("update:group-desc",Array.isArray(this.groupDesc)?t:t[0])},multiSort:function(t){this.updateOptions({multiSort:t})},"internalOptions.multiSort":function(t){this.$emit("update:multi-sort",t)},mustSort:function(t){this.updateOptions({mustSort:t})},"internalOptions.mustSort":function(t){this.$emit("update:must-sort",t)},pageCount:{handler:function(t){this.$emit("page-count",t)},immediate:!0},computedItems:{handler:function(t){this.$emit("current-items",t)},immediate:!0},pagination:{handler:function(t,e){Object(l.i)(t,e)||this.$emit("pagination",this.pagination)},immediate:!0}},methods:{toggle:function(t,e,n,o,r,c){var h=e.slice(),desc=n.slice(),d=h.findIndex((function(e){return e===t}));return d<0?(c||(h=[],desc=[]),h.push(t),desc.push(!1)):d>=0&&!desc[d]?desc[d]=!0:r?desc[d]=!1:(h.splice(d,1),desc.splice(d,1)),Object(l.i)(h,e)&&Object(l.i)(desc,n)||(o=1),{by:h,desc:desc,page:o}},group:function(t){var e=this.toggle(t,this.internalOptions.groupBy,this.internalOptions.groupDesc,this.internalOptions.page,!0,!1),n=e.by,o=e.desc,r=e.page;this.updateOptions({groupBy:n,groupDesc:o,page:r})},sort:function(t){if(Array.isArray(t))return this.sortArray(t);var e=this.toggle(t,this.internalOptions.sortBy,this.internalOptions.sortDesc,this.internalOptions.page,this.internalOptions.mustSort,this.internalOptions.multiSort),n=e.by,o=e.desc,r=e.page;this.updateOptions({sortBy:n,sortDesc:o,page:r})},sortArray:function(t){var e=this,n=t.map((function(s){var i=e.internalOptions.sortBy.findIndex((function(t){return t===s}));return i>-1&&e.internalOptions.sortDesc[i]}));this.updateOptions({sortBy:t,sortDesc:n})},updateOptions:function(t){this.internalOptions=f(f(f({},this.internalOptions),t),{},{page:this.serverItemsLength<0?Math.max(1,Math.min(t.page||this.internalOptions.page,this.pageCount)):t.page||this.internalOptions.page})},sortItems:function(t){var e=this.internalOptions.sortBy,n=this.internalOptions.sortDesc;return this.internalOptions.groupBy.length&&(e=[].concat(Object(c.a)(this.internalOptions.groupBy),Object(c.a)(e)),n=[].concat(Object(c.a)(this.internalOptions.groupDesc),Object(c.a)(n))),this.customSort(t,e,n,this.locale)},groupItems:function(t){return this.customGroup(t,this.internalOptions.groupBy,this.internalOptions.groupDesc)},paginateItems:function(t){return-1===this.serverItemsLength&&t.length<=this.pageStart&&(this.internalOptions.page=Math.max(1,this.internalOptions.page-1)),t.slice(this.pageStart,this.pageStop)}},render:function(){return this.$scopedSlots.default&&this.$scopedSlots.default(this.scopedProps)}}),y=(n(20),n(21),n(42),n(17)),O=(n(461),n(504)),v=n(55),P=n(80),x=h.a.extend({name:"v-data-footer",props:{options:{type:Object,required:!0},pagination:{type:Object,required:!0},itemsPerPageOptions:{type:Array,default:function(){return[5,10,15,-1]}},prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},itemsPerPageAllText:{type:String,default:"$vuetify.dataFooter.itemsPerPageAll"},showFirstLastPage:Boolean,showCurrentPage:Boolean,disablePagination:Boolean,disableItemsPerPage:Boolean,pageText:{type:String,default:"$vuetify.dataFooter.pageText"}},computed:{disableNextPageIcon:function(){return this.options.itemsPerPage<=0||this.options.page*this.options.itemsPerPage>=this.pagination.itemsLength||this.pagination.pageStop<0},computedDataItemsPerPageOptions:function(){var t=this;return this.itemsPerPageOptions.map((function(option){return"object"===Object(y.a)(option)?option:t.genDataItemsPerPageOption(option)}))}},methods:{updateOptions:function(t){this.$emit("update:options",Object.assign({},this.options,t))},onFirstPage:function(){this.updateOptions({page:1})},onPreviousPage:function(){this.updateOptions({page:this.options.page-1})},onNextPage:function(){this.updateOptions({page:this.options.page+1})},onLastPage:function(){this.updateOptions({page:this.pagination.pageCount})},onChangeItemsPerPage:function(t){this.updateOptions({itemsPerPage:t,page:1})},genDataItemsPerPageOption:function(option){return{text:-1===option?this.$vuetify.lang.t(this.itemsPerPageAllText):String(option),value:option}},genItemsPerPageSelect:function(){var t=this.options.itemsPerPage,e=this.computedDataItemsPerPageOptions;return e.length<=1?null:(e.find((function(e){return e.value===t}))||(t=e[0]),this.$createElement("div",{staticClass:"v-data-footer__select"},[this.$vuetify.lang.t(this.itemsPerPageText),this.$createElement(O.a,{attrs:{"aria-label":this.$vuetify.lang.t(this.itemsPerPageText)},props:{disabled:this.disableItemsPerPage,items:e,value:t,hideDetails:!0,auto:!0,minWidth:"75px"},on:{input:this.onChangeItemsPerPage}})]))},genPaginationInfo:function(){var t=["–"],e=this.pagination.itemsLength,n=this.pagination.pageStart,o=this.pagination.pageStop;return this.pagination.itemsLength&&this.pagination.itemsPerPage?(n=this.pagination.pageStart+1,o=e<this.pagination.pageStop||this.pagination.pageStop<0?e:this.pagination.pageStop,t=this.$scopedSlots["page-text"]?[this.$scopedSlots["page-text"]({pageStart:n,pageStop:o,itemsLength:e})]:[this.$vuetify.lang.t(this.pageText,n,o,e)]):this.$scopedSlots["page-text"]&&(t=[this.$scopedSlots["page-text"]({pageStart:n,pageStop:o,itemsLength:e})]),this.$createElement("div",{class:"v-data-footer__pagination"},t)},genIcon:function(t,e,label,n){return this.$createElement(P.a,{props:{disabled:e||this.disablePagination,icon:!0,text:!0},on:{click:t},attrs:{"aria-label":label}},[this.$createElement(v.a,n)])},genIcons:function(){var t=[],e=[];return t.push(this.genIcon(this.onPreviousPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.prevPage"),this.$vuetify.rtl?this.nextIcon:this.prevIcon)),e.push(this.genIcon(this.onNextPage,this.disableNextPageIcon,this.$vuetify.lang.t("$vuetify.dataFooter.nextPage"),this.$vuetify.rtl?this.prevIcon:this.nextIcon)),this.showFirstLastPage&&(t.unshift(this.genIcon(this.onFirstPage,1===this.options.page,this.$vuetify.lang.t("$vuetify.dataFooter.firstPage"),this.$vuetify.rtl?this.lastIcon:this.firstIcon)),e.push(this.genIcon(this.onLastPage,this.options.page>=this.pagination.pageCount||-1===this.options.itemsPerPage,this.$vuetify.lang.t("$vuetify.dataFooter.lastPage"),this.$vuetify.rtl?this.firstIcon:this.lastIcon))),[this.$createElement("div",{staticClass:"v-data-footer__icons-before"},t),this.showCurrentPage&&this.$createElement("span",[this.options.page.toString()]),this.$createElement("div",{staticClass:"v-data-footer__icons-after"},e)]}},render:function(){return this.$createElement("div",{staticClass:"v-data-footer"},[this.genItemsPerPageSelect(),this.genPaginationInfo(),this.genIcons()])}}),S=n(116),j=n(16),$=n(5),I=n(11);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object($.a)(S.a,j.a).extend({name:"v-data-iterator",props:D(D({},m.options.props),{},{itemKey:{type:String,default:"id"},value:{type:Array,default:function(){return[]}},singleSelect:Boolean,expanded:{type:Array,default:function(){return[]}},mobileBreakpoint:D(D({},S.a.options.props.mobileBreakpoint),{},{default:600}),singleExpand:Boolean,loading:[Boolean,String],noResultsText:{type:String,default:"$vuetify.dataIterator.noResultsText"},noDataText:{type:String,default:"$vuetify.noDataText"},loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideDefaultFooter:Boolean,footerProps:Object,selectableKey:{type:String,default:"isSelectable"}}),data:function(){return{selection:{},expansion:{},internalCurrentItems:[]}},computed:{everyItem:function(){var t=this;return!!this.selectableItems.length&&this.selectableItems.every((function(i){return t.isSelected(i)}))},someItems:function(){var t=this;return this.selectableItems.some((function(i){return t.isSelected(i)}))},sanitizedFooterProps:function(){return Object(l.d)(this.footerProps)},selectableItems:function(){var t=this;return this.internalCurrentItems.filter((function(e){return t.isSelectable(e)}))}},watch:{value:{handler:function(t){var e=this;this.selection=t.reduce((function(t,n){return t[Object(l.n)(n,e.itemKey)]=n,t}),{})},immediate:!0},selection:function(t,e){Object(l.i)(Object.keys(t),Object.keys(e))||this.$emit("input",Object.values(t))},expanded:{handler:function(t){var e=this;this.expansion=t.reduce((function(t,n){return t[Object(l.n)(n,e.itemKey)]=!0,t}),{})},immediate:!0},expansion:function(t,e){var n=this;if(!Object(l.i)(t,e)){var o=Object.keys(t).filter((function(e){return t[e]})),r=o.length?this.items.filter((function(i){return o.includes(String(Object(l.n)(i,n.itemKey)))})):[];this.$emit("update:expanded",r)}}},created:function(){var t=this;[["disable-initial-sort","sort-by"],["filter","custom-filter"],["pagination","options"],["total-items","server-items-length"],["hide-actions","hide-default-footer"],["rows-per-page-items","footer-props.items-per-page-options"],["rows-per-page-text","footer-props.items-per-page-text"],["prev-icon","footer-props.prev-icon"],["next-icon","footer-props.next-icon"]].forEach((function(e){var n=Object(o.a)(e,2),r=n[0],c=n[1];t.$attrs.hasOwnProperty(r)&&Object(I.a)(r,c,t)}));["expand","content-class","content-props","content-tag"].forEach((function(e){t.$attrs.hasOwnProperty(e)&&Object(I.e)(e)}))},methods:{toggleSelectAll:function(t){for(var e=Object.assign({},this.selection),i=0;i<this.selectableItems.length;i++){var n=this.selectableItems[i];if(this.isSelectable(n)){var o=Object(l.n)(n,this.itemKey);t?e[o]=n:delete e[o]}}this.selection=e,this.$emit("toggle-select-all",{items:this.internalCurrentItems,value:t})},isSelectable:function(t){return!1!==Object(l.n)(t,this.selectableKey)},isSelected:function(t){return!!this.selection[Object(l.n)(t,this.itemKey)]||!1},select:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(this.isSelectable(t)){var o=this.singleSelect?{}:Object.assign({},this.selection),r=Object(l.n)(t,this.itemKey);if(e?o[r]=t:delete o[r],this.singleSelect&&n){var c=Object.keys(this.selection),h=c.length&&Object(l.n)(this.selection[c[0]],this.itemKey);h&&h!==r&&this.$emit("item-selected",{item:this.selection[h],value:!1})}this.selection=o,n&&this.$emit("item-selected",{item:t,value:e})}},isExpanded:function(t){return this.expansion[Object(l.n)(t,this.itemKey)]||!1},expand:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.singleExpand?{}:Object.assign({},this.expansion),o=Object(l.n)(t,this.itemKey);e?n[o]=!0:delete n[o],this.expansion=n,this.$emit("item-expanded",{item:t,value:e})},createItemProps:function(t){var e=this;return{item:t,select:function(n){return e.select(t,n)},isSelected:this.isSelected(t),expand:function(n){return e.expand(t,n)},isExpanded:this.isExpanded(t),isMobile:this.isMobile}},genEmptyWrapper:function(content){return this.$createElement("div",content)},genEmpty:function(t,e){if(0===t&&this.loading){var n=this.$slots.loading||this.$vuetify.lang.t(this.loadingText);return this.genEmptyWrapper(n)}if(0===t){var o=this.$slots["no-data"]||this.$vuetify.lang.t(this.noDataText);return this.genEmptyWrapper(o)}if(0===e){var r=this.$slots["no-results"]||this.$vuetify.lang.t(this.noResultsText);return this.genEmptyWrapper(r)}return null},genItems:function(t){var e=this,n=this.genEmpty(t.originalItemsLength,t.pagination.itemsLength);return n?[n]:this.$scopedSlots.default?this.$scopedSlots.default(D(D({},t),{},{isSelected:this.isSelected,select:this.select,isExpanded:this.isExpanded,expand:this.expand})):this.$scopedSlots.item?t.items.map((function(t){return e.$scopedSlots.item(e.createItemProps(t))})):[]},genFooter:function(t){if(this.hideDefaultFooter)return null;var data={props:D(D({},this.sanitizedFooterProps),{},{options:t.options,pagination:t.pagination}),on:{"update:options":function(e){return t.updateOptions(e)}}},e=Object(l.o)("footer.",this.$scopedSlots);return this.$createElement(x,D({scopedSlots:e},data))},genDefaultScopedSlot:function(t){var e=D(D({},t),{},{someItems:this.someItems,everyItem:this.everyItem,toggleSelectAll:this.toggleSelectAll});return this.$createElement("div",{staticClass:"v-data-iterator"},[Object(l.q)(this,"header",e,!0),this.genItems(t),this.genFooter(t),Object(l.q)(this,"footer",e,!0)])}},render:function(){var t=this;return this.$createElement(m,{props:this.$props,on:{"update:options":function(e,n){return!Object(l.i)(e,n)&&t.$emit("update:options",e)},"update:page":function(e){return t.$emit("update:page",e)},"update:items-per-page":function(e){return t.$emit("update:items-per-page",e)},"update:sort-by":function(e){return t.$emit("update:sort-by",e)},"update:sort-desc":function(e){return t.$emit("update:sort-desc",e)},"update:group-by":function(e){return t.$emit("update:group-by",e)},"update:group-desc":function(e){return t.$emit("update:group-desc",e)},pagination:function(e,n){return!Object(l.i)(e,n)&&t.$emit("pagination",e)},"current-items":function(e){t.internalCurrentItems=e,t.$emit("current-items",e)},"page-count":function(e){return t.$emit("page-count",e)}},scopedSlots:{default:this.genDefaultScopedSlot}})}})}}]);