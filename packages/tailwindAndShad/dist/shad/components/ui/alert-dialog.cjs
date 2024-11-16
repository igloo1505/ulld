"use client"
'use strict';

var chunk7K4QW7ZK_cjs = require('../../../chunk-7K4QW7ZK.cjs');
var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var t = require('react');
var e = require('@radix-ui/react-alert-dialog');

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

var v=e__namespace.Root,P=e__namespace.Trigger,m=e__namespace.Portal,s=t__namespace.forwardRef(({className:i,...a},o)=>t__namespace.createElement(e__namespace.Overlay,{className:chunkI7EIMM7S_cjs.a("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",i),...a,ref:o}));s.displayName=e__namespace.Overlay.displayName;var n=t__namespace.forwardRef(({className:i,...a},o)=>t__namespace.createElement(m,null,t__namespace.createElement(s,null),t__namespace.createElement(e__namespace.Content,{ref:o,className:chunkI7EIMM7S_cjs.a("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",i),...a})));n.displayName=e__namespace.Content.displayName;var c=({className:i,...a})=>t__namespace.createElement("div",{className:chunkI7EIMM7S_cjs.a("flex flex-col space-y-2 text-center sm:text-left",i),...a});c.displayName="AlertDialogHeader";var f=({className:i,...a})=>t__namespace.createElement("div",{className:chunkI7EIMM7S_cjs.a("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",i),...a});f.displayName="AlertDialogFooter";var d=t__namespace.forwardRef(({className:i,...a},o)=>t__namespace.createElement(e__namespace.Title,{ref:o,className:chunkI7EIMM7S_cjs.a("text-lg font-semibold",i),...a}));d.displayName=e__namespace.Title.displayName;var p=t__namespace.forwardRef(({className:i,...a},o)=>t__namespace.createElement(e__namespace.Description,{ref:o,className:chunkI7EIMM7S_cjs.a("text-sm text-muted-foreground",i),...a}));p.displayName=e__namespace.Description.displayName;var g=t__namespace.forwardRef(({className:i,...a},o)=>t__namespace.createElement(e__namespace.Action,{ref:o,className:chunkI7EIMM7S_cjs.a(chunk7K4QW7ZK_cjs.a(),i),...a}));g.displayName=e__namespace.Action.displayName;var A=t__namespace.forwardRef(({className:i,...a},o)=>t__namespace.createElement(e__namespace.Cancel,{ref:o,className:chunkI7EIMM7S_cjs.a(chunk7K4QW7ZK_cjs.a({variant:"outline"}),"mt-2 sm:mt-0",i),...a}));A.displayName=e__namespace.Cancel.displayName;

exports.AlertDialog = v;
exports.AlertDialogAction = g;
exports.AlertDialogCancel = A;
exports.AlertDialogContent = n;
exports.AlertDialogDescription = p;
exports.AlertDialogFooter = f;
exports.AlertDialogHeader = c;
exports.AlertDialogOverlay = s;
exports.AlertDialogPortal = m;
exports.AlertDialogTitle = d;
exports.AlertDialogTrigger = P;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=alert-dialog.cjs.map