(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[347],{2136:function(e,t,a){"use strict";a.r(t),a.d(t,"CommissionEdit",(function(){return N}));var n=a(51),o=a(13),c=a(14),s=a(16),r=a(15),m=a(0),l=a.n(m),i=a(847),u=a.n(i),d=a(1115),h=a(1113),p=a(1114),g=a(174),f=a(1118),v=a(1121),E=a(1123),b=a(1124),y=a(117),C=(a(802),a(56)),N=(a(806),function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).handleChange=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){var t={commissionvalue:c.state.commissionvalue,selectdoctor:c.state.selectdoctor};e.preventDefault();var a=c.props.match.params.id;y.a.put("/doctor-commision/updatebyid/".concat(a),t).then((function(e){u.a.fire({icon:"success",title:"Success!",text:"Category Edit successfully.",confirmButtonColor:"#3085d6",confirmButtonText:"OK"}).then((function(e){e.isConfirmed&&c.props.history.push("/app/productmanager/category/commissionmangement/doctorcommission")}))})).catch((function(e){console.log(e.response)}))},c.state={selectdoctor:"",commissionvalue:"",categorys:{}},c}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;y.a.get("/doctor-commision/showbyid/".concat(t)).then((function(t){var a,n=null===(a=t.data)||void 0===a?void 0:a.data;e.setState(n),console.log(n)})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,null,l.a.createElement(h.a,{className:"m-2"},l.a.createElement(p.a,null,l.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Doctor Commission")),l.a.createElement(p.a,null,l.a.createElement(C.b,{render:function(e){var t=e.history;return l.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/productmanager/category/commissionmangement/doctorcommission")}},"Back")}}))),l.a.createElement(f.a,null,l.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},l.a.createElement(h.a,null,l.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(E.a,null,"Doctor Name"),l.a.createElement(b.a,{required:!0,type:"text",name:"selectdoctor",placeholder:"Enter Category Name",value:this.state.selectdoctor,onChange:this.handleChange,disabled:!0})),l.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(E.a,null,"Commission Value"),l.a.createElement(b.a,{required:!0,type:"text",name:"commissionvalue",placeholder:"Enter Category Name",value:this.state.commissionvalue,onChange:this.handleChange}))),l.a.createElement(h.a,null,l.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},l.a.createElement(g.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),a}(m.Component));t.default=N}}]);
//# sourceMappingURL=347.d3af3fe0.chunk.js.map