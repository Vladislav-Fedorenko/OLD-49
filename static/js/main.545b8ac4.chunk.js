(this["webpackJsonpold-49"]=this["webpackJsonpold-49"]||[]).push([[0],Array(25).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),o=c.n(s),r=(c(25),c(26),c(3)),i=(c(27),c(2)),u=c(0),j=a.a.createContext(null),l=function(e){var t=e.children,c=Object(n.useState)(0),a=Object(r.a)(c,2),s=a[0],o=a[1],l=Object(n.useState)(null),b=Object(r.a)(l,2),x=b[0],f=b[1],O=Object(n.useState)(!1),d=Object(r.a)(O,2),m=d[0],p=d[1],g=Object(n.useState)(""),h=Object(r.a)(g,2),v=h[0],_=h[1],C=Object(i.f)(),k={progressbarValue:s,setProgressbarValue:o,audioTrack:x,setAudioTrack:f,gameOver:m,endGame:function(){m||(p(!0),C.push("/game-over"))},gameOverReason:v,setGameOverReason:_,reset:function(){o(0),f(null),p(!1),_("")}};return Object(u.jsx)(j.Provider,{value:k,children:t})},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.a,c=e.b;return t=t||0,c=c||100,Math.floor(t+Math.random()*c)},x=function(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current()}),t);return function(){return clearInterval(e)}}}),[t])},f=function(e){var t=e.intensity,c=void 0===t?null:t,a=e.children,s=Object(n.useContext)(j).progressbarValue,o=Object(n.useState)({}),i=Object(r.a)(o,2),l=i[0],f=i[1];return x((function(){f(function(e){var t,c=e?(t=e)>100?1:t/100:0,n=b({a:-100,b:200})*c,a=b({a:-100,b:200})*c,s=5*c;return{"--shake-x":"".concat(n,"px"),"--shake-y":"".concat(a,"px"),"--blur":"".concat(s,"px")}}(c||s))}),300),Object(u.jsx)("div",{className:"alko-image",style:l,children:a})},O=c.p+"static/media/img.f5292ba0.jpeg",d=c(12),m=c.n(d),p=c(9),g=c.p+"static/media/kamergerskiy.576de4d2.jpg",h=c.p+"static/media/phone.b9580232.png",v=c.p+"static/media/phone-rotate.9e7f4be7.png",_=(c(34),c(35),function(e){var t=e.text,c=void 0===t?"":t,n=e.textStyle,a=void 0===n?"neon":n,s=e.buttonStyle,o=void 0===s?"":s,r=e.textColor,i=void 0===r?"#fff":r,j=e.className,l=void 0===j?"":j,b=e.onClick,x=e.rest,f={"--buttonColor":i};return Object(u.jsx)("button",Object(p.a)(Object(p.a)({className:"button button--".concat(a," button--").concat(o," ").concat(l),style:f,onClick:b},x),{},{children:c}))}),C=(c(36),function(e){var t=e.src,c=e.alt,n=void 0===c?"":c,a=e.style,s=void 0===a?{}:a;return Object(u.jsx)("img",{className:"background-image",src:t,alt:n,style:s})}),k=c.p+"static/media/psychomecka.375ada2f.ogg",N=function(){var e=Object(n.useContext)(j),t=e.progressbarValue,c=e.setAudioTrack,a=t>50,s=a?{bottom:510,left:95}:{bottom:99,left:92},o=Object(n.useState)(s),l=Object(r.a)(o,2),x=l[0],O=l[1],d=Object(i.f)();Object(n.useEffect)((function(){c(k)}),[]);return Object(u.jsxs)(f,{children:[Object(u.jsx)(C,{src:g,style:{zIndex:0}}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"order-taxi-page",children:Object(u.jsxs)("div",{className:"order-taxi-page__phone-container",children:[Object(u.jsx)("img",{src:a?v:h,className:"order-taxi-page__phone",alt:"phone"}),Object(u.jsx)(_,{className:"order-taxi-page__button ".concat(a&&"order-taxi-page__button--rotate"),text:"Order taxi",textStyle:"",onClick:function(){return d.push("/choose-taxi")},rest:{style:Object(p.a)(Object(p.a)({},x),{},{background:"#28252b"}),onMouseOver:function(e){if(t){var c=b({b:1400})-700,n=b({b:700});setTimeout((function(){return O({left:c,bottom:n})}),150)}}}})]})})})]})},y=c.p+"static/media/choose_taxi.765f6850.jpg",S=(c(37),function(){var e=Object(i.f)(),t=Object(n.useContext)(j).setGameOverReason,c=[{number:"252",target:"Chekoldan"},{number:"291",target:"Port Artur"},{number:"917",target:"Stariy Kirovsk"},{number:"593",target:"Lukyanovka"},{number:"463",target:"Rabochie"},{number:"062",target:"Amur"}],a=c[Math.floor(100*Math.random())%c.length],s="#0fa";return Object(u.jsx)(f,{children:Object(u.jsxs)("div",{className:"choose-taxi-page",children:[Object(u.jsx)("img",{className:"choose-taxi-page__img",src:y,alt:"choose taxi"}),Object(u.jsx)(_,{text:"Driver ".concat(a.number," is here"),className:"choose-taxi__info-button",textColor:s,onClick:function(){}}),c.map((function(c){return Object(u.jsx)("div",{className:"choose-taxi__go-container choose-taxi__go-container_".concat(c.number),children:Object(u.jsx)(f,{children:Object(u.jsx)(_,{text:"Go!",textColor:s,className:"choose-taxi__go-button",onClick:function(){return function(c){c.number===a.number?e.push("/taxi"):(t("You chose not your taxi and landed in ".concat(c.target)),e.push("/game-over"))}(c)}})})})}))]})})}),w=c.p+"static/media/dance.d5031953.ogg",T=c.p+"static/media/party.e47365b2.gif",E=c.p+"static/media/party2.c860aa6b.gif",V=c.p+"static/media/party3.6dadbbe9.gif",G=c.p+"static/media/party4.6311b63f.gif",M=(c(38),c.p+"static/media/bar.9a209960.jpg"),P=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),o=Object(r.a)(s,2),l=o[0],b=o[1],x=Object(n.useState)(!1),O=Object(r.a)(x,2),d=O[0],m=O[1],p=Object(n.useState)(!1),g=Object(r.a)(p,2),h=g[0],v=g[1],_=Object(i.f)(),k=Object(n.useContext)(j).setAudioTrack;return Object(n.useEffect)((function(){k(w),setTimeout((function(){return a(!0)}),2e3),setTimeout((function(){return b(!0)}),4e3),setTimeout((function(){return m(!0)}),5e3),setTimeout((function(){return v(!0)}),6e3),setTimeout((function(){return _.push("/order-taxi")}),11e3)}),[]),Object(u.jsx)(f,{children:Object(u.jsxs)("div",{className:"dance-page",children:[Object(u.jsx)(C,{src:M}),c?Object(u.jsx)("img",{className:"dance-gif",src:T,alt:"party"}):null,l?Object(u.jsx)("img",{className:"dance-gif",src:E,alt:"party2"}):null,d?Object(u.jsx)("img",{className:"dance-gif",src:V,alt:"party3"}):null,h?Object(u.jsx)("img",{className:"dance-gif",src:G,alt:"party4"}):null]})})},R=(c(39),function(){var e=Object(i.f)(),t=Object(n.useContext)(j),c=t.setAudioTrack,a=t.reset;return Object(n.useEffect)((function(){Promise.all([a(),c(k)])}),[]),Object(u.jsx)("div",{className:"start-page",children:Object(u.jsx)(_,{text:"Start",className:"start-button",textColor:"#0fa",onClick:function(){return e.push("/bar")}})})}),A=c.p+"static/media/inside_taxi3.473ba8ae.jpg",D=(c(40),function(){var e=Object(n.useContext)(j),t=e.progressbarValue,c=e.setProgressbarValue,a=Object(n.useState)(void 0),s=Object(r.a)(a,2),o=s[0],l=s[1],O=Object(n.useState)(0),d=Object(r.a)(O,2),m=d[0],g=d[1],h=Object(i.f)(),v=function(){o&&k()},k=function(){l(void 0),c((function(e){return.7*e})),g((function(e){return e+1})),N()},N=function(){m<5&&setTimeout((function(){l({top:"".concat(-b({a:100,b:window.innerHeight-200}),"px"),left:"".concat(b({a:100,b:window.innerWidth-200}),"px")})}),b({a:500,b:1e3}))};Object(n.useEffect)((function(){N()}),[]),Object(n.useEffect)((function(){m>=5&&h.push("/flat")}),[m]),x((function(){o&&c((function(e){return e+10}))}),500),console.log("pos",o);var y=Object(n.useMemo)((function(){return Object(u.jsx)(f,{intensity:100,children:o&&Object(u.jsx)(_,{className:"focus-button",text:" ",textColor:"#0fa",rest:{style:Object(p.a)({},o),onMouseOver:v}})})}),[o]);return Object(n.useMemo)((function(){return Object(u.jsxs)("div",{className:"taxi-page-container",children:[Object(u.jsx)(f,{children:Object(u.jsx)(C,{src:A,style:{zIndex:0}})}),Object(u.jsx)(_,{className:"tip-button",text:"You have to focus",textColor:"#aa1a6f"}),y]})}),[t,o])}),L=c.p+"static/media/long.00bd7aaa.webp",I=(c(41),function(){var e=Object(i.f)(),t=Object(n.useContext)(j),c=t.progressbarValue,a=t.setProgressbarValue;return Object(u.jsx)(f,{children:Object(u.jsxs)("div",{className:"bar-page",children:[Object(u.jsx)(C,{src:M}),Object(u.jsx)("img",{src:L,height:600,className:"bar-page__cocktail",alt:"Long Iceland"}),Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{text:c?"Drink more":"Drink",className:"bar-page__button",textColor:"#f5f94b",onClick:function(){return a(c+20)}}),c&&Object(u.jsx)(_,{text:"Go Dance",className:"bar-page__button",textColor:"#0fa",onClick:function(){return e.push("/dance")}})]})]})})}),Y=(c(42),function(){var e=Object(n.useContext)(j).gameOverReason,t=Object(i.f)();return Object(u.jsxs)("div",{className:"game-over",children:[Object(u.jsx)(_,{text:"GAME OVER",onClick:function(){},className:"game-over__text",textColor:"#0fa"}),e&&Object(u.jsx)(_,{text:e,onClick:function(){},className:"game-over__reason",textColor:"#f5f94b"}),Object(u.jsx)(_,{text:"Go to start",className:"game-over__go-start",onClick:function(){return t.push("/start")},buttonStyle:"outlined",textColor:"#f5f94b"})]})}),F=(c(43),function(e){var t=e.maxValue,c=void 0===t?100:t,a=Object(n.useContext)(j).progressbarValue;return Object(u.jsx)("progress",{className:"bar",value:a,max:c})}),z=c(20),B=c.n(z),J=(c(44),function(){var e=null,t=Object(n.useState)(!1),c=Object(r.a)(t,2),a=c[0],s=c[1],o=Object(n.useContext)(j),i=o.setProgressbarValue,l=o.gameOver,f=Object(n.useState)(.95),O=Object(r.a)(f,2),d=O[0],m=O[1];Object(n.useEffect)((function(){return window.addEventListener("keydown",p),window.addEventListener("keyup",g),function(){window.removeEventListener("keydown",p),window.removeEventListener("keyup",g)}})),x((function(){a&&i((function(e){return e*d*d}))}),200);var p=function(t){"Space"===t.code&&(clearTimeout(e),a||(s(!0),e=setTimeout((function(){m(1.2)}),b({a:1e3,b:3500}))))},g=function(t){"Space"===t.code&&(clearTimeout(e),s(!1),m(.95))};return l?null:Object(u.jsx)("div",{className:B()("sleep",{active:a})})}),H=c.p+"static/media/heli.cce1a7d1.ogg",K=function(){var e=Object(n.useContext)(j).progressbarValue,t=(e>100?100:e)/100;return Object(n.useMemo)((function(){return Object(u.jsx)(m.a,{src:H,autoPlay:!0,controls:!1,loop:!0,volume:t*t})}),[t])},W=c.p+"static/media/flat.a3b3d142.jpg",q=(c(45),function(){var e=Object(n.useContext)(j).setGameOverReason,t=Object(n.useState)(!1),c=Object(r.a)(t,2),a=c[0],s=c[1],o=Object(n.useState)(!1),l=Object(r.a)(o,2),b=l[0],x=l[1],O=Object(i.f)(),d=function(t){t?(x(!0),s(!1)):(e("Don't you respect our sponsor?"),O.push("/game-over"))},m="#0fa";return Object(u.jsx)(f,{children:Object(u.jsxs)("div",{className:"flat-page",children:[Object(u.jsx)(C,{src:W}),a?Object(u.jsxs)("div",{className:"flat-page__order",children:[Object(u.jsx)("div",{children:Object(u.jsx)(f,{children:Object(u.jsx)(_,{text:"Choose order way",className:"flat-page__button flat-page__button_title",textColor:m,onClick:function(){}})})}),Object(u.jsxs)("div",{className:"flat-page__buttons",children:[Object(u.jsx)(f,{children:Object(u.jsx)(_,{text:"Delivery club",className:"flat-page__button",textColor:m,onClick:function(){return d(!1)}})}),Object(u.jsx)(f,{children:Object(u.jsx)(_,{text:"Domka",className:"flat-page__button",textColor:m,onClick:function(){return d(!0)}})})]})]}):Object(u.jsxs)("div",{className:"flat-page__default",children:[Object(u.jsx)(f,{children:Object(u.jsx)(_,{text:"Go sleep",className:"flat-page__button",textColor:m,onClick:function(){b?O.push("/happy-end"):(e("You threw up because you didn't eat anything"),O.push("/game-over"))}})}),b?null:Object(u.jsx)(f,{children:Object(u.jsx)(_,{text:"Eat something",className:"flat-page__button",textColor:m,onClick:function(){s(!0)}})})]})]})})}),Q=(c(46),function(){var e=Object(i.f)();return Object(u.jsxs)("div",{className:"game-over",children:[Object(u.jsx)(_,{text:"Congratulations!",onClick:function(){},className:"game-over__text",textColor:"#0fa"}),Object(u.jsx)(_,{text:"Your trip is over!",onClick:function(){},className:"game-over__reason",textColor:"#f5f94b"}),Object(u.jsx)(_,{text:"Go to start",className:"game-over__go-start",onClick:function(){return e.push("/start")},buttonStyle:"outlined",textColor:"#f5f94b"})]})}),U=(c(47),function(){var e=Object(n.useContext)(j),t=e.audioTrack,c=e.progressbarValue,a=e.endGame,s=e.setGameOverReason;c>=100&&(s("You drank too much!"),a());return Object(u.jsxs)("div",{className:"layout",children:[Object(u.jsx)(J,{}),Object(u.jsx)(m.a,{src:t,autoPlay:!0,controls:!1,volume:.4}),Object(u.jsx)("div",{className:"layout__progress",children:Object(u.jsx)(F,{})}),Object(u.jsx)("div",{className:"layout__exit",children:Object(u.jsx)(_,{text:"Give up",buttonStyle:"outlined",textColor:"#008957",onClick:function(){s("You gave up!"),a()}})}),Object(u.jsx)(K,{}),Object(u.jsxs)(i.c,{children:[Object(u.jsxs)(i.a,{path:"/bar",children:["               ",Object(u.jsx)(I,{}),"             "]}),Object(u.jsxs)(i.a,{path:"/dance",children:["             ",Object(u.jsx)(P,{}),"           "]}),Object(u.jsxs)(i.a,{path:"/order-taxi",children:["        ",Object(u.jsx)(N,{}),"      "]}),Object(u.jsxs)(i.a,{path:"/choose-taxi",children:["       ",Object(u.jsx)(S,{}),"     "]}),Object(u.jsxs)(i.a,{path:"/taxi",children:["              ",Object(u.jsx)(D,{}),"           "]}),Object(u.jsxs)(i.a,{path:"/flat",children:["              ",Object(u.jsx)(q,{}),"           "]}),Object(u.jsxs)(i.a,{path:"/game-over",children:["         ",Object(u.jsx)(Y,{}),"       "]}),Object(u.jsxs)(i.a,{path:"/happy-end",children:["         ",Object(u.jsx)(Q,{}),"       "]}),Object(u.jsxs)(i.a,{path:"/",children:["                  ",Object(u.jsx)(R,{}),"          "]})]})]})}),X=c(8);var Z=function(){return Object(u.jsx)(X.a,{children:Object(u.jsx)(l,{children:Object(u.jsx)(U,{children:Object(u.jsx)(f,{children:Object(u.jsx)("img",{src:O,alt:""})})})})})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,49)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(Z,{})}),document.getElementById("root")),$()}]),[[48,1,2]]]);
//# sourceMappingURL=main.545b8ac4.chunk.js.map