"use client"
'use strict';

var chunkI7EIMM7S_cjs = require('../../../chunk-I7EIMM7S.cjs');
require('../../../chunk-GX4GL4KK.cjs');
var i = require('react');
var e = require('@radix-ui/react-accordion');
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

var i__namespace = /*#__PURE__*/_interopNamespace(i);
var e__namespace = /*#__PURE__*/_interopNamespace(e);

var l=e__namespace.Root,m=i__namespace.forwardRef(({className:o,...t},r)=>i__namespace.createElement(e__namespace.Item,{ref:r,className:chunkI7EIMM7S_cjs.a("border-b",o),...t}));m.displayName="AccordionItem";var d=i__namespace.forwardRef(({className:o,children:t,...r},c)=>i__namespace.createElement(e__namespace.Header,{className:"flex"},i__namespace.createElement(e__namespace.Trigger,{ref:c,className:chunkI7EIMM7S_cjs.a("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",o),...r},t,i__namespace.createElement(lucideReact.ChevronDown,{className:"h-4 w-4 shrink-0 transition-transform duration-200"}))));d.displayName=e__namespace.Trigger.displayName;var s=i__namespace.forwardRef(({className:o,children:t,...r},c)=>i__namespace.createElement(e__namespace.Content,{ref:c,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r},i__namespace.createElement("div",{className:chunkI7EIMM7S_cjs.a("pb-4 pt-0",o)},t)));s.displayName=e__namespace.Content.displayName;

exports.Accordion = l;
exports.AccordionContent = s;
exports.AccordionItem = m;
exports.AccordionTrigger = d;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=accordion.cjs.map