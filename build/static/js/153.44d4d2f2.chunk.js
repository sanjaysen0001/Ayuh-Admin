(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[153],{2033:function(e,a,t){"use strict";t.r(a),t.d(a,"EditUser",(function(){return C}));var n=t(810),l=t(51),r=t(13),s=t(14),c=t(16),m=t(15),o=t(0),i=t.n(o),u=t(1112),d=t(1110),h=t(1111),g=t(174),p=t(1115),f=t(1118),E=t(1120),b=t(1121),v=t(117),y=(t(802),t(56)),N=(t(799),t(804)),w=t.n(N),C=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state);var a=new FormData;a.append("fullname",s.state.fullname),a.append("email",s.state.email),a.append("status",s.state.status),null!==s.state.selectedFile&&a.append("userimg",s.state.selectedFile,s.state.selectedName);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(u){l.e(u)}finally{l.f()}var c,m=Object(n.a)(a.keys());try{for(m.s();!(c=m.n()).done;){var o=c.value;console.log(o)}}catch(u){m.e(u)}finally{m.f()}var i=s.props.match.params.id;v.a.post("/user/myprofile/".concat(i),a).then((function(e){console.log(e.data),w()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/user/userList")})).catch((function(e){console.log(e)}))},s.state={fullname:"",email:"",mobile:"",password:"",cnfmPassword:"",userimg:"",selectedName:"",selectedFile:null},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;v.a.get("/user/viewoneuser/".concat(a)).then((function(a){console.log(a),e.setState({fullname:a.data.data.fullname,email:a.data.data.email,mobile:a.data.data.mobile,userimg:a.data.userimg})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(h.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Patient")),i.a.createElement(h.a,null,i.a.createElement(y.b,{render:function(e){var a=e.history;return i.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.goBack()}},"Back")}}))),i.a.createElement(p.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Name"),i.a.createElement(b.a,{required:!0,type:"text",name:"fullname",placeholder:"Enter First Name",value:this.state.fullname,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Email"),i.a.createElement(b.a,{required:!0,type:"email",name:"email",placeholder:"Enter Last Name",value:this.state.email,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Mobile No."),i.a.createElement(b.a,{required:!0,type:"number",name:"mobile",placeholder:"Mobile No.",value:this.state.mobile,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"User Image"),i.a.createElement(b.a,{className:"form-control",type:"file",name:"userimg",onChange:this.onChangeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Date Of Register"),i.a.createElement(b.a,{required:!0,type:"date",name:"sortorder",placeholder:"Enter Confirm  Password",value:this.state.sortorder,onChange:this.changeHandler}))),i.a.createElement(d.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Password "),i.a.createElement(b.a,{required:!0,type:"password",name:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Confirm Password "),i.a.createElement(b.a,{required:!0,type:"password",name:"cnfmPassword",placeholder:"Enter Confirm  Password",value:this.state.cnfmPassword,onChange:this.changeHandler}))),i.a.createElement(d.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Schedule "),i.a.createElement(b.a,{required:!0,type:"schedule",name:"schedule",placeholder:"Enter Schedule",value:this.state.schedule,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Consulting"),i.a.createElement(b.a,{required:!0,type:"consulting",name:"consulting",placeholder:"Enter Consulting",value:this.state.cnfmPassword,onChange:this.changeHandler}))),i.a.createElement(d.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Vip Consulting Fees "),i.a.createElement(b.a,{required:!0,type:"schedule",name:"schedule",placeholder:"Enter Schedule",value:this.state.schedule,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,null,"Physician visit fees "),i.a.createElement(b.a,{required:!0,type:"consulting",name:"consulting",placeholder:"Enter Consulting",value:this.state.cnfmPassword,onChange:this.changeHandler}))),i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(E.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"approvedstatus",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),i.a.createElement(d.a,null,i.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Patient")))))))}}]),t}(o.Component);a.default=C},802:function(e,a,t){},810:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(91);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,s=!0,c=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==l.return||l.return()}finally{if(c)throw r}}}}}}]);
//# sourceMappingURL=153.44d4d2f2.chunk.js.map