(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[108],{2115:function(e,a,t){"use strict";t.r(a);var n=t(13),c=t(14),l=t(16),m=t(15),s=t(0),r=t.n(s),o=t(1110),i=t(1112),u=t(1111),d=t(174),p=t(1115),E=(t(822),t(798),t(799),t(117)),h=t(56),f=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).state={data:{}},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;E.a.get("/doctor-commision/showbyid/".concat(a)).then((function(a){console.log("commission",a.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(o.a,null),r.a.createElement(i.a,{className:"overflow-hidden app-ecommerce-details m-2 pb-5"},r.a.createElement(o.a,{className:"m-2"},r.a.createElement(u.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Doctor Commission")),r.a.createElement(u.a,null,r.a.createElement(h.b,{render:function(e){var a=e.history;return r.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/productmanager/category/commissionmangement/doctorcommission")}},"Back")}}))),r.a.createElement(p.a,{className:"pb-0"},r.a.createElement(o.a,{className:"ml-4"},r.a.createElement(u.a,{sm:"9",md:"12",lg:"12"},r.a.createElement(o.a,{className:"mt-1"},r.a.createElement(u.a,{sm:"4",md:"4",lg:"4"},r.a.createElement("span",null,"Doctor Name")),r.a.createElement(u.a,{sm:"4",md:"4",lg:"4"},r.a.createElement("span",null,this.state.data.selectdoctor))),r.a.createElement(o.a,{className:"mt-1"},r.a.createElement(u.a,{sm:"4",md:"4",lg:"4"},r.a.createElement("span",null,"Commission Value")),r.a.createElement(u.a,{sm:"4",md:"4",lg:"4"},r.a.createElement("span",null,this.state.data.commissionvalue)))))))))}}]),t}(r.a.Component);a.default=f},798:function(e,a,t){},822:function(e,a,t){}}]);
//# sourceMappingURL=108.997a945b.chunk.js.map