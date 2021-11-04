var X=Object.defineProperty,Y=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var I=(e,r,t)=>r in e?X(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))S.call(r,t)&&I(e,t,r[t]);if($)for(var t of $(r))O.call(r,t)&&I(e,t,r[t]);return e},b=(e,r)=>Y(e,Z(r));var f=(e,r)=>{var t={};for(var n in e)S.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&$)for(var n of $(e))r.indexOf(n)<0&&O.call(e,n)&&(t[n]=e[n]);return t};import{s,j as z,r as P,g as _,c as ee,a as re,b as c,v as oe,i as te,d as ue,F as ne,R as ie,e as se}from"./vendor.038f5a84.js";const ce=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))n(u);new MutationObserver(u=>{for(const i of u)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(u){const i={};return u.integrity&&(i.integrity=u.integrity),u.referrerpolicy&&(i.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?i.credentials="include":u.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(u){if(u.ep)return;u.ep=!0;const i=t(u);fetch(u.href,i)}};ce();var d;(function(e){e.Light="light",e.Dark="dark"})(d||(d={}));const ae={[d.Light]:{type:d.Light,color:{white:"#fff",black:"#000",text:"#000",background:"#fff",border:"#cecece",primary:"#006dda",error:"#da3501"}},[d.Dark]:{type:d.Dark,color:{white:"#fff",black:"#000",text:"#fff",background:"#1f1f1f",border:"#444444",primary:"#00c4a9",error:"#d52c2c"}}},le=s.div`
  position: relative;
`,o=z.exports.jsx,g=z.exports.jsxs,F=e=>{const{className:r,children:t}=e;return o(le,{"data-semantics":F.name,className:r,children:t})},N=e=>{if(e!==void 0){if(typeof e=="number")return e!==0?`${e}rem`:0;if(e.includes("/")){const[r,t]=e.split("/");return`${+r/+t}rem`}return e}},M=s.div`
  position: relative;
  display: flex;
  align-items: ${({alignItems:e})=>N(e)};
  justify-content: ${({justifyContent:e})=>N(e)};
  gap: ${({gap:e})=>N(e)};
`;M.defaultProps={alignItems:"center",justifyContent:"flex-start",gap:"1rem"};const E=e=>{const u=e,{className:r,children:t}=u,n=f(u,["className","children"]);return o(M,b(p({"data-semantics":E.name,className:r},n),{children:t}))},de={color:"#000",thicknessInside:2,thicknessOutside:4},v=e=>{const r=de;return typeof e=="string"?r.color=e:Object.assign(r,e),`
    box-shadow:
      inset 0 0 0 ${r.thicknessInside}px ${r.color},
      0 0 0 ${r.thicknessOutside}px ${P(r.color,.25)}
  `},he=(e,r)=>{let t=0,n=e[0];return e.forEach(u=>{const i=_(u,r);i>t&&(t=i,n=u)}),n},H=s.button`
  font: inherit;
  color: ${({theme:e})=>he([e.color.white,e.color.black],e.color.primary)};
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
    background-color: ${({theme:e})=>ee(.1,e.color.primary)};
  }

  &:focus {
    ${({theme:e})=>v(e.color.primary)};
  }

  &:active {
    background-color: ${({theme:e})=>re(.1,e.color.primary)};
  }

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }
`;H.defaultProps={type:"button",variant:"filled"};const D=e=>{const u=e,{className:r,children:t}=u,n=f(u,["className","children"]);return o(H,b(p({"data-semantics":D.name,className:r},n),{children:t}))},A=s(F)`
  padding: 2rem;
  color: ${({theme:e})=>e.color.text};
  background-color: ${({theme:e})=>e.color.background};
  background-image: linear-gradient(to right, ${({theme:e})=>e.color.border} 50%, transparent 0%);
  background-position: bottom;
  background-size: 12px 1px;
  background-repeat: repeat-x;
  transition-property: color, background-color;
  transition-duration: 0.5s;
`,U=s.div`
  overflow: ${({overflow:e})=>e};
  transition: height ${({duration:e})=>e}s;
`;U.defaultProps={duration:.25,overflow:"visible"};const R=e=>{const x=e,{className:r,min:t="auto",max:n,children:u,duration:i}=x,a=f(x,["className","min","max","children","duration"]),[l,m]=c.exports.useState(t),y=C=>{if(C!==null){const k=C.getBoundingClientRect().height;t&&t>k?m(t):n&&n<k?m(n):m(k)}};return o(U,b(p({"data-semantics":R.name,className:r,style:{height:l},duration:i},a),{children:o("div",{ref:y,children:u})}))},me=s.div`
  position: relative;
`,pe=s.label`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  color: ${({isError:e,theme:r})=>e?r.color.error:r.color.text};
`,q=s.input`
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
`,fe=s.span`
  display: block;
  color: ${({theme:e})=>e.color.error};
  font-size: 0.75rem;
  margin-top: 0.5rem;
`,K=e=>{const m=e,{className:r,label:t,value:n,onChange:u,error:i}=m,a=f(m,["className","label","value","onChange","error"]),l=c.exports.useMemo(oe,[]);return g(me,{"data-semantics":K.name,className:r,children:[t&&o(pe,{htmlFor:l,isError:!!i,children:t}),o(q,p({value:n,id:l,onChange:u,isError:!!i},a)),i&&o(fe,{children:i})]})},ge=s(K)`
  margin-bottom: 32px;

  /*
    Переопределяем стилизацию <input> в компоненте TextField
    При тёмной теме жёлтый текст
  */
  ${q} {
    color: ${({theme:e})=>e.type===d.Dark?"#ffbd1b":""};
  }
`;function be(){const[e,r]=c.exports.useState(""),t=!te(e)&&(ue(e)?"":"\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 email");return o(A,{children:o(R,{children:o(ge,{label:"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",value:e,error:t||"",onChange:n=>r(n.target.value)})})})}function xe(){return o(A,{children:g(E,{gap:1,children:[o(D,{children:"\u041A\u043D\u043E\u043F\u043A\u0430 1"}),o(D,{children:"\u041A\u043D\u043E\u043F\u043A\u0430 2"}),o(D,{children:"\u041A\u043D\u043E\u043F\u043A\u0430 3"})]})})}const w='\u042D\u0442\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u0442\u0435\u043A\u0441\u0442. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442"',Ce=`
  \u0410 \u044D\u0442\u043E \u0434\u043B\u0438\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442. \u0418 \u0435\u0433\u043E \u044F\u0432\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u0431\u044B\u043B\u043E. \u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 c \u0442\u0435\u043A\u0441\u0442\u043E\u043C \u0440\u0435\u0437\u043A\u043E \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0432\u044B\u0441\u043E\u0442\u0435,
  \u043D\u043E \u043E\u0431\u0451\u0440\u0442\u043A\u0430 <TransitionWrapper> \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043D\u0435 \u0434\u0451\u0440\u0433\u0430\u0442\u044C\u0441\u044F \u0440\u0435\u0437\u043A\u043E \u043E\u0431\u0449\u0435\u043C\u0443 \u043F\u043E\u0442\u043E\u043A\u0443
`,G=s(R)`
  max-width: 256px;
  padding: 1rem;
  border: 1px solid ${({theme:e})=>e.color.border};
  border-radius: 0.25rem;
`;function ke(){const[e,r]=c.exports.useState(w);return o(A,{children:g(E,{gap:1,alignItems:"flex-start",children:[o(G,{children:e}),o(G,{overflow:"hidden",duration:1,children:e}),o(D,{onClick:()=>{r(e===w?Ce:w)},children:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442"})]})})}const B=c.exports.createContext({data:[],columnWidths:{},handleCell:()=>{}}),J=c.exports.createContext({}),ye=s.div`
  position: relative;
`,W=e=>{const y=e,{className:r,children:t,data:n}=y,u=f(y,["className","children","data"]),[i,a]=c.exports.useState({}),l=c.exports.useRef({}),m=c.exports.useCallback((x,C)=>{x===-1||C<l.current[x]||(l.current[x]=C,a(l.current))},[]);return o(ye,b(p({"data-semantics":W.name,className:r},u),{children:o(B.Provider,{value:{data:n,handleCell:m,columnWidths:i},children:t})}))},j=e=>{const u=e,{className:r,children:t}=u,n=f(u,["className","children"]);return o("div",b(p({"data-semantics":j.name,className:r},n),{children:o(B.Consumer,{children:({data:i})=>i.map((a,l)=>o(J.Provider,{value:a,children:t},l))})}))},De=s.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.color.border};
  // transition: background-color 0.25s;
  // &:hover {
  //   background-color: ${({theme:e})=>P(e.color.primary,.2)};
  // }
`,T=e=>{const u=e,{className:r,children:t}=u,n=f(u,["className","children"]);return o(De,b(p({"data-semantics":T.name,className:r},n),{children:t}))},Ee=s(T)`
  font-weight: bold;
  border-bottom: 2px solid ${({theme:e})=>e.color.primary};
`,Q=e=>{const u=e,{className:r,children:t}=u,n=f(u,["className","children"]);return o(Ee,b(p({"data-semantics":Q.name,className:r},n),{children:t}))},$e=s.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
`,h=e=>{const C=e,{className:r,children:t}=C,n=f(C,["className","children"]),[u,i]=c.exports.useState(0),[a,l]=c.exports.useState("auto"),{handleCell:m,columnWidths:y}=c.exports.useContext(B),x=k=>{if(k!==null){const L=Array.from(k.parentNode.children).indexOf(k),V=Math.ceil(k.getBoundingClientRect().width);i(L+1),m(L+1,V)}};return c.exports.useEffect(()=>{l(y[u])},[y,u]),o($e,b(p({"data-semantics":h.name,className:r,ref:x,style:{width:a}},n),{children:typeof t=="function"?o(J.Consumer,{children:t}):t}))},ve=[{id:1,name:"\u0421\u0435\u0440\u0433\u0435\u0439",job:"\u0424\u0440\u043E\u043D\u0442\u0435\u043D\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A"},{id:5,name:"\u041C\u0430\u043A\u0441\u0438\u043C",job:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0438\u043A \u0446\u0435\u0445\u0430"},{id:7,name:"\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440",job:"\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440"}],Ae=[{id:"A-42",status:"inWork",on:()=>console.log("\u041D\u0430\u0436\u0430\u043B \u0410-42")},{id:"D-95",status:"inWork",on:()=>console.log("\u041D\u0430\u0436\u0430\u043B D-95")},{id:"U-4",status:"pending",on:()=>console.log("\u041D\u0430\u0436\u0430\u043B U-4")}];function Te(){return o(A,{children:g(E,{gap:2,children:[g(W,{data:ve,children:[g(Q,{children:[o(h,{children:o("div",{children:"ID"})}),o(h,{children:"\u0418\u043C\u044F"}),o(h,{children:"\u0420\u0430\u0431\u043E\u0442\u0430"})]}),o(j,{children:g(T,{children:[o(h,{children:e=>e.id}),o(h,{children:e=>e.name}),o(h,{children:e=>e.job})]})})]}),o(W,{data:Ae,children:o(j,{children:g(T,{children:[o(h,{children:e=>e.status==="inWork"?o("big",{children:"\u{1F477}\u200D"}):o("big",{children:"\u23F0"})}),o(h,{children:e=>e.id}),o(h,{children:e=>e.status==="inWork"?"\u0412 \u0440\u0430\u0431\u043E\u0442\u0435":"\u041E\u0436\u0438\u0434\u0430\u0435\u0442"}),o(h,{children:e=>g(D,{onClick:e.on,children:["\u041D\u0430\u0436\u0430\u0442\u044C ",e.id]})})]})})})]})})}const Fe=s(F)`
  height: 100%;
  color: ${({theme:e})=>e.color.text};
  background-color: ${({theme:e})=>e.color.background};
  transition-property: color, background-color;
  transition-duration: 0.5s;
`,Ne=s(E)`
  padding: 2rem;
`;function Re(){const[e,r]=c.exports.useState(d.Dark),t=()=>{r(e===d.Light?d.Dark:d.Light)};return o(ne,{theme:ae[e],children:g(Fe,{children:[o(Ne,{alignItems:"center",justifyContent:"space-between",children:o(D,{onClick:t,children:"\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043C\u0443"})}),o(be,{}),o(xe,{}),o(ke,{}),o(Te,{})]})})}ie.render(o(se.StrictMode,{children:o(Re,{})}),document.getElementById("root"));
