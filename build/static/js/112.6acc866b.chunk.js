(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[112],{2194:function(e,a,t){"use strict";t.r(a);var n=t(13),l=t(14),c=t(16),m=t(15),r=t(0),s=t.n(r),o=t(1113),i=t(1114),d=t(1115),u=t(174),E=t(1118),p=(t(812),t(798),t(117)),h=t(56),g=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;p.a.get("/admin-category/viewbyid/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(o.a,null,s.a.createElement(i.a,{sm:"12"},s.a.createElement("div",null))),s.a.createElement(d.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(o.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Category")),s.a.createElement(i.a,null,s.a.createElement(h.b,{render:function(e){var a=e.history;return s.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/appmanagement/category-list")}},"Back")}}))),s.a.createElement(E.a,{className:"pb-5"},s.a.createElement(o.a,{className:"ml-4"},s.a.createElement(i.a,{sm:"9",md:"12",lg:"12"},s.a.createElement(o.a,{className:"mt-1"},s.a.createElement(i.a,{sm:"4",md:"4",lg:"4"},s.a.createElement("span",null,"Category Name")),s.a.createElement(i.a,{sm:"4",md:"4",lg:"4"},s.a.createElement("span",null,this.state.data.categoryName))),s.a.createElement(o.a,{className:"mt-1"},s.a.createElement(i.a,{sm:"4",md:"4",lg:"4"},s.a.createElement("span",null,"Description")),s.a.createElement(i.a,{sm:"4",md:"4",lg:"4"},s.a.createElement("span",null,this.state.data.description))),s.a.createElement(o.a,{className:"mt-1"},s.a.createElement(i.a,{sm:"4",md:"4",lg:"4"},s.a.createElement("span",null,"Date")),s.a.createElement(i.a,{sm:"4",md:"4",lg:"4"},s.a.createElement("span",null,this.state.data.date)))))))))}}]),t}(s.a.Component);a.default=g},798:function(e,a,t){},812:function(e,a,t){}}]);
//# sourceMappingURL=112.6acc866b.chunk.js.map