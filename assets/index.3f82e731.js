var _=Object.defineProperty,ee=Object.defineProperties;var re=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var I=(e,r,t)=>r in e?_(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&I(e,t,r[t]);if(T)for(var t of T(r))z.call(r,t)&&I(e,t,r[t]);return e},b=(e,r)=>ee(e,re(r));var m=(e,r)=>{var t={};for(var n in e)O.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&T)for(var n of T(e))r.indexOf(n)<0&&z.call(e,n)&&(t[n]=e[n]);return t};import{s,j as M,r as P,g as oe,c as te,a as ue,C as ne,b as d,v as ie,i as se,d as ae,F as ce,R as le,e as de}from"./vendor.85df1504.js";const he=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(u){if(u.ep)return;u.ep=!0;const i=t(u);fetch(u.href,i)}};he();var p;(function(e){e.Light="light",e.Dark="dark"})(p||(p={}));const me={[p.Light]:{type:p.Light,color:{white:"#fff",black:"#000",text:"#000",background:"#fff",border:"#cecece",primary:"#006dda",error:"#da3501"}},[p.Dark]:{type:p.Dark,color:{white:"#fff",black:"#000",text:"#fff",background:"#1f1f1f",border:"#444444",primary:"#00c4a9",error:"#d52c2c"}}},pe=s.div`
  position: relative;
`,o=M.exports.jsx,l=M.exports.jsxs,N=e=>{const{className:r,children:t}=e;return o(pe,{"data-semantics":N.name,className:r,children:t})},R=e=>{if(e!==void 0){if(typeof e=="number")return e!==0?`${e}rem`:0;if(e.includes("/")){const[r,t]=e.split("/");return`${+r/+t}rem`}return e}},U=s.div`
  position: relative;
  display: flex;
  align-items: ${({alignItems:e})=>R(e)};
  justify-content: ${({justifyContent:e})=>R(e)};
  gap: ${({gap:e})=>R(e)};
`;U.defaultProps={alignItems:"center",justifyContent:"flex-start",gap:"1rem"};const $=e=>{const u=e,{className:r,children:t}=u,n=m(u,["className","children"]);return o(U,b(h({"data-semantics":$.name,className:r},n),{children:t}))},fe={color:"#000",thicknessInside:2,thicknessOutside:4},v=e=>{const r=fe;return typeof e=="string"?r.color=e:Object.assign(r,e),`
    box-shadow:
      inset 0 0 0 ${r.thicknessInside}px ${r.color},
      0 0 0 ${r.thicknessOutside}px ${P(r.color,.25)}
  `},ge=(e,r)=>{let t=0,n=e[0];return e.forEach(u=>{const i=oe(u,r);i>t&&(t=i,n=u)}),n},q=s.button`
  font: inherit;
  color: ${({theme:e})=>ge([e.color.white,e.color.black],e.color.primary)};
  background-color: ${({theme:e})=>e.color.primary};
  box-sizing: border-box;
  height: 2.5rem;
  flex-shrink: 0;
  padding: 0 0.75rem;
  border: 0;
  border-radius: 0.25rem;
  outline: none;
  transition-property: color, background-color, box-shadow, opacity;
  transition-duration: 0.15s;
  cursor: pointer;

  &:hover {
    background-color: ${({theme:e})=>te(.1,e.color.primary)};
  }

  &:focus {
    ${({theme:e})=>v(e.color.primary)};
  }

  &:active {
    background-color: ${({theme:e})=>ue(.1,e.color.primary)};
  }

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
`;q.defaultProps={type:"button",variant:"filled"};const D=e=>{const u=e,{className:r,children:t}=u,n=m(u,["className","children"]);return o(q,b(h({"data-semantics":D.name,className:r},n),{children:t}))},A=s(N)`
  padding: 2rem;
  color: ${({theme:e})=>e.color.text};
  background-color: ${({theme:e})=>e.color.background};
  background-image: linear-gradient(to right, ${({theme:e})=>e.color.border} 50%, transparent 0%);
  background-position: bottom;
  background-size: 12px 1px;
  background-repeat: repeat-x;
  transition-property: color, background-color;
  transition-duration: 0.5s;
`,K=ne`
  margin: 0 0 ${({noMargin:e})=>e?0:"0.5em"};
  color: ${({theme:e})=>e.color.text};
`,be=s.h1`
  ${K};
  font-size: 2.5rem;
`,xe=s.h2`
  ${K};
  font-size: 1.75rem;
`,w={H1:be,H2:xe},E=e=>{const c=e,{className:r,children:t,h1:n,h2:u}=c,i=m(c,["className","children","h1","h2"]);let a=w.H1;return n&&(a=w.H1),u&&(a=w.H2),o(a,b(h({"data-semantics":E.name,className:r},i),{children:t}))},G=s.div`
  overflow: ${({overflow:e})=>e};
  transition: height ${({duration:e})=>e}s;
`;G.defaultProps={duration:.25,overflow:"visible"};const W=e=>{const x=e,{className:r,min:t="auto",max:n,children:u,duration:i}=x,a=m(x,["className","min","max","children","duration"]),[c,g]=d.exports.useState(t),k=C=>{if(C!==null){const y=C.getBoundingClientRect().height;t&&t>y?g(t):n&&n<y?g(n):g(y)}};return o(G,b(h({"data-semantics":W.name,className:r,style:{height:c},duration:i},a),{children:o("div",{ref:k,children:u})}))},Ce=s.div`
  position: relative;
`,ye=s.label`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: ${({isError:e,theme:r})=>e?r.color.error:r.color.text};
`,J=s.input`
  font: inherit;
  color: ${({theme:e})=>e.color.text};
  background-color: ${({theme:e})=>e.color.background};
  box-shadow: inset 0 0 0 1px ${({theme:e})=>e.color.border};
  width: 100%;
  box-sizing: border-box;
  height: 2.5rem;
  flex-shrink: 0;
  padding: 0 0.75rem;
  border: 0;
  border-radius: 4px;
  outline: none;
  transition-property: color, box-shadow;
  transition-duration: 0.15s;

  &:hover {
    ${({theme:e})=>v(e.color.border)};
  }

  &:focus {
    ${({isError:e,theme:r})=>v(e?r.color.error:r.color.primary)};
  }
`,ke=s.span`
  display: block;
  color: ${({theme:e})=>e.color.error};
  font-size: 0.75rem;
  margin-top: 0.5rem;
`,Q=e=>{const g=e,{className:r,label:t,value:n,onChange:u,error:i}=g,a=m(g,["className","label","value","onChange","error"]),c=d.exports.useMemo(ie,[]);return l(Ce,{"data-semantics":Q.name,className:r,children:[t&&o(ye,{htmlFor:c,isError:!!i,children:t}),o(J,h({value:n,id:c,onChange:u,isError:!!i},a)),i&&o(ke,{children:i})]})},De=s(Q)`
  margin-bottom: 32px;

  /*
    Переопределяем стилизацию <input> в компоненте TextField
    При тёмной теме жёлтый текст
  */
  ${J} {
    color: ${({theme:e})=>e.type===p.Dark?"#ffbd1b":""};
  }
`;function Ee(){const[e,r]=d.exports.useState(""),t=!se(e)&&(ae(e)?"":"\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 email");return l(A,{children:[o(E,{h2:!0,children:"TextField"}),o(W,{children:o(De,{label:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",value:e,error:t||"",onChange:n=>r(n.target.value)})})]})}function $e(){return l(A,{children:[o(E,{h2:!0,children:"Button"}),l($,{gap:1,children:[o(D,{children:"\u041A\u043D\u043E\u043F\u043A\u0430 1"}),o(D,{children:"\u041A\u043D\u043E\u043F\u043A\u0430 2"}),o(D,{children:"\u041A\u043D\u043E\u043F\u043A\u0430 3"})]})]})}const B='\u042D\u0442\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442"',Te=`
  \u0410 \u044D\u0442\u043E \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442. \u0418 \u0435\u0433\u043E \u044F\u0432\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0431\u044B\u043B\u043E. \u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 c \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u0440\u0435\u0437\u043A\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0432\u044B\u0441\u043E\u0442\u0435,
  \u043D\u043E \u043E\u0431\u0451\u0440\u0442\u043A\u0430 <TransitionWrapper> \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0435 \u0434\u0451\u0440\u0433\u0430\u0442\u044C\u0441\u044F \u0440\u0435\u0437\u043A\u043E \u043E\u0431\u0449\u0435\u043C\u0443 \u043F\u043E\u0442\u043E\u043A\u0443
`,V=s(W)`
  max-width: 256px;
  padding: 1rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: 0.25rem;
`;function ve(){const[e,r]=d.exports.useState(B);return l(A,{children:[o(E,{h2:!0,children:"TransitionWrapper"}),l($,{gap:1,alignItems:"flex-start",children:[o(V,{children:e}),o(V,{overflow:"hidden",duration:1,children:e}),o(D,{onClick:()=>{r(e===B?Te:B)},children:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442"})]})]})}const j=d.exports.createContext({data:[],columnWidths:{},handleCell:()=>{}}),X=d.exports.createContext({}),Ae=s.div`
  position: relative;
`,S=e=>{const k=e,{className:r,children:t,data:n}=k,u=m(k,["className","children","data"]),[i,a]=d.exports.useState({}),c=d.exports.useRef({}),g=d.exports.useCallback((x,C)=>{x===-1||C<c.current[x]||(c.current[x]=C,a(c.current))},[]);return o(Ae,b(h({"data-semantics":S.name,className:r},u),{children:o(j.Provider,{value:{data:n,handleCell:g,columnWidths:i},children:t})}))},H=e=>{const u=e,{className:r,children:t}=u,n=m(u,["className","children"]);return o("div",b(h({"data-semantics":H.name,className:r},n),{children:o(j.Consumer,{children:({data:i})=>i.map((a,c)=>o(X.Provider,{value:a,children:t},c))})}))},Fe=s.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  // transition: background-color 0.25s;
  // &:hover {
  //   background-color: ${({theme:e})=>P(e.color.primary,.2)};
  // }
`,F=e=>{const u=e,{className:r,children:t}=u,n=m(u,["className","children"]);return o(Fe,b(h({"data-semantics":F.name,className:r},n),{children:t}))},Ne=s(F)`
  font-weight: bold;
  border-bottom: 2px solid ${({theme:e})=>e.color.primary};
`,Y=e=>{const u=e,{className:r,children:t}=u,n=m(u,["className","children"]);return o(Ne,b(h({"data-semantics":Y.name,className:r},n),{children:t}))},Re=s.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
`,f=e=>{const C=e,{className:r,children:t}=C,n=m(C,["className","children"]),[u,i]=d.exports.useState(0),[a,c]=d.exports.useState("auto"),{handleCell:g,columnWidths:k}=d.exports.useContext(j),x=y=>{if(y!==null){const L=Array.from(y.parentNode.children).indexOf(y),Z=Math.ceil(y.getBoundingClientRect().width);i(L+1),g(L+1,Z)}};return d.exports.useEffect(()=>{c(k[u])},[k,u]),o(Re,b(h({"data-semantics":f.name,className:r,ref:x,style:{width:a}},n),{children:typeof t=="function"?o(X.Consumer,{children:t}):t}))},we=[{id:1,name:"\u0421\u0435\u0440\u0433\u0435\u0439",job:"\u0424\u0440\u043E\u043D\u0442\u0435\u043D\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A"},{id:5,name:"\u041C\u0430\u043A\u0441\u0438\u043C",job:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u0446\u0435\u0445\u0430"},{id:7,name:"\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440",job:"\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440"}],We=[{id:"A-42",status:"inWork",on:()=>console.log("\u041D\u0430\u0436\u0430\u043B \u0410-42")},{id:"D-95",status:"inWork",on:()=>console.log("\u041D\u0430\u0436\u0430\u043B D-95")},{id:"U-4",status:"pending",on:()=>console.log("\u041D\u0430\u0436\u0430\u043B U-4")}];function Be(){return l(A,{children:[o(E,{h2:!0,children:"Table"}),l($,{gap:2,alignItems:"flex-start",children:[l(S,{data:we,children:[l(Y,{children:[o(f,{children:o("div",{children:"ID"})}),o(f,{children:"\u0418\u043C\u044F"}),o(f,{children:"\u0420\u0430\u0431\u043E\u0442\u0430"})]}),o(H,{children:l(F,{children:[o(f,{children:e=>e.id}),o(f,{children:e=>e.name}),o(f,{children:e=>e.job})]})})]}),o(S,{data:We,children:o(H,{children:l(F,{children:[o(f,{children:e=>e.status==="inWork"?o("big",{children:"\u{1F477}\u200D"}):o("big",{children:"\u23F0"})}),o(f,{children:e=>e.id}),o(f,{children:e=>e.status==="inWork"?"\u0412 \u0440\u0430\u0431\u043E\u0442\u0435":"\u041E\u0436\u0438\u0434\u0430\u0435\u0442"}),o(f,{children:e=>l(D,{onClick:e.on,children:["\u041D\u0430\u0436\u0430\u0442\u044C ",e.id]})})]})})})]})]})}const je=s(N)`
  height: 100%;
  color: ${({theme:e})=>e.color.text};
  background-color: ${({theme:e})=>e.color.background};
  transition-property: color, background-color;
  transition-duration: 0.5s;
`,Se=s($)`
  padding: 2rem;
`;function He(){const[e,r]=d.exports.useState(p.Dark),t=()=>{r(e===p.Light?p.Dark:p.Light)};return o(ce,{theme:me[e],children:l(je,{children:[l(Se,{alignItems:"center",justifyContent:"space-between",children:[o(E,{h1:!0,noMargin:!0,children:"rui"}),o(D,{onClick:t,children:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043C\u0443"})]}),o(Ee,{}),o($e,{}),o(ve,{}),o(Be,{})]})})}le.render(o(de.StrictMode,{children:o(He,{})}),document.getElementById("root"));
