(this.webpackJsonpfobofriends=this.webpackJsonpfobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),i=(n(13),n(2)),o=n(0),h=function(e){var t=e.name,n=e.email,c=e.id;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow shadow-5",children:[Object(o.jsx)("img",{src:"https://robohash.org/".concat(c,'"?150x150'),alt:"Cara de robot"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:t}),Object(o.jsx)("p",{children:n})]})]})})},j=function(e){var t=e.robots;return Object(o.jsx)("div",{children:t.map((function(e,n){return Object(o.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email},t[n].id)}))})},l=function(e){var t=e.searchChange;return Object(o.jsx)("div",{className:"pa2",children:Object(o.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Busca Robots",onChange:t})})},b=function(e){return Object(o.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"450px"},children:e.children})},u=n(5),d=n(6),O=n(8),f=n(7),g=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this)).state={hasError:!1},c}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(o.jsx)("h1",{children:"ups! i did it again"}):this.props.children}}]),n}(r.a.Component);n(15);var p=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),h=a[0],u=a[1],d=Object(c.useState)(0),O=Object(i.a)(d,2),f=O[0];O[1],Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users/").then((function(e){return e.json()})).then((function(e){return r(e)})),console.log(f)}),[f]);var p=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return n.length?Object(o.jsxs)("div",{className:"tc",children:[Object(o.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(o.jsx)(l,{searchChange:function(e){u(e.target.value)}}),Object(o.jsx)(b,{children:Object(o.jsx)(g,{children:Object(o.jsx)(j,{robots:p})})})]}):Object(o.jsx)("h1",{className:"tc",children:"Cargando"})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(16);a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.6306bdc2.chunk.js.map