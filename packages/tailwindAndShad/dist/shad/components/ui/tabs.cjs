"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var i = require('react');
var e = require('@radix-ui/react-tabs');

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

var c=e__namespace.Root,o=i__namespace.forwardRef(({className:t,...a},s)=>i__namespace.createElement(e__namespace.List,{ref:s,className:chunkI7EIMM7S_cjs.a("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",t),...a}));o.displayName=e__namespace.List.displayName;var n=i__namespace.forwardRef(({className:t,...a},s)=>i__namespace.createElement(e__namespace.Trigger,{ref:s,className:chunkI7EIMM7S_cjs.a("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:@group-[.tabGroupPrimary]/tabGroup:bg-primary data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...a}));n.displayName=e__namespace.Trigger.displayName;var m=i__namespace.forwardRef(({className:t,...a},s)=>i__namespace.createElement(e__namespace.Content,{ref:s,className:chunkI7EIMM7S_cjs.a("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...a}));m.displayName=e__namespace.Content.displayName;

exports.Tabs = c;
exports.TabsContent = m;
exports.TabsList = o;
exports.TabsTrigger = n;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=tabs.cjs.map