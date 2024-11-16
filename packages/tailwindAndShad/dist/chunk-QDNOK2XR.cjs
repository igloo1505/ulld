'use strict';

var i = require('react');

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

var i__namespace = /*#__PURE__*/_interopNamespace(i);

var p=1,d=1e6;var S=0;function u(){return S=(S+1)%Number.MAX_SAFE_INTEGER,S.toString()}var c=new Map,A=t=>{if(c.has(t))return;let e=setTimeout(()=>{c.delete(t),T({type:"REMOVE_TOAST",toastId:t});},d);c.set(t,e);},O=(t,e)=>{switch(e.type){case"ADD_TOAST":return {...t,toasts:[e.toast,...t.toasts].slice(0,p)};case"UPDATE_TOAST":return {...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case"DISMISS_TOAST":{let{toastId:s}=e;return s?A(s):t.toasts.forEach(o=>{A(o.id);}),{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,open:!1}:o)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)}}},a=[],n={toasts:[]};function T(t){n=O(n,t),a.forEach(e=>{e(n);});}function y({...t}){let e=u(),s=r=>T({type:"UPDATE_TOAST",toast:{...r,id:e}}),o=()=>T({type:"DISMISS_TOAST",toastId:e});return T({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||o();}}}),{id:e,dismiss:o,update:s}}function E(){let[t,e]=i__namespace.useState(n);return i__namespace.useEffect(()=>(a.push(e),()=>{let s=a.indexOf(e);s>-1&&a.splice(s,1);}),[t]),{...t,toast:y,dismiss:s=>T({type:"DISMISS_TOAST",toastId:s})}}

exports.a = O;
exports.b = y;
exports.c = E;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-QDNOK2XR.cjs.map