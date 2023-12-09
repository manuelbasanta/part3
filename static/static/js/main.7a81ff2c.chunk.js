(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{16:function(e,n,t){e.exports=t(40)},21:function(e,n,t){},22:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),c=t.n(o),u=(t(21),t(15)),i=t(4),l=t(3),m=(t(22),function(e){var n=e.searchString,t=e.onChange;return r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Search by name",value:n,onChange:t}))}),s=function(e){var n=e.handleSubmit,t=e.handleInputChange,a=e.newPerson;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new"),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,r.a.createElement("div",null,"name:"," ",r.a.createElement("input",{value:a.name,name:"name",onChange:t})),r.a.createElement("div",null,"number:"," ",r.a.createElement("input",{value:a.number,name:"number",onChange:t}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},f=function(e){var n=e.filteredList,t=e.handleClick,a=n.map(function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.number,r.a.createElement("button",{onClick:function(){return t(e.id)}},"Delete"))});return r.a.createElement("div",null,r.a.createElement("h2",null,"Numbers"),a)},d=t(2),p=t.n(d),b="http://localhost:3001/persons",h=function(){return p.a.get(b).then(function(e){return e.data})},g=function(e){return p.a.post(b,e).then(function(e){return e.data})},v=function(e){return p.a.delete("".concat(b,"/").concat(e)).then(function(e){return e})},y=function(e){return p.a.put("".concat(b,"/").concat(e.id),e).then(function(e){return e.data})},E=function(e){var n=e.notification,t="error"===n.type?"red":"green",a={color:t,border:"3px solid ".concat(t),display:"inline-block",padding:10,fontStyle:"italic",fontSize:16};return n.msg?r.a.createElement("div",{style:a},n.msg):null};function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(t,!0).forEach(function(n){Object(i.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)({name:"",number:""}),d=Object(l.a)(c,2),p=d[0],b=d[1],O=Object(a.useState)(""),j=Object(l.a)(O,2),C=j[0],S=j[1],k=Object(a.useState)({msg:"",type:""}),P=Object(l.a)(k,2),D=P[0],L=P[1];Object(a.useEffect)(function(){h().then(function(e){o(e)})},[]);var I=t.filter(function(e){return e.name.toLowerCase().includes(C.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{notification:D}),r.a.createElement(m,{onChange:function(e){S(e.target.value)},searchString:C}),r.a.createElement(s,{handleInputChange:function(e){b(w({},p,Object(i.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault();var n=t.find(function(e){return e.name.toLowerCase()===p.name.toLowerCase()});if(n)window.confirm("".concat(p.name," is already added to the phonebook, replace the old number with a new one?"))&&y(w({},n,{number:p.number})).then(function(e){var n=t.findIndex(function(n){return n.id===e.id}),a=Object(u.a)(t);L({msg:"Changed ".concat(e.name,"'s number"),type:"success"}),setTimeout(function(){L({msg:"",type:""})},5e3),a.splice(n,1,e),o(a)}).catch(function(e){console.log(e.response.data),L({msg:e.response.data.message,type:"error"}),setTimeout(function(){L({msg:"",type:""})},5e3)});else{var a=w({},p);g(a).then(function(e){o(t.concat(e)),b({name:"",number:""}),L({msg:"Added ".concat(e.name),type:"success"}),setTimeout(function(){L({msg:"",type:""})},5e3)}).catch(function(e){console.log(e.response.data),L({msg:e.response.data.message,type:"error"}),setTimeout(function(){L({msg:"",type:""})},5e3)})}},newPerson:p}),r.a.createElement(f,{filteredList:I,handleClick:function(e){var n=t.find(function(n){return n.id===e});window.confirm("Delete ".concat(n.name,"?"))&&v(e).then(function(n){o(t.filter(function(n){return n.id!==e}))}).catch(function(e){console.log(e)})}}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7a81ff2c.chunk.js.map