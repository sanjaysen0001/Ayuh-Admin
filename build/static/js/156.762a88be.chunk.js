(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[156],{2063:function(e,a,t){"use strict";t.r(a),t.d(a,"Editacceptlist",(function(){return x}));var n=t(810),l=t(51),r=t(13),c=t(14),s=t(16),m=t(15),o=t(0),i=t.n(o),u=t(1115),d=t(1113),p=t(1114),f=t(174),h=t(1118),g=t(1121),b=t(1123),v=t(1124),E=t(117),y=(t(802),t(56)),N=(t(799),t(804)),S=t.n(N),x=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=a.call(this,e)).onChangeHandler=function(e){c.setState({selectedFile:e.target.files[0]}),c.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler1=function(e){c.setState({status:e.target.value})},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault(),console.log(c.state);var a=new FormData;a.append("fullname",c.state.fullname),a.append("email",c.state.email),a.append("status",c.state.status),null!==c.state.selectedFile&&a.append("userimg",c.state.selectedFile,c.state.selectedName);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(u){l.e(u)}finally{l.f()}var s,m=Object(n.a)(a.keys());try{for(m.s();!(s=m.n()).done;){var o=s.value;console.log(o)}}catch(u){m.e(u)}finally{m.f()}var i=c.props.match.params.id;E.a.post("/user/myprofile/".concat(i),a).then((function(e){console.log(e.data),S()("Success!","Submitted SuccessFull!","success"),c.props.history.push("/app/user/userList")})).catch((function(e){console.log(e)}))},c.state={fullname:"",email:"",mobile:"",password:"",cnfmPassword:"",userimg:"",selectedName:"",selectedFile:null},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;E.a.get("/user/viewoneuser/".concat(a)).then((function(a){console.log(a),e.setState({fullname:a.data.data.fullname,email:a.data.data.email,mobile:a.data.data.mobile,userimg:a.data.userimg})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Accepted List")),i.a.createElement(p.a,null,i.a.createElement(y.b,{render:function(e){var a=e.history;return i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.goBack()}},"Back")}}))),i.a.createElement(h.a,null,i.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Doctor Name"),i.a.createElement(v.a,{required:!0,type:"text",name:"fullname",placeholder:"Enter First Name",value:"mohit"})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Patient Name"),i.a.createElement(v.a,{required:!0,type:"text",name:"email",placeholder:"Enter Last Name",value:"rohan"})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Pharma No."),i.a.createElement(v.a,{required:!0,type:"number",name:"mobile",placeholder:"Mobile No.",value:"9632581470",onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Time "),i.a.createElement(v.a,{required:!0,type:"text",name:"sortorder",placeholder:"date",value:"12:30 PM                    ",onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,null,"Date "),i.a.createElement(v.a,{required:!0,type:"text",name:"sortorder",placeholder:"date",value:"09-04-2024                      ",onChange:this.changeHandler}))),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(b.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Accepted List")))))))}}]),t}(o.Component);a.default=x},802:function(e,a,t){},810:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(91);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,c=!0,s=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return c=e.done,e},e:function(e){s=!0,r=e},f:function(){try{c||null==l.return||l.return()}finally{if(s)throw r}}}}}}]);
//# sourceMappingURL=156.762a88be.chunk.js.map