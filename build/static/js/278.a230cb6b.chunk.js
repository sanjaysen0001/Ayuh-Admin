(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[278],{2041:function(e,a,t){"use strict";t.r(a),t.d(a,"Editdisease",(function(){return D}));var n=t(810),r=t(51),l=t(13),s=t(14),o=t(16),c=t(15),i=t(0),m=t.n(i),d=t(1113),u=t(1111),p=t(1112),g=t(174),h=t(1116),v=t(1119),f=t(1121),E=t(1122),y=t(117),b=t(828),N=(t(809),t(822)),C=t(806),S=t.n(C),w=(t(805),t(802),t(56)),D=(t(1094),function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(e=a.call.apply(a,[this].concat(o))).state={name:"",img:"",desc:"",status:"",selectedFile:void 0,selectedName:"",editorState:N.EditorState.createEmpty()},e.uploadImageCallBack=function(e){return new Promise((function(a,t){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);a(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);t(e)}))}))},e.onEditorStateChange=function(a){e.setState({editorState:a,desc:S()(Object(N.convertToRaw)(a.getCurrentContent()))})},e.onChangeHandler=function(a){e.setState({selectedFile:a.target.files[0]}),e.setState({selectedName:a.target.files[0].name}),console.log(a.target.files[0])},e.onChangeHandler=function(a){e.setState({selectedFile:a.target.files}),e.setState({selectedName:a.target.files.name}),console.log(a.target.files)},e.changeHandler1=function(a){e.setState({status:a.target.value})},e.changeHandler=function(a){e.setState(Object(r.a)({},a.target.name,a.target.value))},e.submitHandler=function(a){a.preventDefault(),console.log(e.props.match.params,e.state);var t=new FormData;t.append("name",e.state.name),t.append("desc",e.state.desc),t.append("status",e.state.status),null!==e.state.selectedFile&&t.append("img",e.state.selectedFile,e.state.selectedName);var r,l=Object(n.a)(t.values());try{for(l.s();!(r=l.n()).done;){var s=r.value;console.log(s)}}catch(d){l.e(d)}finally{l.f()}var o,c=Object(n.a)(t.keys());try{for(c.s();!(o=c.n()).done;){var i=o.value;console.log(i)}}catch(d){c.e(d)}finally{c.f()}var m=e.props.match.params.id;y.a.post("/admin/editProductCategory/".concat(m),t).then((function(a){console.log(a),e.props.history.push("/app/productmanager/category/categoryList")})).catch((function(e){console.log(e)}))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("/admin/viewonePdctCategory/".concat(a)).then((function(a){console.log(a),e.setState({name:a.data.data.name,img:a.data.data.img,desc:a.data.data.desc,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(d.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(p.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Disease")),m.a.createElement(p.a,null,m.a.createElement(w.b,{render:function(e){var a=e.history;return m.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/appmanagement/disease-list")}},"Back")}}))),m.a.createElement(h.a,null,m.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(p.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(f.a,null,"Disease Name"),m.a.createElement(E.a,{required:!0,type:"text",name:"name",placeholder:"Enter Category Name",value:"fever",onChange:this.changeHandler})),m.a.createElement(p.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},m.a.createElement(f.a,null," Description"),m.a.createElement("br",null),m.a.createElement(b.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange,value:"dummy data",toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}}))),m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(f.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),m.a.createElement(u.a,null,m.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(i.Component));a.default=D},805:function(e,a,t){}}]);
//# sourceMappingURL=278.a230cb6b.chunk.js.map