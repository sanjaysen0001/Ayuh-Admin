(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[351],{2141:function(e,t,a){"use strict";a.r(t),a.d(t,"DrForm",(function(){return x}));var n=a(51),l=a(13),c=a(14),r=a(173),o=a(16),s=a(15),i=a(0),m=a.n(i),u=a(1113),d=a(1111),h=a(1112),b=a(174),g=a(1116),v=a(1119),f=a(1120),E=a(1122),p=a(117),y=(a(802),a(56)),S=(a(809),a(876)),C=a.n(S),x=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,l=t.value;c.setState(Object(n.a)({},a,l))},c.state={selectdoctor:"",commissionvalue:"",categories:[]},c.handleChange=c.handleChange.bind(Object(r.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(r.a)(c)),c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/doctorPanel/viewAll").then((function(t){var a,n=null===(a=t.data)||void 0===a?void 0:a.data;e.setState({categories:n}),console.log(n)})).catch((function(e){console.error("There was an error fetching the categories!",e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.selectdoctor,l=a.commissionvalue;n&&l?p.a.post("/doctor-commision/insert",{selectdoctor:n,commissionvalue:l}).then((function(e){console.log(e.data),t.setState({selectdoctor:"",commissionvalue:""}),C.a.fire({icon:"success",title:"Success!",text:"Sub-Category Add successfully.",confirmButtonColor:"#3085d6",confirmButtonText:"OK"})})).catch((function(e){C.a.fire({icon:"error",title:"Oops...",text:"Something went wrong! Please try again later."})})):alert("Please fill in all fields")}},{key:"render",value:function(){var e=this.state,t=e.selectdoctor,a=e.commissionvalue,n=e.categories;return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(d.a,{className:"m-2"},m.a.createElement(h.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Doctor Commission")),m.a.createElement(h.a,null,m.a.createElement(y.b,{render:function(e){var t=e.history;return m.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/productmanager/category/commissionmangement/doctorcommission")}},"Back")}}))),m.a.createElement(g.a,null,m.a.createElement(v.a,{onSubmit:this.handleSubmit},m.a.createElement(d.a,{className:"ml-3 mr-3"},m.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,{className:"align-items-center"},m.a.createElement("label",{htmlFor:"categorySelect"},"Select Doctor"),m.a.createElement("br",null),m.a.createElement("select",{className:"form-select w-100",style:{height:"37px",border:"1px solid #d9d9d9",borderRadius:"5px"},"aria-label":"Default select example",id:"categorySelect",name:"selectdoctor",value:t,onChange:this.handleChange},m.a.createElement("option",{value:"",disabled:!0},"--Select--"),n.map((function(e){return m.a.createElement("option",{key:e.id,value:e.id},e.fullname)}))))),m.a.createElement(h.a,{lg:"6",md:"6",sm:"6"},m.a.createElement(f.a,null,m.a.createElement("label",{htmlFor:"categorySelect"},"  Commission Value"),m.a.createElement("br",null),m.a.createElement(E.a,{type:"number",name:"commissionvalue",id:"commissionValue",placeholder:"Enter commission value",value:a,onChange:this.handleChange,required:!0})))),m.a.createElement(f.a,{className:"ml-3 mr-3"},m.a.createElement(h.a,{className:"text-right"},m.a.createElement(b.a,{color:"primary",type:"submit"},"Submit")))))))}}]),a}(i.Component);t.default=x}}]);
//# sourceMappingURL=351.80c68ef9.chunk.js.map