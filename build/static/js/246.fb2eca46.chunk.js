(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[246],{2166:function(e,a,t){"use strict";t.r(a),t.d(a,"AddCategory",(function(){return x}));var n=t(51),r=t(13),l=t(14),c=t(173),s=t(16),o=t(15),m=t(0),i=t.n(m),d=t(1112),u=t(1110),h=t(1111),g=t(174),b=t(1115),p=t(1118),y=t(1120),E=t(1121),f=t(117),v=(t(802),t(56)),N=(t(799),t(828),t(806),t(823),t(805),t(807),t(847)),C=t.n(N),x=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={categoryName:"",date:"",description:""},n.changeHandler=n.changeHandler.bind(Object(c.a)(n)),n.submitHandler=n.submitHandler.bind(Object(c.a)(n)),n}return Object(l.a)(t,[{key:"changeHandler",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"submitHandler",value:function(e){e.preventDefault();var a=this.state,t=a.categoryName,n=a.date,r=a.description;f.a.post("/admin-category/create",{categoryName:t,date:n,description:r}).then((function(e){console.log(e.data),C.a.fire({icon:"success",title:"Success!",text:"Category Added successfully.",confirmButtonColor:"#3085d6",confirmButtonText:"OK"}),window.location.reload()})).catch((function(e){console.error(e),C.a.fire({icon:"error",title:"Oops...",text:"Something went wrong! Please try again later."})}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(h.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Category")),i.a.createElement(h.a,null,i.a.createElement(v.b,{render:function(e){var a=e.history;return i.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.goBack()}},"Back")}}))),i.a.createElement(b.a,null,i.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Category Name"),i.a.createElement(E.a,{required:!0,type:"text",name:"categoryName",placeholder:"Enter Category Name",value:this.state.categoryName,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Date"),i.a.createElement(E.a,{required:!0,type:"date",name:"date",placeholder:"Enter Date",value:this.state.date,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,null,"Description"),i.a.createElement("textarea",{style:{width:"100%",padding:"0.7rem 0.7rem",border:"1px solid #d9d9d9",borderRadius:"5px"},required:!0,type:"text",name:"description",placeholder:"Description",value:this.state.description,onChange:this.changeHandler}))),i.a.createElement(u.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(m.Component);a.default=x},805:function(e,a,t){}}]);
//# sourceMappingURL=246.fb2eca46.chunk.js.map