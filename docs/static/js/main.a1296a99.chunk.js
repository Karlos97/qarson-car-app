(this["webpackJsonpqarson-car-app"]=this["webpackJsonpqarson-car-app"]||[]).push([[0],[,,,function(e,t,a){e.exports={th:"Row_th__bOHVB",available:"Row_available__2jsFX","not-available":"Row_not-available__2dmzi","image-small":"Row_image-small__1tvyr","image-big":"Row_image-big__1vlYJ"}},,function(e,t,a){e.exports={"table-head":"Table_table-head__1edcl","table-head-name":"Table_table-head-name__2vIP3",table:"Table_table__2OuB7"}},function(e,t,a){e.exports={backdrop:"Modal_backdrop__3FAPo",modal:"Modal_modal__P3_V5","slide-down":"Modal_slide-down__2idxy"}},,function(e,t,a){e.exports={button:"Button_button__2x4Q4"}},,,,,,function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(4),l=a.n(i),o=(a(14),a(15),a(2)),s=a(5),r=a.n(s),d=a(0),b=function(e){return Object(d.jsx)("img",{alt:"Car".concat(e.model),src:e.image,className:e.class,onClick:e.onClick})},j=a(8),h=a.n(j),u=function(e){return Object(d.jsx)("button",{className:h.a.button,onClick:e.onClick,id:e.id,children:e.children})},m=a(3),O=a.n(m),x=a(6),f=a.n(x),_=function(e){return Object(d.jsx)("div",{className:f.a.backdrop,onClick:e.onClose})},p=document.getElementById("overlay"),v=function(e){return Object(d.jsx)("div",{className:f.a.modal,children:Object(d.jsx)("div",{className:f.a.contents,children:e.children})})},g=function(e){return Object(d.jsxs)(d.Fragment,{children:[l.a.createPortal(Object(d.jsx)(_,{onClose:e.onClose}),p),l.a.createPortal(Object(d.jsx)(v,{children:e.children}),p)]})},k=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],i=a[1],l=e.photo?Object(d.jsx)(b,{image:e.photo,model:e.model,class:O.a["image-small"],onClick:function(){i(!c)}}):null;return Object(d.jsxs)(d.Fragment,{children:[c&&Object(d.jsx)(g,{onClose:function(){i(!c)},children:Object(d.jsx)(b,{image:e.photo,model:e.model,class:O.a["image-big"]})}),Object(d.jsxs)("tr",{id:e.id,className:e.availability?O.a.available:O.a["not-available"],children:[Object(d.jsx)("th",{children:Object(d.jsxs)("div",{className:O.a.th,children:[Object(d.jsx)("p",{children:e.make}),l]})}),Object(d.jsx)("th",{children:e.model}),Object(d.jsx)("th",{children:e.engine}),Object(d.jsx)("th",{children:e.availability?"tak":"nie"}),Object(d.jsxs)("th",{children:[Object(d.jsx)(u,{onClick:e.handleDeleteRow,id:e.id,children:"Usun z listy"}),Object(d.jsx)(u,{onClick:e.changeAvailability,id:e.id,children:"Zmien dostepnosc"})]})]})]})},y=function(e){return e.data.map((function(t,a){return Object(d.jsx)(k,{availability:t.availability,photo:t.photo,model:t.model,engine:t.engine,make:t.make,id:t.id,handleDeleteRow:e.handleDeleteRow,changeAvailability:e.changeAvailability},t.id)}))},w=a(9),C=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(!1),s=Object(o.a)(l,2),b=s[0],j=s[1],h=Object(n.useState)(""),u=Object(o.a)(h,2),m=u[0],O=u[1];Object(n.useEffect)((function(){fetch("https://bitbucket.org/dacsoftware/recruitment/raw/e824e5c44befb603535a33ea88a4888c92cf1042/data.json").then((function(e){return e.json()})).then((function(e){O(e.offers.map((function(e){return e.id=Object(w.uuid)(),e}))),i(!0)})).catch((function(e){return alert("ERROR")}))}),[]);return Object(d.jsx)("section",{className:r.a.table,children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{className:r.a["table-head"],children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{onClick:function(){O(m.sort((function(e,t){return e.make[0]>t.make[0]?!b:b}))),j(!b)},className:r.a["table-head-name"],children:"Nazwa"}),Object(d.jsx)("th",{children:"Model"}),Object(d.jsx)("th",{children:"Silnik"}),Object(d.jsx)("th",{children:"Dostepnosc"}),Object(d.jsx)("th",{children:"Akcje"})]})}),Object(d.jsx)("tbody",{children:c&&Object(d.jsx)(y,{data:m,handleDeleteRow:function(e){O(m.filter((function(t){return t.id!==e.target.id})))},stockData:m,changeAvailability:function(e){O(m.map((function(t){return t.id===e.target.id&&(t.availability=!t.availability),t})))}})})]})})};var N=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"header-app",children:"This is recruitment task for Qarson company."}),Object(d.jsx)(C,{})]})};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.a1296a99.chunk.js.map