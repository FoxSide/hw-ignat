(this["webpackJsonphw-ignat"]=this["webpackJsonphw-ignat"]||[]).push([[0],[,,function(e,t,a){e.exports={title:"Affairs_title__1h215",wrapp:"Affairs_wrapp__3G2pW",body:"Affairs_body__3Y1id",affair:"Affairs_affair__2TG2-",buttons:"Affairs_buttons__cs-tD",button:"Affairs_button__FQ7rg",buttonDelete:"Affairs_buttonDelete__3ldTT",name:"Affairs_name__27iXT"}},,function(e,t,a){e.exports={title:"Message_title__2tFy4",avatar:"Message_avatar__24Xyo",body:"Message_body__1Iqe2",textBody:"Message_textBody__2xOJI",name:"Message_name__1CMH4",message:"Message_message__3YZ5Y",time:"Message_time__Y_9hP"}},,,function(e,t,a){e.exports={wrapp:"Greeting_wrapp__1D86Q",title:"Greeting_title__FLodR",input:"Greeting_input__1wqjd",button:"Greeting_button__3TANj",error:"Greeting_error__1Nn6d"}},,,function(e,t,a){e.exports={superInput:"SuperInputText_superInput__3SgvG",errorInput:"SuperInputText_errorInput__1nJUy",error:"SuperInputText_error__1tLMH"}},function(e,t,a){e.exports={blue:"HW4_blue__3NKrq",column:"HW4_column__10PUF",testSpanError:"HW4_testSpanError__38ID_",title:"HW4_title__1du7m"}},,function(e,t,a){e.exports={default:"SuperButton_default__knn4h",red:"SuperButton_red__21JhZ"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__1WK8u",spanClassName:"SuperCheckbox_spanClassName__l3Bdm"}},,function(e,t,a){e.exports={App:"App_App__3Eddm"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(15),s=a.n(c),i=(a(22),a(16)),o=a.n(i),l=a(4),d=a.n(l),u=a(0);var j=function(e){return Object(u.jsxs)("div",{className:d.a.body,children:[Object(u.jsx)("div",{className:d.a.avatar,children:Object(u.jsx)("img",{src:e.avatar,alt:"ava"})}),Object(u.jsxs)("div",{className:d.a.textBody,children:[Object(u.jsx)("div",{className:d.a.name,children:e.name}),Object(u.jsx)("div",{className:d.a.message,children:e.message}),Object(u.jsx)("div",{className:d.a.time,children:e.time})]})]})},b="https://papik.pro/uploads/posts/2021-09/1631739726_7-papik-pro-p-prostie-risunki-yedinorozhki-7.jpg",_="Eduard",h="Hi, it's homework is done :)",m="22:00";var p=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:d.a.title,children:"Homework 1:"}),Object(u.jsx)(j,{avatar:b,name:_,message:h,time:m})]})},x=a(3),f=a(2),O=a.n(f);var v=function(e){return Object(u.jsxs)("div",{className:O.a.affair,children:[Object(u.jsx)("div",{className:O.a.name,children:e.affair.name}),Object(u.jsx)("div",{children:e.affair.priority}),Object(u.jsx)("button",{className:O.a.buttonDelete,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var g=function(e){var t=e.data.map((function(t){return Object(u.jsx)(v,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{className:O.a.body,children:[Object(u.jsx)("div",{className:O.a.title,children:"Homework 2:"}),Object(u.jsx)("div",{children:t}),Object(u.jsxs)("div",{className:O.a.buttons,children:[Object(u.jsx)("button",{className:O.a.button,onClick:function(){e.setFilter("all")},children:Object(u.jsx)("b",{children:"All"})}),Object(u.jsx)("button",{className:O.a.button,onClick:function(){e.setFilter("high")},children:Object(u.jsx)("b",{children:"High"})}),Object(u.jsx)("button",{className:O.a.button,onClick:function(){e.setFilter("middle")},children:Object(u.jsx)("b",{children:"Middle"})}),Object(u.jsx)("button",{className:O.a.button,onClick:function(){e.setFilter("low")},children:Object(u.jsx)("b",{children:"Low"})})]})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(n.useState)(N),t=Object(x.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),s=Object(x.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(u.jsx)("div",{className:O.a.wrapp,children:Object(u.jsx)(g,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}})})},C=a(17),y=a(7),w=a.n(y),T=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers;return Object(u.jsxs)("div",{className:w.a.wrapp,children:[Object(u.jsx)("div",{className:w.a.title,children:"Homework 3 :"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:a,className:w.a.input}),Object(u.jsx)("button",{onClick:n,className:w.a.button,children:"add"})]}),Object(u.jsx)("span",{className:w.a.error,children:r}),Object(u.jsx)("span",{children:c})]})},A=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),c=Object(x.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)("Entered Text!"),l=Object(x.a)(o,2),d=l[0],j=l[1],b="\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0432\u043e\u0434\u043e\u0432: ".concat(t.length);return Object(u.jsx)(T,{name:s,setNameCallback:function(e){e.currentTarget.value?(i(e.currentTarget.value),j("")):(i(""),j("Entered Text!"))},addUser:function(){s.length?(a(s),alert("Hello ".concat(s," !")),i("")):alert("Entered Text!")},error:d,totalUsers:b})},S=a(26);var H=function(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],r=t[1];return Object(u.jsx)("div",{children:Object(u.jsx)(A,{users:a,addUserCallback:function(e){var t={_id:Object(S.a)(),name:e};r([].concat(Object(C.a)(a),[t]))}})})},I=a(5),E=a(6),M=a(10),F=a.n(M),B=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(E.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(F.a.error," ").concat(i||""),d="".concat(""!==o.value?F.a.superInput:F.a.errorInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(I.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:d},o)),c&&Object(u.jsx)("span",{className:l,children:c})]})},G=a(11),U=a.n(G),W=a(13),D=a.n(W),J=function(e){var t=e.red,a=e.className,n=Object(E.a)(e,["red","className"]),r="".concat(t?D.a.red:D.a.default," ").concat(a);return Object(u.jsx)("button",Object(I.a)({className:r},n))},K=a(14),P=a.n(K),Y=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(E.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(P.a.checkbox," ").concat(n||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(I.a)({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:s},c)),r&&Object(u.jsx)("span",{className:P.a.spanClassName,children:r})]})};var q=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=t[0],r=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(x.a)(i,2),l=o[0],d=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:U.a.title,children:"Homework 4 :"}),Object(u.jsxs)("div",{className:U.a.column,children:[Object(u.jsx)(B,{value:a,onChangeText:r,onEnter:s,error:c}),Object(u.jsx)(B,{className:U.a.blue}),Object(u.jsx)(J,{children:"default"}),Object(u.jsx)(J,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(J,{disabled:!0,children:"disabled"}),Object(u.jsx)(Y,{checked:l,onChangeChecked:d,children:"some text "}),Object(u.jsx)(Y,{checked:l,onChange:function(e){return d(e.currentTarget.checked)}})]})]})};var L=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)(p,{}),Object(u.jsx)(k,{}),Object(u.jsx)(H,{}),Object(u.jsx)(q,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(L,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[24,1,2]]]);
//# sourceMappingURL=main.6736cee0.chunk.js.map