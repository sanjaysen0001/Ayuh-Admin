(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[349],{2139:function(e,a,t){"use strict";t.r(a);var c=t(51),o=t(2),l=t(37),n=t(0),r=t.n(n),s=t(56),m=t(949),i=t(1110),u=t(1111),d=t(1112),E=t(1113),b=t(173),f=t(1115),p=t(1118),h=t(1119),v=t(1120),g=t(784),j=t(1121);a.default=function(){var e=Object(s.g)(),a=Object(n.useState)({commissionValue:"",doctors:[],selectAllDoctors:!1}),t=Object(l.a)(a,2),D=t[0],O=t[1];return r.a.createElement(i.a,null,r.a.createElement(u.a,{sm:"12",md:"8",className:"mx-auto"},r.a.createElement(d.a,null,r.a.createElement(E.a,null,r.a.createElement("h3",null,"Doctor's Commission Form"),r.a.createElement(b.a,{color:"danger",className:"ml-2",onClick:function(){return e.goBack()}},"Back")),r.a.createElement(f.a,null,r.a.createElement(p.a,{onSubmit:function(e){e.preventDefault(),console.log("Form submitted:",D)}},r.a.createElement(h.a,{row:!0,className:"align-items-center"},r.a.createElement(v.a,{for:"doctorsDropdown",sm:3},"Choose Doctors:"),r.a.createElement(u.a,{sm:6,className:"d-flex align-items-center"},r.a.createElement(m.a,{isMulti:!0,name:"doctorsDropdown",options:[],value:D.doctors,onChange:function(e){if(e&&Array.isArray(e)){var a=e.map((function(e){return{id:e.value,selected:!0}}));O(Object(o.a)(Object(o.a)({},D),{},{doctors:a,selectAllDoctors:!1}))}else console.error("Selected options are null or undefined.")},className:"w-100",required:!0}),r.a.createElement("div",{className:"ml-2"},r.a.createElement(v.a,{check:!0},r.a.createElement(g.a,{type:"checkbox",id:"selectAllCheckbox",checked:D.selectAllDoctors,onChange:function(){var e=D.selectAllDoctors;O(Object(o.a)(Object(o.a)({},D),{},{doctors:[],selectAllDoctors:!e}))}}),"All")))),r.a.createElement(h.a,{row:!0},r.a.createElement(v.a,{for:"commissionValue",sm:3},"Commission Value:"),r.a.createElement(u.a,{sm:6},r.a.createElement(j.a,{type:"number",name:"commissionValue",id:"commissionValue",value:D.commissionValue,onChange:function(e){var a=e.target,t=a.name,l=a.value;O(Object(o.a)(Object(o.a)({},D),{},Object(c.a)({},t,l)))},placeholder:"Enter commission value",required:!0}))),r.a.createElement(h.a,{row:!0},r.a.createElement(u.a,{sm:{size:10,offset:3}},r.a.createElement(b.a,{color:"primary",type:"submit"},"Submit"))))))))}}}]);
//# sourceMappingURL=349.5982a5a4.chunk.js.map