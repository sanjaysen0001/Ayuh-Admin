(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[245],{2165:function(e,a,t){"use strict";t.r(a),t.d(a,"AddSUBCategory",(function(){return O}));var n=t(808),r=t(51),l=t(13),s=t(14),o=t(16),c=t(15),m=t(0),i=t.n(m),d=t(1112),u=t(1110),p=t(1111),g=t(173),h=t(1115),f=t(1118),v=t(1120),E=t(1121),y=t(117),b=(t(803),t(56)),C=(t(799),t(820)),N=(t(813),t(821)),S=(t(805),t(806)),w=t.n(S),O=function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={astroId:"",name:"",img:"",desc:"",status:"",editorState:N.EditorState.createEmpty(),selectedFile:void 0,selectedName:""},e.uploadImageCallBack=function(e){return new Promise((function(a,t){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);a(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);t(e)}))}))},e.onEditorStateChange=function(a){e.setState({editorState:a,desc:w()(Object(N.convertToRaw)(a.getCurrentContent()))})},e.onChangeHandler=function(a){e.setState({selectedFile:a.target.files[0]}),e.setState({selectedName:a.target.files[0].name}),console.log(a.target.files[0])},e.onChangeHandler=function(a){e.setState({selectedFile:a.target.files}),e.setState({selectedName:a.target.files.name}),console.log(a.target.files)},e.changeHandler1=function(a){e.setState({status:a.target.value})},e.changeHandler=function(a){e.setState(Object(r.a)({},a.target.name,a.target.value))},e.submitHandler=function(a){a.preventDefault(),console.log(e.props.match.params,e.state);var t=new FormData;t.append("astroId",e.state.astroId),t.append("name",e.state.name),t.append("desc",e.state.desc),t.append("status",e.state.status);var r,l=Object(n.a)(e.state.selectedFile);try{for(l.s();!(r=l.n()).done;){var s=r.value;null!==e.state.selectedFile&&t.append("img",s,s.name)}}catch(g){l.e(g)}finally{l.f()}var o,c=Object(n.a)(t.values());try{for(c.s();!(o=c.n()).done;){var m=o.value;console.log(m)}}catch(g){c.e(g)}finally{c.f()}var i,d=Object(n.a)(t.keys());try{for(d.s();!(i=d.n()).done;){var u=i.value;console.log(u)}}catch(g){d.e(g)}finally{d.f()}var p=e.props.match.params.id;y.a.post("/admin/addProductcategory",p,t).then((function(a){console.log(a),e.props.history.push("/app/productmanager/category/categoryList")})).catch((function(e){console.log(e)}))},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Sub-Category")),i.a.createElement(p.a,null,i.a.createElement(b.b,{render:function(e){var a=e.history;return i.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.goBack()}},"Back")}}))),i.a.createElement(h.a,null,i.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(v.a,null,"Category Name"),i.a.createElement(E.a,{required:!0,type:"text",name:"name",placeholder:"Enter Category Name",onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(v.a,null,"Sub-Category Name"),i.a.createElement(E.a,{required:!0,type:"text",name:"name",placeholder:"Enter Category Name",onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},i.a.createElement(v.a,null," Description"),i.a.createElement("br",null),i.a.createElement(C.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}}))),i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),i.a.createElement(u.a,null,i.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(m.Component);a.default=O},805:function(e,a,t){}}]);
//# sourceMappingURL=245.f1a16dc2.chunk.js.map