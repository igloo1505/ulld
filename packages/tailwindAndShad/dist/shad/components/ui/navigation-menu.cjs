'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var e = require('react');
var t = require('@radix-ui/react-navigation-menu');
var classVarianceAuthority = require('class-variance-authority');
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

var e__namespace = /*#__PURE__*/_interopNamespace(e);
var t__namespace = /*#__PURE__*/_interopNamespace(t);

var v=e__namespace.forwardRef(({className:i,children:a,...o},r)=>e__namespace.createElement(t__namespace.Root,{ref:r,className:chunkI7EIMM7S_cjs.a("relative z-10 flex max-w-max flex-1 items-center justify-center",i),...o},a,e__namespace.createElement(m,null)));v.displayName=t__namespace.Root.displayName;var f=e__namespace.forwardRef(({className:i,...a},o)=>e__namespace.createElement(t__namespace.List,{ref:o,className:chunkI7EIMM7S_cjs.a("group flex flex-1 list-none items-center justify-center space-x-1",i),...a}));f.displayName=t__namespace.List.displayName;var M=t__namespace.Item,u=classVarianceAuthority.cva("group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"),c=e__namespace.forwardRef(({className:i,children:a,...o},r)=>e__namespace.createElement(t__namespace.Trigger,{ref:r,className:chunkI7EIMM7S_cjs.a(u(),"group",i),...o},a," ",e__namespace.createElement(lucideReact.ChevronDown,{className:"relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180","aria-hidden":"true"})));c.displayName=t__namespace.Trigger.displayName;var g=e__namespace.forwardRef(({className:i,...a},o)=>e__namespace.createElement(t__namespace.Content,{ref:o,className:chunkI7EIMM7S_cjs.a("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",i),...a}));g.displayName=t__namespace.Content.displayName;var P=t__namespace.Link,m=e__namespace.forwardRef(({className:i,...a},o)=>e__namespace.createElement("div",{className:chunkI7EIMM7S_cjs.a("absolute left-0 top-full flex justify-center")},e__namespace.createElement(t__namespace.Viewport,{className:chunkI7EIMM7S_cjs.a("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",i),ref:o,...a})));m.displayName=t__namespace.Viewport.displayName;var p=e__namespace.forwardRef(({className:i,...a},o)=>e__namespace.createElement(t__namespace.Indicator,{ref:o,className:chunkI7EIMM7S_cjs.a("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",i),...a},e__namespace.createElement("div",{className:"relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"})));p.displayName=t__namespace.Indicator.displayName;

exports.NavigationMenu = v;
exports.NavigationMenuContent = g;
exports.NavigationMenuIndicator = p;
exports.NavigationMenuItem = M;
exports.NavigationMenuLink = P;
exports.NavigationMenuList = f;
exports.NavigationMenuTrigger = c;
exports.NavigationMenuViewport = m;
exports.navigationMenuTriggerStyle = u;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=navigation-menu.cjs.map