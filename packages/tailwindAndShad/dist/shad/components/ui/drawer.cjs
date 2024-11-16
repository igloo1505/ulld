"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var e = require('react');
var vaul = require('vaul');

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

var m=({shouldScaleBackground:t=!0,...r})=>e__namespace.createElement(vaul.Drawer.Root,{shouldScaleBackground:t,...r});m.displayName="Drawer";var y=vaul.Drawer.Trigger,l=vaul.Drawer.Portal,v=vaul.Drawer.Close,n=e__namespace.forwardRef(({className:t,...r},o)=>e__namespace.createElement(vaul.Drawer.Overlay,{ref:o,className:chunkI7EIMM7S_cjs.a("fixed inset-0 z-50 bg-black/80",t),...r}));n.displayName=vaul.Drawer.Overlay.displayName;var c=e__namespace.forwardRef(({className:t,children:r,...o},s)=>e__namespace.createElement(l,null,e__namespace.createElement(n,null),e__namespace.createElement(vaul.Drawer.Content,{ref:s,className:chunkI7EIMM7S_cjs.a("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",t),...o},e__namespace.createElement("div",{className:"mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"}),r)));c.displayName="DrawerContent";var p=({className:t,...r})=>e__namespace.createElement("div",{className:chunkI7EIMM7S_cjs.a("grid gap-1.5 p-4 text-center sm:text-left",t),...r});p.displayName="DrawerHeader";var f=({className:t,...r})=>e__namespace.createElement("div",{className:chunkI7EIMM7S_cjs.a("mt-auto flex flex-col gap-2 p-4",t),...r});f.displayName="DrawerFooter";var d=e__namespace.forwardRef(({className:t,...r},o)=>e__namespace.createElement(vaul.Drawer.Title,{ref:o,className:chunkI7EIMM7S_cjs.a("text-lg font-semibold leading-none tracking-tight",t),...r}));d.displayName=vaul.Drawer.Title.displayName;var D=e__namespace.forwardRef(({className:t,...r},o)=>e__namespace.createElement(vaul.Drawer.Description,{ref:o,className:chunkI7EIMM7S_cjs.a("text-sm text-muted-foreground",t),...r}));D.displayName=vaul.Drawer.Description.displayName;

exports.Drawer = m;
exports.DrawerClose = v;
exports.DrawerContent = c;
exports.DrawerDescription = D;
exports.DrawerFooter = f;
exports.DrawerHeader = p;
exports.DrawerOverlay = n;
exports.DrawerPortal = l;
exports.DrawerTitle = d;
exports.DrawerTrigger = y;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=drawer.cjs.map