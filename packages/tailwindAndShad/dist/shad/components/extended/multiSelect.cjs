"use client"
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunkCLHSQXSA_cjs = require('../../../chunk-CLHSQXSA.cjs');
var chunkJXTAAYO4_cjs = require('../../../chunk-JXTAAYO4.cjs');
require('../../../chunk-HF55EYBZ.cjs');
require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var cmdk = require('cmdk');
var lucideReact = require('lucide-react');
var t = require('react');
var cn = require('@ulld/utilities/cn');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var t__namespace = /*#__PURE__*/_interopNamespace(t);

function ce(r,i){let[a,u]=t__namespace.useState(r);return t.useEffect(()=>{let l=setTimeout(()=>u(r),i||500);return ()=>{clearTimeout(l);}},[r,i]),a}function L(r,i){if(r.length===0)return {};if(!i)return {"":r};let a={};return r.forEach(u=>{let l=u[i]||"";a[l]||(a[l]=[]),a[l].push(u);}),a}function fe(r,i){let a=JSON.parse(JSON.stringify(r));for(let[u,l]of Object.entries(a))a[u]=l.filter(I=>!i.find(d=>d.value===I.value));return a}function me(r,i){for(let[,a]of Object.entries(r))if(a.some(u=>i.find(l=>l.value===u.value)))return !0;return !1}var Y=t.forwardRef(({className:r,...i},a)=>cmdk.useCommandState(l=>l.filtered.count===0)?t__namespace.createElement("div",{ref:a,className:cn.cn("py-6 text-center text-sm",r),"cmdk-empty":"",role:"presentation",...i}):null);Y.displayName="CommandEmpty";var $=t__namespace.forwardRef(({value:r,onChange:i,placeholder:a,defaultOptions:u=[],options:l,delay:I,onSearch:d,onSearchSync:H,loadingIndicator:q,emptyIndicator:M,maxSelected:F=Number.MAX_SAFE_INTEGER,onMaxSelected:K,hidePlaceholderWhenSelected:P,disabled:O,groupBy:v,className:B,badgeClassName:Q,selectFirstItem:Z=!0,creatable:w=!1,triggerSearchOnFocus:C=!1,commandProps:c,inputProps:N,hideClearAllButton:ee=!1},te)=>{let f=t__namespace.useRef(null),[b,T]=t__namespace.useState(!1),[ne,j]=t__namespace.useState(!1),[J,A]=t__namespace.useState(!1),D=t__namespace.useRef(null),[n,E]=t__namespace.useState(r||[]),[h,G]=t__namespace.useState(L(u,v)),[m,V]=t__namespace.useState(""),p=ce(m,I||500);t__namespace.useImperativeHandle(te,()=>({selectedValue:[...n],input:f.current,focus:()=>f.current?.focus()}),[n]);let R=e=>{D.current&&!D.current.contains(e.target)&&f.current&&!f.current.contains(e.target)&&T(!1);},S=t__namespace.useCallback(e=>{let o=n.filter(s=>s.value!==e.value);E(o),i?.(o);},[i,n]),oe=t__namespace.useCallback(e=>{let o=f.current;o&&((e.key==="Delete"||e.key==="Backspace")&&o.value===""&&n.length>0&&(n[n.length-1].fixed||S(n[n.length-1])),e.key==="Escape"&&o.blur());},[S,n]);t.useEffect(()=>(b?(document.addEventListener("mousedown",R),document.addEventListener("touchend",R)):(document.removeEventListener("mousedown",R),document.removeEventListener("touchend",R)),()=>{document.removeEventListener("mousedown",R),document.removeEventListener("touchend",R);}),[b]),t.useEffect(()=>{r&&E(r);},[r]),t.useEffect(()=>{if(!l||d)return;let e=L(l||[],v);JSON.stringify(e)!==JSON.stringify(h)&&G(e);},[u,l,v,d,h]),t.useEffect(()=>{let e=()=>{let s=H?.(p);G(L(s||[],v));};(async()=>{!H||!b||(C&&e(),p&&e());})();},[p,v,b,C]),t.useEffect(()=>{let e=async()=>{A(!0);let s=await d?.(p);G(L(s||[],v)),A(!1);};(async()=>{!d||!b||(C&&await e(),p&&await e());})();},[p,v,b,C]);let re=()=>{if(!w||me(h,[{value:m,label:m}])||n.find(o=>o.value===m))return;let e=t__namespace.createElement(chunkJXTAAYO4_cjs.h,{value:m,className:"cursor-pointer",onMouseDown:o=>{o.preventDefault(),o.stopPropagation();},onSelect:o=>{if(n.length>=F){K?.(n.length);return}V("");let s=[...n,{value:o,label:o}];E(s),i?.(s);}},`Create "${m}"`);if(!d&&m.length>0||d&&p.length>0&&!J)return e},ie=t__namespace.useCallback(()=>{if(M)return d&&!w&&Object.keys(h).length===0?t__namespace.createElement(chunkJXTAAYO4_cjs.h,{value:"-",disabled:!0},M):t__namespace.createElement(Y,null,M)},[w,M,d,h]),ae=t__namespace.useMemo(()=>fe(h,n),[h,n]),se=t__namespace.useCallback(()=>{if(c?.filter)return c.filter;if(w)return (e,o)=>e.toLowerCase().includes(o.toLowerCase())?1:-1},[w,c?.filter]);return t__namespace.createElement(chunkJXTAAYO4_cjs.a,{ref:D,...c,onKeyDown:e=>{oe(e),c?.onKeyDown?.(e);},className:cn.cn("h-auto overflow-visible bg-transparent",c?.className),shouldFilter:c?.shouldFilter!==void 0?c.shouldFilter:!d,filter:se()},t__namespace.createElement("div",{className:cn.cn("min-h-10 rounded-md border border-input text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",{"px-3 py-2":n.length!==0,"cursor-text":!O&&n.length!==0},B),onClick:()=>{O||f.current?.focus();}},t__namespace.createElement("div",{className:"relative flex flex-wrap gap-1"},n.map(e=>t__namespace.createElement(chunkCLHSQXSA_cjs.b,{key:e.value,className:cn.cn("data-[disabled]:bg-muted-foreground data-[disabled]:text-muted data-[disabled]:hover:bg-muted-foreground","data-[fixed]:bg-muted-foreground data-[fixed]:text-muted data-[fixed]:hover:bg-muted-foreground",Q),"data-fixed":e.fixed,"data-disabled":O||void 0},e.label,t__namespace.createElement("button",{className:cn.cn("ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2",(O||e.fixed)&&"hidden"),onKeyDown:o=>{o.key==="Enter"&&S(e);},onMouseDown:o=>{o.preventDefault(),o.stopPropagation();},onClick:()=>S(e)},t__namespace.createElement(lucideReact.X,{className:"h-3 w-3 text-muted-foreground hover:text-foreground"})))),t__namespace.createElement(cmdk.Command.Input,{...N,ref:f,value:m,disabled:O,onValueChange:e=>{V(e),N?.onValueChange?.(e);},onBlur:e=>{ne||T(!1),N?.onBlur?.(e);},onFocus:e=>{T(!0),C&&d?.(p),N?.onFocus?.(e);},placeholder:P&&n.length!==0?"":a,className:cn.cn("flex-1 bg-transparent outline-none placeholder:text-muted-foreground",{"w-full":P,"px-3 py-2":n.length===0,"ml-1":n.length!==0},N?.className)}),t__namespace.createElement("button",{type:"button",onClick:()=>{E(n.filter(e=>e.fixed)),i?.(n.filter(e=>e.fixed));},className:cn.cn("absolute right-0 h-6 w-6 p-0",(ee||O||n.length<1||n.filter(e=>e.fixed).length===n.length)&&"hidden")},t__namespace.createElement(lucideReact.X,null)))),t__namespace.createElement("div",{className:"relative"},b&&t__namespace.createElement(chunkJXTAAYO4_cjs.d,{className:"absolute top-1 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in",onMouseLeave:()=>{j(!1);},onMouseEnter:()=>{j(!0);},onMouseUp:()=>{f.current?.focus();}},J?t__namespace.createElement(t__namespace.Fragment,null,q):t__namespace.createElement(t__namespace.Fragment,null,ie(),re(),!Z&&t__namespace.createElement(chunkJXTAAYO4_cjs.h,{value:"-",className:"hidden"}),Object.entries(ae).map(([e,o])=>t__namespace.createElement(chunkJXTAAYO4_cjs.f,{key:e,heading:e,className:"h-full overflow-auto"},t__namespace.createElement(t__namespace.Fragment,null,o.map(s=>t__namespace.createElement(chunkJXTAAYO4_cjs.h,{key:s.value,value:s.value,disabled:s.disable,onMouseDown:y=>{y.preventDefault(),y.stopPropagation();},onSelect:()=>{if(n.length>=F){K?.(n.length);return}V("");let y=[...n,s];E(y),i?.(y);},className:cn.cn("cursor-pointer",s.disable&&"cursor-default text-muted-foreground")},s.label)))))))))});$.displayName="MultipleSelector";var Re=$;

exports.default = Re;
exports.useDebounce = ce;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=multiSelect.cjs.map