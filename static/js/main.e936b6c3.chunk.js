(this.webpackJsonpshoes=this.webpackJsonpshoes||[]).push([[0],{35:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var s=r(3),a=r(1),o=r(24),n=r.n(o),i=(r(35),r(36),r(4)),l=r(5),c=r(45),f=r(47),m=r(44),h=r(46),u=r(30),p=r(22),j=Object(p.a)({current:null,items:{laces:"#ffffff",mesh:"#ffffff",caps:"#ffffff",inner:"#ffffff",sole:"#ffffff",stripes:"#ffffff",band:"#ffffff",patch:"#ffffff"}}),b={laces:"\u0448\u043d\u0443\u0440\u043e\u043a",mesh:"\u043e\u0441\u043d\u043e\u0432\u0430",caps:"\u043a\u043e\u043b\u043f\u0430\u0447\u043e\u043a",inner:"\u043f\u043e\u0434\u043a\u043b\u0430\u0434\u043a\u0430",sole:"\u043f\u043e\u0434\u043e\u0448\u0432\u0430",stripes:"\u043f\u043e\u043b\u043e\u0441\u043a\u0430",band:"\u043b\u0435\u043d\u0442\u0430",patch:"\u0437\u0430\u0434\u043d\u0438\u043a"};function g(){var e=Object(a.useRef)(),t=Object(p.b)(j),r=Object(c.a)("/shoe-draco.glb"),o=r.nodes,n=r.materials;Object(l.b)((function(t){var r=t.clock.getElapsedTime();e.current.rotation.z=-.2-(1+Math.sin(r/1.5))/20,e.current.rotation.x=Math.cos(r/4)/8,e.current.rotation.y=Math.sin(r/4)/8,e.current.position.y=(1+Math.sin(r/1.5))/10}));var f=Object(a.useState)(null),m=Object(i.a)(f,2),h=m[0],u=m[1];return Object(a.useEffect)((function(){var e='<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="'.concat(t.items[h],'"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="11" letter-spacing="-.06em"><tspan x="12" y="63">').concat(unescape(encodeURIComponent(b[h])),'</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>');document.body.style.cursor="url('data:image/svg+xml;base64,".concat(btoa(h?e:'<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>'),"'), auto")}),[h]),Object(s.jsxs)("group",{ref:e,dispose:null,onPointerOver:function(e){return e.stopPropagation(),u(e.object.material.name)},onPointerOut:function(e){return 0===e.intersections.length&&u(null)},onPointerMissed:function(){return j.current=null},onPointerDown:function(e){return e.stopPropagation(),j.current=e.object.material.name},children:[Object(s.jsx)("mesh",{geometry:o.shoe.geometry,material:n.laces,"material-color":t.items.laces}),Object(s.jsx)("mesh",{geometry:o.shoe_1.geometry,material:n.mesh,"material-color":t.items.mesh}),Object(s.jsx)("mesh",{geometry:o.shoe_2.geometry,material:n.caps,"material-color":t.items.caps}),Object(s.jsx)("mesh",{geometry:o.shoe_3.geometry,material:n.inner,"material-color":t.items.inner}),Object(s.jsx)("mesh",{geometry:o.shoe_4.geometry,material:n.sole,"material-color":t.items.sole}),Object(s.jsx)("mesh",{geometry:o.shoe_5.geometry,material:n.stripes,"material-color":t.items.stripes}),Object(s.jsx)("mesh",{geometry:o.shoe_6.geometry,material:n.band,"material-color":t.items.band}),Object(s.jsx)("mesh",{geometry:o.shoe_7.geometry,material:n.patch,"material-color":t.items.patch})]})}function d(){var e=Object(p.b)(j);return Object(s.jsxs)("div",{style:{display:e.current?"block":"none"},children:[Object(s.jsx)(u.a,{className:"picker",color:e.items[e.current],onChange:function(t){return j.items[e.current]=t}}),Object(s.jsx)("h1",{children:b[e.current]})]})}function x(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(l.a,{concurrent:!0,pixelRatio:[1,1.5],camera:{position:[0,0,2.75]},children:[Object(s.jsx)("ambientLight",{intensity:.3}),Object(s.jsx)("spotLight",{intensity:.3,angle:.1,penumbra:1,position:[5,25,20]}),Object(s.jsxs)(a.Suspense,{fallback:null,children:[Object(s.jsx)(g,{}),Object(s.jsx)(f.a,{files:"royal_esplanade_1k.hdr"}),Object(s.jsx)(m.a,{"rotation-x":Math.PI/2,position:[0,-.8,0],opacity:.25,width:10,height:10,blur:2,far:1})]}),Object(s.jsx)(h.a,{minPolarAngle:Math.PI/2,maxPolarAngle:Math.PI/2,enableZoom:!1,enablePan:!1})]}),Object(s.jsx)(d,{})]})}n.a.render(Object(s.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.e936b6c3.chunk.js.map