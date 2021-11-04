var V=Object.defineProperty,X=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var S=(e,r,o)=>r in e?V(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,h=(e,r)=>{for(var o in r||(r={}))j.call(r,o)&&S(e,o,r[o]);if(D)for(var o of D(r))L.call(r,o)&&S(e,o,r[o]);return e},x=(e,r)=>X(e,Y(r));var p=(e,r)=>{var o={};for(var n in e)j.call(e,n)&&r.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&D)for(var n of D(e))r.indexOf(n)<0&&L.call(e,n)&&(o[n]=e[n]);return o};import{s,j as O,r as I,g as Z,c as _,a as ee,b as a,v as re,i as oe,d as te,F as ue,R as ne,e as ie}from"./vendor.038f5a84.js";const se=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(u){if(u.ep)return;u.ep=!0;const i=o(u);fetch(u.href,i)}};se();var d;(function(e){e.Light="light",e.Dark="dark"})(d||(d={}));const ae={[d.Light]:{type:d.Light,color:{white:"#fff",black:"#000",text:"#000",background:"#fff",border:"#cecece",primary:"#006dda",error:"#da3501"}},[d.Dark]:{type:d.Dark,color:{white:"#fff",black:"#000",text:"#fff",background:"#1f1f1f",border:"#444444",primary:"#00c4a9",error:"#d52c2c"}}},ce=s.div`
  position: relative;
`,t=O.exports.jsx,y=O.exports.jsxs,T=e=>{const{className:r,children:o}=e;return t(ce,{"data-semantics":T.name,className:r,children:o})},F=e=>{if(e!==void 0){if(typeof e=="number")return e!==0?`${e}rem`:0;if(e.includes("/")){const[r,o]=e.split("/");return`${+r/+o}rem`}return e}},z=s.div`
  position: relative;
  display: flex;
  align-items: ${({alignItems:e})=>F(e)};
  justify-content: ${({justifyContent:e})=>F(e)};
  gap: ${({gap:e})=>F(e)};
`;z.defaultProps={alignItems:"center",justifyContent:"flex-start",gap:"1rem"};const $=e=>{const u=e,{className:r,children:o}=u,n=p(u,["className","children"]);return t(z,x(h({"data-semantics":$.name,className:r},n),{children:o}))},le={color:"#000",thicknessInside:2,thicknessOutside:4},v=e=>{const r=le;return typeof e=="string"?r.color=e:Object.assign(r,e),`
    box-shadow:
      inset 0 0 0 ${r.thicknessInside}px ${r.color},
      0 0 0 ${r.thicknessOutside}px ${I(r.color,.25)}
  `},de=(e,r)=>{let o=0,n=e[0];return e.forEach(u=>{const i=Z(u,r);i>o&&(o=i,n=u)}),n},P=s.button`
  font: inherit;
  color: ${({theme:e})=>de([e.color.white,e.color.black],e.color.primary)};
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
    background-color: ${({theme:e})=>_(.1,e.color.primary)};
  }

  &:focus {
    ${({theme:e})=>v(e.color.primary)};
  }

  &:active {
    background-color: ${({theme:e})=>ee(.1,e.color.primary)};
  }

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
`;P.defaultProps={type:"button",variant:"filled"};const E=e=>{const u=e,{className:r,children:o}=u,n=p(u,["className","children"]);return t(P,x(h({"data-semantics":E.name,className:r},n),{children:o}))},A=s(T)`
  padding: 2rem;
  color: ${({theme:e})=>e.color.text};
  background-color: ${({theme:e})=>e.color.background};
  background-image: linear-gradient(to right, ${({theme:e})=>e.color.border} 50%, transparent 0%);
  background-position: bottom;
  background-size: 12px 1px;
  background-repeat: repeat-x;
  transition-property: color, background-color;
  transition-duration: 0.5s;
`,M=s.div`
  overflow: ${({overflow:e})=>e};
  transition: height ${({duration:e})=>e}s;
`;M.defaultProps={duration:.25,overflow:"visible"};const N=e=>{const f=e,{className:r,min:o="auto",max:n,children:u,duration:i}=f,c=p(f,["className","min","max","children","duration"]),[l,m]=a.exports.useState(o),C=b=>{if(b!==null){const g=b.getBoundingClientRect().height;o&&o>g?m(o):n&&n<g?m(n):m(g)}};return t(M,x(h({"data-semantics":N.name,className:r,style:{height:l},duration:i},c),{children:t("div",{ref:C,children:u})}))},me=s.div`
  position: relative;
`,he=s.label`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: ${({isError:e,theme:r})=>e?r.color.error:r.color.text};
`,H=s.input`
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
`,pe=s.span`
  display: block;
  color: ${({theme:e})=>e.color.error};
  font-size: 0.75rem;
  margin-top: 0.5rem;
`,q=e=>{const m=e,{className:r,label:o,value:n,onChange:u,error:i}=m,c=p(m,["className","label","value","onChange","error"]),l=a.exports.useMemo(re,[]);return y(me,{"data-semantics":q.name,className:r,children:[o&&t(he,{htmlFor:l,isError:!!i,children:o}),t(H,h({value:n,id:l,onChange:u,isError:!!i},c)),i&&t(pe,{children:i})]})},fe=s(q)`
  margin-bottom: 32px;

  /*
    Переопределяем стилизацию <input> в компоненте TextField
    При тёмной теме жёлтый текст
  */
  ${H} {
    color: ${({theme:e})=>e.type===d.Dark?"#ffbd1b":""};
  }
`;function be(){const[e,r]=a.exports.useState(""),o=!oe(e)&&(te(e)?"":"\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 email");return t(A,{children:t(N,{children:t(fe,{label:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",value:e,error:o||"",onChange:n=>r(n.target.value)})})})}function ge(){return t(A,{children:y($,{gap:1,children:[t(E,{children:"\u041A\u043D\u043E\u043F\u043A\u0430 1"}),t(E,{children:"\u041A\u043D\u043E\u043F\u043A\u0430 2"}),t(E,{children:"\u041A\u043D\u043E\u043F\u043A\u0430 3"})]})})}const R='\u042D\u0442\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442"',xe=`
  \u0410 \u044D\u0442\u043E \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442. \u0418 \u0435\u0433\u043E \u044F\u0432\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0431\u044B\u043B\u043E. \u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 c \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u0440\u0435\u0437\u043A\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0432\u044B\u0441\u043E\u0442\u0435,
  \u043D\u043E \u043E\u0431\u0451\u0440\u0442\u043A\u0430 <TransitionWrapper> \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0435 \u0434\u0451\u0440\u0433\u0430\u0442\u044C\u0441\u044F \u0440\u0435\u0437\u043A\u043E \u043E\u0431\u0449\u0435\u043C\u0443 \u043F\u043E\u0442\u043E\u043A\u0443
`,K=s(N)`
  max-width: 256px;
  padding: 1rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: 0.25rem;
`;function Ce(){const[e,r]=a.exports.useState(R);return t(A,{children:y($,{gap:1,alignItems:"flex-start",children:[t(K,{children:e}),t(K,{overflow:"hidden",duration:1,children:e}),t(E,{onClick:()=>{r(e===R?xe:R)},children:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442"})]})})}const w=a.exports.createContext({data:[],columnWidths:{},handleCell:()=>{}}),U=a.exports.createContext({}),ye=s.div`
  position: relative;
`,G=e=>{const C=e,{className:r,children:o,data:n}=C,u=p(C,["className","children","data"]),[i,c]=a.exports.useState({}),l=a.exports.useRef({}),m=a.exports.useCallback((f,b)=>{f===-1||b<l.current[f]||(l.current[f]=b,c(l.current))},[]);return t(ye,x(h({"data-semantics":G.name,className:r},u),{children:t(w.Provider,{value:{data:n,handleCell:m,columnWidths:i},children:o})}))},J=e=>{const u=e,{className:r,children:o}=u,n=p(u,["className","children"]);return t("div",x(h({"data-semantics":J.name,className:r},n),{children:t(w.Consumer,{children:({data:i})=>i.map((c,l)=>t(U.Provider,{value:c,children:o},l))})}))},ke=s.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
`,k=e=>{const b=e,{className:r,children:o}=b,n=p(b,["className","children"]),[u,i]=a.exports.useState(0),[c,l]=a.exports.useState("auto"),{handleCell:m,columnWidths:C}=a.exports.useContext(w),f=g=>{if(g!==null){const W=Array.from(g.parentNode.children).indexOf(g),Q=Math.ceil(g.getBoundingClientRect().width);i(W+1),m(W+1,Q)}};return a.exports.useEffect(()=>{l(C[u])},[C,u]),t(ke,x(h({"data-semantics":k.name,className:r,ref:f,style:{width:c}},n),{children:typeof o=="function"?t(U.Consumer,{children:o}):o}))},Ee=s.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  // transition: background-color 0.25s;
  // &:hover {
  //   background-color: ${({theme:e})=>I(e.color.primary,.2)};
  // }
`,B=e=>{const u=e,{className:r,children:o}=u,n=p(u,["className","children"]);return t(Ee,x(h({"data-semantics":B.name,className:r},n),{children:o}))},De=[{id:1,name:"\u0421\u0435\u0440\u0433\u0435\u0439",job:"\u0424\u0440\u043E\u043D\u0442\u0435\u043D\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A"},{id:5,name:"\u041C\u0430\u043A\u0441\u0438\u043C",job:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u0446\u0435\u0445\u0430"},{id:7,name:"\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440",job:"\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440"}];function $e(){return t(A,{children:y(G,{data:De,children:[y(B,{children:[t(k,{children:t("div",{children:"ID"})}),t(k,{children:"\u0418\u043C\u044F"}),t(k,{children:"\u0420\u0430\u0431\u043E\u0442\u0430"})]}),t(J,{children:y(B,{children:[t(k,{children:e=>e.id}),t(k,{children:e=>e.name}),t(k,{children:e=>e.job})]})})]})})}const ve=s(T)`
  height: 100%;
  color: ${({theme:e})=>e.color.text};
  background-color: ${({theme:e})=>e.color.background};
  transition-property: color, background-color;
  transition-duration: 0.5s;
`,Ae=s($)`
  padding: 2rem;
`;function Te(){const[e,r]=a.exports.useState(d.Dark),o=()=>{r(e===d.Light?d.Dark:d.Light)};return t(ue,{theme:ae[e],children:y(ve,{children:[t(Ae,{alignItems:"center",justifyContent:"space-between",children:t(E,{onClick:o,children:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043C\u0443"})}),t(be,{}),t(ge,{}),t(Ce,{}),t($e,{})]})})}ne.render(t(ie.StrictMode,{children:t(Te,{})}),document.getElementById("root"));
