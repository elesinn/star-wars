(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{16:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));var c=n(15),r=n(0),i=n(5),a=Object(r.createContext)({}),s=function(e){var t=e.children,n=Object(r.useState)(0),s=Object(c.a)(n,2),o=s[0],l=s[1],u=Object(r.useState)(),d=Object(c.a)(u,2),j=d[0],b=d[1],O=Object(r.useState)(),p=Object(c.a)(O,2),h=p[0],v=p[1];return Object(i.jsx)(a.Provider,{value:{activeStep:o,nextStep:function(){l((function(e){return e+1}))},prevStep:function(){l((function(e){return e-1}))},selectedEpisode:j,setSelectedEpisode:b,result:h,setResult:v},children:t})}},98:function(e,t,n){"use strict";n.r(t);var c,r=n(0),i=n.n(r),a=n(9),s=n.n(a),o=n(141),l=n(15),u=n(146),d=n(142),j=n(37),b=n.n(j),O=function(){return b.a.get("".concat("https://swapi.dev/api","/films")).then((function(e){return e.data.results}))},p=function(e){return"undefined"!=typeof c&&c.cancel(),c=b.a.CancelToken.source(),b.a.get(e,{cancelToken:c.token}).then((function(e){return e.data}))},h=n(16),v=n(130),x=n(133),f=n(136),m=n(135),S=n(38),w=n(137),g=n(5),y=Object(v.a)({root:{width:345},media:{height:140}}),E=function(e){var t=e.episodeUrl,n=y(),c=Object(r.useState)(),i=Object(l.a)(c,2),a=i[0],s=i[1];return Object(r.useEffect)((function(){if(t)return p(t).then(s),function(){s(void 0)}}),[t]),Object(g.jsxs)(x.a,{className:n.root,children:[Object(g.jsx)(m.a,{className:n.media,image:"https://sun9-41.userapi.com/unlIPtpXzQtKbmbHSAhHtr3WMHXCmAuH0Ef4ZQ/Jti48-ed3Yw.jpg",title:"Star Wars poster"}),Object(g.jsx)(f.a,{children:t?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"h2",children:a?null===a||void 0===a?void 0:a.title:Object(g.jsx)(w.a,{height:50})}),Object(g.jsx)(S.a,{variant:"body2",color:"textSecondary",component:"p",children:a?null===a||void 0===a?void 0:a.opening_crawl:Object(g.jsx)(w.a,{height:180})})]}):Object(g.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"Please select an episode"})})]})},k=n(145),C=n(138),P=n(139),U=n(140),W=Object(v.a)((function(e){return Object(k.a)({root:{width:"100%",maxWidth:360}})})),I=function(e){var t=e.episodes,n=e.selectedEpisodeUrl,c=e.onSelect,r=W();return Object(g.jsx)("div",{className:r.root,children:Object(g.jsx)(C.a,{component:"nav","aria-label":"main mailbox folders",children:null===t||void 0===t?void 0:t.map((function(e){return Object(g.jsx)(P.a,{button:!0,selected:e.url===n,onClick:function(){var t;t=e.url,c(t)},children:Object(g.jsx)(U.a,{primary:e.title})},e.episode_id)}))})})},B=Object(u.a)(o.a)({display:"flex",justifyContent:"space-between"}),H=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(),a=Object(l.a)(i,2),s=a[0],u=a[1],j=Object(r.useContext)(h.a);Object(r.useEffect)((function(){O().then(c)}),[]);return Object(g.jsxs)("div",{children:[Object(g.jsxs)(B,{children:[Object(g.jsx)(I,{episodes:n,selectedEpisodeUrl:s,onSelect:u}),Object(g.jsx)(E,{episodeUrl:s})]}),Object(g.jsx)(o.a,{children:Object(g.jsx)(d.a,{color:"primary",variant:"contained",onClick:function(){j.setSelectedEpisode(null===n||void 0===n?void 0:n.find((function(e){return e.url===s}))),j.nextStep()},disabled:!s,children:"Select episode"})})]})},J=n(144),N=function(){var e,t,n,c,i=Object(r.useContext)(h.a);return Object(g.jsxs)(o.a,{children:[Object(g.jsxs)(S.a,{gutterBottom:!0,variant:"h5",component:"h2",children:['Your review for "',null===(e=i.selectedEpisode)||void 0===e?void 0:e.title,'" episode:']}),Object(g.jsx)(J.a,{fullWidth:!0,id:"username",name:"username",label:"Username",type:"text",value:null===(t=i.result)||void 0===t?void 0:t.username,InputProps:{readOnly:!0}}),Object(g.jsx)(J.a,{fullWidth:!0,id:"email",name:"email",label:"Email",value:null===(n=i.result)||void 0===n?void 0:n.email,InputProps:{readOnly:!0}}),Object(g.jsx)(J.a,{id:"review",name:"review",style:{width:"100%",marginTop:"10px"},value:null===(c=i.result)||void 0===c?void 0:c.review,InputProps:{readOnly:!0}})]})},T=i.a.lazy((function(){return Promise.all([n.e(2),n.e(4)]).then(n.bind(null,310))})),z=function(){var e=Object(r.useContext)(h.a);return Object(g.jsx)("div",{children:function(e){switch(e){case 0:return Object(g.jsx)(H,{});case 1:return Object(g.jsx)(r.Suspense,{fallback:Object(g.jsx)(w.a,{height:400}),children:Object(g.jsx)(T,{})});case 2:return Object(g.jsx)(N,{});default:return"Unknown step"}}(e.activeStep)})};var A=function(){return Object(g.jsx)(o.a,{maxWidth:"md",children:Object(g.jsx)(h.b,{children:Object(g.jsx)(z,{})})})};s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(A,{})}),document.getElementById("root"))}},[[98,1,3]]]);
//# sourceMappingURL=main.1ce87aec.chunk.js.map