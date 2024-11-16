"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var i = require('react');
var e = require('@radix-ui/react-radio-group');
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

var i__namespace = /*#__PURE__*/_interopNamespace(i);
var e__namespace = /*#__PURE__*/_interopNamespace(e);

var p=i__namespace.forwardRef(({className:o,...r},t)=>i__namespace.createElement(e__namespace.Root,{className:chunkI7EIMM7S_cjs.a("grid gap-2",o),...r,ref:t}));p.displayName=e__namespace.Root.displayName;var s=i__namespace.forwardRef(({className:o,...r},t)=>i__namespace.createElement(e__namespace.Item,{ref:t,className:chunkI7EIMM7S_cjs.a("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",o),...r},i__namespace.createElement(e__namespace.Indicator,{className:"flex items-center justify-center"},i__namespace.createElement(lucideReact.Circle,{className:"h-2.5 w-2.5 fill-current text-current"}))));s.displayName=e__namespace.Item.displayName;

exports.RadioGroup = p;
exports.RadioGroupItem = s;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=radio-group.cjs.map