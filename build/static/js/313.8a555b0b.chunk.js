(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[313],{1090:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var l="https://sample.rupioo.com/Images/"},2042:function(e,a,t){"use strict";t.r(a);var l=t(37),n=t(0),m=t.n(n),c=t(56),r=t(1113),s=t(1114),i=t(174),o=t(1115),u=t(1118),d=t(1123),E=t(1124),v=t(117),g=t(1090);a.default=function(e){var a=Object(c.g)(),t=Object(n.useState)({}),p=Object(l.a)(t,2),N=p[0],f=p[1];Object(n.useEffect)((function(){var a=e.match.params.id;v.a.get("/patient/patient-by-id/".concat(a)).then((function(e){var a,t=null===(a=e.data)||void 0===a?void 0:a.Patient;console.log(t.image),f(t)})).catch((function(e){console.log(e)}))}),[]);return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement(r.a,null,m.a.createElement(s.a,{sm:"12"},m.a.createElement(r.a,{className:"m-2"},m.a.createElement(s.a,null,m.a.createElement("h1",{className:"float-left"},"View Patient")),m.a.createElement(s.a,null,m.a.createElement(i.a,{className:"btn btn-danger float-right",onClick:function(){a.goBack()}},"Back"))))),m.a.createElement(o.a,{className:"overflow-hidden app-ecommerce-details"},m.a.createElement(r.a,{className:"m-2"},m.a.createElement(s.a,null,m.a.createElement(u.a,{className:"pb-0"},m.a.createElement(r.a,{className:"ml-4"},m.a.createElement(s.a,{sm:"12",md:"4",lg:"4",className:"my-1"},m.a.createElement(d.a,null,"FullName"),m.a.createElement(E.a,{type:"text",value:null===N||void 0===N?void 0:N.fullname})),m.a.createElement(s.a,{sm:"12",md:"4",lg:"4",className:"my-1"},m.a.createElement(d.a,null,"Email"),m.a.createElement(E.a,{type:"text",value:null===N||void 0===N?void 0:N.email})),m.a.createElement(s.a,{sm:"12",md:"4",lg:"4",className:"my-1"},m.a.createElement(d.a,null,"PhoneNumber"),m.a.createElement(E.a,{type:"text",value:null===N||void 0===N?void 0:N.mobileNumber})),m.a.createElement(s.a,{sm:"12",md:"4",lg:"4",className:"my-1"},m.a.createElement(d.a,null,"Date"),m.a.createElement("span",{className:"my-2"},null===N||void 0===N?void 0:N.createdAt)),m.a.createElement(s.a,{sm:"12",md:"4",lg:"4",className:"my-1"},(null===N||void 0===N?void 0:N.image)?m.a.createElement(m.a.Fragment,null,m.a.createElement("img",{width:80,height:50,src:"".concat(g.a,"/").concat(null===N||void 0===N?void 0:N.image)})):m.a.createElement("span",null,"No Image ")))))))))}}}]);
//# sourceMappingURL=313.8a555b0b.chunk.js.map