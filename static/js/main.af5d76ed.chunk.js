(this["webpackJsonpold-49"]=this["webpackJsonpold-49"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(17),s=c.n(r),o=(c(25),c(26),c(4)),i=(c(27),c(2)),u=c(1),j=a.a.createContext(null),b=function(e){var t=e.children,c=Object(n.useState)(0),a=Object(o.a)(c,2),r=a[0],s=a[1],b=Object(n.useState)(null),l=Object(o.a)(b,2),d=l[0],O=l[1],x=Object(n.useState)(!1),f=Object(o.a)(x,2),m=f[0],g=f[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),v=h[0],k=h[1],y=Object(i.f)(),C={progressbarValue:r,setProgressbarValue:s,audioTrack:d,setAudioTrack:O,gameOver:m,endGame:function(){m||(g(!0),y.push("/game-over"))},gameOverReason:v,setGameOverReason:k};return Object(u.jsx)(j.Provider,{value:C,children:t})},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.a,c=e.b;return t=t||0,c=c||100,Math.floor(t+Math.random()*c)},d=function(e,t){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){c.current()}),t);return function(){return clearInterval(e)}}}),[t])},O=function(e){var t=e.intensity,c=void 0===t?null:t,a=e.children,r=Object(n.useContext)(j).progressbarValue,s=Object(n.useState)({}),i=Object(o.a)(s,2),b=i[0],O=i[1];return d((function(){O(function(e){var t,c=(t=e)>100?1:t/100,n=l({a:-50})*c,a=l({a:-50})*c,r=5*c;return{"--shake-x":"".concat(n,"px"),"--shake-y":"".concat(a,"px"),"--blur":"".concat(r,"px")}}(c||r))}),300),Object(u.jsx)("div",{className:"alko-image",style:b,children:a})},x=c.p+"static/media/img.f5292ba0.jpeg",f=c(11),m=c.n(f),g=c.p+"static/media/kamergerskiy.576de4d2.jpg",p=c.p+"static/media/phone.b9580232.png",h=c.p+"static/media/phone-rotate.9e7f4be7.png",v=(c(34),c(15)),k=(c(35),function(e){var t=e.text,c=void 0===t?"":t,n=e.textStyle,a=void 0===n?"neon":n,r=e.buttonStyle,s=void 0===r?"":r,o=e.textColor,i=void 0===o?"#fff":o,j=e.className,b=void 0===j?"":j,l=e.onClick,d=e.rest,O={"--buttonColor":i};return Object(u.jsx)("button",Object(v.a)(Object(v.a)({className:"button button--".concat(a," button--").concat(s," ").concat(b),style:O,onClick:l},d),{},{children:c}))}),y=(c(36),function(e){var t=e.src,c=e.alt,n=void 0===c?"":c,a=e.style,r=void 0===a?{}:a;return Object(u.jsx)("img",{className:"background-image",src:t,alt:n,style:r})}),C=function(){var e=Object(n.useContext)(j).progressbarValue,t=e>50,c=t?{bottom:510,left:95}:{bottom:99,left:92},a=Object(n.useState)(c),r=Object(o.a)(a,2),s=r[0],b=r[1],l=Object(i.f)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(y,{src:g,style:{zIndex:0}}),Object(u.jsx)(O,{children:Object(u.jsx)("div",{className:"order-taxi-page",children:Object(u.jsxs)("div",{className:"order-taxi-page__phone-container",children:[Object(u.jsx)("img",{src:t?h:p,className:"order-taxi-page__phone",alt:"phone"}),Object(u.jsx)(k,{className:"order-taxi-page__button ".concat(t&&"order-taxi-page__button--rotate"),text:"Order taxi",textStyle:"",onClick:function(){return l.push("/choose-taxi")},rest:{style:s,onMouseOver:function(t){if(e){var c=t.pageX,n=t.pageY,a=window.innerWidth,r=window.innerHeight;b({bottom:a-c+10,left:r-n+10})}}}})]})})})]})},N=c.p+"static/media/choose_taxi.765f6850.jpg",_=(c(37),function(){var e=Object(i.f)(),t=Object(n.useContext)(j).setGameOverReason,c=[{number:"252",target:"Chekoldan"},{number:"291",target:"Port Artur"},{number:"917",target:"Stariy Kirovsk"},{number:"593",target:"Lukyanovka"},{number:"463",target:"Rabochii"},{number:"062",target:"Amur"}],a=c[Math.floor(100*Math.random())%c.length],r="#0fa";return Object(u.jsx)(O,{children:Object(u.jsxs)("div",{className:"choose-taxi-page",children:[Object(u.jsx)("img",{className:"choose-taxi-page__img",src:N,alt:"choose taxi"}),Object(u.jsx)(k,{text:"Driver ".concat(a.number," is here"),className:"choose-taxi__info-button",textColor:r,onClick:function(){}}),c.map((function(c){return Object(u.jsx)(k,{text:"Go!",className:"choose-taxi__go-button choose-taxi__go-button_".concat(c.number),textColor:r,onClick:function(){return function(c){c.number===a.number?e.push("/taxi"):(t("You choose not your taxi and landed in ".concat(c.target)),e.push("/game-over"))}(c)}})}))]})})}),S=c.p+"static/media/dance.d5031953.ogg",w=c.p+"static/media/party.e47365b2.gif",T=c.p+"static/media/party2.c860aa6b.gif",E=c.p+"static/media/party3.6dadbbe9.gif",V=c.p+"static/media/party4.6311b63f.gif",P=(c(38),c.p+"static/media/bar.9a209960.jpg"),L=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(o.a)(r,2),b=s[0],l=s[1],d=Object(n.useState)(!1),O=Object(o.a)(d,2),x=O[0],f=O[1],m=Object(n.useState)(!1),g=Object(o.a)(m,2),p=g[0],h=g[1],v=Object(i.f)(),k=Object(n.useContext)(j).setAudioTrack;return Object(n.useEffect)((function(){k(S),setTimeout((function(){return a(!0)}),2e3),setTimeout((function(){return l(!0)}),4e3),setTimeout((function(){return f(!0)}),5e3),setTimeout((function(){return h(!0)}),6e3),setTimeout((function(){return v.push("/order-taxi")}),11e3)}),[]),Object(u.jsxs)("div",{className:"dance-page",children:[Object(u.jsx)(y,{src:P}),c?Object(u.jsx)("img",{className:"dance-gif",src:w,alt:"party"}):null,b?Object(u.jsx)("img",{className:"dance-gif",src:T,alt:"party2"}):null,x?Object(u.jsx)("img",{className:"dance-gif",src:E,alt:"party3"}):null,p?Object(u.jsx)("img",{className:"dance-gif",src:V,alt:"party4"}):null]})},M=c.p+"static/media/psychomecka.375ada2f.ogg",G=(c(39),function(){var e=Object(i.f)(),t=Object(n.useContext)(j).setAudioTrack;return Object(n.useEffect)((function(){return t(M)}),[]),Object(u.jsx)("div",{className:"start-page",children:Object(u.jsx)(k,{text:"Start",className:"start-button",textColor:"#0fa",onClick:function(){return e.push("/bar")}})})}),R=c.p+"static/media/long1.e98acd24.png",A=(c(40),function(){var e=Object(i.f)(),t=Object(n.useContext)(j),c=t.progressbarValue,a=t.setProgressbarValue;return Object(u.jsx)(O,{children:Object(u.jsxs)("div",{className:"bar-page",children:[Object(u.jsx)(y,{src:P}),Object(u.jsx)("img",{src:R,className:"bar-page__cocktail",alt:"Long Iceland"}),Object(u.jsxs)("div",{children:[Object(u.jsx)(k,{text:c?"Drink more":"Drink",className:"bar-page__button",textColor:"#f5f94b",onClick:function(){return a(c+20)}}),Object(u.jsx)(k,{text:"Go Dance",className:"bar-page__button",textColor:"#0fa",onClick:function(){return e.push("/dance")}})]})]})})}),I=(c(41),function(){var e=Object(n.useContext)(j).gameOverReason;return Object(u.jsxs)("div",{className:"game-over",children:["GAME OVER",Object(u.jsx)("br",{}),""!==e?e:null]})}),D=(c(42),function(e){var t=e.maxValue,c=void 0===t?100:t,a=Object(n.useContext)(j).progressbarValue;return Object(u.jsx)("progress",{className:"bar",value:a,max:c})}),F=c(20),B=c.n(F),J=(c(43),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useContext)(j),s=r.setProgressbarValue,i=r.gameOver,b=Object(n.useState)(.95),O=Object(o.a)(b,2),x=O[0],f=O[1];Object(n.useEffect)((function(){return window.addEventListener("keydown",m),window.addEventListener("keyup",g),function(){window.removeEventListener("keydown",m),window.removeEventListener("keyup",g)}})),d((function(){c&&s((function(e){return e*x*x}))}),200);var m=function(e){"Space"===e.code&&(c||(a(!0),setTimeout((function(){f(1.5)}),l({b:3500}))))},g=function(e){"Space"===e.code&&(a(!1),f(.95))};return i?null:Object(u.jsx)("div",{className:B()("sleep",{active:c})})}),Y=c.p+"static/media/heli.cce1a7d1.ogg",z=function(){var e=Object(n.useContext)(j).progressbarValue,t=(e>100?100:e)/100;return Object(n.useMemo)((function(){return Object(u.jsx)(m.a,{src:Y,autoPlay:!0,controls:!1,loop:!0,volume:t*t})}),[t])},H=(c(44),function(){var e=Object(n.useContext)(j),t=e.audioTrack,c=e.progressbarValue,a=e.endGame;return c>=100&&a(),Object(u.jsxs)("div",{className:"layout",children:[Object(u.jsx)(J,{}),Object(u.jsx)(m.a,{src:t,autoPlay:!0,controls:!1,volume:.4}),Object(u.jsx)("div",{className:"layout__progress",children:Object(u.jsx)(D,{})}),Object(u.jsx)(z,{}),Object(u.jsxs)(i.c,{children:[Object(u.jsxs)(i.a,{path:"/bar",children:["               ",Object(u.jsx)(A,{}),"             "]}),Object(u.jsxs)(i.a,{path:"/dance",children:["             ",Object(u.jsx)(L,{}),"           "]}),Object(u.jsxs)(i.a,{path:"/order-taxi",children:["        ",Object(u.jsx)(C,{}),"      "]}),Object(u.jsxs)(i.a,{path:"/choose-taxi",children:["       ",Object(u.jsx)(_,{}),"     "]}),Object(u.jsxs)(i.a,{path:"/game-over",children:["         ",Object(u.jsx)(I,{}),"       "]}),Object(u.jsxs)(i.a,{path:"/",children:["                  ",Object(u.jsx)(G,{}),"          "]})]})]})}),K=c(8);var W=function(){return Object(u.jsx)(K.a,{children:Object(u.jsx)(b,{children:Object(u.jsx)(H,{children:Object(u.jsx)(O,{children:Object(u.jsx)("img",{src:x,alt:""})})})})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(W,{})}),document.getElementById("root")),X()}},[[45,1,2]]]);
//# sourceMappingURL=main.af5d76ed.chunk.js.map