"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var t = require('react');
var e = require('@radix-ui/react-hover-card');

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

var f=e__namespace.Root,p=e__namespace.Trigger,s=t__namespace.forwardRef(({className:a,align:r="center",sideOffset:i=4,...d},n)=>t__namespace.createElement(e__namespace.Content,{ref:n,align:r,sideOffset:i,className:chunkI7EIMM7S_cjs.a("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...d}));s.displayName=e__namespace.Content.displayName;

exports.HoverCard = f;
exports.HoverCardContent = s;
exports.HoverCardTrigger = p;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=hover-card.cjs.map