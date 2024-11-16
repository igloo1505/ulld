"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var e = require('react');
var r = require('@radix-ui/react-scroll-area');

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
var r__namespace = /*#__PURE__*/_interopNamespace(r);

var m=e__namespace.forwardRef(({className:o,children:l,...i},a)=>e__namespace.createElement(r__namespace.Root,{ref:a,className:chunkI7EIMM7S_cjs.a("relative overflow-hidden",o),...i},e__namespace.createElement(r__namespace.Viewport,{className:"h-full w-full rounded-[inherit]"},l),e__namespace.createElement(c,null),e__namespace.createElement(r__namespace.Corner,null)));m.displayName=r__namespace.Root.displayName;var c=e__namespace.forwardRef(({className:o,orientation:l="vertical",...i},a)=>e__namespace.createElement(r__namespace.ScrollAreaScrollbar,{ref:a,orientation:l,className:chunkI7EIMM7S_cjs.a("flex touch-none select-none transition-colors",l==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-[1px]",l==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",o),...i},e__namespace.createElement(r__namespace.ScrollAreaThumb,{className:"relative flex-1 rounded-full bg-border"})));c.displayName=r__namespace.ScrollAreaScrollbar.displayName;

exports.ScrollArea = m;
exports.ScrollBar = c;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=scroll-area.cjs.map