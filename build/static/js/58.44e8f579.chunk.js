(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[58],{1994:function(e,a,t){e.exports=t.p+"static/media/register.23d1bae7.jpg"},2317:function(e,a,t){"use strict";t.r(a);var n=t(13),r=t(14),l=t(16),s=t(15),c=t(0),o=t.n(c),i=t(1110),u=t(1111),m=t(1112),p=t(1113),d=t(1114),h=t(815),b=t(786),f=t(1115),v=t(816),g=t(817),E=t(1118),y=t(1119),N=t(1121),j=t(1120),C=t(173),w=t(822),O=t(274),x=t(26),T=t(46),k=t(27),P=(t(574),t(575),t(35)),I=t.n(P),S=t(219);T.apps.length||T.initializeApp(S.a);var W=T.auth(),A=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithFirebase(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(E.a,{onSubmit:this.handleRegister},o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(N.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(j.a,null,"Name")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(N.a,{type:"text",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(j.a,null,"Email")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(N.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(j.a,null,"Password")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(N.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(j.a,null,"Confirm Password")),o.a.createElement(y.a,null,o.a.createElement(w.a,{color:"primary",icon:o.a.createElement(O.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(C.a.Ripple,{onClick:function(){return k.a.push("/pages/login")},color:"primary",outline:!0},"Login"),o.a.createElement(C.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),M=Object(x.b)((function(e){return{values:e.auth.register}}),{signupWithFirebase:function(e,a,t){return function(n){var r=null;W.createUserWithEmailAndPassword(e,a).then((function(e){W.onAuthStateChanged((function(a){e.user.updateProfile({displayName:t}),a&&(r=a.email,n({type:"SIGNUP_WITH_EMAIL",payload:{email:r,name:t,isSignedIn:!0}}),n({type:"LOGIN_WITH_EMAIL",payload:{email:r,name:t}}))})),k.a.push("/")})).catch((function(e){console.log(e.message)}))}}})(A),R=t(85),q=function(e){var a=Object(R.b)(),t=a.isAuthenticated,n=a.loginWithRedirect;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{className:"pt-1 pb-3"},o.a.createElement(C.a.Ripple,{color:"primary",className:"mt-1",onClick:function(e){e.preventDefault(),t?console.log("Already Logged In"):n()}},"Register With Auth0")))},z=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithJWT(e.state.email,e.state.password,e.state.name)},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(E.a,{action:"/",onSubmit:this.handleRegister},o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(N.a,{type:"text",placeholder:"Name",required:!0,value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}),o.a.createElement(j.a,null,"Name")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(N.a,{type:"email",placeholder:"Email",required:!0,value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}),o.a.createElement(j.a,null,"Email")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(N.a,{type:"password",placeholder:"Password",required:!0,value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})}}),o.a.createElement(j.a,null,"Password")),o.a.createElement(y.a,{className:"form-label-group"},o.a.createElement(N.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}),o.a.createElement(j.a,null,"Confirm Password")),o.a.createElement(y.a,null,o.a.createElement(w.a,{color:"primary",icon:o.a.createElement(O.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),o.a.createElement("div",{className:"d-flex justify-content-between"},o.a.createElement(C.a.Ripple,{color:"primary",outline:!0,onClick:function(){k.a.push("/pages/login")}},"Login"),o.a.createElement(C.a.Ripple,{color:"primary",type:"submit"},"Register")))}}]),t}(o.a.Component),L=Object(x.b)((function(e){return{values:e.auth.register}}),{signupWithJWT:function(e,a,t){return function(n){I.a.post("/api/authenticate/register/user",{email:e,password:a,name:t}).then((function(e){var a;e.data&&(a=e.data.user,localStorage.setItem("token",e.data.token),n({type:"LOGIN_WITH_JWT",payload:{loggedInUser:a,loggedInWith:"jwt"}}),k.a.push("/"))})).catch((function(e){return console.log(e)}))}}})(z),_=t(1994),F=t.n(_),J=(t(879),function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=a.call.apply(a,[this].concat(l))).state={activeTab:"1"},e.toggle=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.a,{className:"m-0 justify-content-center"},o.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},o.a.createElement(m.a,{className:"bg-authentication rounded-0 mb-0 w-100"},o.a.createElement(i.a,{className:"m-0"},o.a.createElement(u.a,{lg:"6",className:"d-lg-block d-none text-center align-self-center px-1 py-0"},o.a.createElement("img",{className:"mr-1",src:F.a,alt:"registerImg"})),o.a.createElement(u.a,{lg:"6",md:"12",className:"p-0"},o.a.createElement(m.a,{className:"rounded-0 mb-0 p-2"},o.a.createElement(p.a,{className:"pb-1 pt-50"},o.a.createElement(d.a,null,o.a.createElement("h4",{className:"mb-0"},"Create Account"))),o.a.createElement("p",{className:"px-2 auth-title mb-0"},"Fill the below form to create a new AES account."),o.a.createElement(h.a,{tabs:!0,className:"px-2"},o.a.createElement(b.a,null),o.a.createElement(b.a,null),o.a.createElement(b.a,null)),o.a.createElement(f.a,{className:"pt-1 pb-50"},o.a.createElement(v.a,{activeTab:this.state.activeTab},o.a.createElement(g.a,{tabId:"1"},o.a.createElement(L,null)),o.a.createElement(g.a,{tabId:"2"},o.a.createElement(M,null)),o.a.createElement(g.a,{tabId:"3"},o.a.createElement(q,null))))))))))}}]),t}(o.a.Component));a.default=J},802:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),r=t.n(n).a.createContext({})},815:function(e,a,t){"use strict";var n=t(5),r=t(9),l=t(0),s=t.n(l),c=t(1),o=t.n(c),i=t(4),u=t.n(i),m=t(3),p=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],d={tabs:o.a.bool,pills:o.a.bool,vertical:o.a.oneOfType([o.a.bool,o.a.string]),horizontal:o.a.string,justified:o.a.bool,fill:o.a.bool,navbar:o.a.bool,card:o.a.bool,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object},h=function(e){var a=e.className,t=e.cssModule,l=e.tabs,c=e.pills,o=e.vertical,i=e.horizontal,d=e.justified,h=e.fill,b=e.navbar,f=e.card,v=e.tag,g=Object(r.a)(e,p),E=Object(m.mapToCssModules)(u()(a,b?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(o),{"nav-tabs":l,"card-header-tabs":f&&l,"nav-pills":c,"card-header-pills":f&&c,"nav-justified":d,"nav-fill":h}),t);return s.a.createElement(v,Object(n.a)({},g,{className:E}))};h.propTypes=d,h.defaultProps={tag:"ul",vertical:!1},a.a=h},816:function(e,a,t){"use strict";var n=t(5),r=t(12),l=t(0),s=t.n(l),c=t(1),o=t.n(c),i=t(4),u=t.n(i),m=t(802),p=t(3),d={tag:p.tagPropType,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,l=Object(p.omit)(this.props,Object.keys(d)),c=Object(p.mapToCssModules)(u()("tab-content",a),t);return s.a.createElement(m.a.Provider,{value:{activeTabId:this.state.activeTab}},s.a.createElement(r,Object(n.a)({},l,{className:c})))},a}(l.Component);a.a=h,h.propTypes=d,h.defaultProps={tag:"div"}},817:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(5),r=t(9),l=t(0),s=t.n(l),c=t(1),o=t.n(c),i=t(4),u=t.n(i),m=t(802),p=t(3),d=["className","cssModule","tabId","tag"],h={tag:p.tagPropType,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function b(e){var a=e.className,t=e.cssModule,l=e.tabId,c=e.tag,o=Object(r.a)(e,d),i=function(e){return Object(p.mapToCssModules)(u()("tab-pane",a,{active:l===e}),t)};return s.a.createElement(m.a.Consumer,null,(function(e){var a=e.activeTabId;return s.a.createElement(c,Object(n.a)({},o,{className:i(a)}))}))}b.propTypes=h,b.defaultProps={tag:"div"}},822:function(e,a,t){"use strict";var n=t(13),r=t(14),l=t(16),s=t(15),c=t(0),o=t.n(c),i=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),t}(o.a.Component);a.a=i},879:function(e,a,t){}}]);
//# sourceMappingURL=58.44e8f579.chunk.js.map