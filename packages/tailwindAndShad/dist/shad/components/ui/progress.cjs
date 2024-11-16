"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var r = require('react');
var e = require('@radix-ui/react-progress');

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

var r__namespace = /*#__PURE__*/_interopNamespace(r);
var e__namespace = /*#__PURE__*/_interopNamespace(e);

var l=r__namespace.forwardRef(({className:t,value:i,...s},a)=>r__namespace.createElement(e__namespace.Root,{ref:a,className:chunkI7EIMM7S_cjs.a("relative h-4 w-full overflow-hidden rounded-full bg-secondary",t),...s},r__namespace.createElement(e__namespace.Indicator,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(i||0)}%)`}})));l.displayName=e__namespace.Root.displayName;

exports.Progress = l;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=progress.cjs.map