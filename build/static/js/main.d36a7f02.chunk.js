(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=n(2),l=function(e){var t=e.filterable,n=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{value:t,onChange:n,style:{margin:8}}))},i=function(e){var t=e.addPerson,n=e.newName,a=e.handleNameChange,o=e.newNumber,c=e.handleNumberChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:n,onChange:a,style:{margin:8}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:o,onChange:c,style:{margin:8}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=function(e){var t=e.personsToShow,n=e.removePerson;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("p",{key:e.id},e.name," ",e.number,r.a.createElement("button",{style:{margin:5},onClick:function(){return n(e.id,e.name)}},"delete"))})))},s=n(3),d=n.n(s),f="/api/persons",h=function(){return d.a.get(f)},b=function(e){return d.a.post(f,e)},p=function(e,t){return d.a.put("".concat(f,"/").concat(e),t)},v=function(e){return d.a.delete("".concat(f,"/").concat(e))},E=function(e){var t=e.message,n=e.type;return""===n?null:"rejected"===n?r.a.createElement("div",{className:"rejected"},t):r.a.createElement("div",{className:"completed"},t)},g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),d=s[0],f=s[1],g=Object(a.useState)(""),w=Object(u.a)(g,2),j=w[0],C=w[1],O=Object(a.useState)(!0),y=Object(u.a)(O,2),N=y[0],S=y[1],k=Object(a.useState)(""),L=Object(u.a)(k,2),P=L[0],T=L[1],J=Object(a.useState)(""),A=Object(u.a)(J,2),D=A[0],F=A[1],x=Object(a.useState)(""),B=Object(u.a)(x,2),I=B[0],M=B[1],q=N?n:n.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())}));Object(a.useEffect)((function(){h().then((function(e){o(e.data)}))}));var z=function(e,t){F(e),M(t),setTimeout((function(){F(""),M("")}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:D,type:I}),r.a.createElement(l,{personsToShow:q,handleFilterChange:function(e){S(!N),T(e.target.value)}}),r.a.createElement("h3",null," Add a new"),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var t={name:d.trim(),number:j.trim()};if(function(e){return n.map((function(e){return e.name.toLowerCase().trim()})).includes(e.toLowerCase().trim())}(d)){if(window.confirm("".concat(d," is already added to the phonebook,\n            replace the old number with new one?"))){var a=n.filter((function(e){return e.name.toLowerCase().trim()===t.name.toLowerCase().trim()}));p(a[0].id,t).then((function(e){f(""),C(""),z("Number updated for ".concat(t.name),"completed")})).catch((function(e){z("".concat(t.name," has already been removed from the server"),"rejected")}))}f(""),C("")}else b(t).then((function(e){console.log(e.body),o(n.concat(e.data)),f(""),C(""),z("Added ".concat(t.name,"!"),"completed")})).catch((function(e){f(""),C(""),z(JSON.stringify(e.response.data),"rejected"),console.log("error",e.response.data)}))},newName:d,handleNameChange:function(e){return f(e.target.value)},newNumber:j,handleNumberChange:function(e){return C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{personsToShow:q,removePerson:function(e,t){window.confirm("Delete ".concat(t,"?"))&&v(e).then((function(e){return z("".concat(t," removed from the list"),"completed")})).catch((function(e){console.log(e)}))}}))};n(36);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d36a7f02.chunk.js.map