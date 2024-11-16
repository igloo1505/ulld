'use strict';

var chunkI7EIMM7S_cjs = require('./chunk-I7EIMM7S.cjs');
var e = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');

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

var c=classVarianceAuthority.cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),f=e__namespace.forwardRef(({className:r,variant:o,size:n,asChild:i=!1,...a},s)=>e__namespace.createElement(i?reactSlot.Slot:"button",{className:chunkI7EIMM7S_cjs.a(c({variant:o,size:n,className:r})),ref:s,...a}));f.displayName="Button";

exports.a = c;
exports.b = f;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-7K4QW7ZK.cjs.map