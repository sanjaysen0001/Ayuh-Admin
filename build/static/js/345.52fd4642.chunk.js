(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[345],{2103:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return S}));var n=t(51),l=t(13),c=t(14),m=t(16),s=t(15),r=t(0),i=t.n(r),u=t(1110),o=t(1111),p=t(1108),d=t(1109),h=t(1112),g=t(174),E=t(1115),v=t(1118),b=t(1120),f=t(1121),y=t(117),N=t(27),k=t(804),H=t.n(k),S=function(a){Object(m.a)(t,a);var e=Object(s.a)(t);function t(a){var c;return Object(l.a)(this,t),(c=e.call(this,a)).changeHandler1=function(a){c.setState({status:a.target.value})},c.changeHandler=function(a){c.setState(Object(n.a)({},a.target.name,a.target.value))},c.submitHandler=function(a){a.preventDefault();var e=c.props.match.params.id;y.a.post("/admin/editplan/".concat(e),c.state).then((function(a){console.log(a),H()("Success!","Submitted SuccessFull!","success"),c.props.history.push("/app/packagemanager/allPlan")})).catch((function(a){console.log(a)}))},c.state={title:"",amount:"",status:""},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var a=this,e=this.props.match.params.id;y.a.get("/admin/getoneplan/".concat(e)).then((function(e){console.log(e),a.setState({title:e.data.data.title,amount:e.data.data.amount,status:e.data.data.status})})).catch((function(a){console.log(a)}))}},{key:"render",value:function(){var a=this;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(p.a,{listTag:"div"},i.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(d.a,{href:"/app/packagemanager/allPlan",tag:"a"},"Plan List"),i.a.createElement(d.a,{active:!0},"Edit Plan"))))),i.a.createElement(h.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(o.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Plan")),i.a.createElement(o.a,null,i.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return N.a.push("/app/packagemanager/allPlan")}},"Back"))),i.a.createElement(E.a,null,i.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"title"),i.a.createElement(f.a,{type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.changeHandler})),i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Amount"),i.a.createElement(f.a,{type:"amount",name:"amount",placeholder:"Enter Amount",value:this.state.amount,onChange:this.changeHandler})),i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(e){return a.changeHandler1(e)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),i.a.createElement(u.a,null,i.a.createElement(o.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(r.Component)}}]);
//# sourceMappingURL=345.52fd4642.chunk.js.map