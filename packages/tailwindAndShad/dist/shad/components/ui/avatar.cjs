"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var e = require('react');
var a = require('@radix-ui/react-avatar');

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
var a__namespace = /*#__PURE__*/_interopNamespace(a);

var m=e__namespace.forwardRef(({className:t,...i},r)=>e__namespace.createElement(a__namespace.Root,{ref:r,className:chunkI7EIMM7S_cjs.a("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...i}));m.displayName=a__namespace.Root.displayName;var l=e__namespace.forwardRef(({className:t,...i},r)=>e__namespace.createElement(a__namespace.Image,{ref:r,className:chunkI7EIMM7S_cjs.a("aspect-square h-full w-full",t),...i}));l.displayName=a__namespace.Image.displayName;var f=e__namespace.forwardRef(({className:t,...i},r)=>e__namespace.createElement(a__namespace.Fallback,{ref:r,className:chunkI7EIMM7S_cjs.a("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...i}));f.displayName=a__namespace.Fallback.displayName;

exports.Avatar = m;
exports.AvatarFallback = f;
exports.AvatarImage = l;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=avatar.cjs.map