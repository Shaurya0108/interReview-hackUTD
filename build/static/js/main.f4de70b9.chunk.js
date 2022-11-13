(this["webpackJsonpreact-firebase-boilerplate"]=this["webpackJsonpreact-firebase-boilerplate"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(28),i=n.n(c),s=n(23),o=n(39),u=n(50),d=n(27),l=(n(63),n(29)),f=Object(d.a)({reducer:{app:l.b},middleware:Object(u.a)(Object(d.c)())}),b=n(37),p=n(9),j=n(31),m=n(34),h=n.n(m),g=(n(67),function(){return Object(r.useEffect)((function(){return h.a.start(),function(){h.a.done()}})),""}),v=n(40),O=n(6),x=a.a.lazy((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,139))})),w=a.a.lazy((function(){return n.e(5).then(n.bind(null,137))}));var k=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.app})),n=t.checked,a=t.loggedIn;return Object(r.useEffect)((function(){e(l.a.authenticate())}),[]),n?Object(O.jsx)(b.a,{children:Object(O.jsx)(r.Suspense,{fallback:Object(O.jsx)(g,{}),children:a?Object(O.jsxs)(p.d,{children:[Object(O.jsx)(p.b,{path:j.a.dashboard,children:Object(O.jsx)(w,{})}),Object(O.jsx)(p.a,{to:j.a.dashboard})]}):Object(O.jsxs)(p.d,{children:[Object(O.jsx)(p.b,{path:"/",children:Object(O.jsx)(x,{})}),Object(O.jsx)(p.a,{to:"/"})]})})}):Object(O.jsx)("div",{className:"app-loader-container",children:Object(O.jsx)(v.a,{size:"4rem",color:"white",isLoading:!0})})};var y=function(){return Object(r.useEffect)((function(){Object(o.b)()}),[]),Object(O.jsx)(s.a,{store:f,children:Object(O.jsx)("div",{"data-testid":"app",className:"app",children:Object(O.jsx)(k,{})})})},I=(n(98),n(99),function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,138)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))});i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),I()},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(24),a=n(17),c=n(19),i=n.n(c),s=n(27),o=n(21);n(65),n(101),n(102),n(103),n(104);o.a.initializeApp({apiKey:"AIzaSyAj-B06geY5J95TeLcGDloZqr7UlA8GeLU",authDomain:"interview-e28be.firebaseapp.com",databaseURL:"https://inteRview.firebaseio.com",projectId:"interview-e28be",storageBucket:"interview-e28be.appspot.com",messagingSenderId:"968914091232",appId:"1:968914091232:web:f41b40e91f74eefdea6485"}),o.a.analytics();var u=o.a.auth(),d=(o.a.storage().ref(),o.a.performance(),o.a.firestore()),l=(o.a,Object(s.b)({name:"app",initialState:{checked:!1,loggedIn:!1,me:{}},reducers:{setMe:function(e,t){return Object(a.a)(Object(a.a)({},e),{},{me:t.payload.me,loggedIn:t.payload.loggedIn,checked:!0})},setLoggedIn:function(e,t){return Object(a.a)(Object(a.a)({},e),{},{loggedIn:t.payload})}}})),f=function(){return function(e){u.onAuthStateChanged(function(){var t=Object(r.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return",e(l.actions.setMe({loggedIn:!1,checked:!0,me:{}})));case 2:return t.next=4,d.collection("users").doc(null===n||void 0===n?void 0:n.uid).get();case 4:return r=t.sent,t.abrupt("return",e(l.actions.setMe({loggedIn:(null===n||void 0===n?void 0:n.emailVerified)&&r.exists,me:r.exists?Object(a.a)({id:null===n||void 0===n?void 0:n.uid,emailVerified:null===n||void 0===n?void 0:n.emailVerified},r.data()):{},checked:!0})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},b=Object(a.a)(Object(a.a)({},l.actions),{},{authenticate:f,signup:function(e){var t=e.fullName,n=e.email,a=e.password;return function(){return new Promise(function(){var e=Object(r.a)(i.a.mark((function e(r,c){var s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.createUserWithEmailAndPassword(n,a);case 3:return s=e.sent,o=s.user,e.next=7,o.sendEmailVerification();case 7:return e.next=9,d.collection("users").doc(o.uid).set({fullName:t,email:n});case 9:r(o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),c(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}())}},login:function(e){var t=e.email,n=e.password;return function(e){return new Promise(function(){var a=Object(r.a)(i.a.mark((function r(a,c){var s,o;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.signInWithEmailAndPassword(t,n);case 3:if(s=r.sent,(o=s.user)||c(new Error("Failed to login. please try it again later")),o.emailVerified){r.next=9;break}return r.next=9,o.sendEmailVerification();case 9:e(f()),a(o),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),c(r.t0);case 16:case"end":return r.stop()}}),r,null,[[0,13]])})));return function(e,t){return a.apply(this,arguments)}}())}},logout:function(){return function(e){return new Promise(function(){var t=Object(r.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.signOut();case 3:e(l.actions.setMe({checked:!0,loggedIn:!1,me:{}})),n(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,n){return t.apply(this,arguments)}}())}},resetPassword:function(e){return function(){return u.sendPasswordResetEmail(e)}}});t.b=l.reducer},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={login:"/login",signup:"/signup",profile:"/profile",resetPassword:"/reset-password",confirmEmail:"/confirm-email",dashboard:"/dashboard"}},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));n(1);var r=n(46),a=n(22),c=n(30),i=n(6),s=function(e){var t=e.name,n=e.className,a=e.style;return Object(i.jsx)(r.a,{icon:t,className:n,style:a})};s.defaultProps={name:"",className:"",style:{}};var o=s,u=function(){return a.b.add(c.b,c.a,c.c)};t.a=o},40:function(e,t,n){"use strict";var r=n(17),a=n(38),c=n(48),i=n(6),s=["color","size","isLoading"],o=function(e){var t=e.color,n=e.size,o=e.isLoading,u=Object(a.a)(e,s);return Object(i.jsx)(c.ClipLoader,Object(r.a)({color:t,size:n,loading:o},u))};o.defaultProps={color:"black",size:"1.5rem",isLoading:!1};var u=o;t.a=u},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.f4de70b9.chunk.js.map