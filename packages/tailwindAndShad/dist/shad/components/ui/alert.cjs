'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var e = require('react');
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

var n=classVarianceAuthority.cva("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),o=e__namespace.forwardRef(({className:t,variant:r,...a},s)=>e__namespace.createElement("div",{ref:s,role:"alert",className:chunkI7EIMM7S_cjs.a(n({variant:r}),t),...a}));o.displayName="Alert";var d=e__namespace.forwardRef(({className:t,...r},a)=>e__namespace.createElement("h5",{ref:a,className:chunkI7EIMM7S_cjs.a("mb-1 font-medium leading-none tracking-tight",t),...r}));d.displayName="AlertTitle";var c=e__namespace.forwardRef(({className:t,...r},a)=>e__namespace.createElement("div",{ref:a,className:chunkI7EIMM7S_cjs.a("text-sm [&_p]:leading-relaxed",t),...r}));c.displayName="AlertDescription";

exports.Alert = o;
exports.AlertDescription = c;
exports.AlertTitle = d;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=alert.cjs.map