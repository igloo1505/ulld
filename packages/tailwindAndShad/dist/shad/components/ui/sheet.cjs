"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var t = require('react');
var e = require('@radix-ui/react-dialog');
var classVarianceAuthority = require('class-variance-authority');
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

var t__namespace = /*#__PURE__*/_interopNamespace(t);
var e__namespace = /*#__PURE__*/_interopNamespace(e);

var g=e__namespace.Root,b=e__namespace.Trigger,x=e__namespace.Close,c=e__namespace.Portal,r=t__namespace.forwardRef(({className:i,...a},o)=>t__namespace.createElement(e__namespace.Overlay,{className:chunkI7EIMM7S_cjs.a("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",i),...a,ref:o}));r.displayName=e__namespace.Overlay.displayName;var f=classVarianceAuthority.cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),p=t__namespace.forwardRef(({side:i="right",className:a,children:o,...n},m)=>t__namespace.createElement(c,null,t__namespace.createElement(r,null),t__namespace.createElement(e__namespace.Content,{ref:m,className:chunkI7EIMM7S_cjs.a(f({side:i}),a),...n},o,t__namespace.createElement(e__namespace.Close,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"},t__namespace.createElement(lucideReact.X,{className:"h-4 w-4"}),t__namespace.createElement("span",{className:"sr-only"},"Close")))));p.displayName=e__namespace.Content.displayName;var h=({className:i,...a})=>t__namespace.createElement("div",{className:chunkI7EIMM7S_cjs.a("flex flex-col space-y-2 text-center sm:text-left",i),...a});h.displayName="SheetHeader";var S=({className:i,...a})=>t__namespace.createElement("div",{className:chunkI7EIMM7S_cjs.a("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",i),...a});S.displayName="SheetFooter";var v=t__namespace.forwardRef(({className:i,...a},o)=>t__namespace.createElement(e__namespace.Title,{ref:o,className:chunkI7EIMM7S_cjs.a("text-lg font-semibold text-foreground",i),...a}));v.displayName=e__namespace.Title.displayName;var P=t__namespace.forwardRef(({className:i,...a},o)=>t__namespace.createElement(e__namespace.Description,{ref:o,className:chunkI7EIMM7S_cjs.a("text-sm text-muted-foreground",i),...a}));P.displayName=e__namespace.Description.displayName;

exports.Sheet = g;
exports.SheetClose = x;
exports.SheetContent = p;
exports.SheetDescription = P;
exports.SheetFooter = S;
exports.SheetHeader = h;
exports.SheetOverlay = r;
exports.SheetPortal = c;
exports.SheetTitle = v;
exports.SheetTrigger = b;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=sheet.cjs.map