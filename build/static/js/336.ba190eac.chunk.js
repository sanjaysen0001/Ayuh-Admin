(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[336],{2065:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return C}));var n=t(13),r=t(14),l=t(16),c=t(15),m=t(0),s=t.n(m),i=t(1111),u=t(1112),o=t(1109),d=t(1110),p=t(1113),E=t(174),b=t(1116),f=t(1119),h=t(1121),v=t(117),g=t(804),y=t.n(g),N=t(56),O=t(799),C=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState({status:e.target.value})},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;v.a.post("/admin/editOrder/".concat(a),r.state).then((function(e){console.log(e),r.props.history.push("/app/ordermanage/allorderlist"),y()("Success!","Submitted SuccessFull!","success")})).catch((function(e){console.log(e.response)}))},r.state={status:"Pending"},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(O.a,{breadCrumbTitle:"Edit Order",breadCrumbParent:"Home",breadCrumbActive:" Edit Order "}),s.a.createElement(i.a,null,s.a.createElement(u.a,{sm:"12"},s.a.createElement("div",null,s.a.createElement(o.a,{listTag:"div"},s.a.createElement(d.a,{href:"/",tag:"a"},"Home"),s.a.createElement(d.a,{active:!0},"Edit Order"))))),s.a.createElement(p.a,null,s.a.createElement(i.a,{className:"m-2"},s.a.createElement(u.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Order")),s.a.createElement(u.a,null,s.a.createElement(N.b,{render:function(e){var a=e.history;return s.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/ordermanage/allorderlist")}},"Back")}}))),s.a.createElement(b.a,null,s.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},s.a.createElement(i.a,null,s.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:""},s.a.createElement(h.a,{className:"mb-1"},"Status"),s.a.createElement("select",{className:"form-control mb-2",onChange:function(a){return e.changeHandler(a)},id:"availability"},s.a.createElement("option",{value:"Pending"},"Pending"),s.a.createElement("option",{value:"Complete"},"Complete"),s.a.createElement("option",{value:"Refund"},"Refund"),s.a.createElement("option",{value:"Reject"},"Reject")))),s.a.createElement(i.a,null,s.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2",style:{marginLeft:"15px"}},s.a.createElement(E.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),t}(m.Component)}}]);
//# sourceMappingURL=336.ba190eac.chunk.js.map