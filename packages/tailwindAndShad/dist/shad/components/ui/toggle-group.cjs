"use client"
'use strict';

var chunkOJFR2SWX_cjs = require('../../../chunk-OJFR2SWX.cjs');
var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var e = require('react');
var t = require('@radix-ui/react-toggle-group');

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
var t__namespace = /*#__PURE__*/_interopNamespace(t);

var s=e__namespace.createContext({size:"default",variant:"default"}),f=e__namespace.forwardRef(({className:o,variant:r,size:i,children:a,...p},g)=>e__namespace.createElement(t__namespace.Root,{ref:g,className:chunkI7EIMM7S_cjs.a("flex items-center justify-center gap-1",o),...p},e__namespace.createElement(s.Provider,{value:{variant:r,size:i}},a)));f.displayName=t__namespace.Root.displayName;var u=e__namespace.forwardRef(({className:o,children:r,variant:i,size:a,...p},g)=>{let l=e__namespace.useContext(s);return e__namespace.createElement(t__namespace.Item,{ref:g,className:chunkI7EIMM7S_cjs.a(chunkOJFR2SWX_cjs.a({variant:l.variant||i,size:l.size||a}),o),...p},r)});u.displayName=t__namespace.Item.displayName;

exports.ToggleGroup = f;
exports.ToggleGroupItem = u;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=toggle-group.cjs.map