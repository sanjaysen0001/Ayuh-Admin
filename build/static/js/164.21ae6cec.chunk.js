(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[164],{2035:function(e,a,t){"use strict";t.r(a),t.d(a,"Editpendinglist",(function(){return x}));var n=t(808),l=t(51),r=t(13),s=t(14),c=t(16),m=t(15),o=t(0),i=t.n(o),u=t(1112),d=t(1110),p=t(1111),f=t(173),h=t(1115),g=t(1118),v=t(1120),b=t(1121),E=t(117),y=(t(803),t(56)),N=(t(799),t(804)),S=t.n(N),x=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state);var a=new FormData;a.append("fullname",s.state.fullname),a.append("email",s.state.email),a.append("status",s.state.status),null!==s.state.selectedFile&&a.append("userimg",s.state.selectedFile,s.state.selectedName);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(u){l.e(u)}finally{l.f()}var c,m=Object(n.a)(a.keys());try{for(m.s();!(c=m.n()).done;){var o=c.value;console.log(o)}}catch(u){m.e(u)}finally{m.f()}var i=s.props.match.params.id;E.a.post("/user/myprofile/".concat(i),a).then((function(e){console.log(e.data),S()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/user/userList")})).catch((function(e){console.log(e)}))},s.state={fullname:"",email:"",mobile:"",password:"",cnfmPassword:"",userimg:"",selectedName:"",selectedFile:null},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;E.a.get("/user/viewoneuser/".concat(a)).then((function(a){console.log(a),e.setState({fullname:a.data.data.fullname,email:a.data.data.email,mobile:a.data.data.mobile,userimg:a.data.userimg})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Pending List")),i.a.createElement(p.a,null,i.a.createElement(y.b,{render:function(e){var a=e.history;return i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.goBack()}},"Back")}}))),i.a.createElement(h.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Doctor Name"),i.a.createElement(b.a,{required:!0,type:"text",name:"fullname",placeholder:"Enter First Name",value:"sumit"})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Patient Name"),i.a.createElement(b.a,{required:!0,type:"text",name:"email",placeholder:"Enter Last Name",value:"vivek"})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Pharma No."),i.a.createElement(b.a,{required:!0,type:"number",name:"mobile",placeholder:"Mobile No.",value:"8878876450",onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Time "),i.a.createElement(b.a,{required:!0,type:"text",name:"sortorder",placeholder:"date",value:"03:12 PM",onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Date "),i.a.createElement(b.a,{required:!0,type:"text",name:"sortorder",placeholder:"date",value:"06-04-2024",onChange:this.changeHandler}))),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Pending List")))))))}}]),t}(o.Component);a.default=x},803:function(e,a,t){},808:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(91);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,s=!0,c=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==l.return||l.return()}finally{if(c)throw r}}}}}}]);
//# sourceMappingURL=164.21ae6cec.chunk.js.map