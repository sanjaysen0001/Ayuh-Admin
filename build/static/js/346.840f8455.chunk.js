(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[346],{2135:function(e,a,t){"use strict";t.r(a);var n=t(51),c=t(13),l=t(14),r=t(16),m=t(15),o=t(0),s=t.n(o),i=t(1115),u=t(1113),d=t(1114),p=t(174),g=t(1118),h=t(1121),v=t(1123),E=t(784),b=t(1124),y=t(117),f=t(804),C=t.n(f),N=t(56),S=t(799),k=function(e){Object(r.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(c.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),y.a.post("/admin/add_Comision",l.state).then((function(e){C()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/packagemanager/commission")})).catch((function(e){console.log(e)}))},l.state={product:"",comision_name:"",comision_rate:"",category:"",status:""},l.state={categoryList:[],productList:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.category),y.a.get("/admin/getproductcalegory").then((function(a){e.setState({categoryList:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e,a,t=this;return s.a.createElement("div",null,s.a.createElement(S.a,{breadCrumbTitle:"Add Commission",breadCrumbParent:"Home",breadCrumbActive:"Add Commission "}),s.a.createElement(i.a,null,s.a.createElement(u.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Commission")),s.a.createElement(d.a,null,s.a.createElement(N.b,{render:function(e){var a=e.history;return s.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/packagemanager/commission")}},"Back")}}))),s.a.createElement(g.a,null,s.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},s.a.createElement(v.a,null,"Category Name"),s.a.createElement(E.a,{required:!0,type:"select",name:"category",onChange:function(e){y.a.get("/user/productbycategory/".concat(e.target.value)).then((function(e){t.setState({productList:e.data.data})})).catch((function(e){console.log(e)}))}},s.a.createElement("option",null,"Select....."),null===(e=this.state.categoryList)||void 0===e?void 0:e.map((function(e){return s.a.createElement("option",{key:e._id,value:null===e||void 0===e?void 0:e._id},e.name)})))),s.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},s.a.createElement(v.a,null,"Product Name"),s.a.createElement(E.a,{required:!0,type:"select",name:"product",placeholder:"Enter Title",value:this.state.product,onChange:this.changeHandler},s.a.createElement("option",null,"Select....."),null===(a=this.state.productList)||void 0===a?void 0:a.map((function(e){var a;return s.a.createElement("option",{key:e._id,value:e._id},null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a.productname)})))),s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(v.a,null,"Commission Name"),s.a.createElement(b.a,{required:!0,type:"text",name:"comision_name",placeholder:"Commission Name",value:this.state.comision_name,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(v.a,null,"Commission Rate"),s.a.createElement(b.a,{required:!0,type:"text",name:"comision_rate",placeholder:"Enter Commision Rate",value:this.state.comision_rate,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(v.a,{className:"mb-1"},"Status"),s.a.createElement("div",{className:"form-label-group",onChange:function(e){return t.changeHandler1(e)}},s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),s.a.createElement("span",{style:{marginRight:"20px"}},"Active"),s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),s.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(s.a.Component);a.default=k}}]);
//# sourceMappingURL=346.840f8455.chunk.js.map