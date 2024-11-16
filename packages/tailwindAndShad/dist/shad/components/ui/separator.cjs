"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var o = require('react');
var e = require('@radix-ui/react-separator');

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

var o__namespace = /*#__PURE__*/_interopNamespace(o);
var e__namespace = /*#__PURE__*/_interopNamespace(e);

var f=o__namespace.forwardRef(({className:a,orientation:r="horizontal",decorative:i=!0,...p},m)=>o__namespace.createElement(e__namespace.Root,{ref:m,decorative:i,orientation:r,className:chunkI7EIMM7S_cjs.a("shrink-0 bg-border flex ulld-separator",r==="horizontal"?"h-[1px] flex-row w-auto":"h-auto flex-col w-[1px]",a),...p}));f.displayName=e__namespace.Root.displayName;

exports.Separator = f;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=separator.cjs.map