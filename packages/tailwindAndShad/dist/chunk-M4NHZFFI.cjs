'use strict';

var chunkI7EIMM7S_cjs = require('./chunk-I7EIMM7S.cjs');
var o = require('react');
var e = require('@radix-ui/react-popover');

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

var P=e__namespace.Root,f=e__namespace.Trigger,m=o__namespace.forwardRef(({className:t,align:i="center",sideOffset:a=4,...n},p)=>o__namespace.createElement(e__namespace.Content,{ref:p,align:i,sideOffset:a,className:chunkI7EIMM7S_cjs.a("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})),d=o__namespace.forwardRef((t,i)=>o__namespace.createElement(e__namespace.Portal,null,o__namespace.createElement(m,{...t,ref:i})));d.displayName=e__namespace.Content.displayName;

exports.a = P;
exports.b = f;
exports.c = m;
exports.d = d;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-M4NHZFFI.cjs.map