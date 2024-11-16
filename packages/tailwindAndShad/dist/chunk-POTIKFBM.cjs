'use strict';

var chunkI7EIMM7S_cjs = require('./chunk-I7EIMM7S.cjs');
var e = require('react');
var t = require('@radix-ui/react-toast');
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

var e__namespace = /*#__PURE__*/_interopNamespace(e);
var t__namespace = /*#__PURE__*/_interopNamespace(t);

var P=t__namespace.Provider,c=e__namespace.forwardRef(({className:o,...i},s)=>e__namespace.createElement(t__namespace.Viewport,{ref:s,className:chunkI7EIMM7S_cjs.a("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",o),...i}));c.displayName=t__namespace.Viewport.displayName;var d=classVarianceAuthority.cva("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),m=e__namespace.forwardRef(({className:o,variant:i,...s},r)=>e__namespace.createElement(t__namespace.Root,{ref:r,className:chunkI7EIMM7S_cjs.a(d({variant:i}),o),...s}));m.displayName=t__namespace.Root.displayName;var f=e__namespace.forwardRef(({className:o,...i},s)=>e__namespace.createElement(t__namespace.Action,{ref:s,className:chunkI7EIMM7S_cjs.a("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",o),...i}));f.displayName=t__namespace.Action.displayName;var l=e__namespace.forwardRef(({className:o,...i},s)=>e__namespace.createElement(t__namespace.Close,{ref:s,className:chunkI7EIMM7S_cjs.a("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",o),"toast-close":"",...i},e__namespace.createElement(lucideReact.X,{className:"h-4 w-4"})));l.displayName=t__namespace.Close.displayName;var u=e__namespace.forwardRef(({className:o,...i},s)=>e__namespace.createElement(t__namespace.Title,{ref:s,className:chunkI7EIMM7S_cjs.a("text-sm font-semibold",o),...i}));u.displayName=t__namespace.Title.displayName;var v=e__namespace.forwardRef(({className:o,...i},s)=>e__namespace.createElement(t__namespace.Description,{ref:s,className:chunkI7EIMM7S_cjs.a("text-sm opacity-90",o),...i}));v.displayName=t__namespace.Description.displayName;

exports.a = P;
exports.b = c;
exports.c = m;
exports.d = f;
exports.e = l;
exports.f = u;
exports.g = v;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-POTIKFBM.cjs.map