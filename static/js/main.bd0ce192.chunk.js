(this["webpackJsonphw-ignat"]=this["webpackJsonphw-ignat"]||[]).push([[0],[,,,,function(e,t,n){e.exports={title:"Affairs_title__1h215",wrapp:"Affairs_wrapp__3G2pW",body:"Affairs_body__3Y1id",affair:"Affairs_affair__2TG2-",buttons:"Affairs_buttons__cs-tD",button:"Affairs_button__FQ7rg",buttonDelete:"Affairs_buttonDelete__3ldTT",name:"Affairs_name__27iXT"}},,function(e,t,n){e.exports={title:"Message_title__2tFy4",avatar:"Message_avatar__24Xyo",body:"Message_body__1Iqe2",textBody:"Message_textBody__2xOJI",name:"Message_name__1CMH4",message:"Message_message__3YZ5Y",time:"Message_time__Y_9hP"}},,,,,function(e,t,n){e.exports={wrapp:"Greeting_wrapp__1D86Q",title:"Greeting_title__FLodR",input:"Greeting_input__1wqjd",button:"Greeting_button__3TANj",error:"Greeting_error__1Nn6d"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3SgvG",errorInput:"SuperInputText_errorInput__1nJUy",error:"SuperInputText_error__1tLMH"}},function(e,t,n){e.exports={blue:"HW4_blue__3NKrq",column:"HW4_column__10PUF",testSpanError:"HW4_testSpanError__38ID_",title:"HW4_title__1du7m"}},,function(e,t,n){e.exports={default:"SuperButton_default__knn4h",red:"SuperButton_red__21JhZ"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1WK8u",spanClassName:"SuperCheckbox_spanClassName__l3Bdm"}},,function(e,t,n){e.exports={App:"App_App__3Eddm"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),s=n.n(c),i=(n(25),n(19)),o=n.n(i),l=n(7),j=n(0);var d=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"404"}),Object(j.jsx)("div",{children:"Page not found!"}),Object(j.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},u=n(6),b=n.n(u);var h=function(e){return Object(j.jsxs)("div",{className:b.a.body,children:[Object(j.jsx)("div",{className:b.a.avatar,children:Object(j.jsx)("img",{src:e.avatar,alt:"ava"})}),Object(j.jsxs)("div",{className:b.a.textBody,children:[Object(j.jsx)("div",{className:b.a.name,children:e.name}),Object(j.jsx)("div",{className:b.a.message,children:e.message}),Object(j.jsx)("div",{className:b.a.time,children:e.time})]})]})},x="https://papik.pro/uploads/posts/2021-09/1631739726_7-papik-pro-p-prostie-risunki-yedinorozhki-7.jpg",O="Eduard",_="Hi, it's homework is done :)",m="22:00";var p=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:b.a.title,children:"Homework 1:"}),Object(j.jsx)(h,{avatar:x,name:O,message:_,time:m})]})},f=n(3),v=n(4),g=n.n(v);var N=function(e){return Object(j.jsxs)("div",{className:g.a.affair,children:[Object(j.jsx)("div",{className:g.a.name,children:e.affair.name}),Object(j.jsx)("div",{children:e.affair.priority}),Object(j.jsx)("button",{className:g.a.buttonDelete,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var k=function(e){var t=e.data.map((function(t){return Object(j.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(j.jsxs)("div",{className:g.a.body,children:[Object(j.jsx)("div",{className:g.a.title,children:"Homework 2:"}),Object(j.jsx)("div",{children:t}),Object(j.jsxs)("div",{className:g.a.buttons,children:[Object(j.jsx)("button",{className:g.a.button,onClick:function(){e.setFilter("all")},children:Object(j.jsx)("b",{children:"All"})}),Object(j.jsx)("button",{className:g.a.button,onClick:function(){e.setFilter("high")},children:Object(j.jsx)("b",{children:"High"})}),Object(j.jsx)("button",{className:g.a.button,onClick:function(){e.setFilter("middle")},children:Object(j.jsx)("b",{children:"Middle"})}),Object(j.jsx)("button",{className:g.a.button,onClick:function(){e.setFilter("low")},children:Object(j.jsx)("b",{children:"Low"})})]})]})},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(a.useState)(C),t=Object(f.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(f.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(j.jsx)("div",{className:g.a.wrapp,children:Object(j.jsx)(k,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})})},w=n(20),T=n(11),A=n.n(T),S=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers;return Object(j.jsxs)("div",{className:A.a.wrapp,children:[Object(j.jsx)("div",{className:A.a.title,children:"Homework 3 :"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{value:t,onChange:n,className:A.a.input}),Object(j.jsx)("button",{onClick:a,className:A.a.button,children:"add"})]}),Object(j.jsx)("span",{className:A.a.error,children:r}),Object(j.jsx)("span",{children:c})]})},E=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(f.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)("Entered Text!"),l=Object(f.a)(o,2),d=l[0],u=l[1],b="\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0432\u0432\u043e\u0434\u043e\u0432: ".concat(t.length);return Object(j.jsx)(S,{name:s,setNameCallback:function(e){e.currentTarget.value?(i(e.currentTarget.value),u("")):(i(""),u("Entered Text!"))},addUser:function(){s.length?(n(s),alert("Hello ".concat(s," !")),i("")):alert("Entered Text!")},error:d,totalUsers:b})},H=n(29);var I=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1];return Object(j.jsx)("div",{children:Object(j.jsx)(E,{users:n,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e};r([].concat(Object(w.a)(n),[t]))}})})},M=n(9),F=n(10),W=n(13),B=n.n(W),G=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(B.a.error," ").concat(i||""),d="".concat(""!==o.value?B.a.superInput:B.a.errorInput," ").concat(s);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:d},o)),c&&Object(j.jsx)("span",{className:l,children:c})]})},P=n(14),U=n.n(P),D=n(16),J=n.n(D),K=function(e){var t=e.red,n=e.className,a=Object(F.a)(e,["red","className"]),r="".concat(t?J.a.red:J.a.default," ").concat(n);return Object(j.jsx)("button",Object(M.a)({className:r},a))},X=n(17),Y=n.n(X),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(a||"");return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},c)),r&&Object(j.jsx)("span",{className:Y.a.spanClassName,children:r})]})};var L=function(){var e=Object(a.useState)(""),t=Object(f.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(f.a)(i,2),l=o[0],d=o[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:U.a.title,children:"Homework 4 :"}),Object(j.jsxs)("div",{className:U.a.column,children:[Object(j.jsx)(G,{value:n,onChangeText:r,onEnter:s,error:c}),Object(j.jsx)(G,{className:U.a.blue}),Object(j.jsx)(K,{children:"default"}),Object(j.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(j.jsx)(K,{disabled:!0,children:"disabled"}),Object(j.jsx)(q,{checked:l,onChangeChecked:d,children:"some text "}),Object(j.jsx)(q,{checked:l,onChange:function(e){return d(e.currentTarget.checked)}})]})]})};var Q=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsx)(y,{}),Object(j.jsx)(I,{}),Object(j.jsx)(L,{})]})},Z=n(2),R=function(){return Object(j.jsx)("div",{children:"QEW"})},z=function(){return Object(j.jsx)("div",{children:"ZCX"})},$="/pre-junior",V="/junior",ee="/juniorPlus";function te(){return Object(j.jsx)("div",{children:Object(j.jsxs)(Z.c,{children:[Object(j.jsx)(Z.a,{path:$,element:Object(j.jsx)(Q,{})}),Object(j.jsx)(Z.a,{path:V,element:Object(j.jsx)(R,{})}),Object(j.jsx)(Z.a,{path:ee,element:Object(j.jsx)(z,{})}),Object(j.jsx)(Z.a,{path:"/*",element:Object(j.jsx)(d,{})})]})})}var ne=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(l.b,{to:$,children:"pre-junior--"}),Object(j.jsx)(l.b,{to:V,children:"junior--"}),Object(j.jsx)(l.b,{to:ee,children:"juniorPlus--"})]})};var ae=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(ne,{}),Object(j.jsx)(te,{})]})})};var re=function(){return Object(j.jsx)("div",{className:o.a.App,children:Object(j.jsx)(ae,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(re,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.bd0ce192.chunk.js.map