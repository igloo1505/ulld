"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var i = require('react');
var e = require('@radix-ui/react-slider');

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

var a=i__namespace.forwardRef(({className:o,...t},l)=>i__namespace.createElement(e__namespace.Root,{ref:l,className:chunkI7EIMM7S_cjs.a("relative flex w-full touch-none select-none items-center",o),...t},i__namespace.createElement(e__namespace.Track,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"},i__namespace.createElement(e__namespace.Range,{className:"absolute h-full bg-primary"})),i__namespace.createElement(e__namespace.Thumb,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})));a.displayName=e__namespace.Root.displayName;

exports.Slider = a;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=slider.cjs.map