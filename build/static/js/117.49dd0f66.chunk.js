(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[117],{2317:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),o=a(16),l=a(15),i=a(0),c=a.n(i),s=(a(819),a(1111)),m=a(1112),u=a(1113),d=a(1114),p=a(1116),b=a(822),E=a(828),h=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={editorState:b.EditorState.createEmpty()},e.onEditorStateChange=function(t){e.setState({editorState:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.editorState;return c.a.createElement(u.a,null,c.a.createElement(d.a,null),c.a.createElement(p.a,null,c.a.createElement(E.Editor,{editorState:e,wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange})))}}]),a}(c.a.Component),f=a(1115),v=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).addStar=function(){var t=e.props,a=t.editorState,n=t.onChange,r=b.Modifier.replaceText(a.getCurrentContent(),a.getSelection(),"\u2b50",a.getCurrentInlineStyle());n(b.EditorState.push(a,r,"insert-characters"))},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"custom-tool"},c.a.createElement("span",{"aria-label":"star",role:"img",onClick:this.addStar},"\u2b50"))}}]),a}(c.a.Component),C=function(){return c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Custom Toolbar Option - Insert Star")),c.a.createElement(p.a,null,c.a.createElement(E.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",toolbarCustomButtons:[c.a.createElement(v,null)]})))},O=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).uploadImageCallBack=function(e){return new Promise((function(t,a){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);t(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);a(e)}))}))},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Image Upload & Preview")),c.a.createElement(p.a,null,c.a.createElement(E.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}})))}}]),a}(c.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={editorState:b.EditorState.createEmpty()},e.onEditorStateChange=function(t){e.setState({editorState:t})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.editorState;return c.a.createElement(u.a,null,c.a.createElement(d.a,null,c.a.createElement(f.a,null,"Inline Editor Only Visible When Focused")),c.a.createElement(p.a,null,c.a.createElement(E.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",defaultEditorState:e,toolbarOnFocus:!0,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}})))}}]),a}(c.a.Component),S=(a(809),a(805),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,null,c.a.createElement(m.a,{sm:"12"},c.a.createElement(h,null)),c.a.createElement(m.a,{sm:"12"},c.a.createElement(C,null)),c.a.createElement(m.a,{sm:"12"},c.a.createElement(O,null)),c.a.createElement(m.a,{sm:"12"},c.a.createElement(y,null))))}}]),a}(c.a.Component));t.default=S},805:function(e,t,a){},819:function(e,t,a){"use strict";var n=a(13),r=a(14),o=a(16),l=a(15),i=a(0),c=a.n(i),s=a(1111),m=a(1112),u=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(s.a,{className:"mb-2"},c.a.createElement(m.a,{sm:"12",className:"ml-50"},c.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?c.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):c.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(c.a.Component);t.a=u}}]);
//# sourceMappingURL=117.49dd0f66.chunk.js.map