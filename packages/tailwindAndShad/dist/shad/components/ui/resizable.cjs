"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var lucideReact = require('lucide-react');
var e = require('react-resizable-panels');

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

var s=({className:a,...i})=>React.createElement(e__namespace.PanelGroup,{className:chunkI7EIMM7S_cjs.a("flex h-full w-full data-[panel-group-direction=vertical]:flex-col",a),...i}),c=e__namespace.Panel,p=({withHandle:a,className:i,...r})=>React.createElement(e__namespace.PanelResizeHandle,{className:chunkI7EIMM7S_cjs.a("relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",i),...r},a&&React.createElement("div",{className:"z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border"},React.createElement(lucideReact.GripVertical,{className:"h-2.5 w-2.5"})));

exports.ResizableHandle = p;
exports.ResizablePanel = c;
exports.ResizablePanelGroup = s;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=resizable.cjs.map