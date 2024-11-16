"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var e = require('react');
var i = require('@radix-ui/react-checkbox');
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
var i__namespace = /*#__PURE__*/_interopNamespace(i);

var s=e__namespace.forwardRef(({className:t,...r},c)=>e__namespace.createElement(i__namespace.Root,{ref:c,className:chunkI7EIMM7S_cjs.a("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",t),...r},e__namespace.createElement(i__namespace.Indicator,{className:chunkI7EIMM7S_cjs.a("flex items-center justify-center text-current")},e__namespace.createElement(lucideReact.Check,{className:"h-4 w-4"}))));s.displayName=i__namespace.Root.displayName;

exports.Checkbox = s;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=checkbox.cjs.map