import{h as _,j as d,k as p,al as h,c as m,am as u,m as n,an as t,ao as o,A as s,F as f,ap as g,aq as v,ar as x,q as r,as as y,at as b,n as k,au as N,av as w,_ as P}from"./nav-b4747a4b.js";import{N as S}from"./NoteDisplay-bfeb5044.js";import{u as V}from"./index-1575aac4.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},q=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},A=_({__name:"PresenterPrint",setup(F){d(p),h(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),V({title:`Notes - ${m.title}`});const l=u(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,i)=>(r(),n("div",{id:"page-root",style:v(s(w))},[t("div",j,[t("div",L,[t("h1",T,o(s(m).title),1),t("div",B,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),q])]),k(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(r(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),W=P(A,[["__file","/home/runner/work/tts-presentation/tts-presentation/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
