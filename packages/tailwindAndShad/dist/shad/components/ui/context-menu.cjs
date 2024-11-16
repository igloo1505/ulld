"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var t = require('react');
var e = require('@radix-ui/react-context-menu');
var lucideReact = require('lucide-react');

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

var y=e__namespace.Root,g=e__namespace.Trigger,h=e__namespace.Group,N=e__namespace.Portal,I=e__namespace.Sub,S=e__namespace.RadioGroup,c=t__namespace.forwardRef(({className:o,inset:n,children:i,...r},m)=>t__namespace.createElement(e__namespace.SubTrigger,{ref:m,className:chunkI7EIMM7S_cjs.a("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",n&&"pl-8",o),...r},i,t__namespace.createElement(lucideReact.ChevronRight,{className:"ml-auto h-4 w-4"})));c.displayName=e__namespace.SubTrigger.displayName;var l=t__namespace.forwardRef(({className:o,...n},i)=>t__namespace.createElement(e__namespace.SubContent,{ref:i,className:chunkI7EIMM7S_cjs.a("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...n}));l.displayName=e__namespace.SubContent.displayName;var p=t__namespace.forwardRef(({className:o,...n},i)=>t__namespace.createElement(e__namespace.Portal,null,t__namespace.createElement(e__namespace.Content,{ref:i,className:chunkI7EIMM7S_cjs.a("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",o),...n})));p.displayName=e__namespace.Content.displayName;var f=t__namespace.forwardRef(({className:o,inset:n,...i},r)=>t__namespace.createElement(e__namespace.Item,{ref:r,className:chunkI7EIMM7S_cjs.a("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n&&"pl-8",o),...i}));f.displayName=e__namespace.Item.displayName;var x=t__namespace.forwardRef(({className:o,children:n,checked:i,...r},m)=>t__namespace.createElement(e__namespace.CheckboxItem,{ref:m,className:chunkI7EIMM7S_cjs.a("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),checked:i,...r},t__namespace.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},t__namespace.createElement(e__namespace.ItemIndicator,null,t__namespace.createElement(lucideReact.Check,{className:"h-4 w-4"}))),n));x.displayName=e__namespace.CheckboxItem.displayName;var C=t__namespace.forwardRef(({className:o,children:n,...i},r)=>t__namespace.createElement(e__namespace.RadioItem,{ref:r,className:chunkI7EIMM7S_cjs.a("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",o),...i},t__namespace.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},t__namespace.createElement(e__namespace.ItemIndicator,null,t__namespace.createElement(lucideReact.Circle,{className:"h-2 w-2 fill-current"}))),n));C.displayName=e__namespace.RadioItem.displayName;var M=t__namespace.forwardRef(({className:o,inset:n,...i},r)=>t__namespace.createElement(e__namespace.Label,{ref:r,className:chunkI7EIMM7S_cjs.a("px-2 py-1.5 text-sm font-semibold text-foreground",n&&"pl-8",o),...i}));M.displayName=e__namespace.Label.displayName;var v=t__namespace.forwardRef(({className:o,...n},i)=>t__namespace.createElement(e__namespace.Separator,{ref:i,className:chunkI7EIMM7S_cjs.a("-mx-1 my-1 h-px bg-border",o),...n}));v.displayName=e__namespace.Separator.displayName;var P=({className:o,...n})=>t__namespace.createElement("span",{className:chunkI7EIMM7S_cjs.a("ml-auto text-xs tracking-widest text-muted-foreground",o),...n});P.displayName="ContextMenuShortcut";

exports.ContextMenu = y;
exports.ContextMenuCheckboxItem = x;
exports.ContextMenuContent = p;
exports.ContextMenuGroup = h;
exports.ContextMenuItem = f;
exports.ContextMenuLabel = M;
exports.ContextMenuPortal = N;
exports.ContextMenuRadioGroup = S;
exports.ContextMenuRadioItem = C;
exports.ContextMenuSeparator = v;
exports.ContextMenuShortcut = P;
exports.ContextMenuSub = I;
exports.ContextMenuSubContent = l;
exports.ContextMenuSubTrigger = c;
exports.ContextMenuTrigger = g;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=context-menu.cjs.map