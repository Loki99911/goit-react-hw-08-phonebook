"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[274],{8274:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r,a,o,i,d,c,s,l,u,p,m,f,x,b,g,h,Z=t(168),v=t(6444),y=v.ZP.label(r||(r=(0,Z.Z)(["\n  font-size: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n"]))),k=v.ZP.input(a||(a=(0,Z.Z)(["\n  margin-left: 20px;\n  height: 25px;\n  width: 20vw;\n  border-radius: 5px;\n  border: 1px solid #35e6d6;\n  background-color: rgba(255, 255, 255, 0.35);\n  :focus {\n    border: 1px solid #35e6d6;\n  }\n"]))),j=t(9434),w=t(6895),C=t(184),z=function(){var n=(0,j.v9)((function(n){return n.filter})),e=(0,j.I0)();return(0,C.jsxs)(y,{children:["Search by name:",(0,C.jsx)(k,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){e((0,w.W)(n.currentTarget.value))},value:n,placeholder:"Name Surname"})]})},P=t(9439),A=t(2791),S=v.ZP.form(o||(o=(0,Z.Z)(["\n  display: flex;\n  gap: 5px;\n  margin: 0 auto;\n  flex-direction: column;\n  width: 30%;\n"]))),N=v.ZP.label(i||(i=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]))),E=v.ZP.input(d||(d=(0,Z.Z)(["\n  margin-left: 20px;\n  height: 25px;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #35e6d6;\n  background-color: rgba(255, 255, 255, 0.35);\n  :focus {\n    border: 1px solid #35e6d6;\n  }\n"]))),I=v.ZP.button(c||(c=(0,Z.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n  padding: 8px 10px;\n  border-radius: 5px;\n  border: 1px solid #35e6d6;\n  margin: 0 auto;\n  margin-top: 15px;\n  color: #35e6d6;\n  background-color: transparent;\n  cursor: pointer;\n  :hover {\n    color: black;\n    background-color: #35e6d6;\n  }\n"]))),L=t(4719),q=function(){var n=(0,A.useState)(""),e=(0,P.Z)(n,2),t=e[0],r=e[1],a=(0,A.useState)(""),o=(0,P.Z)(a,2),i=o[0],d=o[1],c=(0,j.v9)((function(n){return n.contacts})),s=(0,j.I0)(),l=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"number":d(n.target.value);break;default:return}};return(0,C.jsxs)(S,{onSubmit:function(n){if(n.preventDefault(),c.items.find((function(n){return n.name===t})))return alert("".concat(t," is already in contacts!"));s((0,L.uK)({name:t,number:i})),r(""),d("")},children:[(0,C.jsxs)(N,{children:["Name",(0,C.jsx)(E,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:l,value:t,placeholder:"my@mail.com"})]}),(0,C.jsxs)(N,{children:["Number",(0,C.jsx)(E,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:l,value:i,placeholder:"+38(050)123-45-67"})]}),(0,C.jsx)(I,{type:"submit",disabled:c.isLoading,children:"Add contact"})]})},T=v.ZP.li(s||(s=(0,Z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n"]))),D=v.ZP.button(l||(l=(0,Z.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n  padding: 8px 10px;\n  border-radius: 5px;\n  border: 1px solid #35e6d6;\n  color: #35e6d6;\n  background-color: transparent;\n  margin-right: 5px;\n  cursor: pointer;\n  :hover {\n    color: #0400ff;\n    border-color: #0400ff;\n    background-color: #35e6d6;\n  }\n"]))),F=v.ZP.button(u||(u=(0,Z.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n  padding: 8px 10px;\n  border-radius: 5px;\n  border: 1px solid #35e6d6;\n  color: #35e6d6;\n  background-color: transparent;\n  cursor: pointer;\n  :hover {\n    color: red;\n    border-color: red;\n    background-color: #35e6d6;\n  }\n"]))),B=v.ZP.div(p||(p=(0,Z.Z)(["\n  align-items: center;\n  background: rgba(255, 255, 255, 0.7);\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n"]))),J=v.ZP.form(m||(m=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin: 0 auto;\n  padding: 10px;\n  width: 30%;\n  border: 1px solid #35e6d6;\n  border-radius: 5px;\n  background-color: #e48913;\n"]))),M=v.ZP.label(f||(f=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]))),$=v.ZP.input(x||(x=(0,Z.Z)(["\n  margin-left: 20px;\n  height: 25px;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #35e6d6;\n  background-color: rgba(255, 255, 255, 0.35);\n  :focus {\n    border: 1px solid #35e6d6;\n  }\n"]))),K=v.ZP.button(b||(b=(0,Z.Z)(["\n  font-size: 16px;\n  font-weight: bold;\n  padding: 8px 10px;\n  border-radius: 5px;\n  border: 1px solid #35e6d6;\n  margin: 0 auto;\n  margin-top: 15px;\n  color: #35e6d6;\n  background-color: transparent;\n  cursor: pointer;\n  :hover {\n    color: black;\n    background-color: #35e6d6;\n  }\n"]))),G=function(n){var e=n.id,t=n.modalToggle,r=(0,j.v9)((function(n){return n.contacts.items})),a=r.find((function(n){return n.id===e})),o=(0,A.useState)("".concat(a.name)),i=(0,P.Z)(o,2),d=i[0],c=i[1],s=(0,A.useState)("".concat(a.number)),l=(0,P.Z)(s,2),u=l[0],p=l[1],m=(0,j.I0)(),f=function(n){switch(n.target.name){case"name":c(n.target.value);break;case"number":p(n.target.value);break;default:return}};(0,A.useEffect)((function(){var n=function(n){"Escape"===n.code&&t()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]);return(0,C.jsx)(B,{onClick:function(n){n.currentTarget===n.target&&t()},children:(0,C.jsxs)(J,{onSubmit:function(n){if(n.preventDefault(),r.find((function(n){return n.name===d&&n.number===u})))return alert("".concat(d," is already in contacts!"));m((0,L.Tk)({id:e,name:d,number:u})),c(""),p(""),t()},children:[(0,C.jsxs)(M,{children:["Name",(0,C.jsx)($,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:f,value:d})]}),(0,C.jsxs)(M,{children:["Number",(0,C.jsx)($,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:f,value:u})]}),(0,C.jsx)(K,{type:"submit",children:"Edit contact"})]})})},W=function(n){var e=n.contactItem,t=n.onClick,r=(0,j.v9)((function(n){return n.contacts.isLoading})),a=(0,A.useState)(!1),o=(0,P.Z)(a,2),i=o[0],d=o[1],c=function(){d((function(n){return!n}))};return(0,C.jsxs)(T,{children:[e.name,": ",e.number,(0,C.jsxs)("div",{children:[(0,C.jsx)(D,{type:"button",disabled:r,onClick:c,children:"Edit"}),(0,C.jsx)(F,{type:"button",disabled:r,onClick:t,children:"Delete"}),i&&(0,C.jsx)(G,{id:e.id,modalToggle:c})]})]})},Y=v.ZP.ul(g||(g=(0,Z.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  margin-top: 15px;\n"]))),H=function(){var n=(0,j.I0)();(0,A.useEffect)((function(){n((0,L.yF)())}),[n]);var e=(0,j.v9)((function(n){return n.contacts.items})),t=(0,j.v9)((function(n){return n.filter}));return(0,C.jsx)(Y,{children:(0!==e.length?e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())})):[]).map((function(e){var t=e.id;return(0,C.jsx)(W,{contactItem:e,onClick:function(){return function(e){var t=e.id,r=e.name;window.confirm('You want to delete the contact "'.concat(r,'"! Are you sure?'))&&n((0,L.GK)(t))}(e)}},t)}))})},O=v.ZP.h2(h||(h=(0,Z.Z)(["\n  font-size: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 30px auto;\n  padding: 0;\n"]))),Q=function(){return(0,C.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:24,color:"#010101"},children:[(0,C.jsx)(O,{children:"Phonebook"}),(0,C.jsx)(q,{}),(0,C.jsx)(O,{children:"Contacts"}),(0,C.jsx)(z,{}),(0,C.jsx)(H,{})]})}}}]);
//# sourceMappingURL=274.e652c88d.chunk.js.map