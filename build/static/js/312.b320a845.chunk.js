(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[312],{2173:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return x}));var n=t(808),l=t(51),r=t(13),s=t(14),c=t(16),i=t(15),o=t(0),m=t.n(o),u=t(1110),d=t(1111),f=t(1108),g=t(1109),p=t(1112),b=t(173),h=t(1115),v=t(1118),E=t(1120),y=t(1121),S=t(784),N=t(117),j=(t(27),t(804)),H=t.n(j),O=t(56),x=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(r.a)(this,t),(s=a.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler=function(e){s.setState({selectedFile:e.target.files}),s.setState({selectedName:e.target.files.name}),console.log(e.target.files)},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(l.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){console.log(s.state.root),e.preventDefault();var a=new FormData;a.append("banner_title",s.state.banner_title),a.append("root",s.state.root),a.append("status",s.state.status);var t,l=Object(n.a)(s.state.selectedFile);try{for(l.s();!(t=l.n()).done;){var r=t.value;null!==s.state.selectedFile&&a.append("banner_img",r,r.name)}}catch(f){l.e(f)}finally{l.f()}var c,i=Object(n.a)(a.values());try{for(i.s();!(c=i.n()).done;){var o=c.value;console.log(o)}}catch(f){i.e(f)}finally{i.f()}var m,u=Object(n.a)(a.keys());try{for(u.s();!(m=u.n()).done;){var d=m.value;console.log(d)}}catch(f){u.e(f)}finally{u.f()}N.a.post("admin/addbanner",a).then((function(e){console.log(e),H()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/pagesetup/banner/bannerList")})).catch((function(e){console.log(e)}))},s.state={banner_title:"",status:"",banner_img:"",selectedFile:void 0,selectedName:"",pages:[]},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/admin/getPages").then((function(a){e.setState({pages:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(d.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(f.a,{listTag:"div"},m.a.createElement(g.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(g.a,{href:"/app/pagesetup/banner/bannerList",tag:"a"},"Banner List"),m.a.createElement(g.a,{active:!0},"Add Banner"))))),m.a.createElement(p.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Banner")),m.a.createElement(d.a,null,m.a.createElement(O.b,{render:function(e){var a=e.history;return m.a.createElement(b.a,{className:" btn btn-success float-right",onClick:function(){return a.push("/app/pagesetup/banner/bannerList")}},"Back")}}))),m.a.createElement(h.a,null,m.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a,null,"Title"),m.a.createElement(y.a,{required:!0,type:"text",name:"banner_title",placeholder:"",value:this.state.banner_title,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"}),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a,null,"Image"),m.a.createElement(S.a,{type:"file",multiple:!0,onChange:this.onChangeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(o.Component)},808:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(91);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,s=!0,c=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==l.return||l.return()}finally{if(c)throw r}}}}}}]);
//# sourceMappingURL=312.b320a845.chunk.js.map