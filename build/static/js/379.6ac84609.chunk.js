(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[379],{2066:function(e,a,t){"use strict";t.r(a),t.d(a,"Editsubcategory",(function(){return N}));var n=t(51),r=t(13),c=t(14),s=t(16),l=t(15),o=t(0),i=t.n(o),m=t(847),u=t.n(m),d=t(1115),g=t(1113),h=t(1114),p=t(174),b=t(1118),y=t(1121),E=t(1123),f=t(1124),v=t(117),C=(t(802),t(56)),N=(t(806),function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=a.call(this,e)).handleChange=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){var a={category:c.state.category,description:c.state.description,subCategory:c.state.subCategory};e.preventDefault();var t=c.props.match.params.id;v.a.put("/admin-category/edit/".concat(t),a).then((function(e){u.a.fire({icon:"success",title:"Success!",text:"Sub-Category Edit successfully.",confirmButtonColor:"#3085d6",confirmButtonText:"OK"}).then((function(e){e.isConfirmed&&c.props.history.push("/appmanagement/category-list")}))})).catch((function(e){console.log(e.response)}))},c.state={category:"",subCategory:"",description:"",errorMessage:"",categorys:{}},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin-subCategory/subviewbyid/".concat(a)).then((function(a){var t,n=null===(t=a.data)||void 0===t?void 0:t.data;e.setState(n),console.log(n)})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(g.a,{className:"m-2"},i.a.createElement(h.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Category")),i.a.createElement(h.a,null,i.a.createElement(C.b,{render:function(e){var a=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/appmanagement/Subcategory-list")}},"Back")}}))),i.a.createElement(b.a,null,i.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(g.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Category Name"),i.a.createElement(f.a,{required:!0,type:"text",name:"categoryName",placeholder:"Enter Category Name",value:this.state.category,onChange:this.handleChange,disabled:!0})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Sub-Category Name"),i.a.createElement(f.a,{required:!0,type:"text",name:"subCategory",placeholder:"Enter Date",value:this.state.subCategory,onChange:this.handleChange})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Description"),i.a.createElement("textarea",{style:{width:"100%",padding:"0.7rem 0.7rem",border:"1px solid #d9d9d9",borderRadius:"5px"},required:!0,name:"description",placeholder:"description",value:this.state.description,onChange:this.handleChange}))),i.a.createElement(g.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(o.Component));a.default=N}}]);
//# sourceMappingURL=379.6ac84609.chunk.js.map