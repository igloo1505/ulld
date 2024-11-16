"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var t = require('react');
var e = require('@radix-ui/react-menubar');
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

var C=e__namespace.Menu,I=e__namespace.Group,w=e__namespace.Portal,S=e__namespace.Sub,T=e__namespace.RadioGroup,f=t__namespace.forwardRef(({className:a,...r},i)=>t__namespace.createElement(e__namespace.Root,{ref:i,className:chunkI7EIMM7S_cjs.a("flex h-10 items-center space-x-1 rounded-md border bg-background p-1",a),...r}));f.displayName=e__namespace.Root.displayName;var p=t__namespace.forwardRef(({className:a,...r},i)=>t__namespace.createElement(e__namespace.Trigger,{ref:i,className:chunkI7EIMM7S_cjs.a("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",a),...r}));p.displayName=e__namespace.Trigger.displayName;var l=t__namespace.forwardRef(({className:a,inset:r,children:i,...n},m)=>t__namespace.createElement(e__namespace.SubTrigger,{ref:m,className:chunkI7EIMM7S_cjs.a("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",r&&"pl-8",a),...n},i,t__namespace.createElement(lucideReact.ChevronRight,{className:"ml-auto h-4 w-4"})));l.displayName=e__namespace.SubTrigger.displayName;var b=t__namespace.forwardRef(({className:a,...r},i)=>t__namespace.createElement(e__namespace.SubContent,{ref:i,className:chunkI7EIMM7S_cjs.a("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...r}));b.displayName=e__namespace.SubContent.displayName;var M=t__namespace.forwardRef(({className:a,align:r="start",alignOffset:i=-4,sideOffset:n=8,...m},s)=>t__namespace.createElement(e__namespace.Portal,null,t__namespace.createElement(e__namespace.Content,{ref:s,align:r,alignOffset:i,sideOffset:n,className:chunkI7EIMM7S_cjs.a("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...m})));M.displayName=e__namespace.Content.displayName;var R=t__namespace.forwardRef(({className:a,inset:r,...i},n)=>t__namespace.createElement(e__namespace.Item,{ref:n,className:chunkI7EIMM7S_cjs.a("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r&&"pl-8",a),...i}));R.displayName=e__namespace.Item.displayName;var P=t__namespace.forwardRef(({className:a,children:r,checked:i,...n},m)=>t__namespace.createElement(e__namespace.CheckboxItem,{ref:m,className:chunkI7EIMM7S_cjs.a("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:i,...n},t__namespace.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},t__namespace.createElement(e__namespace.ItemIndicator,null,t__namespace.createElement(lucideReact.Check,{className:"h-4 w-4"}))),r));P.displayName=e__namespace.CheckboxItem.displayName;var v=t__namespace.forwardRef(({className:a,children:r,...i},n)=>t__namespace.createElement(e__namespace.RadioItem,{ref:n,className:chunkI7EIMM7S_cjs.a("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...i},t__namespace.createElement("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center"},t__namespace.createElement(e__namespace.ItemIndicator,null,t__namespace.createElement(lucideReact.Circle,{className:"h-2 w-2 fill-current"}))),r));v.displayName=e__namespace.RadioItem.displayName;var y=t__namespace.forwardRef(({className:a,inset:r,...i},n)=>t__namespace.createElement(e__namespace.Label,{ref:n,className:chunkI7EIMM7S_cjs.a("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",a),...i}));y.displayName=e__namespace.Label.displayName;var g=t__namespace.forwardRef(({className:a,...r},i)=>t__namespace.createElement(e__namespace.Separator,{ref:i,className:chunkI7EIMM7S_cjs.a("-mx-1 my-1 h-px bg-muted",a),...r}));g.displayName=e__namespace.Separator.displayName;var x=({className:a,...r})=>t__namespace.createElement("span",{className:chunkI7EIMM7S_cjs.a("ml-auto text-xs tracking-widest text-muted-foreground",a),...r});x.displayname="MenubarShortcut";

exports.Menubar = f;
exports.MenubarCheckboxItem = P;
exports.MenubarContent = M;
exports.MenubarGroup = I;
exports.MenubarItem = R;
exports.MenubarLabel = y;
exports.MenubarMenu = C;
exports.MenubarPortal = w;
exports.MenubarRadioGroup = T;
exports.MenubarRadioItem = v;
exports.MenubarSeparator = g;
exports.MenubarShortcut = x;
exports.MenubarSub = S;
exports.MenubarSubContent = b;
exports.MenubarSubTrigger = l;
exports.MenubarTrigger = p;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=menubar.cjs.map