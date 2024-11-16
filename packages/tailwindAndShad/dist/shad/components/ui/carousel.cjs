"use client"
'use strict';

var chunk7K4QW7ZK_cjs = require('../../../chunk-7K4QW7ZK.cjs');
var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var e = require('react');
var h = require('embla-carousel-react');
var lucideReact = require('lucide-react');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

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

var e__namespace = /*#__PURE__*/_interopNamespace(e);
var h__default = /*#__PURE__*/_interopDefault(h);

var R=e__namespace.createContext(null);function C(){let o=e__namespace.useContext(R);if(!o)throw new Error("useCarousel must be used within a <Carousel />");return o}var L=e__namespace.forwardRef(({orientation:o="horizontal",opts:r,setApi:a,plugins:l,className:n,children:u,...c},p)=>{let[y,t]=h__default.default({...r,axis:o==="horizontal"?"x":"y"},l),[x,N]=e__namespace.useState(!1),[P,b]=e__namespace.useState(!1),f=e__namespace.useCallback(s=>{s&&(N(s.canScrollPrev()),b(s.canScrollNext()));},[]),m=e__namespace.useCallback(()=>{t?.scrollPrev();},[t]),d=e__namespace.useCallback(()=>{t?.scrollNext();},[t]),w=e__namespace.useCallback(s=>{s.key==="ArrowLeft"?(s.preventDefault(),m()):s.key==="ArrowRight"&&(s.preventDefault(),d());},[m,d]);return e__namespace.useEffect(()=>{!t||!a||a(t);},[t,a]),e__namespace.useEffect(()=>{if(t)return f(t),t.on("reInit",f),t.on("select",f),()=>{t?.off("select",f);}},[t,f]),e__namespace.createElement(R.Provider,{value:{carouselRef:y,api:t,opts:r,orientation:o||(r?.axis==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:d,canScrollPrev:x,canScrollNext:P}},e__namespace.createElement("div",{ref:p,onKeyDownCapture:w,className:chunkI7EIMM7S_cjs.a("relative",n),role:"region","aria-roledescription":"carousel",...c},u))});L.displayName="Carousel";var S=e__namespace.forwardRef(({className:o,...r},a)=>{let{carouselRef:l,orientation:n}=C();return e__namespace.createElement("div",{ref:l,className:"overflow-hidden"},e__namespace.createElement("div",{ref:a,className:chunkI7EIMM7S_cjs.a("flex",n==="horizontal"?"-ml-4":"-mt-4 flex-col",o),...r}))});S.displayName="CarouselContent";var H=e__namespace.forwardRef(({className:o,...r},a)=>{let{orientation:l}=C();return e__namespace.createElement("div",{ref:a,role:"group","aria-roledescription":"slide",className:chunkI7EIMM7S_cjs.a("min-w-0 shrink-0 grow-0 basis-full",l==="horizontal"?"pl-4":"pt-4",o),...r})});H.displayName="CarouselItem";var M=e__namespace.forwardRef(({className:o,variant:r="outline",size:a="icon",...l},n)=>{let{orientation:u,scrollPrev:c,canScrollPrev:p}=C();return e__namespace.createElement(chunk7K4QW7ZK_cjs.b,{ref:n,variant:r,size:a,className:chunkI7EIMM7S_cjs.a("absolute  h-8 w-8 rounded-full",u==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",o),disabled:!p,onClick:c,...l},e__namespace.createElement(lucideReact.ArrowLeft,{className:"h-4 w-4"}),e__namespace.createElement("span",{className:"sr-only"},"Previous slide"))});M.displayName="CarouselPrevious";var D=e__namespace.forwardRef(({className:o,variant:r="outline",size:a="icon",...l},n)=>{let{orientation:u,scrollNext:c,canScrollNext:p}=C();return e__namespace.createElement(chunk7K4QW7ZK_cjs.b,{ref:n,variant:r,size:a,className:chunkI7EIMM7S_cjs.a("absolute h-8 w-8 rounded-full",u==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",o),disabled:!p,onClick:c,...l},e__namespace.createElement(lucideReact.ArrowRight,{className:"h-4 w-4"}),e__namespace.createElement("span",{className:"sr-only"},"Next slide"))});D.displayName="CarouselNext";

exports.Carousel = L;
exports.CarouselContent = S;
exports.CarouselItem = H;
exports.CarouselNext = D;
exports.CarouselPrevious = M;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=carousel.cjs.map