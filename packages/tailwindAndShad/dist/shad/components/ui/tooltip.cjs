"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var o = require('react');
var t = require('@radix-ui/react-tooltip');

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
var t__namespace = /*#__PURE__*/_interopNamespace(t);

var l=t__namespace.Provider,n=t__namespace.Root,s=t__namespace.Trigger,m=o__namespace.forwardRef(({className:e,sideOffset:r=4,...a},d)=>o__namespace.createElement(t__namespace.Portal,null,o__namespace.createElement(t__namespace.Content,{ref:d,sideOffset:r,className:chunkI7EIMM7S_cjs.a("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...a})));m.displayName=t__namespace.Content.displayName;

exports.Tooltip = n;
exports.TooltipContent = m;
exports.TooltipProvider = l;
exports.TooltipTrigger = s;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=tooltip.cjs.map