/*! For license information please see 252.ccd64fa2.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[252],{2168:function(e,t,r){"use strict";r.r(t);var n=r(71),a=r(13),o=r(14),i=r(16),c=r(15),l=r(0),u=r.n(l),s=r(1113),f=r(1114),h=r(1115),d=r(174),m=r(1118),p=r(790),g=r(793),v=r(791),y=r(789),w=r(1124),E=r(117),b=r(171),x=r(801),S=r(317),N=r(314),P=r(442),k=r(275),z=(r(800),r(798),r(56)),L=(r(799),r(847)),C=r.n(L);function D(){D=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new P(a||[]);return n(i,"_invoke",{value:b(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=u;var f={};function h(){}function d(){}function m(){}var p={};l(p,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(k([])));v&&v!==t&&r.call(v,o)&&(p=v);var y=m.prototype=h.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(a,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function b(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return z()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:z}}function z(){return{value:void 0,done:!0}}return d.prototype=m,n(y,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(E.prototype),l(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}var j=function(e){Object(i.a)(r,e);var t=Object(c.a)(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:120,filter:!0},{headerName:"Doctor Name",field:"comision_name",filter:!0,width:450,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.selectdoctor))}},{headerName:"Commission Value",field:"comision_rate",filter:!0,width:250,cellRendererFramework:function(e){return u.a.createElement("div",null,u.a.createElement("span",null,e.data.commissionvalue))}},{headerName:"Action",field:"sortorder",width:200,cellRendererFramework:function(t){return u.a.createElement("div",{className:"actions cursor-pointer"},u.a.createElement(z.b,{render:function(e){var r=e.history;return u.a.createElement(S.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return r.push("/app/packagemanager/commissionview/".concat(t.data._id))}})}}),u.a.createElement(z.b,{render:function(e){var r=e.history;return u.a.createElement(N.a,{className:"mr-50",size:"25px",color:"blue",onClick:function(){return r.push("/app/packagemanager/commissionedit/".concat(t.data._id))}})}}),u.a.createElement(P.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){e.runthisfunction(t.data._id)}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){var e=Object(n.a)(D().mark((function e(){var t=this;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/doctor-commision/showall").then((function(e){var r=e.data.data;console.log(r),t.setState({rowData:r})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(e){console.log(e),C.a.fire({title:"Do You Want To Delete Permanently?",text:"This item will be deleted immediately",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Delete",cancelButtonText:"Cancel"}).then((function(t){console.log(t),t.isConfirmed&&E.a.delete("/doctor-commision/deleteby/".concat(e)).then((function(e){console.log(e.data.message),window.location.reload()})).catch((function(e){console.log(e)}))}))}},{key:"render",value:function(){var e=this,t=this.state,r=t.rowData,n=t.columnDefs,a=t.defaultColDef;return console.log(r),u.a.createElement("div",null,u.a.createElement(s.a,{className:"app-user-list"},u.a.createElement(f.a,{sm:"12"}),u.a.createElement(f.a,{sm:"12"},u.a.createElement(h.a,null,u.a.createElement(s.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{sm:"6",className:"float-left"},"Doctor Commission Set")),u.a.createElement(f.a,null,u.a.createElement(z.b,{render:function(e){var t=e.history;return u.a.createElement(d.a,{className:" btn btn-success float-right",onClick:function(){return t.push("/apps/productmanager/category/commissionmangement/Drcommissionform")}},"Add")}}))),u.a.createElement(m.a,null,null===this.state.rowData?null:u.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},u.a.createElement("div",{className:"mb-1"},u.a.createElement(p.a,{className:"p-1 ag-dropdown"},u.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,u.a.createElement(k.a,{className:"ml-50",size:15})),u.a.createElement(v.a,{right:!0},u.a.createElement(y.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),u.a.createElement(y.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),u.a.createElement(y.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),u.a.createElement(y.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),u.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},u.a.createElement("div",{className:"table-input mr-1"},u.a.createElement(w.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),u.a.createElement("div",{className:"export-btn"},u.a.createElement(d.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),u.a.createElement(b.a.Consumer,null,(function(t){return u.a.createElement(x.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:a,columnDefs:n,rowData:r,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))))}}]),r}(u.a.Component);t.default=j},798:function(e,t,r){}}]);
//# sourceMappingURL=252.ccd64fa2.chunk.js.map