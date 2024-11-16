'use strict';

var chunk7K4QW7ZK_cjs = require('../../../chunk-7K4QW7ZK.cjs');
var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var a = require('react');
var lucideReact = require('lucide-react');

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

var a__namespace = /*#__PURE__*/_interopNamespace(a);

var c=({className:e,...n})=>a__namespace.createElement("nav",{role:"navigation","aria-label":"pagination",className:chunkI7EIMM7S_cjs.a("mx-auto flex w-full justify-center",e),...n});c.displayName="Pagination";var P=a__namespace.forwardRef(({className:e,...n},o)=>a__namespace.createElement("ul",{ref:o,className:chunkI7EIMM7S_cjs.a("flex flex-row items-center gap-1",e),...n}));P.displayName="PaginationContent";var g=a__namespace.forwardRef(({className:e,...n},o)=>a__namespace.createElement("li",{ref:o,className:chunkI7EIMM7S_cjs.a("",e),...n}));g.displayName="PaginationItem";var t=({className:e,isActive:n,size:o="icon",...p})=>a__namespace.createElement("a",{"aria-current":n?"page":void 0,className:chunkI7EIMM7S_cjs.a(chunk7K4QW7ZK_cjs.a({variant:n?"outline":"ghost",size:o}),e),...p});t.displayName="PaginationLink";var f=({className:e,...n})=>a__namespace.createElement(t,{"aria-label":"Go to previous page",size:"default",className:chunkI7EIMM7S_cjs.a("gap-1 pl-2.5",e),...n},a__namespace.createElement(lucideReact.ChevronLeft,{className:"h-4 w-4"}),a__namespace.createElement("span",null,"Previous"));f.displayName="PaginationPrevious";var N=({className:e,...n})=>a__namespace.createElement(t,{"aria-label":"Go to next page",size:"default",className:chunkI7EIMM7S_cjs.a("gap-1 pr-2.5",e),...n},a__namespace.createElement("span",null,"Next"),a__namespace.createElement(lucideReact.ChevronRight,{className:"h-4 w-4"}));N.displayName="PaginationNext";var u=({className:e,...n})=>a__namespace.createElement("span",{"aria-hidden":!0,className:chunkI7EIMM7S_cjs.a("flex h-9 w-9 items-center justify-center",e),...n},a__namespace.createElement(lucideReact.MoreHorizontal,{className:"h-4 w-4"}),a__namespace.createElement("span",{className:"sr-only"},"More pages"));u.displayName="PaginationEllipsis";

exports.Pagination = c;
exports.PaginationContent = P;
exports.PaginationEllipsis = u;
exports.PaginationItem = g;
exports.PaginationLink = t;
exports.PaginationNext = N;
exports.PaginationPrevious = f;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=pagination.cjs.map