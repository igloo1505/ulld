'use strict';

var chunkI7EIMM7S_cjs = require('./chunk-I7EIMM7S.cjs');
var e = require('react');
var t = require('@radix-ui/react-toggle');
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
var t__namespace = /*#__PURE__*/_interopNamespace(t);

var g=classVarianceAuthority.cva("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}}),l=e__namespace.forwardRef(({className:i,variant:r,size:a,...n},s)=>e__namespace.createElement(t__namespace.Root,{ref:s,className:chunkI7EIMM7S_cjs.a(g({variant:r,size:a,className:i})),...n}));l.displayName=t__namespace.Root.displayName;

exports.a = g;
exports.b = l;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-OJFR2SWX.cjs.map