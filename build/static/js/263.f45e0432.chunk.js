(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[263],{2048:function(e,a,t){"use strict";t.r(a),t.d(a,"EditPayout",(function(){return x}));var n=t(13),l=t(14),s=t(16),o=t(15),m=t(0),r=t.n(m),c=t(1113),u=t(1111),i=t(1112),d=t(174),p=t(1116),v=t(1119),E=t(1121),h=t(1122),g=t(117),b=(t(802),t(56)),y=t(799),f=(t(809),t(805),t(804)),N=t.n(f),x=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){console.log(e.target.value),l.setState({status:e.target.value})},l.submitHandler=function(e){var a;if(e.preventDefault(),console.log(null===(a=l.state.Viewone)||void 0===a?void 0:a.reqsted_amt),console.log(l.state.status),l.state.status){var t,n,s={payout_amt:null===(t=l.state.Viewone)||void 0===t?void 0:t.reqsted_amt,status:l.state.status};g.a.post("/admin/pay_withdrawal/".concat(null===(n=l.state.Viewone)||void 0===n?void 0:n._id),s).then((function(e){console.log(e.data),N()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/report/payoutlist")})).catch((function(e){console.log(e)}))}else N()("Update Status")},l.state={Viewone:{},status:""},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;console.log(a),g.a.get("/user/getonePayout/".concat(a)).then((function(a){console.log(a.data.data),e.setState({Viewone:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t,n,l,s,o=this;return r.a.createElement("div",null,r.a.createElement(y.a,{breadCrumbTitle:"Add  Puja",breadCrumbParent:" home",breadCrumbActive:"Add  Puja"}),r.a.createElement(c.a,null,r.a.createElement(u.a,{className:"m-2"},r.a.createElement(i.a,null,r.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Update Payout")),r.a.createElement(i.a,null,r.a.createElement(b.b,{render:function(e){var a=e.history;return r.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/report/payoutlist")}},"Back")}}))),r.a.createElement(p.a,null,r.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},r.a.createElement(u.a,null,r.a.createElement(i.a,{lg:"3",md:"3",sm:"12",className:"mb-2"},r.a.createElement(E.a,null," Doctor Name "),r.a.createElement(h.a,{disabled:!0,type:"text",name:"pooja_name",placeholder:"Enter Pooja Name",value:null===(e=this.state.Viewone)||void 0===e||null===(a=e.astroId)||void 0===a?void 0:a.fullname})),r.a.createElement(i.a,{lg:"3",md:"3",sm:"12",className:"mb-2"},r.a.createElement(E.a,null," Doctor Amount "),r.a.createElement(h.a,{disabled:!0,type:"text",name:"pooja_name",placeholder:"Enter Pooja Name",value:null===(t=this.state.Viewone)||void 0===t||null===(n=t.astroId)||void 0===n?void 0:n.ownamount})),r.a.createElement(i.a,{lg:"3",md:"3",sm:"12",className:"mb-2"},r.a.createElement(E.a,null," Amount Status "),r.a.createElement(h.a,{disabled:!0,type:"text",name:"pooja_name",placeholder:"Enter Pooja Name",value:null===(l=this.state.Viewone)||void 0===l?void 0:l.status})),r.a.createElement(i.a,{lg:"3",md:"3",sm:"12",className:"mb-2"},r.a.createElement(E.a,null," Requested Amount "),r.a.createElement(h.a,{disabled:!0,type:"text",name:"pooja_name",placeholder:"Enter Pooja Name",value:null===(s=this.state.Viewone)||void 0===s?void 0:s.payout_amt}))),r.a.createElement(u.a,null,r.a.createElement("h3",{className:"mt-2 mb-2 mx-1"},"Update Status")),r.a.createElement(u.a,null,r.a.createElement(i.a,{lg:"8",md:"8",sm:"8",className:"mb-2"},r.a.createElement(E.a,{className:"mb-1"},"Status"),r.a.createElement("div",{className:"form-label-group",onChange:function(e){return o.changeHandler1(e)}},r.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Approved"}),r.a.createElement("span",{style:{marginRight:"20px"}},"Approved"),r.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Pending"}),r.a.createElement("span",{style:{marginRight:"3px"}},"Pending"),r.a.createElement("input",{style:{marginRight:"3px",marginLeft:"8px"},type:"radio",name:"status",value:"Cancel"}),r.a.createElement("span",{style:{marginRight:"3px",marginLeft:"8px"}},"Cancel")))),r.a.createElement(u.a,null,r.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},r.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(m.Component);a.default=x},805:function(e,a,t){}}]);
//# sourceMappingURL=263.f45e0432.chunk.js.map